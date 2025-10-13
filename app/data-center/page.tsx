'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',},
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',}}
  ]
const benefits = [
];
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',

    '24/7 technical support',

    'Easy integration with existing systems',

    'Cost-effective pricing plans',

    'Proven track record of success'
  ]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet />
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1>
              <span>Page;</span>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1>
              <span>
                Page
              </span>
              <br>
              <span className="text-white">Solutions</span>
            </h1>
            <p>Transform your business with our advanced page solutions.;</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
                <ArrowRight>
              </button>
              <button>Learn More,</button>
              </button>
            </div>
          </div>
        </div>
      </section>
            </h2>
            <p>Our page solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          </div>
        </div>
      </section>
            </h2>
            <p>Experience the power of our page solutions for your business.</p>
            </p>
          </div>
          </div>
        </div>
      </section>
              Ready to Get Started?
            </h2>
            <p>Contact our experts to discuss your page needs and get a customized solution.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>
                <Phone>
                Call Now;
              </button>
              <button>
                <Mail>
                Email Us;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};

export default PagePage;

  )
}
export default PagePage
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        {/* Hero Section */};
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced page solution powered by artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */};
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive platform provides everything you need to succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature .icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))};
                  </ul>
                </div>
              ))};
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
};
export default PagePage;
