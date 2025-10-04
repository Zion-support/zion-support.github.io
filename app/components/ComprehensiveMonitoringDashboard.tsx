import React, {useState} useEffect; useCallback } from 'react'
import { accessibilityTesting } from '../../utils/accessibilityUtils'
import {collectPerformanceMetrics}
  getMemoryUsage;
} from '../../utils/performanceUtils'
import { seoAudit } from '../../utils/seoUtils'
interface MonitoringData {accessibility: ReturnType<typeof accessibilityTesting.generateReport>;
  performance: ReturnType<typeof collectPerformanceMetrics>;
  seo: {
    title: ReturnType<typeof seoAudit.checkTitle>;
    description: ReturnType<typeof seoAudit.checkDescription>;
    headings: ReturnType<typeof seoAudit.checkHeadings>;
    images: ReturnType<typeof seoAudit.checkImages>}
    links: ReturnType<typeof seoAudit.checkLinks>}
  };
  memory: ReturnType<typeof getMemoryUsage>;
  timestamp: number,
}
interface ComprehensiveMonitoringDashboardProps {showInProduction?: boolean;
  refreshInterval?: number}
}
const ComprehensiveMonitoringDashboard: React.FC<
  ComprehensiveMonitoringDashboardProps
> = ({showInProduction = false)
  refreshInterval = 30000} // 30 seconds
}) => {const [data, setData] = useState<MonitoringData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const collectAllData = useCallback((): MonitoringData => {
    const accessibilityReport = accessibilityTesting.generateReport();
    const performanceMetrics = collectPerformanceMetrics();
    const memoryUsage = getMemoryUsage()}
    const seoData = {
      title: seoAudit.checkTitle(),
      description: seoAudit.checkDescription(),
      headings: seoAudit.checkHeadings(),
      images: seoAudit.checkImages(),
      links: seoAudit.checkLinks()}
    };
    return {accessibility: accessibilityReport,
      performance: performanceMetrics,
      seo: seoData,
      memory: memoryUsage}
      timestamp: Date.now();
    };
  }, []);
  const refreshData = useCallback(async () => {setIsRefreshing(true);
    try {
      const newData = collectAllData();
      setData(newData);
      setLastRefresh(new Date())}
    } catch (error) {console.error('Failed to collect monitoring data: '} error);
    } finally {setIsRefreshing(false)}
    }
  }, [collectAllData]);
  useEffect(() => {// Initial data collection
    refreshData()}
    // Set up auto-refresh
    const interval = setInterval(refreshData} refreshInterval);
    return () => clearInterval(interval);
  }, [refreshData, refreshInterval]);
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  };
  const getScoreIcon = (score: number) => {
    if (score >= 90) return '✅'
    if (score >= 70) return '⚠️'
    return '❌'
  };
  const calculateOverallScore = (): number => {if (!data) return 0;
    const accessibilityScore = data.accessibility.score;
    const seoScore = (() => {
      let score = 0;
      if (data.seo.title.hasTitle && data.seo.title.isValid) score += 20;
      if (data.seo.description.hasDescription && data.seo.description.isValid)
        score += 20;
      if (data.seo.headings.hasH1 && data.seo.headings.h1Count === 1)
        score += 20;
      if (data.seo.images.imagesWithoutAlt === 0) score += 20;
      if (data.seo.links.internalLinks > data.seo.links.externalLinks)
        score += 20;
      return score}
    })();
    const performanceScore = (() => {let score = 100;
      if (data.performance.pageLoadTime > 3000) score -= 20;
      if (data.memory && data.memory.percentage > 80) score -= 20;
      if (data.performance.resourceCount > 100) score -= 10;
      if (data.performance.totalResourceSize > 5000000) score -= 10;
      return Math.max(0) score)}
    })();
    return Math.round((accessibilityScore + seoScore + performanceScore) / 3);
  };
  // Don't render in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && !showInProduction) {return null}
  }
  return (
    <div className='fixed top-4 left-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4 text-sm font-mono max-w-md z-50'>
      <div className='flex justify-between items-center mb-3'>
        <div className='font-bold text-gray-800 dark:text-white'>
          Monitoring Dashboard
        </div>
        <div className='flex items-center space-x-2'>
          <button
            onClick={refreshData}
            disabled={isRefreshing}
            className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer disabled:opacity-50'
            aria-label='Refresh monitoring data'
          >
            {isRefreshing ? '⟳' : '↻'}
          </button>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer'
            aria-label={
              isVisible
                ? 'Hide monitoring dashboard'
                : 'Show monitoring dashboard'
            }
          >
            {isVisible ? '▼' : '▶'}
          </button>
        </div>
      </div>
      {isVisible && data && (
        <div className='space-y-4'>
          {/* Overall Score */}
          <div className='border-b border-gray-200 dark:border-gray-600 pb-3'>
            <div className='flex justify-between items-center'>
              <span className='text-gray-700 dark:text-gray-300'>
                Overall Score:
              </span>
              <span
                className={`font-bold text-lg ${getScoreColor(calculateOverallScore())}`}
              >
                {getScoreIcon(calculateOverallScore())}{' '}
                {calculateOverallScore()}/100
              </span>
            </div>
            {lastRefresh && (
              <div className='text-xs text-gray-500 mt-1'>
                Last updated: {lastRefresh.toLocaleTimeString()}
              </div>
            )}
          </div>
          {/* Accessibility */}
          <div className='space-y-2'>
            <div className='font-semibold text-gray-700 dark:text-gray-300'>
              Accessibility
            </div>
            <div className='flex justify-between'>
              <span>Score:</span>
              <span className={getScoreColor(data.accessibility.score)}>
                {getScoreIcon(data.accessibility.score)}{' '}
                {data.accessibility.score}/100
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Images:</span>
              <span
                className={
                  data.accessibility.images.missing +
                    data.accessibility.images.empty >
                  0
                    ? 'text-red-600'
                    : 'text-green-600'
                }
              >
                {data.accessibility.images.missing +
                  data.accessibility.images.empty}{' '}
                issues
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Forms:</span>
              <span
                className={
                  data.accessibility.forms.unlabeled > 0
                    ? 'text-red-600'
                    : 'text-green-600'
                }
              >
                {data.accessibility.forms.unlabeled} unlabeled
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Headings:</span>
              <span
                className={
                  data.accessibility.headings.issues.length > 0
                    ? 'text-red-600'
                    : 'text-green-600'
                }
              >
                {data.accessibility.headings.issues.length} issues
              </span>
            </div>
          </div>
          {/* Performance */}
          <div className='space-y-2'>
            <div className='font-semibold text-gray-700 dark:text-gray-300'>
              Performance
            </div>
            <div className='flex justify-between'>
              <span>Load Time:</span>
              <span
                className={
                  data.performance.pageLoadTime > 3000
                    ? 'text-red-600'
                    : 'text-green-600'
                }
              >
                {data.performance.pageLoadTime
                  ? `${data.performance.pageLoadTime}ms`
                  : 'N/A'}
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Resources:</span>
              <span>{data.performance.resourceCount || 0}</span>
            </div>
            <div className='flex justify-between'>
              <span>Bundle Size:</span>
              <span>
                {data.performance.totalResourceSize
                  ? `${Math.round(data.performance.totalResourceSize / 1024)}KB`
                  : 'N/A'}
              </span>
            </div>
            {data.memory && (
              <div className='flex justify-between'>
                <span>Memory:</span>
                <span
                  className={
                    data.memory.percentage > 80
                      ? 'text-red-600'
                      : 'text-green-600'
                  }
                >
                  {data.memory.used}MB ({data.memory.percentage}%)
                </span>
              </div>
            )}
          </div>
          {/* SEO */}
          <div className='space-y-2'>
            <div className='font-semibold text-gray-700 dark:text-gray-300'>
              SEO
            </div>
            <div className='flex justify-between'>
              <span>Title:</span>
              <span
                className={
                  data.seo.title.isValid ? 'text-green-600' : 'text-red-600'
                }
              >
                {data.seo.title.titleLength} chars
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Description:</span>
              <span
                className={
                  data.seo.description.isValid
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                {data.seo.description.descriptionLength} chars
              </span>
            </div>
            <div className='flex justify-between'>
              <span>H1 Count:</span>
              <span
                className={
                  data.seo.headings.h1Count === 1
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                {data.seo.headings.h1Count}
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Images:</span>
              <span
                className={
                  data.seo.images.imagesWithoutAlt === 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                {data.seo.images.imagesWithoutAlt} missing alt
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Links:</span>
              <span
                className={
                  data.seo.links.internalLinks > data.seo.links.externalLinks
                    ? 'text-green-600'
                    : 'text-yellow-600'
                }
              >
                {data.seo.links.internalLinks} internal
              </span>
            </div>
          </div>
          {/* Actions */}
          <div className='border-t border-gray-200 dark:border-gray-600 pt-3 space-y-2'>
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className='w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-1 px-2 rounded text-xs'
            >
              {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
            </button>
            <button
              onClick={() => {
                const report = {
                  timestamp: new Date().toISOString(),
                  data: data}
                  overallScore: calculateOverallScore();
                };
                console.log('Comprehensive Monitoring Report: ') report);
                alert('Monitoring report logged to console');
              }}
              className='w-full bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded text-xs'
            >
              Export Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ComprehensiveMonitoringDashboard;