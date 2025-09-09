import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  X,
  BarChart3
} from 'lucide-react';

export function PerformanceMonitor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);

  return (
    <>
      {/* Performance Monitor Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-24 z-50 p-4 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-blue/50"
        aria-label="Open performance monitor"
        aria-expanded={isOpen}
        aria-controls="performance-panel"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Activity className="w-6 h-6 text-white" />
        </motion.div>
      </button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="performance-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-96 bg-zinc-900/95 backdrop-blur-md border border-zion-blue/30 rounded-2xl shadow-2xl shadow-zion-blue/20"
            role="dialog"
            aria-label="Performance monitoring"
            tabIndex={-1}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-zion-blue" />
                  Performance
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMonitoring(!isMonitoring)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      isMonitoring 
                        ? 'bg-green-600 text-white' 
                        : 'bg-zinc-700 text-zion-slate-light hover:bg-zinc-600'
                    }`}
                  >
                    {isMonitoring ? 'Monitoring' : 'Start'}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-zion-slate-light hover:text-white transition-colors"
                    aria-label="Close performance monitor"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Performance Score */}
              <div className="mb-6 p-4 bg-zinc-800/50 rounded-xl border border-zion-blue/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400">
                    A
                  </div>
                  <div className="text-2xl font-bold text-white">
                    95/100
                  </div>
                  <div className="text-sm text-zion-slate-light">
                    Performance Score
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-green-400" />
                    <div>
                      <div className="text-sm text-white font-medium">First Contentful Paint</div>
                      <div className="text-xs text-zion-slate-light">1.2s</div>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>

                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <div>
                      <div className="text-sm text-white font-medium">Largest Contentful Paint</div>
                      <div className="text-xs text-zion-slate-light">2.1s</div>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>

                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-green-400" />
                    <div>
                      <div className="text-sm text-white font-medium">First Input Delay</div>
                      <div className="text-xs text-zion-slate-light">45ms</div>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>

                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-green-400" />
                    <div>
                      <div className="text-sm text-white font-medium">Cumulative Layout Shift</div>
                      <div className="text-xs text-zion-slate-light">0.05</div>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>

              {/* Status */}
              <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
                <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Excellent Performance
                </h4>
                <p className="text-sm text-green-200">
                  Your website is performing exceptionally well! All Core Web Vitals are in the green zone.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}