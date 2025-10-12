import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Brain, Users, Type, Copy} from 'lucide-react';
import { ArrowRight, Brain, File Text, CheckCircle, Star, Clock, Users, Bar Chart3, Sparkles, Target, Globe, Shield, Message Circle, Mail, Phone, MapPin, Play, Copy, Share, Palette, Type } from 'lucide-react';

export default function A IContent Generator Page() {

  const features = [
    {
      icon: <B rain class Name="w-6h-6t ext-cyan-400" />,
      title: 'A I-Powered Writing',
      description: 'Advanced G PT-4 and Claude-3 powered content generation with 99.9% accuracy and human-like quality.',
      benefits: ['Natural language processing', 'Context-aware generation', 'Multi-language support', 'Brand voice adaptation']
    },
    {
      icon: <F ile Text class Name="w-6h-6t ext-emerald-400" />,
      title: 'Content Templates',
      description: '500+ professionally designed templates for blogs, social media, emails, ads, and more.',
      benefits: ['Industry-specific templates', 'Customizable layouts', 'S EO-optimized structure', 'Mobile-responsive design']
    },
    {
      icon: <B ar Chart3 class Name="w-6h-6t ext-purple-400" />,
      title: 'S EO Optimization',
      description: 'Built-in S EO tools with keyword research, density analysis, and readability scoring.',
      benefits: ['Keyword optimization', 'Meta tag generation', 'Readability analysis', 'Competitor analysis']
    },
    {
      icon: <P alette class Name="w-6h-6t ext-pink-400" />,
      title: 'Brand Voice Training',
      description: 'Train A I to match your unique brand voice and tone across all content types.',
      benefits: ['Voice consistency', 'Tone adaptation', 'Style guidelines', 'Brand personality']
    },
    {
      icon: <G lobe class Name="w-6h-6t ext-orange-400" />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level quality and cultural adaptation.',
      benefits: ['50+ languages', 'Cultural adaptation', 'Local S EO optimization', 'Regional preferences']
    },
    {
      icon: <S hield class Name="w-6h-6t ext-red-400" />,
      title: 'Plagiarism Detection',
      description: 'Built-in plagiarism checker with 99.8% accuracy and originality scoring.',
      benefits: ['Real-time checking', 'Originality reports', 'Citation suggestions', 'Copyright compliance']
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10,000 words/month',
        '50+ content templates',
        'Basic S EO tools',
        '5 brand voices',
        '3 languages',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '100,000 words/month',
        '500+ content templates',
        'Advanced S EO suite',
        'Unlimited brand voices',
        '20 languages',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'A PI access',
        'Custom templates'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited words',
        'All templates + custom',
        'Full S EO suite + A I insights',
        'Unlimited everything',
        'All 50+ languages',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Advanced team features',
        'Full A PI access',
        'White-label options',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Marketing Manager',
      company: 'Tech Flow Inc.',
      content: 'Zion's A I Content Generator has revolutionized our content strategy. We've increased our content output by 300% while maintaining quality.',
      rating: 5,
      avatar: 'S J'
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'Startup Hub',
      content: 'The brand voice training feature is incredible. Our content now sounds exactly like our brand, saving us hours of editing.',
      rating: 5,
      avatar: 'M C'
    },
    {
      name: 'Emily Rodriguez',
      role: 'S EO Specialist',
      company: 'Digital Marketing Pro',
      content: 'The S EO optimization tools are game-changing. Our content ranks 40% higher since using this platform.',
      rating: 5,
      avatar: 'E R'
    }
  ]

  const use Cases = [
    {
      title: 'Blog Content',
      description: 'Generate engaging blog posts with S EO optimization and brand voice consistency.',
      icon: <F ile Text class Name="w-8h-8t ext-cyan-400" />,
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Thought leadership']
    },
    {
      title: 'Social Media',
      description: 'Create compelling social media posts for all platforms with optimal engagement.',
      icon: <S hare class Name="w-8h-8t ext-emerald-400" />,
      examples: ['Facebook posts', 'Twitter threads', 'Linked In articles', 'Instagram captions']
    },
    {
      title: 'Email Marketing',
      description: 'Generate personalized email campaigns that convert and engage your audience.',
      icon: <M ail class Name="w-8h-8t ext-purple-400" />,
      examples: ['Newsletters', 'Promotional emails', 'Welcome sequences', 'Follow-up campaigns']
    },
    {
      title: 'Ad Copy',
      description: 'Create high-converting ad copy for Google, Facebook, and other advertising platforms.',
      icon: <T arget class Name="w-8h-8t ext-pink-400" />,
      examples: ['Google Ads', 'Facebook Ads', 'Linked In Ads', 'Display banners']
    }
  ]

  return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Content Generator - Advanced A I Writing Assistant | Zion Tech Group</t itle>
        <m eta name="description" content="Transform your content creation with our A I Content Generator. Generate high-quality, S EO-optimized content in 50+ languages. Starting at $29/month. Free trial available." / / />
        <m eta name="keywords" content="A I content generator, content writing, S EO content, blog writing, social media content, email marketing, content automation, A I writing assistant" / / />
        <m eta name="robots" content="index, follow" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/ai-content-generator" />
      </H elmet>

      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
        {/* Hero Section */}
        <s ection class Name="r elative py-20px-4overflow-hidden" />
          {/* Animated Background */}

          <d iv class Name="a bsolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" / />
          <d iv class Name="a bsolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / />

          {/* Floating Elements */}

          <d iv class Name="a bsolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animation Delay: '0.5 s' }} / />
          <d iv class Name="a bsolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animation Delay: '1.5 s' }} / />
          <d iv class Name="a bsolute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animation Delay: '2.5 s' }} / />
          <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="i nline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
              <S parkles class Name="w-4h-4" / />
              <s pan>A I-Powered Content Creation</s pan>
            </d iv>

            <h1 c lass Name="t ext-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
              A I Content

              <b r / />
              <s pan class Name="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Generator
              </s pan>
            </h1>

            <p c lass Name="t ext-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Create high-quality, S EO-optimized content in seconds with our advanced A I writing assistant. 

              <b r / />
              <s pan class Name="t ext-cyan-400font-semibold">50+ languages • 500+ templates • 99.9% accuracy</s pan>
            </p>

            <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
              <b utton class Name="g roup bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <s pan>Start Free Trial</s pan>
                <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
              </b utton>
              <b utton class Name="g roup border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <P lay class Name="w-5h-5" / />
                <s pan>Watch Demo</s pan>
              </b utton>
            </d iv>

            {/* Trust Indicators */}

            <d iv class Name="f lex flex-wrap justify-center items-center gap-8text-gray-400text-sm">
        </d iv>
              <d iv class Name="f lexitems-centerspace-x-2">
        </d iv>
                <C heck Circle class Name="w-4h-4t ext-green-400" / />
                <s pan>10,000+ Active Users</s pan>
              </d iv>
              <d iv class Name="f lexitems-centerspace-x-2">
        </d iv>
                <S tar class Name="w-4h-4t ext-yellow-400" / />
                <s pan>4.9/5 Rating</s pan>
              </d iv>
              <d iv class Name="f lexitems-centerspace-x-2">
        </d iv>
                <S hield class Name="w-4h-4t ext-blue-400" / />
                <s pan>Enterprise Security</s pan>
              </d iv>
              <d iv class Name="f lexitems-centerspace-x-2">
        </d iv>
                <C lock class Name="w-4h-4t ext-purple-400" / />
                <s pan>24/7 Support</s pan>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Powerful Features for <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Content Creators</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                Everything you need to create, optimize, and scale your content marketing efforts with A I.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                  </d iv>
                  <h3 c lass Name="t ext-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                  </h3>
                  <p c lass Name="t ext-gray-300mb-6leading-relaxed" />

                    {feature.description}

                  </p>
                  <d iv class Name="s pace-y-2">
        </d iv>

                    {feature.benefits.map((benefit, benefit Index) => (

                      <d iv key="{benefit Index}" class Name="f lex items-center space-x-2text-gray-400text-sm" />
                        <C heck Circle class Name="w-4h-4t ext-green-400" / />
                        <s pan>{benefit}</s pan>
                      </d iv>

                    ))}

                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Use Cases Section */}

        <s ection class Name="p y-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
          <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Perfect for Every <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Content Type</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                From blog posts to social media, create engaging content that converts across all platforms.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {use Cases.map((use Case, index) => (

                <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{use Case.icon}
                  </d iv>
                  <h3 c lass Name="t ext-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{use Case.title}
                  </h3>
                  <p c lass Name="t ext-gray-300mb-4leading-relaxed" />

                    {use Case.description}

                  </p>
                  <d iv class Name="s pace-y-1">
        </d iv>

                    {use Case.examples.map((example, example Index) => (

                      <d iv key="{example Index}" class Name="t ext-cyan-400text-sm">• {example}
                      </d iv>

                    ))}

                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-r from-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Simple, Transparent <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                Choose the perfect plan for your content needs. All plans include our core A I features.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d iv key="{index}" class Name="{`g roup" relative bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (

                    <d iv class Name="a bsolute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                      <d iv class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                      </d iv>

                  )}

                  <d iv class Name="t ext-centermb-8">
        </d iv>
                    <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t ext-gray-300mb-6">{plan.description}</p>
                    <d iv class Name="f lexitems-baselinejustify-center" />
                      <s pan class Name="t ext-5 xlfont-boldtext-white">{plan.price}</s pan>
                      <s pan class Name="t ext-gray-400ml-2">{plan.period}</s pan>
                    </d iv>

                  <d iv class Name="s pace-y-4mb-8">
        </d iv>
                    {plan.features.map((feature, feature Index) => (

                      <d iv key="{feature Index}" class Name="f lexitems-centerspace-x-3" />
                        <C heck Circle class Name="w-5 h-5t ext-green-400flex-shrink-0" / />
                        <s pan class Name="t ext-gray-300">{feature}</s pan>
                      </d iv>

                    ))}
                  </d iv>
                  
                  <b utton class Name="{`w-f ull" py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}  />{plan.cta}

                  </b utton>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Testimonials Section */}

        <s ection class Name="p y-20 px-4 bg-gradient-to-br from-purple-900/50to-pink-900/50relative" />
          <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Trusted by <s pan class Name="b g-gradient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent">10,000+ Users</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                See what our customers say about their experience with our A I Content Generator.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <d iv key="{index}" class Name="b g-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                  <d iv class Name="f lexitems-centermb-4">
        </d iv>

                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tar key="{i}" class Name="w-5 h-5t ext-yellow-400fill-current" />
                    ))}

                  </d iv>
                  <p c lass Name="t ext-gray-300mb-6leading-relaxed">"{testimonial.content}"</p>
                  <d iv class Name="f lexitems-centerspace-x-4">
        </d iv>
                    <d iv class Name="w-12 h-12 b g-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold">{testimonial.avatar}
                    </d iv>
                    <d iv />
                      <d iv class Name="f ont-semiboldtext-white">{testimonial.name}</d iv>
                      <d iv class Name="t ext-gray-400text-sm">{testimonial.role}, {testimonial.company}</d iv>
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="b g-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </d iv>
                <d iv class Name="a bsolute top-0 left-0 w-full h-fullbg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]animate-pulse" / />
                <d iv class Name="r elativez-10">
        </d iv>
                  <h2 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                    Ready to Transform Your <s pan class Name="b g-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Content Strategy?</s pan>
                  </h2>

                  <p c lass Name="t ext-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                    Join thousands of content creators who are already using our A I to scale their content production. 
                    Start your free trial today - no credit card required.
                  </p>

                  <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-8">
        </d iv>
                    <b utton class Name="g roup bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                      <s pan>Start Free Trial</s pan>
                      <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                    </b utton>
                    <L ink to="/contact" class Name="g roup border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                      <s pan>Contact Sales</s pan>
                      <M essage Circle class Name="w-5 h-5g roup-hover:scale-110transition-transform" / />
                    </L ink>
                  </d iv>

                  {/* Contact Information */}

                  <d iv class Name="g rid grid-cols-1 md:grid-cols-3gap-6text-white/80">
        </d iv>
                    <d iv class Name="f lex items-centerjustify-centerspace-x-3">
        </d iv>
                      <P hone class Name="w-5h-5t ext-cyan-300" / />
                      <s pan class Name="t ext-sm">+1 302 464 0950</s pan>
                    </d iv>
                    <d iv class Name="f lex items-centerjustify-centerspace-x-3">
        </d iv>
                      <M ail class Name="w-5h-5t ext-purple-300" / />
                      <s pan class Name="t ext-sm">kleber@ziontechgroup.com</s pan>
                    </d iv>
                    <d iv class Name="f lex items-centerjustify-centerspace-x-3">
        </d iv>
                      <M ap Pin class Name="w-5h-5t ext-pink-300" / />
                      <s pan class Name="t ext-sm">Middletown D E 19709</s pan>
                    </d iv>
                </d iv>
            </d iv>
        </s ection>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>

  );
}
