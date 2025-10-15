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
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', price: 'From $299/month', description: 'Advanced business intelligence with real-time insights' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', price: 'From $199/month', description: 'Automated content creation for all platforms' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', price: 'From $149/month', description: 'Intelligent social media automation and optimization' },
        { name: 'AI Project Manager', href: '/ai-project-manager', price: 'From $99/month', description: 'Smart project planning and resource optimization' },
        { name: 'AI Customer Support', href: '/ai-customer-support', price: 'From $149/month', description: '24/7 intelligent customer service automation' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', price: 'From $99/month', description: 'Personalized email campaigns with AI optimization' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', price: 'From $199/month', description: 'Advanced AI-powered coding and debugging assistance' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: 'From $399/month', description: 'Enterprise-grade data analytics and insights' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', price: 'From $129/month', description: 'Environmental monitoring and sustainability analytics' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', price: 'From $199/month', description: 'Smart farming and crop optimization solutions' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Comprehensive IT solutions and cloud services',
      services: [
        { name: 'Cloud Migration Services', href: '/cloud-migration-services', price: 'From $2,999', description: 'Seamless migration to AWS, Azure, or GCP' },
        { name: 'Cybersecurity Consulting', href: '/cybersecurity-consulting', price: 'From $2,999', description: 'Enterprise-grade security audits and implementation' },
        { name: 'Database Solutions', href: '/database-solutions', price: 'From $1,999', description: 'High-performance database design and optimization' },
        { name: 'DevOps Solutions', href: '/devops-solutions', price: 'From $1,499', description: 'CI/CD pipelines and infrastructure automation' },
        { name: 'API Management', href: '/ai-api-management', price: 'From $999', description: 'Advanced API gateway and management platform' },
        { name: 'Performance Monitoring', href: '/performance-monitoring', price: 'From $799', description: 'Real-time application and infrastructure monitoring' },
        { name: 'Web Development', href: '/web-development', price: 'From $1,299', description: 'Modern, responsive websites and web applications' },
        { name: 'Mobile Development', href: '/mobile-development', price: 'From $1,999', description: 'Native iOS and Android app development' },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions', price: 'From $3,999', description: 'Smart contracts and decentralized applications' },
        { name: 'IoT Solutions', href: '/iot-solutions', price: 'From $2,499', description: 'Internet of Things device integration and management' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      description: 'Next-generation 5G infrastructure and applications',
      services: [
        { name: '5G Implementation', href: '/5g-implementation', price: 'From $5,999', description: 'Complete 5G network deployment and optimization' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', price: 'From $4,999', description: 'Advanced 5G core and RAN infrastructure setup' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', price: 'From $3,999', description: 'Ultra-reliable low-latency IoT connectivity' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', price: 'From $7,999', description: 'Comprehensive smart city infrastructure and services' },
        { name: '5G Edge Computing', href: '/5g-edge-computing', price: 'From $2,999', description: 'Edge computing solutions for ultra-low latency' },
        { name: '5G Private Networks', href: '/5g-private-networks', price: 'From $6,999', description: 'Dedicated 5G private network solutions' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications', price: 'From $2,499', description: '5G-optimized mobile app development' },
        { name: '5G Data Analytics', href: '/5g-data-analytics', price: 'From $1,999', description: 'Real-time 5G network performance analytics' },
        { name: '5G Security Solutions', href: '/5g-security', price: 'From $3,499', description: 'Advanced 5G network security and monitoring' },
        { name: '5G Testing & Optimization', href: '/5g-testing', price: 'From $1,499', description: 'Comprehensive 5G network testing and optimization' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      description: 'Ready-to-use software solutions for immediate deployment',
      services: [
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', price: 'From $49/month', description: 'Automated bookkeeping and financial reporting' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro', price: 'From $79/month', description: 'Advanced content filtering and moderation' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', price: 'From $129/month', description: 'Environmental monitoring and carbon tracking' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', price: 'From $199/month', description: 'Smart farming and crop optimization' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', price: 'From $149/month', description: 'AI-powered 3D model and asset generation' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', price: 'From $299/month', description: 'Smart contracts and DeFi applications' },
        { name: 'AI Document Processor', href: '/ai-document-processor', price: 'From $89/month', description: 'Intelligent document analysis and processing' },
        { name: 'AI Video Editor', href: '/ai-video-editor', price: 'From $119/month', description: 'Automated video editing and enhancement' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', price: 'From $99/month', description: 'Custom voice AI for business applications' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization', price: 'From $79/month', description: 'Interactive charts and dashboard creation' }
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.href}
                    className="block p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group border border-slate-600/50 hover:border-cyan-400/50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">{service.name}</span>
                      </div>
                      <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-2 py-1 rounded">{service.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm ml-7 mb-2">{service.description}</p>
                    <div className="flex items-center justify-end">
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