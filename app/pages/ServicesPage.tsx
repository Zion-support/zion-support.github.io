import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ServerIcon, 
  ShieldCheckIcon, 
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const services = [
    {
      name: 'AI Solutions',
      description: 'Machine learning, automation, and intelligent systems',
      icon: CpuChipIcon,
      href: '/ai-solutions',
      color: 'text-purple-400'
    },
    {
      name: 'IT Infrastructure',
      description: 'Cloud solutions, networking, and system administration',
      icon: ServerIcon,
      href: '/it-solutions',
      color: 'text-blue-400'
    },
    {
      name: 'Cybersecurity',
      description: 'Protection, monitoring, and security consulting',
      icon: ShieldCheckIcon,
      href: '/cybersecurity',
      color: 'text-green-400'
    },
    {
      name: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration',
      icon: CloudIcon,
      href: '/cloud-infrastructure',
      color: 'text-cyan-400'
    },
    {
      name: 'Data Analytics',
      description: 'Business intelligence and data visualization',
      icon: ChartBarIcon,
      href: '/ai-data-analytics',
      color: 'text-orange-400'
    },
    {
      name: 'Web Development',
      description: 'Modern web applications and digital solutions',
      icon: GlobeAltIcon,
      href: '/web-development',
      color: 'text-pink-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions tailored to your business needs. 
            We help you transform your digital infrastructure and achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.name}
              to={service.href}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">
                  {service.name}
                </h3>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how our services can help your business grow.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full py-3 px-6 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}