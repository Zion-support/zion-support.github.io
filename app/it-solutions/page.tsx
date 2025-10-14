import React  from "react";
import { Helmet }   from "react-helmet-async";
    {",
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity solutions to protect your digital assets and data.",
      icon: ShieldCheckIcon,
      features: [,

        "Threat detection",
        "Vulnerability assessment",
        "Security monitoring",
        "Incident response",
        "Compliance management",
        "Security training"],

    {,

title: "IT Consulting"}
      description: "Strategic IT consulting to help you make informed technology decisions.",
      icon: LightBulbIcon,
      features: [,

        "Technology assessment",
        "Strategic planning",
        "Vendor selection",
        "Implementation guidance",
        "Change management",
        "Training and support"],

    {,

title: "Network Solutions"}
      description: "Advanced networking solutions for reliable and secure connectivity.",
      icon: GlobeAltIcon,
      features: [,

        "Network design",
        "Security implementation",
        "Performance optimization",
        "Monitoring and maintenance",
        "Disaster recovery",
        "Remote access"],

    {,

title: "Data Management"}
      description: "Comprehensive data management solutions for storage, processing, and analytics.",
      icon: ChartBarIcon,
      features: [,

        "Data storage",
        "Data processing",
        "Analytics and reporting",
        "Data security",
        "Backup and recovery",
        "Data governance"],

      icon: UserGroupIcon,
      features: [,

        "24/7 support",
        "Remote assistance",
        "System maintenance",
        "Software updates",
        "Hardware support",
        "User training"],

  ];,
const features = [,

  {,

title: "Expert Solutions"}
}
      description: "Our team of certified professionals delivers cutting-edge IT solutions.",
      icon: CpuChipIcon,
    },
    {,

title: "Scalable Architecture"}
      description: "Solutions that grow with your business and adapt to changing needs.",
      icon: CloudIcon,
    },
    {,

title: "24/7 Support"}
      description: "Round-the-clock support to ensure your systems are always running.",
      icon: UserGroupIcon,
    }];,
import React from 'react';';,
import { Helmet } from 'react-helmet-async';';,
import React from 'react';';,
import { Helmet } from 'react-helmet-async';',

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>Home - Zion Tech Group</title><meta name="description" content="Home - Zion Tech Group" /></Helmet>
              Our IT Solutions,
            </h2>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8"></div>)
              {solutions.map((solution, index) => (

                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover: shadow-lg transition-shadow"></div>
    </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}></div>`,
                    <solution.icon className="w-6 h-6 text-white" /></solution.icon>
                  </div>
    </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="mb-4"><p className="text-blue-600 font-semibold">{solution.price}</p>
                  </div>
    </div>
                  <Link, 

                    to={ solution.href }
                    className="text-blue-600 hover: text-blue-700 font-medium flex items-center"
                  ></Link>
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" /></ArrowRightIcon>
                  </Link>
                </div>)
              ))
            </div>
    </div>
          </div>
    </div>
        </section>

    </section>
        {/* Features Section */}

              Why Choose Our IT Solutions?,
            </h2>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
    </div>
              {features.map((feature, index) => (

                <div key={index} className="text-center"></div>
    </div>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4"><feature.icon className="w-8 h-8 text-white" /></feature.icon>
                  </div>
    </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>)
              ))
            </div>
    </div>
          </div>
    </div>
        </section>

    </section>
        {/* CTA Section */}

              Let's discuss how our IT solutions can help you achieve your business goals.',
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"><Link",
                to="/contact",
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover: bg-blue-700 transition-colors"
              ></Link",
>
                Contact Us,
              </Link>
              <Link,
                to="/demo",
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover: bg-blue-50 transition-colors"
              ></Link,
>
                Schedule Demo,
              </Link>
            </div>
    </div>
          </div>
    </div>
        </section>

    </section>
      </div>
    </div>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud migration, cybersecurity, database management, and more. Expert IT services for modern businesses."  />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud migration, cybersecurity, database management, IT support, network security" /></Helmet>
      {/* Hero Section */}

              IT Solutions,
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed"></p>
              Comprehensive IT solutions to power your business infrastructure,
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto"></p>
              From infrastructure management to cybersecurity, our expert IT solutions, 
              ensure your technology infrastructure is secure, scalable, and optimized for performance.,
            </p>
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* IT Services Grid */}

            {itServices.map((service, index) => {;,
const Icon = service.icon;,
              return (<div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark"><div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}></div>`",
                    <Icon className="w-8 h-8 text-white" /></Icon>
                  </div>
    </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed"></p>
                    { service.description }

                  </p>

                  {/* Pricing */}
                  <div className="mb-6"><span className="text-3xl font-bold text-green-400">{service.price}</span>
                  </div>

    </div>
                  {/* Features */}
)
                      {service.features.map((feature, featureIndex) => (

                        <li key={featureIndex} className="flex items-center text-gray-300"></li>
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /></CheckCircleIcon>
                          <span className="text-sm">{feature}</span>
                        </li>)
                      ))
                    </ul>
                  </div>

    </div>
                  {/* Benefits */}

                        </span>
                      ))
                    </div>
    </div>
                  </div>

    </div>
                  {/* Use Cases */}

                        </span>
                      ))
                    </div>
    </div>
                  </div>
    </div>
                  <div className="flex gap-2"><Link",
                      to={ service.href }
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover: text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hover:bg-purple-400/10"
                    ></Link",
>
                      Learn More <ArrowRightIcon className="w-4 h-4" /></ArrowRightIcon>
                    </Link>
                    <Link,
                      to="/contact"",
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover: from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
                    ></Link,
>
                      Get Started,
                    </Link>
                  </div>
    </div>
                </div>
    </div>
              )
            }
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* Why Choose Our IT Solutions */}

              Why Choose Our IT Solutions?,
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Expert IT services backed by years of experience and cutting-edge technology,
            </p>
          </div>
    </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"><div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"><ServerIcon className="w-10 h-10 text-white" /></ServerIcon>
              </div>
    </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300"></p>
                Certified IT professionals with extensive experience in enterprise infrastructure and cloud technologies.,
              </p>
            </div>
    </div>
            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
    </div>
                <ClockIcon className="w-10 h-10 text-white" /></ClockIcon>
              </div>
    </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300"></p>
                Round-the-clock monitoring and support to ensure your IT infrastructure runs smoothly at all times.,
              </p>
            </div>
    </div>
            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
    </div>
                <ShieldCheckIcon className="w-10 h-10 text-white" /></ShieldCheckIcon>
              </div>
    </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300"></p>
                Bank-level security measures and compliance standards to protect your critical business data.,
              </p>
            </div>
    </div>
            <div className="text-center"><div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
    </div>
                <CogIcon className="w-10 h-10 text-white" /></CogIcon>
              </div>
    </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300"></p>
                Flexible IT solutions that grow with your business and adapt to changing requirements.,
              </p>
            </div>
    </div>
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* IT Implementation Process */}

              Our IT Implementation Process,
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              A systematic approach to delivering reliable and efficient IT solutions,
            </p>
          </div>
    </div>
          <div className="grid md: grid-cols-4 gap-8 max-w-6xl mx-auto"><div className="text-center"><div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-white font-bold text-xl">1</span>
              </div>
    </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment & Planning</h3>
              <p className="text-gray-300"></p>
                We assess your current IT infrastructure and develop a comprehensive implementation plan.,
              </p>
            </div>
    </div>
            <div className="text-center"><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
    </div>
                <span className="text-white font-bold text-xl">2</span>
              </div>
    </div>
              <h3 className="text-xl font-bold text-white mb-4">Design & Configuration</h3>
              <p className="text-gray-300"></p>
                We design and configure your IT solutions according to best practices and your requirements.,
              </p>
            </div>
    </div>
            <div className="text-center"><div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
    </div>
                <span className="text-white font-bold text-xl">3</span>
              </div>
    </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation & Testing</h3>
              <p className="text-gray-300"></p>
                We implement the solutions and conduct thorough testing to ensure everything works perfectly.,
              </p>
            </div>
    </div>
            <div className="text-center"><div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
    </div>
                <span className="text-white font-bold text-xl">4</span>
              </div>
    </div>
              <h3 className="text-xl font-bold text-white mb-4">Monitoring & Support</h3>
              <p className="text-gray-300"></p>
                We provide ongoing monitoring, maintenance, and support to keep your systems running optimally.,
              </p>
            </div>
    </div>
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* CTA Section */}

              Let's discuss how our IT solutions can enhance your business operations and security',
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-12"><Link",
                to="/contact"",
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              ></Link",
>
                Get Free IT Consultation,
                <ArrowRightIcon className="w-5 h-5" /></ArrowRightIcon>
              </Link>
              <Link,
                to="/demo"",
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover: bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              ></Link,
>
                Schedule IT Demo,
                <ArrowRightIcon className="w-5 h-5" /></ArrowRightIcon>
              </Link>
            </div>
    </div>
            <div className="flex flex-col sm: flex-row gap-8 justify-center items-center text-gray-300"><div className="flex items-center gap-3"></div>
    </div>
                <PhoneIcon className="w-6 h-6 text-purple-400" /></PhoneIcon>
                <span>+1-302-464-0950</span>
              </div>
    </div>
              <div className="flex items-center gap-3"><EnvelopeIcon className="w-6 h-6 text-purple-400" /></EnvelopeIcon>
                <span>kleber@ziontechgroup.com</span>
              </div>
    </div>
            </div>
    </div>
          </div>
    </div>
        </div>
    </div>
      </section>
    </section>
    </>

}}}}}}}}
