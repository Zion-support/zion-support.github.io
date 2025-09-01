
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import {
  HomeIcon,
  ShoppingCartIcon,
  LayoutGridIcon,
  UsersIcon,
  HardDriveIcon,
  MessageCircleIcon, // For Community
  LayoutDashboardIcon,
  BarChartIcon,
  MessageSquare,   // For Messages
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Page() {
, []);

  const baseLinks: NavigationLink[] = [{

  const iconMap: { [key: string]: React.ElementType } = {
    home: HomeIcon,
    marketplace: ShoppingCartIcon,
    categories: LayoutGridIcon,
    talent: UsersIcon,
    equipment: HardDriveIcon,
    community: MessageCircleIcon,
    dashboard: LayoutDashboardIcon,
    analytics: BarChartIcon,
    messages: MessageSquare,
  };

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      name: 'Home',
      matches: (path: string) => path = == '/'
    },
    {

      key: 'services',
      href: '/services',
      name: 'Services',
      matches: (path: string) => path.startsWith('/services'),
      children: ['
        { key: 'cloud-devops', href: '/services/cloud-devops', name: 'Cloud & DevOps', matches: (p: string) => p.startsWith('/services/cloud-devops') },
        { key: 'digital-twin', href: '/services/digital-twin', name: 'Digital Twin', matches: (p: string) => p.startsWith('/services/digital-twin') },
        { key: 'data-analytics', href: '/services/data-analytics', name: 'Data Analytics', matches: (p: string) => p.startsWith('/services/data-analytics') },
        { key: 'it-infrastructure', href: '/services/it-infrastructure', name: 'IT Infrastructure', matches: (p: string) => p.startsWith('/services/it-infrastructure') },
        { key: 'ai-business-intelligence', href: '/services/ai-business-intelligence', name: 'AI Business Intelligence', matches: (p: string) => p.startsWith('/services/ai-business-intelligence') },
        { key: 'ai-sales-copilot', href: '/services/ai-sales-copilot', name: 'AI Sales Copilot', matches: (p: string) => p.startsWith('/services/ai-sales-copilot') },
        { key: 'cloud-finops-optimizer', href: '/services/cloud-finops-optimizer', name: 'Cloud FinOps Optimizer', matches: (p: string) => p.startsWith('/services/cloud-finops-optimizer') },
        { key: 'ai-compliance-assistant', href: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', matches: (p: string) => p.startsWith('/services/ai-compliance-assistant') },
        { key: 'ai-auto-email-responder', href: '/services/ai-auto-email-responder', name: 'AI Auto Email Responder', matches: (p: string) => p.startsWith('/services/ai-auto-email-responder') },
        { key: 'mobile-feedback-surveys', href: '/services/mobile-feedback-surveys', name: 'Feedback Surveys', matches: (p: string) => p.startsWith('/services/mobile-feedback-surveys') },
        { key: 'ai-compliance-copilot', href: '/services/ai-compliance-copilot', name: 'AI Compliance Copilot', matches: (p: string) => p.startsWith('/services/ai-compliance-copilot') },
        { key: 'llm-content-studio', href: '/services/llm-content-studio', name: 'LLM Content Studio', matches: (p: string) => p.startsWith('/services/llm-content-studio') },
        { key: 'finops-advisor', href: '/services/finops-advisor', name: 'FinOps Advisor', matches: (p: string) => p.startsWith('/services/finops-advisor') },
        { key: 'returns-management', href: '/services/returns-management', name: 'Returns Management', matches: (p: string) => p.startsWith('/services/returns-management') },
        { key: 'email-sequencer', href: '/services/email-sequencer', name: 'Email Sequencer', matches: (p: string) => p.startsWith('/services/email-sequencer') },
        { key: 'podcast-transcription', href: '/services/podcast-transcription', name: 'Podcast Transcription', matches: (p: string) => p.startsWith('/services/podcast-transcription') },
        { key: 'micro-crm', href: '/services/micro-crm', name: 'Micro CRM', matches: (p: string) => p.startsWith('/services/micro-crm') },
        { key: 'website-analytics', href: '/services/website-analytics', name: 'Website Analytics', matches: (p: string) => p.startsWith('/services/website-analytics') },
        { key: 'it-helpdesk', href: '/services/it-helpdesk', name: 'IT Helpdesk', matches: (p: string) => p.startsWith('/services/it-helpdesk') },
        { key: 'affiliate-tracking', href: '/services/affiliate-tracking', name: 'Affiliate Tracking', matches: (p: string) => p.startsWith('/services/affiliate-tracking') },
        { key: 'mobile-survey', href: '/services/mobile-survey', name: 'Mobile Survey', matches: (p: string) => p.startsWith('/services/mobile-survey') }
      ]
    },
    {

      key: 'ai-services',
      href: '/ai-services',
      name: 'AI Services',
      matches: (path: string)  => path.startsWith('/ai-services')
    },
    {

      key: 'it-services',
      href: '/it-services',
      name: 'IT Services',
      matches: (path: string)  => path.startsWith('/it-services')
    },
    {

      key: 'micro-saas',
      href: '/micro-saas',
      name: 'Micro SAAS',
      matches: (path: string)  => path.startsWith('/micro-saas')
    },
    {

      key: 'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string)  => path.startsWith('/marketplace')
    },
    {

      key: 'about',
      href: '/about',
      name: 'About',
      matches: (path: string)  => path.startsWith('/about')
    },
    {

      matches: (path: string)  => path.startsWith('/contact')
    };
      key: 'contact',;
      href: '/contact',;
      name: 'Contact',;
      matches: (path: string) => path.startsWith('/contact')};
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`), Icon: iconMap[link.key] }));
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: t('nav.dashboard'),
      href: '/dashboard',
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'),
      Icon: iconMap['dashboard']
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: t('nav.analytics'),
      href: '/analytics',
      matches: (path: string) => path.startsWith('/analytics'),
      Icon: iconMap['analytics']
    });
  }
  
  const linkBaseClasses = "inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar-background";
  const linkDefaultStateClasses = "text-slate-200 hover:bg-zion-purple/30 hover:text-white";
  const linkActiveStateClasses = "bg-zion-purple/20 text-zion-cyan border-b-2 border-zion-cyan";

  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => {
          const IconComponent = link.Icon;
          return (
            <li key={link.key}> {/* Use link.key for a more stable key */}
              <Link
                to={link.href}
                className={cn(
                  linkBaseClasses,
                  link.matches(location.pathname)
                    ? linkActiveStateClasses
                    : linkDefaultStateClasses
                )}
              >
                {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
                {link.name}
              </Link>
            </li>
          );
        })}
        
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to="/messages"
              className={cn(
                linkBaseClasses,
                "relative", // For positioning unread counter
                (location.pathname === "/messages" || location.pathname === "/inbox")
                  ? linkActiveStateClasses
                  : linkDefaultStateClasses
              )}
            >
              <MessageSquare className="mr-2 h-4 w-4" /> {/* Standardized icon style */}
              {t('nav.messages')}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
