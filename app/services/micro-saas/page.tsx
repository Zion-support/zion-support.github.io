import Link from "next/link";

export const metadata = {
  title: "Micro SaaS Development | Zion Tech Group",
  description: "Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.",
  keywords: "micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence"
};

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Micro SaaS Development
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build powerful, scalable micro SaaS applications that solve real business problems. 
            From AI-powered tools to productivity apps, we create solutions that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact" 
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              href="#services" 
              className="border border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div id="services" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Content Generator Pro</h3>
            <p className="text-gray-600 mb-6">
              Advanced AI-powered content creation tool with multi-language support, SEO optimization, and brand voice customization.
            </p>
            <div className="text-2xl font-bold text-purple-600 mb-2">$29-199/month</div>
            <p className="text-sm text-gray-500">Based on usage and features</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Invoice Generator</h3>
            <p className="text-gray-600 mb-6">
              Automated invoice creation with payment tracking, recurring billing, and multi-currency support.
            </p>
            <div className="text-2xl font-bold text-purple-600 mb-2">$19-99/month</div>
            <p className="text-sm text-gray-500">Starter to Enterprise plans</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Social Media Scheduler</h3>
            <p className="text-gray-600 mb-6">
              Intelligent social media management with AI-generated content, optimal posting times, and analytics.
            </p>
            <div className="text-2xl font-bold text-purple-600 mb-2">$39-149/month</div>
            <p className="text-sm text-gray-500">Multi-platform support</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Meeting Assistant</h3>
            <p className="text-gray-600 mb-6">
              Automated meeting transcription, action item extraction, and follow-up scheduling.
            </p>
            <div className="text-2xl font-bold text-purple-600 mb-2">$49-199/month</div>
            <p className="text-sm text-gray-500">Unlimited meetings</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Customer Insights Platform</h3>
            <p className="text-gray-600 mb-6">
              Advanced customer analytics with predictive insights, sentiment analysis, and behavior tracking.
            </p>
            <div className="text-2xl font-bold text-purple-600 mb-2">$79-299/month</div>
            <p className="text-sm text-gray-500">Real-time analytics</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Project Manager</h3>
            <p className="text-gray-600 mb-6">
              Intelligent project management with automated task assignment, progress tracking, and risk prediction.
            </p>
            <div className="text-2xl font-bold text-purple-600 mb-2">$59-249/month</div>
            <p className="text-sm text-gray-500">Team collaboration tools</p>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Finance Analyzer</h3>
            <p className="text-gray-600 mb-6">
              Automated financial analysis with expense categorization, budget optimization, and investment insights.
            </p>
            <div className="text-2xl font-bold text-purple-600 mb-2">$69-279/month</div>
            <p className="text-sm text-gray-500">Bank integration included</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Email Optimizer</h3>
            <p className="text-gray-600 mb-6">
              Smart email marketing with A/B testing, subject line optimization, and send time prediction.
            </p>
            <div className="text-2xl font-bold text-purple-600 mb-2">$39-159/month</div>
            <p className="text-sm text-gray-500">Unlimited campaigns</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI SEO Analyzer</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive SEO analysis with keyword research, competitor tracking, and content optimization.
            </p>
            <div className="text-2xl font-bold text-purple-600 mb-2">$49-199/month</div>
            <p className="text-sm text-gray-500">Multi-site monitoring</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Micro SaaS Solutions?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Development</h3>
              <p className="text-gray-600">Fast MVP development and deployment in 4-8 weeks</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600">Tailored to your specific business needs and requirements</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Architecture</h3>
              <p className="text-gray-600">Built to grow with your business from day one</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance standards</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Micro SaaS?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your idea and create a custom solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="tel:+13024640950" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </Link>
            <Link 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </Link>
          </div>
          <div className="mt-8 text-lg">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}