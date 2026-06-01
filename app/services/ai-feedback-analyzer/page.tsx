import Link from 'next/link'

export default function AIFeedbackAnalyzerPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
            AI-Powered Customer Feedback Analyzer
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Transform customer feedback into actionable business intelligence with our AI-powered feedback analyzer. 
            Process reviews, surveys, social media comments, and support tickets to uncover trends, sentiment patterns, 
            and improvement opportunities—all automatically and in real-time.
          </p>
        </div>

        {/* How it Works */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">📥</div>
            <h3 className="text-xl font-bold text-purple-400 mb-3">Collect Feedback</h3>
            <p className="text-slate-400">Import feedback from multiple sources: surveys, reviews, social media, support tickets, and more.</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-purple-400 mb-3">AI Analysis</h3>
            <p className="text-slate-400">Our AI models analyze sentiment, topics, emotions, and intent to extract meaningful insights from unstructured feedback.</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-purple-400 mb-3">Actionable Insights</h3>
            <p className="text-slate-400">Get visual dashboards, trend analysis, and specific recommendations to improve products, services, and customer experience.</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Multi-Source Integration</h3>
              <p className="text-slate-400">Connect with Zendesk, Intercom, SurveyMonkey, Google Forms, Trustpilot, Yelp, Facebook, Twitter, and custom APIs.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Advanced Sentiment Analysis</h3>
              <p className="text-slate-400">Detect not just positive/negative, but nuanced emotions like frustration, satisfaction, confusion, and delight.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Topic Clustering</h3>
              <p className="text-slate-400">Automatically group feedback by themes and topics to identify recurring issues and popular feature requests.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Real-Time Alerts</h3>
              <p className="text-slate-400">Get instant notifications for critical feedback, emerging issues, or sudden sentiment shifts requiring immediate attention.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Competitive Benchmarking</h3>
              <p className="text-slate-400">Compare your feedback metrics against industry benchmarks and competitors to identify strengths and weaknesses.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Custom Reports</h3>
              <p className="text-slate-400">Schedule automated reports tailored to different stakeholders—executives, product teams, support managers, and more.</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Business Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl mb-3">↑ 25%</div>
              <p className="text-slate-400">Improvement in customer satisfaction scores</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl mb-3">↓ 40%</div>
              <p className="text-slate-400">Reduction in response time to critical issues</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl mb-3">↑ 35%</div>
              <p className="text-slate-400">Increase in actionable insights from feedback data</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl mb-3">↓ 50%</div>
              <p className="text-slate-400">Decrease in manual feedback processing time</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl mb-3">↑ 30%</div>
              <p className="text-slate-400">Boost in customer retention and loyalty</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl mb-3">↑ 20%</div>
              <p className="text-slate-400">Increase in upsell/cross-sell opportunities identified</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Use Cases</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Product Development</h3>
              <p className="text-slate-400">Identify feature requests, usability issues, and innovation opportunities from user feedback to guide product roadmap decisions.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Customer Support Optimization</h3>
              <p className="text-slate-400">Detect common support issues, agent performance trends, and knowledge base gaps to improve support efficiency and quality.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Brand Reputation Management</h3>
              <p className="text-slate-400">Monitor social media sentiment, review platforms, and forums to protect brand reputation and respond proactively to emerging issues.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Market Research</h3>
              <p className="text-slate-400">Analyze customer preferences, pain points, and competitive comparisons to inform marketing strategies and positioning.</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Simple, Transparent Pricing</h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            Flexible plans for businesses of all sizes. All plans include unlimited feedback sources, real-time analysis, and priority support.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Starter</h3>
              <p className="text-slate-400 mb-6">Perfect for small businesses and startups</p>
              <div className="space-y-4 text-left text-slate-400">
                <p>• Up to 10,000 feedback items/month</p>
                <p>• 5 feedback source integrations</p>
                <p>• Basic sentiment analysis</p>
                <p>• Monthly summary reports</p>
                <p>• Email support</p>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-bold text-purple-300">$49/month</p>
                <p className="text-slate-500">billed annually</p>
              </div>
              <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                Get Started
              </button>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Professional</h3>
              <p className="text-slate-400 mb-6">Ideal for growing businesses</p>
              <div className="space-y-4 text-left text-slate-400">
                <p>• Up to 100,000 feedback items/month</p>
                <p>• Unlimited feedback source integrations</p>
                <p>• Advanced emotion detection</p>
                <p>• Weekly insights reports</p>
                <p>• Real-time alerts</p>
                <p>• Priority email & chat support</p>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-bold text-purple-300">$149/month</p>
                <p className="text-slate-500">billed annually</p>
              </div>
              <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                Get Started
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Enterprise</h3>
              <p className="text-slate-400 mb-6">For large organizations with complex needs</p>
              <div className="space-y-4 text-left text-slate-400">
                <p>• Unlimited feedback volume</p>
                <p>• Custom AI model training</p>
                <p>• Predictive analytics</p>
                <p>• Real-time dashboards</p>
                <p>• Dedicated account manager</p>
                <p>• 24/7 phone & priority support</p>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-bold text-purple-300">Custom</p>
                <p className="text-slate-500">based on volume & requirements</p>
              </div>
              <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Turn Feedback into Your Competitive Advantage?</h2>
          <p className="text-xl text-slate-200 mb-8">
            Start analyzing your customer feedback today with our AI-powered platform. No credit card required to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
              Explore All Services
            </Link>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI%20Feedback%20Analyzer%20Inquiry" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}