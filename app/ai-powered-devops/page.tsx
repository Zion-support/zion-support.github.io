import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, GitBranch, Shield, Zap, BarChart3, Users, CheckCircle } from 'lucide-react';

const AiPoweredDevopsPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Intelligent Automation',
      description: 'AI-driven automation for deployment, monitoring, and infrastructure management.',
      benefits: ['Automated deployments', 'Smart scaling', 'Predictive maintenance']
    },
    {
      icon: GitBranch,
      title: 'Smart CI/CD',
      description: 'Intelligent continuous integration and deployment pipelines with AI optimization.',
      benefits: ['Auto-merge decisions', 'Test optimization', 'Deployment strategies']
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'AI-powered security scanning and vulnerability detection in real-time.',
      benefits: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Automatic performance tuning and resource optimization using machine learning.',
      benefits: ['Auto-scaling', 'Resource optimization', 'Performance monitoring']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered DevOps - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Revolutionary AI-powered DevOps solutions for automated deployment, monitoring, and infrastructure management."
        />
        <meta 
          name="keywords" 
          content="AI DevOps, automated deployment, CI/CD, infrastructure automation, DevOps AI, deployment automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered DevOps
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your development workflow with intelligent automation, 
              smart deployments, and AI-driven infrastructure management.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-green-400">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-12 border border-green-500/30">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join forward-thinking teams who use AI to streamline their development 
              and deployment processes for maximum efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiPoweredDevopsPage;