'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Building2,
  Handshake,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Target,
  BarChart
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      description: 'Strategic cloud and AI partnership',
      category: 'Technology',
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      description: 'AI and machine learning solutions',
      category: 'AI/ML',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '💼',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise',
      tier: 'Gold'
    },
    {
      name: 'NVIDIA',
      logo: '🎮',
      description: 'GPU acceleration and AI hardware',
      category: 'Hardware',
      tier: 'Silver'
    },
    {
      name: 'Salesforce',
      logo: '💼',
      description: 'CRM and business automation',
      category: 'Software',
      tier: 'Silver'
    }
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Collaborate with industry leaders to deliver cutting-edge solutions'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets through our partner network'
    },
    {
      icon: Award,
      title: 'Certified Solutions',
      description: 'Verified and certified integrations with top platforms'
    },
    {
      icon: Users,
      title: 'Joint Innovation',
      description: 'Co-develop innovative solutions with our partners'
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
            Our Partners
       </h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> </h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> </h1>
         <//h1> <//h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Strategic partnerships with industry leaders to deliver world-class AI and IT solutions
        </p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"> </p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"> </p>
      <//p> <//p> </div>
    <//div> <//div> </section>

      {/* Partners Grid */}
     <//section> <//section><section className="py-16 bg-white/5">
       </section className="py-16 bg-white/5"> </section className="py-16 bg-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
          </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the world's leading technology companies to deliver exceptional solutions
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 relative"
              >
               </div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 relative"
              > </div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 relative"
              ><div className="text-center">
                 </div className="text-center"> </div className="text-center"><div className="text-6xl mb-4">{partner.lo</div className="text-6xl mb-4">g</div className="text-6xl mb-4">o</div>}</div>
                 <//div> <//div><h3 className="text-2xl font-bold text-white mb-2">{partner.nam</h3 className="text-2xl font-bold text-white mb-2">e</h3 className="text-2xl font-bold text-white mb-2">}</h3>
                 <//h3> <//h3><p className="text-gray-300 mb-4">{partner.descriptio</p className="text-gray-300 mb-4">n</p className="text-gray-300 mb-4">}</p>

                 <//p> <//p><div className="flex items-center justify-center space-x-4 mb-4">
                  </div className="flex items-center justify-center space-x-4 mb-4"> </div className="flex items-center justify-center space-x-4 mb-4"> </div><span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                      partner.tier === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}>
                      {partner.tier}
                 </span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                      partner.tier === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}> </span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                      partner.tier === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}> </span>
                   <//span> <//span><span className="text-sm text-gray-400">{partner.catego</span className="text-sm text-gray-400">r</span className="text-sm text-gray-400">y</span>}</span>
                <//span> <//span> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Benefits Section */}
     <//section> <//section><section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
       </section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"> </section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Benefits
          </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why partner with Zion Tech Group? Discover the advantages of joining our ecosystem
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                </div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"> </div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"> </div><benefit.icon className="w-8 h-8 text-white" />
              </benefit.icon className="w-8 h-8 text-white" /> </benefit.icon className="w-8 h-8 text-white" /> </div>
               <//div> <//div><h3 className="text-xl font-bold text-white mb-4">{benefit.titl</h3 className="text-xl font-bold text-white mb-4">e</h3 className="text-xl font-bold text-white mb-4">}</h3>
               <//h3> <//h3><p className="text-gray-300">{benefit.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* CTA Section */}
     <//section> <//section><section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
       </section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"> </section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become a Partner
        </h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> </h2>
         <//h2> <//h2><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our partner ecosystem and unlock new opportunities for growth and innovation
        </p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"> </p>

         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Apply to Partner
             </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"> </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"><ArrowRight className="w-5 h-5 ml-2" />
          </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /> </button>
           <//button> <//button><button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Learn More
          </button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"> </button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"> </button>
        <//button> <//button> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

     <//section> <//section><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default PartnersPage<//div>;<//div>