import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Brain, Lock, PenTool, Mic, Globe, BarChart3 as Analytics, FileText, Smartphone, Monitor } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage = () => {
  const services = [
    {
      id: 'zion-ai-neural-interface',
      title: 'Zion AI Neural Interface',
      description: 'Revolutionary brain-computer interface for thought-to-text conversion and mind control applications.',
      icon: Brain,
      features: ['Thought-to-Text', 'Mind Control', 'Neural Training', 'Real-time Processing'],
      price: '$199/month',
      originalPrice: '$399/month',
      featured: true,
      category: 'AI Innovation'
    },
    {
      id: 'ai-voice-cloning-studio',
      title: 'AI Voice Cloning Studio',
      description: 'Professional voice synthesis with 95% accuracy and multi-language support for content creators.',
      icon: Mic,
      features: ['Voice Cloning', 'Multi-language', 'Real-time Synthesis', 'Custom Voices'],
      price: '$29/month',
      originalPrice: '$59/month',
      featured: true,
      category: 'AI Audio'
    },
    {
      id: 'ai-quantum-financial-oracle',
      title: 'AI Quantum Financial Oracle',
      description: 'Quantum-powered financial predictions with 99.7% accuracy for market analysis and trading.',
      icon: BarChart3,
      features: ['Quantum Analysis', 'Market Prediction', 'Risk Assessment', 'Real-time Alerts'],
      price: '$199/month',
      originalPrice: '$399/month',
      featured: true,
      category: 'Financial AI'
    },
    {
      id: 'ai-space-mission-optimizer',
      title: 'AI Space Mission Optimizer',
      description: 'Advanced space mission optimization with 99.9% trajectory accuracy for aerospace applications.',
      icon: Globe,
      features: ['Trajectory Optimization', 'Mission Planning', 'Risk Analysis', 'Resource Management'],
      price: '$499/month',
      originalPrice: '$999/month',
      featured: true,
      category: 'Aerospace AI'
    },
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards and predictive analytics.',
      icon: Analytics,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      price: '$299/month',
      originalPrice: '$599/month',
      featured: false,
      category: 'Business Intelligence'
    },
    {
      id: 'zion-security-shield',
      title: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response.',
      icon: Shield,
      features: ['Threat Detection', 'Automated Response', '24/7 Monitoring', 'Compliance Reports'],
      price: '$499/month',
      originalPrice: '$999/month',
      featured: false,
      category: 'Cybersecurity'
    },
    {
      id: 'zion-cloud-vault',
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage with end-to-end encryption, team collaboration, and automated backup.',
      icon: Cloud,
      features: ['Unlimited Storage', 'End-to-End Encryption', 'Team Collaboration', 'Automated Backup'],
      price: '$29/month',
      originalPrice: '$59/month',
      featured: false,
      category: 'Cloud Storage'
    },
    {
      id: 'zion-content-studio',
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform with multi-format support and SEO optimization.',
      icon: PenTool,
      features: ['AI Content Generation', 'SEO Optimization', 'Multi-format', 'Brand Voice Training'],
      price: '$149/month',
      originalPrice: '$299/month',
      featured: false,
      category: 'Content Creation'
    },
    {
      id: 'project-management-tool',
      title: 'Project Management Tool',
      description: 'Streamline your project workflows with our intelligent project management solution.',
      icon: Settings,
      features: ['Task Tracking', 'Team Collaboration', 'Progress Analytics', 'Resource Management'],
      price: '$29/month',
      originalPrice: '$59/month',
      featured: false,
      category: 'Productivity'
    },
    {
      id: 'customer-relationship-manager',
      title: 'Customer Relationship Manager',
      description: 'Manage your customer relationships with our AI-powered CRM system.',
      icon: Users,
      features: ['Contact Management', 'Sales Pipeline', 'Customer Analytics', 'Automation'],
      price: '$39/month',
      originalPrice: '$79/month',
      featured: false,
      category: 'CRM'
    },
    {
      id: 'inventory-management-system',
      title: 'Inventory Management System',
      description: 'Optimize your inventory with smart tracking and automated reordering.',
      icon: Database,
      features: ['Stock Tracking', 'Automated Reordering', 'Analytics Dashboard', 'Supplier Management'],
      price: '$49/month',
      originalPrice: '$99/month',
      featured: false,
      category: 'Inventory'
    },
    {
      id: 'financial-reporting-tool',
      title: 'Financial Reporting Tool',
      description: 'Generate comprehensive financial reports and insights automatically.',
      icon: BarChart3,
      features: ['Automated Reports', 'Financial Analytics', 'Budget Tracking', 'Compliance'],
      price: '$59/month',
      originalPrice: '$119/month',
      featured: false,
      category: 'Finance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO 
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Software Solutions"
        description="Innovative micro software-as-a-service solutions including AI neural interface, voice cloning, quantum financial oracle, and more. Transform your business with cutting-edge technology."
        keywords="micro SAAS, AI solutions, software as a service, business automation, AI neural interface, voice cloning, quantum computing, business intelligence, cybersecurity"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Innovative Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary micro software-as-a-service solutions powered by AI, quantum computing, and cutting-edge technology. 
            Transform your business operations with our innovative suite of intelligent tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Get Started <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              View Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">12+</div>
              <div className="text-gray-300 text-sm">Micro SAAS Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10k+</div>
              <div className="text-gray-300 text-sm">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and powerful micro SAAS solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.filter(service => service.featured).map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30 mb-2">
                        {service.category}
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-gray-500 line-through text-sm ml-2">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Cloud className="w-4 h-4 mr-1" />
                      <span>Cloud Hosted</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Micro SAAS Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive collection of micro SAAS solutions for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30 mb-2 inline-block">
                      {service.category}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-purple-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline">
                      <span className="text-lg font-bold text-purple-400">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-gray-500 line-through text-sm ml-2">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Cloud className="w-3 h-3 mr-1" />
                      <span>Cloud</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm group-hover:scale-105"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using our micro SAAS solutions to automate processes, 
              increase efficiency, and drive innovation. Start your digital transformation today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-purple-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-purple-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-purple-500/25"
              >
                <Zap className="w-5 h-5" />
                Start Your SAAS Journey
              </Link>
              <Link 
                to="/pricing" 
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;