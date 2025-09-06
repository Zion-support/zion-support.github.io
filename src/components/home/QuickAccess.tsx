import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import {
  ArrowRight
  Search
  Users
  Briefcase
  Settings
  MessageSquare
  Smartphone
} from 'lucide-react'


  const { t } = useTranslation()
  const quickLinks = [
    {
      title: t('home.tool_ai_matcher')
      description: t('home.tool_ai_matcher_desc')
      icon: <Search className='h-6 w-6 text-zion-cyan' />
      link: '/marketplace'
    }
    {
      title: t('home.tool_talent')
      description: t('home.tool_talent_desc')
      icon: <Users className='h-6 w-6 text-zion-purple' />
      link: '/talent'
    }
    {
      title: t('home.tool_services')
      description: t('home.tool_services_desc')
      icon: <Briefcase className='h-6 w-6 text-zion-cyan' />
      link: '/services'
    }
    {
      title: t('home.tool_equipment')
      description: t('home.tool_equipment_desc')
      icon: <Settings className='h-6 w-6 text-zion-purple' />
      link: '/equipment'
    }
    {
      title: t('nav.community')
      description: t('home.tool_chat_desc')
      icon: <MessageSquare className='h-6 w-6 text-zion-cyan' />
      link: '/community'
    }
    {
      title: t('home.tool_mobile_app', 'Mobile App')
      description: t('home.tool_mobile_app_desc', 'Zion on the go')
      icon: <Smartphone className='h-6 w-6 text-zion-purple' />
      link: '/mobile-launch'
    }
  ]
  return (
    <section className={cn('py-12 bg-zion-blue-dark', className)} style={style}>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2'>
            {t('home.quick_access_title', 'Quick Access')}
          </h2>
          <p className='text-zion-slate-light text-lg'>
            {t(
              'home.quick_access_subtitle'
              'Jump directly to our most popular features'
            )}
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto'>
  const quickLinks = [
    {
      title: t('home.tool_ai_matcher'),
      description: t('home.tool_ai_matcher_desc'),
      icon: <Search className="h-6 w-6 text-zion-cyan" />,
      link: "/marketplace"
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
      title: t('home.tool_mobile_appMobile App'),
      description: t('home.tool_mobile_app_descZion on the go'),
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch"
    }
  ],

  return (
    <section className={cn("py-12 bg-zion-blue-dark", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            {t('home.quick_access_titleQuick Access')}
          </h2>;
          <p className="text-zion-slate-light text-lg">;
            {t('home.quick_access_subtitleJump directly to our most popular features')}
    <section className={cn("py-12 bg-zion-blue-dark", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            {t('home.quick_access_title', 'Quick Access')}
          </h2>
          <p className="text-zion-slate-light text-lg">
            {t('home.quick_access_subtitle', 'Jump directly to our most popular features')}
          </p>
        </div>
                {link.description}
              </p>
              <div className='flex items-center text-zion-cyan text-xs mt-auto'>
                <span>{t('general.explore')}</span>
                <ArrowRight className='ml-1 h-3 w-3 transition-transform group-hover:translate-x-1' />
              </div>
            </Link>
import React, { useState } from 'react'
import { motion  } from 'framer-motion'
export default function Page() {"
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },"
    { name: "Innovation", count: 10, color: "from-green-500 to-teal-500" },"
    { name: "Business", count: 14, color: "from-indigo-500 to-purple-500" };      scale: 1
import { motion  } from 'framer-motion';
export default function Page() {";
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },";
    { name: "Innovation", count: 10, color: "from-green-500 to-teal-500" },";
    { name: "Business", count: 14, color: "from-indigo-500 to-purple-500" };      scale: 1,
      transition: {
        duration: 0.5, ";
        ease: "ease_out"}}}
  const hover_variants = {
  hover: {
      transition: {
        duration: 0.3, "  ease: "ease_out";
}}}
}
}
}
}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}";
          className="text - center mb - 16">;
          <motion.div;
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition = {
}}
            viewport={{ once: true }}";
            className="inline - flex items - center gap - 2 px - 4 py - 2 bg - zion - cyan / 10 border border - zion - cyan / 20 rounded - full text - zion - cyan mb - 6">;
            Quick Access to Our Services;
          </motion.h2>;
          <motion.p;
            initial = {
              key={link.title}
              variants={hover_variants}";
              while_hover="hover";
              onHoverStart={(: unknown setHoveredCategory (link.title)}
              onHoverEnd={: unknown setHoveredCategory (null)}
              on_click={: unknown setSelectedCategory (selected_category === link.title ? null : link.title)}
              className={`group cursor - pointer ${link.bg_color} ${link.border_color} border rounded - 2xl p - 6 backdrop - blur - sm transition - all duration - 300 hover:shadow - 2xl hover:shadow - zion - cyan / 25`}
            >;
              {/* Icon and Header */}";
              <div className="flex items - start justify - between mb - 4">;
                <motion.div`;
                  className={`p - 3 rounded - xl bg - gradient - to - r ${link.color} bg - opacity - 20`}
                  while_hover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >";
                  <link.icon className="w - 6 h - 6 text - white" />;
                </motion.div>;
                <motion.div;
                  animate={{ rotate: hovered_category === link.title ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >";
                  <ChevronRight className="w - 5 h - 5 text - gray - 400 group - hover:text - zion - cyan transition - colors"  />                </motion.div>;
              </div>;
              {/* Content */}";
              <div className="mb - 4">";
                <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - zion - cyan transition - colors">;
                  {link.title}
                </h3>";
                <p className="text - gray - 300 text - sm leading - relaxed">;
                  {link.description}
                </p>;
              </div>;
              {/* Features Preview */}";
              <div className="mb - 4">";
                <div className="grid grid - cols - 2 gap - 2">;
                  {link.features.slice (0, 2).map (feature: unknown, idx: unknown (
                    <motion.div;
                      key={feature}
                      initial = {
                  ))}
                </div>
              </div>
              {/* CTA */}

export default QuickAccess;
;
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
        </div>;
      </div>;
    </section>;

  { opacity: 0,
  scale: 0.8;
}}
                      whileInView = {
  { opacity: 1,
  scale: 1;
}}
                      transition = {
  { duration: 0.4,
  delay: 0.2 + idx * 0.1;
}}
                      viewport={{ once: true }}";
                      className="text - center">";
                      <div className="text - lg font - bold text - zion - cyan">{value}</div>";
                      <div className="text - xs text - gray - 500 capitalize">{key}</div>;
                    </motion.div>))}
                </div>;
              </div>;
              {/* CTA */}
              <motion.div;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}";
                className="mt - auto">;
                <Link;
                  to={link.path}`;
                  className={`inline - flex items - center justify - center w - full px - 4 py - 3 bg - gradient - to - r ${link.color} text - white font - semibold rounded - lg transition - all duration - 300 hover:shadow - lg hover:shadow - zion - cyan / 25`}
                >;
                  Explore {link.title}";
                  <ChevronRight className="w - 4 h - 4 ml - 2 group - hover:translate - x-1 transition - transform"  />                </Link>;
              </motion.div>;
            </motion.div>))}
        </div>;
      </div>;
    </section>);
export default QuickAccess }
