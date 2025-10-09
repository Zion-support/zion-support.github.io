import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Terminal, GitBranch, Database, Cloud, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const DeveloperToolsPage: React.FC = () => {
  const tools = [
    {
      icon: Code,
      title: 'Code Generation AI',
      description: 'AI-powered code generation and completion tools for faster development',
      features: ['Multi-language support', 'Context-aware suggestions', 'Real-time collaboration'],
      price: 'Starting at $99/month'
    },
    {
      icon: Terminal,
      title: 'DevOps Automation',
      description: 'Automated CI/CD pipelines and deployment management',
      features: ['One-click deployments', 'Environment management', 'Rollback capabilities'],
      price: 'Starting at $149/month'
    },
    {
      icon: GitBranch,
      title: 'Version Control AI',
      description: 'Intelligent version control with automated conflict resolution',
      features: ['Smart merge suggestions', 'Code review automation', 'Branch optimization'],
      price: 'Starting at $79/month'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'AI-powered database optimization and query performance tools',
      features: ['Query optimization', 'Performance monitoring', 'Schema suggestions'],
      price: 'Starting at $199/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Automated cloud resource management and optimization',
      features: ['Auto-scaling', 'Cost optimization', 'Security monitoring'],
      price: 'Starting at $299/month'
    },
    {
      icon: Shield,
      title: 'Security Scanner',
      description: 'Automated security vulnerability detection and remediation',
      features: ['Code scanning', 'Dependency analysis', 'Compliance checking'],
      price: 'Starting at $129/month'
    }
  ];

  const features = [
    'AI-powered code generation and completion',
    'Automated testing and quality assurance',
    'Intelligent debugging and error resolution',
    'Real-time collaboration tools',
    'Performance optimization suggestions',
    'Security vulnerability detection',
    'Multi-language support',
    'Cloud-native architecture'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Developer Tools
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            AI-Powered Development Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Accelerate your development process with our comprehensive suite of AI-powered developer tools. 
            From code generation to deployment automation, we provide everything you need to build better software faster.
          </p>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Our Developer Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">
                  <tool.icon className="w-12 h-12 mx-auto text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {tool.title}
                </h3>
                <p className="text-gray-300 mb-4 text-center leading-relaxed">
                  {tool.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-4">
                    {tool.price}
                  </div>
                  <button className="cyber-button w-full">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Developer Tools?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 cyber-card">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Supercharge Your Development?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have already transformed their workflow with our AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;
