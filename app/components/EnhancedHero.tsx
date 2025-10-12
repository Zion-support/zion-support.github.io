import React from 'react';
'use client'

import { Helmet } from 'react-helmet-async';

const componentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      {/* Background Effects */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }}  /></div>
      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Left Content */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2" /></h1>
              Transform Your Business with{' '}
              <span className="w-5h-5ml-2" />AI & IT Solutions;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Harness the power of cutting-edge artificial intelligence and information technology;
              to drive innovation, efficiency, and growth in your organization.
            </p>
            {/* Benefits List */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h3 className="text-lgfont-semiboldtext-whitemb-4"  >Why Choose Us?</h3>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300" /></div>
                    <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                    <span className="text-sm"  >{benefit}</span>
                  </div>
                ))}
              </div>
            {/* CTA Buttons */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <button className="w-5h-5ml-2" /></button>
                Get Started;
                <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
              </button>
              <button className="w-5h-5ml-2">Learn More;
              </button>
            </div>
            {/* Contact Info */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center text-gray-300" /></div>
                  <contact.icon className="h-5w-5tex t-c yan-400mr-3flex-shrink-0"  /></contact>
                  <div /></div>
                    <div className="text-smfont-medium text-white"  >{contact.title}</div>
                    <div className="text-xs text-gray-400"  >{contact.details}</div>
                </div>
              ))}
            </div>
        </div>
        {/* Right Content - Visual Elements */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {/* Floating Cards */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Brain className="w-5h-5ml-2" /></Brain>
                <h3 className="text-lgfont-bold text-whitemb-2"  >AI Solutions</h3>
                <p className="text-sm text-gray-300">Machine Learning & Analytics</p>
              </div>
            <div className="absolute top-20 right-0 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2 xl backdrop-blur-sm borderborder-purple-500/30animate-float" style="{{" animationDelay: '1 s' }} /></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Shield className="w-5h-5ml-2" /></Shield>
                <h3 className="text-lgfont-bold text-whitemb-2"  >Security</h3>
                <p className="text-sm text-gray-300">Cybersecurity & Compliance</p>
              </div>
            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2 xl backdrop-blur-sm borderborder-green-500/30animate-float" style="{{" animationDelay: '2 s' }} /></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Globe className="w-5h-5ml-2" /></Globe>
                <h3 className="text-lgfont-bold text-whitemb-2"  >Cloud Services</h3>
                <p className="text-sm text-gray-300">Infrastructure & Migration</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default componentsPage;
