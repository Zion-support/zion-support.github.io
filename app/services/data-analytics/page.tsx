import React from 'react';
import Link from 'next/link';

export const metadata = { 
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
};

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
}

function ServiceCard({ title, description, price, features, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-lg font-bold text-blue-600">{price}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Advanced Data Analytics & BI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your data into actionable insights with advanced analytics, real-time dashboards, 
            and AI-powered business intelligence solutions that drive informed decision-making.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="Business Intelligence"
            description="Comprehensive BI solutions with interactive dashboards and reporting"
            price="From $15,000"
            features={["Interactive dashboards", "Custom reports", "Data visualization", "KPI tracking"]}
            icon="📊"
          />
          <ServiceCard
            title="Data Engineering"
            description="Build robust data pipelines and infrastructure for scalable analytics"
            price="From $25,000"
            features={["ETL/ELT pipelines", "Data warehousing", "Real-time processing", "Data quality"]}
            icon="⚙️"
          />
          <ServiceCard
            title="Machine Learning Analytics"
            description="AI-powered analytics and predictive modeling for business insights"
            price="From $30,000"
            features={["Predictive modeling", "Anomaly detection", "Recommendation engines", "Forecasting"]}
            icon="🤖"
          />
          <ServiceCard
            title="Real-time Analytics"
            description="Live data processing and streaming analytics for instant insights"
            price="From $20,000"
            features={["Stream processing", "Real-time dashboards", "Event analytics", "Live monitoring"]}
            icon="⚡"
          />
          <ServiceCard
            title="Data Visualization"
            description="Create compelling visual stories from your data with advanced charts and graphs"
            price="From $10,000"
            features={["Interactive charts", "Custom visualizations", "Storytelling", "Mobile dashboards"]}
            icon="📈"
          />
          <ServiceCard
            title="Data Governance"
            description="Establish data quality, security, and compliance frameworks"
            price="From $18,000"
            features={["Data cataloging", "Quality monitoring", "Access controls", "Compliance reporting"]}
            icon="🔒"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our data analytics solutions can transform your business intelligence.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Analytics Journey
          </Link>
        </div>
      </div>
    </main>
  );
}