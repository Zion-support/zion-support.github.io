
import Link from 'next/link';
import { Metadata } from 'next';
import FeaturesShowcase from './components/FeaturesShowcase';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI Solutions & Technology Services',
  description: 'Leading technology company specializing in AI solutions, cloud infrastructure, and innovative software development services.',
  keywords: 'AI solutions, cloud infrastructure, software development, technology services',
  openGraph: {
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
    type: 'website',
  }};
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI & IT Solutions for the Future
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-business-advisor"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all shadow-lg hover:shadow-purple-500/25"
              >
                🤖 AI Business Advisor
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Service - AI Business Advisor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl border border-purple-500/30 p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                <span className="text-2xl">✨</span>
                <span className="text-purple-300 text-sm font-medium">NEW AI Feature</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Business Advisor
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Get personalized AI solution recommendations in seconds. Our intelligent chatbot analyzes your business needs and suggests the perfect AI tools to transform your operations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">✓</span>
                  Instant analysis of your business challenges
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">✓</span>
                  Personalized recommendations with ROI projections
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">✓</span>
                  Implementation timelines and cost estimates
                </li>
              </ul>
              <Link
                href="/ai-business-advisor"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Try AI Business Advisor →
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-30"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">U</div>
                      <div className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-3 text-white text-sm">
                        I run a retail business with high customer service costs
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm">🤖</div>
                      <div className="flex-1 bg-slate-700/50 rounded-2xl p-3 text-gray-100 text-sm">
                        <p className="font-semibold mb-2">Perfect! I recommend:</p>
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3 border border-purple-500/30">
                          <p className="font-semibold text-white mb-1">Conversational AI</p>
                          <p className="text-xs text-gray-400">ROI: 250-400% | Timeline: 1-2 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Popular AI Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/ai-powered-devops" className="group bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">AI-Powered DevOps</h3>
            <p className="text-gray-400">Automate your development and operations workflows</p>
          </Link>
          
          <Link href="/ai-powered-email-analyzer" className="group bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">AI Email Analyzer</h3>
            <p className="text-gray-400">Intelligent email management and insights</p>
          </Link>
          
          <Link href="/ai-services" className="group bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">View All Services</h3>
            <p className="text-gray-400">Explore our complete AI solutions portfolio</p>
          </Link>
        </div>
      </div>

      {/* All Features Showcase */}
      <FeaturesShowcase />
    </div>
  );
}
