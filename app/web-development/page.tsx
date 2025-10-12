'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Check Circle, Arrow Right, Star, Zap, Shield, Smartphone, Database, Clock, Link as Link Icon } from 'lucide-react';

const Web Development Page: React.F C = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
      features: ['React/Next.js', 'Type Script', 'Tailwind C S S', 'Responsive Design'],
      price: 'Starting at $3,000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Robust server-side applications with Node.js, Python, and scalable architectures.',
      features: ['Node.js/Python', 'R E S Tful A P Is', 'Database Design', 'Cloud Integration'],
      price: 'Starting at $4,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend with seamless integration.',
      features: ['End-to-End Development', 'Database Integration', 'A P I Development', 'Deployment'],
      price: 'Starting at $6,000',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'E-commerce Solutions',
      description: 'Custom e-commerce platforms with payment integration and inventory management.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Admin Dashboard'],
      price: 'Starting at $8,000',
      color: 'from-orange-500 to-red-500'
    }
  ];
  const technologies = [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'Type Script', 'Tailwind C S S', 'Framer Motion']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Python', 'Express.js', 'Fast A P I', 'Postgre S Q L']
    },
    {
      title: 'Cloud',
      items: ['A W S', 'Azure', 'Google Cloud', 'Vercel', 'Netlify']
    },
    {
      title: 'Tools',
      items: ['Git', 'Docker', 'C I/C D', 'Testing', 'Monitoring']
    }
  ];
  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Web Development - Zion Tech Group</t itle>
        <m etaconstname = "description" content="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern, responsive, and scalable web applications." / / />
        <m eta name="keywords" content="web development, frontend development, backend development, full-stack development, e-commerce, React, Node.js" / / />
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
                Web <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Development</s pan>
              </h1>
              <p c lass Name="t e xt-xl t e xt-gray-300 mb-8leading-relaxed" />

                Create powerful, modern web applications that engage users and drive business growth. 
                From simple websites to complex web platforms, we deliver exceptional digital experiences.

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
                Our <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Web Solutions</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Comprehensive web development services for all your digital needs

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

        {/* Technologies Section */}

        <s ection class Name="p y-20 b g-g r adient-to-rfrom-slate-800/30to-slate-900/30" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6" />
                Technologies <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">We Use</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Modern, proven technologies for building exceptional web applications

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {technologies.map((tech, index) => (

                <d ivkey="{index}" class Name="b g-g r a dient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50rounded-xlp-6" />
                  <h3 c lass Name="t e xt-xl f o nt-bold text-whitemb-4text-center">{tech.title}</h3>
                  <u lclass Name="s p a c e-y-2" />

                    {tech.items.map((item, item Index) => (

                      <l ikey="{item Index}" class Name="f l e x items-centertext-gray-300" />
                        <C heck Circleclass Name="w-4 h-4 t e xt-g r een-400mr-2flex-shrink-0" / />

                        {item}
                      </l i>
                    ))}

                  </u l>
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

                We deliver exceptional web solutions through expertise, innovation, and commitment to quality

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

                  Rapid development cycles with modern tools and agile methodologies for faster time-to-market.

                </p>
              </d iv>

              <d iv class Name="t e x t-centergroup" />
                <d iv class Name="w-20 h-20 b g-g r a dient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <U sersclass Name="w-10h-10t e xt-p u rple-400" / />
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-4">Expert Team</h3>
                <p c lass Name="t e xt-g r ay-300leading-relaxed" />

                  Certified developers with years of experience in modern web technologies and best practices.

                </p>
              </d iv>

              <d iv class Name="t e x t-centergroup" />
                <d iv class Name="w-20 h-20 b g-g r a dient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <A wardclass Name="w-10h-10t e xt-g r een-400" / />
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-4">Quality Assurance</h3>
                <p c lass Name="t e xt-g r ay-300leading-relaxed" />

                  Comprehensive testing and quality assurance to ensure your web application works flawlessly.

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
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6">Ready to Build Your Web Application?
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-2xlmx-auto" />

                Let's discuss your web project and create a solution that engages your users and drives business growth.

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

export default Web Development Page;
