import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Wifi, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      description: 'Ready-to-use AI-powered software solutions for immediate deployment',
      services: [
        { name: 'AI Content Writer Pro', href: '/ai-content-writer-pro', price: 'From $49/month', popular: true },
        { name: 'AI Project Manager Enterprise', href: '/ai-project-manager-enterprise', price: 'From $79/month', popular: false },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing-suite', price: 'From $59/month', popular: false },
        { name: 'Business Intelligence Dashboard', href: '/business-intelligence-dashboard', price: 'From $89/month', popular: false },
        { name: 'AI Customer Support Hub', href: '/ai-customer-support-hub', price: 'From $129/month', popular: false },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', price: 'From $69/month', popular: false }
      ]
    },
    {
      title: 'AI Services',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600',
      description: 'Revolutionary AI solutions for modern businesses',
      services: [
        { name: 'Machine Learning Solutions', href: '/machine-learning-solutions', price: 'From $2,999/month', popular: true },
        { name: 'Computer Vision Pro', href: '/computer-vision-pro', price: 'From $3,499/month', popular: false },
        { name: 'Natural Language Processing', href: '/natural-language-processing', price: 'From $2,499/month', popular: false },
        { name: 'AI Process Automation', href: '/ai-process-automation', price: 'From $1,999/month', popular: false },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence', price: 'From $2,299/month', popular: false },
        { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite', price: 'From $4,499/month', popular: false }
      ]
    },
    {
      title: 'IT Services',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Comprehensive IT solutions and cloud services',
      services: [
        { name: 'Cloud Migration & Management', href: '/cloud-migration-management', price: 'From $4,999/month', popular: true },
        { name: 'Enterprise Cybersecurity', href: '/enterprise-cybersecurity', price: 'From $3,999/month', popular: false },
        { name: 'DevOps & CI/CD Automation', href: '/devops-cicd-automation', price: 'From $2,999/month', popular: false },
        { name: 'Full-Stack Web Development', href: '/full-stack-web-development', price: 'From $2,499/month', popular: false },
        { name: 'Mobile App Development Suite', href: '/mobile-app-development-suite', price: 'From $3,499/month', popular: false },
        { name: 'Database Solutions & Management', href: '/database-solutions-management', price: 'From $1,999/month', popular: false }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      description: 'Next-generation 5G infrastructure and applications',
      services: [
        { name: '5G Implementation', href: '/5g-implementation', price: 'From $5,999/month', popular: false },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', price: 'From $4,999/month', popular: false },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', price: 'From $3,999/month', popular: false },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', price: 'From $7,999/month', popular: false },
        { name: '5G Edge Computing', href: '/5g-edge-computing', price: 'From $2,999/month', popular: false },
        { name: '5G Private Networks', href: '/5g-private-networks', price: 'From $6,999/month', popular: false }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive AI, IT, and 5G solutions designed to transform your business 
            and drive innovation across all industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 lg:p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.href}
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium">{service.name}</span>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 text-sm font-semibold">{service.price}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
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
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Join thousands of businesses already using our solutions to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;