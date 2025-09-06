import React from 'react';'
import Link from 'next/link';

export const metadata = {'
  title: 'AI-Powered CRM Platform | Zion Tech Group',
;
};

interface FeatureCardProps {}
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {}
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">"
      <div className="text-3xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">
        {benefits.map((benefit, index) => ("
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingTier({}
  name, 
  price, 
  period, 
  description, 
  features, 
  popular = false;
}: {}
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  popular?: boolean; 
}) {}
  return ('
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && ("
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular;
          </span>
        </div>
      )}"
      <div className="text-center mb-6">"
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>"
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}"
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>"
        <p className="text-gray-600">{description}</p>
      </div>"
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => ("
          <li key={index} className="flex items-center">"
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">"
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>"
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a"
        href="mailto:kleber@ziontechgroup.com?subject=AI CRM Platform - {name} Plan"`
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${}
          popular'
            ? 'bg-blue-600 text-white hover:bg-blue-700''
            : 'bg-gray-900 text-white hover:bg-gray-800'`
        }`}
      >
        Get Started;
      </a>
    </div>
  );
}

export default function AIPoweredCRMPage() {}
  return ("
    <div className="space-y-16">
      {/* Hero Section */}"
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-blue-100 rounded-lg">"
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
          AI-Powered CRM Platform;
        </h1>"
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">

          </a>
          <a"
            href="tel:+13024640950""
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950;
          </a>
        </div>
      </section>

      {/* Key Features */}"
      <section className="py-12">"
        <div className="text-center mb-12">"
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary AI Features</h2>"
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">

          </p>
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard;
"
              "Custom scoring models"
            ]}
          />
          <FeatureCard;
            ]}
          />
          <FeatureCard"
            icon="💬"
"
              "Coaching recommendations","
              "Performance insights"
            ]}
          />
          <FeatureCard;
            ]}
          />
        </div>
      </section>

    </div>
  );
}'"`