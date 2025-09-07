import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

// Simple service type definition
interface Service {
  id: string;
  name: string;
  description: string;
  tagline?: string;
  price?: string;
  period?: string;
  category?: string;
  features?: string[];
  integrations?: string[];
  link?: string;
  trialDays?: number;
  setupTime?: string;
}

// Mock service data for demonstration
const mockServices: Service[] = [
  {
    id: 'ai-content-generation',
    name: 'AI Content Generation',
    description: 'Automated content creation for blogs, social media, and marketing materials using advanced AI technology.',
    tagline: 'Create engaging content at scale with AI',
    price: '$299',
    period: '/month',
    category: 'Content Marketing',
    features: [
      'Natural Language Processing',
      'SEO Optimization',
      'Multi-language Support',
      'Brand Voice Consistency',
      'Content Calendar Management',
      'Performance Analytics'
    ],
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Social Media Platforms'],
    link: '/services/ai-content-generation',
    trialDays: 14,
    setupTime: '1-2 weeks'
  },
  {
    id: 'smart-meeting-scheduler',
    name: 'Smart Meeting Scheduler AI',
    description: 'AI-powered meeting scheduling that automatically finds optimal times, sends reminders, and handles rescheduling conflicts.',
    tagline: 'Never miss a meeting again',
    price: '$19',
    period: '/month',
    category: 'Productivity',
    features: [
      'AI-powered time optimization',
      'Calendar integration',
      'Automated reminders',
      'Conflict resolution',
      'Multi-timezone support',
      'Custom meeting templates'
    ],
    integrations: ['Google Calendar', 'Outlook', 'Zoom', 'Teams'],
    link: '/services/smart-meeting-scheduler',
    trialDays: 7,
    setupTime: '1 week'
  }
];

function toSlug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getAllServices(): Service[] {
  return mockServices;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const services = getAllServices();
  const paths = services.map((service) => ({
    params: { slug: toSlug(service.id) }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const services = getAllServices();
  const incomingSlug = (params?.slug as string || '').replace(/^\/+|\/+$/g, '');
  
  const service = services.find((s) => 
    toSlug(s.id) === incomingSlug || 
    toSlug(s.name) === incomingSlug
  );

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service }
  };
};

export default function ServiceDetailPage({ service }: { service: Service }) {
  const canonical = `https://ziontechgroup.com/${toSlug(service.id)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Head>
        <title>{service.name} | Zion Tech Group</title>
        <meta name="description" content={service.tagline || service.description} />
        <link rel="canonical" href={canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.name,
              description: service.tagline || service.description,
              url: canonical,
              provider: {
                "@type": "Organization",
                name: "Zion Tech Group",
                url: "https://ziontechgroup.com"
              },
              offers: {
                "@type": "Offer",
                price: (service.price || '').replace(/[^0-9.]/g, ''),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock"
              }
            }, null, 2)
          }}
        />
      </Head>

      <main className="container mx-auto px-4 py-16">
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
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
              <h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {(service.features || []).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
              <h3 className="text-white text-lg font-semibold mb-4">Integrations</h3>
              <div className="flex flex-wrap gap-2">
                {(service.integrations || []).map((integration, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
              <div className="text-3xl font-bold text-white mb-2">
                {service.price} <span className="text-base text-gray-400">{service.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Transparent pricing with market references</p>
              
              <div className="space-y-3 mb-6">
                <a href="/contact" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                  <Phone className="w-4 h-4" /> +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                  <Mail className="w-4 h-4" /> kleber@ziontechgroup.com
                </a>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1" /> 364 E Main St STE 1008 Middletown DE 19709
                </div>
              </div>

              <Link href="/contact" className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-lg text-center block transition-all duration-300">
                Talk to Sales
              </Link>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
              <h3 className="text-white text-lg font-semibold mb-3">Service Details</h3>
              <div className="space-y-3 text-sm">
                {service.category && (
                  <div>
                    <span className="text-cyan-400 font-semibold">Category:</span>
                    <span className="text-gray-300 ml-2">{service.category}</span>
                  </div>
                )}
                {service.trialDays && (
                  <div>
                    <span className="text-cyan-400 font-semibold">Trial:</span>
                    <span className="text-gray-300 ml-2">{service.trialDays} days free</span>
                  </div>
                )}
                {service.setupTime && (
                  <div>
                    <span className="text-cyan-400 font-semibold">Setup:</span>
                    <span className="text-gray-300 ml-2">{service.setupTime}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
              <h3 className="text-white text-lg font-semibold mb-3">Learn More</h3>
              <a href={service.link || canonical} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                Open service page <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
      </footer>
    </div>
  );
}