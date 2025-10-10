'use client;
';
import React from 'react;';
';';
import { Helmet } from 'react-helmet-async;

import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Database, TrendingUp } from lucide-react;

;

const BusinessIntelligencePage: React.FC = () => {const features = [;;;

    {';
      icon: BarChart,';';
      title: 'Advanced Analytics,
      description: Comprehensive data analysis and visualization tools for informed decision making
    },
    {
      icon: Database,';
      title: 'Data Integration,
      description: Seamless integration with multiple data sources and real-time processing
    },
    {
      icon: TrendingUp,';
      title: 'Performance Metrics,
      description: Track KPIs and business performance with customizable dashboards
    },
    {
      icon: Brain,';
      title: 'AI-Powered Insights,
      description: Machine learning algorithms for predictive analytics and trend analysis
    }
];
  ];

;

const benefits = [;;
';
    'Advanced AI technology integration,';
    'Real-time processing and analytics,';
    'Enterprise-grade security and compliance,';
    'Scalable and flexible solutions,';
    '24/7 technical support,';
    'Easy integration with existing systems,';
    'Cost-effective pricing plans,
    Proven track record of success];
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>"
      <Helmet>"
        <title>Business Intelligence | Zion Tech Group</title>";
        <meta name="description" content="Professional Business Intelligence services by Zion Tech Group. Advanced AI and IT solutions for your business. />";
        <meta name="keywords" content="business intelligence, data analytics, AI solutions, IT services, Zion Tech Group />
      </Helmet>

      {/* Hero Section */}
";
      <section className="relative py-20 px-4>";
        <div className="max-w-7xl mx-auto text-center>";
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>"
            Business Intelligence"
          </h1>";
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
            Transform your data into actionable insights with our advanced business intelligence solutions.
            Powered by cutting-edge AI technology and industry expertise.
          </p>
        </div>
      </section>
"
      {/* Features Section */}"
";
      <section className="py-16 px-4>";
        <div className="max-w-7xl mx-auto>";
          <div className="text-center mb-12>";
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>"
              Why Choose Our Business Intelligence?"
            </h2>";
            <p className="text-xl text-gray-300 max-w-3xl mx-auto>
              Our business intelligence solutions deliver unmatched performance, security, and scalability.
            </p>"
          </div>"
          ";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>"
            {features.map((feature, index) => ("
";
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10>";
                <feature.icon className="w-12 h-12 text-purple-400 mb-4 />";
                <h3 className="text-xl font-semibold text-white mb-2>{feature.title}</h3>";
                <p className="text-gray-300>{feature.description}</p>
              </div>
            ))          </div>
        </div>
      </section>
"
      {/* Benefits Section */}"
";
      <section className="py-16 px-4 bg-white/5>";
        <div className="max-w-7xl mx-auto>";
          <div className="text-center mb-12>";
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>"
              Key Benefits"
            </h2>";
            <p className="text-xl text-gray-300 max-w-3xl mx-auto>
              Experience the power of our business intelligence solutions for your business.
            </p>"
          </div>"
          ";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6>"
            {benefits.map((benefit, index) => ("
";
              <div key={index} className="flex items-center space-x-3>";
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 />";
                <span className="text-gray-300>{benefit}</span>
              </div>
            ))          </div>
        </div>
      </section>
"
      {/* CTA Section */}"
";
      <section className="py-16 px-4>";
        <div className="max-w-4xl mx-auto text-center>";
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>"
            Ready to Get Started?"
          </h2>";
          <p className="text-xl text-purple-100 mb-8>"
            Contact our experts to discuss your business intelligence needs and get a customized solution."
          </p>";
          <div className="flex flex-col sm:flex-row gap-4 justify-center>";
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center>";
              <Phone className="mr-2 h-5 w-5 />"
              Call Now"
            </button>";
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center>";
              <Mail className="mr-2 h-5 w-5 />
              Email Us
            </button>
          </div>
        </div>
      </section>
    </div>)"
export default BusinessIntelligencePage;"
';";