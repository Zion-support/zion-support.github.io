import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { getServicesByCategory } from '../../data/services';
import { ArrowRight, CheckCircle, Star, Zap, Users, Shield } from 'lucide-react';
import Link from 'next/link';
const MicroSaasPage: NextPage = () => {;
  const microSaasServices = getServicesByCategory('micro-saas');
  const benefits = [;
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes, not months. Our micro SaaS solutions are designed for quick deployment.';
},
    {;
      icon: <Users className="w-8 h-8" />,
      title: 'Scalable Solutions',
      description: 'Start small and grow as your business expands. Our solutions scale with your needs.';
},
    {;
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, ensuring your data is always protected.';
},
    {;
      icon: <Star className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Track record of successful implementations with measurable ROI for our clients.';
}
  ];
  return (;
    <MainLayout;
      title="Micro SaaS Solutions - Zion Tech Group";
      description="Powerful, affordable micro SaaS applications designed to solve specific business challenges. Streamline your operations with our innovative solutions.">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">;
              Micro SaaS Solutions;
            </h1>;
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">;
              Powerful, affordable SaaS applications designed to solve specific business challenges ;
              and streamline your operations.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/contact">;
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">;
                  Get Started Today;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </span>;
              </Link>;
              <Link href="#pricing">;
                <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">;
                  View Pricing;
                </span>;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;