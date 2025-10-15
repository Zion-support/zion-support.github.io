import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Brain, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Target, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  DollarSign,
  Percent,
  PieChart,
  LineChart,
  Activity,
  Code,
  Cloud,
  Wifi,
  Server,
  HardDrive,
  Cpu,
  MemoryStick,
  Monitor,
  Camera,
  Mic,
  Speaker,
  Bluetooth,
  Battery,
  Power,
  RefreshCw,
  Maximize,
  Minimize,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Tag,
  Flag,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Snowflake,
  Sparkles,
  Flame,
  Droplet,
  Mountain,
  TreePine,
  Leaf,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Cow,
  Pig,
  Frog,
  Turtle,
  Snake,
  Spider,
  Bee,
  Butterfly,
  Ant,
  Ladybug,
  Dragonfly,
  Firefly,
  Snail,
  Octopus,
  Whale,
  Shark,
  Dolphin,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Peacock,
  Swan,
  Duck,
  Chicken,
  Rooster,
  Turkey,
  Goose,
  Pigeon,
  Crow,
  Raven,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Hummingbird,
  Woodpecker,
  Toucan,
  Flamingo,
  Pelican,
  Seagull,
  Albatross,
  Ostrich,
  Emu,
  Kiwi,
  PolarBear,
  Panda,
  Koala,
  Kangaroo,
  Wombat,
  Platypus,
  Echidna,
  Sloth,
  Armadillo,
  Hedgehog,
  Squirrel,
  Chipmunk,
  Beaver,
  Otter,
  Seal,
  Walrus,
  SeaLion,
  Elephant,
  Giraffe,
  Zebra,
  Hippo,
  Rhino,
  Lion,
  Tiger,
  Leopard,
  Cheetah,
  Jaguar,
  Panther,
  Lynx,
  Bobcat,
  Cougar,
  Wolf,
  Fox,
  Coyote,
  Jackal,
  Hyena,
  Bear,
  Raccoon,
  Skunk,
  Badger,
  Wolverine,
  Weasel,
  Ferret,
  Mink
} from 'lucide-react';

const AiCrmEnterprisePage: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Contact & Lead Management",
      description: "Comprehensive contact database with AI-powered lead scoring and automated qualification processes.",
      benefits: ["Centralized contact database", "AI lead scoring", "Automated qualification", "360° customer view"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Insights",
      description: "Advanced analytics and predictive insights to help you understand customer behavior and optimize sales strategies.",
      benefits: ["Predictive analytics", "Customer behavior insights", "Sales forecasting", "Performance optimization"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Sales Pipeline Management",
      description: "Visual pipeline management with AI-powered forecasting and automated stage progression.",
      benefits: ["Visual pipeline tracking", "AI forecasting", "Automated stage progression", "Deal probability scoring"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Automation",
      description: "Intelligent email campaigns with personalization, A/B testing, and automated follow-up sequences.",
      benefits: ["Personalized campaigns", "A/B testing", "Automated follow-ups", "Email analytics"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Task & Activity Management",
      description: "Smart task assignment and activity tracking with AI-powered prioritization and reminders.",
      benefits: ["Smart task assignment", "Activity tracking", "AI prioritization", "Automated reminders"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance, data encryption, and role-based access control.",
      benefits: ["GDPR compliant", "Data encryption", "Role-based access", "Audit trails"]
    }
  ];

  const integrations = [
    { name: "Salesforce", icon: <Cloud className="w-6 h-6" />, description: "Seamless data sync and workflow automation" },
    { name: "HubSpot", icon: <Target className="w-6 h-6" />, description: "Marketing automation and lead nurturing" },
    { name: "Microsoft Dynamics", icon: <Server className="w-6 h-6" />, description: "Enterprise resource planning integration" },
    { name: "Pipedrive", icon: <BarChart3 className="w-6 h-6" />, description: "Sales pipeline and deal management" },
    { name: "Zendesk", icon: <Users className="w-6 h-6" />, description: "Customer support and ticket management" },
    { name: "Mailchimp", icon: <Mail className="w-6 h-6" />, description: "Email marketing and campaign management" }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 users",
        "10,000 contacts",
        "Basic AI insights",
        "Email automation (5 campaigns)",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing sales teams",
      features: [
        "Up to 25 users",
        "50,000 contacts",
        "Advanced AI insights",
        "Unlimited email campaigns",
        "Custom fields & workflows",
        "API access",
        "Priority support",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited users",
        "Unlimited contacts",
        "AI-powered analytics",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "30%", label: "Sales Increase", description: "Average revenue growth for our clients" },
    { number: "50%", label: "Time Savings", description: "Automate repetitive CRM tasks" },
    { number: "25%", label: "Higher Conversion", description: "AI-powered lead scoring improves results" },
    { number: "99.9%", label: "Uptime", description: "Reliable service you can count on" }
  ];

  return (
    <>
      <Helmet>
        <title>AI CRM Enterprise - Zion Tech Group | Intelligent Customer Relationship Management</title>
        <meta name="description" content="Transform your sales process with AI-powered CRM. Intelligent lead scoring, automated workflows, and predictive analytics to boost sales by 30%." />
        <meta name="keywords" content="AI CRM, customer relationship management, sales automation, lead scoring, sales pipeline, CRM software" />
        <meta property="og:title" content="AI CRM Enterprise - Zion Tech Group" />
        <meta property="og:description" content="Intelligent CRM powered by AI. Boost sales by 30% with automated workflows and predictive analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-crm-enterprise" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Enterprise-Grade AI CRM Solution
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI CRM
                </span>
                <br />
                <span className="text-white">Enterprise</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your sales process with AI-powered customer relationship management. 
                Intelligent lead scoring, automated workflows, and predictive analytics to boost sales by 30%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm font-semibold">{stat.label}</div>
                    <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Powerful Features
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Everything You Need
                </span>
                <br />
                <span className="text-white">to Manage Customers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI-powered CRM combines traditional customer relationship management with cutting-edge artificial intelligence 
                to help you build stronger relationships and close more deals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits:</h4>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Seamless <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms. Our AI CRM integrates with over 100+ 
                popular business applications to streamline your workflow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{integration.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-gray-300">{integration.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your business. Start with a free trial and upgrade when you're ready.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-purple-400/40 hover:border-purple-400/60 shadow-2xl shadow-purple-500/10 scale-105' 
                      : 'border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-cyan-500/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="tel:+13024640950"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Sales Process?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of sales teams already using AI CRM Enterprise to boost their performance. 
                Start your free trial today and see the difference AI can make.
              </p>
              
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Call Us</h3>
                    <p className="text-gray-300 text-lg mb-2">+1 302 464 0950</p>
                    <p className="text-gray-400 text-sm">24/7 Support Available</p>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Email Us</h3>
                    <p className="text-gray-300 text-lg mb-2">kleber@ziontechgroup.com</p>
                    <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Visit Us</h3>
                    <p className="text-gray-300 text-lg mb-2">364 E Main St STE 1008</p>
                    <p className="text-gray-400 text-sm">Middletown DE 19709</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/20">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Start Your Free Trial Today</h3>
                    <p className="text-gray-300 mb-6">
                      No credit card required. Get full access to all features for 14 days. 
                      See why thousands of sales teams trust us with their CRM needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="tel:+13024640950"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCrmEnterprisePage;