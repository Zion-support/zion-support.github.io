// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { useMemo } from 'react';
import { 
  Home, Rocket, Brain, Atom, Monitor, Shield, 
  Users, FileText, Settings, Cog, Database, 
  Network, Cloud, Lock, Code, Globe, Star,
  TrendingUp, BarChart3, Zap, Target, CheckCircle
} from 'lucide-react';
interface NavLink {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
  badge?: string;
}
interface NavSection {
  title: string;
  links: NavLink[];
}
export default function Sidebar() {
  const navigationSections: NavSection[] = useMemo(
    () => [
      {
        title: 'Core Pages',
        links: [
          { href: '/', label: 'Home', icon: Home, description: 'Main homepage' },
          { href: '/about', label: 'About Us', icon: Users, description: 'Company information' },
          { href: '/contact', label: 'Contact', icon: Users, description: 'Get in touch' },
          { href: '/team', label: 'Team', icon: Users, description: 'Leadership team' }
        ]
      },
      {
        title: 'Services & Solutions',
        links: [
          { href: '/services', label: 'All Services', icon: Rocket, description: 'Complete services overview', badge: 'Featured' },
          { href: '/solutions', label: 'Solutions', icon: Target, description: 'Technology solutions' },
          { href: '/ai-services', label: 'AI Services', icon: Brain, description: 'Artificial intelligence solutions' },
          { href: '/quantum-technology', label: 'Quantum Tech', icon: Atom, description: 'Quantum computing solutions' },
          { href: '/it-infrastructure', label: 'IT Infrastructure', icon: Monitor, description: 'IT infrastructure services' },
          { href: '/cybersecurity', label: 'Cybersecurity', icon: Shield, description: 'Security solutions' },
          { href: '/cloud-solutions', label: 'Cloud Solutions', icon: Cloud, description: 'Cloud computing services' },
          { href: '/blockchain-solutions', label: 'Blockchain', icon: Database, description: 'Blockchain technology' },
          { href: '/iot-platforms', label: 'IoT Platforms', icon: Network, description: 'Internet of Things' }
        ]
      },
      {
        title: 'Resources & Insights',
        links: [
          { href: '/blog', label: 'Blog & Articles', icon: FileText, description: 'Latest insights' },
          { href: '/technology-insights', label: 'Tech Insights', icon: TrendingUp, description: 'Technology trends' },
          { href: '/case-studies', label: 'Case Studies', icon: Star, description: 'Success stories' },
          { href: '/white-papers', label: 'White Papers', icon: FileText, description: 'Research & analysis' },
          { href: '/docs', label: 'Documentation', icon: Code, description: 'Technical docs' },
          { href: '/api', label: 'API Reference', icon: Code, description: 'API documentation' }
        ]
      },
      {
        title: 'Company & Support',
        links: [
          { href: '/careers', label: 'Careers', icon: Users, description: 'Join our team' },
          { href: '/support', label: 'Support', icon: Cog, description: 'Get help' },
          { href: '/privacy', label: 'Privacy Policy', icon: Lock, description: 'Data protection' },
          { href: '/terms', label: 'Terms of Service', icon: FileText, description: 'Legal terms' },
          { href: '/cookies', label: 'Cookie Policy', icon: FileText, description: 'Cookie information' }
        ]
      },
      {
        title: 'Specialized Services',
        links: [
          { href: '/quantum-neural-network-platform', label: 'Quantum Neural Networks', icon: Atom, description: 'Quantum AI platform', badge: 'New' },
          { href: '/autonomous-business-operations-platform', label: 'Autonomous Business', icon: Brain, description: 'AI business automation', badge: 'New' },
          { href: '/ai-powered-it-asset-management', label: 'IT Asset Management', icon: Monitor, description: 'AI-powered IT management', badge: 'New' },
          { href: '/ai-consciousness-evolution-2029', label: 'AI Consciousness', icon: Brain, description: 'AI consciousness evolution', badge: 'Featured' }
        ]
      }
    ],
    []
  );

};


export default Sidebar;
