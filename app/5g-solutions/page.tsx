import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for ultra-fast connectivity.',
      features: ['Network planning', 'Tower deployment', 'Signal optimization', 'Coverage mapping'],
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: '5G IoT Solutions',
      description: 'Connect millions of devices with 5G-powered IoT infrastructure and management.',
      features: ['Device connectivity', 'Data management', 'Real-time monitoring', 'Edge computing'],
      link: '/5g-iot-solutions'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: '5G Edge Computing',
      description: 'Deploy edge computing solutions that leverage 5G for ultra-low latency applications.',
      features: ['Edge servers', 'Latency optimization', 'Local processing', 'Real-time analytics'],
      link: '/5g-edge-computing'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: '5G Private Networks',
      description: 'Secure, dedicated 5G networks for enterprise and industrial applications.',
      features: ['Private infrastructure', 'Enhanced security', 'Custom configuration', 'Dedicated resources'],
      link: '/5g-private-networks'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      title: '5G Mobile Applications',
      description: 'Develop next-generation mobile apps that harness the power of 5G connectivity.',
      features: ['AR/VR apps', 'Real-time streaming', 'Cloud gaming', 'Instant sync'],
      link: '/5g-mobile-applications'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
      title: '5G Data Analytics',
      description: 'Advanced analytics platform for 5G network performance and user behavior insights.',
      features: ['Network analytics', 'User insights', 'Performance metrics', 'Predictive analysis'],
      link: '/5g-data-analytics'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Ultra-Fast Speeds',
      description: 'Up to 100x faster than 4G with speeds reaching 10 Gbps'
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: 'Massive Connectivity',
      description: 'Support for up to 1 million devices per square kilometer'
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: 'Ultra-Low Latency',
      description: 'Latency as low as 1ms for real-time applications'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols built-in'
    }
  ]

  const stats = [
    { number: '10 Gbps', label: 'Peak Speed', icon: <Zap className="w-6 h-6 text-cyan-400" /> },
    { number: '1ms', label: 'Latency', icon: <Cpu className="w-6 h-6 text-emerald-400" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Network className="w-6 h-6 text-purple-400" /> },
    { number: '99.9%', label: 'Reliability', icon: <Shield className="w-6 h-6 text-orange-400" /> }
  ]

  return (
    <>
      <Helmet>
        <title>5G Solutions - Next-Generation Network Technology | Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. Network infrastructure, IoT, edge computing, and mobile applications powered by 5G technology." />
        <meta name="keywords" content="5G solutions, 5G network, 5G infrastructure, 5G IoT, edge computing, mobile applications, network technology" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-solutions" />
      </Helmet>

      <div>
        </Network>
        </Zap>
        </Cpu>
        </Shield>
        </Smartphone>
        </BarChart3>
        </Zap>
        </Globe>
        </Cpu>
        </Shield>
        </Zap>
        </Cpu>
        </Network>
        </Shield>
        </meta>
        </meta>
        </link>
        </Network>
        </ArrowRight>
        </ArrowRight>
        </CheckCircle>
        </ArrowRight>
        </div>
        </div>
        </div>
        </div>
        </ArrowRight>
        </ArrowRight>
        {/* Hero Section */}
        <section>
          <div>
          <div>
            <div>
              <Network className="w-4 h-4" />
              <span>5G Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Next-Generation <span>5G Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge 5G technology. From network infrastructure;
to IoT solutions, we deliver the future of connectivity today.
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

        {/* Stats Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose <span>5G Technology?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of next-generation connectivity with our comprehensive 5G solutions.
              </p>
            </div>
            
            <div>
              {stats.map((stat, index) => (
                <div>
                  <div>
                    {stat.icon}
                  </div>
                  <div>
                    {stat.number}
                  </div>
                  <div>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <span>5G Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From network infrastructure to mobile applications, we provide end-to-end 5G solutions;
that transform your business operations.
              </p>
            </div>
            
            <div>
              {solutions.map((solution, index) => (
                <div>
                  <div>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div>
                    {solution.features.map((feature, featureIndex) => (
                      <div>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link;
to={solution.link}
                    className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key <span>Benefits</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover how 5G technology can revolutionize your business operations and customer experience.
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
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Embrace the <span>5G Future?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our comprehensive 5G solutions. From infrastructure;
to applications, we deliver the future of connectivity today.
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
        </section>
      </div>
    </>
  )
}

export default FiveGSolutionsPage