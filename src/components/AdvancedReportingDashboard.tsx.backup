import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  FileText,
  Download,
  Eye,
  Star,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Shield,
  Server,
  X,
  Plus,
  Calendar,
  User,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

interface ReportData {
  id: string;
  title: string;
  type: 'financial' | 'operational' | 'performance' | 'security' | 'customer' | 'technical';
  category: string;
  data: any;
  lastUpdated: string;
  status: 'active' | 'archived' | 'draft';
  priority: 'low' | 'medium' | 'high' | 'critical';
  tags: string[];
  description: string;
  author: string;
  views: number;
  downloads: number;
  rating: number;
}

interface ReportMetrics {
  totalReports: number;
  activeReports: number;
  totalViews: number;
  totalDownloads: number;
  averageRating: number;
  topCategories: Array<any>;
  recentActivity: Array<any>;
}

interface AdvancedReportingDashboardProps {
  showMetrics?: boolean;
  showFilters?: boolean;
  showCharts?: boolean;
  maxReports?: number;
}

export function AdvancedReportingDashboard({
  showMetrics = true,
  showFilters = true,
  showCharts = true,
  maxReports = 15
}: AdvancedReportingDashboardProps) {
  const [reports, setReports] = useState<ReportData[]>([]);
  const [filteredReports, setFilteredReports] = useState<ReportData[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showReportForm, setShowReportForm] = useState(false);
  const [selectedReport, setSelectedReport] = useState<ReportData | null>(null);
  const [showReportDetails, setShowReportDetails] = useState(false);
  const [sortBy, setSortBy] = useState<string>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Sample report data
  useEffect(() => {
    const sampleReports: ReportData[] = [{

        id: '1',
        title: 'Q4 Financial Performance Analysis',
        type: 'financial',
        category: 'Financial Reports',
        data: {

          revenue: 2500000,
          expenses: 1800000,
          profit: 700000,
<<<<<<< HEAD
          growth: 15.5,
          keyMetrics: ['Revenue Growth', 'Profit Margin', 'Cost Efficiency']
        },
        lastUpdated: '2024-01-15',
        status: 'active',
        priority: 'high',
        tags: ['Finance', 'Q4', 'Performance', 'Analysis'],
        description: 'Comprehensive analysis of Q4 financial performance including revenue, expenses, and profit margins',
        author: 'Sarah Johnson',
=======
          growth: 15.5,'
          keyMetrics['Revenue Growth', 'Profit Margin', 'Cost Efficiency']},;'
        lastUpdated: '2024-01-15','
        status: 'active','
        priority: 'high','
        tags['Finance', 'Q4', 'Performance', 'Analysis'],;'
        description: 'Comprehensive analysis of Q4 financial performance including revenue, expenses, and profit margins','        author: 'Sarah Johnson',
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
        views: 245,
        downloads: 89,
        rating: 4.8
      },
      {

        id: '2',
        title: 'AI Services Performance Metrics',
        type: 'performance',
        category: 'Performance Reports',
        data: {

          accuracy: 94.2,
          responseTime: 1.8,
          uptime: 99.9,
<<<<<<< HEAD
          userSatisfaction: 4.6,
          keyMetrics: ['Accuracy', 'Response Time', 'Uptime', 'User Satisfaction']
        },
        lastUpdated: '2024-01-14',
        status: 'active',
        priority: 'medium',
        tags: ['AI', 'Performance', 'Metrics', 'Services'],
        description: 'Detailed performance analysis of AI services including accuracy, response times, and user satisfaction',
        author: 'Mike Chen',
        views: 189,
        downloads: 67,
        rating: 4.6
      },
      {

        id: '3',
        title: 'Security Audit Report 2024',
        type: 'security',
        category: 'Security Reports',
        data: {
          vulnerabilities: 3,
          criticalIssues: 0,
          complianceScore: 98.5,
          lastScan: '2024-01-13',
          keyMetrics: ['Vulnerabilities', 'Compliance Score', 'Security Posture']
        },
        lastUpdated: '2024-01-13',
        status: 'active',
        priority: 'critical',
        tags: ['Security', 'Audit', 'Compliance', '2024'],
        description: 'Annual security audit report covering vulnerabilities, compliance, and security recommendations',
        author: 'Alex Thompson',
        views: 156,
        downloads: 45,
        rating: 4.9
      }
    ];

    setReports(sampleReports);
    setFilteredReports(sampleReports);
  }, []);

  // Filter and sort reports
  useEffect(() => {
    let filtered = reports.filter(report => {
      const typeMatch = selectedType === 'all' || report.type === selectedType;
      const categoryMatch = selectedCategory === 'all' || report.category === selectedCategory;
      const statusMatch = selectedStatus === 'all' || report.status === selectedStatus;
      const searchMatch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchQuery.toLowerCase());

      return typeMatch && categoryMatch && statusMatch && searchMatch;
    });

    // Sort reports
    filtered.sort((a, b) => {

      switch (sortBy) {
        case 'title':
          aValue = a.title;
          bValue = b.title;
          break;
        case 'date':
          aValue = new Date(a.lastUpdated);
          bValue = new Date(b.lastUpdated);
          break;
        case 'views':
          aValue = a.views;
          bValue = b.views;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        default:
          aValue = new Date(a.lastUpdated);
          bValue = new Date(b.lastUpdated);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredReports(filtered.slice(0, maxReports));
  }, [reports, selectedType, selectedCategory, selectedStatus, searchQuery, sortBy, sortOrder, maxReports]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-700';
      case 'high': return 'bg-orange-100 text-orange-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'financial': return <BarChart3 className="w-4 h-4" />;
      case 'performance': return <TrendingUp className="w-4 h-4" />;
      case 'security': return <Shield className="w-4 h-4" />;
      case 'technical': return <Server className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Advanced Reporting Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive reporting and analytics platform
          </p>
        </div>

        <button
          onClick={() => setShowReportForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Report
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="financial">Financial</option>
              <option value="operational">Operational</option>
              <option value="performance">Performance</option>
              <option value="security">Security</option>
              <option value="customer">Customer</option>
              <option value="technical">Technical</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="archived">Archived</option>
              <option value="draft">Draft</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">Date</option>
              <option value="title">Title</option>
              <option value="views">Views</option>
              <option value="rating">Rating</option>
            </select>

            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}

      {/* Reports Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
      }`}>
        {filteredReports.map(report => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {getTypeIcon(report.type)}
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {report.type}
                </span>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(report.priority)}`}>
                {report.priority}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {report.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {report.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {report.views}
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                {report.downloads}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                {report.rating}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {report.author}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(report.lastUpdated).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => {
                  setSelectedReport(report);
                  setShowReportDetails(true);
                }}
                className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
              <button className="px-3 py-2 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No reports found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your filters or create a new report.
          </p>
        </div>
      )}
    </div>
  );
}
