
interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

    }
  }, [metrics]);

        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

    }

    if (logToConsole && Object.values(metrics).some(v => v !== null)) {
      console.log('🚀 Performance Metrics:', metrics);
    }
  }, [metrics, onMetricsUpdate, logToConsole]);

  if (!showMetrics) return null;

  const formatMetric = (metric: keyof PerformanceMetrics, value: number): string => {
    if (metric === 'cls') return value.toFixed(3);
    if (metric === 'fid') return `${Math.round(value)}ms`;
    return `${Math.round(value)}ms`;
  };

  const metricsList = [
    { key: 'fcp' as keyof PerformanceMetrics, label: 'First Contentful Paint', icon: Activity },
    { key: 'lcp' as keyof PerformanceMetrics, label: 'Largest Contentful Paint', icon: TrendingUp },
    { key: 'fid' as keyof PerformanceMetrics, label: 'First Input Delay', icon: Zap },
    { key: 'cls' as keyof PerformanceMetrics, label: 'Cumulative Layout Shift', icon: Clock },
    { key: 'ttfb' as keyof PerformanceMetrics, label: 'Time to First Byte', icon: Activity }
  ];

  return (
        </div>
      </div>
      
      <div className="space-y-2">
        {metricsList.map(({ key, label, icon: Icon }) => {
          const value = metrics?.[key];
          if (value === undefined) return null;
          
          const { score, color, label: scoreLabel } = getScore(key, value);
          
          return (
            <div key={key} className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <Icon className="w-3 h-3 text-zinc-400" />
                <span className="text-zinc-300">{label}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={color}>{formatMetric(key, value)}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded ${color.replace('text-', 'bg-')}/10 border border-current/20`}>
                  {scoreLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {metrics && (
        <div className="mt-3 pt-3 border-t border-zinc-700/50">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400">Overall Score</span>
            <span className="text-white font-medium">
              {Math.round(
                metricsList.reduce((acc, { key }) => {
                  const { score } = getScore(key, metrics[key] || 0);
                  return acc + score;
                }, 0) / metricsList.length
              )}/100
            </span>
          </div>
        </div>
      )}

      <div className="mt-3 text-xs text-zinc-500">
        <button
          onClick={() => setIsVisible(false)}
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Hide
        </button>
      </div>
    </motion.div>
  );
};
