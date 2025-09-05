import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Award
} from 'lucide-react';

const features = [
  {
    title: "Rapid Deployment",
    description: "Get your startup up and running quickly with our fast-track development process and pre-built solutions.",
    icon: Rocket,
    benefits: ["2-4 Week Delivery", "Pre-built Components", "Agile Development", "Quick Iterations"]
  },
  {
    title: "Cost Optimization",
    description: "Startup-friendly pricing with flexible payment options and no long-term commitments required.",
    icon: DollarSign,
    benefits: ["Flexible Pricing", "No Setup Fees", "Pay-as-you-grow", "Free Consultation"]
  },
  {
    title: "Scalable Growth",
    description: "Solutions that grow with your startup, from MVP to enterprise scale without major rewrites.",
    icon: TrendingUp,
    benefits: ["Auto-scaling", "Modular Architecture", "Future-proof Design", "Easy Upgrades"]
  },
  {
    title: "Expert Guidance",
    description: "Access to experienced mentors and advisors who understand the startup journey and challenges.",
    icon: Users,
    benefits: ["Startup Mentors", "Technical Advisors", "Business Strategy", "Industry Connections"]
  }
];

const packages = [
  {
    name: "MVP Package",
    price: "$2,999",
    period: "one-time",
    description: "Perfect for validating your startup idea with a minimum viable product.",
    features: [
      "Basic Web Application",
      "User Authentication",
      "Core Features Only",
      "2 Weeks Delivery",
      "1 Month Support",
      "Source Code Included"
    ],
    popular: false
  },
  {
    name: "Growth Package",
    price: "$4,999",
    period: "one-time",
    description: "Comprehensive solution for startups ready to scale and acquire customers.",
    features: [
      "Full Web Application",
      "Admin Dashboard",
      "Payment Integration",
      "3 Weeks Delivery",
      "3 Months Support",
      "Analytics Dashboard",
      "Mobile Responsive"
    ],
    popular: true
  },
  {
    name: "Scale Package",
    price: "$7,999",
    period: "one-time",
    description: "Enterprise-ready solution for startups preparing for rapid growth and investment.",
    features: [
      "Full-stack Application",
      "Advanced Features",
      "API Development",
      "4 Weeks Delivery",
      "6 Months Support",
      "Performance Optimization",
      "Security Hardening",
      "Documentation"
    ],
    popular: false
  }
];

const successStories = [
  {
    name: "TechFlow",
    industry: "SaaS",
    description: "Built a project management platform that grew from 0 to 10,000 users in 6 months.",
    result: "10,000+ users, $50K MRR",
    icon: TrendingUp
  },
  {
    name: "HealthConnect",
    industry: "Healthcare",
    description: "Developed a telemedicine platform that secured $2M in Series A funding.",
    result: "$2M Series A, 5,000+ patients",
    icon: Award
  },
  {
    name: "EcoTrack",
    industry: "Sustainability",
    description: "Created an environmental monitoring app that won multiple startup awards.",
    result: "3 Awards, 15,000+ downloads",
    icon: Shield
  }
];

const technologies = [
  { name: "React/Next.js", description: "Modern frontend framework" },
  { name: "Node.js", description: "Scalable backend runtime" },
  { name: "PostgreSQL", description: "Reliable database system" },
  { name: "AWS/Cloud", description: "Cloud infrastructure" },
  { name: "Stripe", description: "Payment processing" },
  { name: "SendGrid", description: "Email services" }
];

export default function StartupSolutionsPage() {
  return (
    <MainLayout 
      title="Startup Solutions - Zion Tech Group"
      description="Cost-effective technology solutions for startups. Rapid deployment, scalable growth, and expert guidance to help your startup succeed."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Startup-Ready{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Fast, affordable, and scalable technology solutions designed specifically for startups. 
                From MVP to scale, we help you build and grow your startup with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-gray-600">Startups Helped</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2-4</div>
                <div className="text-gray-600">Weeks Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
                <div className="text-gray-600">Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Your Startup?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges startups face and provide solutions tailored to your needs and budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Startup Packages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the package that best fits your startup's current needs and budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    pkg.popular ? 'ring-2 ring-green-500 relative' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-gray-600">
                      {pkg.period}
                    </div>
                    <p className="text-gray-600 mt-4">
                      {pkg.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      pkg.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Startup Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how we've helped startups achieve their goals and scale their businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => {
                const IconComponent = story.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-8 h-8 text-green-600 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                        <p className="text-sm text-gray-600">{story.industry}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {story.description}
                    </p>
                    <div className="text-green-600 font-semibold">
                      {story.result}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Modern Technology Stack
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use the latest technologies to build fast, scalable, and maintainable solutions for your startup.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg text-center hover:bg-green-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Launch Your Startup?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Let's build something amazing together. Get started with a free consultation and see how we can help your startup succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}