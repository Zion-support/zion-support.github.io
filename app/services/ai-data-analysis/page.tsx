<<<<<<< HEAD
};

export default function AIDataAnalysisPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Data Analysis Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build AI-powered data analysis platforms with automated insights,
          predictive analytics, and intelligent business intelligence tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Automated Insights"
            details={[

            ]}
          />
          <Item
            title="Predictive Analytics"
            details={[

            ]}
          />
          <Item
            title="Data Processing"
            details={[

            ]}
          />
      </div>
        <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            AI Data Analysis Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Machine Learning Models
              </h3>
              <p className="text-gray-600">
                Custom ML models for classification, regression, clustering, and
                deep learning applications.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Natural Language Queries
              </h3>
              <p className="text-gray-600">
                Ask questions in plain English and get AI-powered insights from
                your data automatically.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Real-Time Processing
              </h3>
              <p className="text-gray-600">
                Process streaming data in real-time with sub-second latency for
                instant insights and alerts.
        </p>
      </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Visualization & Dashboards
              </h3>
              <p className="text-gray-600">
                Interactive charts, graphs, and dashboards that automatically
                update with new insights.
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
          name="Predictive Analytics"
          price="$35k–$70k"
          duration="12–20 weeks"
          features={[

          ]}
        />
        <Plan
          name="Enterprise AI"
          price="$70k+"
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
      <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
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
        href="mailto:kleber@ziontechgroup.com?subject=AI Data Analysis Platform Inquiry"
        className="block w-full mt-6 bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        Get Started
      </a>
      </div>
  );
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ai Data Analysis | Zion Tech Group',
  description: 'Professional ai data analysis services for your business needs.',
  keywords: 'ai, data, analysis'
};

export default function AidataanalysisPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Data Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ai data analysis services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert aidataanalysis solutions tailored to your business needs.
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
