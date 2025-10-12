
const Mobile Development Page: React.FC = () => {
  constservices = [
    {
      icon: Smartphone,
      title: 'iOS Development',
      description: 'Native iOS apps built with Swift and SwiftUI for optimal performance and user experience.',
      features: ['Swift & SwiftUI', 'App Store Optimization', 'Push Notifications', 'Core Data Integration'],
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
      description: 'Cross-platform mobile apps that work on both iOS and Android with a single codebase.',
      features: ['Cross-platform', 'Hot Reload', 'Native Performance', 'Third-party Integrations'],
      price: 'Starting at $3,500',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Flutter Development',
      description: 'Beautiful, fast mobile apps built with Google\'s Flutter framework for multiple platforms.',
      features: ['Multi-platform', 'Custom UI', 'Fast Development', 'Google Services'],
      price: 'Starting at $3,500',
      color: 'from-indigo-500 to-purple-500'
    }
  ];
  constprocess = [
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
      title: 'Testing & QA',
      description: 'Comprehensive testing across devices and platforms to ensure quality.'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Deploy to app stores and provide ongoing maintenance and updates.'
    }
  ];
  return (
    <>
      <Helmet />
        <title>MobileDevelopment - ZionTech Group</title>
        <metaconstname = "description" content="Professionalmobile appdevelopment servicesfor i OS, Android, React Native, and Flutter. Nativeand cross-platformsolutions foryour business." / / />
        <meta name ="keywords" content="mobileapp development, i OSdevelopment, Androiddevelopment, React Native, Flutter, mobileapps" / / />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        {/* HeroSection */}
        <sectionclassName ="pt-32pb-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermax-w-4xlmx-auto" />
              <h1className ="text-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
                Mobile <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >Development</span>
              </h1>
              <pclassName ="text-xltext-gray-300mb-8leading-relaxed" />
                Createpowerful, user-friendlymobile applicationsfor iOSand Androidplatforms. 
                Fromnative appsto cross-platformsolutions, wedeliver exceptionalmobile experiences.
              </p>
              <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300transformhover:scale-105">StartYour Project
                </Link>
                <Link to ="/it-services" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105">ViewAll ITServices
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ServicesSection */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xlfont-boldtext-whitemb-6" />
                Our <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >MobileSolutions</span>
              </h2>
              <pclassName ="text-xltext-gray-300 max-w-3xlmx-auto" />
                Comprehensivemobile developmentservices forall platformsand usecases
              </p>
            </div>

            <div className ="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {services.map((service, index) => (
                <divkey ="{index}"
                  className="bg-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-smborder border-gray-700/50 rounded-xlp-8 hover:border-cyan-400/40 transition-allduration-300 grouphover:transformhover:scale-105" />
                  <div className ="{`w-16" h-16 bg-gradient-to-r${service.color} rounded-xlflex items-centerjustify-centermb-6 group-hover: scale-110 transition-transformduration-300`} />
                    <service.iconclassName ="w-8h-8text-white" / />
                  </div>
                  
                  <h3className ="text-2 xlfont-boldtext-whitemb-4group-hover:text-cyan-400transition-colors"  />{service.title}
                  </h3>
                  
                  <pclassName ="text-gray-300mb-6leading-relaxed" />
                    {service.description}
                  </p>

                  <ulclassName ="space-y-2mb-6" />
                    {service.features.map((feature, featureIndex) => (
                      <likey ="{featureIndex}" className="flexitems-centertext-smtext-gray-300" />
                        <Check Circleclass Name="w-4 h-4 text-green-400mr-2flex-shrink-0" / />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className ="flex items-centerjustify-betweenmb-6" />
                    <spanclassName ="text-2 xlfont-boldtext-cyan-400"  >{service.price}</span>
                    <Link to ="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1inline-flexitems-center" />
                      Learn More <Arrow Rightclass Name="w-4h-4ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <sectionclassName ="py-20 bg-gradient-to-rfrom-slate-800/30to-slate-900/30" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xl font-boldtext-whitemb-6" />
                Our <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  >Process</span>
              </h2>
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
                A proven methodology that ensures successful mobile app development and deployment
              </p>
            </div>

            <div className ="grid grid-cols-1md:grid-cols-5gap-8" />
              {process.map((step, index) => (
                <divkey ="{index}" className="text-centergroup" />
                  <div className ="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-fullflex items-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300" />
                    <spanclassName ="text-2 xlfont-boldtext-cyan-400"  >{step.step}</span>
                  </div>
                  <h3className ="text-xlfont-boldtext-whitemb-4"  >{step.title}</h3>
                  <pclassName ="text-gray-300text-smleading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xl font-boldtext-whitemb-6" />
                Why Choose <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  >Zion Tech Group</span>?
              </h2>
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
                We deliver exceptional mobile solutions through expertise, innovation, and commitment to quality
              </p>
            </div>

            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              <div className ="text-centergroup" />
                <div className ="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300" />
                  <Zapclass Name ="w-10h-10text-cyan-400" / />
                </div>
                <h3className ="text-2 xl font-boldtext-whitemb-4"  >Fast Development</h3>
                <pclassName ="text-gray-300leading-relaxed" />
                  Rapid development cycles with agile methodologies and modern tools for faster time-to-market.
                </p>
              </div>

              <div className ="text-centergroup" />
                <div className ="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300" />
                  <Usersclass Name ="w-10h-10text-purple-400" / />
                </div>
                <h3className ="text-2 xl font-boldtext-whitemb-4"  >Expert Team</h3>
                <pclassName ="text-gray-300leading-relaxed" />
                  Certified mobile developers with years of experience in iOS, Android, and cross-platform development.
                </p>
              </div>

              <div className ="text-centergroup" />
                <div className ="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300" />
                  <Awardclass Name ="w-10h-10text-green-400" / />
                </div>
                <h3className ="text-2 xl font-boldtext-whitemb-4"  >Quality Assurance</h3>
                <pclassName ="text-gray-300leading-relaxed" />
                  Comprehensive testing and quality assurance to ensure your app works flawlessly across all devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center" />
              <h2className ="text-4 xl font-boldtext-whitemb-6"  />Ready to Build Your Mobile App?
              </h2>
              <pclassName ="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" />
                Let's discuss your mobile app idea and create a solution that engages your users and drives business growth.
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
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

export default Mobile Development Page;
