import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { EnhancedSEO } from '../components/EnhancedSEO';
import PerformanceDashboard from '../components/PerformanceDashboard';
import { 
  Activity, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Lightbulb,
  Rocket,
  Target,
  Award
} from 'lucide-react';

const Performance: React.FC = () => {
  return (
    <>
      <EnhancedSEO
        title="Performance Monitoring & Optimization | Zion Tech Group"
        description="Advanced performance monitoring, Core Web Vitals tracking, and AI-powered optimization recommendations for your applications."
        keywords="performance monitoring, Core Web Vitals, optimization, web performance, monitoring dashboard"
        canonical="/performance"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-6">
                <Activity className="w-10 h-10 text-blue-400" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Performance
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Monitoring
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Real-time performance insights, Core Web Vitals tracking, and AI-powered optimization recommendations 
                to ensure your applications deliver exceptional user experiences.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-blue-200"
                >
                  <Target className="w-5 h-5" />
                  <span>Core Web Vitals</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 text-green-200"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Real-time Monitoring</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 text-purple-200"
                >
                  <Lightbulb className="w-5 h-5" />
                  <span>AI Recommendations</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Performance Dashboard */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <PerformanceDashboard />
            </motion.div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Performance Features
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive performance monitoring and optimization tools designed for modern web applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Metrics</h3>
                <p className="text-slate-300">
                  Monitor Core Web Vitals, navigation timing, and custom performance metrics in real-time with 
                  instant updates and alerts.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Scoring</h3>
                <p className="text-slate-300">
                  Get instant performance grades and scores based on industry standards, with detailed breakdowns 
                  of what's working and what needs improvement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Recommendations</h3>
                <p className="text-slate-300">
                  Receive intelligent, prioritized optimization recommendations based on your performance data, 
                  with estimated impact and implementation guidance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Core Web Vitals</h3>
                <p className="text-slate-300">
                  Track FCP, LCP, CLS, and FID metrics with industry-standard thresholds and detailed 
                  performance analysis for each metric.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimization Tools</h3>
                <p className="text-slate-300">
                  Built-in tools for performance optimization including bundle analysis, image optimization, 
                  and code splitting recommendations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Excellence</h3>
                <p className="text-slate-300">
                  Achieve and maintain performance excellence with continuous monitoring, automated alerts, 
                  and performance trend analysis.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Optimization Strategies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Performance Optimization Strategies
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Proven strategies and best practices to optimize your application performance and user experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Loading Performance</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Optimize critical rendering path</li>
                    <li>• Implement lazy loading</li>
                    <li>• Use modern image formats</li>
                    <li>• Minimize render-blocking resources</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Runtime Performance</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Optimize JavaScript execution</li>
                    <li>• Implement code splitting</li>
                    <li>• Use Web Workers for heavy tasks</li>
                    <li>• Optimize CSS and animations</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">User Experience</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Reduce layout shifts</li>
                    <li>• Optimize interaction responsiveness</li>
                    <li>• Implement progressive enhancement</li>
                    <li>• Use skeleton screens and loading states</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Analytics</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Real-time performance monitoring</li>
                    <li>• Core Web Vitals tracking</li>
                    <li>• Performance budget enforcement</li>
                    <li>• Automated performance testing</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Metrics Overview */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Performance Metrics
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Understanding the metrics that matter for user experience and search engine optimization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">FCP</div>
                <div className="text-sm text-slate-300 mb-2">First Contentful Paint</div>
                <div className="text-xs text-slate-400">
                  < 1.8s: Good<br />
                  1.8s - 3s: Needs Improvement<br />
                  > 3s: Poor
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">LCP</div>
                <div className="text-sm text-slate-300 mb-2">Largest Contentful Paint</div>
                <div className="text-xs text-slate-400">
                  < 2.5s: Good<br />
                  2.5s - 4s: Needs Improvement<br />
                  > 4s: Poor
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">CLS</div>
                <div className="text-sm text-slate-300 mb-2">Cumulative Layout Shift</div>
                <div className="text-xs text-slate-400">
                  < 0.1: Good<br />
                  0.1 - 0.25: Needs Improvement<br />
                  > 0.25: Poor
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">FID</div>
                <div className="text-sm text-slate-300 mb-2">First Input Delay</div>
                <div className="text-xs text-slate-400">
                  < 100ms: Good<br />
                  100ms - 300ms: Needs Improvement<br />
                  > 300ms: Poor
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Performance?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Start monitoring your application performance today and get AI-powered insights 
                to deliver exceptional user experiences.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Performance;