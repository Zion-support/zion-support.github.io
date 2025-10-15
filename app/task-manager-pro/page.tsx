'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircleIcon,
  PlusIcon,
  TrashIcon,
  PencilIcon,
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  BellIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'completed';
  dueDate: string;
  assignee: string;
  tags: string[];
}

const TaskManagerPro: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete project proposal',
      description: 'Draft and finalize the Q1 project proposal for client presentation',
      priority: 'high',
      status: 'in-progress',
      dueDate: '2024-01-15',
      assignee: 'John Doe',
      tags: ['work', 'urgent']
    },
    {
      id: '2',
      title: 'Team meeting preparation',
      description: 'Prepare agenda and materials for weekly team standup',
      priority: 'medium',
      status: 'todo',
      dueDate: '2024-01-12',
      assignee: 'Jane Smith',
      tags: ['meeting', 'team']
    },
    {
      id: '3',
      title: 'Code review',
      description: 'Review pull requests for the new feature implementation',
      priority: 'high',
      status: 'completed',
      dueDate: '2024-01-10',
      assignee: 'Mike Johnson',
      tags: ['development', 'review']
    }
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium' as const,
    dueDate: '',
    assignee: '',
    tags: ''
  });

  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = () => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask.title,
        description: newTask.description,
        priority: newTask.priority,
        status: 'todo',
        dueDate: newTask.dueDate,
        assignee: newTask.assignee,
        tags: newTask.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };
      setTasks([...tasks, task]);
      setNewTask({ title: '', description: '', priority: 'medium', dueDate: '', assignee: '', tags: '' });
      setShowAddTask(false);
    }
  };

  const updateTaskStatus = (id: string, status: Task['status']) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/10';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10';
      case 'low': return 'text-green-400 bg-green-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/10';
      case 'in-progress': return 'text-blue-400 bg-blue-500/10';
      case 'todo': return 'text-gray-400 bg-gray-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  const features = [
    {
      icon: CheckCircleIcon,
      title: 'Smart Task Management',
      description: 'AI-powered task prioritization and intelligent scheduling based on deadlines and importance.',
      price: 'Included'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Real-time collaboration with team members, comments, and file sharing.',
      price: 'Included'
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting to track team productivity and project progress.',
      price: 'Included'
    },
    {
      icon: BellIcon,
      title: 'Smart Notifications',
      description: 'Intelligent notifications and reminders to keep you on track with deadlines.',
      price: 'Included'
    },
    {
      icon: CalendarIcon,
      title: 'Calendar Integration',
      description: 'Seamless integration with Google Calendar, Outlook, and other calendar apps.',
      price: 'Pro Plan'
    },
    {
      icon: CogIcon,
      title: 'Custom Workflows',
      description: 'Create custom workflows and automation rules for your team processes.',
      price: 'Pro Plan'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Advanced security features including SSO, audit logs, and data encryption.',
      price: 'Enterprise'
    },
    {
      icon: GlobeAltIcon,
      title: 'API Access',
      description: 'Full API access for custom integrations and third-party tool connections.',
      price: 'Enterprise'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited personal tasks',
        'Basic project management',
        'Mobile app access',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$29',
      period: '/month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Up to 10 team members',
        'Advanced collaboration tools',
        'Calendar integration',
        'Custom workflows',
        'Priority support',
        'Analytics dashboard',
        'File sharing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited team members',
        'All features included',
        'Enterprise security',
        'API access',
        '24/7 phone support',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      role: 'Project Manager',
      company: 'InnovateTech Solutions',
      content: 'Task Manager Pro has transformed how our team works. We\'ve increased productivity by 40% and never miss deadlines anymore.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'CEO',
      company: 'StartupHub',
      content: 'The AI-powered prioritization is a game-changer. It helps us focus on what matters most and delivers results.',
      rating: 5
    },
    {
      name: 'Robert Martinez',
      role: 'Team Lead',
      company: 'Digital Agency Pro',
      content: 'The collaboration features are incredible. Our remote team feels more connected and organized than ever.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Task Manager Pro - Zion Tech Group</title>
        <meta name="description" content="Boost team productivity with our AI-powered task management solution. Smart prioritization, collaboration tools, and analytics dashboard." />
        <meta name="keywords" content="task management, project management, team collaboration, productivity tools, AI task prioritization" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-green-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <CheckCircleIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">AI-Powered Task Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Task Manager Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Boost team productivity with our AI-powered task management solution. Smart prioritization, seamless collaboration, and powerful analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  Try Free Demo
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </button>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2M+</div>
                  <div className="text-gray-400 text-sm">Tasks Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                  <div className="text-gray-400 text-sm">Productivity Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Try Our <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Task Manager</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience the power of AI-powered task management. Create, organize, and track tasks with intelligent prioritization.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Task Dashboard</h3>
                  <button
                    onClick={() => setShowAddTask(!showAddTask)}
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center"
                  >
                    <PlusIcon className="w-5 h-5 mr-2" />
                    Add Task
                  </button>
                </div>

                {/* Add Task Form */}
                {showAddTask && (
                  <div className="bg-slate-700 rounded-lg p-6 mb-6 border border-slate-600">
                    <h4 className="text-lg font-semibold mb-4">Add New Task</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Task Title</label>
                        <input
                          type="text"
                          value={newTask.title}
                          onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                          placeholder="Enter task title..."
                          className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                        <select
                          value={newTask.priority}
                          onChange={(e) => setNewTask({...newTask, priority: e.target.value as any})}
                          className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Due Date</label>
                        <input
                          type="date"
                          value={newTask.dueDate}
                          onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Assignee</label>
                        <input
                          type="text"
                          value={newTask.assignee}
                          onChange={(e) => setNewTask({...newTask, assignee: e.target.value})}
                          placeholder="Enter assignee name..."
                          className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                        <textarea
                          value={newTask.description}
                          onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                          placeholder="Enter task description..."
                          rows={3}
                          className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Tags (comma-separated)</label>
                        <input
                          type="text"
                          value={newTask.tags}
                          onChange={(e) => setNewTask({...newTask, tags: e.target.value})}
                          placeholder="work, urgent, meeting..."
                          className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={addTask}
                        className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300"
                      >
                        Add Task
                      </button>
                      <button
                        onClick={() => setShowAddTask(false)}
                        className="border-2 border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-500 hover:text-white transition-all duration-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Task List */}
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-blue-500 transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-lg font-semibold text-white">{task.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                              {task.priority.toUpperCase()}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                              {task.status.replace('-', ' ').toUpperCase()}
                            </span>
                          </div>
                          <p className="text-gray-300 mb-3">{task.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center">
                              <CalendarIcon className="w-4 h-4 mr-1" />
                              {task.dueDate}
                            </div>
                            <div className="flex items-center">
                              <UserGroupIcon className="w-4 h-4 mr-1" />
                              {task.assignee}
                            </div>
                            <div className="flex items-center gap-1">
                              {task.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <button
                            onClick={() => updateTaskStatus(task.id, task.status === 'completed' ? 'todo' : 'completed')}
                            className={`p-2 rounded-lg transition-all duration-300 ${
                              task.status === 'completed' 
                                ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                                : 'bg-gray-500/20 text-gray-400 hover:bg-green-500/20 hover:text-green-400'
                            }`}
                          >
                            <CheckCircleIcon className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage tasks, collaborate with your team, and boost productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm">
                    {feature.description}
                  </p>
                  <span className="text-xs text-blue-400 font-medium">{feature.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and needs. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                    : 'border-slate-700 hover:border-blue-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700'
                      : 'border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Our <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Join thousands of teams who have transformed their productivity with Task Manager Pro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-green-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Ready to Boost Your Team's Productivity?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start managing tasks more efficiently today. No credit card required for the free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
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

export default TaskManagerPro;
