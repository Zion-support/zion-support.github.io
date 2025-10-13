  Eye,
  AlertTriangle,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,

  Activity,

  TrendingUp,

  Settings,

  Database;} from 'lucide-react'
const SecurityMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: '24/7 Real-time Monitoring',
      description: 'Continuous surveillance of your entire IT infrastructure with instant threat detection and response.',},
    {icon: AlertTriangle,
      title: 'Advanced Threat Detection',
      description: 'AI-powered analysis to identify sophisticated cyber threats before they impact your business.',},
    {icon: BarChart,
      title: 'Comprehensive Analytics',
      description: 'Detailed security reports and insights to help you understand and improve your security posture.',},
    {icon: Zap,
      title: 'Instant Response',
      description: 'Automated incident response and immediate notification systems to minimize security breaches.',}}
  ]
const benefits = [
];
    '24/7 continuous security monitoring',
    'AI-powered threat detection and analysis',
    'Real-time alerts and notifications',
    'Comprehensive security reporting',

    'Automated incident response',

    'Compliance monitoring and reporting',

    'Expert security team support',

    'Customizable monitoring rules'
  ]
return (
    <>
  <Helmet />
        <title>Security Monitoring Services - Zion Tech Group | 24/7 Cybersecurity</title>
        <meta name="description" content="AI-powered solution" />
      <Helmet>
        <title>Security Monitoring Services - Zion Tech Group | 24/7 Cybersecurity</title>
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
              <h1>Security Monitoring Services;</h1>
              </h1>
              <p>Protect your business with our advanced 24/7 security monitoring solutions.;</p>
                Real-time threat detection, instant alerts, and expert response to keep your data safe.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>
                  <Shield>
                  Get Protected Now;
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
              <h2>Why Choose Our Security Monitoring?</h2>
              </h2>
              <p>Our security monitoring solutions deliver unmatched protection with cutting-edge technology and expert oversight.,</p>
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
              <p>Experience comprehensive security protection with our advanced monitoring services.,</p>
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
              <h2>Ready to Secure Your Business?</h2>
              </h2>
              <p>Contact our security experts to discuss your monitoring needs and get a customized protection plan.</p>
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

export default SecurityMonitoringPage;

