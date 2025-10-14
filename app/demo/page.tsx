
import React from 'react';'react-helmet-async;'
import { Play, Right, Circle, Star } from 'lucide-react;';

const DemoPage: React.FC = () => {
=======
import { Play, ArrowRight, Circle, Star } from 'lucide-react';

const DemoPage: React.FC = () => {
  const features = [
    {
      icon: 'Analytics',
      title: 'AI-Powered Analytics',
      description: 'See how our AI analyzes your data in real-time',
      demo: 'Live Demo'
    },
    {
      icon: 'Security',
      title: 'Advanced Security',
      description: 'Experience our enterprise-grade security features',
      demo: 'Demo'
    },
    {
      icon: 'Intelligence',
      title: 'Business Intelligence',
      description: 'Explore our comprehensive BI dashboard',
      demo: 'BI Demo'
    },
    {
      icon: 'Cloud',
      title: 'Cloud Infrastructure',
      description: 'Test our scalable cloud solutions',
      demo: 'Cloud Demo'
    }
  ];

  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Interactive dashboard showing real-time data analysis',
      duration: '5 min',
      difficulty: 'Beginner',
      category: 'AI Solutions'
    },
    {
      title: 'Security Monitoring',
      description: 'Live security monitoring and threat detection',
      duration: '3 min',
      difficulty: 'Intermediate',
      category: 'Cybersecurity'
    },
    {
      title: 'Cloud Migration',
      description: 'Step-by-step cloud migration process',
      duration: '10 min',
      difficulty: 'Advanced',
      category: 'Cloud Services'
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-ce9c
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Demo - Zion Tech Group</title>

        <meta name="description" content="Experience our AI, cloud, and cybersecurity solutions through interactive demos." />
        <meta name="keywords" content="demo, AI demo, cloud demo, security demo, interactive demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Interactive Demos
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience our cutting-edge technology solutions through interactive demos. 
                See how our AI, cloud, and security solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Start Demo
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Demo Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of technology solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors text-center group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{feature.icon.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm">
                    {feature.demo}
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo List Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Available Demos</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of interactive demonstrations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {demo.category}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{demo.title}</h3>
                  <p className="text-gray-300 mb-6">{demo.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Circle className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </div>
                    <div className="text-sm text-gray-400">
                      {demo.difficulty}
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start Demo
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to See More?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Schedule a personalized demo with our experts to see how our solutions 
                can specifically address your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Schedule Live Demo
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};


export default DemoPage;

