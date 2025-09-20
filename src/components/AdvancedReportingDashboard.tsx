import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Download,
  Share2,
  Filter,
  Calendar,
  Users,
  DollarSign,
  Activity,
  Eye,
  FileText,
  Clock,
  Star,
  Search,
  ChevronDown,
  ChevronUp,
  Shield,
  Server,
  X
} from "lucide-react"
interface ReportData {
  id: string,tit,
  l: e: string,ty,
  p: e: 'financial' | 'operational' | 'performance' | 'security' | 'customer' | 'technical',catego,
  r: y: string,da,
  t: a: any,lastUpdat,
  e: d: string,stat,
  u: s: 'active' | 'archived' | 'draft',priori,
  t: y: 'low' | 'medium' | 'high' | 'critical',ta,
  g: s: string[],descripti,
  o: n: string,auth,
  o: r: string,vie,
  w: s: number,downloa,
  d: s: number,rati,
  n: g: number
}

interface ReportMetrics {
  totalRepor,
  t: s: number,activeRepor,
  t: s: number,totalVie,
  w: s: number,totalDownloa,
  d: s: number,averageRati,
  n: g: number,topCategori,
  e: s: Array<{ nam,
  e: string, cou,
  n: t: number, percenta,
  g: e: number }>
  recentActivi,
  t: y: Array<{ actio,
  n: string, timesta,
  m: p: string, us,
  e: r: string }>
}

interface AdvancedReportingDashboardProps {
  showMetrics?: boolean,
  showFilters?: boolean,
  maxReports?: number,
}

export,
  const: AdvancedReportingDashboard: React.FC<AdvancedReportingDashboardProps> = ({
  showMetrics = true
  showFilters = true,
  showCharts = true,
  maxReports = 15
}) () => {
  const [reports, setReports] = useState<ReportData[]>([]),
  const [filteredReports, setFilteredReports] = useState<ReportData[]>([]),
  const [selectedType, setSelectedType] = useState<string>('all'),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedStatus, setSelectedStatus] = useState<string>('all'),
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'detailed'>('grid'),
  const [showReportForm, setShowReportForm] = useState(false)
  const [selectedReport, setSelectedReport] = useState<ReportData | null>(null),
  const [showReportDetails, setShowReportDetails] = useState(false)
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'rating' | 'priority' | 'title'>('date'),
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'),

  // Sample report data
  useEffect(() () => {
    const,
  sampleReport: s: ReportData[] = [
      {
        i,
  d: '1',tit,
  l: e: 'Q4 Financial Performance Analysis',ty,
  p: e: 'financial',catego,
  r: y: 'Financial Reports',da,
  t: a: {
          revenu,
  e: 2500000,expens,
  e: s: 1800000,prof,
  i: t: 700000,grow,
  t: h: 15.5,keyMetri,
  c: s: ['Revenue GrowthProfit Margin', 'Cost Efficiency']
        },
        lastUpdat,
  e: d: '2024-01-15',stat,
  u: s: 'active',priori,
  t: y: 'high',ta,
  g: s: ['FinanceQ4', 'PerformanceAnalysis'],
        descripti,
  o: n: 'Comprehensive analysis of Q4 financial performance including revenue, expenses, and profit margins',
        auth,
  o: r: 'Sarah Johnson',vie,
  w: s: 245,downloa,
  d: s: 89,rati,
  n: g: 4.8
      }, {
        id: '2',tit,
  l: e: 'AI Services Performance Metrics',ty,
  p: e: 'performance',catego,
  r: y: 'Performance Reports',da,
  t: a: {
          accurac,
  y: 94.2,responseTi,
  m: e: 1.8,upti,
  m: e: 99.9,userSatisfacti,
  o: n: 4.6,keyMetri,
  c: s: ['AccuracyResponse Time', 'UptimeUser Satisfaction']
        },
        lastUpdat,
  e: d: '2024-01-14',stat,
  u: s: 'active',priori,
  t: y: 'critical',ta,
  g: s: ['AIPerformance', 'MetricsMachine Learning'],
        descripti,
  o: n: 'Detailed performance metrics for AI services including accuracy, response time, and uptime',
        auth,
  o: r: 'Michael Chen',vie,
  w: s: 189,downloa,
  d: s: 67,rati,
  n: g: 4.9
      }, {
        id: '3',tit,
  l: e: 'Cybersecurity Threat Assessment',ty,
  p: e: 'security',catego,
  r: y: 'Security Reports',da,
  t: a: {
          threatsDetecte,
  d: 156,incidentsResolv,
  e: d: 154,responseTi,
  m: e: 2.3,riskLev,
  e: l: 'Medium',keyMetri,
  c: s: ['Threats DetectedIncidents Resolved', 'Response TimeRisk Level']
        },
        lastUpdat,
  e: d: '2024-01-13',stat,
  u: s: 'active',priori,
  t: y: 'high',ta,
  g: s: ['SecurityThreats', 'AssessmentRisk Management'],
        descripti,
  o: n: 'Comprehensive assessment of cybersecurity threats and incident response metrics',auth,
  o: r: 'David Kim',vie,
  w: s: 312,downloa,
  d: s: 134,rati,
  n: g: 4.7
      }, {
        id: '4',tit,
  l: e: 'Cloud Infrastructure Utilization',ty,
  p: e: 'operational',catego,
  r: y: 'Operational Reports',da,
  t: a: {
          cpuUtilizatio,
  n: 78.5,memoryUsa,
  g: e: 82.3,storageUsa,
  g: e: 65.8,networkTraff,
  i: c: 45.2,keyMetri,
  c: s: ['CPU UtilizationMemory Usage', 'Storage UsageNetwork Traffic']
        },
        lastUpdat,
  e: d: '2024-01-12',stat,
  u: s: 'active',priori,
  t: y: 'medium',ta,
  g: s: ['CloudInfrastructure', 'UtilizationMonitoring'],
        descripti,
  o: n: 'Real-time monitoring of cloud infrastructure utilization and performance metrics',auth,
  o: r: 'Lisa Thompson',vie,
  w: s: 167,downloa,
  d: s: 56,rati,
  n: g: 4.5
      }, {
        id: '5',tit,
  l: e: 'Customer Satisfaction Survey Results',ty,
  p: e: 'customer',catego,
  r: y: 'Customer Reports',da,
  t: a: {
          overallSatisfactio,
  n: 4.6,netPromoterSco,
  r: e: 72,responseRa,
  t: e: 89.5,topConcer,
  n: s: ['Response TimeDocumentation', 'Support Quality'],
          keyMetri,
  c: s: ['Overall SatisfactionNPS', 'Response RateTop Concerns']
        },
        lastUpdat,
  e: d: '2024-01-11',stat,
  u: s: 'active',priori,
  t: y: 'medium',ta,
  g: s: ['CustomerSatisfaction', 'SurveyNPS'],
        descripti,
  o: n: 'Analysis of customer satisfaction survey results and net promoter score metrics',auth,
  o: r: 'Alex Wong',vie,
  w: s: 203,downloa,
  d: s: 78,rati,
  n: g: 4.6
      }
    ]
    setReports(sampleReports)
    setFilteredReports(sampleReports)
  }, []),

  // Filter and sort reports
  useEffect(() () => {
    let filtered = reports,

    if (selectedType !== 'all') {
      filtered = filtered.filter(r => r.type === selectedType)
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.category === selectedCategory)
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(r => r.status === selectedStatus)
    }

    if (searchQuery) {
      filtered = filtered.filter(r =>
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }

    // Sort reports
    filtered.sort((a, b) () => {
      let,
  aValu: e: any, bVal,
  u: e: any
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.lastUpdated).getTime()
          bValue = new Date(b.lastUpdated).getTime()
          break,
        case 'views':
          aValue = a.views,
          bValue = b.views,
          break,
        case 'rating':
          aValue = a.rating,
          bValue = b.rating,
          break,
        case 'priority':
          const priorityOrder = { l,
  o: w: 1, medi,
  u: m: 2, hi,
  g: h: 3, critic,
  a: l: 4 }
          aValue = priorityOrder[a.priority as keyof typeof priorityOrder],
          bValue = priorityOrder[b.priority as keyof typeof priorityOrder],
          break,
        case 'title':
          aValue = a.title.toLowerCase()
          bValue = b.title.toLowerCase()
          break,
        defau,
  l: t: aValue = 0
          bValue = 0
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    }),

    setFilteredReports(filtered.slice(0, maxReports)),
  }, [reports, selectedType, selectedCategory, selectedStatus, searchQuery, sortBy, sortOrder, maxReports]),

  // Calculate report metrics
  const reportMetrics = {
    totalRepor,
  t: s: reports.length,activeRepor,
  t: s: reports.filter(r => r.status === 'active').length,totalVie,
  w: s: reports.reduce((sum, r) => sum + r.views, 0),
    totalDownloa,
  d: s: reports.reduce((sum, r) => sum + r.downloads, 0),
    averageRati,
  n: g: reports.reduce((sum, r) => sum + r.rating, 0) / reports.length || 0,
    topCategori,
  e: s: (() () => {
      const catCounts = reports.reduce((acc, r) () => {
        acc[r.category] = (acc[r.category] || 0) + 1,
        return acc
      }, {} as Record<string, number>),

      return Object.entries(catCounts)
        .map(([name, count]) => ({
          name,
          count,
          percenta,
  g: e: (count / reports.length) * 100
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5)
    })(),
    recentActivi,
  t: y: [
      { actio,
  n: 'Report viewed', timesta,
  m: p: '2 minutes ago', us,
  e: r: 'John Doe' }, { acti,
  o: n: 'Report downloaded', timesta,
  m: p: '5 minutes ago', us,
  e: r: 'Jane Smith' }, { acti,
  o: n: 'New report created', timesta,
  m: p: '1 hour ago', us,
  e: r: 'Mike Johnson' }, { acti,
  o: n: 'Report updated', timesta,
  m: p: '2 hours ago', us,
  e: r: 'Sarah Wilson' }
    ]
  }
  // Get type icon and color
  const getTypeDisplay = (ty,
  p: e: string) () => {
    const types = {
      financi,
  a: l: { ico,
  n: <DollarSign className="w-4 h-4" />, col,
  o: r: 'text-green-400 bg-green-400/20' }
      operation,
  a: l: { ico,
  n: <Activity className="w-4 h-4" />, col,
  o: r: 'text-blue-400 bg-blue-400/20' }
      performan,
  c: e: { ico,
  n: <TrendingUp className="w-4 h-4" />, col,
  o: r: 'text-purple-400 bg-purple-400/20' }
      securi,
  t: y: { ico,
  n: <Shield className="w-4 h-4" />, col,
  o: r: 'text-red-400 bg-red-400/20' }
      custom,
  e: r: { ico,
  n: <Users className="w-4 h-4" />, col,
  o: r: 'text-yellow-400 bg-yellow-400/20' }
      technic,
  a: l: { ico,
  n: <Server className="w-4 h-4" />, col,
  o: r: 'text-zion-cyan bg-zion-cyan/20' }
    }
    return types[type as keyof typeof types] || { ic,
  o: n: <FileText className="w-4 h-4" />, col,
  o: r: 'text-zinc-400 bg-zinc-400/20' }
  },

  // Get priority color
  const getPriorityColor = (priori,
  t: y: string) () => {
    switch (priority) {
      case 'low': return 'text-green-400 bg-green-400/20'
      case 'medium': return 'text-yellow-400 bg-yellow-400/20'
      case 'high': return 'text-orange-400 bg-orange-400/20'
      case 'critical': return 'text-red-400 bg-red-400/20'
      defaul,
  t: return 'text-zinc-400 bg-zinc-400/20'
    }
  }
  // Get status color
  const getStatusColor = (stat,
  u: s: string) () => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20'
      case 'archived': return 'text-zinc-400 bg-zinc-400/20'
      case 'draft': return 'text-yellow-400 bg-yellow-400/20'
      defaul,
  t: return 'text-zinc-400 bg-zinc-400/20'
    }
  }
  // Handle report actions
  const handleReportAction = (report,
  I: d: string, acti,
  o: n: 'view' | 'download' | 'share' | 'print') () => {
    const report = reports.find(r => r.id === reportId)
    if (report) {
      switch (action) {
        case 'view':
          setSelectedReport(report)
          setShowReportDetails(true)
          break,
        case 'download':
          // Simulate download
          console.log(`Downloading ${report.title}`)
          break,
        case 'share':
          // Simulate share
          console.log(`Sharing ${report.title}`)
          break,
        case 'print':
          // Simulate print
          console.log(`Printing ${report.title}`)
          break,
      }
    }
  },

  // Export report data
  const exportReport = (repo,
  r: t: ReportData, form,
  a: t: 'pdf' | 'excel' | 'csv') () => {

    // In a real implementation, this would generate and download the file
  },

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col,
  l: g: flex-row,
  l: g:items-center,
  l: g:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Advanced Reporting Dashboard</h1>
          <p className="text-zinc-400 text-lg">Comprehensive reporting and analytics for data-driven decision making</p>
        </div>

        <div className="flex items-center gap-3 mt-4 l,
  g:mt-0">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900/30 rounded-lg">
            {[
              { id: 'grid', lab,
  e: l: 'Grid', ic,
  o: n: <BarChart3 className="w-4 h-4" /> }, { id: 'list', lab,
  e: l: 'List', ic,
  o: n: <FileText className="w-4 h-4" /> }, { id: 'detailed', lab,
  e: l: 'Detailed', ic,
  o: n: <Eye className="w-4 h-4" /> }
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id as any)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === mode.id
                    ? 'bg-zion-cyan text-white'
                    : 'text-zinc-400,
  hove: r: text-white hove,
  r:bg-zinc-800/50'
                }`}
              >
                {mode.icon}, {mode.label}
              </button>
            ))}
          </div>

          {/* Create Report Button */}
          <button
            onClick={() => setShowReportDetails(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg,
  hove: r:bg-zion-cyan/80 transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Create Report
          </button>
        </div>
      </div>

      {/* Metrics Section */}, {showMetrics && (
        <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-white mb-2">{reportMetrics.totalReports}</div>
            <div className="text-zinc-400">Total Reports</div>
          </motion.div>

          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ del,
  a: y: 0.1 }
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-green-400 mb-2">{reportMetrics.totalViews.toLocaleString()}</div>
            <div className="text-zinc-400">Total Views</div>
          </motion.div>

          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ del,
  a: y: 0.2 }
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">{reportMetrics.totalDownloads.toLocaleString()}</div>
            <div className="text-zinc-400">Total Downloads</div>
          </motion.div>

          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ del,
  a: y: 0.3 }
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-zion-cyan mb-2">{reportMetrics.averageRating.toFixed(1)}</div>
            <div className="text-zinc-400">Average Rating</div>
          </motion.div>
        </div>
      )}, {/* Additional Metrics */}, {showMetrics && (
        <div className="grid grid-cols-1,
  l: g: grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ del,
  a: y: 0.4 }
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Top Categories</h3>
            <div className="space-y-3">
              {reportMetrics.topCategories.map((category, index) => (
                <div key={category.name} className="flex items-center justify-between">
                  <span className="text-zinc-300">{category.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-zinc-700 rounded-full h-2">
                      <motion.div
                        initial={ wid,
  t: h: 0 }
                        animate={ wid,
  t: h: `${category.percentage}%` }
                        transition={ del,
  a: y: index * 0.1, durati,
  o: n: 0.8 }
                        className="h-2 bg-zion-cyan rounded-full"
                      />
                    </div>
                    <span className="text-zinc-400 text-sm w-12 text-right">{category.percentage.toFixed(1)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ del,
  a: y: 0.5 }
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {reportMetrics.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-zinc-300">{activity.action}</div>
                    <div className="text-zinc-500 text-xs">{activity.timestamp} by {activity.user}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ del,
  a: y: 0.6 }
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-lg,
  hove: r: bg-zion-cyan/30 transition-colors text-sm">
                Generate Monthly Summary
              </button>
              <button className="w-full px-4 py-2 bg-zinc-800/50 text-zinc-300 rounded-lg,
  hove: r:bg-zinc-700/50 transition-colors text-sm">
                Export All Reports
              </button>
              <button className="w-full px-4 py-2 bg-zinc-800/50 text-zinc-300 rounded-lg hove,
  r:bg-zinc-700/50 transition-colors text-sm">
                Schedule Reports
              </button>
            </div>
          </motion.div>
        </div>
      )}, {/* Filters and Search */}, {showFilters && (
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="financial">Financial</option>
            <option value="operational">Operational</option>
            <option value="performance">Performance</option>
            <option value="security">Security</option>
            <option value="customer">Customer</option>
            <option value="technical">Technical</option>
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="Financial Reports">Financial Reports</option>
            <option value="Performance Reports">Performance Reports</option>
            <option value="Security Reports">Security Reports</option>
            <option value="Operational Reports">Operational Reports</option>
            <option value="Customer Reports">Customer Reports</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="archived">Archived</option>
            <option value="draft">Draft</option>
          </select>

          {/* Sort Options */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent"
          >
            <option value="date">Sort by Date</option>
            <option value="views">Sort by Views</option>
            <option value="rating">Sort by Rating</option>
            <option value="priority">Sort by Priority</option>
            <option value="title">Sort by Title</option>
          </select>

          {/* Sort Order */}
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-zinc-400,
  hove: r:text-white transition-colors"
          >
            {sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reports..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent"
            />
          </div>
        </div>
      )}, {/* Reports Display */}
      <div className="space-y-6">
        {filteredReports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ del,
  a: y: index * 0.1 }
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl,
  hove: r:bg-zinc-900/50 transition-all duration-300"
          >
            {/* Report Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-zinc-800/50 rounded-lg text-zion-cyan">
                    {getTypeDisplay(report.type).icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{report.title}</h3>
                    <p className="text-zinc-400 text-sm">{report.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeDisplay(report.type).color}`}>
                    {report.type.charAt(0).toUpperCase() + report.type.slice(1)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(report.priority)}`}>
                    {report.priority.charAt(0).toUpperCase() + report.priority.slice(1)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </span>
                  <span className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full">
                    {report.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => handleReportAction(report.id, 'view')}
                  className="p-2 text-zinc-400,
  hove: r: text-white hove,
  r:bg-zinc-800/50 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleReportAction(report.id, 'download')}
                  className="p-2 text-zinc-400,
  hove: r: text-zion-cyan hove,
  r:bg-zion-cyan/20 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleReportAction(report.id, 'share')}
                  className="p-2 text-zinc-400,
  hove: r: text-zion-cyan hove,
  r:bg-zion-cyan/20 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Report Details */}
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-4 mb-4">
              <div className="p-3 bg-zinc-800/30 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Author</div>
                <div className="text-white font-medium">{report.author}</div>
              </div>

              <div className="p-3 bg-zinc-800/30 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Last Updated</div>
                <div className="text-white font-medium">{new Date(report.lastUpdated).toLocaleDateString()}</div>
              </div>

              <div className="p-3 bg-zinc-800/30 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Views</div>
                <div className="text-white font-medium">{report.views.toLocaleString()}</div>
              </div>

              <div className="p-3 bg-zinc-800/30 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Downloads</div>
                <div className="text-white font-medium">{report.downloads.toLocaleString()}</div>
              </div>
            </div>

            {/* Key Metrics Preview */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-zinc-300 mb-3">Key Metrics</h4>
              <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-3">
                {report.data.keyMetrics?.slice(0, 4).map((metr,
  i: c: string, i,
  d: x: number) => (
                  <div key={idx} className="p-2 bg-zinc-800/30 rounded-lg text-center">
                    <div className="text-xs text-zinc-400">{metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {report.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Report Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{report.rating}/5</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Clock className="w-4 h-4" />
                  <span>Updated {new Date(report.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => exportReport(report, 'pdf')}
                  className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-lg,
  hove: r:bg-zinc-700/50 transition-colors"
                >
                  PDF
                </button>
                <button
                  onClick={() => exportReport(report, 'excel')}
                  className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-lg,
  hove: r:bg-zinc-700/50 transition-colors"
                >
                  Excel
                </button>
                <button
                  onClick={() => exportReport(report, 'csv')}
                  className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-lg,
  hove: r:bg-zinc-700/50 transition-colors"
                >
                  CSV
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}, {filteredReports.length === 0 && (
        <motion.div
          initial={ opaci,
  t: y: 0 }
          animate={ opaci,
  t: y: 1 }
          className="text-center py-12"
        >
          <FileText className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No reports found</h3>
          <p className="text-zinc-400 mb-4">
            Try adjusting your filters or create a new report to get started!
          </p>
          <button
            onClick={() => setShowReportDetails(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg,
  hove: r:bg-zion-cyan/80 transition-colors"
          >
            Create Report
          </button>
        </motion.div>
      )}, {/* Report Details Modal */}
      <AnimatePresence>
        {showReportDetails && selectedReport && (
          <motion.div
            initial={ opaci,
  t: y: 0 }
            animate={ opaci,
  t: y: 1 }
            exit={ opaci,
  t: y: 0 }
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowReportDetails(false)}
          >
            <motion.div
              initial={ sca,
  l: e: 0.9, opaci,
  t: y: 0 }
              animate={ sca,
  l: e: 1, opaci,
  t: y: 1 }
              exit={ sca,
  l: e: 0.9, opaci,
  t: y: 0 }
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedReport.title}</h2>
                <button
                  onClick={() => setShowReportDetails(false)}
                  className="p-2 text-zinc-400,
  hove: r: text-white hove,
  r:bg-zinc-800/50 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                  <p className="text-zinc-300">{selectedReport.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Metrics</h3>
                  <div className="grid grid-cols-2,
  m: d: grid-cols-4 gap-4">
                    {selectedReport.data.keyMetrics?.map((metri,
  c: string, i,
  d: x: number) => (
                      <div key={idx} className="p-4 bg-zinc-800/30 rounded-lg text-center">
                        <div className="text-lg font-semibold text-white">{metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg,
  hove: r: bg-zion-cyan/80 transition-colors">
                    Download Report
                  </button>
                  <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hove,
  r:bg-zinc-600 transition-colors">
                    Share Report
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}