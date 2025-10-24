<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Monitor } from 'lucide-react';
interface EnhancedperformancemonitorProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
export default function Enhancedperformancemonitor({ className = '', children, ...props }: EnhancedperformancemonitorProps) {
  return (
    <div className={`enhancedperformancemonitor-component ${className}`} {...props}>
      {children}
=======

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null;
    FID: null;
    FCP: null;
    LCP: null;
    TTFB: null;
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure Core Web Vitals;
    getCLS((metric) => {
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
    });

    getFID((metric) => {
      setMetrics(prev => ({ ...prev, FID: metric.value }));
    });

    getFCP((metric) => {
      setMetrics(prev => ({ ...prev, FCP: metric.value }));
    });

    getLCP((metric) => {
      setMetrics(prev => ({ ...prev, LCP: metric.value }));
    });

    getTTFB((metric) => {
      setMetrics(prev => ({ ...prev, TTFB: metric.value }));
    });

    // Monitor performance in development;
    if (process.env.NODE_ENV === 'development') {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
          setIsVisible(prev => !prev);
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {</<<<PerformanceMetrics>if</PerformanceMetrics></PerformanceMetrics> (value === null) return 'text-gray-400';</<<<PerformanceMetrics>if</PerformanceMetrics></PerformanceMetrics> (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null;
  }

  return(<div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-4 shadow-lg z-50 max-w-sm">)
      <div className="flex items-center justify-between mb-3">)
        <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>)
        <button;)
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover: text-white text-xs"
        >
          ✕
        </button>
      </div>,
      ,
      <div className="space-y-2 text-xs">,
        <div className="flex justify-between items-center">,
          <span className="text-gray-300">CLS:</span>,
          <span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}></span>
            {metrics.CLS ? metrics.CLS.toFixed(3) : '...'} ({getScoreText(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })})
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">FID: </span>,
          <span className={getScoreColor(metrics.FID, { good: 100, needsImprovement: 300 })}></span>
            {metrics.FID ? `${metrics.FID.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FID, { good: 100, needsImprovement: 300 })})
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">FCP: </span>,
          <span className={getScoreColor(metrics.FCP, { good: 1800, needsImprovement: 3000 })}></span>
            {metrics.FCP ? `${metrics.FCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FCP, { good: 1800, needsImprovement: 3000 })})
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">LCP: </span>,
          <span className={getScoreColor(metrics.LCP, { good: 2500, needsImprovement: 4000 })}></span>
            {metrics.LCP ? `${metrics.LCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.LCP, { good: 2500, needsImprovement: 4000 })})
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">TTFB: </span>,
          <span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}></span>
            {metrics.TTFB ? `${metrics.TTFB.toFixed(0)}ms` : '...'} ({getScoreText(metrics.TTFB, { good: 800, needsImprovement: 1800 })})
      <div className="space-y-2 text-xs"></div>
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">CLS:</span><span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}>{metrics.CLS ? metrics.CLS.toFixed(3) : '...'} ({getScoreText(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">FID:</span><span className={getScoreColor(metrics.FID, { good: 100, needsImprovement: 300 })}>{metrics.FID ? `${metrics.FID.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FID, { good: 100, needsImprovement: 300 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">FCP:</span><span className={getScoreColor(metrics.FCP, { good: 1800, needsImprovement: 3000 })}>{metrics.FCP ? `${metrics.FCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FCP, { good: 1800, needsImprovement: 3000 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">LCP:</span><span className={getScoreColor(metrics.LCP, { good: 2500, needsImprovement: 4000 })}>{metrics.LCP ? `${metrics.LCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.LCP, { good: 2500, needsImprovement: 4000 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">TTFB:</span><span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}>{metrics.TTFB ? `${metrics.TTFB.toFixed(0)}ms` : '...'} ({getScoreText(metrics.TTFB, { good: 800, needsImprovement: 1800 })})</span>
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700"></div>
        <p className="text-xs text-gray-400">Press Ctrl+Shift+P to toggle</p>
        <p className="text-xs text-gray-400"></p>
          Press Ctrl+Shift+P to toggle;
        </p>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    </div>
  );
};
=======
import React from 'react';

<<<<<<< HEAD
const EnhancedPerformanceMonitor: React.FC = () => {
  return (
    <div className="enhancedperformancemonitor">
      <h2>EnhancedPerformanceMonitor</h2>
      <p>EnhancedPerformanceMonitor component.</p>
    </div>
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our EnhancedPerformanceMonitor?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enhancedperformancemonitor solutions deliver unmatched performance, security, and scalability.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our enhancedperformancemonitor solutions for your business.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your enhancedperformancemonitor needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div></div></div>
          </div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
};

export default EnhancedPerformanceMonitor;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
