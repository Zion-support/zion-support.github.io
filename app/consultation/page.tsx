<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
interface ConsultationType {}
=======
'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star } from 'lucide-react;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

interface ConsultationType {
>>>>>>> origin/main
  id: number;

  name: string;

  description: string;

  duration: string;

  price: string;

  features: string[];
<<<<<<< HEAD
=======

>>>>>>> origin/main
  popular?: boolean;

}

const ConsultationPage: React.FC = () => {}
  const [selectedType, setSelectedType] = useState<number | null>(null);
<<<<<<< HEAD
  const [formData, setFormData] = useState({}
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consultationType: ''
=======

  const [formData, setFormData] = useState({
    name: ',
    email: ',
    phone: ',
    company: ',
    message: ',
    consultationType: 
>>>>>>> origin/main
  });
  const consultationTypes: ConsultationType[] = []
    {}
      id: 1,
<<<<<<< HEAD
  popular: boolean});;)
}

const ConsultationPage: React.FC = () => {}
  const consultationServices = []
    'AI Strategy & Implementation',
    'Cloud Migration Planning',
    'Cybersecurity Assessment',
    'Digital Transformation',
    'IT Infrastructure Review',
    'Technology Roadmap Development'
  ];
  const [selectedType, setSelectedType] = useState<string></string>('');
  const consultationTypes: ConsultationType[] = []
    {}
      id: '1',
      name: 'Discovery Call',
      description: 'Initial consultation to understand your business needs and challenges',
      duration: '30 minutes',
      price: 'Free',
      features: []
        'Business needs assessment',
        'Technology evaluation',
        'Initial recommendations',
        'Next steps planning'
=======
  const consultationServices = [;
    'AI Strategy & Implementation,
    'Cloud Migration Planning,
    'Cybersecurity Assessment,
    'Digital Transformation,
    'IT Infrastructure Review,
    'Technology Roadmap Development
  ];

  const consultationTypes: ConsultationType[] = [
    {
      id: '1,
      name: 'Discovery Call,
      description: 'Initial consultation to understand your business needs and challenges,
      duration: '30 minutes,
      price: 'Free,
      features: [
        'Business needs assessment,
        'Technology evaluation,
        'Initial recommendations,
        'Next steps planning
>>>>>>> origin/main
      ]
    },
    {}
      id: 2,
<<<<<<< HEAD
      name: 'Strategic Planning',
      description: 'Comprehensive analysis and strategic roadmap for your AI transformation',
      duration: '2 hours',
      price: '$500',
      features: []
        'Deep dive into current systems',
        'AI readiness assessment',
        'Strategic roadmap creation',
        'Implementation timeline',
        'ROI projections',
        'Follow-up support'
=======
      name: 'Strategic Planning,
      description: 'Comprehensive analysis and strategic roadmap for your AI transformation,
      duration: '2 hours,
      price: '$500,
      features: [
        'Deep dive into current systems,
        'AI readiness assessment,
        'Strategic roadmap creation,
        'Implementation timeline,
        'ROI projections,
        'Follow-up support
>>>>>>> origin/main
      ],
      popular: true;
    },
    {}
      id: 3,
<<<<<<< HEAD
      name: 'Technical Deep Dive',
      description: 'Detailed technical analysis and architecture recommendations',
      duration: '4 hours',
      price: '$1,200',
      features: []
      features: []
        'Business needs assessment',
        'Technology audit',
        'Solution recommendations',
        'Next steps planning'
      ],
      popular: false});;)
},
    {}
      id: '2',
      name: 'Strategic Planning',
      description: 'Comprehensive technology strategy development for your organization',
      duration: '2-4 hours',
      price: '$500',
      features: []
        'Detailed technology roadmap',
        'Risk assessment',
        'Implementation timeline',
        'Budget planning',
        'ROI analysis'
        'Current IT assessment',
        'Technology roadmap development',
        'Budget planning and optimization',
        'Risk analysis and mitigation',
        'Implementation timeline'
      ],
      popular: true});;)
},
    {}
      id: '3',
      name: 'Technical Deep Dive',
      description: 'In-depth technical analysis and solution architecture design',
      duration: '4-8 hours',
      price: '$1,200',
      features: []
        'Technical architecture review',
        'Security assessment',
        'Performance optimization',
        'Integration planning',
        'Scalability analysis',
        'Detailed technical documentation'
=======
      name: 'Technical Deep Dive,
      description: 'Detailed technical analysis and architecture recommendations,
      duration: '4 hours,
      price: '$1,200,
      features: [},
    {
      id: '3,
      name: 'Technical Deep Dive,
      description: 'In-depth technical analysis and solution architecture design,
      duration: '4-8 hours,
      price: '$1,200,
      features: [
        'Technical architecture review,
        'Security assessment,
        'Performance optimization,
        'Integration planning,
        'Scalability analysis,
        'Detailed technical documentation
>>>>>>> origin/main
      ]
    },
    {}
      id: 4,
<<<<<<< HEAD
      name: 'Executive Briefing',
      description: 'High-level overview for C-level executives and decision makers',
      duration: '1 hour',
      price: '$300',
      features: []
        'Executive summary',
        'Business impact analysis',
        'Investment recommendations',
        'Risk assessment',
        'Competitive advantages'
      ]
        'Implementation strategy'
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Implementation roadmap'
      ],
      popular: false});;)
},
    {}
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '3-5 hours',
      price: '$750',
      features: []
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing guidance',
        'Security policy development',
        'Incident response planning'
      ],
      popular: false});;)
}
  ];
  const [selectedType, setSelectedType] = useState<string>('1');
  const [formData, setFormData] = useState({}
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const experts = []
    {}
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Consultant',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'});;)
},
    {}
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Specialist',
      experience: '12+ years',
      expertise: ['Cloud Migration', 'AWS', 'Azure', 'DevOps'],
      image: '/images/experts/michael-rodriguez.jpg'
    },
      expertise: ['Cloud Migration', 'DevOps', 'Infrastructure'],
      image: '/images/experts/michael-rodriguez.jpg'});;)
},
    {}
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      experience: '10+ years',
      expertise: ['Security Audits', 'Compliance', 'Risk Management'],
      image: '/images/experts/alex-thompson.jpg'});;)
}
  ];
  const handleBooking = (typeId: string) => {}
    setSelectedType(typeId);
    console.log(`Booking consultation: ${typeId}`);
import { Calendar, Clock, User, Mail, Phone, MessageCircle, CheckCircle, ArrowRight, Zap, Target, Users, Award } from 'lucide-react';
const ConsultationPage: React.FC = () => {}
  const [formData, setFormData] = useState({}
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'medium'
  });
  const services = []
    {}
      icon: Zap,
      title: 'AI Strategy & Implementation',
      description: 'Develop and implement AI solutions tailored to your business needs',
      duration: '60-90 minutes'
    },
    {}
      icon: Target,
      title: 'Cloud Migration Planning',
      description: 'Plan and execute seamless cloud migration strategies',
      duration: '45-60 minutes'
    },
    {}
      icon: Users,
      title: 'Digital Transformation',
      description: 'Guide your organization through comprehensive digital transformation',
      duration: '90-120 minutes'
    },
    {}
      icon: Award,
      title: 'Cybersecurity Assessment',
      description: 'Evaluate and strengthen your cybersecurity posture',
      duration: '60-90 minutes'
=======
      name: 'Executive Briefing,
      description: 'High-level overview for C-level executives and decision makers,
      duration: '1 hour,
      price: '$300,
      features: [
        'Executive summary,
        'Business impact analysis,
        'Investment recommendations,
        'Risk assessment,
        'Competitive advantages
      ]
      ],
      popular: false});)}

  ];

  const experts = [    {;
      name: 'Dr. Sarah Chen,
      role: 'AI & Machine Learning Consultant,
      experience: '15+ years,
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science],
      image: '/images/experts/sarah-chen.jpg});)
},
    {
      name: 'Michael Rodriguez,
      role: 'Cloud Architecture Specialist,
      experience: '12+ years,
      expertise: ['Cloud Migration', 'AWS', 'Azure', 'DevOps],
      image: '/images/experts/michael-rodriguez.jpg
    },
    {      name: 'Alex Thompson,
      role: 'Cybersecurity Consultant,
      experience: '10+ years,
      expertise: ['Security Audits', 'Compliance', 'Risk Management],
      image: '/images/experts/alex-thompson.jpg});)
}

  ];

  const handleBooking = (typeId: string) => {;
    setSelectedType(typeId);

    console.log(`Booking consultation: ${typeId});

>>>>>>> origin/main
    }

  ];
<<<<<<< HEAD
  const consultationTypes = []
    {}
      title: 'Discovery Call',
      description: 'Free 30-minute consultation to understand your needs',
      duration: '30 minutes',
      price: 'Free',
      features: ['Needs assessment', 'Solution overview', 'Next steps planning']
    },
    {}
      title: 'Strategy Session',
      description: 'Comprehensive consultation with detailed recommendations',
      duration: '90 minutes',
      price: '$500',
      features: ['Detailed analysis', 'Custom recommendations', 'Implementation roadmap', 'Follow-up support']
    },
    {}
      title: 'Executive Briefing',
      description: 'High-level strategic consultation for leadership teams',
      duration: '2 hours',
      price: '$1,000',
      features: ['Executive summary', 'Strategic recommendations', 'Risk assessment', 'ROI analysis']
    }
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const { name, value } = e.target;
    setFormData(prev = "> ({}"
=======

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {    const { name, value } = e.target;;

    setFormData(prev => ({
>>>>>>> origin/main
      ...prev,
      [name]: value;
    }));

  };
<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {}
    e.preventDefault();
    // Handle form submission;
    console.log('Form submitted:', formData);
  };
const PagePage: React.FC = () => {}
=======

  const handleSubmit = (e: React.FormEvent) => {;;

    e.preventDefault();

    // Handle form submission
    console.log('Form submitted:, formData);

  };

const PagePage: React.FC = () => {
>>>>>>> origin/main
  return (

    <>
<<<<<<< HEAD
      <Helmet></Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content=""Get expert consultation on AI implementation, digital transformation, and IT strategy. Free discovery calls and comprehensive planning sessions available." /></meta>"
        <meta name="keywords" content=""AI consultation, IT consulting, digital transformation, technology strategy, business consulting" /></meta>"
        <meta property="og:title" content=""Consultation - Zion Tech Group" /></meta>"
        <meta property="og:description" content=""Expert consultation for your AI and IT needs" /></meta>"
        <meta property="og:type" content=""website" /></meta>"
        <meta property="og:url" content=""https://ziontechgroup.com/consultation" /></meta>"
        <title>Page - Zion Tech Group</title>
        <meta name="description" content=""Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." /></meta>"
        <meta name="keywords" content=""page, AI solutions, IT services, Zion Tech Group" /></meta>"
      </Helmet>
  return (<div></div>
        <title>Consultation - Zion Tech Group | Expert IT Consulting<
        <meta name="description" content=""Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team."></meta>"
        <meta name="keywords" content=""IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy"></meta>"
      <

      <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        {/* Hero Section */}
        <section className=""pt-24 pb-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto text-center"></div>"
            <h1 className=""text-4xl md:text-6xl font-bold text-white mb-6"></h1>"
            <h1 className=""text-5xl md:text-6xl font-bold text-white mb-6"></h1>"
              <span className=""bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>"
                Page;
              </span>
            </h1>
            <p className=""text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>"
              Get personalized guidance from our experts to transform your business with AI and cutting-edge technology;
            </p>
            <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <a href=""tel:+13024640950"></a>"
                className=""inline-flex items-center px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors">"
                <Phone className=""w-5 h-5 mr-2" /></Phone>"
                Call Now: (302) 464-0950;
              </a>
              <a href=""mailto:kleber@ziontechgroup.com"></a>"
                className=""inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">"
                <Mail className=""w-5 h-5 mr-2" /></Mail>"
                Email Us;
              </a>
            <p className=""text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <Link to=""/contact"></Link>"
                className=""inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">"
                Get Started;
                <ArrowRight className=""w-5 h-5" /></ArrowRight>"
              </Link>
              <Link to=""/services"></Link>"
                className=""inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300">"
                Learn More;
                <ArrowRight className=""w-5 h-5" /></ArrowRight>"
              </Link>
            </div>
          </div>
        </section>
        {/* Consultation Types */}
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <div className=""text-center mb-16"></div>"
              <h2 className=""text-3xl font-bold text-white mb-4">Choose Your Consultation Type</h2>"
              <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
                Select the consultation that best fits your needs and budget;
        {/* Features Section */}
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <h2 className=""text-3xl font-bold text-white mb-12 text-center">Why Choose Our Page Services?</h2>"
            <div className=""grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
              <div className=""bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"></div>"
                <div className=""w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>"
                  <CheckCircle className=""w-8 h-8 text-white" /></CheckCircle>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-3">Expert Solutions</h3>"
                <p className=""text-gray-300">Professional Page services with proven results</p>"
              </div>
              <div className=""bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"></div>"
                <div className=""w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>"
                  <CheckCircle className=""w-8 h-8 text-white" /></CheckCircle>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-3">24/7 Support</h3>"
                <p className=""text-gray-300">Round-the-clock assistance for your business needs</p>"
              </div>
              <div className=""bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"></div>"
                <div className=""w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>"
                  <CheckCircle className=""w-8 h-8 text-white" /></CheckCircle>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-3">Custom Solutions</h3>"
                <p className=""text-gray-300">Tailored Page solutions for your specific requirements</p>"
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-4xl mx-auto text-center"></div>"
            <div className=""bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12"></div>"
              <h2 className=""text-3xl font-bold text-white mb-4"></h2>"
                Ready to Get Started?
              </h2>
              <p className=""text-xl text-gray-300 mb-8"></p>"
                Contact our experts to discuss your Page needs and get a customized solution.
              </p>
              <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <a href=""tel:+13024640950"></a>"
                  className=""inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">"
                  <Phone className=""w-5 h-5" /></Phone>"
                  Call Now;
                </a>
                <a href=""mailto:kleber@ziontechgroup.com"></a>"
                  className=""inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300">"
                  <Mail className=""w-5 h-5" /></Mail>"
                  Email Us;
                </a>
              </div>
            </div>
            <div className=""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
              {consultationTypes.map((type) => (
                <div key = "{type.id}></div>"
                  className="{`bg-white/10 backdrop-blur-lg rounded-2xl border p-8 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer ${}"
                    selectedType === type.id ? 'border-cyan-400' : 'border-white/20'
                  } ${type.popular ? 'ring-2 ring-cyan-400/50' : ''}`}
                  onClick={() => setSelectedType(type.id)}>
                  {type.popular && (
                    <div className=""absolute -top-3 left-1/2 transform -translate-x-1/2"></div>"
                      <span className=""bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold"></span>"
                        Most Popular;
                      </span>
                    </div>
                  )}
                  
                  <div className=""text-center"></div>"
                    <h3 className=""text-2xl font-bold text-white mb-4">{type.name}</h3>"
                    <p className=""text-gray-300 mb-6 leading-relaxed">{type.description}</p>"
                    <div className=""mb-6"></div>"
                      <div className=""text-3xl font-bold text-cyan-400 mb-2">{type.price}</div>"
                      <div className=""flex items-center justify-center text-gray-400"></div>"
                        <Clock className=""w-4 h-4 mr-2" /></Clock>"
                        <span>{type.duration}</span>
                      </div>
                    </div>
                    <ul className=""space-y-3 mb-8"></ul>"
                      {type.features.map((feature, index) => (
                        <li key={index} className=""flex items-center text-gray-300"></li>"
                          <CheckCircle className=""w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" /></CheckCircle>"
                          <span className=""text-sm">{feature}</span>"
=======
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI implementation, digital transformation, and IT strategy. Free discovery calls and comprehensive planning sessions available. />
        <meta name="keywords" content="AI consultation, IT consulting, digital transformation, technology strategy, business consulting />
        <meta property="og:title" content="Consultation - Zion Tech Group />
        <meta property="og:description" content="Expert consultation for your AI and IT needs />
        <meta property="og:type" content="website />
        <meta property="og:url" content="https://ziontechgroup.com/consultation />
      </Helmet>
  return (<div>
        <title>Consultation - Zion Tech Group | Expert IT Consulting<
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team. 
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy 
      <

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="pt-24 pb-16 px-4">          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                Page
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8>
              Get personalized guidance from our experts to transform your business with AI and cutting-edge technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
              <a
                href="tel:+13024640950
                className="inline-flex items-center px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors
              >
                <Phone className="w-5 h-5 mr-2 />
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors
              >
                <Mail className="w-5 h-5 mr-2 />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Consultation Types */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-4>Choose Your Consultation Type</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Select the consultation that best fits your needs and budget              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <a
                  href="tel:+13024640950
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300
                >
                  <Phone className="w-5 h-5 />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300
                >
                  <Mail className="w-5 h-5 />
                  Email Us
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {consultationTypes.map((type) => (

                <div
                  key={type.id}

                  className={bg-white/10 backdrop-blur-lg rounded-2xl border p-8 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer ${
                    selectedType === type.id ? 'border-cyan-400' : 'border-white/20
                  } ${type.popular ? 'ring-2 ring-cyan-400/50' : ''}}

                  onClick={() => setSelectedType(type.id)}

                >
                  {type.popular && (

                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2>
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center>
                    <h3 className="text-2xl font-bold text-white mb-4>{type.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed>{type.description}</p>
                    
                    <div className="mb-6>
                      <div className="text-3xl font-bold text-cyan-400 mb-2>{type.price}</div>
                      <div className="flex items-center justify-center text-gray-400>
                        <Clock className="w-4 h-4 mr-2 />
                        <span>{type.duration}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8>
                      {type.features.map((feature, index) => (

                        <li key={index} className="flex items-center text-gray-300>
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 />
                          <span className="text-sm>{feature}</span>
>>>>>>> origin/main
                        </li>
                      ))}

                    </ul>
<<<<<<< HEAD
                    <button className=""w-full bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors"></button>"
                      Select This Option;
=======
                    
                    <button className="w-full bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors>
                      Select This Option
>>>>>>> origin/main
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* Why Choose Us */}
<<<<<<< HEAD
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <div className=""text-center mb-16"></div>"
              <h2 className=""text-3xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>"
              <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
                Our experts bring decades of experience in AI, quantum computing, and enterprise technology;
              </p>
            </div>
            <div className=""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
              <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"></div>"
                <div className=""w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>"
                  <Users className=""w-8 h-8 text-cyan-400" /></Users>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Expert Team</h3>"
                <p className=""text-gray-300">Our consultants have 15+ years of experience in AI, quantum computing, and enterprise technology.</p>"
              </div>
              <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"></div>"
                <div className=""w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>"
                  <CheckCircle className=""w-8 h-8 text-purple-400" /></CheckCircle>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Proven Results</h3>"
                <p className=""text-gray-300">We've helped 500+ companies achieve 300% average ROI through strategic AI implementation.</p>"
              </div>
              <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"></div>"
                <div className=""w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>"
                  <Star className=""w-8 h-8 text-green-400" /></Star>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">98% Satisfaction</h3>"
                <p className=""text-gray-300">Our clients consistently rate our consultation services as excellent and highly valuable.</p>"
=======

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-4>Why Choose Our Consultation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Our experts bring decades of experience in AI, quantum computing, and enterprise technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Users className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Expert Team</h3>
                <p className="text-gray-300>Our consultants have 15+ years of experience in AI, quantum computing, and enterprise technology.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <CheckCircle className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Proven Results</h3>
                <p className="text-gray-300">Weve helped 500+ companies achieve 300% average ROI through strategic AI implementation.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Star className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>98% Satisfaction</h3>
                <p className="text-gray-300>Our clients consistently rate our consultation services as excellent and highly valuable.</p>
>>>>>>> origin/main
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form */}
<<<<<<< HEAD
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-4xl mx-auto"></div>"
            <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></div>"
              <div className=""text-center mb-8"></div>"
                <h2 className=""text-3xl font-bold text-white mb-4">Schedule Your Consultation</h2>"
                <p className=""text-xl text-gray-300"></p>"
                  Fill out the form below and we'll get back to you within 24 hours;
                </p>
              </div>
              <form onSubmit={handleSubmit} className=""space-y-6"></form>"
                <div className=""grid grid-cols-1 md:grid-cols-2 gap-6"></div>"
                  <div></div>
                    <label htmlFor="name" className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                      Full Name *
                    </label>
                    <input type=""text"></input>"
                      id=""name""
                      name=""name""
                      value="{formData.name}"
                      onChange="{handleInputChange}"
                      required;
                      className=""w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors""
                      placeholder=""Enter your full name""
                    />
                  </div>
                  <div></div>
                    <label htmlFor="email" className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                      Email Address *
                    </label>
                    <input type=""email"></input>"
                      id=""email""
                      name=""email""
                      value="{formData.email}"
                      onChange="{handleInputChange}"
                      required;
                      className=""w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors""
                      placeholder=""Enter your email""
                    />
                  </div>
                </div>
                <div className=""grid grid-cols-1 md:grid-cols-2 gap-6"></div>"
                  <div></div>
                    <label htmlFor="phone" className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                      Phone Number;
                    </label>
                    <input type=""tel"></input>"
                      id=""phone""
                      name=""phone""
                      value="{formData.phone}"
                      onChange="{handleInputChange}"
                      className=""w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors""
                      placeholder=""Enter your phone number""
                    />
                  </div>
                  <div></div>
                    <label htmlFor="company" className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                      Company Name;
                    </label>
                    <input type=""text"></input>"
                      id=""company""
                      name=""company""
                      value="{formData.company}"
                      onChange="{handleInputChange}"
                      className=""w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors""
                      placeholder=""Enter your company name""
                    />
                  </div>
                </div>
                <div></div>
                  <label htmlFor="consultationType" className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                    Preferred Consultation Type;
                  </label>
                  <select id=""consultationType"></select>"
                    name=""consultationType""
                    value="{formData.consultationType}"
                    onChange="{handleInputChange}"
                    className=""w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors">"
                    <option value="" className=""bg-slate-800">Select consultation type</option>"
                    {consultationTypes.map((type) => (
                      <option key={type.id} value={type.name} className=""bg-slate-800"></option>"
=======

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20>
              <div className="text-center mb-8>
                <h2 className="text-3xl font-bold text-white mb-4>Schedule Your Consultation</h2>
                <p className="text-xl text-gray-300>
                  Fill out the form below and well get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2>
                      Full Name *
                    </label>
                    <input
                      type="text
                      id="name
                      name="name
                      value={formData.name}

                      onChange={handleInputChange}

                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                      placeholder="Enter your full name
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2>
                      Email Address *
                    </label>
                    <input
                      type="email
                      id="email
                      name="email
                      value={formData.email}

                      onChange={handleInputChange}

                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                      placeholder="Enter your email
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2>
                      Phone Number
                    </label>
                    <input
                      type="tel
                      id="phone
                      name="phone
                      value={formData.phone}

                      onChange={handleInputChange}

                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                      placeholder="Enter your phone number
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2>
                      Company Name
                    </label>
                    <input
                      type="text
                      id="company
                      name="company
                      value={formData.company}

                      onChange={handleInputChange}

                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                      placeholder="Enter your company name
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-300 mb-2>
                    Preferred Consultation Type
                  </label>
                  <select
                    id="consultationType
                    name="consultationType
                    value={formData.consultationType}

                    onChange={handleInputChange}

                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors
                  >
                    <option value="" className="bg-slate-800>Select consultation type</option>
                    {consultationTypes.map((type) => (

                      <option key={type.id} value={type.name} className="bg-slate-800>
>>>>>>> origin/main
                        {type.name} - {type.price}

                      </option>
                    ))}

                  </select>
                </div>
<<<<<<< HEAD
                <div></div>
                  <label htmlFor="message" className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                    Tell us about your project;
                  </label>
                  <textarea id=""message"></textarea>"
                    name=""message""
                    value="{formData.message}"
                    onChange="{handleInputChange}"
                    rows="{4}"
                    className=""w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors""
                    placeholder=""Describe your current challenges, goals, and what you hope to achieve...""
                  />
                </div>
                <button type=""submit"></button>"
                  className=""w-full bg-cyan-400 text-slate-900 font-semibold py-4 rounded-lg hover:bg-cyan-300 transition-colors flex items-center justify-center">"
                  <span>Schedule Consultation</span>
                  <ArrowRight className=""w-5 h-5 ml-2" /></ArrowRight>"
=======

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2>
                    Tell us about your project
                  </label>
                  <textarea
                    id="message
                    name="message
                    value={formData.message}

                    onChange={handleInputChange}

                    rows={4}

                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                    placeholder="Describe your current challenges, goals, and what you hope to achieve...
                  />
                </div>

                <button
                  type="submit
                  className="w-full bg-cyan-400 text-slate-900 font-semibold py-4 rounded-lg hover:bg-cyan-300 transition-colors flex items-center justify-center
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2 />
>>>>>>> origin/main
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* Contact Info */}
<<<<<<< HEAD
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-4xl mx-auto text-center"></div>"
            <h2 className=""text-3xl font-bold text-white mb-8">Get in Touch</h2>"
            <div className=""grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
              <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>"
                <div className=""w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>"
                  <Phone className=""w-8 h-8 text-cyan-400" /></Phone>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Call Us</h3>"
                <p className=""text-gray-300 mb-4">Speak directly with our experts</p>"
                <a href="tel:+13024640950" className=""text-cyan-400 hover:text-cyan-300 font-semibold"></a>"
                  (302) 464-0950;
                </a>
              </div>
              <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>"
                <div className=""w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>"
                  <Mail className=""w-8 h-8 text-purple-400" /></Mail>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Email Us</h3>"
                <p className=""text-gray-300 mb-4">Send us your questions</p>"
                <a href="mailto:kleber@ziontechgroup.com" className=""text-cyan-400 hover:text-cyan-300 font-semibold"></a>"
                  kleber@ziontechgroup.com;
                </a>
              </div>
              <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>"
                <div className=""w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>"
                  <MapPin className=""w-8 h-8 text-green-400" /></MapPin>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Visit Us</h3>"
                <p className=""text-gray-300 mb-4">Our headquarters</p>"
                <p className=""text-cyan-400 font-semibold"></p>"
                  364 E Main St STE 1008<br /></br>
                  Middletown, DE 19709;
                </p>
              </div>
          </div>
        </section>
      </div>
    </>
          <h2 className=""text-3xl font-bold text-white mb-12 text-center">Consultation Services</h2>"
          <div className=""grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
            {consultationTypes.map((type) => (
              <div key = "{type.id}></div>"
                className="{`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${}"
                  type.popular ? 'border-purple-400' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 relative`}>
                {type.popular && (
                  <div className=""absolute -top-4 left-1/2 transform -translate-x-1/2"></div>"
                    <span className=""bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>"
                      Most Popular;
                    </span>
                  </div>
                )}
                <h3 className=""text-2xl font-bold text-white mb-4">{type.name}</h3>"
                <p className=""text-gray-300 mb-6">{type.description}</p>"
                <div className=""mb-6"></div>"
                  <div className=""flex items-center justify-between text-sm text-gray-400 mb-2"></div>"
                    <span className=""flex items-center"></span>"
                      <Clock className=""w-4 h-4 mr-2" /></Clock>"
                      Duration;
                    </span>
                    <span>{type.duration}</span>
                  </div>
                  <div className=""flex items-center justify-between text-sm text-gray-400"></div>"
                    <span className=""flex items-center"></span>"
                      <Users className=""w-4 h-4 mr-2" /></Users>"
                      Price;
                    </span>
                    <span className=""text-2xl font-bold text-white">{type.price}</span>"
                  </div>
                </div>
                <ul className=""space-y-2 mb-8"></ul>"
                  {type.features.map((feature, index) => (
                    <li key={index} className=""flex items-center text-gray-300"></li>"
                      <CheckCircle className=""w-4 h-4 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>"
                      {feature}
                    </li>
                  ))}
                </ul>
                <button></button>
                  onClick={() => handleBooking(type.id)}
                  className="{`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}"
                    type.popular;
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                  Book Consultation;
                </button>
                <h></h>{service}</h3>
                <p className=""text-gray-300">Expert guidance and strategic planning for your technology initiatives.</p>"
              </div>
=======

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <h2 className="text-3xl font-bold text-white mb-8>Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Phone className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Call Us</h3>
                <p className="text-gray-300 mb-4>Speak directly with our experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold>
                  (302) 464-0950
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Mail className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Email Us</h3>
                <p className="text-gray-300 mb-4>Send us your questions</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold>
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <MapPin className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Visit Us</h3>
                <p className="text-gray-300 mb-4>Our headquarters</p>
                <p className="text-cyan-400 font-semibold>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>              </div>
>>>>>>> origin/main
            ));

          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Expert Team */}
      <section className=""py-16 px-4 bg-white/5"></section>"
        <div className=""max-w-7xl mx-auto"></div>"
          <h2 className=""text-3xl font-bold text-white mb-12 text-center">Meet Our Experts</h2>"
          <div className=""grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
            {experts.map((expert, index) => (
              <div key={index} className=""bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"></div>"
                <div className=""w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>"
                  <span className="text-2xl font-bold text-white">{expert.name.split(' ').map(n = "> n[0]).join('')}</span>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-2">{expert.name}</h3>"
                <p className=""text-purple-400 mb-2">{expert.role}</p>"
                <p className=""text-gray-400 text-sm mb-4">{expert.experience}</p>"
                <div className=""flex flex-wrap justify-center gap-2"></div>"
                  {expert.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className=""bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs"></span>"
=======

      {/* Expert Team */}

      <section className="py-16 px-4 bg-white/5>
        <div className="max-w-7xl mx-auto>
          <h2 className="text-3xl font-bold text-white mb-12 text-center>Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
            {experts.map((expert, index) => (

              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300>
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <span className="text-2xl font-bold text-white">{expert.name.split(' ').map(n => n[0]).join(')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2>{expert.name}</h3>
                <p className="text-purple-400 mb-2>{expert.role}</p>
                <p className="text-gray-400 text-sm mb-4>{expert.experience}</p>
                <div className="flex flex-wrap justify-center gap-2>
                  {expert.expertise.map((skill, skillIndex) => (

                    <span key={skillIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs>
>>>>>>> origin/main
                      {skill}

                    </span>
                  ))}

                </div>
              </div>
            ))}
<<<<<<< HEAD
      {/* Process Section */}
      <section></section>
        <div></div>
          <div></div>
            <h></h>Our Process</h2>
            <p className=""text-xl text-gray-300">How we deliver exceptional consultation services</p>"
          </div>
          <div></div>
            <div></div>
              <div></div>
                <spa></spa>1</span>
              </div>
              <h></h>Discovery</h3>
              <p className=""text-gray-300">We analyze your current technology landscape and business objectives.</p>"
            </div>
            <div></div>
              <div></div>
                <spa></spa>2</span>
              </div>
              <h></h>Strategy</h3>
              <p className=""text-gray-300">We develop a customized roadmap aligned with your goals.</p>"
            </div>
            <div></div>
              <div></div>
                <spa></spa>3</span>
              </div>
              <h></h>Implementation</h3>
              <p className=""text-gray-300">We guide you through execution and provide ongoing support.</p>"
            </div>
          </div>
=======

            </div>
          </div>
>>>>>>> origin/main
        </section>
      </div>
    </>
  );

};
<<<<<<< HEAD
export default ConsultationPage;
        </div>
      </section>
      {/* CTA Section */}
      <section className=""py-16 px-4"></section>"
        <div className=""max-w-4xl mx-auto text-center"></div>"
          <h2 className=""text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>"
          <p className=""text-xl text-gray-300 mb-8"></p>"
            Book a consultation with our experts and take the first step towards transforming your business.
          </p>
          <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <button className=""bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"></button>"
      <section></section>
        <div></div>
          <h2></h2>
            Ready to Transform Your Business?
          </h2>
          <p></p>
            Schedule a consultation with our experts and discover how technology can drive your success.
          </p>
          <div></div>
            <button></button>
              <Calendar className=""mr-2 h-5 w-5" /></Calendar>"
              Schedule Now;
            </button>
            <button></button>
              <Mail className=""mr-2 h-5 w-5" /></Mail>"
              Contact Us;
=======

export default ConsultationPage;      <section className="py-16 px-4>
        <div className="max-w-4xl mx-auto text-center>
          <h2 className="text-3xl font-bold text-white mb-6>Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8>
            Book a consultation with our experts and take the first step towards transforming your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center>
              <Calendar className="mr-2 h-5 w-5 />              Schedule Now
            </button>
            <button></button>
              <Mail className="mr-2 h-5 w-5 />
              Contact Us
>>>>>>> origin/main
            </button>
          </div>
        </div>
      </section>
    </div>
                <
              <
            <
          <
        <
      <
    <)
  );

};
<<<<<<< HEAD
export default PagePage;
=======

export default PagePage;
>>>>>>> origin/main
