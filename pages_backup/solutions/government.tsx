import React from 'react';
import Layout from '../../components/Layout';';
import { Shield, Users, FileText, Globe, Database, CheckCircle, ArrowRight } from 'lucide-react';
const features = [;
  {}
    icon: Shield,
    title: 'Cybersecurity & Compliance,',
    description: 'FISMA, FedRAMP, and other government security standards compliance solutions.',
  },
  {}
    icon: Users,
    title: 'Citizen Services,',
    description: 'Digital platforms for citizen engagement, service delivery, and government transparency.',
  },
  {}
    icon: FileText,
    title: 'Document Management,',
    description: 'Secure document management and workflow systems for government operations.'';
  },
  {}
    icon: Globe,
    title: 'Open Data Platforms,',
    description: 'Public data portals and open government initiatives for transparency and accountability.'';
  },
  {}
    icon: Database,
    title: 'Data Analytics,',
    description: 'Government data analytics and business intelligence for informed decision making.'';
import Layout from '../../components/Layout';
import { Building2, Shield, Users, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  FileText, 
  Globe, 
  Database, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Digital Government Services',
    description: 'Citizen-facing digital services and online portals'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Government-grade security and regulatory compliance'
  },
  {
    icon: Users,
    title: 'Citizen Engagement',
    description: 'Platforms for citizen participation and feedback'
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Secure document storage and management systems'
  },
  {
    icon: CheckCircle,
    title: 'Workflow Automation',
    description: 'Automated government processes and approvals'
  },
  {
    icon: ArrowRight,
    title: 'Data Analytics',
    description: 'Government data analysis and reporting tools'
  }
;];
const solutions = [;
  'Citizen Portal Development',',
  'Government Data Analytics',',
  'Cybersecurity Solutions',',
  'Document Management Systems',',
  'Open Data Platforms',',
  'E-Government Services',',
  'Digital Identity Solutions',',
  'Government Mobile Applications',',
  'Compliance Management',',
  'Public Sector Cloud Solutions'';
;];
export default function GovernmentSolutionsPage() {
  return (;
    <Layout );
      title="Government Solutions - Zion Tech Group"";
      description="Transform government operations with our secure, compliant solutions including citizen portals, cybersecurity, document management, and open data platforms.""
    >;
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto text-center">";
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">";
                Government;
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">";
                  Solutions;
                </span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
                Transform government operations with our secure, compliant technology solutions. 
                From citizen portals to cybersecurity, we help government agencies deliver;
                better services while maintaining the highest security standards.;
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
                Comprehensive Government Technology Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                Our government solutions are designed to enhance citizen services, 
                improve operational efficiency, and ensure compliance with government regulations.,
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
  'Improved citizen services and satisfaction',
  'Enhanced government transparency',
  'Streamlined administrative processes',
  'Better data security and compliance',
  'Reduced operational costs',
  'Increased government efficiency'
];
export default function GovernmentSolutions() {
    icon: Database,
    title: 'Data Management',
    description: 'Secure data management and analytics for government data',
    benefits: ['Data governance', 'Analytics', 'Reporting', 'Integration']
  }
];

export default function GovernmentSolutionsPage() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">government</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default government;
