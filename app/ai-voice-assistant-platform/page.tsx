'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Mic, Brain, Globe, Zap, ArrowRight, Star, CheckSquare, Shield, Smartphone, Users, Target, MessageCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AIVoiceAssistantPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Natural Voice Recognition',
      description: 'Advanced speech-to-text with 99.9% accuracy in 50+ languages and dialects',
      benefits: ['Multi-language support', 'Accent recognition', 'Noise cancellation', 'Real-time processing']
    },
    {
      icon: Brain,
      title: 'AI Conversation Engine',
      description: 'Intelligent conversation management with context awareness and memory',
      benefits: ['Context retention', 'Intent recognition', 'Response generation', 'Learning capabilities']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Deploy across web, mobile, IoT devices, and smart speakers seamlessly',
      benefits: ['Web integration', 'Mobile SDKs', 'IoT compatibility', 'Smart speaker support']
    },
    {
      icon: Zap,
      title: 'Custom Voice Training',
      description: 'Train custom voice models for your brand voice and specific use cases',
      benefits: ['Brand voice training', 'Custom wake words', 'Domain-specific training', 'Continuous learning']
    }
  ]
  const useCases = [
    {
      title: 'Customer Service',
      description: '24/7 intelligent customer support with natural conversations',
      icon: MessageCircle,
      benefits: ['Reduce support costs by 60%', 'Handle 10x more inquiries', 'Multilingual support', 'Instant responses']
    },
    {
      title: 'E-commerce',
      description: 'Voice shopping and product recommendations',
      icon: Target,
      benefits: ['Voice search', 'Product recommendations', 'Order management', 'Inventory queries']
    },
    {
      title: 'Healthcare',
      description: 'Patient assistance and appointment scheduling',
      icon: Users,
      benefits: ['Appointment booking', 'Symptom checking', 'Medication reminders', 'Health monitoring']
    },
    {
      title: 'Smart Home',
      description: 'Control IoT devices and home automation',
      icon: Smartphone,
      benefits: ['Device control', 'Routine automation', 'Energy management', 'Security monitoring']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 interactions/month',
        'Basic voice recognition',
        '5 languages',
        'Email support',
        'Web integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10,000 interactions/month',
        'Advanced AI features',
        '20 languages',
        'Priority support',
        'Mobile SDKs',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited interactions',
        'Custom voice models',
        '50+ languages',
        'Dedicated support',
        'On-premise deployment',
        'White-label solution'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'Dr. Jennifer Walsh',
      role: 'CEO',
      company: 'MediCare Solutions',
      content: 'Our AI voice assistant handles 80% of patient inquiries automatically. Patient satisfaction increased by 45%.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'CTO',
      company: 'SmartRetail',
      content: 'Voice shopping has increased our conversion rate by 35%. Customers love the natural conversation experience.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Customer Success Director',
      company: 'TechCorp',
      content: 'We reduced support costs by 60% while improving response times. The AI understands context perfectly.',
      rating: 5
    }
  ]
  return (
    <div> </div><Helmet> </Helmet><title>AI Voice Assistant Platform - Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
      
      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><Mic>AI-Powered Voice Technology
            </Mic></div>
            <h1>AI Voice Assistant Platform
            </h1></h1>
            <p>Build intelligent voice assistants with natural language understanding, multi-language support, and enterprise integration. 
              Achieve 99.9% accuracy and deploy across all platforms.
            </p></p>
            <div> </div><button>Start Free Trial
                </button><ArrowRight> </ArrowRight></button>
              <button>Watch Demo
              </button></button>
            </div>
            <div>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
            </div></div>
          </div>
        </section>

        {/* Features Section */}
        <section> </section><div> </div><div> </div><h2>Advanced Voice AI Features
              </h2></h2>
              <p>Leverage cutting-edge voice AI technology to create natural, intelligent conversations.
              </p></p>
            </div>
            <div>{features.map((feature, index) => (
                </div><div> </div><div> </div><feature> </feature></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul>{feature.benefits.map((benefit, idx) => (
                      </ul><li> </li><CheckSquare>{benefit}
                      </CheckSquare></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section> </section><div> </div><div> </div><h2>Industry Use Cases
              </h2></h2>
              <p>Deploy voice AI across various industries with proven results and ROI.
              </p></p>
            </div>
            <div>{useCases.map((useCase, index) => (
                </div><div> </div><div> </div><useCase> </useCase></div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul>{useCase.benefits.map((benefit, idx) => (
                      </ul><li> </li><CheckSquare>{benefit}
                      </CheckSquare></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section> </section><div> </div><div> </div><h2>Simple, Transparent Pricing
              </h2></h2>
              <p>Choose the plan that fits your voice AI needs. All plans include our core features.
              </p></p>
            </div>
            <div>{pricingPlans.map((plan, index) => (
                </div><div>{plan.popular && (
                    </div><div>Most Popular
                    </div></div>
                  )}
                  <div> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div> </div><span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul>{plan.features.map((feature, idx) => (
                      </ul><li> </li><CheckSquare>{feature}
                      </CheckSquare></li>
                    ))}
                  </ul>
                  <button>{plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button></button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section> </section><div> </div><div> </div><h2>What Our Customers Say
              </h2></h2>
              <p>Join thousands of businesses who have transformed their customer experience with voice AI.
              </p></p>
            </div>
            <div>{testimonials.map((testimonial, index) => (
                </div><div> </div><div>{[...Array(testimonial.rating)].map((_, i) => (
                      </div><Star>))}
                  </Star></div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div> </div><div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section> </section><div> </div><div> </div><h2>Ready to Build Your Voice Assistant?
              </h2></h2>
              <p>Start your free trial today and experience the power of AI-driven voice technology.
              </p></p>
              <div> </div><button>Start Free Trial
                  </button><ArrowRight> </ArrowRight></button>
                <button>Schedule Demo
                </button></button>
              </div>
              <div>Questions? Call us at </div><a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer> </Footer></div>
  )
}
export default AIVoiceAssistantPlatformPage