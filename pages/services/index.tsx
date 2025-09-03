import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Cloud, Shield, Database, Smartphone, Cpu } from 'lucide-react';

const Services: NextPage = () => {
  const services = [
    { title: 'AI Development', description: 'Custom agents, copilots and predictive systems tuned to your data.', icon: Brain, href: '/contact', color: 'from-blue-600 to-purple-600' },
    { title: 'Cloud Platforms', description: 'Kubernetes, serverless, data platforms and FinOps.', icon: Cloud, href: '/contact', color: 'from-emerald-600 to-cyan-600' },
    { title: 'Cybersecurity', description: 'Zero-trust, SOC-as-a-service and compliance automation.', icon: Shield, href: '/contact', color: 'from-indigo-600 to-fuchsia-600' },
    { title: 'Data & Analytics', description: 'Modern ELT, warehouses, dbt modeling and BI.', icon: Database, href: '/contact', color: 'from-sky-600 to-blue-600' },
    { title: 'Web & Mobile', description: 'High-performance web platforms and native-quality apps.', icon: Smartphone, href: '/contact', color: 'from-pink-600 to-rose-600' },
    { title: 'Platform Engineering', description: 'Developer platforms, golden paths, paved roads.', icon: Cpu, href: '/contact', color: 'from-amber-600 to-orange-600' }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="AI, Cloud, Security and Data services with transparent pricing and measurable outcomes." />
      </Head>
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-3xl mx-auto">Comprehensive technology solutions designed to transform your business.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className={`h-28 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                <service.icon className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.href}><span className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">Talk to Us</span></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;

