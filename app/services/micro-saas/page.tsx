import React from 'react';
import Link from 'next/link';

export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'End-to-end micro SaaS development with billing, auth, analytics, and growth features. From MVP to scale.'
};

interface MicroSaaSCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function MicroSaaSCard({ title, description, price, features, popular = false, cta }: MicroSaaSCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border-2 ${popular ? 'border-blue-500' : 'border-gray-200'} hover:shadow-lg transition-shadow relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-lg font-bold text-blue-600 mb-4">{price}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link
        href="/contact"
        className={`w-full block text-center py-2 px-4 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}

export default function MicroSaaSPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build and scale micro SaaS applications with our proven framework. 
            From MVP to market leader, we handle everything from development to growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <MicroSaaSCard
            title="MVP Development"
            description="Rapid MVP development with core features and basic functionality"
            price="From $15,000"
            features={[
              "Core functionality",
              "User authentication",
              "Basic dashboard",
              "Payment integration",
              "Admin panel",
              "Mobile responsive"
            ]}
            cta="Start MVP"
          />
          
          <MicroSaaSCard
            title="Full SaaS Platform"
            description="Complete SaaS platform with advanced features and scalability"
            price="From $35,000"
            features={[
              "Advanced features",
              "Multi-tenant architecture",
              "API development",
              "Analytics dashboard",
              "Subscription management",
              "Third-party integrations"
            ]}
            popular={true}
            cta="Build Platform"
          />
          
          <MicroSaaSCard
            title="Enterprise SaaS"
            description="Enterprise-grade SaaS with advanced security and compliance"
            price="From $75,000"
            features={[
              "Enterprise security",
              "SSO integration",
              "Advanced analytics",
              "Custom workflows",
              "White-label options",
              "24/7 support"
            ]}
            cta="Go Enterprise"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Micro SaaS Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
              <p className="text-sm text-gray-600">React, Next.js, TypeScript</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
              <p className="text-sm text-gray-600">Node.js, Python, Go</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🗄️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Database</h3>
              <p className="text-sm text-gray-600">PostgreSQL, MongoDB</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">☁️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Infrastructure</h3>
              <p className="text-sm text-gray-600">AWS, Vercel, Docker</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Micro SaaS?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your micro SaaS idea and how we can help you build and scale it.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Micro SaaS
          </Link>
        </div>
      </div>
    </main>
  );
}