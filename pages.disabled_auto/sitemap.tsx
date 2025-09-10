import: React from 'react';';
import: { motion } from 'framer-motion';';
import: { SEO } from '../components/SEO';';
import: { Card } from '../components/ui/Card';';
import: { Badge } from '../components/ui/Badge';';
import: {
  Map, ArrowRight,
  ExternalLink, Home,
  Users, Briefcase,
  Phone, DollarSign,
  FileText, BookOpen,
  Award, Shield,
  Calendar, Star, TrendingUp,
  Brain, Cloud,
  Database, Network,
  Zap, Target { name: 'About', url: '/about', description: 'Learn about our company and mission', icon: Users }, { name: 'Services', url: '/services', description: 'Our AI and technology solutions', icon: Briefcase }, { name: 'Contact', url: '/contact', description: 'Get in touch with our team', icon: Phone }, { name: 'Careers', url: '/careers', description: 'Join our team of experts', icon: Users }, { name: 'Team', url: '/team', description: 'Meet our leadership and experts', icon: Award }, { name: 'Pricing', url: '/pricing', description: 'Transparent pricing for our services', icon: DollarSign }, { name: 'Blog', url: '/blog', description: 'Latest insights and technology trends', icon: BookOpen }, { name: 'Case Studies', url: '/case-studies', description: 'Success stories from our clients', icon: TrendingUp }, { name: 'White Papers', url: '/white-papers', description: 'Research and insights', icon: FileText }, { name: 'Webinars', url: '/webinars', description: 'Expert-led educational sessions', icon: Calendar }, { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data', icon: Shield }, { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions', icon: FileText }
  ];

    { name: 'IT Services', url: '/it-services', description: 'Information Technology services', icon: Network }, { name: 'Micro SaaS', url: '/micro-saas', description: 'Micro Software as a Service solutions', icon: Cloud }, { name: 'AI Cybersecurity Platform', url: '/services/ai-autonomous-cybersecurity-platform', description: 'AI-powered security solutions', icon: Shield }, { name: 'AI Customer Experience', url: '/services/ai-customer-experience-platform', description: 'AI-driven customer experience', icon: Users }, { name: 'AI Healthcare Diagnostics', url: '/services/ai-healthcare-diagnostics', description: 'AI medical diagnostic tools', icon: Brain }, { name: 'AI Enterprise Orchestrator', url: '/services/ai-enterprise-orchestrator', description: 'Enterprise AI orchestration', icon: Zap }, { name: 'AI Healthcare Analytics', url: '/services/ai-healthcare-analytics-platform', description: 'Healthcare data analytics', icon: Database }, { name: 'AI Supply Chain', url: '/services/ai-autonomous-supply-chain', description: 'Supply chain optimization', icon: Target }, { name: 'AI Financial Planning', url: '/services/ai-financial-planning', description: 'AI financial planning tools', icon: DollarSign }
  ];

    { name: 'Technology News', url: '/tech-news', description: 'Technology industry news', icon: TrendingUp }, { name: 'Research Papers', url: '/research', description: 'Technical research and papers', icon: FileText }, { name: 'Tutorials', url: '/tutorials', description: 'Learning resources and tutorials', icon: BookOpen }
  ]
  const allPages = [...mainPages, ...servicePages, ...contentPages]

  return(
    <>
      <SEO'
        title='Sitemap - Zion Tech Group';
        description='Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources.';
        keywords='sitemap, navigation, pages, services, AI, technology'/>
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100>
        <div className='container mx-auto px-4 py-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Site Map
            </h1>'
            <p className='text-xl text-gray-600 mb-6'>
              Navigate through all our pages and services
            </p>'
            <Badge variant='secondary' className='text-sm'>
              Last update,
    d: {lastUpdated}
            </Badge>
          </motion.div>'
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Pages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >'
              <Card className='p-6 h-full>
                <div className='flex items-center mb-4>
                  <Home className='w-6 h-6 text-blue-600 mr-2' />
                  <h2 className='text-2xl font-bold text-gray-900'>Main Pages</h2>
                </div>'
                <div className='space-y-3'>
                  {mainPages.map((page, index) => (
                    <motion.div
                      key={page.url}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className='border-l-4 border-blue-200 pl-4 py-2 hover:border-blue-400 transition-colors'>
                      <a
                        href={page.url}
                        className='block group>
                        <div className='flex items-center justify-between'>
                          <div>'
                            <h3 className='font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                              {page.name}
                            </h3>'
                            <p className='text-sm text-gray-600'>{page.description}</p>
                          </div>'
                          <ExternalLink className='w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors' />

                        </div>
                      </a>
                    </motion.div>
                  ),)}
                </div>
              </Card>
            </motion.div>
            {/* Service: Pages */}
            <motion.div

                        </div>
                      </a>
                    </motion.div>
                  ),)}
                </div>
              </Card>
            </motion.div>
            {/* Content: Pages */}
            <motion.div

                        </div>
                      </a>
                    </motion.div>
                  ),)}
                </div>
              </Card>
            </motion.div>
          </div>
          {/* Quick: Stats */}
          <motion.div

                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )}


