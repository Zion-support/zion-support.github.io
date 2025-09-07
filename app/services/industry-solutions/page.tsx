<<<<<<< HEAD
export const metadata = {
  title: 'Industry-Specific Solutions | Zion Tech Group',
  description:
    'Specialized micro SAAS solutions tailored for specific industries including healthcare, finance, real estate, e-commerce, and more. Industry-focused tools that understand your unique challenges.',
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description: 'Professional industry solutions services for your business needs.',
  keywords: 'industry, solutions'
};

export default function IndustrysolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional industry solutions services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert industrysolutions solutions tailored to your business needs.
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

function IndustrySolution({}
  title,
  description,
  industry,
  features,
  price,
  compliance,
  useCase,
  demoUrl,
}: {}
  title: string;
  description: string;
  industry: string;
  features: string[];
  price: string;
  compliance: string;
  useCase: string;
  demoUrl: string;
}) {}
  return ("
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">"
      <div className="flex justify-between items-start mb-4">"
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>"
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {industry}
        </span>
      </div>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <div className="mb-4">"
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
      </div>"
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => ("
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>"
      <div className="mb-4">"
        <p className="text-sm text-gray-500 mb-1">Compliance:</p>"
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
          {compliance}
        </span>
      </div>"
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>"
          <div className="font-bold text-blue-600">{price}</div>"
          <a href={demoUrl} className="text-sm text-blue-600 hover:underline">
            View Demo;
          </a>
        </div>
        <a"
          href="tel:+13024640950""
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started;
        </a>
      </div>
    </div>
  );
}

function ComplianceStandard({}
  title,
  standards,
  icon,
}: {}
  title: string;
  standards: string[];
  icon: string;
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <div className="text-2xl mb-3">{icon}</div>"
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>"
      <div className="flex flex-wrap gap-2">
        {standards.map((standard, index) => (
          <span;
            key={index}"
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {standard}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureCategory({}
  title,
  icon,
  features,
}: {}
  title: string;
  icon: string;
  features: string[];
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <div className="text-2xl mb-3">{icon}</div>"
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>"
      <ul className="space-y-2">
        {features.map((feature, index) => ("
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IntegrationCategory({}
  title,
  platforms,
  icon,
}: {}
  title: string;
  platforms: string[];
  icon: string;
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <div className="text-2xl mb-3">{icon}</div>"
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>"
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform, index) => (
          <span;
            key={index}"
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {platform}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustryPricingPlan({}
  industry,
  starterPrice,
  professionalPrice,
  enterprisePrice,
  features,
  icon,
}: {}
  industry: string;
  starterPrice: string;
  professionalPrice: string;
  enterprisePrice: string;
  features: string[];
  icon: string;
}) {}
  return ("
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">"
      <div className="text-3xl mb-4">{icon}</div>"
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{industry}</h3>"
      <div className="space-y-4 mb-6">"
        <div className="flex justify-between">"
          <span className="text-gray-600">Starter:</span>"
          <span className="font-bold text-blue-600">{starterPrice}</span>
        </div>"
        <div className="flex justify-between">"
          <span className="text-gray-600">Professional:</span>"
          <span className="font-bold text-blue-600">{professionalPrice}</span>
        </div>"
        <div className="flex justify-between">"
          <span className="text-gray-600">Enterprise:</span>"
          <span className="font-bold text-blue-600">{enterprisePrice}</span>
        </div>
      </div>"
      <ul className="space-y-2">
        {features.map((feature, index) => ("
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a"
        href="tel:+13024640950""
        className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
      >
        Get Quote;
      </a>
    </div>
  );
}

function SuccessStory({}
  company,
  industry,
  solution,
  result,
  description,
}: {}
  company: string;
  industry: string;
  solution: string;
  result: string;
  description: string;
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <div className="flex items-center mb-4">"
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">"
          <span className="text-blue-600 font-bold text-lg">
            {company.charAt(0)}
          </span>
        </div>
        <div>"
          <h4 className="font-bold text-gray-900">{company}</h4>"
          <p className="text-sm text-gray-500">{industry}</p>
        </div>
      </div>"
      <h5 className="font-semibold text-gray-900 mb-2">{solution}</h5>"
      <div className="text-2xl font-bold text-blue-600 mb-2">{result}</div>"
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

"

=======
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
