import React, { useMemo } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

type Service = typeof enhancedRealMicroSaasServices[number];

export default function ServicePage({ service }: { service: Service }) {
  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <p className="text-slate-300 mb-6">The service you're looking for doesn't exist.</p>
          <Button href="/services" className="bg-blue-600 hover:bg-blue-700">
            View All Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <UltraFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={service.category} />
      </Head>
      
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href={service.link} 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Get Started
              </Button>
              <Button 
                href="/contact" 
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Service Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Category</h3>
                  <p className="text-slate-300">{service.category}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Price</h3>
                  <p className="text-slate-300">{service.price} {service.period}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Trial Period</h3>
                  <p className="text-slate-300">{service.trialDays} days free trial</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Setup Time</h3>
                  <p className="text-slate-300">{service.setupTime}</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact our team to learn more about this service and how it can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href={`tel:+13024640950`}
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2"><Phone className="w-4 h-4" />
                Call Us
              </Button>
              <Button 
                href={`mailto:kleber@ziontechgroup.com`}
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"><Mail className="w-4 h-4" />
                Email Us
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const services = enhancedRealMicroSaasServices;
  const paths = services.map((service) => ({
    params: { slug: service.id }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const service = enhancedRealMicroSaasServices.find(s => s.id === slug);

  if (!service) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      service
    }
  };
};