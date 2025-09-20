'use client';

import React, { useState, useEffect } from 'react';

interface Project {
  id: string,
  name: string,
  status: 'planning' | 'development' | 'testing' | 'deployment' | 'completed',
  progress: number,
  startDate: string,
  endDate: string,
  team: string[],
  budget: number,
  spent: number,
  priority: 'low' | 'medium' | 'high' | 'critical',
  client: string,
  description: string,
  tasks: Task[],
}

interface Task {
  id: string,
  title: string,
  status: 'todo' | 'in-progress' | 'review' | 'done',
  assignee: string,
  dueDate: string,
  priority: 'low' | 'medium' | 'high',
  estimatedHours: number,
  actualHours: number,
}

const ProjectManagementDashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'timeline' | 'budget'>('overview');

  useEffect(() => {
    // Simulate data fetching
    const mockProjects: Project[] = [
      {
        id: '1',
        name: 'AI Automation Platform',
        status: 'development',
        progress: 65,
        startDate: '2025-01-15',
        endDate: '2025-04-15',
        team: ['John Smith', 'Sarah Johnson', 'Mike Chen', 'Lisa Wang'],
        budget: 150000,
        spent: 97500,
        priority: 'high',
        client: 'TechCorp Inc.',
        description: 'Comprehensive AI automation platform for enterprise clients',
        tasks: [
          { id: '1', title: 'API Development', status: 'done', assignee: 'John Smith', dueDate: '2025-02-01', priority: 'high', estimatedHours: 40, actualHours: 42 },
          { id: '2', title: 'Frontend Integration', status: 'in-progress', assignee: 'Sarah Johnson', dueDate: '2025-02-15', priority: 'high', estimatedHours: 60, actualHours: 35 },
          { id: '3', title: 'Testing Suite', status: 'todo', assignee: 'Mike Chen', dueDate: '2025-03-01', priority: 'medium', estimatedHours: 30, actualHours: 0 },
          { id: '4', title: 'Documentation', status: 'todo', assignee: 'Lisa Wang', dueDate: '2025-03-15', priority: 'low', estimatedHours: 20, actualHours: 0 }
        ]
      },
      {
        id: '2',
        name: 'Quantum AI Research',
        status: 'planning',
        progress: 25,
        startDate: '2025-02-01',
        endDate: '2025-08-01',
        team: ['Dr. Alex Rodriguez', 'Dr. Maria Garcia', 'James Wilson'],
        budget: 500000,
        spent: 125000,
        priority: 'critical',
        client: 'Research Institute',
        description: 'Advanced quantum AI algorithms for complex problem solving',
        tasks: [
          { id: '5', title: 'Research Phase', status: 'in-progress', assignee: 'Dr. Alex Rodriguez', dueDate: '2025-03-01', priority: 'critical', estimatedHours: 200, actualHours: 50 },
          { id: '6', title: 'Algorithm Design', status: 'todo', assignee: 'Dr. Maria Garcia', dueDate: '2025-04-01', priority: 'high', estimatedHours: 150, actualHours: 0 },
          { id: '7', title: 'Prototype Development', status: 'todo', assignee: 'James Wilson', dueDate: '2025-06-01', priority: 'high', estimatedHours: 300, actualHours: 0 }
        ]
      },
      {
        id: '3',
        name: 'Micro SaaS Platform',
        status: 'testing',
        progress: 85,
        startDate: '2024-11-01',
        endDate: '2025-02-28',
        team: ['Emma Davis', 'Tom Brown', 'Anna Lee'],
        budget: 75000,
        spent: 63750,
        priority: 'medium',
        client: 'StartupXYZ',
        description: 'Scalable micro SaaS solution for small businesses',
        tasks: [
          { id: '8', title: 'Core Development', status: 'done', assignee: 'Emma Davis', dueDate: '2025-01-15', priority: 'high', estimatedHours: 80, actualHours: 85 },
          { id: '9', title: 'User Interface', status: 'done', assignee: 'Tom Brown', dueDate: '2025-01-30', priority: 'high', estimatedHours: 60, actualHours: 55 },
          { id: '10', title: 'Testing & QA', status: 'in-progress', assignee: 'Anna Lee', dueDate: '2025-02-15', priority: 'medium', estimatedHours: 40, actualHours: 25 },
          { id: '11', title: 'Deployment Setup', status: 'review', assignee: 'Emma Davis', dueDate: '2025-02-28', priority: 'medium', estimatedHours: 20, actualHours: 18 }
        ]
      }
    ]);


    setProjects(mockProjects);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'development': return 'bg-blue-100 text-blue-800';
      case 'testing': return 'bg-purple-100 text-purple-800';
      case 'deployment': return 'bg-orange-100 text-orange-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) : any => {
    switch (priority) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-orange-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getTaskStatusColor = (status: string) : any => {
    switch (status) {
      case 'todo': return 'bg-gray-100 text-gray-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'review': return 'bg-yellow-100 text-yellow-800';
      case 'done': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: number) : any => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const selectedProjectData = selectedProject 
    ? projects.find(p => p.id === selectedProject)
    : null;

  const totalBudget = projects.reduce((sum, project) => sum + project.budget, 0);
  const totalSpent = projects.reduce((sum, project) => sum + project.spent, 0);
  const totalRemaining = totalBudget - totalSpent;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Project Management Dashboard</h2>
          <p className="text-xl text-gray-300">
            Real-time project tracking and team collaboration
          </p>
        </div>

        {/* View Mode Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
            {(['overview', 'timeline', 'budget'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  viewMode === mode
                    ? 'bg-white text-gray-900'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Overview */}
        {viewMode === 'budget' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Total Budget</h3>
              <p className="text-3xl font-bold text-blue-400">{formatCurrency(totalBudget)}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Total Spent</h3>
              <p className="text-3xl font-bold text-yellow-400">{formatCurrency(totalSpent)}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Remaining</h3>
              <p className="text-3xl font-bold text-green-400">{formatCurrency(totalRemaining)}</p>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 cursor-pointer transition-all hover:bg-white/20 ${
                selectedProject === project.id ? 'ring-2 ring-blue-400' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Client:</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Priority:</span>
                  <span className={`font-medium ${getPriorityColor(project.priority)}`}>
                    {project.priority.toUpperCase()}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Budget:</span>
                  <span className="font-medium">{formatCurrency(project.budget)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details */}
        {selectedProjectData && (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedProjectData.name}</h3>
                <p className="text-gray-300">{selectedProjectData.description}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-sm text-gray-300 mb-1">Progress</div>
                <div className="text-2xl font-bold">{selectedProjectData.progress}%</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-sm text-gray-300 mb-1">Team Size</div>
                <div className="text-2xl font-bold">{selectedProjectData.team.length}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-sm text-gray-300 mb-1">Budget Used</div>
                <div className="text-2xl font-bold">
                  {Math.round((selectedProjectData.spent / selectedProjectData.budget) * 100)}%
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-sm text-gray-300 mb-1">Tasks</div>
                <div className="text-2xl font-bold">{selectedProjectData.tasks.length}</div>
              </div>
            </div>

            {/* Tasks */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Tasks</h4>
              <div className="space-y-3">
                {selectedProjectData.tasks.map((task) => (
                  <div key={task.id} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">{task.title}</h5>
                      <span className={`px-2 py-1 rounded-full text-xs ${getTaskStatusColor(task.status)}`}>
                        {task.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md: grid-cols-4 gap-4 text-sm text-gray-300">
                      <div>
                        <span className="block">Assignee</span>
                        <span className="font-medium text-white">{task.assignee}</span>
                      </div>
                      <div>
                        <span className="block">Due Date</span>
                        <span className="font-medium text-white">{task.dueDate}</span>
                      </div>
                      <div>
                        <span className="block">Priority</span>
                        <span className={`font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <span className="block">Hours</span>
                        <span className="font-medium text-white">
                          {task.actualHours}/{task.estimatedHours}h
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to start your next AI project?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105">
            Start New Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagementDashboard;