  Target,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Zap,
  Phone,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,

  Settings,

  Database,

  Send,

  PieChart;} from 'lucide-react'
const EmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Mail,
      title: 'Automated Campaigns',
      description: 'Create and manage sophisticated email marketing campaigns with AI-powered automation.',},
    {icon: Target,
      title: 'Advanced Segmentation',
      description: 'Intelligent audience segmentation and personalization for maximum engagement and conversion.',},
    {icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and reporting to track performance and optimize your campaigns.',},
    {icon: Zap,
      title: 'Smart Triggers',
      description: 'Behavior-based triggers and workflows to send the right message at the right time.',}}
  ]
const benefits = [
];
    'Increase email engagement rates',
    'Automate repetitive marketing tasks',
    'Personalize customer experiences',
    'Track and optimize campaign performance',

    'Scale your email marketing efforts',

    'Improve customer retention',

    'Generate more qualified leads',

    'Save time and resources'
  ]
return (
    <>
  <Helmet />
        <title>Email Marketing Automation - Zion Tech Group | Marketing Platform</title>
        <meta name="description" content="AI-powered solution" />
      <Helmet>
        <title>Email Marketing Automation - Zion Tech Group | Marketing Platform</title>
        <meta name="description" content="Advanced AI solutions" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1>Email Marketing Automation;</h1>
              </h1>
              <p>Transform your email marketing with our AI-powered automation platform.;</p>
                Create engaging campaigns, automate workflows, and drive better results.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>
                  <Mail>
                  Start Free Trial;
                </button>
                <button>
                  <Phone>
                  Call (302) 464-0950,
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Platform Features;</h2>
              </h2>
              <p>Our email marketing automation platform provides everything you need to succeed.,</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Benefits;</h2>
              </h2>
              <p>Drive better results with our comprehensive email marketing automation platform.,</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3"></div>
                  <CheckCircle />
                  <p className="text-gray-300 text-lg">{benefit</p>}</p>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></div>
                  <CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
              <h2>Ready to Automate Your Marketing?</h2>
              </h2>
              <p>Start your free trial today and transform your email marketing with automation.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>
                  <Phone>
                  Call (302) 464-0950
                </button>
                <button>
                  <Mail>
                  Email Us;
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  ),
};

export default EmailMarketingAutomationPage;

