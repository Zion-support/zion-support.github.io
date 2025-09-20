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
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">finance</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default finance;