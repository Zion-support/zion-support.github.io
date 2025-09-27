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
      blue: 'bg-blue-100dark:bg-blue-900text-blue-600dark:text-blue-400',
      yellow: 'bg-yellow-100dark:bg-yellow-900text-yellow-600dark:text-yellow-400',
      green: 'bg-green-100dark:bg-green-900text-green-600dark:text-green-400',
      purple: 'bg-purple-100dark:bg-purple-900text-purple-600dark:text-purple-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="max-w-7 xl mx-auto px-4 sm: px-6lg:px-8py-8">
      <div className="mb-8">

        <h2 className="text-3 xl font-bold text-gray-900 dark:text-white mb-2" id="enhanced-dashboard">
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
          Enhanced Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Comprehensive overview of your productivity, team collaboration, and project management
        </p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6mb-8">

        {/* Task Statistics */}
        <div className="lg:col-span-1">
          <div className={`p-6rounded-lg border-2transition-all duration-300hover:shadow-lg ${
            isDarkMode 
              ? 'bg-gray-800border-gray-700hover:border-gray-600' 
              : 'bg-white border-gray-200hover:border-gray-300'
          }`}


            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" id="task-overview">
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
              Task Overview
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {dashboardItems.map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`p-3rounded-lg ${getColorClasses(item.color)}`}

                    <div className="text-2 xlmb-1">{item.icon}</div>
                    <div className="text-lg font-bold">{item.value}</div>
                    <div className="text-xs opacity-75">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Progress Chart */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400mb-2">
                <span>Overall Progress</span>
                <span>{stats.completionRate}%</span>
              </div>
              <div className="w-full bg-gray-200 dark: bg-gray-700rounded-fullh-3">
                <div 

                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
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

        <h3 className="text-lg font-semibold text-gray-900 dark: text-white mb-4" id="quick-actions">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className={`p-4rounded-lg border-2transition-all duration-300 hover:shadow-md ${
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
            isDarkMode 
              ? 'bg-gray-800border-gray-700hover:border-gray-600' 
              : 'bg-white border-gray-200hover:border-gray-300'
          }`}

            <div className="text-center">

              <div className="text-3 xlmb-2">📝</div>
              <div className="font-medium text-gray-900 dark:text-white">Add Task</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Create new task</div>
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
            </div>
          </button>
          
          <button className={`p-4rounded-lg border-2transition-all duration-300hover:shadow-md ${
            isDarkMode 
              ? 'bg-gray-800border-gray-700hover:border-gray-600' 
              : 'bg-white border-gray-200hover:border-gray-300'
          }`}

            <div className="text-center">

              <div className="text-3 xlmb-2">📊</div>
              <div className="font-medium text-gray-900 dark:text-white">View Reports</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Analytics & insights</div>
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
            </div>
          </button>
          
          <button className={`p-4rounded-lg border-2transition-all duration-300hover:shadow-md ${
            isDarkMode 
              ? 'bg-gray-800border-gray-700hover:border-gray-600' 
              : 'bg-white border-gray-200hover:border-gray-300'
          }`}

            <div className="text-center">

              <div className="text-3 xlmb-2">⚙️</div>
              <div className="font-medium text-gray-900 dark:text-white">Settings</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Preferences</div>
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}