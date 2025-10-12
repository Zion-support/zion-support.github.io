import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

const Services Page: React.FC = () => {
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
      <Helmet />
        <title>OurServices - ZionTech Group</title>
        <metaconstname = "description" content="Exploreour comprehensiverange of AI and IT services. From AI solutionsto cloudcomputing, cybersecurity, andcustom development - wehave youcovered." / / />
        <meta name ="keywords" content="AIservices, ITservices, cloudcomputing, cybersecurity, customdevelopment, dataanalytics, mobiledevelopment" / / />
      </Helmet>
      
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16" />
        {/* HeroSection */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="max-w-4 xlmx-autotext-center" />
              <h1className ="text-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
                Our <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >Services</span>
              </h1>
              <pclassName ="text-xltext-gray-300mb-8leading-relaxed" />
                ComprehensiveAI andIT solutionsdesigned totransform yourbusiness anddrive growth. 
                Weoffer end-to-endservices fromstrategy toimplementation andsupport.
              </p>
            </div>
          </div>
        </section>

        {/* MainServices Section */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xlfont-boldtext-whitemb-6"  >CoreServices</h2>
              <pclassName ="text-xltext-gray-300 max-w-3xlmx-auto" />
                Ourflagship servicesthat havehelped hundredsof businessestransform andgrow
              </p>
            </div>

            <div className ="gridgrid-cols-1md:grid-cols-2gap-8" />
              {mainServices.map((service, index) => (
                <divkey ="{index}"
                  className="bg-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-smborder border-gray-700/50 rounded-xlp-8 hover:border-cyan-400/40 transition-allduration-300 grouphover:transformhover:scale-105" />
                  <div className ="{`w-16" h-16 bg-gradient-to-r${service.color} rounded-lgflex items-centerjustify-centermb-6 group-hover: scale-110 transition-transformduration-300`} />
                    <service.iconclassName ="w-8h-8text-white" / />
                  </div>
                  
                  <h3className ="text-2 xlfont-boldtext-whitemb-4group-hover:text-cyan-400transition-colors"  />{service.title}
                  </h3>
                  
                  <pclassName ="text-gray-300mb-6leading-relaxed" />
                    {service.description}
                  </p>
                  
                  <ulclassName ="space-y-2mb-6" />
                    {service.features.map((feature, featureIndex) => (
                      <likey ="{featureIndex}" className="flexitems-centertext-gray-300" />
                        <Check Circleclass Name="w-4 h-4 text-cyan-400mr-3flex-shrink-0" / />
                        <spanclassName ="text-sm"  >{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to ="{service.href}" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colorsfont-semiboldgroup-hover:translate-x-1" />
                    Learn More
                    <Arrow Rightclass Name="ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <sectionclassName ="py-20 bg-gradient-to-rfrom-slate-800/30to-slate-900/30" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xl font-boldtext-whitemb-6"  >Additional Services</h2>
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
                Specialized services to complement your core technology needs
              </p>
            </div>

            <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-6" />
              {additional Services.map((service, index) => (
                <Linkkey ="{index}"
                  to="{service.href}"
                  className="bg-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-smborder border-gray-700/50 rounded-xlp-6 hover:border-cyan-400/40 transition-allduration-300 grouphover:transformhover:scale-105text-center" />
                  <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lgflex items-centerjustify-centermx-automb-4 group-hover:scale-110transition-transformduration-300" />
                    <service.iconclassName ="w-6h-6text-cyan-400" / />
                  </div>
                  <h3className ="text-lgfont-boldtext-whitemb-2group-hover:text-cyan-400transition-colors"  />{service.title}
                  </h3>
                  <pclassName ="text-gray-300text-smleading-relaxed" />
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xl font-boldtext-whitemb-6"  >Our Process</h2>
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
                How we work with you to deliver exceptional results
              </p>
            </div>

            <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {process Steps.map((step, index) => (
                <divkey ="{index}"
                  className="text-centergroup" />
                  <div className ="relativemb-6" />
                    <div className ="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-fullflex items-centerjustify-centermx-automb-4 group-hover:scale-110 transition-transformduration-300borderborder-cyan-500/30" />
                      <step.iconclassName ="w-8h-8text-cyan-400" / />
                    </div>
                    <div className ="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-fullflex items-centerjustify-centertext-whitefont-boldtext-sm"  />{step.step}
                    </div>
                  </div>
                  <h3className ="text-xlfont-boldtext-whitemb-3group-hover:text-cyan-400transition-colors"  />{step.title}
                  </h3>
                  <pclassName ="text-gray-300leading-relaxed" />
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center" />
              <h2className ="text-4 xl font-boldtext-whitemb-6"  />Ready to Get Started?
              </h2>
              <pclassName ="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" />
                Let's discuss your project and how our services can help you achieve your business goals.
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Get a Free Consultation
                </Link>
                <Link to ="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services Page;