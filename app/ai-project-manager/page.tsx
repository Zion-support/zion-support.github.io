'use client';
import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  PlusIcon,
  CalendarIcon,
  BellIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const AIProjectManagerPage: React.FC = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Website Redesign',
      status: 'In Progress',
      progress: 75,
      team: 5,
      deadline: '2025-02-15',
      priority: 'High',
      tasks: [
        { id: 1, title: 'Design mockups', completed: true },
        { id: 2, title: 'Frontend development', completed: true },
        { id: 3, title: 'Backend integration', completed: false },
        { id: 4, title: 'Testing & QA', completed: false }
      ]
    },
    {
      id: 2,
      name: 'Mobile App Launch',
      status: 'Planning',
      progress: 25,
      team: 8,
      deadline: '2025-03-01',
      priority: 'Medium',
      tasks: [
        { id: 1, title: 'Market research', completed: true },
        { id: 2, title: 'UI/UX design', completed: false },
        { id: 3, title: 'Development', completed: false },
        { id: 4, title: 'App store submission', completed: false }
      ]
    }
  ]);

  const [newProject, setNewProject] = useState({
    name: '',
    deadline: '',
    priority: 'Medium'
  });

  const addProject = () => {
    if (newProject.name && newProject.deadline) {
      const project = {
        id: projects.length + 1,
        name: newProject.name,
        status: 'Planning',
        progress: 0,
        team: 1,
        deadline: newProject.deadline,
        priority: newProject.priority,
        tasks: []
      };
      setProjects([...projects, project]);
      setNewProject({ name: '', deadline: '', priority: 'Medium' });
    }
  };

  const toggleTask = (projectId: number, taskId: number) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? {
            ...project,
            tasks: project.tasks.map(task => 
              task.id === taskId 
                ? { ...task, completed: !task.completed }
                : task
            )
          }
        : project
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/20';
      case 'In Progress': return 'text-blue-400 bg-blue-400/20';
      case 'Planning': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-400 bg-red-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Low': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <>
      <SEOHead 
        title="AI Project Manager - Zion Tech Group"
        description="Advanced AI-powered project management tool with intelligent task prioritization, team collaboration, and automated insights. Streamline your workflow with cutting-edge technology."
        keywords="AI project management, task management, team collaboration, project tracking, productivity tools, AI automation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl mb-6">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                AI Project Manager
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Intelligent project management powered by AI. Automate task prioritization, 
                predict project risks, and optimize team productivity with advanced analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to manage projects efficiently with AI assistance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <CogIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Task Prioritization</h3>
                <p className="text-gray-400">
                  Automatically prioritize tasks based on deadlines, dependencies, and team capacity using machine learning.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-gray-400">
                  Get insights into project risks, resource needs, and completion timelines with AI-powered predictions.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <UserGroupIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
                <p className="text-gray-400">
                  Real-time collaboration tools with smart notifications and automated status updates.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <BellIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Notifications</h3>
                <p className="text-gray-400">
                  Intelligent alerts that learn from your behavior to reduce notification fatigue.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Resource Planning</h3>
                <p className="text-gray-400">
                  Optimize team allocation and resource distribution with AI-driven recommendations.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                <p className="text-gray-400">
                  Proactive risk identification and mitigation strategies powered by AI analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Try It Live
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience the power of AI project management with our interactive demo
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              {/* Add New Project */}
              <div className="mb-8 p-6 bg-slate-700/50 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <PlusIcon className="w-5 h-5 mr-2" />
                  Add New Project
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Project Name"
                    value={newProject.name}
                    onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                    className="bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-purple-500 focus:outline-none"
                  />
                  <input
                    type="date"
                    value={newProject.deadline}
                    onChange={(e) => setNewProject({...newProject, deadline: e.target.value})}
                    className="bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-purple-500 focus:outline-none"
                  />
                  <select
                    value={newProject.priority}
                    onChange={(e) => setNewProject({...newProject, priority: e.target.value})}
                    className="bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                  </select>
                </div>
                <button
                  onClick={addProject}
                  className="mt-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Add Project
                </button>
              </div>

              {/* Projects List */}
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(project.priority)}`}>
                            {project.priority} Priority
                          </span>
                          <span className="px-3 py-1 rounded-full text-sm font-medium text-blue-400 bg-blue-400/20">
                            {project.team} team members
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-400 mb-1">{project.progress}%</div>
                        <div className="w-32 bg-slate-600 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tasks */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-300 mb-2">Tasks:</h4>
                      {project.tasks.map((task) => (
                        <div key={task.id} className="flex items-center space-x-3 p-2 hover:bg-slate-600/30 rounded-lg transition-colors">
                          <button
                            onClick={() => toggleTask(project.id, task.id)}
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                              task.completed 
                                ? 'bg-green-500 border-green-500 text-white' 
                                : 'border-gray-400 hover:border-green-400'
                            }`}
                          >
                            {task.completed && <CheckCircleIcon className="w-3 h-3" />}
                          </button>
                          <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                            {task.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your team size and needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$29<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">Perfect for small teams</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 projects
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Team collaboration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Mobile app access
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$99<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">For growing businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited projects
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$299<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    On-premise deployment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    SLA guarantee
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of teams already using AI Project Manager to boost productivity and deliver projects on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIProjectManagerPage;