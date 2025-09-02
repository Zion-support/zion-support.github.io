import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Satellite, 
  Rocket, 
  Globe, 
  Zap, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Eye,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Cloud,
  Smartphone,
  Building,
  Heart,
  ShoppingCart,
  PenTool,
  Leaf,
  FileText,
  Sparkles,
  Workflow,
  Truck,
  ShieldCheck,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Calendar,
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  Fingerprint,
  Key,
  Server,
  Wifi,
  HardDrive,
  Monitor,
  Orbit,
  Planet,
  Telescope,
  Navigation,
  Signal,
  Antenna
} from 'lucide-react';

export default function AISpaceTechnologyPlatform() {
  const features = [
    {
      icon: Satellite,
      title: "AI-Powered Satellite Operations",
      description: "Intelligent satellite management with autonomous orbit optimization, collision avoidance, and mission planning."
    },
    {
      icon: Brain,
      title: "Space Data Analytics",
      description: "Advanced AI algorithms that process and analyze vast amounts of space data for scientific discovery and commercial applications."
    },
    {
      icon: Globe,
      title: "Earth Observation Intelligence",
      description: "Real-time monitoring of Earth's surface, atmosphere, and oceans with AI-driven insights for environmental and commercial applications."
    },
    {
      icon: Rocket,
      title: "Launch Optimization",
      description: "AI-powered launch window calculations, trajectory optimization, and mission planning for maximum efficiency and success rates."
    },
    {
      icon: Eye,
      title: "Space Debris Tracking",
      description: "Intelligent monitoring and prediction of space debris to ensure safe satellite operations and prevent collisions."
    },
    {
      icon: Signal,
      title: "Advanced Communications",
      description: "Next-generation space communication systems with AI-optimized signal processing and bandwidth management."
    }
  ];

  const benefits = [
    "Reduce satellite operational costs by 60%",
    "Improve mission success rates by 85%",
    "Enable autonomous space operations",
    "Real-time space data processing",
    "Advanced collision avoidance systems",
    "Optimized launch windows and trajectories",
    "Enhanced Earth observation capabilities",
    "Future-proof space technology infrastructure"
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$4,999",
      period: "/month",
      description: "Perfect for research institutions and small space companies",
      features: [
        "Basic AI satellite operations",
        "Earth observation data access",
        "Standard analytics dashboard",
        "Email support",
        "Basic mission planning tools",
        "Up to 5 satellite management"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/month",
      description: "Ideal for growing space companies and commercial operators",
      features: [
        "Advanced AI satellite operations",
        "Full Earth observation suite",
        "Advanced analytics & reporting",
        "Priority support",
        "Advanced mission planning",
        "Unlimited satellite management",
        "Custom AI model training",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large space agencies and major commercial operators",
      features: [
        "Full AI space technology suite",
        "Custom AI model development",
        "Advanced space data analytics",
        "Dedicated support team",
        "Multi-tenant architecture",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment option"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Satellite Communications",
      description: "Optimize satellite networks, improve signal quality, and maximize bandwidth efficiency",
      icon: Signal
    },
    {
      industry: "Earth Observation",
      description: "Monitor climate change, track natural disasters, and support environmental research",
      icon: Globe
    },
    {
      industry: "Space Exploration",
      description: "Autonomous mission planning, navigation, and scientific data analysis",
      icon: Rocket
    },
    {
      industry: "Defense & Security",
      description: "Space surveillance, threat detection, and strategic intelligence gathering",
      icon: ShieldCheck
    },
    {
      industry: "Agriculture",
      description: "Crop monitoring, soil analysis, and precision farming optimization",
      icon: Leaf
    },
    {
      industry: "Urban Planning",
      description: "City development monitoring, infrastructure planning, and smart city solutions",
      icon: Building
    }
  ];

  const spaceApplications = [
    "Satellite Constellation Management",
    "Space Traffic Control",
    "Planetary Exploration",
    "Asteroid Mining",
    "Space Tourism",
    "Space Manufacturing",
    "Interplanetary Communications",
    "Space Weather Monitoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Space Technology Platform - Zion Tech Group"
        description="Revolutionary AI-powered space technology platform for satellite operations, space exploration, and Earth observation. Transform space operations with AI."
        keywords="AI space technology, satellite operations, space exploration, Earth observation, space AI platform"
        canonicalUrl="https://ziontechgroup.com/services/AI-Space-Technology-Platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Space{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Technology Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionize space operations with our AI-powered platform. From satellite management to space exploration, 
              our technology enables the future of space innovation and discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-indigo-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Launch Now
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Space Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers unprecedented capabilities for space exploration and satellite operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <CheckCircle className="w-12 h-12 text-blue-400 mb-4" />
                <p className="text-white text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Space Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI capabilities designed specifically for space applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform serves diverse industries with specialized space technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <useCase.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Applications */}
      <section className="py-20 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Future Space Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the next generation of space technology and exploration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaceApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <Rocket className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-white font-semibold">{application}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Technology Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that launches your space operations to new heights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-400/50 scale-105' 
                    : 'border-white/10 hover:border-blue-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI%20Space%20Technology%20Platform%20-%20{plan.name}%20Plan"
                  className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-500 hover:to-indigo-600 transition-all duration-200 text-center block"
                >
                  Launch Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI Space Technology Platform can revolutionize your space operations
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-3" />
                <p className="text-white font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-3" />
                <p className="text-white font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-3" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI%20Space%20Technology%20Platform%20Inquiry"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-indigo-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}