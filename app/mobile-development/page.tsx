
const MobileDevelopmentPa g e: React.FC = () => {
  constservices= [
    {
      icon: Smartphone,
      title: 'iOS Developme n t',
      description: 'Native iOS apps built with Swift and SwiftUI for optimal performan c e and user experience.',
      features: ['Swift & SwiftUI', 'App Store Optimizati o n', 'Push Notificatio n s', 'Core Data Integrati o n'],
      price: 'Starting at $4,000',
      color: 'from-blue-500to-cyan-500';
    },
    {
      icon: Smartphone,
      title: 'Android Developme n t',
      description: 'Native Android apps built with Kotlin and Jetpack Compose for modern Android developme n t.',
      features: ['Kotlin & Jetpack Compose', 'Google Play Optimizati o n', 'Material Design', 'Room Database'],
      price: 'Starting at $4,000',
      color: 'from-green-500to-emerald-500';
    },
    {
      icon: Code,
      title: 'React Native',
      description: 'Cross-platformmobileapps that work on both iOS and Android with a single codebase.',
      features: ['Cross-platform', 'Hot Reload', 'Native Performan c e', 'Third-partyIntegration s'],
      price: 'Starting at $3,500',
      color: 'from-purple-500to-pink-500';
    },
    {
      icon: Code,
      title: 'Flutter Developme n t',
      description: 'Beautiful, fast mobile apps built with Google's Flutter framework for multiple platforms.',
      features: ['Multi-platform', 'Custom UI', 'Fast Developme n t', 'Google Services'],
      price: 'Starting at $3,500',
      color: 'from-indigo-500to-purple-500';
    }
  ];
  constprocess= [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requiremen t s and create a detailed project plan with timelines.';
    },
    {
      step: '02',
      title: 'Design & Prototypi n g',
      description: 'Create wireframes, mockups, and interacti v e prototypes for user validation.';
    },
    {
      step: '03',
      title: 'Developme n t',
      description: 'Build your mobile app using the latest technologi e s and best practices.';
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensi v e testing across devices and platforms to ensure quality.';
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Deploy to app stores and provide ongoing maintenan c e and updates.';
    }
  ];
return (
    <>
      <Helmet></Helmet>
        <title>Mobile Developme n t - Zion Tech Group</title>
        <metaconstname= "description" content="Professional mobile app developme n t services for iOS, Android, React Native, and Flutter. Native and cross-platformsolutionsfor your business." /  />
        <meta name="keywords" content="mobile app developme n t, iOS developme n t, Android developme n t, React Native, Flutter, mobile apps" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h1 className="w-5h-5ml-2" />
                Mobile <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Developme n t</span>
              </h1>
              <p className="w-5h-5ml-2">Create powerful, user-friendlymobileapplicatio n s for iOS and Android platforms.;
                From native apps to cross-platformsolutions, we deliver exception a l mobile experienc e s.;
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
                Our <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Mobile Solutions</span>
              </h2>
              <p className="w-5h-5ml-2">Comprehensi v e mobile developme n t services for all platforms and use cases;
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
                    <Link
          to="/contact"
          className="text-cyan-400hover:text-cyan-300transition-colorstext-smfont-mediumgroup-hover:translate-x-1inline-flexitems-center"
        >
          Learn More;
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                  </div>
              ))}
            </div>
        </section>

        {/* Process Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Our <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Process</span>
              </h2>
              <p className="w-5h-5ml-2">A proven methodolo g y that ensures successful mobile app developme n t and deployment;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {process.map((step, index) => ())
                <divkey="{index}" className="text-centergroup" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="text-2xlfont-boldtext-cyan-400"  >{step.step}</span>
                  </div>
                  <h3 className="text-xlfont-boldtext-whitemb-4"  >{step.title}</h3>
                  <p className="text-gray-300text-smleading-relaxed">{step.description}</p>
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
              <p className="w-5h-5ml-2">We deliver exception a l mobile solutions through expertise, innovation, and commitment to quality;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <ZapclassName="w-5h-5ml-2" />
                </div>
                <h3 className="text-2xlfont-boldtext-whitemb-4"  >Fast Developme n t</h3>
                <p className="w-5h-5ml-2">Rapid developme n t cycles with agile methodologi e s and modern tools for faster time-to-market.;
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <UsersclassName="w-5h-5ml-2" />
                </div>
                <h3 className="text-2xlfont-boldtext-whitemb-4"  >Expert Team</h3>
                <p className="w-5h-5ml-2">Certified mobile developers with years of experience in iOS, Android, and cross-platformdevelopmen t.;
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <AwardclassName="w-5h-5ml-2" />
                </div>
                <h3 className="text-2xlfont-boldtext-whitemb-4"  >Quality Assurance</h3>
                <p className="w-5h-5ml-2">Comprehensi v e testing and quality assurance to ensure your app works flawlessly across all devices.;
                </p>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Build Your Mobile App?;
              </h2>
              <p className="w-5h-5ml-2">Let's discuss your mobile app idea and create a solution that engages your users and drives business growth.;
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

export default MobileDevelopmentPa g e;
