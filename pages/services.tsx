import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import Layout from '../components/Layout',
import {,
  Brain,;
  Network,;
  Zap,;
  Shield,;
  Code,;
  Smartphone,;
  Server,;
  Database,;
  CheckCircle,;
  ArrowRight,;
  Users,;
  Award,;
  Clock,;
  Star,;
  Globe,
} from 'lucide-react',
,
const services = [,
  {,
    title: "AI Services",;
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",;
    icon: Brain,;
    href: "/ai-services",;
    features: ["Machine Learning Models", "Computer Vision", "Natural Language Processing", "Predictive Analytics", "AI Chatbots", "Quantum AI"],;
    pricing: "Starting at $2,500/month",;
    color: "from-blue-500 to-purple-500",;
    popular: true,
  ,},;
  {,
    title: "IT Services",;
    description: "Complete IT infrastructure and cloud solutions for modern businesses with enterprise-grade security and scalability",;
    icon: Network,;
    href: "/it-services",;
    features: ["Cloud Migration", "DevOps Automation", "System Integration", "IT Consulting", "Infrastructure Management", "Technical Support"],;
    pricing: "Starting at $1,800/month",;
    color: "from-green-500 to-teal-500",
  ,},;
  {,
    title: "Automation",;
    description: "Streamline your business processes with intelligent automation solutions that reduce costs and increase efficiency",;
    icon: Zap,;
    href: "/automation",;
    features: ["Workflow Automation", "API Integration", "Custom Dashboards", "Data Processing", "Business Intelligence", "Process Optimization"],;
    pricing: "Starting at $1,500/month",;
    color: "from-orange-500 to-red-500",
  ,},;
  {,
    title: "Cybersecurity",;
    description: "Comprehensive security solutions to protect your business from threats and ensure compliance",;
    icon: Shield,;
    href: "/cybersecurity",;
    features: ["Security Audits", "Penetration Testing", "Zero-Trust Architecture", "Compliance Management", "Threat Detection", "Incident Response"],;
    pricing: "Starting at $2,000/month",;
    color: "from-purple-500 to-pink-500",
  ,},;
  {,
    title: "Web Development",;
    description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience",;
    icon: Code,;
    href: "/web-development",;
    features: ["React/Next.js Apps", "E-commerce Solutions", "Progressive Web Apps", "API Development", "Performance Optimization", "SEO Integration"],;
    pricing: "Starting at $2,200/month",;
    color: "from-indigo-500 to-blue-500",
  ,},;
  {,
    title: "Mobile Development",;
    description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",;
    icon: Smartphone,;
    href: "/mobile-development",;
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps", "Mobile UI/UX", "App Store Optimization"],;
    pricing: "Starting at $3,000/month",;
    color: "from-green-500 to-emerald-500",
  ,};
],
,
const stats = [,
  { number: '500+', label: 'Projects Completed' ,},;
  { number: '50+', label: 'Happy Clients' ,},;
  { number: '5+', label: 'Years Experience' ,},;
  { number: '99.9%', label: 'Uptime Guarantee' ,},;
  { number: '24/7', label: 'Support Available' ,};
],
,
const benefits = [,
  {,
    icon: Award,;
    title: 'Expert Team',;
    description: 'Certified professionals with years of experience',
  ,},;
  {,
    icon: Clock,;
    title: 'Fast Delivery',;
    description: 'Quick turnaround times without compromising quality',
  ,},;
  {,
    icon: Shield,;
    title: 'Secure Solutions',;
    description: 'Enterprise-grade security for all our services',
  ,},;
  {,
    icon: Star,;
    title: 'Quality Assurance',;
    description: '99% client satisfaction rate with rigorous quality standards',
  ,};
],
,
export default function Services() {,
  return (,
    <Layout title="Our Services - Zion Tech Group">,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */};
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">,
          <div className="absolute inset-0">,
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>,
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>,
          </div>,
          <div className="container mx-auto px-4 relative z-10">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}};
              animate={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center text-white",
            >,
              <h1 className="text-4xl md: text-6xl font-bold mb-6">,
                Our{' ',};
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">,
                  Services,
                </span>,
              </h1>,
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
                Comprehensive technology solutions designed to transform your business and drive growth.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Stats Section */,};
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              viewport={{ once: true ,}};
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Why Choose Us,
              </h2>,
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">,
                Our track record speaks for itself,
              </p>,
            </motion.div>,
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">,
              {stats.map((stat, index) => (,
                <motion.div,
                  key={index};
                  initial={{ opacity: 0, y: 30 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  className="text-center",
                >,
                  <div className="text-4xl md: text-5xl font-bold text-blue-600 mb-2">,
                    {stat.number,};
                  </div>,
                  <div className="text-gray-600 font-medium">,
                    {stat.label};
                  </div>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* Services Grid */};
        <section className="py-20 bg-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center mb-16",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                What We Offer,
              </h2>,
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.,
              </p>,
            </motion.div>,
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {services.map((service, index) => {,
                const IconComponent = service.icon,
                return (,
                  <motion.div,
                    key={index};
                    initial={{ opacity: 0, y: 20 ,}};
                    whileInView={{ opacity: 1, y: 0 ,}};
                    transition={{ duration: 0.6, delay: index * 0.1 ,}};
                    className="bg-white p-8 rounded-lg shadow-lg hover: shadow-xl transition-shadow border border-gray-200",
                  >,
                    <div className="flex items-center mb-4">,
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color,} text-white mr-4`}>,
                        <IconComponent className="h-8 w-8" />,
                      </div>,
                      <h3 className="text-xl font-semibold text-gray-900">,
                        {service.title};
                      </h3>,
                    </div>,
                    <p className="text-gray-600 mb-4">,
                      {service.description};
                    </p>,
                    <ul className="space-y-2 mb-6">,
                      {service.features.map((feature, featureIndex) => (,
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">,
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />,
                          {feature};
                        </li>,
                      ))};
                    </ul>,
                    <div className="text-blue-600 font-semibold mb-4">,
                      {service.pricing};
                    </div>,
                    <Link,
                      href={service.href};
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover: shadow-lg transition-all duration-300 font-semibold`,};
                    >,
                      Learn More,
                      <ArrowRight className="w-4 h-4 ml-2" />,
                    </Link>,
                  </motion.div>,
                ),
              })};
            </div>,
          </div>,
        </section>,
        {/* Benefits Section */};
        <section className="py-20 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <motion.div,
              className="text-center mb-16",
              initial={{ opacity: 0, y: 30 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              viewport={{ once: true ,}};
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Why Choose Zion Tech Group,
              </h2>,
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">,
                We deliver exceptional results through our commitment to excellence,
              </p>,
            </motion.div>,
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
              {benefits.map((benefit, index) => {,
                const IconComponent = benefit.icon,
                return (,
                  <motion.div,
                    key={index};
                    className="text-center",
                    initial={{ opacity: 0, y: 30 ,}};
                    whileInView={{ opacity: 1, y: 0 ,}};
                    transition={{ duration: 0.8, delay: index * 0.1 ,}};
                    viewport={{ once: true ,}};
                  >,
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">,
                      <IconComponent className="w-8 h-8 text-blue-600" />,
                    </div>,
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>,
                    <p className="text-gray-600">{benefit.description}</p>,
                  </motion.div>,
                ),
              })};
            </div>,
          </div>,
        </section>,
        {/* CTA Section */};
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              viewport={{ once: true ,}};
            >,
              <h2 className="text-3xl md: text-4xl font-bold mb-6">,
                Ready to Get Started?,
              </h2>,
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
                Let's discuss how our services can help transform your business.,
              </p>,
              <div className="flex flex-col sm:flex-row gap-4 justify-center">,
                <Link,
                  href="/contact",
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold",
                >,
                  Contact Us,
                  <ArrowRight className="ml-2 w-5 h-5" />,
                </Link>,
                <Link,
                  href="/pricing",
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold",
                >,
                  View Pricing,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,};