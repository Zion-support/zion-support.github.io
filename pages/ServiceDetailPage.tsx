,
<<<<<<< HEAD
      import { Helmet } from 'react-helmet-async',;"
      import {"};"
        "";"
  CheckCircle,",";"
        "";"
  Star,",";"
        "";"
  Users,",";"
        "";"
  ",";"
        "";"
  // ",";"
        "";"
  ArrowRight,",";"
        "";"
  Phone,",";"
        "";"
  Mail,",";"
        "";"
  MessageCircle,",";"
        "";"
  Rocket,",";"
        "";"
  Target,",";"
        "";"
  ",";"
        "";"
  Code,",";"
        "";"
  Cloud,",";"
        "";"
  // ",";"
        "";"
  Settings",";"
        "";"
} from 'lucide-react',";";";
      const ServiceDetailPage: React.FC = () => {};";";";
}const const { id  } = useParams<{ id: string }>()";";";";
  // Mock service data - in a real app, this would come from an API",";"
        "";";";";
  const serviceData = {};"
    'ai-analytics-dashboard-pro': {},";"
      name: 'AI Analytics Dashboard Pro',",";";"
        "";"
      description: 'Advanced business intelligence platform with AI-powered insights and real-time analytics',",";";"
        "";"
      price: '$299/month',",";";"
        "";"
      category: 'AI Services',",";";"
        "";"
      rating: 4.9,",";"
        "";"
      clients: 150,",";"
        "";";";";
      features: []"
        'Real-time Data Visualization',",";";"
        "";"
        'AI-Powered Predictions',",";";"
        "";"
        'Custom Dashboard Builder',",";";"
        "";"
        'API Integration',",";";"
        "";"
        'Mobile App Access',",";";"
        "";"
        '24/7 Support',",";";"
        "";"
        'Advanced Analytics',",";";"
        "";"
        'Custom Reports',",";";"
        "";"
        'Data Export',",";";"
        "";"
        'Team Collaboration';";"
      ],",";"
        "";";";";
      benefits: []"
        'Increase decision speed by 40%',",";";"
        "";"
        'Reduce manual reporting by 80%',",";";"
        "";"
        'Improve forecast accuracy by 60%',",";";"
        "";"
        'Save 20+ hours per week',",";";"
        "";"
        'Improve team productivity by 50%';";"
      ],",";"
        "";"
      icon: ",";"
        "";"
      popular: true",";"
        "";"
    },",";"
        "";"
    'cloud-infrastructure-management': {},";"
      name: 'Cloud Infrastructure Management',",";";"
        "";"
      description: 'Comprehensive cloud solutions with auto-scaling, monitoring, and security compliance',",";";"
        "";"
      price: '$199/month',",";";"
        "";"
      category: 'IT Services',",";";"
        "";"
      rating: 4.8,",";"
        "";"
      clients: 180,",";"
        "";";";";
      features: []"
        'Auto-scaling Infrastructure',",";";"
        "";"
        '99.9% Uptime Guarantee',",";";"
        "";"
        '24/7 ing',",";";"
        "";"
        'Security Compliance',",";";"
        "";"
        'Backup & Recovery',",";";"
        "";"
        'Cost Optimization',",";";"
        "";"
        'Load Balancing',",";";"
        "";"
        'CDN Integration',",";";"
        "";"
        'SSL Certificates',",";";"
        "";"
        'Performance ing';";"
      ],",";"
        "";";";";
      benefits: []"
        'Reduce infrastructure costs by 30%',",";";"
        "";"
        'Improve system reliability',",";";"
        "";"
        'Scale automatically with demand',",";";"
        "";"
        'Enhance security posture',",";";"
        "";"
        'Minimize downtime';";"
      ],",";"
        "";"
      icon: Cloud,",";"
        "";"
      popular: true",";"
        "";"
    },",";"
        "";"
    'project-management-pro': {},";"
      name: 'Project Management Pro',",";";"
        "";"
      description: 'Comprehensive project management platform with AI-powered insights and team collaboration',",";";"
        "";"
      price: '$149/month',",";";"
        "";"
      category: 'Micro SAAS',",";";"
        "";"
      rating: 4.8,",";"
        "";"
      clients: 250,",";"
        "";";";";
      features: []"
        'Task Management',",";";"
        "";"
        'Team Collaboration',",";";"
        "";"
        'AI Progress Insights',",";";"
        "";"
        'Resource Planning',",";";"
        "";"
        'Time Tracking',",";";"
        "";"
        'Reporting & Analytics',",";";"
        "";"
        'Gantt Charts',",";";"
        "";"
        'File Sharing',",";";"
        "";"
        'Communication Tools',",";";"
        "";"
        'Mobile Access';";"
      ],",";"
        "";";";";
      benefits: []"
        'Increase project success rate by 40%',",";";"
        "";"
        'Improve team productivity by 50%',",";";"
        "";"
        'Reduce project delays by 60%',",";";"
        "";"
        'Better resource utilization',",";";"
        "";"
        'Enhanced team collaboration';";"
      ],",";"
        "";"
      icon: Target,",";"
        "";"
      popular: true",";"
        "";";
    };";";
    },";";";
    {}"
  const service = serviceData[id as keyof typeof serviceData] || serviceData['ai-analytics-dashboard-pro']";";";
  const relatedServices = []";";";
    {},;"
      name: 'AI Content Generator',",";";"
        "";"
    {},"'"'";";"
      name: 'Cybersecurity Suite',","";";"
        ""'";";"
      price: '$499/month',","";";"
        ""'";";"
      category: 'IT Services',","";";"
        """;"
      icon: Shield","";"
        """;"
    },","";"
        "";"
      category: 'AI Services',",";";"
        "";"
      icon: Code",";"
        "";"
    },",";"
        "";";";";
    {},"
      name: 'Cybersecurity Suite',",";";"
        "";"
      price: '$499/month',",";";"
        "";"
      category: 'IT Services',",";";"
        "";"
      icon: ",";"
        "";"
    },",";"
        "";";";";
    {},"
      name: 'API Management',",";";"
        "";"
      price: '$179/month',",";";"
        "";"
      category: 'Micro SAAS',",";";"
        "";"
      icon: Settings",";"
        "";";";
    };";";";
  ]"
  return ()"";"
    <div>","";"
        """;"
      <Helmet>","";"
        """;"
        <title>{service.name} - Zion Tech Group</title>","";"
        """;"
        <meta: name ="description" content={service.description} />";"";"
        <meta: name ="keywords" content={`${service.name}, ${service.category}, business solutions, technology services`} />",";";"
        """;"
      </Helmet>","";"
        "";"
      {/* Breadcrumb */};"";"
      <section: className ="py-8 bg-slate-800/30">";"";"
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""";"
          <div: className ="flex items-center space-x-2 text-sm">";"";"
            <to="/" className="text-gray-400 hover:text-white">Home</>";"";"
            <span: className ="text-gray-500">/</$1>"";"
            <to="/services" className="text-gray-400 hover:text-white">Services</>";"";"
            <span: className ="text-gray-500">/</$1>"";"
            <span: className ="text-white">{service.name}</span>",";";"
        """;"
          </div>","";"
        """;"
        </div>","";"
        """;"
      </section>","";"
        "";"
      {/* Service Header */};"";"
      <section: className ="py-16">";"";"
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""";"
          <div: className ="grid grid-cols-1 lg:grid-cols-2 gap-12">","";"
        """;"
            <div>","";"
        """;"
              <div: className ="flex items-center space-x-3 mb-6">";"";"
                <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">";"";"
                  <service.icon: className ="w-8 h-8 text-white" />",";";"
        """;"
                </div>","";"
        """;"
                <div>";""";"
                  <span: className ="text-purple-400 font-medium">{service.category}</$1>";";"
                  {service.popular && ()"";"
                    <span: className ="ml-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">",";";"
        """;"
                      Most Popular","";"
        """;"
                    </span>","";"
        "";"
                  )};"";"
                </div>","";"
        """;"
              </$1>""";"
              <h1: className ="text-4xl md:text-5xl font-bold text-white mb-6">","";"
        "";"
                <div>";"";"
                  <span: className ="text-purple-400 font-medium">{service.category}</$1>"";";";";
                  {service.popular && ()}"
                    <span: className ="ml-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">",";"
        "";"
                      Most Popular",";"
        "";"
                    </span>",";"
        "";";";";
                  )};"
                </div>",";"
        "";"
              </$1>"";"
              <h1: className ="text-4xl md:text-5xl font-bold text-white mb-6">",";"
        "";";";";
                {service.name};"
              </h1>",";"
        "";"
              <p: className ="text-xl text-gray-300 mb-8">",";"
        "";";";";
                {service.description};"
              </p>",";"
        "";"
                {service.description};"";"
              </p>","";"
        """;"
              <div: className ="flex items-center space-x-6 mb-8">";"";"
                <div: className ="flex items-center space-x-2">";"";"
                  <Star: className ="w-5 h-5 text-yellow-400 fill-current" />";"";"
                  <span: className ="text-white font-semibold">{service.rating}</$1>"";"
                  <span: className ="text-gray-400">({service.clients} clients)</span>",";";"
        """;"
                </div>","";"
        """;"
                <div: className ="flex items-center space-x-2">";"";"
                  <Users: className ="w-5 h-5 text-purple-400" />";"";"
                  <span: className ="text-gray-300">Trusted by {service.clients}+ businesses</span>",";"
        "";"
                </div>",";"
        "";"
              </$1>"";"
              <div: className ="text-4xl font-bold text-white mb-8">";"";";";";
                {service.price};"
                <span: className ="text-lg text-gray-400 font-normal">/month</span>",";"
        "";"
              </div>",";"
        "";"
              <div: className ="flex flex-col sm:flex-row gap-4">",";"
        "";"
                <a",>";"
        "";"
                  href="/contact",";"
      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105";";"
                >",";"
        "";"
                  Get Started Now",";"
        "";"
                  <ArrowRight: className ="ml-2 w-5 h-5" />",";"
        "";"
                </a>",";"
        "";"
                <a";">";"
                  href="tel:+13024640950",";"
      className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300";";"
                >",";"
        "";"
                  Call +1 302 464 0950",";"
        "";"
                </a>",";"
        "";"
              </div>",";"
        "";"
            </$1>"";"
            <div: className ="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">";"";"
              <h3: className ="text-2xl font-bold text-white mb-6">Quick Contact</$1>"";"
              <div: className ="space-y-4">",";"
        "";"
                <a",>";"
        "";"
                  href="tel:+13024640950",";"
      className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors";";"
                >";"";"
                  <Phone: className ="w-5 h-5 text-purple-400" />",";"
        "";"
                  <div>",";"
        "";"
                    <div: className ="text-white font-medium">Call Now</$1>"";"
                    <div: className ="text-gray-300 text-sm">+1 302 464 0950</div>",";"
        "";"
                  </div>",";"
        "";"
                </a>",";"
        "";"
                <a",>";"
        "";"
                  href="mailto:kleber@ziontechgroup.com",";"
      className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors";";"
                >";"";"
                  <Mail: className ="w-5 h-5 text-purple-400" />",";"
        "";"
                  <div>",";"
        "";"
                    <div: className ="text-white font-medium">Email Us</$1>"";"
                    <div: className ="text-gray-300 text-sm">kleber@ziontechgroup.com</div>",";"
        "";"
                  </div>",";"
        "";"
                </a>",";"
        "";"
                <a",>";"
        "";"
                  href="/contact",";"
      className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors";";"
                >";"";"
                  <MessageCircle: className ="w-5 h-5 text-purple-400" />",";"
        "";"
                  <div>",";"
        "";"
                    <div: className ="text-white font-medium">Live Chat</$1>"";"
                    <div: className ="text-gray-300 text-sm">Available 24/7</div>",";";"
        """;"
                  </div>","";"
        """;"
                </a>","";"
        """;"
              </div>","";"
        """;"
            </div>","";"
        """;"
          </div>","";"
        """;"
        </div>","";"
        """;"
      </section>","";"
        "";"
      {/* Features Section */};"";"
      <section: className ="py-20 bg-slate-800/30">";"";"
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""";"
          <div: className ="text-center mb-16">";"";"
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">","";"
        """;"
              Key Features","";"
        """;"
            </$1>""";"
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">",";";"
        """;"
              Everything you need to succeed with our comprehensive feature set designed for modern businesses.","";"
        """;"
            </p>","";"
        """;"
          </div>","";"
        """;"
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";"";";";";
            {service.features.map((feature, index) => ()}"
              <div: key ={index} className="flex items-start space-x-3">";"";"
                <CheckCircle: className ="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />",";";"
        """;"
                <div>","";"
        """;"
                  <h3: className ="text-white font-semibold mb-2">{feature}</$1>"";"
                  <p: className ="text-gray-300 text-sm">",";";"
        """;"
                    Advanced functionality designed to enhance your business operations and productivity.","";"
        """;"
                  </p>","";"
        """;"
                </div>","";"
        """;"
              </div>","";"
        "";"
            ))};"";"
          </div>","";"
        """;"
        </div>","";"
        """;"
      </section>","";"
        "";"
      {/* Benefits Section */};"";"
      <section: className ="py-20">";"";"
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""";"
          <div: className ="text-center mb-16">";"";"
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">","";"
        """;"
              Business Impact","";"
        """;"
            </$1>""";"
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">",";";"
        """;"
              See the measurable results our clients achieve with this service.","";"
        """;"
            </p>","";"
        """;"
          </div>","";"
        """;"
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";"";";";";
            {service.benefits.map((benefit, index) => ()}"
              <div: key ={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 text-center">";"";"
                <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">";"";"
                  <Target: className ="w-8 h-8 text-white" />",";";"
        """;"
                </div>","";"
        """;"
                <h3: className ="text-xl font-semibold text-white mb-4">{benefit}</$1>"";"
                <p: className ="text-gray-300">",";";"
        """;"
                  Proven results from our extensive client base and industry expertise.","";"
        """;"
                </p>","";"
        """;"
              </div>","";"
        "";"
            ))};"";"
          </div>","";"
        """;"
        </div>","";"
        """;"
      </$1>"";"
      {/* Related Services */};"";"
      <section: className ="py-20 bg-slate-800/30">";"";"
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""";"
          <div: className ="text-center mb-16">";"";"
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">","";"
        """;"
              Related Services","";"
        """;"
            </$1>""";"
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">",";";"
        """;"
              Explore other services that complement this solution for a complete business transformation.","";"
        """;"
            </p>","";"
        """;"
          </div>","";"
        """;"
          <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">";"";";";";
            {relatedServices.map((relatedService, index) => ()}"
              <div: key ={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">";"";"
                <div: className ="flex items-center space-x-3 mb-4">";"";"
                  <div: className ="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">";"";"
                    <relatedService.icon: className ="w-6 h-6 text-white" />",";";"
        """;"
                  </div>","";"
        """;"
                  <div>";""";"
                    <h3: className ="text-xl font-semibold text-white">{relatedService.name}</$1>"";"
                    <span: className ="text-sm text-purple-400">{relatedService.category}</span>",";";"
        """;"
                  </div>","";"
        """;"
                </$1>""";"
                <div: className ="text-2xl font-bold text-white mb-4">{relatedService.price}</div>",";";"
        """;"
                <Link",">";"
        """;"
                  to="/services",">: value";";"
      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors";>"";"
                >","";"
        """;"
                  Learn More","";"
        """;"
                  <ArrowRight: className ="ml-2 w-4 h-4" />",";";"
        """;"
                </Link>","";"
        """;"
              </div>","";"
        "";"
            ))};"";"
          </div>","";"
        """;"
        </div>","";"
        """;"
      </section>","";"
        "";"
                </$1>"";"
                <div: className ="text-2xl font-bold text-white mb-4">{relatedService.price}</div>",";"
        "";"
                <",>";"
        "";"
                  to="/services",";"
      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors";";"
                >",";"
        "";"
                  Learn More",";"
        "";"
                  <ArrowRight: className ="ml-2 w-4 h-4" />",";"
        "";"
                </>",";"
        "";"
              </div>",";"
        "";";";";
            ))};"
          </div>",";"
        "";"
        </div>",";"
        "";"
      </section>",";"
        "";";";";
      {/* CTA Section */};"
      <section: className ="py-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20">";"";"
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">";"";"
          <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">",";"
        "";"
            Ready to Get Started?",";"
        "";"
          </$1>"";"
          <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">",";"
        "";"
            Join hundreds of businesses that trust Zion Tech Group for their technology needs.",";"
        "";"
            Get started with {service.name} today and transform your business operations.",";"
        "";"
          </p>",";"
        "";"
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">",";"
        "";"
            <a",>";"
        "";"
              href="/contact",";"
      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105";";"
            >",";"
        "";"
              Start Your Journey",";"
        "";"
              <Rocket: className ="ml-2 w-5 h-5" />",";"
        "";"
            </a>",";"
        "";"
            <a";">";"
              href="tel:+13024640950",";"
      className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300";";"
            >",";"
        "";"
              Call +1 302 464 0950",";"
        "";"
            </a>",";"
        "";"
          </div>",";"
        "";"
        </div>",";"
        "";"
      </section>",";"
        "";"
</div>",";"
        "";";";";
  )"
},"";"
      export default ServiceDetailPage","";"
        ""'";";";";";
"
=======
      import { Helmet } from 'react-helmet-async',";";";
      import {"}";";
        "";";
  CheckCircle,",";";
        "";";
  Star,",";";
        "";";
  Users,",";";
        "";";
  ",";";
        "";";
  // ",";";
        "";";
  ArrowRight,",";";
        "";";
  Phone,",";";
        "";";
  Mail,",";";
        "";";
  MessageCircle,",";";
        "";";
  Rocket,",";";
        "";";
  Target,",";";
        "";";
  ",";";
        "";";
  Code,",";";
        "";";
  Cloud,",";";
        "";";
  // ",";";
        "";";
  Settings",";";
        "";";
} from 'lucide-react',";";";
      const ServiceDetailPage: React.FC = () => {};
}const { id } = useParams<{ id: string }>()
  // Mock service data - in a real app, this would come from an API",";";
        "";";
  const: serviceData = {};
    'ai-analytics-dashboard-pro': {},";";";
      name: 'AI Analytics Dashboard Pro',",";";";";
        "";";
      description: 'Advanced business intelligence platform with AI-powered insights and real-time analytics',",";";";";
        "";";
      price: '$299/month',",";";";";
        "";";
      category: 'AI Services',",";";";";
        "";";
      rating: 4.9,",";";
        "";";
      clients: 150,",";";
        "";";
      features: []
        'Real-time Data Visualization',",";";";";
        "";";
        'AI-Powered Predictions',",";";";";
        "";";
        'Custom Dashboard Builder',",";";";";
        "";";
        'API Integration',",";";";";
        "";";
        'Mobile App Access',",";";";";
        "";";
        '24/7 Support',",";";";";
        "";";
        'Advanced Analytics',",";";";";
        "";";
        'Custom Reports',",";";";";
        "";";
        'Data Export',",";";";";
        "";";
        'Team Collaboration';";";";
      ],",";";
        "";";
      benefits: []
        'Increase decision speed by 40%',",";";";";
        "";";
        'Reduce manual reporting by 80%',",";";";";
        "";";
        'Improve forecast accuracy by 60%',",";";";";
        "";";
        'Save 20+ hours per week',",";";";";
        "";";
        'Improve team productivity by 50%';";";";
      ],",";";
        "";";
      icon: ",";";
        "";";
      popular: true",";";
        "";";
    },",";";
        "";";
    'cloud-infrastructure-management': {},";";";
      name: 'Cloud Infrastructure Management',",";";";";
        "";";
      description: 'Comprehensive cloud solutions with auto-scaling, monitoring, and security compliance',",";";";";
        "";";
      price: '$199/month',",";";";";
        "";";
      category: 'IT Services',",";";";";
        "";";
      rating: 4.8,",";";
        "";";
      clients: 180,",";";
        "";";
      features: []
        'Auto-scaling Infrastructure',",";";";";
        "";";
        '99.9% Uptime Guarantee',",";";";";
        "";";
        '24/7 ing',",";";";";
        "";";
        'Security Compliance',",";";";";
        "";";
        'Backup & Recovery',",";";";";
        "";";
        'Cost Optimization',",";";";";
        "";";
        'Load Balancing',",";";";";
        "";";
        'CDN Integration',",";";";";
        "";";
        'SSL Certificates',",";";";";
        "";";
        'Performance ing';";";";
      ],",";";
        "";";
      benefits: []
        'Reduce infrastructure costs by 30%',",";";";";
        "";";
        'Improve system reliability',",";";";";
        "";";
        'Scale automatically with demand',",";";";";
        "";";
        'Enhance security posture',",";";";";
        "";";
        'Minimize downtime';";";";
      ],",";";
        "";";
      icon: Cloud,",";";
        "";";
      popular: true",";";
        "";";
    },",";";
        "";";
    'project-management-pro': {},";";";
      name: 'Project Management Pro',",";";";";
        "";";
      description: 'Comprehensive project management platform with AI-powered insights and team collaboration',",";";";";
        "";";
      price: '$149/month',",";";";";
        "";";
      category: 'Micro SAAS',",";";";";
        "";";
      rating: 4.8,",";";
        "";";
      clients: 250,",";";
        "";";
      features: []
        'Task Management',",";";";";
        "";";
        'Team Collaboration',",";";";";
        "";";
        'AI Progress Insights',",";";";";
        "";";
        'Resource Planning',",";";";";
        "";";
        'Time Tracking',",";";";";
        "";";
        'Reporting & Analytics',",";";";";
        "";";
        'Gantt Charts',",";";";";
        "";";
        'File Sharing',",";";";";
        "";";
        'Communication Tools',",";";";";
        "";";
        'Mobile Access';";";";
      ],",";";
        "";";
      benefits: []
        'Increase project success rate by 40%',",";";";";
        "";";
        'Improve team productivity by 50%',",";";";";
        "";";
        'Reduce project delays by 60%',",";";";";
        "";";
        'Better resource utilization',",";";";";
        "";";
        'Enhanced team collaboration';";";";
      ],",";";
        "";";
      icon: Target,",";";
        "";";
      popular: true",";";
        "";";
    }
    },
    {}
  const: service = serviceData[id as keyof typeof serviceData] || serviceData['ai-analytics-dashboard-pro']";";";
  const: relatedServices = []
    {},;
      name: 'AI Content Generator',",";";";";

        "";";
    {},"'"'";";";";
      name: 'Cybersecurity Suite',","";";";";
        ""'";";";";
      price: '$499/month',","";";";";
        ""'";";";";
      category: 'IT Services',","";";";";
        """;";
      icon: Shield","";";
        """;";
    },","";";
        "";";
      category: 'AI Services',",";";";";
        "";";
      icon: Code",";";
        "";";
    },",";";
        "";";
    {},
      name: 'Cybersecurity Suite',",";";";";
        "";";
      price: '$499/month',",";";";";
        "";";
      category: 'IT Services',",";";";";
        "";";
      icon: ",";";
        "";";
    },",";";
        "";";
    {},
      name: 'API Management',",";";";";
        "";";
      price: '$179/month',",";";";";
        "";";
      category: 'Micro SAAS',",";";";";
        "";";
      icon: Settings",";";

        "";";
    };
  ]
  return ()"";";
    <div>","";";
        """;";
      <Helmet>","";";
        """;";
        <title>{service.name} - Zion Tech Group</title>","";";
        """;";
        <meta: name ="description" content={service.description} />";"";";
        <meta: name ="keywords" content={`${service.name}, ${service.category}, business solutions, technology services`} />",";";";
        """;";
      </Helmet>","";";
        "";";
      {/* Breadcrumb */};"";";
      <section: className ="py-8 bg-slate-800/30">";"";";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""";";
          <div: className ="flex items-center space-x-2 text-sm">";"";";
            <to="/" className="text-gray-400 hover:text-white">Home</>";"";";
            <span: className ="text-gray-500">/</span>";"";";
            <to="/services" className="text-gray-400 hover:text-white">Services</>";"";";

            <span: className ="text-gray-500">/</span>";"";";
            <span: className ="text-white">{service.name}</span>",";";";
        """;";
          </div>","";";
        """;";
        </div>","";";
        """;";
      </section>","";";
        "";";
      {/* Service Header */};"";";
      <section: className ="py-16">";"";";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""";";
          <div: className ="grid grid-cols-1 lg:grid-cols-2 gap-12">","";";
        """;";
            <div>","";";
        """;";
              <div: className ="flex items-center space-x-3 mb-6">";"";";
                <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">";"";";
                  <service.icon: className ="w-8 h-8 text-white" />",";";";
        """;";
                </div>","";";
        """;";
                <div>";""";";
                  <span: className ="text-purple-400 font-medium">{service.category}</span>";";";";
                  {service.popular && ()"";";
                    <span: className ="ml-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">",";";";
        """;";
                      Most Popular","";";
        """;";
                    </span>","";";
        "";";
                  )};"";";
                </div>","";";
        """;";
              </div>";""";";
              <h1: className ="text-4xl md:text-5xl font-bold text-white mb-6">","";";
        "";";
                <div>";"";";
                  <span: className ="text-purple-400 font-medium">{service.category}</span>";"";";
                  {service.popular && ()}
                    <span: className ="ml-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">",";";
        "";";
                      Most Popular",";";
        "";";
                    </span>",";";
        "";";
                  )};
                </div>",";";
        "";";
              </div>";"";";
              <h1: className ="text-4xl md:text-5xl font-bold text-white mb-6">",";";
        "";";
                {service.name};
              </h1>",";";
        "";";
              <p: className ="text-xl text-gray-300 mb-8">",";";
        "";";
                {service.description};
              </p>",";";

        "";";
                {service.description};"";";
              </p>","";";
        """;";
              <div: className ="flex items-center space-x-6 mb-8">";"";";
                <div: className ="flex items-center space-x-2">";"";";
                  <Star: className ="w-5 h-5 text-yellow-400 fill-current" />";"";";
                  <span: className ="text-white font-semibold">{service.rating}</span>";"";";
                  <span: className ="text-gray-400">({service.clients} clients)</span>",";";";
        """;";
                </div>","";";
        """;";
                <div: className ="flex items-center space-x-2">";"";";
                  <Users: className ="w-5 h-5 text-purple-400" />";"";";
                  <span: className ="text-gray-300">Trusted by {service.clients}+ businesses</span>",";";
        "";";
                </div>",";";
        "";";
              </div>";"";";
              <div: className ="text-4xl font-bold text-white mb-8">";"";";
                {service.price};
                <span: className ="text-lg text-gray-400 font-normal">/month</span>",";";
        "";";
              </div>",";";
        "";";
              <div: className ="flex flex-col sm:flex-row gap-4">",";";
        "";";
                <a",>";";
        "";";
                  href="/contact",";";
      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105";";";
                >",";";
        "";";
                  Get Started Now",";";
        "";";
                  <ArrowRight: className ="ml-2 w-5 h-5" />",";";
        "";";
                </a>",";";
        "";";
                <a";">";";
                  href="tel:+13024640950",";";
      className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300";";";
                >",";";
        "";";
                  Call +1 302 464 0950",";";
        "";";
                </a>",";";
        "";";
              </div>",";";
        "";";
            </div>";"";";
            <div: className ="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">";"";";
              <h3: className ="text-2xl font-bold text-white mb-6">Quick Contact</h3>";"";";
              <div: className ="space-y-4">",";";
        "";";
                <a",>";";
        "";";
                  href="tel:+13024640950",";";
      className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors";";";
                >";"";";
                  <Phone: className ="w-5 h-5 text-purple-400" />",";";
        "";";
                  <div>",";";
        "";";
                    <div: className ="text-white font-medium">Call Now</div>";"";";
                    <div: className ="text-gray-300 text-sm">+1 302 464 0950</div>",";";
        "";";
                  </div>",";";
        "";";
                </a>",";";
        "";";
                <a",>";";
        "";";
                  href="mailto:kleber@ziontechgroup.com",";";
      className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors";";";
                >";"";";
                  <Mail: className ="w-5 h-5 text-purple-400" />",";";
        "";";
                  <div>",";";
        "";";
                    <div: className ="text-white font-medium">Email Us</div>";"";";
                    <div: className ="text-gray-300 text-sm">kleber@ziontechgroup.com</div>",";";
        "";";
                  </div>",";";
        "";";
                </a>",";";
        "";";
                <a",>";";
        "";";
                  href="/contact",";";
      className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors";";";
                >";"";";
                  <MessageCircle: className ="w-5 h-5 text-purple-400" />",";";
        "";";
                  <div>",";";
        "";";

                    <div: className ="text-white font-medium">Live Chat</div>";"";";
                    <div: className ="text-gray-300 text-sm">Available 24/7</div>",";";";
        """;";
                  </div>","";";
        """;";
                </a>","";";
        """;";
              </div>","";";
        """;";
            </div>","";";
        """;";
          </div>","";";
        """;";
        </div>","";";
        """;";
      </section>","";";
        "";";
      {/* Features Section */};"";";
      <section: className ="py-20 bg-slate-800/30">";"";";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""";";
          <div: className ="text-center mb-16">";"";";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">","";";
        """;";
              Key Features","";";
        """;";
            </h2>";""";";
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">",";";";
        """;";
              Everything you need to succeed with our comprehensive feature set designed for modern businesses.","";";
        """;";
            </p>","";";
        """;";
          </div>","";";
        """;";
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";"";";
            {service.features.map((feature, index) => ()}
              <div: key ={index} className="flex items-start space-x-3">";"";";
                <CheckCircle: className ="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />",";";";
        """;";
                <div>","";";
        """;";
                  <h3: className ="text-white font-semibold mb-2">{feature}</h3>";"";";
                  <p: className ="text-gray-300 text-sm">",";";";
        """;";
                    Advanced functionality designed to enhance your business operations and productivity.","";";
        """;";
                  </p>","";";
        """;";
                </div>","";";
        """;";
              </div>","";";
        "";";
            ))};"";";
          </div>","";";
        """;";
        </div>","";";
        """;";
      </section>","";";
        "";";
      {/* Benefits Section */};"";";
      <section: className ="py-20">";"";";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""";";
          <div: className ="text-center mb-16">";"";";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">","";";
        """;";
              Business Impact","";";
        """;";
            </h2>";""";";
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">",";";";
        """;";
              See the measurable results our clients achieve with this service.","";";
        """;";
            </p>","";";
        """;";
          </div>","";";
        """;";
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";"";";
            {service.benefits.map((benefit, index) => ()}
              <div: key ={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 text-center">";"";";
                <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">";"";";
                  <Target: className ="w-8 h-8 text-white" />",";";";
        """;";
                </div>","";";
        """;";
                <h3: className ="text-xl font-semibold text-white mb-4">{benefit}</h3>";"";";
                <p: className ="text-gray-300">",";";";
        """;";
                  Proven results from our extensive client base and industry expertise.","";";
        """;";
                </p>","";";
        """;";
              </div>","";";
        "";";
            ))};"";";
          </div>","";";
        """;";
        </div>","";";
        """;";
      </section>";"";";
      {/* Related Services */};"";";
      <section: className ="py-20 bg-slate-800/30">";"";";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""";";
          <div: className ="text-center mb-16">";"";";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">","";";
        """;";
              Related Services","";";
        """;";
            </h2>";""";";
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">",";";";
        """;";
              Explore other services that complement this solution for a complete business transformation.","";";
        """;";
            </p>","";";
        """;";
          </div>","";";
        """;";
          <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">";"";";
            {relatedServices.map((relatedService, index) => ()}
              <div: key ={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">";"";";

                <div: className ="flex items-center space-x-3 mb-4">";"";";
                  <div: className ="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">";"";";
                    <relatedService.icon: className ="w-6 h-6 text-white" />",";";";
        """;";
                  </div>","";";
        """;";
                  <div>";""";";
                    <h3: className ="text-xl font-semibold text-white">{relatedService.name}</h3>";"";";
                    <span: className ="text-sm text-purple-400">{relatedService.category}</span>",";";";
        """;";
                  </div>","";";
        """;";
                </div>";""";";
                <div: className ="text-2xl font-bold text-white mb-4">{relatedService.price}</div>",";";";
        """;";
                <Link",">";";
        """;";
                  to="/services",">: value";";";
      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors";>"";";
                >","";";
        """;";
                  Learn More","";";
        """;";
                  <ArrowRight: className ="ml-2 w-4 h-4" />",";";";
        """;";
                </Link>","";";
        """;";
              </div>","";";
        "";";
            ))};"";";
          </div>","";";
        """;";
        </div>","";";
        """;";
      </section>","";";
        "";";
                </div>";"";";
                <div: className ="text-2xl font-bold text-white mb-4">{relatedService.price}</div>",";";
        "";";
                <",>";";
        "";";
                  to="/services",";";
      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors";";";
                >",";";
        "";";
                  Learn More",";";
        "";";
                  <ArrowRight: className ="ml-2 w-4 h-4" />",";";
        "";";
                </>",";";
        "";";
              </div>",";";
        "";";
            ))};
          </div>",";";
        "";";
        </div>",";";
        "";";
      </section>",";";
        "";";
      {/* CTA Section */};
      <section: className ="py-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20">";"";";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">";"";";
          <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">",";";
        "";";
            Ready to Get Started?",";";
        "";";
          </h2>";"";";
          <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">",";";
        "";";
            Join hundreds of businesses that trust Zion Tech Group for their technology needs.",";";
        "";";
            Get started with {service.name} today and transform your business operations.",";";
        "";";
          </p>",";";
        "";";
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">",";";
        "";";
            <a",>";";
        "";";
              href="/contact",";";
      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105";";";
            >",";";
        "";";
              Start Your Journey",";";
        "";";
              <Rocket: className ="ml-2 w-5 h-5" />",";";
        "";";
            </a>",";";
        "";";
            <a";">";";
              href="tel:+13024640950",";";
      className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300";";";
            >",";";
        "";";
              Call +1 302 464 0950",";";
        "";";
            </a>",";";
        "";";
          </div>",";";
        "";";
        </div>",";";
        "";";
      </section>",";";
        "";";
</div>",";";

        "";";
  )
},"";";
      export default ServiceDetailPage","";";
        ""'";";";";
>>>>>>> main
