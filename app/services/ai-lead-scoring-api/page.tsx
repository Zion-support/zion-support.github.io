import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, TrendingUp, Target, Rocket, Phone, Mail, MapPin, ExternalLink, Play, Activity, Target as TargetIcon } from 'lucide-react';
export const metadata = {
  title: 'AI Lead Scoring API — Zion Tech Group | $299/month',
  description: 'Real-time lead scoring API with 95% accuracy using behavioral, firmographic, and engagement signals. Score leads instantly with AI-powered intelligence.',
  keywords: 'AI lead scoring, lead qualification, sales automation, CRM integration, behavioral analysis, lead intelligence',
  openGraph: {
    title: 'AI Lead Scoring API — Zion Tech Group | $299/month',
    description: 'Real-time lead scoring API with 95% accuracy using behavioral, firmographic, and engagement signals.',
    type: 'website',
    url: 'https://ziontechgroup.com/services/ai-lead-scoring-api',
    images: [
      {
        url: '/og-ai-lead-scoring.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Lead Scoring API - Zion Tech Group',
      },
    ],
  },
};

export default function AILeadScoringAPIPage() {
  const features = [
    'Real-time lead scoring with 95% accuracy',
    'Behavioral analysis and engagement tracking',
    'Firmographic data integration',
    'Explainable AI scores with reasoning',
    'Custom scoring models for your business',
    'API-first architecture for easy integration'
  ];

  const benefits = [
    '95% scoring accuracy',
    '50% increase in qualified leads',
    '30% reduction in sales cycle',
    '80% improvement in conversion rates',
    '250% ROI in 2 months',
    '24/7 API Support'
  ];

  const useCases = [
    'CRM integration for automatic lead scoring',
    'Marketing automation platform enhancement',
    'Sales team lead prioritization',
    'Lead qualification and routing',
    'Customer success prediction',
    'Account-based marketing optimization'
  ];

  const integrations = [
    'Salesforce - Native CRM integration',
    'HubSpot - Marketing automation',
    'Pipedrive - Sales pipeline management',
    'Zapier - Workflow automation',
    'Webhooks - Real-time data sync',
    'Custom API endpoints'
  ];

  const technologies = [
    'Machine Learning - Advanced algorithms',
    'Python - Core processing engine',
    'FastAPI - High-performance API',
    'PostgreSQL - Data storage',
    'Redis - Caching layer',
    'Docker - Containerized deployment'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <Activity className="w-4 h-4 mr-2" />
                AI Micro SaaS Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                AI Lead Scoring API
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Real-time lead scoring API with 95% accuracy using behavioral, firmographic, and engagement signals. 
                Score leads instantly with AI-powered intelligence and explainable results.
              </p>
              
              {/* Pricing */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold">$299/month</div>
                    <div className="text-blue-100">Our Special Price</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg line-through text-blue-200">$499/month</div>
                    <div className="text-blue-100">Market Price</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">250% ROI in 2 months</div>
                  <div className="text-sm text-blue-100">Implementation: 1-2 days</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="#demo" 
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5" />
                  API Documentation
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">📈</div>
                  <h3 className="text-2xl font-bold text-gray-900">Lead Scoring Dashboard</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Scoring Accuracy</span>
                    <span className="text-green-600 font-bold">95%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Qualified Leads</span>
                    <span className="text-blue-600 font-bold">+50%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="text-gray-700">Sales Cycle</span>
                    <span className="text-purple-600 font-bold">-30%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="text-gray-700">Conversion Rate</span>
                    <span className="text-orange-600 font-bold">+80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI capabilities for accurate lead scoring and qualification
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Feature {index + 1}</h3>
                    <p className="text-gray-600 text-sm">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Measurable Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our AI-powered lead scoring
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Benefit {index + 1}</h3>
                  <p className="text-gray-600 text-sm">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ideal use cases for AI Lead Scoring API
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-200">
                <TargetIcon className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite CRM and marketing tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <ExternalLink className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">{integration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge AI and modern technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <Cpu className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Score Leads with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already using our AI Lead Scoring API to improve their sales performance
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-3 text-white" />
                <h4 className="font-bold text-white mb-2">Call Us</h4>
                <a href="tel:+13024640950" className="text-lg font-semibold text-blue-100 hover:text-white">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-3 text-white" />
                <h4 className="font-bold text-white mb-2">Email Us</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-lg font-semibold text-blue-100 hover:text-white">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-3 text-white" />
                <h4 className="font-bold text-white mb-2">Visit Us</h4>
                <div className="text-lg font-semibold text-blue-100">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Free Trial
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}