<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

export default function MobileDevelopment() {
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Mobile Development - Zion Tech Group</title>
        <meta const name = "description" content="Professional mobile app development services for iOS, Android, React Native, and Flutter. Native and cross-platform solutions for your business." /  />
        <meta name="keywords" content="mobile app development, iOS development, Android development, React Native, Flutter, mobile apps" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h1 className="w-5 h-5ml-2" />
                Mobile <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Development</span>
              </h1>
              <p className="w-5 h-5ml-2">Create powerful, user-friendly mobile applications for iOS and Android platforms. 
                From native apps to cross-platform solutions, we deliver exceptional mobile experiences.
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
                Our <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Mobile Solutions</span>
              </h2>
              <p className="w-5 h-5ml-2">Comprehensive mobile development services for all platforms and use cases
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

        {/* Process Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Our <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Process</span>
              </h2>
              <p className="w-5 h-5ml-2">A proven methodology that ensures successful mobile app development and deployment
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {process.map((step, index) => (
                <div key="{index}" className="text-centergroup" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="text-2 xlfont-boldtext-cyan-400"  >{step.step}</span>
                  </div>
                  <h3 className="text-xl font-boldtext-white mb-4"  >{step.title}</h3>
                  <p className="text-gray-300text-smleading-relaxed">{step.description}</p>
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
              <p className="w-5 h-5ml-2">We deliver exceptional mobile solutions through expertise, innovation, and commitment to quality
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Zap className="w-5 h-5ml-2" />
                </div>
                <h3 className="text-2 xl font-boldtext-white mb-4"  >Fast Development</h3>
                <p className="w-5 h-5ml-2">Rapid development cycles with agile methodologies and modern tools for faster time-to-market.
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Users className="w-5 h-5ml-2" />
                </div>
                <h3 className="text-2 xl font-boldtext-white mb-4"  >Expert Team</h3>
                <p className="w-5 h-5ml-2">Certified mobile developers with years of experience in iOS, Android, and cross-platform development.
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Award className="w-5 h-5ml-2" />
                </div>
                <h3 className="text-2 xl font-boldtext-white mb-4"  >Quality Assurance</h3>
                <p className="w-5 h-5ml-2">Comprehensive testing and quality assurance to ensure your app works flawlessly across all devices.
                </p>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Ready to Build Your Mobile App?
              </h2>
              <p className="w-5 h-5ml-2">Let's discuss your mobile app idea and create a solution that engages your users and drives business growth.
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

export default MobileDevelopmentPage;
=======
        <title>MobileDevelopment - Zion Tech Group</title>
        <meta name="description" content="Professional mobiledevelopment services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">MobileDevelopment</h1>
            <p className="text-lg text-gray-300 mb-8">Professional mobiledevelopment services coming soon.</p>
            
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
