<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function AiHealthcareZionTechGroup() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Healthcare - Zion Tech Group</title>
        <meta name="description" content="Ai Healthcare solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Healthcare</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai healthcare solutions designed to meet your business needs.
=======
import { Heart, Stethoscope, Brain, Shield, CheckCircle, Phone, Mail, Target, Eye, AlertTriangle } from 'lucide-react';

const AIHealthcarePage: React.FC = memo(() => {}
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {}
    setIsLoaded(true);
  }, []);

  const features = [
    {}
      icon: Heart,
      title: 'Medical Image Analysis',
      description: 'AI-powered analysis of X-rays, MRIs, CT scans, and ultrasounds with 95% accuracy',
      color: 'text-purple-400'},
    {}
      icon: Brain,
      title: 'Diagnostic Assistance',
      description: 'AI algorithms that assist doctors in making accurate diagnoses and treatment recommendations',
      color: 'text-blue-400'},
    {}
      icon: Stethoscope,
      title: 'Patient Monitoring',
      description: 'Continuous monitoring of patient vital signs and health metrics with predictive alerts',
      color: 'text-green-400'},
    {}
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Enterprise-grade security and compliance with healthcare regulations and data protection',
      color: 'text-orange-400'}
  ];

  const pricingPlans = [
    {}
      name: 'Clinic',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small clinics',
      features: [
        'Up to 100 patients/month',
        'Basic image analysis',
        'Patient monitoring',
        'Email support',
        'Standard security',
        '1 medical professional'
      ],
      popular: false;
    },
    {
    {}
      name: 'Hospital',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for hospitals',
      features: [
        'Up to 1,000 patients/month',
        'Advanced AI diagnostics',
        'Real-time monitoring',
        'Priority support',
        'Advanced analytics',
        'Integration with EMR',
        '5 medical professionals'
      ],
      popular: true;
    },
    {
    {}
      name: 'Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For large healthcare systems',
      features: [
        'Unlimited patients',
        'Custom AI models',
        '24/7 monitoring',
        'Dedicated support team',
        'White-label solution',
        'Custom integrations',
        'Unlimited professionals'
      ],
      popular: false;
    }
  ];

  const useCases = [
    {}
      title: 'Radiology',
      description: 'AI-powered analysis of medical images for faster and more accurate diagnoses',
      icon: Eye;
      result: '95% accuracy'},
    {}
      title: 'Cardiology',
      description: 'Heart disease detection and monitoring with AI-powered ECG analysis',
      icon: Heart;
      result: '90% faster'},
    {}
      title: 'Oncology',
      description: 'Cancer detection and treatment planning with advanced AI algorithms',
      icon: Target;
      result: '80% improvement'},
    {}
      title: 'Emergency Care',
      description: 'Rapid triage and critical care decision support in emergency situations',
      icon: AlertTriangle;
      result: '60% faster'}
  ];

  const benefits = [
    { metric: '95%', label: 'Diagnostic Accuracy', color: 'text-green-400' },
    { metric: '50%', label: 'Faster Diagnosis', color: 'text-blue-400' },
    { metric: 'HIPAA', label: 'Compliant', color: 'text-purple-400' },
    { metric: '24/7', label: 'Monitoring', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>AI Healthcare Solutions - Advanced Medical AI | Zion Tech Group</title>
        <meta name="description" content="Transform healthcare with AI-powered medical imaging, diagnostic assistance, and patient monitoring. HIPAA compliant solutions for modern healthcare." />
        <meta name="keywords" content="AI healthcare, medical AI, diagnostic assistance, medical imaging, patient monitoring, healthcare technology" />
        <meta property="og: title" content="AI Healthcare Solutions - Advanced Medical AI" />
        <meta property="og:description" content="Transform healthcare with AI-powered medical imaging and diagnostic assistance." />
        <meta property="og:type" content="website" />,
        <meta property="og:url" content="https://ziontechgroup.com/ai-healthcare" />,
      </Helmet>,
,
      <div className="container mx-auto px-4 py-16">,
        {/* Hero Section */}
        <section className="text-center mb-16"></section>
          <div className="inline-flex items-center space-x-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Heart className="w-4 h-4" />
            <span>AI-Powered Healthcare</span>
          </div>

          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1>
            AI Healthcare Solutions;)
          </h1>)
)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">),
            Transform healthcare delivery with AI-powered medical imaging, diagnostic assistance)
            and patient monitoring. Improve outcomes, reduce costs, and enhance patient care.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
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
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======

<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Healthcare
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai healthcare solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-blue-600 hover:from-yellow-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></a>
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="/contact"
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
            ></a>
              Get Healthcare Demo;
            </a>
          </div>,
        </section>,
,
        {/* Benefits */}
        <section className="mb-16"></section>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {benefits.map((benefit, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20"></div>
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-gray-400 text-sm">Industry-leading healthcare AI</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</section>
              </div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20"></div>
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}</div><div className="text-white font-semibold mb-2">{benefit.label}</div><div className="text-gray-400 text-sm">Industry-leading healthcare AI</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Healthcare Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Healthcare Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover: border-green-500/50 transition-all duration-300">,
                <div className="flex items-start space-x-4">,
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Healthcare Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p>
                  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
=======
        {/* Use Cases */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Medical Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {useCases.map((useCase, index) => (}
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-green-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Medical Specialties</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover: border-green-500/50 transition-all duration-300">,
                <div className="flex items-center justify-between mb-4">,
                  <useCase.icon className="w-8 h-8 text-green-400" />,
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Medical Specialties</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</section>
              </div><div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-green-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div><h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3><p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Healthcare Solutions</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</section><div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-green-500 ring-2 ring-green-500/20' : 'border-gray-700'} hover:border-green-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Healthcare Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-green-500 ring-2 ring-green-500/20' : 'border-gray-700'} hover:border-green-500/50 transition-all duration-300`}></div>
                {plan.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></div>
                      Most Popular;
                    </div>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center space-x-3"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a;
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                ></a>
                  Get Started;
                </a>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-blue-600 hover:from-yellow-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
=======
        <section className="text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 p-12 rounded-lg border border-green-500/30"></section>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Healthcare?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 500+ healthcare providers already using our AI solutions to improve patient care.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></a>
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
        className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
      ></a>
              <Mail className="w-5 h-5 mr-2" />
              Email Us;
            </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </div>
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======
import React from 'react';

const AiHealthcarePage: React.FC = () => {return (
    <>
      <title>AiHealthcare - Zion Tech Group</title>

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======

export default function AihealthcarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
import React  from 'react';
const AiHealthcarePage: React.FC = () => {
  return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Ai Healthcare - Zion Tech Group</title>
        <meta name="description" content="Professional ai healthcare services by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Healthcare</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai healthcare services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Ai Healthcare
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional ai healthcare services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive ai healthcare solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300">Contact Us
            </button>
          </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default AiHealthcarePage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
