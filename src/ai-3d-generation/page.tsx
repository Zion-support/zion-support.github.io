import React from 'react';
import {Play, CheckCircle, Camera, Zap} from 'lucide-react';;
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';

constAI3 DGenerationPage: React.FC= () =>{constfeatures= [
    '3 D Model Generation',
    'Animation Creation',
    'Texture Mapping',
    'Rendering',
    'VR/AR Support',
    'Export Formats',
    'AI Texturing',
    'Lighting Setup',
    'Material Library',
    'Scene Composition'
  ]

  constbenefits= [
    'Professional3D content',
    'Time savings',
    'No3D skills needed',
    'High quality output',
    'Cost-effective',
    'Scalable production'
  ]

  constpricingPlans= [
    {
      name: 'Starter',
      price: '$29 9',
      period: '/month',
      features: ['5 models/month', 'Basic textures', 'Standard quality', 'Email support'],
      popular: false
   },
    {name: 'Professional',
      price: '$49 9',
      period: '/month',
      features: ['Unlimited models', 'Premium textures', '4 K rendering', 'API access', 'Priority support'],
      popular: true
   },
    {name: 'Enterprise',
      price: '$99 9',
      period: '/month',
      features: ['Everything in Pro', 'Custom models', 'White-label', 'Dedicated support', 'Commercial license'],
      popular: false
   }
  ];

  return (
  <><SEOOptimizertitle="AI3D Generation Studio - Create3D Models & Animations with AI | ZionTechGroup"
        description="Create professional 3 D models, animations, and virtual environments with AI3D Generation Studio. No3D skills needed, starting at$299/month."
        keywords={['AI3D generation', '3 D models', '3 D animation', 'VR AR content', '3 D automation', 'AI 3D']}
        canonicalUrl="https://ziontechgroup.com/ai-3d-generation"
      /><divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><Navigation /><mainclassName="container mx-autopx-4py-16pt-24">{/* HeroSection */}
        <sectionclassName="text-centermb-16"><divclassName="max-w-4xlmx-auto"><divclassName="flex items-centerjustify-centermb-6"><divclassName="w-1 6 h-16bg-gradient-to-br from-purple-500to-pink-600rounded-xl flex items-centerjustify-centermr-4"><CameraclassName="w-8h-8text-white" /></di><spanclassName="text-4 xlmd:text-5 xl font-boldtext-whiteneon-text"></className="text-4 xlmd:text-5 xl font-boldtext-whiteneon-text">AI3D Generation Studio
              </h></di><spanclassName="text-xl text-gray-300mb-8"></className="text-xl text-gray-300mb-8">Create3D models, animations, and virtual environments with AI
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
                 className="cyber-button px-8 py-4 text-lg font-semiboldhover:scale-105transition-allduration-300"
                >Start Free Trial
              </a><ahref="#demo"
                 className="flex items-center gap-2 border-2 border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
                ><PlayclassName="w-5h-5" />View Gallery
              </a></di></di></sectio>{/* FeaturesSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xl font-bold text-white mb-8text-centerneon-text"></className="text-3 xl font-bold text-white mb-8text-centerneon-text">AI3D Generation Features
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">{features.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><divclassName="flexitems-centermb-4"><CheckCircleclassName="w-5 h-5 text-green-400mr-3" /><h3className="text-lgfont-semiboldtext-white">{feature}</h></di></di>))}
          </di></sectio>{/* BenefitsSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xl font-bold text-white mb-8text-centerneon-text"></className="text-3 xl font-bold text-white mb-8text-centerneon-text">Why Choose AI3D Generation Studio?
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{benefits.map((benefitindex) => (
             <divkey={index}className="text-center"><divclassName="w-1 6 h-16bg-gradient-to-br from-cyan-400to-purple-600rounded-full flex items-center justify-centermx-automb-4"><ZapclassName="w-8h-8text-white" /></di><h3className="text-lg font-semiboldtext-whitemb-2">{benefit}</h></di>))}
          </di></sectio>{/* PricingSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xl font-bold text-white mb-8text-centerneon-text"></className="text-3 xl font-bold text-white mb-8text-centerneon-text">Simple, Transparent Pricing
          </h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricingPlans.map((planindex) => (
             <divkey={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-40 0':''}`}>{plan.popular && (
                  <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><divclassName="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                    </di></di>)}
                <divclassName="text-centermb-6"><h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><divclassName="flexitems-baselinejustify-center"><spanclassName="text-4 xl font-boldtext-cyan-400">{plan.price}</spa><spanclassName="text-gray-400ml-1">{plan.period}</spa></di></di><ulclassName="space-y-3mb-8">{plan.features.map((featurefeatureIndex) => (
                   <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-4 h-4text-green-400mr-3flex-shrink-0" />{feature}
                    </l>))}
                </u><ahref="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300${
                      plan.popular
                        ? 'cyber-button'
                         : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-slate-90 0'
                  }`}
                  >Get Started
                </a></di>))}
          </di></sectio>{/* CTASection */}
        <sectionclassName="text-centermb-16"><divclassName="cyber-card p-12max-w-4xlmx-auto"><spanclassName="text-3 xl font-bold text-whitemb-4neon-text"></className="text-3 xl font-bold text-whitemb-4neon-text">Ready to Create Amazing3D Content?
            </h><spanclassName="text-xl text-gray-300mb-8"></className="text-xl text-gray-300mb-8">Join leading companies using AI3D generation technology
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
                 className="cyber-button px-8 py-4 text-lg font-semiboldhover:scale-105transition-allduration-300"
                >Start Your Free Trial
              </a><ahref="tel:+13024640950"
                 className="flex items-center gap-2 border-2 border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
                ><spa n>Call +13024640950</spa></a></di></di></sectio></mai><Footer /></di></>
  );
};

export default AI3 DGenerationPage;
