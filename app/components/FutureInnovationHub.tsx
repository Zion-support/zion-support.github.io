import React from 'react';
import { Rocket, Globe, Users, Lightbulb, Target, Award, Star, Zap } from 'lucide-react';

const FutureInnovationHub: React.FC = () => {
  const innovations = [
    {
      icon: Rocket,
      title: "Space Colonization AI",
      description: "AI systems designed to support human life on Mars and beyond",
      impact: "Interplanetary",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Climate Restoration",
      description: "Advanced AI models that reverse climate change and restore ecosystems",
      impact: "Environmental",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Human Augmentation",
      description: "AI-enhanced human capabilities for superhuman performance",
      impact: "Humanity",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Infinite Energy",
      description: "Revolutionary energy systems that provide unlimited clean power",
      impact: "Energy",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Disease Elimination",
      description: "AI-powered medical systems that eliminate all human diseases",
      impact: "Health",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Universal Education",
      description: "AI tutors that provide personalized education to every human",
      impact: "Education",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%253E%253Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22%2F%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 text-lg font-medium mb-8">
            <Star className="w-5 h-5 mr-3" />
            FUTURE INNOVATION HUB
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Building Tomorrow's
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> World</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our innovation hub is where the impossible becomes possible. We're developing 
            breakthrough technologies that will shape the next century of human progress.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${innovation.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <innovation.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-400/30">
                  {innovation.impact} Impact
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {innovation.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {innovation.description}
              </p>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Explore Innovation
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Join the Innovation Revolution
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the team that's building the future. Whether you're a researcher, 
              engineer, or visionary, there's a place for you in our innovation hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Join Our Team
                <Users className="ml-3 w-6 h-6" />
              </button>
              <button className="inline-flex items-center px-10 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Explore Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureInnovationHub;