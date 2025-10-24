<<<<<<< HEAD
'use client';
import React from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PerformanceDashboardPage: React.FC = () => {const features = [
      title: 'AI-Powered Intelligence',}
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',}
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {icon: BarChart,
      title: 'Advanced Analytics',}
      description: 'Comprehensive analytics dashboard with real-time data visualization.',}
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {icon: Target,
      title: 'Precision Targeting',}
      description: 'Target specific goals and objectives with precision and accuracy.',}
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {icon: TrendingUp,
      title: 'Growth Optimization',}
      description: 'Optimize your business growth with data-driven strategies.',}
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];
"
  const benefits=";"
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];
=======
<<<<<<< HEAD
=======
'use client'

import React, { useState, useEffect } from 'react';
import { usePerformanceMonitor } from '../utils/performance';
import { useAnalytics } from '../utils/analytics'
;
;interface PerformanceDashboardProps {}
  show?: boolean
  );
}
export default function PerformanceDashboard({ show = false }: PerformanceDashboardProps) {}
  const [isVisible, setIsVisible] = useState(show)}
  const [metrics, setMetrics] = useState<Record<string, number>>({})
  const { getAllMetrics } = usePerformanceMonitor()
  // Note: getEvents is not available in the current analytics hook

  useEffect(() => {
    const interval = setInterval(() => {}
      setMetrics(getAllMetrics())}
    }, 1000)

    return () => clearInterval(interval)
  }, [getAllMetrics])

  if (!isVisible) {
    return (}
      <button}
        onClick="{()" => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50
        title="Show Performance Dashboard">
        "📊"
      </button>
    )
  }
>>>>>>> origin/main

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto z-50 border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          "Performance Dashboard"
        </h3>
        <button
          onClick="{()" => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          "✕"
        </button>
      </div>
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            "Performance Metrics"
          </h4>
          <div className="space-y-1">
            {Object.entries(metrics).map(([key, value]) => (}
              <div key="{key}" className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">"{key}:"</span>
                <span className="text-gray-900 dark:text-white font-mono">
                  {typeof value === 'number' ? `${value.toFixed(2)}ms` : value}
                </span>
              </div>
            ))}
            {Object.keys(metrics).length === 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "No metrics available yet"}
              </p>
  );
            ")}"
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            "System Info"
          </h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">"Memory:"</span>
              <span className="text-gray-900 dark:text-white font-mono">`
                {typeof window !== 'undefined' && 'memory' in performance`}`
                  ? `${Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)}MB`
                  : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">"Connection:"</span>
              <span className="text-gray-900 dark:text-white font-mono">
                {typeof window !== 'undefined' && 'connection' in navigator}
                  ? (navigator as any).connection?.effectiveType || 'Unknown'}
                  : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}`
``
>>>>>>> origin/main
