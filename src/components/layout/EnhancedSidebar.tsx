<<<<<<< HEAD
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnhancedSidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const items = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Request Quote', href: '/request-quote' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  if (!isOpen) return null;

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-200 shadow-lg">
      <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200">
        <span className="font-semibold text-gray-900">Navigation</span>
        <button onClick={onClose} aria-label="Close" className="text-gray-600 hover:text-gray-900">×</button>
      </div>
      <nav className="p-4 space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`block rounded-md px-3 py-2 text-sm ${
              location.pathname === item.href ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default EnhancedSidebar;
=======
import React, { useState } from 'react'; import { Link, useLocation } from 'react-router-dom'; import { motion, AnimatePresence } from 'framer-motion'; import { ; Menu,; X,; Home,; Settings,; Users,; Shield,; Brain,; Cloud,; Rocket,; Zap,; BarChart3,; MessageSquare,; FileText,; Globe,; Phone,; Mail,; MapPin,; ChevronRight,; Star,; TrendingUp,; Award,; Lightbulb,; Code,; Database,; Network,; Lock,; Eye,; Search,; Bell,; HelpCircle,; BookOpen,; ExternalLink,; Play; } from 'lucide-react'; ; interface SidebarProps {; isOpen: boolean; onClose: () => void; }; export function EnhancedSidebar({ isOpen, onClose }: SidebarProps) {; const location = useLocation(); const [expandedSections, setExpandedSections] = useState<string[]>([]); ; const toggleSection = (section: string) => {; setExpandedSections(prev =>; prev.includes(section); ? prev.filter(s => s !== section); : [...prev, section]; ); }; ; const navigationSections = [; {; id: 'main',; title: 'Main Navigation',; items: [; { name: 'Home', href: '/', icon: Home },; { name: 'About Us', href: '/about', icon: Users },; { name: 'Contact', href: '/contact', icon: MessageSquare },; { name: 'Services Overview', href: '/services', icon: Settings },; { name: 'Showcase 2025', href: '/comprehensive-services-showcase-2025', icon: Star },; ]; },; {; id: 'ai-services',; title: 'AI & Machine Learning',; icon: Brain,; items: [; { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3 },; { name: 'AI Autonomous Business Intelligence', href: '/services/ai-autonomous-business-intelligence-platform', icon: Brain },; { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', icon: TrendingUp },; { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: FileText },; { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageSquare },; { name: 'AI Project Management', href: '/services/ai-project-management', icon: Settings },; { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Network },; { name: 'AI DevOps Automation', href: '/services/ai-devops-automation-platform', icon: Code },; { name: 'AI Email Responder', href: '/services/ai-auto-email-responder', icon: Mail },; { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Zap },; ]; },; {; id: 'cybersecurity',; title: 'Cybersecurity & Compliance',; icon: Shield,; items: [; { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield },; { name: 'AI Cybersecurity Threat Intelligence', href: '/services/ai-cybersecurity-threat-intelligence-platform', icon: Eye },; { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock },; { name: 'SOC2 Compliance Automation', href: '/services/soc2-compliance-automation', icon: Award },; { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Shield },; { name: 'Smart Contract Risk Scanner', href: '/services/smart-contract-risk-scanner', icon: Code },; ]; },; {; id: 'cloud-infrastructure',; title: 'Cloud & Infrastructure',; icon: Cloud,; items: [; { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud },; { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Database },; { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: BarChart3 },; { name: 'Cloud Cost Optimizer', href: '/services/cloud-cost-optimizer', icon: TrendingUp },; { name: 'Infrastructure Monitoring', href: '/services/infrastructure', icon: Network },; { name: 'Uptime SLA Monitor', href: '/services/uptime-sla-monitor', icon: Eye },; ]; },; {; id: 'digital-transformation',; title: 'Digital Transformation',; icon: Rocket,; items: [; { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket },; { name: 'Digital Transformation', href: '/services/digital-transformation', icon: TrendingUp },; { name: 'IT Consulting', href: '/it-consulting', icon: Users },; { name: 'Change Management', href: '/services/change-management', icon: Settings },; { name: 'Strategy Development', href: '/services/strategy-development', icon: Lightbulb },; { name: 'Implementation Planning', href: '/services/implementation-planning', icon: FileText },; ]; },; {; id: 'emerging-tech',; title: 'Emerging Technologies',; icon: Zap,; items: [; { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Zap },; { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },; { name: 'Space Technology', href: '/space-tech', icon: Rocket },; { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', icon: Code },; { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', icon: Network },; ]; },; {; id: 'micro-saas',; title: 'Micro SaaS Solutions',; icon: Settings,; items: [; { name: 'Micro CRM', href: '/services/micro-crm', icon: Users },; { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageSquare },; { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3 },; { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle },; { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp },; { name: 'Mobile Survey', href: '/services/mobile-survey', icon: FileText },; ]; }; ]; ; const quickActions = [; { name: 'Get Quote', href: '/contact', icon: MessageSquare, color: 'from-cyan-500 to-blue-500' },; { name: 'View Pricing', href: '/pricing', icon: BarChart3, color: 'from-green-500 to-emerald-500' },; { name: 'Book Demo', href: '/demo', icon: Play, color: 'from-purple-500 to-pink-500' },; { name: 'Support', href: '/help', icon: HelpCircle, color: 'from-orange-500 to-red-500' },; ]; ; const contactInfo = [; { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },; { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },; { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' },; { icon: Globe, text: 'ziontechgroup.com', href: 'https:
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
