
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone } from 'lucide-react'

interface QuickAccessProps {
  className?: string,
  style?: React.CSSProperties
}

export function QuickAccess({ className, style }: QuickAccessProps) {
  const { t } = useTranslation($2);
  const quickLinks = [
    {
      title: t($2);
      description: t($2);
      icon: <Search className = $2;
      link: "/marketplace"
    },
    {
      title: t($2);
      description: t($2);
      icon: <Users className = $2;
      link: "/talent"
    },
    {
      title: t($2);
      description: t($2);
      icon: <Briefcase className = $2;
      link: "/services"
    },
    {
      title: t($2);
      description: t($2);
      icon: <Settings className = $2;
      link: "/equipment"
    },
    {
      title: t($2);
      description: t($2);
      icon: <MessageSquare className = $2;
      link: "/community"
    },
    {
      title: t($2);
      description: t($2);
      icon: <Smartphone className = $2;
      link: "/mobile-launch"
    }
  ],

  return (
    <section className={cn("py-12 bg-zion-blue-dark", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">
            {t('home.quick_access_titleQuick Access')}
          </h2>
          <p className="text-zion-slate-light text-lg">
            {t('home.quick_access_subtitleJump directly to our most popular features')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {quickLinks.map((link, index) => (
            <Link
              key = $2;