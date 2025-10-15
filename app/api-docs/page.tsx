import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Code,
  Globe,
  Shield,
  Zap,
  Target,
  FileText,
  Users,
  Box,
  Clock,
  Sparkles,
  Check,
  Star,
  ArrowRight,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  ThumbsUp,
  Lock,
  Award,
  TrendingUp,
  BarChart3
} from "lucide-react";

const ApiDocsPage = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/v1/health',
      description: 'Check API health status',
      parameters: [],
      response: '200 OK'
    },
    {
      method: 'POST',
      path: '/api/v1/analyze',
      description: 'Analyze data with AI',
      parameters: ['data', 'type'],
      response: '201 Created'
    },
    {
      method: 'GET',
      path: '/api/v1/reports',
      description: 'Get analytics reports',
      parameters: ['date_range', 'format'],
      response: '200 OK'
    }
  ];

  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for our AI-powered services and solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  API Documentation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive API documentation for our AI-powered services and solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get API Key
                </Link>
                <Link
                  to="#demo"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Try API
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-300">
                Explore our RESTful API endpoints
              </p>
            </div>
            
            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                  <div className="flex items-center mb-6">
                    <span className={`px-3 py-1 rounded text-sm font-semibold mr-4 ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-cyan-400 font-mono text-lg">{endpoint.path}</code>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-300 text-lg mb-2">{endpoint.description}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="mr-4">Response: {endpoint.response}</span>
                      {endpoint.parameters.length > 0 && (
                        <span>Parameters: {endpoint.parameters.join(', ')}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                API Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Powerful capabilities designed to meet your integration needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  RESTful Design
                </h3>
                <p className="text-gray-300">
                  Clean, intuitive REST API design following industry best practices
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Secure Authentication
                </h3>
                <p className="text-gray-300">
                  OAuth 2.0 and API key authentication for secure access
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  High Performance
                </h3>
                <p className="text-gray-300">
                  Fast response times and high availability for your applications
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to get your API key and start integrating
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get API Key
              </Link>
              <Link
                to="#demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Examples
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApiDocsPage;