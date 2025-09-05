import Link from 'next/link',
import Head from 'next/head',
import { useState, useEffect } from 'react',
import { ContactInfo } from '../types',
import ErrorBoundary from '../components/ErrorBoundary',
import LoadingSpinner from '../components/LoadingSpinner',
export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false),
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100),
    return () => clearTimeout(timer)
  }, []),

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  },

  const serviceCategories = [
    {
      title: 'Micro SaaS Products',
      description: 'Innovative, focused software solutions for modern businesses',
      count: '150+',
      color: 'blue',
      services: [
        'AI-Powered Video Clip MakerSmart Contract AnalyzerCybersecurity Threat IntelligenceMulti-Language Website Translator',
        'Predictive Inventory OptimizerReal-Time Analytics DashboardAutomated Customer SupportBlockchain Transaction Monitor'
      ],
      href: '/micro-saas'
    },
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions for enterprise needs',
      count: '100+',
      color: 'purple',
      services: [
        'Autonomous AI AgentsAI-Powered Financial TradingAI Legal Document AnalysisAI-Powered Voice Analytics',
        'AI-Powered Search & DiscoveryMachine Learning Model TrainingNatural Language ProcessingComputer Vision Solutions'
      ],
      href: '/ai-services'
    },
    {
      title: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions for enterprise-grade operations',
      count: '100+',
      color: 'green',
      services: [
        'Quantum Computing ConsultingBlockchain & Web3 SolutionsDevSecOps & Security AutomationEnterprise Data Platform',
        'High-Performance ComputingCloud Migration ServicesInfrastructure as CodeDisaster Recovery Solutions'
      ],
      href: '/it-services'
    }
  ],
  const _getColorClasses = (_color: string) => {_const _colors = {
      blue: {
        bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        text: 'text-blue-400',
        border: 'border-blue-500/40',
        ring: 'focus:ring-blue-500'
      },
      purple: {
        bg: 'bg-purple-600',
        hover: 'hover:bg-purple-700',
        text: 'text-purple-400',
        border: 'border-purple-500/40',
        ring: 'focus:ring-purple-500'
      },
      green: {
        bg: 'bg-green-600',
        hover: 'hover:bg-green-700',
        text: 'text-green-400',
        border: 'border-green-500/40',
        ring: 'focus:ring-green-500'
      }
    },
    return colors[color as keyof typeof colors] || colors.blue
  },
  return (_<>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; />
        <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
        <link rel=&quot;canonical&quot; href={`${contact.site}/services`} />
      </Head>
      
      <ErrorBoundary level=&quot;page&quot;>
        <main className=&quot;min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
          {/* Hero Section */}
          <section className=&quot;py-20 px-4 text-center&quot; role=&quot;banner&quot;>
            <div className=&quot;max-w-4xl mx-auto&quot;>              <h1 
                className={_`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Our Services
              </h1>
              <p className={_`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                350+ Innovative Solutions for Modern Businesses
              </p>
              <p className={_`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                From cutting-edge AI services to comprehensive IT solutions and specialized micro SaaS products, _we provide everything your business needs to thrive in the digital age.
              </p>
            </div>
          </section>

          {/* Service Categories */}
          <section className=&quot;py-16 px-4&quot; role=&quot;main&quot;>
            <div className=&quot;max-w-7xl mx-auto&quot;>
              <div className=&quot;grid lg:grid-cols-3 gap-8&quot;>
                {serviceCategories.map((category, index) => {
                  const colors = getColorClasses(category.color),
                  return (
                    <div                       key={category.title}
                      className={_`p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-${category.color}-500/40 transition-all duration-300 hover:scale-105 ${_isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={_{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className=&quot;flex items-center justify-between mb-6&quot;>
                        <h3 className={`text-2xl font-bold ${colors.text}`}>
                          {category.title}                        </h3>
                        <span className={_`text-3xl font-bold ${colors.text}`}>
                          {_category.count}
                        </span>
                      </div>
                      
                      <p className=&quot;text-slate-300 mb-6&quot;>
                        {category.description}
                      </p>
                      
                      <ul className=&quot;text-slate-400 space-y-2 mb-8&quot;>
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className=&quot;flex items-center&quot;>
                            <span className=&quot;w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0&quot;></span>
                            {service}                          </li>
                        ))}
                      </ul>
                      
                      <Link 
                        href={_category.href}
                        className={_`inline-flex items-center px-6 py-3 ${colors.bg} ${_colors.hover} rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 ${_colors.ring} focus:ring-offset-2 focus:ring-offset-slate-900`}
                      >
                        View All {category.title}
                        <svg className=&quot;ml-2 w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                          <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />                        </svg>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className=&quot;py-16 px-4 bg-slate-900/40&quot;>
            <div className=&quot;max-w-6xl mx-auto&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-center mb-12&quot;>
                Why Choose Zion Tech Group?
              </h2>
              
              <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>Lightning Fast</h3>
                  <p className=&quot;text-slate-400&quot;>Rapid deployment and implementation of solutions</p>
                </div>
                
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z&quot; />                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>Enterprise Grade</h3>
                  <p className=&quot;text-slate-400&quot;>Scalable solutions for businesses of all sizes</p>
                </div>
                
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z&quot; />                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>Secure & Reliable</h3>
                  <p className=&quot;text-slate-400&quot;>Bank-level security and 99.9% uptime guarantee</p>
                </div>
                
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z&quot; />                    </svg>
                  </div>
                  <h3 className=&quot;text-xl font-bold mb-2&quot;>24/7 Support</h3>
                  <p className=&quot;text-slate-400&quot;>Round-the-clock technical support and maintenance</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className=&quot;py-16 px-4&quot;>
            <div className=&quot;max-w-4xl mx-auto text-center&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-8&quot;>                Ready to Get Started?
              </h2>
              <p className=&quot;text-lg text-slate-300 mb-8&quot;>
                Contact our experts today to discuss your project requirements and discover 
                how our innovative solutions can transform your business.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
                <Link 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors&quot;
                >
                  Get a Quote
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className=&quot;px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors&quot;
                >
                  Call {contact.phone}
                </Link>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"                  href={_`tel:${contact.phone.replace(/[^\d+]/g, _'')}`} 
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Call {_contact.phone}
                </a>
                <a 
                  href={_`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </Link>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  )
}