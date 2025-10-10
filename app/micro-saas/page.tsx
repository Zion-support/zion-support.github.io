import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Brain, 
  Code, 
  BarChart, 
  Users, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  Smartphone,
  Laptop,
  Database,
  Cloud,
  Target,
  Sparkles,
  Rocket,
  Cpu,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
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
  Truck,
  ChefHat,
  Rocket as RocketIcon,
  Sprout,
  Scale
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      name: 'AI Quantum Financial Oracle',
      path: '/ai-quantum-financial-oracle',
      description: 'Quantum-powered financial predictions and market analysis',
      icon: '⚛️',
      popular: true,
      features: ['Quantum ML algorithms', 'Real-time market analysis', 'Risk assessment', 'Portfolio optimization'],
      pricing: 'Starting at $99/month'
    },
    {
      name: 'AI Neural Memory Assistant',
      path: '/ai-neural-memory-assistant',
      description: 'Advanced cognitive enhancement and memory management',
      icon: '🧠',
      popular: true,
      features: ['Memory augmentation', 'Cognitive enhancement', 'Learning acceleration', 'Knowledge management'],
      pricing: 'Starting at $79/month'
    },
    {
      name: 'AI Holographic Workspace',
      path: '/ai-holographic-workspace',
      description: '3D workspace with holographic UI and immersive collaboration',
      icon: '🥽',
      popular: true,
      features: ['3D workspace', 'Holographic UI', 'VR collaboration', 'Spatial computing'],
      pricing: 'Starting at $149/month'
    },
    {
      name: 'AI Project Manager Pro',
      path: '/ai-project-manager',
      description: 'Intelligent project planning and resource management',
      icon: '📊',
      popular: true,
      features: ['AI planning', 'Resource optimization', 'Timeline prediction', 'Risk management'],
      pricing: 'Starting at $89/month'
    },
    {
      name: 'AI Social Media Manager',
      path: '/ai-social-media-manager',
      description: 'Automated social media management and content creation',
      icon: '📱',
      popular: true,
      features: ['Content automation', 'Social listening', 'Engagement optimization', 'Analytics dashboard'],
      pricing: 'Starting at $69/month'
    },
    {
      name: 'AI Analytics Dashboard',
      path: '/ai-analytics-dashboard',
      description: 'AI-powered business intelligence and data visualization',
      icon: '📈',
      popular: true,
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization'],
      pricing: 'Starting at $119/month'
    },
    {
      name: 'AI Email Marketing Suite',
      path: '/ai-email-marketing',
      description: 'Intelligent email campaigns and automation',
      icon: '📧',
      popular: true,
      features: ['AI content generation', 'Automated campaigns', 'Personalization', 'A/B testing'],
      pricing: 'Starting at $59/month'
    },
    {
      name: 'AI Smart Calendar',
      path: '/ai-smart-calendar',
      description: 'Intelligent scheduling and time management',
      icon: '📅',
      popular: true,
      features: ['Smart scheduling', 'Time optimization', 'Meeting coordination', 'Productivity insights'],
      pricing: 'Starting at $49/month'
    },
    {
      name: 'AI Content Writer',
      path: '/ai-content-writer',
      description: 'Advanced content generation and writing assistance',
      icon: '✍️',
      popular: true,
      features: ['Content generation', 'Writing assistance', 'SEO optimization', 'Multi-language support'],
      pricing: 'Starting at $39/month'
    },
    {
      name: 'AI Video Generator',
      path: '/ai-video-generator',
      description: 'AI-powered video creation and editing',
      icon: '🎥',
      popular: true,
      features: ['Video generation', 'Auto-editing', 'Voice synthesis', 'Template library'],
      pricing: 'Starting at $129/month'
    },
    {
      name: 'AI CRM Assistant',
      path: '/ai-crm-assistant',
      description: 'Intelligent customer relationship management',
      icon: '👥',
      popular: true,
      features: ['Lead scoring', 'Customer insights', 'Automated follow-ups', 'Sales forecasting'],
      pricing: 'Starting at $99/month'
    },
    {
      name: 'AI Customer Support Bot',
      path: '/ai-customer-support-bot',
      description: '24/7 AI customer support and chatbot',
      icon: '🤖',
      popular: true,
      features: ['24/7 support', 'Natural language processing', 'Ticket management', 'Knowledge base'],
      pricing: 'Starting at $79/month'
    }
  ];

  const categories = [
    {
      title: 'Productivity & Business',
      icon: Briefcase,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      products: microSaasProducts.slice(0, 4)
    },
    {
      title: 'Content & Marketing',
      icon: Palette,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      products: microSaasProducts.slice(4, 8)
    },
    {
      title: 'AI & Automation',
      icon: Brain,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      products: microSaasProducts.slice(8, 12)
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered Micro SAAS solutions. From financial oracles to holographic workspaces, transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro saas, ai solutions, business automation, productivity tools, ai software, saas products" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SAAS Solutions
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions. 
              From quantum financial oracles to holographic workspaces, we have the tools you need to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View Pricing
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-400">Micro SAAS Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Micro SAAS Categories</h2>
              <p className="text-xl text-gray-300">Organized solutions for every business need</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-400/10 transition-colors">
                        <span className="text-2xl">{product.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{product.name}</h4>
                          <p className="text-gray-400 text-sm">{product.description}</p>
                        </div>
                        {product.popular && (
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Micro SAAS Products</h2>
              <p className="text-xl text-gray-300">Our most popular and powerful solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.slice(0, 6).map((product, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{product.icon}</span>
                    {product.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-bold">{product.pricing}</div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive suite of Micro SAAS solutions and start your digital transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;