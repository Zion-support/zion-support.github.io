<<<<<<< HEAD
return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI HR Management System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent human resources management with AI-powered recruitment,
          employee analytics, and automated workflows to optimize your workforce
          and improve employee satisfaction.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="AI Recruitment"
          features={[
            'Intelligent resume screening',
            'Candidate matching & scoring',
            'Automated interview scheduling',
            'Skills assessment & testing',
            'Background check automation',
            'Diversity & inclusion analytics',
          ]}
          icon="👥"
        />
        <FeatureCard
          title="Employee Analytics"
          features={[
            'Performance prediction models',
            'Employee satisfaction tracking',
            'Retention risk analysis',
            'Skills gap identification',
            'Career path recommendations',
            'Engagement trend analysis',
          ]}
          icon="📊"
        />
        <FeatureCard
          title="HR Automation"
          features={[
            'Automated onboarding workflows',
            'Leave management & approval',
            'Performance review automation',
            'Payroll integration',
            'Compliance monitoring',
            'Employee self-service portal',
          ]}
          icon="⚙️"
        />
      </div>
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          HR Management Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              60% Faster Hiring
            </h3>
            <p className="text-gray-600">AI streamlines recruitment process</p>
      </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              40% Better Retention
            </h3>
            <p className="text-gray-600">
              Predictive analytics prevent turnover
        </p>
      </div>      </div>
      </div>
      </div>
      <PricingSection />

      <ContactSection />
      </div>
  );

            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      </div>
  );

            "Basic analytics",

          ]}
          popular={false}
        />

            "Priority support",

          ]}
          popular={true}
        />

            "24/7 phone support",

          ]}
          popular={false}
        />
      </div>
      </div>
  );

  name,
  price,
  duration,

  popular,

  name: string;
  price: string;
  duration: string;

  popular: boolean;

            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      </a>
      </div>
  );

      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
      </div>
  );
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
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
