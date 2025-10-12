const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
      features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      price: 'Starting at $3,000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Robust server-side applications with Node.js, Python, and scalable architectures.',
      features: ['Node.js/Python', 'RESTful APIs', 'Database Design', 'Cloud Integration'],
      price: 'Starting at $4,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend with seamless integration.',
      features: ['End-to-End Development', 'Database Integration', 'API Development', 'Deployment'],
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
        {/* H ero S ection */}
    </>
        <s ection c las sName="p t-32pb-20" />
          <d iv c las sName="c onta ine rmx-a uto px-4">
                <L ink to="/contact" c las sName="b g-grad ient-to-r from-cyan-500 to-purple-500 text-whi-t-e px-8 py-4 rounded-lg font-semibold text-l-g hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
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
          <d iv c las sName="c onta ine rmx-a uto px-4">
              {services.map((service, index) => (
                <d iv 
                  k ey="{index}"
                  c las sName="b g-grad ient-to-br from-s late-800/50 to-s late-900/50 backdrop-blur-sm b order b order-gray-700/50 rounded-xl p-8 hover:b order-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
    <>
                  </><d iv c las sName="{`w-16" h-16 bg-grad ient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon c las sName="w-8h-8t ext-white" />
                  </d iv>
    </>
              {technologies.map((tech, index) => (
    <>
                </><d iv k ey="{index}" c las sName="b g-grad ient-to-br from-s late-800/50 to-s late-900/50 backdrop-blur-sm b order b order-gray-700/50rounded-x lp-6" />
                  <h3 c las sName="t ext-xl font-bold text-whi-t-e mb-4-text-cent-e-r"  >{tech.title}</h3>                  <ul c las sName="s p ace-y-2" />
    </>
                    {tech.items.map((item, itemIndex) => (
    <>
                      </><li k ey="{itemIndex}" c las sName="f lexitems-centertext-gr-a-y-300" />
                        <C hec kCi rcle c las sName="w-4 h-4 t ext-green-400mr-2-flex-s hrink-0" / />
    </>                        {item}
                      </li>
                    ))}
    <>
                  </ul>
                </d iv>
    </>
              ))}
    <>
            </d iv>
        </s ection>
    </>
        {/* Why C hoo se Us */}
    <>
        </><s ection c las sName="p y-20" />
          <d iv c las sName="c onta ine rmx-a uto px-4">
        </d iv>
            <d iv c las sName="t ext-centermb-16">
        </d iv>
              <h2 c las sName="t ext-4 xl font-bold text-white-m-b-6" />
                Why C hoo se <s pan c las sName="b g-grad ient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transpare-n-t">Zion Tech Group</s pan>?
              </h2>
              <p c las sName="t ext-xl text-gr-a-y-300 m ax-w-3x lmx-a uto" />
    </>
                We deliver exceptional web solutions through expe rtise, innovation, and commitment to quality
    <>              </p>
            </d iv>
    </>
    <>
            </><d iv c las sName="g r id g rid-cols-1md:g rid-cols-3g ap-8">
        </d iv>
              <d iv c las sName="t ext-centergroup" />
                <d iv c las sName="w-20 h-20 b g-grad ient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-a uto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <Z ap c las sName="w-10h-10t ext-cyan-400" / />
                </d iv>
                <h3 c las sName="t ext-2 xl font-bold text-white-m-b-4">Fast Development</h3>
                <p c las sName="t ext-gray-300l ead ing-r ela xed" />
    </>
                  Rapid development cycles with modern tools and agile methodologies for faster time-to-market.
    <>                </p>
              </d iv>
    </>
    <>
              </><d iv c las sName="t ext-centergroup" />
                <d iv c las sName="w-20 h-20 b g-grad ient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-a uto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <U sers c las sName="w-10h-10t ext-purple-400" / />
                </d iv>
                <h3 c las sName="t ext-2 xl font-bold text-white-m-b-4">Expe rt T eam</h3>
                <p c las sName="t ext-gray-300l ead ing-r ela xed" />
    </>
                  Certified developers with years of experience in modern web technologies and best prac tices.
    <>                </p>
              </d iv>
    </>
    <>
              </><d iv c las sName="t ext-centergroup" />
                <d iv c las sName="w-20 h-20 b g-grad ient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-a uto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <A ward c las sName="w-10h-10t ext-green-400" / />
                </d iv>
                <h3 c las sName="t ext-2 xl font-bold text-white-m-b-4">Q uality A ssurance</h3>
                <p c las sName="t ext-gray-300l ead ing-r ela xed" />
    </>
                  Comprehensive testing and quality a ssurance to ensure your web application works flawlessly.
    <>                </p>
              </d iv>
          </d iv>
        </s ection>
    </>
        {/* C TA S ection */}
    <>
        </><s ection c las sName="p y-20" />
          <d iv c las sName="c onta ine rmx-a uto px-4">
        </d iv>
            <d iv c las sName="b g-grad ient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm b order b order-cyan-500/20 rounded-2 x lp-12text-cent-e-r">
        </d iv>
              <h2 c las sName="t ext-4 xl font-bold text-white-m-b-6">Ready to Build Your Web Application?
              </h2>
              <p c las sName="t ext-xl text-gr-a-y-300 mb-8 m ax-w-2x lmx-a uto" />
    </>
                Let's discuss your web project and crea te a solution that engages your users and drives busi ness growth.
    <>
              </p>
              <d iv c las sName="f lex flex-col sm:flex-rowg ap-4justify-center">
        </d iv>                <L ink to="/contact" c las sName="b g-grad ient-to-r from-cyan-500 to-purple-500 text-whi-t-e px-8 py-4 rounded-lg font-semibold text-l-g hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
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
export default WebDevelopmentPage;
    </>
