import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Users,
  MessageCircle,
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Download,
  Share2,
  Edit,
  Trash2,
  Eye,
  Star,
  Award,
  Zap,
  Brain,
  Cloud,
  Shield,
  Globe,
  Database,
  Server,
  Lock,
  Unlock,
  Wifi,
  Smartphone,
  Monitor,
  Tablet,
  Video,
  Phone,
  Mail,
  Send,
  Paperclip,
  Image,
  File,
  Folder,
  Tag,
  UserPlus,
  Settings,
  Bell,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Reply,
  Forward,
  Archive,
  Pin,
  Bookmark,
  Link,
  Copy,
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  TrendingUp,
  Activity,
  Target,
  BarChart3,
  PieChart
} from "lucide-react"
interface TeamMember {
  id: string,na,
  m: e: string,ro,
  l: e: string,departme,
  n: t: string,avat,
  a: r: string,stat,
  u: s: 'online' | 'away' | 'busy' | 'offline',lastSe,
  e: n: string,skil,
  l: s: string[],projec,
  t: s: string[],availabili,
  t: y: 'available' | 'busy' | 'unavailable'
}

interface Project {
  id: string,na,
  m: e: string,descripti,
  o: n: string,stat,
  u: s: 'planning' | 'active' | 'review' | 'completed' | 'on-hold',priori,
  t: y: 'low' | 'medium' | 'high' | 'critical',progre,
  s: s: number,startDa,
  t: e: string,endDa,
  t: e: string,teamMembe,
  r: s: string[],tas,
  k: s: Task[],budg,
  e: t: number,clie,
  n: t: string,ta,
  g: s: string[]
}

interface Task {
  id: string,tit,
  l: e: string,descripti,
  o: n: string,stat,
  u: s: 'todo' | 'in-progress' | 'review' | 'completed',priori,
  t: y: 'low' | 'medium' | 'high' | 'critical',assign,
  e: e: string,dueDa,
  t: e: string,estimatedHou,
  r: s: number,actualHou,
  r: s: number,dependenci,
  e: s: string[],ta,
  g: s: string[],commen,
  t: s: Comment[]
}

interface Comment {
  id: string,auth,
  o: r: string,conte,
  n: t: string,timesta,
  m: p: string,lik,
  e: s: number,repli,
  e: s: Comment[]
}

interface Message {
  id: string,send,
  e: r: string,conte,
  n: t: string,timesta,
  m: p: string,ty,
  p: e: 'text' | 'file' | 'image' | 'link'
  attachments?: string[],
  reactio,
  n: s: { typ,
  e: string, cou,
  n: t: number }[]
  isRe,
  a: d: boolean
}

interface FileItem {
  id: string,na,
  m: e: string,ty,
  p: e: 'document' | 'image' | 'video' | 'audio' | 'archive' | 'other',si,
  z: e: number,uploaded,
  B: y: string,uploadDa,
  t: e: string,lastModifi,
  e: d: string,ta,
  g: s: string[],sharedWi,
  t: h: string[],permissio,
  n: s: 'view' | 'edit' | 'admin',versi,
  o: n: string
}

interface TeamCollaborationToolsProps {
  showTeamMembers?: boolean
  showProjects?: boolean,
  showCommunication?: boolean,
  showFileSharing?: boolean,
  maxItems?: number,
}

export,
  const: TeamCollaborationTools: React.FC<TeamCollaborationToolsProps> = ({
  showTeamMembers = true
  showProjects = true,
  showCommunication = true,
  showFileSharing = true,
  maxItems = 20
}) () => {
  const [activeTab, setActiveTab] = useState<'team' | 'projects' | 'communication' | 'files'>('team'),
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]),
  const [projects, setProjects] = useState<Project[]>([]),
  const [messages, setMessages] = useState<Message[]>([]),
  const [files, setFiles] = useState<FileItem[]>([]),
  const [selectedProject, setSelectedProject] = useState<Project | null>(null),
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all'),
  const [selectedStatus, setSelectedStatus] = useState<string>('all'),

  // Sample data
  useEffect(() () => {
    const,
  sampleTeamMember: s: TeamMember[] = [
      {
        i,
  d: '1',na,
  m: e: 'Sarah Johnson',ro,
  l: e: 'Senior AI Engineer',departme,
  n: t: 'Engineering',avat,
  a: r: 'SJ',stat,
  u: s: 'online',lastSe,
  e: n: '2 minutes ago',skil,
  l: s: ['Machine LearningPython', 'TensorFlowAI/ML'],
        projec,
  t: s: ['AI Platform DevelopmentML Model Optimization'],availabili,
  t: y: 'available'
      }, {
        id: '2',na,
  m: e: 'Michael Chen',ro,
  l: e: 'Cloud Architect',departme,
  n: t: 'IT Operations',avat,
  a: r: 'MC',stat,
  u: s: 'busy',lastSe,
  e: n: '15 minutes ago',skil,
  l: s: ['AWSAzure', 'KubernetesDevOps'],
        projec,
  t: s: ['Cloud MigrationInfrastructure Modernization'],availabili,
  t: y: 'busy'
      }, {
        id: '3',na,
  m: e: 'David Kim',ro,
  l: e: 'Cybersecurity Specialist',departme,
  n: t: 'Security',avat,
  a: r: 'DK',stat,
  u: s: 'online',lastSe,
  e: n: '1 minute ago',skil,
  l: s: ['Penetration TestingThreat Detection', 'Incident Response'],
        projec,
  t: s: ['Security AuditThreat Intelligence'],availabili,
  t: y: 'available'
      }, {
        id: '4',na,
  m: e: 'Lisa Thompson',ro,
  l: e: 'Project Manager',departme,
  n: t: 'Management',avat,
  a: r: 'LT',stat,
  u: s: 'away',lastSe,
  e: n: '1 hour ago',skil,
  l: s: ['AgileScrum', 'Risk ManagementStakeholder Communication'],
        projec,
  t: s: ['Digital TransformationProcess Optimization'],availabili,
  t: y: 'unavailable'
      }, {
        id: '5',na,
  m: e: 'Alex Wong',ro,
  l: e: 'DevOps Engineer',departme,
  n: t: 'Engineering',avat,
  a: r: 'AW',stat,
  u: s: 'online',lastSe,
  e: n: '5 minutes ago',skil,
  l: s: ['DockerJenkins', 'TerraformMonitoring'],
        projec,
  t: s: ['CI/CD PipelineInfrastructure as Code'],availabili,
  t: y: 'available'
      }
    ]
    const,
  sampleProject: s: Project[] = [
      {
        i,
  d: '1',na,
  m: e: 'AI Platform Development',descripti,
  o: n: 'Building a comprehensive AI platform for enterprise clients with machine learning capabilities',stat,
  u: s: 'active',priori,
  t: y: 'high',progre,
  s: s: 65,startDa,
  t: e: '2024-01-01',endDa,
  t: e: '2024-06-30',teamMembe,
  r: s: ['Sarah JohnsonAlex Wong'],tas,
  k: s: [],budg,
  e: t: 500000,clie,
  n: t: 'TechCorp Inc.',ta,
  g: s: ['AIMachine Learning', 'Platform']
      },
      {
        id: '2',na,
  m: e: 'Cloud Migration',descripti,
  o: n: 'Migrating legacy systems to cloud infrastructure with zero downtime',stat,
  u: s: 'active',priori,
  t: y: 'critical',progre,
  s: s: 45,startDa,
  t: e: '2024-02-01',endDa,
  t: e: '2024-08-31',teamMembe,
  r: s: ['Michael ChenAlex Wong'],tas,
  k: s: [],budg,
  e: t: 750000,clie,
  n: t: 'Global Enterprises',ta,
  g: s: ['CloudMigration', 'Infrastructure']
      },
      {
        id: '3',na,
  m: e: 'Security Audit',descripti,
  o: n: 'Comprehensive security assessment and vulnerability remediation',stat,
  u: s: 'review',priori,
  t: y: 'high',progre,
  s: s: 90,startDa,
  t: e: '2024-01-15',endDa,
  t: e: '2024-03-15',teamMembe,
  r: s: ['David Kim'],tas,
  k: s: [],budg,
  e: t: 150000,clie,
  n: t: 'SecureBank',ta,
  g: s: ['SecurityAudit', 'Compliance']
      }
    ],

    const,
  sampleMessage: s: Message[] = [
      {
        i,
  d: '1',send,
  e: r: 'Sarah Johnson',conte,
  n: t: 'Great progress on the AI model training! The accuracy has improved significantly.',timesta,
  m: p: '2 minutes ago',ty,
  p: e: 'text',reactio,
  n: s: [{ typ,
  e: 'thumbsUp', cou,
  n: t: 3 }]
        isRe,
  a: d: true
      }, {
        id: '2',send,
  e: r: 'Michael Chen',conte,
  n: t: 'Cloud migration phase 1 completed successfully. Ready for phase 2 planning.',timesta,
  m: p: '15 minutes ago',ty,
  p: e: 'text',reactio,
  n: s: [{ typ,
  e: 'check', cou,
  n: t: 2 }]
        isRe,
  a: d: false
      }, {
        id: '3',send,
  e: r: 'David Kim',conte,
  n: t: 'Security vulnerabilities identified and patched. Report ready for review.',timesta,
  m: p: '1 hour ago',ty,
  p: e: 'text',reactio,
  n: s: [{ typ,
  e: 'star', cou,
  n: t: 1 }]
        isRe,
  a: d: true
      }
    ]
    const,
  sampleFile: s: FileItem[] = [
      {
        i,
  d: '1',na,
  m: e: 'AI_Platform_Architecture.pdf',ty,
  p: e: 'document',si,
  z: e: 2.5,uploaded,
  B: y: 'Sarah Johnson',uploadDa,
  t: e: '2024-01-15',lastModifi,
  e: d: '2024-01-15',ta,
  g: s: ['ArchitectureAI', 'Documentation'],
        sharedWi,
  t: h: ['Michael ChenAlex Wong'],permissio,
  n: s: 'edit',versi,
  o: n: '1.2'
      }, {
        id: '2',na,
  m: e: 'Cloud_Migration_Plan.xlsx',ty,
  p: e: 'document',si,
  z: e: 1.8,uploaded,
  B: y: 'Michael Chen',uploadDa,
  t: e: '2024-01-14',lastModifi,
  e: d: '2024-01-14',ta,
  g: s: ['MigrationCloud', 'Planning'],
        sharedWi,
  t: h: ['Sarah JohnsonDavid Kim'],permissio,
  n: s: 'view',versi,
  o: n: '2.1'
      }, {
        id: '3',na,
  m: e: 'Security_Audit_Report.docx',ty,
  p: e: 'document',si,
  z: e: 3.2,uploaded,
  B: y: 'David Kim',uploadDa,
  t: e: '2024-01-13',lastModifi,
  e: d: '2024-01-13',ta,
  g: s: ['SecurityAudit', 'Report'],
        sharedWi,
  t: h: ['Lisa Thompson'],permissio,
  n: s: 'view',versi,
  o: n: '1.0'
      }
    ]
    setTeamMembers(sampleTeamMembers)
    setProjects(sampleProjects)
    setMessages(sampleMessages)
    setFiles(sampleFiles)
  }, []),

  // Get status color and icon
  const getStatusDisplay = (stat,
  u: s: string) () => {
    switch (status) {
      case 'online': return { colo,
  r: 'text-green-400 bg-green-400/20', ic,
  o: n: <div className="w-2 h-2 bg-green-400 rounded-full"></div> }
      case 'away': return { col,
  o: r: 'text-yellow-400 bg-yellow-400/20', ic,
  o: n: <div className="w-2 h-2 bg-yellow-400 rounded-full"></div> }
      case 'busy': return { col,
  o: r: 'text-red-400 bg-red-400/20', ic,
  o: n: <div className="w-2 h-2 bg-red-400 rounded-full"></div> }
      case 'offline': return { col,
  o: r: 'text-zinc-400 bg-zinc-400/20', ic,
  o: n: <div className="w-2 h-2 bg-zinc-400 rounded-full"></div> }
      defau,
  l: t: return { colo,
  r: 'text-zinc-400 bg-zinc-400/20', ic,
  o: n: <div className="w-2 h-2 bg-zinc-400 rounded-full"></div> }
    }
  },

  // Get project status color
  const getProjectStatusColor = (stat,
  u: s: string) () => {
    switch (status) {
      case 'planning': return 'text-blue-400 bg-blue-400/20'
      case 'active': return 'text-green-400 bg-green-400/20'
      case 'review': return 'text-yellow-400 bg-yellow-400/20'
      case 'completed': return 'text-purple-400 bg-purple-400/20'
      case 'on-hold': return 'text-red-400 bg-red-400/20'
      defaul,
  t: return 'text-zinc-400 bg-zinc-400/20'
    }
  }
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
  // Get file type icon
  const getFileTypeIcon = (ty,
  p: e: string) () => {
    switch (type) {
      case 'document': return <FileText className="w-5 h-5" />
      case 'image': return <Image className="w-5 h-5" />
      case 'video': return <Video className="w-5 h-5" />
      case 'audio': return <File className="w-5 h-5" />
      case 'archive': return <Folder className="w-5 h-5" />
      defaul,
  t: return <File className="w-5 h-5" />
    }
  }
  // Format file size
  const formatFileSize = (si,
  z: e: number) () => {
    if (size < 1) return `${(size * 1024).toFixed(0)} KB`
    if (size < 1024) return `${size.toFixed(1)} MB`
    return `${(size / 1024).toFixed(1)} GB`
  },

  // Handle project selection
  const handleProjectSelect = (proje,
  c: t: Project) () => {
    setSelectedProject(project)
  }
  // Handle message reactions
  const handleMessageReaction = (message,
  I: d: string, reactionTy,
  p: e: string) () => {
    setMessages(prev => prev.map(msg () () => {
      if (msg.id === messageId) {
        const existingReaction = msg.reactions.find(r => r.type === reactionType)
        if (existingReaction) {
          existingReaction.count += 1
        } else {
          msg.reactions.push({ ty,
  p: e: reactionType, cou,
  n: t: 1 })
        }
      }
      return msg
    })),
  },

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Team Collaboration Tools</h1>
        <p className="text-zinc-400 text-lg">Enhanced collaboration, communication, and project management for your team</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-1 p-1 bg-zinc-900/30 rounded-lg">
          {[
            { id: 'team', lab,
  e: l: 'Team Members', ic,
  o: n: <Users className="w-4 h-4" /> }, { id: 'projects', lab,
  e: l: 'Projects', ic,
  o: n: <Target className="w-4 h-4" /> }, { id: 'communication', lab,
  e: l: 'Communication', ic,
  o: n: <MessageCircle className="w-4 h-4" /> }, { id: 'files', lab,
  e: l: 'File Sharing', ic,
  o: n: <FileText className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-zion-cyan text-white'
                  : 'text-zinc-400,
  hove: r: text-white hove,
  r:bg-zinc-800/50'
              }`}
            >
              {tab.icon}, {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Team Members Tab */}, {activeTab === 'team' && showTeamMembers && (
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          className="space-y-6"
        >
          {/* Team Stats */}
          <div className="grid grid-cols-1,
  m: d: grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={ opacit,
  y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{teamMembers.length}</div>
              <div className="text-zinc-400">Total Members</div>
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
              <div className="text-3xl font-bold text-green-400 mb-2">
                {teamMembers.filter(m => m.status === 'online').length}
              </div>
              <div className="text-zinc-400">Online Now</div>
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
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {teamMembers.filter(m => m.availability === 'available').length}
              </div>
              <div className="text-zinc-400">Available</div>
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
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {Array.from(new Set(teamMembers.map(m => m.department))).length}
              </div>
              <div className="text-zinc-400">Departments</div>
            </motion.div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ del,
  a: y: index * 0.1 }
                className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl,
  hove: r:bg-zinc-900/50 transition-all duration-300"
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
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusDisplay(member.status).color}`}>
                    {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    member.availability === 'available' ? 'text-green-400 bg-green-400/20' :
                    member.availability === 'busy' ? 'text-yellow-400 bg-yellow-400/20' :
                    'text-red-400 bg-red-400/20'
                  }`}>
                    {member.availability.charAt(0).toUpperCase() + member.availability.slice(1)}
                  </span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-zinc-300 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}, {member.skills.length > 3 && (
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
                    {member.projects.slice(0, 2).map((project) => (
                      <div key={project} className="text-xs text-zinc-400">
                        • {project}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
                  <div className="text-xs text-zinc-500">
                    Last,
  see: n: {member.lastSeen}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-zinc-400,
  hove: r: text-zion-cyan,
  hove: r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400,
  hove: r:text-zion-cyan,
  hove: r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <Video className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400,
  hove: r:text-zinc-300 hove,
  r:bg-zinc-800/50 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}, {/* Projects Tab */}, {activeTab === 'projects' && showProjects && (
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          className="space-y-6"
        >
          {/* Project Stats */}
          <div className="grid grid-cols-1,
  m: d: grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={ opacit,
  y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{projects.length}</div>
              <div className="text-zinc-400">Total Projects</div>
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
              <div className="text-3xl font-bold text-green-400 mb-2">
                {projects.filter(p => p.status === 'active').length}
              </div>
              <div className="text-zinc-400">Active</div>
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
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {projects.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-zinc-400">Completed</div>
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
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                ${(projects.reduce((sum, p) => sum + p.budget, 0) / 1000000).toFixed(1)}M
              </div>
              <div className="text-zinc-400">Total Budget</div>
            </motion.div>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ del,
  a: y: index * 0.1 }
                className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl,
  hove: r:bg-zinc-900/50 transition-all duration-300 cursor-pointer"
                onClick={() => handleProjectSelect(project)}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                    <p className="text-zinc-400 mb-3">{project.description}</p>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(project.status)}`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                        {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
                      </span>
                      <span className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full">
                        {project.client}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <button className="p-2 text-zinc-400,
  hove: r: text-white,
  hove: r:bg-zinc-800/50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400,
  hove: r:text-white,
  hove: r:bg-zinc-800/50 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400,
  hove: r:text-red-400 hove,
  r:bg-red-400/20 rounded-lg transition-colors">
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
                      initial={ wid,
  t: h: 0 }
                      animate={ wid,
  t: h: `${project.progress}%` }
                      transition={ durati,
  o: n: 1, del,
  a: y: index * 0.1 }
                      className="h-2 bg-zion-cyan rounded-full"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-4 mb-4">
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
              className="px-8 py-3 bg-zion-cyan text-white rounded-lg,
  hove: r:bg-zion-cyan/80 transition-colors flex items-center gap-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              Add New Project
            </button>
          </div>
        </motion.div>
      )}, {/* Communication Tab */}, {activeTab === 'communication' && showCommunication && (
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          className="space-y-6"
        >
          {/* Communication Stats */}
          <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={ opacit,
  y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{messages.length}</div>
              <div className="text-zinc-400">Total Messages</div>
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
              <div className="text-3xl font-bold text-green-400 mb-2">
                {messages.filter(m => m.isRead).length}
              </div>
              <div className="text-zinc-400">Read</div>
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
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {messages.filter(m => !m.isRead).length}
              </div>
              <div className="text-zinc-400">Unread</div>
            </motion.div>
          </div>

          {/* Messages */}
          <div className="space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ del,
  a: y: index * 0.1 }
                className={`p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl,
  hove: r:bg-zinc-900/50 transition-all duration-300 ${
                  !message.isRead ? 'border-zion-cyan/50 bg-zion-cyan/5' : ''
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
                      {message.reactions.map((reaction, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleMessageReaction(message.id, reaction.type)}
                          className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full,
  hove: r:bg-zinc-700/50 transition-colors"
                        >
                          {reaction.type === 'thumbsUp' && <ThumbsUp className="w-3 h-3 inline mr-1" />}, {reaction.type === 'check' && <CheckCircle className="w-3 h-3 inline mr-1" />}, {reaction.type === 'star' && <Star className="w-3 h-3 inline mr-1" />}, {reaction.count}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 text-zinc-400,
  hove: r: text-zion-cyan,
  hove: r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <Reply className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400,
  hove: r:text-zion-cyan,
  hove: r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400,
  hove: r:text-zinc-300 hove,
  r:bg-zinc-800/50 rounded-lg transition-colors">
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
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan,
  focu: s:border-transparent"
                />
              </div>

              <button className="p-3 bg-zion-cyan text-white rounded-lg,
  hove: r:bg-zion-cyan/80 transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>

              <button className="px-6 py-3 bg-zion-cyan text-white rounded-lg hove,
  r:bg-zion-cyan/80 transition-colors flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
          </div>
        </motion.div>
      )}, {/* File Sharing Tab */}, {activeTab === 'files' && showFileSharing && (
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          className="space-y-6"
        >
          {/* File Stats */}
          <div className="grid grid-cols-1,
  m: d: grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={ opacit,
  y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{files.length}</div>
              <div className="text-zinc-400">Total Files</div>
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
              <div className="text-3xl font-bold text-green-400 mb-2">
                {files.filter(f => f.type === 'document').length}
              </div>
              <div className="text-zinc-400">Documents</div>
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
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {files.filter(f => f.type === 'image').length}
              </div>
              <div className="text-zinc-400">Images</div>
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
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {formatFileSize(files.reduce((sum, f) => sum + f.size, 0))}
              </div>
              <div className="text-zinc-400">Total Size</div>
            </motion.div>
          </div>

          {/* Files List */}
          <div className="space-y-4">
            {files.map((file, index) => (
              <motion.div
                key={file.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ del,
  a: y: index * 0.1 }
                className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl,
  hove: r:bg-zinc-900/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-800/50 rounded-lg text-zion-cyan">
                    {getFileTypeIcon(file.type)}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{file.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <span>Si,
  z: e: {formatFileSize(file.size)}</span>
                      <span>Uploaded,
  b: y: {file.uploadedBy}</span>
                      <span>Versi,
  o: n: {file.version}</span>
                      <span>Modifi,
  e: d: {new Date(file.lastModified).toLocaleDateString()}</span>
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
                    <button className="p-2 text-zinc-400,
  hove: r: text-zion-cyan,
  hove: r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400,
  hove: r:text-zion-cyan,
  hove: r:bg-zion-cyan/20 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-zinc-400,
  hove: r:text-white hove,
  r:bg-zinc-800/50 rounded-lg transition-colors">
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
              <button className="px-6 py-2 bg-zion-cyan text-white rounded-lg,
  hove: r:bg-zion-cyan/80 transition-colors">
                Choose Files
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}