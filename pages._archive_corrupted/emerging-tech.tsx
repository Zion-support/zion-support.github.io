import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
import React from 'react
import dynamic from 'next/dynamic
import Head from 'next/head
import Link from 'next/link
import { motion } from 'framer-motion
import {
  // TODO: Implement
}
pr-12325
  Brain, 
  Lock, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Clock,
  Shield,
  Database,
  Cloud
} from 'lucide-react''
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false })"
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false })"
const "EmergingTechPage": React.FC = () => {"
  }
  const technologies = [{
      }
      "icon": <Brain className="w-8 h-8" />,"
      "title": 'Artificial Intelligence','
      "description": 'Advanced AI solutions including machine learning, deep learning, and neural networks for intelligent automation.','
      "features": ["
        'Machine Learning Models','
        'Natural Language Processing','
        'Computer Vision','
        'Predictive Analytics''
      ],
      "category": 'AI & ML','
      "pricing": 'Starting at $5,000','
      "delivery": '2-8 weeks''
    },
    {
      "icon": <Lock className="w-8 h-8" />,"
      "title": 'Blockchain & Web3','
      "description": 'Decentralized applications, smart contracts, and blockchain solutions for secure, transparent operations.','
      "features": ['Smart Contract Development','
        'DeFi Solutions','
        'NFT Platforms','
        'Cryptocurrency Integration''
      ],
      "category": 'Blockchain','
      "pricing": 'Starting at $8,000','
      "delivery": '4-12 weeks''
    },
    {
      "icon": <Zap className="w-8 h-8" />,"
      "title": 'Quantum Computing','
      "description": 'Next-generation quantum computing solutions for complex problem-solving and optimization.','
      "features": ['Quantum Algorithms','
        'Optimization Problems','
        'Cryptography','
        'Simulation''
      ],
      "category": 'Quantum','
      "pricing": 'Starting at $15,000','
      "delivery": '6-16 weeks''
    },
    {
      "icon": <Globe className="w-8 h-8" />,"
      "title": 'Edge Computing','
      "description": 'Distributed computing solutions that bring processing power closer to data sources.','
      "features": ['Edge Infrastructure','
        'Real-time Processing','
        'IoT Integration','
        'Low Latency''
      ],
      "category": 'Edge','
      "pricing": 'Starting at $6,000','
      "delivery": '3-10 weeks''
    },
    {
      "icon": <Shield className="w-8 h-8" />,"
      "title": 'Zero Trust Security','
      "description": 'Advanced security framework that assumes no trust and verifies everything.','
      "features": ['Identity Verification','
        'Access Control','
        'Network Segmentation','
        'Continuous Monitoring''
      ],
      "category": 'Security','
      "pricing": 'Starting at $4,000','
      "delivery": '2-6 weeks''
    },
    {
      "icon": <Database className="w-8 h-8" />,"
      "title": 'Augmented Reality','
      "description": 'Immersive AR solutions that overlay digital information onto the real world.','
      "features": ['AR Applications','
        '3D Visualization','
        'Interactive Experiences','
        'Mobile Integration''
      ],
    }
  ]
  const benefits = [{
      "icon": <Star className="w-6 h-6"  />,
      "title": 'Cutting-Edge Technology',
      "description": 'Stay ahead with the latest emerging technologies and innovations'
    },
    {
      "icon": <Users className="w-6 h-6"  />,
      "title": 'Expert Team',
      "description": 'Experienced professionals with deep knowledge in emerging technologies'
    },
    {
      "icon": <Clock className="w-6 h-6"  />,
      "title": 'Rapid Development',
      "description": 'Fast implementation and deployment of emerging technology solutions'
    },
    {
      "icon": <Shield className="w-6 h-6"  />,
      "title": 'Future-Proof',
      "description": 'Solutions designed to adapt and scale with evolving technology trends'
    }
  ]
  return (
    <>
      <SEO title="Emerging Technologies - Zion Tech Group"
        description="Explore cutting-edge emerging technologies including AI, blockchain, quantum computing, and more with Zion Tech Group."
        keywords="emerging technologies, AI, blockchain, quantum computing, edge computing, AR/VR, Zion Tech Group"
        canonical=""https": //ziontechgroup.com/emerging-tech"
       />
      <PageTransition>
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": p x-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, "y": 2 0 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl "md": tex t-6xl font-bold text-gray-900 mb-6">
                  Emerging <span className="text-blue-600">Technologies</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Explore cutting-edge technologies that are shaping the future of business and innovation.
                </p>
                <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                  <motion.a
                    href="#technologies"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ "scale": 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Explore Technologies
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ "scale": 1.05 }}
                    whileTap={{ "scale": 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Technologies Grid */}
          <section id="technologies" className="py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": p x-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, "y": 2 0 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6, "delay": 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl "md": tex t-4xl font-bold text-gray-900 mb-4">
                  Emerging Technologies
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the latest technologies that are transforming industries and creating new opportunities.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ "opacity": 0, "y": 2 0 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0.6, "delay": inde x * 0.1 }}
                    className="bg-white rounded-xl shadow-lg "hover": shado w-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-blue-600">
                          {tech.icon}
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {tech.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {tech.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key "Features": </h4>
                        <ul className="space-y-2">
                          {tech.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500"  />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <span className="font-semibold text-green-600">{tech.pricing}</span>
                        <span>{tech.delivery}</span>
                      </div>
                      <motion.button
                        whileHover={{ "scale": 1.02 }}
                        whileTap={{ "scale": 0.98 }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 "hover": b g-blue-700 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5"  />
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Benefits Section */}
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": p x-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, "y": 2 0 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl "md": tex t-4xl font-bold text-gray-900 mb-4">
                  Why Choose Emerging Technologies?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay competitive and innovative with cutting-edge technology solutions.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ "opacity": 0, "y": 2 0 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0.6, "delay": inde x * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg "hover": shado w-xl transition-shadow duration-300 text-center"
                  >
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": p x-6 lg: p x-8">
              <motion.div
                initial={{ opacity: 0, "y": 2 0 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl "md": tex t-4xl font-bold text-gray-900 mb-6">
                  Ready to Embrace the Future?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Let us help you implement emerging technologies that will transform your business and give you a competitive edge.
                </p>
                <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ "scale": 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5"  />
                    Get Started Today
                  </motion.a>
                  <motion.a
                    href=""tel": +13024640950"

import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Brain,Lock,Zap,Globe,ArrowRight,CheckCircle,Star,Users,Clock,Shield,Database,Cloud } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const EmergingTechPage: React.FC = () => { const technologies = [ { icon: <Brain className="w-8 h-8" />,title: 'Artificial Intelligence',description: 'Advanced AI solutions including machine learning,deep learning,and neural networks for intelligent automation.',features: [ 'Machine Learning Models','Natural Language Processing','Computer Vision','Predictive Analytics' ],category: 'AI & ML',pricing: 'Starting at $5,000',delivery: '2-8 weeks' },{ icon: <Lock className="w-8 h-8" />,title: 'Blockchain & Web3',description: 'Decentralized applications,smart contracts,and blockchain solutions for secure,transparent operations.',features: [ 'Smart Contract Development','DeFi Solutions','NFT Platforms','Cryptocurrency Integration' ],category: 'Blockchain',pricing: 'Starting at $8,000',delivery: '4-12 weeks' },{ icon: <Zap className="w-8 h-8" />,title: 'Quantum Computing',description: 'Next-generation quantum computing solutions for complex problem-solving and optimization.',features: [ 'Quantum Algorithms','Optimization Problems','Cryptography','Simulation' ],category: 'Quantum',pricing: 'Starting at $15,000',delivery: '6-16 weeks' },{ icon: <Globe className="w-8 h-8" />,title: 'Edge Computing',description: 'Distributed computing solutions that bring processing power closer to data sources.',features: [ 'Edge Infrastructure','Real-time Processing','IoT Integration','Low Latency' ],category: 'Edge',pricing: 'Starting at $6,000',delivery: '3-10 weeks' },{ icon: <Shield className="w-8 h-8" />,title: 'Zero Trust Security',description: 'Advanced security framework that assumes no trust and verifies everything.',features: [ 'Identity Verification','Access Control','Network Segmentation','Continuous Monitoring' ],category: 'Security',pricing: 'Starting at $4,000',delivery: '2-6 weeks' },{ icon: <Database className="w-8 h-8" />,title: 'Augmented Reality',description: 'Immersive AR solutions that overlay digital information onto the real world.',features: [ 'AR Applications','3D Visualization','Interactive Experiences','Mobile Integration' ],category: 'AR/VR',pricing: 'Starting at $7,000',delivery: '4-14 weeks' } ] const benefits = [ { icon: <Star className="w-6 h-6" />,title: 'Cutting-Edge Technology',description: 'Stay ahead with the latest emerging technologies and innovations' },{ icon: <Users className="w-6 h-6" />,title: 'Expert Team',description: 'Experienced professionals with deep knowledge in emerging technologies' },{ icon: <Clock className="w-6 h-6" />,title: 'Rapid Development',description: 'Fast implementation and deployment of emerging technology solutions' },{ icon: <Shield className="w-6 h-6" />,title: 'Future-Proof',description: 'Solutions designed to adapt and scale with evolving technology trends' } ] return ( <> <SEO title="Emerging Technologies - Zion Tech Group" description="Explore cutting-edge emerging technologies including AI,blockchain,quantum computing,and more with Zion Tech Group." keywords="emerging technologies,AI,blockchain,quantum computing,edge computing,AR/VR,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Emerging <span className="text-blue-600">Technologies</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Explore cutting-edge technologies that are shaping the future of business and innovation. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#technologies" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Technologies </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="technologies" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Emerging Technologies </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Discover the latest technologies that are transforming industries and creating new opportunities. </p> </motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8"> {technologies.map((tech,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="bg-white rounded-xl shadow-lg hover: shado w-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {tech.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {tech.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {tech.title} </h3> <p className="text-gray-600 mb-6"> {tech.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {tech.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{tech.pricing}</span> <span>{tech.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Why Choose Emerging Technologies? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Stay competitive and innovative with cutting-edge technology solutions. </p> </motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {benefits.map((benefit,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover: shado w-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {benefit.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6"> Ready to Embrace the Future? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you implement emerging technologies that will transform your business and give you a competitive edge. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default EmergingTechPage
export default EmergingTechPage
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Brain,Lock,Zap,Globe,ArrowRight,CheckCircle,Star,Users,Clock,Shield,Database,Cloud } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const EmergingTechPage: React.FC = () => { const technologies = [ { icon: <Brain className="w-8 h-8" />,title: 'Artificial Intelligence',description: 'Advanced AI solutions including machine learning,deep learning,and neural networks for intelligent automation.',features: [ 'Machine Learning Models','Natural Language Processing','Computer Vision','Predictive Analytics' ],category: 'AI & ML',pricing: 'Starting at $5,000',delivery: '2-8 weeks' },{ icon: <Lock className="w-8 h-8" />,title: 'Blockchain & Web3',description: 'Decentralized applications,smart contracts,and blockchain solutions for secure,transparent operations.',features: [ 'Smart Contract Development','DeFi Solutions','NFT Platforms','Cryptocurrency Integration' ],category: 'Blockchain',pricing: 'Starting at $8,000',delivery: '4-12 weeks' },{ icon: <Zap className="w-8 h-8" />,title: 'Quantum Computing',description: 'Next-generation quantum computing solutions for complex problem-solving and optimization.',features: [ 'Quantum Algorithms','Optimization Problems','Cryptography','Simulation' ],category: 'Quantum',pricing: 'Starting at $15,000',delivery: '6-16 weeks' },{ icon: <Globe className="w-8 h-8" />,title: 'Edge Computing',description: 'Distributed computing solutions that bring processing power closer to data sources.',features: [ 'Edge Infrastructure','Real-time Processing','IoT Integration','Low Latency' ],category: 'Edge',pricing: 'Starting at $6,000',delivery: '3-10 weeks' },{ icon: <Shield className="w-8 h-8" />,title: 'Zero Trust Security',description: 'Advanced security framework that assumes no trust and verifies everything.',features: [ 'Identity Verification','Access Control','Network Segmentation','Continuous Monitoring' ],category: 'Security',pricing: 'Starting at $4,000',delivery: '2-6 weeks' },{ icon: <Database className="w-8 h-8" />,title: 'Augmented Reality',description: 'Immersive AR solutions that overlay digital information onto the real world.',features: [ 'AR Applications','3D Visualization','Interactive Experiences','Mobile Integration' ],category: 'AR/VR',pricing: 'Starting at $7,000',delivery: '4-14 weeks' } ] const benefits = [ { icon: <Star className="w-6 h-6" />,title: 'Cutting-Edge Technology',description: 'Stay ahead with the latest emerging technologies and innovations' },{ icon: <Users className="w-6 h-6" />,title: 'Expert Team',description: 'Experienced professionals with deep knowledge in emerging technologies' },{ icon: <Clock className="w-6 h-6" />,title: 'Rapid Development',description: 'Fast implementation and deployment of emerging technology solutions' },{ icon: <Shield className="w-6 h-6" />,title: 'Future-Proof',description: 'Solutions designed to adapt and scale with evolving technology trends' } ] return ( <> <SEO title="Emerging Technologies - Zion Tech Group" description="Explore cutting-edge emerging technologies including AI,blockchain,quantum computing,and more with Zion Tech Group." keywords="emerging technologies,AI,blockchain,quantum computing,edge computing,AR/VR,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Emerging <span className="text-blue-600">Technologies</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Explore cutting-edge technologies that are shaping the future of business and innovation. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#technologies" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Technologies </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="technologies" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Emerging Technologies </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Discover the latest technologies that are transforming industries and creating new opportunities. </p> </motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8"> {technologies.map((tech,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="bg-white rounded-xl shadow-lg hover: shado w-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {tech.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {tech.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {tech.title} </h3> <p className="text-gray-600 mb-6"> {tech.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {tech.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{tech.pricing}</span> <span>{tech.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Why Choose Emerging Technologies? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Stay competitive and innovative with cutting-edge technology solutions. </p> </motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {benefits.map((benefit,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover: shado w-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {benefit.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6"> Ready to Embrace the Future? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you implement emerging technologies that will transform your business and give you a competitive edge. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default EmergingTechPage

import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Brain,Lock,Zap,Globe,ArrowRight,CheckCircle,Star,Users,Clock,Shield,Database,Cloud } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const EmergingTechPage: React.FC = () => { const technologies = [ { icon: <Brain className="w-8 h-8" />,title: 'Artificial Intelligence',description: 'Advanced AI solutions including machine learning,deep learning,and neural networks for intelligent automation.',features: [ 'Machine Learning Models','Natural Language Processing','Computer Vision','Predictive Analytics' ],category: 'AI & ML',pricing: 'Starting at $5,000',delivery: '2-8 weeks' },{ icon: <Lock className="w-8 h-8" />,title: 'Blockchain & Web3',description: 'Decentralized applications,smart contracts,and blockchain solutions for secure,transparent operations.',features: [ 'Smart Contract Development','DeFi Solutions','NFT Platforms','Cryptocurrency Integration' ],category: 'Blockchain',pricing: 'Starting at $8,000',delivery: '4-12 weeks' },{ icon: <Zap className="w-8 h-8" />,title: 'Quantum Computing',description: 'Next-generation quantum computing solutions for complex problem-solving and optimization.',features: [ 'Quantum Algorithms','Optimization Problems','Cryptography','Simulation' ],category: 'Quantum',pricing: 'Starting at $15,000',delivery: '6-16 weeks' },{ icon: <Globe className="w-8 h-8" />,title: 'Edge Computing',description: 'Distributed computing solutions that bring processing power closer to data sources.',features: [ 'Edge Infrastructure','Real-time Processing','IoT Integration','Low Latency' ],category: 'Edge',pricing: 'Starting at $6,000',delivery: '3-10 weeks' },{ icon: <Shield className="w-8 h-8" />,title: 'Zero Trust Security',description: 'Advanced security framework that assumes no trust and verifies everything.',features: [ 'Identity Verification','Access Control','Network Segmentation','Continuous Monitoring' ],category: 'Security',pricing: 'Starting at $4,000',delivery: '2-6 weeks' },{ icon: <Database className="w-8 h-8" />,title: 'Augmented Reality',description: 'Immersive AR solutions that overlay digital information onto the real world.',features: [ 'AR Applications','3D Visualization','Interactive Experiences','Mobile Integration' ],category: 'AR/VR',pricing: 'Starting at $7,000',delivery: '4-14 weeks' } ] const benefits = [ { icon: <Star className="w-6 h-6" />,title: 'Cutting-Edge Technology',description: 'Stay ahead with the latest emerging technologies and innovations' },{ icon: <Users className="w-6 h-6" />,title: 'Expert Team',description: 'Experienced professionals with deep knowledge in emerging technologies' },{ icon: <Clock className="w-6 h-6" />,title: 'Rapid Development',description: 'Fast implementation and deployment of emerging technology solutions' },{ icon: <Shield className="w-6 h-6" />,title: 'Future-Proof',description: 'Solutions designed to adapt and scale with evolving technology trends' } ] return ( <> <SEO title="Emerging Technologies - Zion Tech Group" description="Explore cutting-edge emerging technologies including AI,blockchain,quantum computing,and more with Zion Tech Group." keywords="emerging technologies,AI,blockchain,quantum computing,edge computing,AR/VR,Zion Tech Group" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Emerging <span className="text-blue-600">Technologies</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Explore cutting-edge technologies that are shaping the future of business and innovation. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#technologies" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Technologies </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="technologies" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Emerging Technologies </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Discover the latest technologies that are transforming industries and creating new opportunities. </p> </motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8"> {technologies.map((tech,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="bg-white rounded-xl shadow-lg hover: shado w-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {tech.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {tech.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {tech.title} </h3> <p className="text-gray-600 mb-6"> {tech.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {tech.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{tech.pricing}</span> <span>{tech.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Why Choose Emerging Technologies? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Stay competitive and innovative with cutting-edge technology solutions. </p> </motion.div> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {benefits.map((benefit,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: inde x * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover: shado w-xl transition-shadow duration-300 text-center" > <div className="text-blue-600 mb-4 flex justify-center"> {benefit.icon} </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {benefit.title} </h3> <p className="text-gray-600"> {benefit.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <motion.div initial={{ opacity: 0,y: 2 0 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6"> Ready to Embrace the Future? </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Let us help you implement emerging technologies that will transform your business and give you a competitive edge. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default EmergingTechPage
