import React from 'react';
import { Metadata } from 'next';

export const metadata = {

  title: "AI Customer Insights | Zion Tech Group",
  description: "Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.",

  title: "AI Customer Insights | Zion Tech Group",
  description: "Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.",

  title: "AI Expense Tracker | Zion Tech Group",
  description:
    "Smart expense tracking and financial management powered by AI. Automate receipt processing, categorization, and expense reporting.",

};

export default function AIExpenseTrackerPage() {
  return (
    <div className="animate-fade-in">

        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🧠"
              title="Behavioral Analysis"
              description="AI-powered analysis of customer interactions, purchase patterns, and engagement metrics across all touchpoints."
            />
            <FeatureItem
              icon="📊"
              title="Predictive Analytics"
              description="Machine learning models to predict customer lifetime value, churn risk, and future purchase behavior."
            />
            <FeatureItem
              icon="🎯"
              title="Segmentation Intelligence"
              description="Automated customer segmentation based on behavior, demographics, and preferences for targeted marketing."
            />
            <FeatureItem
              icon="💬"
              title="Sentiment Analysis"
              description="Real-time analysis of customer feedback, reviews, and social media mentions to understand satisfaction levels."
            />
            <FeatureItem
              icon="📈"
              title="Trend Detection"
              description="Identify emerging trends, seasonal patterns, and market shifts that impact customer behavior."
            />
            <FeatureItem
              icon="🔮"
              title="Recommendation Engine"
              description="Personalized product and content recommendations based on individual customer preferences and behavior."
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="space-y-4">
            <FeatureItem
              icon="📸"
              title="Smart Receipt Scanning"
              description="Take a photo of any receipt and our AI automatically extracts merchant, amount, date, and category information."
            />
            <FeatureItem
              icon="🏷️"
              title="Auto-Categorization"
              description="AI-powered expense categorization that learns from your patterns and automatically sorts expenses by type."
            />
            <FeatureItem
              icon="📊"
              title="Real-time Analytics"
              description="Comprehensive dashboards showing spending patterns, budget tracking, and financial insights."
            />
            <FeatureItem
              icon="💼"
              title="Business Integration"
              description="Seamlessly integrate with accounting software like QuickBooks, Xero, and SAP for streamlined workflows."
            />
            <FeatureItem
              icon="🔍"
              title="Expense Search & Filter"
              description="Powerful search capabilities to find any expense instantly, with advanced filtering by date, category, or amount."
            />
            <FeatureItem
              icon="📱"
              title="Mobile App"
              description="Full-featured mobile app for iOS and Android with offline capability and receipt scanning on the go."
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              plan="Personal"
              price="$9"
              period="per month"
              description="Perfect for individuals and freelancers"
              features={[
                "Up to 100 receipts per month",
                "Basic categorization",
                "Expense reports",
                "Mobile app access",
                "Email support",
              ]}
              popular={false}
            />
            <PricingCard
              plan="Business"
              price="$29"
              period="per month"
              description="Ideal for small to medium businesses"
              features={[
                "Up to 500 receipts per month",
                "Advanced AI categorization",
                "Team collaboration",
                "Accounting integrations",
                "Priority support",
                "Custom reporting",
              ]}
              popular={true}
            />
            <PricingCard
              plan="Enterprise"
              price="$99"
              period="per month"
              description="For large organizations with complex needs"
              features={[
                "Unlimited receipts",
                "Custom AI training",
                "Advanced analytics",
                "Dedicated support",
                "Custom integrations",
                "On-premise deployment",
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-blue-50 rounded-lg">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Unlock Customer Insights?
          </h2>

          <div className="space-y-6">
            <FeatureItem
              icon="🧠"
              title="Predictive Analytics"
              description="AI-powered customer lifetime value prediction, churn risk analysis, and purchase behavior forecasting"
            />
            <FeatureItem
              icon="😊"
              title="Sentiment Analysis"
              description="Real-time sentiment analysis from reviews, social media, and customer feedback across all channels"
            />
            <FeatureItem
              icon="🎯"
              title="Customer Segmentation"
              description="Advanced AI clustering to identify high-value customer segments and personalized targeting strategies"
            />
            <FeatureItem
              icon="📊"
              title="Behavioral Analytics"
              description="Deep insights into customer journey, engagement patterns, and conversion optimization opportunities"
            />
            <FeatureItem
              icon="🔮"
              title="Churn Prediction"
              description="Early warning system to identify at-risk customers and trigger retention campaigns"
            />
            <FeatureItem
              icon="📈"
              title="ROI Optimization"
              description="AI recommendations for marketing spend allocation and customer acquisition strategies"

            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              plan="Starter"
              price="$199"
              period="per month"
              description="Perfect for small businesses getting started with customer analytics"
              features={[
                "Up to 10,000 customer records",
                "Basic behavioral analysis",
                "Standard segmentation",
                "Email support",
                "Monthly reports"
              ]}
              popular={false}
            />
            <PricingCard
              plan="Professional"
              price="$599"
              period="per month"
              description="Ideal for growing businesses with complex customer data"
              features={[
                "Up to 100,000 customer records",
                "Advanced AI analytics",
                "Predictive modeling",
                "Real-time insights",
                "Priority support",
                "Custom dashboards"
              ]}
              popular={true}
            />
            <PricingCard
              plan="Enterprise"
              price="$1,999"
              period="per month"
              description="For large organizations with extensive customer data needs"
              features={[
                "Unlimited customer records",
                "Custom AI models",
                "Advanced predictive analytics",
                "Dedicated support",
                "Custom integrations",
                "On-premise deployment"
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

            title="Track & Report"
            description="View real-time analytics, generate reports, and export data to your accounting system."

          />
        </div>
      </div>

          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </div>
  );

}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {

  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({ plan, price, period, description, features, popular }: {
  plan: string;

function PricingCard({ plan, price, period, description, features, popular }: {
  plan: string;

  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (

      {popular && (
        <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-1">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
function StepCard({ step, title, description }: { step: string; title: string; description: string }) {

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {

  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

function InsightCategory({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>

}

