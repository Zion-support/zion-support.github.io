import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {;
  Users,;
  MessageCircle,;
  FileText,;
  Calendar,;
  CheckCircle,;
  Clock,;
  AlertCircle,;
  Plus,;
  Search,;
  Filter,;
  Download,;
  Share2,;
  Edit,;
  Trash2,;
  Eye,;
  Star,;
  Award,;
  Zap,;
  Brain,;
  Cloud,;
  Shield,;
  Globe,;
  Database,;
  Server,;
  Lock,;
  Unlock,;
  Wifi,;
  Smartphone,;
  Monitor,;
  Tablet,;
  Video,;
  Phone,;
  Mail,;
  Send,;
  Paperclip,;
  Image,;
  File,;
  Folder,;
  Tag,;
  UserPlus,;
  Settings,;
  Bell,;
  Heart,;
  ThumbsUp,;
  ThumbsDown,;
  Reply,;
  Forward,;
  Archive,;
  Pin,;
  Bookmark,;
  Link,;
  Copy,;
  MoreHorizontal,;
  ChevronDown,;
  ChevronUp,;
  ArrowRight,;
  ArrowLeft,;
  RefreshCw,;
  TrendingUp,;
  Activity,;
  Target,;
  BarChart3,;
  PieChart;
} from "lucide-react"
interface TeamMember {;
  id: string,name: string,role: string,department: string,avatar: string,status: 'online' | 'away' | 'busy' | 'offline',lastSeen: string,skills: string[],projects: string[],availability: 'available' | 'busy' | 'unavailable'
};

interface Project {;
  id: string,name: string,description: string,status: 'planning' | 'active' | 'review' | 'completed' | 'on-hold',priority: 'low' | 'medium' | 'high' | 'critical',progress: number,startDate: string,endDate: string,teamMembers: string[],tasks: Task[],budget: number,client: string,tags: string[]
};

interface Task {;
  id: string,title: string,description: string,status: 'todo' | 'in-progress' | 'review' | 'completed',priority: 'low' | 'medium' | 'high' | 'critical',assignee: string,dueDate: string,estimatedHours: number,actualHours: number,dependencies: string[],tags: string[],comments: Comment[]
};

interface Comment {;
  id: string,author: string,content: string,timestamp: string,likes: number,replies: Comment[]
};

interface Message {;
  id: string,sender: string,content: string,timestamp: string,type: 'text' | 'file' | 'image' | 'link'
  attachments?: string[],;
  reactions: { type: string, count: number }[]
  isRead: boolean;
};

interface FileItem {;
  id: string,name: string,type: 'document' | 'image' | 'video' | 'audio' | 'archive' | 'other',size: number,uploadedBy: string,uploadDate: string,lastModified: string,tags: string[],sharedWith: string[],permissions: 'view' | 'edit' | 'admin',version: string;
};

interface TeamCollaborationToolsProps {;
  showTeamMembers?: boolean;
  showProjects?: boolean,;
  showCommunication?: boolean,;
  showFileSharing?: boolean,;
  maxItems?: number,;
};

export const TeamCollaborationTools: React.FC<TeamCollaborationToolsProps> = ({;
  showTeamMembers = true;
  showProjects = true,;
  showCommunication = true,;
  showFileSharing = true,;
  maxItems = 20;
}) => {;
  const [activeTab, setActiveTab] = useState<'team' | 'projects' | 'communication' | 'files'>('team'),;
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]),;
  const [projects, setProjects] = useState<Project[]>([]),;
  const [messages, setMessages] = useState<Message[]>([]),;
  const [files, setFiles] = useState<FileItem[]>([]),;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null),;
  const [showProjectForm, setShowProjectForm] = useState(false),;
  const [showTaskForm, setShowTaskForm] = useState(false),;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all'),;
  const [selectedStatus, setSelectedStatus] = useState<string>('all'),;

  //[^;]*
  useEffect(() => {;
    const sampleTeamMembers: TeamMember[] = [;
      {;
        id: '1',name: 'Sarah Johnson',role: 'Senior AI Engineer',department: 'Engineering',avatar: 'SJ',status: 'online',lastSeen: '2 minutes ago',skills: ['Machine LearningPython', 'TensorFlowAI/ML'],;
        projects: ['AI Platform DevelopmentML Model Optimization'],availability: 'available'
      };
      {;
        id: '2',name: 'Michael Chen',role: 'Cloud Architect',department: 'IT Operations',avatar: 'MC',status: 'busy',lastSeen: '15 minutes ago',skills: ['AWSAzure', 'KubernetesDevOps'],;
        projects: ['Cloud MigrationInfrastructure Modernization'],availability: 'busy'
      };
      {;
        id: '3',name: 'David Kim',role: 'Cybersecurity Specialist',department: 'Security',avatar: 'DK',status: 'online',lastSeen: '1 minute ago',skills: ['Penetration TestingThreat Detection', 'Incident Response'],;
        projects: ['Security AuditThreat Intelligence'],availability: 'available'
      };
      {;
        id: '4',name: 'Lisa Thompson',role: 'Project Manager',department: 'Management',avatar: 'LT',status: 'away',lastSeen: '1 hour ago',skills: ['AgileScrum', 'Risk ManagementStakeholder Communication'],;
        projects: ['Digital TransformationProcess Optimization'],availability: 'unavailable'
      };
      {;
        id: '5',name: 'Alex Wong',role: 'DevOps Engineer',department: 'Engineering',avatar: 'AW',status: 'online',lastSeen: '5 minutes ago',skills: ['DockerJenkins', 'TerraformMonitoring'],;
        projects: ['CI/CD PipelineInfrastructure as Code'],availability: 'available'
      };
    ];
    const sampleProjects: Project[] = [;
      {;
        id: '1',name: 'AI Platform Development',description: 'Building a comprehensive AI platform for enterprise clients with machine learning capabilities',status: 'active',priority: 'high',progress: 65,startDate: '2024-01-01',endDate: '2024-06-30',teamMembers: ['Sarah JohnsonAlex Wong'],tasks: [],budget: 500000,client: 'TechCorp Inc.',tags: ['AIMachine Learning', 'Platform']
      },;
      {;
        id: '2',name: 'Cloud Migration',description: 'Migrating legacy systems to cloud infrastructure with zero downtime',status: 'active',priority: 'critical',progress: 45,startDate: '2024-02-01',endDate: '2024-08-31',teamMembers: ['Michael ChenAlex Wong'],tasks: [],budget: 750000,client: 'Global Enterprises',tags: ['CloudMigration', 'Infrastructure']
      },;
      {;
        id: '3',name: 'Security Audit',description: 'Comprehensive security assessment and vulnerability remediation',status: 'review',priority: 'high',progress: 90,startDate: '2024-01-15',endDate: '2024-03-15',teamMembers: ['David Kim'],tasks: [],budget: 150000,client: 'SecureBank',tags: ['SecurityAudit', 'Compliance']
      };
    ],;

    const sampleMessages: Message[] = [;
      {;
        id: '1',sender: 'Sarah Johnson',content: 'Great progress on the AI model training! The accuracy has improved significantly.',timestamp: '2 minutes ago',type: 'text',reactions: [{ type: 'thumbsUp', count: 3 }]
        isRead: true;
      };
      {;
        id: '2',sender: 'Michael Chen',content: 'Cloud migration phase 1 completed successfully. Ready for phase 2 planning.',timestamp: '15 minutes ago',type: 'text',reactions: [{ type: 'check', count: 2 }]
        isRead: false;
      };
      {;
        id: '3',sender: 'David Kim',content: 'Security vulnerabilities identified and patched. Report ready for review.',timestamp: '1 hour ago',type: 'text',reactions: [{ type: 'star', count: 1 }]
        isRead: true;
      };
    ];
    const sampleFiles: FileItem[] = [;
      {;
        id: '1',name: 'AI_Platform_Architecture.pdf',type: 'document',size: 2.5,uploadedBy: 'Sarah Johnson',uploadDate: '2024-01-15',lastModified: '2024-01-15',tags: ['ArchitectureAI', 'Documentation'],;
        sharedWith: ['Michael ChenAlex Wong'],permissions: 'edit',version: '1.2'
      };
      {;
        id: '2',name: 'Cloud_Migration_Plan.xlsx',type: 'document',size: 1.8,uploadedBy: 'Michael Chen',uploadDate: '2024-01-14',lastModified: '2024-01-14',tags: ['MigrationCloud', 'Planning'],;
        sharedWith: ['Sarah JohnsonDavid Kim'],permissions: 'view',version: '2.1'
      };
      {;
        id: '3',name: 'Security_Audit_Report.docx',type: 'document',size: 3.2,uploadedBy: 'David Kim',uploadDate: '2024-01-13',lastModified: '2024-01-13',tags: ['SecurityAudit', 'Report'],;
        sharedWith: ['Lisa Thompson'],permissions: 'view',version: '1.0'
      };
    ];
    setTeamMembers(sampleTeamMembers),;
    setProjects(sampleProjects),;
    setMessages(sampleMessages),;
    setFiles(sampleFiles),;
  }, []),;

  //[^;]*
  const getStatusDisplay = (status: string) => {;
    switch (status) {;
      case 'online': return { color: 'text-green-400 bg-green-400/20', icon: <div className="w-2 h-2 bg-green-400 rounded-full"></div> };
      case 'away': return { color: 'text-yellow-400 bg-yellow-400/20', icon: <div className="w-2 h-2 bg-yellow-400 rounded-full"></div> };
      case 'busy': return { color: 'text-red-400 bg-red-400/20', icon: <div className="w-2 h-2 bg-red-400 rounded-full"></div> };
      case 'offline': return { color: 'text-zinc-400 bg-zinc-400/20', icon: <div className="w-2 h-2 bg-zinc-400 rounded-full"></div> };
      default: return { color: 'text-zinc-400 bg-zinc-400/20', icon: <div className="w-2 h-2 bg-zinc-400 rounded-full"></div> };
    };
  },;

  //[^;]*
  const getProjectStatusColor = (status: string) => {;
    switch (status) {;
      case 'planning': return 'text-blue-400 bg-blue-400/20'
      case 'active': return 'text-green-400 bg-green-400/20',;
      case 'review': return 'text-yellow-400 bg-yellow-400/20',;
      case 'completed': return 'text-purple-400 bg-purple-400/20',;
      case 'on-hold': return 'text-red-400 bg-red-400/20',;
      default: return 'text-zinc-400 bg-zinc-400/20'
    };
  };
  //[^;]*
  const getPriorityColor = (priority: string) => {;
    switch (priority) {;
      case 'low': return 'text-green-400 bg-green-400/20'
      case 'medium': return 'text-yellow-400 bg-yellow-400/20',;
      case 'high': return 'text-orange-400 bg-orange-400/20',;
      case 'critical': return 'text-red-400 bg-red-400/20',;
      default: return 'text-zinc-400 bg-zinc-400/20'
    };
  };
  //[^;]*
  const getFileTypeIcon = (type: string) => {;
    switch (type) {;
      case 'document': return <[^>]*/>
      case 'image': return <Image className="w-5 h-5" />,;
      case 'video': return <Video className="w-5 h-5" />,;
      case 'audio': return <File className="w-5 h-5" />,;
      case 'archive': return <Folder className="w-5 h-5" />,;
      default: return <[^>]*/>
    };
  };
  //[^;]*
  const formatFileSize = (size: number) => {;
    if (size < 1) return `${(size * 1024).toFixed(0)} KB`
    if (size < 1024) return `${size.toFixed(1)} MB`,;
    return `${(size / 1024).toFixed(1)} GB`,;
  },;

  //[^;]*
  const handleProjectSelect = (project: Project) => {;
    setSelectedProject(project)
  };
  //[^;]*
  const handleMessageReaction = (messageId: string, reactionType: string) => {;
    setMessages(prev => prev.map(msg => {;
      if (msg.id === messageId) {;
        const existingReaction = msg.reactions.find(r => r.type === reactionType)
        if (existingReaction) {;
          existingReaction.count += 1;
        } else {;
          msg.reactions.push({ type: reactionType, count: 1 })
        };
      };
      return msg,;
    })),;
  },;

  return (
    <div className="w-full max-w-7xl mx-auto p-6">;
      {/* Header */};
      <div className="text-center mb-8">;
        <h1 className="text-4xl font-bold text-white mb-4">Team Collaboration Tools</[^>]*>
        <p className="text-zinc-400 text-lg">Enhanced collaboration, communication, and project management for your team</[^>]*>
      </[^>]*>

      {/* Tab Navigation */};
      <div className="flex items-center justify-center mb-8">;
        <div className="flex items-center gap-1 p-1 bg-zinc-900/30 rounded-lg">;
          {[;
            { id: 'team', label: 'Team Members', icon: <Users className="w-4 h-4" /> };
            { id: 'projects', label: 'Projects', icon: <Target className="w-4 h-4" /> };
            { id: 'communication', label: 'Communication', icon: <MessageCircle className="w-4 h-4" /> };
            { id: 'files', label: 'File Sharing', icon: <FileText className="w-4 h-4" /> };
          ].map((tab) => (;
            <button;
              key={tab.id};
              onClick={() => setActiveTab(tab.id as any)};
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${;
                activeTab === tab.id
                  ? 'bg-zion-cyan text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`};
            >;
              {tab.icon};
              {tab.label};
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* Team Members Tab */};
      {activeTab === 'team' && showTeamMembers && (;&& showTeamMembers && (; showTeamMembers && (
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          className="[^"]*"
        >;
          {/* Team Stats */};
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-white mb-2">{teamMembers.length}</[^>]*>
              <div className="text-zinc-400">Total Members</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.1 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-green-400 mb-2">;
                {teamMembers.filter(m => m.status === 'online').length};
              </[^>]*>
              <div className="text-zinc-400">Online Now</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.2 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-blue-400 mb-2">;
                {teamMembers.filter(m => m.availability === 'available').length};
              </[^>]*>
              <div className="text-zinc-400">Available</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.3 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-zion-cyan mb-2">;
                {Array.from(new Set(teamMembers.map(m => m.department))).length};
              </[^>]*>
              <div className="text-zinc-400">Departments</[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Team Members Grid */};
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {teamMembers.map((member, index) => (;
              <motion.div
                key={member.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ delay: index * 0.1 }};
                className="[^"]*"
              >;
                {/* Member Header */};
                <div className="flex items-center gap-4 mb-4">;
                  <div className="relative">;
                    <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-zion-cyan font-semibold text-lg">;
                      {member.avatar};
                    </[^>]*>
                    <div className="absolute -bottom-1 -right-1">;
                      {getStatusDisplay(member.status).icon};
                    </[^>]*>
                  </[^>]*>
                  <div className="flex-1">;
                    <h3 className="text-lg font-semibold text-white">{member.name}</[^>]*>
                    <p className="text-zinc-400 text-sm">{member.role}</[^>]*>
                    <p className="text-zinc-500 text-xs">{member.department}</[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Status and Availability */};
                <div className="flex items-center gap-2 mb-4">;
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusDisplay(member.status).color}`}>;
                    {member.status.charAt(0).toUpperCase() + member.status.slice(1)};
                  </[^>]*>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${;
                    member.availability === 'available' ? 'text-green-400 bg-green-400/20' :;
                    member.availability === 'busy' ? 'text-yellow-400 bg-yellow-400/20' :;
                    'text-red-400 bg-red-400/20'
                  }`}>;
                    {member.availability.charAt(0).toUpperCase() + member.availability.slice(1)};
                  </[^>]*>
                </[^>]*>

                {/* Skills */};
                <div className="mb-4">;
                  <h4 className="text-sm font-medium text-zinc-300 mb-2">Skills</[^>]*>
                  <div className="flex flex-wrap gap-2">;
                    {member.skills.slice(0, 3).map((skill) => (;
                      <span;
                        key={skill};
                        className="[^"]*"
                      >;
                        {skill};
                      </[^>]*>
                    ))};
                    {member.skills.length > 3 && (;&& (; (
                      <span className="px-2 py-1 bg-zinc-800/50 text-zinc-400 text-xs rounded-full">;
                        +{member.skills.length - 3} more;
                      </[^>]*>
                    )};
                  </[^>]*>
                </[^>]*>

                {/* Projects */};
                <div className="mb-4">;
                  <h4 className="text-sm font-medium text-zinc-300 mb-2">Active Projects</[^>]*>
                  <div className="space-y-1">;
                    {member.projects.slice(0, 2).map((project) => (;
                      <div key={project} className="text-xs text-zinc-400">;
                        • {project};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                {/* Actions */};
                <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">;
                  <div className="text-xs text-zinc-500">;
                    Last seen: {member.lastSeen};
                  </[^>]*>
                  <div className="flex items-center gap-2">;
                    <button className="p-2 text-zinc-400 hover:text-zion-cyan hover:bg-zion-cyan/20 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="p-2 text-zinc-400 hover:text-zion-cyan hover:bg-zion-cyan/20 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="p-2 text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      )};

      {/* Projects Tab */};
      {activeTab === 'projects' && showProjects && (;&& showProjects && (; showProjects && (
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          className="[^"]*"
        >;
          {/* Project Stats */};
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-white mb-2">{projects.length}</[^>]*>
              <div className="text-zinc-400">Total Projects</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.1 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-green-400 mb-2">;
                {projects.filter(p => p.status === 'active').length};
              </[^>]*>
              <div className="text-zinc-400">Active</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.2 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-blue-400 mb-2">;
                {projects.filter(p => p.status === 'completed').length};
              </[^>]*>
              <div className="text-zinc-400">Completed</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.3 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-zion-cyan mb-2">;
                ${(projects.reduce((sum, p) => sum + p.budget, 0) / 1000000).toFixed(1)}M;
              </[^>]*>
              <div className="text-zinc-400">Total Budget</[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Projects List */};
          <div className="space-y-6">;
            {projects.map((project, index) => (;
              <motion.div
                key={project.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ delay: index * 0.1 }};
                className="[^"]*"
                onClick={() => handleProjectSelect(project)};
              >;
                {/* Project Header */};
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex-1">;
                    <h3 className="text-xl font-semibold text-white mb-2">{project.name}</[^>]*>
                    <p className="text-zinc-400 mb-3">{project.description}</[^>]*>

                    <div className="flex flex-wrap items-center gap-3">;
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(project.status)}`}>;
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)};
                      </[^>]*>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>;
                        {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)};
                      </[^>]*>
                      <span className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full">;
                        {project.client};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div className="flex items-center gap-2 ml-4">;
                    <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-400/20 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Progress Bar */};
                <div className="mb-4">;
                  <div className="flex items-center justify-between mb-2">;
                    <span className="text-sm text-zinc-300">Progress</[^>]*>
                    <span className="text-sm font-medium text-zion-cyan">{project.progress}%</[^>]*>
                  </[^>]*>
                  <div className="w-full bg-zinc-700 rounded-full h-2">;
                    <motion.div
                      initial={{ width: 0 }};
                      animate={{ width: `${project.progress}%` }};
                      transition={{ duration: 1, delay: index * 0.1 }};
                      className="[^"]*"
                    />;
                  </[^>]*>
                </[^>]*>

                {/* Project Details */};
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">;
                  <div className="p-3 bg-zinc-800/30 rounded-lg">;
                    <div className="text-sm text-zinc-400 mb-1">Timeline</[^>]*>
                    <div className="text-white font-medium text-sm">;
                      {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()};
                    </[^>]*>
                  </[^>]*>

                  <div className="p-3 bg-zinc-800/30 rounded-lg">;
                    <div className="text-sm text-zinc-400 mb-1">Budget</[^>]*>
                    <div className="text-white font-medium">${project.budget.toLocaleString()}</[^>]*>
                  </[^>]*>

                  <div className="p-3 bg-zinc-800/30 rounded-lg">;
                    <div className="text-sm text-zinc-400 mb-1">Team Size</[^>]*>
                    <div className="text-white font-medium">{project.teamMembers.length} members</[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Tags */};
                <div className="flex flex-wrap gap-2">;
                  {project.tags.map((tag) => (;
                    <span;
                      key={tag};
                      className="[^"]*"
                    >;
                      {tag};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          {/* Add Project Button */};
          <div className="text-center">;
            <button;
              onClick={() => setShowProjectForm(true)};
              className="[^"]*"
            >;
              <[^>]*/>
              Add New Project;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};

      {/* Communication Tab */};
      {activeTab === 'communication' && showCommunication && (;&& showCommunication && (; showCommunication && (
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          className="[^"]*"
        >;
          {/* Communication Stats */};
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-white mb-2">{messages.length}</[^>]*>
              <div className="text-zinc-400">Total Messages</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.1 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-green-400 mb-2">;
                {messages.filter(m => m.isRead).length};
              </[^>]*>
              <div className="text-zinc-400">Read</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.2 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-blue-400 mb-2">;
                {messages.filter(m => !m.isRead).length};
              </[^>]*>
              <div className="text-zinc-400">Unread</[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Messages */};
          <div className="space-y-4">;
            {messages.map((message, index) => (;
              <motion.div
                key={message.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ delay: index * 0.1 }};
                className={`p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hover:bg-zinc-900/50 transition-all duration-300 ${;
                  !message.isRead ? 'border-zion-cyan/50 bg-zion-cyan/5' : ''
                }`};
              >;
                <div className="flex items-start gap-4">;
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zion-cyan font-semibold">;
                    {message.sender.split(' ').map(n => n[0]).join('')};
                  </[^>]*>

                  <div className="flex-1">;
                    <div className="flex items-center gap-3 mb-2">;
                      <h4 className="font-semibold text-white">{message.sender}</[^>]*>
                      <span className="text-xs text-zinc-500">{message.timestamp}</[^>]*>
                      {!message.isRead && (;&& (; (
                        <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                          New;
                        </[^>]*>
                      )};
                    </[^>]*>

                    <p className="text-zinc-300 mb-3">{message.content}</[^>]*>

                    {/* Reactions */};
                    <div className="flex items-center gap-2">;
                      {message.reactions.map((reaction, idx) => (;
                        <button;
                          key={idx};
                          onClick={() => handleMessageReaction(message.id, reaction.type)};
                          className="[^"]*"
                        >;
                          {reaction.type === 'thumbsUp' && <ThumbsUp className="w-3 h-3 inline mr-1" />};&& <ThumbsUp className="w-3 h-3 inline mr-1" />}; <ThumbsUp className="w-3 h-3 inline mr-1" />}
                          {reaction.type === 'check' && <CheckCircle className="w-3 h-3 inline mr-1" />};&& <CheckCircle className="w-3 h-3 inline mr-1" />}; <CheckCircle className="w-3 h-3 inline mr-1" />}
                          {reaction.type === 'star' && <Star className="w-3 h-3 inline mr-1" />};&& <Star className="w-3 h-3 inline mr-1" />}; <Star className="w-3 h-3 inline mr-1" />}
                          {reaction.count};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>

                  <div className="flex items-center gap-2">;
                    <button className="p-2 text-zinc-400 hover:text-zion-cyan hover:bg-zion-cyan/20 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="p-2 text-zinc-400 hover:text-zion-cyan hover:bg-zion-cyan/20 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="p-2 text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          {/* New Message Input */};
          <div className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl">;
            <div className="flex items-center gap-3">;
              <div className="flex-1">;
                <input;
                  type="text"
                  placeholder="Type your message..."
                  className="[^"]*"
                />;
              </[^>]*>

              <button className="p-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">;
                <[^>]*/>
              </[^>]*>

              <button className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors flex items-center gap-2">;
                <[^>]*/>
                Send;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};

      {/* File Sharing Tab */};
      {activeTab === 'files' && showFileSharing && (;&& showFileSharing && (; showFileSharing && (
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          className="[^"]*"
        >;
          {/* File Stats */};
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-white mb-2">{files.length}</[^>]*>
              <div className="text-zinc-400">Total Files</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.1 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-green-400 mb-2">;
                {files.filter(f => f.type === 'document').length};
              </[^>]*>
              <div className="text-zinc-400">Documents</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.2 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-blue-400 mb-2">;
                {files.filter(f => f.type === 'image').length};
              </[^>]*>
              <div className="text-zinc-400">Images</[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.3 }};
              className="[^"]*"
            >;
              <div className="text-3xl font-bold text-zion-cyan mb-2">;
                {formatFileSize(files.reduce((sum, f) => sum + f.size, 0))};
              </[^>]*>
              <div className="text-zinc-400">Total Size</[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Files List */};
          <div className="space-y-4">;
            {files.map((file, index) => (;
              <motion.div
                key={file.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center gap-4">;
                  <div className="p-3 bg-zinc-800/50 rounded-lg text-zion-cyan">;
                    {getFileTypeIcon(file.type)};
                  </[^>]*>

                  <div className="flex-1">;
                    <h4 className="font-semibold text-white mb-1">{file.name}</[^>]*>
                    <div className="flex items-center gap-4 text-sm text-zinc-400">;
                      <span>Size: {formatFileSize(file.size)}</[^>]*>
                      <span>Uploaded by: {file.uploadedBy}</[^>]*>
                      <span>Version: {file.version}</[^>]*>
                      <span>Modified: {new Date(file.lastModified).toLocaleDateString()}</[^>]*>
                    </[^>]*>

                    {/* Tags */};
                    <div className="flex flex-wrap gap-2 mt-2">;
                      {file.tags.map((tag) => (;
                        <span;
                          key={tag};
                          className="[^"]*"
                        >;
                          {tag};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>

                  <div className="flex items-center gap-2">;
                    <button className="p-2 text-zinc-400 hover:text-zion-cyan hover:bg-zion-cyan/20 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="p-2 text-zinc-400 hover:text-zion-cyan hover:bg-zion-cyan/20 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          {/* Upload Files */};
          <div className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center">;
            <div className="border-2 border-dashed border-zinc-600 rounded-lg p-8">;
              <[^>]*/>
              <h3 className="text-lg font-medium text-zinc-300 mb-2">Upload Files</[^>]*>
              <p className="text-zinc-400 mb-4">Drag and drop files here or click to browse</[^>]*>
              <button className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">;
                Choose Files;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};
    </[^>]*>
  );
};