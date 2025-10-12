
const WebDevelopmentPa g e: React.FC = () => {
  constservices= [
    {
      icon: Code,
      title: 'Frontend Developme n t',
      description: 'Modern, responsive web applicatio n s built with React, Next.js, and cutting-edgetechnologie s.',
      features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      price: 'Starting at $3,000',
      color: 'from-blue-500to-cyan-500';
    },
    {
      icon: Code,
      title: 'Backend Developme n t',
      description: 'Robust server-sideapplication s with Node.js, Python, and scalable architectur e s.',
      features: ['Node.js/Python', 'RESTful APIs', 'Database Design', 'Cloud Integrati o n'],
      price: 'Starting at $4,000',
      color: 'from-green-500to-emerald-500';
    },
    {
      icon: Globe,
      title: 'Full-StackDevelopmen t',
      description: 'Complete web solutions from frontend to backend with seamless integrati o n.',
      features: ['End-to-EndDevelopmen t', 'Database Integrati o n', 'API Developme n t', 'Deployment'],
      price: 'Starting at $6,000',
      color: 'from-purple-500to-pink-500';
    },
    {
      icon: Settings,
      title: 'E-commerceSolutions',
      description: 'Custom e-commerceplatformswith payment integrati o n and inventory management.',
      features: ['Payment Integrati o n', 'Inventory Management', 'Order Processing', 'Admin Dashboard'],
      price: 'Starting at $8,000',
      color: 'from-orange-500to-red-500';
    }
  ];
  const technologies= [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL']
    },
    {
      title: 'Cloud',
      items: ['AWS', 'Azure', 'Google Cloud', 'Vercel', 'Netlify']
    },
    {
      title: 'Tools',
      items: ['Git', 'Docker', 'CI/CD', 'Testing', 'Monitoring']
    }
  ];
return (
    <>
      <Helmet></Helmet>
        <title>Web Developme n t - Zion Tech Group</title>
        <metaconstname= "description" content="Professional web developme n t services including frontend, backend, full-stack, and e-commercesolutions. Modern, responsive, and scalable web applicatio n s." /  />
        <meta name="keywords" content="web developme n t, frontend developme n t, backend developme n t, full-stackdevelopmen t, e-commerce, React, Node.js" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h1 className="w-5h-5ml-2" />
                Web <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Developme n t</span>
              </h1>
              <p className="w-5h-5ml-2">Create powerful, modern web applicatio n s that engage users and drive business growth.;
                From simple websites to complex web platforms, we deliver exception a l digital experienc e s.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105">Start Your Project;
                </Link>
                <Linkto="/it-services" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105">View All IT Services;
                </Link>
              </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Our <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Web Solutions</span>
              </h2>
              <p className="w-5h-5ml-2">Comprehensi v e web developme n t services for all your digital needs;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {services.map((service, index) => ())
                <div>>
                  key="{index}";
                  className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50backdrop-blur-smborderborder-gray-700/50rounded-xlp-8hover:border-cyan-400/40transition-allduration-300grouphover:transformhover:scale-105" />
                  <div className="{`w-16" h-16bg-gradient-to-r ${service.color} rounded-xlflexitems-centerjustify-centermb-6group-hover: scale-110transition-transformduration-300`,} />
                    <service.iconclassName="w-8h-8text-white"  />
                  </div>
                  
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  
                  <p className="w-5h-5ml-2">{service.description}
                  </p>

                  <ulclassName="w-5h-5ml-2" />
                    {service.features.map((feature, featureInd e x) => ())
                      <likey="{featureInd e x}" className="flexitems-centertext-smtext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="text-2xlfont-boldtext-cyan-400"  >{service.price}</span>
                    <Link;
          to="/contact";
          className="text-cyan-400hover:text-cyan-300transition-colorstext-smfont-mediumgroup-hover:translate-x-1inline-flexitems-center"
        >
          Learn More;
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                  </div>
              ))}
            </div>
        </section>

        {/* Technologi e s Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Technologi e s <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >We Use</span>
              </h2>
              <p className="w-5h-5ml-2">Modern, proven technologi e s for building exception a l web applicatio n s;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {technologi e s.map((tech, index) => ())
                <divkey="{index}" className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50backdrop-blur-smborderborder-gray-700/50rounded-xlp-6" />
                  <h3 className="text-xlfont-boldtext-whitemb-4text-center"  >{tech.title}</h3>
                  <ulclassName="w-5h-5ml-2" />
                    {tech.items.map((item, itemIndex) => ())
                      <likey="{itemIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Why Choose <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Zion Tech Group</span>?;
              </h2>
              <p className="w-5h-5ml-2">We deliver exception a l web solutions through expertise, innovation, and commitment to quality;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <ZapclassName="w-5h-5ml-2" />
                </div>
                <h3 className="text-2xlfont-boldtext-whitemb-4"  >Fast Developme n t</h3>
                <p className="w-5h-5ml-2">Rapid developme n t cycles with modern tools and agile methodologi e s for faster time-to-market.;
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <UsersclassName="w-5h-5ml-2" />
                </div>
                <h3 className="text-2xlfont-boldtext-whitemb-4"  >Expert Team</h3>
                <p className="w-5h-5ml-2">Certified developers with years of experience in modern web technologi e s and best practices.;
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <AwardclassName="w-5h-5ml-2" />
                </div>
                <h3 className="text-2xlfont-boldtext-whitemb-4"  >Quality Assurance</h3>
                <p className="w-5h-5ml-2">Comprehensi v e testing and quality assurance to ensure your web applicati o n works flawlessly.;
                </p>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Build Your Web Applicati o n?;
              </h2>
              <p className="w-5h-5ml-2">Let's discuss your web project and create a solution that engages your users and drives business growth.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105">Start Your Project;
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

export default WebDevelopmentPa g e;
