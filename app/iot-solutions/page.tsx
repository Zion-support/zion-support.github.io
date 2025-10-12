import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react';

export default function IoTSolutionsPage() {
  const iotServices = [
    {
      icon: <Network className="w-5 h-5ml-2" />,
=======

import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react';

import { ArrowRight, Zap, Shield, Globe, Database, Cloud, Cpu, Rocket, Network, BarChart3, CheckCircle, DollarSign, TrendingUp, Wrench, Heart } from 'lucide-react';

export default function IoTSolutionsPage() {
  const iotServices = [
      icon: <Network className="w-8h-8text-cyan-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'IoT Device Management',
      description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices across your entire network.',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Health diagnostics'],
      price: 'Starting at $299/month'
    },
<<<<<<< HEAD
    {
      icon: <Database className="w-5 h-5ml-2" />,
=======
      icon: <Database className="w-8h-8text-emerald-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'IoT Data Analytics',
      description: 'Advanced analytics platform to process, analyze, and derive insights from IoT sensor data.',
      features: ['Real-time processing', 'Predictive analytics', 'Data visualization', 'Custom dashboards'],
      price: 'Starting at $399/month'
    },
<<<<<<< HEAD
    {
      icon: <Shield className="w-5 h-5ml-2" />,
=======
      icon: <Shield className="w-8h-8text-red-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'IoT Security Suite',
      description: 'End-to-end security solutions to protect your IoT infrastructure from cyber threats.',
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Compliance monitoring'],
      price: 'Starting at $499/month'
    },
<<<<<<< HEAD
    {
      icon: <Cloud className="w-5 h-5ml-2" />,
=======
      icon: <Cloud className="w-8h-8text-purple-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'IoT Cloud Platform',
      description: 'Scalable cloud infrastructure designed specifically for IoT applications and workloads.',
      features: ['Auto-scaling', 'Global edge locations', '99.9% uptime', 'Multi-cloud support'],
      price: 'Starting at $199/month'
    },
<<<<<<< HEAD
    {
      icon: <Cpu className="w-5 h-5ml-2" />,
=======
      icon: <Cpu className="w-8h-8text-orange-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'Edge Computing Solutions',
      description: 'Process data at the edge for faster response times and reduced latency in IoT applications.',
      features: ['Local processing', 'Real-time decisions', 'Bandwidth optimization', 'Offline capability'],
      price: 'Starting at $349/month'
    },
<<<<<<< HEAD
    {
      icon: <BarChart3 className="w-5 h-5ml-2" />,
=======
      icon: <BarChart3 className="w-8h-8text-pink-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'IoT Integration Services',
      description: 'Seamlessly integrate IoT devices with existing systems and third-party applications.',
      features: ['API development', 'System integration', 'Data synchronization', 'Legacy compatibility'],
      price: 'Starting at $249/month'
  ]

  const industries = [
      name: 'Manufacturing',
      description: 'Smart factories with predictive maintenance and quality control',
<<<<<<< HEAD
      icon: <Wrench className="w-5 h-5ml-2" />
=======
      icon: <Wrench>
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    },
      name: 'Healthcare',
      description: 'Medical device monitoring and patient care optimization',
<<<<<<< HEAD
      icon: <Heart className="w-5 h-5ml-2" />
=======
      icon: <Heart>
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    },
      name: 'Agriculture',
      description: 'Precision farming with soil and crop monitoring',
<<<<<<< HEAD
      icon: <Globe className="w-5 h-5ml-2" />
=======
      icon: <Globe>
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    },
      name: 'Smart Cities',
      description: 'Traffic management, waste optimization, and public safety',
<<<<<<< HEAD
      icon: <Building className="w-5 h-5ml-2" />
=======
      icon: <Building>
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    },
      name: 'Retail',
      description: 'Inventory management and customer experience enhancement',
<<<<<<< HEAD
      icon: <ShoppingCart className="w-5 h-5ml-2" />
=======
      icon: <ShoppingCart>
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    },
      name: 'Energy',
      description: 'Smart grid management and renewable energy optimization',
<<<<<<< HEAD
      icon: <Zap className="w-5 h-5ml-2" />
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5ml-2" />,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations with real-time data insights'
    },
    {
      icon: <DollarSign className="w-5 h-5ml-2" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through predictive maintenance and resource optimization'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: 'Enhanced Security',
      description: 'Protect your IoT infrastructure with enterprise-grade security solutions'
    },
    {
      icon: <Rocket className="w-5 h-5ml-2" />,
=======
      icon: <Zap>
  ]

  const benefits = [
      icon: <TrendingUp className="w-6h-6text-green-400" />,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations with real-time data insights'
    },
      icon: <DollarSign className="w-6h-6text-blue-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through predictive maintenance and resource optimization'
    },
      icon: <Shield className="w-6h-6text-red-400" />,
      title: 'Enhanced Security',
      description: 'Protect your IoT infrastructure with enterprise-grade security solutions'
    },
      icon: <Rocket className="w-6h-6text-purple-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'Scalability',
      description: 'Scale your IoT solutions as your business grows with our flexible platform'
  ]

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title />IoT Solutions - Zion Tech Group | Smart Device Management & Analytics</title>
        <meta name="description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." />
        <meta name="keywords" content="IoT solutions, internet of things, smart devices, IoT analytics, device management, edge computing, IoT security, connected devices" />
        <meta name="robots" content="index, follow, max-image-preview: large, max-snippet: -1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IoT Solutions - Zion Tech Group | Smart Device Management & Analytics" /  />
        <meta property="og: description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." /  />
        <meta property="og:type" content="website" /  />
        <meta property="og:url" content="https://ziontechgroup.com/iot-solutions" /  />
        <meta property="og:image" content="https://ziontechgroup.com/iot-solutions-og-image.jpg" /  />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IoT Solutions - Zion Tech Group | Smart Device Management & Analytics" />
        <meta name="twitter: description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." />
        <meta name="twitter:image" content="https://ziontechgroup.com/iot-solutions-twitter-image.jpg" />
=======

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>IoT Solutions - Zion Tech Group | Smart Device Management & Analytics</title>
        {/* Open Graph Meta Tags */}
    
        {/* Twitter Card Meta Tags */}
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
        {/* Structured Data */}
        <script type="application/ld+json"  />{JSON.stringify({
            "@context": "https: //schema.org",
            "@type": "Service",
            "name": "IoT Solutions",
            "description": "Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms.",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "199",
                "priceCurrency": "USD",
                "unitText": "MONTH"
          })}
<<<<<<< HEAD
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }}  />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Network className="w-5 h-5ml-2" />
              <span />IoT Solutions</span>
            </div>
            
            <h1 className="w-5 h-5ml-2" />
              Connect Everything with
              <br />
              <span className="w-5 h-5ml-2" />Smart IoT Solutions
              </span>
            </h1>
            
            <p className="w-5 h-5ml-2" />
              Transform your business with comprehensive IoT solutions that connect, monitor, and optimize your devices and processes.
              <br />
              <span className="w-5 h-5ml-2" />From device management to advanced analytics.</span>
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Get Started</span>
                <ArrowRight className="w-5 h-5ml-2" />
              </Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <span />View Demo</span>
                <ArrowRight className="w-5 h-5ml-2" />
              </Link>
            </div>
        </section>

        {/* Services Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Complete <span className="w-5 h-5ml-2" />IoT Solutions</span>
              </h2>
              <p className="w-5 h-5ml-2">From device management to advanced analytics, we provide everything you need to build and scale your IoT infrastructure.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {iotServices.map((service, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{service.icon}
                  </div>
                  <h3 className="w-5 h-5ml-2" />{service.title}
                  </h3>
                  <p className="w-5 h-5ml-2">{service.description}
                  </p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {service.features.map((feature, featureIndex) => (
                      <div key="{featureIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                        <CheckCircle className="w-5 h-5ml-2" />
                        <span />{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{service.price}
                  </div>
              ))}
            </div>
        </section>

        {/* Industries Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Industries We <span className="w-5 h-5ml-2" />Transform</span>
              </h2>
              <p className="w-5 h-5ml-2">Our IoT solutions are designed to work across various industries, providing tailored solutions for specific needs.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {industries.map((industry, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{industry.icon}
                    </div>
                    <h3 className="w-5 h-5ml-2" />{industry.name}
                    </h3>
                  </div>
                  <p className="w-5 h-5ml-2">{industry.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* Benefits Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Why Choose Our <span className="w-5 h-5ml-2" />IoT Solutions?</span>
              </h2>
              <p className="w-5 h-5ml-2">Our IoT solutions deliver measurable results and provide a competitive advantage for your business.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {benefits.map((benefit, index) => (
                <div key="{index}" className="text-centergroup" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{benefit.icon}
                  </div>
                  <h3 className="w-5 h-5ml-2" />{benefit.title}
                  </h3>
                  <p className="w-5 h-5ml-2">{benefit.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h2 className="w-5 h-5ml-2" />
                    Ready to Connect Your <span className="w-5 h-5ml-2" />World?</span>
                  </h2>
                  
                  <p className="w-5 h-5ml-2">Transform your business with our comprehensive IoT solutions. Get started today and unlock the power of connected devices.
                  </p>
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                      <span />Get Started</span>
                      <ArrowRight className="w-5 h-5ml-2" />
                    </Link>
                    <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                      <span />View Pricing</span>
                      <ArrowRight className="w-5 h-5ml-2" />
                    </Link>
                  </div>
              </div>
          </div>
        </section>
      </div>
    </>
  );
}
=======

        {/* Hero Section */}
    
              <span>IoT Solutions</span>

              Connect Everything with
    
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse">Smart IoT Solutions

              Transform your business with comprehensive IoT solutions that connect, monitor, and optimize your devices and processes.
    
              <span className="text-cyan-400font-semibold">From device management to advanced analytics.</span>

                <span>Get Started</span>
                <span>View Demo</span>

        {/* Services Section */}
    
                Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">IoT Solutions</span>
                From device management to advanced analytics, we provide everything you need to build and scale your IoT infrastructure.

 (
    
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{service.icon}

                  <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{service.title}
                    {service.description}

 (
    
                        <span>{feature}</span>

                    ))}
    
                  <div className="text-cyan-400font-semiboldtext-lg">{service.price}

              ))}

        {/* Industries Section */}
    
                Industries We <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Transform</span>
                Our IoT solutions are designed to work across various industries, providing tailored solutions for specific needs.

 (
    
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110transition-transformduration-300">{industry.icon}
                    <h3 className="text-xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{industry.name}
                    {industry.description}

              ))}

        {/* Benefits Section */}
    
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">IoT Solutions?</span>
                Our IoT solutions deliver measurable results and provide a competitive advantage for your business.

 (
    
                  <div className="flex justify-center mb-4 group-hover:scale-110transition-transformduration-300">{benefit.icon}

                  <h3 className="text-xl font-bold text-white mb-3group-hover:text-cyan-400transition-colors">{benefit.title}
                    {benefit.description}

              ))}

        {/* CTA Section */}
    
                    Ready to Connect Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">World?</span>

                    Transform your business with our comprehensive IoT solutions. Get started today and unlock the power of connected devices.

                      <span>Get Started</span>
                      <span>View Pricing</span>

  );
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
