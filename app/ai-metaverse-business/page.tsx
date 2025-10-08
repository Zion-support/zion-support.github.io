import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, VirtualReality, ShoppingCart, Building } from 'lucide-react';

const AIMetaverseBusinessPage: React.FC = () => {
  const metaverseServices = [
    {
      title: 'AI Virtual Office Platform',
      description: 'Complete virtual office solution with AI-powered meeting rooms, collaboration tools, and immersive workspaces.',
      icon: '🏢',
      price: '$299/month',
      features: ['Virtual meeting rooms', 'AI avatars', 'Collaborative workspaces', 'Document sharing', 'Real-time translation'],
      benefits: ['Reduce office costs by 70%', 'Enable global collaboration', 'Improve productivity', 'Create immersive experiences'],
      marketPrice: '$500-1000/month',
      category: 'Virtual Offices',
      technologies: ['WebXR', 'Unity', 'AI avatars', 'React', 'Blockchain']
    },
    {
      title: 'AI NFT Marketplace Builder',
      description: 'Intelligent NFT marketplace creation with AI-powered curation, pricing optimization, and fraud detection.',
      icon: '🎨',
      price: '$499/month',
      features: ['NFT creation tools', 'AI curation', 'Pricing optimization', 'Fraud detection', 'Smart contracts'],
      benefits: ['Launch NFT marketplace', 'Maximize sales', 'Prevent fraud', 'Optimize pricing'],
      marketPrice: '$800-1500/month',
      category: 'NFT Platforms',
      technologies: ['Blockchain', 'Smart contracts', 'AI curation', 'React', 'Web3']
    },
    {
      title: 'AI Virtual Events Platform',
      description: 'Advanced virtual event hosting with AI-powered networking, content recommendations, and engagement analytics.',
      icon: '🎪',
      price: '$399/month',
      features: ['Virtual event hosting', 'AI networking', 'Content recommendations', 'Engagement analytics', 'Multi-platform support'],
      benefits: ['Host immersive events', 'Increase engagement', 'Enable global reach', 'Reduce event costs'],
      marketPrice: '$600-1200/month',
      category: 'Virtual Events',
      technologies: ['WebRTC', 'AI networking', 'React', 'Node.js', 'Analytics']
    },
    {
      title: 'AI Metaverse Shopping Mall',
      description: 'Complete virtual shopping experience with AI-powered product recommendations, virtual try-ons, and payment processing.',
      icon: '🛍️',
      price: '$599/month',
      features: ['Virtual stores', 'AI recommendations', 'Virtual try-ons', 'Payment processing', 'Inventory management'],
      benefits: ['Create virtual retail', 'Increase sales', 'Improve customer experience', 'Enable global shopping'],
      marketPrice: '$1000-2000/month',
      category: 'Virtual Retail',
      technologies: ['WebXR', 'AI recommendations', 'Payment APIs', 'React', 'E-commerce']
    },
    {
      title: 'AI Virtual Real Estate Platform',
      description: 'Intelligent virtual real estate marketplace with AI-powered property valuation, virtual tours, and investment analytics.',
      icon: '🏠',
      price: '$799/month',
      features: ['Virtual property tours', 'AI valuation', 'Investment analytics', 'Property management', 'Virtual staging'],
      benefits: ['Enable virtual real estate', 'Improve property sales', 'Reduce viewing costs', 'Enable global access'],
      marketPrice: '$1200-2500/month',
      category: 'Virtual Real Estate',
      technologies: ['3D modeling', 'AI valuation', 'React', 'Blockchain', 'Analytics']
    },
    {
      title: 'AI Virtual Education Campus',
      description: 'Immersive virtual education platform with AI-powered personalized learning, virtual classrooms, and skill assessment.',
      icon: '🎓',
      price: '$449/month',
      features: ['Virtual classrooms', 'AI tutoring', 'Personalized learning', 'Skill assessment', 'Progress tracking'],
      benefits: ['Enhance learning experience', 'Enable global education', 'Personalize learning', 'Reduce education costs'],
      marketPrice: '$700-1400/month',
      category: 'Virtual Education',
      technologies: ['WebXR', 'AI tutoring', 'React', 'Learning Management', 'Analytics']
    },
    {
      title: 'AI Virtual Healthcare Clinic',
      description: 'Complete virtual healthcare platform with AI-powered diagnostics, virtual consultations, and patient monitoring.',
      icon: '🏥',
      price: '$699/month',
      features: ['Virtual consultations', 'AI diagnostics', 'Patient monitoring', 'Medical records', 'Prescription management'],
      benefits: ['Enable virtual healthcare', 'Improve access', 'Reduce costs', 'Enhance patient care'],
      marketPrice: '$1000-2000/month',
      category: 'Virtual Healthcare',
      technologies: ['WebRTC', 'AI diagnostics', 'React', 'Medical APIs', 'Security']
    },
    {
      title: 'AI Virtual Entertainment Hub',
      description: 'Immersive entertainment platform with AI-powered content creation, virtual concerts, and interactive experiences.',
      icon: '🎭',
      price: '$349/month',
      features: ['Virtual concerts', 'AI content creation', 'Interactive experiences', 'Social features', 'Monetization tools'],
      benefits: ['Create immersive entertainment', 'Increase engagement', 'Enable new revenue streams', 'Connect global audiences'],
      marketPrice: '$600-1200/month',
      category: 'Virtual Entertainment',
      technologies: ['WebXR', 'AI content', 'React', 'Streaming', 'Social features']
    },
    {
      title: 'AI Virtual Fitness Studio',
      description: 'Complete virtual fitness platform with AI-powered personal training, workout tracking, and social fitness challenges.',
      icon: '💪',
      price: '$199/month',
      features: ['Virtual workouts', 'AI personal training', 'Progress tracking', 'Social challenges', 'Nutrition planning'],
      benefits: ['Enable virtual fitness', 'Personalize training', 'Increase motivation', 'Reduce gym costs'],
      marketPrice: '$350-700/month',
      category: 'Virtual Fitness',
      technologies: ['WebXR', 'AI training', 'React', 'Wearables', 'Analytics']
    },
    {
      title: 'AI Virtual Social Network',
      description: 'Advanced virtual social platform with AI-powered connections, virtual spaces, and intelligent content curation.',
      icon: '👥',
      price: '$249/month',
      features: ['Virtual spaces', 'AI connections', 'Content curation', 'Social features', 'Privacy controls'],
      benefits: ['Create virtual communities', 'Improve social connections', 'Enable new interactions', 'Protect privacy'],
      marketPrice: '$400-800/month',
      category: 'Virtual Social',
      technologies: ['WebXR', 'AI social', 'React', 'Privacy', 'Social features']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Helmet>
        <title>AI Metaverse Business Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered metaverse business solutions including virtual offices, NFT marketplaces, virtual events, and immersive experiences. Transform your business for the metaverse era." />
        <meta name="keywords" content="AI metaverse, virtual offices, NFT marketplace, virtual events, metaverse business, virtual reality, WebXR, blockchain, virtual commerce" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Metaverse Business Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto">
              Revolutionary AI-powered metaverse solutions for virtual offices, NFT marketplaces, 
              virtual events, and immersive business experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
              >
                <VirtualReality className="w-5 h-5 mr-2" />
                Enter the Metaverse: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Metaverse Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metaverse Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Metaverse Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete AI-powered metaverse solutions for modern businesses and enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metaverseServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-purple-600 text-center mb-2">{service.price}</div>
                  <div className="text-sm text-gray-500 text-center">Market Price: {service.marketPrice}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/contact"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Enter the Metaverse
                    <VirtualReality className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metaverse Capabilities */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Metaverse Technology Capabilities
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Advanced AI capabilities for metaverse business operations and immersive experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Virtual Offices</h3>
              <p className="text-purple-100">AI-powered virtual workspaces and collaboration tools</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Virtual Commerce</h3>
              <p className="text-purple-100">Immersive shopping experiences and NFT marketplaces</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Virtual Events</h3>
              <p className="text-purple-100">AI-powered virtual events and networking platforms</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Virtual Worlds</h3>
              <p className="text-purple-100">Immersive virtual environments and experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Enter the Metaverse?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Contact us today for a free consultation and custom metaverse business solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
            >
              <VirtualReality className="w-5 h-5 mr-2" />
              Enter Now: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-purple-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 Ready to transform your business for the metaverse era</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMetaverseBusinessPage;