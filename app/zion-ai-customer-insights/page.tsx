import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAICustomerInsightsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights Pro - Zion Tech Group</title>
        <meta name="description" content="Unlock customer insights with AI analytics. Deep customer behavior analysis, predictive modeling, and personalization engine." />
        <meta name="keywords" content="customer analytics, AI insights, customer behavior, predictive modeling, personalization, customer segmentation" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container-responsive py-12">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">👥</div>
            <h1 className="text-responsive-xl font-bold text-gray-900 mb-6">Zion AI Customer Insights Pro</h1>
            <p className="text-responsive text-gray-600 max-w-3xl mx-auto">
              Unlock deep customer insights with our AI-powered analytics platform. Understand customer behavior, predict trends, and personalize experiences.
            </p>
          </div>

          <div className="grid grid-1-col lg:grid-2-col gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customer Segmentation</h3>
                    <p className="text-gray-600 text-sm">Automatically segment customers based on behavior, demographics, and preferences</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Behavioral Analysis</h3>
                    <p className="text-gray-600 text-sm">Track and analyze customer interactions across all touchpoints</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Predictive Modeling</h3>
                    <p className="text-gray-600 text-sm">Predict customer lifetime value, churn risk, and purchase likelihood</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalization Engine</h3>
                    <p className="text-gray-600 text-sm">Create personalized experiences and recommendations for each customer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Analytics</h3>
                    <p className="text-gray-600 text-sm">Get instant insights with real-time data processing and visualization</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Plan</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$99/month</div>
                  <p className="text-gray-600">Perfect for growing businesses</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Up to 10,000 customers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Basic segmentation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Monthly reports</span>
                  </li>
                </ul>
                <a href="/contact?service=ai-customer-insights" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Contact us today to learn more about our AI Customer Insights platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                📞 Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAICustomerInsightsPage;