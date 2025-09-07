<<<<<<< HEAD
export const metadata = {
  title: 'Chatbot Development | Zion Tech Group',
  description: 'Build intelligent chatbots with AI-powered natural language understanding, multi-platform deployment, and seamless human handoff.',
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chatbot Development | Zion Tech Group',
  description: 'Professional chatbot development services for your business needs.',
  keywords: 'chatbot, development'
};

export default function ChatbotdevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chatbot Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional chatbot development services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert chatbotdevelopment solutions tailored to your business needs.
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
          name="Basic""
          price="$1,999/mo"
          features={["
            "Simple Q&A chatbot","
            "Up to 1,000 conversations/month","
            "Basic integrations","
            "Email support",
          ]}
        />
        <Plan"
          name="Professional""
          price="$4,999/mo"
          features={["
            "Advanced AI capabilities","
            "Up to 10,000 conversations/month","
            "Custom integrations","
            "Priority support","
          ]}
        />
        <Plan
          name="Professional"
          price="$4,999/mo"
          features={[
            'Advanced AI capabilities',
            'Up to 10,000 conversations/month',
            'Custom integrations',
            'Priority support',
            'Analytics dashboard',
          ]}
          popular={true}
        />
            "Analytics dashboard",
          ]}
          popular={true}
        />
        <Plan"
          name="Enterprise""
          price="$12,999/mo"
          features={["
            "Unlimited conversations","
            "Custom AI training","
            "White-label solution","
            "Dedicated support","
            "Multi-platform deployment",

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
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-amber-500 ring-2 ring-amber-200" : "border-gray-200"}`}
    >
      {popular && ("
        <div className="bg-amber-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular;
        </div>
      )}"
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>"
      <div className="text-3xl font-bold text-amber-600 mb-4">{price}</div>"
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
            ? "bg-amber-600 text-white hover:bg-amber-700""
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
