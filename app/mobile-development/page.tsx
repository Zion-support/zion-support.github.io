'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Smartphone, Check Circle, Arrow Right, Star, Zap, Shield, Settings, Clock, Link as Link Icon } from 'lucide-react';

const Mobile Development Page: React.F C = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'i O S Development',
      description: 'Native i O S apps built with Swift and Swift U I for optimal performance and user experience.',
      features: ['Swift & Swift U I', 'App Store Optimization', 'Push Notifications', 'Core Data Integration'],
      price: 'Starting at $4,000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Native Android apps built with Kotlin and Jetpack Compose for modern Android development.',
      features: ['Kotlin & Jetpack Compose', 'Google Play Optimization', 'Material Design', 'Room Database'],
      price: 'Starting at $4,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'React Native',
      description: 'Cross-platform mobile apps that work on both i O S and Android with a single codebase.',
      features: ['Cross-platform', 'Hot Reload', 'Native Performance', 'Third-party Integrations'],
      price: 'Starting at $3,500',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Flutter Development',
      description: 'Beautiful, fast mobile apps built with Google's Flutter framework for multiple platforms.',
      features: ['Multi-platform', 'Custom U I', 'Fast Development', 'Google Services'],
      price: 'Starting at $3,500',
      color: 'from-indigo-500 to-purple-500'
    }
  ];
  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan with timelines.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes for user validation.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your mobile app using the latest technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Q A',
      description: 'Comprehensive testing across devices and platforms to ensure quality.'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Deploy to app stores and provide ongoing maintenance and updates.'
    }
  ];
  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Mobile Development - Zion Tech Group</t itle>
        <m etaconstname = "description" content="Professional mobile app development services for i O S, Android, React Native, and Flutter. Native and cross-platform solutions for your business." / / />
        <m eta name="keywords" content="mobile app development, i O S development, Android development, React Native, Flutter, mobile apps" / / />
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p t-32p b-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-center max-w-4xlmx-auto">
        </d iv>
              <h1 c lass Name="t e xt-5 xl md:t e xt-6 xl font-boldtext-white mb-6" />
                Mobile <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Development</s pan>
              </h1>
              <p c lass Name="t e xt-xl t e xt-gray-300 mb-8leading-relaxed" />

                Create powerful, user-friendly mobile applications for i O S and Android platforms. 
                From native apps to cross-platform solutions, we deliver exceptional mobile experiences.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
                </L ink>
                <L ink to="/it-services" class Name="b o r d er border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All I T Services
                </L ink>
              </d iv>
          </d iv>
        </s ection>

        {/* Services Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6" />
                Our <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Mobile Solutions</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Comprehensive mobile development services for all platforms and use cases

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {services.map((service, index) => (
                <d iv 
                  key="{index}"
                  class Name="b g-g r a dient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />

                  <d iv class Name="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <s ervice.icon class Name="w-8h-8t e xt-w h ite" />
                  </d iv>

                  <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{service.title}
                  </h3>

                  <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed">
                    {service.description}
                  </p>

                  <u lclass Name="s p a c e-y-2mb-6" />
                    {service.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l ex i t ems-centertext-smtext-gray-300" />
                        <C heck Circleclass Name="w-4 h-4 t e xt-g r een-400mr-2flex-shrink-0" / />

                        {feature}
                      </l i>
                    ))}
                  </u l>

                  <d iv class Name="f l ex i t ems-centerjustify-betweenmb-6">
        </d iv>
                    <s pan class Name="t e xt-2 x l font-boldtext-cyan-400">{service.price}</s pan>
                    <L ink to="/contact" class Name="t e xt-c y an-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1inline-flexitems-center" />
                      Learn More <A rrow Rightclass Name="w-4h-4m l-1" />
                    </L ink>
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Process Section */}

        <s ection class Name="p y-20 b g-g r adient-to-rfrom-slate-800/30to-slate-900/30" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6" />
                Our <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Process</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                A proven methodology that ensures successful mobile app development and deployment

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-5gap-8">
        </d iv>
              {process.map((step, index) => (

                <d ivkey="{index}" class Name="t e x t-centergroup" />
                  <d iv class Name="w-16 h-16 b g-g r a dient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                    <s pan class Name="t e xt-2 x l font-boldtext-cyan-400">{step.step}</s pan>
                  </d iv>
                  <h3 c lass Name="t e xt-xl f o nt-boldtext-whitemb-4">{step.title}</h3>
                  <p c lass Name="t e xt-g r ay-300text-smleading-relaxed">{step.description}</p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Why Choose Us */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6" />
                Why Choose <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Zion Tech Group</s pan>?
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                We deliver exceptional mobile solutions through expertise, innovation, and commitment to quality

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              <d iv class Name="t e x t-centergroup" />
                <d iv class Name="w-20 h-20 b g-g r a dient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <Z apclass Name="w-10h-10t e xt-c y an-400" / />
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-4">Fast Development</h3>
                <p c lass Name="t e xt-g r ay-300leading-relaxed" />

                  Rapid development cycles with agile methodologies and modern tools for faster time-to-market.

                </p>
              </d iv>

              <d iv class Name="t e x t-centergroup" />
                <d iv class Name="w-20 h-20 b g-g r a dient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <U sersclass Name="w-10h-10t e xt-p u rple-400" / />
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-4">Expert Team</h3>
                <p c lass Name="t e xt-g r ay-300leading-relaxed" />

                  Certified mobile developers with years of experience in i O S, Android, and cross-platform development.

                </p>
              </d iv>

              <d iv class Name="t e x t-centergroup" />
                <d iv class Name="w-20 h-20 b g-g r a dient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <A wardclass Name="w-10h-10t e xt-g r een-400" / />
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-4">Quality Assurance</h3>
                <p c lass Name="t e xt-g r ay-300leading-relaxed" />

                  Comprehensive testing and quality assurance to ensure your app works flawlessly across all devices.

                </p>
              </d iv>
          </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6">Ready to Build Your Mobile App?
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-2xlmx-auto" />

                Let's discuss your mobile app idea and create a solution that engages your users and drives business growth.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
                </L ink>
                <L ink to="/about" class Name="b o r d er border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
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

export default Mobile Development Page;
