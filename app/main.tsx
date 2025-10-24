<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import App from "./App";
import "./index.css";
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
export default function Main({ className = '', children, ...props }: MainProps) {
  return (
<<<<<<< HEAD
    <div className={`main-component ${className}`} {...props}>
      {children}
=======
    <>
    
  </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-6"></h1>
            Main | Zion Tech Group</h1>
          </h1>
          <p className="text-lg text-gray-300 mb-8"></p>
            Professional main | zion tech group services coming soon.</p>
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hove,
  r:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          ></Link>
            Contact Us</Link>
            <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
          </Link>
        </div>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
=======
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './globals.css';

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

=======
import React  from 'react';
import { ArrowRight } from 'lucide-react';
'use client'

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
const MainPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
=======
import React from 'react';

import {ArrowRight} from 'lucide-react';

  const features = [{icon: Brain,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
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
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international businesses',
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
=======
      description: 'Worldwide deployment and support for international businesses',}];
  const benefits = ['Advanced AI technology integration',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
<<<<<<< HEAD
    'Proven track record of success'
  ];
<<<<<<< HEAD

=======
    'Proven track record of success'];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Main | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional Main services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="main, AI solutions, IT services, Zion Tech Group, main" />
=======
        <meta name="description" content="Professional Main services by Zion Tech Group. Advanced AI and IT solutions for your business."   /></meta>
        <meta name="keywords" content="main, AI solutions, IT services, Zion Tech Group, main"   /></meta>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Main
=======
      <section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent"  />Main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              </span>
              <br />
              <span className="text-white">Solutions</span>
<<<<<<< HEAD
=======
      <section className="w-5h-5ml-2"   /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Main;
              </span>
              <br   /></br>
              <span className="text-white"  >Solutions</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced main solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
=======
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <button className="w-5h-5ml-2"   /></button>
                Get Started;
                <ArrowRight className="w-5h-5ml-2"   /></ArrowRight>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Transform your business with our advanced main solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div></div></div></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Main?
=======
      <section className="w-5h-5ml-2"   /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2"   />Why Choose Our Main?
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Why Choose Our Main?
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our main solutions deliver unmatched performance, security, and scalability.
            </p>
<<<<<<< HEAD
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
=======
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-all duration-300"   /></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <feature.icon className="h-6w-6text-white"    /></feature>
                </div>
                <h3 className="text-xl font-semiboldtext-whitemb-3"  >{feature.title}</h3>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
                <p className="text-gray-300">{feature.description}</p>
              </div>
  ))}
=======
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
            {features.map((feature, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
=======
      <section className="w-5h-5ml-2"   /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2"   />Key Benefits;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Key Benefits
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our main solutions for your business.
            </p>
<<<<<<< HEAD
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
=======
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <div key="{index}" className="flex items-startspace-x-3" />
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
=======
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-4 xlmx-autotext-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xllp-8md:p-12">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Ready to Get Started?
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your main needs and get a customized solution.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
=======
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-centerjustify-center" />
                <Phone className="mr-2h-5w-5" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
<<<<<<< HEAD
              </button>
            </div></div></div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    </div>
  );
}
=======
              <div key={index} className="flexitems-startspace-x-3"   /></div>
                <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
  ))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="w-5h-5ml-2"   /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2"   />Ready to Get Started?
            </h2>
            <p className="w-5h-5ml-2">Contact our experts to discuss your main needs and get a customized solution.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <button className="w-5h-5ml-2"   /></button>
                <Phone className="w-5h-5ml-2"   /></Phone>
                Call Now;
              </button>
              <button className="w-5h-5ml-2"   /></button>
                <Mail className="w-5h-5ml-2"   /></Mail>
                Email Us;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              </button>
            </div>
        </div>
      </section>
    </div>
  )

};
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Main | Zion Tech Group</title>
        <meta name="description" content="Professional Main services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="main, AI solutions, IT services, Zion Tech Group, main" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Main</h1>
          <p className="text-lg text-gray-300 mb-8">Professional main services coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
