<<<<<<< HEAD
return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Inventory Management System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent inventory management with predictive analytics, automated
          reordering, and demand forecasting to optimize stock levels and reduce
          costs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Predictive Analytics"
          features={[
            'AI-powered demand forecasting',
            'Seasonal trend analysis',
            'Price optimization recommendations',
            'Stock-out prediction & alerts',
            'Supplier performance analytics',
            'Market trend analysis',
          ]}
          icon="📊"
        />
        <FeatureCard
          title="Automated Reordering"
          features={[
            'Smart reorder point calculation',
            'Automated purchase order generation',
            'Supplier integration & communication',
            'Multi-location inventory tracking',
            'Barcode & RFID scanning',
            'Real-time stock level monitoring',
          ]}
          icon="🔄"
        />
        <FeatureCard
          title="Cost Optimization"
          features={[
            'Inventory turnover optimization',
            'Carrying cost analysis',
            'Waste reduction strategies',
            'ABC analysis & categorization',
            'Dead stock identification',
            'ROI tracking & reporting',
          ]}
          icon="💰"
        />
      </div>
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Inventory Management Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              30% Cost Reduction
            </h3>
            <p className="text-gray-600">
              Optimized inventory levels reduce carrying costs
        </p>
      </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              95% Accuracy
            </h3>
            <p className="text-gray-600">
              AI predictions minimize stock-outs and overstock
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
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ai Inventory Management | Zion Tech Group',
  description: 'Professional ai inventory management services for your business needs.',
  keywords: 'ai, inventory, management'
};

export default function AiinventorymanagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Inventory Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ai inventory management services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert aiinventorymanagement solutions tailored to your business needs.
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
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
