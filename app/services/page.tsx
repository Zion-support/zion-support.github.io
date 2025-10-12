import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesPa g e: React.FC = () => {
  const mainServices= [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edgeartificialintelligen c e and machine learning solutions.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-purple-500to-pink-500',
      href: '/ai-services';
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructu r e solutions for modern businesses.',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud'],
      color: 'from-cyan-500to-blue-500',
      href: '/cloud-services';
    },
    {
      icon: Shield,
      title: 'Cybersecuri t y',
      description: 'Protect your digital assets with comprehensi v e security solutions and best practices.',
      features: ['Security Audits', 'Penetrati o n Testing', 'Compliance', 'Incident Response'],
      color: 'from-red-500to-orange-500',
      href: '/cybersecuri t y';
    },
    {
      icon: Code,
      title: 'Custom Developme n t',
      description: 'Tailored software solutions built with modern technologi e s and best practices.',
      features: ['Web Applicatio n s', 'Mobile Apps', 'API Developme n t', 'System Integrati o n'],
      color: 'from-green-500to-emerald-500',
      href: '/custom-development';
    }
  ];
  const additionalServices= [
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and visualizati o n tools.',
      href: '/data-analytics';
    },
    {
      icon: Smartphone,
      title: 'Mobile Developme n t',
      description: 'Native and cross-platformmobileapplicatio n s for iOS and Android.',
      href: '/mobile-development';
    },
    {
      icon: Globe,
      title: 'Web Developme n t',
      description: 'Modern, responsive websites and web applicatio n s that drive engagement.',
      href: '/web-development';
    },
    {
      icon: Lock,
      title: 'IT Support',
      description: 'Comprehensi v e IT support and maintenan c e services for your business.',
      href: '/it-support';
    }
  ];
  const processSteps= [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and technical requiremen t s to understand your goals.',
      icon: Users;
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensi v e strategy and roadmap tailored to your specific needs.',
      icon: Brain;
    },
    {
      step: '03',
      title: 'Implementati o n',
      description: 'Our expert team implements the solution with precision and attention to detail.',
      icon: Code;
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenan c e to ensure optimal performan c e.',
      icon: Zap;
    }
  ];
return (
    <>
      <Helmet></Helmet>
        <title>Our Services - Zion Tech Group</title>
        <metaconstname= "description" content="Explore our comprehensi v e range of AI and IT services. From AI solutions to cloud computing, cybersecuri t y, and custom developme n t - we have you covered." /  />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecuri t y, custom developme n t, data analytics, mobile developme n t" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h1 className="w-5h-5ml-2" />
                Our <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Services</span>
              </h1>
              <p className="w-5h-5ml-2">Comprehensi v e AI and IT solutions designed to transform your business and drive growth.;
                We offer end-to-endservicesfrom strategy to implementati o n and support.;
              </p>
            </div>
        </section>

        {/* Main Services Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="text-4xl font-boldtext-whitemb-6"  >Core Services</h2>
              <p className="w-5h-5ml-2">Our flagship services that have helped hundreds of businesses transform and grow;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {mainServic e s.map((service, index) => ())
                <div>>
                  key="{index}";
                  className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50backdrop-blur-smborderborder-gray-700/50rounded-xlp-8hover:border-cyan-400/40transition-allduration-300grouphover:transformhover:scale-105" />
                  <div className="{`w-16" h-16bg-gradient-to-r ${service.color} rounded-lgflexitems-centerjustify-centermb-6group-hover: scale-110transition-transformduration-300`,} />
                    <service.iconclassName="w-8h-8text-white"  />
                  </div>
                  
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  
                  <p className="w-5h-5ml-2">{service.description}
                  </p>
                  
                  <ulclassName="w-5h-5ml-2" />
                    {service.features.map((feature, featureInd e x) => ())
                      <likey="{featureInd e x}" className="flexitems-centertext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span className="text-sm"  >{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link;
          to="{service.href}";
          className="inline-flexitems-centertext-cyan-400hover:text-cyan-300transition-colorsfont-semiboldgroup-hover:translate-x-1"
        >
          Learn More;
                    
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Additional Services Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="text-4xl font-boldtext-whitemb-6"  >Additional Services</h2>
              <p className="w-5h-5ml-2">Specializ e d services to complement your core technology needs;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {additionalServic e s.map((service, index) => ())
                <Link;
                  key="{index}";
                  to="{service.href}";
                  className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50backdrop-blur-smborderborder-gray-700/50rounded-xlp-6hover:border-cyan-400/40transition-allduration-300grouphover:transformhover:scale-105text-center" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <service.iconclassName="w-6h-6text-cyan-400"  />
                  </div>
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  <p className="w-5h-5ml-2">{service.description}
                  </p>
                </Link>
              ))}
            </div>
        </section>

        {/* Process Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="text-4xl font-boldtext-whitemb-6"  >Our Process</h2>
              <p className="w-5h-5ml-2">How we work with you to deliver exception a l results;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {processSte p s.map((step, index) => ())
                <div>>
                  key="{index}";
                  className="text-centergroup" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <step.iconclassName="w-8h-8text-cyan-400"  />
                    </div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{step.step}>
                    </div>
                  <h3 className="w-5h-5ml-2" />{step.title}
                  </h3>
                  <p className="w-5h-5ml-2">{step.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Get Started?;
              </h2>
              <p className="w-5h-5ml-2">Let's discuss your project and how our services can help you achieve your business goals.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105">Get a Free Consultati o n;
                </Link>
                <Linkto="/about" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105">Learn More About Us;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPa g e;