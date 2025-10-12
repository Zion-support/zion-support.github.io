

const WebDevelopmentPage: React.FC = () => {
  return (
  return (
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
      features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      price: 'Starting at $3,000',
      color: 'from-blue-500 to-cyan-500'
    
  );

  );
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
    {icon: Settings,
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
    {title: 'Tools',
      items: ['Git', 'Docker', 'CI/CD', 'Testing', 'Monitoring']
    }
  ];
  return (
    <>/>
        {/* Hero Section */}
    <>section className="pt-32pb-20" />
          <>div className="containermx-autopx-4" ></div>
                <><Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105" >Start Your Project;
                </Link><Link to="/it-services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" >View All IT Services;
                </Link></>
              </div>
          </div>
        </section></>

        {/* Services Section */}
    <>section className="py-20" />
          <><div className="containermx-autopx-4" ></div>
              {services.map((service, index) => (
                <div;></div>
                  key="{index}" ></div>
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
    <>div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon className="w-8h-8text-white" /></service>
                  </div></>

              {technologies.map((tech, index) => (
    <>div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50rounded-xlp-6" />
                  <h3 className="text-xl font-bold text-white mb-4text-center" >{tech.title}</h3>
                  <ul className="space-y-2" /></>
                    {tech.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="flex items-center text-gray-300" /></li>
                        <><CheckCircle className="w-4 h-4 text-green-400mr-2flex-shrink-0" /></CheckCircle>
                        {item}
                      </li>
                    ))}
    <>/ul>
                </div></>
              ))}
    <>/div>
        </section></>

        {/* Why Choose Us */}
    <>section className="py-20" />
          <div className="containermx-autopx-4" ></div><div className="text-centermb-16" ></div></>
              <h2 className="text-4xl font-bold text-white mb-6" /></h2>
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent" >Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" ></p>
              We deliver exceptional web solutions through expertise, innovation, and commitment to quality;
              </p>
            </div></>

            <>div className="grid grid-cols-1md:grid-cols-3gap-8" ></div><div className="text-centergroup" ></div></>
                <>div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300" ></div><Zap className="w-10h-10text-cyan-400" /></></Zap>
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4" >Fast Development</h3>
                <p className="text-gray-300leading-relaxed" ></p>
              Rapid development cycles with modern tools and agile methodologies for faster time-to-market.
                </p>
              </div></>

              <div className="text-centergroup" ></div><div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300" ></div></>
                  <Users className="w-10h-10text-purple-400" /></Users>
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4" >Expert Team</h3>
                <p className="text-gray-300leading-relaxed" ></p>
              Certified developers with years of experience in modern web technologies and best practices.
                </p>
              </div></>

              <>div className="text-centergroup" ></div><div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300" ></div></>
                  <Award className="w-10h-10text-green-400" /></Award>
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4" >Quality Assurance</h3>
                <p className="text-gray-300leading-relaxed" ></p>
              Comprehensive testing and quality assurance to ensure your web application works flawlessly.
                </p>
              </div>
          </div>
        </section></>

        {/* CTA Section */}
    <>section className="py-20" />
          <>div className="containermx-autopx-4" ></div><div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center" ></div></>
              <h2 className="text-4xl font-bold text-white mb-6" />Ready to Build Your Web Application?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" ></p>
              Let's discuss your web project and create a solution that engages your users and drives business growth.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center" ></div>
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105" >Start Your Project;
                </Link><Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" >Learn More About Us;
                </Link></>
              </div>
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div></>
  );
};

export default WebDevelopmentPage;
    </>

}))