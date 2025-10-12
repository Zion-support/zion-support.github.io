import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import { Network, Zap, Shield, Globe, BarChart3, CheckCircle, ArrowRight, Cpu, Smartphone } from 'lucide-react'

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Network className="w-8h-8text-cyan-400" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for ultra-fast connectivity.',
      features: ['Network planning', 'Tower deployment', 'Signal optimization', 'Coverage mapping'],
      link: '/5 g-network-infrastructure'
    },
    {
      icon: <Zap className="w-8h-8text-emerald-400" />,
      title: '5G IoT Solutions',
      description: 'Connect millions of devices with 5G-powered IoT infrastructure and management.',
      features: ['Device connectivity', 'Data management', 'Real-time monitoring', 'Edge computing'],
      link: '/5 g-iot-solutions'
    },
    {
      icon: <Cpu className="w-8h-8text-purple-400" />,
      title: '5G Edge Computing',
      description: 'Deploy edge computing solutions that leverage 5G for ultra-low latency applications.',
      features: ['Edge servers', 'Latency optimization', 'Local processing', 'Real-time analytics'],
      link: '/5 g-edge-computing'
    },
    {
      icon: <Shield className="w-8h-8text-red-400" />,
      title: '5G Private Networks',
      description: 'Secure, dedicated 5G networks for enterprise and industrial applications.',
      features: ['Private infrastructure', 'Enhanced security', 'Custom configuration', 'Dedicated resources'],
      link: '/5 g-private-networks'
    },
    {
      icon: <Smartphone className="w-8h-8text-orange-400" />,
      title: '5G Mobile Applications',
      description: 'Develop next-generation mobile apps that harness the power of 5G connectivity.',
      features: ['AR/VR apps', 'Real-time streaming', 'Cloud gaming', 'Instant sync'],
      link: '/5 g-mobile-applications'
    },
    {
      icon: <BarChart3 className="w-8h-8text-pink-400" />,
      title: '5G Data Analytics',
      description: 'Advanced analytics platform for 5G network performance and user behavior insights.',
      features: ['Network analytics', 'User insights', 'Performance metrics', 'Predictive analysis'],
      link: '/5 g-data-analytics'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6h-6text-cyan-400" />,
      title: 'Ultra-Fast Speeds',
      description: 'Up to 100 x faster than 4 G with speeds reaching 10 Gbps'
    },
    {
      icon: <Globe className="w-6h-6text-emerald-400" />,
      title: 'Massive Connectivity',
      description: 'Support for up to 1 million devices per square kilometer'
    },
    {
      icon: <Cpu className="w-6h-6text-purple-400" />,
      title: 'Ultra-Low Latency',
      description: 'Latency as low as 1 ms for real-time applications'
    },
    {
      icon: <Shield className="w-6h-6text-red-400" />,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols built-in'
    }
  ]

  const stats = [
    { number: '10 Gbps', label: 'Peak Speed', icon: <Zap className="w-6h-6text-cyan-400" /> },
    { number: '1 ms', label: 'Latency', icon: <Cpu className="w-6h-6text-emerald-400" /> },
    { number: '1 M+', label: 'Devices per km²', icon: <Network className="w-6h-6text-purple-400" /> },
    { number: '99.9%', label: 'Reliability', icon: <Shield className="w-6h-6text-orange-400" /> }
  ]

  return (
    <>
      <Helmet />
        <title>5G Solutions - Next-Generation Network Technology | Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. Network infrastructure, IoT, edge computing, and mobile applications powered by 5G technology."  />
        <meta name="keywords" content="5G solutions, 5G network, 5G infrastructure, 5G IoT, edge computing, mobile applications, network technology"  />
        <link rel="canonical" href="https://ziontechgroup.com/5 g-solutions" />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20px-4overflow-hidden" />
          <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/10 to-purple-500/10">
        <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-rfrom-cyan-500/20 to-purple-500/20 text-cyan-400 px-6py-3rounded-full text-smfont-medium mb-8 border border-cyan-400/30" />
              <Network className="w-4h-4" />
              <span  >5G Technology Solutions</span>
            </div>
            
            <h1 className="text-4xlsm:text-6xlmd:text-7xlfont-bold text-whitemb-8 leading-tight" />
              Next-Generation <span className="bg-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-text text-transparent"  >5G Solutions</span>
            </h1>
            
            <p className="text-lgsm:text-xlmd:text-2xltext-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge 5G technology. From network infrastructure 
              to IoT solutions, we deliver the future of connectivity today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6justify-center mb-16" />
              <Link 
                to="/contact" 
                className="group bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-10py-4rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
               />
                <span  >Get Started</span>
                <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10py-4rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
               />
                <span  >View Demo</span>
                <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/5 to-purple-500/5">
        <div className="relative max-w-7xl mx-auto">
            <div className="text-centermb-16" />
              <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-4" />
                Why Choose <span className="bg-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-text text-transparent"  >5G Technology?</span>
              </h2>
              <p className="text-xltext-gray-300 max-w-3xl mx-auto">
                Experience the power of next-generation connectivity with our comprehensive 5G solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2md:grid-cols-4gap-8" />
              {stats.map((stat, index) => (
                <div key={index} className="group text-centerbg-white/5 backdrop-blur-sm rounded-2 xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105" />
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300"  />{stat.icon}
                  </div>
                  <div className="text-3xlmd:text-4xlfont-bold text-whitemb-2 group-hover:text-cyan-400 transition-colors"  />{stat.number}
                  </div>
                  <div className="text-gray-300 text-smgroup-hover:text-white transition-colors"  />{stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-brfrom-purple-500/5 via-cyan-500/5 to-pink-500/5">
        <div className="relative max-w-7xl mx-auto">
            <div className="text-centermb-16" />
              <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6" />
                Comprehensive <span className="bg-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-text text-transparent"  >5G Solutions</span>
              </h2>
              <p className="text-xltext-gray-300 max-w-4xl mx-auto">
                From network infrastructure to mobile applications, we provide end-to-end5G solutions 
                that transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3gap-8" />
              {solutions.map((solution, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10" />
                  <div className="flex items-center justify-center w-16h-16bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110 transition-transform duration-300"  />{solution.icon}
                  </div>
                  <h3 className="text-2xlfont-bold text-whitemb-4 group-hover:text-cyan-400 transition-colors"  />{solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2 mb-6" />
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm" />
                        <CheckCircle className="w-4h-4text-green-400" />
                        <span  >{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={solution.link}
                    className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                   />
                    <span className="text-smfont-medium"  >Learn More</span>
                    <ArrowRight className="w-4h-4group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20px-4bg-gradient-to-brfrom-slate-800/50 to-purple-900/50 relative" />
          <div className="relative max-w-7xl mx-auto">
        <div className="text-centermb-16">
              <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6" />
                Key <span className="bg-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Benefits</span>
              </h2>
              <p className="text-xltext-gray-300 max-w-4xl mx-auto">
                Discover how 5G technology can revolutionize your business operations and customer experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8" />
              {benefits.map((benefit, index) => (
                <div key={index} className="group text-centerbg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105" />
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300"  />{benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-whitemb-3 group-hover:text-cyan-400 transition-colors"  />{benefit.title}
                  </h3>
                  <p className="text-gray-300 text-smleading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="relative max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-rfrom-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16" />
              <h2 className="text-4xlsm:text-5xlmd:text-6xlfont-bold text-whitemb-6 leading-tight" />
                Ready to Embrace the <span className="bg-gradient-to-rfrom-cyan-300 to-pink-300 bg-clip-text text-transparent"  >5G Future?</span>
              </h2>
              
              <p className="text-xlsm:text-2xltext-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our comprehensive 5G solutions. From infrastructure 
                to applications, we deliver the future of connectivity today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6justify-center" />
                <Link 
                  to="/contact" 
                  className="group bg-whitetext-cyan-600 px-10py-4rounded-xl font-bold text-lghover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                 />
                  <span  >Get Started</span>
                  <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="group border-2 border-white text-whitepx-10py-4rounded-xl font-bold text-lghover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                 />
                  <span  >View Pricing</span>
                  <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FiveGSolutionsPage;