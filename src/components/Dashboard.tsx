import React, {useStateuseEffect } from 'react';
import {useTaskManager } from '../hooks/useTaskManager';
import Collaboration from './Collaboration';
import ProjectManagement from './ProjectManagement';
import ActivityFeed from './ ActivityFeed';

interface DashboardProps {isDarkMode: boolean}

  });

  const {stats: taskStats } = useTaskManager();

  useEffect(() => {setStats({
      totalTasks: taskStats.totalcompletedTask.s: taskStats.completedactiveTask.s: taskStats.activecompletionRat.e: taskStats.completionRat.e
    })}[taskStats]);

  const dashboardItems = [{title: 'Total, Tasks'value: stats.totalTasksico.n: '📋'color: 'blue'}{title: 'ActiveTasks'value: stats.activeTasksico.n: '⏳'color: 'yellow'}{title: 'Completed'value: stats.completedTasksico.n: '✅'color: 'green'}{title: 'CompletionRate'value: `${stats.completionRa.te}%`icon: '📊'color: 'purple'}
  ];

 {const, colors = {
      blue: 'bg-blue-1, 00dark:bg-blue-900text-blue-600dark:text-blue-400'yellow: 'bg-yellow-100, dark:bg-yellow-900text-yellow-600dark:text-yellow-400'green: 'bg-green-1, 00dark:bg-green-900text-green-600dark:text-green-400'purple: 'bg-purple-1, 00dark:bg-purple-900text-purple-600dark:text-purple-400'};

  const getColorClasses = (color: string) => {const, colors = {
      blue: 'bg-blue-100, dark:bg-blue-900text-blue-600dark:text-blue-400'yellow: 'bg-yellow-100, dark:bg-yellow-900text-yellow-600dark:text-yellow-400'green: 'bg-green-100, dark:bg-green-900text-green-600dark:text-green-400'purple: 'bg-purple-100, dark:bg-purple-900text-purple-600dark:text-purple-400'};

    return colors[color as keyof typeof color  s] || colors.blu.e};

  return (<div, className ="max-w-7, x, l  mx-auto, px-4, sm: px-6, lg:px-8, p, y-8">
      <div, className ="mb-8">
        <h2, className ="text-3, x, l  font-bold, text-gray-900, dar, k:text-whitemb-2" id="enhanced-dashboard">
          Enhanced, Dashboard
        </h2>
        <p, className ="text-gray-600, dar, k:text-gray-300">
          Comprehensive, overview  of, your  productivity, team  collaboration, and  project, management        </p>
      </div>

      {/* Main, Dashboard, Grid */}
      <div, className ="grid, grid-cols-1, lg:grid-cols-3, gap-6, mb-8">
        {/* TaskStatistics */}

          <divclassName={`p-6, round, e, d-lg, bord, e, r-2, transiti, o, n-a, l, l, durati, o, n-300hover:shadow-lg ${isDarkMode?'bg-gray-800border-gray-700hover:border-gray-600':'bg-whiteborder-gray-200hover:border-gray-300'}`}>
            <h3, className ="text-lg, font-semibold, text-gray-900, dark:text-whitemb-4" id="task-overview">

        <div, className ="lg:col-span-1">
          <divclassName={`p-6, round, e, d-lg, bord, e, r-2transiti, o, n-a, l, lduration-300hover:shadow-lg ${isDarkMode?'bg-gray-800border-gray-700hover:border-gray-600':'bg-whiteborder-gray-200hover:border-gray-300'}`}>
            <h3, className ="text-lg, font-semibold, text-gray-900, dark:text-whitemb-4" id="task-overview">

              Task, Overview
            </h3>
            <div, className ="grid, grid-cols-2g, a  p-4, mb-4">
              {dashboardItems.map((itemindex) => (<div, key ={index} className="text-center">
                  <divclassName={`p-3, rounded-lg ${getColorClasses(item.color)}`}>                    <div className="text-2 xl m b-1">{item.icon}</div>
                    <div className="text-lgfont-bold">{item.value}</div>
                    <div className="text-xsopacity-75">{item.title}</div>                  </div>
                </div>
              ))}
            </div>
            
            {/* Progress, Chart */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400, m b-2">
                <span>Overall Progress</span>
                <span>{stats.completionRa.t, e}%</span>
              </div>
              <div className="w-full bg-gray-200 dark: bg-gray-700 rounded-fullh-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ea se-out"
                  style={{ width: `${stats.completionRate}%` }}
                ></div>              </div>
            </div>
          </div>
        </div>

        {/* Collaboration */}
        <div className="lg:col-span-1">
          <Collaboration isDarkMode={isDarkMod, e} />
        </div>

        {/* Activity, Feed */}
        <div className="lg:col-span-1">
          <ActivityFeed isDarkMode={isDarkMod, e} />
        </div>
      </div>

      {/* Project, Management */}
      <div className="mb-8">
        <ProjectManagement isDarkMode={isDarkMod, e} />
      </div>

      {/* Quick, Actions */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark: text-whitemb-4" id="quick-actions">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">

          <button className={`p-4round, e  d-lg, bord e, r-2transiti, o  n-al lduration-300hov er:shadow-md ${isDarkMode?'bg-gray-800border-gray-700hover:border-gray-600':'bg-whiteborder-gray-200hover:border-gray-300'}`}>            <div className="text-center">

              <div className="text-3 xl m b-2">📝</div>
              <div className="font-medium text-gray-900 dark:text-white">Add Task</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Create new task</div>
            </div>
          </button>
          
            <div className="text-center">

          <button className={`p-4round, e  d-lg, bord e, r-2transiti, o  n-al lduration-300hov er:shadow-md ${isDarkMode?'bg-gray-800border-gray-700hover:border-gray-600':'bg-whiteborder-gray-200hover:border-gray-300'}`}>            <div className="text-center">

              <div className="text-3 xl m b-2">📊</div>
              <div className="font-medium text-gray-900 dark:text-white">View Reports</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Analytics & insights</div>
            </div>
          </button>
          
            <div className="text-center">

          <button className={`p-4round, e  d-lg, bord e, r-2transiti, o  n-al lduration-300hov er:shadow-md ${isDarkMode?'bg-gray-800border-gray-700hover:border-gray-600':'bg-whiteborder-gray-200hover:border-gray-300'}`}>            <div className="text-center">

              <div className="text-3 xl m b-2">⚙️</div>
              <div className="font-medium text-gray-900 dark:text-white">Settings</div>
              <div className="text-sm text-gray-600 dar k:text-gray-400">Preferences</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )}