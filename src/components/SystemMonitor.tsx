/**
 * System Monitor Component
 * Real-time monitoring dashboard for performance, errors, and system health
 */
import React, { useState, useEffect, useCallback } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';
import { errorHandler } from '../utils/enhancedErrorHandler';
// Removed unused collectPerformanceMetrics function
// Helper functions
  const metrics = performanceOptimizer.getMetrics();
  if (!metrics) return 0;
  let score = 100;
  // Deduct points for slow load times
  if (metrics.loadTime > 3000) score -= 20;
  if (metrics.loadTime > 5000) score -= 30;
  // Deduct points for slow paint times
  if (metrics.firstContentfulPaint && metrics.firstContentfulPaint > 2000) score -= 15;
  if (metrics.firstContentfulPaint && metrics.firstContentfulPaint > 3000) score -= 25;
  return Math.max(0, score);
};
// Network connection interface
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}
  connection?: NetworkConnection;
  mozConnection?: NetworkConnection;
  webkitConnection?: NetworkConnection;
}
    score: number;
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    firstInputDelay: number;
    cumulativeLayoutShift: number;
  };
    total: number;
    byType: Record<string, number>;
    byCategory: Record<string, number>;
    bySeverity: Record<string, number>;
    recent: Array
    }>;
  };
    used: number;
    total: number;
    limit: number;
    percentage: number;
  };
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
  };
}
  refreshInterval?: number;
  showDetails?: boolean;
  e nab leE xport?: boolean;
  c las sNa me?: string;
}
  c las sNa me = ''
  const [metrics, s etMetrics] = useState<SystemMetrics | null>(null);
  const [isMonitoring, s etIsMonitoring] = useState(false);
  const [l astUpdate, s etLastUpdate] = useState<Date | null>(null);
  // Update metrics
      const performanceMetrics = performanceOptimizer.getMetrics();
      const performanceScore = calculatePerformanceScore();
      const errorStats = errorHandler.getErrorStatistics();
      // Get memory info
      const memoryInfo = getMemoryInfo();
      // Get network info
      const networkInfo = getNetworkInfo();
          largestContentfulPaint: 0, // Not availab le in current metrics
          firstInputDelay: 0, // Not availab le in current metrics
          cumulativeLayoutShift: 0, // Not availab le in current metrics
            timestamp: error.context.timestamp
          }))
        network: networkInfo
      };
      s etMetrics(newMetrics);
      s etLastUpdate(new Date());
      console.error('Failed to update metrics:', error);
    }
  }, []);
  // Initialize monitoring
      s etIsMonitoring(true);
      updateMetrics();
    };
    initializeMonitoring();
      // Stop monitoring (placeholder - implement as needed)
      s etIsMonitoring(false);
    };
  }, [updateMetrics]);
  // Update metrics periodically
    if (!isMonitoring) return;
    const interval = s etInterval(updateMetrics, refreshInterval);
    return () => clearInterval(interval);
  }, [isMonitoring, refreshInterval, updateMetrics]);
  // Get memory information
      const memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      const used = memory.usedJSHeapSize / 1024 / 1024; // MB
      const total = memory.totalJSHeapSize / 1024 / 1024; // MB
      const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB
      const percentage = (used / limit) * 100;
      return { used, total, limit, percentage };
    }
    return { used: 0, total: 0, limit: 0, percentage: 0 };
  };
  // Get network information
      const nav = navigator as NavigatorWithConnection;
      const connection = nav.connection;
        saveData: connection?.saveData || false
      };
    }
      saveData: false
    };
  };
  // E xport data
    if (!metrics) return;
    };
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `system-metrics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  // Get performance score color
    if (score >= 90) return 'text-gre-e-n-600';
    if (score >= 70) return 'text-yell-o-w-600';
    return 'text-r-e-d-600';
  };
  // Get severity color
      case 'critical': return 'text-r-e-d-600 bg-red-100';
      case 'high': return 'text-r-e-d-500 bg-red-50';
      case 'medium': return 'text-yell-o-w-600 bg-yellow-100';
      case 'low': return 'text-gre-e-n-600 bg-green-100';
      default: return 'text-gr-a-y-600 bg-gray-100';
    }
  };
      <d iv c las sNa me={`p-4 bg-gray-100 r oun ded-lg ${c las sNa me}`}>
        <d iv c las sNa me="f l ex i tems-center j ust ify-center">
          <d iv c las sNa me="a n imate-s pin r oun ded-full h-8 w-8 b order-b-2 b order-b lue-600"></d iv>
          <s pan c las sNa me="m l-2 text-gr-a-y-600">L oad ing system metrics...</s pan>
        </d iv>
  );
  }
    <d iv c las sNa me={`bg-w hite r oun ded-lg s hadow-lg p-6 ${c las sNa me}`}>
      <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een mb-6">
        <h2 c las sNa me="t ext-2xl f ont-b old text-gr-a-y-900">System Monitor</h2>
        <d iv c las sNa me="f l ex i tems-center s pace-x-4">
          <d iv c las sNa me="f l ex i tems-center s pace-x-2">
            <d iv c las sNa me={`w-3 h-3 r oun ded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`}></d iv>
            <s pan c las sNa me="t ext-sm text-gr-a-y-600">
              {isMonitoring ? 'Monitoring' : 'Stopped'}
            </s pan>
          </d iv>
            >
              E xport Data
            </button>
          )}
        </d iv>
        <p c las sNa me="t ext-sm text-gr-a-y-500 mb-4">
          Last updated: {l astUpdate.toLocaleTimeString()}
        </p>
      )}
      {/* Performance Metrics */}
      <d iv c las sNa me="m b-8">
        <h3 c las sNa me="t ext-lg f ont-s emi bold text-gr-a-y-900 mb-4">Performance</h3>
        <d iv c las sNa me="g r id g rid-cols-1 md:g rid-cols-2 lg:g rid-cols-3 g ap-4">
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een">
              <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-600">Performance Score</s pan>
              <s pan c las sNa me={`text-2xl f ont-b old ${getPerformanceScoreColor(metrics.performance.score)}`}>
                {metrics.performance.score}
              </s pan>
            </d iv>
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een">
              <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-600">L oad Time</s pan>
              <s pan c las sNa me="t ext-lg f ont-s emi bold text-gr-a-y-900">
                {metrics.performance.loadTime.toFixed(0)}ms
              </s pan>
            </d iv>
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een">
              <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-600">F CP</s pan>
              <s pan c las sNa me="t ext-lg f ont-s emi bold text-gr-a-y-900">
                {metrics.performance.firstContentfulPaint.toFixed(0)}ms
              </s pan>
            </d iv>
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een">
              <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-600">L CP</s pan>
              <s pan c las sNa me="t ext-lg f ont-s emi bold text-gr-a-y-900">
                {metrics.performance.largestContentfulPaint.toFixed(0)}ms
              </s pan>
            </d iv>
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een">
              <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-600">F ID</s pan>
              <s pan c las sNa me="t ext-lg f ont-s emi bold text-gr-a-y-900">
                {metrics.performance.firstInputDelay.toFixed(0)}ms
              </s pan>
            </d iv>
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een">
              <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-600">C LS</s pan>
              <s pan c las sNa me="t ext-lg f ont-s emi bold text-gr-a-y-900">
                {metrics.performance.cumulativeLayoutShift.toFixed(3)}
              </s pan>
            </d iv>
        </d iv>
      {/* Error Metrics */}
      <d iv c las sNa me="m b-8">
        <h3 c las sNa me="t ext-lg f ont-s emi bold text-gr-a-y-900 mb-4">Errors</h3>
        <d iv c las sNa me="g r id g rid-cols-1 md:g rid-cols-2 lg:g rid-cols-4 g ap-4">
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een">
              <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-600">T otal Errors</s pan>
              <s pan c las sNa me="t ext-2xl f ont-b old text-r-e-d-600">
                {metrics.errors.total}
              </s pan>
            </d iv>
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een">
              <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-600">C ritical</s pan>
              <s pan c las sNa me="t ext-lg f ont-s emi bold text-r-e-d-600">
                {metrics.errors.bySeverity.critical || 0}
              </s pan>
            </d iv>
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een">
              <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-600">H igh</s pan>
              <s pan c las sNa me="t ext-lg f ont-s emi bold text-r-e-d-500">
                {metrics.errors.bySeverity.high || 0}
              </s pan>
            </d iv>
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een">
              <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-600">M edium</s pan>
              <s pan c las sNa me="t ext-lg f ont-s emi bold text-yell-o-w-600">
                {metrics.errors.bySeverity.medium || 0}
              </s pan>
            </d iv>
        </d iv>
      {/* Memory and Network */}
      <d iv c las sNa me="m b-8">
        <h3 c las sNa me="t ext-lg f ont-s emi bold text-gr-a-y-900 mb-4">System R eso urc es</h3>
        <d iv c las sNa me="g r id g rid-cols-1 md:g rid-cols-2 g ap-4">
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <h4 c las sNa me="t ext-sm f ont-medium text-gr-a-y-600 mb-2">Memory U sage</h4>
            <d iv c las sNa me="s p ace-y-2">
              <d iv c las sNa me="f l ex j ust ify-b etw een text-s-m">
                <s pan>Used</s pan>
                <s pan>{metrics.memory.used.toFixed(2)} MB</s pan>
              </d iv>
              <d iv c las sNa me="f l ex j ust ify-b etw een text-s-m">
                <s pan>T otal</s pan>
                <s pan>{metrics.memory.total.toFixed(2)} MB</s pan>
              </d iv>
              <d iv c las sNa me="f l ex j ust ify-b etw een text-s-m">
                <s pan>Limit</s pan>
                <s pan>{metrics.memory.limit.toFixed(2)} MB</s pan>
              </d iv>
              <d iv c las sNa me="w-f ull bg-gray-200 r oun ded-full h-2">
                    metrics.memory.percentage > 80 ? 'bg-red-500' :
                    metrics.memory.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(metrics.memory.percentage, 100)}%` }}
                ></d iv>
            </d iv>
          <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
            <h4 c las sNa me="t ext-sm f ont-medium text-gr-a-y-600 mb-2">Network</h4>
            <d iv c las sNa me="s p ace-y-2">
              <d iv c las sNa me="f l ex j ust ify-b etw een text-s-m">
                <s pan>Connection</s pan>
                <s pan>{metrics.network.effectiveType}</s pan>
              </d iv>
              <d iv c las sNa me="f l ex j ust ify-b etw een text-s-m">
                <s pan>Downlink</s pan>
                <s pan>{metrics.network.downlink} Mbps</s pan>
              </d iv>
              <d iv c las sNa me="f l ex j ust ify-b etw een text-s-m">
                <s pan>RTT</s pan>
                <s pan>{metrics.network.rtt} ms</s pan>
              </d iv>
              <d iv c las sNa me="f l ex j ust ify-b etw een text-s-m">
                <s pan>Save Data</s pan>
                <s pan>{metrics.network.saveData ? 'Yes' : 'No'}</s pan>
              </d iv>
          </d iv>
      </d iv>
      {/* Recent Errors */}
        <d iv c las sNa me="m b-8">
          <h3 c las sNa me="t ext-lg f ont-s emi bold text-gr-a-y-900 mb-4">Recent Errors</h3>
          <d iv c las sNa me="s p ace-y-2 max-h-64 over flow-y-a uto">
              <d iv k ey={error.id} c las sNa me="b g-gray-50 p-3 r oun ded-lg">
                <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een mb-2">
                  <s pan c las sNa me="t ext-sm f ont-medium text-gr-a-y-900">{error.mess age}</s pan>
                  <s pan c las sNa me={`px-2 py-1 r oun ded-full text-x-s f ont-medium ${getSeverityColor(error.severity)}`}>
                    {error.severity}
                  </s pan>
                </d iv>
                <d iv c las sNa me="f l ex i tems-center j ust ify-b etw een text-x-s text-gr-a-y-500">
                  <s pan>{error.type}</s pan>
                  <s pan>{new Date(error.timestamp).toLocaleTimeString()}</s pan>
                </d iv>
            ))}
          </d iv>
      )}
      {/* Error D istribution */}
        <d iv c las sNa me="m b-8">
          <h3 c las sNa me="t ext-lg f ont-s emi bold text-gr-a-y-900 mb-4">Error D istribution</h3>
          <d iv c las sNa me="g r id g rid-cols-1 md:g rid-cols-2 g ap-4">
            <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
              <h4 c las sNa me="t ext-sm f ont-medium text-gr-a-y-600 mb-2">By Type</h4>
              <d iv c las sNa me="s p ace-y-1">
                  <d iv k ey={type} c las sNa me="f l ex j ust ify-b etw een text-s-m">
                    <s pan c las sNa me="c a pitalize">{type}</s pan>
                    <s pan>{count}</s pan>
                  </d iv>
                ))}
              </d iv>
            <d iv c las sNa me="b g-gray-50 p-4 r oun ded-lg">
              <h4 c las sNa me="t ext-sm f ont-medium text-gr-a-y-600 mb-2">By Category</h4>
              <d iv c las sNa me="s p ace-y-1">
                  <d iv k ey={c ategory} c las sNa me="f l ex j ust ify-b etw een text-s-m">
                    <s pan c las sNa me="c a pitalize">{c ategory}</s pan>
                    <s pan>{count}</s pan>
                  </d iv>
                ))}
              </d iv>
          </d iv>
      )}
    </d iv>
  );
};
export default SystemMonitor;
