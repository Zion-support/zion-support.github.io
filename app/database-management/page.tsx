import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CircleStackIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const DatabaseManagementPage: React.FC = () => {
  const services = [
    {
      icon: CircleStackIcon,
      title: 'Database Design & Architecture',
      description: 'Optimized database schemas and architectures for maximum performance and scalability.'
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms to automatically optimize database performance and queries.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with encryption, access controls, and compliance certifications.'
    },
    {
      icon: BoltIcon,
      title: 'Performance Tuning',
      description: 'Advanced optimization techniques to ensure lightning-fast query performance.'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud databases with zero downtime and data integrity.'
    },
    {
      icon: CogIcon,
      title: 'Monitoring & Maintenance',
      description: '24/7 monitoring and proactive maintenance to ensure optimal database health.'
    }
  ];

  const databases = [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',
    'Elasticsearch',
    'Cassandra',
    'DynamoDB',
    'SQL Server',
    'Oracle',
    'MariaDB'
  ];

  const features = [
    'Real-time Monitoring',
    'Automated Backups',
    'Query Optimization',
    'Index Management',
    'Data Migration',
    'Performance Analytics',
    'Security Auditing',
    'Disaster Recovery',
    'Scalability Planning',
    'Cost Optimization'
  ];

  const benefits = [
    {
      title: 'Improved Performance',
      description: 'Up to 300% faster query performance with our optimization techniques.',
      icon: BoltIcon
    },
    {
      title: 'Enhanced Security',
      description: 'Bank-level security with encryption and advanced access controls.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce database costs by up to 40% through optimization and right-sizing.',
      icon: ChartBarIcon
    },
    {
      title: 'High Availability',
      description: '99.99% uptime guarantee with automated failover and disaster recovery.',
      icon: GlobeAltIcon
    }
  ];

  return (
    <>
      <SEOHead 
        title="Database Management Services - Zion Tech Group"
        description="Professional database management services including optimization, migration, security, and monitoring. Support for all major database systems."
        keywords="database management, database optimization, database migration, PostgreSQL, MySQL, MongoDB, database security, performance tuning"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <CircleStackIcon className="w-5 h-5 text-orange-400 mr-2" />
                <span className="text-orange-300 text-sm font-medium">Database Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Optimize Your
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent block">
                  Database Performance
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert database management services to optimize performance, ensure security, and maintain high availability for your critical data systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Get Database Audit
                  <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
                </button>
                <button className="border-2 border-orange-400 text-orange-300 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Database Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive database management solutions for every type of application and workload.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Databases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Supported <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Databases</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major database systems and can help you choose the right one for your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {databases.map((database, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-orange-400" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{database}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Management <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced features and capabilities to keep your databases running at peak performance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Database Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Proven benefits that help you achieve better performance, security, and cost efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-300 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Optimize Your Database?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let our database experts help you achieve peak performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Get Free Database Audit
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DatabaseManagementPage;