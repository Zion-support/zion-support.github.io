import React from "react"
import { motion     } from "framer-motion";
import SEO from "@/components/SEO"
import {
  PenTool;
  FileText,
  Image,
  Video,
  Globe,
  Zap,
  Brain,
  Shield;
  CheckCircle;
  TrendingUp;
  MessageSquare;
  Search;
  Target;
  BarChart3;
  Users;
  Sparkles;
}
}
}
}
 } from "lucide-react";
export default function AIContentGenerator() {
  const features = [
  {
  ic,
  o: n: PenTool,tit,
  l: e: 'Multi-Format Content Creation',descripti,
  o: n: 'Generate blog posts, social media content, emails, ads, and more with AI-powered writing assistance'
},
  {
  ic,
  o: n: Image,tit,
  l: e: 'AI Image Generation',descripti,
  o: n: 'Create stunning visuals, graphics, and illustrations using advanced AI image generation models'
},
  {
  ic,
  o: n: Video,tit,
  l: e: 'Video Content Creation',descripti,
  o: n: 'Generate video scripts, storyboards, and even short video clips with AI technology'
},
  {
  ic,
  o: n: Search,tit,
  l: e: 'SEO-Optimized Content',descripti,
  o: n: 'AI automatically optimizes content for search engines with keyword research and semantic analysis'
},
  {
  ic,
  o: n: Target,tit,
  l: e: 'Audience Targeting',descripti,
  o: n: 'Content tailored to specific demographics, industries, and customer personas'
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: 'Performance Analytics',descripti,
  o: n: 'Track content performance with AI-powered insights and optimization recommendations'
},
  ]
  const benefits = [
  'Increase content production by 10x with AI assistanceImprove SEO rankings by 45% with optimized content'
    'Reduce content creation costs by 60%Boost engagement rates by 35% with targeted content'
    'Save 20+ hours per week on content creationMaintain consistent brand voice across all content'
]

  const pricing = [
  {
  na,
  m: e: 'Creator',pri,
  c: e: '$49',peri,
  o: d: '/month',descripti,
  o: n: 'Perfect for individual creators and small businesses',featur,
  e: s: [
  'Up to 50 AI-generated articles per monthBasic image generation (10 images/month)'
        'SEO optimization toolsContent templates'
        'Email supportBasic analytics'
]
      ct,
  a: 'Start Free Trial',popul,
  a: r: false;
},
  {
  na,
  m: e: 'Professional',pri,
  c: e: '$149',peri,
  o: d: '/month',descripti,
  o: n: 'Ideal for marketing teams and growing businesses',featur,
  e: s: [
  'Up to 200 AI-generated articles per monthAdvanced image generation (50 images/month)'
        'Video script generationMulti-language support'
        'Priority supportAdvanced analytics dashboard'
        'API accessTeam collaboration tools'
]
      ct,
  a: 'Start Free Trial',popul,
  a: r: true;
},
  {
  na,
  m: e: 'Enterprise',pri,
  c: e: '$399',peri,
  o: d: '/month',descripti,
  o: n: 'For large organizations with high content demands',featur,
  e: s: [
  'Unlimited AI-generated contentUnlimited image generation'
        'Custom AI model trainingWhite-label solution'
        'Dedicated account managerSLA guarantees'
        'Advanced security featuresCustom integrations'
]
      ct,
  a: 'Contact Sales',popul,
  a: r: false;
},
  ]
  return (
    <>
      <SEO;
        title="AI Content Generator - Create Engaging Content with AI"
        description="Generate high-quality, SEO-optimized content 10x faster with AI. Create articles, images, videos, and more for blogs, social media, and marketing campaigns."
        canonical="/services/ai-content-generator"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */},
  }
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-600/10 to-red-600/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              className="className="text-center max-w-4xl mx-auto";"
            >
              <h1 className="text-5xl,
  m: d: text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                AI Content Generator;
              </h1>
              <p className="text-xl m,
  d:text-2xl text-gray-300 mb-8">
                Create engaging, SEO-optimized content 10x faster with artificial intelligence. 
                Generate articles, images, videos, and more for any platform.
              </p>
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold,
  hove: r:from-purple-600,
  hove: r:to-pink-700 transition-all duration-300,
  transform: hover:scale-105">
                  Start Free Trial;
                </button>
                  <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold,
  hove: r:bg-purple-500 hove,
  r:text-white transition-all duration-300">
                  Watch Demo;
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */},
  }
        <section className="py-20 bg-black/30">
          <div className="container-responsive">
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-4xl,
  m: d: text-5xl font-bold mb-6 text-white">
                AI-Powered Content Creation;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to create high-quality content;
                that engages your audience and drives results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {features.map((feature, index) => (
  <motion.div;
                  key={index},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  className="className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6,
  hove: r: border-purple-500/50 transition-all duration-300 group";"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-4 group-hove,
  r:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */},
  }
        <section className="py-20">
          <div className="container-responsive">
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-4xl,
  m: d: text-5xl font-bold mb-6 text-white">
                Proven Results;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of content creators and marketers who have transformed;
                their content strategy with AI-powered generation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
  <motion.div;
                  key={index},
  }
                  initial={ opaci,
  t: y: 0, x: -20 },
  }
                  whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  className="className="flex items-start space-x-3";"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */},
  }
        <section className="py-20 bg-black/30">
          <div className="container-responsive">
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-4xl,
  m: d:text-5xl font-bold mb-6 text-white">
                Simple, Transparent Pricing;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. 
                All plans include a 14-day free trial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
  <motion.div;
                  key={index},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
  plan.popular;
                      ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                      : 'border-slate-700/50'
}`}
                >
                  {plan.popular && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular;
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
  plan.popular;
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600,
  hove: r: from-purple-600,
  hove: r:to-pink-700 text-white'
                      : 'border-2 border-purple-500 text-purple-400,
  hove: r:bg-purple-500 hove,
  r:text-white'
}`}>
                    {plan.cta},
  }
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */},
  }
        <section className="py-20">
          <div className="container-responsive">
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              className="className="text-center max-w-4xl mx-auto";"
            >
              <h2 className="text-4xl,
  m: d:text-5xl font-bold mb-6 text-white">
                Ready to Revolutionize Your Content Creation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of creators using AI to produce engaging content;
                faster, smarter, and more effectively than ever before.
              </p>
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold,
  hove: r:from-purple-600,
  hove: r:to-pink-700 transition-all duration-300,
  transform: hover:scale-105">
                  Start Free Trial;
                </button>
                <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold,
  hove: r:bg-purple-500 hove,
  r:text-white transition-all duration-300">
                  Schedule Demo;
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}