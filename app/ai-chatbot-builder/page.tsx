<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
<<<<<<< HEAD
export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiChatbotBuilderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Ai Chatbot Builder services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-chatbot-builder, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Ai Chatbot Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional ai chatbot builder services by Zion Tech Group.
=======
export default function AiChatbotBuilderPage() {
=======
export default function AiChatbotBuilder() {
>>>>>>> cursor/fix-errors-and-merge-to-main-5443
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced ai chatbot builder solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
<<<<<<< HEAD
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced ai chatbot builder solutions. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
  );
}
=======
'use client';';
import React, {useState, useEffect}from 'react';';';
import Navigation from '../components/Navigation';';';
import Footer from '../components/Footer';';';
import {MessageCircle, Bot, Zap, Shield, CheckCircle, Star, ArrowRight, Brain, Globe, Users, Settings, BarChart}}from 'lucide-react';';'
;
const AIChatbotBuilder: React.FC = () => {,;
const [isLoaded, setIsLoaded] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
    setIsLoaded(true);}, []);
;
const features = [
  // TODO: Add items
]
  // TODO: Add items
]
    {icon: Bot,
      title: 'No-Code Builder','
      description: 'Create intelligent chatbots without any programming knowledge','
      benefits: ['Drag & drop interface', 'Visual flow builder', 'Pre-built templates']},'
    {icon: Brain,
      title: 'AI-Powered Responses','
      description: 'Natural language processing for human-like conversations','
      benefits: ['Context awareness', 'Sentiment analysis', 'Multi-language support']},'
    {icon: Globe,
      title: '50+ Languages','
      description: 'Deploy chatbots in multiple languages for global reach','
      benefits: ['Auto-translation', 'Cultural adaptation', 'Local dialects']},'
    {icon: BarChart,
      title: 'Analytics Dashboard','
      description: 'Track performance with detailed analytics and insights','
      benefits: ['Conversation metrics', 'User satisfaction', 'Conversion tracking']},'
    {icon: Settings,
      title: 'Easy Integration','
      description: 'Connect with your existing tools and platforms','
      benefits: ['CRM integration', 'Live chat handoff', 'API access']},'
    {icon: Shield,
      title: 'Enterprise Security','
      description: 'Bank-level security with data protection and compliance','
      benefits: ['GDPR compliant', 'SOC 2 certified', 'End-to-end encryption']}];'
;
const useCases = [
  // TODO: Add items
]
  // TODO: Add items
]
    {title: 'Customer Support','
      description: '24/7 automated customer service with instant responses','
      icon: MessageCircle,
      benefits: ['Reduce support tickets by 70%', 'Instant response time', '24/7 availability']},'
    {title: 'Lead Generation','
      description: 'Qualify and capture leads automatically','
      icon: Users,
      benefits: ['Qualify leads instantly', 'Capture contact information', 'Schedule appointments']},'
    {title: 'Sales Assistant','
      description: 'Guide customers through the sales process','
      icon: BarChart,
      benefits: ['Product recommendations', 'Price inquiries', 'Order processing']},'
    {title: 'Internal Support','
      description: 'Help employees with HR and IT questions','
      icon: Settings,
      benefits: ['HR policy questions', 'IT troubleshooting', 'Employee onboarding']}];'
;
const pricingPlans = [
  // TODO: Add items
]
  // TODO: Add items
]
    {name: 'Starter','
      price: '$79','
      period: '/month','
      description: 'Perfect for small businesses','
      features: [,
        '1 chatbot','
        '1,000 conversations/month','
        'Basic AI responses','
        'Email support','
        'Standard templates''
      ],
      popular: false;,},
    {name: 'Professional','
      price: '$149','
      period: '/month','
      description: 'Ideal for growing companies','
      features: [,
        '5 chatbots','
        '10,000 conversations/month','
        'Advanced AI features','
        'Priority support','
        'Custom integrations','
        'Analytics dashboard''
      ],
      popular: true;,},
    {name: 'Enterprise','
      price: '$299','
      period: '/month','
      description: 'For large organizations','
      features: [,
        'Unlimited chatbots','
        'Unlimited conversations','
        'Custom AI training','
        '24/7 phone support','
        'White-label options','
        'Dedicated account manager''
      ],
      popular: false;,}];
;
const testimonials = [
  // TODO: Add items
]
  // TODO: Add items
]
    {name: 'David Kim','
      role: 'Customer Success Manager, TechFlow','
      content: 'Our chatbot handles 80% of customer inquiries automatically. Customer satisfaction increased by 40%.','
      rating: 5;,},
    {name: 'Lisa Martinez','
      role: 'Marketing Director, GrowthHub','
      content: 'The lead generation chatbot has increased our qualified leads by 250%. Setup was incredibly easy.','
      rating: 5;,},
    {name: 'James Wilson','
      role: 'CEO, StartupXYZ','
      content: 'We saved $50,000 annually in support costs. The AI responses are so natural, customers love it.','
      rating: 5;,}];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-bg quantum-particles">)</div>"
<Navigation />
<main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */</main>} <section className={`text-center mb-16 transition-all duration-1000 ${"
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>'
<div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">"
<Bot className="w-4 h-4 text-green-400" />"
<span className="text-green-400 text-sm font-medium">AI Chatbot Platform</span></div>"
<h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">,</h1>"
            AI Chatbot Builder;
          </h1>
<p className="text-xl md: text-2xl text-green-400 mb-8 font-medium">,</p>"
            Create Intelligent Chatbots in Minutes;
          </p>
<p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">Build powerful AI chatbots for customer support, lead generation, and sales automation.</p>"
            No coding required. Deploy in 50+ languages with enterprise-grade security.
          </p>
<div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-16">,</div>"
<a;
              href="tel: +13024640950","
              className="cyber-button w-full sm: w-auto text-center","
            >
              📞 Call Now: (302) 464-0950;,
            </a>
<a;
              href="/contact""
              className="cyber-button w-full sm: w-auto text-center","
              style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}'
            >
              Start Building Free;
            </a></div>

          {/* Key Stats */} <div className="grid grid-cols-1 sm: grid-cols-3 gap-8 max-w-4xl mx-auto">,</div>"
<div className="hologram-card-enhanced p-6 text-center">"
<div className="text-3xl font-bold text-green-400 mb-2">70%</div>"
<div className="text-gray-300">Reduction in Support Tickets</div></div>"
<div className="hologram-card-enhanced p-6 text-center">"
<div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>"
<div className="text-gray-300">Languages Supported</div></div>"
<div className="hologram-card-enhanced p-6 text-center">"
<div className="text-3xl font-bold text-purple-400 mb-2">5 min</div>"
<div className="text-gray-300">Setup Time</div></div>"
</div></section>

        {/* Features Section */} <section className="mb-16">"
<h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>"
            Powerful Features;
          </h2>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>"
            {features.map((feature, index) => (
  // TODO: Add parameters
)
              <div key={index}className="hologram-card-enhanced p-6 hover: scale-105 transition-all duration-300">,</div>"
<div className="text-4xl mb-4 text-green-400">"
<feature.icon className="w-10 h-10" /></div>"
<h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>"
<p className="text-gray-300 mb-4 leading-relaxed">{feature.description</p>}</p>"
<ul className="space-y-2">"
                  {feature.benefits.map((benefit, idx) => (
  // TODO: Add parameters
)
                    <li key={idx}className="flex items-center text-sm text-gray-400">"
<CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                      {benefit} </li>
                  ))}
                </ul></div>
            ))}
          </div></section>

        {/* Use Cases Section */} <section className="mb-16">"
<h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>"
            Use Cases;
          </h2>
<div className="grid grid-cols-1 md: grid-cols-2 gap-8">,</div>"
            {useCases.map((useCase, index) => (
  // TODO: Add parameters
)
              <div key={index}className="hologram-card-enhanced p-8 hover: scale-105 transition-all duration-300">,</div>"
<div className="flex items-start space-x-4">"
<div className="text-4xl text-green-400">"
<useCase.icon className="w-10 h-10" /></div>"
<div className="flex-1">"
<h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>"
<p className="text-gray-300 mb-4 leading-relaxed">{useCase.description</p>}</p>"
<ul className="space-y-2">"
                      {useCase.benefits.map((benefit, idx) => (
  // TODO: Add parameters
)
                        <li key={idx}className="flex items-center text-sm text-gray-400">"
<CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
                          {benefit} </li>
                      ))}
                    </ul></div>
</div>
              ))}

            </div></div>
</section>

        {/* Benefits Section */}
        <section className="py-20 px-4"></section>"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">"
                Why Choose Our Solution?
              </h2>
<p>Proven results that drive business growth and efficiency;</p></p>
</div>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,"
              {benefits.map((benefit, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,"
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,"
                    <CheckCircle /></div>
<p className="text-lg text-white font-medium">{benefit</p>}</p></div>"
              ))}
            </div></div>
</section>
        {/* CTA Section */} <section className="py-20 px-4"></section>"
<div className="max-w-4xl mx-auto text-center"></div>"
<div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>"
<h2>Ready to Get Started?;</h2></h2>
<p>Contact our experts to discuss your requirements and get started today.;</p></p>
<div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,"
                <button>Contact Us;</button></button>
<button>Learn More;</button></button>
</div></div>
          ))
        </section></div>
<Footer></>
  ),
}
export default AiChatbotBuilderPage;

                  </div></div>
</div>
            ))}
          </div></section>

        {/* Pricing Section */} <section className="mb-16">"
<h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>"
            Simple Pricing;
          </h2>
<div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">,</div>"
            {pricingPlans.map((plan, index) => (
  // TODO: Add parameters
)
              <div key={index}className={`hologram-card-enhanced p-8 relative ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                plan.popular ? 'ring-2 ring-green-400 scale-105' : '}`}>{plan.popular && (</div>''
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
<div className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular;</div></div>"
</div>
                )} <div className="text-center mb-6">"
<h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
<p className="text-gray-400 mb-4">{plan.description</p>}</p>"
<div className="flex items-baseline justify-center">"
<span className="text-4xl font-bold text-green-400">{plan.price</span>}</span>"
<span className="text-gray-400 ml-1">{plan.period</span>}</span></div>"
</div>
<ul className="space-y-3 mb-8">"
                  {plan.features.map((feature, idx) => (
  // TODO: Add parameters
)
                    <li key={idx}className="flex items-center text-gray-300">"
<CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />"
                      {feature} </li>
                  ))}
                </ul>
<a;
                  href="/contact""
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                    plan.popular;
                      ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-white hover: from-green-500 hover:to-cyan-600','
                      : 'bg-gray-800 text-white hover: bg-gray-700 border border-gray-600',}`}'
                >
                  Get Started;
                </a></div>
            ))}
          </div></section>

        {/* Testimonials Section */} <section className="mb-16">"
<h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>"
            Customer Success Stories;
          </h2>
<div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>"
            {testimonials.map((testimonial, index) => (
  // TODO: Add parameters
)
              <div key={index}className="hologram-card-enhanced p-6">"
<div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div>"
<Star key={i}className="w-5 h-5 text-yellow-400 fill-current" />"
                  ))}
                </div>
<p className="text-gray-300 mb-4 italic">"{testimonial.content</p>}"</p>"
<div>
<div className="font-semibold text-white">{testimonial.name</div>}</div>"
<div className="text-sm text-gray-400">{testimonial.role</div>}</div></div>"
</div>
            ))}
          </div></section>

        {/* CTA Section */} <section className="text-center">"
<div className="hologram-card-enhanced p-12 max-w-4xl mx-auto">"
<h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>"
              Ready to Build Your AI Chatbot?
            </h2>
<p className="text-xl text-gray-300 mb-8">Join thousands of businesses using our platform to automate customer interactions and boost efficiency.</p></p>"
<div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>"
<a;
                href="tel: +13024640950","
                className="cyber-button w-full sm: w-auto text-center","
              >
                📞 Call (302) 464-0950;
              </a>
<a;
                href="mailto: kleber@ziontechgroup.com","
                className="cyber-button w-full sm: w-auto text-center","
                style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}'
              >
                Email Us;
              </a></div>
</div></section>
</main>
<Footer />

  );
};
>>>>>>> cursor/delete-records-a75e
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiChatbotBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI chatbot builder solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create intelligent chatbots that understand and respond to your customers with natural language processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Natural Language Processing</h3>
            <p className="text-gray-300 mb-6">
              Advanced NLP capabilities for human-like conversations with your customers.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Multi-Platform Support</h3>
            <p className="text-gray-300 mb-6">
              Deploy chatbots across websites, mobile apps, and messaging platforms.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Analytics & Insights</h3>
            <p className="text-gray-300 mb-6">
              Track performance and optimize your chatbot with detailed analytics.
            </p>
          </div>
=======
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
export default AiChatbotBuilderPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
=======
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Ai Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced ai chatbot builder solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-5443
