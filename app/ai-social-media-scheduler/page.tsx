'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Target, Clock, CheckCircle, Brain, Share2, TrendingUp, BarChart, MessageSquare } from 'lucide-react';

const AISocialMediaScheduler: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience engagement patterns',
      color: 'text-purple-400'
    },
    {
      icon: Brain,
      title: 'Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI technology',
      color: 'text-blue-400'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to track performance across all platforms',
      color: 'text-green-400'
    },
    {
      icon: Share2,
      title: 'Multi-Platform Support',
      description: 'Schedule and manage content across Instagram, Facebook, Twitter, LinkedIn, and TikTok',
      color: 'text-orange-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 3 social accounts',
        '30 posts per month',
        'Basic scheduling',
        'Email support',
        'Basic analytics',
        '1 user'
      ],
      popular: false},
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 social accounts',
        'Unlimited posts',
        'AI content generation',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true},
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited social accounts',
        'Unlimited posts',
        'Advanced AI features',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'Advanced reporting'
      ],
      popular: false}
  ];

  const useCases = [
    {
      title: 'Content Planning',
      description: 'Plan and schedule your content calendar weeks in advance',
      icon: Calendar,
      result: '3x efficiency'
    },
    {
      title: 'Engagement Boost',
      description: 'Increase engagement with AI-optimized posting times and content',
      icon: TrendingUp,
      result: '150% more'
    },
    {
      title: 'Brand Consistency',
      description: 'Maintain consistent brand voice across all platforms',
      icon: Target,
      result: '100% consistent'
    },
    {
      title: 'Time Saving',
      description: 'Save hours every week with automated scheduling and content generation',
      icon: Clock,
      result: '10 hours/week'
    }
  ];

  const supportedPlatforms = [
    { name: 'Instagram', icon: '📸', color: 'text-pink-400' },
    { name: 'Facebook', icon: '📘', color: 'text-blue-400' },
    { name: 'Twitter', icon: '🐦', color: 'text-sky-400' },
    { name: 'LinkedIn', icon: '💼', color: 'text-blue-600' },
    { name: 'TikTok', icon: '🎵', color: 'text-black' },
    { name: 'YouTube', icon: '📺', color: 'text-red-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Helmet>
      </Helmet> </Helmet> </Helmet><title>AI Social Media Scheduler - Smart Content Management | Zion Tech Gro</title>u</title>p</title>
       <//title> <//title><meta name="description" content="Streamline your social media with AI-powered scheduling, content generation, and analytics. Manage all platforms from one dashboard." />
       </meta name="description" content="Streamline your social media with AI-powered scheduling, content generation, and analytics. Manage all platforms from one dashboard." /> </meta name="description" content="Streamline your social media with AI-powered scheduling, content generation, and analytics. Manage all platforms from one dashboard." /><meta name="keywords" content="social media scheduler, content management, social media automation, AI content generation, social media analytics" />
       </meta name="keywords" content="social media scheduler, content management, social media automation, AI content generation, social media analytics" /> </meta name="keywords" content="social media scheduler, content management, social media automation, AI content generation, social media analytics" /><meta property="og:title" content="AI Social Media Scheduler - Smart Content Management" />
       </meta property="og:title" content="AI Social Media Scheduler - Smart Content Management" /> </meta property="og:title" content="AI Social Media Scheduler - Smart Content Management" /><meta property="og:description" content="Streamline your social media with AI-powered scheduling and content generation." />
       </meta property="og:description" content="Streamline your social media with AI-powered scheduling and content generation." /> </meta property="og:description" content="Streamline your social media with AI-powered scheduling and content generation." /><meta property="og:type" content="website" />
       </meta property="og:type" content="website" /> </meta property="og:type" content="website" /><meta property="og:url" content="https://ziontechgroup.com/ai-social-media-scheduler" />
     </meta property="og:url" content="https://ziontechgroup.com/ai-social-media-scheduler" /> </meta property="og:url" content="https://ziontechgroup.com/ai-social-media-scheduler" /><div className="container mx-auto px-4 py-16">{/* Hero Section </div className="container mx-auto px-4 py-16">*</div className="container mx-auto px-4 py-16">/</div>}</div>
      <//div> <//div> </div><section className="text-center mb-16">
         </section className="text-center mb-16"> </section className="text-center mb-16"><div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          </div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"> </div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"> </div><Calendar className="w-4 h-4" />
           </Calendar className="w-4 h-4" /> </Calendar className="w-4 h-4" /><span>AI-Powered Social Med</span>i</span>a</span><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Social Media Schedul</h1 className="text-4xl md:text-6xl font-bold text-white mb-6">e</h1 className="text-4xl md:text-6xl font-bold text-white mb-6">r</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Streamline your social media strategy with AI-powered scheduling, content generatio</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">n</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,</p>
            and analytics. Manage all platforms from one intelligent dashboar<//p>d<//p>.</p>

         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-095</Phone className="w-5 h-5 mr-2" >0</Phone className="w-5 h-5 mr-2" ><a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >Start Scheduli</a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >n</a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >g</a>
          <//a> <//a> </a>
        <//a> <//a> </div>
      <//div> <//div> </section>

        {/* Key Benefits */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
             </div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"> </div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"><div className="text-3xl font-bold text-purple-400 mb-2">10</div className="text-3xl font-bold text-purple-400 mb-2">x</div className="text-3xl font-bold text-purple-400 mb-2"><div className="text-white font-semibold mb-2">Fas</div className="text-white font-semibold mb-2">t</div className="text-white font-semibold mb-2">e</div>r</div>
               <//div> <//div><div className="text-gray-400 text-sm">Schedule content 10x faster than manual post</div className="text-gray-400 text-sm">i</div className="text-gray-400 text-sm">n</div>g</div>
           <//div> <//div><div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
             </div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"> </div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"><div className="text-3xl font-bold text-blue-400 mb-2">6</div className="text-3xl font-bold text-blue-400 mb-2"><div className="text-white font-semibold mb-2">Platfo</div className="text-white font-semibold mb-2">r</div className="text-white font-semibold mb-2">m</div>s</div>
               <//div> <//div><div className="text-gray-400 text-sm">Manage all major social media platfo</div className="text-gray-400 text-sm">r</div className="text-gray-400 text-sm">m</div>s</div>
           <//div> <//div><div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20">
             </div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20"> </div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20"><div className="text-3xl font-bold text-green-400 mb-2">150</div className="text-3xl font-bold text-green-400 mb-2">%</div className="text-3xl font-bold text-green-400 mb-2"><div className="text-white font-semibold mb-2">More Engagem</div className="text-white font-semibold mb-2">e</div className="text-white font-semibold mb-2">n</div>t</div>
               <//div> <//div><div className="text-gray-400 text-sm">AI-optimized posting times and cont</div className="text-gray-400 text-sm">e</div className="text-gray-400 text-sm">n</div>t</div>
           <//div> <//div><div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20">
             </div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20"> </div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20"><div className="text-3xl font-bold text-orange-400 mb-2">24/</div className="text-3xl font-bold text-orange-400 mb-2">7</div className="text-3xl font-bold text-orange-400 mb-2"><div className="text-white font-semibold mb-2">Automat</div className="text-white font-semibold mb-2">i</div className="text-white font-semibold mb-2">o</div>n</div>
               <//div> <//div><div className="text-gray-400 text-sm">Never miss a post with automated schedul</div className="text-gray-400 text-sm">i</div className="text-gray-400 text-sm">n</div>g</div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Features */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Feature</h2 className="text-3xl font-bold text-white text-center mb-12">s</h2 className="text-3xl font-bold text-white text-center mb-12"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) =</div className="grid grid-cols-1 md:grid-cols-2 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
               </div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"> </div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"><div className="flex items-start space-x-4">
                 </div className="flex items-start space-x-4"> </div className="flex items-start space-x-4"><div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}>
                  </div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}> </div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}> </div><feature.icon className="w-6 h-6" />
                </feature.icon className="w-6 h-6" /> </feature.icon className="w-6 h-6" /> </div>
                 <//div> <//div><div>
                  </div> </div> </div><h3 className="text-xl font-semibold text-white mb-2">{feature.title</h3 className="text-xl font-semibold text-white mb-2">}</h3 className="text-xl font-semibold text-white mb-2"><p className="text-gray-400">{feature.descriptio</p className="text-gray-400">n</p className="text-gray-400">}</p>
                <//p> <//p> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Supported Platforms */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white text-center mb-12">Supported Platform</h2 className="text-3xl font-bold text-white text-center mb-12">s</h2 className="text-3xl font-bold text-white text-center mb-12"><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{supportedPlatforms.map((platform, index) =</div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">></div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center">
               </div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"> </div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"><div className="text-4xl mb-2">{platform.ic</div className="text-4xl mb-2">o</div className="text-4xl mb-2">n</div>}</div>
               <//div> <//div><div className={`font-medium ${platform.color}`}>{platform.na</div className={`font-medium ${platform.color}`}>m</div className={`font-medium ${platform.color}`}>e</div>}</div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Use Cases */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white text-center mb-12">Perfect Fo</h2 className="text-3xl font-bold text-white text-center mb-12">r</h2 className="text-3xl font-bold text-white text-center mb-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div>(</div>
             <//div> <//div><div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
               </div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"> </div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"><div className="flex items-center justify-between mb-4">
                </div className="flex items-center justify-between mb-4"> </div className="flex items-center justify-between mb-4"> </div><useCase.icon className="w-8 h-8 text-purple-400" />
                 </useCase.icon className="w-8 h-8 text-purple-400" /> </useCase.icon className="w-8 h-8 text-purple-400" /><div className="text-sm font-semibold text-green-400">{useCase.resul</div className="text-sm font-semibold text-green-400">t</div className="text-sm font-semibold text-green-400">}</div><h3 className="text-lg font-semibold text-white mb-2">{useCase.title</h3 className="text-lg font-semibold text-white mb-2">}</h3 className="text-lg font-semibold text-white mb-2"><p className="text-gray-400 text-sm">{useCase.descriptio</p className="text-gray-400 text-sm">n</p className="text-gray-400 text-sm">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Pricing */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricin</h2 className="text-3xl font-bold text-white text-center mb-12">g</h2 className="text-3xl font-bold text-white text-center mb-12"><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) =</div className="grid grid-cols-1 md:grid-cols-3 gap-8">></div className="grid grid-cols-1 md:grid-cols-3 gap-8"> </div>(</div>
               <//div> <//div><div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>{plan.popular &</div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>&</div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}> </div>(<//div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                 </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div> </div>
               <//div> <//div><div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popu</div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">l</div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">a</div>r</div>
                <//div> <//div> </div>
                )}
               <//div> <//div><div className="text-center mb-6">
                </div className="text-center mb-6"> </div className="text-center mb-6"> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.nam</h3 className="text-2xl font-bold text-white mb-2">e</h3 className="text-2xl font-bold text-white mb-2">}</h3>
                 <//h3> <//h3><div className="flex items-baseline justify-center">
                  </div className="flex items-baseline justify-center"> </div className="flex items-baseline justify-center"> </div><span className="text-4xl font-bold text-white">{plan.pric</span className="text-4xl font-bold text-white">e</span className="text-4xl font-bold text-white">}</span><span className="text-gray-400 ml-1">{plan.perio</span className="text-gray-400 ml-1">d</span className="text-gray-400 ml-1">}</span><p className="text-gray-400 mt-2">{plan.description</p className="text-gray-400 mt-2">}</p className="text-gray-400 mt-2"><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) =></ul className="space-y-3 mb-8"> </ul className="space-y-3 mb-8">(</ul>
                  <//ul> <//ul> </ul><li key={featureIndex} className="flex items-center space-x-3">
                     </li key={featureIndex} className="flex items-center space-x-3"> </li key={featureIndex} className="flex items-center space-x-3"><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                     </CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">{featu</span className="text-gray-300">r</span className="text-gray-300">e</span>}</span>
                  <//span> <//span> </li>
                  ))}
               <//li> <//li><a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >Get Start</a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >e</a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >d</a>
              <//a> <//a> </a>
            <//a> <//a> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* CTA Section */}
       <//section> <//section><section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30">
         </section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30"> </section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30"><h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Social Medi</h2 className="text-3xl font-bold text-white mb-4">a</h2 className="text-3xl font-bold text-white mb-4">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 5,000+ businesses already using our AI Social Media Scheduler to grow their presenc</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">e</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-09</Phone className="w-5 h-5 mr-2" >5</Phone className="w-5 h-5 mr-2" >0</Phone>
          <//Phone> <//Phone> </Phone>
           <//Phone> <//Phone><a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            ><MessageSquare className="w-5 h-5 mr-2" >Email </MessageSquare className="w-5 h-5 mr-2" >U</MessageSquare className="w-5 h-5 mr-2" >s</MessageSquare>
          <//MessageSquare> <//MessageSquare> </MessageSquare>
        <//MessageSquare> <//MessageSquare> </div>
      <//div> <//div> </section>
    <//section> <//section> </div>
  <//div> <//div> </div>
  );

AISocialMediaScheduler.displayName = 'AISocialMediaScheduler';

export default AISocialMediaScheduler<//div>;<//div>