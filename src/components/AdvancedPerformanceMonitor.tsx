import React, { useEffect, useState, useCallback } from 'react.ts';
export default AdvancedPerformanceMonitor;


interface PerformanceMetrics {

  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  fmp: number | null; // First Meaningful Paint

}

interface PerformanceScore {

  score: number;
  rating: 'good' | 'needs - improvement' | 'poor';
  color: string;

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState < PerformanceMetrics> ({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
  }) ;

  const [isVisible, setIsVisible] = useState (false) ;
  const [overallScore, setOverallScore] = useState < PerformanceScore> ({
    score: 0,
    rating: 'good',
    color: 'text - green - 500',
  }) ;

  // Calculate performance score based on Core Web Vitals
  const calculateScore = useCallback ( (metrics: PerformanceMetrics) : PerformanceScore => {
      let totalScore = 0;
      let validMetrics = 0;

      // FCP scoring (0 - 100) if (metrics.fcp !== null) {
        validMetrics++;
        if (metrics.fcp < 1800) totalScore += 100;
        else if (metrics.fcp < 3000) totalScore += 50;
        else totalScore += 0;
      }

      // LCP scoring (0 - 100) if (metrics.lcp !== null) {
        validMetrics++;
        if (metrics.lcp < 2500) totalScore += 100;
        else if (metrics.lcp < 4000) totalScore += 50;
        else totalScore += 0;
      }

      // FID scoring (0 - 100) if (metrics.fid !== null) {
        validMetrics++;
        if (metrics.fid < 100) totalScore += 100;
        else if (metrics.fid < 300) totalScore += 50;
        else totalScore += 0;
      }

      // CLS scoring (0 - 100) if (metrics.cls !== null) {
        validMetrics++;
        if (metrics.cls < 0.1) totalScore += 100;
        else if (metrics.cls < 0.25) totalScore += 50;
        else totalScore += 0;
      }

      const averageScore = validMetrics > 0 ? Math.round (totalScore / validMetrics) : 0;

      let rating: 'good' | 'needs - improvement' | 'poor';
      let color: string;

      if (averageScore >= 90) {
        rating = 'good';
        color = 'text - green - 500';
      } else if (averageScore >= 50) {
        rating = 'needs - improvement';
        color = 'text - yellow - 500';
      } else {
        rating = 'poor';
        color = 'text - red - 500';
      }

      return { score: averageScore, rating, color };
    },
    []) ;

  // Measure Core Web Vitals
  useEffect ( () => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver (list => {
        const entries = list.getEntries () ;
        const fcpEntry = entries.find (entry => entry.name === 'first - contentful - paint') ;
        if (fcpEntry) {
          setMetrics (prev => ({ ...prev, fcp: fcpEntry.startTime }) ) ;
        }
      }) ;
      fcpObserver.observe ({ entryTypes: ['paint'] }) ;

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver (list => {
        const entries = list.getEntries () ;
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics (prev => ({ ...prev, lcp: lastEntry.startTime }) ) ;
        }
      }) ;
      lcpObserver.observe ({ entryTypes: ['largest - contentful - paint'] }) ;

      // First Input Delay
      const fidObserver = new PerformanceObserver (list => {
        const entries = list.getEntries () ;
        entries.forEach (entry => {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime;
            setMetrics (prev => ({ ...prev, fid }) ) ;
          }
        }) ;
      }) ;
      fidObserver.observe ({ entryTypes: ['first - input'] }) ;

      // Layout Shift
      const clsObserver = new PerformanceObserver (list => {
        let clsValue = 0;
        list.getEntries () .forEach ( (entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }) ;
        setMetrics (prev => ({ ...prev, cls: clsValue }) ) ;
      }) ;
      clsObserver.observe ({ entryTypes: ['layout - shift'] }) ;

      return () => {
        fcpObserver.disconnect () ;
        lcpObserver.disconnect () ;
        fidObserver.disconnect () ;
        clsObserver.disconnect () ;
      };
    }
  }, []) ;

  // Measure Time to First Byte
  useEffect ( () => {
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.requestStart;
      setMetrics (prev => ({ ...prev, ttfb }) ) ;
    }
  }, []) ;

  // Update overall score when metrics change
  useEffect ( () => {
    const score = calculateScore (metrics) ;
    setOverallScore (score) ;
  }, [metrics, calculateScore]) ;

  // Format time values
  const formatTime = (time: number | null) : string => {
    if (time === null) return 'N / A';
    return `${Math.round (time) }ms`;
  };

  // Format CLS value
  const formatCLS = (cls: number | null) : string => {
    if (cls === null) return 'N / A';
    return cls.toFixed (3) ;
  };

  // Get metric rating
  const getMetricRating = (metric: string, value: number | null) : string => {
    if (value === null) return 'N / A';

    switch (metric) {
      case 'fcp':
        return value < 1800
          ? '🟢 Good'
          : value < 3000
            ? '🟡 Needs Improvement'
            : '🔴 Poor';
      case 'lcp':
        return value < 2500
          ? '🟢 Good'
          : value < 4000
            ? '🟡 Needs Improvement'
            : '🔴 Poor';
      case 'fid':
        return value < 100
          ? '🟢 Good'
          : value < 300
            ? '🟡 Needs Improvement'
            : '🔴 Poor';
      case 'cls':
        return value < 0.1
          ? '🟢 Good'
          : value < 0.25
            ? '🟡 Needs Improvement'
            : '🔴 Poor';
      default:
        return 'N / A';
    }
  };

  if (!isVisible) {
    return (<button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setIsVisible (true) }
        className="fixed bottom - 4 right - 4 bg - zion - cyan text - white p - 3 rounded - full shadow - lg hover:bg - zion - cyan / 90 transition - all duration - 300 z - 50"
        aria - label="Open Performance Monitor"
      >
        <Activity className="w - 6 h - 6" />
      </button>) ;
  }

  return (<div role="button" className="fixed bottom - 4 right - 4 bg - zion - slate - dark / 95 backdrop - blur - xl border border - zion - cyan / 30 rounded - 2xl p - 6 shadow - 2xl z - 50 max - w-sm">
      <div role="button" className="flex items - center justify - between mb - 4">
        <h3 className="text - lg font - bold text - white flex items - center">
          <Zap className="w - 5 h - 5 mr - 2 text - zion - cyan" />
          Performance Monitor
        </h3>
        <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setIsVisible (false) }
          className="text - zion - slate - light hover:text - white transition - colors"
        >
          ×
        </button>
      </div>

      {/* Overall Score */}
      <div role="button" className="mb - 4 p - 4 bg - zion - slate / 30 rounded - lg">
        <div role="button" className="text - center">
          <div role="button" className={`text - 3xl font - bold ${overallScore.color}`}>
            {overallScore.score}
          </div>
          <div role="button" className="text - sm text - zion - slate - light">
            Overall Score ({overallScore.rating.replace ('-', ' ') }) </div>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div role="button" className="space - y-3">
        <div role="button" className="flex justify - between items - center">
          <span className="text - sm text - zion - slate - light">FCP</span>
          <div role="button" className="text - right">
            <div role="button" className="text - white font - mono">
              {formatTime (metrics.fcp) }
            </div>
            <div role="button" className="text - xs text - zion - slate - light">
              {getMetricRating ('fcp', metrics.fcp) }
            </div>
          </div>
        </div>

        <div role="button" className="flex justify - between items - center">
          <span className="text - sm text - zion - slate - light">LCP</span>
          <div role="button" className="text - right">
            <div role="button" className="text - white font - mono">
              {formatTime (metrics.lcp) }
            </div>
            <div role="button" className="text - xs text - zion - slate - light">
              {getMetricRating ('lcp', metrics.lcp) }
            </div>
          </div>
        </div>

        <div role="button" className="flex justify - between items - center">
          <span className="text - sm text - zion - slate - light">FID</span>
          <div role="button" className="text - right">
            <div role="button" className="text - white font - mono">
              {formatTime (metrics.fid) }
            </div>
            <div role="button" className="text - xs text - zion - slate - light">
              {getMetricRating ('fid', metrics.fid) }
            </div>
          </div>
        </div>

        <div role="button" className="flex justify - between items - center">
          <span className="text - sm text - zion - slate - light">CLS</span>
          <div role="button" className="text - right">
            <div role="button" className="text - white font - mono">{formatCLS (metrics.cls) }</div>
            <div role="button" className="text - xs text - zion - slate - light">
              {getMetricRating ('cls', metrics.cls) }
            </div>
          </div>
        </div>

        <div role="button" className="flex justify - between items - center">
          <span className="text - sm text - zion - slate - light">TTFB</span>
          <div role="button" className="text - right">
            <div role="button" className="text - white font - mono">
              {formatTime (metrics.ttfb) }
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      {overallScore.rating !== 'good' && (<div role="button" className="mt - 4 p - 3 bg - yellow - 500 / 20 border border - yellow - 500 / 30 rounded - lg">
          <div role="button" className="flex items - center text - yellow - 400 mb - 2">
            <AlertTriangle className="w - 4 h - 4 mr - 2" />
            <span className="text - sm font - medium">Recommendations</span>
          </div>
          <ul className="text - xs text - yellow - 300 space - y-1">
            {metrics.lcp && metrics.lcp > 2500 && (<li>• Optimize images and reduce LCP</li>) }
            {metrics.fid && metrics.fid > 100 && (<li>• Reduce JavaScript bundle size</li>) }
            {metrics.cls && metrics.cls > 0.1 && (<li>• Fix layout shifts and set image dimensions</li>) }
          </ul>
        </div>) }
    </div>) ;
};

