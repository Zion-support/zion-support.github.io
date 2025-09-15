import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Clock, 
  Target, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  XCircle,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Share2,
  Filter,
  Search,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Brain,
  Cloud,
  Shield,
  Globe,
  Settings,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  Minus,
  Star,
  Award,
  Briefcase,
  Home,
  Building,
  Wifi,
  Server,
  Database,
  Lock,
  Unlock
} from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  type: 'human' | 'infrastructure' | 'software' | 'equipment' | 'facility';
  category: string;
  status: 'available' | 'allocated' | 'maintenance' | 'unavailable';
  priority: 'low' | 'medium' | 'high' | 'critical';
  capacity: number;
  currentUsage: number;
  location: string;
  department: string;
  cost: number;
  lastUpdated: string;
  tags: string[];
  description: string;
  manager: string;
  utilization: number;
}

interface ResourceStats {
  totalResources: number;
  availableResources: number;
  allocatedResources: number;
  maintenanceResources: number;
  totalCapacity: number;
  currentUtilization: number;
  averageCost: number;
  topDepartments: Array<{ name: string; count: number; percentage: number }>;
}

interface ResourceManagementSystemProps {
  showStats?: boolean;
  showFilters?: boolean;
  showCharts?: boolean;
  maxResources?: number;
}

export const ResourceManagementSystem: React.FC<ResourceManagementSystemProps> = ({
  showStats = true,
  showFilters = true,
  showCharts = true,
  maxResources = 20
}) => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'timeline'>('grid');
  const [showResourceForm, setShowResourceForm] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);

  // Sample resource data
  useEffect(() => {
    const sampleResources: Resource[] = [
      {
        id: '1',
        name: 'AI Development Team',
        type: 'human',
        category: 'Development',
        status: 'allocated',
        priority: 'high',
        capacity: 15,
        currentUsage: 12,
        location: 'San Francisco',
        department: 'Engineering',
        cost: 250000,
        lastUpdated: '2024-01-15',
        tags: ['AI', 'Machine Learning', 'Development'],
        description: 'Expert team specializing in AI and machine learning development',
        manager: 'Sarah Johnson',
        utilization: 80
      },
      {
        id: '2',
        name: 'Cloud Infrastructure Cluster',
        type: 'infrastructure',
        category: 'Cloud Computing',
        status: 'available',
        priority: 'critical',
        capacity: 1000,
        currentUsage: 750,
        location: 'AWS US-East-1',
        department: 'IT Operations',
        cost: 50000,
        lastUpdated: '2024-01-14',
        tags: ['Cloud', 'AWS', 'Infrastructure'],
        description: 'High-performance cloud computing cluster for enterprise applications',
        manager: 'Michael Chen',
        utilization: 75
      },
      {
        id: '3',
        name: 'Cybersecurity Suite',
        type: 'software',
        category: 'Security',
        status: 'available',
        priority: 'high',
        capacity: 100,
        currentUsage: 85,
        location: 'Corporate Network',
        department: 'Security',
        cost: 75000,
        lastUpdated: '2024-01-13',
        tags: ['Security', 'Threat Detection', 'Monitoring'],
        description: 'Comprehensive cybersecurity monitoring and threat detection system',
        manager: 'David Kim',
        utilization: 85
      },
      {
        id: '4',
        name: 'Data Center Facility',
        type: 'facility',
        category: 'Infrastructure',
        status: 'maintenance',
        priority: 'critical',
        capacity: 10000,
        currentUsage: 0,
        location: 'Austin, TX',
        department: 'Facilities',
        cost: 2000000,
        lastUpdated: '2024-01-12',
        tags: ['Data Center', 'Facility', 'Infrastructure'],
        description: 'Primary data center facility with redundant power and cooling',
        manager: 'Lisa Thompson',
        utilization: 0
      },
      {
        id: '5',
        name: 'DevOps Tools Suite',
        type: 'software',
        category: 'Development',
        status: 'allocated',
        priority: 'medium',
        capacity: 50,
        currentUsage: 45,
        location: 'Cloud Platform',
        department: 'Engineering',
        cost: 30000,
        lastUpdated: '2024-01-11',
        tags: ['DevOps', 'CI/CD', 'Automation'],
        description: 'Complete DevOps toolchain for continuous integration and deployment',
        manager: 'Alex Wong',
        utilization: 90
      }
    ];

    setResources(sampleResources);
    setFilteredResources(sampleResources);
  }, []);

  // Filter resources
  useEffect(() => {
    let filtered = resources;

    if (selectedType !== 'all') {
      filtered = filtered.filter(r => r.type === selectedType);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(r => r.status === selectedStatus);
    }

    if (selectedPriority !== 'all') {
      filtered = filtered.filter(r => r.priority === selectedPriority);
    }

    if (searchQuery) {
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredResources(filtered.slice(0, maxResources));
  }, [resources, selectedType, selectedStatus, selectedPriority, searchQuery, maxResources]);

  // Calculate resource stats
  const resourceStats = {
    totalResources: resources.length,
    availableResources: resources.filter(r => r.status === 'available').length,
    allocatedResources: resources.filter(r => r.status === 'allocated').length,
    maintenanceResources: resources.filter(r => r.status === 'maintenance').length,
    totalCapacity: resources.reduce((sum, r) => sum + r.capacity, 0),
    currentUtilization: resources.reduce((sum, r) => sum + r.utilization, 0) / resources.length || 0,
    averageCost: resources.reduce((sum, r) => sum + r.cost, 0) / resources.length || 0,
    topDepartments: (() => {
      const deptCounts = resources.reduce((acc, r) => {
        acc[r.department] = (acc[r.department] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      return Object.entries(deptCounts)
        .map(([name, count]) => ({
          name,
          count,
          percentage: (count / resources.length) * 100
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    })()
  };

  // Get status color and icon
  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'available':
        return { color: 'text-green-400 bg-green-400/20', icon: <CheckCircle className="w-4 h-4" /> };
      case 'allocated':
        return { color: 'text-blue-400 bg-blue-400/20', icon: <Users className="w-4 h-4" /> };
      case 'maintenance':
        return { color: 'text-yellow-400 bg-yellow-400/20', icon: <AlertCircle className="w-4 h-4" /> };
      case 'unavailable':
        return { color: 'text-red-400 bg-red-400/20', icon: <XCircle className="w-4 h-4" /> };
      default:
        return { color: 'text-zinc-400 bg-zinc-400/20', icon: <Circle className="w-4 h-4" /> };
    }
  };

  // Get type icon
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'human': return <Users className="w-5 h-5" />;
      case 'infrastructure': return <Server className="w-5 h-5" />;
      case 'software': return <Database className="w-5 h-5" />;
      case 'equipment': return <Briefcase className="w-5 h-5" />;
      case 'facility': return <Building className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
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

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Get utilization color
  const getUtilizationColor = (utilization: number) => {
    if (utilization >= 90) return 'text-red-400';
    if (utilization >= 75) return 'text-yellow-400';
    if (utilization >= 50) return 'text-blue-400';
    return 'text-green-400';
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Resource Management</h1>
          <p className="text-zinc-400 text-lg">Monitor and manage all company resources efficiently</p>
        </div>
        
        <div className="flex items-center gap-3 mt-4 lg:mt-0">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900/30 rounded-lg">
            {[
              { id: 'grid', label: 'Grid', icon: <Target className="w-4 h-4" /> },
              { id: 'list', label: 'List', icon: <BarChart3 className="w-4 h-4" /> },
              { id: 'timeline', label: 'Timeline', icon: <Calendar className="w-4 h-4" /> }
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id as any)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === mode.id
                    ? 'bg-zion-cyan text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {mode.icon}
                {mode.label}
              </button>
            ))}
          </div>

          {/* Add Resource Button */}
          <button
            onClick={() => setShowResourceForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Resource
          </button>
        </div>
      </div>

      {/* Stats Section */}
      {showStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-white mb-2">{resourceStats.totalResources}</div>
            <div className="text-zinc-400">Total Resources</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-green-400 mb-2">{resourceStats.availableResources}</div>
            <div className="text-zinc-400">Available</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">{resourceStats.allocatedResources}</div>
            <div className="text-zinc-400">Allocated</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-zion-cyan mb-2">{resourceStats.currentUtilization.toFixed(1)}%</div>
            <div className="text-zinc-400">Avg Utilization</div>
          </motion.div>
        </div>
      )}

      {/* Additional Stats */}
      {showStats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Total Capacity</h3>
            <div className="text-3xl font-bold text-zion-cyan mb-2">{resourceStats.totalCapacity.toLocaleString()}</div>
            <div className="text-zinc-400 text-sm">Combined capacity across all resources</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Average Cost</h3>
            <div className="text-3xl font-bold text-green-400 mb-2">{formatCurrency(resourceStats.averageCost)}</div>
            <div className="text-zinc-400 text-sm">Per resource annually</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Maintenance</h3>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{resourceStats.maintenanceResources}</div>
            <div className="text-zinc-400 text-sm">Resources under maintenance</div>
          </motion.div>
        </div>
      )}

      {/* Top Departments */}
      {showStats && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Top Departments by Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {resourceStats.topDepartments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-lg text-center"
              >
                <div className="text-2xl font-bold text-white mb-1">{dept.count}</div>
                <div className="text-zinc-400 text-sm mb-1">{dept.name}</div>
                <div className="text-zion-cyan text-xs">{dept.percentage.toFixed(1)}%</div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Filters and Search */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="human">Human Resources</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="software">Software</option>
            <option value="equipment">Equipment</option>
            <option value="facility">Facilities</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          >
            <option value="all">All Statuses</option>
            <option value="available">Available</option>
            <option value="allocated">Allocated</option>
            <option value="maintenance">Maintenance</option>
            <option value="unavailable">Unavailable</option>
          </select>

          {/* Priority Filter */}
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          >
            <option value="all">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>
        </div>
      )}

      {/* Resources Display */}
      <div className="space-y-6">
        {filteredResources.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hover:bg-zinc-900/50 transition-all duration-300"
          >
            {/* Resource Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-zinc-800/50 rounded-lg text-zion-cyan">
                    {getTypeIcon(resource.type)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{resource.name}</h3>
                    <p className="text-zinc-400 text-sm">{resource.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusDisplay(resource.status).color}`}>
                    <div className="flex items-center gap-1">
                      {getStatusDisplay(resource.status).icon}
                      {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
                    </div>
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(resource.priority)}`}>
                    {resource.priority.charAt(0).toUpperCase() + resource.priority.slice(1)}
                  </span>
                  <span className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full">
                    {resource.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-400/20 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resource Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="p-3 bg-zinc-800/30 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Location</div>
                <div className="text-white font-medium">{resource.location}</div>
              </div>
              
              <div className="p-3 bg-zinc-800/30 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Department</div>
                <div className="text-white font-medium">{resource.department}</div>
              </div>
              
              <div className="p-3 bg-zinc-800/30 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Manager</div>
                <div className="text-white font-medium">{resource.manager}</div>
              </div>
              
              <div className="p-3 bg-zinc-800/30 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Annual Cost</div>
                <div className="text-white font-medium">{formatCurrency(resource.cost)}</div>
              </div>
            </div>

            {/* Capacity and Utilization */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-300">Capacity & Utilization</span>
                <span className={`text-sm font-medium ${getUtilizationColor(resource.utilization)}`}>
                  {resource.utilization}% utilized
                </span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${resource.utilization}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    resource.utilization >= 90 ? 'bg-red-500' :
                    resource.utilization >= 75 ? 'bg-yellow-500' :
                    resource.utilization >= 50 ? 'bg-blue-500' : 'bg-green-500'
                  }`}
                />
              </div>
              <div className="flex justify-between text-xs text-zinc-400 mt-1">
                <span>Current: {resource.currentUsage}</span>
                <span>Capacity: {resource.capacity}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Last Updated */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Clock className="w-4 h-4" />
                Last updated: {new Date(resource.lastUpdated).toLocaleDateString()}
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 text-zinc-400 hover:text-zion-cyan hover:bg-zion-cyan/20 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-400 hover:text-zion-cyan hover:bg-zion-cyan/20 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredResources.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Target className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No resources found</h3>
          <p className="text-zinc-400 mb-4">
            Try adjusting your filters or add a new resource to get started!
          </p>
          <button
            onClick={() => setShowResourceForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
          >
            Add Resource
          </button>
        </motion.div>
      )}
    </div>
  );
};