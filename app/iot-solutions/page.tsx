import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react'
export default function IoTSolutionsPage() {
  const iotServices = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: 'IoT Device Management',
      description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices across your entire network.',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Health diagnostics'],
      price: 'Starting at $299/month'
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      title: 'IoT Data Analytics',
      description: 'Advanced analytics platform to process, analyze, and derive insights from IoT sensor data.',
      features: ['Real-time processing', 'Predictive analytics', 'Data visualization', 'Custom dashboards'],
      price: 'Starting at $399/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'IoT Security Suite',
      description: 'End-to-end security solutions to protect your IoT infrastructure from cyber threats.',
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Compliance monitoring'],
      price: 'Starting at $499/month'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'IoT Cloud Platform',
      description: 'Scalable cloud infrastructure designed specifically for IoT applications and workloads.',
      features: ['Auto-scaling', 'Global edge locations', '99.9% uptime', 'Multi-cloud support'],
      price: 'Starting at $199/month'
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      title: 'Edge Computing Solutions',
      description: 'Process data at the edge for faster response times and reduced latency in IoT applications.',
      features: ['Local processing', 'Real-time decisions', 'Bandwidth optimization', 'Offline capability'],
      price: 'Starting at $349/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
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
      icon: <Wrench className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'Healthcare',
      description: 'Medical device monitoring and patient care optimization',
      icon: <Heart className="w-6 h-6 text-red-400" />
    },
    {
      name: 'Agriculture',
      description: 'Precision farming with soil and crop monitoring',
      icon: <Globe className="w-6 h-6 text-green-400" />
    },
    {
      name: 'Smart Cities',
      description: 'Traffic management, waste optimization, and public safety',
      icon: <Building className="w-6 h-6 text-purple-400" />
    },
    {
      name: 'Retail',
      description: 'Inventory management and customer experience enhancement',
      icon: <ShoppingCart className="w-6 h-6 text-orange-400" />
    },
    {
      name: 'Energy',
      description: 'Smart grid management and renewable energy optimization',
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations with real-time data insights'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through predictive maintenance and resource optimization'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enhanced Security',
      description: 'Protect your IoT infrastructure with enterprise-grade security solutions'
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: 'Scalability',
      description: 'Scale your IoT solutions as your business grows with our flexible platform'
    }
  ]

  return (
    <>
      <Helmet>
        <title>IoT Solutions - Zion Tech Group | Smart Device Management & Analytics</title>
        <meta name="description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." />
        <meta name="keywords" content="IoT solutions, internet of things, smart devices, IoT analytics, device management, edge computing, IoT security, connected devices" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        </Network>
        </Database>
        </Shield>
        </Cloud>
        </Cpu>
        </BarChart3>
        </Wrench>
        </Heart>
        </Globe>
        </Building>
        </ShoppingCart>
        </Zap>
        </TrendingUp>
        </DollarSign>
        </Shield>
        </Rocket>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </Network>
        </br>
        </br>
        </ArrowRight>
        </ArrowRight>
        </CheckCircle>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </ArrowRight>
        </ArrowRight>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IoT Solutions - Zion Tech Group | Smart Device Management & Analytics" />
        <meta property="og:description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/iot-solutions" />
        <meta property="og:image" content="https://ziontechgroup.com/iot-solutions-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IoT Solutions - Zion Tech Group | Smart Device Management & Analytics" />
        <meta name="twitter:description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." />
        <meta name="twitter:image" content="https://ziontechgroup.com/iot-solutions-twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IoT Solutions",
            "description": "Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms.",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
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
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section>
          <div>
          <div>
          
          <div>
            <div>
              <Network className="w-4 h-4" />
              <span>IoT Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Connect Everything with
              <br></br>
              <span>
                Smart IoT Solutions
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with comprehensive IoT solutions that connect, monitor, and optimize your devices and processes.
              <br></br>
              <span>From device management to advanced analytics.</span>
            </p>
            
            <div>
              <Link;
to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link;
to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete <span>IoT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From device management to advanced analytics, we provide everything you need to build and scale your IoT infrastructure.
              </p>
            </div>
            
            <div>
              {iotServices.map((service, index) => (
                <div>
                  <div>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    {service.features.map((feature, featureIndex) => (
                      <div>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    {service.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industries We <span>Transform</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our IoT solutions are designed to work across various industries, providing tailored solutions for specific needs.
              </p>
            </div>
            
            <div>
              {industries.map((industry, index) => (
                <div>
                  <div>
                    <div>
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span>IoT Solutions?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our IoT solutions deliver measurable results and provide a competitive advantage for your business.
              </p>
            </div>
            
            <div>
              {benefits.map((benefit, index) => (
                <div>
                  <div>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div>
          <div>
            <div>
              <div>
                <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Connect Your <span>World?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Transform your business with our comprehensive IoT solutions. Get started today and unlock the power of connected devices.
                  </p>
                  
                  <div>
                    <Link;
to="/contact" 
                      className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link;
to="/pricing" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>View Pricing</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}