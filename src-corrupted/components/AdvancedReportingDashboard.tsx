import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  Download,
  Eye,
  FileText,
  Search,
  Server,
  Share2,
  Shield,
  Star,
  TrendingUp,
  Users,
  X
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

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

interface AdvancedReportingDashboardProps {
  showMetrics?: boolean;
  showFilters?: boolean;
  showCharts?: boolean;
  maxReports?: number;
}

export const AdvancedReportingDashboard: React.FC<AdvancedReportingDashboardProps> = ({
  showMetrics = true,
  showFilters = true,
  showCharts = true,
  maxReports = 15
}) => {
  const [reports, setReports] = useState<ReportData[]>([]);
  const [filteredReports, setFilteredReports] = useState<ReportData[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'detailed'>('grid');
  const [showReportForm, setShowReportForm] = useState(false);
  const [selectedReport, setSelectedReport] = useState<ReportData | null>(null);
  const [showReportDetails, setShowReportDetails] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'rating' | 'priority' | 'title'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Sample report data
  useEffect(() => {
    const sampleReports: ReportData[] = [
      {
        id: '1',
        title: 'Q4 Financial Performance Analysis',
        type: 'financial',
        category: 'Financial Reports',
        data: {
          revenue: 2500000,
          expenses: 1800000,
          profit: 700000,
          growth: 15.5,
          keyMetrics: ['Revenue Growth', 'Profit Margin', 'Cost Efficiency']
        },
        lastUpdated: '2024-01-15',
        status: 'active',
        priority: 'high',
        tags: ['Finance', 'Q4', 'Performance', 'Analysis'],
        description: 'Comprehensive analysis of Q4 financial performance including revenue, expenses, and profit margins',
        author: 'Sarah Johnson',
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
          userSatisfaction: 4.6,
          keyMetrics: ['Accuracy', 'Response Time', 'Uptime', 'User Satisfaction']
        },
        lastUpdated: '2024-01-14',
        status: 'active',
        priority: 'critical',
        tags: ['AI', 'Performance', 'Metrics', 'Machine Learning'],
        description: 'Detailed performance metrics for AI services including accuracy, response time, and uptime',
        author: 'Michael Chen',
        views: 189,
        downloads: 67,
        rating: 4.9
      },
      {
        id: '3',
        title: 'Cybersecurity Threat Assessment',
        type: 'security',
        category: 'Security Reports',
        data: {
          threatsDetected: 156,
          incidentsResolved: 154,
          responseTime: 2.3,
          riskLevel: 'Medium',
          keyMetrics: ['Threats Detected', 'Incidents Resolved', 'Response Time', 'Risk Level']
        },
        lastUpdated: '2024-01-13',
        status: 'active',
        priority: 'high',
        tags: ['Security', 'Threats', 'Assessment', 'Risk Management'],
        description: 'Comprehensive assessment of cybersecurity threats and incident response metrics',
        author: 'David Kim',
        views: 312,
        downloads: 134,
        rating: 4.7
      },
      {
        id: '4',
        title: 'Cloud Infrastructure Utilization',
        type: 'operational',
        category: 'Operational Reports',
        data: {
          cpuUtilization: 78.5,
          memoryUsage: 82.3,
          storageUsage: 65.8,
          networkTraffic: 45.2,
          keyMetrics: ['CPU Utilization', 'Memory Usage', 'Storage Usage', 'Network Traffic']
        },
        lastUpdated: '2024-01-12',
        status: 'active',
        priority: 'medium',
        tags: ['Cloud', 'Infrastructure', 'Utilization', 'Monitoring'],
        description: 'Real-time monitoring of cloud infrastructure utilization and performance metrics',
        author: 'Lisa Thompson',
        views: 167,
        downloads: 56,
        rating: 4.5
      },
      {
        id: '5',
        title: 'Customer Satisfaction Survey Results',
        type: 'customer',
        category: 'Customer Reports',
        data: {
          overallSatisfaction: 4.6,
          netPromoterScore: 72,
          responseRate: 89.5,
          topConcerns: ['Response Time', 'Documentation', 'Support Quality'],
          keyMetrics: ['Overall Satisfaction', 'NPS', 'Response Rate', 'Top Concerns']
        },
        lastUpdated: '2024-01-11',
        status: 'active',
        priority: 'medium',
        tags: ['Customer', 'Satisfaction', 'Survey', 'NPS'],
        description: 'Analysis of customer satisfaction survey results and net promoter score metrics',
        author: 'Alex Wong',
        views: 203,
        downloads: 78,
        rating: 4.6
      }
    ];

    setReports(sampleReports);
    setFilteredReports(sampleReports);
  }, []);

  // Filter and sort reports
  useEffect(() => {
    let filtered = reports;

    if (selectedType !== 'all') {
      filtered = filtered.filter(r => r.type === selectedType);
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(r => r.status === selectedStatus);
    }

    if (searchQuery) {
      filtered = filtered.filter(r => 
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort reports
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.lastUpdated).getTime();
          bValue = new Date(b.lastUpdated).getTime();
          break;
        case 'views':
          aValue = a.views;
          bValue = b.views;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'priority':
          const priorityOrder = { low: 1, medium: 2, high: 3, critical: 4 };
          aValue = priorityOrder[a.priority as keyof typeof priorityOrder];
          bValue = priorityOrder[b.priority as keyof typeof priorityOrder];
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        default:
          aValue = 0;
          bValue = 0;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredReports(filtered.slice(0, maxReports));
  }, [reports, selectedType, selectedCategory, selectedStatus, searchQuery, sortBy, sortOrder, maxReports]);

  // Calculate report metrics
  const reportMetrics = {
    totalReports: reports.length,
    activeReports: reports.filter(r => r.status === 'active').length,
    totalViews: reports.reduce((sum, r) => sum + r.views, 0),
    totalDownloads: reports.reduce((sum, r) => sum + r.downloads, 0),
    averageRating: reports.reduce((sum, r) => sum + r.rating, 0) / reports.length || 0,
    topCategories: (() => {
      const catCounts = reports.reduce((acc, r) => {
        acc[r.category] = (acc[r.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      return Object.entries(catCounts)
        .map(([name, count]) => ({
          name,
          count,
          percentage: (count / reports.length) * 100
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    })(),
    recentActivity: [
      { action: 'Report viewed', timestamp: '2 minutes ago', user: 'John Doe' },
      { action: 'Report downloaded', timestamp: '5 minutes ago', user: 'Jane Smith' },
      { action: 'New report created', timestamp: '1 hour ago', user: 'Mike Johnson' },
      { action: 'Report updated', timestamp: '2 hours ago', user: 'Sarah Wilson' }
    ]
  };

  // Get type icon and color
  const getTypeDisplay = (type: string) => {
    const types = {
      financial: { icon: <DollarSign className="w-4 h-4" />, color: 'text-green-400 bg-green-400/20' },
      operational: { icon: <Activity className="w-4 h-4" />, color: 'text-blue-400 bg-blue-400/20' },
      performance: { icon: <TrendingUp className="w-4 h-4" />, color: 'text-purple-400 bg-purple-400/20' },
      security: { icon: <Shield className="w-4 h-4" />, color: 'text-red-400 bg-red-400/20' },
      customer: { icon: <Users className="w-4 h-4" />, color: 'text-yellow-400 bg-yellow-400/20' },
      technical: { icon: <Server className="w-4 h-4" />, color: 'text-zion-cyan bg-zion-cyan/20' }
    };
    return types[type as keyof typeof types] || { icon: <FileText className="w-4 h-4" />, color: 'text-zinc-400 bg-zinc-400/20' };
  };

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'text-green-400 bg-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'high': return 'text-orange-400 bg-orange-400/20';
      case 'critical': return 'text-red-400 bg-red-400/20';
      default: return 'text-zinc-400 bg-zinc-400/20';
    }
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'archived': return 'text-zinc-400 bg-zinc-400/20';
      case 'draft': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-zinc-400 bg-zinc-400/20';
    }
  };

  // Handle report actions
  const handleReportAction = (reportId: string, action: 'view' | 'download' | 'share' | 'print') => {
    const report = reports.find(r => r.id === reportId);
    if (report) {
      switch (action) {
        case 'view':
          setSelectedReport(report);
          setShowReportDetails(true);
          break;
        case 'download':
          // Simulate download
          console.log(`Downloading ${report.title}`);
          break;
        case 'share':
          // Simulate share
          console.log(`Sharing ${report.title}`);
          break;
        case 'print':
          // Simulate print
          console.log(`Printing ${report.title}`);
          break;
      }
    }
  };

  // Export report data
  const exportReport = (report: ReportData, format: 'pdf' | 'excel' | 'csv') => {
    console.log(`Exporting ${report.title} as ${format}`);
    // In a real implementation, this would generate and download the file
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AdvancedReportingDashboard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AdvancedReportingDashboard;
