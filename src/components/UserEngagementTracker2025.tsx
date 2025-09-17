import React, { useState, useEffect } from 'react';

interface EngagementData {
  activeUsers: number;
  pageViews: number;
  sessionDuration: number;
  bounceRate: number;
  scrollDepth: number;
  clickThroughRate: number;
  formSubmissions: number;
  videoPlays: number;
  downloads: number;
  socialShares: number;
  heatmapData: Array<{ x: number; y: number; intensity: number }>;
  userJourney: Array<{ page: string; timestamp: number; duration: number }>;
  deviceBreakdown: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  browserBreakdown: {
    chrome: number;
    firefox: number;
    safari: number;
    edge: number;
  };
  geographicData: Array<{ country: string; users: number }>;
  timeOnSite: number;
  returningUsers: number;
  newUsers: number;
}

const UserEngagementTracker2025: React.FC = () => {
  const [data, setData] = useState<EngagementData>({
    activeUsers: 0,
    pageViews: 0,
    sessionDuration: 0,
    bounceRate: 0,
    scrollDepth: 0,
    clickThroughRate: 0,
    formSubmissions: 0,
    videoPlays: 0,
    downloads: 0,
    socialShares: 0,
    heatmapData: [],
    userJourney: [],
    deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 },
    browserBreakdown: { chrome: 0, firefox: 0, safari: 0, edge: 0 },
    geographicData: [],
    timeOnSite: 0,
    returningUsers: 0,
    newUsers: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('overview');

  useEffect(() => {
    // Simulate real-time engagement tracking
    const interval = setInterval(() => {
      setData(prev => ({
        activeUsers: Math.floor(Math.random() * 100) + 50,
        pageViews: Math.floor(Math.random() * 1000) + 500,
        sessionDuration: Math.random() * 600 + 120,
        bounceRate: Math.random() * 30 + 20,
        scrollDepth: Math.random() * 100,
        clickThroughRate: Math.random() * 10 + 2,
        formSubmissions: Math.floor(Math.random() * 50) + 10,
        videoPlays: Math.floor(Math.random() * 200) + 50,
        downloads: Math.floor(Math.random() * 100) + 20,
        socialShares: Math.floor(Math.random() * 50) + 10,
        heatmapData: Array.from({ length: 20 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          intensity: Math.random()
        })),
        userJourney: [
          { page: '/', timestamp: Date.now() - 300000, duration: 120 },
          { page: '/revolutionary-tech-breakthrough-2025', timestamp: Date.now() - 180000, duration: 180 },
          { page: '/interactive-tech-showcase', timestamp: Date.now() - 60000, duration: 60 }
        ],
        deviceBreakdown: {
          desktop: Math.random() * 40 + 30,
          mobile: Math.random() * 30 + 40,
          tablet: Math.random() * 20 + 10
        },
        browserBreakdown: {
          chrome: Math.random() * 30 + 50,
          firefox: Math.random() * 15 + 10,
          safari: Math.random() * 20 + 15,
          edge: Math.random() * 10 + 5
        },
        geographicData: [
          { country: 'United States', users: Math.floor(Math.random() * 100) + 200 },
          { country: 'United Kingdom', users: Math.floor(Math.random() * 50) + 100 },
          { country: 'Canada', users: Math.floor(Math.random() * 40) + 80 },
          { country: 'Germany', users: Math.floor(Math.random() * 30) + 60 },
          { country: 'Australia', users: Math.floor(Math.random() * 25) + 50 }
        ],
        timeOnSite: Math.random() * 300 + 120,
        returningUsers: Math.floor(Math.random() * 200) + 100,
        newUsers: Math.floor(Math.random() * 150) + 50
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getEngagementColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value >= thresholds.good) return 'text-green-500';
    if (value >= thresholds.warning) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isVisible) {
    return (
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          👥 Engagement
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-4 z-50 w-96 bg-white rounded-lg shadow-2xl border border-gray-200">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-t-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">👥 User Engagement Tracker 2025</h3>
          <div className="flex items-center space-x-2">
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="bg-white/20 text-white border border-white/30 rounded px-2 py-1 text-sm"
            >
              <option value="overview">Overview</option>
              <option value="behavior">Behavior</option>
              <option value="demographics">Demographics</option>
              <option value="journey">User Journey</option>
            </select>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
        {/* Real-time indicator */}
        <div className="flex items-center space-x-2 text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">{data.activeUsers} active users</span>
        </div>

        {selectedMetric === 'overview' && (
          <>
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600">{formatNumber(data.pageViews)}</div>
                <div className="text-sm text-gray-600">Page Views</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">{formatTime(data.sessionDuration)}</div>
                <div className="text-sm text-gray-600">Avg Session</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-600">{data.bounceRate.toFixed(1)}%</div>
                <div className="text-sm text-gray-600">Bounce Rate</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-600">{data.scrollDepth.toFixed(0)}%</div>
                <div className="text-sm text-gray-600">Scroll Depth</div>
              </div>
            </div>

            {/* Engagement Actions */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">🎯 Engagement Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="text-lg font-bold text-blue-600">{data.formSubmissions}</div>
                  <div className="text-xs text-gray-600">Form Submissions</div>
                </div>
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="text-lg font-bold text-green-600">{data.videoPlays}</div>
                  <div className="text-xs text-gray-600">Video Plays</div>
                </div>
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="text-lg font-bold text-purple-600">{data.downloads}</div>
                  <div className="text-xs text-gray-600">Downloads</div>
                </div>
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="text-lg font-bold text-orange-600">{data.socialShares}</div>
                  <div className="text-xs text-gray-600">Social Shares</div>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedMetric === 'behavior' && (
          <>
            {/* Behavior Metrics */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-700">📊 Behavior Analysis</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Click Through Rate</span>
                  <span className={`text-sm font-bold ${getEngagementColor(data.clickThroughRate, { good: 5, warning: 3 })}`}>
                    {data.clickThroughRate.toFixed(2)}%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Time on Site</span>
                  <span className="text-sm font-bold text-blue-600">{formatTime(data.timeOnSite)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Returning Users</span>
                  <span className="text-sm font-bold text-green-600">{formatNumber(data.returningUsers)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">New Users</span>
                  <span className="text-sm font-bold text-purple-600">{formatNumber(data.newUsers)}</span>
                </div>
              </div>
            </div>

            {/* Heatmap Visualization */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-700">🔥 Click Heatmap</h4>
              <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                {data.heatmapData.map((point, index) => (
                  <div
                    key={index}
                    className="absolute w-2 h-2 bg-red-500 rounded-full opacity-50"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      opacity: point.intensity
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </>
        )}

        {selectedMetric === 'demographics' && (
          <>
            {/* Device Breakdown */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-700">📱 Device Breakdown</h4>
              <div className="space-y-2">
                {Object.entries(data.deviceBreakdown).map(([device, percentage]) => (
                  <div key={device} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 capitalize">{device}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-blue-600 w-8">{percentage.toFixed(0)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Browser Breakdown */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-700">🌐 Browser Breakdown</h4>
              <div className="space-y-2">
                {Object.entries(data.browserBreakdown).map(([browser, percentage]) => (
                  <div key={browser} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 capitalize">{browser}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-green-600 w-8">{percentage.toFixed(0)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geographic Data */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-700">🌍 Top Countries</h4>
              <div className="space-y-2">
                {data.geographicData.map((country, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{country.country}</span>
                    <span className="text-sm font-medium text-orange-600">{formatNumber(country.users)}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {selectedMetric === 'journey' && (
          <>
            {/* User Journey */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-700">🛤️ User Journey</h4>
              <div className="space-y-2">
                {data.userJourney.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{step.page}</div>
                      <div className="text-xs text-gray-500">{formatTime(step.duration)} duration</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-orange-500 text-white px-3 py-2 rounded text-sm hover:bg-orange-600 transition-colors">
            Export Data
          </button>
          <button className="flex-1 bg-red-500 text-white px-3 py-2 rounded text-sm hover:bg-red-600 transition-colors">
            Generate Report
          </button>
          <button className="flex-1 bg-purple-500 text-white px-3 py-2 rounded text-sm hover:bg-purple-600 transition-colors">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserEngagementTracker2025;