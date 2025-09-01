import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  CheckCircle,
  Circle,
  AlertCircle,
  Play,
  Pause,
  StopCircle,
  Users,
  Target,
  TrendingUp,
  FileText,
  MessageSquare,
  Link,
  Download,
  Share2,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Settings
 } from 'lucide-react';

interface Project {

  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: string;
  endDate: string;
  progress: number;
  team: string[];
  client: string;
  budget: number;
  tags: string[];
  milestones: Milestone[]}

interface Milestone {

  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  assignee: string;
  priority: 'low' | 'medium' | 'high'}

interface ProjectManagementTimelineProps extends React.PropsWithChildren<{}> {

  showFilters?: boolean;
  showStats?: boolean;
  maxProjects?: number}

export const ProjectManagementTimeline: React.FC<ProjectManagementTimelineProps> = ({
  showFilters = true,;
  showStats = true,;
  maxProjects = 10;
}) => {;
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<any>('timeline');
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);

  // Sample project data
  useEffect(() => {
    const sampleProjects: Project[] = [
      {
        id: '1',
        name: 'AI-Powered Customer Analytics Platform',
        description: 'Develop a comprehensive customer analytics platform using machine learning and AI to provide real-time insights and predictive analytics.',
        status: 'active',
        priority: 'high',
        startDate: '2024-01-01',
        endDate: '2024-06-30',
        progress: 65,
        team['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez'],
        client: 'TechCorp Inc.',
        budget: 250000,
        tags['AI', 'Machine Learning', 'Analytics', 'Platform'],
        milestones[
          {
            id: 'm1',
            title: 'Requirements Analysis',
            description: 'Complete stakeholder interviews and document requirements',
            dueDate: '2024-01-15',
            status: 'completed',
            assignee: 'Sarah Johnson',
            priority: 'high'
          },
          {
            id: 'm2',
            title: 'System Architecture Design',
            description: 'Design system architecture and database schema',
            dueDate: '2024-02-15',
            status: 'completed',
            assignee: 'Michael Chen',
            priority: 'high'
          },
          {
            id: 'm3',
            title: 'Core Development',
            description: 'Develop core platform features and API endpoints',
            dueDate: '2024-04-15',
            status: 'in-progress',
            assignee: 'Emily Rodriguez',
            priority: 'high'
          },
          {
            id: 'm4',
            title: 'Testing & QA',
            description: 'Comprehensive testing and quality assurance',
            dueDate: '2024-05-15',
            status: 'pending',
            assignee: 'Sarah Johnson',
            priority: 'medium'

        ]
      },
      {
        id: '2',
        name: 'Cloud Migration & Infrastructure Modernization',
        description: 'Migrate legacy systems to cloud infrastructure and modernize the technology stack for improved scalability and performance.',
        status: 'active',
        priority: 'critical',
        startDate: '2024-02-01',
        endDate: '2024-08-31',
        progress: 35,
        team['David Kim', 'Lisa Thompson', 'Alex Wong'],
        client: 'Global Enterprises Ltd.',
        budget: 500000,
        tags['Cloud', 'Migration', 'Infrastructure', 'DevOps'],
        milestones[
          {
            id: 'm5',
            title: 'Infrastructure Assessment',
            description: 'Assess current infrastructure and plan migration strategy',
            dueDate: '2024-02-28',
            status: 'completed',
            assignee: 'David Kim',
            priority: 'critical'
          },
          {
            id: 'm6',
            title: 'Cloud Setup',
            description: 'Set up cloud infrastructure and security configurations',
            dueDate: '2024-04-15',
            status: 'in-progress',
            assignee: 'Lisa Thompson',
            priority: 'critical'

        ]
      },
      {
        id: '3',
        name: 'Cybersecurity Enhancement Program',
        description: 'Implement comprehensive cybersecurity measures including threat detection, incident response, and security awareness training.',
        status: 'planning',
        priority: 'high',
        startDate: '2024-03-01',
        endDate: '2024-09-30',
        progress: 15,
        team['James Wilson', 'Maria Garcia'],
        client: 'SecureBank Corp.',
        budget: 300000,
        tags['Cybersecurity', 'Threat Detection', 'Training', 'Compliance'],
        milestones[
          {
            id: 'm7',
            title: 'Security Assessment',
            description: 'Conduct comprehensive security audit and vulnerability assessment',
            dueDate: '2024-03-31',
            status: 'in-progress',
            assignee: 'James Wilson',
            priority: 'high'

        ]

    ];

    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects)}, []);

  // Filter projects
  useEffect(()  => {
    let filtered = projects;

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(p => p.status === selectedStatus)}

    if (selectedPriority !== 'all') {
      filtered = filtered.filter(p => p.priority === selectedPriority)}

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )};
      filtered = filtered.filter(p => ;
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      );
    }

    setFilteredProjects(filtered.slice(0, maxProjects))}, [projects, selectedStatus, selectedPriority, searchQuery, maxProjects]);

  // Calculate project stats
  const projectStats = {
