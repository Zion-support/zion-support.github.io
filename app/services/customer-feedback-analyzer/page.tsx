<<<<<<< HEAD
export const metadata = {
  title: 'Customer Feedback Analyzer | Zion Tech Group',
  description: 'Transform customer feedback into actionable insights with AI-powered sentiment analysis, trend detection, and automated reporting.',
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
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
};

export default function ServicePage() {
  return (
<<<<<<< HEAD
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Customer Feedback Analyzer</h1>
      <p className="text-xl text-gray-600 mb-12">Transform customer feedback into actionable insights with AI-powered sentiment analysis, trend detection, and automated reporting.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="AI Sentiment Analysis"
          features={[
            'Real-time sentiment scoring',
            'Emotion detection',
            'Language processing',
            'Multi-language support',
          ]}
        />
        <FeatureCard
          title="Trend Detection"
          features={[
            'Pattern recognition',
            'Issue prioritization',
            'Performance tracking',
            'Predictive insights',
          ]}
        />
        <FeatureCard
          title="Automated Reporting"
          features={[
            'Custom dashboards',
            'Scheduled reports',
            'Alert notifications',
            'Executive summaries',
          ]}
        />
      </div>
=======
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
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834

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
<<<<<<< HEAD

      <Pricing />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Understand Your Customers Better?
        </h2>
        <p className="text-gray-600 mb-6">
          Start with a free analysis of your existing feedback data and see what
          insights you're missing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
          >
            Email Us

          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({}
  title,
  features,
}: {}
  title: string;
  features: string[];
}) {}
  return ("
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">"
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>"
      <ul className="space-y-2 text-gray-600">
        {features.map((f) => ("
          <li key={f} className="flex items-center">"
            <span className="text-orange-500 mr-2">•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {}
  return ("
    <div className="mt-16">"
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Pricing Plans;
      </h2>"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan"
          name="Starter""
          price="$149/mo"
          features={["
            "Up to 1,000 feedback items","
            "Basic sentiment analysis","
            "Monthly reports","
            "Email support",
          ]}
        />
        <Plan"
          name="Professional""
          price="$399/mo"
          features={["
            "Up to 10,000 feedback items","
            "Advanced AI analysis","
            "Real-time dashboards","
            "Priority support","
          ]}
        />
        <Plan
          name="Professional"
          price="$399/mo"
          features={[
            'Up to 10,000 feedback items',
            'Advanced AI analysis',
            'Real-time dashboards',
            'Priority support',
            'Custom integrations',
          ]}
          popular={true}
        />
            "Custom integrations",
          ]}
          popular={true}
        />
        <Plan"
          name="Enterprise""
          price="$899/mo"
          features={["
            "Unlimited feedback items","
            "Custom AI models","
            "White-label solution","
            "Dedicated support","
            "API access",

          ]}
        />
      </div>
    </div>
  );
}

function Plan({}
  name,
  price,
  features,
  popular = false,
}: {}
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {}
  return (
    <div"
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-orange-500 ring-2 ring-orange-200" : "border-gray-200"}`}
    >
      {popular && ("
        <div className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular;
        </div>
      )}"
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>"
      <div className="text-3xl font-bold text-orange-600 mb-4">{price}</div>"
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((f) => ("
          <li key={f} className="flex items-center">"
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>

      <a"
        href="tel:+13024640950"`
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${}
          popular"
            ? "bg-orange-600 text-white hover:bg-orange-700""
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"`
        }`}
      >
        Get Started;
      </a>

    </div>
  );
}
'"`
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

=======
    </div>
  );
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
