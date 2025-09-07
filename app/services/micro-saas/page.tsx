<<<<<<< HEAD
import React from 'react;
import Link from next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline;

export const metadata = {
  title: Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.,
  keywords: micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence'
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center>
    <div className=text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3>{title}</h3>
    <p className=text-gray-600">{description}</p>
  </div>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex flex-col items-center text-center>
    <div className=w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full text-xl font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2>{title}</h3>
    <p className=text-gray-600">{description}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-green-600 rounded-lg text-white text-center>
    <h2 className=text-3xl font-bold mb-4">Ready to Launch Your Micro SaaS?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto>
      Let's build your next revenue-generating micro SaaS product together.
    </p>
    <div className=flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Development Inquiry
        className=bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
      </a>
      <a
        href="tel:+13024640950
        className=border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className="mt-8 text-sm>
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
);

export default function MicroSaaSPage() {
  return (
    <div className=min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20>
        <div className=text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6>
            Micro SaaS Development
          </h1>
          <p className=text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complete micro SaaS development services including AI-powered tools, productivity apps, 
            marketing automation, and business intelligence solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
          <div className=bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4>AI-Powered Tools</h3>
            <p className=text-gray-600">
              Build intelligent micro SaaS applications with cutting-edge AI capabilities 
              that solve real business problems.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg>
            <h3 className=text-xl font-bold text-gray-900 mb-4">Productivity Apps</h3>
            <p className="text-gray-600>
              Create efficient productivity tools that streamline business operations 
              and boost team efficiency.
            </p>
          </div>
          
          <div className=bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4>Marketing Automation</h3>
            <p className=text-gray-600">
              Develop automated marketing solutions that help businesses reach their 
              target audience more effectively.
            </p>
=======
<<<<<<< HEAD
export const metadata = {
  title: 'Micro SaaS Solutions | Zion Tech Group',
  description: 'Micro SaaS solutions for niche business needs.',
  keywords: 'micro-saas, services, business, technology'
}
=======
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Professional page solutions for your business needs.',
  keywords: 'page',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Page | Zion Tech Group',
    description: 'Professional page solutions for your business needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page | Zion Tech Group',
    description: 'Professional page solutions for your business needs.',
  },
};

>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional page solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <p className="text-gray-600 mb-4">
              Advanced features and capabilities for your business needs.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Professional solutions</li>
              <li>• 24/7 support</li>
              <li>• Scalable architecture</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <p className="text-gray-600 mb-4">
              Transform your business with our cutting-edge solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Increased efficiency</li>
              <li>• Cost savings</li>
              <li>• Better results</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive support and maintenance services.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Expert consultation</li>
              <li>• Training and documentation</li>
              <li>• Ongoing maintenance</li>
            </ul>
>>>>>>> origin/chore/fix-lint-and-merge
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
=======
  );
<<<<<<< HEAD
=======
      <ContactSection />
    </div>
  );
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
      <ContactSection />
    </div>
  );
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
}