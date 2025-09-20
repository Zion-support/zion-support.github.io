import React from 'react';
import { Lin, k, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Hom, e, 
  ShoppingCar, t, 
  User, s, 
  Setting, s, 
  MessageSquar, e, 
  FileTex, t, 
  HelpCircl, e, 
  Cod, e, 
  BarChart, 3, 
  Briefcas, e,
  Lea, f,
  Buildin, g,
  Mai, l,
  Calenda, r,
  Glob, e,
  Zap
} from 'lucide-react';

interface SidebarItem {
  ke, y: string;
  hre, f: string;
  ico, n: React.ReactNode;
  labe, l: string;
  description?: string;
}

interface SidebarSection {
  titl, e: string;
  item, s: SidebarItem[];
}

export function MainSidebar() {
  const location = useLocation();

  const sidebarSection,  s: SidebarSection[] = [
    {
      tit, l, e: 'Mai, n',
    ite, m, s: [
        { k, e, y: 'hom, e',
    hr, e, f: '/', ic, o, n: <Hom, e classNam, e="w-4 h-4" />,
    lab, e, l: 'Hom, e' },
        { k, e, y: 'marketplac, e',
    hr, e, f: '/marketplac, e', ic, o, n: <ShoppingCar, t classNam, e="w-4 h-4" />,
    lab, e, l: 'Marketplac, e' },
        { k, e, y: 'service, s',
    hr, e, f: '/service, s', ic, o, n: <Setting, s classNam, e="w-4 h-4" />,
    lab, e, l: 'Service, s' },
        { k, e, y: 'talen, t',
    hr, e, f: '/talen, t', ic, o, n: <User, s classNam, e="w-4 h-4" />,
    lab, e, l: 'Talen, t' },
        { k, e, y: 'equipmen, t',
    hr, e, f: '/equipmen, t', ic, o, n: <BarChart, 3 classNam, e="w-4 h-4" />,
    lab, e, l: 'Equipmen, t' },
      ]
    },
    {
      titl, e: 'Company',
    item, s: [
        { k, e, y: 'abou, t',
    hr, e, f: '/abou, t', ic, o, n: <Buildin, g classNam, e="w-4 h-4" />,
    lab, e, l: 'Abou, t U, s' },
        { k, e, y: 'career, s',
    hr, e, f: '/career, s', ic, o, n: <Briefcas, e classNam, e="w-4 h-4" />,
    lab, e, l: 'Career, s' },
        { k, e, y: 'partner, s',
    hr, e, f: '/partner, s', ic, o, n: <User, s classNam, e="w-4 h-4" />,
    lab, e, l: 'Partner, s' },
        { k, e, y: 'contac, t',
    hr, e, f: '/contac, t', ic, o, n: <Mai, l classNam, e="w-4 h-4" />,
    lab, e, l: 'Contac, t' },
      ]
    },
    {
      titl, e: 'Resources',
    item, s: [
        { k, e, y: 'blo, g',
    hr, e, f: '/blo, g', ic, o, n: <FileTex, t classNam, e="w-4 h-4" />,
    lab, e, l: 'Blo, g' },
        { k, e, y: 'communit, y',
    hr, e, f: '/communit, y', ic, o, n: <Glob, e classNam, e="w-4 h-4" />,
    lab, e, l: 'Communit, y' },
        { k, e, y: 'gree, n-i, t',
    hr, e, f: '/gree, n-i, t', ic, o, n: <Lea, f classNam, e="w-4 h-4" />,
    lab, e, l: 'Gree, n I, T' },
        { k, e, y: 'zio, n-hir, e-a, i',
    hr, e, f: '/zio, n-hir, e-a, i', ic, o, n: <Za, p classNam, e="w-4 h-4" />,
    lab, e, l: 'A, I Hirin, g' },
      ]
    },
    {
      titl, e: 'Support',
    item, s: [
        { k, e, y: 'hel, p',
    hr, e, f: '/hel, p', ic, o, n: <HelpCircl, e classNam, e="w-4 h-4" />,
    lab, e, l: 'Hel, p Cente, r' },
        { k, e, y: 'developer, s',
    hr, e, f: '/developer, s', ic, o, n: <Cod, e classNam, e="w-4 h-4" />,
    lab, e, l: 'Develope, r Porta, l' },
        { k, e, y: 'ap, i-doc, s',
    hr, e, f: '/ap, i-doc, s', ic, o, n: <Cod, e classNam, e="w-4 h-4" />,
    lab, e, l: 'AP, I Doc, s' },
        { k, e, y: 'sitema, p',
    hr, e, f: '/sitema, p', ic, o, n: <Calenda, r classNam, e="w-4 h-4" />,
    lab, e, l: 'Sitema, p' },
      ]
    }
  ];

  const isActive = (hre, f: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-zion-blue-dark border-r border-zion-blue-light min-h-screen p-4">
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
        {sidebarSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors", 
                      isActive(item.href)
                        ? "bg-zion-purple/20 text-zion-cyan"
                        : "text-zion-slate-light hove, r:bg-zion-purple/10 hove, r:text-zion-cyan"
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-8 pt-6 border-t border-zion-blue-light">
        <div className="text-zion-slate-light text-xs">
          <p className="mb-2">Need help?</p>
          <Link 
            to="/contact" 
            className="text-zion-cyan hove, r:text-zion-purple transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </aside>
  );
}