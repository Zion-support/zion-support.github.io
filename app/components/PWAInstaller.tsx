'use client';
import React, { useState, useEffect } from 'react';
import { Download, Smartphone, Monitor } from 'lucide-react';

interface PWAInstallerProps {
  onInstall?: () => void;
  onDismiss?: () => void;
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({ onInstall, onDismiss }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      if (onInstall) {
        onInstall();
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [onInstall]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (isInstalled || !showInstallPrompt) {
    return null;
  }

  return (
    <div className="pwa-installer-banner">
      <div className="installer-content">
        <div className="installer-icon">
          <Smartphone size={24} />
          <Monitor size={24} />
        </div>
        
        <div className="installer-text">
          <h3 className="installer-title">Install App</h3>
          <p className="installer-description">
            Install our app for a better experience with offline access and faster loading.
          </p>
        </div>
        
        <div className="installer-actions">
          <button
            onClick={handleInstallClick}
            className="install-button"
          >
            <Download size={16} />
            Install
          </button>
          
          <button
            onClick={handleDismiss}
            className="dismiss-button"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstaller;