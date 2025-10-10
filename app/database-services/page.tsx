'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, Database, Users, Settings, BarChart, Target, TrendingUp, CheckCircle, ArrowRight, Star, Clock } from 'lucide-react';

const PagePage: React.FC = () => {
  
const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
  },
    {
    icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
  },
    {
    icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
  },
    {
    icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'  }
  }]
const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions"   />
        <meta name="keywords" content="AI, artificial intelligence, business solutions"   />
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
            <p>
              Transform your business with our advanced page solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button>
                Get Started
                <ArrowRight>
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Learn More,
              </button>
            </div>
          </div>
        </div>
      </section>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Our page solutions deliver unmatched performance, security, and scalability.</p>
          </div>
          </div>
        </div>
      </section>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Experience the power of our page solutions for your business.</p>
          </div>
          </div>
        </div>
      </section>
              Ready to Get Started?;
            </h2>
            <p>
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button>
                <Phone>
                Call Now
              </button>
              <button>
                <Mail>
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default PagePage