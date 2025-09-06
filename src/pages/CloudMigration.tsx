import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const CloudMigration: React.FC = () => {
<<<<<<< HEAD
  const services = [
    {
      title: 'AWS Migration',
      description: 'Complete migration to Amazon Web Services with zero downtime',
      features: [
        'Lift and shift migration',
        'Application modernization',
        'Database migration',
        'Cost optimization',
        'Security hardening',
      ],
      price: '$5,000 - $50,000',
      duration: '2-12 weeks',
    },
    {
      title: 'Azure Migration',
      description: 'Seamless migration to Microsoft Azure cloud platform',
      features: [
        'Hybrid cloud setup',
        'Active Directory integration',
        'DevOps integration',
        'Monitoring setup',
        'Backup & disaster recovery',
      ],
      price: '$4,500 - $45,000',
      duration: '2-10 weeks',
    },
    {
      title: 'Google Cloud Migration',
      description: 'Migration to Google Cloud Platform with advanced analytics',
      features: [
        'BigQuery integration',
        'AI/ML services',
        'Kubernetes migration',
        'Data analytics setup',
        'Performance optimization',
      ],
      price: '$4,000 - $40,000',
      duration: '2-8 weeks',
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Distributed cloud architecture across multiple providers',
      features: [
        'Multi-cloud architecture',
        'Cloud governance',
        'Cost management',
        'Disaster recovery',
        'Vendor management',
      ],
      price: '$8,000 - $80,000',
      duration: '4-16 weeks',
    },
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by up to 40%',
      icon: '💰',
    },
    {
      title: 'Scalability',
      description: 'Scale resources based on demand',
      icon: '📈',
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance',
      icon: '🔒',
    },
    {
      title: 'Performance',
      description: 'Improved application performance and reliability',
      icon: '⚡',
    },
    {
      title: 'Flexibility',
      description: 'Access to latest cloud technologies and services',
      icon: '🔄',
    },
    {
      title: 'Disaster Recovery',
      description: 'Automated backup and disaster recovery',
      icon: '🛡️',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Cloud Migration Services</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Seamlessly migrate your applications and infrastructure to the cloud.
            Our expert team ensures zero downtime and maximum performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"
            >
              Get Migration Assessment
            </Link>
            <Link
              to="/pricing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg"
            >
              View Pricing
            </Link>
=======
  return (
    <>
      <SEO title="Cloud Solutions" description="Cloud Solutions page" url="/services/cloud-solutions" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Cloud Solutions</h1>
            <p className="text-xl text-gray-300">Coming soon...</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CloudMigration;
