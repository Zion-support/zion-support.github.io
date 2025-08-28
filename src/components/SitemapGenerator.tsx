import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Globe, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  Star,
  Atom,
  Network,
  Eye,
  PenTool,
  TrendingUp,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  DollarSign,
  Workflow,
  Settings,
  Lock,
  BarChart3,
  Cpu,
  Building,
  Server,
  Activity,
  GraduationCap,
  Newspaper,
  Target,
  Briefcase,
  Phone,
  MapPin,
  Mail
} from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  routes: SitemapRoute[];
  featured?: boolean;
}

interface SitemapRoute {
  path: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  featured?: boolean;
  external?: boolean;
}

export const SitemapGenerator: React.FC = () => {
  const [sitemapData, setSitemapData] = useState<SitemapSection[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    generateSitemap();
  }, []);

  const generateSitemap = () => {
    const sitemap: SitemapSection[] = [
      {
        title: 'Main Pages',
        icon: Globe,
        description: 'Core website pages and navigation',
        routes: [
          { path: '/', name: 'Home', description: 'Main landing page', icon: Home, category: 'Main' },
          { path: '/about', name: 'About Us', description: 'Company information and mission', icon: Users, category: 'Main' },
          { path: '/contact', name: 'Contact', description: 'Get in touch with our team', icon: MessageCircle, category: 'Main' },
          { path: '/careers', name: 'Careers', description: 'Job opportunities and career information', icon: Briefcase, category: 'Main' },
          { path: '/partners', name: 'Partners', description: 'Strategic partnerships and collaborations', icon: Users, category: 'Main' },
          { path: '/blog', name: 'Blog', description: 'Latest news and insights', icon: Newspaper, category: 'Main' },
          { path: '/news', name: 'News', description: 'Company news and announcements', icon: Newspaper, category: 'Main' },
          { path: '/events', name: 'Events', description: 'Upcoming events and webinars', icon: Calendar, category: 'Main' },
        ]
      },
      {
        title: 'Featured Services 2026-2027',
        icon: Star,
        description: 'Latest and most innovative service offerings',
        featured: true,
        routes: [
          { path: '/services2026', name: '2026 Services Overview', description: 'Revolutionary AI & Quantum Solutions', icon: Star, category: 'Featured', featured: true },
          { path: '/services2027', name: '2027 Services Overview', description: 'Cutting-edge Innovation & Emerging Tech', icon: Star, category: 'Featured', featured: true },
          { path: '/ultimate-services-showcase-2026', name: 'Ultimate Services 2026', description: 'Comprehensive service portfolio', icon: Crown, category: 'Featured', featured: true },
          { path: '/comprehensive-services-showcase-2025', name: 'Comprehensive Services 2025', description: 'Full service catalog overview', icon: Globe, category: 'Featured', featured: true },
        ]
      },
      {
        title: 'AI & Machine Learning Services',
        icon: Brain,
        description: 'Advanced artificial intelligence and machine learning solutions',
        routes: [
          { path: '/services/ai-business-intelligence', name: 'AI Business Intelligence', description: 'Advanced analytics & ML insights', icon: BarChart3, category: 'AI & ML' },
          { path: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', description: 'Automated regulatory compliance', icon: Shield, category: 'AI & ML' },
          { path: '/services/ai-sales-copilot', name: 'AI Sales Copilot', description: 'Intelligent sales optimization', icon: Users, category: 'AI & ML' },
          { path: '/services/ai-seo', name: 'AI-Powered SEO', description: 'Machine learning SEO optimization', icon: TrendingUp, category: 'AI & ML' },
          { path: '/services/interview-assessment', name: 'Interview Assessment AI', description: 'AI-powered candidate evaluation', icon: Users, category: 'AI & ML' },
          { path: '/services/ai-content-marketing-suite', name: 'AI Content Marketing Suite', description: 'Automated content creation and marketing', icon: PenTool, category: 'AI & ML' },
          { path: '/services/ai-supply-chain-optimization', name: 'AI Supply Chain Optimization', description: 'Intelligent supply chain management', icon: TrendingUp, category: 'AI & ML' },
          { path: '/services/ai-healthcare-platform', name: 'AI Healthcare Platform', description: 'Healthcare technology solutions', icon: Heart, category: 'AI & ML' },
          { path: '/services/ai-cybersecurity-platform', name: 'AI Cybersecurity Platform', description: 'Advanced security with AI', icon: Shield, category: 'AI & ML' },
          { path: '/services/ai-quantum-hybrid-platform', name: 'AI Quantum Hybrid Platform', description: 'Quantum-AI hybrid solutions', icon: Atom, category: 'AI & ML' },
          { path: '/services/ai-autonomous-research-assistant', name: 'AI Autonomous Research Assistant', description: 'Automated research and analysis', icon: Brain, category: 'AI & ML' },
          { path: '/services/ai-project-management', name: 'AI Project Management', description: 'Intelligent project coordination', icon: Target, category: 'AI & ML' },
          { path: '/services/ai-customer-support-automation', name: 'AI Customer Support Automation', description: 'Automated customer service', icon: MessageCircle, category: 'AI & ML' },
          { path: '/services/ai-financial-analytics', name: 'AI Financial Analytics', description: 'Financial data analysis and insights', icon: DollarSign, category: 'AI & ML' },
          { path: '/services/ai-marketing-automation', name: 'AI Marketing Automation', description: 'Intelligent marketing workflows', icon: TrendingUp, category: 'AI & ML' },
        ]
      },
      {
        title: 'Cloud & DevOps Services',
        icon: Cloud,
        description: 'Cloud infrastructure and development operations solutions',
        routes: [
          { path: '/services/cloud-devops', name: 'Cloud DevOps', description: 'Infrastructure automation & scaling', icon: Cloud, category: 'Cloud & DevOps' },
          { path: '/services/it-infrastructure', name: 'IT Infrastructure', description: 'Enterprise infrastructure solutions', icon: Server, category: 'Cloud & DevOps' },
          { path: '/services/finops-advisor', name: 'FinOps Advisor', description: 'Cloud cost optimization', icon: DollarSign, category: 'Cloud & DevOps' },
          { path: '/services/cloud-finops-optimizer', name: 'Cloud FinOps Optimizer', description: 'Financial operations automation', icon: BarChart3, category: 'Cloud & DevOps' },
          { path: '/services/digital-transformation', name: 'Digital Transformation', description: 'Strategic technology consulting', icon: Zap, category: 'Cloud & DevOps' },
          { path: '/services/digital-twin', name: 'Digital Twin', description: 'Virtual system replicas', icon: Eye, category: 'Cloud & DevOps' },
        ]
      },
      {
        title: 'Cybersecurity & Privacy',
        icon: Shield,
        description: 'Security solutions and privacy protection services',
        routes: [
          { path: '/services/security-headers-csp', name: 'Security Headers & CSP', description: 'Web security hardening', icon: Lock, category: 'Cybersecurity' },
          { path: '/services/dsr-portal', name: 'DSR Privacy Portal', description: 'GDPR/CCPA compliance', icon: Shield, category: 'Cybersecurity' },
          { path: '/services/zero-trust-network-access', name: 'Zero Trust Network Access', description: 'Advanced network security', icon: Lock, category: 'Cybersecurity' },
          { path: '/privacy', name: 'Privacy Policy', description: 'Data protection and privacy', icon: Shield, category: 'Cybersecurity' },
          { path: '/security', name: 'Security', description: 'Security information and policies', icon: Shield, category: 'Cybersecurity' },
        ]
      },
      {
        title: 'Emerging Technologies',
        icon: Atom,
        description: 'Cutting-edge and next-generation technology solutions',
        routes: [
          { path: '/services/quantum-computing', name: 'Quantum Computing', description: 'Next-gen computational power', icon: Atom, category: 'Emerging Tech' },
          { path: '/services/iot-edge-computing', name: 'IoT Edge Computing', description: 'Smart device networks', icon: Network, category: 'Emerging Tech' },
          { path: '/services/ai-content-creation', name: 'AI Content Creation', description: 'Automated content generation', icon: PenTool, category: 'Emerging Tech' },
          { path: '/services/ai-hr-platform', name: 'AI HR Platform', description: 'Human resources automation', icon: Users, category: 'Emerging Tech' },
          { path: '/services/sustainable-technology', name: 'Sustainable Technology', description: 'Green and eco-friendly solutions', icon: Globe, category: 'Emerging Tech' },
          { path: '/services/ai-predictive-maintenance', name: 'AI Predictive Maintenance', description: 'Predictive analytics for maintenance', icon: TrendingUp, category: 'Emerging Tech' },
          { path: '/services/quantum-machine-learning', name: 'Quantum Machine Learning', description: 'Quantum-enhanced ML algorithms', icon: Brain, category: 'Emerging Tech' },
        ]
      },
      {
        title: 'Data & Analytics',
        icon: BarChart3,
        description: 'Business intelligence and data analysis services',
        routes: [
          { path: '/services/data-analytics', name: 'Data Analytics', description: 'Business intelligence & insights', icon: BarChart3, category: 'Data & Analytics' },
          { path: '/services/website-analytics', name: 'Website Analytics', description: 'Web performance and user behavior', icon: BarChart3, category: 'Data & Analytics' },
          { path: '/services/affiliate-tracking', name: 'Affiliate Tracking', description: 'Affiliate program management', icon: TrendingUp, category: 'Data & Analytics' },
          { path: '/analytics', name: 'Analytics Dashboard', description: 'Performance metrics and reporting', icon: BarChart3, category: 'Data & Analytics' },
        ]
      },
      {
        title: 'Micro SaaS Solutions',
        icon: Zap,
        description: 'Specialized software-as-a-service applications',
        routes: [
          { path: '/services/micro-saas-solutions', name: 'Micro SaaS Platform', description: 'Niche software solutions', icon: ShoppingCart, category: 'Micro SaaS' },
          { path: '/services/micro-crm', name: 'Micro CRM', description: 'Customer relationship management', icon: Users, category: 'Micro SaaS' },
          { path: '/services/helpdesk', name: 'Helpdesk Platform', description: 'Customer support system', icon: MessageCircle, category: 'Micro SaaS' },
          { path: '/services/ai-auto-email-responder', name: 'AI Auto Email Responder', description: 'Automated email management', icon: MessageCircle, category: 'Micro SaaS' },
          { path: '/services/customer-feedback-surveys', name: 'Customer Feedback Surveys', description: 'Feedback collection and analysis', icon: MessageCircle, category: 'Micro SaaS' },
          { path: '/services/ai-compliance-copilot', name: 'AI Compliance Copilot', description: 'Compliance assistance and monitoring', icon: Shield, category: 'Micro SaaS' },
          { path: '/services/llm-content-studio', name: 'LLM Content Studio', description: 'Large language model content creation', icon: PenTool, category: 'Micro SaaS' },
          { path: '/services/returns-management', name: 'Returns Management', description: 'Product returns processing', icon: ShoppingCart, category: 'Micro SaaS' },
          { path: '/services/email-sequencer', name: 'Email Sequencer', description: 'Automated email sequences', icon: MessageCircle, category: 'Micro SaaS' },
          { path: '/services/podcast-transcription', name: 'Podcast Transcription', description: 'Audio content transcription', icon: MessageCircle, category: 'Micro SaaS' },
          { path: '/services/mobile-survey', name: 'Mobile Survey', description: 'Mobile survey solutions', icon: MessageCircle, category: 'Micro SaaS' },
        ]
      },
      {
        title: 'Business & Support',
        icon: Building,
        description: 'Business solutions and customer support services',
        routes: [
          { path: '/marketplace', name: 'Marketplace', description: 'Product and service marketplace', icon: ShoppingCart, category: 'Business' },
          { path: '/talent', name: 'Talent Solutions', description: 'Human resources and recruitment', icon: Users, category: 'Business' },
          { path: '/equipment', name: 'Equipment Services', description: 'Hardware and equipment solutions', icon: Server, category: 'Business' },
          { path: '/request-quote', name: 'Request Quote', description: 'Get pricing for our services', icon: MessageCircle, category: 'Business' },
          { path: '/case-studies', name: 'Case Studies', description: 'Success stories and examples', icon: BookOpen, category: 'Business' },
          { path: '/help-center', name: 'Help Center', description: 'Customer support and documentation', icon: HelpCircle, category: 'Business' },
          { path: '/support', name: 'Support', description: 'Technical support and assistance', icon: MessageCircle, category: 'Business' },
          { path: '/training', name: 'Training', description: 'Professional development and education', icon: GraduationCap, category: 'Business' },
          { path: '/webinars', name: 'Webinars', description: 'Educational webinars and sessions', icon: Video, category: 'Business' },
          { path: '/white-papers', name: 'White Papers', description: 'Technical documentation and research', icon: FileText, category: 'Business' },
          { path: '/documentation', name: 'Documentation', description: 'Technical documentation and guides', icon: FileText, category: 'Business' },
          { path: '/developers', name: 'Developer Portal', description: 'Developer resources and APIs', icon: Code, category: 'Business' },
          { path: '/api', name: 'API', description: 'Application programming interfaces', icon: Code, category: 'Business' },
        ]
      },
      {
        title: 'Legal & Information',
        icon: FileText,
        description: 'Legal documents and company information',
        routes: [
          { path: '/terms', name: 'Terms of Service', description: 'Service terms and conditions', icon: FileText, category: 'Legal' },
          { path: '/cookies', name: 'Cookie Policy', description: 'Cookie usage and privacy', icon: FileText, category: 'Legal' },
          { path: '/sitemap', name: 'Sitemap', description: 'Complete website structure', icon: FileText, category: 'Legal' },
          { path: '/status', name: 'System Status', description: 'Service status and uptime', icon: Activity, category: 'Legal' },
          { path: '/system-status', name: 'System Status', description: 'Detailed system information', icon: Activity, category: 'Legal' },
        ]
      }
    ];

    setSitemapData(sitemap);
  };

  const filteredSitemap = sitemapData.map(section => ({
    ...section,
    routes: section.routes.filter(route => {
      const matchesSearch = route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           route.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           route.path.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || route.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  })).filter(section => section.routes.length > 0);

  const allCategories = ['all', ...Array.from(new Set(sitemapData.flatMap(section => 
    section.routes.map(route => route.category)
  )))];

  const exportSitemap = () => {
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData.flatMap(section => 
  section.routes.map(route => 
    `  <url>
    <loc>https://ziontechgroup.com${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
).join('\n')}
</urlset>`;

    const blob = new Blob([sitemapXml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportCSV = () => {
    const csvContent = [
      ['Path', 'Name', 'Description', 'Category', 'Featured'],
      ...sitemapData.flatMap(section => 
        section.routes.map(route => [
          route.path,
          route.name,
          route.description,
          route.category,
          route.featured ? 'Yes' : 'No'
        ])
      )
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Website Sitemap</h1>
            <p className="text-gray-600 mt-2">
              Complete navigation structure and route documentation for Zion Tech Group
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={exportSitemap}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Export XML
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search routes, names, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="w-full md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {allCategories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="space-y-8">
          {filteredSitemap.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <section.icon className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className={`text-xl font-semibold ${section.featured ? 'text-blue-600' : 'text-gray-900'}`}>
                  {section.title}
                  {section.featured && <Star className="w-5 h-5 text-yellow-500 ml-2 inline" />}
                </h2>
              </div>
              <p className="text-gray-600 mb-4">{section.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.routes.map((route, routeIndex) => (
                  <div
                    key={routeIndex}
                    className={`p-4 border rounded-lg transition-all duration-200 hover:shadow-md ${
                      route.featured 
                        ? 'border-blue-300 bg-blue-50' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        route.featured 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <route.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-gray-900 truncate">{route.name}</h3>
                          {route.featured && <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />}
                        </div>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{route.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {route.category}
                          </span>
                          <Link
                            to={route.path}
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                          >
                            View →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {sitemapData.reduce((total, section) => total + section.routes.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Routes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {sitemapData.length}
              </div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {sitemapData.flatMap(section => section.routes).filter(route => route.featured).length}
              </div>
              <div className="text-sm text-gray-600">Featured Routes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Array.from(new Set(sitemapData.flatMap(section => 
                  section.routes.map(route => route.category)
                ))).length}
              </div>
              <div className="text-sm text-gray-600">Unique Categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Missing icon components
const Home = () => <Globe className="w-4 h-4" />;
const Calendar = () => <BookOpen className="w-4 h-4" />;
const Video = () => <MessageCircle className="w-4 h-4" />;
const Code = () => <Settings className="w-4 h-4" />;

export default SitemapGenerator;