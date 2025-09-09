import: {}
  Activity,
  Heart,
  Shield,
  Users,
  Check,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  Zap,
  Brain,
  Clock,

            AI Healthcare Analytics Platform'</h1>''          <p className='text-zion-slate-light text-xl'>
            Transform healthcare delivery with AI-powered analytics, predictive
            insights, and clinical decision support.
          </p>
        </div>



                </li>
              ))}
            </ul>


                </li>
              ))}
            </ul>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {useCases.map(useCase => ('
              <div'key={useCase}                className='p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm>'
                <Activity className='w-6 h-6 text-zion-cyan mb-3'  />''
                <div className='text-zion-slate-dark font-semibold'>


                  {useCase}
                </div>              </div>
            ))}
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {healthcareSolutions.map(solution => ('
              <div'key={solution.specialty}                className='bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md>'
                <h3 className='text-xl font-semibold text-zion-slate-dark mb-4>
:pages.disabled/pages/services/AIHealthcareAnalytics.tsx{solution.specialty}
                </h3>'''
                <ul className='space-y-2'>
                  {solution.solutions.map(sol => ('
                    <li'key={sol}                      className='flex items-start text-sm text-zion-slate-dark>'
                      <Check className='w-4 h-4 text-zion-cyan mr-2 mt-0.5'  />                      {sol}


                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {tiers.map(tier => ('
              <div'key={tier.name}                className='bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md>'
                <div className='text-lg font-semibold mb-1'>{tier.name}</div>'''
                <div className='text-2xl font-bold text-zion-cyan mb-2>
:pages.disabled/pages/services/AIHealthcareAnalytics.tsx{tier.price}</div>''                <ul className='text-sm text-zion-slate-dark space-y-1'>

                  {tier.details.map(detail => (

                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

                <div className='flex flex-wrap gap-2'>
                  {technicalSpecs.technology.map(tech => ('
                    <span';
                      key={tech};
                      className='px-3 py-1 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm'>                      {tech}


                    </span>
                  ))}
                </div>


                    </span>
                  ))}
                </div>


                    </div>
                  ))}
                </div>


                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

            <a'';
              href='mailto:kleber@ziontechgroup.com'';
              className='inline-flex items-center px-5 py-3 border border-zion-cyan text-zion-cyan rounded-lg'>              <Mail className='w-4 h-4 mr-2'  /> kleber@ziontechgroup.com'
            </a>''
          </div>'''
          <div className='mt-4><a''              href='http,
    s://ziontechgroup.com'';
              target='_blank'';
              rel='noreferrer'';
              className='inline-flex items-center text-zion-cyan hove,
    r:text-zion-cyan-dark>'
              Learn More <ExternalLink className='w-4 h-4 ml-2'  />            </a>


          </div>
        </div>
      </section>
    </div>


