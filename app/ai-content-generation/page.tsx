import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CogIcon,
  SparklesIcon,
  PhoneIcon,
  EnvelopeIcon,
  PencilSquareIcon,
  PhotoIcon,
  VideoCameraIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline';

export default function AIContentGenerationPage() {
  const features = [
    '50+ content templates',
    'SEO optimization suggestions',
    'Brand voice customization',
    'Multi-language content generation',
    'Plagiarism detection',
    'Content calendar planning',
    'Team collaboration tools',
    'Performance analytics'
  ];

  const benefits = [
    'Save 80% of content creation time',
    'Increase content output by 500%',
    'Improve SEO rankings by 40%',
    'Maintain consistent brand voice',
    'Reduce content creation costs by 70%',
    'Scale content marketing efforts'
  ];

  const contentTypes = [
    {
      name: 'Blog Posts',
      description: 'Long-form articles optimized for SEO',
      icon: DocumentTextIcon,
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Case studies']
    },
    {
      name: 'Social Media',
      description: 'Engaging posts for all platforms',
      icon: GlobeAltIcon,
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions']
    },
    {
      name: 'Email Marketing',
      description: 'Compelling email campaigns',
      icon: EnvelopeIcon,
      examples: ['Newsletters', 'Promotional emails', 'Welcome sequences', 'Abandoned cart emails']
    },
    {
      name: 'Product Descriptions',
      description: 'Persuasive e-commerce content',
      icon: PencilSquareIcon,
      examples: ['Product listings', 'Category pages', 'Feature highlights', 'Comparison tables']
    },
    {
      name: 'Ad Copy',
      description: 'High-converting advertising content',
      icon: SpeakerWaveIcon,
      examples: ['Google Ads', 'Facebook ads', 'Display banners', 'Video scripts']
    },
    {
      name: 'Technical Docs',
      description: 'Clear technical documentation',
      icon: CogIcon,
      examples: ['API documentation', 'User guides', 'Tutorials', 'FAQ sections']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 79,
      period: 'month',
      description: 'Perfect for individuals and small teams',
      features: [
        '10,000 words/month',
        '20 content templates',
        'Basic SEO optimization',
        '1 brand voice profile',
        'Email support',
        'Basic analytics',
        '5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 199,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        '50,000 words/month',
        'All content templates',
        'Advanced SEO optimization',
        '5 brand voice profiles',
        'Priority support',
        'Advanced analytics',
        '25 team members',
        'Content calendar',
        'Plagiarism detection',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 599,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All content templates',
        'Custom SEO optimization',
        'Unlimited brand voices',
        '24/7 dedicated support',
        'Custom analytics',
        'Unlimited team members',
        'Advanced content calendar',
        'Advanced plagiarism detection',
        'Full API access',
        'Custom integrations',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const technologies = ['GPT-4', 'Claude AI', 'BERT', 'React', 'Python', 'PostgreSQL'];

  return (
    <>
      <Helmet>
        <title>AI Content Generator Studio - Zion Tech Group | Generate High-Quality Content at Scale</title>
        <meta name="description" content="Generate high-quality, SEO-optimized content at scale using advanced AI models for blogs, social media, and marketing. Save 80% of content creation time and increase output by 500%." />
        <meta name="keywords" content="AI content generation, content creation, blog writing, social media content, SEO content, marketing automation, content marketing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <DocumentTextIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-semibold">New Service</span>
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  AI Content <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Generator Studio</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Generate high-quality, SEO-optimized content at scale using advanced AI models for blogs, 
                  social media, and marketing. Save 80% of content creation time and increase output by 500%.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Start Creating Content
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/demo" 
                    className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Try Free Demo
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>50+ templates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>SEO optimized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>Multi-language</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <PencilSquareIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Content Generator</div>
                        <div className="text-gray-400 text-sm">AI-powered writing assistant</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-slate-600 p-3 rounded-lg">
                        <div className="text-white text-sm font-semibold mb-1">Blog Post: "10 AI Trends for 2024"</div>
                        <div className="text-gray-300 text-xs">1,200 words • SEO optimized • 5 min read</div>
                      </div>
                      <div className="bg-slate-600 p-3 rounded-lg">
                        <div className="text-white text-sm font-semibold mb-1">Social Media: LinkedIn Post</div>
                        <div className="text-gray-300 text-xs">Professional tone • 150 characters</div>
                      </div>
                      <div className="bg-slate-600 p-3 rounded-lg">
                        <div className="text-white text-sm font-semibold mb-1">Email: Product Launch</div>
                        <div className="text-gray-300 text-xs">High conversion • 300 words</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Generating content...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Content Types We Generate</h2>
              <p className="text-xl text-gray-300">Create any type of content your business needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{type.name}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="text-sm text-gray-400 flex items-center gap-2">
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to create amazing content at scale</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 hover:border-purple-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Transform Your Content Strategy</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Stop spending hours on content creation. Let AI handle the heavy lifting while you focus on strategy and growth.
                </p>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{benefit}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Content Creation Stats</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Time Saved</span>
                    <span className="text-3xl font-bold text-green-400">80%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Output Increase</span>
                    <span className="text-3xl font-bold text-blue-400">500%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">SEO Improvement</span>
                    <span className="text-3xl font-bold text-purple-400">40%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-3xl font-bold text-cyan-400">70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300">Choose the plan that fits your content needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-slate-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                        : 'bg-slate-600 text-white hover:bg-slate-500'
                    }`}
                  >
                    Get Started
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powered by Advanced AI</h2>
              <p className="text-xl text-gray-300">Built with cutting-edge artificial intelligence technologies</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CpuChipIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Scale Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of content creators and marketers already using our AI content generator to produce high-quality content at scale
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Creating Content
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Try Free Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}