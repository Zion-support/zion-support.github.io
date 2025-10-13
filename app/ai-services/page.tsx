import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, BarChart3, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, ArrowRight, CheckCircle, Star } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage = () => {
  const services = [
    {
      id: 'ai-neural-interface',
      name: 'AI Neural Interface',
      description: 'Revolutionary brain-computer interface for seamless human-AI interaction',
      icon: Brain,
      price: '$299/month',
      features: ['Real-time neural signal processing', 'Advanced AI integration', 'Secure data transmission'],
      path: '/zion-ai-neural-interface',
      popular: true
    },
    {
      id: 'ai-voice-cloning-studio',
      name: 'AI Voice Cloning Studio',
      description: 'Professional voice cloning and synthesis platform',
      icon: Zap,
      price: '$199/month',
      features: ['High-fidelity voice cloning', 'Multi-language support', 'Real-time synthesis'],
      path: '/ai-voice-cloning-studio',
      popular: true
    },
    {
      id: 'ai-quantum-financial-oracle',
      name: 'AI Quantum Financial Oracle',
      description: 'Quantum-powered financial predictions and market analysis',
      icon: BarChart3,
      price: '$499/month',
      features: ['Quantum predictions', 'Real-time analysis', 'Risk assessment'],
      path: '/ai-quantum-financial-oracle',
      popular: true
    },
    {
      id: 'ai-space-mission-optimizer',
      name: 'AI Space Mission Optimizer',
      description: 'Advanced AI for space mission planning and optimization',
      icon: Users,
      price: '$799/month',
      features: ['Trajectory optimization', 'Mission planning', 'Fuel efficiency'],
      path: '/ai-space-mission-optimizer',
      popular: true
    },
    {
      id: 'ai-holographic-workspace',
      name: 'AI Holographic Workspace',
      description: 'Immersive 3D collaboration environment powered by AI',
      icon: Code,
      price: '$399/month',
      features: ['3D holographic display', 'Gesture control', 'Remote collaboration'],
      path: '/ai-holographic-workspace',
      popular: true
    },
    {
      id: 'ai-data-analytics-pro',
      name: 'AI Data Analytics Pro',
      description: 'Advanced AI-powered data analysis and insights platform',
      icon: Database,
      price: '$299/month',
      features: ['Predictive analytics', 'Real-time insights', 'Automated reporting'],
      path: '/ai-data-analytics-pro',
      popular: false
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '500+', icon: Brain },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Processing Speed', value: '10x Faster', icon: Zap },
    { label: 'Data Accuracy', value: '99.9%', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group"
        description="Discover our cutting-edge AI services including neural interfaces, voice cloning, quantum financial oracles, and more."
        keywords="ai services, artificial intelligence, neural interface, voice cloning, quantum computing, machine learning"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence with our cutting-edge services 
            that transform how you work, create, and innovate.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                {service.popular && (
                  <span className="ml-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">{service.price}</span>
                <span className="text-gray-400 text-sm ml-1">/month</span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.path}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our AI experts to discuss how our services can revolutionize your workflow and boost productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
            
            <a
              href="tel:+13024640950"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
          
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com</p>
            <p>📞 +1 302 464 0950</p>
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;