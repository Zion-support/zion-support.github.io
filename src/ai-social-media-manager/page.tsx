import {CheckCircle, Phone, TrendingUp} from 'lucide-react';
import React from 'react';

import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';

constAISocialMediaManagerPage: React.FC= () =>{constfeatures= [
    'AI-powered content creation and curation',
    'Smart scheduling across all platforms',
    'Advanced analytics and performance insights',
    'Audience intelligence and targeting',
    'Hashtag optimization and trend analysis',
    'Competitor analysis and benchmarking',
    'Automated engagement and responses',
    'Multi-platform campaign management'
  ];

  constbenefits= [
    '20 0% increase in engagement rates',
    '2 0+ hours saved per week',
    '4 0% improvement in reach',
    '5 0% better ROI on campaigns',
    '9 5% content quality consistency',
    '6 0% faster content creation'
  ];

  constplatforms= [
    { name: 'Facebook', icon: '📘', users: '2.9 B'},
    {name: 'Instagram', icon: '📷', users: '1.4 B'},
    {name: 'Twitter', icon: '🐦', users: '450 M'},
    {name: 'LinkedIn', icon: '💼', users: '900 M'},
    {name: 'TikTok', icon: '🎵', users: '1 B'},
    {name: 'YouTube', icon: '📺', users: '2.7 B'}
  ];

  return (
  <><Navigation /><divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><mainclassName="container mx-autopx-4py-16pt-24">{/* HeroSection */}
        <sectionclassName="text-centermb-16"><spanclassName="text-5 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></spa></className="text-5 xlmd:text-6 xl font-bold text-whitemb-6neon-text">AI Social Media Manager
          </h><spanclassName="text-xl text-cyan-400mb-8"></spa></className="text-xl text-cyan-400mb-8">Automate your social media with AI-powered content creation
          </p><spanclassName="text-lg text-gray-300max-w-4 xlmx-automb-8"></spa></className="text-lg text-gray-300max-w-4 xlmx-automb-8">Transform your social media presence with our intelligent AI system that creates, 
              schedules, and optimizes content across all platforms automatically.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="cyber-button px-8 py-4text-lgfont-semibold"
              >Start Free Trial
            </a><ahref="tel:+13024640950"
               className="flex items-center gap-2 border-2 border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
              ><PhoneclassName="w-5h-5" />+1 3024640950</a></di></sectio>{/* FeaturesSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text">AI-Powered Features
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-6">{features.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><CheckCircleclassName="w-8 h-8 text-green-400mb-4" /><h3className="text-lg font-semiboldtext-whitemb-2">{feature}</h></di>))}
          </di></sectio>{/* PlatformsSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text">Supported Platforms
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">{platforms.map((platformindex) => (
             <divkey={index}className="quantum-card p-6 text-centerhover:scale-105transition-allduration-300"><divclassName="text-4xlmb-4">{platform.icon}</di><h3className="text-xl font-semiboldtext-whitemb-2">{platform.name}</h><pclassName="text-cyan-400">{platform.users}users</p></di>))}
          </di></sectio>{/* BenefitsSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text">Proven Results
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">{benefits.map((benefitindex) => (
             <divkey={index}className="cyber-card p-6 text-centerhover:scale-105transition-allduration-300"><TrendingUpclassName="w-12h-1 2text-cyan-400mx-automb-4" /><pclassName="text-lgtext-whitefont-semibold">{benefit}</p></di>))}
          </di></sectio>{/* ContactSection */}
        <sectionclassName="text-center"><spanclassName="text-3 xlmd:text-4 xl font-bold text-whitemb-8neon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-whitemb-8neon-text">Ready to Automate Your Social Media?
          </h><spanclassName="text-lg text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-lg text-gray-300mb-8 max-w-2xlmx-auto">Join thousands of businesses already using AI to transform their social media presence.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="cyber-button px-8 py-4text-lgfont-semibold"
              >Get Started
            </a><ahref="tel:+13024640950"
               className="flex items-center gap-2 border-2 border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
              ><PhoneclassName="w-5h-5" />+1 30 24640950</a></di></sectio></mai><Footer /></di></>
  );
};

export default AISocialMediaManagerPage;