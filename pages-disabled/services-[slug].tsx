import React from 'react';
import Head from 'next/head';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

// Simple service interface
interface Service {
  id: string;
  name: string;
  description: string;
  tagline?: string;
  price?: string;
  features?: string[];
  link?: string;
}

// Mock services data for now
const mockServices: Service[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Advanced artificial intelligence solutions for modern businesses',
    tagline: 'Transform your business with AI',
    price: '$999/month',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    link: '/services/ai-solutions'
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for enterprise needs',
    tagline: 'Scale with confidence',
    price: '$499/month',
    features: ['Auto-scaling', 'Load balancing', 'High availability'],
    link: '/services/cloud-infrastructure'
  }
];

export async function getStaticPaths() {
  const paths = mockServices.map(service => ({
    params: { slug: service.id }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const service = mockServices.find(s => s.id === params.slug);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service }
  };
}

export default function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Head>
        <title>{service.name} | Zion Tech Group</title>
        <meta name="description" content={service.tagline || service.description} />
        <link rel="canonical" href={`https://ziontechgroup.com/services/${service.id}`} />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {service.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {service.tagline || service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-gray-900/50 border border-gray-700/50 rounded-lg">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>

            {service.features && service.features.length > 0 && (
              <div className="p-6 bg-gray-900/50 border border-gray-700/50 rounded-lg">
                <h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  {service.features.slice(0, 12).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gray-900/50 border border-gray-700/50 rounded-lg">
              <h3 className="text-white text-lg font-semibold mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {service.price || 'Contact Us'}
              </div>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="p-6 bg-gray-900/50 border border-gray-700/50 rounded-lg">
              <h3 className="text-white text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}