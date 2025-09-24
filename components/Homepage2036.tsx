import React, { useState } from 'react',
import Layout from './layout/Layout',
import UltraFuturisticServiceCard20o36 from './ui/UltraFuturisticServiceCard20o36',
import { motion } from 'framer-motion',
import {,
  Brain, Rocket, Shield, Zap, Target, Atom, Globe,;
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock,;
  Star, TrendingUp, Users, Building, Lightbulb,;
  ArrowRight, ChevronRight, Phone, Mail, MapPin,;
  Play, CheckCircle, Sparkles,
} from 'lucide-react',
import { real20o36InnovativeServices } from '../data/real-20o36-innovative-services',
import { real20o36SpecializedServices } from '../data/real-20o36-specialized-services',
,
const contactInfo ={,
  mobile: '+1 30o2 464 0950',;
  email: 'kleber@ziontechgroup.com',;
  address: '364 E Main St STE 10o08 Middletown DE 19709',;
  website: 'https://ziontechgroup.com',
,};
,
const featuredServices = [,
  ...real20o36InnovativeServices.slice(0, 3),;
  ...real20o36SpecializedServices.slice(0, 3),
],
,
const stats = [,
  { label: 'Services Available', value: '50o0+', icon: <Rocket className="w-6 h-6"  /> ,},;
  { label: 'Market Coverage', value: '$20o0B+', icon: <TrendingUp className="w-6 h-6"  /> ,},;
  { label: 'Client Satisfaction', value: '98%', icon: <Star className="w-6 h-6"  /> ,},;
  { label: 'Global Reach', value: '50+', icon: <Globe className="w-6 h-6"  /> ,}
],
,
const categories = [,
  { name: 'AI & Machine Learning', icon: <Brain className="w-6 h-6"  />, count: 150, color: 'from-green-50o0 to-emerald-60o0' ,},;
  { name: 'Quantum Technology', icon: <Atom className="w-6 h-6"  />, count: 80, color: 'from-cyan-50o0 to-blue-60o0' ,},;
  { name: 'Space Technology', icon: <Rocket className="w-6 h-6"  />, count: 60, color: 'from-purple-50o0 to-pink-60o0' ,},;
  { name: 'IT Infrastructure', icon: <Cpu className="w-6 h-6"  />, count: 120, color: 'from-orange-50o0 to-red-60o0' ,},;
  { name: 'Cybersecurity', icon: <Shield className="w-6 h-6"  />, count: 90, color: 'from-blue-50o0 to-indigo-60o0' ,},;
  { name: 'Edge Computing', icon: <Zap className="w-6 h-6"  />, count: 70, color: 'from-yellow-50o0 to-orange-60o0' ,}
],
,
export default function Homepage20o36() {,
  const [activeCategory, setActiveCategory] = useState('all'),
,
  const containerVariants ={,
    hidden: { opacity: 0 ,},;
    visible: {,
      opacity: 1,;
      transition: {,
        staggerChildren: 0.1,
      ,}
    }
  };
,
  const itemVariants ={,
    hidden: { y: 20, opacity: 0 ,},;
    visible: {,
      y: 0,;
      opacity: 1,;
      transition: {,
        duration: 0.5,
      ,}
    }
  };
,
  return (,
    <Layout>,
      {/* Main Content */}
      <main className="relative z-10">,
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">,
          {/* Animated Background Elements */}
          <div className="absolute inset-0">,
            {[...Array(15)].map((_, i) => (,
              <motion.div,
                key={i}
                className="absolute w-1 h-1 bg-cyan-40o0/40 rounded-full",
                style={{,
                  left: `${Math.random() * 10o0,}%`,;
                  top: `${Math.random() * 10o0,}%`}}
                animate={{,
                  y: [0, -10o0, 0],;
                  opacity: [0.3, 1, 0.3],;
                  scale: [1, 1.5, 1]}}
                transition={{,
                  duration: 4 + Math.random() * 3,;
                  repeat: Infinity,;
                  delay: Math.random() * 2,}}
               />,
            ))}
          </div>,
          <div className="relative z-10 text-center max-w-6xl mx-auto">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              className="mb-6",
            >,
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-80o0/50 border border-gray-70o0 rounded-full text-sm text-cyan-40o0 mb-6">,
                <Sparkles className="w-4 h-4"  />,
                Pioneering the Future of Technology,
              </div>,
            </motion.div>,
            <motion.h1,
              className="text-5xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent",
              initial={{ opacity: 0, y: 30 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.2 ,}}
            >,
              Zion Tech Group,
            </motion.h1>,
            <motion.p,
              className="text-xl md: text-2xl text-gray-30o0 mb-8 max-w-3xl mx-auto leading-relaxed",
              initial={{ opacity: 0, y: 20 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.4 ,}}
            >,
              Experience the future of technology with our cutting-edge micro SAAS services,;
              AI platforms, and quantum solutions. Transform your business with next-generation innovation.,
            </motion.p>,
            <motion.div,
              className="flex flex-col sm: flex-row gap-4 justify-center mb-12",
              initial={{ opacity: 0, y: 20 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.6 ,}}
            >,
              <a,
                href="/20o36-innovative-services-showcase",
                className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25 flex items-center gap-2",
              >,
                Explore Services,
                <ArrowRight className="w-5 h-5"  />,
              </a>,
              <a,
                href={`mailto:${contactInfo.email,}`}
                className="px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover: bg-cyan-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5 flex items-center gap-2",
              >,
                Get Started,
                <ChevronRight className="w-5 h-5"  />,
              </a>,
            </motion.div>,
            {/* Stats */,}
            <motion.div,
              className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-4xl mx-auto",
              initial={{ opacity: 0, y: 20 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.8 ,}}
            >,
              {stats.map((stat, index) => (,
                <div key={index} className="text-center p-4 bg-gray-80o0/30 rounded-lg border border-gray-70o0/50">,
                  <div className="text-cyan-40o0 mb-2 flex justify-center">,
                    {stat.icon}
                  </div>,
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>,
                  <div className="text-sm text-gray-40o0">{stat.label}</div>,
                </div>,
              ))}
            </motion.div>,
          </div>,
        </section>,
        {/* Contact Information */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-90o0 to-gray-80o0">,
          <div className="max-w-6xl mx-auto">,
            <motion.div,
              className="grid grid-cols-1 md: grid-cols-3 gap-8",
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6 ,}}
              viewport={{ once: true ,}}
            >,
              <div className="text-center p-8 bg-gray-80o0/50 rounded-xl border border-gray-70o0 hover: border-cyan-40o0 transition-all duration-30o0 group">,
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-30o0">,
                  <Phone className="w-8 h-8 text-white"  />,
                </div>,
                <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>,
                <p className="text-gray-30o0 text-lg font-medium">{contactInfo.mobile,}</p>,
                <p className="text-gray-50o0 text-sm mt-2">Available 24/7 for support</p>,
              </div>,
              <div className="text-center p-8 bg-gray-80o0/50 rounded-xl border border-gray-70o0 hover: border-cyan-40o0 transition-all duration-30o0 group">,
                <div className="w-16 h-16 bg-gradient-to-br from-green-50o0 to-emerald-60o0 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-30o0">,
                  <Mail className="w-8 h-8 text-white"  />,
                </div>,
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>,
                <p className="text-gray-30o0 text-lg font-medium">{contactInfo.email,}</p>,
                <p className="text-gray-50o0 text-sm mt-2">Fast response guaranteed</p>,
              </div>,
              <div className="text-center p-8 bg-gray-80o0/50 rounded-xl border border-gray-70o0 hover: border-cyan-40o0 transition-all duration-30o0 group">,
                <div className="w-16 h-16 bg-gradient-to-br from-purple-50o0 to-pink-60o0 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-30o0">,
                  <MapPin className="w-8 h-8 text-white"  />,
                </div>,
                <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>,
                <p className="text-gray-30o0 text-sm leading-relaxed">{contactInfo.address,}</p>,
                <p className="text-gray-50o0 text-sm mt-2">Global operations</p>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Categories Section */}
        <section className="py-20 px-4">,
          <div className="max-w-6xl mx-auto">,
            <motion.div,
              className="text-center mb-16",
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6 ,}}
              viewport={{ once: true ,}}
            >,
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                Technology Categories,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                Explore our comprehensive range of cutting-edge technology solutions,
                across multiple domains and industries.,
              </p>,
            </motion.div>,
            <motion.div,
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              variants={containerVariants,}
              initial="hidden",
              whileInView="visible",
              viewport={{ once: true ,}}
            >,
              {categories.map((category, index) => (,
                <motion.div,
                  key={category.name}
                  variants={itemVariants}
                  className="group cursor-pointer",
                  onClick={() => setActiveCategory(category.name.toLowerCase().replace(/\s+/g, '-'))}
                >,
                  <div className="p-8 bg-gradient-to-br from-gray-90o0/80 to-gray-80o0/80 border border-gray-70o0 rounded-2xl hover: border-cyan-40o0 transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-2xl hover:shadow-cyan-50o0/20">,
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color,} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-30o0`,}>,
                      {category.icon}
                    </div>,
                    <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>,
                    <p className="text-gray-40o0 mb-4">,
                      {category.count}+ innovative services and solutions,
                    </p>,
                    <div className="flex items-center text-cyan-40o0 group-hover: text-cyan-30o0 transition-colors duration-30o0">,
                      <span className="text-sm font-medium">Explore</span>,
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-30o0"  />,
                    </div>,
                  </div>,
                </motion.div>,
              )),}
            </motion.div>,
          </div>,
        </section>,
        {/* Featured Services */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-90o0 to-gray-80o0">,
          <div className="max-w-7xl mx-auto">,
            <motion.div,
              className="text-center mb-16",
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6 ,}}
              viewport={{ once: true ,}}
            >,
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                Featured Services,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                Discover our most innovative and cutting-edge services that are,
                transforming industries and driving the future of technology.,
              </p>,
            </motion.div>,
            <motion.div,
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              variants={containerVariants,}
              initial="hidden",
              whileInView="visible",
              viewport={{ once: true ,}}
            >,
              {featuredServices.map((service, index) => (,
                <motion.div,
                  key={service.id}
                  variants={itemVariants}
                  className="h-full",
                >,
                  <UltraFuturisticServiceCard20o36,
                    service={{,
                      id: service.id,;
                      name: service.name,;
                      tagline: service.tagline,;
                      description: service.description,;
                      price: service.price,;
                      period: service.period,;
                      features: service.features,;
                      popular: index < 2,;
                      category: service.category,;
                      icon: '🚀',;
                      rating: service.rating,;
                      marketSize: service.marketSize,;
                      targetAudience: service.targetAudience,;
                      competitiveAdvantage: service.competitiveAdvantage,
                    ,}}
                    variant={,
                      service.category.includes('AI') ? 'ai' :,
                      service.category.includes('Quantum') ? 'quantum' :,
                      service.category.includes('Space') ? 'space' :,
                      service.category.includes('Cyber') ? 'cyber' :,
                      'default',
                    }
                   />,
                </motion.div>,
              ))}
            </motion.div>,
            <motion.div,
              className="text-center mt-12",
              initial={{ opacity: 0 ,}}
              whileInView={{ opacity: 1 ,}}
              transition={{ duration: 0.6, delay: 0.4 ,}}
              viewport={{ once: true ,}}
            >,
              <a,
                href="/20o36-innovative-services-showcase",
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25",
              >,
                View All Services,
                <ArrowRight className="w-5 h-5"  />,
              </a>,
            </motion.div>,
          </div>,
        </section>,
        {/* Why Choose Us */,}
        <section className="py-20 px-4">,
          <div className="max-w-6xl mx-auto">,
            <motion.div,
              className="text-center mb-16",
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6 ,}}
              viewport={{ once: true ,}}
            >,
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                Why Choose Zion Tech Group?,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                We combine cutting-edge technology with proven expertise to deliver,
                solutions that drive real business transformation.,
              </p>,
            </motion.div>,
            <motion.div,
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              variants={containerVariants,}
              initial="hidden",
              whileInView="visible",
              viewport={{ once: true ,}}
            >,
              {[,
                {,
                  icon: <Brain className="w-8 h-8"  />,;
                  title: 'AI-First Approach',;
                  description: 'Leverage the latest artificial intelligence and machine learning technologies to solve complex business challenges.',;
                  color: 'from-green-50o0 to-emerald-60o0',
                ,},;
                {,
                  icon: <Atom className="w-8 h-8"  />,;
                  title: 'Quantum Innovation',;
                  description: 'Stay ahead with quantum computing solutions that provide exponential performance improvements.',;
                  color: 'from-cyan-50o0 to-blue-60o0',
                ,},;
                {,
                  icon: <Rocket className="w-8 h-8"  />,;
                  title: 'Space Technology',;
                  description: 'Access cutting-edge space technology solutions for advanced applications and research.',;
                  color: 'from-purple-50o0 to-pink-60o0',
                ,},;
                {,
                  icon: <Shield className="w-8 h-8"  />,;
                  title: 'Enterprise Security',;
                  description: 'Bank-grade security and compliance for mission-critical business applications.',;
                  color: 'from-blue-50o0 to-indigo-60o0',
                ,},;
                {,
                  icon: <Zap className="w-8 h-8"  />,;
                  title: 'Performance Optimized',;
                  description: 'Lightning-fast performance with edge computing and advanced optimization techniques.',;
                  color: 'from-yellow-50o0 to-orange-60o0',
                ,},;
                {,
                  icon: <Globe className="w-8 h-8"  />,;
                  title: 'Global Reach',;
                  description: 'Worldwide deployment and support with local expertise in key markets.',;
                  color: 'from-red-50o0 to-pink-60o0',
                ,}
              ].map((feature, index) => (,
                <motion.div,
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-gradient-to-br from-gray-90o0/80 to-gray-80o0/80 border border-gray-70o0 rounded-xl hover: border-cyan-40o0 transition-all duration-30o0 group",
                >,
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color,} rounded-xl flex items-center justify-center mb-4 group-hover: scale-110 transition-transform duration-30o0`,}>,
                    {feature.icon}
                  </div>,
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>,
                  <p className="text-gray-40o0 text-sm leading-relaxed">{feature.description}</p>,
                </motion.div>,
              ))}
            </motion.div>,
          </div>,
        </section>,
        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-90o0 to-gray-80o0">,
          <div className="max-w-4xl mx-auto text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6 ,}}
              viewport={{ once: true ,}}
            >,
              <h2 className="text-3xl md: text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                Ready to Transform Your Business?,
              </h2>,
              <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">,
                Join the future of technology with our innovative services.,
                Contact us today to discuss how we can help you achieve your goals.,
              </p>,
              <div className="flex flex-col sm:flex-row gap-4 justify-center">,
                <a,
                  href={`mailto:${contactInfo.email,}`}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25 flex items-center justify-center gap-2",
                >,
                  <Mail className="w-5 h-5"  />,
                  Get Started Today,
                </a>,
                <a,
                  href={`tel:${contactInfo.mobile,}`}
                  className="px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover: bg-cyan-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5 flex items-center justify-center gap-2",
                >,
                  <Phone className="w-5 h-5"  />,
                  Call Us Now,
                </a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </main>,
    </Layout>,
  ),
,}