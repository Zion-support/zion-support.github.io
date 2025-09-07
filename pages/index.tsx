import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Code,
  Smartphone,
  Cloud,
  Brain,
  BarChart3,
  Award,
  Clock,
  Target
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Performance Optimized"]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Applications",
    description: "Cross-platform mobile apps for iOS and Android",
    features: ["React Native", "Flutter", "Native Development", "App Store Ready"]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Integration",
    description: "Intelligent solutions powered by artificial intelligence",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and deployment solutions",
    features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Auto-scaling"]
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Zion Tech Group transformed our digital presence completely. Their expertise in AI integration helped us increase efficiency by 300%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    content: "Outstanding work on our mobile application. The team's attention to detail and modern approach exceeded our expectations.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DataFlow",
    content: "Professional, reliable, and innovative. They delivered our cloud infrastructure project ahead of schedule.",
    rating: 5
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services. Transform your business with cutting-edge technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="web development, mobile apps, AI integration, cloud services, technology solutions" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Zion Tech Group - Technology Solutions" />
        <meta property="og:description" content="Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services." />
        <meta property="og:type" content="website" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-xy"></div>
        
        <motion.div 
          className="container mx-auto px-4 py-16 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="text-center" variants={fadeInUp}>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Leading technology solutions provider specializing in web development, 
              mobile applications, AI integration, and cloud services. Transform your 
              business with cutting-edge technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              variants={fadeInUp}
            >
              <motion.button 
                className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Lightning Fast",
                description: "Rapid development and deployment with modern tools and methodologies"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Secure & Reliable",
                description: "Enterprise-grade security and 99.9% uptime guarantee"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Expert Team",
                description: "Experienced developers and designers passionate about technology"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Goal-Oriented",
                description: "We focus on delivering measurable business value"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "24/7 Support",
                description: "Round-the-clock support to keep your systems running smoothly"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Proven Track Record",
                description: "500+ successful projects and satisfied clients worldwide"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                variants={fadeInUp}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white"
                variants={fadeInUp}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-blue-200">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can accelerate your growth and success
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
                <Clock className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}