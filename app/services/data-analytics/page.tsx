import React from 'react';


export const metadata = { 
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.',
  keywords: 'data analytics, business intelligence, data visualization, predictive analytics, data engineering'
import Link from "next/link";

export const metadata = {
  title: "Data Analytics & BI | Zion Tech Group",
  description: "Advanced data analytics, business intelligence, and machine learning solutions to transform raw data into actionable insights.",
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { 
  title: 'Data Analytics Solutions | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering. Turn data into actionable insights.'
};

export default function DataAnalyticsPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Data Analytics & BI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your data into actionable insights with advanced analytics, 
          real-time dashboards, and AI-powered business intelligence solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Data Analytics Inquiry"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Analytics Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Analytics Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced data analytics solutions to transform your data into actionable business insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Business Intelligence</h3>
            <p className="text-gray-300">
              Comprehensive BI solutions to analyze and visualize your business data effectively.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300">
              Leverage machine learning to predict trends and make data-driven decisions.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Data Engineering</h3>
            <p className="text-gray-300">
              Build robust data pipelines and infrastructure for scalable analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}