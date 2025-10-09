import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, BarChart, Code, Mail, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Cloud, Lock, Settings, TrendingUp, Target, Lightbulb, MessageCircle, Search, Languages, Mic } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 'ai-content-writer',
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality blog posts, articles, and marketing content 10x faster with advanced AI.',
      icon: FileText,
      price: '$29/month',
      originalPrice: '$99/month',
      features: [
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training',
        'Plagiarism checker',
        'Social media posts'
      ],
      popular: true,
      category: 'Content Creation',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'social-media-scheduler',
      title: 'Social Media Scheduler',
      description: 'Schedule and manage all your social media posts across platforms with AI-powered optimization.',
      icon: Globe,
      price: '$19/month',
      originalPrice: '$49/month',
      features: [
        'Multi-platform posting',
        'AI content suggestions',
        'Analytics dashboard',
        'Hashtag optimization',
        'Best time posting',
        'Team collaboration'
      ],
      popular: false,
      category: 'Social Media',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'email-marketing-automation',
      title: 'Email Marketing Automation',
      description: 'Create, send, and track email campaigns with advanced automation and personalization.',
      icon: Mail,
      price: '$39/month',
      originalPrice: '$79/month',
      features: [
        'Drag-and-drop editor',
        'Email templates',
        'Automation workflows',
        'A/B testing',
        'Analytics & reporting',
        'List segmentation'
      ],
      popular: true,
      category: 'Marketing',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'ai-image-generator',
      title: 'AI Image Generator',
      description: 'Create stunning images, logos, and graphics using advanced AI technology.',
      icon: Image,
      price: '$24/month',
      originalPrice: '$59/month',
      features: [
        'Text-to-image generation',
        'Style transfer',
        'Logo creation',
        'Background removal',
        'Image upscaling',
        'Commercial license'
      ],
      popular: false,
      category: 'Design',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'video-editor-ai',
      title: 'AI Video Editor',
      description: 'Edit videos with AI-powered tools for automatic cuts, transitions, and effects.',
      icon: Video,
      price: '$49/month',
      originalPrice: '$99/month',
      features: [
        'Auto-editing',
        'Text-to-video',
        'Background removal',
        'Voice synthesis',
        'Music library',
        'Export in 4K'
      ],
      popular: true,
      category: 'Video',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for your website with no coding required.',
      icon: MessageCircle,
      price: '$34/month',
      originalPrice: '$69/month',
      features: [
        'No-code builder',
        'Multi-language support',
        'Integration APIs',
        'Analytics dashboard',
        'Custom branding',
        'Live chat handoff'
      ],
      popular: false,
      category: 'Customer Support',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'seo-analyzer-pro',
      title: 'SEO Analyzer Pro',
      description: 'Analyze and optimize your website for search engines with AI-powered insights.',
      icon: Search,
      price: '$29/month',
      originalPrice: '$59/month',
      features: [
        'Website audit',
        'Keyword research',
        'Competitor analysis',
        'Content optimization',
        'Rank tracking',
        'Technical SEO'
      ],
      popular: true,
      category: 'SEO',
      color: 'from-orange-500 to-yellow-600'
    },
    {
      id: 'ai-translator',
      title: 'AI Translator Pro',
      description: 'Translate content into 100+ languages with human-level accuracy.',
      icon: Languages,
      price: '$19/month',
      originalPrice: '$39/month',
      features: [
        '100+ languages',
        'Document translation',
        'Website translation',
        'Voice translation',
        'API access',
        'Batch processing'
      ],
      popular: false,
      category: 'Translation',
      color: 'from-teal-500 to-green-600'
    },
    {
      id: 'ai-data-analyzer',
      title: 'AI Data Analyzer',
      description: 'Analyze your business data and generate actionable insights with AI.',
      icon: BarChart,
      price: '$44/month',
      originalPrice: '$89/month',
      features: [
        'Data visualization',
        'Predictive analytics',
        'Custom reports',
        'Real-time dashboards',
        'Data integration',
        'Automated insights'
      ],
      popular: true,
      category: 'Analytics',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'ai-code-assistant',
      title: 'AI Code Assistant',
      description: 'Get AI-powered coding help, code generation, and debugging assistance.',
      icon: Code,
      price: '$39/month',
      originalPrice: '$79/month',
      features: [
        'Code generation',
        'Bug fixing',
        'Code review',
        'Documentation',
        'Multi-language support',
        'IDE integration'
      ],
      popular: false,
      category: 'Development',
      color: 'from-gray-500 to-slate-600'
    },
    {
      id: 'ai-voice-cloner',
      title: 'AI Voice Cloner',
      description: 'Create realistic voice clones for podcasts, audiobooks, and presentations.',
      icon: Mic,
      price: '$59/month',
      originalPrice: '$119/month',
      features: [
        'Voice cloning',
        'Text-to-speech',
        'Emotion control',
        'Multiple voices',
        'High quality audio',
        'Commercial license'
      ],
      popular: true,
      category: 'Audio',
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 'ai-form-builder',
      title: 'AI Form Builder',
      description: 'Create smart forms with conditional logic and AI-powered validation.',
      icon: FileText,
      price: '$24/month',
      originalPrice: '$49/month',
      features: [
        'Drag-and-drop builder',
        'Conditional logic',
        'AI validation',
        'Payment integration',
        'Analytics',
        'Custom styling'
      ],
      popular: false,
      category: 'Forms',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '50,000+', icon: Users },
    { label: 'Apps Available', value: '100+', icon: Code },
    { label: 'Uptime', value: '99.9%', icon: Clock },
    { label: 'Customer Satisfaction', value: '4.9/5', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Powerful, affordable AI-driven tools for modern businesses. 
            Transform your workflow with our suite of intelligent applications.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Choose Your Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our comprehensive suite of AI-powered micro SAAS applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={service.id} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-center text-sm text-gray-400">per month</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="cyber-button w-full text-center inline-block"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  3 Micro SAAS Apps
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  10GB Storage
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Get Started</a>
            </div>

            {/* Professional Plan */}
            <div className="cyber-card p-8 ring-2 ring-cyan-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Apps
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  100GB Storage
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Phone & Email Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API Access
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Get Started</a>
            </div>

            {/* Enterprise Plan */}
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Everything in Professional
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Storage
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label Options
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Why Choose Our Micro SAAS?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card p-6 text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">Deploy and start using our tools in minutes, not hours.</p>
            </div>

            <div className="cyber-card p-6 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee.</p>
            </div>

            <div className="cyber-card p-6 text-center">
              <Settings className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Easy Integration</h3>
              <p className="text-gray-300">Seamlessly integrate with your existing tools and workflows.</p>
            </div>

            <div className="cyber-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Scalable</h3>
              <p className="text-gray-300">Grow with your business with flexible pricing and features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
