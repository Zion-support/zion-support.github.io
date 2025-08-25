import React, { useState } from 'react';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  Award, 
  TrendingUp,
  Globe,
  Lightbulb,
  Code,
  Rocket
} from 'lucide-react';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const communityStats = [
    { label: 'Active Members', value: '2,847', icon: Users, color: 'text-blue-500' },
    { label: 'Discussions', value: '1,234', icon: MessageCircle, color: 'text-green-500' },
    { label: 'Events', value: '89', icon: Calendar, color: 'text-purple-500' },
    { label: 'Resources', value: '456', icon: BookOpen, color: 'text-orange-500' },
  ];

  const upcomingEvents = [
    {
      title: 'AI & Quantum Computing Workshop',
      date: 'Dec 15, 2024',
      time: '2:00 PM EST',
      type: 'Virtual',
      attendees: 127
    },
    {
      title: 'Blockchain Enterprise Solutions Meetup',
      date: 'Dec 20, 2024',
      time: '6:00 PM EST',
      type: 'Hybrid',
      attendees: 89
    },
    {
      title: 'Cybersecurity Best Practices Webinar',
      date: 'Dec 25, 2024',
      time: '1:00 PM EST',
      type: 'Virtual',
      attendees: 203
    }
  ];

  const discussionTopics = [
    {
      title: 'Implementing AI in Legacy Systems',
      author: 'Sarah Chen',
      replies: 23,
      views: 456,
      category: 'AI Solutions'
    },
    {
      title: 'Quantum Computing Use Cases in Finance',
      author: 'Dr. Michael Rodriguez',
      replies: 18,
      views: 312,
      category: 'Quantum Technology'
    },
    {
      title: 'Cybersecurity Compliance Automation',
      author: 'Alex Thompson',
      replies: 31,
      views: 678,
      category: 'Security'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Zion Tech Community
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Connect, collaborate, and innovate with fellow tech professionals, entrepreneurs, and thought leaders in the cutting-edge technology space.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-zion-blue-dark font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Join Community
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-all duration-300">
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 sticky top-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Community Areas</h3>
              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: Globe },
                  { id: 'discussions', label: 'Discussions', icon: MessageCircle },
                  { id: 'events', label: 'Events', icon: Calendar },
                  { id: 'resources', label: 'Resources', icon: BookOpen },
                  { id: 'achievements', label: 'Achievements', icon: Award },
                  { id: 'innovation', label: 'Innovation Hub', icon: Lightbulb },
                  { id: 'development', label: 'Dev Corner', icon: Code },
                  { id: 'startups', label: 'Startup Zone', icon: Rocket }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'text-blue-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                  <h2 className="text-2xl font-bold mb-4 text-white">Welcome to Zion Tech Community</h2>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Our community brings together technology enthusiasts, industry professionals, and innovative thinkers 
                    who are passionate about advancing the frontiers of technology. From AI and quantum computing to 
                    blockchain and cybersecurity, we explore, discuss, and build the future together.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="font-semibold text-white mb-2">What We Do</h4>
                      <ul className="text-blue-200 text-sm space-y-1">
                        <li>• Share knowledge and best practices</li>
                        <li>• Collaborate on innovative projects</li>
                        <li>• Network with industry leaders</li>
                        <li>• Access exclusive resources</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="font-semibold text-white mb-2">Community Values</h4>
                      <ul className="text-blue-200 text-sm space-y-1">
                        <li>• Innovation and creativity</li>
                        <li>• Collaboration and support</li>
                        <li>• Continuous learning</li>
                        <li>• Ethical technology</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Featured Discussions */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Featured Discussions</h3>
                  <div className="space-y-4">
                    {discussionTopics.slice(0, 3).map((topic, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-white">{topic.title}</h4>
                          <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">{topic.category}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-blue-200">
                          <span>by {topic.author}</span>
                          <div className="flex items-center space-x-4">
                            <span>{topic.replies} replies</span>
                            <span>{topic.views} views</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white">Upcoming Events</h2>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            event.type === 'Virtual' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-blue-200 mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MessageCircle className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Register Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Discussions Tab */}
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">Community Discussions</h2>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Start Discussion
                    </button>
                  </div>
                  <div className="space-y-4">
                    {discussionTopics.map((topic, index) => (
                      <div key={index} className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                          <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">{topic.category}</span>
                        </div>
                        <p className="text-blue-200 mb-4">
                          Join the conversation about {topic.title.toLowerCase()} and share your insights with the community.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-blue-200">
                            <span>by {topic.author}</span>
                            <span>{topic.replies} replies</span>
                            <span>{topic.views} views</span>
                          </div>
                          <button className="px-4 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors">
                            Join Discussion
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs can be implemented similarly */}
            {activeTab !== 'overview' && activeTab !== 'events' && activeTab !== 'discussions' && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-12 text-center">
                <div className="text-6xl mb-4">🚧</div>
                <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
                <p className="text-blue-200">
                  The {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} section is under development. 
                  Check back soon for exciting new features!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Connect with like-minded professionals, access exclusive resources, and be part of the technology revolution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
