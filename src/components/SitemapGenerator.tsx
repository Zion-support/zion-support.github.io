import { useCallback  } from "react";
import React, { useState, useEffect } from "react"
import { Link   } from "react-router-dom";
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
  Mail;
}
}
 } from "lucide-react";
interface SitemapSection {
  tit,
  l: e: string,ic,
  o: n: React.ComponentType<any>,descripti,
  o: n: string,rout,
  e: s: SitemapRoute[]
  featured?: boolean;
}
}
}

interface SitemapRoute {
  pa,
  t: h: string,na,
  m: e: string,descripti,
  o: n: string,ic,
  o: n: React.ComponentType<any>,catego,
  r: y: string;
  featured?: boolean,
  external?: boolean;
}
}
}

export,
  const: SitemapGenerator: React.FC = () () => {
  const [sitemapData, setSitemapData] = useState<SitemapSection[]>([]),
  const [searchQuery, setSearchQuery] = useState('')
const [selectedCategory, setSelectedCategory] = useState<string>('all')
  useEffect(() () => {
    generateSitemap()
}, [])
const generateSitemap = () () => {
    const,
  sitema: p: SitemapSection[] = [
      {
        titl,
  e: 'Main Pages',ic,
  o: n: Globe,descripti,
  o: n: 'Core website pages and navigation',rout,
  e: s: [
          { pat,
  h: '/', na,
  m: e: 'Home', descripti,
  o: n: 'Main landing page', ic,
  o: n: Home, catego,
  r: y: 'Main' }, { pa,
  t: h: '/about', na,
  m: e: 'About Us', descripti,
  o: n: 'Company information and mission', ic,
  o: n: Users, catego,
  r: y: 'Main' }, { pa,
  t: h: '/contact', na,
  m: e: 'Contact', descripti,
  o: n: 'Get in touch with our team', ic,
  o: n: MessageCircle, catego,
  r: y: 'Main' }, { pa,
  t: h: '/careers', na,
  m: e: 'Careers', descripti,
  o: n: 'Job opportunities and career information', ic,
  o: n: Briefcase, catego,
  r: y: 'Main' }, { pa,
  t: h: '/partners', na,
  m: e: 'Partners', descripti,
  o: n: 'Strategic partnerships and collaborations', ic,
  o: n: Users, catego,
  r: y: 'Main' }, { pa,
  t: h: '/blog', na,
  m: e: 'Blog', descripti,
  o: n: 'Latest news and insights', ic,
  o: n: Newspaper, catego,
  r: y: 'Main' }, { pa,
  t: h: '/news', na,
  m: e: 'News', descripti,
  o: n: 'Company news and announcements', ic,
  o: n: Newspaper, catego,
  r: y: 'Main' }, { pa,
  t: h: '/events', na,
  m: e: 'Events', descripti,
  o: n: 'Upcoming events and webinars', ic,
  o: n: Calendar, catego,
  r: y: 'Main' },
  ],
  }, {
        tit,
  l: e: 'Featured Services 2026-2027',ic,
  o: n: Star,descripti,
  o: n: 'Latest and most innovative service offerings',featur,
  e: d: true,rout,
  e: s: [
          { pat,
  h: '/services2026', na,
  m: e: '2026 Services Overview', descripti,
  o: n: 'Revolutionary AI & Quantum Solutions', ic,
  o: n: Star, catego,
  r: y: 'Featured', featur,
  e: d: true }, { pa,
  t: h: '/services2027', na,
  m: e: '2027 Services Overview', descripti,
  o: n: 'Cutting-edge Innovation & Emerging Tech', ic,
  o: n: Star, catego,
  r: y: 'Featured', featur,
  e: d: true }, { pa,
  t: h: '/ultimate-services-showcase-2026', na,
  m: e: 'Ultimate Services 2026', descripti,
  o: n: 'Comprehensive service portfolio', ic,
  o: n: Crown, catego,
  r: y: 'Featured', featur,
  e: d: true }, { pa,
  t: h: '/comprehensive-services-showcase-2025', na,
  m: e: 'Comprehensive Services 2025', descripti,
  o: n: 'Full service catalog overview', ic,
  o: n: Globe, catego,
  r: y: 'Featured', featur,
  e: d: true },
  ],
  }, {
        tit,
  l: e: 'AI & Machine Learning Services',ic,
  o: n: Brain,descripti,
  o: n: 'Advanced artificial intelligence and machine learning solutions',rout,
  e: s: [
          { pat,
  h: '/services/ai-business-intelligence', na,
  m: e: 'AI Business Intelligence', descripti,
  o: n: 'Advanced analytics & ML insights', ic,
  o: n: BarChart3, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-compliance-assistant', na,
  m: e: 'AI Compliance Assistant', descripti,
  o: n: 'Automated regulatory compliance', ic,
  o: n: Shield, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-sales-copilot', na,
  m: e: 'AI Sales Copilot', descripti,
  o: n: 'Intelligent sales optimization', ic,
  o: n: Users, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-seo', na,
  m: e: 'AI-Powered SEO', descripti,
  o: n: 'Machine learning SEO optimization', ic,
  o: n: TrendingUp, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/interview-assessment', na,
  m: e: 'Interview Assessment AI', descripti,
  o: n: 'AI-powered candidate evaluation', ic,
  o: n: Users, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-content-marketing-suite', na,
  m: e: 'AI Content Marketing Suite', descripti,
  o: n: 'Automated content creation and marketing', ic,
  o: n: PenTool, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-supply-chain-optimization', na,
  m: e: 'AI Supply Chain Optimization', descripti,
  o: n: 'Intelligent supply chain management', ic,
  o: n: TrendingUp, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-healthcare-platform', na,
  m: e: 'AI Healthcare Platform', descripti,
  o: n: 'Healthcare technology solutions', ic,
  o: n: Heart, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-cybersecurity-platform', na,
  m: e: 'AI Cybersecurity Platform', descripti,
  o: n: 'Advanced security with AI', ic,
  o: n: Shield, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-quantum-hybrid-platform', na,
  m: e: 'AI Quantum Hybrid Platform', descripti,
  o: n: 'Quantum-AI hybrid solutions', ic,
  o: n: Atom, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-autonomous-research-assistant', na,
  m: e: 'AI Autonomous Research Assistant', descripti,
  o: n: 'Automated research and analysis', ic,
  o: n: Brain, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-project-management', na,
  m: e: 'AI Project Management', descripti,
  o: n: 'Intelligent project coordination', ic,
  o: n: Target, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-customer-support-automation', na,
  m: e: 'AI Customer Support Automation', descripti,
  o: n: 'Automated customer service', ic,
  o: n: MessageCircle, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-financial-analytics', na,
  m: e: 'AI Financial Analytics', descripti,
  o: n: 'Financial data analysis and insights', ic,
  o: n: DollarSign, catego,
  r: y: 'AI & ML' }, { pa,
  t: h: '/services/ai-marketing-automation', na,
  m: e: 'AI Marketing Automation', descripti,
  o: n: 'Intelligent marketing workflows', ic,
  o: n: TrendingUp, catego,
  r: y: 'AI & ML' },
  ],
  }, {
        tit,
  l: e: 'Cloud & DevOps Services',ic,
  o: n: Cloud,descripti,
  o: n: 'Cloud infrastructure and development operations solutions',rout,
  e: s: [
          { pat,
  h: '/services/cloud-devops', na,
  m: e: 'Cloud DevOps', descripti,
  o: n: 'Infrastructure automation & scaling', ic,
  o: n: Cloud, catego,
  r: y: 'Cloud & DevOps' }, { pa,
  t: h: '/services/it-infrastructure', na,
  m: e: 'IT Infrastructure', descripti,
  o: n: 'Enterprise infrastructure solutions', ic,
  o: n: Server, catego,
  r: y: 'Cloud & DevOps' }, { pa,
  t: h: '/services/finops-advisor', na,
  m: e: 'FinOps Advisor', descripti,
  o: n: 'Cloud cost optimization', ic,
  o: n: DollarSign, catego,
  r: y: 'Cloud & DevOps' }, { pa,
  t: h: '/services/cloud-finops-optimizer', na,
  m: e: 'Cloud FinOps Optimizer', descripti,
  o: n: 'Financial operations automation', ic,
  o: n: BarChart3, catego,
  r: y: 'Cloud & DevOps' }, { pa,
  t: h: '/services/digital-transformation', na,
  m: e: 'Digital Transformation', descripti,
  o: n: 'Strategic technology consulting', ic,
  o: n: Zap, catego,
  r: y: 'Cloud & DevOps' }, { pa,
  t: h: '/services/digital-twin', na,
  m: e: 'Digital Twin', descripti,
  o: n: 'Virtual system replicas', ic,
  o: n: Eye, catego,
  r: y: 'Cloud & DevOps' },
  ],
  }, {
        tit,
  l: e: 'Cybersecurity & Privacy',ic,
  o: n: Shield,descripti,
  o: n: 'Security solutions and privacy protection services',rout,
  e: s: [
          { pat,
  h: '/services/security-headers-csp', na,
  m: e: 'Security Headers & CSP', descripti,
  o: n: 'Web security hardening', ic,
  o: n: Lock, catego,
  r: y: 'Cybersecurity' }, { pa,
  t: h: '/services/dsr-portal', na,
  m: e: 'DSR Privacy Portal', descripti,
  o: n: 'GDPR/CCPA compliance', ic,
  o: n: Shield, catego,
  r: y: 'Cybersecurity' }, { pa,
  t: h: '/services/zero-trust-network-access', na,
  m: e: 'Zero Trust Network Access', descripti,
  o: n: 'Advanced network security', ic,
  o: n: Lock, catego,
  r: y: 'Cybersecurity' }, { pa,
  t: h: '/privacy', na,
  m: e: 'Privacy Policy', descripti,
  o: n: 'Data protection and privacy', ic,
  o: n: Shield, catego,
  r: y: 'Cybersecurity' }, { pa,
  t: h: '/security', na,
  m: e: 'Security', descripti,
  o: n: 'Security information and policies', ic,
  o: n: Shield, catego,
  r: y: 'Cybersecurity' },
  ],
  }, {
        tit,
  l: e: 'Emerging Technologies',ic,
  o: n: Atom,descripti,
  o: n: 'Cutting-edge and next-generation technology solutions',rout,
  e: s: [
          { pat,
  h: '/services/quantum-computing', na,
  m: e: 'Quantum Computing', descripti,
  o: n: 'Next-gen computational power', ic,
  o: n: Atom, catego,
  r: y: 'Emerging Tech' }, { pa,
  t: h: '/services/iot-edge-computing', na,
  m: e: 'IoT Edge Computing', descripti,
  o: n: 'Smart device networks', ic,
  o: n: Network, catego,
  r: y: 'Emerging Tech' }, { pa,
  t: h: '/services/ai-content-creation', na,
  m: e: 'AI Content Creation', descripti,
  o: n: 'Automated content generation', ic,
  o: n: PenTool, catego,
  r: y: 'Emerging Tech' }, { pa,
  t: h: '/services/ai-hr-platform', na,
  m: e: 'AI HR Platform', descripti,
  o: n: 'Human resources automation', ic,
  o: n: Users, catego,
  r: y: 'Emerging Tech' }, { pa,
  t: h: '/services/sustainable-technology', na,
  m: e: 'Sustainable Technology', descripti,
  o: n: 'Green and eco-friendly solutions', ic,
  o: n: Globe, catego,
  r: y: 'Emerging Tech' }, { pa,
  t: h: '/services/ai-predictive-maintenance', na,
  m: e: 'AI Predictive Maintenance', descripti,
  o: n: 'Predictive analytics for maintenance', ic,
  o: n: TrendingUp, catego,
  r: y: 'Emerging Tech' }, { pa,
  t: h: '/services/quantum-machine-learning', na,
  m: e: 'Quantum Machine Learning', descripti,
  o: n: 'Quantum-enhanced ML algorithms', ic,
  o: n: Brain, catego,
  r: y: 'Emerging Tech' },
  ],
  }, {
        tit,
  l: e: 'Data & Analytics',ic,
  o: n: BarChart3,descripti,
  o: n: 'Business intelligence and data analysis services',rout,
  e: s: [
          { pat,
  h: '/services/data-analytics', na,
  m: e: 'Data Analytics', descripti,
  o: n: 'Business intelligence & insights', ic,
  o: n: BarChart3, catego,
  r: y: 'Data & Analytics' }, { pa,
  t: h: '/services/website-analytics', na,
  m: e: 'Website Analytics', descripti,
  o: n: 'Web performance and user behavior', ic,
  o: n: BarChart3, catego,
  r: y: 'Data & Analytics' }, { pa,
  t: h: '/services/affiliate-tracking', na,
  m: e: 'Affiliate Tracking', descripti,
  o: n: 'Affiliate program management', ic,
  o: n: TrendingUp, catego,
  r: y: 'Data & Analytics' }, { pa,
  t: h: '/analytics', na,
  m: e: 'Analytics Dashboard', descripti,
  o: n: 'Performance metrics and reporting', ic,
  o: n: BarChart3, catego,
  r: y: 'Data & Analytics' },
  ],
  }, {
        tit,
  l: e: 'Micro SaaS Solutions',ic,
  o: n: Zap,descripti,
  o: n: 'Specialized software-as-a-service applications',rout,
  e: s: [
          { pat,
  h: '/services/micro-saas-solutions', na,
  m: e: 'Micro SaaS Platform', descripti,
  o: n: 'Niche software solutions', ic,
  o: n: ShoppingCart, catego,
  r: y: 'Micro SaaS' }, { pa,
  t: h: '/services/micro-crm', na,
  m: e: 'Micro CRM', descripti,
  o: n: 'Customer relationship management', ic,
  o: n: Users, catego,
  r: y: 'Micro SaaS' }, { pa,
  t: h: '/services/helpdesk', na,
  m: e: 'Helpdesk Platform', descripti,
  o: n: 'Customer support system', ic,
  o: n: MessageCircle, catego,
  r: y: 'Micro SaaS' }, { pa,
  t: h: '/services/ai-auto-email-responder', na,
  m: e: 'AI Auto Email Responder', descripti,
  o: n: 'Automated email management', ic,
  o: n: MessageCircle, catego,
  r: y: 'Micro SaaS' }, { pa,
  t: h: '/services/customer-feedback-surveys', na,
  m: e: 'Customer Feedback Surveys', descripti,
  o: n: 'Feedback collection and analysis', ic,
  o: n: MessageCircle, catego,
  r: y: 'Micro SaaS' }, { pa,
  t: h: '/services/ai-compliance-copilot', na,
  m: e: 'AI Compliance Copilot', descripti,
  o: n: 'Compliance assistance and monitoring', ic,
  o: n: Shield, catego,
  r: y: 'Micro SaaS' }, { pa,
  t: h: '/services/llm-content-studio', na,
  m: e: 'LLM Content Studio', descripti,
  o: n: 'Large language model content creation', ic,
  o: n: PenTool, catego,
  r: y: 'Micro SaaS' }, { pa,
  t: h: '/services/returns-management', na,
  m: e: 'Returns Management', descripti,
  o: n: 'Product returns processing', ic,
  o: n: ShoppingCart, catego,
  r: y: 'Micro SaaS' }, { pa,
  t: h: '/services/email-sequencer', na,
  m: e: 'Email Sequencer', descripti,
  o: n: 'Automated email sequences', ic,
  o: n: MessageCircle, catego,
  r: y: 'Micro SaaS' }, { pa,
  t: h: '/services/podcast-transcription', na,
  m: e: 'Podcast Transcription', descripti,
  o: n: 'Audio content transcription', ic,
  o: n: MessageCircle, catego,
  r: y: 'Micro SaaS' }, { pa,
  t: h: '/services/mobile-survey', na,
  m: e: 'Mobile Survey', descripti,
  o: n: 'Mobile survey solutions', ic,
  o: n: MessageCircle, catego,
  r: y: 'Micro SaaS' },
  ],
  }, {
        tit,
  l: e: 'Business & Support',ic,
  o: n: Building,descripti,
  o: n: 'Business solutions and customer support services',rout,
  e: s: [
          { pat,
  h: '/marketplace', na,
  m: e: 'Marketplace', descripti,
  o: n: 'Product and service marketplace', ic,
  o: n: ShoppingCart, catego,
  r: y: 'Business' }, { pa,
  t: h: '/talent', na,
  m: e: 'Talent Solutions', descripti,
  o: n: 'Human resources and recruitment', ic,
  o: n: Users, catego,
  r: y: 'Business' }, { pa,
  t: h: '/equipment', na,
  m: e: 'Equipment Services', descripti,
  o: n: 'Hardware and equipment solutions', ic,
  o: n: Server, catego,
  r: y: 'Business' }, { pa,
  t: h: '/request-quote', na,
  m: e: 'Request Quote', descripti,
  o: n: 'Get pricing for our services', ic,
  o: n: MessageCircle, catego,
  r: y: 'Business' }, { pa,
  t: h: '/case-studies', na,
  m: e: 'Case Studies', descripti,
  o: n: 'Success stories and examples', ic,
  o: n: BookOpen, catego,
  r: y: 'Business' }, { pa,
  t: h: '/help-center', na,
  m: e: 'Help Center', descripti,
  o: n: 'Customer support and documentation', ic,
  o: n: HelpCircle, catego,
  r: y: 'Business' }, { pa,
  t: h: '/support', na,
  m: e: 'Support', descripti,
  o: n: 'Technical support and assistance', ic,
  o: n: MessageCircle, catego,
  r: y: 'Business' }, { pa,
  t: h: '/training', na,
  m: e: 'Training', descripti,
  o: n: 'Professional development and education', ic,
  o: n: GraduationCap, catego,
  r: y: 'Business' }, { pa,
  t: h: '/webinars', na,
  m: e: 'Webinars', descripti,
  o: n: 'Educational webinars and sessions', ic,
  o: n: Video, catego,
  r: y: 'Business' }, { pa,
  t: h: '/white-papers', na,
  m: e: 'White Papers', descripti,
  o: n: 'Technical documentation and research', ic,
  o: n: FileText, catego,
  r: y: 'Business' }, { pa,
  t: h: '/documentation', na,
  m: e: 'Documentation', descripti,
  o: n: 'Technical documentation and guides', ic,
  o: n: FileText, catego,
  r: y: 'Business' }, { pa,
  t: h: '/developers', na,
  m: e: 'Developer Portal', descripti,
  o: n: 'Developer resources and APIs', ic,
  o: n: Code, catego,
  r: y: 'Business' }, { pa,
  t: h: '/api', na,
  m: e: 'API', descripti,
  o: n: 'Application programming interfaces', ic,
  o: n: Code, catego,
  r: y: 'Business' },
  ],
  }, {
        tit,
  l: e: 'Legal & Information',ic,
  o: n: FileText,descripti,
  o: n: 'Legal documents and company information',rout,
  e: s: [
          { pat,
  h: '/terms', na,
  m: e: 'Terms of Service', descripti,
  o: n: 'Service terms and conditions', ic,
  o: n: FileText, catego,
  r: y: 'Legal' }, { pa,
  t: h: '/cookies', na,
  m: e: 'Cookie Policy', descripti,
  o: n: 'Cookie usage and privacy', ic,
  o: n: FileText, catego,
  r: y: 'Legal' }, { pa,
  t: h: '/sitemap', na,
  m: e: 'Sitemap', descripti,
  o: n: 'Complete website structure', ic,
  o: n: FileText, catego,
  r: y: 'Legal' }, { pa,
  t: h: '/status', na,
  m: e: 'System Status', descripti,
  o: n: 'Service status and uptime', ic,
  o: n: Activity, catego,
  r: y: 'Legal' }, { pa,
  t: h: '/system-status', na,
  m: e: 'System Status', descripti,
  o: n: 'Detailed system information', ic,
  o: n: Activity, catego,
  r: y: 'Legal' },
  ],
  },
  ]
    setSitemapData(sitemap)
},

  const filteredSitemap = sitemapData.map(section => ({
    ...section,
  route: s: section.routes.filter(route () => {
      const matchesSearch = route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           route.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           route.path.toLowerCase().includes(searchQuery.toLowerCase())
const matchesCategory = selectedCategory === 'all' || route.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  })).filter(section => section.routes.length > 0)
const allCategories = ['all', ...Array.from(new Set(sitemapData.flatMap(section => 
    section.routes.map(route => route.category)
  )))],

  const exportSitemap = () () => {
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="ht,
  t: p: //www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData.flatMap(section => 
  section.routes.map(route => 
    `  <url>
    <loc>http,
  s://ziontechgroup.com${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0],
  }</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
).join('\n')}
</urlset>`
const blob = new Blob([sitemapXml], { ty,
  p: e: 'application/xml' })
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
    a.href = url,
    a.download = 'sitemap.xml',
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
},

  const exportCSV = () () => {
    const csvContent = [
      ['PathName', 'DescriptionCategory', 'Featured'],
      ...sitemapData.flatMap(section => 
        section.routes.map(route => [
          route.path,
          route.name,
          route.description,
          route.category,
          route.featured ? 'Yes' : 'No'
        ])
      )
    ].map(row => row.map(field => `"${field}"`).join()).join('\n')
const blob = new Blob([csvContent], { ty,
  p: e: 'text/csv' })
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
    a.href = url,
    a.download = 'sitemap.csv',
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
},

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Website Sitemap</h1>
            <p className="text-gray-600 mt-2">
              Complete navigation structure and route documentation for Zion Tech Group;
            </p>
          </div>
          <div className="flex space-x-3">
            <button;
              onClick={exportSitemap}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg,
  hove: r:bg-blue-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Export XML;
            </button>
            <button;
              onClick={exportCSV}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg,
  hove: r:bg-green-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV;
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col,
  m: d:flex-row gap-4">
            <div className="flex-1">
              <input;
                type="text"
                placeholder="Search routes, names, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg,
  focu: s: ring-2,
  focu: s:ring-blue-500,
  focu: s:border-transparent"
              />
            </div>
            <div className="w-full m,
  d:w-48">
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg,
  focu: s: ring-2,
  focu: s:ring-blue-500 focu,
  s:border-transparent"
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
                  {section.title},
  {section.featured && <Star className="w-5 h-5 text-yellow-500 ml-2 inline" />}
                </h2>
              </div>
              <p className="text-gray-600 mb-4">{section.description}</p>
              
              <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-4">
                {section.routes.map((route, routeIndex) => (
                  <div;
                    key={routeIndex}
                    className={`p-4 border rounded-lg transition-all duration-200,
  hove: r:shadow-md ${
                      route.featured;
                        ? 'border-blue-300 bg-blue-50' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        route.featured;
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
                          <Link;
                            to={route.path}
                            className="text-xs text-blue-600,
  hove: r:text-blue-800 font-medium"
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
          <div className="grid grid-cols-1,
  m: d:grid-cols-4 gap-4">
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
  ),
},

// Missing icon components;
const Home = () => <Globe className="w-4 h-4" />
const Calendar = () => <BookOpen className="w-4 h-4" />
const Video = () => <MessageCircle className="w-4 h-4" />
const Code = () => <Settings className="w-4 h-4" />
export default SitemapGenerator;