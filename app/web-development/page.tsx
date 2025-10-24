'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
const PagePage: React.FC = () => {
  return (
=======
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
const technologies = [
    {name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' },
    {name: 'Node.js', icon: Database, description: 'Server-side JavaScript' },
    {name: 'Python/Django', icon: Globe, description: 'Backend development' },
    {name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' },
    {name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' },
    {name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' }]
const process = [
    {step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart},
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code},
    {
      step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe},
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
      icon: Shield,
      icon: Shield}}
  ]
return(<>)
    }
  ];
return (
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
    <>

<<<<<<< HEAD
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive Page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
=======
const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],
      color: 'text-blue-400'},
    {title: 'Backend Development',
      description: 'Scalable server-side solutions and API development',
      icon: Database,
      price: '$1,500/month',
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design'],
      benefits: ['99.9% uptime', 'Scalable architecture', 'Secure APIs'],
      color: 'text-green-400'},
    {title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend',
      icon: Globe,
      price: '$2,200/month',
      features: ['End-to-end development', 'Cloud deployment', 'DevOps integration', 'Testing & QA'],
      benefits: ['Unified solution', 'Faster development', 'Better performance'],
      color: 'text-purple-400'},
    {title: 'E-commerce Development',
      description: 'Custom e-commerce platforms and online stores',
      icon: Smartphone,
      price: '$1,800/month',
      features: ['Custom platforms', 'Payment integration', 'Inventory management', 'Analytics'],
      benefits: ['Higher conversion rates', 'Mobile optimized', 'Secure payments'],
      color: 'text-orange-400'},
    {title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your web applications',
      icon: Users,
      price: '$500/month',
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],
      color: 'text-gray-400'}];
  const technologies = [
    {name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' },
    {name: 'Node.js', icon: Database, description: 'Server-side JavaScript' },
    {name: 'Python/Django', icon: Globe, description: 'Backend development' },
    {name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' },
    {name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' },
    {name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' }];
  const process = [
    {step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart},
    {step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code},
    {step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe},
    {step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
      icon: Shield}]

  return(<>)
      <SEOOptimizer;
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'React', 'Node.js']}
        canonicalUrl="https: //ziontechgroup.com/web-development",
      />,
        <PerformanceOptimizer;
          enableImageOptimization={true}
          enableLazyLoading={true}
          enableCodeSplitting={true}
          enablePrefetching={true}
        />
      <AccessibilityEnhancer;
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer;
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
</div>
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900"></div>
        <Navigation />

        <main className="containermx-autopx-4py-16 pt-24">{/* Hero Section */}</main>
          <section className="text-center mb-16">
            <h1 className="text-4xlmd:text-5xllg:text-6xlfont-bold text-white mb-6 neon-text">Web Development Services</h1><p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">Build modern, scalable, and high-performance web applications with our expert development team.</p>
              From frontend to backend, we deliver solutions that drive business growth.</p>
        <main className="containermx-autopx-4py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
        </section>
            <h1 className="text-4xlmd:text-5xllg:text-6xl font-bold text-white mb-6 neon-text">
              Web Development Services;</h1>
            </h1>,
            <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">,
              Build modern, scalable, and high-performance web applications with our expert development team.
              From frontend to backend, we deliver solutions that drive business growth.
            </p>
            <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>
              <a;
            <div className="flexflex-colsm:flex-rowgap-4 justify-center"></section>
              <a
                href="/contact"
                className="cyber-buttonpx-8py-4text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Start Your Project<a
                href="tel:+13024640950"
                className="border-2border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Call +1 302 464 0950</a>
              >
                Start Your Project;
              </a>
              <a;
                href="tel:+13024640950"
                className="border-2border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950;
              </a>
            </div>,
          </section>,
,;
          {/* Services Grid */}/>
          <section className="mb-20">
        </section>
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-12 text-center neon-text">Our Web Development Services<div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">{webServices.map((service, index) => (</div>
                <div key={index} className="cyber-cardp-8hover:scale-105transition-all duration-300"></div>
                  <div className="flexitems-centermb-6"></div>
                    <div className="w-16h-16bg-gradient-to-brfrom-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div>
                      <service.icon className="w-8h-8text-white" />
                    ))
                    <div></div>
                      <h3 className="text-2xlfont-boldtext-whitemb-2 neon-text">{service.title}<div className={`font-semibold ${service.color}`}>{service.price}<p className="text-gray-300mb-6leading-relaxed">{service.description}</p>
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Web Development Services;)
            </h2>)
)
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">),
              {webServices.map((service, index) => (</div>
                <div key={index} className="cyber-cardp-8hover:scale-105 transition-all duration-300"></div>
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        <Navigation />
        <main className="containermx-autopx-4py-16 pt-24">{/* Hero Section */</main>} <section className="text-center mb-16">
            <h1 className="text-4xlmd:text-5xllg:text-6xl font-bold text-white mb-6 neon-text">,</h1>
              Web Development Services;
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">Build modern, scalable, and high-performance web applications with our expert development team.</p>
              From frontend to backend, we deliver solutions that drive business growth.
            </p>
            <div className="flexflex-colsm:flex-row gap-4 justify-center">,</div>
              <a;
                href="/contact"
                className="cyber-buttonpx-8py-4text-lg font-semibold hover: scale-105 transition-all duration-300",
              >
                Start Your Project;
              </a>
              <a;
                href="tel: +13024640950",
                className="border-2border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
                Call +1 302 464 0950;
              </a>
            </div>
          </section>

          {/* Services Grid */} <section className="mb-20">
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-12 text-center neon-text">Our Web Development Services;</h2>
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">,</div>
              {webServices.map((service, index) => (
                <div key={index}className="cyber-cardp-8hover:scale-105 transition-all duration-300">,</div>
                  <div className="flexitems-centermb-6">
                    <div className="w-16h-16bg-gradient-to-brfrom-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8h-8text-white" />
                    </div>
                    <div>
</div>
                      <h3 className="text-2xlfont-boldtext-whitemb-2 neon-text">{service.title}</h3>
                      <div className={`font-semibold ${service.color}`}>{service.price</div>}</div>
                    </div>
                  </div>
                  <p className="text-gray-300mb-6leading-relaxed">{service.description</p>}</p>

          <section className="py-20px-4">
          <section>
        <div>
          <div>
            <h2>Section Title</h2>
            <p>Section description</p>
          </div>
        </div>
      </section>
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-12 text-center neon-text">Our Web Development Services<div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">{,</div>
    webServices.map((service, index) => (</div>} <div key={index}className="cyber-cardp-8hover:scale-105 transition-all duration-300"></div>,
                  <div className="flexitems-centermb-6"></div>
                    <div className="w-16h-16bg-gradient-to-brfrom-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div>
                      <service />
                    <div />
                      <h3 className="text-2xlfont-boldtext-whitemb-2 neon-text">{service.title}<div className={`font-semibold ${service.color}`}>{service.price</div>}<p className="text-gray-300mb-6leading-relaxed">{service.description</p>}</p>
            <h2>Our Web Development Services;)</h2>
            </h2>);
);
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">),</div>
              {webServices.map((service, index) => (</div>} <div key={index}className="cyber-cardp-8hover:scale-105 transition-all duration-300"></div>,
                  <div className="flexitems-centermb-6">,</div>
                    <div className="w-16h-16bg-gradient-to-brfrom-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">,</div>
                      <service.icon className="w-8h-8text-white" />,
                    </div>,
                    <div>,</div>
                      <h3 className="text-2xlfont-boldtext-whitemb-2 neon-text">{service.title}</h3>
                      <div className={`font-semibold ${service.color}`}>{service.price}</div>
                    </div>
                  </div>

                  <p className="text-gray-300mb-6leading-relaxed">{service.description}</p>
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-12 text-center neon-text">Our Web Development Services</h2><div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">{webServices.map((service, index) => (</section>
                <div key={index} className="cyber-cardp-8hover:scale-105transition-all duration-300"></div>
                  <div className="flexitems-centermb-6"></div>
                    <div className="w-16h-16bg-gradient-to-brfrom-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div>
                      <service.icon className="w-8h-8text-white" />
                    </div>
                    <div></div>
                      <h3 className="text-2xlfont-boldtext-whitemb-2 neon-text">{service.title}</h3><div className={`font-semibold ${service.color}`}>{service.price}</div><p className="text-gray-300mb-6leading-relaxed">{service.description}</p>

                  <div className="mb-6"></div>
                    <h4 className="text-lgfont-semiboldtext-whitemb-3">Features<ul className="space-y-2">{service.features.map((feature, featureIndex) => (</ul>
                        <li key={featureIndex} className="flexitems-centertext-gray-300">
                          <CheckCircle className="w-4h-4text-green-400mr-3 flex-shrink-0" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>
                  </li>

                  {service.benefits && (
                    <div className="mb-6"></div>
                      <h4 className="text-lgfont-semiboldtext-whitemb-3">Benefits<ul className="space-y-2">{service.benefits.map((benefit, benefitIndex) => (</ul>
                          <li key={benefitIndex} className="flexitems-centertext-gray-300">
                            <ArrowRight className="w-4h-4text-cyan-400mr-3 flex-shrink-0" >{benefit}</ArrowRight>
                          </ArrowRight>
                        ))}
                      </ul>
                    </li>
                  <a;
                    href="/contact"
                    className="w-fullpy-3px-6rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 cyber-button"
                  >Get Started</a>
                  </a>
                </li>
                    className="w-fullpy-3px-6rounded-lg font-semibold text-center transition-all duration-300 hover: scale-105 cyber-button"
                  >
                    Get Started;
                  </a>,
                </div>))}
            </li>
          </section>

          {/* Technologies */}
          <section className="mb-20">
        </section>
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-12 text-center neon-text">Technologies We Use<div className="gridgrid-cols-2md:grid-cols-3lg:grid-cols-6 gap-6">{technologies.map((tech, index) => (</div>
                <div key={index} className="cyber-cardp-6text-centerhover:scale-105 transition-all duration-300"></div>
                  <tech.icon className="w-12h-12text-cyan-400mx-auto mb-4" />
                  <h3 className="text-lgfont-semiboldtext-whitemb-2">{tech.name}<p className="text-smtext-gray-300">{tech.description}</p>
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-12 text-center neon-text">
              Technologies We Use;
            </h2>,
,
            <div className="gridgrid-cols-2md:grid-cols-3lg:grid-cols-6 gap-6">,
              {technologies.map((tech, index) => (</div>
                <div key={index} className="cyber-cardp-6text-centerhover: scale-105 transition-all duration-300">,</div>
                  <tech.icon className="w-12h-12text-cyan-400mx-auto mb-4" />,
                  <h3 className="text-lgfont-semiboldtext-whitemb-2">{tech.name}</h3>
                  <p className="text-smtext-gray-300">{tech.description}</p>
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-12 text-center neon-text">Technologies We Use</h2><div className="gridgrid-cols-2md:grid-cols-3lg:grid-cols-6 gap-6">{technologies.map((tech, index) => (</section>
                <div key={index} className="cyber-cardp-6text-centerhover:scale-105 transition-all duration-300"></div>
                  <tech.icon className="w-12h-12text-cyan-400mx-auto mb-4" />
                  <h3 className="text-lgfont-semiboldtext-whitemb-2">{tech.name}</h3><p className="text-smtext-gray-300">{tech.description}</p>
                </li>
              ))}
            </li>
          </section>

          {/* Process */}
          <section className="mb-20">
        </section>
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-12 text-center neon-text">Our Development Process<div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8">{process.map((step, index) => (</div>
                <div key={index} className="cyber-cardp-6text-centerhover:scale-105 transition-all duration-300"></div>
                  <div className="w-16h-16bg-gradient-to-brfrom-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <span className="text-2xlfont-boldtext-white">{step.step}<h3 className="text-xlfont-boldtext-whitemb-3 neon-text">{step.title}<p className="text-gray-300">{step.description}</p>
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Development Process;
            </h2>,
,
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8">,
              {process.map((step, index) => (</div>
                <div key={index} className="cyber-cardp-6text-centerhover: scale-105 transition-all duration-300">,</div>
                  <div className="w-16h-16bg-gradient-to-brfrom-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">,</div>
                    <span className="text-2xlfont-boldtext-white">{step.step}</span>
                  </li>
                  <h3 className="text-xlfont-boldtext-whitemb-3 neon-text">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-12 text-center neon-text">Our Development Process</h2><div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8">{process.map((step, index) => (</section>
                <div key={index} className="cyber-cardp-6text-centerhover:scale-105 transition-all duration-300"></div>
                  <div className="w-16h-16bg-gradient-to-brfrom-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <span className="text-2xlfont-boldtext-white">{step.step}</span><h3 className="text-xlfont-boldtext-whitemb-3 neon-text">{step.title}</h3><p className="text-gray-300">{step.description}</p>
                </li>
              ))}
            </li>
          </section>

          {/* CTA Section */}
          <section$1>
        <div$2></div>
              <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-6 neon-text">Ready to Build Your Next Web Application?<p className="text-xltext-gray-300mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p>
              <h2 className="text-3xlmd:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Build Your Next Web Application?
              </h2>
              <p className="text-xltext-gray-300mb-8">
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
              <div className="flexflex-colsm:flex-rowgap-4 justify-center"></div>
                <a;
            <div className="cyber-cardp-12max-w-4xlmx-auto"></section>
              <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-6 neon-text">Ready to Build Your Next Web Application?</h2><p className="text-xltext-gray-300mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p>
              <div className="flexflex-colsm:flex-rowgap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-buttonpx-8py-4text-lg font-semibold hover:scale-105 transition-all duration-300"
                >Start Your Project<a
                  href="tel:+13024640950"
                  className="border-2border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >Call +1 302 464 0950</a>
                >
                  Start Your Project;
                </a>
                <a;
                  href="tel:+13024640950"
                  className="border-2border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call +1 302 464 0950;
                </a>
              </li>
          </section>
        </main>

        <Footer />
      </div>,
              </div>
            ))}
          </div>
        </div>
      </section>

                  href="tel: +13024640950",
                  className="border-2border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
                >
                  Call +1 302 464 0950,
                </a>
              </div>
        </div>
      </section>
        </main>
        <Footer />,
    </>)};

export default WebDevelopmentPage;
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
    </>
  )};

<<<<<<< HEAD
export default PagePage;
=======
export default WebDevelopmentPage;
      {/* CTA Section */}
      <section className="py-16px-4sm:px-6lg:px-8">
        <div className="max-w-4xlmx-autotext-center">
          <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-6">
            Start Your Web Project
          </h2>
          <p className="text-xltext-gray-300mb-8">
            Let us help you build the perfect website for your business.
          </p>
          <button className="bg-gradient-to-rfrom-cyan-500to-blue-500hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5h-5mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WebDevelopmentPage
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
