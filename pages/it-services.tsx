import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud DevOps & SRE',
      description: 'Complete DevOps transformation with CI/CD pipelines, infrastructure as code, observability, and site reliability engineering.',
      features: ['CI/CD automation', 'Infrastructure as Code', 'Monitoring & alerting', 'Auto-scaling', 'Cost optimization'],
      pricing: '$120–$220/hour or $6k–$30k/project'
    },
    {
      title: 'Cybersecurity Hardening & SOC',
      description: 'Comprehensive security solutions including Zero Trust architecture, endpoint detection, and security operations center setup.',
      features: ['Zero Trust implementation', 'EDR solutions', 'Security monitoring', 'Incident response', 'Compliance audits'],
      pricing: '$5k–$40k project, $2k–$8k/month managed'
    },
    {
      title: 'Cloud Migration & Modernization',
      description: 'Seamless migration to cloud platforms with containerization, serverless architecture, and data platform upgrades.',
      features: ['Lift & shift migration', 'Containerization', 'Serverless architecture', 'Data platform upgrades', 'Performance optimization'],
      pricing: '$10k–$150k project'
    },
    {
      title: 'Data & Analytics Solutions',
      description: 'Enterprise data warehouses, ETL pipelines, business intelligence dashboards, and machine learning operations.',
      features: ['Data warehousing', 'ETL/ELT pipelines', 'BI dashboards', 'ML operations', 'Data governance'],
      pricing: '$5k–$20k setup, $6k–$25k dashboards'
    }
  ];

  return (
    <Layout title="IT Services - Zion Tech Group" description="Comprehensive IT services including cloud, cybersecurity, and data solutions.">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
          <p className="text-gray-600 mb-10 max-w-3xl text-lg">
            Comprehensive IT solutions to modernize your infrastructure, enhance security, 
            and optimize performance. From cloud migration to cybersecurity, we've got you covered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-gray-700 space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-green-600 font-semibold mb-4">{service.pricing}</div>
                <Link href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your IT Infrastructure</h2>
            <p className="text-gray-600 mb-6">
              Let our experts help you build a robust, secure, and scalable IT foundation.
            </p>
            <Link href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ITServicesPage;