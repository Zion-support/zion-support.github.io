import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Smartphone, Code, Zap, Shield } from 'lucide-react';

const AIMobileBuilder: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'AI-Powered Development',
      description: 'Build mobile apps faster with AI-assisted development tools',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Smart Code Generation',
      description: 'Generate optimized code automatically using AI algorithms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Rapid Prototyping',
      description: 'Create and test mobile app prototypes in minutes',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security First',
      description: 'Built-in security features and best practices',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Mobile Builder - Zion Tech Group</title>
        <meta name="description" content="Build mobile apps faster with AI-powered development tools and smart code generation." />
        <meta name="keywords" content="AI mobile builder, mobile app development, AI code generation, rapid prototyping" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                AI Mobile Builder
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build mobile apps faster with AI-powered development tools and smart code generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Start Building
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI tools designed to accelerate mobile app development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors text-center group hover:scale-105 transition-transform duration-300">
                  <div className={`text-${feature.color.split('-')[1]}-400 mb-4 flex justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your App?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building your mobile app today with our AI-powered development platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Get Started
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMobileBuilder;
