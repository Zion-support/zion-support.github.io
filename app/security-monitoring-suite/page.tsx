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
  Database,
  Target,

} from lucide-react';

';

const SecurityMonitoringSuitePage: React.FC = () => {const features = [';';';

    {
      ico,
    n: Monitor,
      title: 'Real-time Dashboard,
      description: Comprehensive security monitoring dashboard with live threat detection and incident tracking.
    },
    {
      icon: AlertTriangle,
      title: 'Advanced Alerts,
      description: Intelligent alerting system that notifies you of security threats and anomalies instantly.
    },
    {
      icon: BarChart,
      title: 'Security Analytics,
      description: Detailed security reports and analytics to help you understand and improve your security posture.
    },
    {
      icon: Zap,
      title: 'Automated Response,
      description: Automated incident response and threat mitigation to protect your systems 24
    }

  ]';

';

const benefits = [';
    '24/7 security monitoring and protection,
    'Real-time threat detection and alerts',    'Comprehensive security analytics,
    'Automated incident response,
    'Compliance monitoring and reporting,
    'Easy-to-use dashboard interface,
    'Scalable for any business size,
    Expert security team support
  ]';

  return (

    <React.Fragment>
      <Helmet>
        <title>Security Monitoring Suite - Zion Tech Group | Cybersecurity Platform</title>
        <meta name="description" content="Comprehensive security monitoring suite by Zion Tech Group. Advanced cybersecurity platform with real-time monitoring, alerts, and automated response. />
        <meta name="keywords" content="security monitoring suite, cybersecurity platform, threat detection, security alerts, Zion Tech Group />
      </Helmet>
        {/* Benefits Section *
        <section className=py-20 px-4 sm: px-6 lg:px-8 bg-white
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>
                Why Choose Our Suite?
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Experience comprehensive security protection with our all-in-one monitoring platform.
              <
            <

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
              {benefits.map((benefit, index) => (

                <div key={index} className="flex items-start space-x-3>
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 />
                  <p className="text-gray-300 text-lg>{benefit}</p>
                </div>
              ))
            </div>
          </div>
        </section>
        {/* CTA Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>
                Ready to Secure Your Business?
              <
              <p className="text-xl text-purple-100 mb-8>
                Start your free trial today and experience the power of our security monitoring suite.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className=bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center>
                  
                  <Mail className="mr-2 h-5 w-5 
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>)
export default SecurityMonitoringSuitePage'"'"'"'";
