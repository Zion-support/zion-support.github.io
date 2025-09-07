import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI Data Analysis Platform - Zion Tech Group',
  description: 'Build AI-powered data analysis platforms with automated insights, predictive analytics, and intelligent business intelligence tools.',
  keywords: 'AI data analysis, machine learning, predictive analytics, business intelligence, data visualization'
};

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Plan({ name, price, duration, features }: { name: string; price: string; duration: string; features: string[] }) {
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
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Data Analysis Platform Inquiry"
        className="block w-full mt-6 bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          AI Data Analysis Platform Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Plan
            name="Basic Analytics"
            price="$10k–$25k"
            duration="6–10 weeks"
            features={[
              "Basic data visualization",
              "Simple ML models",
              "Standard dashboards",
              "Email support"
            ]}
          />
          <Plan
            name="Predictive Analytics"
            price="$35k–$70k"
            duration="12–20 weeks"
            features={[
              "Advanced ML algorithms",
              "Predictive modeling",
              "Real-time processing",
              "Custom dashboards",
              "Priority support"
            ]}
          />
          <Plan
            name="Enterprise AI"
            price="$70k+"
            duration="16–28 weeks"
            features={[
              "Custom AI models",
              "Big data processing",
              "Advanced visualizations",
              "API integrations",
              "On-premise deployment",
              "24/7 support"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

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
              "Pattern recognition",
              "Anomaly detection",
              "Trend analysis",
              "Automated reporting"
            ]}
          />
          <Item
            title="Predictive Analytics"
            details={[
              "Forecasting models",
              "Risk assessment",
              "Demand prediction",
              "Performance optimization"
            ]}
          />
          <Item
            title="Data Processing"
            details={[
              "Real-time streaming",
              "Batch processing",
              "Data cleaning",
              "ETL pipelines"
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
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  )