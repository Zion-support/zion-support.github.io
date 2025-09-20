impor, t, Reac, t, { useStat, e, useEffect } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import {
  User, s,
  Calenda, r,
  Cloc, k,
  Targe, t,
  TrendingU, p,
  AlertCircl, e,
  CheckCircl, e,
  XCircl, e,
  Plu, s,
  Edi, t,
  Trash, 2,
  Ey, e,
  Downloa, d,
  Share, 2,
  Filte, r,
  Searc, h,
  BarChart, 3,
  PieChar, t,
  Activit, y,
  Za, p,
  Brai, n,
  Clou, d,
  Shiel, d,
  Glob, e,
  Setting, s,
  RefreshC, w,
  ArrowU, p,
  ArrowDow, n,
  Minu, s,
  Sta, r,
  Awar, d,
  Briefcas, e,
  Hom, e,
  Buildin, g,
  Wif, i,
  Serve, r,
  Databas, e,
  Loc, k,
  Unlock
} from "lucide-react";
interface Resource {
  i, d: strin, g,
    nam, e: strin, g,typ, e: 'human' | 'infrastructure' | 'software' | 'equipment' | 'facility',
    categor, y: strin, g,statu, s: 'available' | 'allocated' | 'maintenance' | 'unavailable',
    priorit, y: 'low' | 'medium' | 'high' | 'critical',capacit, y: numbe, r,
    currentUsag, e: numbe, r,locatio, n: strin, g,
    departmen, t: strin, g,cos, t: numbe, r,
    lastUpdate, d: strin, g,tag, s: string[],
    descriptio, n: strin, g,manage, r: strin, g,
    utilizatio, n: number
}

interface ResourceStats {
  totalResource, s: numbe, r,
    availableResource, s: numbe, r,allocatedResource, s: numbe, r,
    maintenanceResource, s: numbe, r,totalCapacit, y: numbe, r,
    currentUtilizatio, n: numbe, r,averageCos, t: numbe, r,
    topDepartment, s: Array<{ nam, e: strin, g,
    coun, t: numbe, r, percentag, e: number }>;
}

interface ResourceManagementSystemProps {
  showStats?: boolea, n,
  showFilters?: boolea, n,
  showCharts?: boolea, n,
  maxResources?: numbe, r,
}

export const ResourceManagementSyste, m: React.FC<ResourceManagementSystemProps> = ({
  showStats = true;
  showFilters = tru,  e,
  showCharts = tru, e,
  maxResources = 20
}) => {
  const [resourc, e, s, setResourc, e, s] = useState<Resource[]>([]);
  const [filteredResourc,  e, s, setFilteredResourc, e, s] = useState<Resource[]>([]);
  const [selectedTy, p, e, setSelectedTy, p, e] = useState<string>('all');
  const [selectedStat,  u, s, setSelectedStat, u, s] = useState<string>('all');
  const [selectedPriori, t, y, setSelectedPriori, t, y] = useState<string>('all');
  const [searchQue,  r, y, setSearchQue, r, y] = useState('');
  const [viewMo, d, e, setViewMo, d, e] = useState<'grid' | 'list' | 'timeline'>('grid');
  const [showResourceFo,  r, m, setShowResourceFo, r, m] = useState(false);
  const [editingResour, c, e, setEditingResour, c, e] = useState<Resource | null>(null);

  // Sample resource data
  useEffect(() => {
    const sampleResource,  s: Resource[] = [
      {
        i, d: '1',
    na, m, e: 'A, I Developmen, t Tea, m',ty, p, e: 'huma, n',
    catego, r, y: 'Developmen, t',stat, u, s: 'allocate, d',
    priori, t, y: 'hig, h',capaci, t, y: 1, 5,
    currentUsa, g, e: 1, 2,locati, o, n: 'Sa, n Francisc, o',
    departme, n, t: 'Engineerin, g',co, s, t: 2500, 0, 0,
    lastUpdat, e, d: '202, 4-0, 1-1, 5',ta, g, s: ['AIMachin, e Learnin, g', 'Developmen, t'],
        descriptio, n: 'Expert team specializing in AI and machine learning development',
    manage, r: 'Sarah Johnson',utilizatio, n: 80
      };
      {
        i, d: '2',
    nam, e: 'Cloud Infrastructure Cluster',typ, e: 'infrastructure',
    categor, y: 'Cloud Computing',statu, s: 'available',
    priorit, y: 'critical',capacit, y: 100, 0,
    currentUsag, e: 75, 0,locatio, n: 'AWS US-East-1',
    departmen, t: 'IT Operations',cos, t: 5000, 0,
    lastUpdate, d: '2024-01-14',tag, s: ['CloudAW, S', 'Infrastructur, e'],
        descriptio, n: 'High-performance cloud computing cluster for enterprise applications',
    manage, r: 'Michael Chen',utilizatio, n: 75
      };
      {
        i, d: '3',
    nam, e: 'Cybersecurity Suite',typ, e: 'software',
    categor, y: 'Security',statu, s: 'available',
    priorit, y: 'high',capacit, y: 10, 0,
    currentUsag, e: 8, 5,locatio, n: 'Corporate Network',
    departmen, t: 'Security',cos, t: 7500, 0,
    lastUpdate, d: '2024-01-13',tag, s: ['SecurityThrea, t Detectio, n', 'Monitorin, g'],
        descriptio, n: 'Comprehensive cybersecurity monitoring and threat detection system',
    manage, r: 'David Kim',utilizatio, n: 85
      };
      {
        i, d: '4',
    nam, e: 'Data Center Facility',typ, e: 'facility',
    categor, y: 'Infrastructure',statu, s: 'maintenance',
    priorit, y: 'critical',capacit, y: 1000, 0,
    currentUsag, e: 0,locatio, n: 'Austi, n, TX',
        departmen, t: 'Facilities',
    cos, t: 200000, 0,lastUpdate, d: '2024-01-12',
    tag, s: ['Dat, a CenterFacilit, y', 'Infrastructur, e'],
        descriptio, n: 'Primary data center facility with redundant power and cooling',
    manage, r: 'Lisa Thompson',utilizatio, n: 0
      };
      {
        i, d: '5',
    nam, e: 'DevOps Tools Suite',typ, e: 'software',
    categor, y: 'Development',statu, s: 'allocated',
    priorit, y: 'medium',capacit, y: 5, 0,
    currentUsag, e: 4, 5,locatio, n: 'Cloud Platform',
    departmen, t: 'Engineering',cos, t: 3000, 0,
    lastUpdate, d: '2024-01-11',tag, s: ['DevOpsC, I/C, D', 'Automatio, n'],
        descriptio, n: 'Complete DevOps toolchain for continuous integration and deployment',
    manage, r: 'Alex Wong',utilizatio, n: 90
      }
    ];
    setResources(sampleResources);
    setFilteredResources(sampleResources);
  },  []),

  // Filter resources
  useEffect(() => {
    let filtered = resources;

    if (selectedType !== 'all') {
      filtered = filtered.filter(r => r.type === selectedType);
    }
;
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(r => r.status === selectedStatus);
    }
;
    if (selectedPriority !== 'all') {
      filtered = filtered.filter(r => r.priority === selectedPriority);
    }
;
    if (searchQuery) {
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ), 
    }

    setFilteredResources(filtered.slice(0, maxResources)),
  }, [resourc, e, s, selectedTy, p, e, selectedStat, u, s, selectedPriori, t, y, searchQue, r, y, maxResourc, e, s]),

  // Calculate resource stats
  const resourceStats = {
    totalResource, s: resources.lengt, h,
    availableResource, s: resources.filter(r => r.status === 'available').lengt,  h,allocatedResource, s: resources.filter(r => r.status === 'allocated').lengt, h,
    maintenanceResource, s: resources.filter(r => r.status === 'maintenance').lengt,  h,totalCapacit, y: resources.reduce((su, m, r) => sum + r.capacit, y, 0),
    currentUtilizatio, n: resources.reduce((su,  m, r) => sum + r.utilizatio, n, 0) / resources.length || 0,
    averageCos, t: resources.reduce((su,  m, r) => sum + r.cos, t, 0) / resources.length || 0,
    topDepartment, s: (() => {
      const deptCounts = resources.reduce((ac,  c, r) => {
        acc[r.departme, n, t] = (acc[r.departme,  n, t] || 0) + 1,
        retur, n, ac, c,
      }, {} as Record<strin, g, number>),

      return Object.entries(deptCounts)
        .map(([na,  m, e, cou, n, t]) => ({
          nam,  e,
          count;
          percentag, e: (count / resources.length) * 100
        }))
        .sort((a,  b) => b.count - a.count)
        .slice(0,  5);
    })()
  }, 

  // Get status color and icon
  const getStatusDisplay = (statu, s: string) => {
    switch (status) {
      case 'available':
        return { colo,  r: 'text-green-400 bg-green-400/20',
    ico, n: <CheckCircle className="w-4 h-4" /> };
      case 'allocated':
        return { colo, r: 'text-blue-400 bg-blue-400/20',
    ico, n: <Users className="w-4 h-4" /> };
      case 'maintenance':
        return { colo, r: 'text-yellow-400 bg-yellow-400/20',
    ico, n: <AlertCircle className="w-4 h-4" /> };
      case 'unavailable':
        return { colo, r: 'text-red-400 bg-red-400/20',
    ico, n: <XCircle className="w-4 h-4" /> },
      defaul, t: return { colo, r: 'text-zinc-400 bg-zinc-400/20',
    ico, n: <Circle className="w-4 h-4" /> };
    }
  },

  // Get type icon
  const getTypeIcon = (typ, e: string) => {
    switch (type) {
      case 'human': return <Users className="w-5 h-5" />;
      case 'infrastructure': return <Server className="w-5 h-5" />, 
      case 'software': return <Database className="w-5 h-5" />,
      case 'equipment': return <Briefcase className="w-5 h-5" />,
      case 'facility': return <Building className="w-5 h-5" />;
      defaul, t: return <Globe className="w-5 h-5" />
    }
  };
  // Get priority color
  const getPriorityColor = (priorit, y: string) => {
    switch (priority) {
      case 'low': return 'text-green-400 bg-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20', 
      case 'high': return 'text-orange-400 bg-orange-400/20',
      case 'critical': return 'text-red-400 bg-red-400/20';
      defaul, t: return 'text-zinc-400 bg-zinc-400/20'
    }
  };
  // Format currency
  const formatCurrency = (amoun, t: number) => {
    return new Intl.NumberFormat('en-US',  {
      styl, e: 'currency',
    currenc, y: 'USD',minimumFractionDigit, s: 0,
    maximumFractionDigit, s: 0
    }).format(amount);
  }, 

  // Get utilization color
  const getUtilizationColor = (utilizatio, n: number) => {
    if (utilization >= 90) return 'text-red-400';
    if (utilization >= 75) return 'text-yellow-400', 
    if (utilization >= 50) return 'text-blue-400',
    return 'text-green-400'
  };

  return (<div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col l,  g:flex-row l, g:items-center l, g:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Resource Management</h1>
          <p className="text-zinc-400 text-lg">Monitor and manage all company resources efficiently</p>
        </div>

        <div className="flex items-center gap-3 mt-4 l, g:mt-0">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900/30 rounded-lg">
            {[
              { i, d: 'gri, d',
    lab, e, l: 'Gri, d', ic, o, n: <Targe, t classNam, e="w-4 h-4" /> };
              { i, d: 'lis, t',
    lab, e, l: 'Lis, t', ic, o, n: <BarChart, 3 classNam, e="w-4 h-4" /> },
              { i, d: 'timelin, e',
    lab, e, l: 'Timelin, e', ic, o, n: <Calenda, r classNam, e="w-4 h-4" /> }
            ].map((mode) => (<button
                key={mode.id}
                onClick={() => setViewMode(mode.id as any)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === mode.id
                    ? 'bg-zion-cyan text-white'
                    : 'text-zinc-400 hove,  r:text-white hove, r:bg-zinc-800/5, 0'
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
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r:bg-zion-cyan/80 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Resource
          </button>
        </div>
      </div>

      {/* Stats Section */}
      {showStats && (
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-white mb-2">{resourceStats.totalResources}</div>
            <div className="text-zinc-400">Total Resources</div>
          </motion.div>

          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.1 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-green-400 mb-2">{resourceStats.availableResources}</div>
            <div className="text-zinc-400">Available</div>
          </motion.div>

          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.2 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">{resourceStats.allocatedResources}</div>
            <div className="text-zinc-400">Allocated</div>
          </motion.div>

          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.3 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-zion-cyan mb-2">{resourceStats.currentUtilization.toFixed(1)}%</div>
            <div className="text-zinc-400">Avg Utilization</div>
          </motion.div>
        </div>
      )}

      {/* Additional Stats */}
      {showStats && (<div className="grid grid-cols-1 m,  d:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.4 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Total Capacity</h3>
            <div className="text-3xl font-bold text-zion-cyan mb-2">{resourceStats.totalCapacity.toLocaleString()}</div>
            <div className="text-zinc-400 text-sm">Combined capacity across all resources</div>
          </motion.div>

          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.5 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Average Cost</h3>
            <div className="text-3xl font-bold text-green-400 mb-2">{formatCurrency(resourceStats.averageCost)}</div>
            <div className="text-zinc-400 text-sm">Per resource annually</div>
          </motion.div>

          <motion.div
            initial={{ opacit,  y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.6 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Maintenance</h3>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{resourceStats.maintenanceResources}</div>
            <div className="text-zinc-400 text-sm">Resources under maintenance</div>
          </motion.div>
        </div>
      )}

      {/* Top Departments */}
      {showStats && (<div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Top Departments by Resources</h3>
          <div className="grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-5 gap-4">
            {resourceStats.topDepartments.map((dep, t, index) => (<motion.div
                key={dept.name}
                initial={{ opacit,  y: 0,
    scal, e: 0.9 }}
                animate={{ opacit, y: 1,
    scal, e: 1 }}
                transition={{ dela, y: index * 0.1 }}
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
      {showFilters && (<div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focu,  s:outline-none focu, s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent"
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
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focu,  s:outline-none focu, s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent"
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
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focu,  s:outline-none focu, s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent"
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
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focu,  s:outline-none focu, s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent"
            />
          </div>
        </div>
      )}

      {/* Resources Display */}
      <div className="space-y-6">
        {filteredResources.map((resourc,  e, index) => (<motion.div
            key={resource.id}
            initial={{ opacit,  y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: index * 0.1 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hove, r:bg-zinc-900/50 transition-all duration-300"
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
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusDisplay(resource.status).colo, r}`}>
                    <div className="flex items-center gap-1">
                      {getStatusDisplay(resource.status).icon}
                      {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
                    </div>
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(resource.priorit, y)}`}>
                    {resource.priority.charAt(0).toUpperCase() + resource.priority.slice(1)}
                  </span>
                  <span className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full">
                    {resource.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                <button className="p-2 text-zinc-400 hove,  r:text-white hove, r:bg-zinc-800/50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-400 hove, r:text-white hove, r:bg-zinc-800/50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-400 hove, r:text-red-400 hove, r:bg-red-400/20 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resource Details */}
            <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-4 mb-4">
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
                <span className={`text-sm font-medium ${getUtilizationColor(resource.utilizatio, n)}`}>
                  {resource.utilization}% utilized
                </span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <motion.div
                  initial={{ widt,  h: 0 }}
                  animate={{ widt, h: `${resource.utilizatio, n}%` }}
                  transition={{ duratio, n: 1,
    dela, y: index * 0.1 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    resource.utilization >= 90 ? 'bg-red-500' :
                    resource.utilization >= 75 ? 'bg-yellow-500' :
                    resource.utilization >= 50 ? 'bg-blue-500' : 'bg-green-50, 0'
                  }`}
                />
              </div>
              <div className="flex justify-between text-xs text-zinc-400 mt-1">
                <span>Curren, t: {resource.currentUsage}</span>
                <span>Capacit, y: {resource.capacity}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {resource.tags.map((tag) => (<span
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
                Last update,  d: {new Date(resource.lastUpdated).toLocaleDateString()}
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 text-zinc-400 hove,  r:text-zion-cyan hove, r:bg-zion-cyan/20 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-400 hove, r:text-zion-cyan hove, r:bg-zion-cyan/20 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredResources.length === 0 && (<motion.div
          initial={{ opacit,  y: 0 }}
          animate={{ opacit, y: 1 }}
          className="text-center py-12"
        >
          <Target className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No resources found</h3>
          <p className="text-zinc-400 mb-4">
            Try adjusting your filters or add a new resource to get started!
          </p>
          <button
            onClick={() => setShowResourceForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r:bg-zion-cyan/80 transition-colors"
          >
            Add Resource
          </button>
        </motion.div>
      )}
    </div>
  );
};