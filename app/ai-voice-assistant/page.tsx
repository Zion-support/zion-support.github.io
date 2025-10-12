import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mic, Brain, CheckCircle, ArrowRight, Zap, Settings, Globe, Clock, Link as LinkIcon, Workflow } from 'lucide-react';

export default function AIVoiceAssistant() {
<<<<<<< HEAD
  const features = [
      icon: <Brain className="w-6 h-6text-cyan-400" />,
      title: 'Natural Language Understanding',
      description: 'Advanced AI processes complex voice commands and maintains context across conversations'
    },
      icon: <Volume2 className="w-6 h-6text-purple-400" />,
      title: 'Human-like Voice Synthesis',
      description: 'Generate natural, expressive speech with customizable voices and emotional tones'
    },
      icon: <Clock className="w-6 h-6text-yellow-400" />,
      title: '24/7 Availability',
      description: 'Always-on voice assistant that can handle tasks, answer questions, and provide support'
    },
      icon: <Target className="w-6 h-6text-green-400" />,

      title: 'Multi-platform Integration',
      description: 'Seamlessly integrate with mobile apps, websites, smart devices, and IoT systems'
  ]

  const assistantFeatures = [
      category: 'Voice Capabilities',
      items: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Emotion Detection', 'Multi-language Support', 'Noise Cancellation']
    },
      category: 'Task Management',
      items: ['Calendar Management', 'Email Handling', 'Reminder Setting', 'Task Creation', 'Meeting Scheduling', 'Note Taking']
    },
      category: 'Integration',
      items: ['Mobile Apps', 'Web Applications', 'Smart Home Devices', 'CRM Systems', 'ERP Integration', 'API Access']
    },
      category: 'Customization',
      items: ['Custom Voice Training', 'Personality Settings', 'Command Customization', 'Brand Voice', 'Response Templates', 'Workflow Automation']
  ]

  const pricingPlans = [
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 1,000 interactions/month',
        'Basic voice features',
        'Standard voices',
        'Email support',
        'Mobile app access',
        'Basic integrations'
      ],
      popular: false
    },
      name: 'Business',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 interactions/month',
        'Advanced voice features',
        'Custom voice training',
        'Priority support',
        'Advanced integrations',
        'Analytics dashboard',
        'API access'
      ],
      popular: true
    },
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited interactions',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'David Park',
      company: 'Smart Home Solutions',
      content: 'AI Voice Assistant transformed our customer experience. The natural conversation flow is incredible.',
      rating: 5
    },
      name: 'Sarah Johnson',
      company: 'Healthcare Provider',
      content: 'Our patients love the voice assistant for appointment scheduling. It handles complex requests perfectly.',
      rating: 5
    },
      name: 'Mike Chen',
      company: 'E-commerce Platform',
      content: 'Voice shopping has increased our sales by 40%. The voice recognition accuracy is outstanding.',
      rating: 5
  ]

  return (

        {/* Hero Section */}
    
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent">Voice Assistant</span>

              Create intelligent voice assistants that understand natural speech, execute commands, 
                and provide hands-free automation for your business and personal needs.

                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building

                <Link to="/ai-services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">View All AI Services

        {/* Features Section */}

                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent">Features</span>
                Everything you need to build, deploy, and manage intelligent voice assistants

 (
    
                  <h3 className="text-xl font-bold text-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300leading-relaxed">{feature.description}</p>

              ))}

        {/* Use Cases Section */}
    
                Use <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent">Cases</span>
                Discover how our AI voice assistants can transform your business operations

 (
    
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400transition-colors">{useCase.title}
                    {useCase.description}
    
              ))}

        {/* Pricing Section */}
    
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent">Pricing</span>
                Choose the plan that fits your voice assistant needs

                <h3 className="text-2 xl font-bold text-whitemb-4">Starter</h3>
        </div>$99<span className="text-lgtext-gray-400">/month</span></div>
                    Up to 1,000 voice commands/month
    
                    Basic speech recognition
    
                    Email support
    
                    Standard integrations

                <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300block">Get Started

                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-smfont-semibold">Most Popular
                <h3 className="text-2 xl font-bold text-whitemb-4">Professional</h3>
        </div>$199<span className="text-lgtext-gray-400">/month</span></div>
                    Up to 10,000 voice commands/month
    
                    Advanced speech recognition
    
                    Priority support
    
                    Custom wake words
    
                    Analytics dashboard

                <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300block">Get Started

                <h3 className="text-2 xl font-bold text-whitemb-4">Enterprise</h3>
                <div className="text-4 xl font-bold text-cyan-400mb-6">Custom</div>
                    Unlimited voice commands
    
                    Custom AI training
    
                    24/7 dedicated support
    
                    White-label solution
    
                    Custom development

                <Link to="/contact" className="w-full border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500/10 transition-all duration-300block">Contact Sales

        {/* CTA Section */}

              <h2 className="text-4 xl font-bold text-whitemb-6">Ready to Build Your AI Voice Assistant?
                Start creating intelligent voice assistants that understand and respond to natural speech.

                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building Now
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">Learn More About Us

=======
  return (
    <>
      <Helmet>
        <title>A I Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional a i voice assistant by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Voice Assistant</h1>
          <p className="text-lg text-gray-300 mb-8">Professional a i voice assistant coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
  );
}