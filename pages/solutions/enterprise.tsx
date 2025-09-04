import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Users, Zap, CheckCircle } from 'lucide-react';

export default function EnterpriseSolutions() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const enterpriseServices = [
    {
      title: 'Enterprise AI Solutions',
      description: 'Custom AI implementations for large-scale enterprise needs',
      icon: <Zap className="w-8 h-8" />,
      features: ['Custom AI models', 'Enterprise integration', 'Scalable architecture', '24/7 support']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Comprehensive cloud solutions for enterprise workloads',
      icon: <Shield className="w-8 h-8" />,
      features: ['Multi-cloud strategy', 'Security compliance', 'Disaster recovery', 'Cost optimization']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services for enterprise organizations',
      icon: <Users className="w-8 h-8" />,
      features: ['Process automation', 'Legacy modernization', 'Change management', 'Training programs']
    }
  ];

  return (
    <>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise technology solutions designed for large organizations and complex business needs." />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive Technology Solutions for Large Organizations
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Tailored enterprise solutions designed to meet the complex needs of large organizations, 
              ensuring scalability, security, and compliance.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Enterprise Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterpriseServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors">
                  <div className="text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our enterprise solutions can help your organization achieve its technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Contact Enterprise Team
              </Link>
              <Link href="/schedule-demo" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}