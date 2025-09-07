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
  );
};

export default Home;
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

const services = [
  {
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
    icon: '🤖',
    features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
    href: '/services/ai-services'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
    icon: '💻',
    features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support'],
    href: '/services'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
    icon: '☁️',
    features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling'],
    href: '/services'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
    icon: '🔒',
    features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits'],
    href: '/services'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
    icon: '📊',
    features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
    href: '/services'
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation services to modernize your business processes and improve efficiency.',
    icon: '🚀',
    features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management'],
    href: '/services'
  }
];

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Team Members', value: '50+' }
];

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: 'Lightning Fast',
    description: 'Optimized performance and rapid deployment'
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: 'Award Winning',
    description: 'Recognized for excellence in technology solutions'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to your success'
  }
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Leading the future of technology with AI, blockchain, and innovative solutions that transform businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Start Your Project
              </Link>
              <Link href="/solutions" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Zion Tech Group transformed our business with their innovative AI solutions. The results exceeded our expectations and our productivity has increased by 300%."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Client {i}</div>
                    <div className="text-gray-500">CEO, Company {i}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
