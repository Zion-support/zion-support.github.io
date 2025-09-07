

  Brain,Mail,Phone,MapPin,Globe} from 'lucide-react;import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter  } from lucide-react';
import React from 'react;
import Link from next/link';
import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react;

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: Services',
      links: [
        { name: 'AI Business Intelligence, href: /ai-business-intelligence' },
        { name: 'Quantum Cybersecurity, href: /quantum-cybersecurity' },
        { name: 'Edge Computing, href: /edge-computing-orchestration' },
        { name: 'Space Technology, href: /space-technology' },
        { name: 'View All Services, href: /comprehensive-2025-services-showcase' }
      ]
    }
    {
      title: 'Company,
      links: [
        { name: About Us', href: '/about },
        { name: Our Work', href: '/portfolio },
        { name: Blog & Insights', href: '/blog },
        { name: Careers', href: '/careers },
        { name: Contact', href: '/contact }
      ]
    }
    {
      title: Resources',
      links: [
        { name: 'Documentation, href: /docs' },
        { name: 'API Reference, href: /api' },
        { name: 'Support Center, href: /support' },
        { name: 'Privacy Policy, href: /privacy' },
        { name: 'Terms of Service, href: /terms' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub, href: https://github.com/Zion-Holdings', icon: Github },
    { name: 'LinkedIn, href: https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter, href: https://twitter.com/ziontechgroup', icon: Twitter }
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10>
      <div className=max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12>
          {/* Company Info */}
          <div className=lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6>
              <div className=w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white />
              </div>
              <span className=text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Leading-edge technology solutions and autonomous innovation platform. 
              Empowering businesses with cutting-edge AI, quantum computing, and digital transformation.
            </p>
            
            {/* Contact Info */}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
