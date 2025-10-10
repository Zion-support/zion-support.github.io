'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

export default function AIContentWriterPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      category: 'Content Generation',
      items: [
        'GPT-4 powered content creation',
        'Blog posts and articles',
        'Social media content',
        'Email marketing campaigns',
        'Product descriptions',
        'Press releases',
        'White papers and case studies',
        'Ad copy and landing pages'
      ]
    },
    {
      category: 'SEO & Optimization',
      items: [
        'Keyword research and integration',
        'SEO score optimization',
        'Meta descriptions and titles',
        'Internal linking suggestions',
        'Readability optimization',
        'Content structure analysis',
        'Competitor content analysis',
        'Search intent matching'
      ]
    },
    {
      category: 'Brand & Customization',
      items: [
        'Brand voice training',
        'Tone and style customization',
        'Industry-specific templates',
        'Content guidelines enforcement',
        'Brand consistency checking',
        'Custom content frameworks',
        'Team collaboration tools',
        'Approval workflows'
      ]
    },
    {
      category: 'Analytics & Insights',
      items: [
        'Content performance tracking',
        'Engagement metrics analysis',
        'ROI measurement',
        'A/B testing capabilities',
        'Content calendar management',
        'Publishing schedule optimization',
        'Team productivity metrics',
        'Content audit reports'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 49,
      period: 'month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        '10,000 words per month',
        'Basic SEO optimization',
        '5 brand voice profiles',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 99,
      period: 'month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '50,000 words per month',
        'Advanced SEO optimization',
        'Unlimited brand voice profiles',
        'Premium templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration (5 users)',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        'Full SEO suite',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager',
        'Custom analytics dashboard',
        'Unlimited team members',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Marketing Director',
      content: 'AI Content Writer Pro has revolutionized our content strategy. We\'ve increased our blog traffic by 300% and reduced content creation time by 70%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Agency',
      role: 'Content Manager',
      content: 'The SEO optimization features are incredible. Our content now ranks higher and drives more qualified leads than ever before.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Store',
      role: 'Founder',
      content: 'As a solo entrepreneur, this tool has been a game-changer. I can now produce professional-quality content at scale without a team.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation /></Navigatio>

      <main className="relative z-10 pt-20">{/* Hero Section */}</mai>
        <section className="py-20 px-4 text-center"></sectio>
          <div className="max-w-6 xl mx-auto"></div>
            <div className="text-6 xl mb-6"></div>✍️<h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6 neon-text cyber-text"></h1></<<<h1>AI</h1></<<h1>Content</h1> Writer Pro<p className="text-xl md:text-2 xl text-cyan-400 mb-8 font-medium cyber-glow"></p></<<<p>Advanced</p></<<p>AI</p>-powered content creation platform<p className="text-base sm:text-lg text-gray-300 max-w-4 xl mx-auto mb-12 leading-relaxed">Transform your content strategy with our cutting-edge AI technology. Generate high-quality,</p></<<<p>SEO</p>-optimized content at scale while maintaining your unique brand voice.</p>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
              <a
                href="#pricing"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
              >Start Free Trial</a><a
                href="#demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Watch Demo</a>
              </a>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4 xl mx-auto"></div>
              <div className="cyber-card hologram-card p-6"></div>
                <div className="text-3 xl font-bold text-cyan-400 mb-2"></div>300%<div className="text-gray-300">Average Traffic Increase</div>
              </div>
              <div className="cyber-card hologram-card p-6"></div>
                <div className="text-3 xl font-bold text-cyan-400 mb-2"></div>70%<div className="text-gray-300">Time Saved</div>
              </div>
              <div className="cyber-card hologram-card p-6"></div>
                <div className="text-3 xl font-bold text-cyan-400 mb-2"></div>50 K+<div className="text-gray-300">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 px-4 bg-slate-800/30"></sectio>
          <div className="max-w-6 xl mx-auto"></div>
            <div className="flex flex-wrap justify-center gap-4"></div>{['overview', 'features', 'pricing', 'testimonials', 'faq'].map((tab) => (<button
                  key={tab}
                  onClick={() =>setActiveTab(tab)}</button></<<<butto>className</butto></butto>={`px-6 py-3 rounded-lg transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? 'bg-cyan-400 text-slate-900 font-semibold'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                ></button>
                  {tab}</button>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4"></sectio>
          <div className="max-w-6 xl mx-auto">{activeTab === 'overview' && (</div>
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Why</h2></<<h2>Choose</h2> AI Content Writer Pro?<p className="text-lg text-gray-300 max-w-3 xl mx-auto">Our platform combines the power of GPT-4 with advanced SEO optimization and brand customization</p></<<<p>to</p></<<p>deliver</p> content that not only engages your audience but also drives results.</p>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                  <div className="cyber-card hologram-card p-6"></div>
                    <div className="text-4 xl mb-4"></div>🤖<h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>AI</h3></h3>-Powered Generation<p className="text-gray-300">Leverage the latest GPT-4 technology to create high-quality content that matches your brand voice and style.</p>
                    </p>
                  </div>
                  <div className="cyber-card hologram-card p-6"></div>
                    <div className="text-4 xl mb-4"></div>📈<h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>SEO</h3></<<h3>Optimization</h3><p className="text-gray-300">Built-in SEO tools ensure your content ranks higher in search results and drives organic traffic.</p>
                    </p>
                  </div>
                  <div className="cyber-card hologram-card p-6"></div>
                    <div className="text-4 xl mb-4"></div>⚡<h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Scale</h3></<<h3>Efficiently</h3><p className="text-gray-300">Produce 10 x more content in the same time while maintaining quality and consistency across all channels.</p>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Comprehensive</h2></<<h2>Feature</h2> Set<p className="text-lg text-gray-300 max-w-3 xl mx-auto">Everything you need to create, optimize, and manage content at scale.</p>
                  </p>
                </div>

                {features.map((category, index) => (
                  <div key={index} className="cyber-card hologram-card p-8"></div>
                    <h3 className="text-2 xl font-bold text-white mb-6 text-center neon-text"></h>{category.category}<div className="grid grid-cols-1 md:grid-cols-2 gap-4">{category.items.map((item, itemIndex) => (</div>
                        <div key={itemIndex} className="flex items-center space-x-3"></div>
                          <span className="text-cyan-400 text-xl"></spa>✓<span className="text-gray-300">{item}</spa>
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
                  <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Simple</h2></h2>, Transparent Pricing<p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Choose</p></<<p>the</p> plan that fits your content needs. All plans include a 14-day free trial.<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>{pricingPlans.map((plan, index) => (<div
                      key={index}
                      className={`cyber-card hologram-card p-8 ${
                        plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                      }`}
                    >{plan.popular && (</div>
                        <div className="text-center mb-6"></div>
                          <span className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">Most Popular</spa>
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-8"></div>
                        <h3 className="text-2 xl font-bold text-white mb-2"></h>{plan.name}<p className="text-gray-300 mb-4">{plan.description}</p>
                        <div className="text-4 xl font-bold text-cyan-400 mb-2"></div>${plan.price}<span className="text-lg text-gray-400"></spa>/{plan.period}<ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</u>
                          <li key={featureIndex} className="flex items-center space-x-3"></l>
                            <span className="text-cyan-400"></spa>✓<span className="text-gray-300">{feature}</spa>
                          </li>
                        ))}
                      <a
                        href={`/contact?service=ai-content-writer&plan=${plan.name.toLowerCase()}`}
                        className="w-full bg-cyan-400 text-slate-900 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 text-center block"
                      >Start Free Trial</a>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="text-center"></div>
                  <p className="text-gray-300 mb-4"></p></<<<p>Need</p></<<p>a</p> custom plan? We offer enterprise solutions tailored to your specific needs.<a
                    href="/contact?service=ai-content-writer&plan=enterprise"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold"
                  >Contact Sales →</a>
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>What</h2></<<h2>Our</h2> Customers Say<p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Join</p></<<p>thousands</p> of satisfied customers who have transformed their content strategy.<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
                    <div key={index} className="cyber-card hologram-card p-6"></div>
                      <div className="flex mb-4"></div>{[...Array(testimonial.rating)].map((_, i) => (<span key={i} className="text-yellow-400 text-xl">★</spa>
                        ))}
                      <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                      <div></div>
                        <div className="font-semibold text-white"></div>{testimonial.name}<div className="text-sm text-gray-400"></div>{testimonial.role}<div className="text-sm text-cyan-400">{testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="space-y-16"></div>
                <div className="text-center"></div>
                  <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Frequently</h2></<<h2>Asked</h2> Questions<div className="space-y-6">{[</div>
                    {
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
                      answer: "Yes! The Professional and Enterprise plans include team collaboration features, approval workflows, and shared brand guidelines. You can assign roles and permissions to team members."
                    }</div>
                  ].map((faq, index) => (</div>
                    <div key={index} className="cyber-card hologram-card p-6"></div>
                      <h3 className="text-xl font-bold text-white mb-4"></h>{faq.question}<p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30"></sectio>
          <div className="max-w-4 xl mx-auto text-center"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Ready</h2></<<h2>to</h2> Transform Your Content Strategy?<p className="text-lg text-gray-300 mb-8">Start your free trial today and experience the power of AI-driven content creation.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
              >Call: (302) 464-0950</a><a
                href="/contact?service=ai-content-writer"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Get Started Now</a>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Foote>
      <ScrollToTop /></ScrollToTo>
    </div>
  );
}