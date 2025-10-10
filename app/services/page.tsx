import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
const [isLoaded, setIsLoaded] = useState(false),
const [selectedCategory, setSelectedCategory] = useState('all'),
import {
  Brain,
  Cloud,
  Zap,
  Shield,
  Code,
  BarChart,
  Users,
  Settings,
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  TrendingUp,
  DollarSign,
  Globe,
  Target,
  Rocket,
  Database,
  Smartphone,
  Lock,
  Cpu,
  Wifi,
  Server,
  HardDrive,
  Stethoscope,
  Scale,
  ShoppingCart,
  Truck,
  Factory,
  Building,
  GraduationCap,
  Heart,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck as TruckIcon,
  Smartphone as SmartphoneIcon,
  ChefHat,
  Rocket as RocketIcon,
  Sprout,
  Scale as ScaleIcon,
} from 'lucide-react',

const ServicesPage: React.FC = () => {
const [isLoaded, setIsLoaded] = useState(false),
const [activeTab, setActiveTab] = useState('overview'),
>>>>>>> origin/main

  useEffect(() => {
    setIsLoaded(true),
  }, []),

  ],

const allServices = [
    // AI Services
    {
  ],

  return (
    <>
      title: 'Proven Results',
      description: 'Our clients see 40% improvement in efficiency',
      stat: '40%',
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Average response time of 15 minutes',
      stat: '15 min',
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60%',
      stat: '60%',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Zero security breaches with our approach',
      stat: '100%',
    }
  ],

const technologies = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Microsoft Azure', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Database' }
  ],

const process = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems and identify opportunities for improvement',
      duration: '1-2 weeks',
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive strategy tailored to your business goals',
      duration: '1-2 weeks',
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your operations',
      duration: '2-8 weeks',
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '1-2 weeks',
    },
    {
      step: 5,
      title: 'Support & Monitoring',
      description: 'Ongoing support, monitoring, and continuous improvement',
      duration: 'Ongoing',
    }
  ],

  if (!isLoaded) {
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">IT Services</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Micro SAAS</span>
              </div>
>>>>>>> origin/main
            </div>
          </section>

      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    </>
  ),
},

export default ServicesPage,
                  <benefit.icon className="w-10 h-10 text-white" />
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven expertise and enterprise-grade solutions that deliver measurable business value;)
            </p>)
          </div>,)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">),
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                  <benefit.icon className="w-10 h-10 text-white" />,
                </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
              <div key={categoryIndex} className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                        </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-6 hover: bg-slate-600/50 transition-all duration-300 relative">,
                      {service.popular && (,
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">,
                          Popular,
                        </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}<p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:<ul className="space-y-1">{service.features.map((feature, featureIndex) => (</ul>
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features: </h5>,
                        <ul className="space-y-1">,
                          {service.features.map((feature, featureIndex) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                      </button>
                    </div>
                        </ul>
                      </div>
                      <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}</div>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover: from-cyan-600 hover:to-purple-700 transition-all">
                        Learn More,
                      </button>,
                    </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Technologies We Work With</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">We work with the latest and most reliable technologies in the industry</p><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{technologies.map((tech, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="text-white font-medium text-sm">{tech.name}</div><div className="text-gray-400 text-xs mt-1">{tech.category}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-800/50">
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="relative"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600">{process.map((step, index) => (</div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}<h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}<div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                </div><div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg"></div>
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div><h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p><div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div><div className="w-1/2">))}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4"></section>
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 lg:p-12"></div>
            <div className="text-center mb-8"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2><p className="text-xl text-cyan-100 mb-8">Get in touch with our experts to discuss your project requirements</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <Phone className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3><p className="text-cyan-100">+1 302 464 0950</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <Mail className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3><p className="text-cyan-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <MapPin className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-cyan-100">364 E Main St STE 1008</p><br >Middletown DE 19709</br>
              </div>
            </div>
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">Get Started Today</button>
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Get Started Today,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              </button>
            </div>
          </div>
        </div>
      </section>,
    </div>,
  ),
},

export default ServicesPage,
>>>>>>> origin/main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
