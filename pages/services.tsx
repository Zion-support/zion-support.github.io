import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain, Code, Cloud, Shield, Database, Rocket, Users, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, Lightbulb, Zap, Settings, Globe, Star, Atom, ChevronRight, ShieldCheck, Bot, Globe2,
} from 'lucide-react';

import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import {
  enhancedRealMicroSaasServices,
  getServicesByCategory,
  getPopularServices,
} from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    features: string[];
    pricing: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
        <service.icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">
        {service.title}
      </h3>
    </div>
    <p className="text-gray-600 mb-4">
      {service.description}
    </p>
    <ul className="space-y-2 mb-4">
      {service.features.map((feature, featureIndex) => (
        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <div className="text-blue-600 font-semibold mb-4">
      {service.pricing}
    </div>
    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
      Learn More
    </button>
  </motion.div>
);

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  site: string;
}

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contact: ContactInfo = {
    name: 'Zion Tech Group',
    email: 'info@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    address: '123 Tech Street, Innovation City, IC 12345',
    site: 'https://ziontechgroup.com'
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Pricing
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enhancedRealMicroSaasServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Enterprise Security",
                description: "Bank-level security measures to protect your data and systems."
              },
              {
                icon: <Rocket className="h-8 w-8 text-green-600" />,
                title: "Rapid Deployment",
                description: "Get your solutions up and running in record time."
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "Expert Team",
                description: "Experienced professionals with proven track records."
              },
              {
                icon: <Award className="h-8 w-8 text-yellow-600" />,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get a Quote
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}