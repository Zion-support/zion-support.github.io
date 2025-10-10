'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
  const pricingPlans = [
    {
      name: 'Starter'
      price: 49,
      period: 'month',
      description: 'Perfect for small businesses and freelancers',
      features: [,
        '10,000 words per month',
        'Basic SEO optimization',
        '5 brand voice profiles',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
    },
    {
      name: 'Professional'
      price: 99,
      period: 'month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [,
        '50,000 words per month',
        'Advanced SEO optimization',
        'Unlimited brand voice profiles',
        'Premium templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration (5 users)',
        'API access'
      ],
      popular: true,
    },
    {
      name: 'Enterprise'
      price: 199,
      period: 'month'
      description: 'For large organizations with high content needs',
      features: [,
        'Unlimited words',
        'Full SEO suite',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager',
        'Custom analytics dashboard',
        'Unlimited team members',
        'SLA guarantee'
      ],
      popular: false,
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Marketing Director',
      content: 'AI Content Writer Pro has revolutionized our content strategy. We\'ve increased our blog traffic by 300% and reduced content creation time by 70%.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Agency',
      role: 'Content Manager',
      content: 'The SEO optimization features are incredible. Our content now ranks higher and drives more qualified leads than ever before.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Store',
      role: 'Founder',
      content: 'As a solo entrepreneur, this tool has been a game-changer. I can now produce professional-quality content at scale without a team.',
      rating: 5,
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
  return (</div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation />

      <main className="relative z-10 pt-20">{/* Hero Section */}</main>
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto"></section>
            <div className="text-6xl mb-6">✍️</div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">AI Content Writer Pro</h1><p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">Advanced AI-powered content creation platform</p><p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">Transform your content strategy with our cutting-edge AI technology. Generate high-quality,</p>
              SEO-optimized content at scale while maintaining your unique brand voice.</p>
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto"></div>
            <div className="text-6xl mb-6">✍️</div>
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI Content Writer Pro;</h1>
            </h1>)
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">)
              Advanced AI-powered content creation platform;)
            </p>)
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">)
              Transform your content strategy with our cutting-edge AI technology. Generate high-quality)
              SEO-optimized content at scale while maintaining your unique brand voice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
              <a
                href="#pricing"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
              >Start Free Trial<a
                href="#demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Watch Demo</a>
              </a>
            </div>

              >
                Start Free Trial;
              </a>
              <a;
                href="#demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo;
              </a>,
            </div>,
,
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm: grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
              <div className="cyber-card hologram-card p-6"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%<div className="text-gray-300">Average Traffic Increase</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
              <div className="cyber-card hologram-card p-6"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div><div className="text-gray-300">Average Traffic Increase</div>
              </div>
              <div className="cyber-card hologram-card p-6"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div><div className="text-gray-300">Time Saved</div>
              </div>
              <div className="cyber-card hologram-card p-6"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">50K+<div className="text-gray-300">Happy Customers</div>
              <div className="cyber-card hologram-card p-6"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div><div className="text-gray-300">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto"></div>
            <div className="flex flex-wrap justify-center gap-4">{['overview', 'features', 'pricing', 'testimonials', 'faq'].map((tab) => (<button
                <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Navigation Tabs */}
        <section className="py-8 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto"></div>
            <div className="flex flex-wrap justify-center gap-4">
              {['overview', 'features', 'pricing', 'testimonials', 'faq'].map((tab) => (</div>
                <button;
          <div className="max-w-6xl mx-auto"></section>
            <div className="flex flex-wrap justify-center gap-4">{['overview', 'features', 'pricing', 'testimonials', 'faq'].map((tab) => (</div><button
                  key={tab}
                  onClick={() =>setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 capitalize ${
                    activeTab === tab;
                      ? 'bg-cyan-400 text-slate-900 font-semibold'}
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'}
                  }`}
                ></button>
                  {tab}</button>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">{activeTab === 'overview' && (</div>
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Why Choose AI Content Writer Pro?<p className="text-lg text-gray-300 max-w-3xl mx-auto">Our platform combines the power of GPT-4 with advanced SEO optimization and brand customization</p>
          <div className="max-w-6xl mx-auto">{activeTab === 'overview' && (</section>
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Why Choose AI Content Writer Pro?</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Our platform combines the power of GPT-4 with advanced SEO optimization and brand customization</p>
                    to deliver content that not only engages your audience but also drives results.</p>
                  <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">
                    Why Choose AI Content Writer Pro?
                  </h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Our platform combines the power of GPT-4 with advanced SEO optimization and brand customization;
                    to deliver content that not only engages your audience but also drives results.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                  <div className="cyber-card hologram-card p-6"></div>
                    <div className="text-4xl mb-4">🤖</div><h3 className="text-xl font-bold text-white mb-4">AI-Powered Generation</h3><p className="text-gray-300">Leverage the latest GPT-4 technology to create high-quality content that matches your brand voice and style.</p>
                    </p>
                  </div>
                  <div className="cyber-card hologram-card p-6"></div>
                    <div className="text-4xl mb-4">📈</div><h3 className="text-xl font-bold text-white mb-4">SEO Optimization</h3><p className="text-gray-300">Built-in SEO tools ensure your content ranks higher in search results and drives organic traffic.</p>
                    </p>
                  </div>
                  <div className="cyber-card hologram-card p-6"></div>
                    <div className="text-4xl mb-4">⚡</div><h3 className="text-xl font-bold text-white mb-4">Scale Efficiently</h3><p className="text-gray-300">Produce 10x more content in the same time while maintaining quality and consistency across all channels.</p>
                    </p>
                  </div>,
                </div>,
              </div>)}

            {activeTab === 'features' && (
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Comprehensive Feature Set<p className="text-lg text-gray-300 max-w-3xl mx-auto">Everything you need to create, optimize, and manage content at scale.</p>
                  <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">
                    Comprehensive Feature Set;
                  </h2>,
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">,
                    Everything you need to create, optimize, and manage content at scale.
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Comprehensive Feature Set</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Everything you need to create, optimize, and manage content at scale.</p>
                  </p>
                </div>

                {features.map((category, index) => (
                  <div key={index} className="cyber-card hologram-card p-8"></div>
                    <h3 className="text-2xl font-bold text-white mb-6 text-center neon-text">{category.category}<div className="grid grid-cols-1 md:grid-cols-2 gap-4">{category.items.map((item, itemIndex) => (</div>
                    <h3 className="text-2xl font-bold text-white mb-6 text-center neon-text">
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-1 md: grid-cols-2 gap-4">,
                      {category.items.map((item, itemIndex) => (</div>
                        <div key={itemIndex} className="flex items-center space-x-3"></div>
                          <span className="text-cyan-400 text-xl">✓<span className="text-gray-300">{item}</span>
                  <div key={index} className="cyber-card hologram-card p-8"></div>
                    <h3 className="text-2xl font-bold text-white mb-6 text-center neon-text">{category.category}</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{category.items.map((item, itemIndex) => (</div>
                        <div key={itemIndex} className="flex items-center space-x-3"></div>
                          <span className="text-cyan-400 text-xl">✓</span><span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Simple, Transparent Pricing<p className="text-lg text-gray-300 max-w-3xl mx-auto">Choose the plan that fits your content needs. All plans include a 14-day free trial.<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div
                  <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">,
                    Simple, Transparent Pricing;</div>
                  </h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Choose the plan that fits your content needs. All plans include a 14-day free trial.
                  </p>
                </div>

                <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
                  {pricingPlans.map((plan, index) => (</div>
                    <div;
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Simple, Transparent Pricing</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Choose the plan that fits your content needs. All plans include a 14-day free trial.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div
                      key={index}
                      className={`cyber-card hologram-card p-8 ${}
                        plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}
                      }`}
                    >{plan.popular && (</div>
                        <div className="text-center mb-6"></div>
                        <div className="text-center mb-6"></div>
                          <span className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                          <span className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                            Most Popular;
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-8"></div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 mb-4">{plan.description}</p>
                        <div className="text-4xl font-bold text-cyan-400 mb-2">${plan.price}</div><span className="text-lg text-gray-400">/{plan.period}</span><ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <span className="text-cyan-400">✓</span><span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      <a
                        href={`/contact?service=ai-content-writer&plan=${plan.name.toLowerCase()}`}
                        className="w-full bg-cyan-400 text-slate-900 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 text-center block"
                      >Start Free Trial</a>
                      </a>
                    </div>
                      </ul>

                      <a;
                        href={`/contact?service=ai-content-writer&plan=${plan.name.toLowerCase()}`}
                        className="w-full bg-cyan-400 text-slate-900 py-3 px-4 rounded-lg font-semibold hover: bg-cyan-300 transition-all duration-300 text-center block"
                      >
                        Start Free Trial;
                      </a>,
                    </div>))}
                </div>

                <div className="text-center"></div>
                  <p className="text-gray-300 mb-4">Need a custom plan? We offer enterprise solutions tailored to your specific needs.<a
                <div className="text-center"></div>
                  <p className="text-gray-300 mb-4">Need a custom plan? We offer enterprise solutions tailored to your specific needs.</p><a
                    href="/contact?service=ai-content-writer&plan=enterprise"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold"
                  >Contact Sales →</a>
                  </a>
                </div>
              </div>
                  <p className="text-gray-300 mb-4">
                    Need a custom plan? We offer enterprise solutions tailored to your specific needs.
                  </p>
                  <a;
                    href="/contact?service=ai-content-writer&plan=enterprise"
                    className="text-cyan-400 hover: text-cyan-300 font-semibold"
                  >,
                    Contact Sales →,
                  </a>,
                </div>,
              </div>)}

            {activeTab === 'testimonials' && (
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">What Our Customers Say<p className="text-lg text-gray-300 max-w-3xl mx-auto">Join thousands of satisfied customers who have transformed their content strategy.<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
                  <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">
                    What Our Customers Say;
                  </h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Join thousands of satisfied customers who have transformed their content strategy.
                  </p>
                </div>,
,
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
                  {testimonials.map((testimonial, index) => (</div>
                    <div key={index} className="cyber-card hologram-card p-6"></div>
                      <div className="flex mb-4">{[...Array(testimonial.rating)].map((_, i) => (<span key={i} className="text-yellow-400 text-xl">★</span>
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">What Our Customers Say</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Join thousands of satisfied customers who have transformed their content strategy.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
                    <div key={index} className="cyber-card hologram-card p-6"></div>
                      <div className="flex mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                      <div></div>
                        <div className="font-semibold text-white">{testimonial.name}</div><div className="text-sm text-gray-400">{testimonial.role}</div><div className="text-sm text-cyan-400">{testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Frequently Asked Questions<div className="space-y-6">{[</div>
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Frequently Asked Questions</h2><div className="space-y-6">{[
                    {</div>
                  <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">
                    Frequently Asked Questions;
                  </h2>
                </div>

                <div className="space-y-6">
                  {[,
                    {,
                      question: "How does the AI content generation work?",
                      answer: "Our platform uses GPT-4 technology combined with advanced prompts and your brand guidelines to generate high-quality content. You simply provide a topic, tone, and any specific requirements, and our AI creates content that matches your brand voice."
                    },
                    {
                      question: "Can I customize the AI to match my brand voice?",
                      answer: "Yes! You can train the AI on your existing content to learn your brand voice, tone, and style. You can also create multiple brand profiles for different content types or audiences."
                    },
                    {
                      question: "Is the content SEO-optimized?",
                      answer: "Absolutely. Every piece of content is automatically optimized for SEO with keyword integration, meta descriptions, proper heading structure, and readability optimization. You can also specify target keywords for each piece of content."
                    },
                    {
                      question: "What content types can I create?",
                      answer: "You can create blog posts, articles, social media content, email campaigns, product descriptions, press releases, white papers, ad copy, landing pages, and much more. We also support multiple languages."
                    },
                    {
                      question: "How accurate is the content?",
                      answer: "Our AI generates highly accurate and relevant content, but we always recommend reviewing and editing the output to ensure it meets your specific needs. The platform also includes plagiarism detection and fact-checking tools."
                    },
                    {
                      question: "Can I collaborate with my team?",
                      answer: "Yes! The Professional and Enterprise plans include team collaboration features, approval workflows, and shared brand guidelines. You can assign roles and permissions to team members."</div>
                    }</div>
                  ].map((faq, index) => (</div>
                    <div key={index} className="cyber-card hologram-card p-6"></div>
                      <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3><p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Transform Your Content Strategy?<p className="text-lg text-gray-300 mb-8">Start your free trial today and experience the power of AI-driven content creation.</p>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a;
          <div className="max-w-4xl mx-auto text-center"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Transform Your Content Strategy?</h2><p className="text-lg text-gray-300 mb-8">Start your free trial today and experience the power of AI-driven content creation.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
              >Call: (302) 464-0950<a
                href="/contact?service=ai-content-writer"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Get Started Now</a>
              >
                Call: (302) 464-0950;
              </a>
              <a;
                href="/contact?service=ai-content-writer"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Started Now;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
