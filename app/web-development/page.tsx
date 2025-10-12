<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

export default function WebDevelopment() {
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Web Development - Zion Tech Group</title>
        <meta const name = "description" content="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern, responsive, and scalable web applications." /  />
        <meta name="keywords" content="web development, frontend development, backend development, full-stack development, e-commerce, React, Node.js" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h1 className="w-5 h-5ml-2" />
                Web <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Development</span>
              </h1>
              <p className="w-5 h-5ml-2">Create powerful, modern web applications that engage users and drive business growth. 
                From simple websites to complex web platforms, we deliver exceptional digital experiences.
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
                </Link>
                <Link to="/it-services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All IT Services
                </Link>
              </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Our <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Web Solutions</span>
              </h2>
              <p className="w-5 h-5ml-2">Comprehensive web development services for all your digital needs
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {services.map((service, index) => (
                <div 
                  key="{index}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
                  <div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon className="w-8h-8text-white"  />
                  </div>
                  
                  <h3 className="w-5 h-5ml-2" />{service.title}
                  </h3>
                  
                  <p className="w-5 h-5ml-2">{service.description}
                  </p>

                  <ul className="w-5 h-5ml-2" />
                    {service.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centertext-sm text-gray-300" />
                        <CheckCircle className="w-5 h-5ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="text-2 xlfont-boldtext-cyan-400"  >{service.price}</span>
                    <Link
          to="/contact"
          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1inline-flex items-center"
        >
          Learn More 
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
                  </div>
              ))}
            </div>
        </section>

        {/* Technologies Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Technologies <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >We Use</span>
              </h2>
              <p className="w-5 h-5ml-2">Modern, proven technologies for building exceptional web applications
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {technologies.map((tech, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50rounded-xlp-6" />
                  <h3 className="text-xl font-bold text-whitemb-4 text-center"  >{tech.title}</h3>
                  <ul className="w-5 h-5ml-2" />
                    {tech.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5ml-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Why Choose <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Zion Tech Group</span>?
              </h2>
              <p className="w-5 h-5ml-2">We deliver exceptional web solutions through expertise, innovation, and commitment to quality
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Zap className="w-5 h-5ml-2" />
                </div>
                <h3 className="text-2 xl font-boldtext-white mb-4"  >Fast Development</h3>
                <p className="w-5 h-5ml-2">Rapid development cycles with modern tools and agile methodologies for faster time-to-market.
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Users className="w-5 h-5ml-2" />
                </div>
                <h3 className="text-2 xl font-boldtext-white mb-4"  >Expert Team</h3>
                <p className="w-5 h-5ml-2">Certified developers with years of experience in modern web technologies and best practices.
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Award className="w-5 h-5ml-2" />
                </div>
                <h3 className="text-2 xl font-boldtext-white mb-4"  >Quality Assurance</h3>
                <p className="w-5 h-5ml-2">Comprehensive testing and quality assurance to ensure your web application works flawlessly.
                </p>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Ready to Build Your Web Application?
              </h2>
              <p className="w-5 h-5ml-2">Let's discuss your web project and create a solution that engages your users and drives business growth.
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
                </Link>
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDevelopmentPage;
=======
        <title>WebDevelopment - Zion Tech Group</title>
        <meta name="description" content="Professional webdevelopment services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">WebDevelopment</h1>
            <p className="text-lg text-gray-300 mb-8">Professional webdevelopment services coming soon.</p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
