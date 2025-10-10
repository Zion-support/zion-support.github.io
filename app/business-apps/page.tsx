'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Smartphone, Monitor, Cloud } from 'lucide-react';

const BusinessAppsPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Custom mobile applications for iOS and Android platforms'
    },
    {
      icon: Monitor,
      title: 'Web Applications',
      description: 'Responsive web applications with modern UI/UX design'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless cloud integration and deployment solutions'
    },
    {
      icon: Brain,
    }
  ];

  const benefits = [
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Business Apps | Zion Tech Group</title>
        </div>

          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your business app needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAppsPage;