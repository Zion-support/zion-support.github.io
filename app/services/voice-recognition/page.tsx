<<<<<<< HEAD
export const metadata = {
  title: 'Voice Recognition Solutions | Zion Tech Group',
  description: 'Transform speech into actionable data with advanced voice recognition, speech-to-text, and voice command processing.',
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
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Voice Recognition Solutions</h1>
      <p className="text-xl text-gray-600 mb-12">Transform speech into actionable data with advanced voice recognition, speech-to-text, and voice command processing.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Speech-to-Text"
          features={[
            'Real-time transcription',
            'Multi-language support',
            'Noise cancellation',
            'Speaker identification',
          ]}
        />
        <FeatureCard
          title="Voice Commands"
          features={[
            'Voice control systems',
            'Command processing',
            'Intent recognition',
            'Custom wake words',
          ]}
        />
        <FeatureCard
          title="Voice Analytics"
          features={[
            'Emotion detection',
            'Speaker verification',
            'Call analytics',
            'Quality assessment',
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
          Ready to Hear the Future?
        </h2>
        <p className="text-gray-600 mb-6">
          Start with a free voice analysis demo and see the power of voice
          recognition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
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
            <span className="text-emerald-500 mr-2">•</span> {f}
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
          price="$2,499/mo"
          features={["
            "Basic speech-to-text","
            "Up to 100 hours/month","
            "Standard support","
            "Cloud deployment",
          ]}
        />
        <Plan"
          name="Professional""
          price="$6,999/mo"
          features={["
            "Advanced voice recognition","
            "Up to 1,000 hours/month","
            "Custom model training","
            "Priority support","
          ]}
        />
        <Plan
          name="Professional"
          price="$6,999/mo"
          features={[
            'Advanced voice recognition',
            'Up to 1,000 hours/month',
            'Custom model training',
            'Priority support',
            'API access',
          ]}
          popular={true}
        />
            "API access",
          ]}
          popular={true}
        />
        <Plan"
          name="Enterprise""
          price="$17,999/mo"
          features={["
            "Unlimited processing","
            "Custom voice models","
            "On-premise deployment","
            "Dedicated support","
            "White-label solution",

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
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-emerald-500 ring-2 ring-emerald-200" : "border-gray-200"}`}
    >
      {popular && ("
        <div className="bg-emerald-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular;
        </div>
      )}"
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>"
      <div className="text-3xl font-bold text-emerald-600 mb-4">{price}</div>"
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
            ? "bg-emerald-600 text-white hover:bg-emerald-700""
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"`
        }`}
      >
        Get Started;
      </a>

    </div>
  );
}
"`
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
