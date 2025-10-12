import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services Page: React.F C = () => {
  const main Services = [
    {
      icon: Brain,
      title: 'A I Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-purple-500 to-pink-500',
      href: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      features: ['A WS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud'],
      color: 'from-cyan-500 to-blue-500',
      href: '/cloud-services'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-orange-500',
      href: '/cybersecurity'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: ['Web Applications', 'Mobile Apps', 'A PI Development', 'System Integration'],
      color: 'from-green-500 to-emerald-500',
      href: '/custom-development'
    }
  ];
  const additional Services = [
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and visualization tools.',
      href: '/data-analytics'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for i OS and Android.',
      href: '/mobile-development'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications that drive engagement.',
      href: '/web-development'
    },
    {
      icon: Lock,
      title: 'I T Support',
      description: 'Comprehensive I T support and maintenance services for your business.',
      href: '/it-support'
    }
  ];
  const process Steps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and technical requirements to understand your goals.',
      icon: Users
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap tailored to your specific needs.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with precision and attention to detail.',
      icon: Code
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure optimal performance.',
      icon: Zap
    }
  ];
  return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Our Services - Zion Tech Group</t itle>
        <m eta const name = "description" content="Explore our comprehensive range of A I and I T services. From A I solutions to cloud computing, cybersecurity, and custom development - we have you covered." / / />
        <m eta name="keywords" content="A I services, I T services, cloud computing, cybersecurity, custom development, data analytics, mobile development" / / />
      </H elmet>

      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainermx-autopx-4">
        </d iv>
            <d iv class Name="m ax-w-4 xlmx-autotext-center">
        </d iv>
              <h1 c lass Name="t ext-5 xl md:text-6 xl font-boldtext-whitemb-6" />
                Our <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Services</s pan>
              </h1>
              <p c lass Name="t ext-xl text-gray-300mb-8leading-relaxed" />

                Comprehensive A I and I T solutions designed to transform your business and drive growth. 
                We offer end-to-end services from strategy to implementation and support.

              </p>
            </d iv>
        </s ection>

        {/* Main Services Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainermx-autopx-4">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl font-boldtext-whitemb-6">Core Services</h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3xlmx-auto" />

                Our flagship services that have helped hundreds of businesses transform and grow

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-2gap-8">
        </d iv>
              {main Services.map((service, index) => (
                <d iv 
                  key="{index}"
                  class Name="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />

                  <d iv class Name="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <s ervice.icon class Name="w-8h-8t ext-white" />
                  </d iv>

                  <h3 c lass Name="t ext-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{service.title}
                  </h3>

                  <p c lass Name="t ext-gray-300mb-6leading-relaxed">
                    {service.description}
                  </p>
                  
                  <u l class Name="s pace-y-2mb-6" />
                    {service.features.map((feature, feature Index) => (

                      <l i key="{feature Index}" class Name="f lexitems-centertext-gray-300" />
                        <C heck Circle class Name="w-4 h-4 t ext-cyan-400mr-3flex-shrink-0" / />
                        <s pan class Name="t ext-sm">{feature}</s pan>
                      </l i>

                    ))}
                  </u l>
                  
                  <L ink to="{service.href}" class Name="i nline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colorsfont-semiboldgroup-hover:translate-x-1" />
                    Learn More

                    <A rrow Right class Name="m l-2" />
                  </L ink>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Additional Services Section */}

        <s ection class Name="p y-20 bg-gradient-to-rfrom-slate-800/30to-slate-900/30" />
          <d iv class Name="c ontainermx-autopx-4">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl font-boldtext-whitemb-6">Additional Services</h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3xlmx-auto" />

                Specialized services to complement your core technology needs

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-6">
        </d iv>
              {additional Services.map((service, index) => (
                <L ink
                  key="{index}"
                  to="{service.href}"
                  class Name="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transformhover:scale-105text-center" />

                  <d iv class Name="w-12 h-12 b g-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110transition-transformduration-300">
        </d iv>
                    <s ervice.icon class Name="w-6h-6t ext-cyan-400" / />
                  </d iv>
                  <h3 c lass Name="t ext-lg font-bold text-white mb-2group-hover:text-cyan-400transition-colors">{service.title}
                  </h3>
                  <p c lass Name="t ext-gray-300text-smleading-relaxed" />

                    {service.description}

                  </p>
                </L ink>

              ))}

            </d iv>
        </s ection>

        {/* Process Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainermx-autopx-4">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl font-boldtext-whitemb-6">Our Process</h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3xlmx-auto" />

                How we work with you to deliver exceptional results

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {process Steps.map((step, index) => (
                <d iv 
                  key="{index}"
                  class Name="t ext-centergroup" />

                  <d iv class Name="r elativemb-6">
        </d iv>
                    <d iv class Name="w-20 h-20 b g-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300borderborder-cyan-500/30">
        </d iv>
                      <s tep.icon class Name="w-8h-8t ext-cyan-400" / />
                    </d iv>
                    <d iv class Name="a bsolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-whitefont-boldtext-sm">{step.step}
                    </d iv>
                  <h3 c lass Name="t ext-xl font-bold text-white mb-3group-hover:text-cyan-400transition-colors">{step.title}
                  </h3>
                  <p c lass Name="t ext-gray-300leading-relaxed" />

                    {step.description}

                  </p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainermx-autopx-4">
        </d iv>
            <d iv class Name="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center">
        </d iv>
              <h2 c lass Name="t ext-4 xl font-boldtext-whitemb-6">Ready to Get Started?
              </h2>
              <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-2xlmx-auto" />

                Let's discuss your project and how our services can help you achieve your business goals.

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Get a Free Consultation
                </L ink>
                <L ink to="/about" class Name="b order border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
                </L ink>
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
};

export default Services Page;
