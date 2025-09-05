
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import Link from "next/link",
import { useTranslation } from "react-i18next",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import Link from &quot;next/link&quot;;
import { useTranslation } from &quot;react-i18next&quot;;
import { cn } from &quot;@/lib/utils&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone } from 'lucide-react'

interface QuickAccessProps {
  className?: string,
  style?: React.CSSProperties
}

export function QuickAccess({ className, style }: QuickAccessProps) {
  const { t } = useTranslation(),
  const quickLinks = [
    {
      title: t('home.tool_ai_matcher'),
      description: t('home.tool_ai_matcher_desc'),
      icon: <Search className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/marketplace&quot;
    },
    {
      title: t('home.tool_talent'),
      description: t('home.tool_talent_desc'),
      icon: <Users className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/talent&quot;
    },
    {
      title: t('home.tool_services'),
      description: t('home.tool_services_desc'),
      icon: <Briefcase className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/services&quot;
    },
    {
      title: t('home.tool_equipment'),
      description: t('home.tool_equipment_desc'),
      icon: <Settings className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/equipment&quot;
    },
    {
      title: t('nav.community'),
      description: t('home.tool_chat_desc'),
      icon: <MessageSquare className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/community&quot;
    },
    {
<<<<<<< HEAD
      title: t('home.tool_mobile_appMobile App'),
      description: t('home.tool_mobile_app_descZion on the go'),
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch"
=======
      title: t('home.tool_mobile_app', 'Mobile App'),
      description: t('home.tool_mobile_app_desc', 'Zion on the go'),
      icon: <Smartphone className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/mobile-launch&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  ],

  return (
<<<<<<< HEAD
    <section className={cn("py-12 bg-zion-blue-dark", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            {t('home.quick_access_titleQuick Access')}
          </h2>
          <p className="text-zion-slate-light text-lg">
            {t('home.quick_access_subtitleJump directly to our most popular features')}
=======
    <section className={cn(&quot;py-12 bg-zion-blue-dark&quot;, className)} style={style}>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-8&quot;>
          <h2 className=&quot;text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2&quot;>
            {t('home.quick_access_title', 'Quick Access')}
          </h2>
          <p className=&quot;text-zion-slate-light text-lg&quot;>
            {t('home.quick_access_subtitle', 'Jump directly to our most popular features')}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto&quot;>
          {quickLinks.map((link, index) => (
            <Link
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
=======
import React from "react";
import Link from "next/link";

interface QuickAccessProps {_className?: string;
  style?: React.CSSProperties;}

export function QuickAccess(_{_className, _style}: QuickAccessProps) {_const { t} = useTranslation();
  const _quickLinks = [
    {_title: t('home.tool_ai_matcher'), _description: t('home.tool_ai_matcher_desc'), _icon: <Search className="h-6 w-6 text-zion-cyan" />, _link: "/marketplace"},
    {_title: t('home.tool_talent'), _description: t('home.tool_talent_desc'), _icon: <Users className="h-6 w-6 text-zion-purple" />, _link: "/talent"},
    {_title: t('home.tool_services'), _description: t('home.tool_services_desc'), _icon: <Briefcase className="h-6 w-6 text-zion-cyan" />, _link: "/services"},
    {_title: t('home.tool_equipment'), _description: t('home.tool_equipment_desc'), _icon: <Settings className="h-6 w-6 text-zion-purple" />, _link: "/equipment"},
    {_title: t('nav.community'), _description: t('home.tool_chat_desc'), _icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />, _link: "/community"},
    {_title: t('home.tool_mobile_app', _'Mobile App'), _description: t('home.tool_mobile_app_desc', _'Zion on the go'), _icon: <Smartphone className="h-6 w-6 text-zion-purple" />, _link: "/mobile-launch"}
  ];

  return (
    <section className={_cn("py-12 bg-zion-blue-dark", _className)} style={_style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            {_t('home.quick_access_title', _'Quick Access')}
          </h2>
          <p className="text-zion-slate-light text-lg">
            {_t('home.quick_access_subtitle', _'Jump directly to our most popular features')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {_quickLinks.map(_(link, _index) => (
            <Link
              key={index}
              href={_link.link}
              className="group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20"
            >
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                {_link.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{_link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-2">{_link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>{_t('general.explore')}</span>
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickAccess,
