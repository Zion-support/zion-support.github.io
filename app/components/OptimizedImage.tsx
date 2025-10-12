'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

const OptimizedImagePage: React.FC = () => {
import { ArrowRight } from 'lucide-react';
ursor/analyze-improve-and-deploy-application-edcb
ursor/analyze-improve-and-deploy-application-edcb
'use client'

import { ArrowRight } from 'lucide-react';
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <Helmet />
        <title   />OptimizedImage | Zion Tech Group</title>
        <meta name="description" content="Professional OptimizedImage services by Zion Tech Group. Advanced AI and IT solutions for your business." / / />
        <meta name="keywords" content="OptimizedImage, AI solutions, IT services, Zion Tech Group, optimizedimage" / / />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent"  />OptimizedImage
              </span>
              <br / />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Transform your business with our advanced optimizedimage solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
                Learn More
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Why Choose Our OptimizedImage?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Our optimizedimage solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
            {features.map((feature, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3"   />{feature.title}</h3>
                <p className="text-gray-300">
              {feature.description}</p>
              </div>
            ))}
          </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4" />
              Key Benefits
  </
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Experience the power of our optimizedimage solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <div key="{index}" className="flex items-startspace-x-3" />
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <p className="text-gray-300text-lg">
              {benefit}</p>
              </div>
            ))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-4 xlmx-autotext-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xllp-8md:p-12">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100mb-8">
              Contact our experts to discuss your optimizedimage needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-centerjustify-center" />
                <Phone className="mr-2h-5w-5" />
                Call Now
  </
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-centerjustify-center" />
                <Mail className="mr-2h-5w-5" />
                Email Us
  </
            </div>
        </div>
      </section>
    </div>
  );
};

export default OptimizedImagePage;
