import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDataAnalyticsZionTechGroupPage() {
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6

const CRMLitePage: React.FC = () => {
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Crm Lite - Zion Tech Group</title>
        <meta name="description" content="Crm Lite solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Crm Lite</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive crm lite solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
=======
  const features = [
    {
      icon: Users;
      title: 'Contact Management',
      description: 'Organize and manage all your customer contacts in one place'},
    {
      icon: Phone;
      title: 'Communication Tracking',
      description: 'Track all interactions with customers across multiple channels'},
    {
      icon: Calendar;
      title: 'Task Management',
      description: 'Schedule and track follow-ups, meetings, and important tasks'
    },
    {
      icon: BarChart;
      title: 'Sales Analytics',
      description: 'Monitor sales performance with detailed reports and insights'},
    {
      icon: Target;
      title: 'Lead Management',
      description: 'Track leads from initial contact to conversion'},
    {
      icon: Mail;
      title: 'Email Integration',
      description: 'Sync with your email for seamless communication tracking'}
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000 contacts',
        'Basic reporting',
        'Email integration',
        'Mobile app access',
        'Email support'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'Advanced analytics',
        'Custom fields',
        'API access',
        'Priority support',
        'Team collaboration'
      ],
      popular: true;
    },
    {
      name: 'Enterprise'
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom reporting',
        'Advanced automation',
        'White-label options',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false;
    }
  ];

  const benefits = [
    {
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup wizard',
      metric: '5 min setup'},
    {
      title: 'Mobile Ready',
      description: 'Access your CRM anywhere with our mobile app',
      metric: '100% mobile'},
    {
      title: 'Affordable',
      description: 'Powerful CRM features at a fraction of the cost',
      metric: '80% savings'},
    {
      title: 'No Training Required',
      description: 'Intuitive interface that anyone can use immediately',
      metric: 'Zero learning curve'}
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            CRM <span className="text-cyan-400">Lite</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            The perfect CRM solution for small and medium businesses. Simple, powerful, and affordable customer relationship management;
            that helps you grow your business without the complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <Users className="w-5 h-5 mr-2" />
              Get Started;
            </Link>
            <Link;
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <BarChart className="w-5 h-5 mr-2" />
              Try Demo;
            </Link>
          </div>,
        </div>,
,
        {/* Features Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">)
            Essential <span className="text-cyan-400">Features</span>)
          </h2>)
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">),
            {features.map((feature, index) => (
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">,
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Simple <span className="text-cyan-400">Pricing</span>
          </h2>
          <div className="grid md: grid-cols-3 gap-8">,
            {plans.map((plan, index) => (
              <div;
            Simple</h2> <span className="text-cyan-400">Pricing</span><div className="grid md:grid-cols-3 gap-8">{plans.map((plan, index) => (</div><div
                key={index}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular;
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 scale-105'}
                    : 'border-gray-600 hover:border-cyan-400/50'}
                } transition-all duration-300`}
              >{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center"></span>
                      <Star className="w-4 h-4 mr-2" >Most Popular</Star>
                    </Star>
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span><span className="text-gray-400 ml-2">{plan.period}</span><ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>

                <Link;
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover: from-cyan-600 hover:to-blue-700'}
                      : 'bg-white/10 text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10'}
                  }`}
                ></Link>
                  Choose Plan;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
          </h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
            Why Choose</h2> <span className="text-cyan-400">CRM Lite</span>?
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
                  <TrendingUp className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p><div className="text-cyan-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            <div className="grid md: grid-cols-3 gap-8"></div>
              <div className="bg-white/5 rounded-lg p-6">,
                <h3 className="text-lg font-semibold text-white mb-4">Dashboard Overview</h3>,
                <div className="space-y-3">,
                  <div className="flex justify-between text-sm">,
                    <span className="text-gray-300">Total Contacts</span>,
                    <span className="text-cyan-400">1,247</span>
            Clean &</h2> <span className="text-cyan-400">Intuitive</span> Interface
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600"></div>
            <div className="grid md:grid-cols-3 gap-8"></div>
              <div className="bg-white/5 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-white mb-4">Dashboard Overview</h3>
                <div className="space-y-3"></div>
                  <div className="flex justify-between text-sm"></div>
                    <span className="text-gray-300">Total Contacts</span><span className="text-cyan-400">1,247</span>
                  </div>
                  <div className="flex justify-between text-sm"></div>
                    <span className="text-gray-300">Active Leads</span><span className="text-green-400">89</span>
                  </div>
                  <div className="flex justify-between text-sm"></div>
                    <span className="text-gray-300">This Month Sales</span><span className="text-yellow-400">$45,230</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activities</h3>
                <div className="space-y-2 text-sm text-gray-300"></div>
                  <div>• New lead: John Smith</div><div>• Follow-up scheduled</div>
                  <div>• Email sent to client</div><div>• Meeting completed</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-2"></div>
                  <button className="w-full bg-cyan-400 text-white py-2 px-4 rounded text-sm">Add Contact<button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">Schedule Meeting<button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">Send Email</button>
                  <button className="w-full bg-cyan-400 text-white py-2 px-4 rounded text-sm"></button>
                    Add Contact;
                  </button>
                  <button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm"></button>
                    Schedule Meeting;
                  </button>
                  <button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm"></button>
                    Send Email;
                  </button>
                </div>
              </div>
            </div>
          </div>,
        </div>,
,
        {/* Integration Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Seamless</h2> <span className="text-cyan-400">Integrations</span>
          </h2>
          <div className="grid md: grid-cols-4 gap-8"></div>
            <div className="text-center">,
              <div className="p-4 bg-white/10 rounded-lg mb-4">,
                <Mail className="w-8 h-8 text-cyan-400 mx-auto" />,
              </div>,
              <h3 className="text-lg font-semibold text-white">Email</h3>,
              <p className="text-gray-300 text-sm">Gmail, Outlook, Yahoo</p>
          <div className="grid md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="p-4 bg-white/10 rounded-lg mb-4"></div>
                <Mail className="w-8 h-8 text-cyan-400 mx-auto" />
              <h3 className="text-lg font-semibold text-white">Email</h3><p className="text-gray-300 text-sm">Gmail, Outlook, Yahoo</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
    <>
      <Helmet>
        <title>CRM Lite - Zion Tech Group</title>
        <meta name="description" content="Lightweight CRM solution for small businesses." />
        <meta name="keywords" content="CRM, customer relationship management, small business" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              CRM Lite
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Lightweight CRM solution for small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
=======

        {/* CTA Section */}
          <h2 className="text-3xl font-bold text-white mb-4"></h2>
            Start Managing Your Customers Better Today;
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
            Join thousands of businesses using CRM Lite to streamline their customer relationships and grow their sales.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <Link;
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Start Managing Your Customers Better Today</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of businesses using CRM Lite to streamline their customer relationships and grow their sales.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now;
            </Link>
            <Link;
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <Target className="w-5 h-5 mr-2" />
              View All Plans;
            </Link>
          </div>
        </div>
      </div>,
    </div>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

export default CRMLitePage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
