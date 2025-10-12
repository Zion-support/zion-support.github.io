import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Brain, Users, Type, Copy} from 'lucide-react';

export default function AIContentGeneratorPage() {

  const features = [
    {
      icon: <Brain className="w-6h-6text-cyan-400" / />,
      title: 'AI-Powered Writing',
      description: 'Advanced GPT-4 and Claude-3 powered content generation with 99.9% accuracy and human-like quality.',
      benefits: ['Natural language processing', 'Context-aware generation', 'Multi-language support', 'Brand voice adaptation']
    },
    {
      icon: <FileText className="w-6h-6text-emerald-400" / />,
      title: 'Content Templates',
      description: '500+ professionally designed templates for blogs, social media, emails, ads, and more.',
      benefits: ['Industry-specific templates', 'Customizable layouts', 'SEO-optimized structure', 'Mobile-responsive design']
    },
    {
      icon: <BarChart3 className="w-6h-6text-purple-400" / />,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools with keyword research, density analysis, and readability scoring.',
      benefits: ['Keyword optimization', 'Meta tag generation', 'Readability analysis', 'Competitor analysis']
    },
    {
      icon: <Palette className="w-6h-6text-pink-400" / />,
      title: 'Brand Voice Training',
      description: 'Train AI to match your unique brand voice and tone across all content types.',
      benefits: ['Voice consistency', 'Tone adaptation', 'Style guidelines', 'Brand personality']
    },
    {
      icon: <Globe className="w-6h-6text-orange-400" / />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level quality and cultural adaptation.',
      benefits: ['50+ languages', 'Cultural adaptation', 'Local SEO optimization', 'Regional preferences']
    },
    {
      icon: <Shield className="w-6h-6text-red-400" / />,
      title: 'Plagiarism Detection',
      description: 'Built-in plagiarism checker with 99.8% accuracy and originality scoring.',
      benefits: ['Real-time checking', 'Originality reports', 'Citation suggestions', 'Copyright compliance']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10,000 words/month',
        '50+ content templates',
        'Basic SEO tools',
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
        'Advanced SEO suite',
        'Unlimited brand voices',
        '20 languages',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access',
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
        'Full SEO suite + AI insights',
        'Unlimited everything',
        'All 50+ languages',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Advanced team features',
        'Full API access',
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
      company: 'TechFlow Inc.',
      content: 'Zion\'s AI Content Generator has revolutionized our content strategy. We\'ve increased our content output by 300% while maintaining quality.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'StartupHub',
      content: 'The brand voice training feature is incredible. Our content now sounds exactly like our brand, saving us hours of editing.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'SEO Specialist',
      company: 'Digital Marketing Pro',
      content: 'The SEO optimization tools are game-changing. Our content ranks 40% higher since using this platform.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  const useCases = [
    {
      title: 'Blog Content',
      description: 'Generate engaging blog posts with SEO optimization and brand voice consistency.',
      icon: <FileText className="w-8h-8text-cyan-400" / />,
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Thought leadership']
    },
    {
      title: 'Social Media',
      description: 'Create compelling social media posts for all platforms with optimal engagement.',
      icon: <Share className="w-8h-8text-emerald-400" / />,
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions']
    },
    {
      title: 'Email Marketing',
      description: 'Generate personalized email campaigns that convert and engage your audience.',
      icon: <Mail className="w-8h-8text-purple-400" / />,
      examples: ['Newsletters', 'Promotional emails', 'Welcome sequences', 'Follow-up campaigns']
    },
    {
      title: 'Ad Copy',
      description: 'Create high-converting ad copy for Google, Facebook, and other advertising platforms.',
      icon: <Target className="w-8h-8text-pink-400" / />,
      examples: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Display banners']
    }
  ]

  return (
    <>
      <Helmet />
        <title   />AI Content Generator - Advanced AI Writing Assistant | Zion Tech Group</title>
        <meta name="description" content="Transform your content creation with our AI Content Generator. Generate high-quality, SEO-optimized content in 50+ languages. Starting at $29/month. Free trial available." / / />
        <meta name="keywords" content="AI content generator, content writing, SEO content, blog writing, social media content, email marketing, content automation, AI writing assistant" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-generator" / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20px-4overflow-hidden" />
          {/* Animated Background */}
          <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" / />
          <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '0.5 s' }} / />
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '1.5 s' }} / />
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '2.5 s' }} / />
          <div className="relative max-w-7 xlmx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
              <Sparkles className="w-4h-4" / />
              <span   />AI-Powered Content Creation</span>
            </div>
            
            <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
              AI Content
              <br / />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"  />Generator
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" />
              Create high-quality, SEO-optimized content in seconds with our advanced AI writing assistant. 
              <br / />
              <span className="text-cyan-400font-semibold"   />50+ languages • 500+ templates • 99.9% accuracy</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6justify-centermb-16">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span   />Start Free Trial</span>
                <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
              </button>
              <button className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <Play className="w-5h-5" / />
                <span   />Watch Demo</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8text-gray-400text-sm">
              <div className="flexitems-centerspace-x-2">
                <CheckCircle className="w-4h-4text-green-400" / />
                <span   />10,000+ Active Users</span>
              </div>
              <div className="flexitems-centerspace-x-2">
                <Star className="w-4h-4text-yellow-400" / />
                <span   />4.9/5 Rating</span>
              </div>
              <div className="flexitems-centerspace-x-2">
                <Shield className="w-4h-4text-blue-400" / />
                <span   />Enterprise Security</span>
              </div>
              <div className="flexitems-centerspace-x-2">
                <Clock className="w-4h-4text-purple-400" / />
                <span   />24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4 xl md:text-5 xl font-boldtext-white mb-6" />
                Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Content Creators</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
                Everything you need to create, optimize, and scale your content marketing efforts with AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
              {features.map((feature, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300"  />{feature.icon}
                  </div>
                  <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors"  />{feature.title}
                  </h3>
                  <p className="text-gray-300mb-6leading-relaxed" />
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key="{benefitIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                        <CheckCircle className="w-4h-4text-green-400" / />
                        <span   />{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4 xl md:text-5 xl font-boldtext-white mb-6" />
                Perfect for Every <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Content Type</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
                From blog posts to social media, create engaging content that converts across all platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {useCases.map((useCase, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300"  />{useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors"  />{useCase.title}
                  </h3>
                  <p className="text-gray-300mb-4leading-relaxed" />
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key="{exampleIndex}" className="text-cyan-400text-sm"  />• {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4 xl md:text-5 xl font-boldtext-white mb-6" />
                Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
                Choose the perfect plan for your content needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`group" relative bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                    <p className="text-gray-300 mb-6" />{plan.description}</p>
                    <div className="flexitems-baselinejustify-center">
                      <span className="text-5 xlfont-boldtext-white"   />{plan.price}</span>
                      <span className="text-gray-400 ml-2"   />{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key="{featureIndex}" className="flexitems-centerspace-x-3" />
                        <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" / />
                        <span className="text-gray-300"   />{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="{`w-full" py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}  />{plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50to-pink-900/50relative" />
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" / />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4 xl md:text-5 xl font-boldtext-white mb-6" />
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent"   />10,000+ Users</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
                See what our customers say about their experience with our AI Content Generator.
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                  <div className="flexitems-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" / />
                    ))}
                  </div>
                  <p className="text-gray-300mb-6leading-relaxed" />"{testimonial.content}"</p>
                  <div className="flexitems-centerspace-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold"  />{testimonial.avatar}
                    </div>
                    <div />
                      <div className="font-semiboldtext-white"   />{testimonial.name}</div>
                      <div className="text-gray-400text-sm"   />{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
                <div className="absolute top-0 left-0 w-full h-fullbg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]animate-pulse" / />
                <div className="relativez-10">
                  <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                    Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Content Strategy?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed" />
                    Join thousands of content creators who are already using our AI to scale their content production. 
                    Start your free trial today - no credit card required.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6justify-center mb-8">
                    <button className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                      <span   />Start Free Trial</span>
                      <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                    </button>
                    <Link to="/contact" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                      <span   />Contact Sales</span>
                      <MessageCircle className="w-5 h-5group-hover:scale-110transition-transform" / />
                    </Link>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3gap-6text-white/80">
                    <div className="flex items-centerjustify-centerspace-x-3">
                      <Phone className="w-5h-5text-cyan-300" / />
                      <span className="text-sm"   />+1 302 464 0950</span>
                    </div>
                    <div className="flex items-centerjustify-centerspace-x-3">
                      <Mail className="w-5h-5text-purple-300" / />
                      <span className="text-sm"   />kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-centerjustify-centerspace-x-3">
                      <MapPin className="w-5h-5text-pink-300" / />
                      <span className="text-sm"   />Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}