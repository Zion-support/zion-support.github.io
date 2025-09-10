:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
<:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
import: React from 'react.ts';' 
import: { motion   } from 'framer-motion.ts';' 
import: { Link   } from 'react-router-dom.ts';' 
import: { Brain,
  Database,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
= 
import: { Brain,
  Database,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
>  Zap,
  Shield,
  TrendingUp,
  Globe,
  ArrowRight,
  Target,
  PieChart,
  Activity'} from 'lucide-react.ts'}']],
      popular: fals,e}
  ]},

:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx]

        <div className='container mx-auto px-4 relative z-10'>

          <motion.div 
            initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  y: 30 

                <ArrowRight className='ml-2 w-5 h-5'  />'
              </Link>'              <button className='inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-2xl hove,
    r:bg-zion-cyan hove,
    r:text-white transition-all duration-300'>
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>'
      </section>'{/* Features Section */}'
      <section className='py-20>''
        <div className='container mx-auto px-4'>

          <motion.div 
            initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  y: 30 


              <motion.div 
                key={index}
                initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  y: 20 

                </div>''
                <h3 className='text-xl font-bold text-white mb-4'>{feature.title}</h3>' 
  delay: index * 0.1 '}} 
                className='bg-zion-slate-dark/50 backdrop-blur-lg border border-zion-slate/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300>'
                <div className='w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6>''
                  <feature.icon className='w-8 h-8 text-white' />'
                </div>'''
                <h3 className='text-xl font-bold text-white mb-4'>{feature.title}</h3>'''
                <p className='text-zion-slate-light leading-relaxed'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>'
      </section>'{/* Services & Pricing */}'
      <section className='py-20 bg-zion-slate-dark/30>''
        <div className='container mx-auto px-4'>

          <motion.div 
            initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  y: 30 

          <div className='grid grid-cols-1 md: anygrid-cols-3 gap-8 max-w-6xl mx-auto'>
            {services.map(servic,
    e: unknown, index: unknown() 

              <motion.div 
                key={inde,x}
                initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  y: 20 

                    <span className='bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold'>
                      Most Popular
                    </span>
                  </div>
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx)}
<:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx'
                <div className='text-center mb-8>
                  <h3 className='text-2xl font-bold text-white mb-4'>{service.name}</h3>'
                  <div className='flex items-baseline justify-center>
                    <span className='text-4xl font-bold text-zion-cyan'>{service.price}</span>

                ''
                <div className='text-center mb-8>'
                  <h3 className='text-2xl font-bold text-white mb-4'>{service.name}</h3>''
                  <div className='flex items-baseline justify-center>'
                    <span className='text-4xl font-bold text-zion-cyan'>{service.price}</span>'>                )} 
                '''
                <div className='text-center mb-8>''
                  <h3 className='text-2xl font-bold text-white mb-4'>{service.name}</h3>'''
                  <div className='flex items-baseline justify-center>''
                    <span className='text-4xl font-bold text-zion-cyan'>{service.price}</span>'''
                    <span className='text-zion-slate-light ml-1'>{service.period}</span>

                      <CheckCircle className='w-5 h-5 text-zion-cyan mr-3 flex-shrink-0'  />                      {feature}
                    </li>
                  ))}
                </ul>''
                <Link''`;`
                  to='/contact'``;`
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${`
' 
                    service.popular'' 

                  <ArrowRight className='ml-2 w-4 h-4'  />                </Link>
              </motion.div>
            ))}
          </div>
        </div>'
      </section>'{/* Use Cases */}'
      <section className='py-20>''
        <div className='container mx-auto px-4'>

          <motion.div 
            initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  y: 30 

          <div className='grid grid-cols-1 lg: anygrid-cols-2 gap-8'>
            {useCases.map(useCas,
    e: unknown, index: unknown
              <motion.div 
                key={index}
                initial = {
  { opacity: 0,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  x: index % 2 === 0 ? -20 : 20 
  ,
    x: index % 2 === 0 ? -20 : 20}}
                whileInView = {
  { opacity: 1,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  x: 0 
  ,
    x: 0}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.6,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 

                </div>''
                <p className='text-zion-slate-light mb-6 leading-relaxed'>{useCase.description}</p>''
                <div className='space-y-2>
                  {useCase.benefits.map((benefit, benefitIndex) => (''
                    <div key={benefitIndex} className='flex items-center text-zion-slate-light> 
  delay: index * 0.1 '}} 
                className='bg-zion-slate-dark/50 backdrop-blur-lg border border-zion-slate/30 rounded-2xl p-8>'
                <div className='flex items-center mb-6>''
                  <Target className='w-8 h-8 text-zion-cyan mr-3'  />                  <h3 className='text-2xl font-bold text-white'>{useCase.industry}</h3>''
                </div>'''
                <p className='text-zion-slate-light mb-6 leading-relaxed'>{useCase.description}</p>'''
                <div className='space-y-2>{useCase.benefits.map((benefit, benefitIndex) => ('''
                    <div key={benefitIndex} className='flex items-center text-zion-slate-light>''
                      <TrendingUp className='w-4 h-4 text-zion-cyan mr-3 flex-shrink-0'  />                      {benefit}

                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  y: 30 

          <div className='grid grid-cols-2 md: anygrid-cols-4 gap-6 max-w-4xl mx-auto'>
            {technologies.map(tec,
    h: unknown, index: unknown() 

              <motion.div 
                key={inde,x}
                initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  scale: 0.8 

                  <Activity className='w-6 h-6 text-white'  />'
                </div>'                <p className='text-white font-medium'>{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>'
      </section>'{/* CTA Section */}'
      <section className='py-20>''
        <div className='container mx-auto px-4'>

          <motion.div 
            initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AIEnterpriseResourcePlanning.tsx 
  y: 30 

                  <ArrowRight className='ml-2 w-5 h-5'  />'
                </Link>'                <button className='inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-2xl hove,
    r:bg-zion-cyan hove,
    r:text-white transition-all duration-300'>
                  Book a Consultation

                </button>
              </div>
            </div>
          </motion.div>

          </p>
        </div>
      </section>


