import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, MessageSquare } from 'lucide-react';
import Layout from '../layout';

export default function MicroSaasServices() {
  const services = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'AI Customer Support Chatbot',
      description: 'Automated customer support with natural language processing'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization'
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="AI-powered micro SaaS solutions for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Micro SaaS Services</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
