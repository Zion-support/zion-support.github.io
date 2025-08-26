import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  TrendingUp,
  BarChart3,
  Brain,
  Atom,
  Globe,
  Shield,
  Zap,
  Eye,
  Clock,
  Award
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function ReportsPage() {
  const reportCategories = [
    {
      title: "Automation Health",
      description: "Monitor the health and performance of all autonomous systems",
      icon: "📊",
      link: "/reports/automation-health",
      color: "blue"
    },
    {
      title: "Performance Metrics",
      description: "Track system performance, uptime, and optimization metrics",
      icon: "⚡",
      link: "/reports/performance",
      color: "green"
    },
    {
      title: "Security Reports",
      description: "View security audits, threat detection, and vulnerability reports",
      icon: "🔒",
      link: "/reports/security",
      color: "red"
    },
    {
      title: "Content Analytics",
      description: "Analyze content performance, engagement, and optimization",
      icon: "📈",
      link: "/reports/content",
      color: "purple"
    }
  ];

  const recentReports = [
    {
      title: "Weekly Performance Report",
      date: "2025-01-17",
      status: "Completed",
      type: "Performance"
    },
    {
      title: "Security Audit Report",
      date: "2025-01-16",
      status: "Completed",
      type: "Security"
    },
    {
      title: "Content Generation Report",
      date: "2025-01-15",
      status: "In Progress",
      type: "Content"
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Research Reports - Zion Tech Group | Industry Analysis & Technology Insights</title>
          <meta name="description" content="Access Zion Tech Group's comprehensive research reports, whitepapers, and industry analysis covering AI, quantum computing, cybersecurity, and emerging technologies." />
        </Head>

        <QuickNavigation />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={category.href}
              className="group bg-slate-900/50 border border-white/10 rounded-lg p-8 hover:border-cyan-400/50 transition-all hover:scale-105"
            >
              Research Reports
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>{reports.length} Reports Available</span>
              </span>
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.downloads, 0))} Downloads</span>
              </span>
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{formatNumber(reports.reduce((sum, r) => sum + r.views, 0))} Views</span>
              </span>
            </motion.div>
          </div>
        </div>

        {/* Report Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Report Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportCategories.map((category, index) => (
              <Link 
                key={index}
                href={category.link}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>

          {/* Recent Reports */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Reports</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Latest Activity</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {recentReports.map((report, index) => (
                  <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{report.title}</h4>
                        <p className="text-sm text-gray-500">{report.date} • {report.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        report.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2"
                >
                  <span>Request Custom Research</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  View Research Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}