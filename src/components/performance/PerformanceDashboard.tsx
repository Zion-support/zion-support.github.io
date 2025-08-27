import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Activity, Zap, Clock, Target, BarChart3, X } from 'lucide-react';
import { usePerformance } from '../../hooks/usePerformance';

interface PerformanceDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  isOpen,
  onClose,
}) => {
  const { metrics, observers, performanceScore, insights } = usePerformance();
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'insights'>('overview');

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-zion-cyan';
    }
  };

  const getRatingIcon = (rating: string) => {
    switch (rating) {
      case 'good': return <TrendingUp className="w-4 h-4" />;
      case 'needs-improvement': return <Minus className="w-4 h-4" />;
      case 'poor': return <TrendingDown className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-zion-slate-dark border border-zion-cyan/20 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-cyan/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zion-cyan/20 rounded-lg">
                  <Activity className="w-6 h-6 text-zion-cyan" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Performance Dashboard</h2>
                  <p className="text-zion-cyan/60 text-sm">Real-time Core Web Vitals</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zion-cyan/20 rounded-lg transition-colors"
                aria-label="Close dashboard"
              >
                <X className="w-5 h-5 text-zion-cyan" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-zion-cyan/20">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'details', label: 'Details', icon: Target },
                { id: 'insights', label: 'Insights', icon: Zap },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-zion-cyan text-zion-cyan'
                      : 'border-transparent text-zion-cyan/60 hover:text-zion-cyan'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Performance Score */}
                  <div className="bg-zion-slate/20 rounded-xl p-6 border border-zion-cyan/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Overall Performance Score</h3>
                      <span className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
                        {performanceScore}/100
                      </span>
                    </div>
                    <div className="w-full bg-zion-slate rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-zion-cyan to-zion-blue h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${performanceScore}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Core Web Vitals */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {observers.map((observer) => (
                      <div
                        key={observer.name}
                        className="bg-zion-slate/20 rounded-xl p-4 border border-zion-cyan/20"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-zion-cyan/80">
                            {observer.name}
                          </span>
                          <span className={getRatingColor(observer.rating)}>
                            {getRatingIcon(observer.rating)}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {formatMetric(observer.value)}
                        </div>
                        <div className={`text-sm ${getRatingColor(observer.rating)}`}>
                          {observer.rating.replace('-', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Detailed Metrics</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Navigation Timing */}
                    <div className="bg-zion-slate/20 rounded-xl p-6 border border-zion-cyan/20">
                      <h4 className="text-md font-semibold text-white mb-4 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        Navigation Timing
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-zion-cyan/80">TTFB:</span>
                          <span className="text-white">{formatMetric(metrics.ttfb)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-cyan/80">DOM Load:</span>
                          <span className="text-white">{formatMetric(metrics.domLoad)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-cyan/80">Window Load:</span>
                          <span className="text-white">{formatMetric(metrics.windowLoad)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Paint Timing */}
                    <div className="bg-zion-slate/20 rounded-xl p-6 border border-zion-cyan/20">
                      <h4 className="text-md font-semibold text-white mb-4 flex items-center gap-2">
                        <Target className="w-4 h-4 text-zion-cyan" />
                        Paint Timing
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-zion-cyan/80">FCP:</span>
                          <span className="text-white">{formatMetric(metrics.fcp)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zion-cyan/80">LCP:</span>
                          <span className="text-white">{formatMetric(metrics.lcp)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'insights' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Performance Insights</h3>
                  
                  {insights.length > 0 ? (
                    <div className="space-y-4">
                      {insights.map((insight, index) => (
                        <div
                          key={index}
                          className="bg-zion-slate/20 rounded-xl p-4 border border-zion-cyan/20"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-zion-cyan/20 rounded-lg mt-1">
                              <Zap className="w-4 h-4 text-zion-cyan" />
                            </div>
                            <p className="text-white">{insight}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="p-4 bg-green-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-green-400" />
                      </div>
                      <p className="text-zion-cyan/80">All performance metrics are looking good!</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};