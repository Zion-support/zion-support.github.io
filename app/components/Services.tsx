import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Wifi, 
  Zap, 
  ArrowRight,
  CheckCircle,
  ShoppingCart,
  Megaphone,
  BarChart3
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600',
      description: 'Revolutionary AI solutions for modern businesses',
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', price: 'From $299/month', features: 'Real-time insights, Custom reports, Predictive analytics' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', price: 'From $199/month', features: 'Multi-language support, SEO optimization, Brand voice' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', price: 'From $149/month', features: 'Auto-posting, Engagement tracking, Content scheduling' },
        { name: 'AI Project Manager', href: '/ai-project-manager', price: 'From $99/month', features: 'Smart scheduling, Resource optimization, Progress tracking' },
        { name: 'AI Customer Support', href: '/ai-customer-support', price: 'From $149/month', features: '24/7 chatbot, Multi-language, Ticket routing' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', price: 'From $99/month', features: 'Personalization, A/B testing, Analytics' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', price: 'From $199/month', features: 'Code generation, Bug detection, Documentation' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence-pro', price: 'From $399/month', features: 'Data visualization, Forecasting, KPI tracking' },
        { name: 'AI Healthcare Assistant', href: '/ai-healthcare-assistant', price: 'From $179/month', features: 'Patient monitoring, Diagnosis support, Treatment recommendations' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor', price: 'From $99/month', features: 'Portfolio management, Risk assessment, Investment advice' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', price: 'From $129/month', features: 'Carbon tracking, Sustainability reports, Green recommendations' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', price: 'From $199/month', features: 'Crop monitoring, Weather prediction, Yield optimization' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Comprehensive IT solutions and cloud services',
      services: [
        { name: 'Cloud Migration Services', href: '/cloud-migration-services', price: 'From $2,999', features: 'AWS/Azure/GCP migration, Zero downtime, Cost optimization' },
        { name: 'Cybersecurity Consulting', href: '/cybersecurity-consulting', price: 'From $2,999', features: 'Security audit, Penetration testing, Compliance' },
        { name: 'Database Solutions', href: '/database-solutions', price: 'From $1,999', features: 'Performance tuning, Backup & recovery, Scaling' },
        { name: 'DevOps Solutions', href: '/devops-solutions', price: 'From $1,499', features: 'CI/CD pipelines, Infrastructure as code, Monitoring' },
        { name: 'API Management', href: '/ai-api-management', price: 'From $999', features: 'API gateway, Rate limiting, Documentation' },
        { name: 'Performance Monitoring', href: '/performance-monitoring', price: 'From $799', features: 'Real-time alerts, Performance metrics, Uptime monitoring' },
        { name: 'Web Development', href: '/web-development', price: 'From $1,299', features: 'React/Next.js, Mobile-first, SEO optimized' },
        { name: 'Mobile App Development', href: '/mobile-development', price: 'From $1,999', features: 'iOS/Android, Cross-platform, App store ready' },
        { name: 'Blockchain Development', href: '/blockchain-development', price: 'From $3,999', features: 'Smart contracts, DeFi apps, NFT marketplace, Web3 integration' },
        { name: 'IoT Solutions', href: '/iot-solutions', price: 'From $2,499', features: 'Device connectivity, Data analytics, Remote monitoring, Edge computing' },
        { name: 'AR/VR Development', href: '/ar-vr-development', price: 'From $4,999', features: 'Immersive experiences, Training simulations, Virtual showrooms' },
        { name: 'Machine Learning Ops', href: '/mlops-solutions', price: 'From $1,799', features: 'Model deployment, A/B testing, Monitoring, Auto-scaling' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      description: 'Next-generation 5G infrastructure and applications',
      services: [
        { name: '5G Implementation', href: '/5g-implementation', price: 'From $5,999', features: 'Network planning, Equipment setup, Testing' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', price: 'From $4,999', features: 'Tower installation, Fiber optics, Coverage optimization' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', price: 'From $3,999', features: 'Device connectivity, Data analytics, Remote monitoring' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', price: 'From $7,999', features: 'Traffic management, Public safety, Energy efficiency' },
        { name: '5G Edge Computing', href: '/5g-edge-computing', price: 'From $2,999', features: 'Low latency processing, Local data centers, Real-time analytics' },
        { name: '5G Private Networks', href: '/5g-private-networks', price: 'From $6,999', features: 'Dedicated spectrum, Enhanced security, Custom configuration' },
        { name: '5G Mobile Applications', href: '/5g-mobile-applications', price: 'From $3,499', features: 'AR/VR support, Ultra-low latency, High bandwidth' },
        { name: '5G Data Analytics', href: '/5g-data-analytics', price: 'From $2,499', features: 'Real-time insights, Predictive analytics, Network optimization' },
        { name: '5G Autonomous Vehicles', href: '/5g-autonomous-vehicles', price: 'From $9,999', features: 'V2X communication, Real-time navigation, Safety systems' },
        { name: '5G Healthcare Solutions', href: '/5g-healthcare-solutions', price: 'From $4,999', features: 'Remote surgery, Telemedicine, Patient monitoring' },
        { name: '5G Industrial IoT', href: '/5g-industrial-iot', price: 'From $5,999', features: 'Smart manufacturing, Predictive maintenance, Quality control' },
        { name: '5G Security Solutions', href: '/5g-security-solutions', price: 'From $3,999', features: 'Network security, Threat detection, Compliance monitoring' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      description: 'Ready-to-use software solutions for immediate deployment',
      services: [
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', price: 'From $49/month', features: 'Invoice processing, Expense tracking, Tax preparation' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro', price: 'From $79/month', features: 'Real-time filtering, Multi-language, Custom rules' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', price: 'From $129/month', features: 'Carbon tracking, Sustainability reports, Green recommendations' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', price: 'From $199/month', features: 'Crop monitoring, Weather prediction, Yield optimization' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', price: 'From $149/month', features: '3D modeling, Animation, Rendering' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', price: 'From $299/month', features: 'Smart contracts, DeFi integration, NFT marketplace' },
        { name: 'AI Healthcare Assistant', href: '/ai-healthcare-assistant', price: 'From $179/month', features: 'Patient monitoring, Diagnosis support, Treatment recommendations' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor', price: 'From $99/month', features: 'Portfolio management, Risk assessment, Investment advice' },
        { name: 'AI Legal Assistant', href: '/ai-legal-assistant', price: 'From $199/month', features: 'Contract analysis, Legal research, Document review' },
        { name: 'AI HR Management', href: '/ai-hr-management', price: 'From $89/month', features: 'Recruitment, Performance tracking, Employee analytics' },
        { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', price: 'From $159/month', features: 'Inventory management, Demand forecasting, Route optimization' },
        { name: 'AI Real Estate Assistant', href: '/ai-real-estate-assistant', price: 'From $119/month', features: 'Property valuation, Market analysis, Lead generation' }
      ]
    },
    {
      title: 'E-Commerce Solutions',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'from-emerald-500 to-cyan-600',
      description: 'Complete e-commerce platforms and tools',
      services: [
        { name: 'AI-Powered Store Builder', href: '/ai-store-builder', price: 'From $79/month', features: 'Auto-design, Product recommendations, SEO optimization' },
        { name: 'Multi-Channel Sales Manager', href: '/multi-channel-sales', price: 'From $129/month', features: 'Amazon, eBay, Shopify sync, Inventory management' },
        { name: 'AI Customer Service Bot', href: '/ai-customer-service-bot', price: 'From $99/month', features: '24/7 support, Order tracking, Returns handling' },
        { name: 'Dynamic Pricing Engine', href: '/dynamic-pricing-engine', price: 'From $149/month', features: 'Competitor analysis, Price optimization, Profit maximization' },
        { name: 'Social Commerce Platform', href: '/social-commerce-platform', price: 'From $199/month', features: 'Instagram shopping, Live selling, Influencer tools' },
        { name: 'Subscription Management', href: '/subscription-management', price: 'From $89/month', features: 'Recurring billing, Customer retention, Analytics' },
        { name: 'AI Inventory Predictor', href: '/ai-inventory-predictor', price: 'From $119/month', features: 'Demand forecasting, Stock optimization, Reorder alerts' },
        { name: 'Mobile Commerce App', href: '/mobile-commerce-app', price: 'From $299/month', features: 'iOS/Android app, Push notifications, Mobile payments' }
      ]
    },
    {
      title: 'Marketing Automation',
      icon: <Megaphone className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-600',
      description: 'Advanced marketing tools and automation platforms',
      services: [
        { name: 'AI Email Campaign Manager', href: '/ai-email-campaign-manager', price: 'From $99/month', features: 'Personalization, A/B testing, Send time optimization' },
        { name: 'Social Media Scheduler Pro', href: '/social-media-scheduler-pro', price: 'From $79/month', features: 'Multi-platform posting, Content calendar, Analytics' },
        { name: 'Lead Generation Engine', href: '/lead-generation-engine', price: 'From $149/month', features: 'Prospect research, Contact enrichment, Outreach automation' },
        { name: 'AI Content Calendar', href: '/ai-content-calendar', price: 'From $59/month', features: 'Content planning, Trend analysis, Publishing schedule' },
        { name: 'Influencer Marketing Platform', href: '/influencer-marketing-platform', price: 'From $199/month', features: 'Influencer discovery, Campaign management, ROI tracking' },
        { name: 'Video Marketing Suite', href: '/video-marketing-suite', price: 'From $179/month', features: 'Video creation, Editing tools, Distribution' },
        { name: 'Voice Search Optimizer', href: '/voice-search-optimizer', price: 'From $89/month', features: 'Voice SEO, Featured snippets, Local optimization' },
        { name: 'AI Ad Campaign Manager', href: '/ai-ad-campaign-manager', price: 'From $199/month', features: 'Auto-bidding, Audience targeting, Performance optimization' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      description: 'Powerful data processing and business intelligence tools',
      services: [
        { name: 'Real-Time Analytics Dashboard', href: '/real-time-analytics-dashboard', price: 'From $199/month', features: 'Live data visualization, Custom metrics, Alerts' },
        { name: 'AI Data Cleaner', href: '/ai-data-cleaner', price: 'From $79/month', features: 'Duplicate removal, Data validation, Format standardization' },
        { name: 'Predictive Analytics Engine', href: '/predictive-analytics-engine', price: 'From $299/month', features: 'Forecasting, Trend analysis, Risk assessment' },
        { name: 'Customer Journey Mapper', href: '/customer-journey-mapper', price: 'From $149/month', features: 'Touchpoint tracking, Conversion analysis, Optimization' },
        { name: 'Competitive Intelligence', href: '/competitive-intelligence', price: 'From $179/month', features: 'Market monitoring, Price tracking, Feature analysis' },
        { name: 'AI Report Generator', href: '/ai-report-generator', price: 'From $99/month', features: 'Automated reports, Data visualization, Scheduling' },
        { name: 'Data Warehouse Manager', href: '/data-warehouse-manager', price: 'From $249/month', features: 'Data integration, ETL processes, Storage optimization' },
        { name: 'Business Intelligence Suite', href: '/business-intelligence-suite', price: 'From $399/month', features: 'KPI tracking, Executive dashboards, Strategic insights' }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden group">
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
              
              <div className="space-y-2 sm:space-y-3 relative z-10">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.href}
                    className="block p-3 sm:p-4 bg-slate-700/40 rounded-lg hover:bg-slate-600/60 transition-all duration-300 group border border-slate-600/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1 group-hover:text-green-300 transition-colors" />
                        <span className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">{service.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 text-xs font-semibold group-hover:text-cyan-300 transition-colors">{service.price}</span>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 ml-7 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {service.features}
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