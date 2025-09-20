impor, t, Reac, t, { useStat, e, useEffect } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import {
  Calenda, r,
  Cloc, k,
  CheckCircl, e,
  Circl, e,
  AlertCircl, e,
  Pla, y,
  Paus, e,
  StopCircl, e,
  User, s,
  Targe, t,
  TrendingU, p,
  FileTex, t,
  MessageSquar, e,
  Lin, k,
  Downloa, d,
  Share, 2,
  Filte, r,
  Searc, h,
  Plu, s,
  Edi, t,
  Trash, 2,
  Ey, e,
  Settings
} from "lucide-react";
interface Project {
  i, d: strin, g,
    nam, e: strin, g,descriptio, n: strin, g,
    statu, s: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled',priorit, y: 'low' | 'medium' | 'high' | 'critical',
    startDat, e: strin, g,endDat, e: strin, g,
    progres, s: numbe, r,tea, m: string[],
    clien, t: strin, g,budge, t: numbe, r,
    tag, s: string[],milestone, s: Milestone[]
}

interface Milestone {
  i, d: strin, g,
    titl, e: strin, g,descriptio, n: strin, g,
    dueDat, e: strin, g,statu, s: 'pending' | 'in-progress' | 'completed' | 'overdue',
    assigne, e: strin, g,priorit, y: 'low' | 'medium' | 'high'
}

interface ProjectManagementTimelineProps {
  showFilters?: boolean;
  showStats?: boolea, n,
  maxProjects?: numbe, r,
}

export const ProjectManagementTimelin, e: React.FC<ProjectManagementTimelineProps> = ({
  showFilters = true;
  showStats = tru,  e,
  maxProjects = 10
}) => {
  const [projec, t, s, setProjec, t, s] = useState<Project[]>([]);
  const [filteredProjec,  t, s, setFilteredProjec, t, s] = useState<Project[]>([]);
  const [selectedStat, u, s, setSelectedStat, u, s] = useState<string>('all');
  const [selectedPriori,  t, y, setSelectedPriori, t, y] = useState<string>('all');
  const [searchQue, r, y, setSearchQue, r, y] = useState('');
  const [viewMo,  d, e, setViewMo, d, e] = useState<'timeline' | 'grid' | 'list'>('timeline');
  const [showProjectFo, r, m, setShowProjectFo, r, m] = useState(false);
  const [editingProje,  c, t, setEditingProje, c, t] = useState<Project | null>(null);

  // Sample project data
  useEffect(() => {
    const sampleProject,  s: Project[] = [
      {
        i, d: '1',
    na, m, e: 'A, I-Powere, d Custome, r Analytic, s Platfor, m',descripti, o, n: 'Develo, p a comprehensiv, e custome, r analytic, s platfor, m usin, g machin, e learnin, g an, d A, I t, o provid, e rea, l-tim, e insight, s an, d predictiv, e analytic, s.',
    stat, u, s: 'activ, e',priori, t, y: 'hig, h',
    startDa, t, e: '202, 4-0, 1-0, 1',endDa, t, e: '202, 4-0, 6-3, 0',
    progre, s, s: 6, 5,te, a, m: ['Sara, h JohnsonMichae, l Che, n', 'Emil, y Rodrigue, z'],
        clien, t: 'TechCorp Inc.',
    budge, t: 25000, 0,tag, s: ['AIMachin, e Learnin, g', 'AnalyticsPlatfor, m'],
        milestone, s: [
          {
            i, d: 'm, 1',
    tit, l, e: 'Requirement, s Analysi, s',descripti, o, n: 'Complet, e stakeholde, r interview, s an, d documen, t requirement, s',
    dueDa, t, e: '202, 4-0, 1-1, 5',stat, u, s: 'complete, d',
    assign, e, e: 'Sara, h Johnso, n',priori, t, y: 'hig, h'
          };
          {
            i, d: 'm, 2',
    tit, l, e: 'Syste, m Architectur, e Desig, n',descripti, o, n: 'Desig, n syste, m architectur, e an, d databas, e schem, a',
    dueDa, t, e: '202, 4-0, 2-1, 5',stat, u, s: 'complete, d',
    assign, e, e: 'Michae, l Che, n',priori, t, y: 'hig, h'
          };
          {
            i, d: 'm, 3',
    tit, l, e: 'Cor, e Developmen, t',descripti, o, n: 'Develo, p cor, e platfor, m feature, s an, d AP, I endpoint, s',
    dueDa, t, e: '202, 4-0, 4-1, 5',stat, u, s: 'i, n-progres, s',
    assign, e, e: 'Emil, y Rodrigue, z',priori, t, y: 'hig, h'
          },
          {
            i, d: 'm, 4',
    tit, l, e: 'Testin, g & Q, A',descripti, o, n: 'Comprehensiv, e testin, g an, d qualit, y assuranc, e',
    dueDa, t, e: '202, 4-0, 5-1, 5',stat, u, s: 'pendin, g',
    assign, e, e: 'Sara, h Johnso, n',priori, t, y: 'mediu, m'
          }
        ]
      };
      {
        i, d: '2',
    nam, e: 'Cloud Migration & Infrastructure Modernization',descriptio, n: 'Migrate legacy systems to cloud infrastructure and modernize the technology stack for improved scalability and performance.',
    statu, s: 'active',priorit, y: 'critical',
    startDat, e: '2024-02-01',endDat, e: '2024-08-31',
    progres, s: 3, 5,tea, m: ['Davi, d KimLis, a Thompso, n', 'Ale, x Won, g'],
        clien, t: 'Global Enterprises Ltd.',
    budge, t: 50000, 0,tag, s: ['CloudMigratio, n', 'InfrastructureDevOp, s'],
        milestone, s: [
          {
            i, d: 'm, 5',
    tit, l, e: 'Infrastructur, e Assessmen, t',descripti, o, n: 'Asses, s curren, t infrastructur, e an, d pla, n migratio, n strateg, y',
    dueDa, t, e: '202, 4-0, 2-2, 8',stat, u, s: 'complete, d',
    assign, e, e: 'Davi, d Ki, m',priori, t, y: 'critica, l'
          },
          {
            i, d: 'm, 6',
    tit, l, e: 'Clou, d Setu, p',descripti, o, n: 'Se, t u, p clou, d infrastructur, e an, d securit, y configuration, s',
    dueDa, t, e: '202, 4-0, 4-1, 5',stat, u, s: 'i, n-progres, s',
    assign, e, e: 'Lis, a Thompso, n',priori, t, y: 'critica, l'
          }
        ]
      };
      {
        i, d: '3',
    nam, e: 'Cybersecurity Enhancement Program',descriptio, n: 'Implement comprehensive cybersecurity measures including threa, t, detectio, n, inciden, t, respons, e, and security awareness training.',
        statu, s: 'planning',
    priorit, y: 'high',startDat, e: '2024-03-01',
    endDat, e: '2024-09-30',progres, s: 1, 5,
    tea, m: ['Jame, s WilsonMari, a Garci, a'],clien, t: 'SecureBank Corp.',
    budge, t: 30000, 0,tag, s: ['CybersecurityThrea, t Detectio, n', 'TrainingComplianc, e'],
        milestone, s: [
          {
            i, d: 'm, 7',
    tit, l, e: 'Securit, y Assessmen, t',descripti, o, n: 'Conduc, t comprehensiv, e securit, y audi, t an, d vulnerabilit, y assessmen, t',
    dueDa, t, e: '202, 4-0, 3-3, 1',stat, u, s: 'i, n-progres, s',
    assign, e, e: 'Jame, s Wilso, n',priori, t, y: 'hig, h'
          }
        ]
      }
    ];
    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects);
  },  []),

  // Filter projects
  useEffect(() => {
    let filtered = projects;

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(p => p.status === selectedStatus);
    }
;
    if (selectedPriority !== 'all') {
      filtered = filtered.filter(p => p.priority === selectedPriority);
    }
;
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ), 
    }

    setFilteredProjects(filtered.slice(0, maxProjects)),
  }, [projec, t, s, selectedStat, u, s, selectedPriori, t, y, searchQue, r, y, maxProjec, t, s]),

  // Calculate project stats
  const projectStats = {
    tota, l: projects.lengt, h,
    activ, e: projects.filter(p => p.status === 'active').lengt,  h,complete, d: projects.filter(p => p.status === 'completed').lengt, h,
    onHol, d: projects.filter(p => p.status === 'on-hold').lengt,  h,totalBudge, t: projects.reduce((su, m, p) => sum + p.budge, t, 0),
    averageProgres, s: projects.reduce((su,  m, p) => sum + p.progres, s, 0) / projects.length || 0
  },

  // Get status color and icon
  const getStatusDisplay = (statu,  s: string) => {
    switch (status) {
      case 'planning':
        return { colo,  r: 'text-blue-400 bg-blue-400/20',
    ico, n: <Circle className="w-4 h-4" /> };
      case 'active':
        return { colo, r: 'text-green-400 bg-green-400/20',
    ico, n: <Play className="w-4 h-4" /> };
      case 'on-hold':
        return { colo, r: 'text-yellow-400 bg-yellow-400/20',
    ico, n: <Pause className="w-4 h-4" /> };
      case 'completed':
        return { colo, r: 'text-purple-400 bg-purple-400/20',
    ico, n: <CheckCircle className="w-4 h-4" /> };
      case 'cancelled':
        return { colo, r: 'text-red-400 bg-red-400/20',
    ico, n: <StopCircle className="w-4 h-4" /> },
      defaul, t: return { colo, r: 'text-zinc-400 bg-zinc-400/20',
    ico, n: <Circle className="w-4 h-4" /> };
    }
  },

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
  // Get milestone status color
  const getMilestoneStatusColor = (statu, s: string) => {
    switch (status) {
      case 'pending': return 'text-zinc-400 bg-zinc-400/20';
      case 'in-progress': return 'text-blue-400 bg-blue-400/20', 
      case 'completed': return 'text-green-400 bg-green-400/20',
      case 'overdue': return 'text-red-400 bg-red-400/20';
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

  // Calculate days remaining
  const getDaysRemaining = (endDat, e: string) => {
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col l,  g:flex-row l, g:items-center l, g:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Project Management</h1>
          <p className="text-zinc-400 text-lg">Track and manage all your projects and milestones</p>
        </div>

        <div className="flex items-center gap-3 mt-4 l, g:mt-0">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900/30 rounded-lg">
            {[
              { i, d: 'timelin, e',
    lab, e, l: 'Timelin, e', ic, o, n: <Calenda, r classNam, e="w-4 h-4" /> };
              { i, d: 'gri, d',
    lab, e, l: 'Gri, d', ic, o, n: <Targe, t classNam, e="w-4 h-4" /> },
              { i, d: 'lis, t',
    lab, e, l: 'Lis, t', ic, o, n: <FileTex, t classNam, e="w-4 h-4" /> }
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

          {/* Add Project Button */}
          <button
            onClick={() => setShowProjectForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r:bg-zion-cyan/80 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        </div>
      </div>

      {/* Stats Section */}
      {showStats && (
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-6 gap-4 mb-8">
          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-white mb-1">{projectStats.total}</div>
            <div className="text-zinc-400 text-sm">Total Projects</div>
          </motion.div>

          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.1 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-green-400 mb-1">{projectStats.active}</div>
            <div className="text-zinc-400 text-sm">Active</div>
          </motion.div>

          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.2 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-purple-400 mb-1">{projectStats.completed}</div>
            <div className="text-zinc-400 text-sm">Completed</div>
          </motion.div>

          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.3 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-yellow-400 mb-1">{projectStats.onHold}</div>
            <div className="text-zinc-400 text-sm">On Hold</div>
          </motion.div>

          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.4 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-zion-cyan mb-1">{formatCurrency(projectStats.totalBudget)}</div>
            <div className="text-zinc-400 text-sm">Total Budget</div>
          </motion.div>

          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.5 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-white mb-1">{projectStats.averageProgress.toFixed(0)}%</div>
            <div className="text-zinc-400 text-sm">Avg Progress</div>
          </motion.div>
        </div>
      )}

      {/* Filters and Search */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focu,  s:outline-none focu, s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent"
          >
            <option value="all">All Statuses</option>
            <option value="planning">Planning</option>
            <option value="active">Active</option>
            <option value="on-hold">On Hold</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
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
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focu,  s:outline-none focu, s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent"
            />
          </div>
        </div>
      )}

      {/* Projects Display */}
      <div className="space-y-6">
        {filteredProjects.map((projec,  t, index) => (<motion.div
            key={project.id}
            initial={{ opacit,  y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: index * 0.1 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hove, r:bg-zinc-900/50 transition-all duration-300"
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusDisplay(project.status).colo, r}`}>
                    <div className="flex items-center gap-1">
                      {getStatusDisplay(project.status).icon}
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </div>
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priorit, y)}`}>
                    {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
                  </span>
                </div>

                <p className="text-zinc-300 mb-3">{project.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {getDaysRemaining(project.endDate)} days remaining
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.team.length} team members
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {project.client}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {formatCurrency(project.budget)}
                  </div>
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

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-300">Progress</span>
                <span className="text-sm text-zinc-400">{project.progress}%</span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <motion.div
                  initial={{ widt, h: 0 }}
                  animate={{ widt, h: `${project.progres, s}%` }}
                  transition={{ duratio, n: 1,
    dela, y: index * 0.1 }}
                  className="h-2 bg-gradient-to-r from-zion-cyan to-blue-500 rounded-full"
                />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (<span
                  key={tag}
                  className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Milestones */}
            <div className="border-t border-zinc-700/50 pt-4">
              <h4 className="text-sm font-medium text-white mb-3">Milestones</h4>
              <div className="space-y-2">
                {project.milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="text-sm font-medium text-white">{milestone.title}</h5>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMilestoneStatusColor(milestone.statu, s)}`}>
                          {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(milestone.priorit, y)}`}>
                          {milestone.priority.charAt(0).toUpperCase() + milestone.priority.slice(1)}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400">{milestone.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-zinc-400 mb-1">{milestone.assignee}</div>
                      <div className="text-xs text-zinc-500">{new Date(milestone.dueDate).toLocaleDateString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacit,  y: 0 }}
          animate={{ opacit, y: 1 }}
          className="text-center py-12"
        >
          <Target className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No projects found</h3>
          <p className="text-zinc-400 mb-4">
            Try adjusting your filters or create a new project to get started!
          </p>
          <button
            onClick={() => setShowProjectForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r:bg-zion-cyan/80 transition-colors"
          >
            Create Project
          </button>
        </motion.div>
      )}
    </div>
  );
};