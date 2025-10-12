import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Message Square, Bot} from 'lucide-react';
import { ArrowRight, Message Square, Bar Chart3, Users, Zap, CheckCircle, Clock, Target, Trending Up, Smartphone, Shield, Bot, Star, Smartphone as Mobile } from 'lucide-react';

export default function A ICustomer Support Chatbot Page() {
  const features = [
    {
      icon: <B ot class Name="w-6h-6t ext-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced N LP understands context, intent, and sentiment with 98% accuracy'
    },
    {
      icon: <M essage Square class Name="w-6h-6t ext-emerald-400" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across website, mobile app, social media, and messaging platforms'
    },
    {
      icon: <B ar Chart3 class Name="w-6h-6t ext-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights into customer satisfaction, response times, and resolution rates'
    },
    {
      icon: <Z ap class Name="w-6h-6t ext-orange-400" />,
      title: 'Instant Responses',
      description: '24/7 availability with sub-second response times for immediate customer assistance'
    },
    {
      icon: <T arget class Name="w-6h-6t ext-pink-400" />,
      title: 'Smart Escalation',
      description: 'Intelligently routes complex queries to human agents when needed'
    },
    {
      icon: <S hield class Name="w-6h-6t ext-red-400" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with G DP R, H IP AA, and S OC 2 compliance'
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic A I features',
        'Website integration',
        'Email support',
        'Basic analytics',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced A I features',
        'Multi-channel support',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'A/B testing',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'All A I features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'S LA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Amanda Foster',
      company: 'E-commerce Store',
      content: 'Reduced our support tickets by 70% and improved customer satisfaction by 40%. The chatbot handles 80% of queries perfectly.',
      rating: 5,
      avatar: 'A F'
    },
    {
      name: 'James Rodriguez',
      company: 'Saa S Company',
      content: 'Our customers love the instant responses. The A I understands complex technical questions better than expected.',
      rating: 5,
      avatar: 'J R'
    },
    {
      name: 'Sarah Kim',
      company: 'Healthcare Provider',
      content: 'The compliance features are excellent. We can provide 24/7 support while maintaining H IP AA compliance.',
      rating: 5,
      avatar: 'S K'
    }
  ]

  const benefits = [
    {
      icon: <C lock class Name="w-8h-8t ext-cyan-400" />,
      title: '70% Faster Resolution',
      description: 'Instant responses reduce average resolution time significantly'
    },
    {
      icon: <T rending Up class Name="w-8h-8t ext-emerald-400" />,
      title: '40% Higher Satisfaction',
      description: 'A I-powered personalization improves customer experience'
    },
    {
      icon: <D ollar Sign class Name="w-8h-8t ext-purple-400" />,
      title: '60% Cost Reduction',
      description: 'Automated responses reduce support team workload'
    },
    {
      icon: <T arget class Name="w-8h-8t ext-orange-400" />,
      title: '98% Accuracy',
      description: 'Advanced N LP ensures accurate understanding and responses'
    }
  ]

  const integrations = [
    { name: 'Slack', icon: '💬' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Zendesk', icon: '🎫' },
    { name: 'Freshdesk', icon: '🆕' },
    { name: 'Intercom', icon: '💬' },
    { name: 'Salesforce', icon: '⚡' },
    { name: 'Hub Spot', icon: '🎯' },
    { name: 'Shopify', icon: '🛍️' },
    { name: 'Word Press', icon: '📝' },
    { name: 'Webflow', icon: '🌐' }
  ]

  const use Cases = [
    { 
      title: 'F AQ Automation', 
      description: 'Answer common questions instantly with intelligent responses',
      icon: '❓',
      benefit: 'Reduce repetitive queries by 80%'
    },
    { 
      title: 'Order Support', 
      description: 'Help customers track orders, process returns, and handle billing',
      icon: '📦',
      benefit: 'Handle 90% of order-related queries'
    },
    { 
      title: 'Technical Support', 
      description: 'Provide step-by-step troubleshooting and technical guidance',
      icon: '🔧',
      benefit: 'Resolve 75% of technical issues automatically'
    },
    { 
      title: 'Lead Qualification', 
      description: 'Qualify leads and schedule demos with sales team',
      icon: '🎯',
      benefit: 'Increase qualified leads by 50%'
    },
    { 
      title: 'Appointment Booking', 
      description: 'Schedule appointments and manage calendar availability',
      icon: '📅',
      benefit: 'Reduce no-shows by 30%'
    },
    { 
      title: 'Complaint Handling', 
      description: 'De-escalate issues and route to appropriate departments',
      icon: '😤',
      benefit: 'Improve complaint resolution by 60%'
    }
  ]

  return (

    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Customer Support Chatbot - Zion Tech Group | Intelligent Customer Service</t itle>
        <m eta name="description" content="Revolutionary A I-powered customer support chatbot with natural language processing, multi-channel support, and real-time analytics. Reduce support costs by 60%. Starting at $49/month." / / />
        <m eta name="keywords" content="A I chatbot, customer support automation, natural language processing, multi-channel support, customer service A I, support automation" / / />
        <m eta name="robots" content="index, follow" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-customer-support-chatbot" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r elative py-20px-4overflow-hidden" />
        <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i nline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
            <M essage Square class Name="w-4h-4" / />
            <s pan>A I-Powered Customer Support</s pan>
          </d iv>
          
          <h1 c lass Name="t ext-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            A I Customer Support

            <b r / />
            <s pan class Name="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Chatbot
            </s pan>
          </h1>
          
          <p c lass Name="t ext-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
            Transform your customer support with A I-powered chatbots that provide instant, intelligent responses. 
            Reduce support costs by 60% while improving customer satisfaction by 40%.
          </p>

          <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g roup bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="#pricing" class Name="g roup border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>View Pricing</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>

          {/* Key Stats */}

          <d iv class Name="g rid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto">
        </d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="t ext-3 xl font-boldtext-cyan-400mb-2">70%</d iv>
              <d iv class Name="t ext-gray-300text-sm">Faster Resolution</d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="t ext-3 xl font-boldtext-purple-400mb-2">98%</d iv>
              <d iv class Name="t ext-gray-300text-sm">Accuracy Rate</d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="t ext-3 xl font-boldtext-pink-400mb-2">60%</d iv>
              <d iv class Name="t ext-gray-300text-sm">Cost Reduction</d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="t ext-3 xl font-boldtext-emerald-400mb-2">30 K+</d iv>
              <d iv class Name="t ext-gray-300text-sm">Active Users</d iv>
          </d iv>
      </s ection>

      {/* Benefits Section */}

      <s ection class Name="p y-20px-4relative" />
        <d iv class Name="a bsolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Why Choose Our <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">A I Chatbot?</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              Experience the future of customer support with cutting-edge A I technology that works for your business.

            </p>
          </d iv>
          
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
            {benefits.map((benefit, index) => (

              <d iv key="{index}" class Name="t ext-centergroup" />
                <d iv class Name="f lex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon}
                </d iv>
                <h3 c lass Name="t ext-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title}
                </h3>
                <p c lass Name="t ext-gray-300" />
                  {benefit.description}

                </p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Use Cases Section */}

      <s ection class Name="p y-20px-4relative" />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Powerful <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Use Cases</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              Deploy A I chatbots across various customer support scenarios for maximum impact and efficiency.

            </p>
          </d iv>
          
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {use Cases.map((use Case, index) => (

              <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <d iv class Name="t ext-centermb-6">
        </d iv>
                  <d iv class Name="t ext-4xlmb-4">{use Case.icon}</d iv>
                  <h3 c lass Name="t ext-xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{use Case.title}
                  </h3>
                </d iv>
                <p c lass Name="t ext-gray-300text-centermb-4" />
                  {use Case.description}

                </p>
                <d iv class Name="t ext-cyan-400 text-smfont-semiboldtext-center">{use Case.benefit}
                </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Advanced Features for <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Support</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              Everything you need to provide exceptional customer support with A I-powered intelligence.

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
                <p c lass Name="t ext-gray-300leading-relaxed" />
                  {feature.description}

                </p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Integrations Section */}

      <s ection class Name="p y-20px-4relative" />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Seamless <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Integrations</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              Connect with your existing tools and platforms for a unified customer support experience.

            </p>
          </d iv>
          
          <d iv class Name="g rid grid-cols-2md:grid-cols-5gap-8">
        </d iv>
            {integrations.map((integration, index) => (

              <d iv key="{index}" class Name="g rouptext-center" />
                <d iv class Name="w-20 h-20 b g-white/10 backdrop-blur-lg rounded-2 xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-allduration-300group-hover:scale-110">
        </d iv>
                  <s pan class Name="t ext-3xl">{integration.icon}</s pan>
                </d iv>
                <d iv class Name="t ext-gray-300group-hover:text-whitetransition-colors">{integration.name}
                </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ection id="pricing" class Name="p y-20px-4relative" />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Simple, Transparent <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              Choose the plan that fits your conversation volume and support needs. All plans include our core A I features.

            </p>
          </d iv>
          
          <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d iv key="{index}" class Name="{`r elative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
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
                  <p c lass Name="t ext-gray-300text-smmb-4">{plan.description}</p>
                  <d iv class Name="f lexitems-baselinejustify-center" />
                    <s pan class Name="t ext-5 xlfont-boldtext-cyan-400">{plan.price}</s pan>
                    <s pan class Name="t ext-gray-300ml-2">{plan.period}</s pan>
                  </d iv>
                
                <u l class Name="s pace-y-4mb-8" />
                  {plan.features.map((feature, feature Index) => (

                    <l i key="{feature Index}" class Name="f lexitems-centerspace-x-3" />
                      <C heck Circle class Name="w-5 h-5t ext-green-400flex-shrink-0" / />
                      <s pan class Name="t ext-gray-300">{feature}</s pan>
                    </l i>
                  ))}
                </u l>
                
                <L ink 
                  to="/contact"
                  class Name="{`b lock" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started

                </L ink>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Testimonials Section */}

      <s ection class Name="p y-20px-4relative" />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Trusted by <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">30,000+</s pan> Businesses
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              See what our customers are saying about their success with our A I customer support chatbot.

            </p>
          </d iv>
          
          <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d iv key="{index}" class Name="b g-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <d iv class Name="f lexitems-centermb-4">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <d iv class Name="f ont-semiboldtext-white">{testimonial.name}</d iv>
                    <d iv class Name="t ext-gray-400text-sm">{testimonial.company}</d iv>
                </d iv>
                <d iv class Name="f lexmb-4">
        </d iv>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <S tar key="{i}" class Name="w-5 h-5t ext-yellow-400fill-current" />
                  ))}

                </d iv>
                <p c lass Name="t ext-gray-300italic">"{testimonial.content}"</p>
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
              <d iv class Name="r elativez-10">
        </d iv>
                <h2 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                  Ready to Transform Your <s pan class Name="b g-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Customer Support?</s pan>
                </h2>
                
                <p c lass Name="t ext-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                  Join thousands of businesses already reducing support costs by 60% with our A I-powered chatbot. 
                  Start your free trial today and experience the future of customer support.
                </p>

                <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-8">
        </d iv>
                  <L ink to="/contact" class Name="g roup bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <s pan>Start Free Trial</s pan>
                    <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                  </L ink>
                  <L ink to="#pricing" class Name="g roup border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <s pan>View All Plans</s pan>
                    <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                  </L ink>
                </d iv>

                <d iv class Name="t ext-white/80text-sm">
        </d iv>
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </d iv>
            </d iv>
        </d iv>
      </s ection>
    </d iv>
  );
}
