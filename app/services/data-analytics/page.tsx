<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Data Analytics - Zion Tech Group',
  description: 'Professional data analytics solutions for your business needs.',
=======


import Link from "next/link";

export const metadata = {
  title: "Data Analytics & BI | Zion Tech Group",
  description: "Advanced data analytics, business intelligence, and machine learning solutions to transform raw data into actionable insights.",


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
};

export default function ServicePage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Data Analytics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional data analytics solutions designed to meet your business requirements 
            and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Implementation</h3>
              <p className="text-gray-600">
                Quick deployment and setup to get your solution running in no time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and reliability for your peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Built to grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your data analytics requirements 
              and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
=======


    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Data Analytics & Business Intelligence
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your raw data into actionable insights with our advanced Data Analytics and Business Intelligence solutions. We empower your business with predictive modeling, real-time dashboards, and data-driven decision-making.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="📊"
              title="Advanced Data Modeling"
              description="Design and implement robust data models that support complex analytics and reporting requirements."
              benefits={["Scalable data architecture", "High data accuracy", "Optimized query performance", "Custom data schemas"]}
            />
            <FeatureItem
              icon="📈"
              title="Business Intelligence Dashboards"
              description="Create interactive and intuitive BI dashboards that provide real-time insights into key performance indicators (KPIs)."
              benefits={["Real-time data visualization", "Customizable reports", "User-friendly interface", "Cross-device access"]}
            />
            <FeatureItem
              icon="🧠"
              title="Predictive Analytics & ML"
              description="Leverage machine learning models to forecast future trends, predict customer behavior, and identify new opportunities."
              benefits={["95% prediction accuracy", "Fraud detection", "Churn prediction", "Demand forecasting"]}
            />
            <FeatureItem
              icon="🔍"
              title="Data Warehousing & Lakes"
              description="Build and manage scalable data warehouses and data lakes for efficient storage and processing of large datasets."
              benefits={["Centralized data storage", "Big data processing", "Data governance", "Cloud-native solutions"]}
            />
            <FeatureItem
              icon="🧹"
              title="Data Integration & Quality"
              description="Integrate data from disparate sources and ensure high data quality through cleansing, validation, and transformation processes."
              benefits={["Unified data view", "Automated data pipelines", "Error reduction", "Improved data reliability"]}
            />

          </div>
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our data analytics experts help you transform raw data into strategic insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>


      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Data Analytics Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We follow a comprehensive process to deliver impactful data solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step="1"
            title="Data Strategy & Discovery"
            description="Define business objectives, data sources, and analytics requirements."
          />
          <ProcessStep
            step="2"
            title="Data Engineering & Modeling"
            description="Collect, clean, transform, and model data for analysis."
          />
          <ProcessStep
            step="3"
            title="Analysis & Visualization"
            description="Apply analytical techniques, build dashboards, and generate insights."
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-green-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Unlock the Power of Your Data?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact us today for a free data analytics consultation and discover how insights can transform your business.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
    </div>
  );
}