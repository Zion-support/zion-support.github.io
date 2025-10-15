import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Wifi, 
  Zap, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600',
      description: 'Revolutionary AI solutions for modern businesses',
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', price: 'From $299/month' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', price: 'From $199/month' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', price: 'From $149/month' },
        { name: 'AI Project Manager', href: '/ai-project-manager', price: 'From $99/month' },
        { name: 'AI Customer Support', href: '/ai-customer-support', price: 'From $149/month' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', price: 'From $99/month' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Comprehensive IT solutions and cloud services',
      services: [
        { name: 'Cloud Migration Services', href: '/cloud-migration-services', price: 'From $2,999' },
        { name: 'Cybersecurity Consulting', href: '/cybersecurity-consulting', price: 'From $2,999' },
        { name: 'Database Solutions', href: '/database-solutions', price: 'From $1,999' },
        { name: 'DevOps Solutions', href: '/devops-solutions', price: 'From $1,499' },
        { name: 'API Management', href: '/ai-api-management', price: 'From $999' },
        { name: 'Performance Monitoring', href: '/performance-monitoring', price: 'From $799' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      description: 'Next-generation 5G infrastructure and applications',
      services: [
        { name: '5G Implementation', href: '/5g-implementation', price: 'From $5,999' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', price: 'From $4,999' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', price: 'From $3,999' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', price: 'From $7,999' },
        { name: '5G Edge Computing', href: '/5g-edge-computing', price: 'From $2,999' },
        { name: '5G Private Networks', href: '/5g-private-networks', price: 'From $6,999' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      description: 'Ready-to-use software solutions for immediate deployment',
      services: [
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', price: 'From $49/month' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro', price: 'From $79/month' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', price: 'From $129/month' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', price: 'From $199/month' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', price: 'From $149/month' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', price: 'From $299/month' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Our Services
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-sm -z-10"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI, IT, and 5G solutions designed to transform your business 
            and drive innovation across all industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
              {/* Futuristic Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 border border-cyan-500/10 rounded-2xl"></div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30 flex-shrink-0`}>
                  <div className="text-white group-hover:text-cyan-100 transition-colors">{category.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{category.title}</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm sm:text-base">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3 relative z-10">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.href}
                    className="group/link flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-200 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center space-x-3 relative z-10">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 group-hover/link:text-green-300 transition-colors" />
                      <span className="text-white font-medium group-hover/link:text-cyan-300 transition-colors">{service.name}</span>
                    </div>
                    <div className="flex items-center space-x-2 relative z-10">
                      <span className="text-cyan-400 text-sm font-semibold group-hover/link:text-cyan-300 transition-colors">{service.price}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover/link:text-cyan-400 group-hover/link:translate-x-1 transition-all duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-cyan-500/20">
                <Link
                  to={`/services`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  View All {category.title}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/20 overflow-hidden">
            {/* Futuristic Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse"></div>
            <div className="absolute inset-0 border border-cyan-500/10 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 relative">
                Ready to Transform Your Business?
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-sm -z-10"></div>
              </h3>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses already using our solutions to drive growth and innovation. 
                Start your digital transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Get Free Consultation</span>
                </Link>
                <Link
                  to="/services"
                  className="group relative border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Explore All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;