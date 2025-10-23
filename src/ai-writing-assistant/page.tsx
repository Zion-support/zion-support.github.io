'use client';
import React from 'react';
import {PenTool, FileText, CheckCircle, Phone, Star} from 'lucide-react';;

constAIWritingAssistantPage: React.FC= () =>{constfeatures= [
    {
      icon: PenTool,
      title: 'AI Content Generation',
      description: 'Generate high-quality articles, blog posts, marketing copy, and social media content using advanced GPT-4 technology.',
      benefit: '10 x faster content creation'
   },
    {icon: FileText,
      title: 'Multi-Format Support',
      description: 'Create content in anyformat: blog posts, emails, ads, product descriptions, press releases, and more.',
      benefit: '5 0+ content templates'
   },
    {icon: Zap,
      title: 'Smart Optimization',
      description: 'Automatically optimize content for SEO, readability, and engagement with AI-powered suggestions and improvements.',
      benefit: '4 0% better engagement rates'
   },
    {icon: Target,
      title: 'Brand Voice Training',
      description: 'Train the AI to match your brand voice, tone, and style for consistent messaging across all content.',
      benefit: '10 0% brand consistency'
   },
    {icon: Clock,
      title: 'Real-time Collaboration',
      description: 'Work with your team in real-time with live editing, comments, and version control for seamless collaboration.',
      benefit: '5 0% faster team workflows'
   },
    {icon: Brain,
      title: 'Content Intelligence',
      description: 'Get AI insights on content performance, audience engagement, and optimization opportunities.',
      benefit: 'Data-driven content strategy'
   }
  ];

  constpricingPlans= [
    {name: 'Writer',
      price: '$2 9',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        '1 0,000words per month',
        'Basic AI writing',
        '5 content templates',
        'Standard support',
        'Basic SEO optimization',
        'Single user account'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$7 9',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        '5 0,000words per month',
        'Advanced AI writing',
        '5 0+ content templates',
        'Priority support',
        'Advanced SEO tools',
        'Team collaboration',
        'Brand voice training',
        'Content analytics'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$19 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Premium AI models',
        'Custom templates',
        'Dedicated support',
        'API access',
        'Custom integrations',
        'White-label options',
        'Advanced analytics'
      ],
      popular: false
   }
  ];

  constuseCases= [
    {title: 'Blog Content',
      description: 'Create engaging blog posts that rank high in search engines and drive traffic to your website.',
      icon: FileText,
      results: '30 0% increase in organic traffic'
   },
    {title: 'Marketing Copy',
      description: 'Generate compelling ad copy, email campaigns, and social media posts that convert.',
      icon: Target,
      results: '4 5% higher conversion rates'
   },
    {title: 'Product Descriptions',
      description: 'Write persuasive product descriptions that highlight benefits and drive sales.',
      icon: Zap,
      results: '6 0% more product sales'
   },
    {title: 'Email Marketing',
      description: 'Create personalized email sequences that nurture leads and increase customer retention.',
      icon: Mail,
      results: '3 5% higher open rates'
   }
  ];

  consttestimonials= [
    {name: 'Jessica Martinez',
      company: 'Content Marketing Pro',
      role: 'Content Manager',
      content: 'AI Writing Assistant helped us scale our content production by 50 0% while maintaining quality. Our blog traffic tripled in6months.',
      rating:5},
    {name: 'David Kim',
      company: 'E-commerce Solutions',
      role: 'Marketing Director',
      content: 'The brand voice training feature is incredible. All our content now sounds consistent and professional across all channels.',
      rating:5},
    {name: 'Lisa Thompson',
      company: 'Digital Agency',
      role: 'Creative Director',
      content: 'We can now deliver client content3x faster. The AI suggestions help us improve our writing and stay ahead of deadlines.',
      rating:5}
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">{/* HeroSection */}
    <sectionclassName="container mx-autopx-4py-16pt-24"><divclassName="text-centermb-16"><divclassName="inline-flex items-center justify-center w-20h-20bg-gradient-to-r from-cyan-40 0to-purple-500rounded-fullmb-6"><PenToolclassName="w-10h-10text-white" /></di><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6">AI Writing Assistant
        </h><spanclassName="text-xlmd:text-2 xltext-cyan-400mb-8font-medium"></className="text-xlmd:text-2 xltext-cyan-400mb-8font-medium">Create Amazing Content10x Faster
        </p><spanclassName="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed"></className="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed">Transform your content creation with our AI-powered writing assistant. Generate high-quality 
            blog posts, marketing copy, emails, and more in minutes, not hours. Boost engagement and 
            drive results with intelligent content optimization.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial
          </a></di></di>{/* KeyBenefits */}
      <divclassName="grid grid-cols-1 md:grid-cols-4 gap-8mb-16"><divclassName="text-center"><divclassName="text-4 xl font-bold text-cyan-400mb-2">10x</di><divclassName="text-whitefont-semiboldmb-2">FasterWriting</di><divclassName="text-gray-300text-sm">Create content in minutes,nothours</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-purple-400mb-2">40%</di><divclassName="text-whitefont-semiboldmb-2">BetterEngagement</di><divclassName="text-gray-300text-sm">AI optimization increasesreaderengagement</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-green-400mb-2">50+</di><divclassName="text-whitefont-semiboldmb-2">Templates</di><divclassName="text-gray-300text-sm">Ready-to-usecontenttemplates</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-orange-400mb-2">100%</di><divclassName="text-whitefont-semiboldmb-2">BrandConsistent</di><divclassName="text-gray-300text-sm">Maintain your uniquebrandvoice</di></di></di>{/* FeaturesSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Powerful AI Writing Features
        </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{features.map((featureindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20 hover:border-cyan-40 0/40transition-allduration-300"><feature.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4leading-relaxed">{feature.description}</p><divclassName="text-cyan-400font-semiboldtext-sm">{feature.benefit}</di></di>))}
        </di></sectio>{/* Use CasesSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Perfect for Every Content Need
        </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{useCases.map((useCaseindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20text-center"><useCase.iconclassName="w-12h-1 2text-cyan-400mx-automb-4" /><h3className="text-xl font-boldtext-whitemb-3">{useCase.title}</h><pclassName="text-gray-300mb-4leading-relaxed">{useCase.description}</p><divclassName="text-cyan-400font-semiboldtext-sm">{useCase.results}</di></di>))}
        </di></sectio>{/* PricingSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Simple, Transparent Pricing
        </h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricingPlans.map((planindex) => (
           <divkey={index} className={`bg-slate-80 0/50backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300${
                plan.popular 
                  ? 'border-cyan-400scale-10 5' 
                   : 'border-slate-700 hover:border-cyan-50 0/5 0'
            }`}>{plan.popular && (
                <divclassName="bg-cyan-400text-slate-900px-4 py-2 rounded-full text-sm font-semiboldtext-centermb-4">Most Popular
                </di>)}
              <h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-300mb-6">{plan.description}</p><divclassName="mb-6"><spanclassName="text-4 xlfont-boldtext-white">{plan.price}</spa><spanclassName="text-gray-300">{plan.period}</spa></di><ulclassName="space-y-3mb-8">{plan.features.map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                  </l>))}
              </u>< className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-40 0 to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}></ className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}>Get Started
              </butto></di>))}
        </di></sectio>{/* Testimonials */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">What Our Users Say
        </h><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"><divclassName="flexitems-centermb-4">{[...Array(testimonial.rating)].map((_i) => (
                 <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
              </di><pclassName="text-gray-300mb-4italic">"{testimonial.content}"</p><di v><divclassName="font-semiboldtext-white">{testimonial.name}</di><divclassName="text-cyan-400text-sm">{testimonial.role}</di><divclassName="text-gray-400text-sm">{testimonial.company}</di></di></di>))}
        </di></sectio>{/* CTASection */}
      <sectionclassName="text-center bg-gradient-to-r from-cyan-50 0/10to-purple-50 0/10rounded-lg p-12border border-cyan-500/20"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">Ready to Transform Your Content Creation?
        </h><spanclassName="text-lg text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-lg text-gray-300mb-8 max-w-2xlmx-auto">Join thousands of content creators, marketers, and businesses using AI Writing Assistant 
            to create better content faster.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial
          </a></di></sectio></sectio></di>
  );
};

export default AIWritingAssistantPage