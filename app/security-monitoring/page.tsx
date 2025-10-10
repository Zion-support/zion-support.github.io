'use client';

import React from 'react';

import { Helmet } from 'react-helmet-async';

import {
  Shield,
  Eye,
  AlertTriangle,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Settings,

} from 'lucide-react;

;

const SecurityMonitoringPage: React.FC = () => {const features = [;';

    {
      ico,
    n: Eye,
      title: '24
      descriptio,
    n: Continuous surveillance of your entire IT infrastructure with instant threat detection and response.
    },
    {
      icon: AlertTriangle,
      title: 'Advanced Threat Detection',
      description: AI-powered analysis to identify sophisticated cyber threats before they impact your business.
    },
    {
      icon: BarChart,
      title: 'Comprehensive Analytics',
      description: Detailed security reports and insights to help you understand and improve your security posture.
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: Automated incident response and immediate notification systems to minimize security breaches.
    }
  ];
;
const benefits = [
    '24/7 continuous security monitoring',
    'AI-powered threat detection and analysis',    'Real-time alerts and notifications',
    'Comprehensive security reporting',
    'Automated incident response',
    'Compliance monitoring and reporting',
    'Expert security team support',
    Customizable monitoring rules
  ];

  return (

    <React.Fragment>
      <Helmet>
        <title>Security Monitoring Services - Zion Tech Group | 24/7 Cybersecurity</title>
        <meta name="description" content="Professional 24/7 security monitoring services by Zion Tech Group. Advanced threat detection, real-time alerts, and comprehensive cybersecurity protection." />
        <meta name="keywords" content="security monitoring, cybersecurity, threat detection, 24/7 monitoring, security alerts, Zion Tech Group" />
      </Helmet>
        {/* Benefits Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience comprehensive security protection with our advanced monitoring services.
              <
            <

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (

                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))
            </div>
          </div>
        </section>
        {/* CTA Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              <
              <p className="text-xl text-purple-100 mb-8">
                Contact our security experts to discuss your monitoring needs and get a customized protection plan.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  
                  <Mail className="mr-2 h-5 w-5" 
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>)
export default SecurityMonitoringPage;