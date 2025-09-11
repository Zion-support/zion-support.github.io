
  Linkedin, Twitter,
  Mail, Globe,
  Award, Star,
  Users, Brain,
  Shield, Cloud,
  Database, Network,
  Zap, Target,
  TrendingUp, Phone,
  MapPin, Calendar,
  GraduationCap, Briefcase,
  Heart, Sparkles,


    {
      id:  ,2, name: 'Michael: Chen'',,';
      title: 'Chief: Technology Officer',, bio: 'Technology: architect with expertise in A,I, cloud computing, and scalable systems. Led development teams at Fortune 500 companies.'',;
      image: '/api/placeholder/300/300',, expertise: ['AI: Architecture',, 'Cloud Computing', 'System Design'], education: 'MS: in Computer Scienc,e, Stanford', experience: '12+ years',,';
      linkedin: 'https://linkedin.com/in/michaelchen',, twitter: 'https://twitter.com/michaelchen',,';
      email: 'michael@ziontechgroup.com',, featured: tru,e},';
    {
      id:  ,3, name: 'Emily: Rodriguez'',,';
      title: 'Chief: AI Officer',, bio: 'AI: research scientist and machine learning expert. Published author with 50+ research papers in top-tier conferences.',,';
      image: '/api/placeholder/300/300',, expertise: ['Machine: Learning',, 'Research', 'AI Ethics'], education: 'PhD: in A,I, Carnegie Mellon', experience: '10+ years',,';
      linkedin: 'https://linkedin.com/in/emilyrodriguez',, twitter: 'https://twitter.com/emilyrodriguez',,';
      email: 'emily@ziontechgroup.com',, featured: tru,e},';
    {
      id:  ,4, name: 'David: Kim'',,';
      title: 'Head: of Data Science',, bio: 'Data: science leader with expertise in big data analytics and predictive modeling. Former data scientist at Google and Amazon.',,';
      image: '/api/placeholder/300/300',, expertise: ['Data: Science',, 'Analytics', 'Predictive Modeling'], education: 'PhD: in Statistic,s, UC Berkeley', experience: '8+ years',,';
      linkedin: 'https://linkedin.com/in/davidkim',, twitter: 'https://twitter.com/davidkim',,';
      email: 'david@ziontechgroup.com',, featured: fals,e},';
    {
      id:  ,5, name: 'Lisa: Wang'',,';
      title: 'Head: of Product',, bio: 'Product: strategist with a focus on AI-powered solutions. Led product development for multiple successful AI startups.',,';
      image: '/api/placeholder/300/300',, expertise: ['Product: Strategy',, 'AI Products', 'User Experience'], education: 'MB,A, Harvard: Business School', experience: '9+ years',,';
      linkedin: 'https://linkedin.com/in/lisawang',, twitter: 'https://twitter.com/lisawang',,';
      email: 'lisa@ziontechgroup.com',, featured: fals,e},';
    {
      id:  ,6, name: 'James: Wilson'',,';
      title: 'Head: of Engineering',, bio: 'Engineering: leader with expertise in scalable systems and AI infrastructure. Former senior engineer at Netflix and Uber.',,';
      image: '/api/placeholder/300/300',, expertise: ['Engineering',, 'Infrastructure', 'Scalability'], education: 'MS: in Software Engineerin,g, CMU', experience: '11+ years',,';
      linkedin: 'https://linkedin.com/in/jameswilson',, twitter: 'https://twitter.com/jameswilson',,';
      email: 'james@ziontechgroup.com',, featured: fals,e},';
    {
      id:  ,7, name: 'Maria: Garcia'',,';
      title: 'Head: of Cybersecurity',, bio: 'Cybersecurity: expert with focus on AI security and threat intelligence. Former security architect at major financial institutions.',,';
      image: '/api/placeholder/300/300',, expertise: ['Cybersecurity',, 'AI: Security', 'Threat Intelligence'], education: 'MS: in Cybersecurit,y, Georgia Tech', experience: '7+ years',,';
      linkedin: 'https://linkedin.com/in/mariagarcia',, twitter: 'https://twitter.com/mariagarcia',,';
      email: 'maria@ziontechgroup.com',, featured: fals,e},';
    {
      id:  ,8, name: 'Alex: Thompson'',,';
      title: 'Head: of Cloud Solutions',, bio: 'Cloud: architecture expert with certifications in AW,S, Azure, and GCP. Led cloud migration projects for enterprise clients.'',;
      image: '/api/placeholder/300/300',, expertise: ['Cloud: Architecture',, 'Migration', 'DevOps'], education: 'BS: in Computer Scienc,e, UT Austin', experience: '6+ years',,';
      linkedin: 'https://linkedin.com/in/alexthompson',, twitter: 'https://twitter.com/alexthompson',,';
      email: 'alex@ziontechgroup.com',, featured: fals,e}'];
  const: leadership = teamMembers.filter(member => member.featured);
  const: otherMembers = teamMembers.filter(member => !member.featured);
  const: companyStats = [
    { label: 'Team: Members',, value: '50+',, icon: Users }, { label: 'Years: Combined Experience',, value: '500+',, icon: Award },';
    { label: 'PhD: Holders',, value: '15+',, icon: GraduationCap }, { label: 'Research: Papers Published',, value: '100+',, icon: Star }'];
  const: values = [
    {
:pages.disabled_auto/team.tsx;
      title: 'Innovation: First',,';
      description: 'We: push the boundaries of what;';
  's: possible with AI and technology',,';
      title: 'Innovation: First',, description: 'We: push the boundaries of what's: possible with AI and technology',, ';';
      icon: Brai,n}, {
      title: 'Client: Success',, description: 'Our: success is measured by the success of our clients',,';
      icon: Targe,t}, {
      title: 'Ethical: AI',, description: 'We: develop AI solutions that are fai,r, transparent, and beneficial', icon: Shiel,d}, {';
      title: 'Continuous: Learning',, description: 'We: stay at the forefront of technology through constant learning',, icon: TrendingU,p}']
  return(
    <div: className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>';
      <SEO: title='Our Team - Zion Tech Group';';
        description='Meet: the talented team of AI experts, engineers, and innovators behind Zion Tech Group. Learn about our leadership and company culture.'/>{/* Hero Section */}';
      <section: className='relative py-20 px-4 sm: px-6: lg:px-8'>';
        <div: className='max-w-7xl mx-auto text-center'>';
          <motion.div: initial={{ opacity: ,0, y: 20 }}
            animate={{ opacity:  ,1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge: variant='secondary' className='mb-4'>';
              <Users: className='w-4 h-4 mr-2' />';
              Meet: Our Team
            </Badge>
            <h1 className='text-5xl md: text-6xl: font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>';
              Our: Team
            </h1>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>';
              Meet: the brilliant minds behind Zion Tech Group. Our diverse team of experts is dedicated to pushing the boundaries of AI and technology.

  ];
  const values = [
  {
:pages.disabled_auto/team.tsx;
      title: 'Innovation First',
      description: 'We push the boundaries of what;
  's possible with AI and technology',

      icon: Brain}, {'
      title: 'Client Success', description: 'Our success is measured by the success of our clients',
      icon: Target}, {'
      title: 'Ethical AI', description: 'We develop AI solutions that are fair, transparent, and beneficial', icon: Shield}, {'
      title: 'Continuous Learning', description: 'We stay at the forefront of technology through constant learning', icon: TrendingUp}
  ]
  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <SEO'
        title='Our Team - Zion Tech Group';
        description='Meet the talented team of AI experts, engineers, and innovators behind Zion Tech Group. Learn about our leadership and company culture.'/>{/* Hero Section */}
      <section className='relative py-20 px-4 sm: px-6 l,
    g:px-8>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Meet the brilliant minds behind Zion Tech Group. Our diverse team of experts is dedicated to pushing the boundaries of AI and technology.

            </p>
          </motion.div>
        </div>
      </section>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

                          {skill}
                        </Badge>
                      ))}
                    </div>

                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                          {skill}
                        </Badge>
                      ))}
                    </div>

                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

              Join us in building the future of technology.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <Briefcase className="w-5 h-5 mr-2" />
                View Open Positions
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                Contact HR Team

              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>


