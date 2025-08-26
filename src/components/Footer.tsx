import React from 'react';
import { Link } from 'react-router-dom';

const footerNavigation = {
  services: {
    title: 'Core Services',
    items: [
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, color: 'from-zion-blue to-zion-cyan' },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, color: 'from-zion-purple to-zion-cyan' },
      { name: 'Blockchain', href: '/services/blockchain', icon: Lock, color: 'from-zion-orange to-zion-purple' },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Building, color: 'from-zion-blue to-zion-purple' },
      { name: 'Sustainability', href: '/services/sustainability', icon: HeartIcon, color: 'from-zion-green to-zion-blue' }
    ],
  },
  microSaas: {
    title: 'Micro SAAS Solutions',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, color: 'from-zion-cyan to-zion-blue' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, color: 'from-zion-purple to-zion-pink' },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, color: 'from-zion-purple to-zion-cyan' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Network, color: 'from-zion-green to-zion-cyan' },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
      { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileText, color: 'from-zion-orange to-zion-purple' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, color: 'from-zion-pink to-zion-purple' }
    ],
  },
  itServices: {
    title: 'IT Infrastructure',
    items: [
      { name: 'Infrastructure', href: '/it-services/infrastructure', icon: Network, color: 'from-zion-blue to-zion-cyan' },
      { name: 'Cloud Migration', href: '/it-services/cloud-migration', icon: Cloud, color: 'from-zion-blue to-zion-purple' },
      { name: 'DevOps', href: '/it-services/devops', icon: Code, color: 'from-zion-green to-zion-cyan' },
      { name: 'Data Center', href: '/it-services/data-center', icon: Database, color: 'from-zion-blue to-zion-green' },
      { name: 'Network Security', href: '/it-services/network-security', icon: Shield, color: 'from-zion-purple to-zion-red' },
      { name: '24/7 Support', href: '/it-services/support', icon: MessageCircle, color: 'from-zion-green to-zion-blue' },
      { name: 'Green IT', href: '/green-it', icon: HeartIcon, color: 'from-zion-green to-zion-blue' },
      { name: 'Onsite Services', href: '/it-onsite-services', icon: Building, color: 'from-zion-blue to-zion-purple' }
    ],
  },
  aiSolutions: {
    title: 'AI & Innovation',
    items: [
      { name: 'Machine Learning', href: '/ai-solutions/machine-learning', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
      { name: 'Computer Vision', href: '/ai-solutions/computer-vision', icon: Eye, color: 'from-zion-purple to-zion-pink' },
      { name: 'NLP & Chatbots', href: '/ai-solutions/nlp-chatbots', icon: MessageCircle, color: 'from-zion-green to-zion-cyan' },
      { name: 'Predictive Analytics', href: '/ai-solutions/predictive-analytics', icon: TrendingUp, color: 'from-zion-blue to-zion-green' },
      { name: 'AI Consulting', href: '/ai-solutions/consulting', icon: Users, color: 'from-zion-pink to-zion-purple' },
      { name: 'Custom AI Models', href: '/ai-solutions/custom-models', icon: Code, color: 'from-zion-orange to-zion-purple' },
      { name: 'Innovation Lab', href: '/innovation-lab', icon: Sparkles, color: 'from-zion-purple to-zion-pink' },
      { name: 'Research & Development', href: '/innovation-lab/research', icon: Atom, color: 'from-zion-purple to-zion-cyan' }
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about', icon: Building, color: 'from-zion-blue to-zion-cyan' },
      { name: 'Our Team', href: '/team', icon: Users, color: 'from-zion-purple to-zion-pink' },
      { name: 'Careers', href: '/careers', icon: Award, color: 'from-zion-green to-zion-blue' },
      { name: 'Partners', href: '/partners', icon: Handshake, color: 'from-zion-blue to-zion-green' },
      { name: 'Blog', href: '/blog', icon: FileText, color: 'from-zion-orange to-zion-purple' },
      { name: 'News', href: '/news', icon: Globe, color: 'from-zion-cyan to-zion-blue' },
      { name: 'Case Studies', href: '/case-studies', icon: Star, color: 'from-zion-yellow to-zion-orange' },
      { name: 'Success Stories', href: '/success-stories', icon: Crown, color: 'from-zion-purple to-zion-pink' }
    ],
  },
  support: {
    title: 'Support & Resources',
    items: [
      { name: 'Help Center', href: '/help', icon: MessageCircle, color: 'from-zion-green to-zion-cyan' },
      { name: 'Contact Support', href: '/contact', icon: MessageCircle, color: 'from-zion-blue to-zion-purple' },
      { name: 'Documentation', href: '/docs', icon: FileText, color: 'from-zion-orange to-zion-purple' },
      { name: 'API Reference', href: '/api', icon: Code, color: 'from-zion-green to-zion-cyan' },
      { name: 'System Status', href: '/status', icon: CheckCircle, color: 'from-zion-green to-zion-blue' },
      { name: 'Security', href: '/security', icon: Shield, color: 'from-zion-purple to-zion-red' },
      { name: 'Compliance', href: '/compliance', icon: Award, color: 'from-zion-green to-zion-blue' },
      { name: 'Training', href: '/training', icon: Users, color: 'from-zion-pink to-zion-purple' }
    ],
  },
  legal: {
    title: 'Legal & Privacy',
    items: [
      { name: 'Terms of Service', href: '/terms', icon: FileText, color: 'from-zion-orange to-zion-purple' },
      { name: 'Privacy Policy', href: '/privacy', icon: Shield, color: 'from-zion-purple to-zion-red' },
      { name: 'Cookie Policy', href: '/cookies', icon: FileText, color: 'from-zion-green to-zion-cyan' },
      { name: 'GDPR Compliance', href: '/gdpr', icon: Award, color: 'from-zion-green to-zion-blue' },
      { name: 'Data Processing', href: '/data-processing', icon: Database, color: 'from-zion-blue to-zion-green' },
      { name: 'Security Policy', href: '/security-policy', icon: Shield, color: 'from-zion-purple to-zion-red' }
    ],
  }
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'from-blue-400 to-blue-600' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin, color: 'from-blue-600 to-blue-800' },
  { name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook, color: 'from-blue-600 to-blue-800' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'from-pink-400 to-pink-600' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'from-gray-600 to-gray-800' },
];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        </div>
      </div>
    </footer>
  );
