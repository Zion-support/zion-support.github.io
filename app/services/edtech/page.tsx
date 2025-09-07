<<<<<<< HEAD
export const metadata = {
  title: "EdTech Solutions | Zion Tech Group",
  description:
    "Complete educational technology solutions including LMS systems, virtual classrooms, AI-powered learning, and personalized education platforms.",
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Edtech | Zion Tech Group',
  description: 'Professional edtech services for your business needs.',
  keywords: 'edtech'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Edtech
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional edtech services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert edtech solutions tailored to your business needs.
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
}

function EdTechServiceCard({
  title,
  description,
  features,
  pricing,
  marketSize,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  marketSize: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-purple-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
  title,
  icon,
  description,
  services,
  pricing,
  marketSize,
}: {}
  title: string;
  icon: string;
  description: string;
  services: string[];
  pricing: string;
  marketSize: string;
}) {}
  return ("
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="text-gray-600 space-y-2 mb-4">
        {services.map((service) => ("
          <li key={service} className="flex items-center">"
            <span className="text-blue-500 mr-2">•</span> {service}
          </li>
        ))}

      </ul>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function EdTechPricingCard({
  name,
  price,
  duration,
  features,
  bestFor,
  popular = false,
}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  bestFor: string;
  popular?: boolean;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {services.map((service) => (
          <li key={service} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {service}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
          <span className="text-sm text-gray-500">Market: {marketSize}</span>
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
<<<<<<< HEAD
}

function EdTechService({}
  title,
  description,
  features,
  pricing,
  icon,
}: {}
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {}
  return ("
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">"
      <div className="text-3xl mb-3">{icon}</div>"
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>"
      <p className="text-gray-600 mb-3">{description}</p>"
      <ul className="text-gray-600 space-y-1 mb-3">
        {features.map((feature) => ("
          <li key={feature} className="flex items-center text-sm">"
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>"
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}
"

=======
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
