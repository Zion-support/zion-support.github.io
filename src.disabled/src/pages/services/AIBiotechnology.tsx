import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Dna, 
  Microscope, 
  Beaker, 
  Brain, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  TestTube,
  Syringe,
  Heart,
  Leaf,
  Shield,
  Zap,
  Target,
  Users,
  Clock,
  Award,
  Pill
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIBiotechnology() {
  const features = [
    "AI-powered drug discovery and design",
    "Genomic sequencing and analysis",
    "Protein structure prediction",
    "CRISPR gene editing optimization",
    "Biomarker discovery and validation",
    "Personalized medicine algorithms",
    "Drug repurposing AI",
    "Clinical trial optimization"
  ];

  const benefits = [
    "Accelerated drug development timeline",
    "Improved drug efficacy and safety",
    "Personalized treatment plans",
    "Reduced clinical trial costs",
    "Enhanced diagnostic accuracy",
    "Faster regulatory approval process",
    "Innovative therapeutic approaches",
    "Precision medicine capabilities"
  ];

  const pricingTiers = [
    {
      name: "Bio Starter",
      price: 3999,
      period: "month",
      description: "Basic biotechnology solutions for research institutions",
      features: [
        "AI drug discovery platform access",
        "Basic genomic analysis tools",
        "Email support",
        "Standard API access",
        "Basic analytics dashboard"
      ]
    },
    {
      name: "Bio Professional",
      price: 9999,
      period: "month",
      description: "Advanced biotechnology solutions for pharmaceutical companies",
      features: [
        "Full AI drug discovery suite",
        "Advanced genomic analysis",
        "Priority support",
        "Custom AI algorithms",
        "Clinical trial optimization",
        "Bio consulting hours",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Bio Enterprise",
      price: 24999,
      period: "month",
      description: "Full-scale biotechnology infrastructure and research facilities",
      features: [
        "Dedicated bio research center",
        "Custom bio AI solutions",
        "24/7 dedicated support",
        "White-label bio platform",
        "Bio strategy consulting",
        "SLA guarantees",
        "Dedicated bio scientist",
        "Regulatory compliance support"
      ]
    }
  ];

  const useCases = [
    {
      title: "Pharmaceutical Development",
      description: "AI-powered drug discovery, optimization, and clinical trial management",
      icon: Pill
    },
    {
      title: "Personalized Medicine",
      description: "Genomic analysis and treatment customization based on individual genetic profiles",
      icon: Heart
    },
    {
      title: "Agricultural Biotechnology",
      description: "Crop improvement, disease resistance, and sustainable farming solutions",
      icon: Leaf
    },
    {
      title: "Medical Diagnostics",
      description: "AI-enhanced diagnostic tools and biomarker discovery for early disease detection",
      icon: Microscope
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Advanced AI algorithms for biological data analysis and prediction",
      icon: Brain
    },
    {
      name: "Computer Vision",
      description: "AI-powered image analysis for cellular and molecular imaging",
      icon: Microscope
    },
    {
      name: "Natural Language Processing",
      description: "AI-driven analysis of scientific literature and research papers",
      icon: Beaker
    },
    {
      name: "Predictive Analytics",
      description: "Forecasting drug interactions and treatment outcomes",
      icon: Target
    }
  ];

  const industries = [
    {
      name: "Pharmaceutical",
      description: "Drug discovery, development, and clinical trials",
      icon: Pill
    },
    {
      name: "Healthcare",
      description: "Personalized medicine and diagnostic tools",
      icon: Heart
    },
    {
      name: "Agriculture",
      description: "Crop improvement and sustainable farming",
      icon: Leaf
    },
    {
      name: "Research",
      description: "Academic and industrial research institutions",
      icon: Microscope
    }
  ];

  return (
    <>
      <SEO 
        title="AI Biotechnology Services - Zion Tech Group"
        description="Revolutionary AI-powered biotechnology solutions. From drug discovery to personalized medicine, discover the future of biotechnology."
        canonical="/services/ai-biotechnology"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/bio-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6">
                <Dna className="w-4 h-4 mr-2" />
                Biotechnology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                AI Biotechnology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize healthcare and life sciences with our AI-powered biotechnology solutions. From drug discovery to personalized medicine, we're transforming the future of biology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Bio Research
                </Link>
                <Link 
                  to="#pricing" 
                  className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Biotechnology Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI biotechnology platform combines cutting-edge artificial intelligence with advanced biological research to accelerate discoveries and improve human health.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-500/30 rounded-xl p-6 hover:border-green-400/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <Dna className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Biotechnology Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform healthcare and life sciences with AI-powered intelligence and automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge technologies powering our biotechnology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                  </div>
                  <p className="text-gray-300">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Target Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our biotechnology solutions serve diverse industries across healthcare and life sciences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                  </div>
                  <p className="text-gray-300">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Biotechnology Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore how AI biotechnology is revolutionizing healthcare and life sciences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Biotechnology Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the biotechnology plan that fits your research and development needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-gradient-to-br from-green-900/50 to-emerald-900/50 border rounded-xl p-8 ${
                    tier.popular 
                      ? 'border-green-400 scale-105' 
                      : 'border-green-500/30'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${tier.price.toLocaleString()}
                      <span className="text-lg text-gray-400">/{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact" 
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                        : 'border border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                    }`}
                  >
                    Start Research
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Revolutionize Biotechnology?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the biotechnology revolution and discover the infinite possibilities of AI-powered life sciences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Bio Research
                </Link>
                <Link 
                  to="/services" 
                  className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-black/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-green-400 mb-4" />
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-green-400 mb-4" />
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-green-400 mb-4" />
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}