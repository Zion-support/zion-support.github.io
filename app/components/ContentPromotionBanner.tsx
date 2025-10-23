'use client'
import React from 'react'
import {CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp} from 'lucide-react'
constContentPromotionBanner: React.FC= () =>{constfeatures= [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
   },
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
   },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
   },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment with local support and compliance'
   }
  ]
  constbenefits= [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '2 4/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  conststats= [
    {icon: Users,
      value: '10000+',
      label: 'Happy Customers',
      description: 'Businesses trust our solutions'
   },
    {icon: TrendingUp,
      value: '9 9.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
   },
    {icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by clients'
   }
  ]
  return(<divclassName="bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900py-20px-4"><divclassName="max-w-7xlmx-auto">{/* HeroSection */}
      <divclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6">Transform Your Businesswith<spanclassName="text-transparent bg-clip-text bg-gradient-to-rfrom-blue-400to-purple-400">AISolutions</spa></h><spanclassName="text-xl text-gray-300max-w-3 xlmx-automb-8"></className="text-xl text-gray-300max-w-3 xlmx-automb-8">Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 0 to-blue-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-allduration-300transformhover:scale-105"></className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 0 to-blue-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-allduration-300transformhover:scale-105"><ZapclassName="w-5h-5" />Get Started Today

          <spanclassName="inline-flex items-center gap-2 bg-white/10text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20transition-allduration-300"></className="inline-flex items-center gap-2 bg-white/10text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20transition-allduration-300"><ArrowRightclassName="w-5h-5" />Learn More

        </di></di>{/* StatsSection */}
      <divclassName="grid grid-cols-1 md:grid-cols-3 gap-8mb-16">{stats.map((statindex) => (
         <divkey={index}className="text-center"><divclassName="w-1 6 h-16bg-gradient-to-r from-purple-500to-blue-500rounded-full mx-auto mb-4 flexitems-centerjustify-center"><stat.iconclassName="w-8h-8text-white" /></di><divclassName="text-3 xl font-boldtext-whitemb-2">{stat.value}</di><divclassName="text-gray-400text-sm">{stat.label}</di><divclassName="text-gray-500text-xsmt-1">{stat.description}</di></di>))}
      </di><divclassName="bg-white/10backdrop-blur-smrounded-xlp-8"><divclassName="grid grid-cols-1md:grid-cols-2gap-8"><di v><h3className="text-2 xlfont-boldmb-4">WhyChooseUs?</h><ulclassName="space-y-2">{benefits.slice(0 4).map((benefitindex) => (
               <likey={index}className="flexitems-center"><CheckCircleclassName="h-5 w-5text-green-400mr-3flex-shrink-0" /><spanclassName="text-purple-100">{benefit}</spa></l>))}
            </u></di><di v><h3className="text-2 xlfont-boldmb-4">AdditionalBenefits</h><ulclassName="space-y-2">{benefits.slice(4).map((benefitindex) => (
               <likey={index}className="flexitems-center"><CheckCircleclassName="h-5 w-5text-green-400mr-3flex-shrink-0" /><spanclassName="text-purple-100">{benefit}</spa></l>))}
            </u></di></di><divclassName="text-centermt-8"><spanclassName="bg-white text-purple-600px-8 py-3rounded-lghover:bg-gray-100transition-colorsfont-semibold"></className="bg-white text-purple-600px-8 py-3rounded-lghover:bg-gray-100transition-colorsfont-semibold">Get Started Today

        </di></di>{/* FeaturesGrid */}
      <divclassName="gridmd:grid-cols-2 lg:grid-cols-4 gap-8mb-16">{features.map((featureindex) => (
         <divkey={index}className="text-center"><divclassName="w-1 6 h-16bg-gradient-to-r from-blue-500to-purple-500rounded-xl flex items-center justify-centermx-automb-4"><feature.iconclassName="w-8h-8text-white" /></di><h3className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300text-sm">{feature.description}</p></di>))}
      </di>{/* BenefitsSection */}
      <divclassName="bg-white/10backdrop-blur-lg rounded-2 xl p-8 borderborder-white/20mb-16"><divclassName="text-centermb-8"><h2className="text-3 xl font-boldtext-whitemb-4">Why ChooseOurSolutions?</h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></className="text-xl text-gray-300max-w-3xlmx-auto">We provide comprehensive AI and IT solutions that deliver real results for your business.
          </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-6">{/* StatsSection */}
      <divclassName="gridmd:grid-cols-3 gap-8mb-16">{stats.map((statindex) => (
         <divkey={index}className="text-center"><divclassName="flexjustify-centermb-4"><stat.iconclassName="w-1 2h-12text-blue-400" /></di><divclassName="text-4 xl font-boldtext-whitemb-2">{stat.value}</di><divclassName="text-lg font-semibold text-gray-300mb-1">{stat.label}</di><divclassName="text-smtext-gray-400">{stat.description}</di></di>))}
      </di>{/* BenefitsSection */}
      <divclassName="bg-white/5 backdrop-blur-sm rounded-2 xl p-8mb-16"><h2className="text-3 xl font-bold text-whitetext-centermb-8">Why ChooseOurSolutions?</h><divclassName="gridmd:grid-cols-2gap-4">{benefits.map((benefitindex) => (
           <divkey={index}className="flexitems-centergap-3"><CheckCircleclassName="w-5 h-5 text-green-400flex-shrink-0" /><spanclassName="text-gray-300">{benefit}</spa></di>))}
        </di></di>{/* CTASection */}
      <divclassName="text-center"><divclassName="bg-gradient-to-r from-purple-600to-blue-600rounded-2 xlp-12"><spanclassName="text-3 xl font-boldtext-whitemb-4"></className="text-3 xl font-boldtext-whitemb-4">Ready to Transform Your Business?
          </h><spanclassName="text-xl text-white/90mb-8 max-w-2xlmx-auto"></className="text-xl text-white/90mb-8 max-w-2xlmx-auto">Join the future of business technology. Get started with our AI solutions today and see the difference.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"></className="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"><ZapclassName="w-5h-5" /><spa n>StartFreeTrial</spa></butto><spanclassName="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"></spa></className="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105">Schedule Demo

          </di></di></di><divclassName="text-center"><spanclassName="px-8 py-4 bg-gradient-to-r from-cyan-50 0 to-purple-500text-white font-semibold rounded-fullhover:from-cyan-600 hover:to-purple-600transition-allduration-300inline-flexitems-center"></spa></className="px-8 py-4 bg-gradient-to-r from-cyan-50 0 to-purple-500text-white font-semibold rounded-fullhover:from-cyan-600 hover:to-purple-600transition-allduration-300inline-flexitems-center">Get Started Now
        <ArrowRightclassName="w-5h-5ml-2" /></butto></di></di>)
}
export defaultContentPromotionBanner</butto></butto></butto></butto>