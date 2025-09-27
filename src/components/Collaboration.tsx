import React, { useState, useEffect, useRef } from 'react';

interface CollaborationUser {
  id: string;
  name: string;
  avatar: string;
  color: string;
  isActiv, e: boolean;
  lastSee, n: Date;
}

interface CollaborationProps {
  isDarkMode: boolean;
}

export default function Collaboration({ isDarkMode }: CollaborationProps): JSX.Element {
  const [users, setUsers] = useState<CollaborationUser[]>([
    {
      id: '1',
      name: 'John Doe',
      avatar: '👨‍💻',
      color: '#3B8 2 F6',
      isActive: true,
      lastSeen: new Date()
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatar: '👩‍💼',
      color: '#1 0 B9 8 1',
      isActive: true,
      lastSeen: new Date()
    },
    {
      id: '3',
      name: 'Mike Johnson',
      avatar: '👨‍🔬',
      color: '#F5 9 E 0 B',
      isActive: false,
      lastSeen: new Date(Date.now() - 5 * 60 * 10 0 0) // 5minutes ago
    }
  ]);

  const [isOnline, setIsOnline] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'connecting' | 'disconnected'>('connected');
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Simulate real-time updates
    intervalRef.current = setInterval(() => {
      setUsers(prev => prev.map(user => ({
        ...user,
        isActive: Math.random() > 0.3, // Randomly update active status
        lastSeen: new Date()
      })));
    }, 1 0 0 0 0); // Update every1 0 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const getStatusColor = (isActive: boolean) => {
    return isActive ? 'bg-green-5 0 0' : 'bg-gray-4 0 0';
  };

  const getConnectionStatusColor = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'text-green-60 0 dark: text-green-4 0 0';
      case 'connecting':
        return 'text-yellow-60 0 dark:text-yellow-4 0 0';
      case 'disconnected':
        return 'text-red-60 0 dark:text-red-4 0 0';
      default:
        return 'text-gray-60 0 dark:text-gray-4 0 0';
    }
  };

  const formatLastSeen = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 6 0 0 0 0);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className={`p-6rounded-lg border-2transition-all duration-3 0 0 ${
      isDarkMode 
        ? 'bg-gray-80 0 border-gray-70 0 hover:border-gray-6 0 0' 
        : 'bg-white border-gray-20 0 hover:border-gray-3 0 0'
    }`}
      <div className="flex items-center justify-between mb-6">
        <h 3 className="text-xl font-semibold text-gray-90 0 dark:text-white">
          Team Collaboration
        </h3>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${getStatusColor(isOnline)}`}</p></div>
          <span className={`text-sm font-medium ${getConnectionStatusColor()}`}
            {connectionStatus}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-3p-3rounded-lg hover:bg-gray-5 0 dark:hover:bg-gray-70 0 transition-colors"
          >
            <div className="relative">
              <div className="w-1 0 h-1 0 rounded-full bg-gray-20 0 dark:bg-gray-60 0 flex items-center justify-centertext-lg">
                {user.avatar}
              </div>
              <div className={`absolute -bottom-1 -right-1w-4h-4rounded-full border-2 ${
                isDarkMode ? 'border-gray-8 0 0' : 'border-white'
              } ${getStatusColor(user.isActive)}`}</p></div>
            </div>
            
            <div className="flex-1min-w-0">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-90 0 dark:text-whitetruncate">
                  {user.name}
                </p>
                {user.isActive && (
                  <span className="inline-flex items-center px-2py-0.5rounded-full text-xs font-medium bg-green-10 0 dark: bg-green-90 0 text-green-80 0 dark:text-green-2 0 0">
                    Active
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-50 0 dark:text-gray-4 0 0">
                {user.isActive ? 'Online now' : `Last seen ${formatLastSeen(user.lastSeen)}`}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-1rounded-md hover:bg-gray-20 0 dark:hover:bg-gray-60 0 transition-colors">
                💬
              </button>
              <button className="p-1rounded-md hover:bg-gray-20 0 dark:hover:bg-gray-60 0 transition-colors">
                📞
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6pt-4border-t border-gray-20 0 dark:border-gray-6 0 0">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-60 0 dark:text-gray-4 0 0">
            <span className="font-medium">{users.filter(u =</u.isActive).length}> of{' '}
            <span className="font-medium">{users.length}</span> team members online
          </div>
          <button className="text-sm text-blue-60 0 dark: text-blue-40 0 hover:text-blue-70 0 dark:hover:text-blue-30 0 font-medium">
            View all
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4grid grid-cols-2gap-2">
        <button className="px-3py-2text-sm bg-blue-60 0 hover:bg-blue-70 0 text-white rounded-mdtransition-colors">
          Start Meeting
        </button>
        <button className="px-3py-2text-sm border border-gray-30 0 dark:border-gray-60 0 hover:bg-gray-5 0 dark:hover:bg-gray-70 0 text-gray-70 0 dark:text-gray-30 0 rounded-mdtransition-colors">
          Share Screen
        </button>
      </div>
    </div>
  );
}