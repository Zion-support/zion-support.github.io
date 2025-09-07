<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';'
import { ArrowRightIcon } from '@heroicons/react/24/outline';'
export const metadata = {
  }
  "title": 'Data Analytics - Zion Tech Group','
  "description": 'Professional data analytics solutions for your business needs.','
import Link from "next/link";"
export const metadata = {
  }
  "title": "Data Analytics & BI | Zion Tech Group","
  "description": "Advanced data analytics, business intelligence, and machine learning solutions to transform raw data into actionable insights.","
import Link from 'next/link';'
import { ArrowRightIcon } from '@heroicons/react/24/outline';'
export const metadata = {
  }
  "title": 'Data Analytics - Zion Tech Group','
  "description": 'Professional data analytics solutions for your business needs.','
import Link from 'next/link';'
import { ArrowRightIcon } from '@heroicons/react/24/outline';'
export const metadata = {
  }
  "title": 'Data Analytics - Zion Tech Group','
  "description": 'Professional data analytics solutions for your business needs.','
import Link from "next/link";"
export const metadata = {
  }
  "title": "Data Analytics & BI | Zion Tech Group","
  "description": "Advanced data analytics, business intelligence, and machine learning solutions to transform raw data into actionable insights."};"
export default function DataAnalyticsPage() {
}
return (;
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">"
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">"
=======
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Analytics | Zion Tech Group',
  description: 'Professional data analytics services for your business needs.',
  keywords: 'data analytics, services, business, technology'
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
            Data Analytics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Professional data analytics solutions designed to meet your business requirements,
and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">"
          {/* Features Grid */}
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8 mb-16">"
            <div className="bg-white rounded-xl shadow-lg p-8 "hover":shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">"
                <span className="text-3xl">⚡</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Implementation</h3>"
              <p className="text-gray-600">"
                Quick deployment and setup to get your solution running in no time.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 "hover":shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">"
                <span className="text-3xl">🔒</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>"
              <p className="text-gray-600">"
                Enterprise-grade security and reliability for your peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 "hover":shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">"
                <span className="text-3xl">📈</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>"
              <p className="text-gray-600">"
                Built to grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>
          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">"
            <h2 className="text-3xl font-bold text-gray-900 mb-6">"
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">"
              Contact us today to discuss your data analytics requirements,
and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
              <Link,
href="/contact""
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold "hover":bg-blue-700 transition-colors inline-flex items-center""
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />"
              </Link>
              <Link,
href="/services""
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold "hover":border-blue-400 "hover":text-blue-600 transition-colors""
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    <div className="animate-fade-in">"
      <div className="text-center mb-16">"
        <h1 className="text-4xl font-bold text-gray-900 mb-6">"
          Data Analytics & Business Intelligence
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
          Transform your raw data into actionable insights with our advanced Data Analytics and Business Intelligence solutions. We empower your business with predictive modeling, real-time dashboards, and data-driven decision-making.
        </p>
      </div>
      <div className="grid grid-cols-1 "lg":grid-cols-2 gap-12 mb-16">"
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h2>"
          <div className="space-y-4">"
            <FeatureItem,
icon="📊""
              title="Advanced Data Modeling""
              description="Design and implement robust data models that support complex analytics and reporting requirements.""
              benefits={["Scalable data architecture", "High data accuracy", "Optimized query performance", "Custom data schemas"]}" />
            <FeatureItem,
icon="📈""
              title="Business Intelligence Dashboards""
              description="Create interactive and intuitive BI dashboards that provide real-time insights into key performance indicators (KPIs).""
              benefits={["Real-time data visualization", "Customizable reports", "User-friendly interface", "Cross-device access"]}" />
            <FeatureItem,
icon="🧠""
              title="Predictive Analytics & ML""
              description="Leverage machine learning models to forecast future trends, predict customer behavior, and identify new opportunities.""
              benefits={["95% prediction accuracy", "Fraud detection", "Churn prediction", "Demand forecasting"]}" />
            <FeatureItem,
icon="🔍""
              title="Data Warehousing & Lakes""
              description="Build and manage scalable data warehouses and data lakes for efficient storage and processing of large datasets.""
              benefits={["Centralized data storage", "Big data processing", "Data governance", "Cloud-native solutions"]}" />
            <FeatureItem,
icon="🧹""
              title="Data Integration & Quality""
              description="Integrate data from disparate sources and ensure high data quality through cleansing, validation, and transformation processes.""
              benefits={["Unified data view", "Automated data pipelines", "Error reduction", "Improved data reliability"]}" />
          </div>
        </div>
        <div className="text-center mt-16">"
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Unlock Your Data's Potential?</h2>'
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">"
            Let our data analytics experts help you transform raw data into strategic insights.
          </p>
          <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
            <a,
href="/contact""
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-purple-700 transition-colors""
            >
              Get Started
            </a>
            <a,
href=""tel":+13024640950""
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold "hover":bg-purple-600 "hover":text-white transition-colors""
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Data Analytics Process</h2>"
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">"
          We follow a comprehensive process to deliver impactful data solutions.
        </p>
        <div className="grid grid-cols-1 "md":grid-cols-3 gap-8">"
          <ProcessStep,
step="1""
            title="Data Strategy & Discovery""
            description="Define business objectives, data sources, and analytics requirements."" />
          <ProcessStep,
step="2""
            title="Data Engineering & Modeling""
            description="Collect, clean, transform, and model data for analysis."" />
          <ProcessStep,
step="3""
            title="Analysis & Visualization""
            description="Apply analytical techniques, build dashboards, and generate insights."" />
        </div>
      </div>
      <CTA />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-12">"
          <h1 className="text-4xl "md":text-6xl font-bold text-gray-900 mb-6">"
            Data Analytics & BI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Advanced data analytics, business intelligence, and machine learning solutions to transform raw data into actionable insights.
          </p>
        </div>
        <div className="grid "md":grid-cols-2 "lg":grid-cols-3 gap-8">"
          <div className="bg-white rounded-lg shadow-lg p-6">"
            <h3 className="text-xl font-semibold mb-4">Business Intelligence</h3>"
            <p className="text-gray-600">Transform your data into actionable insights with our comprehensive BI solutions.</p>"
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">"
            <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>"
            <p className="text-gray-600">Leverage AI and ML to predict trends and optimize business processes.</p>"
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">"
            <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>"
            <p className="text-gray-600">Get instant insights with our real-time data processing capabilities.</p>"
          </div>
        </div>
      </div>

      <ContactSection />
<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
    </div>
  );
}
function FeatureItem() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
function BenefitCard() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="text-4xl mb-4 text-green-600">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}
function ProcessStep() {
}
return (;
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">"
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}
function CTA() {
}
return (;
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">"
        Ready to Unlock the Power of Your Data?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">"
        Contact us today for a free data analytics consultation and discover how insights can transform your business.
      </p>
      <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
        <a,
href=""tel":+13024640950""
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-green-700 transition-colors""
        >
          Call +1 302 464 0950
        </a>
        <a,
href=""mailto":kleber@ziontechgroup.com""
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-green-600 "hover":text-white transition-colors""
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">"
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}
export const metadata = {
  }
  "title": "Data Analytics & BI | Zion Tech Group","
  "description": "Advanced data analytics, business intelligence, and machine learning solutions to transform raw data into actionable insights.","
  "keywords": 'data-analytics, services, business, technology''
};
function FeatureItem() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
function BenefitCard() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="text-4xl mb-4 text-green-600">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}
function ProcessStep() {
}
return (;
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">"
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}
function CTA() {
}
return (;
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">"
        Ready to Unlock the Power of Your Data?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">"
        Contact us today for a free data analytics consultation and discover how insights can transform your business.
      </p>
      <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
        <a,
href=""tel":+13024640950""
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-green-700 transition-colors""
        >
          Call +1 302 464 0950
        </a>
        <a,
href=""mailto":kleber@ziontechgroup.com""
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-green-600 "hover":text-white transition-colors""
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">"
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
function FeatureItem() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
function BenefitCard() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="text-4xl mb-4 text-green-600">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}
function ProcessStep() {
}
return (;
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">"
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}
function CTA() {
}
return (;
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">"
        Ready to Unlock the Power of Your Data?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">"
        Contact us today for a free data analytics consultation and discover how insights can transform your business.
      </p>
      <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
        <a,
href=""tel":+13024640950""
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-green-700 transition-colors""
        >
          Call +1 302 464 0950
        </a>
        <a,
href=""mailto":kleber@ziontechgroup.com""
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-green-600 "hover":text-white transition-colors""
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">"
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
=======

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn how our data analytics services can transform your business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
=======
import React from 'react';

export const metadata = {
  title: 'Data Analytics | Zion Tech Group',
  description: 'Professional data analytics solutions for modern businesses. Transform your operations with our advanced data analytics technology.'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Data Analytics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional data analytics solutions for modern businesses. Transform your operations with our advanced data analytics technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Feature 1</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Feature 1.1</li>
              <li>• Feature 1.2</li>
              <li>• Feature 1.3</li>
              <li>• Feature 1.4</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Feature 2</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Feature 2.1</li>
              <li>• Feature 2.2</li>
              <li>• Feature 2.3</li>
              <li>• Feature 2.4</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Feature 3</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Feature 3.1</li>
              <li>• Feature 3.2</li>
              <li>• Feature 3.3</li>
              <li>• Feature 3.4</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our data analytics can help your business
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/automate-test-improve-and-merge-code-9862
