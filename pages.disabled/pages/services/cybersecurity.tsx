:pages.disabled/pages/services/cybersecurity.tsx 
:pages.disabled/pages/services/cybersecurity.tsx 
<:pages.disabled/pages/services/cybersecurity.tsx 
import: React from 'react.ts';' 
import: { SEO  } from '../../components/SEO';' 
import: { Shield,
  Brain,
  Zap,
  Users,
  TrendingUp,
  Lock,
= 
import: { Shield,
  Brain,
  Zap,
  Users,
  TrendingUp,
  Lock,
>  Clock,
  BarChart3,
  AlertTriangle,

:pages.disabled/pages/services/cybersecurity.tsx
<:pages.disabled/pages/services/cybersecurity.tsx 
          <motion.div 
= 

            transition={{ duration: 0.6 }}
          >'''
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6>
              Cybersecurity'''
              <span className='block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                Solutions
              </span>'
            </h1>'''
            <p className='text-xl text-slate-300 mb-8 max-w-3xl mx-auto'>

                to='/contact'' 
                className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200'' 
                Get Started'' 
                <ArrowRight className='ml-2 h-5 w-5'  />
              </Link>'''
              <button className='inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hove,
    r:bg-cyan-500 hove,
    r:text-white transition-all duration-200>''
                <Play className='mr-2 h-5 w-5'  />
:pages.disabled/pages/services/cybersecurity.tsx 
                Watch Demo
                Watch Demo
              </button>
            </div>
          </div>
        </div>'
        {/* Background Elements */}'
        <div className='absolute inset-0 -z-10>'
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10'></div>'''
          <div className='absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl'></div>'''
          <div className='absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl'></div>
        </div>
:pages.disabled/pages/services/cybersecurity.tsx'
      </section>'

            <p className='text-xl text-slate-300 max-w-2xl mx-auto'>
              Comprehensive security solutions designed to protect your business from evolving threats
            </p>'
          </div>'''
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {cyberServices.map((service, index
              <div 
                key={index} 
                className='bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover: border-cyan-500/50 transition-all duration-300 hove,
    r:transform hove,
    r:scale-105'' 
'' 

                    <service.icon className='h-8 w-8 text-white' />'
                    <service.icon className='h-8 w-8 text-white' />
                  </div>'''
                  <div className='ml-4>''
                    <h3 className='text-xl font-semibold text-white'>{service.name}</h3>'''
                    <p className='text-slate-400'>{service.description}</p>
:pages.disabled/pages/services/cybersecurity.tsx'
                  </div>''
                </div>'''
                <ul className='space-y-3 mb-6>
                  </div>'
                </div>'''
                <ul className='space-y-3 mb-6>
                  {service.features.map((feature, featureIndex) => ('''
                    <li key={featureIndex} className='flex items-center text-slate-300>''
                      <CheckCircle className='h-5 w-5 text-cyan-400 mr-3 flex-shrink-0'  />                      {feature}
                    </li>'
:pages.disabled/pages/services/cybersecurity.tsx))}
                </ul>'''
                <div className='flex items-center justify-between>'
                  <div>'''
                    <div className='text-2xl font-bold text-cyan-400'>{service.price}</div>'''
                    <div className='text-slate-400 text-sm'>{service.duration}</div>'
                  </div>''
                  <Link'' 
                    to='/contact'' 
                    className='px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-200' 
                    Get Quote))}
                </ul>'''
                <div className='flex items-center justify-between>
                  <div>'''
                    <div className='text-2xl font-bold text-cyan-400'>{service.price}</div>'''
                    <div className='text-slate-400 text-sm'>{service.duration}</div>
                  </div>'
                  <Link'''
                    to='/contact'' 
                    className='px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-200'' 
                    Get Quote 

                  </Link>
                </div>
              </div>
            ),)}
          </div>
        </div>

            <p className='text-xl text-slate-300 max-w-2xl mx-auto'>
              We leverage cutting-edge security tools and technologies to protect your infrastructure'
            </p>''
          </div>'''
          <div className='grid grid-cols-2 md:grid-cols-3 l,
    g:grid-cols-6 gap-8'>
            {securityTechnologies.map(tec,
    h: unknown, index: unknown() 
              <div' 
              Advanced Security Technologies 
            </h2>'''
            <p className='text-xl text-slate-300 max-w-2xl mx-auto'>
              We leverage cutting-edge security tools and technologies to protect your infrastructure
            </p>'
          </div>'''
          <div className='grid grid-cols-2 md:grid-cols-3 l,
    g:grid-cols-6 gap-8'>
            {securityTechnologies.map(tec,
    h: unknown, index: unknown(
              <div 
                key={index} 
                className='text-center p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300'' 
'' 

                  <tech.icon className='h-8 w-8 text-white' />'
                  <tech.icon className='h-8 w-8 text-white' />
                </div>'''
                <h3 className='text-lg font-semibold text-white mb-2'>{tech.name}</h3>'''
                <p className='text-slate-400 text-sm'>{tech.description}</p>

              </div>
            )) 
          </div>
        </div>

              Compliance & Certifications'
            </h2>'''
            <p className='text-xl text-slate-300 max-w-2xl mx-auto'>
              Meet industry standards and regulatory requirements with our compliance solutions
            </p>'

              <div 
                key={index} 
                className='bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300'' 
                <div className={`p-3 bg-gradient-to-r ${framework.color} rounded-lg w-12 h-12 mb-4 flex items-center justify-center`}>'''
                  <framework.icon className='h-6 w-6 text-white' />
                </div>'''
                <h3 className='text-xl font-semibold text-white mb-3'>{framework.name}</h3>'''
                <p className='text-slate-300 text-sm'>{framework.description}</p>

              </div>
            )) 
          </div>
        </div>

              Ready to Secure Your Business?'
            </h2>'''
            <p className='text-xl text-slate-300 mb-8>
              Let's discuss how our cybersecurity solutions can protect your organization'

              <Link'' 
                to='/contact'' 
                className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200'' 
                Schedule Security Assessment'' 
:pages.disabled/pages/services/cybersecurity.tsx 
                <ArrowRight className='ml-2 h-5 w-5'  />              </Link>''
              <Link'' 
                to='/services'' 
                className='inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200' 
                <ArrowRight className='ml-2 h-5 w-5'  />              </Link>'
              <Link'''
                to='/services'' 
                className='inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hove,
    r:bg-cyan-500 hove,
    r:text-white transition-all duration-200''>
                Explore All Services

              </Link>
            </div>
          </div>
        </div>
      </section>

