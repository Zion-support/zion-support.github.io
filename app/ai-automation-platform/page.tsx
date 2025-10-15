import React from 'react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, Circle, Workflow, Brain, Settings, Zap, Play } from 'lucide-react';

const AiAutomationPlatformPage: React.FC = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Decision Making",
      description: "AI-driven decision making for automated business processes",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Process Optimization",
      description: "Continuously optimize processes using machine learning",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Integration Hub",
      description: "Connect and automate across all your business systems",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "70% process efficiency gain",
    "Automated decision making",
    "Seamless integrations",
    "Real-time optimization",
    "Scalable workflows",
    "Cost reduction"
  ];
  return (
    <>
      <Helmet >
        Content
      </Helmet>
        Content
      </Helmet>
        <title>AI Automation Platform - Intelligent Process Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI automation platform. Automate workflows, optimize processes, and achieve 70% efficiency gains with intelligent automation solutions." />
        Content
      </meta>
        Content
      </meta>
        <meta name="keywords" content="AI automation, process automation, workflow automation, business intelligence, machine learning, AI platform" />
        Content
      </meta>
        Content
      </meta>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        Content
      </div>
        Content
      </div>
        {/* Hero Section */}
        <section className="relative py-20 px-4">
        Content
      </section>
        Content
      </section>
          <div className="container mx-auto max-w-7xl">
        Content
      </div>
        Content
      </div>
            <div className="text-center mb-16">
        Content
      </div>
        Content
      </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Content
      </h1>
        Content
      </h1>
                AI Automation Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Content
      </p>
        Content
      </p>
                Transform your business with intelligent automation. Our AI platform automates complex workflows, 
                optimizes processes, and delivers measurable efficiency gains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
        Content
      </div>
        Content
      </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
        Content
      </button>
        Content
      </button>
                  Start Automation Journey
                  <Right className="ml-2 w-5 h-5" />
        Content
      </Right>
        Content
      </Right>
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
        Content
      </button>
        Content
      </button>
                  <Play className="mr-2 w-5 h-5" />
        Content
      </Play>
        Content
      </Play>
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
        Content
      </section>
        Content
      </section>
          <div className="container mx-auto max-w-7xl">
        Content
      </div>
        Content
      </div>
            <div className="text-center mb-16">
        Content
      </div>
        Content
      </div>
              <h2 className="text-4xl font-bold text-white mb-4">Platform Features</h2>
              <p className="text-xl text-gray-300">Comprehensive AI automation capabilities</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        Content
      </div>
        Content
      </div>
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
        Content
      </div>
        Content
      </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
        Content
      </div>
        Content
      </div>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
        Content
      </section>
        Content
      </section>
          <div className="container mx-auto max-w-7xl">
        Content
      </div>
        Content
      </div>
            <div className="text-center mb-16">
        Content
      </div>
        Content
      </div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Platform</h2>
              <p className="text-xl text-gray-300">Proven results and measurable impact</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        Content
      </div>
        Content
      </div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
        Content
      </div>
        Content
      </div>
                  <Circle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
        Content
      </Circle>
        Content
      </Circle>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
        Content
      </section>
        Content
      </section>
          <div className="container mx-auto max-w-4xl text-center">
        Content
      </div>
        Content
      </div>
            <h2 className="text-4xl font-bold text-white mb-6">
        Content
      </h2>
        Content
      </h2>
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
        Content
      </p>
        Content
      </p>
              Join thousands of businesses already using our AI automation platform to streamline operations and boost efficiency.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
        Content
      </button>
        Content
      </button>
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
export default AiAutomationPlatformPage;
