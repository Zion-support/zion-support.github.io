'use client'
import React from 'react'
import { PenTool, FileText } from 'lucide-react'
import { CheckCircle, Star, Phone } from 'lucide-react';
'use client';
import React from 'react';
import { PenTool, FileText, CheckCircle, Star, Phone, Check } from 'lucide-react';
import {PenTool, FileText, CheckCircle, Phone, Star} from 'lucide-react';

const AIWritingAssistantPage: React.FC = () => {constfeatures= [
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
  ]
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
      popular: false;
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
      popular: true;
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
      popular: false;
    }
  ]
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
      results: '35% higher open rates'
    }
  ]
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
      content: 'We can now deliver client content 3x faster. The AI suggestions help us improve our writing and stay ahead of deadlines.',
      rating: 5;
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <PenTool className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Writing Assistant</h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Create Amazing Content 10x Faster</p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your content creation with our AI-powered writing assistant. Generate high-quality;
            blog posts, marketing copy, emails, and more in minutes, not hours. Boost engagement and;
            drive results with intelligent content optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a;
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950</a>
            <a;
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial</a>
          </div>
        </div>
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
            <div className="text-white font-semibold mb-2">Faster Writing</div>
            <div className="text-gray-300 text-sm">Create content in minutes, not hours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
            <div className="text-white font-semibold mb-2">Better Engagement</div>
            <div className="text-gray-300 text-sm">AI optimization increases reader engagement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-white font-semibold mb-2">Templates</div>
            <div className="text-gray-300 text-sm">Ready-to-use content templates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-white font-semibold mb-2">Brand Consistent</div>
            <div className="text-gray-300 text-sm">Maintain your unique brand voice</div>
          </div>
        </div>
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful AI Writing Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Perfect for Every Content Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
                <useCase.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{useCase.results}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular;
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular</div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started</button>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of content creators, marketers, and businesses using AI Writing Assistant;
            to create better content faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a;
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950</a>
            <a;
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial</a>
          </div>
        </section>
      </section>
    </div>
  )
}
      content: 'We can now deliver client content3x faster. The AI suggestions help us improve our writing and stay ahead of deadlines.',
      rating:5}
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">{/* HeroSection */}
    <sectionclassName="container mx-autopx-4py-16pt-24"><divclassName="text-centermb-16"><divclassName="inline-flex items-center justify-center w-20h-20bg-gradient-to-r from-cyan-40 0to-purple-500rounded-fullmb-6"><PenToolclassName="w-10h-10text-white" /></di><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6">AI Writing Assistant</h><spanclassName="text-xlmd:text-2 xltext-cyan-400mb-8font-medium"></className="text-xlmd:text-2 xltext-cyan-400mb-8font-medium">Create Amazing Content10x Faster</p><spanclassName="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed"></className="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed">Transform your content creation with our AI-powered writing assistant. Generate high-quality;
            blog posts, marketing copy, emails, and more in minutes, not hours. Boost engagement and;
            drive results with intelligent content optimization.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial</a></di></di>{/* KeyBenefits */}
      <divclassName="grid grid-cols-1 md:grid-cols-4 gap-8mb-16"><divclassName="text-center"><divclassName="text-4 xl font-bold text-cyan-400mb-2">10x</di><divclassName="text-whitefont-semiboldmb-2">FasterWriting</di><divclassName="text-gray-300text-sm">Create content in minutes,nothours</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-purple-400mb-2">40%</di><divclassName="text-whitefont-semiboldmb-2">BetterEngagement</di><divclassName="text-gray-300text-sm">AI optimization increasesreaderengagement</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-green-400mb-2">50+</di><divclassName="text-whitefont-semiboldmb-2">Templates</di><divclassName="text-gray-300text-sm">Ready-to-usecontenttemplates</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-orange-400mb-2">100%</di><divclassName="text-whitefont-semiboldmb-2">BrandConsistent</di><divclassName="text-gray-300text-sm">Maintain your uniquebrandvoice</di></di></di>{/* FeaturesSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Powerful AI Writing Features</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{features.map((featureindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20 hover:border-cyan-40 0/40transition-allduration-300"><feature.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4leading-relaxed">{feature.description}</p><divclassName="text-cyan-400font-semiboldtext-sm">{feature.benefit}</di></di>))}
        </di></sectio>{/* Use CasesSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Perfect for Every Content Need</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{useCases.map((useCaseindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20text-center"><useCase.iconclassName="w-12h-1 2text-cyan-400mx-automb-4" /><h3className="text-xl font-boldtext-whitemb-3">{useCase.title}</h><pclassName="text-gray-300mb-4leading-relaxed">{useCase.description}</p><divclassName="text-cyan-400font-semiboldtext-sm">{useCase.results}</di></di>))}
        </di></sectio>{/* PricingSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Simple, Transparent Pricing</h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricingPlans.map((planindex) => (
           <divkey={index} className={`bg-slate-80 0/50backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300${
                plan.popular;
                  ? 'border-cyan-400scale-10 5' 
                   : 'border-slate-700 hover:border-cyan-50 0/5 0'
            }`}>{plan.popular && (
                <divclassName="bg-cyan-400text-slate-900px-4 py-2 rounded-full text-sm font-semiboldtext-centermb-4">Most Popular</di>)}
              <h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-300mb-6">{plan.description}</p><divclassName="mb-6"><spanclassName="text-4 xlfont-boldtext-white">{plan.price}</spa><spanclassName="text-gray-300">{plan.period}</spa></di><ulclassName="space-y-3mb-8">{plan.features.map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                  </l>))}
              </u>< className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-cyan-40 0 to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}></ className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-cyan-400to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}>Get Started</butto></di>))}
        </di></sectio>{/* Testimonials */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">What Our Users Say</h><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"><divclassName="flexitems-centermb-4">{[...Array(testimonial.rating)].map((_i) => (
                 <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
              </di><pclassName="text-gray-300mb-4italic">"{testimonial.content}"</p><di v><divclassName="font-semiboldtext-white">{testimonial.name}</di><divclassName="text-cyan-400text-sm">{testimonial.role}</di><divclassName="text-gray-400text-sm">{testimonial.company}</di></di></di>))}
        </di></sectio>{/* CTASection */}
      <sectionclassName="text-center bg-gradient-to-r from-cyan-50 0/10to-purple-50 0/10rounded-lg p-12border border-cyan-500/20"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">Ready to Transform Your Content Creation?
        </h><spanclassName="text-lg text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-lg text-gray-300mb-8 max-w-2xlmx-auto">Join thousands of content creators, marketers, and businesses using AI Writing Assistant;
            to create better content faster.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial</a></di></sectio></sectio></di>
  );
};

export default AIWritingAssistantPage;