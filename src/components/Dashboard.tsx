import React, { useState, useEffect } from 'react';
import { useTaskManager } from '../hooks/useTaskManager';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Track your productivity and task completion progress
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardItems.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {item.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
              <div className={`p-3 rounded-full ${getColorClasses(item.color)}`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Chart */}
      <div className={`p-6 rounded-lg border-2 ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Task Completion Progress
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Overall Progress</span>
            <span>{stats.completionRate}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${stats.completionRate}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
            <span>{stats.completedTasks} completed</span>
            <span>{stats.activeTasks} remaining</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-200 hover:border-gray-300'
          }`}>
            <div className="text-center">
              <div className="text-3xl mb-2">📝</div>
              <div className="font-medium text-gray-900 dark:text-white">Add Task</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Create new task</div>
            </div>
          </button>
          
          <button className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-200 hover:border-gray-300'
          }`}>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-medium text-gray-900 dark:text-white">View Reports</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Analytics & insights</div>
            </div>
          </button>
          
          <button className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-200 hover:border-gray-300'
          }`}>
            <div className="text-center">
              <div className="text-3xl mb-2">⚙️</div>
              <div className="font-medium text-gray-900 dark:text-white">Settings</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Preferences</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}