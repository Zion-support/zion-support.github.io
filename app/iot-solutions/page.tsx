import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow Right, Bot, Rotate Ccw, Rotate Cw } from 'lucide-react';
import { Arrow Right, Zap, Shield, Globe, Database, Cloud, Cpu, Rocket, Network, Bar Chart3, Check Circle, Dollar Sign, Trending Up, Wrench, Heart } from 'lucide-react';

export default function Io TSolutions Page() {
  const iot Services = [
    {
      icon: <N etworkclass Name="w-8h-8t e xt-c y an-400" />,
      title: 'Io T Device Management',
      description: 'Comprehensive platform for managing, monitoring, and maintaining Io T devices across your entire network.',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Health diagnostics'],
      price: 'Starting at $299/month'
    },
    {
      icon: <D atabaseclass Name="w-8h-8t e xt-e m erald-400" />,
      title: 'Io T Data Analytics',
      description: 'Advanced analytics platform to process, analyze, and derive insights from Io T sensor data.',
      features: ['Real-time processing', 'Predictive analytics', 'Data visualization', 'Custom dashboards'],
      price: 'Starting at $399/month'
    },
    {
      icon: <S hieldclass Name="w-8h-8t e xt-r e d-400" />,
      title: 'Io T Security Suite',
      description: 'End-to-end security solutions to protect your Io T infrastructure from cyber threats.',
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Compliance monitoring'],
      price: 'Starting at $499/month'
    },
    {
      icon: <C loudclass Name="w-8h-8t e xt-p u rple-400" />,
      title: 'Io T Cloud Platform',
      description: 'Scalable cloud infrastructure designed specifically for Io T applications and workloads.',
      features: ['Auto-scaling', 'Global edge locations', '99.9% uptime', 'Multi-cloud support'],
      price: 'Starting at $199/month'
    },
    {
      icon: <C puclass Name="w-8h-8t e xt-o r ange-400" />,
      title: 'Edge Computing Solutions',
      description: 'Process data at the edge for faster response times and reduced latency in Io T applications.',
      features: ['Local processing', 'Real-time decisions', 'Bandwidth optimization', 'Offline capability'],
      price: 'Starting at $349/month'
    },
    {
      icon: <B ar Chart3 class Name="w-8h-8t e xt-p i nk-400" />,
      title: 'Io T Integration Services',
      description: 'Seamlessly integrate Io T devices with existing systems and third-party applications.',
      features: ['A P I development', 'System integration', 'Data synchronization', 'Legacy compatibility'],
      price: 'Starting at $249/month'
    }
  ]

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Smart factories with predictive maintenance and quality control',
      icon: <W renchclass Name="w-6h-6t e xt-b l ue-400" />
    },
    {
      name: 'Healthcare',
      description: 'Medical device monitoring and patient care optimization',
      icon: <H eartclass Name="w-6h-6t e xt-r e d-400" />
    },
    {
      name: 'Agriculture',
      description: 'Precision farming with soil and crop monitoring',
      icon: <G lobeclass Name="w-6h-6t e xt-g r een-400" />
    },
    {
      name: 'Smart Cities',
      description: 'Traffic management, waste optimization, and public safety',
      icon: <B uildingclass Name="w-6h-6t e xt-p u rple-400" />
    },
    {
      name: 'Retail',
      description: 'Inventory management and customer experience enhancement',
      icon: <S hopping Cartclass Name="w-6h-6t e xt-o r ange-400" />
    },
    {
      name: 'Energy',
      description: 'Smart grid management and renewable energy optimization',
      icon: <Z apclass Name="w-6h-6t e xt-y e llow-400" />
    }
  ]

  const benefits = [
    {
      icon: <T rending Upclass Name="w-6h-6t e xt-g r een-400" />,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations with real-time data insights'
    },
    {
      icon: <D ollar Signclass Name="w-6h-6t e xt-b l ue-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through predictive maintenance and resource optimization'
    },
    {
      icon: <S hieldclass Name="w-6h-6t e xt-r e d-400" />,
      title: 'Enhanced Security',
      description: 'Protect your Io T infrastructure with enterprise-grade security solutions'
    },
    {
      icon: <R ocketclass Name="w-6h-6t e xt-p u rple-400" />,
      title: 'Scalability',
      description: 'Scale your Io T solutions as your business grows with our flexible platform'
    }
  ]

  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Io T Solutions - Zion Tech Group | Smart Device Management & Analytics</t itle>
        <m eta name="description" content="Comprehensive Io T solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." / / />
        <m eta name="keywords" content="Io T solutions, internet of things, smart devices, Io T analytics, device management, edge computing, Io T security, connected devices" / / />
        <m eta name="robots" content="index, follow, max-image-preview: large, max-snippet: -1, max-video-preview:-1" / / />
        <m eta name="author" content="Zion Tech Group" / / />

        {/* Open Graph Meta Tags */}

        <m etaproperty="og:title" content="Io T Solutions - Zion Tech Group | Smart Device Management & Analytics" / / />
        <m etaproperty="og: description" content="Comprehensive Io T solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." / / />
        <m etaproperty="og:type" content="website" / / />
        <m etaproperty="og:url" content="https://ziontechgroup.com/iot-solutions" / / />
        <m etaproperty="og:image" content="https://ziontechgroup.com/iot-solutions-og-image.jpg" / / />

        {/* Twitter Card Meta Tags */}

        <m eta name="twitter:card" content="summary_large_image" / / />
        <m eta name="twitter:title" content="Io T Solutions - Zion Tech Group | Smart Device Management & Analytics" / / />
        <m eta name="twitter: description" content="Comprehensive Io T solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." / / />
        <m eta name="twitter:image" content="https://ziontechgroup.com/iot-solutions-twitter-image.jpg" / / />

        {/* Structured Data */}
        <s cripttype="application/ld+json"  />{J S O N.stringify({
            "@context": "https: //schema.org",
            "@type": "Service",
            "name": "Io T Solutions",
            "description": "Comprehensive Io T solutions including device management, data analytics, security, and cloud platforms.",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "199",
              "price Currency": "U S D",
              "price Specification": {
                "@type": "Price Specification",
                "price": "199",
                "price Currency": "U S D",
                "unit Text": "M O N T H"
              }
            }
          })}

        </s cript>
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)]animate-pulse" />
          <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / />
          <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
              <N etworkclass Name="w-4h-4" / />
              <s pan>Io T Solutions</s pan>
            </d iv>

            <h1 c lass Name="t e xt-6 xl md:t e xt-8 xl font-bold text-white mb-8leading-tight" />
              Connect Everything with

              <b r / />
              <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse">Smart Io T Solutions
              </s pan>
            </h1>

            <p c lass Name="t e xt-2 xl t e xt-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Transform your business with comprehensive Io T solutions that connect, monitor, and optimize your devices and processes.

              <b r / />
              <s pan class Name="t e xt-c y an-400font-semibold">From device management to advanced analytics.</s pan>
            </p>

            <d iv class Name="f l ex f l ex-col sm:flex-rowgap-6justify-center">
        </d iv>
              <L ink to="/contact" class Name="g r o u p bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <s pan>Get Started</s pan>
                <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
              </L ink>
              <L ink to="/demo" class Name="g r o u p border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <s pan>View Demo</s pan>
                <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
              </L ink>
            </d iv>
        </s ection>

        {/* Services Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Complete <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Io T Solutions</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

                From device management to advanced analytics, we provide everything you need to build and scale your Io T infrastructure.

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {iot Services.map((service, index) => (

                <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{service.icon}
                  </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{service.title}
                  </h3>
                  <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed" />

                    {service.description}

                  </p>
                  <d iv class Name="s p a c e-y-2mb-6">
        </d iv>

                    {service.features.map((feature, feature Index) => (

                      <d ivkey="{feature Index}" class Name="f l ex i t ems-center space-x-2text-gray-400text-sm" />
                        <C heck Circleclass Name="w-4h-4t e xt-g r een-400" / />
                        <s pan>{feature}</s pan>
                      </d iv>

                    ))}

                  </d iv>
                  <d iv class Name="t e xt-c y an-400font-semiboldtext-lg">{service.price}
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Industries Section */}

        <s ection class Name="p y-20 p x-4 bg-g r adient-to-br from-slate-800/50to-purple-900/50relative" />
          <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Industries We <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Transform</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

                Our Io T solutions are designed to work across various industries, providing tailored solutions for specific needs.

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {industries.map((industry, index) => (

                <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <d iv class Name="f l ex i t ems-centerspace-x-4mb-4">
        </d iv>
                    <d iv class Name="p-3 b g-g r a dient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110transition-transformduration-300">{industry.icon}
                    </d iv>
                    <h3 c lass Name="t e xt-xl f o nt-bold text-whitegroup-hover:text-cyan-400transition-colors">{industry.name}
                    </h3>
                  </d iv>
                  <p c lass Name="t e xt-g r ay-300text-smleading-relaxed" />

                    {industry.description}

                  </p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Benefits Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Why Choose Our <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Io T Solutions?</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

                Our Io T solutions deliver measurable results and provide a competitive advantage for your business.

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {benefits.map((benefit, index) => (

                <d ivkey="{index}" class Name="t e x t-centergroup" />
                  <d iv class Name="f l ex j u stify-center mb-4 group-hover:scale-110transition-transformduration-300">{benefit.icon}
                  </d iv>
                  <h3 c lass Name="t e xt-xl f o nt-bold text-white mb-3group-hover:text-cyan-400transition-colors">{benefit.title}
                  </h3>
                  <p c lass Name="t e xt-g r ay-300text-smleading-relaxed" />

                    {benefit.description}

                  </p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="b g-g r a dient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </d iv>
                <d iv class Name="r e l a tivez-10">
        </d iv>
                  <h2 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                    Ready to Connect Your <s pan class Name="b g-g r a dient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">World?</s pan>
                  </h2>

                  <p c lass Name="t e xt-xl sm:t e xt-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                    Transform your business with our comprehensive Io T solutions. Get started today and unlock the power of connected devices.
                  </p>

                  <d iv class Name="f l ex f l ex-col sm:flex-rowgap-6justify-center">
        </d iv>
                    <L ink to="/contact" class Name="g r o u p bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                      <s pan>Get Started</s pan>
                      <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                    </L ink>
                    <L ink to="/pricing" class Name="g r o u p border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                      <s pan>View Pricing</s pan>
                      <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                    </L ink>
                  </d iv>
              </d iv>
          </d iv>
        </s ection>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>

  );
}
