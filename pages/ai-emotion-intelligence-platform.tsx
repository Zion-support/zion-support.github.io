import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, 
  Zap, DollarSign, Shield, Mail, MapPin, Brain,
  Sparkles, Users, Clock, Award, Eye, Heart,
  MessageCircle, BarChart3, Globe, Smartphone
} from 'lucide-react',
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030',
import UltraFuturisticBackground2030 from '../components/ui/UltraFuturisticBackground2030',
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const features = [
  {
    icon: Eye,
    title: 'Real-time Emotion Detection',
    description: 'Analyze 27 different emotions across voice, video, and text interactions in real-time'
  },
  {
    icon: MessageCircle,
    title: 'Sentiment-Driven Responses',
    description: 'Get intelligent response suggestions based on detected emotions and sentiment'
  },
  {
    icon: BarChart3,
    title: 'Emotion Trend Analytics',
    description: 'Track emotional patterns and trends over time with comprehensive reporting'
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Recognize emotions across multiple languages and cultural contexts'
  },
  {
    icon: Brain,
    title: 'Custom Training Models',
    description: 'Train custom emotion recognition models for your specific use case'
  },
  {
    icon: Shield,
    title: 'Real-time Alerts',
    description: 'Get instant notifications for negative emotions requiring immediate attention'
  }
],

const useCases = [
  {
    title: 'Customer Service Optimization',
    description: 'Improve customer satisfaction by understanding emotional states and responding appropriately',
    icon: Users
  },
  {
    title: 'Sales Enhancement',
    description: 'Identify customer emotions during sales calls to optimize conversion rates',
    icon: TrendingUp
  },
  {
    title: 'Product Feedback Analysis',
    description: 'Analyze user emotions when interacting with products to improve user experience',
    icon: MessageCircle
  },
  {
    title: 'Employee Wellbeing',
    description: 'Monitor employee emotional states to support mental health and productivity',
    icon: Heart
  }
],

const pricing = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small teams getting started with emotion AI',
    features: [
      'Up to 1,000 emotion analyses per monthBasic emotion detection (7 core emotions)Email supportStandard API accessBasic analytics dashboard'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$1,299',
    period: '/month',
    description: 'Advanced emotion intelligence for growing businesses',
    features: [
      'Up to 10,000 emotion analyses per monthFull emotion detection (27 emotions)Priority supportAdvanced API accessCustom emotion trainingReal-time alertsAdvanced analyticsMulti-language support'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Custom solutions for large organizations',
    features: [
      'Unlimited emotion analysesCustom emotion modelsDedicated support teamWhite-label solutionsAdvanced integrationsCustom reportingSLA guaranteesOn-premise deployment'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
],

export default function AIEmotionIntelligencePlatform() {
  return (
    <>
      <Head>
        <title>AI Emotion Intelligence Platform - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced AI platform that analyzes customer emotions in real-time across voice, video, and text interactions, providing intelligent responses and sentiment-driven insights.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI emotion detection, sentiment analysis, customer experience, emotion AI, real-time analysis&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
      </Head>

      <UltraFuturisticBackground2030>
        <UltraFuturisticNavigation2030 />
        
        {/* Hero Section */}
        <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden pt-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className=&quot;mb-8&quot;>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }} className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 text-sm font-medium mb-6&quot;>
                <Sparkles className=&quot;w-4 h-4 mr-2&quot; />
                AI & Customer Experience
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }} className=&quot;text-5xl md:text-7xl font-bold mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                  AI Emotion Intelligence Platform
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }} className=&quot;text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
                Real-time emotion analysis and response for customer interactions
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }} className=&quot;text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto&quot;>
                Advanced AI platform that analyzes customer emotions in real-time across voice, video, and text interactions, providing intelligent responses and sentiment-driven insights for better customer experience.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }} className=&quot;flex flex-col sm:flex-row items-center justify-center gap-6 mb-16&quot;>
              <Link
                href=&quot;/contact&quot; className=&quot;group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-2xl text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25&quot;>
                <span className=&quot;relative z-10 flex items-center&quot;>
                  Start Free Trial
                  <ArrowRight className=&quot;ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200&quot; />
                </span>
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
              </Link>

              <Link
                href=&quot;#pricing&quot; className=&quot;group px-8 py-4 border-2 border-pink-500/30 text-pink-300 font-semibold rounded-2xl text-lg hover:bg-pink-500/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105&quot;>
                <span className=&quot;flex items-center&quot;>
                  View Pricing
                  <DollarSign className=&quot;ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200&quot; />
                </span>
              </Link>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }} className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mb-16&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-pink-400 mb-2&quot;>27</div>
                <div className=&quot;text-gray-400 text-sm&quot;>Emotions Detected</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-purple-400 mb-2&quot;>99.9%</div>
                <div className=&quot;text-gray-400 text-sm&quot;>Accuracy Rate</div>
              </div>
<<<<<<< HEAD
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"><100ms</div>
                <div className="text-gray-400 text-sm">Response Time</div>
=======
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-cyan-400 mb-2&quot;>&lt;100ms</div>
                <div className=&quot;text-gray-400 text-sm&quot;>Response Time</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-emerald-400 mb-2&quot;>35%</div>
                <div className=&quot;text-gray-400 text-sm&quot;>Satisfaction Increase</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Powerful Features for Emotion Intelligence
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Our platform provides comprehensive emotion analysis capabilities to transform your customer interactions
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }} className=&quot;group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-pink-500/30 transition-all duration-300 transform hover:scale-105 hover:bg-white/10&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300&quot;>
                    <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-400&quot;>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className=&quot;py-20 bg-gradient-to-r from-pink-500/5 to-purple-500/5&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Transform Your Business with Emotion AI
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Discover how emotion intelligence can revolutionize your customer experience and business outcomes
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }} className=&quot;p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-pink-500/30 transition-all duration-300&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6&quot;>
                    <useCase.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-2xl font-semibold text-white mb-4&quot;>{useCase.title}</h3>
                  <p className=&quot;text-gray-400 text-lg&quot;>{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id=&quot;pricing&quot; className=&quot;py-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Choose Your Plan
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Start with our professional plan and scale as you grow
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500/50 shadow-2xl shadow-pink-500/25'
                      : 'bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-pink-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                      <span className=&quot;px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-full&quot;>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className=&quot;text-center mb-8&quot;>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                    <div className=&quot;mb-4&quot;>
                      <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                      <span className=&quot;text-gray-400&quot;>{plan.period}</span>
                    </div>
                    <p className=&quot;text-gray-400&quot;>{plan.description}</p>
                  </div>

                  <ul className=&quot;space-y-4 mb-8&quot;>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-pink-400 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600'
                        : 'border border-pink-500/30 text-pink-300 hover:bg-pink-500/10 hover:border-pink-500/50'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className=&quot;py-20 bg-gradient-to-r from-pink-500/5 to-purple-500/5&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Get Started?
              </h2>
              <p className=&quot;text-xl text-gray-400 mb-8 max-w-3xl mx-auto&quot;>
                Join hundreds of companies already using our AI Emotion Intelligence Platform to transform their customer experience
              </p>

              <div className=&quot;flex flex-col sm:flex-row items-center justify-center gap-6 mb-12&quot;>
                <Link
                  href=&quot;/contact&quot; className=&quot;group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-2xl text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25&quot;>
                  <span className=&quot;relative z-10 flex items-center&quot;>
                    Start Free Trial
                    <ArrowRight className=&quot;ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200&quot; />
                  </span>
                  <div className=&quot;absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
                </Link>

                <Link
                  href=&quot;/contact&quot; className=&quot;group px-8 py-4 border-2 border-pink-500/30 text-pink-300 font-semibold rounded-2xl text-lg hover:bg-pink-500/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105&quot;>
                  <span className=&quot;flex items-center&quot;>
                    Schedule Demo
                    <MessageCircle className=&quot;ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200&quot; />
                  </span>
                </Link>
              </div>

              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
                <div className=&quot;flex flex-col items-center&quot;>
                  <Phone className=&quot;w-8 h-8 text-pink-400 mb-4&quot; />
                  <span className=&quot;text-gray-300 text-sm&quot;>Call Us</span>
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;text-white font-semibold hover:text-pink-400 transition-colors&quot;>
                    {contactInfo.mobile}
                  </Link>
                </div>
                <div className=&quot;flex flex-col items-center&quot;>
                  <Mail className=&quot;w-8 h-8 text-purple-400 mb-4&quot; />
                  <span className=&quot;text-gray-300 text-sm&quot;>Email Us</span>
                  <a href={`mailto:${contactInfo.email}`} className=&quot;text-white font-semibold hover:text-purple-400 transition-colors&quot;>
                    {contactInfo.email}
                  </Link>
                </div>
                <div className=&quot;flex flex-col items-center&quot;>
                  <Globe className=&quot;w-8 h-8 text-cyan-400 mb-4&quot; />
                  <span className=&quot;text-gray-300 text-sm&quot;>Visit Us</span>
                  <a href={contactInfo.website} className=&quot;text-white font-semibold hover:text-cyan-400 transition-colors&quot;>
                    {contactInfo.website.replace('https://', '')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter2030 />
      </UltraFuturisticBackground2030>
    </>
  )
}