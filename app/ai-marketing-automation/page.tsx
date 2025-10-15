import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Target, BarChart3 } from 'lucide-react';

const AiMarketingAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Marketing Automation - Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your marketing with AI-powered automation. Streamline campaigns, personalize experiences, and drive better results."
        />
        <meta
          name="keywords"
          content="AI marketing automation, email marketing, social media automation, lead scoring, marketing analytics, customer segmentation, workflow automation, marketing technology"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Marketing Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your marketing with AI-powered automation. Streamline campaigns, personalize experiences, and drive better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-pink-500 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
                <Zap className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Smart Automation</h3>
                <p className="text-gray-300">
                  Automate repetitive marketing tasks with AI-powered workflows and triggers.
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
                <Target className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Personalization</h3>
                <p className="text-gray-300">
                  Create highly personalized experiences for each customer based on their behavior.
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
                <BarChart3 className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Analytics</h3>
                <p className="text-gray-300">
                  Get deep insights into campaign performance and customer engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Automate Your Marketing?</h2>
            <p className="text-xl mb-8 text-pink-100">
              Start using AI to transform your marketing campaigns today.
            </p>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiMarketingAutomationPage;