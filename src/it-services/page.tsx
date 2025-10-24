'use client'
import { ArrowRight, X, Target } from 'lucide-react'
import React from 'react'
import { Smartphone, Server, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Speaker, Battery, Power, Cog, Settings2, ShieldCheck, FileText, Rocket, Lock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'

  ]

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Data', count: itServices.filter(s => s.category === 'Data').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Management', count: itServices.filter(s => s.category === 'Management').length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Communications', count: itServices.filter(s => s.category === 'Communications').length },
    { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
    { name: 'Project Management', count: itServices.filter(s => s.category === 'Project Management').length }
  ]

  constadditionalServices= [
    {icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmap development.',
      price: '$20 0/hour'
   },
    {icon: Server,
      title: 'Server Management',
      description: '2 4/7 server monitoring, maintenance, and optimization.',
      price: 'Starting at $29 9/month'
   },
    {icon: HardDrive,
      title: 'Data Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning.',
      price: 'Starting at $19 9/month'
   },
    {icon: Monitor,
      title: 'System Integration',
      description: 'API development and system integration services.',
      price: 'Starting at $1,50 0/project'
   },
    {icon: Printer,
      title: 'Hardware Support',
      description: 'Computer, printer, and network equipment support.',
      price: 'Starting at $9 9/month'
   },
    {icon: Router,
      title: 'Network Security',
      description: 'Firewall configuration and network security implementation.',
      price: 'Starting at $399/month'
    }
  ]

  constbenefits= [
    {icon: Star,
      title: 'Proven Expertise',
      description: '1 0+ years of experience with100+ successful projects'
   },
    {icon: Clock,
      title: '2 4/7 Support',
      description: 'Round-the-clock technical support and monitoring'
   },
    {icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions'
   },
    {icon: Award,
      title: 'Certified Professionals',
      description: 'Microsoft, AWS, and Google certified engineers'
    }
  ]

const Page = () => {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Navigation />
      <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
        {/* Hero Section */}
        <section className=&quot;text-center mb-16&quot;></section>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;></h1>
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent&quot;>
              IT Services & Infrastructure
            </span>
          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
            Comprehensive IT solutions to support and optimize your business infrastructure.
            From cloud migration to cybersecurity, we keep your technology running smoothly.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <a
              href=&quot;/contact&quot;
              className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105&quot;
            >
              Get Free IT Assessment
            </a>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
            >
              (302) 464-0950
            </a>
          </div>
        </section>
        {/* Main Services Grid */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Core IT Services</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            {itServices.map((service, index) => (
              <div key={index} className=&quot;cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300&quot;></div>
                <div className=&quot;text-cyan-400 mb-4&quot;></div>
                  {React.isValidElement(service.icon) ? service.icon :
                   typeof service.icon === 'function' ? React.createElement(service.icon as any, { className: &quot;w-8 h-8&quot; }) :
                   <div className=&quot;w-8 h-8 bg-cyan-400 rounded&quot; />}
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{service.title}</h3>
                <p className=&quot;text-gray-300 mb-4 text-sm&quot;>{service.description}</p>
                <div className=&quot;mb-4&quot;></div>
                  <h4 className=&quot;text-sm font-semibold text-cyan-400 mb-2&quot;>Key Features:</h4>
                  <ul className=&quot;text-sm text-gray-400 space-y-1&quot;>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className=&quot;flex items-center&quot;>
                        <CheckCircle className=&quot;w-3 h-3 text-green-400 mr-2 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=&quot;mb-4&quot;></div>
                  <h4 className=&quot;text-sm font-semibold text-cyan-400 mb-2&quot;>Benefits:</h4>
                  <ul className=&quot;text-sm text-gray-400 space-y-1&quot;>
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center&quot;>
                        <Star className=&quot;w-3 h-3 text-yellow-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=&quot;mb-4&quot;></div>
                  <div className=&quot;text-2xl font-bold text-cyan-400 mb-2&quot;>{service.price}</div>
                </div>
                <div className=&quot;mb-4&quot;></div>
                  <h4 className=&quot;text-sm font-semibold text-cyan-400 mb-2&quot;>Technologies:</h4>
                  <div className=&quot;flex flex-wrap gap-1&quot;></div>
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className=&quot;px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded&quot;>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className=&quot;text-gray-300 mb-4&quot;>{service.description}</p>
                <ul className=&quot;space-y-2 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-400&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className=&quot;text-center&quot;></div>
                  <div className=&quot;text-lg font-bold text-cyan-400 mb-2&quot;>{service.price}</div>
                  <a
                    href=&quot;/contact&quot;
                    className=&quot;inline-flex items-center text-sm font-medium text-cyan-400 hover:opacity-80 transition-opacity&quot;
                  >
                    Learn More <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Additional Services */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Additional IT Services</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;></div>
            {additionalServices.map((service, index) => (
              <div key={index} className=&quot;bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300&quot;></div>
                <div className=&quot;flex items-center mb-3&quot;></div>
                  <service.icon className=&quot;w-6 h-6 text-cyan-400 mr-3&quot; />
                  <h3 className=&quot;text-lg font-bold text-white&quot;>{service.title}</h3>
                </div>
                <p className=&quot;text-gray-300 text-sm mb-3&quot;>{service.description}</p>
                <div className=&quot;text-cyan-400 font-bold text-sm&quot;>{service.price}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Support Tiers */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Support Tiers</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6&quot;></div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Basic Support</h3>
              <div className=&quot;text-3xl font-bold text-cyan-400 mb-4&quot;>$199/month</div>
              <ul className=&quot;space-y-2 mb-6&quot;>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Business hours support
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Remote assistance
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Basic monitoring
                </li>
              </ul>
              <a
                href=&quot;/contact&quot;
                className=&quot;block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors&quot;
              >
                Get Started
              </a>
            </div>
            <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500&quot;></div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Professional Support</h3>
              <div className=&quot;text-3xl font-bold text-cyan-400 mb-4&quot;>$499/month</div>
              <ul className=&quot;space-y-2 mb-6&quot;>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  24/7 support
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  On-site visits
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Advanced monitoring
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Priority response
                </li>
              </ul>
              <a
                href=&quot;/contact&quot;
                className=&quot;block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors&quot;
              >
                Get Started
              </a>
            </div>
            <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6&quot;></div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Enterprise Support</h3>
              <div className=&quot;text-3xl font-bold text-cyan-400 mb-4&quot;>Custom</div>
              <ul className=&quot;space-y-2 mb-6&quot;>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Dedicated team
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Custom SLAs
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Proactive monitoring
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Strategic consulting
                </li>
              </ul>
              <a
                href=&quot;/contact&quot;
                className=&quot;block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors&quot;
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;text-center&quot;></section>
          <div className=&quot;bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Ready to Optimize Your IT Infrastructure?</h2>
            <p className=&quot;text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105&quot;
              >
                Get Free IT Assessment
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
              >
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}

export default Page;
