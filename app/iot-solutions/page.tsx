<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD

import React from 'react';

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { ArrowRight, Zap, Shield, Globe, Database, Cloud, Cpu, Rocket, Network, BarChart3, CheckCircle, DollarSign, TrendingUp, Wrench, Heart } from 'lucide-react';

=======
>>>>>>> origin/main
export default function IoTSolutionsPage() {
<<<<<<< HEAD
  const iotServices = [
    {
      icon: <Network className="w-5h-5ml-2" />,
      title: 'IoT Device Management',
      description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices across your entire network.',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Health diagnostics'],
      price: 'Starting at $299/month'
    },
    {
      icon: <Database className="w-5h-5ml-2" />,
      title: 'IoT Data Analytics',
      description: 'Advanced analytics platform to process, analyze, and derive insights from IoT sensor data.',
      features: ['Real-time processing', 'Predictive analytics', 'Data visualization', 'Custom dashboards'],
      price: 'Starting at $399/month'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'IoT Security Suite',
      description: 'End-to-end security solutions to protect your IoT infrastructure from cyber threats.',
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Compliance monitoring'],
      price: 'Starting at $499/month'
    },
    {
      icon: <Cloud className="w-5h-5ml-2" />,
      title: 'IoT Cloud Platform',
      description: 'Scalable cloud infrastructure designed specifically for IoT applications and workloads.',
      features: ['Auto-scaling', 'Global edge locations', '99.9% uptime', 'Multi-cloud support'],
      price: 'Starting at $199/month'
    },
    {
      icon: <Cpu className="w-5h-5ml-2" />,
      title: 'Edge Computing Solutions',
      description: 'Process data at the edge for faster response times and reduced latency in IoT applications.',
      features: ['Local processing', 'Real-time decisions', 'Bandwidth optimization', 'Offline capability'],
      price: 'Starting at $349/month'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
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
      icon: <Wrench className="w-5h-5ml-2" /&gt;</Wrench&gt;
    },
    {
      name: 'Healthcare',
      description: 'Medical device monitoring and patient care optimization',
      icon: <Heart className="w-5h-5ml-2" /&gt;</Heart&gt;
    },
    {
      name: 'Agriculture',
      description: 'Precision farming with soil and crop monitoring',
      icon: <Globe className="w-5h-5ml-2" /&gt;</Globe&gt;
    },
    {
      name: 'Smart Cities',
      description: 'Traffic management, waste optimization, and public safety',
      icon: <Building className="w-5h-5ml-2" /&gt;</Building&gt;
    },
    {
      name: 'Retail',
      description: 'Inventory management and customer experience enhancement',
      icon: <ShoppingCart className="w-5h-5ml-2" /&gt;</ShoppingCart&gt;
    },
    {
      name: 'Energy',
      description: 'Smart grid management and renewable energy optimization',
      icon: <Zap className="w-5h-5ml-2" /&gt;</Zap&gt;
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-5h-5ml-2" />,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations with real-time data insights'
    },
    {
      icon: <DollarSign className="w-5h-5ml-2" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through predictive maintenance and resource optimization'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Enhanced Security',
      description: 'Protect your IoT infrastructure with enterprise-grade security solutions'
    },
    {
      icon: <Rocket className="w-5h-5ml-2" />,
      title: 'Scalability',
      description: 'Scale your IoT solutions as your business grows with our flexible platform'
    }
  ]
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a

export default function IotSolutionsPage() {
  return (
    <>
      <Helmet>
        <title>IotSolutions - Zion Tech Group</title>
        <meta name="description" content="Professional iot solutions solutions and services." />
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }}  /></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <Network className="w-5h-5ml-2" /></Network>
              <span />IoT Solutions</span>
            </div>
            <h1 className="w-5h-5ml-2" /></h1>
              Connect Everything with;
              <br /></br>
              <span className="w-5h-5ml-2" />Smart IoT Solutions;
              </span>
            </h1>
            <p className="w-5h-5ml-2" /></p>
              Transform your business with comprehensive IoT solutions that connect, monitor, and optimize your devices and processes.
              <br /></br>
              <span className="w-5h-5ml-2" />From device management to advanced analytics.</span>
            </p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" /></Link>
                <span />Get Started</span>
                <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
              </Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" /></Link>
                <span />View Demo</span>
                <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
              </Link>
            </div>
        </section>
        {/* Services Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Complete <span className="w-5h-5ml-2" />IoT Solutions</span>
              </h2>
              <p className="w-5h-5ml-2">From device management to advanced analytics, we provide everything you need to build and scale your IoT infrastructure.
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {iotServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" /></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{service.icon}
                  </div>
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  <p className="w-5h-5ml-2">{service.description}
                  </p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2text-gray-400text-sm" /></div>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        <span />{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{service.price}
                  </div>
              ))}
            </div>
        </section>
        {/* Industries Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Industries We <span className="w-5h-5ml-2" />Transform</span>
              </h2>
              <p className="w-5h-5ml-2">Our IoT solutions are designed to work across various industries, providing tailored solutions for specific needs.
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {industries.map((industry, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300hover:scale-105" /></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{industry.icon}
                    </div>
                    <h3 className="w-5h-5ml-2" />{industry.name}
                    </h3>
                  </div>
                  <p className="w-5h-5ml-2">{industry.description}
                  </p>
                </div>
              ))}
            </div>
        </section>
        {/* Benefits Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Why Choose Our <span className="w-5h-5ml-2" />IoT Solutions?</span>
              </h2>
              <p className="w-5h-5ml-2">Our IoT solutions deliver measurable results and provide a competitive advantage for your business.
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="text-centergroup" /></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{benefit.icon}
                  </div>
                  <h3 className="w-5h-5ml-2" />{benefit.title}
                  </h3>
                  <p className="w-5h-5ml-2">{benefit.description}
                  </p>
                </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
<<<<<<< HEAD
    
                    Ready to Connect Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">World?</span>

                    Transform your business with our comprehensive IoT solutions. Get started today and unlock the power of connected devices.

                      <span>Get Started</span>
                      <span>View Pricing</span>

=======
  return (
    <>
      <Helmet>
        <title>Io T Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional io t solutions by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Io T Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">Professional io t solutions coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <h2 className="w-5h-5ml-2" /></h2>
                    Ready to Connect Your <span className="w-5h-5ml-2" />World?</span>
                  </h2>
                  <p className="w-5h-5ml-2">Transform your business with our comprehensive IoT solutions. Get started today and unlock the power of connected devices.
                  </p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" /></Link>
                      <span />Get Started</span>
                      <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
                    </Link>
                    <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" /></Link>
                      <span />View Pricing</span>
                      <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
                    </Link>
                  </div>
              </div>
          </div>
        </section>
=======
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">IotSolutions</h1>
          <p className="text-lg text-gray-300 mb-8">Professional iot solutions solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
      </div>
    </>
>>>>>>> origin/main
  );
}