import { Helmet , CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'react-helmet-async';';'import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'lucide-react';'';
const PagePage: React.FC = () => {;
const features = [
  
    {
  
      icon: Brain,
      title: 'AI-Powered Solutions',''      description: 'Advanced AI technology to transform your business operations and improve efficiency'''    },
    {
  
      icon: Zap,
      title: 'High Performance',''      description: 'Lightning-fast processing and real-time analytics for optimal results'''    },
    {
  
      icon: Shield,
      title: 'Enterprise Security',''      description: 'Bank-level security with encryption and compliance standards'''    },
    {
  
      icon: Globe,
      title: 'Global Reach',''      description: 'Worldwide deployment and support for international businesses'''    }
  ];
const benefits = [
  
    'Advanced AI technology integration',''    'Real-time processing and analytics',''    'Enterprise-grade security and compliance',''    'Scalable and flexible solutions',''    '24/7 technical support',''    'Easy integration with existing systems',''    'Cost-effective pricing plans',''    'Proven track record of success'''  ];

export default function PagePage() {
  return (
  
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""<Helmet>
<title>Page | Zion Tech Group</title>
<meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />""<meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" /></Helmet>;";"const CybersecurityPage: React.FC = () => {;
const features = [
  
    {
  
      icon: Shield,
      title: 'Advanced Threat Protection',''      description: 'Multi-layered security solutions to protect against sophisticated cyber threats and attacks.'''    },
    {
  
      icon: Lock,
      title: 'Data Encryption',''      description: 'End-to-end encryption for all your sensitive data and communications.'''    },
    {
  
      icon: Eye,
      title: '24/7 Monitoring',''      description: 'Continuous monitoring and real-time threat detection across all your systems.'''    },
    {
  
      icon: AlertTriangle,
      title: 'Incident Response',''      description: 'Rapid response and recovery services to minimize damage from security breaches.'''    }
  ]
const benefits = [
  
    'Protect sensitive business data',''    'Comply with industry regulations',''    'Prevent costly security breaches',''    'Maintain business continuity',''    'Build customer trust and confidence',''    'Reduce security-related downtime',''    'Access to security experts',''    'Customized security solutions'''  ]

    'Proven track record of success'''  ]
<Helmet />
<title>Page | Zion Tech Group</title>
<meta name="description" content="AI-powered solution" />""<meta name="keywords" content="AI, artificial intelligence, business solutions" /></Helmet>""</div></div>
</div></section>
      {/* Features Section */} <section className="py-20 px-4">""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>""<p className="text-xl text-gray-300">Section description</p></div>""</div></section>
<div className="max-w-7xl mx-auto"></div>""<div className="text-center mb-16"></div>""<h2>Why Choose Our Page?,</h2></h2>
<p>Our page solutions deliver unmatched performance, security, and scalability.</p></p>
</div>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,""            {features.map((feature, index) => (
  
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,""                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>""<feature />
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""<p className="text-gray-300">{feature.description}</p>""              ))
            ))}
          </div></div>
</section>
      {/* Benefits Section */} <section className="py-20 px-4">""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>""<p className="text-xl text-gray-300">Section description</p></div>""</div></section>
<div className="max-w-7xl mx-auto"></div>""<div className="text-center mb-16"></div>""<h2>Key Benefits;</h2></h2>
<p>Experience the power of our page solutions for your business.,</p></p>
</div>
<div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,""            {benefits.map((benefit, index) => (
  
                <div key={index}className="flex items-start space-x-3"></div>""<CheckCircle />
<p className="text-gray-300 text-lg">{benefit</p>}</p></div>""            ))}
          </div></div>
</section>
      {/* CTA Section */} <section className="py-20 px-4">""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>""<p className="text-xl text-gray-300">Section description</p></div>""</div></section>
<div className="max-w-4xl mx-auto text-center"></div>""<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,""            <h2>Ready to Get Started?</h2></h2>
<p>Contact our experts to discuss your page needs and get a customized solution.</p></p>
<div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,""              <button>
<Phone>
                Call Now;
              </button>
<button>
<Mail>
                Email Us;
              </button></div>
</div></div>
</section>;
export default PagePage;

}}
>>>>>>> cursor/delete-records-a75e
