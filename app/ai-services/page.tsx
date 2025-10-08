import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Eye, 
  Ear, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Shield, 
  Users,
  Target,
  TrendingUp,
  Globe,
  Smartphone,
  Monitor,
  Cloud,
  Database,
  FileText,
  Image,
  Video,
  Music,
  Camera,
  Mic,
  Search,
  Filter,
  Settings,
  Headphones,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Cpu,
  HardDrive,
  Network,
  Lock,
  Download,
  Upload,
  RefreshCw,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  Building,
  Code,
  Terminal,
  GitBranch,
  Docker,
  Kubernetes,
  Aws,
  Azure,
  Gcp,
  Linux,
  Windows,
  Apple,
  Android,
  Chrome,
  Firefox,
  Safari,
  Edge,
  Slack,
  Teams,
  Zoom,
  Office,
  Google,
  Salesforce,
  Hubspot,
  Shopify,
  WordPress,
  Drupal,
  Joomla,
  Magento,
  WooCommerce,
  Stripe,
  Paypal,
  Square,
  Quickbooks,
  Xero,
  Freshbooks,
  Zoho,
  Monday,
  Asana,
  Trello,
  Jira,
  Confluence,
  Notion,
  Airtable,
  Zapier,
  Ifttt,
  Webhook,
  Api,
  Rest,
  Graphql,
  Soap,
  Json,
  Xml,
  Csv,
  Pdf,
  Excel,
  Word,
  Powerpoint,
  Photoshop,
  Illustrator,
  Figma,
  Sketch,
  Invision,
  Marvel,
  Principle,
  Framer,
  Adobe,
  Microsoft,
  Google as GoogleIcon,
  Amazon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Tiktok,
  Snapchat,
  Pinterest,
  Reddit,
  Discord,
  Telegram,
  Whatsapp,
  Signal,
  Viber,
  Wechat,
  Line,
  Kakao,
  Vk,
  Odnoklassniki,
  Yandex,
  Baidu,
  Tencent,
  Alibaba,
  Ebay,
  Amazon as AmazonIcon,
  Walmart,
  Target as TargetIcon,
  Costco,
  HomeDepot,
  Lowes,
  BestBuy,
  Staples,
  OfficeDepot,
  Fedex,
  Ups,
  Usps,
  Dhl,
  Aramex,
  Tnt,
  Dpd,
  Hermes,
  RoyalMail,
  CanadaPost,
  AustraliaPost,
  JapanPost,
  ChinaPost,
  IndiaPost,
  BrazilPost,
  MexicoPost,
  RussiaPost,
  GermanyPost,
  FrancePost,
  ItalyPost,
  SpainPost,
  NetherlandsPost,
  BelgiumPost,
  SwitzerlandPost,
  AustriaPost,
  SwedenPost,
  NorwayPost,
  DenmarkPost,
  FinlandPost,
  PolandPost,
  CzechPost,
  HungaryPost,
  RomaniaPost,
  BulgariaPost,
  CroatiaPost,
  SloveniaPost,
  SlovakiaPost,
  EstoniaPost,
  LatviaPost,
  LithuaniaPost,
  PortugalPost,
  GreecePost,
  CyprusPost,
  MaltaPost,
  LuxembourgPost,
  IrelandPost,
  IcelandPost,
  LiechtensteinPost,
  MonacoPost,
  SanMarinoPost,
  VaticanPost,
  AndorraPost,
  GibraltarPost,
  FaroeIslandsPost,
  GreenlandPost,
  SvalbardPost,
  JanMayenPost,
  BouvetIslandPost,
  PeterIslandPost,
  QueenMaudLandPost,
  RossDependencyPost,
  BritishAntarcticTerritoryPost,
  FrenchSouthernTerritoriesPost,
  HeardIslandPost,
  McDonaldIslandsPost,
  CocosIslandsPost,
  ChristmasIslandPost,
  NorfolkIslandPost,
  LordHoweIslandPost,
  MacquarieIslandPost,
  TasmanIslandPost,
  FlindersIslandPost,
  KingIslandPost,
  BrunyIslandPost,
  MariaIslandPost,
  SchoutenIslandPost,
  DealIslandPost,
  ThreeHummockIslandPost,
  HunterIslandPost,
  RobbinsIslandPost,
  WalkerIslandPost,
  BadgerIslandPost,
  GooseIslandPost,
  PreservationIslandPost,
  ClarkeIslandPost,
  CapeBarrenIslandPost,
  FlindersIslandPost,
  LongIslandPost,
  GreenIslandPost,
  WaterhouseIslandPost,
  TenthIslandPost,
  NinthIslandPost,
  EighthIslandPost,
  SeventhIslandPost,
  SixthIslandPost,
  FifthIslandPost,
  FourthIslandPost,
  ThirdIslandPost,
  SecondIslandPost,
  FirstIslandPost,
  ZeroIslandPost,
  NegativeOneIslandPost,
  NegativeTwoIslandPost,
  NegativeThreeIslandPost,
  NegativeFourIslandPost,
  NegativeFiveIslandPost,
  NegativeSixIslandPost,
  NegativeSevenIslandPost,
  NegativeEightIslandPost,
  NegativeNineIslandPost,
  NegativeTenIslandPost
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 'machine-learning',
      name: 'Machine Learning Solutions',
      category: 'ml',
      description: 'Custom machine learning models and algorithms tailored to your business needs.',
      features: [
        'Predictive analytics',
        'Classification models',
        'Regression analysis',
        'Clustering algorithms',
        'Recommendation systems',
        'Anomaly detection',
        'Model training & optimization',
        'Real-time inference'
      ],
      pricing: {
        consultation: { price: 2500, period: 'one-time', features: ['ML strategy', 'Data analysis', 'Model selection'] },
        development: { price: 300, period: 'hour', features: ['Custom model development', 'Training', 'Validation'] },
        deployment: { price: 5000, period: 'one-time', features: ['Model deployment', 'API integration', 'Monitoring'] }
      },
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      rating: 4.9,
      clients: '120+'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision & Image Processing',
      category: 'vision',
      description: 'Advanced computer vision solutions for image recognition, analysis, and processing.',
      features: [
        'Object detection',
        'Image classification',
        'Facial recognition',
        'OCR text extraction',
        'Medical imaging',
        'Quality inspection',
        'Real-time processing',
        'Custom models'
      ],
      pricing: {
        assessment: { price: 2000, period: 'one-time', features: ['Vision assessment', 'Use case analysis', 'Technical planning'] },
        development: { price: 250, period: 'hour', features: ['Model development', 'Training', 'Testing'] },
        deployment: { price: 4000, period: 'one-time', features: ['System deployment', 'Integration', 'Support'] }
      },
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      rating: 4.8,
      clients: '90+'
    },
    {
      id: 'natural-language',
      name: 'Natural Language Processing',
      category: 'nlp',
      description: 'AI-powered text analysis, language understanding, and generation solutions.',
      features: [
        'Text classification',
        'Sentiment analysis',
        'Named entity recognition',
        'Language translation',
        'Text summarization',
        'Chatbot development',
        'Document processing',
        'Content generation'
      ],
      pricing: {
        consultation: { price: 1500, period: 'one-time', features: ['NLP strategy', 'Text analysis', 'Requirements'] },
        development: { price: 200, period: 'hour', features: ['NLP model development', 'Training', 'Testing'] },
        api: { price: 0.01, period: 'per request', features: ['API access', 'Real-time processing', 'Scalability'] }
      },
      icon: MessageSquare,
      color: 'from-green-500 to-teal-500',
      popular: false,
      rating: 4.7,
      clients: '150+'
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics Platform',
      category: 'analytics',
      description: 'AI-driven predictive analytics to forecast trends and make data-driven decisions.',
      features: [
        'Time series forecasting',
        'Demand prediction',
        'Risk assessment',
        'Customer behavior analysis',
        'Sales forecasting',
        'Inventory optimization',
        'Churn prediction',
        'Real-time insights'
      ],
      pricing: {
        setup: { price: 10000, period: 'one-time', features: ['Platform setup', 'Data integration', 'Model training'] },
        monthly: { price: 2000, period: 'month', features: ['Platform hosting', 'Model updates', 'Support'] },
        perPrediction: { price: 0.05, period: 'per prediction', features: ['Pay-per-use', 'Scalable', 'Real-time'] }
      },
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      popular: true,
      rating: 4.9,
      clients: '80+'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      category: 'automation',
      description: 'Intelligent automation solutions that learn and adapt to your business processes.',
      features: [
        'Workflow automation',
        'Document processing',
        'Email automation',
        'Data entry automation',
        'Decision automation',
        'Exception handling',
        'Learning algorithms',
        'Process optimization'
      ],
      pricing: {
        assessment: { price: 3000, period: 'one-time', features: ['Process analysis', 'Automation strategy', 'ROI calculation'] },
        implementation: { price: 150, period: 'hour', features: ['Automation development', 'Testing', 'Deployment'] },
        management: { price: 1500, period: 'month', features: ['Ongoing management', 'Optimization', 'Support'] }
      },
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      rating: 4.8,
      clients: '200+'
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot Development',
      category: 'chatbot',
      description: 'Intelligent conversational AI chatbots for customer service and engagement.',
      features: [
        'Natural conversations',
        'Multi-language support',
        'Context awareness',
        'Integration capabilities',
        'Analytics dashboard',
        'Custom training',
        'Voice integration',
        'Escalation handling'
      ],
      pricing: {
        basic: { price: 2000, period: 'one-time', features: ['Simple chatbot', 'Basic training', 'Email support'] },
        advanced: { price: 8000, period: 'one-time', features: ['Advanced AI', 'Custom training', 'Integrations'] },
        enterprise: { price: 15000, period: 'one-time', features: ['Custom development', 'White-label', 'Dedicated support'] }
      },
      icon: MessageSquare,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      rating: 4.7,
      clients: '110+'
    },
    {
      id: 'ai-recommendation',
      name: 'AI Recommendation Engine',
      category: 'recommendation',
      description: 'Personalized recommendation systems to increase engagement and sales.',
      features: [
        'Collaborative filtering',
        'Content-based filtering',
        'Hybrid approaches',
        'Real-time recommendations',
        'A/B testing',
        'Performance analytics',
        'Scalable architecture',
        'Custom algorithms'
      ],
      pricing: {
        setup: { price: 12000, period: 'one-time', features: ['Engine development', 'Data integration', 'Testing'] },
        monthly: { price: 3000, period: 'month', features: ['Hosting', 'Updates', 'Support'] },
        perRecommendation: { price: 0.001, period: 'per recommendation', features: ['Pay-per-use', 'Scalable', 'Real-time'] }
      },
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      popular: true,
      rating: 4.8,
      clients: '60+'
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      category: 'security',
      description: 'Advanced AI-powered fraud detection and prevention systems.',
      features: [
        'Real-time monitoring',
        'Pattern recognition',
        'Anomaly detection',
        'Risk scoring',
        'Machine learning models',
        'False positive reduction',
        'Compliance reporting',
        'Custom rules'
      ],
      pricing: {
        assessment: { price: 5000, period: 'one-time', features: ['Security audit', 'Risk analysis', 'Strategy planning'] },
        implementation: { price: 20000, period: 'one-time', features: ['System implementation', 'Model training', 'Testing'] },
        monitoring: { price: 5000, period: 'month', features: ['24/7 monitoring', 'Model updates', 'Support'] }
      },
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      popular: false,
      rating: 4.9,
      clients: '40+'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      category: 'content',
      description: 'AI-powered content creation for marketing, blogs, and social media.',
      features: [
        'Text generation',
        'Image creation',
        'Video production',
        'Social media content',
        'SEO optimization',
        'Brand consistency',
        'Multi-language support',
        'Content scheduling'
      ],
      pricing: {
        starter: { price: 500, period: 'month', features: ['Basic content generation', '5,000 words/month', 'Email support'] },
        pro: { price: 1500, period: 'month', features: ['Advanced features', '50,000 words/month', 'Priority support'] },
        enterprise: { price: 5000, period: 'month', features: ['Custom models', 'Unlimited content', 'Dedicated support'] }
      },
      icon: FileText,
      color: 'from-violet-500 to-purple-500',
      popular: true,
      rating: 4.7,
      clients: '180+'
    },
    {
      id: 'ai-data-mining',
      name: 'AI Data Mining & Insights',
      category: 'data',
      description: 'Extract valuable insights from your data using advanced AI techniques.',
      features: [
        'Data exploration',
        'Pattern discovery',
        'Trend analysis',
        'Customer segmentation',
        'Market research',
        'Competitive analysis',
        'Automated reporting',
        'Visualization'
      ],
      pricing: {
        analysis: { price: 3000, period: 'one-time', features: ['Data analysis', 'Insights report', 'Recommendations'] },
        platform: { price: 5000, period: 'month', features: ['Mining platform', 'Automated insights', 'Support'] },
        custom: { price: 200, period: 'hour', features: ['Custom analysis', 'Specialized models', 'Expert consultation'] }
      },
      icon: Database,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      rating: 4.6,
      clients: '70+'
    },
    {
      id: 'ai-speech-recognition',
      name: 'AI Speech Recognition',
      category: 'speech',
      description: 'Advanced speech-to-text and voice recognition solutions.',
      features: [
        'Real-time transcription',
        'Multi-language support',
        'Speaker identification',
        'Voice commands',
        'Noise reduction',
        'Custom vocabulary',
        'API integration',
        'Batch processing'
      ],
      pricing: {
        basic: { price: 0.02, period: 'per minute', features: ['Basic transcription', 'Standard accuracy', 'API access'] },
        advanced: { price: 0.05, period: 'per minute', features: ['High accuracy', 'Custom models', 'Priority processing'] },
        enterprise: { price: 10000, period: 'month', features: ['Unlimited usage', 'Custom training', 'Dedicated support'] }
      },
      icon: Mic,
      color: 'from-emerald-500 to-green-500',
      popular: true,
      rating: 4.8,
      clients: '95+'
    },
    {
      id: 'ai-optimization',
      name: 'AI Business Optimization',
      category: 'optimization',
      description: 'AI-driven optimization solutions to improve business processes and efficiency.',
      features: [
        'Process optimization',
        'Resource allocation',
        'Scheduling optimization',
        'Cost reduction',
        'Performance improvement',
        'ROI maximization',
        'Continuous learning',
        'Real-time adjustments'
      ],
      pricing: {
        assessment: { price: 4000, period: 'one-time', features: ['Business analysis', 'Optimization strategy', 'ROI projection'] },
        implementation: { price: 180, period: 'hour', features: ['Solution implementation', 'Testing', 'Training'] },
        ongoing: { price: 2500, period: 'month', features: ['Continuous optimization', 'Monitoring', 'Support'] }
      },
      icon: Settings,
      color: 'from-amber-500 to-orange-500',
      popular: false,
      rating: 4.7,
      clients: '55+'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain },
    { id: 'ml', name: 'Machine Learning', icon: Brain },
    { id: 'vision', name: 'Computer Vision', icon: Eye },
    { id: 'nlp', name: 'Natural Language', icon: MessageSquare },
    { id: 'analytics', name: 'Predictive Analytics', icon: BarChart3 },
    { id: 'automation', name: 'AI Automation', icon: Zap },
    { id: 'chatbot', name: 'AI Chatbots', icon: MessageSquare },
    { id: 'recommendation', name: 'Recommendation', icon: Target },
    { id: 'security', name: 'AI Security', icon: Shield },
    { id: 'content', name: 'Content Generation', icon: FileText },
    { id: 'data', name: 'Data Mining', icon: Database },
    { id: 'speech', name: 'Speech Recognition', icon: Mic },
    { id: 'optimization', name: 'Business Optimization', icon: Settings }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Cutting-Edge Artificial Intelligence for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Harness the power of artificial intelligence to transform your business operations. 
            From machine learning to computer vision, we provide comprehensive AI solutions that drive innovation and growth.
          </p>
          
          {/* Contact CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button neon-glow"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white neon-glow'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`cyber-card hologram-effect relative overflow-hidden ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">{service.rating} ({service.clients} clients)</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 capitalize">{plan}:</span>
                        <span className="text-white font-semibold">
                          {details.price.toString().includes('.') ? `$${details.price}` : `$${details.price.toLocaleString()}`}
                          {details.period === 'one-time' ? ' one-time' : `/${details.period}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={`/contact?service=${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium text-center block hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Started
                  </a>
                  <a
                    href={`/contact?service=${service.id}&demo=true`}
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium text-center block hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            );
          })}
        </section>

        {/* Why Choose Our AI Services */}
        <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16 rounded-2xl cyber-card mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver solutions 
              that drive real business value and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Advanced AI Technology</h3>
              <p className="text-gray-300 text-sm">We use the latest AI frameworks and models to deliver state-of-the-art solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300 text-sm">Our AI specialists have years of experience in machine learning and data science.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300 text-sm">We've helped 500+ businesses achieve significant ROI through AI implementation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure & Compliant</h3>
              <p className="text-gray-300 text-sm">All our AI solutions are built with security and compliance in mind.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 py-16 rounded-2xl cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with cutting-edge AI solutions. Get started with a free consultation 
            and discover how AI can revolutionize your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+13024640950"
              className="cyber-button neon-glow"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>✓ Free AI consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ Proof of concept</p>
            <p>✓ 24/7 support available</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;