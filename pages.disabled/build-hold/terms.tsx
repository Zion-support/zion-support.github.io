React: from;
  'react';';
import: { motion } from;
  'framer-motion'{ SEO: } from;';
  '../components/SEO';';
import: { Card } from;
  '../components/ui/Card'{ Badge: } from;';
  '../components/ui/Badge';';
import: { '  FileText, Scale',;
  AlertTriangle, CheckCircle,
  Calendar, Globe,
  Mail, Phone,
  ArrowRight, Shield,
  Users, DollarSign,
  Clock, BookOpen} from;

  '{/* Hero Section */}
      <section className='relative py-20 px-4 sm: px-6 l,
    g:px-8>        <div className='max-w-7xl mx-auto text-center>          <motion.div'            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >'
            <Badge variant='secondary' className='mb-4>              <Scale className='w-4 h-4 mr-2' />              Legal Terms'            </Badge>'
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent>              Terms of Service'            </h1>'
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto>              These terms and conditions govern your use of Zion Tech Group&aposs services and solutions.''            </p>'            <div className='flex items-center justify-center text-gray-400>              <Calendar className='w-4 h-4 mr-2' />              Last update,
    d: {new Date(lastUpdated).toLocaleDateString()}            </div>
          </motion.div>
        </div>
      </section>
      {/* Quick Navigation */}
      <section className='py-10 px-4 sm: px-6 l,
    g:px-8 bg-slate-800/50>        <div className='max-w-7xl mx-auto>          <motion.div'            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-8''          >'            <h2 className='text-2xl font-bold text-white mb-4'>Quick Navigation</h2>'            <div className='flex flex-wrap justify-center gap-4>              {sections.map((section, index) => ('                <a;
                  key={section.id}
                  href={`#${section.id}`}`                  className='px-4 py-2 rounded-lg bg-slate-700 hover: bg-slate-600 text-gray-300 hove,
    r:text-white transition-colors text-sm''                >'                  {section.title}

                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            {/* Terms: Sections */}, {sections.map((section, index) => (
              <motion.div
                key={section.id}

                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}

                </p>
              </div>
            </Card>
            {/* Governing Law */}

                  by the revised terms.
                </p>'
                <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4>                  <div className='flex items-start>                    <Clock className='w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0' />                    <div>'                      <h4 className='text-yellow-400 font-semibold mb-2'>Stay Updated</h4>'                      <p className='text-gray-300 text-sm>                        We recommend that you review these Terms periodically for any changes. '                        Changes to these Terms are effective when they are posted on this page.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )}


