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
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', price: 'From $49/month', marketPrice: '$99-299/month', features: 'Real-time insights, Custom reports, Predictive analytics, ROI tracking' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', price: 'From $29/month', marketPrice: '$49-99/month', features: 'GPT-4 powered, Multi-language, SEO optimization, Brand voice' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', price: 'From $59/month', marketPrice: '$99-199/month', features: 'Auto-posting, Engagement tracking, Content scheduling, Analytics' },
        { name: 'AI Project Manager Pro', href: '/ai-project-manager', price: 'From $39/month', marketPrice: '$59-149/month', features: 'Smart scheduling, Resource optimization, Risk prediction, Budget forecasting' },
        { name: 'AI Customer Support Pro', href: '/ai-customer-support', price: 'From $89/month', marketPrice: '$199-599/month', features: '24/7 chatbot, Multi-language, Sentiment analysis, Ticket routing' },
        { name: 'AI Email Marketing Pro', href: '/ai-email-marketing', price: 'From $59/month', marketPrice: '$99-299/month', features: 'AI personalization, A/B testing, Automated campaigns, GDPR compliance' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', price: 'From $99/month', marketPrice: '$199-499/month', features: 'Code generation, Bug detection, Auto-documentation, Test generation' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: 'From $149/month', marketPrice: '$299-999/month', features: 'Data visualization, Forecasting, KPI tracking, Custom dashboards' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Comprehensive IT solutions and cloud services',
      services: [
        { name: 'Cloud Migration Services', href: '/cloud-migration-services', price: 'From $2,999', marketPrice: '$5,999-15,999', features: 'AWS/Azure/GCP migration, Zero downtime, Cost optimization, 24/7 support' },
        { name: 'Cybersecurity Consulting', href: '/cybersecurity-consulting', price: 'From $2,999', marketPrice: '$4,999-12,999', features: 'Security audit, Penetration testing, SOC 2 compliance, Incident response' },
        { name: 'Database Solutions', href: '/database-solutions', price: 'From $1,999', marketPrice: '$3,999-9,999', features: 'Performance tuning, Backup & recovery, Auto-scaling, Data encryption' },
        { name: 'DevOps Solutions', href: '/devops-solutions', price: 'From $1,499', marketPrice: '$2,999-7,999', features: 'CI/CD pipelines, Infrastructure as code, Kubernetes, Monitoring' },
        { name: 'API Management', href: '/ai-api-management', price: 'From $999', marketPrice: '$1,999-4,999', features: 'API gateway, Rate limiting, Documentation, Analytics' },
        { name: 'Performance Monitoring', href: '/performance-monitoring', price: 'From $799', marketPrice: '$1,499-3,999', features: 'Real-time alerts, Performance metrics, Uptime monitoring, Root cause analysis' },
        { name: 'Web Development', href: '/web-development', price: 'From $1,299', marketPrice: '$2,999-8,999', features: 'React/Next.js, Mobile-first, SEO optimized, PWA support' },
        { name: 'Mobile App Development', href: '/mobile-development', price: 'From $1,999', marketPrice: '$4,999-15,999', features: 'iOS/Android, Cross-platform, App store ready, Push notifications' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      description: 'Next-generation 5G infrastructure and applications',
      services: [
        { name: '5G Implementation', href: '/5g-implementation', price: 'From $5,999', marketPrice: '$12,999-49,999', features: 'Network planning, Equipment setup, Testing, Compliance certification' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', price: 'From $4,999', marketPrice: '$9,999-39,999', features: 'Tower installation, Fiber optics, Coverage optimization, Maintenance' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', price: 'From $3,999', marketPrice: '$7,999-29,999', features: 'Device connectivity, Data analytics, Remote monitoring, Edge computing' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', price: 'From $7,999', marketPrice: '$19,999-99,999', features: 'Traffic management, Public safety, Energy efficiency, Citizen services' },
        { name: '5G Edge Computing', href: '/5g-edge-computing', price: 'From $2,999', marketPrice: '$5,999-19,999', features: 'Low latency processing, Local data centers, Real-time analytics, AI inference' },
        { name: '5G Private Networks', href: '/5g-private-networks', price: 'From $6,999', marketPrice: '$14,999-59,999', features: 'Dedicated spectrum, Enhanced security, Custom configuration, SLA guarantees' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications', price: 'From $3,499', marketPrice: '$6,999-24,999', features: 'AR/VR support, Ultra-low latency, High bandwidth, Real-time streaming' },
        { name: '5G Data Analytics', href: '/5g-data-analytics', price: 'From $2,499', marketPrice: '$4,999-19,999', features: 'Real-time insights, Predictive analytics, Network optimization, AI-powered monitoring' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      description: 'Ready-to-use software solutions for immediate deployment',
      services: [
        { name: 'AI Accounting Assistant Pro', href: '/ai-accounting-assistant', price: 'From $49/month', marketPrice: '$99-299/month', features: 'Invoice processing, Expense tracking, Tax preparation, Financial forecasting' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro', price: 'From $79/month', marketPrice: '$149-499/month', features: 'Real-time filtering, Multi-language, Custom rules, Sentiment analysis' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', price: 'From $129/month', marketPrice: '$249-799/month', features: 'Carbon tracking, Sustainability reports, Green recommendations, ESG compliance' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', price: 'From $199/month', marketPrice: '$399-1,299/month', features: 'Crop monitoring, Weather prediction, Yield optimization, Pest detection' },
        { name: 'AI 3D Generation Pro', href: '/ai-3d-generation', price: 'From $149/month', marketPrice: '$299-999/month', features: '3D modeling, Animation, Rendering, AR/VR integration' },
        { name: 'AI Blockchain Solutions Pro', href: '/ai-blockchain-solutions', price: 'From $299/month', marketPrice: '$599-2,999/month', features: 'Smart contracts, DeFi integration, NFT marketplace, Token economics' },
        { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare-assistant', price: 'From $179/month', marketPrice: '$399-1,499/month', features: 'Patient monitoring, Diagnosis support, Treatment recommendations, HIPAA compliance' },
        { name: 'AI Financial Advisor Pro', href: '/ai-financial-advisor', price: 'From $99/month', marketPrice: '$199-799/month', features: 'Portfolio management, Risk assessment, Investment advice, Tax optimization' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Our Services
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-lg opacity-75"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI, IT, and 5G solutions designed to transform your business 
            and drive innovation across all industries. Experience the future of technology today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden group">
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300`}>
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{category.title}</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3 relative z-10">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.href}
                    className="block p-4 bg-slate-700/40 rounded-lg hover:bg-slate-600/60 transition-all duration-300 group border border-slate-600/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1 group-hover:text-green-300 transition-colors" />
                        <span className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">{service.name}</span>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <span className="text-cyan-400 text-xs font-semibold group-hover:text-cyan-300 transition-colors">{service.price}</span>
                        <span className="text-gray-500 text-xs line-through">{service.marketPrice}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 ml-7 leading-relaxed group-hover:text-gray-300 transition-colors mb-2">
                      {service.features}
                    </div>
                    <div className="flex items-center justify-between ml-7">
                      <span className="text-xs text-green-400 font-semibold">Save up to 70%</span>
                      <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
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
        <div className="text-center mt-16 relative z-10">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30 relative overflow-hidden backdrop-blur-sm">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 relative">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 blur-sm"></div>
              </h3>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses already using our solutions to drive growth and innovation. 
                Start your digital transformation journey today and experience the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 relative overflow-hidden group"
                >
                  <span className="relative z-10">Explore All Services</span>
                  <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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