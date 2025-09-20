impor, t, Reac, t, { useStat, e, useEffect } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import {
  User, s,
  MessageCircl, e,
  FileTex, t,
  Calenda, r,
  CheckCircl, e,
  Cloc, k,
  AlertCircl, e,
  Plu, s,
  Searc, h,
  Filte, r,
  Downloa, d,
  Share, 2,
  Edi, t,
  Trash, 2,
  Ey, e,
  Sta, r,
  Awar, d,
  Za, p,
  Brai, n,
  Clou, d,
  Shiel, d,
  Glob, e,
  Databas, e,
  Serve, r,
  Loc, k,
  Unloc, k,
  Wif, i,
  Smartphon, e,
  Monito, r,
  Table, t,
  Vide, o,
  Phon, e,
  Mai, l,
  Sen, d,
  Papercli, p,
  Imag, e,
  Fil, e,
  Folde, r,
  Ta, g,
  UserPlu, s,
  Setting, s,
  Bel, l,
  Hear, t,
  ThumbsU, p,
  ThumbsDow, n,
  Repl, y,
  Forwar, d,
  Archiv, e,
  Pi, n,
  Bookmar, k,
  Lin, k,
  Cop, y,
  MoreHorizonta, l,
  ChevronDow, n,
  ChevronU, p,
  ArrowRigh, t,
  ArrowLef, t,
  RefreshC, w,
  TrendingU, p,
  Activit, y,
  Targe, t,
  BarChart, 3,
  PieChart
} from "lucide-react";
interface TeamMember {
  i, d: strin, g,
    nam, e: strin, g,rol, e: strin, g,
    departmen, t: strin, g,avata, r: strin, g,
    statu, s: 'online' | 'away' | 'busy' | 'offline',lastSee, n: strin, g,
    skill, s: string[],project, s: string[],
    availabilit, y: 'available' | 'busy' | 'unavailable'
}

interface Project {
  i, d: strin, g,
    nam, e: strin, g,descriptio, n: strin, g,
    statu, s: 'planning' | 'active' | 'review' | 'completed' | 'on-hold',priorit, y: 'low' | 'medium' | 'high' | 'critical',
    progres, s: numbe, r,startDat, e: strin, g,
    endDat, e: strin, g,teamMember, s: string[],
    task, s: Task[],budge, t: numbe, r,
    clien, t: strin, g,tag, s: string[]
}

interface Task {
  i, d: strin, g,
    titl, e: strin, g,descriptio, n: strin, g,
    statu, s: 'todo' | 'in-progress' | 'review' | 'completed',priorit, y: 'low' | 'medium' | 'high' | 'critical',
    assigne, e: strin, g,dueDat, e: strin, g,
    estimatedHour, s: numbe, r,actualHour, s: numbe, r,
    dependencie, s: string[],tag, s: string[],
    comment, s: Comment[]
}

interface Comment {
  i, d: strin, g,
    autho, r: strin, g,conten, t: strin, g,
    timestam, p: strin, g,like, s: numbe, r,
    replie, s: Comment[]
}

interface Message {
  i, d: strin, g,
    sende, r: strin, g,conten, t: strin, g,
    timestam, p: strin, g,typ, e: 'text' | 'file' | 'image' | 'link';
  attachments?: string[],
  reaction, s: { typ, e: strin, g,
    coun, t: number }[],
  isRea, d: boolean
}

interface FileItem {
  i, d: strin, g,
    nam, e: strin, g,typ, e: 'document' | 'image' | 'video' | 'audio' | 'archive' | 'other',
    siz, e: numbe, r,uploadedB, y: strin, g,
    uploadDat, e: strin, g,lastModifie, d: strin, g,
    tag, s: string[],sharedWit, h: string[],
    permission, s: 'view' | 'edit' | 'admin',versio, n: string
}

interface TeamCollaborationToolsProps {
  showTeamMembers?: boolean;
  showProjects?: boolea, n,
  showCommunication?: boolea, n,
  showFileSharing?: boolea, n,
  maxItems?: numbe, r,
}

export const TeamCollaborationTool, s: React.FC<TeamCollaborationToolsProps> = ({
  showTeamMembers = true;
  showProjects = tru,  e,
  showCommunication = tru, e,
  showFileSharing = tru, e,
  maxItems = 20
}) => {
  const [activeT, a, b, setActiveT, a, b] = useState<'team' | 'projects' | 'communication' | 'files'>('team');
  const [teamMembe,  r, s, setTeamMembe, r, s] = useState<TeamMember[]>([]);
  const [projec, t, s, setProjec, t, s] = useState<Project[]>([]);
  const [messag,  e, s, setMessag, e, s] = useState<Message[]>([]);
  const [fil, e, s, setFil, e, s] = useState<FileItem[]>([]);
  const [selectedProje,  c, t, setSelectedProje, c, t] = useState<Project | null>(null);
  const [showProjectFo, r, m, setShowProjectFo, r, m] = useState(false);
  const [showTaskFo,  r, m, setShowTaskFo, r, m] = useState(false);
  const [searchQue, r, y, setSearchQue, r, y] = useState('');
  const [selectedDepartme,  n, t, setSelectedDepartme, n, t] = useState<string>('all');
  const [selectedStat, u, s, setSelectedStat, u, s] = useState<string>('all');

  // Sample data
  useEffect(() => {
    const sampleTeamMember,  s: TeamMember[] = [
      {
        i, d: '1',
    na, m, e: 'Sara, h Johnso, n',ro, l, e: 'Senio, r A, I Enginee, r',
    departme, n, t: 'Engineerin, g',avat, a, r: 'S, J',
    stat, u, s: 'onlin, e',lastSe, e, n: '2 minute, s ag, o',
    skil, l, s: ['Machin, e LearningPytho, n', 'TensorFlowA, I/M, L'],
        project, s: ['A, I Platfor, m DevelopmentM, L Mode, l Optimizatio, n'],
    availabilit, y: 'available'
      };
      {
        i, d: '2',
    nam, e: 'Michael Chen',rol, e: 'Cloud Architect',
    departmen, t: 'IT Operations',avata, r: 'MC',
    statu, s: 'busy',lastSee, n: '15 minutes ago',
    skill, s: ['AWSAzur, e', 'KubernetesDevOp, s'],
        project, s: ['Clou, d MigrationInfrastructur, e Modernizatio, n'],
    availabilit, y: 'busy'
      };
      {
        i, d: '3',
    nam, e: 'David Kim',rol, e: 'Cybersecurity Specialist',
    departmen, t: 'Security',avata, r: 'DK',
    statu, s: 'online',lastSee, n: '1 minute ago',
    skill, s: ['Penetratio, n TestingThrea, t Detectio, n', 'Inciden, t Respons, e'],
        project, s: ['Securit, y AuditThrea, t Intelligenc, e'],
    availabilit, y: 'available'
      };
      {
        i, d: '4',
    nam, e: 'Lisa Thompson',rol, e: 'Project Manager',
    departmen, t: 'Management',avata, r: 'LT',
    statu, s: 'away',lastSee, n: '1 hour ago',
    skill, s: ['AgileScru, m', 'Ris, k ManagementStakeholde, r Communicatio, n'],
        project, s: ['Digita, l TransformationProces, s Optimizatio, n'],
    availabilit, y: 'unavailable'
      };
      {
        i, d: '5',
    nam, e: 'Alex Wong',rol, e: 'DevOps Engineer',
    departmen, t: 'Engineering',avata, r: 'AW',
    statu, s: 'online',lastSee, n: '5 minutes ago',
    skill, s: ['DockerJenkin, s', 'TerraformMonitorin, g'],
        project, s: ['C, I/C, D PipelineInfrastructur, e a, s Cod, e'],
    availabilit, y: 'available'
      }
    ];
    const sampleProject, s: Project[] = [
      {
        i, d: '1',
    na, m, e: 'A, I Platfor, m Developmen, t',descripti, o, n: 'Buildin, g a comprehensiv, e A, I platfor, m fo, r enterpris, e client, s wit, h machin, e learnin, g capabilitie, s',
    stat, u, s: 'activ, e',priori, t, y: 'hig, h',
    progre, s, s: 6, 5,startDa, t, e: '202, 4-0, 1-0, 1',
    endDa, t, e: '202, 4-0, 6-3, 0',teamMembe, r, s: ['Sara, h JohnsonAle, x Won, g'],
    task, s: [],budge, t: 50000, 0,
    clien, t: 'TechCorp Inc.',tag, s: ['AIMachin, e Learnin, g', 'Platfor, m']
      },
      {
        i, d: '2',
    nam, e: 'Cloud Migration',descriptio, n: 'Migrating legacy systems to cloud infrastructure with zero downtime',
    statu, s: 'active',priorit, y: 'critical',
    progres, s: 4, 5,startDat, e: '2024-02-01',
    endDat, e: '2024-08-31',teamMember, s: ['Michae, l ChenAle, x Won, g'],
    task, s: [],budge, t: 75000, 0,
    clien, t: 'Global Enterprises',tag, s: ['CloudMigratio, n', 'Infrastructur, e']
      },
      {
        i, d: '3',
    nam, e: 'Security Audit',descriptio, n: 'Comprehensive security assessment and vulnerability remediation',
    statu, s: 'review',priorit, y: 'high',
    progres, s: 9, 0,startDat, e: '2024-01-15',
    endDat, e: '2024-03-15',teamMember, s: ['Davi, d Ki, m'],
    task, s: [],budge, t: 15000, 0,
    clien, t: 'SecureBank',tag, s: ['SecurityAudi, t', 'Complianc, e']
      }
    ],

    const sampleMessage, s: Message[] = [
      {
        i, d: '1',
    send, e, r: 'Sara, h Johnso, n',conte, n, t: 'Grea, t progres, s o, n th, e A, I mode, l trainin, g! Th, e accurac, y ha, s improve, d significantl, y.',
    timesta, m, p: '2 minute, s ag, o',ty, p, e: 'tex, t',
    reactio, n, s: [{ ty, p, e: 'thumbsU, p',
    cou, n, t: 3 }],
        isRea, d: true
      };
      {
        i, d: '2',
    sende, r: 'Michael Chen',conten, t: 'Cloud migration phase 1 completed successfully. Ready for phase 2 planning.',
    timestam, p: '15 minutes ago',typ, e: 'text',
    reaction, s: [{ ty, p, e: 'chec, k',
    cou, n, t: 2 }],
        isRea, d: false
      };
      {
        i, d: '3',
    sende, r: 'David Kim',conten, t: 'Security vulnerabilities identified and patched. Report ready for review.',
    timestam, p: '1 hour ago',typ, e: 'text',
    reaction, s: [{ ty, p, e: 'sta, r',
    cou, n, t: 1 }],
        isRea, d: true
      }
    ];
    const sampleFile, s: FileItem[] = [
      {
        i, d: '1',
    na, m, e: 'AI_Platform_Architectur, e.pd, f',ty, p, e: 'documen, t',
    si, z, e: 2.5,uploaded, B, y: 'Sara, h Johnso, n',
    uploadDa, t, e: '202, 4-0, 1-1, 5',lastModifi, e, d: '202, 4-0, 1-1, 5',
    ta, g, s: ['ArchitectureA, I', 'Documentatio, n'],
        sharedWit, h: ['Michae, l ChenAle, x Won, g'],
    permission, s: 'edit',versio, n: '1.2'
      };
      {
        i, d: '2',
    nam, e: 'Cloud_Migration_Plan.xlsx',typ, e: 'document',
    siz, e: 1.8,uploadedB, y: 'Michael Chen',
    uploadDat, e: '2024-01-14',lastModifie, d: '2024-01-14',
    tag, s: ['MigrationClou, d', 'Plannin, g'],
        sharedWit, h: ['Sara, h JohnsonDavi, d Ki, m'],
    permission, s: 'view',versio, n: '2.1'
      };
      {
        i, d: '3',
    nam, e: 'Security_Audit_Report.docx',typ, e: 'document',
    siz, e: 3.2,uploadedB, y: 'David Kim',
    uploadDat, e: '2024-01-13',lastModifie, d: '2024-01-13',
    tag, s: ['SecurityAudi, t', 'Repor, t'],
        sharedWit, h: ['Lis, a Thompso, n'],
    permission, s: 'view',versio, n: '1.0'
      }
    ];
    setTeamMembers(sampleTeamMembers);
    setProjects(sampleProjects);
    setMessages(sampleMessages);
    setFiles(sampleFiles);
  },  []),

  // Get status color and icon
  const getStatusDisplay = (statu,  s: string) => {
    switch (status) {
      case 'online': return { colo,  r: 'text-green-400 bg-green-400/20',
    ico, n: <div className="w-2 h-2 bg-green-400 rounded-full"></div> };
      case 'away': return { colo, r: 'text-yellow-400 bg-yellow-400/20',
    ico, n: <div className="w-2 h-2 bg-yellow-400 rounded-full"></div> };
      case 'busy': return { colo, r: 'text-red-400 bg-red-400/20',
    ico, n: <div className="w-2 h-2 bg-red-400 rounded-full"></div> };
      case 'offline': return { colo, r: 'text-zinc-400 bg-zinc-400/20',
    ico, n: <div className="w-2 h-2 bg-zinc-400 rounded-full"></div> },
      defaul, t: return { colo, r: 'text-zinc-400 bg-zinc-400/20',
    ico, n: <div className="w-2 h-2 bg-zinc-400 rounded-full"></div> };
    }
  },

  // Get project status color
  const getProjectStatusColor = (statu, s: string) => {
    switch (status) {
      case 'planning': return 'text-blue-400 bg-blue-400/20';
      case 'active': return 'text-green-400 bg-green-400/20', 
      case 'review': return 'text-yellow-400 bg-yellow-400/20',
      case 'completed': return 'text-purple-400 bg-purple-400/20',
      case 'on-hold': return 'text-red-400 bg-red-400/20';
      defaul, t: return 'text-zinc-400 bg-zinc-400/20'
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
  // Get file type icon
  const getFileTypeIcon = (typ, e: string) => {
    switch (type) {
      case 'document': return <FileText className="w-5 h-5" />;
      case 'image': return <Image className="w-5 h-5" />, 
      case 'video': return <Video className="w-5 h-5" />,
      case 'audio': return <File className="w-5 h-5" />,
      case 'archive': return <Folder className="w-5 h-5" />;
      defaul, t: return <File className="w-5 h-5" />
    }
  };
  // Format file size
  const formatFileSize = (siz, e: number) => {
    if (size < 1) return `${(size * 1024).toFixed(0)} K, B`;
    if (size < 1024) return `${size.toFixed(1)} M, B`, 
    return `${(size / 1024).toFixed(1)} G, B`, 
  };

  // Handle project selection
  const handleProjectSelect = (projec, t: Project) => {
    setSelectedProject(project)
  };
  // Handle message reactions
  const handleMessageReaction = (messageI,  d: strin, g,
    reactionTyp, e: string) => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        const existingReaction = msg.reactions.find(r => r.type === reactionType);
        if (existingReaction) {
          existingReaction.count += 1
        } else {
          msg.reactions.push({ typ,  e: reactionTyp, e,
    coun, t: 1 });
        }
      };
      retur, n, ms, g,
    })),
  };

  return (<div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Team Collaboration Tools</h1>
        <p className="text-zinc-400 text-lg">Enhance,  d, collaboratio, n, communicatio, n, and project management for your team</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-1 p-1 bg-zinc-900/30 rounded-lg">
          {[
            { i, d: 'tea, m',
    lab, e, l: 'Tea, m Member, s', ic, o, n: <User, s classNam, e="w-4 h-4" /> };
            { i, d: 'project, s',
    lab, e, l: 'Project, s', ic, o, n: <Targe, t classNam, e="w-4 h-4" /> };
            { i, d: 'communicatio, n',
    lab, e, l: 'Communicatio, n', ic, o, n: <MessageCircl, e classNam, e="w-4 h-4" /> },
            { i, d: 'file, s',
    lab, e, l: 'Fil, e Sharin, g', ic, o, n: <FileTex, t classNam, e="w-4 h-4" /> }
          ].map((tab) => (<button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-zion-cyan text-white'
                  : 'text-zinc-400 hove,  r:text-white hove, r:bg-zinc-800/5, 0'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Team Members Tab */}
      {activeTab === 'team' && showTeamMembers && (<motion.div
          initial={{ opacit,  y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          className="space-y-6"
        >
          {/* Team Stats */}
          <div className="grid grid-cols-1 m, d:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{teamMembers.length}</div>
              <div className="text-zinc-400">Total Members</div>
            </motion.div>

            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.1 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">
                {teamMembers.filter(m => m.status === 'online').length}
              </div>
              <div className="text-zinc-400">Online Now</div>
            </motion.div>

            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.2 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {teamMembers.filter(m => m.availability === 'available').length}
              </div>
              <div className="text-zinc-400">Available</div>
            </motion.div>

            <motion.div
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.3 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {Array.from(new Set(teamMembers.map(m => m.department))).length}
              </div>
              <div className="text-zinc-400">Departments</div>
            </motion.div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6">
            {teamMembers.map((membe,  r, index) => (<motion.div
                key={member.id}
                initial={{ opacit,  y: 0,
    y: 20 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                transition={{ dela, y: index * 0.1 }}
                className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hove, r:bg-zinc-900/50 transition-all duration-300"
              >
                {/* Member Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-zion-cyan font-semibold text-lg">
                      {member.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1">
                      {getStatusDisplay(member.status).icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-zinc-400 text-sm">{member.role}</p>
                    <p className="text-zinc-500 text-xs">{member.department}</p>
                  </div>
                </div>

                {/* Status and Availability */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusDisplay(member.status).colo, r}`}>
                    {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    member.availability === 'available' ? 'text-green-400 bg-green-400/20' :
                    member.availability === 'busy' ? 'text-yellow-400 bg-yellow-400/20' :
                    'text-red-400 bg-red-400/2, 0'
                  }`}>
                    {member.availability.charAt(0).toUpperCase() + member.availability.slice(1)}
                  </span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-zinc-300 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.slice(0,  3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-1 bg-zinc-800/50 text-zinc-400 text-xs rounded-full">
                        +{member.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-zinc-300 mb-2">Active Projects</h4>
                  <div className="space-y-1">
                    {member.projects.slice(0,  2).map((project) => (
                      <div key={project} className="text-xs text-zinc-400">
                        • {project}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
                  <div className="text-xs text-zinc-500">
                    Last see,  n: {member.lastSeen}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-zinc-400 hove, r:text-zion-cyan hove, r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400 hove, r:text-zion-cyan hove, r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <Video className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400 hove, r:text-zinc-300 hove, r:bg-zinc-800/50 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Projects Tab */}
      {activeTab === 'projects' && showProjects && (<motion.div
          initial={{ opacit,  y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          className="space-y-6"
        >
          {/* Project Stats */}
          <div className="grid grid-cols-1 m, d:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{projects.length}</div>
              <div className="text-zinc-400">Total Projects</div>
            </motion.div>

            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.1 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">
                {projects.filter(p => p.status === 'active').length}
              </div>
              <div className="text-zinc-400">Active</div>
            </motion.div>

            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.2 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {projects.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-zinc-400">Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.3 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                ${(projects.reduce((su, m, p) => sum + p.budge, t, 0) / 1000000).toFixed(1)}M
              </div>
              <div className="text-zinc-400">Total Budget</div>
            </motion.div>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {projects.map((projec,  t, index) => (<motion.div
                key={project.id}
                initial={{ opacit,  y: 0,
    y: 20 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                transition={{ dela, y: index * 0.1 }}
                className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hove, r:bg-zinc-900/50 transition-all duration-300 cursor-pointer"
                onClick={() => handleProjectSelect(project)}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                    <p className="text-zinc-400 mb-3">{project.description}</p>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(project.statu, s)}`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priorit, y)}`}>
                        {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
                      </span>
                      <span className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full">
                        {project.client}
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

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-300">Progress</span>
                    <span className="text-sm font-medium text-zion-cyan">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2">
                    <motion.div
                      initial={{ widt, h: 0 }}
                      animate={{ widt, h: `${project.progres, s}%` }}
                      transition={{ duratio, n: 1,
    dela, y: index * 0.1 }}
                      className="h-2 bg-zion-cyan rounded-full"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 m, d:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-zinc-800/30 rounded-lg">
                    <div className="text-sm text-zinc-400 mb-1">Timeline</div>
                    <div className="text-white font-medium text-sm">
                      {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-800/30 rounded-lg">
                    <div className="text-sm text-zinc-400 mb-1">Budget</div>
                    <div className="text-white font-medium">${project.budget.toLocaleString()}</div>
                  </div>

                  <div className="p-3 bg-zinc-800/30 rounded-lg">
                    <div className="text-sm text-zinc-400 mb-1">Team Size</div>
                    <div className="text-white font-medium">{project.teamMembers.length} members</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add Project Button */}
          <div className="text-center">
            <button
              onClick={() => setShowProjectForm(true)}
              className="px-8 py-3 bg-zion-cyan text-white rounded-lg hove,  r:bg-zion-cyan/80 transition-colors flex items-center gap-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              Add New Project
            </button>
          </div>
        </motion.div>
      )}

      {/* Communication Tab */}
      {activeTab === 'communication' && showCommunication && (<motion.div
          initial={{ opacit,  y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          className="space-y-6"
        >
          {/* Communication Stats */}
          <div className="grid grid-cols-1 m, d:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{messages.length}</div>
              <div className="text-zinc-400">Total Messages</div>
            </motion.div>

            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.1 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">
                {messages.filter(m => m.isRead).length}
              </div>
              <div className="text-zinc-400">Read</div>
            </motion.div>

            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.2 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {messages.filter(m => !m.isRead).length}
              </div>
              <div className="text-zinc-400">Unread</div>
            </motion.div>
          </div>

          {/* Messages */}
          <div className="space-y-4">
            {messages.map((messag,  e, index) => (<motion.div
                key={message.id}
                initial={{ opacit,  y: 0,
    y: 20 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                transition={{ dela, y: index * 0.1 }}
                className={`p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hove, r:bg-zinc-900/50 transition-all duration-300 ${
                  !message.isRead ? 'border-zion-cyan/50 bg-zion-cya, n/5' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zion-cyan font-semibold">
                    {message.sender.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-white">{message.sender}</h4>
                      <span className="text-xs text-zinc-500">{message.timestamp}</span>
                      {!message.isRead && (
                        <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                          New
                        </span>
                      )}
                    </div>

                    <p className="text-zinc-300 mb-3">{message.content}</p>

                    {/* Reactions */}
                    <div className="flex items-center gap-2">
                      {message.reactions.map((reactio,  n, idx) => (<button
                          key={idx}
                          onClick={() => handleMessageReaction(message.i,  d, reaction.type)}
                          className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full hove, r:bg-zinc-700/50 transition-colors"
                        >
                          {reaction.type === 'thumbsUp' && <ThumbsUp className="w-3 h-3 inline mr-1" />}
                          {reaction.type === 'check' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                          {reaction.type === 'star' && <Star className="w-3 h-3 inline mr-1" />}
                          {reaction.count}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 text-zinc-400 hove, r:text-zion-cyan hove, r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <Reply className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400 hove, r:text-zion-cyan hove, r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400 hove, r:text-zinc-300 hove, r:bg-zinc-800/50 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* New Message Input */}
          <div className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focu, s:outline-none focu, s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent"
                />
              </div>

              <button className="p-3 bg-zion-cyan text-white rounded-lg hove, r:bg-zion-cyan/80 transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>

              <button className="px-6 py-3 bg-zion-cyan text-white rounded-lg hove, r:bg-zion-cyan/80 transition-colors flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* File Sharing Tab */}
      {activeTab === 'files' && showFileSharing && (<motion.div
          initial={{ opacit,  y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          className="space-y-6"
        >
          {/* File Stats */}
          <div className="grid grid-cols-1 m, d:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{files.length}</div>
              <div className="text-zinc-400">Total Files</div>
            </motion.div>

            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.1 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">
                {files.filter(f => f.type === 'document').length}
              </div>
              <div className="text-zinc-400">Documents</div>
            </motion.div>

            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.2 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {files.filter(f => f.type === 'image').length}
              </div>
              <div className="text-zinc-400">Images</div>
            </motion.div>

            <motion.div
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ dela, y: 0.3 }}
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {formatFileSize(files.reduce((su, m, f) => sum + f.siz, e, 0))}
              </div>
              <div className="text-zinc-400">Total Size</div>
            </motion.div>
          </div>

          {/* Files List */}
          <div className="space-y-4">
            {files.map((fil,  e, index) => (<motion.div
                key={file.id}
                initial={{ opacit,  y: 0,
    y: 20 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                transition={{ dela, y: index * 0.1 }}
                className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hove, r:bg-zinc-900/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg text-zion-cyan">
                    {getFileTypeIcon(file.type)}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{file.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <span>Siz, e: {formatFileSize(file.size)}</span>
                      <span>Uploaded b,  y: {file.uploadedBy}</span>
                      <span>Versio, n: {file.version}</span>
                      <span>Modifie, d: {new Date(file.lastModified).toLocaleDateString()}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {file.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 text-zinc-400 hove,  r:text-zion-cyan hove, r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400 hove, r:text-zion-cyan hove, r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400 hove, r:text-white hove, r:bg-zinc-800/50 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upload Files */}
          <div className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center">
            <div className="border-2 border-dashed border-zinc-600 rounded-lg p-8">
              <FileText className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-zinc-300 mb-2">Upload Files</h3>
              <p className="text-zinc-400 mb-4">Drag and drop files here or click to browse</p>
              <button className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove, r:bg-zion-cyan/80 transition-colors">
                Choose Files
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};