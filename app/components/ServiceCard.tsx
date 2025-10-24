'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href, icon }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3">{icon}</div>}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Learn more
        <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;