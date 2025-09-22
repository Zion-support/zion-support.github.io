'use client'

import { useEffect, useState } from 'react'
import { BarChart3, TrendingUp, Users, Eye, MousePointer } from 'lucide-react'

interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  bounceRate: number
  avgSessionDuration: number
  topPages: Array<{ path: string; views: number }>
  realTimeUsers: number
}

export default function AdvancedAnalytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    realTimeUsers: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate analytics data fetching
    const fetchAnalytics = async () => {
      setIsLoading(true)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock analytics data
      const mockData: AnalyticsData = {
        pageViews: Math.floor(Math.random() * 10000) + 5000,
        uniqueVisitors: Math.floor(Math.random() * 3000) + 1500,
        bounceRate: Math.random() * 30 + 20,
        avgSessionDuration: Math.random() * 300 + 120,
        topPages: [
          { path: '/', views: Math.floor(Math.random() * 1000) + 500 },
          { path: '/services', views: Math.floor(Math.random() * 800) + 300 },
          { path: '/about', views: Math.floor(Math.random() * 600) + 200 },
          { path: '/contact', views: Math.floor(Math.random() * 400) + 150 },
          { path: '/portfolio', views: Math.floor(Math.random() * 300) + 100 }
        ],
        realTimeUsers: Math.floor(Math.random() * 50) + 10
      }
      
      setAnalytics(mockData)
      setIsLoading(false)
    }

    fetchAnalytics()
    
    // Update real-time users every 30 seconds
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        ...prev,
        realTimeUsers: Math.floor(Math.random() * 50) + 10
      }))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num)
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}m ${secs}s`
  }

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800 rounded-2xl shadow-2xl p-8 border border-white/20">
        <div className="animate-pulse">
          <div className="h-8 bg-white/10 rounded-lg mb-6 w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-6">
                <div className="h-4 bg-white/20 rounded mb-2"></div>
                <div className="h-8 bg-white/20 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800 rounded-2xl shadow-2xl p-8 border border-white/20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <BarChart3 className="w-8 h-8 mr-3 text-blue-400" />
          Advanced Analytics
        </h2>
        <div className="flex items-center text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
          <span className="text-sm font-medium">Live</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <Eye className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-300">Page Views</span>
          </div>
          <div className="text-2xl font-bold text-white">{formatNumber(analytics.pageViews)}</div>
          <div className="text-xs text-green-400 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            +12.5%
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-300">Unique Visitors</span>
          </div>
          <div className="text-2xl font-bold text-white">{formatNumber(analytics.uniqueVisitors)}</div>
          <div className="text-xs text-green-400 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            +8.2%
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <MousePointer className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-300">Bounce Rate</span>
          </div>
          <div className="text-2xl font-bold text-white">{analytics.bounceRate.toFixed(1)}%</div>
          <div className="text-xs text-red-400 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1 rotate-180" />
            +2.1%
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <BarChart3 className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-300">Avg. Session</span>
          </div>
          <div className="text-2xl font-bold text-white">{formatDuration(analytics.avgSessionDuration)}</div>
          <div className="text-xs text-green-400 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            +5.3%
          </div>
        </div>
      </div>

      {/* Real-time Users */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Real-time Activity</h3>
          <div className="flex items-center text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium">{analytics.realTimeUsers} users online</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{analytics.realTimeUsers}</div>
            <div className="text-sm text-gray-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{Math.floor(analytics.realTimeUsers * 0.7)}</div>
            <div className="text-sm text-gray-300">Page Views (5m)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{Math.floor(analytics.realTimeUsers * 0.3)}</div>
            <div className="text-sm text-gray-300">Events (5m)</div>
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Top Pages</h3>
        <div className="space-y-3">
          {analytics.topPages.map((page, index) => (
            <div key={page.path} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                  {index + 1}
                </div>
                <span className="text-gray-300 font-medium">{page.path}</span>
              </div>
              <div className="flex items-center">
                <div className="w-24 bg-gray-600 rounded-full h-2 mr-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${(page.views / analytics.topPages[0].views) * 100}%` }}
                  ></div>
                </div>
                <span className="text-white font-semibold">{formatNumber(page.views)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}