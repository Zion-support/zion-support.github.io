

import React from 'react';
<<<<<<< HEAD

=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
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

                <p className="text-gray-300">{feature.description}</p>
            ))}

      {/* Benefits Section */}
    
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Key Benefits

              Experience the power of our main solutions for your business.
    
 (

                <p className="text-gray-300text-lg">{benefit}</p>
            ))}

      {/* CTA Section */}
    
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Ready to Get Started?

              Contact our experts to discuss your main needs and get a customized solution.
    
                Call Now
    
                Email Us
    
  )
};

=======
export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>Main - Zion Tech Group</title>
        <meta name="description" content="Professional main by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Main</h1>
          <p className="text-lg text-gray-300 mb-8">Professional main coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
