import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Tablet, Monitor, Settings, X, CheckCircle, AlertTriangle, Info } from "lucide-react";

interface MobileSettings {
  touchOptimization: boolean;
  gestureSupport: boolean;
  pinchZoom: boolean;
  rotationSupport: boolean;
  hapticFeedback: boolean;
  adaptiveLayout: boolean;
  mobileNavigation: boolean;
  touchTargets: boolean;
  swipeGestures: boolean;
  orientationLock: "auto" | "portrait" | "landscape";
  fontSize: "small" | "medium" | "large";
  contrast: "normal" | "high" | "inverted";
  brightness: "auto" | "low" | "normal" | "high";
}

interface MobileOptimizerProps {
  enabled?: boolean;
  showPanel?: boolean;
  autoDetect?: boolean;
}

export const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ 
  enabled = true, 
  showPanel = false, 
  autoDetect = true 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "touch" | "display" | "performance" | "help">("general");
  const [settings, setSettings] = useState<MobileSettings>({
    touchOptimization: true,
    gestureSupport: true,
    pinchZoom: true,
    rotationSupport: true,
    hapticFeedback: true,
    adaptiveLayout: true,
    mobileNavigation: true,
    touchTargets: true,
    swipeGestures: true,
    orientationLock: "auto",
    fontSize: "medium",
    contrast: "normal",
    brightness: "auto"
  });
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    orientation: "portrait",
    screenSize: { width: 0, height: 0 },
    pixelRatio: 1,
    touchSupport: false,
    batteryLevel: 0,
    connectionType: "unknown"
  });
  const [isOptimizing, setIsOptimizing] = useState(false);

  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;
    
    setDeviceInfo({
      isMobile,
      isTablet,
      isDesktop,
      orientation: window.innerHeight > window.innerWidth ? "portrait" : "landscape",
      screenSize: { width: window.innerWidth, height: window.innerHeight },
      pixelRatio: window.devicePixelRatio || 1,
      touchSupport: 'ontouchstart' in window,
      batteryLevel: 0, // Would need battery API
      connectionType: "unknown" // Would need connection API
    });
  }, []);

  useEffect(() => {
    if (autoDetect) {
      detectDevice();
      window.addEventListener('resize', detectDevice);
      window.addEventListener('orientationchange', detectDevice);
      
      return () => {
        window.removeEventListener('resize', detectDevice);
        window.removeEventListener('orientationchange', detectDevice);
      };
    }
  }, [autoDetect, detectDevice]);

  const handleSettingChange = (key: keyof MobileSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const optimizeForMobile = async () => {
    setIsOptimizing(true);
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsOptimizing(false);
  };

  if (!enabled) return null;

  return (
    <>
      {showPanel && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <Settings className="h-5 w-5" />
          </button>
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Mobile Optimizer</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                <div className="text-sm text-gray-600">
                  <p>Device: {deviceInfo.isMobile ? 'Mobile' : deviceInfo.isTablet ? 'Tablet' : 'Desktop'}</p>
                  <p>Screen: {deviceInfo.screenSize.width}x{deviceInfo.screenSize.height}</p>
                  <p>Touch: {deviceInfo.touchSupport ? 'Supported' : 'Not Supported'}</p>
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.touchOptimization}
                      onChange={(e) => handleSettingChange('touchOptimization', e.target.checked)}
                    />
                    <span className="text-sm">Touch Optimization</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.adaptiveLayout}
                      onChange={(e) => handleSettingChange('adaptiveLayout', e.target.checked)}
                    />
                    <span className="text-sm">Adaptive Layout</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.mobileNavigation}
                      onChange={(e) => handleSettingChange('mobileNavigation', e.target.checked)}
                    />
                    <span className="text-sm">Mobile Navigation</span>
                  </label>
                </div>
                
                <button
                  onClick={optimizeForMobile}
                  disabled={isOptimizing}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {isOptimizing ? 'Optimizing...' : 'Optimize for Mobile'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};