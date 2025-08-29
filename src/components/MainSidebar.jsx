import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, ShoppingCart, Users, Settings, FileText, HelpCircle, Code, BarChart3, Briefcase, Leaf, Building, Mail, Calendar, Globe, Zap } from 'lucide-react';
export function MainSidebar() {
    const location = useLocation();
    const sidebarSections = [
        {
            title: 'Main',
            items: [
                { key: 'home', href: '/', icon: <Home className="w-4 h-4"/>, label: 'Home' },
                { key: 'services', href: '/services', icon: <Settings className="w-4 h-4"/>, label: 'Services' },
                { key: 'services-catalog', href: '/services-catalog', icon: <BarChart3 className="w-4 h-4"/>, label: 'Services Catalog' },
                { key: 'services-comparison', href: '/services-comparison', icon: <ShoppingCart className="w-4 h-4"/>, label: 'Compare Services' },
                { key: 'pricing', href: '/pricing-guide', icon: <Users className="w-4 h-4"/>, label: 'Pricing' },
            ]
        },
        {
            title: 'Company',
            items: [
                { key: 'about', href: '/about', icon: <Building className="w-4 h-4"/>, label: 'About Us' },
                { key: 'team', href: '/team', icon: <Users className="w-4 h-4"/>, label: 'Team' },
                { key: 'careers', href: '/careers', icon: <Briefcase className="w-4 h-4"/>, label: 'Careers' },
                { key: 'partners', href: '/partners', icon: <Users className="w-4 h-4"/>, label: 'Partners' },
                { key: 'press', href: '/press', icon: <FileText className="w-4 h-4"/>, label: 'Press' },
                { key: 'contact', href: '/contact', icon: <Mail className="w-4 h-4"/>, label: 'Contact' },
            ]
        },
        {
            title: 'Resources',
            items: [
                { key: 'blog', href: '/blog', icon: <FileText className="w-4 h-4"/>, label: 'Blog' },
                { key: 'docs', href: '/docs', icon: <Code className="w-4 h-4"/>, label: 'Documentation' },
                { key: 'webinars', href: '/webinars', icon: <Calendar className="w-4 h-4"/>, label: 'Webinars' },
                { key: 'training', href: '/training', icon: <Zap className="w-4 h-4"/>, label: 'Training' },
                { key: 'case-studies', href: '/case-studies', icon: <BarChart3 className="w-4 h-4"/>, label: 'Case Studies' },
                { key: 'white-papers', href: '/white-papers', icon: <FileText className="w-4 h-4"/>, label: 'White Papers' },
            ]
        },
        {
            title: 'Support',
            items: [
                { key: 'help', href: '/help', icon: <HelpCircle className="w-4 h-4"/>, label: 'Help Center' },
                { key: 'support', href: '/support', icon: <Users className="w-4 h-4"/>, label: 'Support' },
                { key: 'faq', href: '/faq', icon: <HelpCircle className="w-4 h-4"/>, label: 'FAQ' },
                { key: 'demo', href: '/demo', icon: <Code className="w-4 h-4"/>, label: 'Demo' },
                { key: 'sitemap', href: '/sitemap', icon: <Globe className="w-4 h-4"/>, label: 'Sitemap' },
            ]
        },
        {
            title: 'Developer',
            items: [
                { key: 'developer-portal', href: '/developer-portal', icon: <Code className="w-4 h-4"/>, label: 'Developer Portal' },
                { key: 'marketplace', href: '/marketplace', icon: <ShoppingCart className="w-4 h-4"/>, label: 'Marketplace' },
                { key: 'status', href: '/status', icon: <BarChart3 className="w-4 h-4"/>, label: 'System Status' },
            ]
        }
    ];
    const isActive = (href) => {
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(href);
    };
    return (<aside className="w-64 bg-zion-blue-dark border-r border-zion-blue-light min-h-screen p-4">
      <div className="mb-8">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            ZION
          </span>
        </Link>
        <p className="text-zion-slate-light text-sm mt-2">
          Tech & AI Marketplace
        </p>
      </div>

      <nav className="space-y-6">
        {sidebarSections.map((section) => (<div key={section.title}>
            <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (<li key={item.key}>
                  <Link to={item.href} className={cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive(item.href)
                    ? "bg-zion-purple/20 text-zion-cyan"
                    : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan")}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>))}
            </ul>
          </div>))}
      </nav>

      <div className="mt-8 pt-6 border-t border-zion-blue-light">
        <div className="text-zion-slate-light text-xs">
          <p className="mb-2">Need help?</p>
          <Link to="/contact" className="text-zion-cyan hover:text-zion-purple transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </aside>);
}
