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
      icon: <Brain className="w-5 h-5ml-2" />,
      title: 'AI-Powered Writing',
      description: 'Advanced GPT-4 and Claude-3 powered content generation with 99.9% accuracy and human-like quality.',
      benefits: ['Natural language processing', 'Context-aware generation', 'Multi-language support', 'Brand voice adaptation']
    },
    {
      icon: <FileText className="w-5 h-5ml-2" />,
      title: 'Content Templates',
      description: '500+ professionally designed templates for blogs, social media, emails, ads, and more.',
      benefits: ['Industry-specific templates', 'Customizable layouts', 'SEO-optimized structure', 'Mobile-responsive design']
    },
    {
      icon: <BarChart3 className="w-5 h-5ml-2" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools with keyword research, density analysis, and readability scoring.',
      benefits: ['Keyword optimization', 'Meta tag generation', 'Readability analysis', 'Competitor analysis']
    },
    {
      icon: <Palette className="w-5 h-5ml-2" />,
      title: 'Brand Voice Training',
      description: 'Train AI to match your unique brand voice and tone across all content types.',
      benefits: ['Voice consistency', 'Tone adaptation', 'Style guidelines', 'Brand personality']
    },
    {
      icon: <Globe className="w-5 h-5ml-2" />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level quality and cultural adaptation.',
      benefits: ['50+ languages', 'Cultural adaptation', 'Local SEO optimization', 'Regional preferences']
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
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
      content: 'Zion's AI Content Generator has revolutionized our content strategy. We've increased our content output by 300% while maintaining quality.',
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
      icon: <FileText className="w-5 h-5ml-2" />,
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Thought leadership']
    },
    {
      title: 'Social Media',
      description: 'Create compelling social media posts for all platforms with optimal engagement.',
      icon: <Share className="w-5 h-5ml-2" />,
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions']
    },
    {
      title: 'Email Marketing',
      description: 'Generate personalized email campaigns that convert and engage your audience.',
      icon: <Mail className="w-5 h-5ml-2" />,
      examples: ['Newsletters', 'Promotional emails', 'Welcome sequences', 'Follow-up campaigns']
    },
    {
      title: 'Ad Copy',
      description: 'Create high-converting ad copy for Google, Facebook, and other advertising platforms.',
      icon: <Target className="w-5 h-5ml-2" />,
      examples: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Display banners']
    }
  ]

export default function AIContentGenerator() {
  return (
    <>
      <Helmet>
        <title />AI Content Generator - Advanced AI Writing Assistant | Zion Tech Group</title>
        <meta name="description" content="Transform your content creation with our AI Content Generator. Generate high-quality, SEO-optimized content in 50+ languages. Starting at $29/month. Free trial available." />
        <meta name="keywords" content="AI content generator, content writing, SEO content, blog writing, social media content, email marketing, content automation, AI writing assistant" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-generator"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          {/* Animated Background */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }}  />
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '0.5 s' }}  />
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '1.5 s' }}  />
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '2.5 s' }}  />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Sparkles className="w-5 h-5ml-2" />
              <span />AI-Powered Content Creation</span>
            </div>
            
            <h1 className="w-5 h-5ml-2" />
              AI Content
              <br />
              <span className="w-5 h-5ml-2" />Generator
              </span>
            </h1>
            
            <p className="w-5 h-5ml-2" />
              Create high-quality, SEO-optimized content in seconds with our advanced AI writing assistant. 
              <br />
              <span className="w-5 h-5ml-2" />50+ languages • 500+ templates • 99.9% accuracy</span>
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <button className="w-5 h-5ml-2" />
                <span />Start Free Trial</span>
                <ArrowRight className="w-5 h-5ml-2" />
              </button>
              <button className="w-5 h-5ml-2" />
                <Play className="w-5 h-5ml-2" />
                <span />Watch Demo</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <CheckCircle className="w-5 h-5ml-2" />
                <span />10,000+ Active Users</span>
              </div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Star className="w-5 h-5ml-2" />
                <span />4.9/5 Rating</span>
              </div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Shield className="w-5 h-5ml-2" />
                <span />Enterprise Security</span>
              </div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Clock className="w-5 h-5ml-2" />
                <span />24/7 Support</span>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Powerful Features for <span className="w-5 h-5ml-2" />Content Creators</span>
              </h2>
              <p className="w-5 h-5ml-2">Everything you need to create, optimize, and scale your content marketing efforts with AI.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                  </div>
                  <h3 className="w-5 h-5ml-2" />{feature.title}
                  </h3>
                  <p className="w-5 h-5ml-2">{feature.description}
                  </p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key="{benefitIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                        <CheckCircle className="w-5 h-5ml-2" />
                        <span />{benefit}</span>
                      </div>
                    ))}
                  </div>
              ))}
            </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Perfect for Every <span className="w-5 h-5ml-2" />Content Type</span>
              </h2>
              <p className="w-5 h-5ml-2">From blog posts to social media, create engaging content that converts across all platforms.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {useCases.map((useCase, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{useCase.icon}
                  </div>
                  <h3 className="w-5 h-5ml-2" />{useCase.title}
                  </h3>
                  <p className="w-5 h-5ml-2">{useCase.description}
                  </p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key="{exampleIndex}" className="text-cyan-400text-sm"  />• {example}
                      </div>
                    ))}
                  </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Simple, Transparent <span className="w-5 h-5ml-2" />Pricing</span>
              </h2>
              <p className="w-5 h-5ml-2">Choose the perfect plan for your content needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`group" relative bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                      </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                    <p className="w-5 h-5ml-2">{plan.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <span className="w-5 h-5ml-2" />{plan.price}</span>
                      <span className="w-5 h-5ml-2" />{plan.period}</span>
                    </div>
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {plan.features.map((feature, featureIndex) => (
                      <div key="{featureIndex}" className="flex items-centerspace-x-3" />
                        <CheckCircle className="w-5 h-5ml-2" />
                        <span className="w-5 h-5ml-2" />{feature}</span>
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
        </section>

        {/* Testimonials Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Trusted by <span className="w-5 h-5ml-2" />10,000+ Users</span>
              </h2>
              <p className="w-5 h-5ml-2">See what our customers say about their experience with our AI Content Generator.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5te xt-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5 h-5ml-2">"{testimonial.content}"</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                    </div>
                    <div />
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.role}, {testimonial.company}</div>
                  </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h2 className="w-5 h-5ml-2" />
                    Ready to Transform Your <span className="w-5 h-5ml-2" />Content Strategy?</span>
                  </h2>
                  
                  <p className="w-5 h-5ml-2">Join thousands of content creators who are already using our AI to scale their content production. 
                    Start your free trial today - no credit card required.
                  </p>
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <button className="w-5 h-5ml-2" />
                      <span />Start Free Trial</span>
                      <ArrowRight className="w-5 h-5ml-2" />
                    </button>
                    <Link to="/contact" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                      <span />Contact Sales</span>
                      <MessageCircle className="w-5 h-5ml-2" />
                    </Link>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <Phone className="w-5 h-5ml-2" />
                      <span className="w-5 h-5ml-2" />+1 302 464 0950</span>
                    </div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <Mail className="w-5 h-5ml-2" />
                      <span className="w-5 h-5ml-2" />kleber@ziontechgroup.com</span>
                    </div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <MapPin className="w-5 h-5ml-2" />
                      <span className="w-5 h-5ml-2" />Middletown DE 19709</span>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}