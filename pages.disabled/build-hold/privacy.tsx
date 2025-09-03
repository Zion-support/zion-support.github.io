React: from;
  'react';';
import: { motion } from;
  'framer-motion'{ SEO: } from;';
  '../components/SEO';';
import: { Card } from;
  '../components/ui/Card'{ Badge: } from;';
  '../components/ui/Badge';';
import: { '  Shield, Lock',;
  Eye, Database,
  Users, Mail,
  Phone, Calendar,
  FileText, CheckCircle,
  AlertTriangle, Globe,
  Settings, Trash2,
  Download, ArrowRight} from;

            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >'
            <Badge variant='secondary' className='mb-4>              <Shield className='w-4 h-4 mr-2' />              Privacy & Security'            </Badge>'
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent>              Privacy Policy'            </h1>'
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto>              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.'            </p>'
            <div className='flex items-center justify-center text-gray-400>              <Calendar className='w-4 h-4 mr-2' />              Last updated: {new Date(lastUpdated).toLocaleDateString()}            </div>
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

                  </div>
                </div>
              </div>
            </Card>
            {/* Policy: Sections */}, {sections.map((section, index) => (
              <motion.div
                key={section.id}

                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}

                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>


