import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CubeIcon, 
  UserGroupIcon, 
  SparklesIcon, 
  GlobeAltIcon,
  CurrencyDollarIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ChatBubbleLeftRightIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

const ZionAIMetaverseBuilder = () => {
  const features = [
    {
      icon: CubeIcon,
      title: "3D World Creation",
      description: "Build immersive 3D virtual worlds with our AI-powered drag-and-drop interface. No coding required."
    },
    {
      icon: UserGroupIcon,
      title: "Avatar System",
      description: "Create and customize realistic avatars with AI-generated facial features, animations, and expressions."
    },
    {
      icon: SparklesIcon,
      title: "AI-Powered Content",
      description: "Generate virtual objects, textures, and environments using advanced AI algorithms and machine learning."
    },
    {
      icon: GlobeAltIcon,
      title: "Multi-Platform Access",
      description: "Deploy your metaverse across VR, AR, web, and mobile platforms with seamless cross-platform compatibility."
    }
  ];

  const pricingPlans = [
    {
      name: "Metaverse Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for individuals and small teams starting their metaverse journey",
      features: [
        "Up to 5 virtual worlds",
        "Basic avatar customization",
        "Standard 3D assets library",
        "Web and mobile deployment",
        "Community support",
        "5GB storage"
      ],
      popular: false
    },
    {
      name: "Metaverse Professional",
      price: "$599",
      period: "/month",
      description: "Advanced tools for businesses and content creators",
      features: [
        "Up to 25 virtual worlds",
        "Advanced avatar system",
        "Premium 3D assets library",
        "VR/AR deployment",
        "Priority support",
        "50GB storage",
        "Custom branding",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Metaverse Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Full-scale metaverse solutions for large organizations",
      features: [
        "Unlimited virtual worlds",
        "Enterprise avatar system",
        "Custom 3D asset creation",
        "All platform deployment",
        "24/7 dedicated support",
        "Unlimited storage",
        "White-label solutions",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Virtual Events & Conferences",
      description: "Host immersive virtual events, conferences, and meetings with interactive 3D environments and networking features.",
      icon: UserGroupIcon
    },
    {
      title: "Virtual Shopping Experiences",
      description: "Create virtual stores and shopping malls where customers can browse and purchase products in 3D environments.",
      icon: ShoppingBagIcon
    },
    {
      title: "Educational Virtual Worlds",
      description: "Build interactive learning environments for schools, universities, and corporate training programs.",
      icon: GlobeAltIcon
    },
    {
      title: "Virtual Real Estate",
      description: "Develop and sell virtual properties, land, and spaces in your custom metaverse ecosystem.",
      icon: CubeIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Metaverse Builder - Create Immersive Virtual Worlds | Zion Tech Group</title>
        <meta name="description" content="Build stunning metaverse experiences with AI-powered tools. Create virtual worlds, avatars, and immersive environments. Starting at $199/month." />
        <meta name="keywords" content="metaverse builder, virtual worlds, 3D creation, VR development, AR development, virtual reality, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-metaverse-builder" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
              <SparklesIcon className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">Next-Generation Virtual Reality</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion AI
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Metaverse Builder
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create immersive virtual worlds and metaverse experiences with our AI-powered platform. 
              Build, customize, and deploy stunning 3D environments without any coding knowledge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center"
              >
                Start Building
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Metaverse Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create stunning virtual worlds and immersive experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Endless Possibilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From virtual events to immersive shopping experiences, create anything you can imagine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <useCase.icon className="w-16 h-16 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Metaverse Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start building your virtual world today with our flexible pricing options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20' 
                    : 'border-slate-700/50 hover:border-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border border-purple-500 text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Metaverse?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators and businesses already building the future of virtual experiences. 
              Start your metaverse journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Building Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIMetaverseBuilder;
