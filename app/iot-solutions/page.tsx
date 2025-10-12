import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react';

export default function IoTSolutionsPage() {
  const iotServices = [
    {
      icon: <Network className="w-8h-8text-cyan-400" />,
      title: 'IoT Device Management',
      description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices across your entire network.',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Health diagnostics'],
      price: 'Starting at $299/month'
    },
    {
      icon: <Database className="w-8h-8text-emerald-400" />,
      title: 'IoT Data Analytics',
      description: 'Advanced analytics platform to process, analyze, and derive insights from IoT sensor data.',
      features: ['Real-time processing', 'Predictive analytics', 'Data visualization', 'Custom dashboards'],
      price: 'Starting at $399/month'
    },
    {
      icon: <Shield className="w-8h-8text-red-400" />,
      title: 'IoT Security Suite',
      description: 'End-to-end security solutions to protect your IoT infrastructure from cyber threats.',
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Compliance monitoring'],
      price: 'Starting at $499/month'
    },
    {
      icon: <Cloud className="w-8h-8text-purple-400" />,
      title: 'IoT Cloud Platform',
      description: 'Scalable cloud infrastructure designed specifically for IoT applications and workloads.',
      features: ['Auto-scaling', 'Global edge locations', '99.9% uptime', 'Multi-cloud support'],
      price: 'Starting at $199/month'
    },
    {
      icon: <Cpu className="w-8h-8text-orange-400" />,
      title: 'Edge Computing Solutions',
      description: 'Process data at the edge for faster response times and reduced latency in IoT applications.',
      features: ['Local processing', 'Real-time decisions', 'Bandwidth optimization', 'Offline capability'],
      price: 'Starting at $349/month'
    },
    {
      icon: <BarChart3 className="w-8h-8text-pink-400" />,
      title: 'IoT Integration Services',
      description: 'Seamlessly integrate IoT devices with existing systems and third-party applications.',
      features: ['API development', 'System integration', 'Data synchronization', 'Legacy compatibility'],
      price: 'Starting at $249/month'
    }
  ]

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Smart factories with predictive maintenance and quality control',
      icon: <Wrench className="w-6h-6text-blue-400" />
    },
    {
      name: 'Healthcare',
      description: 'Medical device monitoring and patient care optimization',
      icon: <Heart className="w-6h-6text-red-400" />
    },
    {
      name: 'Agriculture',
      description: 'Precision farming with soil and crop monitoring',
      icon: <Globe className="w-6h-6text-green-400" />
    },
    {
      name: 'Smart Cities',
      description: 'Traffic management, waste optimization, and public safety',
      icon: <Building className="w-6h-6text-purple-400" />
    },
    {
      name: 'Retail',
      description: 'Inventory management and customer experience enhancement',
      icon: <ShoppingCart className="w-6h-6text-orange-400" />
    },
    {
      name: 'Energy',
      description: 'Smart grid management and renewable energy optimization',
      icon: <Zap className="w-6h-6text-yellow-400" />
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-6h-6text-green-400" />,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations with real-time data insights'
    },
    {
      icon: <DollarSign className="w-6h-6text-blue-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through predictive maintenance and resource optimization'
    },
    {
      icon: <Shield className="w-6h-6text-red-400" />,
      title: 'Enhanced Security',
      description: 'Protect your IoT infrastructure with enterprise-grade security solutions'
    },
    {
      icon: <Rocket className="w-6h-6text-purple-400" />,
      title: 'Scalability',
      description: 'Scale your IoT solutions as your business grows with our flexible platform'
    }
  ]

  return (
    <>
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>IoT Solutions - Zion Tech Group | Smart Device Management & Analytics</title>
        <meta name="description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." / / />
        <meta name="keywords" content="IoT solutions, internet of things, smart devices, IoT analytics, device management, edge computing, IoT security, connected devices" / / />
        <meta name="robots" content="index, follow, max-image-preview: large, max-snippet: -1, max-video-preview:-1" / / />
        <meta name="author" content="Zion Tech Group" / / />
    </>
        {/* Open Graph Meta Tags */}
    <>
        <meta property="og:title" content="IoT Solutions - Zion Tech Group | Smart Device Management & Analytics" / / />
        <meta property="og: description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/iot-solutions" / / />
        <meta property="og:image" content="https://ziontechgroup.com/iot-solutions-og-image.jpg" / / />
    </>
        {/* Twitter Card Meta Tags */}
    <>
        <meta name="twitter:card" content="summary_large_image" / / />
        <meta name="twitter:title" content="IoT Solutions - Zion Tech Group | Smart Device Management & Analytics" / / />
        <meta name="twitter: description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." / / />
        <meta name="twitter:image" content="https://ziontechgroup.com/iot-solutions-twitter-image.jpg" / / />
    </>
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
              }
            }
          })}
    <>
        </script>
      </Helmet>
    </>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        {/* Hero Section */}
    <>
        <section className="py-20px-4relative" />
          <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)]animate-pulse" />
          <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
<<<<<<< HEAD
          <div className="relative max-w-7xlmx-autotext-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
              <Network className="w-4h-4" />
              <span   />IoT Solutions</span>
=======
          <div className="relative max-w-7 xlmx-autotext-center">
        </div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </div>
              <Network className="w-4h-4" / />
              <span>IoT Solutions</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            </div>
    </>
            
            <h1 className="text-6 xl md:text-8 xl font-bold text-white mb-8leading-tight" />
              Connect Everything with
    <>
              <br / />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse">Smart IoT Solutions
              </span>
            </h1>
    </>
            
            <p className="text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Transform your business with comprehensive IoT solutions that connect, monitor, and optimize your devices and processes.
    <>
              <br / />
              <span className="text-cyan-400font-semibold">From device management to advanced analytics.</span>
            </p>
    </>
            
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-rowgap-6justify-center">
              <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" >
           
          <span    />
        </Link>Get Started</span>
                <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View Demo</span>
=======
    <>
            <div className="flex flex-col sm:flex-rowgap-6justify-center">
        </div>
              <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <span>View Demo</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
              </Link>
            </div>
        </section>
    </>

        {/* Services Section */}
    <>
        <section className="py-20px-4relative" />
<<<<<<< HEAD
          <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
                Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />IoT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              From device management to advanced analytics, we provide everything you need to build and scale your IoT infrastructure.
=======
          <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
          <div className="relative max-w-7xlmx-auto">
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">IoT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
    </>
                From device management to advanced analytics, we provide everything you need to build and scale your IoT infrastructure.
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
    </>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {iotServices.map((service, index) => (
    <>
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{service.icon}
                  </div>
<<<<<<< HEAD
                  <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400 transition-colors"  />{service.title}
                  </h3>
                  <p className="text-gray-300 mb-6leading-relaxed">
              {service.description}
                  </p>
                  <div className="space-y-2mb-6">
=======
                  <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{service.title}
                  </h3>
                  <p className="text-gray-300mb-6leading-relaxed" />
    </>
                    {service.description}
    <>
                  </p>
                  <div className="space-y-2mb-6">
        </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                    {service.features.map((feature, featureIndex) => (
    <>
                      <div key="{featureIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
<<<<<<< HEAD
                        <CheckCircle className="w-4h-4text-green-400" />
                        <span   />{feature}</span>
=======
                        <CheckCircle className="w-4h-4text-green-400" / />
                        <span>{feature}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                      </div>
    </>
                    ))}
    <>
                  </div>
                  <div className="text-cyan-400font-semiboldtext-lg">{service.price}
                  </div>
<<<<<<< HEAD
=======
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              ))}
    <>
            </div>
        </section>
    </>

        {/* Industries Section */}
    <>
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
<<<<<<< HEAD
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
                Industries We <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Transform</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Our IoT solutions are designed to work across various industries, providing tailored solutions for specific needs.
=======
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
          <div className="relative max-w-7xlmx-auto">
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Industries We <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Transform</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
    </>
                Our IoT solutions are designed to work across various industries, providing tailored solutions for specific needs.
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
    </>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {industries.map((industry, index) => (
    <>
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className="flex items-centerspace-x-4mb-4">
<<<<<<< HEAD
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110transition-transformduration-300"  />{industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-whitegroup-hover:text-cyan-400 transition-colors"  />{industry.name}
                    </h3>
                  </div>
                  <p className="text-gray-300text-smleading-relaxed">
              {industry.description}
=======
        </div>
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110transition-transformduration-300">{industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{industry.name}
                    </h3>
                  </div>
                  <p className="text-gray-300text-smleading-relaxed" />
    </>
                    {industry.description}
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                  </p>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* Benefits Section */}
    <>
        <section className="py-20px-4relative" />
<<<<<<< HEAD
          <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />IoT Solutions?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Our IoT solutions deliver measurable results and provide a competitive advantage for your business.
=======
          <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
          <div className="relative max-w-7xlmx-auto">
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">IoT Solutions?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
    </>
                Our IoT solutions deliver measurable results and provide a competitive advantage for your business.
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
    </>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {benefits.map((benefit, index) => (
    <>
                <div key="{index}" className="text-centergroup" />
                  <div className="flex justify-center mb-4 group-hover:scale-110transition-transformduration-300">{benefit.icon}
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-bold text-white mb-3group-hover:text-cyan-400 transition-colors"  />{benefit.title}
                  </h3>
                  <p className="text-gray-300text-smleading-relaxed">
              {benefit.description}
=======
                  <h3 className="text-xl font-bold text-white mb-3group-hover:text-cyan-400transition-colors">{benefit.title}
                  </h3>
                  <p className="text-gray-300text-smleading-relaxed" />
    </>
                    {benefit.description}
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                  </p>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTA Section */}
    <>
        <section className="py-20px-4relative" />
<<<<<<< HEAD
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
                <div className="relativez-10">
                  <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                    Ready to Connect Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />World?</span>
=======
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <div className="relative max-w-7xlmx-auto">
        </div>
            <div className="text-center" />
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </div>
                <div className="relativez-10">
        </div>
                  <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                    Ready to Connect Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">World?</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                  </h2>
    </>
                  
                  <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
<<<<<<< HEAD
              Transform your business with our comprehensive IoT solutions. Get started today and unlock the power of connected devices.
                  </p>
                  
                  <div className="flex flex-col sm:flex-rowgap-6justify-center">
                    <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Get Started</span>
                      <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                    </Link>
                    <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View Pricing</span>
=======
                    Transform your business with our comprehensive IoT solutions. Get started today and unlock the power of connected devices.
                  </p>
                  
    <>
                  <div className="flex flex-col sm:flex-rowgap-6justify-center">
        </div>
                    <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                    </Link>
                    <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                      <span>View Pricing</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                      <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                    </Link>
                  </div>
              </div>
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
  );
}
    </>