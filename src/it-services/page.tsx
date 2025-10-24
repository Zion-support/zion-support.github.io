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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16"></section>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              IT Services & Infrastructure
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to support and optimize your business infrastructure.
            From cloud migration to cybersecurity, we keep your technology running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Get Free IT Assessment
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              (302) 464-0950
            </a>
          </div>
        </section>
        {/* Main Services Grid */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="text-cyan-400 mb-4"></div>
                  {React.isValidElement(service.icon) ? service.icon :
                   typeof service.icon === 'function' ? React.createElement(service.icon as any, { className: "w-8 h-8" }) :
                   <div className="w-8 h-8 bg-cyan-400 rounded" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="mb-4"></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4"></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4"></div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                </div>
                <div className="mb-4"></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1"></div>
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-cyan-400 hover:opacity-80 transition-opacity"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Additional Services */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300"></div>
                <div className="flex items-center mb-3"></div>
                  <service.icon className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                <div className="text-cyan-400 font-bold text-sm">{service.price}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Support Tiers */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6"></div>
              <h3 className="text-xl font-bold text-white mb-4">Basic Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Business hours support
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Remote assistance
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Basic monitoring
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Get Started
              </a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500"></div>
              <h3 className="text-xl font-bold text-white mb-4">Professional Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$499/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 support
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  On-site visits
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Advanced monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Priority response
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Get Started
              </a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6"></div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Dedicated team
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom SLAs
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Proactive monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Strategic consulting
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center"></section>
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8"></div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Free IT Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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
