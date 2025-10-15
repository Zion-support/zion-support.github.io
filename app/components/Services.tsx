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
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', price: 'From $299/month', features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards'] },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', price: 'From $199/month', features: ['Multi-language support', 'SEO optimization', 'Brand voice matching'] },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', price: 'From $149/month', features: ['Auto-posting', 'Engagement tracking', 'Trend analysis'] },
        { name: 'AI Project Manager', href: '/ai-project-manager', price: 'From $99/month', features: ['Task automation', 'Resource optimization', 'Risk prediction'] },
        { name: 'AI Customer Support', href: '/ai-customer-support', price: 'From $149/month', features: ['24/7 availability', 'Multi-language', 'Sentiment analysis'] },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', price: 'From $99/month', features: ['Personalization', 'A/B testing', 'Deliverability optimization'] },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', price: 'From $199/month', features: ['Code generation', 'Bug detection', 'Documentation'] },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: 'From $399/month', features: ['Advanced analytics', 'ROI tracking', 'Strategic insights'] }
      ]
    },
    {
      title: 'IT Services',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Comprehensive IT solutions and cloud services',
      services: [
        { name: 'Cloud Migration Services', href: '/cloud-migration-services', price: 'From $2,999', features: ['Zero-downtime migration', 'Cost optimization', 'Security compliance'] },
        { name: 'Cybersecurity Consulting', href: '/cybersecurity-consulting', price: 'From $2,999', features: ['Security audit', 'Penetration testing', 'Compliance review'] },
        { name: 'Database Solutions', href: '/database-solutions', price: 'From $1,999', features: ['Performance tuning', 'Backup strategies', 'Scalability planning'] },
        { name: 'DevOps Solutions', href: '/devops-solutions', price: 'From $1,499', features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring setup'] },
        { name: 'API Management', href: '/ai-api-management', price: 'From $999', features: ['Rate limiting', 'Authentication', 'Analytics'] },
        { name: 'Performance Monitoring', href: '/performance-monitoring', price: 'From $799', features: ['Real-time alerts', 'Performance metrics', 'Capacity planning'] },
        { name: 'Mobile App Development', href: '/mobile-app-development', price: 'From $3,999', features: ['Cross-platform', 'Native performance', 'App store optimization'] },
        { name: 'Web Development', href: '/web-development', price: 'From $2,499', features: ['Responsive design', 'SEO optimization', 'Performance tuning'] }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      description: 'Next-generation 5G infrastructure and applications',
      services: [
        { name: '5G Implementation', href: '/5g-implementation', price: 'From $5,999', features: ['Network planning', 'Equipment installation', 'Testing & optimization'] },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', price: 'From $4,999', features: ['Core network setup', 'RAN deployment', 'Backhaul solutions'] },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', price: 'From $3,999', features: ['Device connectivity', 'Data analytics', 'Edge computing'] },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', price: 'From $7,999', features: ['Traffic management', 'Public safety', 'Environmental monitoring'] },
        { name: '5G Edge Computing', href: '/5g-edge-computing', price: 'From $2,999', features: ['Low latency processing', 'Real-time analytics', 'Distributed computing'] },
        { name: '5G Private Networks', href: '/5g-private-networks', price: 'From $6,999', features: ['Dedicated spectrum', 'Enhanced security', 'Custom applications'] },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications', price: 'From $4,499', features: ['Ultra-low latency', 'High bandwidth', 'Real-time features'] },
        { name: '5G Data Analytics', href: '/5g-data-analytics', price: 'From $3,499', features: ['Network optimization', 'User behavior analysis', 'Performance insights'] }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      description: 'Ready-to-use software solutions for immediate deployment',
      services: [
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', price: 'From $49/month', features: ['Automated bookkeeping', 'Tax preparation', 'Financial reporting'] },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro', price: 'From $79/month', features: ['Real-time filtering', 'Multi-language support', 'Custom rules'] },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', price: 'From $129/month', features: ['Carbon tracking', 'Sustainability metrics', 'Green recommendations'] },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', price: 'From $199/month', features: ['Crop monitoring', 'Weather prediction', 'Yield optimization'] },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', price: 'From $149/month', features: ['3D model creation', 'Texture generation', 'Animation support'] },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', price: 'From $299/month', features: ['Smart contracts', 'DeFi integration', 'NFT marketplace'] },
        { name: 'AI Expense Tracker', href: '/ai-expense-tracker', price: 'From $29/month', features: ['Receipt scanning', 'Category automation', 'Budget alerts'] },
        { name: 'AI Password Manager', href: '/ai-password-manager', price: 'From $19/month', features: ['Secure storage', 'Password generation', 'Breach monitoring'] }
      ]
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            Cutting-Edge Technology Solutions
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI, IT, and 5G solutions designed to transform your business 
            and drive innovation across all industries. Experience the future of technology today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-4 sm:p-6 md:p-8 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white group-hover:animate-pulse">{category.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{category.title}</h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.href}
                      className="group/service flex items-center justify-between p-4 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-all duration-300 group-hover:bg-slate-600/30 border border-slate-600/30 hover:border-cyan-400/30"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 group-hover/service:animate-pulse" />
                          <span className="text-white font-medium group-hover/service:text-cyan-300 transition-colors">{service.name}</span>
                        </div>
                        {service.features && (
                          <div className="flex flex-wrap gap-2 ml-7">
                            {service.features.slice(0, 2).map((feature, featureIndex) => (
                              <span key={featureIndex} className="text-xs text-gray-400 bg-slate-600/50 px-2 py-1 rounded-full">
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 2 && (
                              <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
                                +{service.features.length - 2} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-cyan-400 text-sm font-semibold group-hover/service:text-cyan-300 transition-colors">{service.price}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover/service:text-cyan-400 group-hover/service:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-cyan-500/20">
                  <Link
                    to={`/services`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-cyan-500/25"
                  >
                    View All {category.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2 animate-pulse" />
                Limited Time Offer - 30% Off First Year
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Join thousands of businesses already using our solutions to drive growth and innovation. 
                Start your digital transformation journey today with our cutting-edge AI, IT, and 5G solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                  <Brain className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Get Free Consultation
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                </Link>
                <Link
                  to="/services"
                  className="group relative border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm bg-cyan-400/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Explore All Services
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free 30-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No setup fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;