import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ShieldCheckIcon, CloudIcon, CpuChipIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import FuturisticBackground from "../components/FuturisticBackground";

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: CpuChipIcon,
      services: [
        { name: 'AI Analytics Dashboard', price: '$2,500/month', description: 'Advanced AI-powered analytics and business intelligence platform', features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization'] },
        { name: 'AI Content Generation', price: '$1,800/month', description: 'Automated content creation using cutting-edge AI technology', features: ['Blog Posts', 'Social Media', 'Email Campaigns', 'SEO Optimization'] },
        { name: 'AI Customer Support', price: '$1,200/month', description: 'Intelligent chatbot and customer service automation', features: ['24/7 Support', 'Natural Language Processing', 'Multi-language Support', 'Integration APIs'] },
        { name: 'AI Data Analytics', price: '$2,000/month', description: 'Machine learning-powered data analysis and insights', features: ['Data Mining', 'Pattern Recognition', 'Trend Analysis', 'Automated Reporting'] }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: ShieldCheckIcon,
      services: [
        { name: 'Security Assessment', price: '$1,200/month', description: 'Comprehensive security evaluation and vulnerability assessment', features: ['Penetration Testing', 'Security Audit', 'Risk Assessment', 'Compliance Check'] },
        { name: 'Managed Security Services', price: '$2,000/month', description: '24/7 security monitoring and incident response', features: ['24/7 Monitoring', 'Incident Response', 'Threat Detection', 'Security Updates'] },
        { name: 'Identity & Access Management', price: '$1,500/month', description: 'Secure user authentication and authorization systems', features: ['Single Sign-On', 'Multi-Factor Auth', 'User Provisioning', 'Access Control'] },
        { name: 'Data Protection', price: '$1,800/month', description: 'Comprehensive data encryption and backup solutions', features: ['Data Encryption', 'Backup Solutions', 'Data Recovery', 'Privacy Compliance'] }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: CloudIcon,
      services: [
        { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with minimal downtime', features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization'] },
        { name: 'Cloud Management', price: '$2,200/month', description: 'Ongoing cloud infrastructure management and optimization', features: ['Resource Monitoring', 'Cost Optimization', 'Security Management', 'Backup & Recovery'] },
        { name: 'DevOps & CI/CD', price: '$2,500/month', description: 'Automated deployment and continuous integration pipelines', features: ['Automated Deployments', 'Version Control', 'Testing Automation', 'Performance Monitoring'] },
        { name: 'Cloud Security', price: '$1,800/month', description: 'Comprehensive cloud security and compliance solutions', features: ['Access Controls', 'Data Encryption', 'Compliance Monitoring', 'Threat Protection'] }
      ]
    },
    {
      title: 'IT Consulting',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: WrenchScrewdriverIcon,
      services: [
        { name: 'Digital Transformation', price: '$4,000/month', description: 'Complete digital transformation strategy and implementation', features: ['Strategy Development', 'Process Optimization', 'Technology Integration', 'Change Management'] },
        { name: 'System Integration', price: '$2,800/month', description: 'Seamless integration of existing and new systems', features: ['API Development', 'Data Synchronization', 'Legacy System Integration', 'Performance Optimization'] },
        { name: 'IT Strategy & Planning', price: '$1,500/month', description: 'Comprehensive IT strategy development and technology roadmap', features: ['Technology Assessment', 'Roadmap Planning', 'Budget Planning', 'Vendor Management'] },
        { name: 'Technical Support', price: '$1,000/month', description: 'Ongoing technical support and maintenance services', features: ['24/7 Support', 'Remote Assistance', 'System Maintenance', 'Performance Monitoring'] }
      ]
    }
  ];

const Page = () => {
  return (
<>    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page - Zion Tech Group" /></meta>
      </Helmet>
      <div className="container mx-auto px-4 py-16"></>
        <div className="text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-gray-300 text-lg"></p>
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
