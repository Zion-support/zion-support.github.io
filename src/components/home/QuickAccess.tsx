{quickLinks.map((link, index) => (
            <Link
import React from 'react';
import Link from 'next / link';
import { use_translation } from 'react - i18next';
import { cn } from '@/lib / utils';
import {
  ArrowRight,
  Search,
  Users,
  Briefcase,
  Settings,
  MessageSquare,
  Smartphone,
} from 'lucide-react';
interface QuickAccessProps {
  class_name?: string;
  style?: React.CSSProperties;
export /**
 * QuickAccess - Function description
 */
function QuickAccess() {
  const { t } = use_translation ();
  const quick_links = [;
    {
      title: t ('home.tool_ai_matcher'),
      description: t ('home.tool_ai_matcher_desc'),
      icon: <Search className='h - 6 w - 6 text - zion - cyan' />,
      link: '/marketplace',
    },
    {
      title: t ('home.tool_talent'),
      description: t ('home.tool_talent_desc'),
      icon: <Users className='h - 6 w - 6 text - zion - purple' />,
      link: '/talent',
    },
    {
      title: t ('home.tool_services'),
      description: t ('home.tool_services_desc'),
      icon: <Briefcase className='h - 6 w - 6 text - zion - cyan' />,
      link: '/services',
    },
    {
      title: t ('home.tool_equipment'),
      description: t ('home.tool_equipment_desc'),
      icon: <Settings className='h - 6 w - 6 text - zion - purple' />,
      link: '/equipment',
    },
    {
      title: t ('nav.community'),
      description: t ('home.tool_chat_desc'),
      icon: <MessageSquare className='h - 6 w - 6 text - zion - cyan' />,
      link: '/community',
    },
    {
      title: t ('home.tool_mobile_app', 'Mobile App'),
      description: t ('home.tool_mobile_app_desc', 'Zion on the go'),
      icon: <Smartphone className='h - 6 w - 6 text - zion - purple' />,
      link: '/mobile - launch',
    },
  ];
  return (
    <section className={cn ('py - 12 bg - zion - blue - dark', class_name)} style={style}>;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 8'>;
          <h2 className='text - 2xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 2'>;
            {t ('home.quick_access_title', 'Quick Access')}
          </h2>;
          <p className='text - zion - slate - light text - lg'>;
            {t (
              'home.quick_access_subtitle',
              'Jump directly to our most popular features')}
          </p>;
        </div>;
        <div className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 max - w-6xl mx - auto'>;
          {quick_links.map ((link, index) => (
            <Link;
              key={index}
              href={link.link}

              </p>;
              <div className='flex items - center text - zion - cyan text - xs mt - auto'>;
                <span>{t ('general.explore')}</span>;
                <ArrowRight className='ml - 1 h - 3 w - 3 transition - transform group - hover:translate - x-1' />;
              </div>;
            </Link>;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
export default /**
 * Page - Function description
 */
function Page() {";
    { name: "Consulting", count: 6, color: "from - yellow - 500 to - orange - 500" }, ";
    { name: "Innovation", count: 10, color: "from - green - 500 to - teal - 500" }, ";
    { name: "Business", count: 14, color: "from - indigo - 500 to - purple - 500" }      scale: 1,

{quickLinks.map((link, index) => (
            <Link
import React from 'react';
import Link from 'next / link';
import { use_translation } from 'react - i18next';
import { cn } from '@/lib / utils';
import {
  ArrowRight,
  Search,
  Users,
  Briefcase,
  Settings,
  MessageSquare,
  Smartphone,
} from 'lucide-react';
interface QuickAccessProps {
  class_name?: string;
  style?: React.CSSProperties;
export /**
 * QuickAccess - Function description
 */
function QuickAccess() {
  const { t } = use_translation ();
  const quick_links = [;
    {
      title: t ('home.tool_ai_matcher'),
      description: t ('home.tool_ai_matcher_desc'),
      icon: <Search className='h - 6 w - 6 text - zion - cyan' />,
      link: '/marketplace',
    },
    {
      title: t ('home.tool_talent'),
      description: t ('home.tool_talent_desc'),
      icon: <Users className='h - 6 w - 6 text - zion - purple' />,
      link: '/talent',
    },
    {
      title: t ('home.tool_services'),
      description: t ('home.tool_services_desc'),
      icon: <Briefcase className='h - 6 w - 6 text - zion - cyan' />,
      link: '/services',
    },
    {
      title: t ('home.tool_equipment'),
      description: t ('home.tool_equipment_desc'),
      icon: <Settings className='h - 6 w - 6 text - zion - purple' />,
      link: '/equipment',
    },
    {
      title: t ('nav.community'),
      description: t ('home.tool_chat_desc'),
      icon: <MessageSquare className='h - 6 w - 6 text - zion - cyan' />,
      link: '/community',
    },
    {
      title: t ('home.tool_mobile_app', 'Mobile App'),
      description: t ('home.tool_mobile_app_desc', 'Zion on the go'),
      icon: <Smartphone className='h - 6 w - 6 text - zion - purple' />,
      link: '/mobile - launch',
    },
  ];
  return (
    <section className={cn ('py - 12 bg - zion - blue - dark', class_name)} style={style}>;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 8'>;
          <h2 className='text - 2xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 2'>;
            {t ('home.quick_access_title', 'Quick Access')}
          </h2>;
          <p className='text - zion - slate - light text - lg'>;
            {t (
              'home.quick_access_subtitle',
              'Jump directly to our most popular features')}
          </p>;
        </div>;
        <div className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 max - w-6xl mx - auto'>;
          {quick_links.map ((link, index) => (
            <Link;
              key={index}
              href={link.link}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto'>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className='group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20'            >
              <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110'>
                {link.icon}
              </div>
              <h3 className='text-white font-medium mb-1'>{link.title}</h3>
              <p className='text-zion-slate-light text-xs mb-2'>
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
              className='group bg - zion - blue relative border border - zion - blue - light hover:border - zion - purple / 50 rounded - xl p - 4 transition - all duration - 300 flex flex - col items - center text - center hover:shadow - md hover:bg - zion - blue - light / 20'            >;
              <div className='bg - zion - blue - dark rounded - full w - 12 h - 12 flex items - center justify - center mb - 3 transition - transform group - hover:scale - 110'>;
                {link.icon}
              </div>;
              <h3 className='text - white font - medium mb - 1'>{link.title}</h3>;
              <p className='text - zion - slate - light text - xs mb - 2'>;
                {link.description}
              </p>;
              <div className='flex items - center text - zion - cyan text - xs mt - auto'>;
                <span>{t ('general.explore')}</span>;
                <ArrowRight className='ml - 1 h - 3 w - 3 transition - transform group - hover:translate - x-1' />;
              </div>;
            </Link>;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
export default /**
 * Page - Function description
 */
function Page() {";
    { name: "Consulting", count: 6, color: "from - yellow - 500 to - orange - 500" }, ";
    { name: "Innovation", count: 10, color: "from - green - 500 to - teal - 500" }, ";
    { name: "Business", count: 14, color: "from - indigo - 500 to - purple - 500" }      scale: 1,
      transition: {
        duration: 0.5, ";
        ease: "ease_out"}}}
  const hover_variants = {
  hover: {
      coordinate_y: -8,      scale: 1.02,
      transition: {
        duration: 0.3, "  ease: "ease_out";

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

      coordinate_y: -8,      scale: 1.02,

      transition: {
        duration: 0.3, "  ease: "ease_out";

}}}
}
}
}
  return (    <section className="py - 20 bg - gradient - to - br from - zion - slate via - zion - slate - dark to - black relative overflow - hidden">;
      {/* Background Elements */}";
      <div className="absolute inset - 0 opacity - 30">";
        <div className="absolute top - 20 left - 20 w - 64 h - 64 bg - zion - cyan / 10 rounded - full blur - 3xl"></div>";
        <div className="absolute bottom - 20 right - 20 w - 80 h - 80 bg - zion - purple / 10 rounded - full blur - 3xl"></div>";
        <div className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 96 h - 96 bg - zion - blue / 10 rounded - full blur - 3xl"></div>;
      </div>;
";
      <div className="container - responsive relative z - 10">;
        {/* Header */}
        <motion.div;
          initial = {

  { opacity: 0,
  coordinate_y: 30;
}}
          whileInView = {
  { opacity: 1,
  coordinate_y: 0;

}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}";
          className="text - center mb - 16">;
          <motion.div;
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition = {

  { duration: 0.6,
  delay: 0.2;

}}
            viewport={{ once: true }}";
            className="inline - flex items - center gap - 2 px - 4 py - 2 bg - zion - cyan / 10 border border - zion - cyan / 20 rounded - full text - zion - cyan mb - 6">;
            Quick Access to Our Services;
          </motion.h2>;
          <motion.p;
            initial = {

  { opacity: 0,
  coordinate_y: 20;
}}
            whileInView = {
  { opacity: 1,
  coordinate_y: 0;
}}
            transition = {
  { duration: 0.6,
  delay: 0.2;
}}";
            className="text - lg text - gray - 300 max - w-2xl mx - auto">;
            Find the perfect solution for your business needs with our organized service categories;
          </motion.p>;
        </div>;
        {/* Quick Links Grid */}";
        <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 3 gap - 6 mb - 12">;
          {quick_links.map ((link, index <motion.div;

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

  { opacity: 0,
  coordinate_x: -10;
}}
                      whileInView = {
  { opacity: 1,
  coordinate_x: 0;
}}
                      transition = {
  { duration: 0.4,
  delay: 0.1 + idx * 0.1;

}}
                      viewport={{ once: true }}";
                      className="flex items - center gap - 2 text - xs text - gray - 400">";
                      <div className="w - 1.5 h - 1.5 bg - zion - cyan rounded - full"></div>";
export function QuickAccess(): any ({ className, style }: QuickAccessProps) {;
  const { t } = useTranslation();
  const quickLinks = [;
    {;
      title: t('home && home.tool_ai_matcher'),;
      description: t('home && home.tool_ai_matcher_desc'),;
      icon: <Search className='h-6 w-6 text-zion-cyan' />,;
      link: '/marketplace',;
    },;
    {;
      title: t('home && home.tool_talent'),;
      description: t('home && home.tool_talent_desc'),;
      icon: <Users className='h-6 w-6 text-zion-purple' />,;
      link: '/talent',;
    },;
    {;
      title: t('home && home.tool_services'),;
      description: t('home && home.tool_services_desc'),;
      icon: <Briefcase className='h-6 w-6 text-zion-cyan' />,;
      link: '/services',;
    },;
    {;
      title: t('home && home.tool_equipment'),;
      description: t('home && home.tool_equipment_desc'),;
      icon: <Settings className='h-6 w-6 text-zion-purple' />,;
      link: '/equipment',;
    },;
    {;
      title: t('nav && nav.community'),;
      description: t('home && home.tool_chat_desc'),;
      icon: <MessageSquare className='h-6 w-6 text-zion-cyan' />,;
      link: '/community',;
    },;
    {;
      title: t('home && home.tool_mobile_app', 'Mobile App'),;
      description: t('home && home.tool_mobile_app_desc', 'Zion on the go'),;
      icon: <Smartphone className='h-6 w-6 text-zion-purple' />,;
      link: '/mobile-launch',;
    },;
  ];
  return (
    <section className={cn('py-12 bg-zion-blue-dark', className)} style={style}>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-8'>;
          <h2 className='text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2'>;
            {t('home && home.quick_access_title', 'Quick Access')}
          </h2>;
          <p className='text-zion-slate-light text-lg'>;
            {t(;
              'home && home.quick_access_subtitle',;
              'Jump directly to our most popular features';
            )}
          </p>;
        </div>;
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto'>;
          {quickLinks && quickLinks.map((link, index) => (;
            <Link
              key={index}
              href={link && link.link}
              className='group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20'>;
              <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110'>;
                {link && link.icon}
              </div>;
              <h3 className='text-white font-medium mb-1'>{link && link.title}</h3>;
              <p className='text-zion-slate-light text-xs mb-2'>;
                {link && link.description}
              </p>;
              <div className='flex items-center text-zion-cyan text-xs mt-auto'>;
                <span>{t('general && general.explore')}</span>;
                <ArrowRight className='ml-1 h-3 w-3 transition-transform group-hover:translate-x-1' />;
              </div>;
            </Link>;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
export default function Page() {;";
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },";
    { name: "Innovation", count: 10, color: "from-green-500 to-teal-500" },";
    { name: "Business", count: 14, color: "from-indigo-500 to-purple-500" };      scale: 1,;
      transition: {;
        duration: 0 && 0.5,";
        ease: "easeOut"}}};
  const hoverVariants = {;
  hover: {;
      y: -8,      scale: 1 && 1.02,;
      transition: {;
        duration: 0 && 0.3,"  ease: "easeOut";
}}};
};
};
};
  return (    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black relative overflow-hidden">;
      {/* Background Elements */}";
      <div className="absolute inset-0 opacity-30">";
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl"></div>";
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>";
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/10 rounded-full blur-3xl"></div>;
      </div>;
";
      <div className="container-responsive relative z-10">;
        {/* Header */}
        <motion&& motion.div
          initial = {
  { opacity: 0,
  y: 30
}}
          whileInView = {
  { opacity: 1,
  y: 0
}}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}"
          className="text-center mb-16">;
          <motion&& motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition = {
  { duration: 0 && 0.6,
  delay: 0 && 0.2
}}
            viewport={{ once: true }}"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan mb-6">;
            Quick Access to Our Services;
          </motion && motion.h2>;
          <motion&& motion.p
            initial = {
  { opacity: 0,
  y: 20
}}
            whileInView = {
  { opacity: 1,
  y: 0
}}
            transition = {
  { duration: 0 && 0.6,
  delay: 0 && 0.2
}}"
            className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Find the perfect solution for your business needs with our organized service categories;
          </motion && motion.p>;
        </div>;
        {/* Quick Links Grid */}";
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6 mb-12">;
          {quickLinks && quickLinks.map((link, index <motion&& motion.div
              key={link && link.title}
              variants={hoverVariants}"
              whileHover="hover"
              onHoverStart={(: unknown setHoveredCategory(link && link.title)}
              onHoverEnd={: unknown setHoveredCategory(null)}
              onClick={: unknown setSelectedCategory(selectedCategory === link && link.title ? null : link && link.title)}
              className={`group cursor-pointer ${link && link.bgColor} ${link && link.borderColor} border rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25`}>;
              {/* Icon and Header */}";
              <div className="flex items-start justify-between mb-4">;
                <motion&& motion.div`
                  className={`p-3 rounded-xl bg-gradient-to-r ${link && link.color} bg-opacity-20`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0 && 0.6 }}>";
                  <link && link.icon className="w-6 h-6 text-white" />;
                </motion && motion.div>;
                <motion&& motion.div
                  animate={{ rotate: hoveredCategory === link && link.title ? 90 : 0 }}
                  transition={{ duration: 0 && 0.3 }}>";
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-zion-cyan transition-colors"  />                </motion && motion.div>;
              </div>;
              {/* Content */}";
              <div className="mb-4">";
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">;
                  {link && link.title}
                </h3>";
                <p className="text-gray-300 text-sm leading-relaxed">;
                  {link && link.description}
                </p>;
              </div>;
              {/* Features Preview */}";
              <div className="mb-4">";
                <div className="grid grid-cols-2 gap-2">;
                  {link && link.features.slice(0, 2).map(feature: unknown, idx: unknown (;
                    <motion&& motion.div
                      key={feature}
                      initial = {
  { opacity: 0,
  x: -10
}}
                      whileInView = {
  { opacity: 1,
  x: 0
}}
                      transition = {
  { duration: 0 && 0.4,
  delay: 0 && 0.1 + idx * 0 && 0.1
}}
                      viewport={{ once: true }}"
                      className="flex items-center gap-2 text-xs text-gray-400">";
                      <div className="w-1 && 1.5 h-1 && 1.5 bg-zion-cyan rounded-full"></div>";
                      <span className="truncate">{feature}</span>;
                    </motion && motion.div>;
                  ))}

                </div>;
              </div>;
              {/* Stats */}";
              <div className="mb - 4">";
                <div className="flex items - center justify - between text - sm">;
                  {Object.entries (link.stats).slice (0, 2).map ([key: unknown, value]: unknown, idx: unknown (
                    <motion.div;
                      key={key}
                      initial = {

  style?: React && React.CSSProperties;

export function QuickAccess(): any ({ className, style }: QuickAccessProps) {;
  const { t } = useTranslation();
  const quickLinks = [;
    {;
      title: t('home && home.tool_ai_matcher'),;
      description: t('home && home.tool_ai_matcher_desc'),;
      icon: <Search className='h-6 w-6 text-zion-cyan' />,;
      link: '/marketplace',;
    },;
    {;
      title: t('home && home.tool_talent'),;
      description: t('home && home.tool_talent_desc'),;
      icon: <Users className='h-6 w-6 text-zion-purple' />,;
      link: '/talent',;
    },;
    {;
      title: t('home && home.tool_services'),;
      description: t('home && home.tool_services_desc'),;
      icon: <Briefcase className='h-6 w-6 text-zion-cyan' />,;
      link: '/services',;
    },;
    {;
      title: t('home && home.tool_equipment'),;
      description: t('home && home.tool_equipment_desc'),;
      icon: <Settings className='h-6 w-6 text-zion-purple' />,;
      link: '/equipment',;
    },;
    {;
      title: t('nav && nav.community'),;
      description: t('home && home.tool_chat_desc'),;
      icon: <MessageSquare className='h-6 w-6 text-zion-cyan' />,;
      link: '/community',;
    },;
    {;
      title: t('home && home.tool_mobile_app', 'Mobile App'),;
      description: t('home && home.tool_mobile_app_desc', 'Zion on the go'),;
      icon: <Smartphone className='h-6 w-6 text-zion-purple' />,;
      link: '/mobile-launch',;
    },;
  ];

  return (
    <section className={cn('py-12 bg-zion-blue-dark', className)} style={style}>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-8'>;
          <h2 className='text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2'>;
            {t('home && home.quick_access_title', 'Quick Access')}
          </h2>;
          <p className='text-zion-slate-light text-lg'>;
            {t(;
              'home && home.quick_access_subtitle',;
              'Jump directly to our most popular features';
            )}
          </p>;
        </div>;

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto'>;
          {quickLinks && quickLinks.map((link, index) => (;
            <Link
              key={index}
              href={link && link.link}
              className='group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20'>;
              <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110'>;
                {link && link.icon}
              </div>;
              <h3 className='text-white font-medium mb-1'>{link && link.title}</h3>;
              <p className='text-zion-slate-light text-xs mb-2'>;
                {link && link.description}
              </p>;
              <div className='flex items-center text-zion-cyan text-xs mt-auto'>;
                <span>{t('general && general.explore')}</span>;
                <ArrowRight className='ml-1 h-3 w-3 transition-transform group-hover:translate-x-1' />;
              </div>;
            </Link>;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
export default function Page() {;";
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },";
    { name: "Innovation", count: 10, color: "from-green-500 to-teal-500" },";
    { name: "Business", count: 14, color: "from-indigo-500 to-purple-500" };      scale: 1,;
      transition: {;
        duration: 0 && 0.5,";
        ease: "easeOut"}}};
  const hoverVariants = {;
  hover: {;
      y: -8,      scale: 1 && 1.02,;
      transition: {;

        duration: 0 && 0.3,"  ease: "easeOut";
}}};
};
};
};
  return (    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black relative overflow-hidden">;
      {/* Background Elements */}";
      <div className="absolute inset-0 opacity-30">";
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl"></div>";
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>";
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/10 rounded-full blur-3xl"></div>;
      </div>;
";
      <div className="container-responsive relative z-10">;
        {/* Header */}
        <motion&& motion.div
          initial = {

  { opacity: 0,
  y: 30
}}
          whileInView = {

  { opacity: 1,
  y: 0
}}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}"
          className="text-center mb-16">;
          <motion&& motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition = {

  { duration: 0 && 0.6,
  delay: 0 && 0.2
}}
            viewport={{ once: true }}"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan mb-6">;
            Quick Access to Our Services;
          </motion && motion.h2>;
          <motion&& motion.p
            initial = {

  { opacity: 0,
  y: 20
}}
            whileInView = {

  { opacity: 1,
  y: 0
}}
            transition = {

  { duration: 0 && 0.6,
  delay: 0 && 0.2
}}"
            className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Find the perfect solution for your business needs with our organized service categories;
          </motion && motion.p>;
        </div>;

        {/* Quick Links Grid */}";
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6 mb-12">;
          {quickLinks && quickLinks.map((link, index <motion&& motion.div
              key={link && link.title}
              variants={hoverVariants}"
              whileHover="hover"
              onHoverStart={(: unknown setHoveredCategory(link && link.title)}
              onHoverEnd={: unknown setHoveredCategory(null)}
              onClick={: unknown setSelectedCategory(selectedCategory === link && link.title ? null : link && link.title)}
              className={`group cursor-pointer ${link && link.bgColor} ${link && link.borderColor} border rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25`}>;
              {/* Icon and Header */}";
              <div className="flex items-start justify-between mb-4">;
                <motion&& motion.div`
                  className={`p-3 rounded-xl bg-gradient-to-r ${link && link.color} bg-opacity-20`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0 && 0.6 }}>";
                  <link && link.icon className="w-6 h-6 text-white" />;
                </motion && motion.div>;

                <motion&& motion.div
                  animate={{ rotate: hoveredCategory === link && link.title ? 90 : 0 }}
                  transition={{ duration: 0 && 0.3 }}>";
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-zion-cyan transition-colors"  />                </motion && motion.div>;
              </div>;

              {/* Content */}";
              <div className="mb-4">";
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">;
                  {link && link.title}
                </h3>";
                <p className="text-gray-300 text-sm leading-relaxed">;
                  {link && link.description}
                </p>;
              </div>;

              {/* Features Preview */}";
              <div className="mb-4">";
                <div className="grid grid-cols-2 gap-2">;
                  {link && link.features.slice(0, 2).map(feature: unknown, idx: unknown (;
                    <motion&& motion.div
                      key={feature}
                      initial = {

  { opacity: 0,
  x: -10
}}
                      whileInView = {

  { opacity: 1,
  x: 0
}}
                      transition = {

  { duration: 0 && 0.4,
  delay: 0 && 0.1 + idx * 0 && 0.1
}}
                      viewport={{ once: true }}"
                      className="flex items-center gap-2 text-xs text-gray-400">";
                      <div className="w-1 && 1.5 h-1 && 1.5 bg-zion-cyan rounded-full"></div>";
                      <span className="truncate">{feature}</span>;
                    </motion && motion.div>;
                  ))}
                </div>;
              </div>;

              {/* Stats */}";
              <div className="mb-4">";
                <div className="flex items-center justify-between text-sm">;
                  {Object && Object.entries(link && link.stats).slice(0, 2).map([key: unknown, value]: unknown, idx: unknown (;
                    <motion&& motion.div
                      key={key}
                      initial = {

  { opacity: 0,
  scale: 0 && 0.8
}}
                      whileInView = {

  { opacity: 1,
  scale: 1
}}
                      transition = {

  { duration: 0 && 0.4,
  delay: 0 && 0.2 + idx * 0 && 0.1
}}
                      viewport={{ once: true }}"
                      className="text-center">";
                      <div className="text-lg font-bold text-zion-cyan">{value}</div>";
                      <div className="text-xs text-gray-500 capitalize">{key}</div>;
                    </motion && motion.div>;

                  ))}
                </div>
              </div>
                  ))}
                </div>
              </div>
              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}"
                className="mt-auto">
                <Link

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
                  to={link && link.path}`
                  className={`inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r ${link && link.color} text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25`}>;
                  Explore {link && link.title}";
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"  />                </Link>;
              </motion && motion.div>;
            </motion && motion.div>;

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

