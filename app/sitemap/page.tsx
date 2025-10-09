import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Search, FileText, Users, Settings, BarChart, Zap } from 'lucide-react';

export default function SitemapPage() {
  const siteStructure = {
    main: [
      { name: 'Home', path: '/', description: 'Main landing page' },
      { name: 'About', path: '/about', description: 'About Zion Tech Group' },
      { name: 'Services', path: '/services', description: 'All our services' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
      { name: 'Team', path: '/team', description: 'Meet our team' },
      { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
      { name: 'Enterprise', path: '/enterprise', description: 'Enterprise solutions' },
    ],
    services: [
      { name: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
      { name: 'IT Services', path: '/it-services', description: 'Information Technology services' },
      { name: 'Micro SAAS', path: '/micro-saas', description: 'Micro Software as a Service' },
      { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing solutions' },
      { name: 'AI Automation', path: '/ai-automation', description: 'AI automation services' },
      { name: 'AI Healthcare', path: '/ai-healthcare', description: 'AI healthcare solutions' },
      { name: 'AI Fintech', path: '/ai-fintech', description: 'AI financial technology' },
      { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum computing services' },
      { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Autonomous system solutions' },
      { name: 'Business Intelligence', path: '/business-intelligence', description: 'BI and analytics' },
      { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Blockchain and Web3 solutions' },
      { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'IoT and edge computing' },
      { name: 'Cybersecurity', path: '/cybersecurity', description: 'Cybersecurity solutions' },
      { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration services' },
      { name: 'IT Consulting', path: '/it-consulting', description: 'IT consulting services' },
      { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing automation tools' },
      { name: 'Productivity', path: '/productivity', description: 'Productivity solutions' },
      { name: 'Security', path: '/security', description: 'Security services' },
      { name: 'Support', path: '/support', description: 'Technical support' },
    ],
    resources: [
      { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
      { name: 'News', path: '/news', description: 'Company news and updates' },
      { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
      { name: 'API Documentation', path: '/api-docs', description: 'API reference and guides' },
      { name: 'Status', path: '/status', description: 'System status and uptime' },
      { name: 'System Status', path: '/system-status', description: 'Detailed system monitoring' },
    ],
    guides: [
      { name: 'AI 2026 Implementation Roadmap', path: '/guides/ai-2026-implementation-roadmap', description: 'Complete AI implementation guide' },
      { name: 'AI 2027 Implementation Roadmap', path: '/guides/ai-2027-implementation-roadmap', description: 'Advanced AI implementation guide' },
      { name: 'Autonomous Business Processes Guide', path: '/guides/autonomous-business-processes-implementation-guide-2026', description: 'Business process automation guide' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy and data protection' },
      { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
      { name: 'GDPR', path: '/gdpr', description: 'GDPR compliance information' },
      { name: 'SLA', path: '/sla', description: 'Service Level Agreement' },
      { name: 'Compliance', path: '/compliance', description: 'Compliance and certifications' },
      { name: 'Cookies', path: '/cookies', description: 'Cookie policy' },
    ],
    specialized: [
      { name: 'AI 3D Generation', path: '/ai-3d-generation', description: 'AI-powered 3D content generation' },
      { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'Advanced analytics dashboard' },
      { name: 'AI Analytics', path: '/ai-analytics', description: 'AI analytics solutions' },
      { name: 'AI Cloud Infrastructure', path: '/ai-cloud-infrastructure', description: 'AI cloud infrastructure' },
      { name: 'AI Code Generation', path: '/ai-code-generation', description: 'AI code generation tools' },
      { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
      { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: 'AI customer support' },
      { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered cybersecurity' },
      { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'AI data analysis' },
      { name: 'AI Document Processor', path: '/ai-document-processor', description: 'AI document processing' },
      { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'AI email marketing' },
      { name: 'AI Enterprise Solutions', path: '/ai-enterprise-solutions', description: 'Enterprise AI solutions' },
      { name: 'AI Fashion Design', path: '/ai-fashion-design', description: 'AI fashion design tools' },
      { name: 'AI Fitness Coach', path: '/ai-fitness-coach', description: 'AI fitness coaching' },
      { name: 'AI Healthcare Solutions', path: '/ai-healthcare-solutions', description: 'AI healthcare' },
      { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI music creation' },
      { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'AI predictive analytics' },
      { name: 'AI Project Manager', path: '/ai-project-manager', description: 'AI project management' },
      { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'AI SEO optimization' },
      { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'AI social media management' },
      { name: 'AI Video Generation', path: '/ai-video-generation', description: 'AI video creation' },
      { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'AI voice synthesis' },
      { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Augmented and Virtual Reality' },
      { name: 'IT Infrastructure Solutions', path: '/it-infrastructure-solutions', description: 'IT infrastructure' },
      { name: 'Smart Cities', path: '/smart-cities', description: 'Smart city solutions' },
    ]
  };

  const SectionCard = ({ title, icon: Icon, items, color = "blue" }) => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Icon className={`w-6 h-6 text-${color}-600 mr-3`} />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-1">
              <Link 
                to={item.path}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {item.name}
              </Link>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link 
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Site Map</h1>
          <p className="text-lg text-gray-600">
            Navigate through all pages and sections of Zion Tech Group website
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SectionCard 
            title="Main Pages" 
            icon={FileText} 
            items={siteStructure.main} 
            color="blue" 
          />
          <SectionCard 
            title="Services" 
            icon={Settings} 
            items={siteStructure.services} 
            color="green" 
          />
          <SectionCard 
            title="Resources" 
            icon={Search} 
            items={siteStructure.resources} 
            color="purple" 
          />
          <SectionCard 
            title="Implementation Guides" 
            icon={BarChart} 
            items={siteStructure.guides} 
            color="orange" 
          />
          <SectionCard 
            title="Legal & Compliance" 
            icon={Users} 
            items={siteStructure.legal} 
            color="red" 
          />
          <SectionCard 
            title="Specialized Solutions" 
            icon={Zap} 
            items={siteStructure.specialized} 
            color="indigo" 
          />
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Website Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {Object.values(siteStructure).flat().length}
              </div>
              <div className="text-gray-600">Total Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {siteStructure.services.length}
              </div>
              <div className="text-gray-600">Service Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {siteStructure.specialized.length}
              </div>
              <div className="text-gray-600">Specialized Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {siteStructure.guides.length}
              </div>
              <div className="text-gray-600">Implementation Guides</div>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-blue-100 mb-6">
            Use our search functionality or contact us directly for assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Contact Support
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}