import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Brain, Target, BarChart3, CheckCircle, Star, Users, Clock, Zap, Globe, Shield, Sparkles, PenTool, Calendar, DollarSign, FileText, MessageSquare, Mic, Code, Eye, EyeOff, Key, Fingerprint, Smartphone, Laptop, Monitor, Database, Cpu, Network, AlertTriangle } from 'lucide-react';

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />'
          title: 'AI Content Generation','
          description: 'Generate compelling email content, subject lines, and CTAs using advanced AI that understands your brand voice.'
  }
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-400" />'
          title: 'Smart Segmentation','
          description: 'AI-powered audience segmentation that automatically groups subscribers based on behavior, preferences, and engagement patterns.'
  }
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />'
          title: 'Predictive Analytics','
          description: 'Advanced analytics that predict email performance, optimal send times, and subscriber behavior to maximize ROI.'
  }
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />'
          title: 'Automation Workflows','
          description: 'Intelligent email automation that triggers based on subscriber actions, preferences, and engagement levels.'
  }
    },
    {
      icon: <Users className="w-6 h-6 text-pink-400" />'
          title: 'Personalization Engine','
          description: 'Dynamic content personalization that adapts emails to each subscriber\'
  }s interests, behavior, and demographics.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />'
          title: 'Multi-Channel Integration','
          description: 'Seamlessly integrate with social media, SMS, and other marketing channels for unified campaign management.'
  }
    }
  ]
  const emailFeatures = [
    {
      icon: <Mail className="w-8 h-8 text-cyan-400" />'
          title: 'Email Builder','
          description: 'Drag-and-drop email builder with AI-powered templates and content suggestions.'
  },'
      price: 'Included','
      features: ['Drag-and-drop editor', 'AI templates', 'Mobile optimization', 'A/B testing']
    },
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />'
          title: 'AI Content Assistant','
          description: 'Generate subject lines, email content, and CTAs using AI that learns from your best-performing campaigns.'
  },'
      price: 'Included','
      features: ['Subject line generation', 'Content creation', 'CTA optimization', 'Brand voice training']
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />'
          title: 'Smart Segmentation','
          description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns.'
  },'
      price: 'Included','
      features: ['Behavioral segmentation', 'Demographic targeting', 'Engagement scoring', 'Dynamic lists']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />'
          title: 'Advanced Analytics','
          description: 'Comprehensive analytics dashboard with predictive insights and performance optimization.'
  },'
      price: '$9.99/month','
      features: ['Predictive analytics', 'ROI tracking', 'Engagement insights', 'Custom reports']
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />'
          title: 'Automation Studio','
          description: 'Create complex email automation workflows with AI-powered triggers and conditions.'
  },'
      price: '$19.99/month','
      features: ['Visual workflow builder', 'AI triggers', 'Conditional logic', 'Multi-step campaigns']
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />'
          title: 'Deliverability Suite','
          description: 'Advanced deliverability tools to ensure your emails reach the inbox and avoid spam filters.'
  },'
      price: '$14.99/month','
      features: ['Spam score analysis', 'IP warming', 'Reputation monitoring', 'Bounce management']
    }
  ]
  const pricingPlans = [
    {'
      name: 'Starter','
      price: '$29','
      period: '/month','
          description: 'Perfect for small businesses'
  },
      features: ['
        'Up to 5,000 subscribers','
        'Unlimited emails','
        'AI content generation','
        'Basic automation','
        'Email support','
        'Standard templates'
      ],
      popular: false;
    },
    {'
      name: 'Professional','
      price: '$79','
      period: '/month','
          description: 'Ideal for growing businesses'
  },
      features: ['
        'Up to 25,000 subscribers','
        'Everything in Starter','
        'Advanced automation','
        'Predictive analytics','
        'Priority support','
        'Custom integrations','
        'A/B testing'
      ],
      popular: true;
    },
    {'
      name: 'Enterprise','
      price: '$199','
      period: '/month','
          description: 'For large organizations'
  },
      features: ['
        'Unlimited subscribers','
        'Everything in Professional','
        'Advanced analytics','
        'Custom AI training','
        'Dedicated support','
        'White-label options','
        'API access'
      ],
      popular: false;
=======
    }
>>>>>>> origin/main
  ]

  const stats = ['
    { number: '40%', label: 'Higher Open Rates', icon: <Mail className="w-6 h-6 text-cyan-400"> },'
    { number: '60%', label: 'Better Click Rates', icon: <Target className="w-6 h-6 text-emerald-400"> },'
    { number: '300%', label: 'ROI Increase', icon: <BarChart3 className="w-6 h-6 text-purple-400"> },'
    { number: '50K+', label: 'Active Users', icon: <Users className="w-6 h-6 text-orange-400"> }
  ]
  const testimonials = [
    {'
      name: 'Jennifer Smith','
      company: 'E-commerce Store','
      content: 'Zion Tech Group\'s AI Email Marketing has transformed our email campaigns. Our open rates increased by 40% and our revenue from email marketing has tripled in just 3 months.',
      rating: 5
    },
    {'
      name: 'Michael Chen','
      company: 'SaaS Startup','
      content: 'The AI content generation is incredible. We can now create personalized email campaigns for different customer segments in minutes instead of hours. The automation features are a game-changer.',
      rating: 5
    },
    {'
      name: 'Sarah Johnson','
      company: 'Marketing Agency','
      content: 'The predictive analytics help us optimize our campaigns before we even send them. We\'ve been able to increase our clients\' email ROI by 300% using this platform.',
      rating: 5;
  ]
  return (
    
    <div>
      <Helmet />
        <title>AI Email Marketing - Intelligent Email Campaigns | Zion Tech Group</title>
        <meta />
        <meta />
        <link />
      </Helmet>

      <div />
        {/* Hero Section */}
        <section>
        <div>
    <div />
            <div>
    <Mail />
              <span>AI-Powered Email Marketing</span>
            </div>
            
            <h1>Intelligent  <span>AI Email Marketing</span></h1>
            
            <p />
              Transform your email marketing with AI-powered campaigns. Smart segmentation, 
              content generation, and automation to maximize your email ROI and engagement.
            </p>
            
            <div>
    <Link />
                <span>Start Free Trial</span>
                <ArrowRight />
              </Link>
              <Link />
                <span>View Demo</span>
                <ArrowRight />
              </Link>
            </div>
          </div>
      </section>
        {/* Stats Section */}
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Email Marketing?</span>
              </h2>
              <p />
                Experience the power of AI-driven email marketing with our proven results.
              </p>
            </div>
            
            <div />
              {stats.map((stat, index) => (
                <div>
    <div />
                    {stat.icon}
                  </div>
                  <div />
                    {stat.number}
                  </div>
                  <div />
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Features Section */}
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Email Features</span>
              </h2>
              <p />
                Everything you need to create, send, and optimize email campaigns with artificial intelligence.
              </p>
            </div>
            
            <div />
              {features.map((feature, index) => (
                <div>
    <div />
                    {feature.icon}
                  </div>
                  <h3 />
                    {feature.title}
                  </h3>
                  <p />
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Email Features Section */}
        <section>
        <div>
    <div />
              <h2 />
                Email <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p />
                Comprehensive email marketing features powered by artificial intelligence.
              </p>
            </div>
            
            <div />
              {emailFeatures.map((feature, index) => (
                <div>
    <div />
                    <div>
    <div />
                        {feature.icon}
                      </div>
                      <h3 />
                        {feature.title}
                      </h3>
                    </div>
  </div>
  <p />
                    {feature.description}
                  </p>
                  <div>
    <div />
                      {feature.price}
                    </div>
                    <div />
                      {feature.features.map((feat, featureIndex) => (
                        <div>
    <CheckCircle />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link />
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Pricing Section */}
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p />
                Choose the plan that fits your email marketing needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div />
              {pricingPlans.map((plan, index) => (
                <div />
                  {plan.popular && (
                    <div>
    <div />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div>
    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div>
    <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
  </div>
  <ul />
                    {plan.features.map((feature, featureIndex) => (
                      <li />
                        <CheckCircle />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link />
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Testimonials Section */}
        <section>
        <div>
    <div />
              <h2 />
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Marketers Say</span>
              </h2>
              <p />
                Join thousands of marketers who have transformed their email campaigns with our AI platform.
              </p>
            </div>
            
            <div />
              {testimonials.map((testimonial, index) => (
                <div>
    <div />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star />
                    ))}
                  </div>
                  <p />
                    "{testimonial.content}"
                  </p>
                  <div>
    <div />
                      <span />'
                        {testimonial.name.split(' ').map(n => n[0]).join(';)}
                      </span>
                    </div>
                    <div />
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
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
    <div />
            <div>
    <h2 />
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Email Marketing?</span>
              </h2>
              
              <p />
                Join thousands of marketers using our AI platform to create high-performing email campaigns. 
                Start your free trial today and see the difference AI can make.
              </p>
              
              <div>
    <Link />
                  <span>Start Free Trial</span>
                  <ArrowRight />
                </Link>
                <Link />
                  <span>View All Plans</span>
                  <ArrowRight />
                </Link>
              </div>
        </div>
      </div>
      </section>
      </div>
    </>
  )
}

export default AIEmailMarketingPage;