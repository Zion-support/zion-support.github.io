import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Star, TrendingUp, Award, BookOpen, Code, Lightbulb, Share2 } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const communityStats = [
    { label: 'Active Members', value: '2,500+', icon: Users },
    { label: 'Discussions', value: '15,000+', icon: MessageCircle },
    { label: 'Solutions', value: '8,500+', icon: Lightbulb },
    { label: 'Projects Shared', value: '1,200+', icon: Share2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our developer community. Share projects, get help, and connect with other AI developers using Zion Tech Group services." />
        <meta name="keywords" content="developer community, AI community, developer forum, project showcase, technical discussions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Developer Community
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Connect with fellow developers, share your projects, get help, and learn from the community.
          </p>
          
          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {communityStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-cyan-400 mr-2" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Join Community
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Discussions
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our community is designed to help you grow as a developer and build amazing AI-powered applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Active Discussions</h3>
              <p className="text-gray-300">
                Engage in meaningful conversations about AI, machine learning, and software development.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Code Sharing</h3>
              <p className="text-gray-300">
                Share your projects, get feedback, and learn from other developers' implementations.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Recognition</h3>
              <p className="text-gray-300">
                Get recognized for your contributions and help others solve their challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey with our developer community today and unlock new possibilities.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;