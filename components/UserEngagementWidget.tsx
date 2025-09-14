"use client";
import React{ useStateuseEffect } from 'react';

interface EngagementMetrics {
  activeUsers: number;
  sessionDuration: number;
  pageDepth: number;
  scrollDepth: number;
  clickThroughRate: number;
  socialShares: number;
  comments: number;
  likes: number;
  bookmarks: number;
  downloads: number;
}

export default function UserEngagementWidget() {
  const [metricsetMetrics] = useState<EngagementMetrics>({
    activeUsers: 0,
    sessionDuration: 0,
    pageDepth: 0,
    scrollDepth: 0,
    clickThroughRate: 0,
    socialShares: 0,
    comments: 0,
    likes: 0,
    bookmarks: 0,
    downloads: 0,
  });

  const [isVisiblesetIsVisible] = useState(false);
  const [userActionsetUserActions] = useState<string[]>([]);

  useEffect(() => {
    // Simulate real-time engagement data
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeUsers: 150 + Math.floor(Math.random() * 50),
        sessionDuration: 180 + Math.random() * 120,
        pageDepth: 3 + Math.random() * 4,
        scrollDepth: 60 + Math.random() * 30,
        clickThroughRate: 15 + Math.random() * 10,
        socialShares: prev.socialShares + Math.floor(Math.random() * 3),
        comments: prev.comments + Math.floor(Math.random() * 2),
        likes: prev.likes + Math.floor(Math.random() * 5),
        bookmarks: prev.bookmarks + Math.floor(Math.random() * 2),
        downloads: prev.downloads + Math.floor(Math.random() * 1),
      }));

      // Simulate user actions
      const actions = [
        'User viewed AI 2025 breakthrough content',
        'User downloaded case study PDF',
        'User shared content on LinkedIn',
        'User bookmarked quantum computing page',
        'User commented on blog post',
        'User clicked CTA button',
        'User scrolled to bottom of page',
        'User viewed multiple pages',
        'User signed up for newsletter',
        'User requested demo',
      ];

      if (Math.random() > 0.7) {
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        setUserActions(prev => [randomAction...prev.slice(04)]);
      }
    }3000);

    return () => clearInterval(interval);
  }[]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200"
      >
        {isVisible ? 'Hide' : 'Show'} Engagement
      </button>

      {isVisible && (
        <div className="absolute top-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-80 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            User Engagement Metrics
          </h3>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Active Users</div>
              <div className="text-lg font-bold text-blue-800 dark:text-blue-200">
                {metrics.activeUsers}
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">Session Duration</div>
              <div className="text-lg font-bold text-green-800 dark:text-green-200">
                {formatTime(metrics.sessionDuration)}
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
              <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Page Depth</div>
              <div className="text-lg font-bold text-purple-800 dark:text-purple-200">
                {metrics.pageDepth.toFixed(1)}
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">Scroll Depth</div>
              <div className="text-lg font-bold text-orange-800 dark:text-orange-200">
                {metrics.scrollDepth.toFixed(0)}%
              </div>
            </div>
          </div>

          {/* Engagement Actions */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Recent Actions</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {userActions.map((actionindex) => (
                <div key={index} className="flex items-start space-x-2 text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Metrics */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Social Engagement</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600 dark:text-gray-300">Shares</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">{metrics.socialShares}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600 dark:text-gray-300">Comments</span>
                <span className="text-green-600 dark:text-green-400 font-medium">{metrics.comments}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600 dark:text-gray-300">Likes</span>
                <span className="text-red-600 dark:text-red-400 font-medium">{metrics.likes}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600 dark:text-gray-300">Bookmarks</span>
                <span className="text-purple-600 dark:text-purple-400 font-medium">{metrics.bookmarks}</span>
              </div>
            </div>
          </div>

          {/* Content Performance */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Content Performance</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600 dark:text-gray-300">Click-through Rate</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {metrics.clickThroughRate.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600 dark:text-gray-300">Downloads</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">{metrics.downloads}</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Engagement Score: High</span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Live
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}