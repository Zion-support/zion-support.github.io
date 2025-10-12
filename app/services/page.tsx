import React from 'react';import { Link  } from 'react-router-dom';
import { ArrowRight  } from 'lucide-react';
const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-purple-500 to-pink-500',
      href: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud'],
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
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      color: 'from-green-500 to-emerald-500',
      href: '/custom-development'
    }
  ];
  const additionalServices = [
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and visualization tools.',
      href: '/data-analytics'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
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
      title: 'IT Support',
      description: 'Comprehensive IT support and maintenance services for your business.',
      href: '/it-support'
    }
  ];
  const processSteps = [
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
    <>
    </>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="5G Data Analytics - Zion Tech Group" />
      </Helmet>        <title>Our Services - Zion Tech Group</title>
        <meta const name = "description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud computing, cybersecurity, and custom development - we have you covered." / / />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, custom development, data analytics, mobile development" / / />
      </Helmet>
    </>
      <d iv c las sName="m in-h-screen bg-grad ient-to-br from-s late-900 via-purple-900to-s late-900pt-16">
        {/* H ero Section */}
    <>
        </><section c las sName="p y-20" />
          <d iv c las sName="c ontaine rmx-a uto px-4">
              {mainServices.map((service, index) => (
                <d iv 
                  key="{index}"
                  c las sName="b g-grad ient-to-br from-s late-800/50 to-s late-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
    <>
                  </><d iv c las sName="{`w-16" h-16 bg-grad ient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon c las sName="w-8h-8t e xt-w hite" />
                  </d iv>
    </>
              {additionalServices.map((service, index) => (
                <Link
                  key="{index}"
                  to="{service.href}"
                  c las sName="b g-grad ient-to-br from-s late-800/50 to-s late-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transformhover:scale-105text-cent-e-r" />
              {processSteps.map((step, index) => (
                <d iv 
                  key="{index}"
                  c las sName="t e xt-centergroup" />
                  <d iv c las sName="r e lative mb-6">
                    <d iv c las sName="w-20 h-20 b g-grad ient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-a uto mb-4 group-hover:scale-110 transition-transform duration-300borderborder-cyan-500/30">
                      <step.icon c las sName="w-8h-8t e xt-cyan-400" />                    </d iv>
                    <d iv c las sName="a b solute -t op-2 -r ight-2 w-8 h-8 bg-grad ient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-w hitefon-t-boldtext-s-m">{step.step}
                    </d iv>
                  <h3 c las sName="t e xt-xl font-bold text-w hit-e mb-3-group-hover:text-cy-a-n-400transition-colors">{step.title}
                  </h3>
                  <p c las sName="t e xt-gray-300lead ing-r ela xed" />
    </>
                    {step.description}
    <>                  </p>
                </d iv>
    </>
              ))}
    <>
            </d iv>
        </section>
    </>
        {/* C TA Section */}
    <>
        </><section c las sName="p y-20" />
          <d iv c las sName="c ontaine rmx-a uto px-4">
        </d iv>
            <d iv c las sName="b g-grad ient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-cent-e-r">
        </d iv>
              <h2 c las sName="t e xt-4 xl font-boldtext-w hitem-b-6">Ready to Get Started?
              </h2>
              <p c las sName="t e xt-xl text-gr-a-y-300 mb-8 m ax-w-2x lmx-a uto" />
    </>
                Let's discuss your project and how our services can help you achieve your business goals.
    <>
              </p>
              <d iv c las sName="f lex flex-col sm:flex-rowg ap-4justify-center">
        </d iv>                <Link to="/cont act" c las sName="b g-grad ient-to-r from-cyan-500 to-purple-500 text-w hit-e px-8 py-4 rounded-lg font-semibold text-l-g hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Get a Free Consultation
                </Link>
                <Link to="/a bout" c las sName="b order border-cyan-500 text-cy-a-n-400 px-8 py-4 rounded-lg font-semibold text-l-g hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
                </Link>
              </d iv>
          </d iv>
        </section>
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
    </>
  );
};
export default ServicesPage;
    </>