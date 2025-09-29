import React from 'react';
import Link from 'next/link';

// AI Business Transformation Banner
export function AIBusinessTransformationBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-8 px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 New Guide
              </span>
              <span className="text-sm opacity-90">January 20, 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Business Transformation 2025: Complete Strategic Guide
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Master AI transformation with our comprehensive 2025 guide. Learn proven strategies, 
              implementation frameworks, and ROI optimization techniques that deliver 300% ROI improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-business-transformation-2025"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Complete Guide
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Get AI Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Key Transformation Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">300%</div>
                <div className="text-sm opacity-90">ROI Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">80%</div>
                <div className="text-sm opacity-90">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">60%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Customer Experience Banner
export function AICustomerExperienceBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                💬 New Article
              </span>
              <span className="text-sm opacity-90">January 20, 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Powered Customer Experience Revolution
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Discover how AI is transforming customer experience in 2025. Learn about advanced 
              personalization, intelligent automation, and omnichannel strategies that deliver 90% satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-customer-experience-2025"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Full Article
              </Link>
              <Link
                href="/services/ai-customer-service"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Customer Experience Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm opacity-90">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-90">Query Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enterprise AI Transformation Case Study Banner
export function EnterpriseAITransformationBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-8 px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                📈 Case Study
              </span>
              <span className="text-sm opacity-90">January 20, 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise AI Transformation: 300% ROI in 12 Months
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Learn how a Fortune 500 manufacturing company achieved unprecedented results through 
              comprehensive AI transformation, including $15M in annual cost savings and 80% operational efficiency gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/enterprise-ai-transformation-2025"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Case Study
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Transformation Results</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">300%</div>
                <div className="text-sm opacity-90">ROI Achievement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$15M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">80%</div>
                <div className="text-sm opacity-90">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm opacity-90">Months Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Latest AI Insights Banner
export function LatestAIInsightsBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🧠 Latest AI Insights
            </span>
            <span className="text-sm opacity-90">January 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead with Cutting-Edge AI Content
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Discover our latest AI insights, transformation guides, and success stories. 
            Join thousands of professionals staying ahead with our expert content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="text-lg font-bold mb-2">AI Transformation Guide</h3>
            <p className="text-sm opacity-90 mb-4">
              Complete strategic guide with proven frameworks and ROI optimization techniques.
            </p>
            <Link
              href="/blog/ai-business-transformation-2025"
              className="text-white font-semibold hover:underline"
            >
              Read Guide →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl mb-3">💬</div>
            <h3 className="text-lg font-bold mb-2">Customer Experience AI</h3>
            <p className="text-sm opacity-90 mb-4">
              Revolutionize customer interactions with AI-powered personalization and automation.
            </p>
            <Link
              href="/blog/ai-customer-experience-2025"
              className="text-white font-semibold hover:underline"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl mb-3">📈</div>
            <h3 className="text-lg font-bold mb-2">Enterprise Case Study</h3>
            <p className="text-sm opacity-90 mb-4">
              See how a Fortune 500 company achieved 300% ROI through AI transformation.
            </p>
            <Link
              href="/case-studies/enterprise-ai-transformation-2025"
              className="text-white font-semibold hover:underline"
            >
              View Results →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </div>
  );
}

// AI Services Showcase Banner
export function AIServicesShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-8 px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🚀 AI Services
            </span>
            <span className="text-sm opacity-90">2025 Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with Our AI Services
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Discover our comprehensive AI services that deliver measurable results. 
            From automation to analytics, we help businesses achieve their transformation goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold mb-2">AI Automation</h3>
            <p className="text-sm opacity-90 mb-4">
              Automate business processes with intelligent workflows and smart triggers.
            </p>
            <div className="text-xs opacity-75">Starting at $149/month</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-bold mb-2">AI Analytics</h3>
            <p className="text-sm opacity-90 mb-4">
              Transform data into actionable insights with predictive modeling and real-time dashboards.
            </p>
            <div className="text-xs opacity-75">Starting at $199/month</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-lg font-bold mb-2">AI Customer Service</h3>
            <p className="text-sm opacity-90 mb-4">
              24/7 intelligent customer support with natural language processing.
            </p>
            <div className="text-xs opacity-75">Starting at $99/month</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="text-lg font-bold mb-2">Cloud Migration</h3>
            <p className="text-sm opacity-90 mb-4">
              Seamless migration to cloud infrastructure with zero downtime.
            </p>
            <div className="text-xs opacity-75">Starting at $2,999</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}