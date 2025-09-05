import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Target, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Lightbulb,
  Code,
  Shield
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const features = [
  {
    title: 'Quick Setup',
    description: 'Get your MVP up and running in weeks, not months',
    icon: Zap,
    benefits: ['Rapid prototyping', 'Pre-built components', 'Quick deployment', 'Fast iteration']
  },
  {
    title: 'Cost Effective',
    description: 'Startup-friendly pricing with no hidden costs',
    icon: DollarSign,
    benefits: ['Transparent pricing', 'No setup fees', 'Pay as you grow', 'Free consultation']
  },
  {
    title: 'Scalable Growth',
    description: 'Solutions that grow with your business',
    icon: TrendingUp,
    benefits: ['Auto-scaling', 'Performance optimization', 'Feature expansion', 'Team scaling']
  },
  {
    title: 'MVP Development',
    description: 'Build and launch your minimum viable product quickly',
    icon: Target,
    benefits: ['Lean development', 'User feedback integration', 'Rapid testing', 'Market validation']
  }
];

const packages = [
  {
    name: 'Startup MVP',
    price: '$5,000',
    duration: '4-6 weeks',
    features: [
      'Basic web application',
      'User authentication',
      'Core functionality',
      'Mobile responsive',
      'Basic analytics',
      '1 month support'
    ],
    popular: false
  },
  {
    name: 'Growth Ready',
    price: '$15,000',
    duration: '8-12 weeks',
    features: [
      'Advanced web application',
      'Admin dashboard',
      'Payment integration',
      'API development',
      'Advanced analytics',
      '3 months support',
      'Performance optimization'
    ],
    popular: true
  },
  {
    name: 'Scale Up',
    price: '$35,000',
    duration: '12-16 weeks',
    features: [
      'Full-stack application',
      'Microservices architecture',
      'Cloud deployment',
      'Advanced security',
      'Real-time features',
      '6 months support',
      'Dedicated team'
    ],
    popular: false
  }
];

const successStories = [
  {
    name: 'TechStart Inc.',
    industry: 'Fintech',
    result: 'Raised $2M Series A',
    description: 'Built a complete financial platform in 8 weeks'
  },
  {
    name: 'HealthTech Solutions',
    industry: 'Healthcare',
    result: '10K+ users in 3 months',
    description: 'Launched telemedicine platform with AI features'
  },
  {
    name: 'EduTech Platform',
    industry: 'Education',
    result: '50K+ students',
    description: 'Created scalable learning management system'
  }
];

export default function StartupSolutionsPage() {
  return (
    <MainLayout
      title="Startup Solutions - Zion Tech Group"
      description="Rapid deployment technology solutions for startups. MVP development, cost-effective pricing, and scalable growth."
      keywords="startup solutions, MVP development, startup technology, rapid deployment, cost effective"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Startup{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Launch your startup faster with our rapid deployment solutions. 
                From MVP to scale, we help startups build and grow their technology.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/contact">
                  <span className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Start Your MVP
                  </span>
                </Link>
                <Link href="/solutions">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View All Solutions
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built for Startups
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions are designed specifically for startups with rapid growth, 
                limited budgets, and the need to move fast.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Startup Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the package that fits your startup's current needs and budget.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
                    pkg.popular ? 'ring-2 ring-green-500 relative' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-gray-600">
                      {pkg.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Startup Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've helped startups launch and scale their technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {story.name}
                  </h3>
                  <div className="text-blue-600 font-semibold mb-3">
                    {story.industry}
                  </div>
                  <div className="text-green-600 font-bold mb-3">
                    {story.result}
                  </div>
                  <p className="text-gray-600">
                    {story.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Launch Your Startup?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
                Let's build your MVP and get your startup off the ground quickly and cost-effectively.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Start Your MVP
                  </span>
                </Link>
                <Link href="/about">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Learn More
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}