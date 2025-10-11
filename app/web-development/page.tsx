'use client';
import React from 'react';
import {Code, Smartphone, Globe, Database, Shield, BarChart, Users, CheckCircle, ArrowRight, Cloud, Phone}}from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
<<<<<<< HEAD
const technologies = const technologies = const technologies = [
=======
const technologies = [
<<<<<<< HEAD
    {name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' ,},
    {name: 'Node.js', icon: Database, description: 'Server-side JavaScript' ,},
    {name: 'Python/Django', icon: Globe, description: 'Backend development' ,},
    {name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' ,},
    {name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' ,},
    {name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' ,}]
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    { name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' },
    { name: 'Node.js', icon: Database, description: 'Server-side JavaScript' },
    { name: 'Python/Django', icon: Globe, description: 'Backend development' },
    { name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' },
<<<<<<< HEAD
    { name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' },;
    { name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' };
  ];
const process = const process = const process = [
    {
    step: '01',
=======
    { name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' },
    { name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' }
  ];];];
>>>>>>> origin/main
const process = [
    {step: '01',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart,},
    {step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code,},
    {step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe,},
    {step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
<<<<<<< HEAD
      icon: Shield,}}
  ]
return(<>)
=======
      icon: Shield,
  };
    };
  ];
<<<<<<< HEAD
return ()
const WebDevelopmentPage: React.FC = () => {
  const webServices = const webServices = const webServices = [
    {
=======
return (
    <>
>>>>>>> origin/main
      <SEOOptimizer;
        title="Web Development Services - Zion Tech Group";
<<<<<<< HEAD
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices.";)
const WebDevelopmentPage: React.FC = () => {
  const features = [
    
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices.";

const WebDevelopmentPage: React.FC = () => {,
  const webServices = [
    {
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],
<<<<<<< HEAD
      benefits: [''50% faster load times', 'Mobile-first approach', 'SEO optimized''],
      color: 'text-blue-400'
    },
    {
      title: 'Backend Development',
=======
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],
      color: 'text-blue-400',},
    {title: 'Backend Development',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      description: 'Scalable server-side solutions and API development',
      icon: Database,
      price: '$1,500/month',
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design'],
<<<<<<< HEAD
      benefits: [''99.9% uptime', 'Scalable architecture', 'Secure APIs''],
      color: 'text-green-400'
    },
    {
      title: 'Full-Stack Development',
=======
      benefits: ['99.9% uptime', 'Scalable architecture', 'Secure APIs'],
      color: 'text-green-400',},
    {title: 'Full-Stack Development',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      description: 'Complete web solutions from frontend to backend',
      icon: Globe,
      price: '$2,200/month',
      features: ['End-to-end development', 'Cloud deployment', 'DevOps integration', 'Testing & QA'],
<<<<<<< HEAD
      benefits: [''Unified solution', 'Faster development', 'Better performance''],
      color: 'text-purple-400'
    },
    {
      title: 'E-commerce Development',
=======
      benefits: ['Unified solution', 'Faster development', 'Better performance'],
      color: 'text-purple-400',},
    {title: 'E-commerce Development',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      description: 'Custom e-commerce platforms and online stores',
      icon: Smartphone,
      price: '$1,800/month',
      features: ['Custom platforms', 'Payment integration', 'Inventory management', 'Analytics'],
<<<<<<< HEAD
      benefits: [''Higher conversion rates', 'Mobile optimized', 'Secure payments''],
      color: 'text-orange-400'
    },
    {
      title: 'Maintenance & Support',
=======
      benefits: ['Higher conversion rates', 'Mobile optimized', 'Secure payments'],
      color: 'text-orange-400',},
    {title: 'Maintenance & Support',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      description: 'Ongoing maintenance and support for your web applications',
      icon: Users,
      price: '$500/month',
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],
<<<<<<< HEAD
      color: 'text-gray-400';
    };
  ];
  const technologies = const technologies = const technologies = [
    { name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' },
    { name: 'Node.js', icon: Database, description: 'Server-side JavaScript' },
    { name: 'Python/Django', icon: Globe, description: 'Backend development' },
    { name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' },
    { name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' },;
    { name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' };
  ];
  const process = const process = const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart;
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code;
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe;
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
      icon: Shield;
<<<<<<< HEAD
    };
  ];
  return ()
=======
    }
  ];];];
  return (
    </>
      <SEOOptimizer;
        title="Web Development Services - Zion Tech Group" description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices."

        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'React', 'Node.js']}
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
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
=======
<<<<<<< HEAD
      color: 'text-gray-400',}];
=======
      color: 'text-gray-400'
    }
  ];];];
>>>>>>> origin/main
  const technologies = [
    {name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' ,},
    {name: 'Node.js', icon: Database, description: 'Server-side JavaScript' ,},
    {name: 'Python/Django', icon: Globe, description: 'Backend development' ,},
    {name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' ,},
    {name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' ,},
    {name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' ,}];
  const process = [
    {step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart;,},
    {step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code;,},
    {step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe;,},
    {step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
<<<<<<< HEAD
      icon: Shield;,}]

  return(<>)
      <SEOOptimizer;
=======
      icon: Shield
    }
  ];];];
  return (
    <>
      <SEOOptimizer
>>>>>>> origin/main
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices."

        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'React', 'Node.js']}canonicalUrl="https: //ziontechgroup.com/web-development",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      />
      <PerformanceOptimizer;
        enableImageOptimization={true}enableLazyLoading={true}enableCodeSplitting={true}enablePrefetching={true}/>
      <AccessibilityEnhancer;
        enableKeyboardNavigation={true}enableScreenReaderSupport={true}enableHighContrast={true}enableFocusManagement={true}/>
      <SecurityEnhancer>
      <Analytics>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div></div>
</div>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div></div>
        <Navigation>
        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</main>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */</main>}</main>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
          <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
            </div>
          </div>
        </section>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Web Development Services</h1></h1></h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Build modern, scalable, and high-performance web applications with our expert development team.</p></p></p>
              From frontend to backend, we deliver solutions that drive business growth.</p>
        <main className="container mx-auto px-4 py-16 pt-24"></main>

<<<<<<< HEAD
          {/* Hero Section */}
          <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
=======
          {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
            </div>
          </div>
        </section>
            <h1>
              Web Development Services</h1></h1></h1>
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,</p>
              Build modern, scalable, and high-performance web applications with our expert development team.;
              From frontend to backend, we deliver solutions that drive business growth.
<<<<<<< HEAD
            </p></p></p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div></div></div>
              <a;

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div></section>
=======
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <a;

            <div className="flex flex-col sm: flex-row gap-4 justify-center"></section>,
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              <a;
                href="/contact";
                className="cyber-button px-8 py-4 text-lg font-semibold hover: scale-105 transition-all duration-300";,
              >Start Your Project<a;
                href="tel: +13024640950";,
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300";,
              >Call +1 302 464 0950</a>
              >
                Start Your Project;
              </a>
              <a>

                Call +1 302 464 0950,
              </a>
            </div>,
          </section>,
<<<<<<< HEAD
,;
          {/* Services Grid */}/>
=======
,
          {/* Services Grid */}

      />
>>>>>>> origin/main
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        </div></div><Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            </section></section><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Web Development Services;
            </h1></h1></h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build modern, scalable, and high-performance web applications with our expert development team.
              From frontend to backend, we deliver solutions that drive business growth.
            </p></p></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><a;
                href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
=======
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */</main>} <section className="text-center mb-16">
            <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">,</h1>
              Web Development Services;
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Build modern, scalable, and high-performance web applications with our expert development team.</p>
              From frontend to backend, we deliver solutions that drive business growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <a;
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover: scale-105 transition-all duration-300",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              >
                Start Your Project;
              </a>
              <a;
<<<<<<< HEAD
                href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
=======
                href="tel: +13024640950",
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              >
                Call +1 302 464 0950;
              </a>
            </div>
          </section>

<<<<<<< HEAD
      </main>)
    </>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
<<<<<<< HEAD
          {/* Services Grid */} <section className="mb-20">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text">,</h2>
              Our Web Development Services;
=======
      </main>
    </>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  );
}
      </main>
    </>
  );
}
      </main>
    </>
  );
<<<<<<< HEAD
}, {/* Services Grid */}
          <section className="mb-20" /></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text" /></h2>
              Our Web Development Services
>>>>>>> origin/main
            </h2>
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
              {webServices.map((service, index) => ()
    webServices.map((service, index) => ()
              Our Web Development Services;)
            </h2>);
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">),
              {
    webServices.map((service, index) => ()
    webServices.map((service, index) => ()
    service.features.map((feature, featureIndex) => ()
=======
} {/* Services Grid */}
          <section className="mb-20">
            </section></section><h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Web Development Services;
            </h2></h2></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webServices.map((service, index) => (
                </div></div><div key=index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  </div></div><div className="flex items-center mb-6">
                    </div></div><div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      </div></div><service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>

                      </div></div><h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3></h3></h3>
                      <div className={`font-semibold $service.color}`}>{service.price}</div></div></div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p></p></p>
=======
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
              {webServices.map((service, index) => (
                <div key={index}className="cyber-card p-8 hover: scale-105 transition-all duration-300">,</div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
</div>
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                      <div className={`font-semibold ${service.color}`}>{service.price</div>}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description</p>}</p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44

          <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
            </div>
          </div>
<<<<<<< HEAD
        </section>)
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Our Web Development Services</h2></h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{)
    webServices.map((service, index) => (</div></div></div>
  }
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"></div></div></div>
                  <div className="flex items-center mb-6"></div></div></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div></div></div>
                      <service />
                    <div />
                      </div></div><h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3></h3><div className={`font-semibold $service.color}`}>{service.price}</div></div><p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p></p></p>)
            <h2>)
              Our Web Development Services;)
            </h2></h2></h2>);
);
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">),
              {
    webServices.map((service, index) => (</div></div></div>
  }
                <div key={index} className="cyber-card p-8 hover: scale-105 transition-all duration-300"></div></div></div>
                  <div className="flex items-center mb-6">,</div></div></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">,</div></div></div>
                      <service.icon className="w-8 h-8 text-white" />,
                    </div>,
                    <div>,</div></div></div>
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3></h3></h3>
                      <div className={`font-semibold $service.color}`}>{service.price}</div></div></div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p></p></p>)
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Our Web Development Services</h2></h2></h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{)
    webServices.map((service, index) => (</div></div></section>
  }
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"></div></div></div>
                  <div className="flex items-center mb-6"></div></div></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div></div></div>
                      <service />
                    <div />
                      </div></div><h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3></h3></h3><div className={`font-semibold $service.color}`}>{service.price}</div></div></div><p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p></p></p>
                  <div className="mb-6"></div></div></div>)
                    <h4 className="text-lg font-semibold text-white mb-3">Features<ul className="space-y-2">{)
    service.features.map((feature, featureIndex) => (</ul>
  }
                        <li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>)
                        </CheckCircle>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      ))}
                    </ul>
                  </div>
                  {
<<<<<<< HEAD
    service.benefits && ()
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits<ul className="space-y-2">{service.benefits.map((benefit, benefitIndex) => ()
                      {service.features.map((feature, featureIndex) => ()
=======
    service.benefits && (;)
                    <div className="mb-6"></div></div></div>)
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits<ul className="space-y-2">service.benefits.map((benefit, benefitIndex) => (</ul>
  }
                          <li>
=======
        </section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text">Our Web Development Services<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{,</div>
    webServices.map((service, index) => (</div>} <div key={index}className="cyber-card p-8 hover: scale-105 transition-all duration-300"></div>,
                  <div className="flex items-center mb-6"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div>
                      <service />
                    <div />
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}<div className={`font-semibold ${service.color}`}>{service.price</div>}<p className="text-gray-300 mb-6 leading-relaxed">{service.description</p>}</p>
            <h2>Our Web Development Services;)</h2>
            </h2>);
);
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">),</div>
              {webServices.map((service, index) => (</div>} <div key={index}className="cyber-card p-8 hover: scale-105 transition-all duration-300"></div>,
                  <div className="flex items-center mb-6">,</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">,</div>
                      <service.icon className="w-8 h-8 text-white" />,
                    </div>,
                    <div>,</div>
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                      <div className={`font-semibold ${service.color}`}>{service.price</div>}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description</p>}</p>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text">Our Web Development Services</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{,</div>
    webServices.map((service, index) => (</section>} <div key={index}className="cyber-card p-8 hover: scale-105 transition-all duration-300"></div>,
                  <div className="flex items-center mb-6"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div>
                      <service />
                    <div />
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3><div className={`font-semibold ${service.color}`}>{service.price</div>}</div><p className="text-gray-300 mb-6 leading-relaxed">{service.description</p>}</p>
                  <div className="mb-6"></div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features<ul className="space-y-2">{service.features.map((feature, featureIndex) => (</ul>} <li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"  />{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>
                  {service.benefits && (;
                    <div className="mb-6"></div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits<ul className="space-y-2">{service.benefits.map((benefit, benefitIndex) => (</ul>} <li>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                            <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" >{benefit}</ArrowRight>
                          </ArrowRight>

                  <div className="mb-6">
                    </div></div><h4 className="text-lg font-semibold text-white mb-3">Features</h4>)
                    <ul className="space-y-2">)
                      {service.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                        <li key=featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature})
                        </li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
                        <li key={featureIndex}className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature} </li>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                      ))}
                    </ul>
                  </div>
                  
<<<<<<< HEAD
                  {service.benefits && ()
                        {service.benefits.map((benefit, benefitIndex) => ()
=======
                  {service.benefits && (
                    <div className="mb-6">
<<<<<<< HEAD
                      </div></div><h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>)
                      <ul className="space-y-2">)
                        service.benefits.map((benefit, benefitIndex) => (
                          <li key=benefitIndex} className="flex items-center text-gray-300">
                            <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}className="flex items-center text-gray-300">
                            <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            {benefit} </li>

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                        ))}
                      </ul>
                    </div>
                  )}
<a;
                    href="/contact";
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover: scale-105 cyber-button";,
                  >Get Started</a>
                  </a>
                </div>
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover: scale-105 cyber-button",
                  >
                    Get Started,
                  </a>,
                </div>))}

            </div>
          </section>

<<<<<<< HEAD
<<<<<<< HEAD
                  <a href="/contact"
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 cyber-button block" /></a>
                    Get Started
=======
                  <a;
                    href="/contact" className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 cyber-button block"
                  >
                    Get Started;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
                  <a;
                    href="/contact"
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover: scale-105 cyber-button block",
                  >
                    Get Started;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                  </a>
                </div>
              ))}
            </div>
          </section>

<<<<<<< HEAD
          {/* Technologies */}
<<<<<<< HEAD
          <section className="mb-20" /></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text" /></h2>
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" /></div>
              {technologies.map((tech, index) => ()
=======
          <section className="mb-20">
            </section></section><h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Technologies We Use;
            </h2></h2></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                </div></div><div key=index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  </div></div><tech.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3></h3></h3>
                  <p className="text-sm text-gray-300">{tech.description}</p></p></p>)
                </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
          {/* Technologies */} <section className="mb-20">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text">,</h2>
              Technologies We Use;
            </h2>
            <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-6">,</div>
              {technologies.map((tech, index) => (
                <div key={index}className="cyber-card p-6 text-center hover: scale-105 transition-all duration-300">,</div>
                  <tech.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-300">{tech.description</p>}</p>
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              ))}

            </div>
          </section>

            </div>
          </section>

<<<<<<< HEAD
          {/* Process */}
<<<<<<< HEAD
          <section className="mb-20" /></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text" /></h2>
              Our Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
              {process.map((step, index) => ()
=======
          <section className="mb-20">
            </section></section><h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Development Process;
            </h2></h2></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                </div></div><div key=index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  </div></div><div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    </div></div><span className="text-2xl font-bold text-white">{step.step}</span></span></span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{step.title}</h3></h3></h3>
                  <p className="text-gray-300">{step.description}</p></p></p>)
                </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
          {/* Process */} <section className="mb-20">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text">,</h2>
              Our Development Process;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {process.map((step, index) => (
                <div key={index}className="cyber-card p-6 text-center hover: scale-105 transition-all duration-300">,</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step</span>}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{step.title}</h3>
                  <p className="text-gray-300">{step.description</p>}</p>
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              ))}

            </div>
          </section>

<<<<<<< HEAD
          {/* CTA Section */}
<<<<<<< HEAD
          <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
=======
          {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
            <div className="cyber-card p-12 max-w-4xl mx-auto" / /></div>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">Ready to Build Your Next Web Application?<p className="text-xl text-gray-300 mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p>
              <h2></h2>
                Ready to Build Your Next Web Application?
              </h2>
              <p></p>
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" / /></div>
=======
          <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
            </div>
          </div>
        </section>
            <div className="cyber-card p-12 max-w-4xl mx-auto"></div></div></div>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">Ready to Build Your Next Web Application?</h2></h2><p className="text-xl text-gray-300 mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p></p></p>
              <h2>
                Ready to Build Your Next Web Application?
              </h2></h2></h2>
              <p>
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p></p></p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                <a;

            <div className="cyber-card p-12 max-w-4xl mx-auto"></div></div></section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Build Your Next Web Application?</h2></h2></h2><p className="text-xl text-gray-300 mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p></p></p>
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm:flex-row gap-4 justify-center" / /></div>
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
            <div className="cyber-card p-12 max-w-4xl mx-auto"></div>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">Ready to Build Your Next Web Application?<p className="text-xl text-gray-300 mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p>,
              <h2>Ready to Build Your Next Web Application?</h2>
              </h2>
              <p>Let's discuss your project requirements and create a custom solution that drives your business forward.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <a;

            <div className="cyber-card p-12 max-w-4xl mx-auto"></section>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">Ready to Build Your Next Web Application?</h2><p className="text-xl text-gray-300 mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p>,
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                <a;
                  href="/contact";
                  className="cyber-button px-8 py-4 text-lg font-semibold hover: scale-105 transition-all duration-300";,
                >Start Your Project<a;
                  href="tel: +13024640950";,
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300";,
                >Call +1 302 464 0950</a>
                >
                  Start Your Project;
                </a>
                <a,

            </div></a>
          </section>

<<<<<<< HEAD
          {/* CTA Section */}
<<<<<<< HEAD
          <section className="text-center" /></section>
            <div className="cyber-card p-12 max-w-4xl mx-auto" /></div>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text" /></h2>
                Ready to Build Your Next Web Application?
              </h2>
              <p className="text-xl text-gray-300 mb-8" /></p>
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
                <a href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300" /></a>
                  Start Your Project
                </a>
                <a href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300" /></a>
                  Call +1 302 464 0950

=======
          <section className="text-center">
            </section></section><div className="cyber-card p-12 max-w-4xl mx-auto">
              </div></div><h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">
                Ready to Build Your Next Web Application?
              </h2></h2></h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p></p></p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                </div></div><a;
                  href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Project;
                </a>
                <a;
                  href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call +1 302 464 0950;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
          {/* CTA Section */} <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">,</h2>
                Ready to Build Your Next Web Application?
              </h2>
              <p className="text-xl text-gray-300 mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <a;
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover: scale-105 transition-all duration-300",
                >
                  Start Your Project;
                </a>
                <a;
                  href="tel: +13024640950",
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
                >
                  Call +1 302 464 0950;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                </a>
              </div>
            </div>
          </section>
        </main>
<<<<<<< HEAD
        <Footer / /></Footer>
                  href="tel:+13024640950";
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
=======
        <Footer />

                  href="tel: +13024640950";,
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                >
                  Call +1 302 464 0950,
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />,
    </>);
};

export default WebDevelopmentPage;
      </div>
    </>
  );
};

export default WebDevelopmentPage;
