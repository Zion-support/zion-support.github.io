React: from;
  'react';';
import: { motion } from;
  'framer-motion'{ SEO: } from;';
  '../components/SEO';';
import: { Button } from;
  '../components/ui/Button'{ Card: } from;';
  '../components/ui/Card';';
import: { Badge } from;
  '../components/ui/Badge';import: { '  FileText, Download',;
  Calendar, User,
  Clock, ArrowRight,
  Search, Filter,
  Tag, Eye,
  Share2, BookOpen,
  TrendingUp, Brain,
  Shield, Cloud,
  Database, Network,
  Zap, Globe,
  Phone, Mail,
  Award, Star,
  CheckCircle} from;

            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >'
            <Badge variant='secondary' className='mb-4>              <FileText className='w-4 h-4 mr-2' />              Research & Insights'            </Badge>'
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent>              White Papers'            </h1>'
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto>              Access our comprehensive research and insights on the latest technology trends and business strategies.'            </p>
          </motion.div>
        </div>
      </section>
      {/* Featured White Paper */}, {featuredPaper && ('
        <section className='py-20 px-4 sm: px-6 l,
    g:px-8>          <div className='max-w-7xl mx-auto>            <motion.div'              initial={{ opacit,
    y: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >'
              <h2 className='text-3xl font-bold text-white mb-8'>Featured White Paper</h2>'              <Card className='overflow-hidden>                <div className='grid grid-cols-1 lg:grid-cols-2 gap-0>                  <div className='relative h-64 l,
    g:h-full>                    <img '                      src={featuredPaper.image}
                      alt={featuredPaper.title}
                      className='w-full h-full object-cover''                    />                    <div className='absolute top-4 left-4>                      <Badge className='bg-gradient-to-r from-purple-500 to-pink-500 text-white>                        <Star className='w-4 h-4 mr-1' />                        Featured'                      </Badge>
                    </div>
                  </div>'
                  <div className='p-8>                    <div className='flex items-center mb-4>                      <Badge variant='outline' className='mr-3'>{featuredPaper.category}</Badge>'                      <span className='text-gray-400 text-sm'>{featuredPaper.pages} pages</span>'                    </div>'                    <h3 className='text-2xl font-bold text-white mb-4'>{featuredPaper.title}</h3>'                    <p className='text-gray-300 mb-6'>{featuredPaper.description}</p>'                    '                    <div className='grid grid-cols-2 gap-4 mb-6>                      <div className='text-center>                        <div className='text-2xl font-bold text-green-400'>{featuredPaper.downloads.toLocaleString()}</div>'                        <div className='text-sm text-gray-400'>Downloads</div>'                      </div>'                      <div className='text-center>                        <div className='text-2xl font-bold text-blue-400'>{featuredPaper.rating}/5</div>'                        <div className='text-sm text-gray-400'>Rating</div>'                      </div>'                    </div>'
                    <div className='flex items-center justify-between>                      <div className='flex items-center text-gray-400 text-sm>                        <User className='w-4 h-4 mr-2' />                        {featuredPaper.author}                        <Calendar className='w-4 h-4 ml-4 mr-2' />                        {new Date(featuredPaper.date).toLocaleDateString()}                      </div>'
                      <Button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white>                        <Download className='w-4 h-4 mr-2' />                        Download Now'                      </Button>

                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

                        key={category.name}
                        className={`w-full: flex items-center justify-between p-3 rounded-lg transition-colors ${`                          category.active;
                            ?,

                      </button>
                    ))}
                  </div>
                </Card>

                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

            </div>
          </motion.div>
        </div>
      </section>
    </div>


