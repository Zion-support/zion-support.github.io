import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Book,
  FileText,
  Video,
  Lightbulb,
  Clock
} from 'lucide-react';

export const metadata = {
  title: 'AI Resources - Zion Tech Group | Guides, Case Studies & Documentation',
  description: 'Comprehensive AI resources including implementation guides, case studies, white papers, webinars, and technical documentation.',
  keywords: 'AI resources, AI guides, case studies, white papers, webinars, AI documentation, AI implementation',
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            AI Resources & Knowledge Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Access comprehensive AI resources, implementation guides, case studies, and technical documentation to accelerate your AI journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Expert Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/guides" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              Browse Implementation Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resource Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of AI resources organized by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation Guides</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guides for implementing AI solutions in your organization, from planning to deployment.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  AI Strategy Planning
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Technology Selection
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Deployment Best Practices
                </div>
              </div>
              <Link to="/guides" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Browse Guides
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                Real-world success stories and detailed case studies from our enterprise clients and AI transformations.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Fortune 500 Transformations
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  ROI Success Stories
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Industry Breakthroughs
                </div>
              </div>
              <Link to="/case-studies" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                View Case Studies
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">White Papers</h3>
              <p className="text-gray-600 mb-4">
                In-depth research papers and technical analyses on AI trends, technologies, and industry insights.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  AI Research Reports
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Technology Deep Dives
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Industry Analysis
                </div>
              </div>
              <Link to="/white-papers" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center">
                Read White Papers
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Webinars & Videos</h3>
              <p className="text-gray-600 mb-4">
                Expert-led webinars, product demonstrations, and educational videos on AI technologies and best practices.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Live Expert Sessions
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Product Demos
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Training Materials
                </div>
              </div>
              <Link to="/webinars" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center">
                Watch Webinars
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive technical documentation, API references, and developer resources for our AI platforms.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  API Documentation
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Technical Specifications
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Developer Guides
                </div>
              </div>
              <Link to="/docs" className="text-red-600 font-semibold hover:text-red-700 flex items-center">
                Browse Documentation
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600 mb-4">
                Connect with AI practitioners, share knowledge, and get support from our community of experts.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Expert Forums
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Knowledge Sharing
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Peer Support
                </div>
              </div>
              <Link to="/community" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center">
                Join Community
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful resources to help you get started with AI transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AI Implementation Roadmap</h3>
                  <p className="text-sm text-gray-600">Complete Guide</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to planning and executing AI transformation in your organization.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  45 min read
                </div>
                <Link to="/guides/ai-implementation-roadmap" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Fortune 500 AI Success</h3>
                  <p className="text-sm text-gray-600">Case Study</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                How a Fortune 500 company achieved $150M ROI with our AI solutions.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  20 min read
                </div>
                <Link to="/case-studies/fortune-500-ai-transformation-success" className="text-green-600 font-semibold hover:text-green-700">
                  View Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Quantum AI Whitepaper</h3>
                  <p className="text-sm text-gray-600">Research Paper</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Deep dive into quantum computing applications in enterprise AI systems.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  60 min read
                </div>
                <Link to="/white-papers/quantum-ai-enterprise" className="text-purple-600 font-semibold hover:text-purple-700">
                  Download PDF →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AI Security Best Practices</h3>
                  <p className="text-sm text-gray-600">Webinar</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Expert insights on securing AI systems and protecting sensitive data.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  45 min video
                </div>
                <Link to="/webinars/ai-security-best-practices" className="text-orange-600 font-semibold hover:text-orange-700">
                  Watch Now →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">API Documentation</h3>
                  <p className="text-sm text-gray-600">Technical Docs</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Complete API reference for integrating with our AI platforms and services.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Interactive docs
                </div>
                <Link to="/docs/api" className="text-indigo-600 font-semibold hover:text-indigo-700">
                  View Docs →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AI Community Forum</h3>
                  <p className="text-sm text-gray-600">Community</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Join discussions with AI practitioners and get answers from our expert community.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  2.5k+ members
                </div>
                <Link to="/community" className="text-teal-600 font-semibold hover:text-teal-700">
                  Join Forum →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help Finding the Right Resource?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our AI experts can help you find the right resources for your specific needs and challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Expert Help
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/content-hub" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Browse Content Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}