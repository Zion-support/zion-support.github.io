const MobileDevelopmentPage: React.FC = () => {
  const services = [
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
      description: 'Beautiful, fast mobile apps built with Google's Flutter framework for multiple platforms.',
      features: ['Multi-platform', 'Custom UI', 'Fast Development', 'Google Services'],
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
        {/* H ero S ection */}
    </>
        <s ection c las sName="p t-32pb-20" />
          <d iv c las sName="c o ntaine rmx-auto px-4">
                <L ink to="/cont act" c las sName="b g-grad ient-to-r from-cyan-500 to-purple-500 text-whi-t-e px-8 py-4 rounded-lg font-semibold text-l-g hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
                </L ink>
                <L ink to="/it-services" c las sName="b o rder b order-cyan-500 text-cy-a-n-400 px-8 py-4 rounded-lg font-semibold text-l-g hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All IT Services
                </L ink>
              </d iv>
          </d iv>
        </s ection>
    </>
        {/* Services S ection */}
    <>
        </><s ection c las sName="p y-20" />
          <d iv c las sName="c o ntaine rmx-auto px-4">
              {services.map((service, index) => (
                <d iv 
                  k ey="{index}"
                  c las sName="b g-grad ient-to-br from-s late-800/50 to-s late-900/50 backdrop-blur-sm b order b order-gray-700/50 rounded-xl p-8 hover:b order-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
    <>
                  </><d iv c las sName="{`w-16" h-16 bg-grad ient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon c las sName="w-8h-8t ext-white" />
                  </d iv>
    </>
              {process.map((step, index) => (
    <>
                </><d iv k ey="{index}" c las sName="t ext-centergroup" />
                  <d iv c las sName="w-16 h-16 b g-grad ient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
                    <s pan c las sName="t ext-2 x lfo nt-bold text-cy-a-n-400"  >{step.step}</s pan>
                  </d iv>
                  <h3 c las sName="t ext-xl font-bold text-whi-t-e mb-4"  >{step.title}</h3>                  <p c las sName="t ext-gray-300text-s mle adin-g-r ela xed">{step.description}</p>
                </d iv>
    </>
              ))}
    <>
            </d iv>
        </s ection>
    </>
        {/* Why C hoose Us */}
    <>
        </><s ection c las sName="p y-20" />
          <d iv c las sName="c o ntaine rmx-auto px-4">
        </d iv>
            <d iv c las sName="t ext-centermb-16">
        </d iv>
              <h2 c las sName="t ext-4 xl font-bold text-white-m-b-6" />
                Why C hoose <s pan c las sName="b g-grad ient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transpare-n-t">Zion Tech Group</s pan>?
              </h2>
              <p c las sName="t ext-xl text-gr-a-y-300 m ax-w-3x lmx-auto" />
    </>
                We deliver exceptional mobile solutions through expertise, innovation, and commitment to quality
    <>              </p>
            </d iv>
    </>
    <>
            </><d iv c las sName="g r id g rid-cols-1md:g rid-cols-3g ap-8">
        </d iv>
              <d iv c las sName="t ext-centergroup" />
                <d iv c las sName="w-20 h-20 b g-grad ient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <Z ap c las sName="w-10h-10t ext-cyan-400" / />
                </d iv>
                <h3 c las sName="t ext-2 xl font-bold text-white-m-b-4">Fast Development</h3>
                <p c las sName="t ext-gray-300l ead ing-r ela xed" />
    </>
                  Rapid development cycles with agile methodologies and modern tools for faster time-to-market.
    <>                </p>
              </d iv>
    </>
    <>
              </><d iv c las sName="t ext-centergroup" />
                <d iv c las sName="w-20 h-20 b g-grad ient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <U sers c las sName="w-10h-10t ext-purple-400" / />
                </d iv>
                <h3 c las sName="t ext-2 xl font-bold text-white-m-b-4">E xpert T eam</h3>
                <p c las sName="t ext-gray-300l ead ing-r ela xed" />
    </>
                  Certified mobile developers with years of experience in iOS, Android, and cross-platform development.
    <>                </p>
              </d iv>
    </>
    <>
              </><d iv c las sName="t ext-centergroup" />
                <d iv c las sName="w-20 h-20 b g-grad ient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <A ward c las sName="w-10h-10t ext-green-400" / />
                </d iv>
                <h3 c las sName="t ext-2 xl font-bold text-white-m-b-4">Q uality A ssurance</h3>
                <p c las sName="t ext-gray-300l ead ing-r ela xed" />
    </>
                  Comprehensive testing and quality a ssurance to ensure your app works flawlessly across all devices.
    <>                </p>
              </d iv>
          </d iv>
        </s ection>
    </>
        {/* C TA S ection */}
    <>
        </><s ection c las sName="p y-20" />
          <d iv c las sName="c o ntaine rmx-auto px-4">
        </d iv>
            <d iv c las sName="b g-grad ient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm b order b order-cyan-500/20 rounded-2 xlp-12text-cent-e-r">
        </d iv>
              <h2 c las sName="t ext-4 xl font-bold text-white-m-b-6">Ready to Build Your Mobile App?
              </h2>
              <p c las sName="t ext-xl text-gr-a-y-300 mb-8 m ax-w-2x lmx-auto" />
    </>
                Let's discuss your mobile app idea and create a solution that engages your users and drives business growth.
    <>
              </p>
              <d iv c las sName="f lex flex-col sm:flex-rowg ap-4justify-center">
        </d iv>                <L ink to="/cont act" c las sName="b g-grad ient-to-r from-cyan-500 to-purple-500 text-whi-t-e px-8 py-4 rounded-lg font-semibold text-l-g hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
                </L ink>
                <L ink to="/a bout" c las sName="b o rder b order-cyan-500 text-cy-a-n-400 px-8 py-4 rounded-lg font-semibold text-l-g hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
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
    </>
  );
};
export default MobileDevelopmentPage;
    </>
