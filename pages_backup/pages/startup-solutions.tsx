import * as React from 'react';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { BarChart3,Globe,Rocket,Shield,Users,Zap,CheckCircle,ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Rapid development of minimum viable products to validate your business idea',
    features: ['Fast prototyping', 'User feedback integration', 'Iterative development', 'Cost-effective solutions']
  },
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Future-proof architecture that grows with your startup',
    features: ['Microservices design', 'Auto-scaling', 'Cloud-native solutions', 'Performance optimization']
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Extend your team with skilled developers and designers',
    features: ['Dedicated developers', 'Project managers', 'UI/UX designers', 'DevOps engineers']
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security for your growing business',
    features: ['Data protection', 'Security audits', 'Compliance guidance', 'Threat monitoring']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Data-driven insights to fuel your growth',
    features: ['User analytics', 'Business intelligence', 'Custom dashboards', 'Growth metrics']
  },
  {
    icon: Globe,
    title: 'Global Deployment',
    description: 'Deploy your solution worldwide with confidence',
    features: ['Multi-region hosting', 'CDN optimization', 'Localization support', 'Global compliance']
  }
];

const stages = [
  {
    stage: 'Idea Validation',
    description: 'Validate your concept with market research and prototyping',
    duration: '2-4 weeks',
    price: 'From $5,000',
    features: ['Market analysis', 'Competitor research', 'User interviews', 'MVP prototype']
  },
  {
    stage: 'MVP Development',
    description: 'Build and launch your minimum viable product',
    duration: '8-12 weeks',
    price: 'From $15,000',
    features: ['Core features', 'User authentication', 'Basic analytics', 'Deployment']
  },
  {
    stage: 'Growth & Scale',
    description: 'Scale your product and team for rapid growth',
    duration: '6-12 months',
    price: 'From $50,000',
    features: ['Advanced features', 'Performance optimization', 'Team scaling', 'Market expansion']
  },
  {
    stage: 'Enterprise Ready',
    description: 'Prepare for enterprise customers and funding rounds',
    duration: 'Ongoing',
    price: 'Custom pricing',
    features: ['Enterprise features', 'Security compliance', 'Advanced analytics', 'Global deployment']
  }
];

const pricingPlans = [
  {
    name: 'Bootstrap',
    price: '$2,500',
    period: '/month',
    description: 'Perfect for early-stage startups',
    features: [
      '1 dedicated developer',
      'Basic project management',
      'Weekly progress reports',
      'Email support',
      'GitHub repository access'
    ],
    ideal: 'Pre-seed startups'
  },
  {
    name: 'Growth',
    price: '$7,500',
    period: '/month',
    description: 'Ideal for growing startups with funding',
    features: [
      '2-3 dedicated developers',
      'Project manager',
      'UI/UX designer',
      'Daily standups',
      'Priority support',
      'DevOps support'
    ],
    ideal: 'Seed to Series A',
    popular: true
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for scaling startups',
    features: [
      'Dedicated team (5+ members)',
      'Technical lead',
      'Full-stack development',
      '24/7 support',
      'Custom integrations',
      'Performance optimization'
    ],
    ideal: 'Series A+ startups'
  }
];

const successStories = [
  {
    company: 'TechFlow',
    industry: 'SaaS',
    challenge: 'Building a scalable platform for small businesses',
    solution: 'Microservices architecture with automated scaling',
    result: '10x user growth, $2M ARR in 18 months'
  },
  {
    company: 'DataViz',
    industry: 'Analytics',
    challenge: 'Processing large datasets for real-time insights',
    solution: 'Cloud-native data pipeline with machine learning',
    result: '99.9% uptime, 50x faster processing'
  }
];

export default function StartupSolutionsPage() {
  return (
    <MainLayout
      title="Startup Solutions - Zion Tech Group"
      description="Comprehensive technology solutions for startups. From MVP development to scaling, we help startups build and grow their technology products."
      keywords="startup solutions, MVP development, startup technology, scalable architecture, startup development"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Startup Solutions That{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Accelerate Growth
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                From MVP development to scaling, we help startups build and grow their technology products. 
                Fast, affordable, and built for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="#solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Startup-Focused Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges startups face and provide solutions 
                designed specifically for rapid growth and scalability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-orange-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Growth Stages Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Startup Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We support startups at every stage of their growth, from initial idea to enterprise scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-orange-600">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{stage.stage}</h3>
                    <p className="text-gray-600 mb-4">{stage.description}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-semibold">{stage.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-semibold text-orange-600">{stage.price}</span>
                    </div>
                  </div>

                  <ul className="space-y-1">
                    {stage.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <ArrowRight className="w-3 h-3 text-orange-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flexible Pricing for Startups
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your startup's current needs and budget. 
                All plans include our startup-friendly support and guidance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white p-8 rounded-lg shadow-lg ${
                    plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-500">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{plan.description}</p>
                    <p className="text-sm text-orange-600 font-semibold">{plan.ideal}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Startup Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how we've helped startups build and scale their technology products.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                    <p className="text-orange-600 font-semibold">{story.industry}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Result:</h4>
                      <p className="text-green-600 font-semibold">{story.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Startup?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your startup's technology needs and create a plan for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-orange-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-orange-100">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
                <Link href="/contact" className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}