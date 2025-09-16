import Layout from '../../components/Layout';
import { DollarSign, Shield, TrendingUp, Users, Database } from 'lucide-react';
import React from 'react';
import Layout from '../../components/Layout';';
import { DollarSign, Shield, TrendingUp, Users, Database, CheckCircle, ArrowRight } from 'lucide-react';
const features = [;
  {}
    icon: DollarSign,
    title: 'Financial Data Management,',
    description: 'Secure, real-time financial data processing and analytics for informed decision making.',
  },
  {}
    icon: Shield,
    title: 'Regulatory Compliance,',
    description: 'SOX, PCI DSS, and other financial compliance solutions to meet industry standards.',
  },
  {}
    icon: TrendingUp,
    title: 'Risk Management,',
    description: 'Advanced risk assessment and management tools powered by AI and machine learning.'';
  },
  {}
    icon: Users,
    title: 'Customer Experience,',
    description: 'Digital banking and financial services platforms that enhance customer engagement.'';
  },
  {}
    icon: Database,
    title: 'Fraud Detection,',
    description: 'Real-time fraud detection and prevention systems using advanced analytics.'';
import Layout from '../../components/Layout';
import { DollarSign, Shield, TrendingUp, Users, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Users, 
  Database, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Financial Analytics',
    description: 'Advanced analytics and reporting for financial institutions'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Bank-grade security with regulatory compliance built-in'
  },
  {
    icon: TrendingUp,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and management tools'
  },
  {
    icon: Users,
    title: 'Customer Portal',
    description: 'Secure customer-facing applications and services'
  },
  {
    icon: FileText,
    title: 'Regulatory Reporting',
    description: 'Automated compliance and regulatory reporting'
  },
  {
    icon: CheckCircle,
    title: 'Audit Trail',
    description: 'Complete transaction and activity audit trails'
  }
;];
const solutions = [;
  'Digital Banking Platforms',',
  'Payment Processing Systems',',
  'Risk Management Solutions',',
  'Regulatory Compliance Tools',',
  'Fraud Detection & Prevention',',
  'Financial Data Analytics',',
  'Trading Platforms',',
  'Insurance Technology',',
  'Cryptocurrency Solutions',',
  'Financial Mobile Applications'';
;];
export default function FinanceSolutionsPage() {
  return (;
    <Layout );
      title="Financial Services Solutions - Zion Tech Group"";
      description="Transform financial services with our secure, compliant solutions including digital banking, payment processing, risk management, and fraud detection.""
    >;
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto text-center">";
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">";
                Financial Services;
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">";
                  Solutions;
                </span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
                Revolutionize financial services with our secure, compliant technology solutions. 
                From digital banking to fraud detection, we help financial institutions deliver;
                exceptional customer experiences while maintaining regulatory compliance.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">";
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />";
                </button>;
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">";
                  View Case Studies;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-white mb-4">";
                Comprehensive Financial Technology Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                Our financial services solutions are designed to enhance security, 
                improve efficiency, and ensure compliance with financial regulations.,
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {features.map((feature, index) => (,
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">"
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <feature.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>"
                  <p className="text-gray-300">{feature.description}</p>"
                </div>;
const benefits = [
  'Enhanced security and fraud prevention',
  'Improved regulatory compliance',
  'Streamlined financial operations',
  'Better risk management capabilities',
  'Reduced operational costs',
  'Faster transaction processing'
];
export default function FinanceSolutions() {
    title: 'User Management',
    description: 'Secure user management with role-based access control',
    benefits: ['User provisioning', 'Role management', 'Access control', 'Audit logs']
  }
];

export default function FinanceSolutionsPage() {
  return (
    <Layout
      title="Finance Solutions - Zion Tech Group"
      description="Secure financial technology solutions for banks, fintech companies, and financial institutions. Regulatory compliant and secure."
      keywords="finance solutions, fintech, banking technology, financial services, regulatory compliance, risk management"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Finance Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Secure, compliant, and innovative financial technology solutions
                designed for modern financial institutions and fintech companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Financial Technology Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for financial institutions with security, compliance, and performance as top priorities.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>,
          </div>;
        </section>;
        {/* Solutions List */}
        <section className="py-20 bg-gray-800/30">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto">";
              <h2 className="text-3xl font-bold text-white text-center mb-12">";
                Our Financial Services Solutions;
              </h2>;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">";
                {solutions.map((solution, index) => (,
                  <div key={index} className="flex items-center space-x-3">"
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />";
                    <span className="text-gray-300 text-lg">{solution}</span>"
                  </div>;
                ))}
              </div>,
            </div>;
          </div>;
        </section>;
        {/* Compliance Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="bg-gray-800/50 rounded-2xl p-12">";
              <div className="text-center mb-12">";
                <h2 className="text-4xl font-bold text-white mb-4">";
                  Regulatory Compliant & Secure;
                </h2>;
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                  All our financial solutions are built with security and compliance in mind, 
                  ensuring your financial data is protected and your organization meets regulatory requirements.;
                </p>;
              </div>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">";
                <div className="text-center">";
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Shield className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">PCI DSS Compliant</h3>";
                  <p className="text-gray-300">Built to meet all PCI DSS requirements for payment data protection.</p>";
                </div>;
                <div className="text-center">";
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Database className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">SOX Compliant</h3>";
                  <p className="text-gray-300">Enterprise-grade security measures to meet Sarbanes-Oxley requirements.</p>";
                </div>;
                <div className="text-center">";
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <TrendingUp className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Monitoring</h3>";
                  <p className="text-gray-300">Continuous monitoring and alerting for security and performance.</p>";
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">";
              <h2 className="text-4xl font-bold text-white mb-6">";
                Ready to Transform Financial Services?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">";
                Let our financial technology experts help you implement solutions that;
                enhance security, improve efficiency, and ensure regulatory compliance.,
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">";
                  Schedule Consultation;
                </button>;
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">";
                  Download Financial Guide;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;

      </div>;
    </Layout>;
        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Transforming Financial Services
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our finance solutions help financial institutions modernize their operations,
                  enhance security, and improve customer experiences.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-green-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Modernize Finance?</h3>
                <p className="text-lg mb-6">
                  Let our financial technology experts help you implement secure,
                  compliant solutions that drive growth and innovation.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Financial Services?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our finance solutions team to discuss your specific requirements
              and discover how we can help modernize your financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Finance Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Finance Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}