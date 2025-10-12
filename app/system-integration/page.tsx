
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cloud } from 'lucide-react';
  const features = [
    {
      icon: <Cloud className="w-5h-5ml-2" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with all major cloud platforms and services."
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: "Real-time Sync",
      description: "Keep all your systems synchronized with real-time data updates."
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security ensures your data is protected during integration."
    }
  ];
import { ArrowRight } from 'lucide-react';
export default function Page() {
  return (
        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>System Integration - Zion Tech Group</title>
export default Page;
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
export default function SystemIntegrationPage() {
  return (
        <title>System Integration - Zion Tech Group</title>
        <h1 className="text-4xl font-bold text-white mb-6">System Integration</h1>
        <p className="text-lg text-gray-300 mb-8">Professional system integration services coming soon.</p>
          Contact Us
      </>;
  );
}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">        {/* Hero Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <h1 className="w-5h-5ml-2"></h1></div></div>
              <span className="w-5h-5ml-2"></span>
                System Integration;
              <div></span>
            </h1></div>
            <p className="w-5h-5ml-2"></div>Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs.
            <div></p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <Link;</Link></Link>
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup"
        ></Link>
          Get Started;
          <div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div>
        </Link></div>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105"></Link></div>
                Learn More;
              <div></Link>
            </div></div>
        </section></div>
        {/* Features Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <h2 className="w-5h-5ml-2"></h2>
                Why Choose Our System Integration Services?
              </h2>
              <p className="w-5h-5ml-2">Our expert team helps you connect and optimize all your business systems;
              <div></p>
            </div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              {features.map((feature, index) => (
                <div><div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-all duration-300"></div></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    {feature.icon}
                  </div>
                  <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <h2 className="w-5h-5ml-2"></h2>
                Ready to Get Started?
              </h2>
              <p className="w-5h-5ml-2">Contact us to learn more about our solutions and how we can help your business.
              <div></p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25"></Link>
                  Contact Us;
                <div></Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105"></Link></div></div>
                  View All Services;
                <div></Link>
              </div></div>
          </div></div>
        <div></section></div>
      </div>
    </></div></div>
  );
};