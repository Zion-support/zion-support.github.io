import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Right, Circle, Star, BarChart3, Shield, Zap, Cloud } from 'lucide-react';

const DemoPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'AI-Powered Analytics',
      description: 'See how our AI analyzes your data in real-time',
      demo: 'Live Demo'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Experience our enterprise-grade security features',
      demo: 'Demo'
    },
    {
      icon: Zap,
      title: 'Automation Tools',
      description: 'Watch our automation solutions in action',
      demo: 'Interactive Demo'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Explore our scalable cloud solutions',
      demo: 'Virtual Tour'
    }
  ];

  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time data visualization and insights',
      duration: '5 min',
      category: 'AI Solutions'
    },
    {
      title: 'Security Monitoring',
      description: 'Threat detection and response system',
      duration: '3 min',
      category: 'Cybersecurity'
    },
    {
      title: 'Process Automation',
      description: 'Workflow automation and optimization',
      duration: '7 min',
      category: 'Automation'
    },
    {
      title: 'Cloud Management',
      description: 'Infrastructure monitoring and scaling',
      duration: '4 min',
      category: 'Cloud'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Live Demos - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demos, AI solutions, IT services, interactive demos, technology showcase" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Experience Our
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Solutions in Action
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                See how our AI and IT solutions can transform your business. 
                Explore interactive demos and discover the power of our technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  <Play className="w-4 h-4 mr-2 inline" />
                  Start Demo
                </button>
                <button className="border border-gray-400 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Interactive Demos
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our solutions through hands-on demonstrations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 font-medium">
                      {feature.demo}
                      <Right className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demo List Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Available Demos
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive library of demonstrations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demos.map((demo, index) => (
                <div
                  key={demo.title}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {demo.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {demo.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                        {demo.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {demo.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Circle className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm">Available</span>
                    </div>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      <Play className="w-4 h-4 mr-1" />
                      Watch Demo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Schedule a Live Demo
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get a personalized demonstration of our solutions tailored to your specific needs. 
                  Our experts will walk you through the features most relevant to your business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Circle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Personalized demonstration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Circle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Expert guidance and Q&A</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Circle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Custom use case scenarios</span>
                  </div>
                </div>
                <button className="mt-8 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Schedule Now
                </button>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Demo Benefits</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Hands-on Experience</h4>
                      <p className="text-gray-300">Interact with our solutions in a controlled environment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Expert Insights</h4>
                      <p className="text-gray-300">Get answers to your questions from our technical experts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Custom Scenarios</h4>
                      <p className="text-gray-300">See how our solutions work with your specific use cases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See Our Solutions in Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start exploring our demos or schedule a personalized demonstration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                <Play className="w-4 h-4 mr-2 inline" />
                Start Free Demo
              </button>
              <button className="border border-gray-400 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;