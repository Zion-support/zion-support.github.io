<<<<<<< HEAD
export const metadata = {
  title: 'Email Marketing Automation | Zion Tech Group',
  description: 'Boost your email marketing ROI with AI-powered automation, personalized campaigns, and advanced analytics.',
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Email Marketing Automation | Zion Tech Group',
  description: 'Professional email marketing automation services for your business needs.',
  keywords: 'email, marketing, automation'
};

export default function EmailmarketingautomationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Email Marketing Automation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional email marketing automation services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert emailmarketingautomation solutions tailored to your business needs.
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

function Pricing() {}
  return ("
    <div className="mt-16">"
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Pricing Plans;
      </h2>"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan"
          name="Starter""
          price="$49/mo"
          features={["
            "Up to 5,000 subscribers","
            "Basic automation","
            "Email templates","
            "Email support",
          ]}
        />
        <Plan"
          name="Professional""
          price="$149/mo"
          features={["
            "Up to 25,000 subscribers","
            "Advanced AI features","
            "A/B testing","
            "Priority support","
          ]}
        />
        <Plan
          name="Professional"
          price="$149/mo"
          features={[
            'Up to 25,000 subscribers',
            'Advanced AI features',
            'A/B testing',
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
          price="$399/mo"
          features={["
            "Unlimited subscribers","
            "Custom AI models","
            "White-label solution","
            "Dedicated support","
            "Advanced analytics",

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
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-pink-500 ring-2 ring-pink-200" : "border-gray-200"}`}
    >
      {popular && ("
        <div className="bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular;
        </div>
      )}"
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>"
      <div className="text-3xl font-bold text-pink-600 mb-4">{price}</div>"
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
            ? "bg-pink-600 text-white hover:bg-pink-700""
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
>>>>>>> origin/chore/fix-lint-and-merge
