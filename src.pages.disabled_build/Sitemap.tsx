import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Server,
  Rocket,
  Shield,
  Cloud,
  Atom,
  Sparkles,
  TrendingUp,
  Building,
  Heart,
  DollarSign,
  Truck,
  BookOpen,
  Satellite,
  Users,
  FileText,
  HelpCircle,
  MessageCircle,
  Code,
  Cpu,
  Globe,
  Zap
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Core Pages',
      icon: Zap,
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About', href: '/about', description: 'Company information' },
        { name: 'Contact', href: '/contact', description: 'Get in touch' },
        { name: 'Services', href: '/services', description: 'Our service offerings' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', description: 'Partnership programs' },
        { name: 'Blog', href: '/blog', description: 'Industry insights' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Privacy', href: '/privacy', description: 'Privacy policy' },
        { name: 'Accessibility', href: '/accessibility', description: 'Accessibility information' },
        { name: 'System Status', href: '/status', description: 'Service status' }
      ]
    },
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered business insights' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated compliance management' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI sales automation' },
        { name: 'AI-Powered SEO', href: '/services/ai-seo', description: 'AI-driven SEO optimization' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment', description: 'AI interview evaluation' },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', description: 'Content creation automation' },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', description: 'Automated customer service' },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI project coordination' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Financial data analysis' },
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation', description: 'Legal document processing' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'Automated trading systems' },
        { name: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite', description: 'Content generation platform' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Workflow automation' },
        { name: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform', description: 'Data management' },
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', description: 'CX insights' },
        { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management', description: 'Risk assessment' },
        { name: 'AI HR Talent Acquisition', href: '/services/ai-hr-talent-acquisition', description: 'Talent recruitment' },
        { name: 'AI IoT Edge Computing', href: '/services/ai-iot-edge-computing', description: 'Edge AI solutions' },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', description: 'Predictive analytics' },
        { name: 'AI Sustainable Technology', href: '/services/ai-sustainable-technology', description: 'Green AI solutions' },
        { name: 'AI Quantum Machine Learning', href: '/services/ai-quantum-machine-learning', description: 'Quantum AI' },
        { name: 'AI Supply Chain Risk Management', href: '/services/ai-supply-chain-risk-management', description: 'Supply chain AI' },
        { name: 'AI ESG Compliance Platform', href: '/services/ai-esg-compliance-platform', description: 'ESG compliance' },
        { name: 'AI Digital Twin Platform', href: '/services/ai-digital-twin-platform', description: 'Digital twin solutions' },
        { name: 'AI Quantum Computing Platform', href: '/services/ai-quantum-computing-platform', description: 'Quantum computing' },
        { name: 'AI Edge Computing Platform', href: '/services/ai-edge-computing-platform', description: 'Edge computing' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', description: 'HR automation' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'Content generation' },
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', description: 'Research automation' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Supply chain AI' }
      ]
    },
    {
      title: 'Technology Services',
      icon: Server,
      links: [
        { name: 'Cloud Computing', href: '/services/cloud-computing', description: 'Scalable cloud solutions' },
        { name: 'DevOps & CI/CD', href: '/services/devops', description: 'Development operations' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data insights' },
        { name: 'API Development', href: '/services/api-development', description: 'API solutions' },
        { name: 'Mobile Development', href: '/services/mobile-development', description: 'Mobile apps' },
        { name: 'Web Development', href: '/services/web-development', description: 'Web applications' },
        { name: 'Database Management', href: '/services/database-management', description: 'Database solutions' },
        { name: 'Infrastructure as Code', href: '/services/infrastructure-as-code', description: 'IaC solutions' },
        { name: 'Microservices Architecture', href: '/services/microservices', description: 'Microservices design' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      links: [
        { name: 'Healthcare Technology', href: '/industries/healthcare', description: 'Healthcare solutions' },
        { name: 'Financial Services', href: '/industries/financial', description: 'FinTech solutions' },
        { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Manufacturing tech' },
        { name: 'Retail & E-commerce', href: '/industries/retail', description: 'Retail solutions' },
        { name: 'Education Technology', href: '/industries/education', description: 'EdTech solutions' },
        { name: 'Energy & Utilities', href: '/industries/energy', description: 'Energy solutions' },
        { name: 'Transportation & Logistics', href: '/industries/transportation', description: 'Transport solutions' },
        { name: 'Real Estate', href: '/industries/real-estate', description: 'Real estate tech' },
        { name: 'Government', href: '/industries/government', description: 'Government solutions' },
        { name: 'Non-Profit', href: '/industries/non-profit', description: 'Non-profit tech' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: BookOpen,
      links: [
        { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', href: '/api/docs', description: 'API documentation' },
        { name: 'Developer Portal', href: '/developers', description: 'Developer resources' },
        { name: 'Knowledge Base', href: '/knowledge-base', description: 'Help articles' },
        { name: 'Video Tutorials', href: '/tutorials', description: 'Learning videos' },
        { name: 'Webinars', href: '/webinars', description: 'Educational content' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'Research papers' },
        { name: 'Blog', href: '/blog', description: 'Industry insights' },
        { name: 'News & Updates', href: '/news', description: 'Company news' }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete site navigation and structure for Zion Tech Group website."
        keywords="sitemap, navigation, website structure, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
              <Globe className="w-10 h-10 text-purple-400" />