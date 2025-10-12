import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Cloud, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for businesses worldwide. Transform your operations with cutting-edge technology." />
      </Helmet>
      
      <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 >
        {/* Hero Section */}
        <div className=r e"" lative overflow-hidden">
          <div className="m a"x-w-7xlmx-auto px-4 sm:px-6 lg:px-8 py-24 >
            <div className="t e"xt-center">
              <h1 className="t e"xt-4xlmd:text-6xl font-bold text-white mb-6 >
                Transform Your Business with
                <span className="b l"" ock text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  AI & IT Solutions
                </span>
              </h1>
              <p className="t e"xt-xltext-gray-300 mb-8 max-w-3xl mx-auto >
                Leading the future of technology with innovative AI and IT solutions that drive growth, efficiency, and digital transformation.
              </p>
              <div className="f l"" ex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact" className="i n"line-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors >
                  Get Started
                  <ArrowRight className="m l"-2 h-5 w-5"/>
                </Link>
                <Link
                  to= /services"
                  className="i n"line-flexitems-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors ">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="p y""" -24 bg-slate-800/50">
          <div className="m a"x-w-7xlmx-auto px-4 sm:px-6 lg:px-8 >
            <div className="t e"" xt-center mb-16">
              <h2 className="t e"xt-3xlmd:text-4xl font-bold text-white mb-4 >
                Why Choose Zion Tech Group?
              </h2>
              <p className="t e" xt-xl text-gray-300 max-w-2xl mx-auto"">
                We deliver cutting-edge solutions that transform businesses and drive innovation.
              </p>
            </div>
            
            <div className="g r"idmd:grid-cols-2 lg:grid-cols-4 gap-8 >
              <div className="t e"xt-center">
                <div className="b g"-blue-600rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 >
                  <Brain className=h-8w-8" t e xt-white" /">
                </div>
                <h3 className="t e"xt-xlfont-semibold text-white mb-2 >AI Solutions</h3>
                <p className="t e" xt-gray-300"">Advanced artificial intelligence solutions tailored to your business needs.</p>
              </div>
              
              <div className="t e"xt-center>
                <div className=""bg" -purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4>
                  <Shield className=h-8w-8te xt-white /">
                </div>
                <h3 className="t e"" xt-xl font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="t e"xt-gray-300>Comprehensive security solutions to protect your digital assets.</p">
              </div>
              
              <div className="t e"xt-center">
                <div className="b g"-green-600rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 >
                  <Cloud className=h-8w-8" t e xt-white" /">
                </div>
                <h3 className="t e"xt-xlfont-semibold text-white mb-2 >Cloud Migration</h3>
                <p className="t e" xt-gray-300"">Seamless cloud migration and infrastructure optimization.</p>
              </div>
              
              <div className="t e"xt-center>
                <div className=""bg" -yellow-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4>
                  <Zap className=h-8w-8te xt-white /">
                </div>
                <h3 className="t e"" xt-xl font-semibold text-white mb-2">Performance</h3>
                <p className="t e"xt-gray-300>Optimized solutions for maximum performance and efficiency.</p">
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p y""" -24">
          <div className="m a"x-w-7xlmx-auto px-4 sm:px-6 lg:px-8 text-center >
            <h2 className="t e"" xt-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="t e"xt-xltext-gray-300 mb-8 max-w-2xl mx-auto >
              Let's discuss how our AI and IT solutions can drive your success.
            </p>
            <Link
              to= /contact"
              className="i n"line-flexitems-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 >
              Start Your Journey
              <ArrowRight className="m l"" -2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}