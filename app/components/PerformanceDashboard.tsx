<<<<<<< HEAD
'use client';
import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const PerformanceDashboardPage: React.FC = () => {
=======
  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType()
      )[0] as PerformanceNavigationTiming
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart;
        : 0;
      // Measure render time;
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      // Measure memory usage;
      let memoryUsage = 0;
      if ('memory' in performance) {
        const memory = (performance as {memory?: { usedJSHeapSize: number ,}}}).memory;
        memoryUsage = memory?.usedJSHeapSize || 0;
      }
      // Measure FPS (simplified)
      let fps = 60;
      if ('requestAnimationFrame' in window) {let lastTime = performance.now();
        let frameCount = 0;
        const measureFPS = () => {;
          const currentTime = performance.now();
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;}if (isMonitoring) {requestAnimationFrame(measureFPS)}}
        requestAnimationFrame(measureFPS);
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0
  })
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [alerts, setAlerts] = useState<string[]>([])
  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0
      // Measure render time
      const renderStart = performance.now()
      const renderTime = performance.now() - renderStart
      // Measure memory usage
      let memoryUsage = 0
      if ('memory' in performance) {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory
        memoryUsage = memory?.usedJSHeapSize || 0
      }
      // Measure FPS (simplified)
      let fps = 60
      if ('requestAnimationFrame' in window) {
    let lastTime = performance.now()
        let frameCount = 0
        const measureFPS = () => {
          const currentTime = performance.now()
          frameCount++
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
            frameCount = 0
            lastTime = currentTime
  }
          if (isMonitoring) {
    requestAnimationFrame(measureFPS)
  }
        }
        requestAnimationFrame(measureFPS)
      }
      const newMetrics: PerformanceMetrics = {,
        loadTime,
        renderTime,
        memoryUsage,
        fps
      }
      setMetrics(newMetrics)
      onMetricsUpdate?.(newMetrics)
      // Check for performance alerts
      checkPerformanceAlerts(newMetrics)
    }
    if (isMonitoring) {
    updateMetrics()
      const interval = setInterval(updateMetrics, 1000)
      return () =&gt; clearInterval(interval)
  }
  }, [isMonitoring, onMetricsUpdate])
  const checkPerformanceAlerts = (currentMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = [],
    if (currentMetrics.loadTime > 3000) {
      newAlerts.push('Load time is above 3 seconds')}if (currentMetrics.memoryUsage > 50 * 1024 * 1024) {// 50MB;
      newAlerts.push('Memory usage is high')}if (currentMetrics.fps < 30) {newAlerts.push('FPS is below 30')}setAlerts(newAlerts);
  }
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];];];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400'}return(<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div></div>)</div>
      <div className="flex items-center justify-between mb-6"></div></div>
        <h3 className="text-xl font-semibold text-white flex items-center gap-2"></h3></h3>
          <Activity className="w-5 h-5" />
          Performance Dashboard;
  </
        <button;
          onClick={toggleMonitoring}className="{`px-4" py-2 rounded-lg font-medium transition-colors ${
            isMonitoring;
              ? 'bg-red-600 text-white hover: bg-red-700',
              : 'bg-green-600 text-white hover: bg-green-700',}`}
        ></button>{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'</button&gt;} </button>
      </div>
    if (bytes === 0) return '0 Bytes'
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  const getPerformanceColor = (value: number, thresholds: { good: number, warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400'
    if (value <= thresholds.warning) return 'text-yellow-400'
    return 'text-red-400'
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                PerformanceDashboard
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PerformanceDashboardPage;
=======
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target } from 'lucide-react';

interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">PerformanceDashboard Title</h3>
      <p className="text-gray-300 mb-4">PerformanceDashboard description goes here.</p>
      {children}
    </div>
  );
};

export default PerformanceDashboard;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
