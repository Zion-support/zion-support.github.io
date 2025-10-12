import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Palette, Brain } from 'lucide-react'
export default function AIContentGeneratorPage() {

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Writing',
      description: 'Advanced GPT-4 and Claude-3 powered content generation with 99.9% accuracy and human-like quality.',
      benefits: ['Natural language processing', 'Context-aware generation', 'Multi-language support', 'Brand voice adaptation']
    },
    {
      icon: <FileText className="w-6 h-6 text-emerald-400" />,
      title: 'Content Templates',
      description: '500+ professionally designed templates for blogs, social media, emails, ads, and more.',
      benefits: ['Industry-specific templates', 'Customizable layouts', 'SEO-optimized structure', 'Mobile-responsive design']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools with keyword research, density analysis, and readability scoring.',
      benefits: ['Keyword optimization', 'Meta tag generation', 'Readability analysis', 'Competitor analysis']
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      title: 'Brand Voice Training',
      description: 'Train AI to match your unique brand voice and tone across all content types.',
      benefits: ['Voice consistency', 'Tone adaptation', 'Style guidelines', 'Brand personality']
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-400" />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level quality and cultural adaptation.',
      benefits: ['50+ languages', 'Cultural adaptation', 'Local SEO optimization', 'Regional preferences']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
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
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Thought leadership']
    },
    {
      title: 'Social Media',
      description: 'Create compelling social media posts for all platforms with optimal engagement.',
      icon: <Share className="w-8 h-8 text-emerald-400" />,
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions']
    },
    {
      title: 'Email Marketing',
      description: 'Generate personalized email campaigns that convert and engage your audience.',
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      examples: ['Newsletters', 'Promotional emails', 'Welcome sequences', 'Follow-up campaigns']
    },
    {
      title: 'Ad Copy',
      description: 'Create high-converting ad copy for Google, Facebook, and other advertising platforms.',
      icon: <Target className="w-8 h-8 text-pink-400" />,
      examples: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Display banners']
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Content Generator - Advanced AI Writing Assistant | Zion Tech Group</title>
        <meta name="description" content="Transform your content creation with our AI Content Generator. Generate high-quality, SEO-optimized content in 50+ languages. Starting at $29/month. Free trial available." />
        <meta name="keywords" content="AI content generator, content writing, SEO content, blog writing, social media content, email marketing, content automation, AI writing assistant" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-generator" />
      </Helmet>

      <div>
        </Brain>
        </FileText>
        </BarChart3>
        </Palette>
        </Globe>
        </Shield>
        </FileText>
        </Share>
        </Mail>
        </Target>
        </meta>
        </meta>
        </meta>
        </link>
        </Sparkles>
        </br>
        </br>
        </ArrowRight>
        </Play>
        </CheckCircle>
        </Star>
        </Shield>
        </Clock>
        </CheckCircle>
        </CheckCircle>
        </Star>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </ArrowRight>
        </MessageCircle>
        </div>
        </div>
        </Phone>
        </div>
        </Mail>
        </div>
        </MapPin>
        {/* Hero Section */}
        <section>
          {/* Animated Background */}
          <div>
          <div>
          
          {/* Floating Elements */}
          <div>
          <div>
          <div>
          
          <div>
            <div>
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Content Creation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              AI Content
              <br></br>
              <span>
                Generator
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create high-quality, SEO-optimized content in seconds with our advanced AI writing assistant. 
              <br></br>
              <span>50+ languages • 500+ templates • 99.9% accuracy</span>
            </p>
            
            <div>
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div>
              <div>
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>10,000+ Active Users</span>
              </div>
              <div>
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div>
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div>
                <Clock className="w-4 h-4 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features for <span>Content Creators</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need to create, optimize, and scale your content marketing efforts with AI.
              </p>
            </div>
            
            <div>
              {features.map((feature, index) => (
                <div>
                  <div>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every <span>Content Type</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From blog posts to social media, create engaging content that converts across all platforms.
              </p>
            </div>
            
            <div>
              {useCases.map((useCase, index) => (
                <div>
                  <div>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div>
                    {useCase.examples.map((example, exampleIndex) => (
                      <div>
                        • {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span>Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the perfect plan for your content needs. All plans include our core AI features.
              </p>
            </div>
            
            <div>
              {pricingPlans.map((plan, index) => (
                <div>
                  {plan.popular && (
                    <div>
                      <div>
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div>
                      <span>{plan.price}</span>
                      <span>{plan.period}</span>
                    </div>
                  </div>
                  
                  <div>
                    {plan.features.map((feature, featureIndex) => (
                      <div>
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span>10,000+ Users</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See what our customers say about their experience with our AI Content Generator.
              </p>
            </div>
            
            <div>
              {testimonials.map((testimonial, index) => (
                <div>
                  <div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div>{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div>
          <div>
            <div>
              <div>
                <div>
                
                <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Transform Your <span>Content Strategy?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join thousands of content creators who are already using our AI to scale their content production. 
                    Start your free trial today - no credit card required.
                  </p>
                  
                  <div>
                    <button className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link;
to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Contact Sales</span>
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Contact Information */}
                  <div>
                    <div>
                      <Phone className="w-5 h-5 text-cyan-300" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div>
                      <Mail className="w-5 h-5 text-purple-300" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div>
                      <MapPin className="w-5 h-5 text-pink-300" />
                      <span>Middletown DE 19709</span>
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