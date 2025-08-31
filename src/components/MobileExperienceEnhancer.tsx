import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import {
  Smartphone,
  Tablet,
  Monitor,
  Touch,
  Gesture,
  Swipe,
  Pinch,
  Rotate,
  ZoomIn,
  ZoomOut,
  Move,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Wifi,
  Battery,
  Signal,
  Clock,
  Eye,
  EyeOff,
  RefreshCw,
  Zap,
  Target,
  Rocket,
  Atom,
  Cloud,
  Database,
  Workflow,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  ShieldCheck,
  Globe2,
  Bot,
  Eye as EyeIcon,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  BarChart,
  Users2,
  Settings as SettingsIcon
} from 'lucide-react';

interface MobileMetrics {
  screenWidth: number;
  screenHeight: number;
  pixelRatio: number;
  orientation: 'portrait' | 'landscape';
  touchSupport: boolean;
  batteryLevel: number;
  connectionType: string;
  connectionSpeed: string;
  deviceMemory: number;
  hardwareConcurrency: number;
}

interface TouchGesture {
  id: string;
  name: string;
  description: string;
  icon: any;
  enabled: boolean;
  sensitivity: number;
}

interface MobileOptimization {
  id: string;
  name: string;
  description: string;
  category: 'performance' | 'accessibility' | 'user-experience' | 'battery';
  enabled: boolean;
  impact: 'high' | 'medium' | 'low';
}

const MobileExperienceEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<MobileMetrics>({
    screenWidth: 0,
    screenHeight: 0,
    pixelRatio: 1,
    orientation: 'portrait',
    touchSupport: false,
    batteryLevel: 0,
    connectionType: 'unknown',
    connectionSpeed: 'unknown',
    deviceMemory: 0,
    hardwareConcurrency: 0
  });
  const [gestures, setGestures] = useState<TouchGesture[]>([
    {
      id: 'swipe-left',
      name: 'Swipe Left',
      description: 'Navigate back or close',
      icon: Swipe,
      enabled: true,
      sensitivity: 0.5
    },
    {
      id: 'swipe-right',
      name: 'Swipe Right',
      description: 'Navigate forward or open',
      icon: Swipe,
      enabled: true,
      sensitivity: 0.5
    },
    {
      id: 'swipe-up',
      name: 'Swipe Up',
      description: 'Scroll up or expand',
      icon: Swipe,
      enabled: true,
      sensitivity: 0.5
    },
    {
      id: 'swipe-down',
      name: 'Swipe Down',
      description: 'Scroll down or collapse',
      icon: Swipe,
      enabled: true,
      sensitivity: 0.5
    },
    {
      id: 'pinch-zoom',
      name: 'Pinch Zoom',
      description: 'Zoom in/out content',
      icon: Pinch,
      enabled: true,
      sensitivity: 0.5
    },
    {
      id: 'double-tap',
      name: 'Double Tap',
      description: 'Quick actions or zoom',
      icon: Touch,
      enabled: true,
      sensitivity: 0.5
    },
    {
      id: 'long-press',
      name: 'Long Press',
      description: 'Context menu or selection',
      icon: Touch,
      enabled: true,
      sensitivity: 0.5
    }
  ]);
  const [optimizations, setOptimizations] = useState<MobileOptimization[]>([
    {
      id: 'touch-optimization',
      name: 'Touch Optimization',
      description: 'Optimize touch targets and interactions',
      category: 'user-experience',
      enabled: true,
      impact: 'high'
    },
    {
      id: 'battery-optimization',
      name: 'Battery Optimization',
      description: 'Reduce battery consumption',
      category: 'battery',
      enabled: true,
      impact: 'high'
    },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      description: 'Optimize for mobile performance',
      category: 'performance',
      enabled: true,
      impact: 'high'
    },
    {
      id: 'accessibility-optimization',
      name: 'Accessibility Optimization',
      description: 'Enhance mobile accessibility',
      category: 'accessibility',
      enabled: true,
      impact: 'medium'
    }
  ]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [activeGestures, setActiveGestures] = useState<Set<string>>(new Set());
  const [gestureHistory, setGestureHistory] = useState<Array<{ gesture: string; timestamp: number }>>([]);

  // Measure mobile metrics
  const measureMobileMetrics = useCallback(() => {
    const newMetrics: MobileMetrics = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio || 1,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
      touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      batteryLevel: 0,
      connectionType: 'unknown',
      connectionSpeed: 'unknown',
      deviceMemory: (navigator as any).deviceMemory || 0,
      hardwareConcurrency: navigator.hardwareConcurrency || 0
    };

    // Get battery information if available
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        newMetrics.batteryLevel = Math.round(battery.level * 100);
        setMetrics(prev => ({ ...prev, batteryLevel: newMetrics.batteryLevel }));
      });
    }

    // Get connection information if available
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      newMetrics.connectionType = connection.effectiveType || connection.type || 'unknown';
      newMetrics.connectionSpeed = connection.downlink ? `${connection.downlink} Mbps` : 'unknown';
    }

    setMetrics(newMetrics);
  }, []);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Touch target optimization
      const touchTargets = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
      touchTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.width < 44 || rect.height < 44) {
          target.style.minWidth = '44px';
          target.style.minHeight = '44px';
        }
      });

      // Viewport optimization
      const viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
        document.head.appendChild(meta);
      }

      // Font size optimization for mobile
      if (metrics.screenWidth < 768) {
        document.documentElement.style.fontSize = '16px'; // Prevent zoom on iOS
      }

      // Touch event optimization
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });

      // Performance optimization
      if ('serviceWorker' in navigator) {
        // Register service worker for offline support
        try {
          await navigator.serviceWorker.register('/sw.js');
        } catch (error) {
          console.log('Service worker registration failed:', error);
        }
      }

      // Battery optimization
      if (metrics.batteryLevel < 20) {
        // Reduce animations and heavy operations
        document.documentElement.classList.add('battery-saver');
      }

      // Connection optimization
      if (metrics.connectionType === 'slow-2g' || metrics.connectionType === '2g') {
        // Load low-quality images and reduce network requests
        document.documentElement.classList.add('slow-connection');
      }

    } catch (error) {
      console.error('Mobile optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [metrics]);

  // Handle touch gestures
  const handleTouchGesture = useCallback((gestureId: string, direction?: string) => {
    setActiveGestures(prev => new Set([...prev, gestureId]));
    setGestureHistory(prev => [...prev, { gesture: gestureId, timestamp: Date.now() }]);

    // Execute gesture action
    switch (gestureId) {
      case 'swipe-left':
        // Navigate back or close
        if (window.history.length > 1) {
          window.history.back();
        }
        break;
      case 'swipe-right':
        // Navigate forward or open
        if (window.history.length > 1) {
          window.history.forward();
        }
        break;
      case 'swipe-up':
        // Scroll up or expand
        window.scrollBy({ top: -100, behavior: 'smooth' });
        break;
      case 'swipe-down':
        // Scroll down or collapse
        window.scrollBy({ top: 100, behavior: 'smooth' });
        break;
      case 'double-tap':
        // Toggle zoom or quick action
        document.documentElement.style.zoom = 
          document.documentElement.style.zoom === '1.2' ? '1' : '1.2';
        break;
      case 'long-press':
        // Show context menu or selection
        console.log('Long press detected');
        break;
    }

    // Remove from active gestures after animation
    setTimeout(() => {
      setActiveGestures(prev => {
        const newSet = new Set(prev);
        newSet.delete(gestureId);
        return newSet;
      });
    }, 1000);
  }, []);

  // Touch event handlers
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let touchCount = 0;
    let touchTimer: NodeJS.Timeout;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
      touchCount++;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const touchDuration = touchEndTime - touchStartTime;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Detect swipe gestures
      if (distance > 50 && touchDuration < 500) {
        const enabledGestures = gestures.filter(g => g.enabled);
        
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe
          if (deltaX > 0) {
            const gesture = enabledGestures.find(g => g.id === 'swipe-right');
            if (gesture) handleTouchGesture('swipe-right');
          } else {
            const gesture = enabledGestures.find(g => g.id === 'swipe-left');
            if (gesture) handleTouchGesture('swipe-left');
          }
        } else {
          // Vertical swipe
          if (deltaY > 0) {
            const gesture = enabledGestures.find(g => g.id === 'swipe-down');
            if (gesture) handleTouchGesture('swipe-down');
          } else {
            const gesture = enabledGestures.find(g => g.id === 'swipe-up');
            if (gesture) handleTouchGesture('swipe-up');
          }
        }
      }

      // Detect double tap
      if (touchCount === 2 && touchDuration < 300) {
        const gesture = enabledGestures.find(g => g.id === 'double-tap');
        if (gesture) handleTouchGesture('double-tap');
        touchCount = 0;
      }

      // Detect long press
      if (touchDuration > 500) {
        const gesture = enabledGestures.find(g => g.id === 'long-press');
        if (gesture) handleTouchGesture('long-press');
      }
    };

    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [gestures, handleTouchGesture]);

  // Measure metrics on mount and resize
  useEffect(() => {
    measureMobileMetrics();
    
    const handleResize = () => {
      measureMobileMetrics();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [measureMobileMetrics]);

  // Toggle gesture
  const toggleGesture = useCallback((gestureId: string) => {
    setGestures(prev => prev.map(g => 
      g.id === gestureId ? { ...g, enabled: !g.enabled } : g
    ));
  }, []);

  // Toggle optimization
  const toggleOptimization = useCallback((optimizationId: string) => {
    setOptimizations(prev => prev.map(o => 
      o.id === optimizationId ? { ...o, enabled: !o.enabled } : g
    ));
  }, []);

  // Get device type
  const getDeviceType = () => {
    if (metrics.screenWidth < 768) return 'Mobile';
    if (metrics.screenWidth < 1024) return 'Tablet';
    return 'Desktop';
  };

  // Get connection quality
  const getConnectionQuality = () => {
    if (metrics.connectionType === '4g' || metrics.connectionType === '5g') return 'Excellent';
    if (metrics.connectionType === '3g') return 'Good';
    if (metrics.connectionType === '2g' || metrics.connectionType === 'slow-2g') return 'Poor';
    return 'Unknown';
  };

  return (
    <>
      {/* Mobile Experience Panel */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-20 right-4 w-96 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-40 p-4 max-h-[80vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Smartphone className="w-5 h-5 text-cyan-400 mr-2" />
              Mobile Experience
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Device Information */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-white mb-3">Device Information</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Device</span>
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-lg font-semibold text-white">{getDeviceType()}</p>
              </div>

              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Resolution</span>
                  <Monitor className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-lg font-semibold text-white">
                  {metrics.screenWidth} × {metrics.screenHeight}
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Battery</span>
                  <Battery className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-lg font-semibold text-white">
                  {metrics.batteryLevel > 0 ? `${metrics.batteryLevel}%` : 'N/A'}
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Connection</span>
                  <Wifi className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-lg font-semibold text-white">
                  {getConnectionQuality()}
                </p>
              </div>
            </div>
          </div>

          {/* Touch Gestures */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-white mb-3">Touch Gestures</h4>
            <div className="space-y-2">
              {gestures.map((gesture) => (
                <div
                  key={gesture.id}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    gesture.enabled
                      ? 'bg-cyan-500/20 border-cyan-500/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <gesture.icon className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-medium text-white">{gesture.name}</div>
                        <div className="text-xs text-gray-400">{gesture.description}</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={gesture.enabled}
                        onChange={() => toggleGesture(gesture.id)}
                        className="sr-only"
                      />
                      <div className={`
                        w-10 h-6 bg-white/20 rounded-full transition-colors duration-200
                        ${gesture.enabled ? 'bg-cyan-500' : ''}
                      `}>
                        <div className={`
                          w-4 h-4 bg-white rounded-full transition-transform duration-200
                          ${gesture.enabled ? 'translate-x-4' : 'translate-x-0.5'}
                        `} />
                      </div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Optimizations */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-white mb-3">Mobile Optimizations</h4>
            <div className="space-y-2">
              {optimizations.map((optimization) => (
                <div
                  key={optimization.id}
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    optimization.enabled
                      ? 'bg-green-500/20 border-green-500/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-sm font-medium text-white">{optimization.name}</div>
                        <div className="text-xs text-gray-400">{optimization.description}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Impact: {optimization.impact}
                        </div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={optimization.enabled}
                        onChange={() => toggleOptimization(optimization.id)}
                        className="sr-only"
                      />
                      <div className={`
                        w-10 h-6 bg-white/20 rounded-full transition-colors duration-200
                        ${optimization.enabled ? 'bg-green-500' : ''}
                      `}>
                        <div className={`
                          w-4 h-4 bg-white rounded-full transition-transform duration-200
                          ${optimization.enabled ? 'translate-x-4' : 'translate-x-0.5'}
                        `} />
                      </div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={measureMobileMetrics}
              className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
            <button
              onClick={applyMobileOptimizations}
              disabled={isOptimizing}
              className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-all duration-200 disabled:opacity-50"
            >
              {isOptimizing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                  <span>Optimizing...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Optimize</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}

      {/* Mobile Experience Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-40 right-4 p-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-30 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Mobile Experience"
      >
        <Smartphone className="w-5 h-5 text-cyan-400 group-hover:text-white" />
      </motion.button>

      {/* Active Gesture Indicators */}
      <AnimatePresence>
        {Array.from(activeGestures).map((gestureId) => {
          const gesture = gestures.find(g => g.id === gestureId);
          if (!gesture) return null;

          return (
            <motion.div
              key={gestureId}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
            >
              <div className="bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full p-6 flex items-center justify-center">
                <gesture.icon className="w-12 h-12 text-cyan-400" />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
};

export default MobileExperienceEnhancer;
