import Link from 'next/link';

export default function Services() {;
  return (;
    <main style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.5, padding: '32px', maxWidth: 1120, margin: '0 auto' }}>;
      <h1 style={{ marginTop: 0 }}>Services</h1>;
      <p>Productized services and platforms you can deploy now.</p>;

      <h2>Micro SaaS</h2>;
      <ul>;
        <li><Link href="/services/micro-saas/ai-seo-auditor">AI SEO Auditor</Link> — from $199/mo</li>;
        <li><Link href="/services/micro-saas/lead-enrichment">Lead Enrichment API</Link> — from $149/mo</li>;
        <li><Link href="/services/micro-saas/contract-ai">Contract AI Extractor</Link> — from $349/mo</li>;
        <li><Link href="/services/micro-saas/smart-churn">Smart Churn Predictor</Link> — from $299/mo</li>;
        <li><Link href="/services/micro-saas/ai-qa">AI QA Copilot</Link> — from $99/mo</li>;
      </ul>;

      <h2>AI Solutions</h2>;
      <ul>;
        <li><Link href="/services/ai/revenue-ops">Revenue Ops Intelligence</Link> — projects from $12k</li>;
        <li><Link href="/services/ai/customer-experience">Customer Experience Analytics</Link> — from $8k</li>;
        <li><Link href="/services/ai/devops-autopilot">DevOps Autopilot</Link> — from $15k</li>;
      </ul>;

      <h2>IT Services</h2>;
      <ul>;
        <li><Link href="/services/it/cloud-finops">Cloud FinOps</Link> — from $4k/mo</li>;
        <li><Link href="/services/it/cybersecurity">Managed Cybersecurity</Link> — from $6k/mo</li>;
        <li><Link href="/services/it/platform-engineering">Platform Engineering</Link> — from $18k/project</li>;
      </ul>;

      <h2 id="contact">Contact</h2>;
      <p>;
        Mobile: +1 302 464 0950 · Email: <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a><br/>;
        Address: 364 E Main St STE 1008 Middletown DE 19709;
      </p>;
      <p>;
        Visit our website: <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a>;
      </p>;
    </main>;
  );,
}
;
import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import PricingGuide from '../../components/PricingGuide';
import { services, getServicesByCategory } from '../../data/services';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, DollarSign, Target, Rocket } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const ServicesPage: NextPage = () => {;
  const microSaasServices = getServicesByCategory('micro-saas');
  const itServices = getServicesByCategory('it-services');
  const aiServices = getServicesByCategory('ai-services');
  );,
}
;
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { services } from '../../utils/data/services';
import EnhancedMarketplaceCard from '../../components/ui/EnhancedMarketplaceCard';
;
const ServicesIndex: NextPage = () => {;
  return (;
    <div>;
      <Head>;
        <title>Services - Zion Tech Group</title>;
        <meta name="description" content="Explore our Micro SaaS, IT, AI, and Cloud services." />;
      </Head>;
      ;
      <main className="container mx-auto px-4 py-12">;
        <h1 className="text-3xl font-bold mb-6">Services</h1>;
        <p className="text-gray-700 mb-10 max-w-3xl">;
          Discover battle-tested services and micro SaaS solutions. Transparent pricing and rapid delivery.;
          Visit our website at <a className="text-blue-600 underline" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a>.;
        </p>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {services.map((s) => (;
            <div key={s.id} className="flex flex-col">;
              <EnhancedMarketplaceCard;
                title={s.title}
                description={`${s.description} Provider: ${s.provider.name}. Rating: ${s.provider.rating}/5.`}
                price={`${s.pricing.currency} ${s.pricing.from} / ${s.pricing.type}`}
                image={s.provider.avatar}
              />;
            </div>;
          ))}
        </div>;

        <div className="mt-12 p-6 rounded-lg bg-gray-50 border">;
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>;
          <p className="text-gray-700 mb-2">Mobile: +1 302 464 0950</p>;
          <p className="text-gray-700 mb-2">E-mail: <a className="text-blue-600 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>;
          <p className="text-gray-700">Address: 364 E Main St STE 1008 Middletown DE 19709</p>;
          <div className="mt-4">;
            <Link href="/contact" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Request a quote</Link>;
          </div>;
        </div>;
      </main>;
    </div>;
  );,
};
;
export default ServicesIndex;
