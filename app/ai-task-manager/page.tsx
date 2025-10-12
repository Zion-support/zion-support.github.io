'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, 
  CheckCircle, 
  Circle, 
  Trash2, 
  Edit3, 
  Calendar, 
  Clock, 
  Star, 
  Filter,
  Search,
  Bell,
  BarChart3,
  Target,
  Zap,
  Brain,
  Sparkles
} from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  category: string;
  createdAt: string;
  aiSuggestions?: string[];
}

export default function AITaskManagerPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'medium' as const, dueDate: '', category: 'General' });
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'high'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAISuggestions, setShowAISuggestions] = useState(false);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('ai-task-manager-tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('ai-task-manager-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask.title,
        description: newTask.description,
        completed: false,
        priority: newTask.priority,
        dueDate: newTask.dueDate,
        category: newTask.category,
        createdAt: new Date().toISOString(),
        aiSuggestions: generateAISuggestions(newTask.title, newTask.description)
      };
      setTasks([...tasks, task]);
      setNewTask({ title: '', description: '', priority: 'medium', dueDate: '', category: 'General' });
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const generateAISuggestions = (title: string, description: string): string[] => {
    const suggestions = [];
    
    if (title.toLowerCase().includes('meeting')) {
      suggestions.push('Set up calendar reminder 15 minutes before');
      suggestions.push('Prepare agenda and materials');
    }
    
    if (title.toLowerCase().includes('email')) {
      suggestions.push('Use professional tone and clear subject line');
      suggestions.push('Include call-to-action');
    }
    
    if (title.toLowerCase().includes('project')) {
      suggestions.push('Break down into smaller milestones');
      suggestions.push('Set weekly progress reviews');
    }
    
    if (description.toLowerCase().includes('urgent')) {
      suggestions.push('Consider delegating or asking for help');
      suggestions.push('Set multiple reminders');
    }
    
    return suggestions.slice(0, 3);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesFilter = filter === 'all' || 
      (filter === 'pending' && !task.completed) ||
      (filter === 'completed' && task.completed) ||
      (filter === 'high' && task.priority === 'high');
    
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const priorityColors = {
    low: 'text-green-400 bg-green-400/20',
    medium: 'text-yellow-400 bg-yellow-400/20',
    high: 'text-red-400 bg-red-400/20'
  };

  return (
    <>
      <Helmet>
        <title>AI Task Manager - Smart Productivity Tool | Zion Tech Group</title>
        <meta name="description" content="Boost your productivity with our AI-powered task manager. Smart suggestions, priority management, and intelligent insights. Free to use, no signup required." />
        <meta name="keywords" content="AI task manager, productivity tool, smart task management, AI suggestions, project management, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-task-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">AI Task Manager</h1>
                <p className="text-xl text-gray-300">Smart productivity powered by artificial intelligence</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white">{totalTasks}</div>
                <div className="text-gray-300">Total Tasks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white">{completedTasks}</div>
                <div className="text-gray-300">Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white">{completionRate}%</div>
                <div className="text-gray-300">Completion Rate</div>
              </div>
            </div>
          </div>

          {/* Add Task Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Plus className="w-6 h-6 mr-3 text-cyan-400" />
              Add New Task
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Task Title</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter task title..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={newTask.category}
                  onChange={(e) => setNewTask({...newTask, category: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="General">General</option>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                  <option value="Health">Health</option>
                  <option value="Learning">Learning</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                <select
                  value={newTask.priority}
                  onChange={(e) => setNewTask({...newTask, priority: e.target.value as 'low' | 'medium' | 'high'})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={addTask}
                  className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add Task
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description (Optional)</label>
              <textarea
                value={newTask.description}
                onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Add task description..."
                rows={3}
              />
            </div>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {['all', 'pending', 'completed', 'high'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType as any)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    filter === filterType
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* AI Suggestions Toggle */}
          <div className="mb-6">
            <button
              onClick={() => setShowAISuggestions(!showAISuggestions)}
              className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {showAISuggestions ? 'Hide' : 'Show'} AI Suggestions
            </button>
          </div>

          {/* Tasks List */}
          <div className="space-y-4">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No tasks found</h3>
                <p className="text-gray-400">Create your first task to get started!</p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <div key={task.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className="mt-1 text-2xl hover:scale-110 transition-transform duration-200"
                      >
                        {task.completed ? (
                          <CheckCircle className="text-green-400" />
                        ) : (
                          <Circle className="text-gray-400 hover:text-cyan-400" />
                        )}
                      </button>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                            {task.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
                            {task.priority.toUpperCase()}
                          </span>
                          <span className="px-2 py-1 bg-blue-400/20 text-blue-400 rounded-full text-xs font-medium">
                            {task.category}
                          </span>
                        </div>
                        
                        {task.description && (
                          <p className="text-gray-300 mb-3">{task.description}</p>
                        )}
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          {task.dueDate && (
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(task.dueDate).toLocaleDateString()}
                            </div>
                          )}
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {new Date(task.createdAt).toLocaleDateString()}
                          </div>
                        </div>

                        {/* AI Suggestions */}
                        {showAISuggestions && task.aiSuggestions && task.aiSuggestions.length > 0 && (
                          <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Brain className="w-4 h-4 text-purple-400 mr-2" />
                              <span className="text-sm font-medium text-purple-300">AI Suggestions</span>
                            </div>
                            <ul className="space-y-1">
                              {task.aiSuggestions.map((suggestion, index) => (
                                <li key={index} className="text-sm text-purple-200 flex items-start">
                                  <Sparkles className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                                  {suggestion}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-400 hover:text-red-300 p-2 hover:bg-red-400/10 rounded-lg transition-all duration-200"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pricing Section */}
          <div className="mt-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">AI Task Manager Pro</h2>
              <p className="text-xl text-gray-300 mb-8">Unlock advanced features and unlimited productivity</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Free Plan</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">$0<span className="text-lg text-gray-300">/month</span></div>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Up to 50 tasks</li>
                    <li>✓ Basic AI suggestions</li>
                    <li>✓ 3 categories</li>
                    <li>✓ Local storage</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-6 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Pro Plan</h3>
                  <div className="text-3xl font-bold text-white mb-4">$9.99<span className="text-lg text-white/70">/month</span></div>
                  <ul className="space-y-2 text-white/90">
                    <li>✓ Unlimited tasks</li>
                    <li>✓ Advanced AI insights</li>
                    <li>✓ Unlimited categories</li>
                    <li>✓ Cloud sync</li>
                    <li>✓ Team collaboration</li>
                    <li>✓ Priority support</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-4">$29.99<span className="text-lg text-gray-300">/month</span></div>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Everything in Pro</li>
                    <li>✓ Custom AI models</li>
                    <li>✓ API access</li>
                    <li>✓ White-label solution</li>
                    <li>✓ Dedicated support</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 mr-4">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help Getting Started?</h2>
            <p className="text-xl text-gray-300 mb-8">Our team is here to help you maximize your productivity</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Email Support
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}