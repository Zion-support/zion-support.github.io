<<<<<<< HEAD
import React from 'react';
=======

import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import { ArrowRight } from 'lucide-react';
'use client'

  const features = [
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Main | Zion Tech Group</title>
        <meta name="description" content="Professional Main services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="main, AI solutions, IT services, Zion Tech Group, main" />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5 h-5ml-2" />
              <span className="w-5 h-5ml-2" />Main
              </span>
              <br />
              <span className="text-white"  >Solutions</span>
            </h1>
            <p className="w-5 h-5ml-2">Transform your business with our advanced main solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <button className="w-5 h-5ml-2" />
                Get Started
                <ArrowRight className="w-5 h-5ml-2" />
              </button>
              <button className="w-5 h-5ml-2">Learn More
              </button>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />Why Choose Our Main?
            </h2>
            <p className="w-5 h-5ml-2">Our main solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <feature.icon className="h-6w-6text-white"  />
                </div>
                <h3 className="text-xl font-semiboldtext-whitemb-3"  >{feature.title}</h3>
=======

        <title>5G Data Analytics - Zion Tech Group</title>

        <title>Main | Zion Tech Group</title>

      {/* Hero Section */}
    
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent">Main

              <span className="text-white">Solutions</span>
              Transform your business with our advanced main solutions.
              Powered by cutting-edge AI technology and industry expertise.
    
                Get Started
    
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300">Learn More

      {/* Features Section */}
    
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Why Choose Our Main?

              Our main solutions deliver unmatched performance, security, and scalability.

 (
    
                <h3 className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h3>

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                <p className="text-gray-300">{feature.description}</p>
            ))}
<<<<<<< HEAD
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />Key Benefits
            </h2>
            <p className="w-5 h-5ml-2">Experience the power of our main solutions for your business.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {benefits.map((benefit, index) => (
              <div key="{index}" className="flexitems-startspace-x-3" />
                <CheckCircle className="w-5 h-5ml-2" />
=======

      {/* Benefits Section */}
    
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Key Benefits

              Experience the power of our main solutions for your business.
    
 (
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                <p className="text-gray-300text-lg">{benefit}</p>
            ))}
<<<<<<< HEAD
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />Ready to Get Started?
            </h2>
            <p className="w-5 h-5ml-2">Contact our experts to discuss your main needs and get a customized solution.
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <button className="w-5 h-5ml-2" />
                <Phone className="w-5 h-5ml-2" />
                Call Now
              </button>
              <button className="w-5 h-5ml-2" />
                <Mail className="w-5 h-5ml-2" />
                Email Us
              </button>
            </div>
        </div>
      </section>
    </div>
  )
};
=======

      {/* CTA Section */}
    
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Ready to Get Started?

              Contact our experts to discuss your main needs and get a customized solution.
    
                Call Now
    
                Email Us
    
  )
};
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
