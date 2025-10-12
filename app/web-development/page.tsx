
const Web Development Page: React.FC = () => {
  constservices = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
      features: ['React/Next.js', 'Type Script', 'Tailwind CSS', 'Responsive Design'],
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
      title: 'Full- Stack Development',
      description: 'Complete web solutions from frontend to backend with seamless integration.',
      features: ['End-to- End Development', 'Database Integration', 'API Development', 'Deployment'],
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
  consttechnologies = [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'Type Script', 'Tailwind CSS', 'Framer Motion']
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
      <Helmet />
        <title>WebDevelopment - ZionTech Group</title>
        <metaconstname = "description" content="Professionalweb developmentservices includingfrontend, backend, full-stack, ande-commercesolutions. Modern, responsive, andscalable webapplications." / / />
        <meta name ="keywords" content="webdevelopment, frontenddevelopment, backenddevelopment, full-stackdevelopment, e-commerce, React, Node.js" / / />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        {/* HeroSection */}
        <sectionclassName ="pt-32pb-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermax-w-4xlmx-auto" />
              <h1className ="text-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
                Web <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >Development</span>
              </h1>
              <pclassName ="text-xltext-gray-300mb-8leading-relaxed" />
                Createpowerful, modernweb applicationsthat engageusers anddrive businessgrowth. 
                Fromsimple websitesto complexweb platforms, wedeliver exceptionaldigital experiences.
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
                Our <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >WebSolutions</span>
              </h2>
              <pclassName ="text-xltext-gray-300 max-w-3xlmx-auto" />
                Comprehensiveweb developmentservices forall yourdigital needs
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

        {/* Technologies Section */}
        <sectionclassName ="py-20 bg-gradient-to-rfrom-slate-800/30to-slate-900/30" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xl font-boldtext-whitemb-6" />
                Technologies <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  >We Use</span>
              </h2>
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
                Modern, proven technologies for building exceptional web applications
              </p>
            </div>

            <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {technologies.map((tech, index) => (
                <divkey ="{index}" className="bg-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-smborder border-gray-700/50rounded-xlp-6" />
                  <h3className ="text-xlfont-boldtext-whitemb-4text-center"  >{tech.title}</h3>
                  <ulclassName ="space-y-2" />
                    {tech.items.map((item, itemIndex) => (
                      <likey ="{itemIndex}" className="flexitems-centertext-gray-300" />
                        <Check Circleclass Name="w-4 h-4 text-green-400mr-2flex-shrink-0" / />
                        {item}
                      </li>
                    ))}
                  </ul>
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
                We deliver exceptional web solutions through expertise, innovation, and commitment to quality
              </p>
            </div>

            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              <div className ="text-centergroup" />
                <div className ="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300" />
                  <Zapclass Name ="w-10h-10text-cyan-400" / />
                </div>
                <h3className ="text-2 xl font-boldtext-whitemb-4"  >Fast Development</h3>
                <pclassName ="text-gray-300leading-relaxed" />
                  Rapid development cycles with modern tools and agile methodologies for faster time-to-market.
                </p>
              </div>

              <div className ="text-centergroup" />
                <div className ="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300" />
                  <Usersclass Name ="w-10h-10text-purple-400" / />
                </div>
                <h3className ="text-2 xl font-boldtext-whitemb-4"  >Expert Team</h3>
                <pclassName ="text-gray-300leading-relaxed" />
                  Certified developers with years of experience in modern web technologies and best practices.
                </p>
              </div>

              <div className ="text-centergroup" />
                <div className ="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300" />
                  <Awardclass Name ="w-10h-10text-green-400" / />
                </div>
                <h3className ="text-2 xl font-boldtext-whitemb-4"  >Quality Assurance</h3>
                <pclassName ="text-gray-300leading-relaxed" />
                  Comprehensive testing and quality assurance to ensure your web application works flawlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center" />
              <h2className ="text-4 xl font-boldtext-whitemb-6"  />Ready to Build Your Web Application?
              </h2>
              <pclassName ="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" />
                Let's discuss your web project and create a solution that engages your users and drives business growth.
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

export default Web Development Page;
