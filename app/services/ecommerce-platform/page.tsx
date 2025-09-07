<<<<<<< HEAD
};

export default function EcommercePlatformPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          E-commerce Platform Development
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build powerful e-commerce platforms with payment processing, inventory
          management, customer accounts, and advanced selling features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Product Management"
            details={[

            ]}
          />
          <Item
            title="Payment & Checkout"
            details={[

            ]}
          />
          <Item
            title="Customer Features"
            details={[

            ]}
          />
      </div>
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            E-commerce Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Scalable Architecture
              </h3>
              <p className="text-gray-600">
                Built to handle high traffic and large product catalogs with
                cloud-native, microservices architecture.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Mobile-First Design
              </h3>
              <p className="text-gray-600">
                Responsive design and mobile apps ensure optimal shopping
                experience across all devices.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Advanced Analytics
              </h3>
              <p className="text-gray-600">
                Track sales, customer behavior, and inventory with comprehensive
                analytics and reporting tools.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Multi-Channel Selling
              </h3>
              <p className="text-gray-600">
                Sell across web, mobile, social media, and marketplaces with
                unified inventory management.
        </p>
      </div>      </div>
      </div>
      </section>

      <Pricing />
      </div>
  );

            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
      </div>
  );

          ]}
        />
        <Plan
          name="Professional Store"
          price="$50k–$100k"
          duration="12–20 weeks"
          features={[

          ]}
        />
        <Plan
          name="Enterprise Store"
          price="$100k+"
          duration="16–28 weeks"
          features={[

            "On-premise deployment",
          ]}
        />
      </div>
          </a>
      </div>
      </div>
    </section>
  );

  name,
  price,
  duration,

  name: string;
  price: string;
  duration: string;

}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-red-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>

            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      </div>
  );

'"

      <a
        href="mailto:kleber@ziontechgroup.com?subject=E-commerce Platform Development Inquiry"
        className="block w-full mt-6 bg-red-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
      >
        Get Started
      </a>
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
