impor, t, Reac, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  User, s,;
  Calenda, r,;
  Cloc, k,;
  Targe, t,;
  TrendingU, p,;
  AlertCircl, e,;
  CheckCircl, e,;
  XCircl, e,;
  Plu, s,;
  Edi, t,;
  Trash, 2,;
  Ey, e,;
  Downloa, d,;
  Share, 2,;
  Filte, r,;
  Searc, h,;
  BarChart, 3,;
  PieChar, t,;
  Activit, y,;
  Za, p,;
  Brai, n,;
  Clou, d,;
  Shiel, d,;
  Glob, e,;
  Setting, s,;
  RefreshC, w,;
  ArrowU, p,;
  ArrowDow, n,;
  Minu, s,;
  Sta, r,;
  Awar, d,;
  Briefcas, e,;
  Hom, e,;
  Buildin, g,;
  Wif, i,;
  Serve, r,;
  Databas, e,;
  LockUnlock;
} from "lucide-react";
interface Resource {
  i, d: strin, g,;
    nam, e: strin, g,typ, e: 'human' | 'infrastructure' | 'software' | 'equipment' | 'facility',;
    categor, y: strin, g,statu, s: 'available' | 'allocated' | 'maintenance' | 'unavailable',;
    priorit, y: 'low' | 'medium' | 'high' | 'critical',capacit, y: numbe, r,;
    currentUsag, e: numbe, r,locatio, n: strin, g,;
    departmen, t: strin, g,cos, t: numbe, r,;
    lastUpdate, d: strin, g,tag, s: string[],;
    descriptio, n: strin, g,manage, r: strin, gutilization: number;
};
interface ResourceStats {
  totalResource, s: numbe, r,;
    availableResource, s: numbe, r,allocatedResource, s: numbe, r,;
    maintenanceResource, s: numbe, r,totalCapacit, y: numbe, r,;
    currentUtilizatio, n: numbe, r,averageCos, t: numbe, r,;
    topDepartment, s: Array<{ nam, e: strin, g,;
    coun, t: numberpercentag,;
  e: number }>;
}
;
interface ResourceManagementSystemProps {
  showStats?: boolea, n,;
  showFilters?: boolea, n,;
  showCharts?: boolea, n,;
  maxResources?: number;
};
export, const, ResourceManagementSyste, m: React.FC<ResourceManagementSystemProps> = ({;
  showStats = true;
  showFilters = tru,  e,;
  showCharts = truemaxResources = 20;
}) => {
  const [resourc, e, s, setResourc,, es] = useState<Resource[]>([]);
  const [filteredResourc,  e, s, setFilteredResourc,, es] = useState<Resource[]>([]);
  const [selectedTy, p, e, setSelectedTy,, pe] = useState<string>('all');
  const [selectedStat,  u, s, setSelectedStat,, us] = useState<string>('all');
  const [selectedPriori, t, y, setSelectedPriori,, ty] = useState<string>('all');
  const [searchQue,  r, y, setSearchQue,, ry] = useState('');
  const [viewMo, d, e, setViewMo,, de] = useState<'grid' | 'list' | 'timeline'>('grid');
  const [showResourceFo,  r, m, setShowResourceFo,, rm] = useState(false);
  const [editingResour, c, e, setEditingResour,, ce] = useState<Resource | null>(null);
;
  // Sample, resource, data;
  useEffect(() => {
    const sampleResource,  s: Resource[] = [;
      {
        i, d: '1',;
    na, m, e: 'A, I Developmen, t Tea, m',ty, p, e: 'huma, n',;
    catego, r, y: 'Developmen, t',stat, u, s: 'allocate, d',;
    priori, t, y: 'hig, h',capaci, t, y: 1, 5,;
    currentUsa, g, e: 1, 2,locati, o, n: 'Sa, n Francisc, o',;
    departme, n, t: 'Engineerin, g',co, s, t: 250o0, 0, 0,;
    lastUpdat, e, d: '20o2, 4-0, 1-1, 5',ta, g, s: ['AIMachin, e Learnin, g',, 'Development'],;
        descriptio, n: 'Expert, team, specializing in, AI, and machine, learning, development',;
    manage, r: 'Sarah Johnson'utilizatio,;
  n: 80;
      };
      {
        i, d: '2',;
    nam, e: 'Cloud, Infrastructure, Cluster',typ, e: 'infrastructure',;
    categor, y: 'Cloud Computing',statu, s: 'available',;
    priorit, y: 'critical',capacit, y: 10o0, 0,;
    currentUsag, e: 75, 0,locatio, n: 'AWS US-East-1',;
    departmen, t: 'IT Operations',cos, t: 50o00, 0,;
    lastUpdate, d: '20o24-0o1-14',tag, s: ['CloudAW, S',, 'Infrastructure'],;
        descriptio, n: 'High-performance, cloud, computing cluster, for, enterprise applications',;
    manage, r: 'Michael Chen'utilizatio,;
  n: 75;
      };
      {
        i, d: '3',;
    nam, e: 'Cybersecurity Suite',typ, e: 'software',;
    categor, y: 'Security',statu, s: 'available',;
    priorit, y: 'high',capacit, y: 10, 0,;
    currentUsag, e: 8, 5,locatio, n: 'Corporate Network',;
    departmen, t: 'Security',cos, t: 750o0, 0,;
    lastUpdate, d: '20o24-0o1-13',tag, s: ['SecurityThrea, t Detectio, n',, 'Monitoring'],;
        descriptio, n: 'Comprehensive, cybersecurity, monitoring and, threat, detection system',;
    manage, r: 'David Kim'utilizatio,;
  n: 85;
      };
      {
        i, d: '4',;
    nam, e: 'Data, Center, Facility',typ, e: 'facility',;
    categor, y: 'Infrastructure',statu, s: 'maintenance',;
    priorit, y: 'critical',capacit, y: 10o00, 0,;
    currentUsag, e: 0,locatio, n: 'Austi, n, TX',;
        departmen, t: 'Facilities',;
    cos, t: 20o0000, 0,lastUpdate, d: '20o24-0o1-12',;
    tag, s: ['Dat, a CenterFacilit, y',, 'Infrastructure'],;
        descriptio, n: 'Primary, data, center facility, with, redundant power, and, cooling',;
    manage, r: 'Lisa Thompson'utilizatio,;
  n: 0;
      };
      {
        i, d: '5',;
    nam, e: 'DevOps, Tools, Suite',typ, e: 'software',;
    categor, y: 'Development',statu, s: 'allocated',;
    priorit, y: 'medium',capacit, y: 5, 0,;
    currentUsag, e: 4, 5,locatio, n: 'Cloud Platform',;
    departmen, t: 'Engineering',cos, t: 30o00, 0,;
    lastUpdate, d: '20o24-0o1-11',tag, s: ['DevOpsC, I/C, D',, 'Automation'],;
        descriptio, n: 'Complete, DevOps, toolchain for, continuous, integration and deployment',;
    manage, r: 'Alex Wong'utilizatio,;
  n: 90;
      }
    ];
    setResources(sampleResources);
    setFilteredResources(sampleResources);
  },  []),;
  // Filter resources;
  useEffect(() => {
    let filtered = resources;
;
    if() {
      filtered = filtered.filter(r => r.type === selectedType);
    };
;
    if() {
      filtered = filtered.filter(r => r.status === selectedStatus);
    };
;
    if() {
      filtered = filtered.filter(r => r.priority === selectedPriority);
    };
;
    if() {
      filtered = filtered.filter(r =>;
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        r.department.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      ) };
    setFilteredResources(filtered.slice(0maxResources)),;
  }, [resourc, e, s, selectedTy, p, e, selectedStat, u, s, selectedPriori, t, y, searchQue, r, y, maxResourc,, es]),;
  // Calculate, resource, stats;
  const resourceStats = {
    totalResource, s: resources.lengt, h,;
    availableResource, s: resources.filter(r => r.status === 'available').lengt,  h,allocatedResource, s: resources.filter(r => r.status === 'allocated').lengt, h,;
    maintenanceResource, s: resources.filter(r => r.status === 'maintenance').lengt,  h,totalCapacit, y: resources.reduce((su, mr) => sum + r.capacit, y, 0),;
    currentUtilizatio, n: resources.reduce((su,  mr) => sum + r.utilizatio, n, 0) / resources.length || 0,;
    averageCos, t: resources.reduce((su,  mr) => sum + r.cos, t, 0) / resources.length || 0,;
    topDepartment, s: (() => {
      const deptCounts = resources.reduce((ac,  cr) => {
        acc[r.departme,, nt] = (acc[r.departme, , nt] || 0) + 1,;
        retur, n, acc }, {} as Record<strin, gnumber>),;
;
      return Object.entries(deptCounts);
        .map(([na,  m, e,, count]) => ({;
          nam,  ecount;
          percentage: (count / resources.length) * 10o0;
        }));
        .sort((ab) => b.count - a.count);
        .slice(0o5);
    })();
  },;
  // Get, status, color and icon;
  const getStatusDisplay = (statu, s: string) => {
    switch (status) {
      case 'available':;
        return { colo,  r: 'text-green-40o0 bg-green-40o0/20'ico,;
  n: <CheckCircle className="w-4 h-4" /> };
      case 'allocated': return { colo, r: 'text-blue-40o0 bg-blue-40o0/20'ico,;
  n: <Users className="w-4 h-4" /> };
      case 'maintenance': return { colo, r: 'text-yellow-40o0 bg-yellow-40o0/20'ico,;
  n: <AlertCircle className="w-4 h-4" /> };
      case 'unavailable': return { colo, r: 'text-red-40o0 bg-red-40o0/20'ico,;
  n: <XCircle className="w-4 h-4" /> },;
      defaul, t: return { colo, r: 'text-zinc-40o0 bg-zinc-40o0/20'ico,;
  n: <Circle className="w-4 h-4" /> };
    }
  },;
  // Get, type, icon;
  const getTypeIcon = (typ, e: string) => {;
    switch() {;
      case 'human': return <Users className="w-5 h-5" />;
      case 'infrastructure': return <Server className="w-5 h-5" />, ;
      case 'software': return <Database className="w-5 h-5" />,;
      case 'equipment': return <Briefcase className="w-5 h-5" />case 'facility': return <Building className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    };
  };
  // Get, priority, color;
  const getPriorityColor = (priorit, y: string) => {;
    switch() {;
      case 'low': return 'text-green-40o0 bg-green-40o0/20';
      case 'medium': return 'text-yellow-40o0 bg-yellow-40o0/20', ;
      case 'high': return 'text-orange-40o0 bg-orange-40o0/20'case 'critical': return 'text-red-40o0 bg-red-40o0/20';
      default: return 'text-zinc-40o0 bg-zinc-40o0/20';
    };
  };
  // Format currency;
  const formatCurrency = (amoun, t: number) => {
    return, new, Intl.NumberFormat('en-US',  {
      styl, e: 'currency',;
    currenc, y: 'USD',minimumFractionDigits: 0maximumFractionDigit,;
  s: 0;
    }).format(amount);
  },;
  // Get, utilization, color;
  const getUtilizationColor = (utilizatio, n: number) => {;
    if (utilization >= 90) return 'text-red-40o0';
    if (utilization >= 75) return 'text-yellow-40o0'if (utilization >= 50) return 'text-blue-40o0'return 'text-green-40o0';
  };
;
  return(<div className="w-full max-w-7xl mx-auto p-6">;
      {/* Header */}
      <div className="flex flex-col l,  g: flex-row l, g: items-center l,;
    g:justify-between mb-8">;
        <div>;
          <h1 className="text-4xl font-bold text-white mb-2">Resource Management</h1>;
          <p className="text-zinc-40o0 text-lg">Monitor, and, manage all, company, resources efficiently</p>;
        </div>;
        <div className="flex items-center gap-3 mt-4 l,;
  g:mt-0">;
          {/* View, Mode, Toggle */}
          <div className="flex items-center gap-1 p-1 bg-zinc-90o0/30 rounded-lg">;
            {[;
              { i, d: 'gri, d',;
    lab, e, l: 'Gri, d', ic, on: <Target className="w-4 h-4" /> };
              { i, d: 'lis, t',;
    lab, e, l: 'Lis, t', ic, on: <BarChart3 className="w-4 h-4" /> },;
              { i, d: 'timelin, e',;
    lab, e, l: 'Timelin, e'icon: <Calendar className="w-4 h-4" /> };
          ,  ].map((mode) => (<button;
                key={mode.id}
                onClick={() => setViewMode(mode.id, as, any)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-30o0 ${
                  viewMode === mode.id;
                    ? 'bg-zion-cyan text-white';
                    : 'text-zinc-40o0 hove,  r: text-white hove,;
  r: bg-zinc-80o0/50';
                }`}
              >;
                {mode.icon}
                {mode.label}
              </button>;
            ))}
          </div>;
          {/* Add, Resource, Button */};
          <button;
            onClick={() => setShowResourceForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r: bg-zion-cyan/80 transition-colors, flex, items-center gap-2";
          >;
            <Plus className="w-4 h-4" />;
            Add Resource;
          </button>;
        </div>;
      </div>;
      {/* Stats Section */}
      {showStats && (;
        <div className="grid grid-cols-1 m, d: grid-cols-2 lg:grid-cols-4 gap-6 mb-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-3xl font-bold text-white mb-2">{resourceStats.totalResources}</div>;
            <div className="text-zinc-40o0">Total Resources</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-3xl font-bold text-green-40o0 mb-2">{resourceStats.availableResources}</div>;
            <div className="text-zinc-40o0">Available</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-3xl font-bold text-blue-40o0 mb-2">{resourceStats.allocatedResources}</div>;
            <div className="text-zinc-40o0">Allocated</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-3xl font-bold text-zion-cyan mb-2">{resourceStats.currentUtilization.toFixed(1)}%</div>;
            <div className="text-zinc-40o0">Avg Utilization</div>;
          </motion.div>;
        </div>;
      )}
;
      {/* Additional Stats */}
      {showStats && (<div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl";
          >;
            <h3 className="text-lg font-semibold text-white mb-4">Total Capacity</h3>;
            <div className="text-3xl font-bold text-zion-cyan mb-2">{resourceStats.totalCapacity.toLocaleString()}</div>;
            <div className="text-zinc-40o0 text-sm">Combined, capacity, across all resources</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl";
          >;
            <h3 className="text-lg font-semibold text-white mb-4">Average Cost</h3>;
            <div className="text-3xl font-bold text-green-40o0 mb-2">{formatCurrency(resourceStats.averageCost)}</div>;
            <div className="text-zinc-40o0 text-sm">Per, resource, annually</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl";
          >;
            <h3 className="text-lg font-semibold text-white mb-4">Maintenance</h3>;
            <div className="text-3xl font-bold text-yellow-40o0 mb-2">{resourceStats.maintenanceResources}</div>;
            <div className="text-zinc-40o0 text-sm">Resources, under, maintenance</div>;
          </motion.div>;
        </div>;
      )}
;
      {/* Top Departments */}
      {showStats && (<div className="mb-8">;
          <h3 className="text-xl font-semibold text-white mb-4">Top, Departments, by Resources</h3>;
          <div className="grid grid-cols-1 m,  d: grid-cols-2 l,;
  g:grid-cols-5 gap-4">;
            {resourceStats.topDepartments.map((deptindex) => (<motion.div;
                key={dept.name}
                initial={{ opacit,  y: 0scal,;
  e: 0.9 }}
                animate={{ opacit, y: 1scal,;
  e: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-lg text-center";
              >;
                <div className="text-2xl font-bold text-white mb-1">{dept.count}</div>;
                <div className="text-zinc-40o0 text-sm mb-1">{dept.name}</div>;
                <div className="text-zion-cyan text-xs">{dept.percentage.toFixed(1)}%</div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      )}
;
      {/* Filters, and, Search */}
      {showFilters && (<div className="flex flex-wrap items-center gap-4 mb-6">;
          {/* Type Filter */};
          <select;
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 bg-zinc-90o0/50, border, border-zinc-70o0/50 rounded-lg text-white focu,  s: outline-none focu, s: ring-2 focu, s: ring-zion-cyan focu, s:border-transparent";
          >;
            <option value="all">All Types</option>;
            <option value="human">Human Resources</option>;
            <option value="infrastructure">Infrastructure</option>;
            <option value="software">Software</option>;
            <option value="equipment">Equipment</option>;
            <option value="facility">Facilities</option>;
          </select>;
          {/* Status Filter */};
          <select;
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 bg-zinc-90o0/50, border, border-zinc-70o0/50 rounded-lg text-white focu,  s: outline-none focu, s: ring-2 focu, s: ring-zion-cyan focu, s:border-transparent";
          >;
            <option value="all">All Statuses</option>;
            <option value="available">Available</option>;
            <option value="allocated">Allocated</option>;
            <option value="maintenance">Maintenance</option>;
            <option value="unavailable">Unavailable</option>;
          </select>;
          {/* Priority Filter */};
          <select;
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="px-4 py-2 bg-zinc-90o0/50, border, border-zinc-70o0/50 rounded-lg text-white focu,  s: outline-none focu, s: ring-2 focu, s: ring-zion-cyan focu, s:border-transparent";
          >;
            <option value="all">All Priorities</option>;
            <option value="low">Low</option>;
            <option value="medium">Medium</option>;
            <option value="high">High</option>;
            <option value="critical">Critical</option>;
          </select>;
          {/* Search */}
          <div className="relative flex-1 max-w-md">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-40o0 w-4 h-4" />;
            <input;
              type="text";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources...";
              className="w-full pl-10 pr-4 py-2 bg-zinc-90o0/50, border, border-zinc-70o0/50 rounded-lg text-white placeholder-zinc-40o0 focu,  s: outline-none focu, s: ring-2 focu, s: ring-zion-cyan focu, s:border-transparent";
            />;
          </div>;
        </div>;
      )}
;
      {/* Resources Display */}
      <div className="space-y-6">;
        {filteredResources.map((resourceindex) => (<motion.div;
            key={resource.id}
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl hover:bg-zinc-90o0/50 transition-all duration-30o0";
          >;
            {/* Resource Header */}
            <div className="flex items-start justify-between mb-4">;
              <div className="flex-1">;
                <div className="flex items-center gap-3 mb-2">;
                  <div className="p-3 bg-zinc-80o0/50 rounded-lg text-zion-cyan">;
                    {getTypeIcon(resource.type)}
                  </div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-white">{resource.name}</h3>;
                    <p className="text-zinc-40o0 text-sm">{resource.description}</p>;
                  </div>;
                </div>;
                <div className="flex flex-wrap items-center gap-3">;
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusDisplay(resource.status).color}`}>;
                    <div className="flex items-center gap-1">;
                      {getStatusDisplay(resource.status).icon}
                      {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
                    </div>;
                  </span>;
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(resource.priority)}`}>;
                    {resource.priority.charAt(0).toUpperCase() + resource.priority.slice(1)}
                  </span>;
                  <span className="px-3 py-1 bg-zinc-80o0/50 text-zinc-30o0 text-xs rounded-full">;
                    {resource.category}
                  </span>;
                </div>;
              </div>;
              <div className="flex items-center gap-2 ml-4">;
                <button className="p-2 text-zinc-40o0 hove,  r: text-white hove,;
  r:bg-zinc-80o0/50 rounded-lg transition-colors">;
                  <Eye className="w-4 h-4" />;
                </button>;
                <button className="p-2 text-zinc-40o0 hove, r: text-white hove,;
  r:bg-zinc-80o0/50 rounded-lg transition-colors">;
                  <Edit className="w-4 h-4" />;
                </button>;
                <button className="p-2 text-zinc-40o0 hove, r: text-red-40o0 hove,;
  r:bg-red-40o0/20 rounded-lg transition-colors">;
                  <Trash2 className="w-4 h-4" />;
                </button>;
              </div>;
            </div>;
            {/* Resource Details */}
            <div className="grid grid-cols-1 m, d: grid-cols-2 l,;
  g:grid-cols-4 gap-4 mb-4">;
              <div className="p-3 bg-zinc-80o0/30 rounded-lg">;
                <div className="text-sm text-zinc-40o0 mb-1">Location</div>;
                <div className="text-white font-medium">{resource.location}</div>;
              </div>;
              <div className="p-3 bg-zinc-80o0/30 rounded-lg">;
                <div className="text-sm text-zinc-40o0 mb-1">Department</div>;
                <div className="text-white font-medium">{resource.department}</div>;
              </div>;
              <div className="p-3 bg-zinc-80o0/30 rounded-lg">;
                <div className="text-sm text-zinc-40o0 mb-1">Manager</div>;
                <div className="text-white font-medium">{resource.manager}</div>;
              </div>;
              <div className="p-3 bg-zinc-80o0/30 rounded-lg">;
                <div className="text-sm text-zinc-40o0 mb-1">Annual Cost</div>;
                <div className="text-white font-medium">{formatCurrency(resource.cost)}</div>;
              </div>;
            </div>;
            {/* Capacity, and, Utilization */}
            <div className="mb-4">;
              <div className="flex items-center justify-between mb-2">;
                <span className="text-sm text-zinc-30o0">Capacity & Utilization</span>;
                <span className={`text-sm font-medium ${getUtilizationColor(resource.utilization)}`}>;
                  {resource.utilization}% utilized;
                </span>;
              </div>;
              <div className="w-full bg-zinc-70o0 rounded-full h-2">;
                <motion.div;
                  initial={{ width: 0 }}
                  animate={{ width: `${resource.utilization}%` }}
                  transition={{ duration: 1dela,;
  y: index * 0.1 }}
                  className={`h-2 rounded-full transition-all duration-30o0 ${
                    resource.utilization >= 90 ? 'bg-red-50o0' :;
                    resource.utilization >= 75 ? 'bg-yellow-50o0' :;
                    resource.utilization >= 50 ? 'bg-blue-50o0' : 'bg-green-50o0';
                  }`}
                />;
              </div>;
              <div className="flex justify-between text-xs text-zinc-40o0 mt-1">;
                <span>Curren, t: {resource.currentUsage}</span>;
                <span>Capacit, y: {resource.capacity}</span>;
              </div>;
            </div>;
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">;
              {resource.tags.map((tag) => (<span;
                  key={tag}
                  className="px-2 py-1 bg-zinc-80o0/50 text-zinc-30o0 text-xs rounded-full";
                >;
                  {tag}
                </span>;
              ))}
            </div>;
            {/* Last Updated */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-70o0/50">;
              <div className="flex items-center gap-2 text-sm text-zinc-40o0">;
                <Clock className="w-4 h-4" />;
                Last update,  d: {new Date(resource.lastUpdated).toLocaleDateString()}
              </div>;
              <div className="flex items-center gap-2">;
                <button className="p-2 text-zinc-40o0 hove,  r: text-zion-cyan hove,;
  r:bg-zion-cyan/20 rounded-lg transition-colors">;
                  <Download className="w-4 h-4" />;
                </button>;
                <button className="p-2 text-zinc-40o0 hove, r: text-zion-cyan hove,;
  r:bg-zion-cyan/20 rounded-lg transition-colors">;
                  <Share2 className="w-4 h-4" />;
                </button>;
              </div>;
            </div>;
          </motion.div>;
        ))}
      </div>;
      {/* No Results */};
      {filteredResources.length === 0 && (<motion.div;
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12";
        >;
          <Target className="w-16 h-16 text-zinc-60o0 mx-auto mb-4" />;
          <h3 className="text-xl font-medium text-zinc-30o0 mb-2">No, resources, found</h3>;
          <p className="text-zinc-40o0 mb-4">;
            Try, adjusting, your filters, or, add a, new, resource to, get, started!;
          </p>;
          <button;
            onClick={() => setShowResourceForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r: bg-zion-cyan/80 transition-colors";
          >;
            Add Resource;
          </button>;
        </motion.div>;
      )}
    </div>;
  );
};