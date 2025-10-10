'use client';
import React, { useState, useEffect } from 'react';
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
  Scale as ScaleIcon
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      description: 'Advanced AI solutions powered by machine learning and artificial intelligence',
      services: [
        {
          name: 'AI Analytics Platform',
          description: 'Predictive analytics and real-time insights',
          price: 'Starting at $299/mo',
          features: ['Predictive Analytics', 'Real-time Processing', 'Custom Dashboards'],
          popular: true
        },
        {
          name: 'AI Workflow Automation',
          description: 'Intelligent business process automation',
          price: 'Starting at $199/mo',
          features: ['Visual Workflow Builder', 'Smart Triggers', 'Error Handling'],
          popular: true
        },
        {
          name: 'AI Cybersecurity Platform',
          description: 'Next-gen security with AI threat detection',
          price: 'Starting at $399/mo',
          features: ['Threat Detection', 'Anomaly Analysis', 'Automated Response'],
          popular: true
        },
        {
          name: 'AI Content Generation',
          description: 'Advanced content creation with AI',
          price: 'Starting at $179/mo',
          features: ['Multi-format Creation', 'SEO Optimization', 'Brand Voice Training'],
          popular: true
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      description: 'Comprehensive IT solutions for modern businesses',
      services: [
        {
          name: 'Cloud Migration & Setup',
          description: 'Seamless migration to AWS, Azure, or GCP',
          price: 'Starting at $10,000',
          features: ['Multi-cloud Strategy', 'Cost Optimization', 'Security Implementation'],
          popular: true
        },
        {
          name: 'Enterprise Cybersecurity',
          description: 'Comprehensive security solutions',
          price: 'Starting at $8,000/mo',
          features: ['Threat Detection', 'Vulnerability Assessment', '24/7 Monitoring'],
          popular: true
        },
        {
          name: '24/7 IT Support',
          description: 'Round-the-clock technical support',
          price: 'Starting at $2,000/mo',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance'],
          popular: true
        },
        {
          name: 'Custom Software Development',
          description: 'Tailored software solutions',
          price: 'Starting at $15,000',
          features: ['Web Applications', 'Mobile Apps', 'API Development'],
          popular: true
        }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      description: 'Powerful AI-powered micro SaaS tools for business operations',
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project management with AI insights',
          price: '$199/mo',
          features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization'],
          popular: true
        },
        {
          name: 'AI Content Writer Pro',
          description: 'Advanced AI content creation',
          price: '$129/mo',
          features: ['SEO Optimization', 'Brand Voice', 'Multi-language Support'],
          popular: true
        },
        {
          name: 'AI Financial Advisor Pro',
          description: 'Personalized financial planning and advice',
          price: '$299/mo',
          features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations'],
          popular: true
        },
        {
          name: 'AI Code Assistant Pro',
          description: 'Advanced AI coding assistant',
          price: '$179/mo',
          features: ['Code Generation', 'Debug Assistant', 'Code Review'],
          popular: true
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our clients see 40% improvement in efficiency',
      stat: '40%'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Average response time of 15 minutes',
      stat: '15 min'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60%',
      stat: '60%'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Zero security breaches with our approach',
      stat: '100%'
    }
  ];

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
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems and identify opportunities for improvement',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive strategy tailored to your business goals',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your operations',
      duration: '2-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Support & Monitoring',
      description: 'Ongoing support, monitoring, and continuous improvement',
      duration: 'Ongoing'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white">);</div>
  }
</<<<div>return</div></div> (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4 xl mx-auto text-center"></div>
            <h1 className="text-4 xl lg:text-6 xl font-bold text-white mb-6 cyber-text neon-pulse"></h1></<<<h1>Our</h1></<<h1>Services</h1><p className="text-xl lg:text-2 xl text-gray-300 mb-8 leading-relaxed">Comprehensive AI, IT, and Micro SAAS solutions designed to transform your business.</p></<<<p>From</p></<<p>cutting</p>-edge AI platforms to robust IT infrastructure, we've got you covered.</p>
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Brain className="w-5 h-5 text-cyan-400" /></Brai>
                <span className="text-white font-medium">AI Solutions</spa>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Cloud className="w-5 h-5 text-purple-400" /></Clou>
                <span className="text-white font-medium">IT Services</spa>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Zap className="w-5 h-5 text-green-400" /></Za>
                <span className="text-white font-medium">Micro SAAS</spa>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Why</h2></<<h2>Choose</h2> Our Services?<p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Proven</p></<<p>expertise</p> and enterprise-grade solutions that deliver measurable business value<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <benefit.icon className="w-10 h-10 text-white" /></benefi>
                <div className="text-4 xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3"></h>{benefit.title}<p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Our</h2></<<h2>Service</h2> Categories<p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Comprehensive</p></<<p>solutions</p> across AI, IT, and Micro SAAS domains<div className="space-y-16">{serviceCategories.map((category, categoryIndex) => (</div>
              <div key={categoryIndex} className="bg-slate-800/50 rounded-lg p-8"></div>
                <div className="flex items-center space-x-4 mb-8"></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}></div>
                    <category.icon className="w-8 h-8 text-white" /></categor>
                  </div>
                  <div></div>
                    <h3 className="text-3 xl font-bold text-white mb-2"></h>{category.title}<p className="text-gray-300 text-lg"></p>{category.description}<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{category.services.map((service, serviceIndex) => (</div>
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-all duration-300 relative"></div>{service.popular && (<div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4><p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <div className="space-y-2 mb-4"></div>
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5><ul className="space-y-1">{service.features.map((feature, featureIndex) => (</u>
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300"></l>
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /></CheckCircl>
                              <span>{feature}</spa>
                            </li>
                          ))}
                        <div className="text-lg font-bold text-cyan-400 mb-4"></div>{service.price}<button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">Learn More</butto>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Technologies</h2></<<h2>We</h2> Work With<p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>We</p></<<p>work</p> with the latest and most reliable technologies in the industry<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{technologies.map((tech, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="text-white font-medium text-sm"></div>{tech.name}<div className="text-gray-400 text-xs mt-1">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-800/50"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Our</h2></<<h2>Implementation</h2> Process<p className="text-lg text-gray-300 max-w-3 xl mx-auto">A proven methodology that ensures successful implementation</p>
            </p>
          </div>
          <div className="max-w-4 xl mx-auto"></div>
            <div className="relative"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600">{process.map((step, index) => (</div>
                </div><div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg"></div>
                      <div className="text-cyan-400 font-bold text-lg mb-2"></div></<<<div>Step</div></div> {step.step}<h3 className="text-xl font-bold text-white mb-2">{step.title}</h>
                      <p className="text-gray-300 mb-2"></p>{step.description}<div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div><div className="w-1/2">))}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2 xl p-8 lg:p-12"></div>
            <div className="text-center mb-8"></div>
              <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Ready</h2></<<h2>to</h2> Transform Your Business?<p className="text-xl text-cyan-100 mb-8">Get in touch with our experts to discuss your project requirements</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <Phone className="w-8 h-8 text-white" /></Phon>
                <h3 className="text-xl font-bold text-white mb-2"></h3></<<<h3>Phone</h3></h3><p className="text-cyan-100">+1 302 464 0950</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <Mail className="w-8 h-8 text-white" /></Mai>
                <h3 className="text-xl font-bold text-white mb-2"></h3></<<<h3>Email</h3></h3><p className="text-cyan-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <MapPin className="w-8 h-8 text-white" /></MapPi>
                <h3 className="text-xl font-bold text-white mb-2">Address</h>
                <p className="text-cyan-100"></p>364 E Main St STE 1008<<<<br>Middletown</br></<<br>DE</br></<br>19709</br>
              </div>
            </div>
            <div className="text-center"></div>
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">Get Started Today</butto>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
