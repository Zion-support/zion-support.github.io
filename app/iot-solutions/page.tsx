import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react';

export default function IoTSolutionsPa g e() {
  const iotServices= [
    {
      icon: <NetworkclassName="w-5h-5ml-2" />,
      title: 'IoT Device Management',
      description: 'Comprehensi v e platform for managing, monitoring, and maintaini n g IoT devices across your entire network.',
      features: ['Device provisioni n g', 'Remote monitoring', 'Firmware updates', 'Health diagnosti c s'],
      price: 'Starting at $299/month';
    },
    {
      icon: <DatabaseclassName="w-5h-5ml-2" />,
      title: 'IoT Data Analytics',
      description: 'Advanced analytics platform to process, analyze, and derive insights from IoT sensor data.',
      features: ['Real-timeprocessing', 'Predictive analytics', 'Data visualizati o n', 'Custom dashboards'],
      price: 'Starting at $399/month';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'IoT Security Suite',
      description: 'End-to-endsecuritysolutions to protect your IoT infrastructu r e from cyber threats.',
      features: ['Device authenticati o n', 'Data encryption', 'Threat detection', 'Compliance monitoring'],
      price: 'Starting at $499/month';
    },
    {
      icon: <CloudclassName="w-5h-5ml-2" />,
      title: 'IoT Cloud Platform',
      description: 'Scalable cloud infrastructu r e designed specifical l y for IoT applicatio n s and workloads.',
      features: ['Auto-scaling', 'Global edge locations', '99.9% uptime', 'Multi-cloudsupport'],
      price: 'Starting at $199/month';
    },
    {
      icon: <CpuclassName="w-5h-5ml-2" />,
      title: 'Edge Computing Solutions',
      description: 'Process data at the edge for faster response times and reduced latency in IoT applicatio n s.',
      features: ['Local processing', 'Real-timedecisions', 'Bandwidth optimizati o n', 'Offline capability'],
      price: 'Starting at $349/month';
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'IoT Integrati o n Services',
      description: 'Seamlessly integrate IoT devices with existing systems and third-partyapplication s.',
      features: ['API developme n t', 'System integrati o n', 'Data synchronizati o n', 'Legacy compatibili t y'],
      price: 'Starting at $249/month';
    }
  ]

  constindustries= [
    {
      name: 'Manufacturi n g',
      description: 'Smart factories with predictive maintenan c e and quality control',
      icon: <WrenchclassName="w-5h-5ml-2" />
    },
    {
      name: 'Healthcare',
      description: 'Medical device monitoring and patient care optimizati o n',
      icon: <HeartclassName="w-5h-5ml-2" />
    },
    {
      name: 'Agricultu r e',
      description: 'Precision farming with soil and crop monitoring',
      icon: <GlobeclassName="w-5h-5ml-2" />
    },
    {
      name: 'Smart Cities',
      description: 'Traffic management, waste optimizati o n, and public safety',
      icon: <BuildingclassName="w-5h-5ml-2" />
    },
    {
      name: 'Retail',
      description: 'Inventory management and customer experience enhanceme n t',
      icon: <ShoppingCa rtclassName="w-5h-5ml-2" />
    },
    {
      name: 'Energy',
      description: 'Smart grid management and renewable energy optimizati o n',
      icon: <ZapclassName="w-5h-5ml-2" />
    }
  ]

  constbenefits= [
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations with real-timedatainsights';
    },
    {
      icon: <DollarSignclassName="w-5h-5ml-2" />,
      title: 'Cost Reduction',
      description: 'Reduce operation a l costs through predictive maintenan c e and resource optimizati o n';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Enhanced Security',
      description: 'Protect your IoT infrastructu r e with enterprise-gradesecuritysolutions';
    },
    {
      icon: <RocketclassName="w-5h-5ml-2" />,
      title: 'Scalabili t y',
      description: 'Scale your IoT solutions as your business grows with our flexible platform';
    }
  ]

return (
    <>
      <Helmet></Helmet>
        <title />IoT Solutions - Zion Tech Group | Smart Device Management & Analytics</title>
        <meta name="description" content="Comprehensi v e IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." />
        <meta name="keywords" content="IoT solutions, internet of things, smart devices, IoT analytics, device management, edge computing, IoT security, connected devices" />
        <meta name="robots" content="index, follow, max-image-preview: large, max-snippet: -1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        {/* Open Graph Meta Tags */}
        <metaproperty="og:title" content="IoT Solutions - Zion Tech Group | Smart Device Management & Analytics" /  />
        <metaproperty="og: description" content="Comprehensi v e IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." /  />
        <metaproperty="og:type" content="website" /  />
        <metaproperty="og:url" content="https://ziontechgro u p.com/iot-solutions" /  />
        <metaproperty="og:image" content="https://ziontechgro u p.com/iot-solutions-og-image.jpg" /  />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_ima g e" />
        <meta name="twitter:title" content="IoT Solutions - Zion Tech Group | Smart Device Management & Analytics" />
        <meta name="twitter: description" content="Comprehensi v e IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." />
        <meta name="twitter:image" content="https://ziontechgro u p.com/iot-solutions-twitter-image.jpg" />
        {/* Structured Data */}
        <scripttype="applicati o n/ld+json"  />{JSON.stringify({)
            "@context": "https: //schema.org",
            "@type": "Service",
            "name": "IoT Solutions",
            "description": "Comprehensi v e IoT solutions including device management, data analytics, security, and cloud platforms.",
            "provider": {
              "@type": "Organizati o n",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgro u p.com";
            },
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurren c y": "USD",
              "priceSpecificati o n": {
                "@type": "PriceSpecificati o n",
                "price": "199",
                "priceCurren c y": "USD",
                "unitText": "MONTH";
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDel a y: '1 s' ,}}  />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <NetworkclassName="w-5h-5ml-2" />
              <span />IoT Solutions</span>
            </div>
            
            <h1 className="w-5h-5ml-2" />
              Connect Everything with;
              <br />
              <span className="w-5h-5ml-2" />Smart IoT Solutions;
              </span>
            </h1>
            
            <p className="w-5h-5ml-2" />
              Transform your business with comprehensi v e IoT solutions that connect, monitor, and optimize your devices and processes.;
              <br />
              <span className="w-5h-5ml-2" />From device management to advanced analytics.</span>
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Get Started</span>
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
              <Linkto="/demo" className="groupborder-2border-cyan-400text-cyan-400px-10py-4rounded-xlfont-semiboldhover:bg-cyan-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                <span />View Demo</span>
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
            </div>
        </section>

        {/* Services Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Complete <span className="w-5h-5ml-2" />IoT Solutions</span>
              </h2>
              <p className="w-5h-5ml-2">From device management to advanced analytics, we provide everything you need to build and scale your IoT infrastructu r e.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {iotServic e s.map((service, index) => ())
                <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{service.icon}>
                  </div>
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  <p className="w-5h-5ml-2">{service.description}
                  </p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {service.features.map((feature, featureInd e x) => ())
                      <divkey="{featureInd e x}" className="flexitems-centerspace-x-2text-gray-400text-sm" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{service.price}>
                  </div>
              ))}
            </div>
        </section>

        {/* Industries Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Industries We <span className="w-5h-5ml-2" />Transform</span>
              </h2>
              <p className="w-5h-5ml-2">Our IoT solutions are designed to work across various industries, providing tailored solutions for specific needs.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {industries.map((industry, index) => ())
                <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-6borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{industry.icon}>
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
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Why Choose Our <span className="w-5h-5ml-2" />IoT Solutions?</span>
              </h2>
              <p className="w-5h-5ml-2">Our IoT solutions deliver measurable results and provide a competiti v e advantage for your business.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {benefits.map((benefit, index) => ())
                <divkey="{index}" className="text-centergroup" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{benefit.icon}>
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
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h2 className="w-5h-5ml-2" />
                    Ready to Connect Your <span className="w-5h-5ml-2" />World?</span>
                  </h2>
                  
                  <p className="w-5h-5ml-2">Transform your business with our comprehensi v e IoT solutions. Get started today and unlock the power of connected devices.;
                  </p>
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <Linkto="/contact" className="groupbg-whitetext-cyan-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
                      <span />Get Started</span>
                      <ArrowRight className="w-5h-5ml-2" />
                    </Link>
                    <Linkto="/pricing" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                      <span />View Pricing</span>
                      <ArrowRight className="w-5h-5ml-2" />
                    </Link>
                  </div>
              </div>
          </div>
        </section>
      </div>
    </>
  );
}