'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';;

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  href,
  features = []
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {features.length > 0 && (
        <ul className="text-sm text-gray-500 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-1">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link 
        href={href}
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;