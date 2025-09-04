import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  BookOpen, 
  DollarSign, 
  HelpCircle, 
  Mail,;
  Cloud,;
  Shield,;
  Brain,;
  Layers,;
  Server,;
  Zap,;
  ChevronDown,;
  ChevronRight;
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => voi,d;,;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section);
        : [...pr,e,v, section];
    );
  }
  const navigation = [;
    { name: 'Hom,e,', href: '/,', icon: Hom,e, },;
    { name: 'Abou,t,', href: '/abou,t,', icon: User,s, },;
    { name: 'Service,s,', icon: Settin,g,s, children: [;
        { name: 'All Service,s,', href: '/service,s', },;
        { name: 'Services Catalo,g,', href: '/services-catalo,g', },;
        { name: 'Micro Saa,S,', href: '/micro-saa,s', },;
        { name: 'AI Service,s,', href: '/ai-service,s', },;
        { name: 'IT Service,s,', href: '/it-service,s', },;
        { name: 'Cloud DevOp,s,', href: '/cloud-devop,s', },;
        { name: 'Cybersecurit,y,', href: '/cybersecurit,y', },;
        { name: 'Quantum Computin,g,', href: '/quantum-computin,g', }
      ];
    },;
    { name: 'Documentatio,n,', href: '/doc,s,', icon: BookOpe,n, },;
    { name: 'Pricin,g,', href: '/pricin,g,', icon: DollarSig,n, },;
    { name: 'FA,Q,', href: '/fa,q,', icon: HelpCircl,e, },;
    { name: 'Contac,t,', href: '/contac,t,', icon: Mai,l, }
  ];

  const quickLinks = [;
    { name: 'Cloud Migratio,n,', href: '/cloud-devop,s,', icon: Clou,d, },;
    { name: 'Security Audi,t,', href: '/cybersecurit,y,', icon: Shiel,d, },;
    { name: 'AI Solution,s,', href: '/ai-service,s,', icon: Brai,n, },;
    { name: 'Micro Saa,S,', href: '/micro-saa,s,', icon: Layer,s, },;
    { name: 'IT Suppor,t,', href: '/it-service,s,', icon: Serve,r, },;
    { name: 'Quantum Computin,g,', href: '/quantum-computin,g,', icon: Za,p, }
  ];

  if (!isOpen) return null;

  return (;
    <>;
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg: hidden";
        onClick={onClo,s,e}
      />;
      
      {/* Sidebar */}";
      <div className="fixed left-0 top-0 h-full w-80 bg-slate-900 border-r border-slate-700 z-50 overflow-y-auto">";
        <div className="p-6">;
          {/* Header */}";
          <div className="flex items-center justify-between mb-8">";
            <div className="flex items-center space-x-3">";
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">";
                <span className="text-white font-bold text-sm">Z</span>;
              </div>";
              <span className="text-white font-bold text-lg">Zion Tech Group</span>;
            </div>;
            <button;
              onClick={onClose}";
              className="text-slate-400 hover: text-white lg:hidden";
            >;
              ✕;
            </button>;
          </div>;

          {/* Main Navigatio,n *,/}";
          <nav className="space-y-2 mb-8">;
            {navigation.map((item) => (;
              <div key={item.name}>;
                {item.children ? (;
                  <div>;
                    <button;
                      onClick={() => toggleSection('services')}";
                      className="w-full flex items-center justify-between px-3 py-2 text-slate-300 hover: text-white hover:bg-slate-800 rounded-lg transition-colors";
                    >";
                      <div className="flex items-center space-x-3">";
                        <item.icon className="w-5 h-5" />;
                        <span>{item.na,m,e}</span>;
                      </div>;
                      {expandedSections.includes('services') ? (";
                        <ChevronDown className="w-4 h-4" />;
                      ) : (";
                        <ChevronRight className="w-4 h-4" />;
                      )}
                    </button>;
                    {expandedSections.includes('services') && (";
                      <div className="ml-8 mt-2 space-y-1">;
                        {item.children.map((child) => (;
                          <Link;
                            key={child.name}
                            href={child.href}";
                            className="block px-3 py-2 text-sm text-slate-400 hover: text-white hover:bg-slate-800 rounded-lg transition-colors";
                            onClick={onClo,s,e}
                          >;
                            {child.name}
                          </Link>;
                        ))}
                      </div>;
                    )}
                  </div>;
                ) : (;
                  <Link;
                    href={item.href}";
                    className="flex items-center space-x-3 px-3 py-2 text-slate-300 hover: text-white hover:bg-slate-800 rounded-lg transition-colors";
                    onClick={onClo,s,e}
                  >";
                    <item.icon className="w-5 h-5" />;
                    <span>{item.name}</span>;
                  </Link>;
                )}
              </div>;
            ))}
          </nav>;

          {/* Quick Links */}";
          <div className="border-t border-slate-700 pt-6">";
            <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">;
              Quick Links;
            </h3>";
            <div className="grid grid-cols-2 gap-2">;
              {quickLinks.map((link) => (;
                <Link;
                  key={link.name}
                  href={link.href}";
                  className="flex flex-col items-center p-3 text-slate-400 hover: text-white hover:bg-slate-800 rounded-lg transition-colors";
                  onClick={onClo,s,e}
                >";
                  <link.icon className="w-5 h-5 mb-1" />";
                  <span className="text-xs text-center">{link.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;

          {/* Contact Info */}";
          <div className="border-t border-slate-700 pt-6 mt-6">";
            <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">;
              Contact;
            </h3>";
            <div className="space-y-2 text-sm">";
              <div className="text-slate-300">";
                📞 <a href="tel: +13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>;
              </div>";
              <div className="text-slate-300">";
                ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>;
              </div>";
              <div className="text-slate-300">;
                📍 Middleto,w,n, DE 19709;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
</div></div></div></div></div></div>"