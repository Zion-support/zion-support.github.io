'use client';

import React from 'react';
import { Users, Globe, Database, Settings } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: <Globe className="h-8 w-8 text-green-600" />,
    value: "50+",
    label: "Countries Served"
  },
  {
    icon: <Database className="h-8 w-8 text-purple-600" />,
    value: "1M+",
    label: "Data Points Processed"
  },
  {
    icon: <Settings className="h-8 w-8 text-orange-600" />,
    value: "99.9%",
    label: "Uptime"
  }
];

export default function ContentStatistics() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            Our solutions are powering businesses worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}