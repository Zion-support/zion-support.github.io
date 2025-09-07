<<<<<<< HEAD
export const metadata = {
  title: 'API Development | Zion Tech Group',
  description: 'Build robust, scalable APIs with our expert development services. RESTful, GraphQL, and microservices architecture solutions.',
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Api Development | Zion Tech Group',
  description: 'Professional api development services for your business needs.',
  keywords: 'api, development'
};

export default function ApidevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Api Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional api development services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert apidevelopment solutions tailored to your business needs.
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
          name="Basic API""
          price="$7,999"
          features={["
            "Simple REST API","
            "Basic authentication","
            "API documentation","
            "2 weeks support",
          ]}
        />
        <Plan"
          name="Advanced API""
          price="$19,999"
          features={["
            "Complex API architecture","
            "Advanced security","
            "Performance optimization","
            "1 month support","
          ]}
        />
        <Plan
          name="Advanced API"
          price="$19,999"
          features={[
            'Complex API architecture',
            'Advanced security',
            'Performance optimization',
            '1 month support',
            'Testing & validation',
          ]}
          popular={true}
        />
            "Testing & validation",
          ]}
          popular={true}
        />
        <Plan"
          name="Enterprise API""
          price="$49,999+"
          features={["
            "Microservices architecture","
            "Custom integrations","
            "Dedicated team","
            "3 months support","
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
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-fuchsia-500 ring-2 ring-fuchsia-200" : "border-gray-200"}`}
    >
      {popular && ("
        <div className="bg-fuchsia-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular;
        </div>
      )}"
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>"
      <div className="text-3xl font-bold text-fuchsia-600 mb-4">{price}</div>"
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
            ? "bg-fuchsia-600 text-white hover:bg-fuchsia-700""
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
