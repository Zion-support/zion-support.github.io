'use client';
import React from 'react';
import { Users, Phone, Mail, Calendar, BarChart, Target, CheckCircle, ArrowRight, Phone as PhoneIcon, Mail as MailIcon, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const CRMLitePage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and manage all your customer contacts in one place'
    },
    {
      icon: Phone,
      title: 'Communication Tracking',
      description: 'Track all interactions with customers across multiple channels'
    },
    {
      icon: Calendar,
      title: 'Task Management',
      description: 'Schedule and track follow-ups, meetings, and important tasks'
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Monitor sales performance with detailed reports and insights'
    },
    {
      icon: Target,
      title: 'Lead Management',
      description: 'Track leads from initial contact to conversion'
    },
    {
      icon: Mail,
      title: 'Email Integration',
      description: 'Sync with your email for seamless communication tracking'
    }
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
      popular: false
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
      popular: true
    },
    {
      name: 'Enterprise',
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
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup wizard',
      metric: '5 min setup'
    },
    {
      title: 'Mobile Ready',
      description: 'Access your CRM anywhere with our mobile app',
      metric: '100% mobile'
    },
    {
      title: 'Affordable',
      description: 'Powerful CRM features at a fraction of the cost',
      metric: '80% savings'
    },
    {
      title: 'No Training Required',
      description: 'Intuitive interface that anyone can use immediately',
      metric: 'Zero learning curve'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">*</div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/</div>}</div>
     <//div> <//div><div className="container mx-auto px-4 py-16">
       </div className="container mx-auto px-4 py-16"> </div className="container mx-auto px-4 py-16"><div className="text-center mb-16">
        </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h1 className="text-5xl font-bold text-white mb-6">
            CR</h1 className="text-5xl font-bold text-white mb-6">M</h1 className="text-5xl font-bold text-white mb-6"> </h1><span className="text-cyan-400">Li</span className="text-cyan-400">t</span className="text-cyan-400">e</span><p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">The perfect CRM solution for small and medium businesses. Simple, powerful, and affordable customer relationship manageme</p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">n</p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">t</p>
            that helps you grow your business without the complexit<//p>y<//p>.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Users className="w-5 h-5 mr-2" >Get Start</Users className="w-5 h-5 mr-2" >e</Users className="w-5 h-5 mr-2" >d</Users>
          <//Users> <//Users> </Users>
           <//Users> <//Users><Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ><BarChart className="w-5 h-5 mr-2" >Try De</BarChart className="w-5 h-5 mr-2" >m</BarChart className="w-5 h-5 mr-2" >o</BarChart>
          <//BarChart> <//BarChart> </BarChart>
        <//BarChart> <//BarChart> </div>
      <//div> <//div> </div>

        {/* Features Section */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Essential</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Featur</span className="text-cyan-400">e</span className="text-cyan-400">s</span><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) =</div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">></div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
               </div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              > </div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ><div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                </div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"> </div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"> </div><feature.icon className="w-6 h-6 text-white" />
               </feature.icon className="w-6 h-6 text-white" /> </feature.icon className="w-6 h-6 text-white" /><h3 className="text-xl font-semibold text-white mb-3">{feature.title</h3 className="text-xl font-semibold text-white mb-3">}</h3 className="text-xl font-semibold text-white mb-3"><p className="text-gray-300">{feature.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Pricing Section */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Prici</span className="text-cyan-400">n</span className="text-cyan-400">g</span><div className="grid md:grid-cols-3 gap-8">{plans.map((plan, index) => </div className="grid md:grid-cols-3 gap-8">(</div className="grid md:grid-cols-3 gap-8"><div
                key={index}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 scale-105'
                    : 'border-gray-600 hover:border-cyan-400/50'
                } transition-all duration-300`}
              >{plan.popular &</div
                key={index}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 scale-105'
                    : 'border-gray-600 hover:border-cyan-400/50'
                } transition-all duration-300`}
              >&</div
                key={index}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 scale-105'
                    : 'border-gray-600 hover:border-cyan-400/50'
                } transition-all duration-300`}
              > </div>(</div>
                 <//div> <//div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div><span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    </span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center"> </span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center"> </span><Star className="w-4 h-4 mr-2" >Most Popul</Star className="w-4 h-4 mr-2" >a</Star className="w-4 h-4 mr-2" >r</Star>
                  <//Star> <//Star> </Star>
                <//Star> <//Star> </div>
                )}

               <//div> <//div><div className="text-center mb-8">
                </div className="text-center mb-8"> </div className="text-center mb-8"> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.name</h3 className="text-2xl font-bold text-white mb-2">}</h3 className="text-2xl font-bold text-white mb-2"><p className="text-gray-300 mb-4">{plan.descriptio</p className="text-gray-300 mb-4">n</p className="text-gray-300 mb-4">}</p>
                 <//p> <//p><div className="flex items-baseline justify-center">
                  </div className="flex items-baseline justify-center"> </div className="flex items-baseline justify-center"> </div><span className="text-4xl font-bold text-cyan-400">{plan.pric</span className="text-4xl font-bold text-cyan-400">e</span className="text-4xl font-bold text-cyan-400">}</span><span className="text-gray-400 ml-2">{plan.perio</span className="text-gray-400 ml-2">d</span className="text-gray-400 ml-2">}</span><ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) =></ul className="space-y-4 mb-8"> </ul className="space-y-4 mb-8">(</ul>
                   <//ul> <//ul><li key={featureIndex} className="flex items-center text-gray-300">
                     </li key={featureIndex} className="flex items-center text-gray-300"> </li key={featureIndex} className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >{featur</CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >e</CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >}</CheckCircle>
                  <//CheckCircle> <//CheckCircle> </CheckCircle>
                  ))}
               <//CheckCircle> <//CheckCircle><Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >Choose Pl</Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >a</Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >n</Link>
              <//Link> <//Link> </Link>
            <//Link> <//Link> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Benefits Section */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">CRM L</span className="text-cyan-400">i</span className="text-cyan-400">t</span>e</span>?
         <//span> <//span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) =</div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">></div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                </div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"> </div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"> </div><TrendingUp className="w-8 h-8 text-white" />
               </TrendingUp className="w-8 h-8 text-white" /> </TrendingUp className="w-8 h-8 text-white" /><h3 className="text-xl font-semibold text-white mb-3">{benefit.titl</h3 className="text-xl font-semibold text-white mb-3">e</h3 className="text-xl font-semibold text-white mb-3">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-4">{benefit.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><div className="text-cyan-400 font-bold text-lg">{benefit.metr</div className="text-cyan-400 font-bold text-lg">i</div className="text-cyan-400 font-bold text-lg">c</div>}</div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Dashboard Preview */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Clean &</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Intuit</span className="text-cyan-400">i</span className="text-cyan-400">v</span>e</span> Interface
        <//span> <//span> </h2>
         <//h2> <//h2><div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600">
           </div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600"> </div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600"><div className="grid md:grid-cols-3 gap-8">
             </div className="grid md:grid-cols-3 gap-8"> </div className="grid md:grid-cols-3 gap-8"><div className="bg-white/5 rounded-lg p-6">
              </div className="bg-white/5 rounded-lg p-6"> </div className="bg-white/5 rounded-lg p-6"> </div><h3 className="text-lg font-semibold text-white mb-4">Dashboard Overvi</h3 className="text-lg font-semibold text-white mb-4">e</h3 className="text-lg font-semibold text-white mb-4">w</h3>
               <//h3> <//h3><div className="space-y-3">
                 </div className="space-y-3"> </div className="space-y-3"><div className="flex justify-between text-sm">
                  </div className="flex justify-between text-sm"> </div className="flex justify-between text-sm"> </div><span className="text-gray-300">Total Contac</span className="text-gray-300">t</span className="text-gray-300">s</span><span className="text-cyan-400">1,</span className="text-cyan-400">2</span className="text-cyan-400">4</span>7</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex justify-between text-sm">
                  </div className="flex justify-between text-sm"> </div className="flex justify-between text-sm"> </div><span className="text-gray-300">Active Lea</span className="text-gray-300">d</span className="text-gray-300">s</span><span className="text-green-400">8</span>9</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex justify-between text-sm">
                  </div className="flex justify-between text-sm"> </div className="flex justify-between text-sm"> </div><span className="text-gray-300">This Month Sal</span className="text-gray-300">e</span className="text-gray-300">s</span><span className="text-yellow-400">$45,</span className="text-yellow-400">2</span className="text-yellow-400">3</span>0</span>
                <//span> <//span> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
             <//div> <//div><div className="bg-white/5 rounded-lg p-6">
              </div className="bg-white/5 rounded-lg p-6"> </div className="bg-white/5 rounded-lg p-6"> </div><h3 className="text-lg font-semibold text-white mb-4">Recent Activiti</h3 className="text-lg font-semibold text-white mb-4">e</h3 className="text-lg font-semibold text-white mb-4">s</h3>
               <//h3> <//h3><div className="space-y-2 text-sm text-gray-300">
                 </div className="space-y-2 text-sm text-gray-300"> </div className="space-y-2 text-sm text-gray-300"><div>• New lead: John Smith</div><div>• Follow-up schedu</div>l</div>e</div>d</div>
                 <//div> <//div><div>• Email sent to cli</div>e</div>n</div>t</div>
               <//div> <//div><div>• Meeting comple</div>t</div>e</div>d</div>
            <//div> <//div> </div>
             <//div> <//div><div className="bg-white/5 rounded-lg p-6">
              </div className="bg-white/5 rounded-lg p-6"> </div className="bg-white/5 rounded-lg p-6"> </div><h3 className="text-lg font-semibold text-white mb-4">Quick Actio</h3 className="text-lg font-semibold text-white mb-4">n</h3 className="text-lg font-semibold text-white mb-4">s</h3>
               <//h3> <//h3><div className="space-y-2">
                </div className="space-y-2"> </div className="space-y-2"> </div><button className="w-full bg-cyan-400 text-white py-2 px-4 rounded text-sm">Add Contac</button className="w-full bg-cyan-400 text-white py-2 px-4 rounded text-sm">t</button className="w-full bg-cyan-400 text-white py-2 px-4 rounded text-sm"><button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">Schedule Meetin</button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">g</button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm"><button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">Send Ema</button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">i</button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">l</button>
                <//button> <//button> </button>
              <//button> <//button> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Integration Section */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Seamless</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Integrati</span className="text-cyan-400">o</span className="text-cyan-400">n</span>s</span>
        <//span> <//span> </h2>
         <//h2> <//h2><div className="grid md:grid-cols-4 gap-8">
           </div className="grid md:grid-cols-4 gap-8"> </div className="grid md:grid-cols-4 gap-8"><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="p-4 bg-white/10 rounded-lg mb-4">
              </div className="p-4 bg-white/10 rounded-lg mb-4"> </div className="p-4 bg-white/10 rounded-lg mb-4"> </div><Mail className="w-8 h-8 text-cyan-400 mx-auto" />
             </Mail className="w-8 h-8 text-cyan-400 mx-auto" /> </Mail className="w-8 h-8 text-cyan-400 mx-auto" /><h3 className="text-lg font-semibold text-white">Emai</h3 className="text-lg font-semibold text-white">l</h3 className="text-lg font-semibold text-white"><p className="text-gray-300 text-sm">Gmail, Outlook, Yah</p className="text-gray-300 text-sm">o</p className="text-gray-300 text-sm">o</p>
          <//p> <//p> </div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="p-4 bg-white/10 rounded-lg mb-4">
              </div className="p-4 bg-white/10 rounded-lg mb-4"> </div className="p-4 bg-white/10 rounded-lg mb-4"> </div><Phone className="w-8 h-8 text-cyan-400 mx-auto" />
             </Phone className="w-8 h-8 text-cyan-400 mx-auto" /> </Phone className="w-8 h-8 text-cyan-400 mx-auto" /><h3 className="text-lg font-semibold text-white">Phon</h3 className="text-lg font-semibold text-white">e</h3 className="text-lg font-semibold text-white"><p className="text-gray-300 text-sm">VoIP integrati</p className="text-gray-300 text-sm">o</p className="text-gray-300 text-sm">n</p>
          <//p> <//p> </div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="p-4 bg-white/10 rounded-lg mb-4">
              </div className="p-4 bg-white/10 rounded-lg mb-4"> </div className="p-4 bg-white/10 rounded-lg mb-4"> </div><Calendar className="w-8 h-8 text-cyan-400 mx-auto" />
             </Calendar className="w-8 h-8 text-cyan-400 mx-auto" /> </Calendar className="w-8 h-8 text-cyan-400 mx-auto" /><h3 className="text-lg font-semibold text-white">Calenda</h3 className="text-lg font-semibold text-white">r</h3 className="text-lg font-semibold text-white"><p className="text-gray-300 text-sm">Google Calendar, Outlo</p className="text-gray-300 text-sm">o</p className="text-gray-300 text-sm">k</p>
          <//p> <//p> </div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="p-4 bg-white/10 rounded-lg mb-4">
              </div className="p-4 bg-white/10 rounded-lg mb-4"> </div className="p-4 bg-white/10 rounded-lg mb-4"> </div><BarChart className="w-8 h-8 text-cyan-400 mx-auto" />
             </BarChart className="w-8 h-8 text-cyan-400 mx-auto" /> </BarChart className="w-8 h-8 text-cyan-400 mx-auto" /><h3 className="text-lg font-semibold text-white">Analytic</h3 className="text-lg font-semibold text-white">s</h3 className="text-lg font-semibold text-white"><p className="text-gray-300 text-sm">Google Analytics, Mixpan</p className="text-gray-300 text-sm">e</p className="text-gray-300 text-sm">l</p>
          <//p> <//p> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* CTA Section */}
       <//div> <//div><div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
        </div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"> </div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"> </div><h2 className="text-3xl font-bold text-white mb-4">Start Managing Your Customers Better Tod</h2 className="text-3xl font-bold text-white mb-4">a</h2 className="text-3xl font-bold text-white mb-4">y</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of businesses using CRM Lite to streamline their customer relationships and grow their sale</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">s</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><ArrowRight className="w-5 h-5 mr-2" >Get Started N</ArrowRight className="w-5 h-5 mr-2" >o</ArrowRight className="w-5 h-5 mr-2" >w</ArrowRight>
          <//ArrowRight> <//ArrowRight> </ArrowRight>
           <//ArrowRight> <//ArrowRight><Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ><Target className="w-5 h-5 mr-2" >View All Pla</Target className="w-5 h-5 mr-2" >n</Target className="w-5 h-5 mr-2" >s</Target>
          <//Target> <//Target> </Target>
        <//Target> <//Target> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>
  <//div> <//div> </div>
  );
};

export default CRMLitePage<//div>;<//div>