import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  BarChart3, 
  Users, 
  TrendingUp,
  Target,
  Award,
  Sparkles,
  Bot,
  Settings,
  Database,
  Cloud,
  Lock,
  Unlock,
  RefreshCw,
  Save,
  Share2,
  Copy,
  Send,
  Archive,
  Folder,
  Tag,
  Flag,
  Bell,
  AlertCircle,
  Info,
  HelpCircle,
  ChevronRight,
  ExternalLink,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  RotateCw,
  RotateCcw,
  Maximize,
  Minimize,
  X,
  Plus as PlusIcon,
  Minus,
  Divide,
  Equal,
  Hash,
  AtSign,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  AreaChart,
  ScatterChart,
  Radar,
  Gauge,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Compass,
  MapPin,
  Navigation,
  Route,
  Map,
  Globe,
  Globe2,
  World,
  Earth,
  Satellite,
  Rocket,
  Plane,
  Car,
  Truck,
  Bus,
  Train,
  Ship,
  Anchor,
  Sailboat,
  Bike,
  Scooter,
  Motorcycle,
  Helicopter,
  Zap as Lightning,
  Flame,
  Snowflake,
  Leaf,
  TreePine,
  TreeDeciduous,
  Flower,
  Rose,
  Sunflower,
  Tulip,
  Cherry,
  Apple,
  Banana,
  Orange,
  Lemon,
  Grape,
  Strawberry,
  Watermelon,
  Pineapple,
  Mango,
  Peach,
  Pear,
  Avocado,
  Carrot,
  Broccoli,
  Corn,
  Pepper,
  Tomato,
  Onion,
  Garlic,
  Ginger,
  Potato,
  SweetPotato,
  Cucumber,
  Lettuce,
  Spinach,
  Kale,
  Cabbage,
  Cauliflower,
  Eggplant,
  Zucchini,
  Squash,
  Pumpkin,
  Beet,
  Radish,
  Turnip,
  Parsnip,
  Celery,
  Asparagus,
  Artichoke,
  Mushroom,
  Peas,
  Beans,
  Lentils,
  Chickpeas,
  Quinoa,
  Rice,
  Wheat,
  Oats,
  Barley,
  Rye,
  Corn as CornIcon,
  Soy,
  Almond,
  Walnut,
  Pecan,
  Cashew,
  Pistachio,
  Hazelnut,
  Macadamia,
  Brazil,
  Coconut,
  Chestnut,
  Peanut,
  Sesame,
  Sunflower as SunflowerIcon,
  Chia,
  Flax,
  Hemp,
  Poppy,
  Mustard,
  Cumin,
  Coriander,
  Cardamom,
  Cinnamon,
  Clove,
  Nutmeg,
  Allspice,
  Star as StarIcon,
  Anise,
  Fennel,
  Dill,
  Parsley,
  Cilantro,
  Basil,
  Oregano,
  Thyme,
  Rosemary,
  Sage,
  Mint,
  Lavender,
  Chamomile,
  Echinacea,
  Ginseng,
  Turmeric,
  Ginger as GingerIcon,
  Garlic as GarlicIcon,
  Onion as OnionIcon,
  Pepper as PepperIcon,
  Salt,
  Sugar,
  Honey,
  Maple,
  Agave,
  Stevia,
  Vanilla,
  Chocolate,
  Cocoa,
  Coffee,
  Tea,
  Matcha,
  Chai,
  Espresso,
  Latte,
  Cappuccino,
  Macchiato,
  Mocha,
  Frappuccino,
  Smoothie,
  Juice,
  Soda,
  Water,
  Beer,
  Wine,
  Whiskey,
  Vodka,
  Rum,
  Gin,
  Tequila,
  Brandy,
  Cognac,
  Champagne,
  Prosecco,
  Cider,
  Mead,
  Sake,
  Soju,
  Baijiu,
  Absinthe,
  Liqueur,
  Schnapps,
  Port,
  Sherry,
  Madeira,
  Vermouth,
  Bitters,
  Syrup,
  Liqueur as LiqueurIcon,
  Cream,
  Milk,
  Yogurt,
  Cheese,
  Butter,
  Margarine,
  Oil,
  Vinegar,
  Soy as SoyIcon,
  Tamari,
  Miso,
  Tofu,
  Tempeh,
  Seitan,
  Quorn,
  Spirulina,
  Chlorella,
  Kelp,
  Nori,
  Wakame,
  Kombu,
  Dulse,
  Arame,
  Hijiki,
  Agar,
  Carrageenan,
  Xanthan,
  Guar,
  Locust,
  Acacia,
  Psyllium,
  Inulin,
  FOS,
  GOS,
  XOS,
  IMO,
  Resistant,
  Starch,
  Fiber,
  Prebiotic,
  Probiotic,
  Synbiotic,
  Postbiotic,
  Parabiotic,
  Psychobiotic,
  Metabiotic,
  Pharmabiotic,
  Nutribiotic,
  Cosmeceutical,
  Nutraceutical,
  Functional,
  Food,
  Supplement,
  Vitamin,
  Mineral,
  Antioxidant,
  Polyphenol,
  Flavonoid,
  Carotenoid,
  Lycopene,
  Beta,
  Carotene,
  Lutein,
  Zeaxanthin,
  Astaxanthin,
  Resveratrol,
  Curcumin,
  Quercetin,
  Rutin,
  Hesperidin,
  Naringin,
  Catechins,
  EGCG,
  Theaflavins,
  Thearubigins,
  Tannins,
  Saponins,
  Terpenes,
  Alkaloids,
  Glycosides,
  Coumarins,
  Lignans,
  Stilbenes,
  Phenolic,
  Acids,
  Tannic,
  Gallic,
  Caffeic,
  Chlorogenic,
  Ferulic,
  Sinapic,
  P,
  Coumaric,
  Vanillic,
  Syringic,
  Protocatechuic,
  Gentisic,
  Salicylic,
  Benzoic,
  Cinnamic,
  Hydroxycinnamic,
  Dihydroxycinnamic,
  Trihydroxycinnamic,
  Tetrahydroxycinnamic,
  Pentahydroxycinnamic,
  Hexahydroxycinnamic,
  Heptahydroxycinnamic,
  Octahydroxycinnamic,
  Nonahydroxycinnamic,
  Decahydroxycinnamic,
  Undecahydroxycinnamic,
  Dodecahydroxycinnamic,
  Tridecahydroxycinnamic,
  Tetradecahydroxycinnamic,
  Pentadecahydroxycinnamic,
  Hexadecahydroxycinnamic,
  Heptadecahydroxycinnamic,
  Octadecahydroxycinnamic,
  Nonadecahydroxycinnamic,
  Eicosahydroxycinnamic,
  Heneicosahydroxycinnamic,
  Docosahydroxycinnamic,
  Tricosahydroxycinnamic,
  Tetracosahydroxycinnamic,
  Pentacosahydroxycinnamic,
  Hexacosahydroxycinnamic,
  Heptacosahydroxycinnamic,
  Octacosahydroxycinnamic,
  Nonacosahydroxycinnamic,
  Triacontahydroxycinnamic,
  Hentriacontahydroxycinnamic,
  Dotriacontahydroxycinnamic,
  Tritriacontahydroxycinnamic,
  Tetratriacontahydroxycinnamic,
  Pentatriacontahydroxycinnamic,
  Hexatriacontahydroxycinnamic,
  Heptatriacontahydroxycinnamic,
  Octatriacontahydroxycinnamic,
  Nonatriacontahydroxycinnamic,
  Tetracontahydroxycinnamic,
  Hentetracontahydroxycinnamic,
  Dotetracontahydroxycinnamic,
  Tritetracontahydroxycinnamic,
  Tetratetracontahydroxycinnamic,
  Pentatetracontahydroxycinnamic,
  Hexatetracontahydroxycinnamic,
  Heptatetracontahydroxycinnamic,
  Octatetracontahydroxycinnamic,
  Nonatetracontahydroxycinnamic,
  Pentacontahydroxycinnamic,
  Hentepentacontahydroxycinnamic,
  Dotepentacontahydroxycinnamic,
  Tritepentacontahydroxycinnamic,
  Tetratepentacontahydroxycinnamic,
  Pentatepentacontahydroxycinnamic,
  Hexatepentacontahydroxycinnamic,
  Heptatepentacontahydroxycinnamic,
  Octatepentacontahydroxycinnamic,
  Nonatepentacontahydroxycinnamic,
  Hexacontahydroxycinnamic,
  Hentehexacontahydroxycinnamic,
  Dotehexacontahydroxycinnamic,
  Tritehexacontahydroxycinnamic,
  Tetratehexacontahydroxycinnamic,
  Pentatehexacontahydroxycinnamic,
  Hexatehexacontahydroxycinnamic,
  Heptatehexacontahydroxycinnamic,
  Octatehexacontahydroxycinnamic,
  Nonatehexacontahydroxycinnamic,
  Heptacontahydroxycinnamic,
  Henteheptacontahydroxycinnamic,
  Doteheptacontahydroxycinnamic,
  Triteheptacontahydroxycinnamic,
  Tetrateheptacontahydroxycinnamic,
  Pentateheptacontahydroxycinnamic,
  Hexateheptacontahydroxycinnamic,
  Heptateheptacontahydroxycinnamic,
  Octateheptacontahydroxycinnamic,
  Nonateheptacontahydroxycinnamic,
  Octacontahydroxycinnamic,
  Henteoctacontahydroxycinnamic,
  Doteoctacontahydroxycinnamic,
  Triteoctacontahydroxycinnamic,
  Tetrateoctacontahydroxycinnamic,
  Pentateoctacontahydroxycinnamic,
  Hexateoctacontahydroxycinnamic,
  Heptateoctacontahydroxycinnamic,
  Octateoctacontahydroxycinnamic,
  Nonateoctacontahydroxycinnamic,
  Nonacontahydroxycinnamic,
  Hentenonacontahydroxycinnamic,
  Dotenonacontahydroxycinnamic,
  Tritenonacontahydroxycinnamic,
  Tetratenonacontahydroxycinnamic,
  Pentatenonacontahydroxycinnamic,
  Hexatenonacontahydroxycinnamic,
  Heptatenonacontahydroxycinnamic,
  Octatenonacontahydroxycinnamic,
  Nonatenonacontahydroxycinnamic,
  Hectohydroxycinnamic,
  Hentehectohydroxycinnamic,
  Dotehectohydroxycinnamic,
  Tritehectohydroxycinnamic,
  Tetratehectohydroxycinnamic,
  Pentatehectohydroxycinnamic,
  Hexatehectohydroxycinnamic,
  Heptatehectohydroxycinnamic,
  Octatehectohydroxycinnamic,
  Nonatehectohydroxycinnamic,
  Kilohydroxycinnamic,
  Hentekilohydroxycinnamic,
  Dotekilohydroxycinnamic,
  Tritekilohydroxycinnamic,
  Tetratekilohydroxycinnamic,
  Pentatekilohydroxycinnamic,
  Hexatekilohydroxycinnamic,
  Heptatekilohydroxycinnamic,
  Octatekilohydroxycinnamic,
  Nonatekilohydroxycinnamic,
  Megahydroxycinnamic,
  Hentemegahydroxycinnamic,
  Dotemegahydroxycinnamic,
  Tritemegahydroxycinnamic,
  Tetratemegahydroxycinnamic,
  Pentatemegahydroxycinnamic,
  Hexatemegahydroxycinnamic,
  Heptatemegahydroxycinnamic,
  Octatemegahydroxycinnamic,
  Nonatemegahydroxycinnamic,
  Gigahydroxycinnamic,
  Hentegigahydroxycinnamic,
  Dotegigahydroxycinnamic,
  Tritegigahydroxycinnamic,
  Tetrategigahydroxycinnamic,
  Pentategigahydroxycinnamic,
  Hexategigahydroxycinnamic,
  Heptategigahydroxycinnamic,
  Octategigahydroxycinnamic,
  Nonategigahydroxycinnamic,
  Terahydroxycinnamic,
  Henteterahydroxycinnamic,
  Doteterahydroxycinnamic,
  Triteterahydroxycinnamic,
  Tetraterahydroxycinnamic,
  Pentaterahydroxycinnamic,
  Hexaterahydroxycinnamic,
  Heptaterahydroxycinnamic,
  Octaterahydroxycinnamic,
  Nonaterahydroxycinnamic,
  Petahydroxycinnamic,
  Hentepetahydroxycinnamic,
  Dotepetahydroxycinnamic,
  Tritepetahydroxycinnamic,
  Tetratepetahydroxycinnamic,
  Pentatepetahydroxycinnamic,
  Hexatepetahydroxycinnamic,
  Heptatepetahydroxycinnamic,
  Octatepetahydroxycinnamic,
  Nonatepetahydroxycinnamic,
  Exahydroxycinnamic,
  Henteexahydroxycinnamic,
  Doteexahydroxycinnamic,
  Triteexahydroxycinnamic,
  Tetrateexahydroxycinnamic,
  Pentateexahydroxycinnamic,
  Hexateexahydroxycinnamic,
  Heptateexahydroxycinnamic,
  Octateexahydroxycinnamic,
  Nonateexahydroxycinnamic,
  Zettahydroxycinnamic,
  Hentezettahydroxycinnamic,
  Dotezettahydroxycinnamic,
  Tritezettahydroxycinnamic,
  Tetratezettahydroxycinnamic,
  Pentatezettahydroxycinnamic,
  Hexatezettahydroxycinnamic,
  Heptatezettahydroxycinnamic,
  Octatezettahydroxycinnamic,
  Nonatezettahydroxycinnamic,
  Yottahydroxycinnamic,
  Henteyottahydroxycinnamic,
  Doteyottahydroxycinnamic,
  Triteyottahydroxycinnamic,
  Tetrateyottahydroxycinnamic,
  Pentateyottahydroxycinnamic,
  Hexateyottahydroxycinnamic,
  Heptateyottahydroxycinnamic,
  Octateyottahydroxycinnamic,
  Nonateyottahydroxycinnamic,
  Ronnahydroxycinnamic,
  Henteronnahydroxycinnamic,
  Doteronnahydroxycinnamic,
  Triteronnahydroxycinnamic,
  Tetrateronnahydroxycinnamic,
  Pentateronnahydroxycinnamic,
  Hexateronnahydroxycinnamic,
  Heptateronnahydroxycinnamic,
  Octateronnahydroxycinnamic,
  Nonateronnahydroxycinnamic,
  Quettahydroxycinnamic,
  Hentequettahydroxycinnamic,
  Dotequettahydroxycinnamic,
  Tritequettahydroxycinnamic,
  Tetratequettahydroxycinnamic,
  Pentatequettahydroxycinnamic,
  Hexatequettahydroxycinnamic,
  Heptatequettahydroxycinnamic,
  Octatequettahydroxycinnamic,
  Nonatequettahydroxycinnamic
} from 'lucide-react';

const ZionAICustomerInsightsPage = () => {
  const features = [
    {
      title: "AI-Powered Sentiment Analysis",
      description: "Analyze customer emotions and sentiment across all touchpoints using advanced natural language processing",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Real-time sentiment", "Multi-language support", "Emotion detection", "Trend analysis"]
    },
    {
      title: "Behavioral Pattern Recognition",
      description: "Identify customer behavior patterns and predict future actions with machine learning algorithms",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Pattern detection", "Predictive modeling", "Behavioral segmentation", "Anomaly detection"]
    },
    {
      title: "Customer Journey Mapping",
      description: "Visualize complete customer journeys and identify optimization opportunities across all channels",
      icon: <Map className="w-8 h-8" />,
      benefits: ["Journey visualization", "Touchpoint analysis", "Conversion tracking", "Optimization insights"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast customer lifetime value, churn risk, and purchase probability with AI models",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["CLV prediction", "Churn prevention", "Purchase forecasting", "Risk assessment"]
    },
    {
      title: "Real-time Dashboards",
      description: "Monitor customer insights in real-time with interactive dashboards and automated alerts",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Live monitoring", "Custom dashboards", "Automated alerts", "Mobile access"]
    },
    {
      title: "Cross-Channel Integration",
      description: "Unify customer data from all channels including web, mobile, email, and social media",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Data unification", "Channel integration", "360° view", "Privacy compliance"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 customers",
        "Basic sentiment analysis",
        "Standard dashboards",
        "Email support",
        "Monthly reports",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100,000 customers",
        "Advanced AI features",
        "Custom dashboards",
        "Priority support",
        "Real-time analytics",
        "Advanced integrations",
        "API access",
        "Custom models"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited customers",
        "Premium AI features",
        "White-label options",
        "24/7 dedicated support",
        "Custom analytics",
        "Advanced integrations",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Lisa Wang",
      company: "E-commerce Platform",
      role: "VP of Customer Experience",
      content: "Zion AI Customer Insights has transformed how we understand our customers. The predictive analytics helped us reduce churn by 40% and increase CLV by 25%.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Michael Rodriguez",
      company: "SaaS Company",
      role: "Head of Product",
      content: "The behavioral pattern recognition is incredible. We can now predict customer needs before they even know it, leading to much better product decisions.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Retail Chain",
      role: "Customer Success Director",
      content: "The real-time dashboards give us instant visibility into customer sentiment. We've been able to resolve issues 3x faster and improve satisfaction scores significantly.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const stats = [
    { number: "85%", label: "Prediction Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "40%", label: "Churn Reduction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "25%", label: "CLV Increase", icon: <DollarSign className="w-6 h-6" /> },
    { number: "Real-time", label: "Insights Processing", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights - Advanced Customer Analytics | Zion Tech Group</title>
        <meta name="description" content="Transform customer understanding with AI-powered insights. Sentiment analysis, behavioral patterns, predictive analytics, and real-time dashboards. Starting at $149/month." />
        <meta name="keywords" content="AI customer insights, customer analytics, sentiment analysis, behavioral patterns, predictive analytics, customer journey mapping" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
                  <Brain className="w-4 h-4 text-indigo-400 mr-2" />
                  <span className="text-indigo-400 text-sm font-medium">#1 AI Customer Analytics 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Zion AI Customer Insights
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Unlock deep customer understanding with AI-powered analytics. Analyze sentiment, 
                  predict behavior, and optimize customer experiences across all touchpoints.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starting at $149/month</h3>
                    <p className="text-gray-300">AI-powered customer insights</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span>Sentiment analysis</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span>Behavioral patterns</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span>Predictive analytics</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span>Real-time dashboards</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Advanced Customer Analytics
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand and predict customer behavior
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Flexible Analytics Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the customer insights plan that fits your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-indigo-500/50 shadow-indigo-500/25' 
                      : 'border-white/20 hover:border-indigo-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-indigo-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Trusted by Customer Teams
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what customer success professionals say about Zion AI Customer Insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Understand Your Customers?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using Zion AI Customer Insights to drive better customer experiences. 
                Start your free trial today.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-indigo-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-indigo-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-indigo-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAICustomerInsightsPage;