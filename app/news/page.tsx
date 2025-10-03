import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Eye
} from 'lucide-react';

export const metadata = {
  title: 'News & Updates - Zion Tech Group | Latest AI Industry News',
  description: 'Stay updated with the latest AI industry news, company updates, and breakthrough announcements from Zion Tech Group.',
  keywords: 'AI news, technology updates, industry news, AI breakthroughs, Zion Tech Group news',
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            News & Updates
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Stay informed with the latest AI industry news, breakthrough announcements, and company updates from Zion Tech Group.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured News</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest breakthrough announcements and major industry developments
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    January 15, 2026
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <Tag className="w-4 h-4 mr-1" />
                    Breakthrough
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Zion Tech Group Achieves $500B ROI Breakthrough</h3>
              <p className="text-gray-600 mb-4">
                Revolutionary quantum AI system delivers unprecedented 1000x performance gains for Fortune 500 client, 
                marking the largest AI transformation success in enterprise history.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  5 min read
                </div>
                <Link to="/blog/ai-2026-november-quantum-superintelligence-breakthrough" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    January 10, 2026
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <Tag className="w-4 h-4 mr-1" />
                    Product Launch
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Autonomous Enterprise Platform 2.0 Released</h3>
              <p className="text-gray-600 mb-4">
                Next-generation autonomous enterprise platform achieves 95% automation across all business processes, 
                setting new industry standards for AI-powered business operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  3 min read
                </div>
                <Link to="/services/autonomous-enterprise" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recent announcements, industry insights, and company updates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3">
                <div className="flex items-center text-sm text-gray-600 mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  Jan 8, 2026
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <Tag className="w-4 h-4 mr-1" />
                  Research
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quantum AI Research Breakthrough</h3>
              <p className="text-gray-600 text-sm mb-3">
                Our research team publishes groundbreaking paper on quantum-enhanced neural networks, 
                achieving 50x faster training speeds.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  2.1k views
                </div>
                <Link to="/blog/quantum-ai-research-breakthrough" className="text-purple-600 font-semibold hover:text-purple-700 text-sm">
                  Read →
                </Link>
              </div>
            </article>

            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3">
                <div className="flex items-center text-sm text-gray-600 mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  Jan 5, 2026
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <Tag className="w-4 h-4 mr-1" />
                  Partnership
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategic Partnership with Microsoft</h3>
              <p className="text-gray-600 text-sm mb-3">
                Zion Tech Group announces strategic partnership with Microsoft to accelerate 
                enterprise AI adoption across Fortune 500 companies.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  3.5k views
                </div>
                <Link to="/blog/microsoft-partnership-announcement" className="text-blue-600 font-semibold hover:text-blue-700 text-sm">
                  Read →
                </Link>
              </div>
            </article>

            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3">
                <div className="flex items-center text-sm text-gray-600 mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  Jan 3, 2026
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Tag className="w-4 h-4 mr-1" />
                  Award
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Innovation Award 2026</h3>
              <p className="text-gray-600 text-sm mb-3">
                Zion Tech Group recognized as "AI Innovation Leader of the Year" at the Global 
                AI Summit for breakthrough enterprise solutions.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  1.8k views
                </div>
                <Link to="/blog/ai-innovation-award-2026" className="text-green-600 font-semibold hover:text-green-700 text-sm">
                  Read →
                </Link>
              </div>
            </article>

            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3">
                <div className="flex items-center text-sm text-gray-600 mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  Dec 28, 2025
                </div>
                <div className="flex items-center text-sm text-orange-600">
                  <Tag className="w-4 h-4 mr-1" />
                  Expansion
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">European Office Launch</h3>
              <p className="text-gray-600 text-sm mb-3">
                Zion Tech Group opens new European headquarters in London to serve growing 
                demand for AI solutions across the EMEA region.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  2.3k views
                </div>
                <Link to="/blog/european-office-launch" className="text-orange-600 font-semibold hover:text-orange-700 text-sm">
                  Read →
                </Link>
              </div>
            </article>

            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3">
                <div className="flex items-center text-sm text-gray-600 mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  Dec 25, 2025
                </div>
                <div className="flex items-center text-sm text-red-600">
                  <Tag className="w-4 h-4 mr-1" />
                  Security
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Security Framework Release</h3>
              <p className="text-gray-600 text-sm mb-3">
                New comprehensive AI security framework provides enterprise-grade protection 
                for AI systems and sensitive data processing.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  1.9k views
                </div>
                <Link to="/blog/ai-security-framework-release" className="text-red-600 font-semibold hover:text-red-700 text-sm">
                  Read →
                </Link>
              </div>
            </article>

            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3">
                <div className="flex items-center text-sm text-gray-600 mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  Dec 22, 2025
                </div>
                <div className="flex items-center text-sm text-indigo-600">
                  <Tag className="w-4 h-4 mr-1" />
                  Research
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Neural Architecture Search Breakthrough</h3>
              <p className="text-gray-600 text-sm mb-3">
                Revolutionary neural architecture search algorithm reduces AI model development 
                time by 90% while improving accuracy.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  2.7k views
                </div>
                <Link to="/blog/neural-architecture-search-breakthrough" className="text-indigo-600 font-semibold hover:text-indigo-700 text-sm">
                  Read →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert analysis and commentary on the latest AI industry trends and developments
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">AI Market Trends 2026</h3>
                  <p className="text-sm text-gray-600">Industry Analysis</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of AI market trends, growth projections, and emerging opportunities 
                across industries in 2026 and beyond.
              </p>
              <Link to="/blog/ai-market-trends-2026" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Read Analysis
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">AI Governance & Ethics</h3>
                  <p className="text-sm text-gray-600">Expert Commentary</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Expert insights on AI governance frameworks, ethical considerations, and best practices 
                for responsible AI development and deployment.
              </p>
              <Link to="/blog/ai-governance-ethics-2026" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                Read Commentary
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest AI news, industry insights, and company updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Media Inquiries</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <span>press@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}