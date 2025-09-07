<<<<<<< HEAD
export const metadata = {
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ai Analytics Platform | Zion Tech Group',
  description: 'Professional ai analytics platform services for your business needs.',
  keywords: 'ai, analytics, platform'
};

export default function AianalyticsplatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Analytics Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ai analytics platform services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert aianalyticsplatform solutions tailored to your business needs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Solutions</h3>
            <p className="text-gray-600">
              Personalized approach to meet your specific requirements and goals.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Dedicated support team to ensure your success and satisfaction.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}

          ]}
          popular={false}
        />
        <PricingCard"
          name="Professional Analytics""
          price="$499/mo""
          duration="Up to 25 users"
          features={[
            'Everything in Starter Analytics',
            'Advanced AI & ML models',
            'Unlimited data sources',
            'Custom dashboards',
            'API access & integrations',
            'Predictive analytics',
            'Priority support',
          ]}
          popular={true}
        />
        <PricingCard"
          name="Enterprise Analytics""
          price="$1,299/mo""
          duration="Unlimited users"
          features={[
            'Everything in Professional Analytics',
            'Custom AI model development',
            'Advanced security & compliance',
            'Dedicated data scientist',
            'Custom integrations',
            'White-label options',
            '24/7 phone support',
          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({}
  name,
  price,
  duration,
  features,
  popular,
}: {}
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {}
  return (
    <div
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? 'border-teal-500 shadow-lg' : 'border-gray-200'}`}
    >
      {popular && ("
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
          <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular;
          </span>
        </div>
      )}"
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>"
      <div className="text-3xl font-bold text-teal-600 mb-1">{price}</div>"
      <div className="text-gray-500 mb-6">{duration}</div>"
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => ("
          <li key={index} className="flex items-start">"
            <span className="text-green-500 mr-2 mt-1">✓</span>"
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-teal-600 text-white hover:bg-teal-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started;
      </a>
    </div>
  );
}

function ContactSection() {}
  return ("
    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Unlock Your Data's Potential?
      </h3>"
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">'
        Let's discuss your analytics needs and create an AI-powered platform;
        that transforms your data into competitive advantage.
      </p>"
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a"
          href="tel:+13024640950""
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Call +1 302 464 0950;
        </a>
        <a"
          href="mailto:kleber@ziontechgroup.com""
          className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
        >
          Email Us;
        </a>
      </div>"
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
'"`

=======
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
