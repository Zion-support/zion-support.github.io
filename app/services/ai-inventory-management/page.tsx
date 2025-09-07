import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI Inventory Management - Zion Tech Group',
  description: 'Intelligent inventory management platform with AI-powered demand forecasting, automated reordering, and real-time analytics.',
  keywords: 'AI inventory management, demand forecasting, supply chain optimization, inventory analytics, automated reordering'
};

function FeatureCard({ title, features, icon }: { title: string; features: string[]; icon: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ name, price, duration, features, popular }: { name: string; price: string; duration: string; features: string[]; popular: boolean }) {
  return (
    <div className={`border rounded-xl p-6 bg-white hover:shadow-lg transition-shadow ${popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-blue-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold mb-4">
          Most Popular
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Inventory Management Inquiry"
        className="block w-full mt-6 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function PricingSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          AI Inventory Management Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Basic Inventory"
            price="$8k–$20k"
            duration="4–8 weeks"
            features={[
              "Basic inventory tracking",
              "Simple demand forecasting",
              "Standard reporting",
              "Email support"
            ]}
            popular={false}
          />
          <PricingCard
            name="Smart Inventory"
            price="$20k–$45k"
            duration="8–14 weeks"
            features={[
              "AI demand forecasting",
              "Automated reordering",
              "Advanced analytics",
              "Priority support"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise Inventory"
            price="$45k+"
            duration="12–20 weeks"
            features={[
              "Custom AI models",
              "Multi-location support",
              "Advanced integrations",
              "24/7 support"
            ]}
            popular={false}
          />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Optimize Your Inventory?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Get in touch with our experts to discuss your inventory management requirements.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Inventory Management Inquiry"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="tel:+13024640950"
            className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Call Us
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </div>
    </section>
  )
export default function AIInventoryManagementPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Inventory Management
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent inventory management platform with AI-powered demand forecasting,
          automated reordering, and real-time analytics to optimize your supply chain.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Demand Forecasting"
          features={[
            'AI-powered demand prediction',
            'Seasonal trend analysis',
            'Market demand insights',
            'Customer behavior analysis',
            'External factor integration',
            'Multi-location forecasting',
          ]}
          icon="📈"
        />
        <FeatureCard
          title="Automated Reordering"
          features={[
            'Smart reorder point calculation',
            'Automated purchase orders',
            'Supplier management',
            'Lead time optimization',
            'Safety stock management',
            'Cost optimization',
          ]}
          icon="🔄"
        />
        <FeatureCard
          title="Real-time Analytics"
          features={[
            'Live inventory tracking',
            'Performance dashboards',
            'Cost analysis & reporting',
            'Waste reduction insights',
            'Turnover rate optimization',
            'Predictive maintenance',
          ]}
          icon="📊"
        />
      </div>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Inventory Management Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              30% Cost Reduction
            </h3>
            <p className="text-gray-600">
              Optimized inventory levels reduce costs
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              95% Accuracy
            </h3>
            <p className="text-gray-600">
              AI predictions reduce stockouts and overstock
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real-time Updates
            </h3>
            <p className="text-gray-600">
              Live inventory tracking and alerts
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Optimized Supply Chain
            </h3>
            <p className="text-gray-600">
              Streamlined operations and reduced waste
            </p>
          </div>
        </div>
      </div>

      <PricingSection />
      <ContactSection />
    </div>
  );
}
