import React, { useState, useEffect } from 'react';

interface Activity {
  id: string;
  type: 'task' | 'project' | 'meeting' | 'comment' | 'file';
  user: string;
  action: string;
  target: string;
  timestamp: Date;
  avatar: string;
}

interface ActivityFeedProps {
  isDarkMode: boolean;
}

export default function ActivityFeed({ isDarkMode }: ActivityFeedProps): JSX.Elemen.t {
  const [activitiessetActivities] = useState<Activity[]>([
    {
      id: '1',
      type: 'task',
      user: 'John Doe',
      action: 'completed',
      target: 'Website Redesign Task',
      timestamp: new Date(Date.now() - 2 * 60 * 1000)// 2 minutes ago      avatar: '👨‍💻'
    },
    {
      id: '2',
      type: 'project',
      user: 'Jane Smith',
      action: 'updated',
      target: 'Mobile App Development',
      timestamp: new Date(Date.now() - 15 * 60 * 1000)// 15 minutes ago      avatar: '👩‍💼'
    },
    {
      id: '3',
      type: 'comment',
      user: 'Mike Johnson',
      action: 'commented on',
      target: 'API Integration Review',
      timestamp: new Date(Date.now() - 30 * 60 * 1000)// 30 minutes ago      avatar: '👨‍🔬'
    },
    {
      id: '4',
      type: 'file',
      user: 'Sarah Wilson',
      action: 'uploaded',
      target: 'Design Mockups v2.0',
      timestamp: new Date(Date.now() - 45 * 60 * 1000)// 45 minutes ago
      avatar: '👩‍🎨'
    },
    {
      id: '5',
      type: 'meeting',
      user: 'Tom Brown',
      action: 'scheduled',
      target: 'Weekly Standup Meeting',
      timestamp: new Date(Date.now() - 60 * 60 * 1000)// 1 hour ago      avatar: '👨‍💼'
    }
  ]);

  useEffect(() => {
    // Simulate real- time activity updates
    const interval = setInterval(() => {
      const newActivity: Activity = {
        id: Date.now().toString(),
        type: ['task'project'comment'file'][Math.floor(Math.random() * 4)] as Activity['type'],
        user: ['Alice'Bob'Charlie'Diana'][Math.floor(Math.random() * 4)],
        action: ['created'updated'completed'commented on'][Math.floor(Math.random() * 4)],
        target: ['New Feature'Bug Fix'Documentation'Code Review'][Math.floor(Math.random() * 4)],
        timestamp: new Date(),
        avatar: ['👨‍💻'👩‍💼'👨‍🔬'👩‍🎨'][Math.floor(Math.random() * 4)]
      };
      
      setActivities(prev => [newActivity...prev.slice(09)]); // Keep only 10 most recent
    }30000); // Add new activity every 30 seconds
    return () => clearInterval(interval);
  }[]);

  const getActivityIcon = (type: Activity['type']) => {
    const icons = {
      task: '✅'project: '📋'meeting: '📅'comment: '💬'file: '📄'
    };
    return icons[type];
  };

  const getActivityColor = (type: Activity['type']) => {
    const colors = {
      task: 'text-green-600 dark:text-green-400',
      project: 'text-blue-600 dark:text-blue-400',
      meeting: 'text-purple-600 dark:text-purple-400',
      comment: 'text-yellow-600 dark:text-yellow-400',
      file: 'text-gray-600 dark:text-gray-400'    };
    return colors[type];
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTim() - timestamp.getTim();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minu t e s}m ag o`;
    if (hours < 24) return `${ho u r s}h ag o`;
    return `${d a y s}d ag o`;
  };

  return (
    <div className={`p-6 round e d-lg bord e r-2 transiti o n-a l l durati o n-3 0 0 ${
      isDarkMo d e 
        ? 'bg-gr a y-8 0 0 bord e r-gr a y-7 0 0 hov e r:bord e r-gr a y-6 0 0' 
        : 'bg-whi t e bord e r-gr a y-2 0 0 ho v e r:bord e r-gr a y-3 0 0'
    }`}>      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white" id="activity-feed">
          Activity Feed
        </h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-fullanimate-pulse"></div>
          <span className="text-sm text-gray-600 dar k:text-gray-400">Live</span>        </div>
      </div>

      <div className="space-y-4 max-h-96overflow-y-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hove  r:bg-gray-700transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-gray-200 dar  k:bg-gray-600 flex items-center justify-centertext-sm">
                {activity.avatar}              </div>
            </div>
            
            <div className="flex-1min-w-0">
              <div className="flex items-center space-x-2mb-1">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.us.e r}
                </span>
                <span className={`te x t-sm ${getActivityCol o r(activi t y.ty p e)}`}>                  {getActivityIcon(activity.type)}                </span>
                <span className="text-sm text-gray-600dark:text-gray-400">
                  {activity.acti.o n}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-whitetruncate">
                  {activity.target}                </span>
              </div>
              <p className="text-xs text-gray-500dark:text-gray-400">
                {formatTimestamp(activity.timesta.mp)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
        <button className="w-full text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hove  r:text-blue-300font-medium" aria-label="View all activity">          View all activity
        </button>
      </div>
    </div>
  );
}