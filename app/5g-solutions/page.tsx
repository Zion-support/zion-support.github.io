<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import SEOHead from '../components/SEOHead'
import { Wifi, CheckCircle, Network, Cpu, Smartphone } from 'lucide-react'
const FiveGSolutionsPage: React.FC = () => {
  const  solutions = [
    {
      name: "5G Implementation","
      description: "Complete 5G network deployment with zero-downtime migration and comprehensive testing.","
      features: ["Network planning & design", "Equipment installation", "Performance testing", "Compliance certification", "24/7 monitoring", "Maintenance support"],"
      price: "From $5,999","
      marketPrice: "$12,999-49,999","
      popular: true,
      icon: <Wifi: className ="w-8 h-8" />,"
      benefits: "Deploy 5G networks 60% faster than industry average""
    },
    {
      name: "5G Network Infrastructure","
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.","
      features: ["Tower installation", "Fiber optics deployment", "Coverage optimization", "Signal boosting", "Maintenance contracts", "Performance monitoring"],"
      price: "From $4,999","
      marketPrice: "$9,999-39,999","
      popular: false,
      icon: <Network: className ="w-8 h-8" />,"
      benefits: "Achieve 99.9% network uptime with our infrastructure""
    },
    {
      name: "5G IoT Solutions","
      description: "Comprehensive IoT connectivity solutions powered by 5G for smart devices and sensors.","
      features: ["Device connectivity", "Data analytics", "Real-time monitoring", "Edge computing", "Security protocols", "Scalable architecture"],"
      price: "From $3,999","
      marketPrice: "$7,999-29,999","
      popular: true,
      icon: <Cpu: className ="w-8 h-8" />,"
      benefits: "Connect up to 1M devices per square kilometer""
    },
    {
      name: "5G Mobile Solutions","
      description: "Advanced mobile applications and services optimized for 5G networks.","
      features: ["App optimization", "Low latency streaming", "AR/VR integration", "Real-time collaboration", "Cloud integration", "Performance tuning"],"
      price: "From $2,999","
      marketPrice: "$5,999-19,999","
      popular: false,
      icon: <Smartphone: className ="w-8 h-8" />,"
      benefits: "Achieve sub-1ms latency for real-time applications""
=======
<<<<<<< HEAD
import React from 'react";";";";
import { Helmet } from 'react-helmet-async";";";";
import { Wifi, Network, Cpu, CheckCircle, ArrowRight } from 'lucide-react";";";";
import SEOHead from '../components/SEOHead";";";";
import { Wifi, CheckCircle, Network, Cpu, Smartphone } from 'lucide-react";
const FiveGSolutionsPage: React.FC  =  () => {";
  const solutions = [";";
    {;";";,";
      name: "5G Implementation",";"
      description: "Complete 5G network deployment with zero-downtime migration and comprehensive testing.",";"
      features: ["Network planning & design", "Equipment installation", "Performance testing", "Compliance certification", "24/7 monitoring", "Maintenance support"],";"
      price: "From $5,999",";"
      marketPrice: "$12,999-49,999",";";";";
      popular: true,"
      icon: <Wifi className ="w-8 h-8" />,";"
      benefits: "Deploy 5G networks 60% faster than industry average"",";";
    },";";";
    {"
      name: "5G Network Infrastructure",";"
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.",";"
      features: ["Tower installation", "Fiber optics deployment", "Coverage optimization", "Signal boosting", "Maintenance contracts", "Performance monitoring"],";"
      price: "From $4,999",";"
      marketPrice: "$9,999-39,999",";";";";
      popular: false,"
      icon: <Network className ="w-8 h-8" />,";"
      benefits: "Achieve 99.9% network uptime with our infrastructure"",";";
    },";";";
    {"
      name: "5G IoT Solutions",";"
      description: "Comprehensive IoT connectivity solutions powered by 5G for smart devices and sensors.",";"
      features: ["Device connectivity", "Data analytics", "Real-time monitoring", "Edge computing", "Security protocols", "Scalable architecture"],";"
      price: "From $3,999",";"
      marketPrice: "$7,999-29,999",";";";";
      popular: true,"
      icon: <Cpu className ="w-8 h-8" />,";"
      benefits: "Connect up to 1M devices per square kilometer"",";";
    },";";";
    {"
      name: "5G Mobile Solutions",";"
      description: "Advanced mobile applications and services optimized for 5G networks.",";"
      features: ["App optimization", "Low latency streaming", "AR/VR integration", "Real-time collaboration", "Cloud integration", "Performance tuning"],";"
      price: "From $2,999",";"
      marketPrice: "$5,999-19,999",";";";";
      popular: false,"
      icon: <Smartphone className ="w-8 h-8" />,";"
      benefits: "Achieve sub-1ms latency for real-time applications"",
    };";
  ];";";
  return (";";";
    <>"
      <SEOHead title ="5G Solutions - Zion Tech Group"";"
        description="Comprehensive 5G network solutions including implementation, infrastructure, IoT connectivity, and mobile applications."";"
        keywords="5G solutions, 5G implementation, 5G infrastructure, 5G IoT, 5G mobile, network deployment"";";";";
      />"
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";";";";
        {/* Hero Section */}"
        <div className ="relative overflow-hidden">";"
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">";"
            <div className ="text-center">";"
              <h1 className ="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";";";
                5G Solutions";";";
              </h1>"
              <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">",";";
                Transform your business with our comprehensive 5G solutions. From network implementation to IoT connectivity, we deliver cutting-edge 5G technology.";";";
              </p>"
              <div className ="flex flex-col sm: flex-row gap-4 justify-center">";"
                <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";";
                  Get Started";";";
                </button>"
                <button className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">",
                  Learn More
                </button>
              </div>
            </div>";
          </div>";";
        </div>";";";
        {/* Solutions Section */}"
        <div className ="py-24">";"
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";"
            <div className ="text-center mb-16">";"
              <h2 className ="text-4xl font-bold mb-4">Our 5G Solutions</$1>"
              <p className ="text-xl text-gray-300">Comprehensive 5G services tailored to your business needs</$1>";";";
            </div>"
            <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">",";";";
              {solutions.map((solution, index) => ("
                <div key ={index} className={`bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors relative ${solution.popular ? 'ring-2 ring-purple-400'  ''}`}>";";";";
                  {solution.popular && ("
                    <div className ="absolute -top-3 left-1/2 transform -translate-x-1/2">";"
                      <span className ="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">";
                        Most Popular";
                      </span>";";
                    </div>";";";
                  )}"
                  <div className ="text-blue-400 mb-4">{solution.icon}</$1>"
                  <h3 className ="text-2xl font-semibold mb-2">{solution.name}</$1>"
                  <p className ="text-gray-300 mb-4">{solution.description}</$1>"
                  <div className ="mb-6">";"
                    <div className ="flex items-baseline gap-2 mb-2">";"
                      <span className ="text-3xl font-bold text-white">{solution.price}</$1>"
                      <span className ="text-gray-400 line-through">{solution.marketPrice}</$1>";";";
                    </div>"
                    <p className ="text-sm text-green-400 font-semibold">{solution.benefits}</$1>";";";
                  </div>"
                  <ul className ="space-y-2 mb-6">";";";";
                    {solution.features.map((feature, featureIndex) => ("
                      <li key ={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">";"
                        <CheckCircle className ="w-4 h-4 text-green-400 flex-shrink-0" />";
                        {feature};";
                      </li>";";
                    ))}";";";
                  </ul>"
                  <button className ="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">",
=======
<<<<<<< HEAD
import React from 'react;''";
import { Helmet, Right, Wifi, Circle, Zap, Globe, Smartphone, CheckCircle, Shield } from 'lucide-react;''";
const: Page = () => {
  const: features = [
    {;
      icon: <CheckCircle: className ="w-8 h-8" />,""";
      title: 'Advanced Features',''";
      description: 'Cutting-edge technology for maximum efficiency''";
    },
    {
      icon: <Shield: className ="w-8 h-8" />,""";
      title: 'Secure & Reliable',''";
      description: 'Enterprise-grade security and 99.9% uptime''";
    },
    {
      icon: <Smartphone: className ="w-8 h-8" />,""";
      title: 'Mobile Optimization',''";
      description: 'Optimized 5G solutions for mobile devices and applications',''";
      benefits: ['Mobile-first design', 'App optimization', 'Battery efficiency', 'Device compatibility']''";
    },
    {
      icon: <Wifi: className ="w-8 h-8" />,""";
      title: 'Network Connectivity',''";
      description: 'High-speed 5G network solutions for seamless connectivity''";
    }
  ];
  const: solutions = [
    {;
      title: '5G Network Infrastructure',''";
      description: 'Complete 5G network setup and optimization',''";
      price: 'Starting at $50,000',''";
      features: ['Network planning', 'Tower installation', 'Signal optimization', 'Performance monitoring']''";
    },
    {
      title: '5G Mobile Applications',''";
      description: 'Custom mobile apps optimized for 5G networks',''";
      price: 'Starting at $25,000',''";
      features: ['App development', '5G optimization', 'Testing & QA', 'Deployment support']''";
    },
    {
      title: '5G IoT Solutions',''";
      description: 'IoT device connectivity and management platform',''";
      price: 'Starting at $35,000',''";
      features: ['Device management', 'Data analytics', 'Real-time monitoring', 'Scalable architecture']''";
    }
  ];
  return (
    <></>
      <EnhancedSEO: title ="Page - Zion Tech Group""";
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""";
        keywords="page, business solutions, technology services, professional services""";
      />
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""";
        {/* Hero Section */}
        <section: className ="relative py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto text-center">""";
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">""";
              Page
              <span: className ="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""";
                Solutions
              </span>
            </h1>
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""";
              Professional page services designed to help your business succeed and grow.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""";
              >
                Get Started
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/demo""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8">""";
          <div: className ="max-w-7xl mx-auto">""";
            <div: className ="text-center mb-16">""";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
                Why Choose Our Page Services?
              </h2>
              <p: className ="text-xl text-gray-300 max-w-2xl mx-auto">""";
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">""";
              {features.map((feature, index) => (
                <div: key ={index} className="text-center">""";
                  <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""";
                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""";
                  <p: className ="text-gray-300">{feature.description}</p>""";
=======
=======
import React from 'react';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: '5G Solutions',
      description: 'Comprehensive 5G technology solutions for modern businesses'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
<<<<<<< HEAD
      name: "5G IoT Solutions",";";
      description: "Comprehensive IoT connectivity solutions powered by 5G for smart devices and sensors.",";";
      features: ["Device connectivity", "Data analytics", "Real-time monitoring", "Edge computing", "Security protocols", "Scalable architecture"],";";
      price: "From $3,999",";";
      marketPrice: "$7,999-29,999",";";
      popular: true,
      icon: <Cpu: className ="w-8 h-8" />,";";
      benefits: "Connect up to 1M devices per square kilometer"",";
    },
    {
      name: "5G Mobile Solutions",";";
      description: "Advanced mobile applications and services optimized for 5G networks.",";";
      features: ["App optimization", "Low latency streaming", "AR/VR integration", "Real-time collaboration", "Cloud integration", "Performance tuning"],";";
      price: "From $2,999",";";
      marketPrice: "$5,999-19,999",";";
      popular: false,
      icon: <Smartphone: className ="w-8 h-8" />,";";
      benefits: "Achieve sub-1ms latency for real-time applications"",";
>>>>>>> main
=======
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our team of specialists'
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    }
  ]
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <SEOHead= title ="5G Solutions - Zion Tech Group""
        description="Comprehensive 5G network solutions including implementation, infrastructure, IoT connectivity, and mobile applications.""
        keywords="5G solutions, 5G implementation, 5G infrastructure, 5G IoT, 5G mobile, network deployment""
      />
      
      <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">"
        {/* Hero Section */}
        <div  className ="relative overflow-hidden">"
          <div  className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">"
            <div  className ="text-center">"
              <h1  className ="text-5xl md=text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">"
                5G Solutions
              </h1>
              <p  className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
                Transform your business with our comprehensive 5G solutions. From network implementation to IoT connectivity, we deliver cutting-edge 5G technology.
              </p>
              <div  className ="flex flex-col sm:flex-row gap-4 justify-center">"
                <button  className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">"
                  Get Started
                </button>
                <button  className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">"
=======
      <SEOHead: title ="5G Solutions - Zion Tech Group"";";
        description="Comprehensive 5G network solutions including implementation, infrastructure, IoT connectivity, and mobile applications."";";
        keywords="5G solutions, 5G implementation, 5G infrastructure, 5G IoT, 5G mobile, network deployment"";";
      />
      
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";";
        {/* Hero Section */}
        <div: className ="relative overflow-hidden">";";
          <div: className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">";";
            <div: className ="text-center">";";
              <h1: className ="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";";
                5G Solutions
              </h1>
              <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">",";
                Transform your business with our comprehensive 5G solutions. From network implementation to IoT connectivity, we deliver cutting-edge 5G technology.
              </p>
              <div: className ="flex flex-col sm: flex-row gap-4 justify-center">";";
                <button: className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";
                  Get Started
                </button>
                <button: className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">",";
>>>>>>> main
                  Learn More
                </button>
              </div>
            </div>
=======
      <EnhancedSEO title="5G Solutions - Zion Tech Group" description="Comprehensive 5G technology solutions for modern businesses" />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 5G technology solutions for modern businesses
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
          </div>

<<<<<<< HEAD
        {/* Solutions Section */}
<<<<<<< HEAD
        <div  className ="py-24">"
          <div  className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div  className ="text-center mb-16">"
              <h2  className ="text-4xl font-bold mb-4">Our 5G Solutions</h2>"
              <p  className ="text-xl text-gray-300">Comprehensive 5G services tailored to your business needs</p>"
            </div>
            
            <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-2 gap-8">"
              {solutions.map((solution, index) => (
                <div  key ={index} className={`bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors relative ${solution.popular ? 'ring-2 ring-purple-400' : ''}`}>"
                  {solution.popular && (
                    <div  className ="absolute -top-3 left-1/2 transform -translate-x-1/2">"
                      <span  className ="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">"
=======
        <div: className ="py-24">";";
          <div: className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";";
            <div: className ="text-center mb-16">";";
              <h2: className ="text-4xl font-bold mb-4">Our 5G Solutions</h2>";";
              <p: className ="text-xl text-gray-300">Comprehensive 5G services tailored to your business needs</p>";";
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">",";
              {solutions.map((solution, index) => (
                <div: key ={index} className={`bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors relative ${solution.popular ? 'ring-2 ring-purple-400'  ''}`}>";";";
                  {solution.popular && (
                    <div: className ="absolute -top-3 left-1/2 transform -translate-x-1/2">";";
                      <span: className ="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">";";
>>>>>>> main
                        Most Popular
                      </span>
                    </div>
                  )}
                  
<<<<<<< HEAD
                  <div  className ="text-blue-400 mb-4">{solution.icon}</div>"
                  <h3  className ="text-2xl font-semibold mb-2">{solution.name}</h3>"
                  <p  className ="text-gray-300 mb-4">{solution.description}</p>"
                  <div  className ="mb-6">"
                    <div  className ="flex items-baseline gap-2 mb-2">"
                      <span  className ="text-3xl font-bold text-white">{solution.price}</span>"
                      <span  className ="text-gray-400 line-through">{solution.marketPrice}</span>"
                    </div>
                    <p  className ="text-sm text-green-400 font-semibold">{solution.benefits}</p>"
                  </div>
                  
                  <ul: className ="space-y-2 mb-6">"
                    {solution.features.map((feature, featureIndex) => (
                      <li: key ={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">"
                        <CheckCircle: className ="w-4 h-4 text-green-400 flex-shrink-0" />"
=======
                  <div: className ="text-blue-400 mb-4">{solution.icon}</div>";";
                  <h3: className ="text-2xl font-semibold mb-2">{solution.name}</h3>";";
                  <p: className ="text-gray-300 mb-4">{solution.description}</p>";";
                  
                  <div: className ="mb-6">";";
                    <div: className ="flex items-baseline gap-2 mb-2">";";
                      <span: className ="text-3xl font-bold text-white">{solution.price}</span>";";
                      <span: className ="text-gray-400 line-through">{solution.marketPrice}</span>";";
                    </div>
                    <p: className ="text-sm text-green-400 font-semibold">{solution.benefits}</p>";";
                  </div>
                  
                  <ul: className ="space-y-2 mb-6">";";
                    {solution.features.map((feature, featureIndex) => (
                      <li: key ={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">";";
                        <CheckCircle: className ="w-4 h-4 text-green-400 flex-shrink-0" />";";
>>>>>>> main
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
<<<<<<< HEAD
                  <button  className ="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">"
=======
                  <button: className ="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">",";
>>>>>>> main
>>>>>>> main
                    Get Started
                  </button>
                </div>
<<<<<<< HEAD
              ))};
            </div>";
          </div>";";
        </div>";";";
        {/* CTA Section */}"
        <div className ="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";"
          <div className ="max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8">";"
            <h2 className ="text-4xl font-bold mb-4">Ready to Deploy 5G?</$1>"
            <p className ="text-xl text-gray-300 mb-8">";";";
              Contact our experts to discuss your 5G requirements and get a customized solution.";";";
            </p>"
            <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";
=======
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </section>
        {/* CTA Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""";
          <div: className ="max-w-4xl mx-auto text-center">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">""";
              Ready to Get Started?
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">""";
              Let's discuss how our page services can help your business succeed.''";
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""";
              >
                Contact Us
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/services""";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
              >
                View All Services
              </Link>
            </div>
=======
        </div>

        {/* CTA Section */}
<<<<<<< HEAD
        <div  className ="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">"
          <div  className ="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">"
            <h2  className ="text-4xl font-bold mb-4">Ready to Deploy 5G?</h2>"
            <p  className ="text-xl text-gray-300 mb-8">"
              Contact our experts to discuss your 5G requirements and get a customized solution.
            </p>
            <button  className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">"
=======
        <div: className ="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";";
          <div: className ="max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8">";";
            <h2: className ="text-4xl font-bold mb-4">Ready to Deploy 5G?</h2>";";
            <p: className ="text-xl text-gray-300 mb-8">";";
              Contact our experts to discuss your 5G requirements and get a customized solution.
            </p>
            <button: className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";
>>>>>>> main
>>>>>>> main
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </>
<<<<<<< HEAD
  )
}
export default FiveGSolutionsPage
=======
  ),";
};";";
export default FiveGSolutionsPage;";";";
"
=======
<<<<<<< HEAD
      {/* Features Section */}
      <div: className ="py-20">""";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""";
          <div: className ="text-center mb-16">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
              Why Choose Our 5G Solutions?
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">""";
              Cutting-edge technology meets enterprise-grade reliability
            </p>
          </div>
          <div: className ="grid md:grid-cols-2 lg:grid-cols-4 gap-8">""";
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default FiveGSolutionsPage;
>>>>>>> main
)
>>>>>>> main
>>>>>>> main
=======
export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
=======


export default function FiveGSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">5G Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next-generation 5G network solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
