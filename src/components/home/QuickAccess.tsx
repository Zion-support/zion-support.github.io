
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  Users, 
  Briefcase, 
  Settings, 
  ShoppingCart, 
  MessageSquare, 
  BarChart3,
  Zap,
  Globe,
  Shield,
  Clock
} from 'lucide-react';

const quickAccessItems = [
  {
    title: 'Find Talent',
    description: 'Discover skilled professionals',
    icon: Users,
    href: '/talent',
    color: 'from-zion-cyan to-zion-blue',
    bgColor: 'bg-zion-cyan/10',
    iconColor: 'text-zion-cyan'
  },
  {
    title: 'Hire AI',
    description: 'AI-powered hiring solutions',
    icon: Zap,
    href: '/zion-hire-ai',
    color: 'from-zion-purple to-zion-purple-dark',
    bgColor: 'bg-zion-purple/10',
    iconColor: 'text-zion-purple'
  },
  {
    title: 'IT Services',
    description: '24/7 global IT support',
    icon: Settings,
    href: '/it-onsite-services',
    color: 'from-zion-blue to-zion-blue-dark',
    bgColor: 'bg-zion-blue/10',
    iconColor: 'text-zion-blue'
  },
  {
    title: 'Marketplace',
    description: 'Browse products & services',
    icon: ShoppingCart,
    href: '/marketplace',
    color: 'from-zion-green to-zion-green-dark',
    bgColor: 'bg-zion-green/10',
    iconColor: 'text-zion-green'
  },
  {
    title: 'Community',
    description: 'Connect with peers',
    icon: MessageSquare,
    href: '/community',
    color: 'from-zion-orange to-zion-orange-dark',
    bgColor: 'bg-zion-orange/10',
    iconColor: 'text-zion-orange'
  },
  {
    title: 'Analytics',
    description: 'Track your performance',
    icon: BarChart3,
    href: '/analytics',
    color: 'from-zion-pink to-zion-pink-dark',
    bgColor: 'bg-zion-pink/10',
    iconColor: 'text-zion-pink'
  }
];

export function QuickAccess() {
  const { t } = useTranslation();
  const quickLinks = [
    {
      title: t('home.tool_ai_matcher'),
      description: t('home.tool_ai_matcher_desc'),
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
      link: "/match"
    },
    {
      title: t('home.tool_talent'),
      description: t('home.tool_talent_desc'),
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      link: "/talent"
    },
    {
      title: t('home.tool_services'),
      description: t('home.tool_services_desc'),
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,
      link: "/services"
    },
    {
      title: t('home.tool_equipment'),
      description: t('home.tool_equipment_desc'),
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/equipment"
    },
    {
      title: t('nav.community'),
      description: t('home.tool_chat_desc'),
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,
      link: "/community"
    },
    {
      title: "Mobile App",
      description: "Zion on the go",
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch"
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-zion-slate/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            Quick Access
          </h2>
          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Everything you need to grow your business, find talent, and access IT services 
            is just one click away.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {quickLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.link} 
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/70 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center hover:scale-[1.03] focus:scale-[1.03] hover:shadow-[0_0_20px_0px_rgba(112,0,255,0.4)] focus:shadow-[0_0_20px_0px_rgba(112,0,255,0.4)]"
            >
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">
                {link.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>{t('general.explore')}</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
