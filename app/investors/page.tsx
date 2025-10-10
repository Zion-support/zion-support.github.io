'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  TrendingUp,
  DollarSign,
  BarChart,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Target,
  Building2,
  PieChart,
  Activity
} from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const metrics = [
    {
      icon: DollarSign,
      value: '$50M+',
      label: 'Total Funding Raised',
      description: 'Series A and B rounds completed'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Revenue Growth',
      description: 'Year-over-year growth rate'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Enterprise Clients',
      description: 'Fortune 500 companies served'
    },
    {
      icon: Globe,
      value: '25+',
      label: 'Countries',
      description: 'Global market presence'
    }
  ];

  const investors = [
    {
      name: 'Sequoia Capital',
      logo: '🌲',
      type: 'Lead Investor',
      description: 'Series A lead investor with deep AI expertise'
    },
    {
      name: 'Andreessen Horowitz',
      logo: '🚀',
      type: 'Series B',
      description: 'Strategic partner for enterprise growth'
    },
    {
      name: 'Accel Partners',
      logo: '⚡',
      type: 'Growth Capital',
      description: 'Supporting international expansion'
    },
    {
      name: 'GV (Google Ventures)',
      logo: '🔍',
      type: 'Strategic',
      description: 'Technology and market access partnership'
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Named "AI Company of the Year" by TechCrunch'
    },
    {
      icon: Shield,
      title: 'Financial Stability',
      description: 'Strong balance sheet with 24+ months runway'
    },
    {
      icon: Zap,
      title: 'Rapid Growth',
      description: 'Consistent 300%+ revenue growth year-over-year'
    },
    {
      icon: Target,
      title: 'Market Leadership',
      description: 'Leading position in enterprise AI solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />

      {/* Hero Section */}
     </Navigation /> </Navigation /><section className="relative py-20 overflow-hidden">
       </section className="relative py-20 overflow-hidden"> </section className="relative py-20 overflow-hidden"><div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

       <//div> <//div><div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div><h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Investors
       </h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> </h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> </h1>
         <//h1> <//h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Building the future of AI with world-class investors and strategic partners
        </p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"> </p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"> </p>
      <//p> <//p> </div>
    <//div> <//div> </section>

      {/* Metrics Section */}
     <//section> <//section><section className="py-16 bg-white/5">
       </section className="py-16 bg-white/5"> </section className="py-16 bg-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Company Metrics
          </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strong financial performance and market position
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                </div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"> </div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"> </div><metric.icon className="w-8 h-8 text-white" />
              </metric.icon className="w-8 h-8 text-white" /> </metric.icon className="w-8 h-8 text-white" /> </div>
               <//div> <//div><div className="text-4xl font-bold text-cyan-400 mb-2">{metric.val</div className="text-4xl font-bold text-cyan-400 mb-2">u</div className="text-4xl font-bold text-cyan-400 mb-2">e</div>}</div>
               <//div> <//div><div className="text-lg font-semibold text-white mb-2">{metric.lab</div className="text-lg font-semibold text-white mb-2">e</div className="text-lg font-semibold text-white mb-2">l</div>}</div>
               <//div> <//div><div className="text-gray-300 text-sm">{metric.descripti</div className="text-gray-300 text-sm">o</div className="text-gray-300 text-sm">n</div>}</div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Investors Section */}
     <//section> <//section><section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
       </section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"> </section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Investors
          </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Backed by leading venture capital firms and strategic investors
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investors.map((investor, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 text-center"
              >
               </div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 text-center"
              > </div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 text-center"
              ><div className="text-6xl mb-4">{investor.lo</div className="text-6xl mb-4">g</div className="text-6xl mb-4">o</div>}</div>
               <//div> <//div><h3 className="text-2xl font-bold text-white mb-2">{investor.nam</h3 className="text-2xl font-bold text-white mb-2">e</h3 className="text-2xl font-bold text-white mb-2">}</h3>
               <//h3> <//h3><div className="text-cyan-400 font-semibold mb-3">{investor.ty</div className="text-cyan-400 font-semibold mb-3">p</div className="text-cyan-400 font-semibold mb-3">e</div>}</div>
               <//div> <//div><p className="text-gray-300">{investor.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Highlights Section */}
     <//section> <//section><section className="py-16 bg-white/5">
       </section className="py-16 bg-white/5"> </section className="py-16 bg-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investment Highlights
          </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key factors that make Zion Tech Group an attractive investment opportunity
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                </div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"> </div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"> </div><highlight.icon className="w-8 h-8 text-white" />
              </highlight.icon className="w-8 h-8 text-white" /> </highlight.icon className="w-8 h-8 text-white" /> </div>
               <//div> <//div><h3 className="text-xl font-bold text-white mb-4">{highlight.titl</h3 className="text-xl font-bold text-white mb-4">e</h3 className="text-xl font-bold text-white mb-4">}</h3>
               <//h3> <//h3><p className="text-gray-300">{highlight.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* CTA Section */}
     <//section> <//section><section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
       </section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"> </section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Investment Opportunities
        </h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> </h2>
         <//h2> <//h2><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Interested in investing in the future of AI? Contact our investor relations team
        </p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"> </p>

         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Contact Investor Relations
             </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"> </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"><ArrowRight className="w-5 h-5 ml-2" />
          </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /> </button>
           <//button> <//button><button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Download Pitch Deck
          </button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"> </button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"> </button>
        <//button> <//button> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

     <//section> <//section><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default InvestorsPage<//div>;<//div>