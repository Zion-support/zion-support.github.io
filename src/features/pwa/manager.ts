import { useState, useEffect } from 'react';

interface PWAInstallPrompt {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface PWAManagerState {
  isInstallable: boolean;
  isInstalled: boolean;
  isOffline: boolean;
  updateAvailable: boolean;
  installPrompt: PWAInstallPrompt | null;
}

export class PWAManager {
  private installPrompt: PWAInstallPrompt | null = null;
  private state: PWAManagerState = {
    isInstallable: false,
    isInstalled: false,
    isOffline: !navigator.onLine,
    updateAvailable: false,
    installPrompt: null,
  };
  
  private listeners: Array<(state: PWAManagerState) => void> = [];
  
  constructor() {
    this.initializePWA();
    this.setupEventListeners();
    this.registerServiceWorker();
  }
  
  private initializePWA(): void {
    // Check if app is already installed
    this.state.isInstalled = window.matchMedia('(display-mode: standalone)').matches ||
                            (window.navigator as any).standalone ||
                            document.referrer.includes('android-app://');
    
    // Check if app is installable
    this.checkInstallability();
  }
  
  private setupEventListeners(): void {
    // Install prompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.installPrompt = e as any;
      this.state.isInstallable = true;
      this.state.installPrompt = this.installPrompt;
      this.notifyListeners();
    });
    
    // App installed event
    window.addEventListener('appinstalled', () => {
      this.state.isInstalled = true;
      this.state.isInstallable = false;
      this.installPrompt = null;
      this.notifyListeners();
      console.log('🎉 PWA was installed successfully!');
    });
    
    // Online/Offline events
    window.addEventListener('online', () => {
      this.state.isOffline = false;
      this.notifyListeners();
    });
    
    window.addEventListener('offline', () => {
      this.state.isOffline = true;
      this.notifyListeners();
    });
    
    // Service Worker update events
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
          this.state.updateAvailable = true;
          this.notifyListeners();
        }
      });
    }
  }
  
  private async registerServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('🔧 Service Worker registered:', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                this.state.updateAvailable = true;
                this.notifyListeners();
              }
            });
          }
        });
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }
  
  private checkInstallability(): void {
    // Check if app meets PWA criteria
    const hasManifest = document.querySelector('link[rel="manifest"]') !== null;
    const hasServiceWorker = 'serviceWorker' in navigator;
    const isHTTPS = location.protocol === 'https:' || location.hostname === 'localhost';
    
    this.state.isInstallable = hasManifest && hasServiceWorker && isHTTPS && !this.state.isInstalled;
    this.notifyListeners();
  }
  
  public async installApp(): Promise<boolean> {
    if (!this.installPrompt) {
      console.warn('App is not installable');
      return false;
    }
    
    try {
      await this.installPrompt.prompt();
      const choiceResult = await this.installPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        return true;
      } else {
        console.log('User dismissed the install prompt');
        return false;
      }
    } catch (error) {
      console.error('Failed to install app:', error);
      return false;
    }
  }
  
  public async updateApp(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          window.location.reload();
        }
      } catch (error) {
        console.error('Failed to update app:', error);
      }
    }
  }
  
  public addStateListener(listener: (state: PWAManagerState) => void): void {
    this.listeners.push(listener);
  }
  
  public removeStateListener(listener: (state: PWAManagerState) => void): void {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
  
  private notifyListeners(): void {
    this.listeners.forEach(listener => {
      try {
        listener({ ...this.state });
      } catch (error) {
        console.error('Error in PWA state listener:', error);
      }
    });
  }
  
  public getState(): PWAManagerState {
    return { ...this.state };
  }
  
  public async shareContent(data: ShareData): Promise<boolean> {
    if (navigator.share) {
      try {
        await navigator.share(data);
        return true;
      } catch (error) {
        console.error('Failed to share content:', error);
        return false;
      }
    }
    return false;
  }
  
  public async addToHomeScreen(): Promise<boolean> {
    // For iOS Safari
    if (this.isIOS()) {
      alert('To add this app to your home screen, tap the Share button and then "Add to Home Screen".');
      return true;
    }
    
    // For other browsers, try the install prompt
    return await this.installApp();
  }
  
  private isIOS(): boolean {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }
}

// React Hook for PWA Management
export const usePWA = () => {
  const [pwaManager] = useState(() => new PWAManager());
  const [state, setState] = useState<PWAManagerState>(pwaManager.getState());
  
  useEffect(() => {
    const updateState = (newState: PWAManagerState) => {
      setState(newState);
    };
    
    pwaManager.addStateListener(updateState);
    
    return () => {
      pwaManager.removeStateListener(updateState);
    };
  }, [pwaManager]);
  
  const installApp = useCallback(async () => {
    return await pwaManager.installApp();
  }, [pwaManager]);
  
  const updateApp = useCallback(async () => {
    await pwaManager.updateApp();
  }, [pwaManager]);
  
  const shareContent = useCallback(async (data: ShareData) => {
    return await pwaManager.shareContent(data);
  }, [pwaManager]);
  
  const addToHomeScreen = useCallback(async () => {
    return await pwaManager.addToHomeScreen();
  }, [pwaManager]);
  
  return {
    state,
    installApp,
    updateApp,
    shareContent,
    addToHomeScreen,
  };
};
