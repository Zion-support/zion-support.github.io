import React, { useState, useEffect } from 'react';
import { useTaskManager } from '../hooks/useTaskManager';
import Collaboration from './Collaboration';
import ProjectManagement from './ProjectManagement';
import ActivityFeed from './ActivityFeed';

interface DashboardProps {
  isDarkMode: boolean;
}

export default function Dashboard({ isDarkMode }: DashboardProps): JSX.Element {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    activeTasks: 0,
    completionRate: 0
  });

  const { stats: taskStats } = useTaskManager();

  useEffect(() => {
    setStats({
      totalTasks: taskStats.total,
      completedTasks: taskStats.completed,
      activeTasks: taskStats.active,
      completionRate: taskStats.completionRate
    });
  }, [taskStats]);

  const dashboardItems = [
    {
      title: 'Total Tasks',
      value: stats.totalTasks,
      icon: '📋',
      color: 'blue'
    },
    {
      title: 'Active Tasks',
      value: stats.activeTasks,
      icon: '⏳',
      color: 'yellow'
    },
    {
      title: 'Completed',
      value: stats.completedTasks,
      icon: '✅',
      color: 'green'
    },
    {
      title: 'Completion Rate',
      value: `${stats.completionRate}%`,
      icon: '📊',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="max-w-7xl mx-auto px-4sm: px-6lg:px-8py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-whitemb-2" id="enhanced-dashboard">
          Enhanced Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Comprehensive overview of your productivity, team collaboration, and project management
        </p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1lg:grid-cols-3gap-6 mb-8">
        {/* Task Statistics */}
        <div className="lg:col-span-1">
          <div className={`p-6rounded-lg border-2transition-all duration-300 hover:shadow-lg ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-200 hover:border-gray-300'
          }`}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-whitemb-4" id="task-overview">
              Task Overview
            </h3>
            <div className="grid grid-cols-2gap-4 mb-4">
              {dashboardItems.map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`p-3rounded-lg ${getColorClasses(item.color)}`}
                    <div className="text-2xlmb-1">{item.icon}</div>
                    <div className="text-lg font-bold">{item.value}</div>
                    <div className="text-xs opacity-75">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Progress Chart */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Overall Progress</span>
                <span>{stats.completionRate}%</span>
              </div>
              <div className="w-full bg-gray-200 dark: bg-gray-700 rounded-fullh-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3rounded-full transition-all duration-500 ease-out"
                  style={{ widt, h: `${stats.completionRate}%` }}</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration */}
        <div className="lg:col-span-1">
          <Collaboration isDarkMode={isDarkMode} />
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-1">
          <ActivityFeed isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* Project Management */}
      <div className="mb-8">
        <ProjectManagement isDarkMode={isDarkMode} />
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark: text-whitemb-4" id="quick-actions">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1md:grid-cols-3gap-4">
          <button className={`p-4rounded-lg border-2transition-all duration-300 hover:shadow-md ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-200 hover:border-gray-300'
          }`}
            <div className="text-center">
              <div className="text-3xlmb-2">📝</div>
              <div className="font-medium text-gray-900 dark:text-white">Add Task</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Create new task</div>
            </div>
          </button>
          
          <button className={`p-4rounded-lg border-2transition-all duration-300 hover:shadow-md ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-200 hover:border-gray-300'
          }`}
            <div className="text-center">
              <div className="text-3xlmb-2">📊</div>
              <div className="font-medium text-gray-900 dark:text-white">View Reports</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Analytics & insights</div>
            </div>
          </button>
          
          <button className={`p-4rounded-lg border-2transition-all duration-300 hover:shadow-md ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-200 hover:border-gray-300'
          }`}
            <div className="text-center">
              <div className="text-3xlmb-2">⚙️</div>
              <div className="font-medium text-gray-900 dark:text-white">Settings</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Preferences</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}