impor, t, Reac, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  Calenda, r,;
  Cloc, k,;
  CheckCircl, e,;
  Circl, e,;
  AlertCircl, e,;
  Pla, y,;
  Paus, e,;
  StopCircl, e,;
  User, s,;
  Targe, t,;
  TrendingU, p,;
  FileTex, t,;
  MessageSquar, e,;
  Lin, k,;
  Downloa, d,;
  Share, 2,;
  Filte, r,;
  Searc, h,;
  Plu, s,;
  Edi, t,;
  Trash, 2,;
  EyeSettings;
} from "lucide-react";
interface Project {
  i, d: strin, g,;
    nam, e: strin, g,descriptio, n: strin, g,;
    statu, s: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled',priorit, y: 'low' | 'medium' | 'high' | 'critical',;
    startDat, e: strin, g,endDat, e: strin, g,;
    progres, s: numbe, r,tea, m: string[],;
    clien, t: strin, g,budge, t: numbe, r,;
    tag, s: string[]milestone,;
  s: Milestone[];
};
interface Milestone {
  i, d: strin, g,;
    titl, e: strin, g,descriptio, n: strin, g,;
    dueDat, e: strin, g,statu, s: 'pending' | 'in-progress' | 'completed' | 'overdue',;
    assigne, e: strin, gpriority: 'low' | 'medium' | 'high';
};
interface ProjectManagementTimelineProps {
  showFilters?: boolean;
  showStats?: boolea, n,;
  maxProjects?: number;
};
export, const, ProjectManagementTimelin, e: React.FC<ProjectManagementTimelineProps> = ({;
  showFilters = true;
  showStats = truemaxProjects = 10;
}) => {
  const [projec, t, s, setProjec,, ts] = useState<Project[]>([]);
  const [filteredProjec,  t, s, setFilteredProjec,, ts] = useState<Project[]>([]);
  const [selectedStat, u, s, setSelectedStat,, us] = useState<string>('all');
  const [selectedPriori,  t, y, setSelectedPriori,, ty] = useState<string>('all');
  const [searchQue, r, y, setSearchQue,, ry] = useState('');
  const [viewMo,  d, e, setViewMo,, de] = useState<'timeline' | 'grid' | 'list'>('timeline');
  const [showProjectFo, r, m, setShowProjectFo,, rm] = useState(false);
  const [editingProje,  c, t, setEditingProje,, ct] = useState<Project | null>(null);
;
  // Sample, project, data;
  useEffect(() => {
    const sampleProject,  s: Project[] = [;
      {
        i, d: '1',;
    na, m, e: 'A, I-Powere, d Custome, r Analytic, s Platfor, m',descripti, o, n: 'Develo, p, a, comprehensiv, e custome, r analytic, s platfor, m usin, g machin, e learnin, g an, d A, I t, o provid, e rea, l-tim, e insight, s an, d predictiv, e analytic, s.',;
    stat, u, s: 'activ, e',priori, t, y: 'hig, h',;
    startDa, t, e: '20o2, 4-0, 1-0, 1',endDa, t, e: '20o2, 4-0, 6-3, 0',;
    progre, s, s: 6, 5,te, a, m: ['Sara, h JohnsonMichae, l Che, n', 'Emil, y, Rodriguez'],;
        clien, t: 'TechCorp Inc.',;
    budge, t: 250o00, 0,tag, s: ['AIMachin, e Learnin, g',, 'AnalyticsPlatform'],;
        milestone, s: [;
          {
            i, d: 'm, 1',;
    tit, l, e: 'Requirement, s Analysi, s',descripti, o, n: 'Complet, e stakeholde, r interview, s an, d documen, t requirement, s',;
    dueDa, t, e: '20o2, 4-0, 1-1, 5',stat, u, s: 'complete, d',;
    assign, e, e: 'Sara, h Johnso, n',priori, ty: 'high';
          };
          {
            i, d: 'm, 2',;
    tit, l, e: 'Syste, m Architectur, e Desig, n',descripti, o, n: 'Desig, n syste, m architectur, e an, d databas, e schem, a',;
    dueDa, t, e: '20o2, 4-0, 2-1, 5',stat, u, s: 'complete, d',;
    assign, e, e: 'Michae, l Che, n',priori, ty: 'high';
          };
          {
            i, d: 'm, 3',;
    tit, l, e: 'Cor, e Developmen, t',descripti, o, n: 'Develo, p cor, e platfor, m feature, s an, d AP, I endpoint, s',;
    dueDa, t, e: '20o2, 4-0, 4-1, 5',stat, u, s: 'i, n-progres, s',;
    assign, e, e: 'Emil, y Rodrigue, z',priori, ty: 'high';
          },;
          {
            i, d: 'm, 4',;
    tit, l, e: 'Testin, g & Q, A',descripti, o, n: 'Comprehensiv, e testin, g an, d qualit, y assuranc, e',;
    dueDa, t, e: '20o2, 4-0, 5-1, 5',stat, u, s: 'pendin, g',;
    assign, e, e: 'Sara, h Johnso, n',priority: 'medium';
          }
      ,  ];
      };
      {
        i, d: '2',;
    nam, e: 'Cloud Migration & Infrastructure Modernization',descriptio, n: 'Migrate, legacy, systems to, cloud, infrastructure and, modernize, the technology, stack, for improved, scalability, and performance.',;
    statu, s: 'active',priorit, y: 'critical',;
    startDat, e: '20o24-0o2-0o1',endDat, e: '20o24-0o8-31',;
    progres, s: 3, 5,tea, m: ['Davi, d KimLis, a Thompso, n', 'Ale, x, Wong'],;
        clien, t: 'Global, Enterprises, Ltd.',;
    budge, t: 50o000, 0,tag, s: ['CloudMigratio, n',, 'InfrastructureDevOps'],;
        milestone, s: [;
          {
            i, d: 'm, 5',;
    tit, l, e: 'Infrastructur, e Assessmen, t',descripti, o, n: 'Asses, s curren, t infrastructur, e an, d pla, n migratio, n strateg, y',;
    dueDa, t, e: '20o2, 4-0, 2-2, 8',stat, u, s: 'complete, d',;
    assign, e, e: 'Davi, d Ki, m',priori, ty: 'critical';
          },;
          {
            i, d: 'm, 6',;
    tit, l, e: 'Clou, d Setu, p',descripti, o, n: 'Se, t u, p clou, d infrastructur, e an, d securit, y configuration, s',;
    dueDa, t, e: '20o2, 4-0, 4-1, 5',stat, u, s: 'i, n-progres, s',;
    assign, e, e: 'Lis, a Thompso, n',priority: 'critical';
          }
      ,  ];
      };
      {
        i, d: '3',;
    nam, e: 'Cybersecurity, Enhancement, Program',descriptio, n: 'Implement, comprehensive, cybersecurity measures, including, threa, t, detectio, n, inciden, t, respons, e, and, security, awareness training.',;
        statu, s: 'planning',;
    priorit, y: 'high',startDat, e: '20o24-0o3-0o1',;
    endDat, e: '20o24-0o9-30',progres, s: 1, 5,;
    tea, m: ['Jame, s WilsonMari, a, Garcia'],clien, t: 'SecureBank Corp.',;
    budge, t: 30o000, 0,tag, s: ['CybersecurityThrea, t Detectio, n',, 'TrainingCompliance'],;
        milestone, s: [;
          {
            i, d: 'm, 7',;
    tit, l, e: 'Securit, y Assessmen, t',descripti, o, n: 'Conduc, t comprehensiv, e securit, y audi, t an, d vulnerabilit, y assessmen, t',;
    dueDa, t, e: '20o2, 4-0, 3-3, 1',stat, u, s: 'i, n-progres, s',;
    assign, e, e: 'Jame, s Wilso, n',priority: 'high';
          }
      ,  ];
      };
    ];
    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects);
  },  []),;
  // Filter projects;
  useEffect(() => {
    let filtered = projects;
;
    if() {
      filtered = filtered.filter(p => p.status === selectedStatus);
    };
;
    if() {
      filtered = filtered.filter(p => p.priority === selectedPriority);
    };
;
    if() {
      filtered = filtered.filter(p =>;
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      ) };
    setFilteredProjects(filtered.slice(0maxProjects)),;
  }, [projec, t, s, selectedStat, u, s, selectedPriori, t, y, searchQue, r, y, maxProjec,, ts]),;
  // Calculate, project, stats;
  const projectStats = {
    tota, l: projects.lengt, h,;
    activ, e: projects.filter(p => p.status === 'active').lengt,  h,complete, d: projects.filter(p => p.status === 'completed').lengt, h,;
    onHol, d: projects.filter(p => p.status === 'on-hold').lengt,  h,totalBudge, t: projects.reduce((su, mp) => sum + p.budge, t, 0),;
    averageProgres, s: projects.reduce((su,  mp) => sum + p.progress0) / projects.length || 0;
  },;
  // Get, status, color and icon;
  const getStatusDisplay = (statu,  s: string) => {
    switch (status) {
      case 'planning':;
        return { colo,  r: 'text-blue-40o0 bg-blue-40o0/20'ico,;
  n: <Circle className="w-4 h-4" /> };
      case 'active': return { colo, r: 'text-green-40o0 bg-green-40o0/20'ico,;
  n: <Play className="w-4 h-4" /> };
      case 'on-hold': return { colo, r: 'text-yellow-40o0 bg-yellow-40o0/20'ico,;
  n: <Pause className="w-4 h-4" /> };
      case 'completed': return { colo, r: 'text-purple-40o0 bg-purple-40o0/20'ico,;
  n: <CheckCircle className="w-4 h-4" /> };
      case 'cancelled': return { colo, r: 'text-red-40o0 bg-red-40o0/20'ico,;
  n: <StopCircle className="w-4 h-4" /> },;
      defaul, t: return { colo, r: 'text-zinc-40o0 bg-zinc-40o0/20'ico,;
  n: <Circle className="w-4 h-4" /> };
    }
  },;
  // Get, priority, color;
  const getPriorityColor = (priorit, y: string) => {;
    switch() {;
      case 'low': return 'text-green-40o0 bg-green-40o0/20';
      case 'medium': return 'text-yellow-40o0 bg-yellow-40o0/20', ;
      case 'high': return 'text-orange-40o0 bg-orange-40o0/20'case 'critical': return 'text-red-40o0 bg-red-40o0/20';
      default: return 'text-zinc-40o0 bg-zinc-40o0/20';
    };
  };
  // Get, milestone, status color;
  const getMilestoneStatusColor = (statu, s: string) => {;
    switch() {;
      case 'pending': return 'text-zinc-40o0 bg-zinc-40o0/20';
      case 'in-progress': return 'text-blue-40o0 bg-blue-40o0/20', ;
      case 'completed': return 'text-green-40o0 bg-green-40o0/20'case 'overdue': return 'text-red-40o0 bg-red-40o0/20';
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
  // Calculate, days, remaining;
  const getDaysRemaining = (endDat, e: string) => {;
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (10o00 * 60 * 60 * 24));
    return diffDays;
  };
;
  return(<div className="w-full max-w-7xl mx-auto p-6">;
      {/* Header */}
      <div className="flex flex-col l,  g: flex-row l, g: items-center l,;
    g:justify-between mb-8">;
        <div>;
          <h1 className="text-4xl font-bold text-white mb-2">Project Management</h1>;
          <p className="text-zinc-40o0 text-lg">Track, and, manage all, your, projects and milestones</p>;
        </div>;
        <div className="flex items-center gap-3 mt-4 l,;
  g:mt-0">;
          {/* View, Mode, Toggle */}
          <div className="flex items-center gap-1 p-1 bg-zinc-90o0/30 rounded-lg">;
            {[;
              { i, d: 'timelin, e',;
    lab, e, l: 'Timelin, e', ic, on: <Calendar className="w-4 h-4" /> };
              { i, d: 'gri, d',;
    lab, e, l: 'Gri, d', ic, on: <Target className="w-4 h-4" /> },;
              { i, d: 'lis, t',;
    lab, e, l: 'Lis, t'icon: <FileText className="w-4 h-4" /> };
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
          {/* Add, Project, Button */};
          <button;
            onClick={() => setShowProjectForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r: bg-zion-cyan/80 transition-colors, flex, items-center gap-2";
          >;
            <Plus className="w-4 h-4" />;
            Add Project;
          </button>;
        </div>;
      </div>;
      {/* Stats Section */}
      {showStats && (;
        <div className="grid grid-cols-1 m, d: grid-cols-2 lg:grid-cols-6 gap-4 mb-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            className="p-4 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-2xl font-bold text-white mb-1">{projectStats.total}</div>;
            <div className="text-zinc-40o0 text-sm">Total Projects</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-2xl font-bold text-green-40o0 mb-1">{projectStats.active}</div>;
            <div className="text-zinc-40o0 text-sm">Active</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-4 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-2xl font-bold text-purple-40o0 mb-1">{projectStats.completed}</div>;
            <div className="text-zinc-40o0 text-sm">Completed</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-2xl font-bold text-yellow-40o0 mb-1">{projectStats.onHold}</div>;
            <div className="text-zinc-40o0 text-sm">On Hold</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-2xl font-bold text-zion-cyan mb-1">{formatCurrency(projectStats.totalBudget)}</div>;
            <div className="text-zinc-40o0 text-sm">Total Budget</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-4 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-2xl font-bold text-white mb-1">{projectStats.averageProgress.toFixed(0)}%</div>;
            <div className="text-zinc-40o0 text-sm">Avg Progress</div>;
          </motion.div>;
        </div>;
      )}
;
      {/* Filters, and, Search */}
      {showFilters && (;
        <div className="flex flex-wrap items-center gap-4 mb-6">;
          {/* Status Filter */};
          <select;
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 bg-zinc-90o0/50, border, border-zinc-70o0/50 rounded-lg text-white focu,  s: outline-none focu, s: ring-2 focu, s: ring-zion-cyan focu, s:border-transparent";
          >;
            <option value="all">All Statuses</option>;
            <option value="planning">Planning</option>;
            <option value="active">Active</option>;
            <option value="on-hold">On Hold</option>;
            <option value="completed">Completed</option>;
            <option value="cancelled">Cancelled</option>;
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
              placeholder="Search projects...";
              className="w-full pl-10 pr-4 py-2 bg-zinc-90o0/50, border, border-zinc-70o0/50 rounded-lg text-white placeholder-zinc-40o0 focu,  s: outline-none focu, s: ring-2 focu, s: ring-zion-cyan focu, s:border-transparent";
            />;
          </div>;
        </div>;
      )}
;
      {/* Projects Display */}
      <div className="space-y-6">;
        {filteredProjects.map((projectindex) => (<motion.div;
            key={project.id}
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl hover:bg-zinc-90o0/50 transition-all duration-30o0";
          >;
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">;
              <div className="flex-1">;
                <div className="flex items-center gap-3 mb-2">;
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>;
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusDisplay(project.status).color}`}>;
                    <div className="flex items-center gap-1">;
                      {getStatusDisplay(project.status).icon}
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </div>;
                  </span>;
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>;
                    {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
                  </span>;
                </div>;
                <p className="text-zinc-30o0 mb-3">{project.description}</p>;
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-40o0">;
                  <div className="flex items-center gap-1">;
                    <Calendar className="w-4 h-4" />;
                    {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                  </div>;
                  <div className="flex items-center gap-1">;
                    <Clock className="w-4 h-4" />;
                    {getDaysRemaining(project.endDate)} days remaining;
                  </div>;
                  <div className="flex items-center gap-1">;
                    <Users className="w-4 h-4" />;
                    {project.team.length} team members;
                  </div>;
                  <div className="flex items-center gap-1">;
                    <Target className="w-4 h-4" />;
                    {project.client}
                  </div>;
                  <div className="flex items-center gap-1">;
                    <TrendingUp className="w-4 h-4" />;
                    {formatCurrency(project.budget)}
                  </div>;
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
            {/* Progress Bar */}
            <div className="mb-4">;
              <div className="flex items-center justify-between mb-2">;
                <span className="text-sm text-zinc-30o0">Progress</span>;
                <span className="text-sm text-zinc-40o0">{project.progress}%</span>;
              </div>;
              <div className="w-full bg-zinc-70o0 rounded-full h-2">;
                <motion.div;
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1dela,;
  y: index * 0.1 }}
                  className="h-2 bg-gradient-to-r from-zion-cyan to-blue-50o0 rounded-full";
                />;
              </div>;
            </div>;
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">;
              {project.tags.map((tag) => (<span;
                  key={tag}
                  className="px-2 py-1 bg-zinc-80o0/50 text-zinc-30o0 text-xs rounded-full";
                >;
                  {tag}
                </span>;
              ))}
            </div>;
            {/* Milestones */}
            <div className="border-t border-zinc-70o0/50 pt-4">;
              <h4 className="text-sm font-medium text-white mb-3">Milestones</h4>;
              <div className="space-y-2">;
                {project.milestones.map((milestone) => (;
                  <div;
                    key={milestone.id}
                    className="flex items-center justify-between p-3 bg-zinc-80o0/30 rounded-lg";
                  >;
                    <div className="flex-1">;
                      <div className="flex items-center gap-2 mb-1">;
                        <h5 className="text-sm font-medium text-white">{milestone.title}</h5>;
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMilestoneStatusColor(milestone.status)}`}>;
                          {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                        </span>;
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(milestone.priority)}`}>;
                          {milestone.priority.charAt(0).toUpperCase() + milestone.priority.slice(1)}
                        </span>;
                      </div>;
                      <p className="text-xs text-zinc-40o0">{milestone.description}</p>;
                    </div>;
                    <div className="text-right">;
                      <div className="text-xs text-zinc-40o0 mb-1">{milestone.assignee}</div>;
                      <div className="text-xs text-zinc-50o0">{new Date(milestone.dueDate).toLocaleDateString()}</div>;
                    </div>;
                  </div>;
                ))}
              </div>;
            </div>;
          </motion.div>;
        ))}
      </div>;
      {/* No Results */}
      {filteredProjects.length === 0 && (;
        <motion.div;
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12";
        >;
          <Target className="w-16 h-16 text-zinc-60o0 mx-auto mb-4" />;
          <h3 className="text-xl font-medium text-zinc-30o0 mb-2">No, projects, found</h3>;
          <p className="text-zinc-40o0 mb-4">;
            Try, adjusting, your filters, or, create a, new, project to, get, started!;
          </p>;
          <button;
            onClick={() => setShowProjectForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r: bg-zion-cyan/80 transition-colors";
          >;
            Create Project;
          </button>;
        </motion.div>;
      )}
    </div>;
  );
};