import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Services, 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  FileText, 
  Phone, 
  ShoppingCart,
  HelpCircle,
  DollarSign,
  Newspaper,
  Target,
  Cpu,
  Atom,
  Network,
  Eye,
  Zap,
  Server,
  BarChart3,
  MessageCircle,
  TrendingUp,
  Building,
  Heart,
  Truck,
  Satellite,
  Leaf,
  Lock,
  BookOpen,
  Star
} from 'lucide-react';

const Sitemap = (props: any) => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'Company information' },
        { name: 'Contact', path: '/contact', description: 'Get in touch' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership information' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'Help Center', path: '/help', description: 'Support and documentation' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Pricing', path: '/pricing', description: 'Service pricing information' },
        { name: 'Marketplace', path: '/marketplace', description: 'Product and service marketplace' },
      ]
    },
    {
      title: 'Core Services',
      icon: Services,
      links: [
        { name: 'Services Overview', path: '/services', description: 'All services overview' },
        { name: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', path: '/it-services', description: 'Information Technology solutions' },
        { name: 'Micro SaaS', path: '/micro-saas', description: 'Micro Software as a Service' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', path: '/services/ai-powered-seo', description: 'Machine learning SEO optimization' },
        { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', description: 'AI-powered candidate evaluation' },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
        { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project optimization' },
        { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', description: 'Supply chain AI optimization' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security' },
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      links: [
        { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Technology strategy & planning' },
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      links: [
        { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
        { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Modern security architecture' },
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Zap,
      links: [
        { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic technology consulting' },
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      links: [
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks' },
        { name: 'Space Technology', path: '/space-tech', description: 'Space-based solutions' },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology', description: 'Green technology solutions' },
        { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', description: 'Predictive maintenance AI' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', description: 'Quantum ML algorithms' },
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      links: [
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Healthcare data analysis' },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading', description: 'AI-powered trading' },
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      links: [
        { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', description: 'Customer support system' },
        { name: 'Website Analytics', path: '/services/website-analytics', description: 'Performance tracking & insights' },
        { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support system' },
        { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
        { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey platform' },
        { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation' },
        { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio transcription service' },
        { name: 'Returns Management', path: '/services/returns-management', description: 'Returns processing system' },
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      links: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Enterprise-grade solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare industry solutions' },
      ]
    },
    {
      title: 'Specialized Services',
      icon: Star,
      links: [
        { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation', description: 'Legal document AI' },
        { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', description: 'Content creation AI' },
        { name: 'AI HR Platform', path: '/services/ai-hr-platform', description: 'HR automation platform' },
        { name: 'AI Content Creation', path: '/services/ai-content-creation', description: 'AI content generation' },
        { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity', description: 'AI security solutions' },
      ]
    },
    {
      title: 'Advanced Service Showcases',
      icon: Target,
      links: [
        { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', description: 'Revolutionary AI & Quantum Solutions' },
        { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', description: 'Cutting-edge Innovation & Emerging Tech' },
        { name: '2029 Cutting-Edge Services', path: '/zion-cutting-edge-services-2029', description: 'Future-ready Technology Solutions' },
        { name: 'Comprehensive Services 2025', path: '/comprehensive-services-showcase-2025', description: 'Comprehensive service overview' },
        { name: 'Innovative Services 2025', path: '/innovative-services-showcase-2025', description: 'Innovative service showcase' },
        { name: 'Ultimate Innovative Services 2025', path: '/ultimate-innovative-services-showcase-2025', description: 'Ultimate innovative services' },
        { name: 'New Services 2025', path: '/new-services-showcase-2025', description: 'New service offerings' },
      ]
    },
    {
      title: 'Pricing & Guides',
      icon: DollarSign,
      links: [
        { name: 'Comprehensive Pricing 2026', path: '/comprehensive-pricing-2026', description: '2026 pricing guide' },
        { name: 'Comprehensive Pricing 2028', path: '/comprehensive-pricing-2028', description: '2028 pricing guide' },
        { name: 'Comprehensive Pricing Guide 2027', path: '/comprehensive-pricing-guide-2027', description: '2027 pricing guide' },
        { name: 'Pricing', path: '/pricing', description: 'Service pricing information' },
      ]
    },
    {
      title: 'Additional Resources',
      icon: BookOpen,
      links: [
        { name: 'Marketplace', path: '/marketplace', description: 'Product and service marketplace' },
        { name: 'AI Solutions Hub', path: '/ai-solutions', description: 'AI solutions overview' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'IT consulting services' },
        { name: 'Space Technology', path: '/space-tech', description: 'Space technology solutions' },
        { name: 'Data Analytics', path: '/data-analytics', description: 'Data analytics services' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete site navigation' },
      ]
    }
  ];

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Sitemap | Zion Tech Group</title>
        <meta name="description" content="Sitemap - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Sitemap</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
