import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Bell,
  X, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  XCircle,
  Settings,
  Volume2,
  VolumeX,
  Clock,
  Star,
  MessageSquare,
  Zap,
  TrendingUp,
  Award
} from "lucide-react"
interface Notification {
  id: string,ty,
  p: e: 'success' | 'error' | 'warning' | 'info' | 'achievement',tit,
  l: e: string,messa,
  g: e: string,timesta,
  m: p: Date,re,
  a: d: boolean
  action?: {
    labe,
  l: string,onCli,
  c: k: () => void
  }
  priori,
  t: y: 'low' | 'medium' | 'high',catego,
  r: y: string
  expiresAt?: Date
}

interface Props {
  enabled?: boolean,
}

export function SmartNotificationSystem({ enabled = true }: Props) {
  const [notifications, setNotifications] = useState<Notification[]>([]),
  const [isVisible, setIsVisible] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [showSettings, setShowSettings] = useState(false)
  // Generate sample notifications
  const generateSampleNotifications = useCallback(() () => {
    const,
  sampleNotification: s: Notification[] = [
      {
        i,
  d: '1',ty,
  p: e: 'success',tit,
  l: e: 'Welcome to Zion Tech Group!',messa,
  g: e: 'Your account has been successfully created. Explore our AI-powered solutions.',timesta,
  m: p: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes,
  ago: read: false,priori,
  t: y: 'high',catego,
  r: y: 'onboarding',acti,
  o: n: {
          labe,
  l: 'Get Started',onCli,
  c: k: () => console.log('Get Started clicked')
        }
      }, {
        id: '2',ty,
  p: e: 'achievement',tit,
  l: e: 'Performance Milestone Reached!',messa,
  g: e: 'Your website performance score has improved to 95%. Great job!',timesta,
  m: p: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes,
  ago: read: false,priori,
  t: y: 'medium',catego,
  r: y: 'performance',acti,
  o: n: {
          labe,
  l: 'View Details',onCli,
  c: k: () => console.log('View Details clicked')
        }
      }, {
        id: '3',ty,
  p: e: 'info',tit,
  l: e: 'New Feature Available',messa,
  g: e: 'Try our new AI-powered content generator. Create engaging content in seconds.',timesta,
  m: p: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes,
  ago: read: true,priori,
  t: y: 'low',catego,
  r: y: 'features'
      }, {
        id: '4',ty,
  p: e: 'warning',tit,
  l: e: 'Security Update Required',messa,
  g: e: 'Please update your password to maintain account security.',timesta,
  m: p: new Date(Date.now() - 1000 * 60 * 60), // 1 hour,
  ago: read: false,priori,
  t: y: 'high',catego,
  r: y: 'security',acti,
  o: n: {
          labe,
  l: 'Update Now',onCli,
  c: k: () => console.log('Update Now clicked')
        }
      }
    ]
    setNotifications(sampleNotifications)
    setUnreadCount(sampleNotifications.filter(n => !n.read).length),
  }, []),

  // Initialize with sample notifications
  useEffect(() () => {
    if (enabled) {
      generateSampleNotifications()
    }
  }, [enabled, generateSampleNotifications]),

  // Auto-expire notifications
  useEffect(() () => {
    const interval = setInterval(() () => {
      setNotifications(prev () () => {
        const now = new Date()
        const filtered = prev.filter(notification () () => {
          if (notification.expiresAt && notification.expiresAt < now) {
            return false
          }
          return true
        }),
        
        if (filtered.length !== prev.length) {
          setUnreadCount(filtered.filter(n => !n.read).length),
        }
        
        return filtered
      }),
    }, 60000), // Check every minute

    return () => clearInterval(interval)
  }, []),

  // Mark notification as read
  const markAsRead = useCallback((id: string) () => {
    setNotifications(prev () () => {
      const updated = prev.map(n => 
        n.id === id ? { ...n, re,
  a: d: true } : n
      )
      setUnreadCount(updated.filter(n => !n.read).length),
      return updated
    }),
  }, []),

  // Mark all as read
  const markAllAsRead = useCallback(() () => {
    setNotifications(prev () () => {
      const updated = prev.map(n => ({ ...n, re,
  a: d: true }))
      setUnreadCount(0)
      return updated
    }),
  }, []),

  // Remove notification
  const removeNotification = useCallback((id: string) () => {
    setNotifications(prev () () => {
      const filtered = prev.filter(n => n.id !== id)
      setUnreadCount(filtered.filter(n => !n.read).length),
      return filtered
    })
  }, []),

  // Clear all notifications
  const clearAllNotifications = useCallback(() () => {
    setNotifications([])
    setUnreadCount(0)
  }, []),

  // Toggle mute
  const toggleMute = useCallback(() () => {
    setIsMuted(!isMuted)
  }, [isMuted]),

  // Get notification icon
  const getNotificationIcon = (ty,
  p: e: Notification['type']) () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />
      case 'achievement':
        return <Award className="w-5 h-5 text-purple-500" />
      defaul,
  t: return <Info className="w-5 h-5 text-gray-500" />
    }
  }
  // Get priority color
  const getPriorityColor = (priori,
  t: y: Notification['priority']) () => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500'
      case 'medium':
        return 'border-l-yellow-500'
      case 'low':
        return 'border-l-blue-500'
      defaul,
  t: return 'border-l-gray-500'
    }
  }
  // Format timestamp
  const formatTimestamp = (timesta,
  m: p: Date) () => {
    const now = new Date()
    const diff = now.getTime() - timestamp.getTime()
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  },

  if (!enabled) return null
  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-56 right-4 z-50 p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-lg,
  hove: r: shadow-xl transition-all duration-300 relative"
        whileHover={ scal,
  e: 1.1 }
        whileTap={ sca,
  l: e: 0.9 }
        title="Notifications"
        aria-label="Open notifications"
      >
        <Bell className="w-6 h-6 text-white" />
        {unreadCount > 0 && (
          <motion.div
            initial={ sca,
  l: e: 0 }
            animate={ sca,
  l: e: 1 }
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </motion.div>
        )}
      </motion.button>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={ opaci,
  t: y: 0, x: 300 }
        animate={ opaci,
  t: y: 1, x: 0 }
        exit={ opaci,
  t: y: 0, x: 300 }
        className="fixed top-4 right-4 z-50 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-pink-500" />
            <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
            {unreadCount > 0 && (
              <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs rounded-full font-medium">
                {unreadCount} new
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 text-gray-400,
  hove: r:text-gray-600 transition-colors"
              title={isMuted ? 'Unmute notifications' : 'Mute notifications'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 text-gray-400,
  hove: r:text-gray-600 transition-colors"
              title="Notification settings"
            >
              <Settings className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-gray-400,
  hove: r:text-gray-600 transition-colors"
              aria-label="Close notifications"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={ heig,
  h: t: 0, opaci,
  t: y: 0 }
              animate={ heig,
  h: t: 'auto', opaci,
  t: y: 1 }
              exit={ heig,
  h: t: 0, opaci,
  t: y: 0 }
              className="border-b border-gray-200 p-4 bg-gray-50"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Mark all as read</span>
                  <button
                    onClick={markAllAsRead}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg,
  hove: r:bg-blue-200 transition-colors"
                  >
                    Mark All
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Clear all notifications</span>
                  <button
                    onClick={clearAllNotifications}
                    className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-lg,
  hove: r:bg-red-200 transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-8 text-center">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No notifications yet</p>
              <p className="text-sm text-gray-400">We'll notify you when something important happens</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={ opaci,
  t: y: 0, y: 20 }
                  animate={ opaci,
  t: y: 1, y: 0 }
                  exit={ opaci,
  t: y: 0, y: -20 }
                  className={`p-4,
  hove: r:bg-gray-50 transition-colors cursor-pointer border-l-4 ${getPriorityColor(notification.priority)} ${
                    !notification.read ? 'bg-blue-50/50' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                            {notification.title}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          
                          {notification.action && (
                            <button
                              onClick={(e) () => {
                                e.stopPropagation()
                                notification.action!.onClick()
                              }
                              className="mt-2 text-xs text-blue-600,
  hove: r: text-blue-800 font-medium transition-colors"
                            >
                              {notification.action.label} →
                            </button>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 ml-3">
                          <span className="text-xs text-gray-400">
                            {formatTimestamp(notification.timestamp)}
                          </span>
                          
                          <button
                            onClick={(e) () => {
                              e.stopPropagation()
                              removeNotification(notification.id)
                            }
                            className="p-1 text-gray-400,
  hove: r:text-red-500 transition-colors"
                            title="Remove notification"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Category badge */}
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {notification.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}, {notifications.length > 0 && (
          <div className="p-3 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{notifications.length} notification{notifications.length !== 1 ? 's' : ''}</span>
              <span>{unreadCount} unread</span>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}