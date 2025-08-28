import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  WifiOff, 
  Battery, 
  BatteryCharging,
  Volume2,
  VolumeX,
  RotateCcw,
  Settings,
  X,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';

interface MobileSettings {
  touchOptimized: boolean;
  gestureNavigation: boolean;
  hapticFeedback: boolean;
  batteryOptimization: boolean;
  offlineMode: boolean;
  adaptiveLayout: boolean;
  fastScrolling: boolean;
  imageOptimization: boolean;
}

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  connection: 'fast' | 'slow' | 'offline';
  battery: number;
  isCharging: boolean;
  screenSize: { width: number; height: number };
  pixelRatio: number;
  touchSupport: boolean;
  memory: number;
}

interface MobileAnnouncement {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
}

const MobileExperienceEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<MobileSettings>(() => {
    const saved = localStorage.getItem('mobile-settings');
    return saved ? JSON.parse(saved) : {
      touchOptimized: true,
      gestureNavigation: true,
      hapticFeedback: true,
      batteryOptimization: true,
      offlineMode: false,
      adaptiveLayout: true,
      fastScrolling: true,
      imageOptimization: true
    };
  });
  
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: 'desktop',
    orientation: 'landscape',
    connection: 'fast',
    battery: 100,
    isCharging: false,
    screenSize: { width: 1920, height: 1080 },
    pixelRatio: 1,
    touchSupport: false,
    memory: 0
  });
  
  const [announcements, setAnnouncements] = useState<MobileAnnouncement[]>([]);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<MobileAnnouncement | null>(null);

  // Detect device type and capabilities
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      const screen = window.screen;
      const connection = (navigator as any).connection;
      
      // Device type detection
      let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        type = screen.width < 768 ? 'mobile' : 'tablet';
      }
      
      // Orientation detection
      const orientation = screen.width > screen.height ? 'landscape' : 'portrait';
      
      // Connection detection
      let connectionType: 'fast' | 'slow' | 'offline' = 'fast';
      if (connection) {
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          connectionType = 'slow';
        }
      }
      if (!navigator.onLine) {
        connectionType = 'offline';
      }
      
      // Battery detection
      let battery = 100;
      let isCharging = false;
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((batteryManager: any) => {
          battery = Math.round(batteryManager.level * 100);
          isCharging = batteryManager.charging;
          setDeviceInfo(prev => ({ ...prev, battery, isCharging }));
        });
      }
      
      // Screen info
      const screenSize = {
        width: screen.width,
        height: screen.height
      };
      
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Touch support
      const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Memory info
      const memory = (performance as any).memory ? 
        Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) : 0;
      
      setDeviceInfo({
        type,
        orientation,
        connection: connectionType,
        battery,
        isCharging,
        screenSize,
        pixelRatio,
        touchSupport,
        memory
      });
    };

    detectDevice();
    
    // Listen for orientation changes
    const handleOrientationChange = () => {
      setTimeout(detectDevice, 100);
    };
    
    // Listen for online/offline changes
    const handleOnlineStatusChange = () => {
      detectDevice();
    };
    
    // Listen for resize events
    const handleResize = () => {
      detectDevice();
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Apply mobile optimizations
  useEffect(() => {
    const body = document.body;
    
    // Touch optimization
    if (settings.touchOptimized && deviceInfo.touchSupport) {
      body.classList.add('touch-optimized');
      // Add touch-specific CSS variables
      document.documentElement.style.setProperty('--touch-target-size', '44px');
      document.documentElement.style.setProperty('--touch-spacing', '8px');
    } else {
      body.classList.remove('touch-optimized');
      document.documentElement.style.removeProperty('--touch-target-size');
      document.documentElement.style.removeProperty('--touch-spacing');
    }
    
    // Gesture navigation
    if (settings.gestureNavigation && deviceInfo.touchSupport) {
      body.classList.add('gesture-navigation');
    } else {
      body.classList.remove('gesture-navigation');
    }
    
    // Battery optimization
    if (settings.batteryOptimization && deviceInfo.battery < 20) {
      body.classList.add('battery-saver');
      // Reduce animations and effects
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
    } else {
      body.classList.remove('battery-saver');
      document.documentElement.style.removeProperty('--animation-duration');
    }
    
    // Offline mode
    if (settings.offlineMode) {
      body.classList.add('offline-mode');
    } else {
      body.classList.remove('offline-mode');
    }
    
    // Adaptive layout
    if (settings.adaptiveLayout) {
      body.classList.add('adaptive-layout');
    } else {
      body.classList.remove('adaptive-layout');
    }
    
    // Fast scrolling
    if (settings.fastScrolling) {
      body.classList.add('fast-scrolling');
    } else {
      body.classList.remove('fast-scrolling');
    }
    
    // Image optimization
    if (settings.imageOptimization) {
      body.classList.add('image-optimized');
    } else {
      body.classList.remove('image-optimized');
    }
    
    // Save settings
    localStorage.setItem('mobile-settings', JSON.stringify(settings));
  }, [settings, deviceInfo]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof MobileSettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    const settingNames = {
      touchOptimized: 'Touch optimization',
      gestureNavigation: 'Gesture navigation',
      hapticFeedback: 'Haptic feedback',
      batteryOptimization: 'Battery optimization',
      offlineMode: 'Offline mode',
      adaptiveLayout: 'Adaptive layout',
      fastScrolling: 'Fast scrolling',
      imageOptimization: 'Image optimization'
    };
    
    announce(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`);
  }, []);

  // Announce changes
  const announce = useCallback((message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const announcement: MobileAnnouncement = {
      id: Date.now().toString(),
      message,
      type,
      timestamp: new Date()
    };
    
    setAnnouncements(prev => [...prev, announcement]);
    setCurrentAnnouncement(announcement);
    
    setTimeout(() => setCurrentAnnouncement(null), 5000);
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(a => a.id !== announcement.id));
    }, 10000);
  }, []);

  // Reset settings
  const resetSettings = useCallback(() => {
    setSettings({
      touchOptimized: true,
      gestureNavigation: true,
      hapticFeedback: true,
      batteryOptimization: true,
      offlineMode: false,
      adaptiveLayout: true,
      fastScrolling: true,
      imageOptimization: true
    });
    announce('Mobile settings have been reset to defaults');
  }, [announce]);

  // Get device icon
  const getDeviceIcon = () => {
    switch (deviceInfo.type) {
      case 'mobile': return Smartphone;
      case 'tablet': return Tablet;
      default: return Monitor;
    }
  };

  // Get connection icon
  const getConnectionIcon = () => {
    switch (deviceInfo.connection) {
      case 'offline': return WifiOff;
      case 'slow': return Wifi;
      default: return Wifi;
    }
  };

  // Get battery icon
  const getBatteryIcon = () => {
    if (deviceInfo.isCharging) return BatteryCharging;
    if (deviceInfo.battery < 20) return Battery;
    return Battery;
  };

  // Get setting icon
  const getSettingIcon = (key: keyof MobileSettings) => {
    const icons = {
      touchOptimized: Smartphone,
      gestureNavigation: Smartphone,
      hapticFeedback: Smartphone,
      batteryOptimization: Battery,
      offlineMode: WifiOff,
      adaptiveLayout: Monitor,
      fastScrolling: Smartphone,
      imageOptimization: Smartphone
    };
    return icons[key];
  };

  // Get setting description
  const getSettingDescription = (key: keyof MobileSettings) => {
    const descriptions = {
      touchOptimized: 'Optimizes touch targets and spacing',
      gestureNavigation: 'Enables swipe gestures for navigation',
      hapticFeedback: 'Provides tactile feedback on touch',
      batteryOptimization: 'Reduces power consumption',
      offlineMode: 'Enables offline functionality',
      adaptiveLayout: 'Adjusts layout for device orientation',
      fastScrolling: 'Optimizes scrolling performance',
      imageOptimization: 'Reduces image quality for performance'
    };
    return descriptions[key];
  };

  return (
    <>
      {/* Floating Mobile Button */}
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-zion-purple text-white rounded-full shadow-lg hover:bg-zion-purple-light transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-purple/30"
        aria-label="Open mobile experience settings"
        title="Mobile Experience Settings"
      >
        <Smartphone size={24} />
      </button>

      {/* Mobile Experience Panel */}
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-zion-slate-light text-zion-slate-dark rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-slate/20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-zion-purple rounded-lg">
                  <Smartphone size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Mobile Experience</h2>
                  <p className="text-sm text-zion-slate/70">
                    Optimize your experience for {deviceInfo.type}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-zion-slate/10 rounded-lg transition-colors"
                aria-label="Close mobile experience settings"
              >
                <X size={20} />
              </button>
            </div>

            {/* Device Information */}
            <div className="p-6 border-b border-zion-slate/20 bg-zion-slate/5">
              <h3 className="font-semibold mb-4 flex items-center">
                <Info size={16} className="mr-2 text-zion-purple" />
                Device Information
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  {React.createElement(getDeviceIcon(), { size: 16, className: "text-zion-purple" })}
                  <span className="capitalize">{deviceInfo.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Monitor size={16} className="text-zion-purple" />
                  <span className="capitalize">{deviceInfo.orientation}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {React.createElement(getConnectionIcon(), { size: 16, className: "text-zion-purple" })}
                  <span className="capitalize">{deviceInfo.connection}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {React.createElement(getBatteryIcon(), { size: 16, className: "text-zion-purple" })}
                  <span>{deviceInfo.battery}%</span>
                </div>
              </div>

            {/* Settings Grid */}
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(settings).map(([key, value]) => {
                  const settingKey = key as keyof MobileSettings;
                  const Icon = getSettingIcon(settingKey);
                  const description = getSettingDescription(settingKey);
                  
                  return (
                    <div
                      key={key}
                      className="p-4 border border-zion-slate/20 rounded-lg hover:border-zion-purple/50 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-zion-slate/10 rounded-lg">
                          <Icon size={20} className="text-zion-purple" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => handleSettingChange(settingKey, e.target.checked)}
                                className="sr-only"
                              />
                              <div className={`
                                w-11 h-6 bg-zion-slate/30 rounded-full transition-colors
                                ${value ? 'bg-zion-purple' : ''}
                              `}>
                                <div className={`
                                  w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out
                                  ${value ? 'translate-x-5' : 'translate-x-0.5'}
                                `} />
                              </div>
                            </label>
                          </div>
                          <p className="text-sm text-zion-slate/70">{description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zion-slate/20 bg-zion-slate/5">
              <div className="flex items-center justify-between">
                <button
                  onClick={resetSettings}
                  className="px-4 py-2 text-sm text-zion-slate/70 hover:text-zion-slate hover:bg-zion-slate/10 rounded-lg transition-colors"
                >
                  Reset to Defaults
                </button>
                <div className="text-xs text-zion-slate/50">
                  Optimized for {deviceInfo.type}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Announcements */}
      {currentAnnouncement && (
        <div
          className={`
            fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg
            transition-all duration-300 ease-in-out
            ${currentAnnouncement.type === 'success' ? 'bg-green-500 text-white' : ''}
            ${currentAnnouncement.type === 'warning' ? 'bg-yellow-500 text-white' : ''}
            ${currentAnnouncement.type === 'error' ? 'bg-red-500 text-white' : ''}
            ${currentAnnouncement.type === 'info' ? 'bg-zion-purple text-white' : ''}
          `}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center space-x-2">
            {currentAnnouncement.type === 'success' && <Check size={16} />}
            {currentAnnouncement.type === 'warning' && <AlertTriangle size={16} />}
            {currentAnnouncement.type === 'error' && <AlertTriangle size={16} />}
            {currentAnnouncement.type === 'info' && <Info size={16} />}
            <span>{currentAnnouncement.message}</span>
          </div>
        </div>
      )}

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {currentAnnouncement?.message}
      </div>
    </>
  );
};

export default MobileExperienceEnhancer;
