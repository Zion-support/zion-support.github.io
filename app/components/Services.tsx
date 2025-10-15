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
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', price: 'From $299/month', features: 'Real-time insights, predictive analytics, custom dashboards' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', price: 'From $199/month', features: 'Blog posts, social media, marketing copy, SEO content' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', price: 'From $149/month', features: 'Auto-posting, engagement, hashtag optimization, analytics' },
        { name: 'AI Project Manager', href: '/ai-project-manager', price: 'From $99/month', features: 'Task automation, resource allocation, progress tracking' },
        { name: 'AI Customer Support', href: '/ai-customer-support', price: 'From $149/month', features: '24/7 chatbot, ticket routing, sentiment analysis' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', price: 'From $99/month', features: 'Personalized campaigns, A/B testing, automation' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', price: 'From $199/month', features: 'Code generation, debugging, documentation, refactoring' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence-pro', price: 'From $399/month', features: 'Data visualization, forecasting, KPI tracking' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Comprehensive IT solutions and cloud services',
      services: [
        { name: 'Cloud Migration Services', href: '/cloud-migration-services', price: 'From $2,999', features: 'AWS, Azure, GCP migration, zero-downtime deployment' },
        { name: 'Cybersecurity Consulting', href: '/cybersecurity-consulting', price: 'From $2,999', features: 'Security audits, penetration testing, compliance' },
        { name: 'Database Solutions', href: '/database-solutions', price: 'From $1,999', features: 'Database design, optimization, backup & recovery' },
        { name: 'DevOps Solutions', href: '/devops-solutions', price: 'From $1,499', features: 'CI/CD pipelines, infrastructure as code, monitoring' },
        { name: 'API Management', href: '/ai-api-management', price: 'From $999', features: 'API design, documentation, rate limiting, analytics' },
        { name: 'Performance Monitoring', href: '/performance-monitoring', price: 'From $799', features: 'Real-time monitoring, alerting, performance optimization' },
        { name: 'Web Development', href: '/web-development', price: 'From $1,299', features: 'React, Next.js, Node.js, responsive design' },
        { name: 'Mobile App Development', href: '/mobile-development', price: 'From $1,999', features: 'iOS, Android, React Native, Flutter apps' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      description: 'Next-generation 5G infrastructure and applications',
      services: [
        { name: '5G Implementation', href: '/5g-implementation', price: 'From $5,999', features: 'Network planning, deployment, optimization, testing' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', price: 'From $4,999', features: 'Core network, RAN, backhaul, edge computing' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', price: 'From $3,999', features: 'IoT device management, data analytics, connectivity' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', price: 'From $7,999', features: 'Traffic management, public safety, utilities monitoring' },
        { name: '5G Edge Computing', href: '/5g-edge-computing', price: 'From $2,999', features: 'Edge servers, latency optimization, distributed computing' },
        { name: '5G Private Networks', href: '/5g-private-networks', price: 'From $6,999', features: 'Dedicated 5G networks, enterprise connectivity, security' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications', price: 'From $2,499', features: 'AR/VR apps, real-time streaming, low-latency gaming' },
        { name: '5G Data Analytics', href: '/5g-data-analytics', price: 'From $1,999', features: 'Network performance, user behavior, predictive analytics' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      description: 'Ready-to-use software solutions for immediate deployment',
      services: [
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', price: 'From $49/month', features: 'Invoice processing, expense tracking, tax preparation' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro', price: 'From $79/month', features: 'Auto-moderation, spam detection, content filtering' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', price: 'From $129/month', features: 'Carbon tracking, sustainability reporting, green analytics' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', price: 'From $199/month', features: 'Crop monitoring, yield prediction, weather analysis' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', price: 'From $149/month', features: '3D modeling, text-to-3D, asset generation' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', price: 'From $299/month', features: 'Smart contracts, DeFi protocols, NFT platforms' },
        { name: 'AI HR Assistant', href: '/ai-hr-assistant', price: 'From $89/month', features: 'Resume screening, interview scheduling, employee analytics' },
        { name: 'AI Legal Assistant', href: '/ai-legal-assistant', price: 'From $199/month', features: 'Contract analysis, legal research, compliance checking' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 cyber-grid relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="cyber-text neon-pulse">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive AI, IT, and 5G solutions designed to transform your business 
            and drive innovation across all industries. Experience the future of technology today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="cyber-card p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4 cyber-glow`}>
                  <div className="text-white neon-pulse">{category.icon}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 cyber-text">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.href}
                    className="block p-4 bg-slate-700/30 rounded-lg hover:bg-slate-600/40 transition-all duration-200 group border border-slate-600/30 hover:border-cyan-400/50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 neon-pulse" />
                        <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">{service.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 text-sm font-semibold neon-text">{service.price}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm ml-7">{service.features}</p>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-cyan-500/20">
                <Link
                  to={`/services`}
                  className="w-full cyber-button py-3 font-semibold flex items-center justify-center group"
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
          <div className="cyber-card p-8 holographic">
            <h3 className="text-3xl font-bold text-white mb-4 cyber-text">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Join thousands of businesses already using our solutions to drive growth and innovation. 
              Start your digital transformation journey today with cutting-edge AI, IT, and 5G technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold flex items-center justify-center group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="cyber-button-secondary px-8 py-4 text-lg font-semibold flex items-center justify-center group"
              >
                <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
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