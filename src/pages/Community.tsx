import React from 'react';
import { Users, MessageCircle, Calendar, Award } from 'lucide-react';
import SEO from '../components/SEO';

const Community = () => {
  const communityFeatures = [
    {
      title: "Discussion Forums",
      description: "Connect with other users and share knowledge",
      icon: <MessageCircle className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Events & Meetups",
      description: "Join our regular community events and networking sessions",
      icon: <Calendar className="h-8 w-8 text-green-400" />
    },
    {
      title: "User Groups",
      description: "Find local user groups and specialized communities",
      icon: <Users className="h-8 w-8 text-purple-400" />
    },
    {
      title: "Recognition Program",
      description: "Get recognized for your contributions and expertise",
      icon: <Award className="h-8 w-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our vibrant community of developers, users, and technology enthusiasts."
        keywords={["community", "forums", "events", "networking", "user groups"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Community</h1>
          <p className="text-xl text-gray-300">
            Connect, learn, and grow with our vibrant community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Get Started</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Create your community profile</li>
                <li>• Join relevant discussion groups</li>
                <li>• Attend virtual events and webinars</li>
                <li>• Share your projects and experiences</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Access to exclusive content</li>
                <li>• Direct support from experts</li>
                <li>• Networking opportunities</li>
                <li>• Early access to new features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
