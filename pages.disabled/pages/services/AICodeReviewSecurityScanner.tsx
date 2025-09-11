    {

              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400'>
                Security Scanner'
              </span>''
            </h1>'''
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
              Protect your applications with AI-powered code security scanning that detects 

                <ArrowRight className='ml-2 w-5 h-5'  />              </motion.button>
            </div>
          </motion.div>
        </div>'
      </section>'{/* Vulnerability Types Section */}'
      <section className='py-16 px-4 sm: px-6 l,
    g:px-8 bg-gray-800/30>''
        <div className='max-w-7xl mx-auto'>
          <motion.div 
            initial = {
  { opacit,
    y: 0,
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
  y: 20 
  ,
    y: 20}}
            whileInView = {
  { opacity: 1,
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
  y: 0}}

            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our AI scanner detects all major types of security vulnerabilities with
              industry-leading accuracy and minimal false positives.

            {vulnerabilityTypes.map((vulnType, index
              <motion.div 

                key={index}
                initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
  y: 20 

                    <vulnType.icon className='w-6 h-6 text-white' />
                  </div>''
                  <div>'''
                    <h3 className='text-xl font-semibold text-white mb-2'>{vulnType.title}</h3>'''
                    <p className='text-gray-300 mb-3'>{vulnType.description}</p>'
                  </div>''
                </div>'''
                <div className='space-y-2>''
                  <h4 className='text-sm font-semibold text-green-400 mb-2'>Prevention Methods:</h4>'''
                  <ul className='space-y-1>{vulnType.examples.map((example, idx) => ('''
                      <li key={idx} className='flex items-center text-sm text-gray-400>''
                        <Minus className='w-3 h-3 text-green-400 mr-2 flex-shrink-0'  />                        {example}

                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our platform combines cutting-edge AI with comprehensive security analysis to deliver
              accurate vulnerability detection and actionable remediation guidance.

              <motion.div 
                key={index}
                initial = {
  { opacity: 0,
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
  y: 20 
  ,
    y: 20}}
                whileInView = {
  { opacity: 1,
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
  y: 0 
  ,
    y: 0}}
                transition = {
  { duration: 0.6,
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
  delay: index * 0.1}} 
                className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300>'
                <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4>'
                  <feature.icon className='w-6 h-6 text-white' />

                </div>''
                <h3 className='text-xl font-semibold text-white mb-3'>{feature.title}</h3>''
                <p className='text-gray-300 mb-4'>{feature.description}</p>''
                <ul className='space-y-2>
                  {feature.benefits.map((benefit, idx) => (''
                    <li key={idx} className='flex items-center text-sm text-gray-400> 
  delay: index * 0.1 '}} 
                className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300>'
                <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4>''
                  <feature.icon className='w-6 h-6 text-white' />'
                </div>'''
                <h3 className='text-xl font-semibold text-white mb-3'>{feature.title}</h3>'''
                <p className='text-gray-300 mb-4'>{feature.description}</p>'''
                <ul className='space-y-2>{feature.benefits.map((benefit, idx) => ('''
                    <li key={idx} className='flex items-center text-sm text-gray-400>''
                      <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0'  />                      {benefit}

                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>


              <motion.div 
                key={inde,x}
                initial: = {
  { opacity:  ,0,
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
  y: 20 

:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
  delay: index: * 0.,1}}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
<:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 

                    <span className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium'>
                      Most Popular
                    </span>
                  </div>
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx)}
<:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx'
                <div className='text-center mb-6>
                  <h3 className='text-2xl font-bold text-white mb-2'>{plan.name}</h3>'
                  <div className='flex items-baseline justify-center>
                    <span className='text-4xl font-bold text-white'>{plan.price}</span>

                ''
                <div className='text-center mb-6>'
                  <h3 className='text-2xl font-bold text-white mb-2'>{plan.name}</h3>''
                  <div className='flex items-baseline justify-center>'
                    <span className='text-4xl font-bold text-white'>{plan.price}</span>''

                      <CheckCircle className='w-5 h-5 text-green-400 mr-3 flex-shrink-0'  />                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button'
                  whileHover={{ scale: 1.02 }}`;`
                  whileTap={{ scale: 0.98 }}``;`
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${`
' 
                    plan.popular'' 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover: from-green-600 hove,
    r:to-emerald-600'''`;`
                      : 'bg-gray-700 text-white hove,
    r:bg-gray-600'``}`}

                >{plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>

            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our AI Code Review Security Scanner integrates seamlessly with your existing
              development tools and workflows to ensure security at every stage.

              <motion.div 
                key={index}
                initial = {
  { opacity: 0,
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
  y: 20 
  ,
    y: 20}}
                whileInView = {
  { opacity: 1,
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 
  y: 0 
  ,
    y: 0}}
                transition = {
  { duration: 0.6,
:pages.disabled/pages/services/AICodeReviewSecurityScanner.tsx 

                    <useCase.icon className='w-6 h-6 text-white' />
                  </div>''
                  <div>'''
                    <h3 className='text-xl font-semibold text-white mb-2'>{useCase.title}</h3>'''
                    <p className='text-gray-300'>{useCase.description}</p>'
                  </div>''
                </div>'''
                <ul className='space-y-2>{useCase.benefits.map((benefit, idx) => ('''
                    <li key={idx} className='flex items-center text-sm text-gray-400>''
                      <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0'  />                      {benefit}

                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

                <ArrowRight className='ml-2 w-5 h-5'  />              </motion.button>

            </div>
          </motion.div>
        </div>
      </section>


