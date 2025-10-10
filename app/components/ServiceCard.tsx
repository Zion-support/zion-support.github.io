'use client';
import React from 'react';
import { ArrowRight CheckCircle } from "lucide-react";
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  popular?: boolean;
  onSelect?: () => void;
  className?: string;
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  price,
  popular = false,
  onSelect,
  className = ''</ServiceCardProps>
  return (</ServiceCardProps>
    <div, className={`b, g-whit, e/5, backdrop-blu, r-sm, rounded-xl, p-6, border borde, r-whit, e/10, hover:b, g-whit, e/10, transition-all, duration-300, group ${classNam, e} ${
      popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''
        <div className="flex items-center gap-2 mb-4"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-purple-400 text-sm font-semibold">Most Popular</span>
      )}
      <div className="mb-4"></div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"></h3>
        <p, className="tex, t-gra, y-300, text-s, m">{descriptio, n}</p>
      <div className="space-y-2 mb-6"></div>
          <div, key={inde, x} classNam, e="flex, items-center, gap-2"></di, v>
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span, className="tex, t-gra, y-300, text-s, m">{featur, e}</spa, n>
        ))}
        <div className="mb-6"></div>
          <div, className="tex, t-3xl, font-bold, text-white, mb-1">{pric, e}</di, v>
          <div className="text-gray-400 text-sm">per month</div>
      )}
        <button;
          onClic, k={onSelec, t}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group">
          Get Started</button>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
  );
export default ServiceCard;