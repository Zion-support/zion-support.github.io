import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Zap, Star, Sparkles, ArrowRight, Play, ShoppingCart, ArrowUpRight } from 'lucide-react';

export function EnhancedFuturisticFooter() {
  const currentYear = new Date().getFullYear();
  const footerSections = [
    {
      title: 'Comprehensive Services 2026',
      featured: true,
      links: [
        { name: 'All Services & Pricing', href: '/comprehensive-services-showcase-2026', featured: true },
        { name: 'Pricing Guide 2026', href: '/comprehensive-pricing-guide-2026', featured: true },
        { name: 'Pricing Guide 2030', href: '/comprehensive-pricing-guide-2030', featured: true },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas', featured: true },
        { name: 'AI Solutions', href: '/services/ai-business-intelligence', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'Blockchain Solutions', href: '/services#blockchain', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true }
      ]
    },
    {
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'Quantum AI Trading Platform', href: '/revolutionary-services-2030#quantum-ai-trading', featured: true },
        { name: 'Neural Interface Platform', href: '/revolutionary-services-2030#neural-interface', featured: true },
        { name: 'Holographic Workspace Platform', href: '/services#holographic-workspace', featured: true },
        { name: 'BioDigital Twin Platform', href: '/services#biodigital-twin', featured: true },
        { name: 'Space Debris Tracking System', href: '/services#space-debris-tracking', featured: true },
        { name: 'AI Ethics Guardian Platform', href: '/services#ai-ethics-guardian', featured: true },
        { name: 'Metaverse Builder Platform', href: '/services#metaverse-builder', featured: true },
        { name: 'AI Autonomous Operations', href: '/revolutionary-services-2030#ai-autonomous-business-operations-2030' },
        { name: 'Quantum AI Cybersecurity', href: '/revolutionary-services-2030#quantum-ai-cybersecurity-2030' },
        { name: 'AI Content Creation Studio', href: '/revolutionary-services-2030#ai-content-creation-studio-2030' }
      ]
    },
    {
      title: 'Pricing & Resources',
      featured: true,
      links: [
        { name: 'Comprehensive Pricing Guide 2026', href: '/comprehensive-services-showcase-2026', featured: true },
        { name: 'Pricing Guide 2025', href: '/pricing-guide-2025', featured: true },
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', featured: true },
        { name: 'Request Quote', href: '/request-quote', featured: true },
        { name: 'Schedule Demo', href: '/schedule-demo', featured: true },
        { name: 'Case Studies', href: '/case-studies', featured: true },
        { name: 'White Papers', href: '/white-papers', featured: true },
        { name: 'Webinars', href: '/webinars', featured: true },
        { name: 'Documentation', href: '/docs', featured: true },
        { name: 'FAQ & Support', href: '/faq', featured: true }
      ]
    },
    {
      title: 'AI & Analytics Services',
      featured: true,
      links: [
        { name: 'All Services', href: '/services', featured: true },
        { name: 'Innovative Services 2025', href: '/services/innovative-2025', featured: true },
        { name: 'AI Business Intelligence', href: '/services#ai-business-intelligence', featured: true },
        { name: 'AI Healthcare Diagnostics', href: '/services#ai-healthcare', featured: true },
        { name: 'AI Legal Tech Platform', href: '/services#ai-legal-tech', featured: true },
        { name: 'AI Research & Discovery', href: '/services#ai-research', featured: true },
        { name: 'AI Green Technology', href: '/services#ai-green-tech', featured: true },
        { name: 'AI Metaverse Platform', href: '/services#ai-metaverse', featured: true },
        { name: 'AI Space Technology', href: '/services#ai-space-tech', featured: true },
        { name: 'AI FinTech Platform', href: '/services#ai-fintech', featured: true },
        { name: 'AI Supply Chain', href: '/services#ai-supply-chain', featured: true },
        { name: 'AI Quality Assurance', href: '/services#ai-qa', featured: true },
        { name: 'AI Marketing Automation', href: '/services#ai-marketing-automation', featured: true },
        { name: 'AI Customer Support', href: '/services#ai-customer-support', featured: true },
        { name: 'AI HR & Recruitment', href: '/services#ai-hr', featured: true },
        { name: 'AI Content Creation', href: '/services#ai-content-creation', featured: true }
      ]
    }
  ];
}
