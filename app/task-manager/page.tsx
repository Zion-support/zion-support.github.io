'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  CalendarIcon, 
  CheckCircleIcon as TaskIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const TaskManagerPage: React.FC = () => {
  const features = [
    'Task Creation & Assignment',
    'Priority Management',
    'Deadline Tracking',
    'Team Collaboration',
    'Progress Monitoring',
    'Time Tracking'
  ];

  const taskTypes = [
    {
      name: 'Project Tasks',
      description: 'Break down projects into manageable tasks with dependencies',
      icon: TaskIcon,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Team Tasks',
      description: 'Assign and track tasks across team members',
      icon: UserGroupIcon,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Personal Tasks',
      description: 'Manage your personal productivity and goals',
      icon: CheckCircleIcon,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Scheduled Tasks',
      description: 'Plan and schedule recurring tasks and reminders',
      icon: CalendarIcon,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Task Manager - Zion Tech Group"
        description="Comprehensive task management solution for teams and individuals. Track, assign, and monitor tasks with advanced collaboration features."
        keywords="task manager, project management, team collaboration, productivity, task tracking, deadline management"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mb-6">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Task <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Manager</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Organize, track, and complete tasks efficiently with our comprehensive task management solution. 
                Perfect for teams and individuals who want to boost productivity.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage tasks effectively and boost team productivity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Task Types Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Task <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Types</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Manage different types of tasks with specialized features for each use case.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {taskTypes.map((type, index) => (
                <div 
                  key={index}
                  className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${type.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {type.description}
                  </p>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start managing your tasks more effectively with our comprehensive task management solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TaskManagerPage;
