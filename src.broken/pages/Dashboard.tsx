import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CommunityDiscussion } from "@/components/CommunityDiscussion",
import { Badge } from "@/components/ui/badge",
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings, FileText, Heart, Key, ShoppingBag } from 'lucide-react'
import { useGetOrdersQuery } from '@/hooks/useOrders',
import { useFavorites } from '@/hooks/useFavorites',
import { useToast } from "@/hooks/use-toast",
import { Link } from "react-router-dom",

 from 'lucide - react',

  const stats = [icon: <TrendingUp className="h-6 w-6 text-orange -500" />
    },
  ],

  const recentProjects = [{
      id: 1,
      name: "AI Chatbot Development",
      status: "In Progress",
      progress: 75,
      dueDate: "2024 - 02 - 15",
      priority: "High"
    },
    {
      id: 2,
      name: "Cybersecurity Audit",
      status: "Completed",
      progress: 100,
      dueDate: "2024 - 01 - 30",
      priority: "Medium"
    },
    {
      id: 3,
      name: "Cloud Migration",
      status: "Planning",
      progress: 25,
      dueDate: "2024 - 03 - 01",
      priority: "High"
    },
    {
      id: 4,
      name: "Mobile App Development",
      status: "In Progress",
      progress: 60,
      dueDate: "2024 - 02 - 28",
      priority: "Medium"
    },
  ],

  const notifications = [{
      id: 1,
      title: "New project assigned",
      message: "You have been assigned to the AI Chatbot project",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      title: "Meeting reminder",
      message: "Team standup meeting in 30 minutes",
      time: "4 hours ago",
      read: false
    },
    {
      id: 3,
      title: "System update",
      message: "Scheduled maintenance completed successfully",
      time: "1 day ago",
      read: true
    },
  ],

  const quickActions = [{
      title: "Create Project",
      description: "Start a new project",
      icon: <FileText className="h-8 w-8 text-zion -cyan" />,
      color: "bg-zion - cyan / 10 border-zion - cyan / 20"
    },
    {
      title: "Schedule Meeting",
      description: "Book a team meeting",
      icon: <Calendar className="h-8 w-8 text-zion -purple" />,
      color: "bg-zion - purple / 10 border-zion - purple / 20"
    },
    {
      title: "Generate Report",
      description: "Create analytics report",
      icon: <BarChart3 className="h-8 w-8 text-zion -cyan" />,
      color: "bg-zion - cyan / 10 border-zion - cyan / 20"
    },
    {
      title: "Support Ticket",
      description: "Submit support request",
      icon: <MessageSquare className="h-8 w-8 text-zion -purple" />,
      color: "bg-zion - purple / 10 border-zion - purple / 20"
    }
    { name: 'Active Services', value: '12', icon: Zap, change: '+2', changeType: 'positive', color: 'from - blue - 500 to - cyan - 500' },
    { name: 'AI Solutions', value: '8', icon: Brain, change: '+3', changeType: 'positive', color: 'from - purple - 500 to - pink - 500' },
    { name: 'Cloud Services', value: '5', icon: Cloud, change: '+1', changeType: 'positive', color: 'from - indigo - 500 to - blue - 500' },
    { name: 'Security Score', value: '98%', icon: Shield, change: '+2%', changeType: 'positive', color: 'from - green - 500 to - emerald - 500' },
    { name: 'Monthly Usage', value: '2.4TB', icon: Database, change: '+15%', changeType: 'positive', color: 'from - orange - 500 to - red - 500' },
    { name: 'Response Time', value: '45ms', icon: Activity, change: '-12ms', changeType: 'negative', color: 'from - teal - 500 to - green - 500' },
  ],

  const recentServices = [,
    { name: 'AI Business Intelligence', status: 'Active', lastUsed: '2 hours ago', usage: '85%', icon: Brain, color: 'from - blue - 500 to - indigo - 500' },
    { name: 'Cloud DevOps Platform', status: 'Active', lastUsed: '1 day ago', usage: '92%', icon: Cloud, color: 'from - indigo - 500 to - blue - 500' },
    { name: 'AI Cybersecurity Suite', status: 'Active', lastUsed: '3 days ago', usage: '78%', icon: Shield, color: 'from - red - 500 to - orange - 500' },
    { name: 'Quantum Computing Lab', status: 'Active', lastUsed: '1 week ago', usage: '45%', icon: Atom, color: 'from - purple - 500 to - indigo - 500' },
    { name: 'IoT Edge Platform', status: 'Active', lastUsed: '2 weeks ago', usage: '67%', icon: Network, color: 'from - cyan - 500 to - blue - 500' },
  ],

  const upcomingEvents = [,
    { title: 'AI Strategy Workshop', date: 'Dec 15, 2024', time: '10:00 AM', type: 'Workshop', icon: Brain },
    { title: 'Security Audit Review', date: 'Dec 18, 2024', time: '2:00 PM', type: 'Review', icon: Shield },
    { title: 'Cloud Migration Planning', date: 'Dec 22, 2024', time: '11:00 AM', type: 'Planning', icon: Cloud },
    { title: 'Quantum Computing Demo', date: 'Dec 25, 2024', time: '3:00 PM', type: 'Demo', icon: Atom },
  ],

  const handleTestNotification = async () => {
    if (!user || !user.id) {
      toast({ title: "Error", description: "User ID not found.", variant: "destructive" }),
      return,
    }
    const result = await createTestNotification(user.id),
    if (result.success) {
      toast({
        title: "Test notification created",
        description: "Check your notification center"
      }),
    } else {
      toast({
        title: "Error creating test notification",
        description: "Something went wrong",
        variant: "destructive"
      }),
    }
  },

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - User Profile */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {(user.displayName || 'User').split(' ').map(name => name[0]).join('')}
                  </div>
                  <h2 className="text-xl font-bold text-white">{user.displayName || 'User'}</h2>
                  <p className="text-zion-slate-light mb-2">{user.email}</p>
                  
                  <Badge 
                    className="bg-zion-purple text-white mb-4"
                  >
                    {user.userType ? user.userType.charAt(0).toUpperCase() + user.userType.slice(1) : "New User"}
                  </Badge>
                  
                  <Button
                    id="profile-link"
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    onClick={() => window.location.href = "/profile"}
                  >
                    <UserCheck size={16} />
                    Edit Profile
                  </Button>
                </div>
              </div>
              
              {/* Stats & Metrics */}
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-4">Your Activity</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Profile Completion</span>
                    <span className="text-zion-cyan font-medium">65%</span>
                  </div>
                  <div className="w-full bg-zion-blue rounded-full h-2">
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Community Points</span>
                    <span className="text-zion-cyan font-medium">125</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">ZION$ Balance</span>
                    <span className="text-zion-cyan font-medium">
                      <Link href="/wallet" className="hover:underline">View Wallet</Link>
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Badges Earned</span>
                    <span className="text-zion-cyan font-medium">3/12</span>
                  </div>
                  
                  {/* Test notification buttons */}
                  <div className="flex flex-col gap-2 mt-4">
                    <Button 
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={handleTestNotification}
                    >
                      <Send size={16} className="text-zion-cyan" />
                      Send Test Notification
                    </Button>

                    <Button 
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={async () => {
                        if (!user || !user.id) {
                          toast({ title: "Error", description: "User ID not found.", variant: "destructive" }),
                          return,
                        }
                        await createOnboardingNotification({
                          userId: user.id,
                          missingMilestone: 'profile_completed',
                          userRole: user.userType === 'employer' || user.userType === 'buyer' ? 'client' : 'talent'
                        }),
                        toast({
                          title: "Onboarding notification sent",
                          description: "Check your notification center"
                        }),
                      }}
                    >
                      <Settings size={16} className="text-zion-purple" />
                      Send Onboarding Nudge
                    </Button>

                    <Button 
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={async () => {
                        if (!user || !user.id) {
                          toast({ title: "Error", description: "User ID not found.", variant: "destructive" }),
                          return,
                        }
                        await createSystemNotification({
                          userId: user.id,
                          title: "New Feature Available!",
                          message: "We've added a new notification center to help you stay updated with important information.",
                          actionUrl: "/notifications",
                          actionText: "Explore Now"
                        }),
                        toast({
                          title: "System notification sent",
                          description: "Check your notification center"
                        }),
                      }}
                    >
                      <Bell size={16} className="text-yellow-500" />
                      Send System Alert
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Notifications */}
              <div className="bg-zion-blue-dark rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Bell size={18} className="mr-2 text-zion-cyan" />
                  Recent Notifications
                </h3>
                <div className="space-y-4">
                  <Link href="/notifications" className="block" id="notifications-link">
                    <Button variant="outline" className="w-full">
                      <Bell className="mr-2 h-4 w-4" />
                      View All Notifications
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Content - Dashboard */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                  <div className="flex items-center gap-2">
                    <NotificationBell />
                    <Button 
                      variant="outline" 
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white"
                      onClick={logout}
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">Welcome, {(user.displayName || 'User').split(' ')[0]}</h3>
                    <p className="text-zion-slate-light mt-1">Your journey on Zion has just begun!</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">Getting Started</h3>
                    <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features.</p>
                  </div>
                </div>
                <div className={`p - 3 rounded-lg bg-gradient - to - r ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>) ) }
        </div > initial = {
  { opacity: 0,
  x: -20

}}
              animate = {
  { opacity: 1,
  x: 0

}}
              transition = {
  { duration: 0.5,
  delay: 0.4

}}
            >
              <div className="flex items - center justify - between mb-6">
                <h2 className="text-xl font - semibold text-white">Recent Projects</h2>
                <button     className="text-zion - cyan hover:text-zion - cyan - light text-sm font -medium">
                  View All
                </button>
              </div>

              <div className="space - y-4">
                {recentServices.map((service, index) => (<motion.div
                    key={service.name}
                    initial = {
  { opacity: 0,
  x: -20

}}
                    animate = {
  { opacity: 1,
  x: 0

}}
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap-8">
          {/* Recent Services */}
          <div className="lg:col - span -2">
            <div className="bg-white rounded-xl shadow-sm border border-gray - 200 p -6">
              <div className="flex items - center justify - between mb-6">
                <h2 className="text-xl font - semibold text-gray -900">Recent Services</h2>
                <button     className="text-blue - 600 hover:text-blue - 700 text-sm font - medium flex items -center">
                  View All < ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              <div className="space - y-4">
                {recentServices.map((service, index) => (<motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items - center p - 4 rounded-lg border border-gray - 100 hover:border-gray - 200 transition -colors"
                  >
                    <div className={`p - 2 rounded-lg bg-gradient - to - r ${service.color} mr-4`}>
                      <service.icon className="h-5 w-5 text-white" />
                    </div > initial = {
  { opacity: 0,
  x: 20

}}
              animate = {
  { opacity: 1,
  x: 0

}}
              transition = {
  { duration: 0.5,
  delay: 0.6

}}
            >
              <h2 className="text-xl font - semibold text-white mb-4">Quick Actions</h2>
              <div className="grid grid - cols - 2 gap-3">
                {quickActions.map((action, index) => (<motion.button
                    key={action.name}
                    initial = {
  { opacity: 0,
  scale: 0.9

}}
                    animate = {
  { opacity: 1,
  scale: 1

}}
                    transition={{ delay: index * 0.1 }}
                    className={`p - 3 rounded-lg bg-gradient - to - r ${action.color} text-white text-sm font - medium hover:shadow-lg transition - shadow flex flex - col items - center`}
                  >
                    <div className="mb-2">{action.icon}</div>
                    <h3 className="font - medium text-white text-sm mb-1">{action.title}</h3>
                    <p className="text-zion - slate - light text-xs">{action.description}</p>
                  </button>) ) }
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              className="bg-zion - blue - dark border border-zion - purple / 20 rounded-lg p -6",
              initial = {
  { opacity: 0,
  x: 20

}}
              animate = {
  { opacity: 1,
  x: 0

}}
              transition = {
  { duration: 0.5,
  delay: 0.8

}}
            >
              <h2 className="text-xl font - semibold text-white mb-4">Notifications</h2>
              <div className="space - y-3">
                    <div className="flex -1">
                      <h3 className="font - medium text-gray -900">{service.name}</h3>
                      <div className="flex items - center mt-1 space - x-4 text-sm text-gray -500">
                        <span className="flex items -center">
                          <CheckCircle className="h-4 w-4 text-green - 500 mr-1" />
                          {service.status}
                        </span>
                        <span>{service.lastUsed}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font - medium text-gray -900">{service.usage}</div>
                      <div className="w-20 bg-gray - 200 rounded-full h-2 mt-1">
                        <div
                          className="bg-gradient - to - r from - blue - 500 to - purple - 500 h-2 rounded-full"
                          style={{ width: service.usage }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>) ) }
              </div>
            </div>
          </div>

          {/* Quick Actions & Events */}
          <div className="space - y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray - 200 p -6">
              <h3 className="text-lg font - semibold text-gray - 900 mb-4">Quick Actions</h3>
              <div className="grid grid - cols - 2 gap-3">
                {quickActions.map((action, index) => (<motion.button
                    key={action.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p - 3 rounded-lg bg-gradient - to - r ${action.color} text-white text-sm font - medium hover:shadow-lg transition - shadow flex flex - col items - center`}
                  >
                    <action.icon className="h-5 w-5 mb-1" />
                    {action.name}
                  </motion.button>) ) }
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray - 200 p -6">
              <h3 className="text-lg font - semibold text-gray - 900 mb-4">Upcoming Events</h3>
              <div className="space - y-3">
                {upcomingEvents.map((event, index) => (<motion.div
                    key={event.title}
                    initial = {
  { opacity: 0,
  y: 10

}}
                    animate = {
  { opacity: 1,
  y: 0

}}
                    transition={{ delay: index * 0.1 }}
                    className="flex items - start p - 3 rounded-lg border border-gray - 100 hover:border-gray - 200 transition -colors"
                  >
                    <div className="p - 2 rounded-lg bg-blue - 100 mr-3">
                      <event.icon className="h-4 w-4 text-blue -600" />
                    </div>
                    <div className="flex -1">
                      <h4 className="text-sm font - medium text-gray -900">{event.title}</h4>
                      <div className="flex items - center mt-1 text-xs text-gray - 500 space - x-2">
                        <span className="flex items -center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {event.date}
                        </span>
                        <span>{event.time}</span>
                        <span className="px-2 py-1 bg-blue - 100 text-blue - 700 rounded-full text-xs">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </motion.div>) ) }
              </div > initial = {
  { opacity: 0,
  x: 20

}}
              animate = {
  { opacity: 1,
  x: 0

}}
              transition = {
  { duration: 0.5,
  delay: 1

}}
            >
              <h2 className="text-xl font - semibold text-white mb-4">System Status</h2>
              <div className="space - y-3">
                <div className="flex items - center justify -between">
                  <span className="text-zion - slate -light">API Status</span>
                  <div className="flex items - center gap-2">
                    <div className="w-2 h-2 bg-green - 500 rounded-full"></div>
                    <span className="text-green - 400 text-sm">Operational</span>
                  </div>
                </div>
                <div className="flex items - center justify -between">
                  <span className="text-zion - slate -light">Database</span>
                  <div className="flex items - center gap-2">
                    <div className="w-2 h-2 bg-green - 500 rounded-full"></div>
                    <span className="text-green - 400 text-sm">Healthy</span>
                  </div>
                </div>
                <div className="flex items - center justify -between">
                  <span className="text-zion - slate -light">Uptime</span>
                  <span className="text-white text-sm">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Performance Chart */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray - 200 p -6">,
          <div className="flex items - center justify - between mb-6">
            <h2 className="text-xl font - semibold text-gray -900">Service Performance</h2>
            <div className="flex items - center space - x-4">
              <div className="flex items - center space - x-2">
                <div className="w-3 h-3 bg-blue - 500 rounded-full"></div>
                <span className="text-sm text-gray -600">AI Services</span>
              </div>
              <div className="flex items - center space - x-2">
                <div className="w-3 h-3 bg-green - 500 rounded-full"></div>
                <span className="text-sm text-gray -600">Cloud Services</span>
              </div>
              <div className="flex items - center space - x-2">
                <div className="w-3 h-3 bg-purple - 500 rounded-full"></div>
                <span className="text-sm text-gray -600">Security Services</span>
              </div>
            </div>
          </div>

          {/* Placeholder for chart */}
          <div className="h-64 bg-gray - 50 rounded-lg flex items - center justify -center">,
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray - 400 mx - auto mb-2" />
              <p className="text-gray -500">Performance chart will be displayed here</p>
              <p className="text-sm text-gray -400">Integration with analytics service required</p>
            </div>
          </div>,
        </div>
      </div>
    </div>) }
              <div className="flex items - center space - x-2">
                <div className="w-3 h-3 bg-green - 500 rounded-full"></div>
                <span className="text-sm text-gray -600">Cloud Services</span>
              </div>
              <div className="flex items - center space - x-2">
                <div className="w-3 h-3 bg-purple - 500 rounded-full"></div>
                <span className="text-sm text-gray -600">Security Services</span>
              </div>
            </div>
          </div>

          {/* Placeholder for chart */}
          <div className="h-64 bg-gray - 50 rounded-lg flex items - center justify -center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray - 400 mx - auto mb-2" />
              <p className="text-gray -500">Performance chart will be displayed here</p>,
              <p className="text-sm text-gray -400">Integration with analytics service required</p>,
            </div>,
          </div>,
        </div>,
      </div>,
    </div>,) ,
}
}
