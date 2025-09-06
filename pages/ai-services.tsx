
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
import { Brain, TrendingUp, FileText, Eye, Database, Shield } from 'lucide-react';

export default function AIServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const aiServices = [
    {
      icon: Brain,
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbots and automated customer service solutions.',
      features: ['Natural language processing', 'Multi-channel support', '24/7 availability'],
      pricing: '$2,000 – $8,000 setup',
      timeline: '4–8 weeks'
    },
    {
      icon: TrendingUp,
      name: 'Predictive Analytics',
      description: 'Advanced machine learning models for forecasting and business intelligence.',
      features: ['Demand forecasting', 'Sales prediction', 'Risk assessment'],
      pricing: '$4,000 – $20,000 project',
      timeline: '6–12 weeks'
    },
    {
      icon: FileText,
      name: 'AI Content Generation',
      description: 'Automated content creation with SEO optimization.',
      features: ['Content generation', 'SEO optimization', 'Brand consistency'],
      pricing: '$1,000 – $6,000/month',
      timeline: '2–4 weeks'
    }
  ],

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services and solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">AI Services</h1>
            <p className="text-xl text-slate-300 text-center mb-16">
              Advanced artificial intelligence solutions for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                  </div>
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <p><strong>Pricing: </strong> {service.pricing}</p>
                    <p><strong>Timeline:</strong> {service.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </ErrorBoundary>
    </>
  );
}