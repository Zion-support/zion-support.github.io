'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ServiceCardPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ServiceCard | Zion Tech Group</title>
        <meta name="description" content="Professional ServiceCard services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ServiceCard, AI solutions, IT services, Zion Tech Group, servicecard" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ServiceCard
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced servicecard solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section$1>
        <div$2>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ServiceCard?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our servicecard solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        ))
      </section>

      {/* Benefits Section */}
      <section$1>
        <div$2>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our servicecard solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          ))
        </div>
      </section>

      {/* CTA Section */}
      <section$1>
        <div$2>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your servicecard needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          ))
        </div>
      </section>
import {ArrowRight, CheckCircle}}from 'lucide-react';
interface ServiceCardProps {title: string;,}
  description: string;,
  features: string[],
  price?: string;
  popular?: boolean;
  onSelect?: () => void,
  className?: string;}const ServiceCard: React.FC<ServiceCardProps> = ({,
  title,
  description,
  features,
  price,
  popular = false,
  onSelect,
  className = ''}) => {return(<div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover: bg-white/10 transition-all duration-300 group ${className,)}${popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''}`}>{popular && (</div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-purple-400 text-sm font-semibold">Most Popular</span>
        </div>
      )} <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover: text-purple-400 transition-colors">,
          {title} </h3>
        <p className="text-gray-300 text-sm">{description</p>}</p>
      </div>
      <div className="space-y-2 mb-6">{features.map((feature, index) => (</div>
          <div key={index}className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature</span>}</span>
'use client'
import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
interface ServiceCardProps {
    title: string
  description: string
  features: string[]
  price?: string
  popular?: boolean
  onSelect?: () => void,
  className?: string
  }
const ServiceCard: React.FC<ServiceCardProps> = ()
}) => {
  return (
    </ServiceCardProps>< className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group ${className} ${$2 />
      popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''
    }`}>
      {popular && (
        </div><div className="flex items-center gap-2 mb-4">
          </div><div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-purple-400 text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <div className="mb-4">
        </div><h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
  return ()
      )}
      <div className="mb-4" /></div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors" /></h3>
          {title}
        </h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      <div className="space-y-2 mb-6">
        {features.map((feature, index) => (
          </div><div key={index} className="flex items-center gap-2">
            </div><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      {price && (
        <div className="mb-6">
          <div className="text-3xl font-bold text-white mb-1">{price</div>}</div>
          <div className="text-gray-400 text-sm">per month</div>
        </div>
      )}
      {onSelect && (
        <button;
          onClick={onSelect}className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group">,</button>
          Get Started;
          <ArrowRight className="w-4 h-4 group-hover: translate-x-1 transition-transform" />,
        </button>
      )}
    </div>
  );
};

export default ServiceCardPage;
export default ServiceCardPage;
export default ServiceCard;
  </ServiceCardProps>
          </div><div className="text-3xl font-bold text-white mb-1">{price}</div>
          <div className="text-gray-400 text-sm">per month</div>
        </div>
      )}
      {onSelect && (
        <$2 />
          onClick={onSelect}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group">
          Get Started
          </button><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  )
}
export default ServiceCard
  </ServiceCardProps>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
  )
}
export default ServiceCard</div></div></div></div></div></div></div></div></span></span></p></h3>
