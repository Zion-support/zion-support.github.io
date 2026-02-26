
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4 animate-fade-in">
              <span className="text-purple-400 text-sm font-medium">✨ Powered by AI</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 max-w-4xl mx-auto font-light animate-fade-in">
              Advanced AI & IT Solutions for the Future
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link
                href="/ai-business-advisor"
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all shadow-lg hover:shadow-purple-500/50 hover:scale-105 duration-200"
              >
                <span className="mr-2">🤖</span>
                AI Business Advisor
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-purple-500/50 text-base font-semibold rounded-xl text-white bg-purple-600/20 hover:bg-purple-600/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all hover:scale-105 duration-200"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-base font-semibold rounded-xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all hover:scale-105 duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Service - AI Business Advisor */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="relative bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-pink-900/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/40 backdrop-blur-sm">
                <span className="text-xl">✨</span>
                <span className="text-purple-300 text-sm font-semibold">NEW AI Feature</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                AI Business Advisor
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Get personalized AI solution recommendations in seconds. Our intelligent chatbot analyzes your business needs and suggests the perfect AI tools to transform your operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-gray-300">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">✓</span>
                  <span className="pt-0.5">Instant analysis of your business challenges</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">✓</span>
                  <span className="pt-0.5">Personalized recommendations with ROI projections</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">✓</span>
                  <span className="pt-0.5">Implementation timelines and cost estimates</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  href="/ai-business-advisor"
                  className="group inline-flex items-center px-8 py-4 bg-white text-purple-900 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-200"
                >
                  Try AI Business Advisor
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/40 shadow-2xl">
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg">U</div>
                      <div className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 text-white text-sm shadow-lg">
                        I run a retail business with high customer service costs
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg shadow-lg">🤖</div>
                      <div className="flex-1 bg-slate-700/60 backdrop-blur-sm rounded-2xl p-4 text-gray-100 text-sm">
                        <p className="font-semibold mb-3 text-white">Perfect! I recommend:</p>
                        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-4 border border-purple-500/40 shadow-lg">
                          <p className="font-bold text-white mb-2">Conversational AI</p>
                          <p className="text-xs text-gray-300">ROI: 250-400% | Timeline: 1-2 months</p>
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Popular AI Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our most popular AI-powered solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Link 
            href="/ai-powered-devops" 
            className="group relative bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">AI-Powered DevOps</h3>
              <p className="text-gray-400 leading-relaxed">Automate your development and operations workflows</p>
            </div>
          </Link>
          
          <Link 
            href="/ai-powered-email-analyzer" 
            className="group relative bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📧</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">AI Email Analyzer</h3>
              <p className="text-gray-400 leading-relaxed">Intelligent email management and insights</p>
            </div>
          </Link>
          
          <Link 
            href="/ai-services" 
            className="group relative bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">View All Services</h3>
              <p className="text-gray-400 leading-relaxed">Explore our complete AI solutions portfolio</p>
            </div>
          </Link>
        </div>
      </div>

      {/* All Features Showcase */}
      <FeaturesShowcase />
    </div>
  );
}
