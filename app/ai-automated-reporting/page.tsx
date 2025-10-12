import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, FileText, TrendingUp, Clock, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomatedReportingPage: React.FC = () => {
  const benefits = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically without manual intervention.',
      features: ['Scheduled reports', 'Multiple formats', 'Custom templates', 'Email delivery']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Insights',
      description: 'Leverage AI to predict trends and provide actionable business intelligence.',
      features: ['Trend analysis', 'Forecasting', 'Risk assessment', 'Opportunity identification']
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights with real-time data processing and visualization.',
      features: ['Live dashboards', 'Instant updates', 'Real-time alerts', 'Dynamic charts']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your sensitive business data.',
      features: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance']
    }
  ];

  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your data to identify patterns and insights.',
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs.',
      icon: <FileText className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Automated Scheduling',
      description: 'Set up automated report generation and delivery on your preferred schedule.',
      icon: <Clock className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Multi-format Export',
      description: 'Export reports in PDF, Excel, CSV, and other popular formats.',
      icon: <FileText className="w-6 h-6 text-orange-400" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The AI automated reporting has saved us hours of manual work every week. The insights are incredibly valuable.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      content: 'Real-time analytics have transformed our decision-making process. We can now respond to changes instantly.',
      rating: 5,
      avatar: 'MC'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Automated Reporting - Zion Tech Group"
        description="Transform your business intelligence with AI-powered automated reporting. Generate insights, predict trends, and make data-driven decisions."
        keywords="AI reporting, automated reports, business intelligence, data analytics, predictive insights, real-time analytics"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Automated Reporting</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business intelligence with AI-powered automated reporting. Generate insights, predict trends, 
              and make data-driven decisions with our advanced analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Reporting</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI-powered reporting platform delivers intelligent insights and automates your data analysis workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <ul className="space-y-1">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powerful features designed to streamline your reporting and analytics workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Trusted by leading companies for our innovative AI reporting solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Automate Your Reporting?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business intelligence with AI-powered automated reporting. Get started today and see the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomatedReportingPage;