import React from 'react';
import { SEO } from '../components/SEO';
import { Users, MessageCircle, BookOpen, Heart, Star, Calendar, Zap, Award, Github, ExternalLink } from 'lucide-react';

export default function Community() {
  const stats = [
    { label: 'Active Members', value: '12,500+', icon: Users },
    { label: 'Monthly Posts', value: '3,200+', icon: MessageCircle },
    { label: 'Knowledge Articles', value: '850+', icon: BookOpen },
    { label: 'Success Stories', value: '450+', icon: Heart }
  ];

  const forums = [
    {
      name: 'General Discussion',
      description: 'Open discussions about Zion Tech Group services and technologies',
      posts: 1247,
      members: 8950,
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      name: 'AI & Machine Learning',
      description: 'AI development, machine learning models, and data science discussions',
      posts: 892,
      members: 5670,
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      name: 'Cloud & DevOps',
      description: 'Infrastructure, deployment, monitoring, and DevOps best practices',
      posts: 654,
      members: 4320,
      color: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      name: 'API Development',
      description: 'API integration, SDK usage, and technical implementation help',
      posts: 423,
      members: 3890,
      color: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      name: 'Success Stories',
      description: 'Share your wins, case studies, and implementation stories',
      posts: 298,
      members: 2340,
      color: 'from-indigo-500 to-purple-500',
      featured: false
    },
    {
      name: 'Feature Requests',
      description: 'Request new features and vote on community suggestions',
      posts: 187,
      members: 1950,
      color: 'from-yellow-500 to-orange-500',
      featured: false
    }
  ];

  const events = [
    {
      title: 'Monthly AI Meetup',
      date: 'Feb 15, 2025',
      time: '2:00 PM EST',
      type: 'Virtual',
      attendees: 245,
      featured: true
    },
    {
      title: 'DevOps Workshop',
      date: 'Feb 22, 2025',
      time: '10:00 AM EST',
      type: 'Hybrid',
      attendees: 89,
      featured: false
    },
    {
      title: 'API Hackathon',
      date: 'Mar 1-3, 2025',
      time: 'All Day',
      type: 'Virtual',
      attendees: 156,
      featured: true
    }
  ];

  const topContributors = [
    { name: 'Alex Chen', points: 2840, badges: 12, avatar: '👨‍💻' },
    { name: 'Sarah Kim', points: 2650, badges: 10, avatar: '👩‍💻' },
    { name: 'Marcus Johnson', points: 2380, badges: 9, avatar: '👨‍🔬' },
    { name: 'Elena Rodriguez', points: 2120, badges: 8, avatar: '👩‍🔬' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our thriving developer community. Connect, learn, and grow with fellow developers and technology enthusiasts."
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">Community</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of developers, entrepreneurs, and innovators building the future 
              with Zion Tech Group's AI-powered solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                Join Community
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300">
                Browse Forums
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl border border-cyan-400/50">
                    {React.createElement(stat.icon, { className: "w-6 h-6 text-cyan-400" })}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Forums */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Discussion Forums</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {forums.map((forum, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  forum.featured 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-400/50 hover:border-cyan-400' 
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${forum.color} flex items-center justify-center mb-4`}>
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white">{forum.name}</h3>
                  {forum.featured && <Star className="w-5 h-5 text-cyan-400" />}
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{forum.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{forum.posts} posts</span>
                  <span>{forum.members.toLocaleString()} members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events & Contributors */}
      <div className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-cyan-400" />
                Upcoming Events
              </h3>
              
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      event.featured 
                        ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-400/50' 
                        : 'bg-slate-800/50 border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-white flex items-center gap-2">
                          {event.title}
                          {event.featured && <Star className="w-4 h-4 text-cyan-400" />}
                        </h4>
                        <p className="text-gray-400 text-sm">{event.date} • {event.time}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === 'Virtual' ? 'bg-green-500/20 text-green-400' : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{event.attendees} attending</span>
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                        Join Event
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-400" />
                Top Contributors
              </h3>
              
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl">
                        {contributor.avatar}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{contributor.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{contributor.points} points</span>
                          <span>{contributor.badges} badges</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">#{index + 1}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-400/50 text-center">
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with like-minded developers, share your expertise, and accelerate your growth 
              with Zion Tech Group's vibrant community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Join Now - It's Free
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300 flex items-center justify-center gap-2">
                <Github className="w-5 h-5" />
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}