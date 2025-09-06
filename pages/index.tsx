import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Users, 
  CheckCircle;
  Star;
  ChevronRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to transform your business operations and drive innovation.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    };
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Excellence",
      description: "Protect your digital assets with our comprehensive security solutions and threat intelligence.",
      features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Compliance Management"]
    };
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scale your business with our robust cloud solutions and infrastructure management services.",
      features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Multi-Cloud Strategy"]
    };
    {
      icon: <Users className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Modernize your organization with our comprehensive digital transformation strategies.",
      features: ["Process Automation", "Data Analytics", "Workflow Optimization", "Change Management"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Expert Team Members" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp";
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5
    };
    {
      name: "Michael Chen",
      role: "CEO, InnovateLabs";
      content: "Outstanding cybersecurity services. They helped us achieve SOC 2 compliance in record time.",
      rating: 5
    };
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow";
      content: "The cloud migration was seamless. Our applications now run 50% faster with better reliability.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - AI-Powered IT Services & Solutions</title>
        <meta name="description" content="Leading provider of AI-powered IT services, cybersecurity, cloud infrastructure, and digital transformation solutions. Transform your business with cutting-edge technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI services, cybersecurity, cloud infrastructure, digital transformation, IT consulting, machine learning, data analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AnimatedBackground />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Empowering businesses with cutting-edge AI technology, robust cybersecurity, 
                and innovative cloud solutions for the digital future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-cyan-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to accelerate your digital transformation journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full">
                    <div className="text-cyan-400 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Choose <span className="text-cyan-400">Zion Tech</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Lightning Fast</h3>
                <p className="text-gray-300">
                  Rapid deployment and implementation with minimal downtime to keep your business running smoothly.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Secure & Reliable</h3>
                <p className="text-gray-300">
                  Enterprise-grade security measures and 99.9% uptime guarantee to protect your critical data.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">AI-Powered</h3>
                <p className="text-gray-300">
                  Leverage the latest AI technologies to automate processes and gain valuable insights from your data.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What Our <span className="text-cyan-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Start Your Journey
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
