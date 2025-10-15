import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Target, 
  Mail, 
  Phone, 
  MapPin,
  Brain,
  BarChart3,
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

const AiSchedulingAssistantProPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "AI-powered scheduling that automatically finds the best meeting times for all participants based on availability and preferences.",
      benefits: ["Automatic time zone handling", "Conflict resolution", "Optimal time suggestions", "Calendar integration"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligent Optimization",
      description: "Advanced AI algorithms analyze patterns and preferences to optimize scheduling efficiency and reduce no-shows.",
      benefits: ["Pattern recognition", "Preference learning", "No-show prediction", "Efficiency optimization"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Participant Coordination",
      description: "Effortlessly coordinate meetings with multiple participants, handling complex scheduling scenarios automatically.",
      benefits: ["Group scheduling", "Resource booking", "Attendee management", "Availability tracking"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Automated Communications",
      description: "Send personalized meeting invitations, reminders, and follow-ups automatically with customizable templates.",
      benefits: ["Personalized invitations", "Automated reminders", "Follow-up emails", "Custom templates"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Zone Management",
      description: "Seamlessly handle meetings across different time zones with automatic conversion and scheduling.",
      benefits: ["Global time zones", "Automatic conversion", "DST handling", "Location awareness"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Comprehensive analytics on meeting patterns, attendance rates, and scheduling efficiency to optimize your calendar.",
      benefits: ["Meeting analytics", "Attendance tracking", "Efficiency metrics", "Performance insights"]
    }
  ];

  const useCases = [
    {
      title: "Consulting Firms",
      description: "Perfect for consultants managing multiple client meetings and appointments across different time zones.",
      icon: <Users className="w-6 h-6" />,
      results: ["50% reduction in scheduling time", "90% reduction in no-shows", "40% increase in billable hours"]
    },
    {
      title: "Healthcare Providers",
      description: "Streamline patient appointments with intelligent scheduling that considers provider availability and patient preferences.",
      icon: <Heart className="w-6 h-6" />,
      results: ["60% faster appointment booking", "35% reduction in cancellations", "25% increase in patient satisfaction"]
    },
    {
      title: "Legal Services",
      description: "Manage court dates, client meetings, and case consultations with automated scheduling and conflict resolution.",
      icon: <Shield className="w-6 h-6" />,
      results: ["45% reduction in scheduling conflicts", "30% increase in productivity", "20% more client meetings"]
    },
    {
      title: "Real Estate Agents",
      description: "Coordinate property showings, client meetings, and open houses with intelligent scheduling optimization.",
      icon: <Home className="w-6 h-6" />,
      results: ["70% more property showings", "50% reduction in double-bookings", "40% increase in closing rates"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 5 users",
        "Basic AI scheduling",
        "Calendar integration (2 platforms)",
        "Email notifications",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "Advanced AI optimization",
        "All calendar integrations",
        "Custom email templates",
        "Analytics dashboard",
        "Priority support",
        "API access",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "AI-powered insights",
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
    { number: "5 hours", label: "Time Saved Per Week", description: "Automate repetitive scheduling tasks" },
    { number: "40%", label: "Reduction in No-Shows", description: "AI-powered reminder optimization" },
    { number: "90%", label: "Scheduling Accuracy", description: "Intelligent conflict resolution" },
    { number: "24/7", label: "Automated Scheduling", description: "Never miss a booking opportunity" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Scheduling Assistant Pro - Zion Tech Group | Intelligent Meeting Scheduling</title>
        <meta name="description" content="Transform your scheduling with AI-powered meeting coordination. Reduce no-shows by 40% and save 5 hours per week with intelligent scheduling automation." />
        <meta name="keywords" content="AI scheduling, meeting scheduler, appointment booking, calendar automation, scheduling software, meeting optimization" />
        <meta property="og:title" content="AI Scheduling Assistant Pro - Zion Tech Group" />
        <meta property="og:description" content="Intelligent scheduling powered by AI. Reduce no-shows by 40% and save 5 hours per week." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-scheduling-assistant-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Most Efficient Scheduling Solution
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Scheduling
                </span>
                <br />
                <span className="text-white">Assistant Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your scheduling with AI-powered meeting coordination. Reduce no-shows by 40% and save 5 hours per week 
                with intelligent scheduling automation that works around the clock.
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
                      <Calendar className="w-8 h-8 text-cyan-400" />
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
                <span className="text-white">to Schedule Smart</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI-powered scheduling assistant combines intelligent automation with powerful features 
                to streamline your calendar management and maximize productivity.
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

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Scheduling Assistant Pro works across industries, helping professionals and businesses 
                optimize their time management and improve meeting efficiency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {useCase.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-purple-400 mb-3">Typical Results:</h4>
                        {useCase.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                            <Clock className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
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
                Simple, <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transparent</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your scheduling needs. All plans include our core AI scheduling features.
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
                Ready to Optimize Your Scheduling?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals already using AI Scheduling Assistant Pro to streamline their calendars. 
                Start your free trial today and experience the future of scheduling.
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
                      See why thousands of professionals trust us with their scheduling needs.
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

export default AiSchedulingAssistantProPage;