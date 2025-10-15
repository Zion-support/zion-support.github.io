import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', path: '/', description: 'Landing page with hero section and services overview' },
        { name: 'About Us', path: '/about', description: 'Company information, team, and mission' },
        { name: 'Portfolio', path: '/portfolio', description: 'Our work and case studies' },
        { name: 'Pricing', path: '/pricing', description: 'Service plans and pricing information' },
        { name: 'News', path: '/news', description: 'Latest updates and industry news' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our team' }
      ]
    },
    {
      category: 'AI Services',
      pages: [
        { name: 'AI Services Overview', path: '/ai-services', description: 'Comprehensive AI solutions and services' },
        { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro', description: 'Advanced analytics and business intelligence' },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro', description: 'AI-powered content creation tools' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project management solutions' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service automation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Smart email marketing campaigns' },
        { name: 'AI Code Assistant Pro', path: '/ai-code-assistant-pro', description: 'AI-powered coding assistance' },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', description: 'Advanced business intelligence solutions' },
        { name: 'AI Healthcare Assistant', path: '/ai-healthcare-assistant', description: 'Medical AI for healthcare professionals' },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Intelligent financial planning and advice' },
        { name: 'AI Legal Assistant', path: '/ai-legal-assistant', description: 'Legal AI for document analysis and research' },
        { name: 'AI HR Management', path: '/ai-hr-management', description: 'Human resources automation and analytics' },
        { name: 'AI Supply Chain Optimizer', path: '/ai-supply-chain-optimizer', description: 'Supply chain optimization and management' },
        { name: 'AI Real Estate Assistant', path: '/ai-real-estate-assistant', description: 'Real estate market analysis and insights' },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental sustainability and climate solutions' },
        { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro', description: 'Smart farming and agricultural optimization' }
      ]
    },
    {
      category: 'IT Services',
      pages: [
        { name: 'IT Services Overview', path: '/it-services', description: 'Comprehensive IT solutions and services' },
        { name: 'Cloud Migration Services', path: '/cloud-migration-services', description: 'AWS, Azure, and GCP migration solutions' },
        { name: 'Cybersecurity Consulting', path: '/cybersecurity-consulting', description: 'Security audits and protection services' },
        { name: 'Database Solutions', path: '/database-solutions', description: 'Database design, optimization, and management' },
        { name: 'DevOps Solutions', path: '/devops-solutions', description: 'CI/CD pipelines and infrastructure automation' },
        { name: 'API Management', path: '/ai-api-management', description: 'API gateway and management solutions' },
        { name: 'Performance Monitoring', path: '/performance-monitoring', description: 'Application and infrastructure monitoring' },
        { name: 'Web Development', path: '/web-development', description: 'Modern web applications and websites' },
        { name: 'Mobile App Development', path: '/mobile-development', description: 'iOS and Android mobile applications' },
        { name: 'Blockchain Development', path: '/blockchain-development', description: 'Smart contracts and blockchain solutions' },
        { name: 'IoT Solutions', path: '/iot-solutions', description: 'Internet of Things implementation and management' },
        { name: 'AR/VR Development', path: '/ar-vr-development', description: 'Augmented and virtual reality applications' },
        { name: 'Machine Learning Ops', path: '/mlops-solutions', description: 'ML model deployment and management' }
      ]
    },
    {
      category: '5G Solutions',
      pages: [
        { name: '5G Implementation', path: '/5g-implementation', description: 'Complete 5G network implementation' },
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', description: '5G infrastructure design and deployment' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions', description: '5G-powered IoT applications' },
        { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions', description: 'Smart city infrastructure and applications' },
        { name: '5G Edge Computing', path: '/5g-edge-computing', description: 'Edge computing and low-latency processing' },
        { name: '5G Private Networks', path: '/5g-private-networks', description: 'Private 5G network solutions' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications', description: '5G-optimized mobile applications' },
        { name: '5G Data Analytics', path: '/5g-data-analytics', description: 'Real-time 5G data analysis' },
        { name: '5G Autonomous Vehicles', path: '/5g-autonomous-vehicles', description: '5G for autonomous vehicle communication' },
        { name: '5G Healthcare Solutions', path: '/5g-healthcare-solutions', description: '5G-enabled healthcare applications' },
        { name: '5G Industrial IoT', path: '/5g-industrial-iot', description: 'Industrial IoT with 5G connectivity' },
        { name: '5G Security Solutions', path: '/5g-security-solutions', description: '5G network security and protection' }
      ]
    },
    {
      category: 'E-Commerce & Marketing',
      pages: [
        { name: 'AI-Powered Store Builder', path: '/ai-store-builder', description: 'Automated e-commerce store creation' },
        { name: 'Multi-Channel Sales Manager', path: '/multi-channel-sales', description: 'Cross-platform sales management' },
        { name: 'AI Customer Service Bot', path: '/ai-customer-service-bot', description: 'Intelligent customer service automation' },
        { name: 'Dynamic Pricing Engine', path: '/dynamic-pricing-engine', description: 'AI-powered pricing optimization' },
        { name: 'Social Commerce Platform', path: '/social-commerce-platform', description: 'Social media commerce solutions' },
        { name: 'Subscription Management', path: '/subscription-management', description: 'Recurring billing and subscription services' },
        { name: 'AI Inventory Predictor', path: '/ai-inventory-predictor', description: 'Intelligent inventory forecasting' },
        { name: 'Mobile Commerce App', path: '/mobile-commerce-app', description: 'Mobile commerce applications' },
        { name: 'AI Email Campaign Manager', path: '/ai-email-campaign-manager', description: 'Automated email marketing campaigns' },
        { name: 'Social Media Scheduler Pro', path: '/social-media-scheduler-pro', description: 'Social media content scheduling' },
        { name: 'Lead Generation Engine', path: '/lead-generation-engine', description: 'Automated lead generation and nurturing' },
        { name: 'AI Content Calendar', path: '/ai-content-calendar', description: 'Intelligent content planning and scheduling' },
        { name: 'Influencer Marketing Platform', path: '/influencer-marketing-platform', description: 'Influencer marketing management' },
        { name: 'Video Marketing Suite', path: '/video-marketing-suite', description: 'Video content creation and marketing' },
        { name: 'Voice Search Optimizer', path: '/voice-search-optimizer', description: 'Voice search optimization tools' },
        { name: 'AI Ad Campaign Manager', path: '/ai-ad-campaign-manager', description: 'Automated advertising campaign management' }
      ]
    },
    {
      category: 'Data & Analytics',
      pages: [
        { name: 'Real-Time Analytics Dashboard', path: '/real-time-analytics-dashboard', description: 'Live data visualization and monitoring' },
        { name: 'AI Data Cleaner', path: '/ai-data-cleaner', description: 'Automated data cleaning and validation' },
        { name: 'Predictive Analytics Engine', path: '/predictive-analytics-engine', description: 'Advanced predictive modeling' },
        { name: 'Customer Journey Mapper', path: '/customer-journey-mapper', description: 'Customer experience analytics' },
        { name: 'Competitive Intelligence', path: '/competitive-intelligence', description: 'Market and competitor analysis' },
        { name: 'AI Report Generator', path: '/ai-report-generator', description: 'Automated report generation' },
        { name: 'Data Warehouse Manager', path: '/data-warehouse-manager', description: 'Data storage and management solutions' },
        { name: 'Business Intelligence Suite', path: '/business-intelligence-suite', description: 'Comprehensive BI solutions' }
      ]
    },
    {
      category: 'Support & Resources',
      pages: [
        { name: 'Help Center', path: '/help', description: 'Comprehensive help and documentation' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation and guides' },
        { name: 'API Reference', path: '/api-docs', description: 'API documentation and integration guides' },
        { name: 'System Status', path: '/status', description: 'Service status and uptime monitoring' },
        { name: 'Report Issue', path: '/support', description: 'Technical support and issue reporting' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities and company culture' }
      ]
    },
    {
      category: 'Legal & Compliance',
      pages: [
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'Data privacy and protection policy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions of service' },
        { name: 'Service Level Agreement', path: '/sla', description: 'Service level commitments and guarantees' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage and management policy' },
        { name: 'GDPR Compliance', path: '/gdpr', description: 'General Data Protection Regulation compliance' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, 5G services, and support resources in one place." />
        <meta name="keywords" content="sitemap, navigation, ai services, it services, 5g solutions, micro saas, e-commerce, marketing automation" />
        <meta property="og:title" content="Sitemap - Zion Tech Group" />
        <meta property="og:description" content="Complete navigation guide for all our services and resources" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Map</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Navigate through all our services, solutions, and resources. 
                Find exactly what you're looking for with our comprehensive site map.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {siteStructure.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <h2 className="text-3xl font-bold text-white mb-8 border-b border-cyan-500/30 pb-4">
                    {category.category}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-3">
                          <Link
                            to={page.path}
                            className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 flex items-center"
                          >
                            {page.name}
                            <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </Link>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our team is here to help you find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  to="/help"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;