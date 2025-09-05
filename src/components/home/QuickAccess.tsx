
import React from "react",
import Link from "next/link",
import { useTranslation } from "react-i18next",
import { cn } from "@/lib/utils",import { ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone } from 'lucide-react'

interface QuickAccessProps {
  className?: string,
  style?: React.CSSProperties
}

export function QuickAccess({ className, style }: QuickAccessProps) {
  const { t } = useTranslation(),
  const quickLinks = [
    {
      title: t('home.toolai_matcher'),
      description: t('home.toolai_matcher_desc'),
      icon: <Search className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/marketplace&quot
    },
    {
      title: t('home.tooltalent'),
      description: t('home.tooltalent_desc'),
      icon: <Users className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/talent&quot
    },
    {
      title: t('home.toolservices'),
      description: t('home.toolservices_desc'),
      icon: <Briefcase className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/services&quot
    },
    {
      title: t('home.toolequipment'),
      description: t('home.toolequipment_desc'),
      icon: <Settings className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/equipment&quot
    },
    {
      title: t('nav.community'),
      description: t('home.toolchat_desc'),
      icon: <MessageSquare className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/community&quot
    },
    {
      title: t('home.toolmobile_appMobile App'),
      description: t('home.toolmobile_app_descZion on the go'),
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch"    }
  ],

  return (
    <section className={cn("py-12 bg-zion-blue-dark", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            {t('home.quickaccess_titleQuick Access')}
          </h2>
          <p className="text-zion-slate-light text-lg">
            {t('home.quickaccess_subtitleJump directly to our most popular features')}          </p>
        </div>
        
        <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto&quot;>
          {quickLinks.map((link, index) => (
            <Link,
key={index}
              href={link.link}
              className=&quot;group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20&quot;
            >
              <div className=&quot;bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110&quot;>
                {link.icon}
              </div>
              <h3 className=&quot;text-white font-medium mb-1&quot;>{link.title}</h3>
              <p className=&quot;text-zion-slate-light text-xs mb-2&quot;>{link.description}</p>
              <div className=&quot;flex items-center text-zion-cyan text-xs mt-auto&quot;>
                <span>{t('general.explore')}</span>
                <ArrowRight className=&quot;ml-1 h-3 w-3 transition-transform group-hover:translate-x-1&quot; />
import React from "react";
import Link from "next/link";

interface QuickAccessProps {className?: string;
  style?: React.CSSProperties}

export function QuickAccess(_{className, style}: QuickAccessProps) {const { t} = useTranslation();
  const quickLinks = [
    {title: t('home.toolai_matcher'), description: t('home.toolai_matcher_desc'), icon: <Search className="h-6 w-6 text-zion-cyan" />, link: "/marketplace"},
    {title: t('home.tooltalent'), description: t('home.tooltalent_desc'), icon: <Users className="h-6 w-6 text-zion-purple" />, link: "/talent"},
    {title: t('home.toolservices'), description: t('home.toolservices_desc'), icon: <Briefcase className="h-6 w-6 text-zion-cyan" />, link: "/services"},
    {title: t('home.toolequipment'), description: t('home.toolequipment_desc'), icon: <Settings className="h-6 w-6 text-zion-purple" />, link: "/equipment"},
    {title: t('nav.community'), description: t('home.toolchat_desc'), icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />, link: "/community"},
    {title: t('home.toolmobile_app', _'Mobile App'), description: t('home.toolmobile_app_desc', _'Zion on the go'), icon: <Smartphone className="h-6 w-6 text-zion-purple" />, link: "/mobile-launch"}
  ];

  return (
    <section className={cn("py-12 bg-zion-blue-dark", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            {t('home.quickaccess_title', _'Quick Access')}
          </h2>
          <p className="text-zion-slate-light text-lg">
            {t('home.quickaccess_subtitle', _'Jump directly to our most popular features')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {quickLinks.map(_(link, index) => (
            <Link,
key={index}
              href={link.link}
              className="group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20"
            >
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                {link.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>{t('general.explore')}</span>
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickAccess,
