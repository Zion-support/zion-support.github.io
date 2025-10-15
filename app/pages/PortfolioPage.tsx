import SEOHead from '../components/SEOHead';

<<<<<<< HEAD
const PortfolioPage: React.FC = () => {}
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe };
    { id: 'ai', name: 'AI Solutions', icon: };
    { id: 'saas', name: 'Micro SAAS', icon: };
    { id: 'web', name: 'Web Development', icon: Globe };
    { id: 'mobile', name: 'Mobile Apps', icon: };
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud };
  ],
      const projects = [
    {},
      id: 1,
      title: 'AI Healthcare Analytics Platform',
      description: 'Comprehensive AI-powered platform for medical data analysis and patient care optimization.',
      category: 'ai',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'PostgreSQL'],
      features: [
        'Real-time medical data processing';
        'AI-powered diagnosis assistance';
        'Patient risk assessment';
        'Predictive analytics for treatment outcomes'
      ],
      results: [
        '40% reduction in diagnostic time';
        '95% accuracy in image analysis';
        '60% improvement in patient satisfaction'
      ],
      client: 'MedTech Solutions',
      duration: '6 months',
      team: '8 developers',
      liveUrl: 'https://demo.ziontechgroup.com/healthcare-ai',
      githubUrl: 'https://github.com/ziontechgroup/healthcare-ai',
      testimonial: {},
      text: 'Zion Tech Group transformed our healthcare operations with their AI platform. The results exceeded our expectations.',
      author: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer'
      }
    },
    {}
    {},
      id: 2,
      title: 'E-commerce Personalization Engine',
      description: 'AI-driven recommendation system that increased conversion rates and customer engagement.',
      category: 'ai',
      image: '/api/placeholder/600/400',
      technologies: ['Machine Learning', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
      features: [
        'Real-time product recommendations';
        'Customer behavior analysis';
        'Dynamic pricing optimization';
        'Personalized marketing campaigns'
      ],
      results: [
        '35% increase in conversion rates';
        '50% improvement in customer engagement';
        '25% boost in average order value'
      ],
      client: 'RetailMax',
      duration: '4 months',
      team: '6 developers',
      liveUrl: 'https://demo.ziontechgroup.com/ecommerce-ai',
      githubUrl: 'https://github.com/ziontechgroup/ecommerce-ai',
      testimonial: {},
      text: 'The AI recommendation engine has revolutionized our online sales. Highly recommended!',
      author: 'Michael Chen',
      role: 'VP of Technology'
      }
    },
    {}
    {},
      id: 3,
      title: 'Project Management SAAS',
      description: 'Comprehensive project management platform with AI-powered insights and automation.',
      category: 'saas',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      features: [
        'Smart task assignment';
        'Progress prediction';
        'Resource optimization';
        'Automated reporting'
      ],
      results: [
        '30% improvement in project delivery time';
        '25% reduction in project costs';
        '90% user satisfaction rate'
      ],
      client: 'TechStart Inc',
      duration: '5 months',
      team: '7 developers',
      liveUrl: 'https://demo.ziontechgroup.com/project-management',
      githubUrl: 'https://github.com/ziontechgroup/project-management',
      testimonial: {},
      text: 'This platform has streamlined our project management processes significantly.',
      author: 'Emily Rodriguez',
      role: 'Project Director'
      }
    },
    {}
    {},
      id: 4,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with advanced features and biometric authentication.',
      category: 'mobile',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      features: [
        'Biometric authentication';
        'Real-time transactions';
        'AI fraud detection';
        'Personal finance insights'
      ],
      results: [
        '50% increase in mobile banking usage';
        '99.9% uptime';
        'Zero security incidents'
      ],
      client: 'SecureBank',
      duration: '8 months',
      team: '10 developers',
      liveUrl: 'https://demo.ziontechgroup.com/mobile-banking',
      githubUrl: 'https://github.com/ziontechgroup/mobile-banking',
      testimonial: {},
      text: 'The mobile banking app has transformed our customer experience. Excellent work!',
      author: 'David Kim',
      role: 'Chief Technology Officer'
      }
    },
    {}
    {},
      id: 5,
      title: 'Cloud Infrastructure Migration',
      description: 'Complete cloud migration and optimization for a large enterprise client.',
      category: 'cloud',
      image: '/api/placeholder/600/400',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python'],
      features: [
        'Zero-downtime migration';
        'Auto-scaling infrastructure';
        'Cost optimization';
        'Enhanced security'
      ],
      results: [
        '40% reduction in infrastructure costs';
        '99.9% uptime';
        '50% faster deployment times'
      ],
      client: 'Enterprise Corp',
      duration: '3 months',
      team: '12 developers',
      liveUrl: 'https://demo.ziontechgroup.com/cloud-migration',
      githubUrl: 'https://github.com/ziontechgroup/cloud-migration',
      testimonial: {},
      text: 'The cloud migration was seamless and the results speak for themselves.',
      author: 'Lisa Wang',
      role: 'IT Director'
      }
    },
    {}
    {},
      id: 6,
      title: 'Data Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with advanced analytics and visualization.',
      category: 'web',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
      features: [
        'Real-time data visualization';
        'Custom dashboard creation';
        'Predictive analytics';
        'Automated reporting'
      ],
      results: [
        '60% faster decision making';
        '80% reduction in manual reporting';
        '95% data accuracy'
      ],
      client: 'DataCorp',
      duration: '4 months',
      team: '5 developers',
      liveUrl: 'https://demo.ziontechgroup.com/analytics-dashboard',
      githubUrl: 'https://github.com/ziontechgroup/analytics-dashboard',
      testimonial: {},
      text: 'The analytics dashboard has given us unprecedented insights into our business.',
      author: 'Robert Smith',
      role: 'Chief Data Officer'
      }
    },
    {}
  ],
      const filteredProjects = projects.filter(project => {},)
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory,
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()),
      return matchesCategory && matchesSearch;
  }),
      const stats = [
    { number: '100+', label: 'Projects Completed' };
    { number: '500+', label: 'Happy Clients' };
    { number: '99.9%', label: 'Client Satisfaction' };
    { number: '24/7', label: 'Support Available' };
  ],
      return ()
    <>{}</>
      <Helmet></Helmet>
        <title>Portfolio - Zion Tech Group | Our Work & Success Stories</title>
        <meta name="description" content="Explore our portfolio of successful AI and IT projects. See how we've helped businesses transform with cutting-edge technology solutions." />'
        <meta name="keywords" content="portfolio, projects, case studies, AI solutions, web development, mobile apps, cloud solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/portfolio" />
      </Helmet>

      {/* Hero Section */};
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></section>
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
=======
const PortfolioPage: React.FC = () => {
  return (
    <>
      <SEOHead title =" Portfolio Page - Zion Tech Group"";
        description="Zion Tech Group  Portfolio Page service page"";
      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4"> Portfolio Page</h1>";
          <p className ="text-gray-300">Coming soon...</p>";
>>>>>>> main
        </div>
      </div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>
                {' '}Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Discover our successful projects and see how we've helped businesses transform '
              with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <>
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              ></>
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
              <>
                to="/solutions"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              ></>
                <Rocket className="w-5 h-5 mr-2" />
                View Solutions
              </>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */};
      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            {stats.map((stat) => ()}
              <div key={index} className="text-center"></div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* and Search */};
      <section className="py-12 bg-gradient-to-br from-slate-900 to-purple-900"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            {/* Search */};
            <div className="relative flex-1 max-w-md"></div>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <inputtype="text">
                placeholder="Search projects..."
                value={searchTerm},
      onChange={(e) => setSearchTerm(e.target.value)},
      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category */};
            <div className="flex flex-wrap gap-2"></div>
              {categories.map((category) => ()}
                <buttonkey={category.id},>
      onClick={() => setSelectedCategory(category.id)},
      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${},
      selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`};
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name};
                </button>
              ))};
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */};
      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            {filteredProjects.map((project) => ()}
              <div key={project.id} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"></div>
                {/* Project Image */};
                <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
        <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                      <className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2"></div>
                    <ahref={project.liveUrl},>
      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    ></a
>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                    <ahref={project.githubUrl},>
      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    ></a
>
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */};
                <div className="p-6">
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"></span>
                      {categories.find(cat => cat.id === project.category)?.name};
                    </span>
                    <div className="flex items-center text-yellow-400"></div>
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">5.0</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Technologies */};
                  <div className="mb-4"></div>
                    <h4 className="text-white font-medium mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2"></div>
                      {project.technologies.map((tech) => ()}
                        <span key={index} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs"></span>
                          {tech};
                        </span>
                      ))};
                    </div>
                  </div>

                  {/* Key Results */};
                  <div className="mb-6"></div>
                    <h4 className="text-white font-medium mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1"></ul>
                      {project.results.slice(0, 2).map((result) => ()}
                        <li key={index} className="flex items-center text-green-400 text-sm"></li>
                          <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                          {result};
                        </li>
                      ))};
                    </ul>
                  </div>

                  {/* Project Info */};
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4"></div>
                    <span>Client: {project.client}</span>
                    <span>{project.duration}</span>
                  </div>

                  {/* Testimonial */};
                  <div className="bg-slate-600/30 p-4 rounded-lg mb-4"></div>
                    <p className="text-gray-300 text-sm italic mb-2">"{project.testimonial.text}"</p>
                    <div className="flex items-center">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                        <span className="text-white text-xs font-bold"></span>
                          {project.testimonial.author.split(' ').map(n => n[0]).join('')};
                        </span>
                      </div>
                      <div></div>
                        <div className="text-white text-sm font-medium">{project.testimonial.author}</div>
                        <div className="text-gray-400 text-xs">{project.testimonial.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */};
                  <div className="flex space-x-3"></div>
                    <ahref={project.liveUrl},>
      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center text-sm flex items-center justify-center"
                    ></a
>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                    <ahref={project.githubUrl},>
      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-slate-600 hover:border-cyan-400 text-gray-300 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center text-sm flex items-center justify-center"
                    ></a
>
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))};
          </div>

          {filteredProjects.length === 0 && ()}
            <div className="text-center py-12">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )};
        </div>
      </section>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600"></section>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"></p>
            Join our portfolio of successful projects and transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <>
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            ></>
              <Target className="w-5 h-5 mr-2" />
              Start Your Project
            </>
            <>
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            ></>
              <Rocket className="w-5 h-5 mr-2" />
              View Our Services
            </>
          </div>
        </div>
      </section>

    </>
  ),
};

export default PortfolioPage;