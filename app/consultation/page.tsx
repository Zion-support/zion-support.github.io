'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
=======
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean});;)
}

const ConsultationPage: React.FC = () => {
<<<<<<< HEAD
  const consultationServices = [
    'AI Strategy & Implementation',
    'Cloud Migration Planning',
    'Cybersecurity Assessment',
    'Digital Transformation',
    'IT Infrastructure Review',
    'Technology Roadmap Development'
  ];
=======
  const [selectedType, setSelectedType] = useState<string></string>('');
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0

  const consultationTypes: ConsultationType[] = [
    {
      id: '1',
      name: 'Discovery Call',
      description: 'Initial consultation to understand your business needs and challenges',
      duration: '30 minutes',
      price: 'Free',
      features: [
<<<<<<< HEAD
        'Business needs assessment',
        'Technology audit',
        'Solution recommendations',
        'Next steps planning'
      ],
      popular: false});;)
},
    {
      id: '2',
      name: 'Strategic Planning',
      description: 'Comprehensive technology strategy development for your organization',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Detailed technology roadmap',
        'Risk assessment',
        'Implementation timeline',
        'Budget planning',
        'ROI analysis'
=======
        'Current IT assessment',
        'Technology roadmap development',
        'Budget planning and optimization',
        'Risk analysis and mitigation',
        'Implementation timeline'
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
      ],
      popular: true});;)
},
    {
      id: '3',
      name: 'Technical Deep Dive',
      description: 'In-depth technical analysis and solution architecture design',
      duration: '4-8 hours',
      price: '$1,200',
      features: [
<<<<<<< HEAD
        'Technical architecture review',
        'Security assessment',
        'Performance optimization',
        'Integration planning',
        'Implementation strategy'
=======
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Implementation roadmap'
      ],
      popular: false});;)
},
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing guidance',
        'Security policy development',
        'Incident response planning'
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
      ],
      popular: false});;)
}
  ];

<<<<<<< HEAD
<<<<<<< HEAD
=======
  const [selectedType, setSelectedType] = useState<string>('1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
=======
>>>>>>> main
  const experts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Consultant',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'});;)
},
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Specialist',
      experience: '12+ years',
<<<<<<< HEAD
      expertise: ['Cloud Migration', 'AWS', 'Azure', 'DevOps'],
      image: '/images/experts/michael-rodriguez.jpg'
    },
=======
      expertise: ['Cloud Migration', 'DevOps', 'Infrastructure'],
      image: '/images/experts/michael-rodriguez.jpg'});;)
},
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      experience: '10+ years',
      expertise: ['Security Audits', 'Compliance', 'Risk Management'],
      image: '/images/experts/alex-thompson.jpg'});;)
}
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-550e

<<<<<<< HEAD
  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
<<<<<<< HEAD
    console.log(`Booking consultation: ${typeId}`);
=======
import { Calendar, Clock, User, Mail, Phone, MessageCircle, CheckCircle, ArrowRight, Zap, Target, Users, Award } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'medium'
  });

  const services = [
    {
      icon: Zap,
      title: 'AI Strategy & Implementation',
      description: 'Develop and implement AI solutions tailored to your business needs',
      duration: '60-90 minutes'
    },
    {
      icon: Target,
      title: 'Cloud Migration Planning',
      description: 'Plan and execute seamless cloud migration strategies',
      duration: '45-60 minutes'
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Guide your organization through comprehensive digital transformation',
      duration: '90-120 minutes'
    },
    {
      icon: Award,
      title: 'Cybersecurity Assessment',
      description: 'Evaluate and strengthen your cybersecurity posture',
      duration: '60-90 minutes'
    }
  ];

  const consultationTypes = [
    {
      title: 'Discovery Call',
      description: 'Free 30-minute consultation to understand your needs',
      duration: '30 minutes',
      price: 'Free',
      features: ['Needs assessment', 'Solution overview', 'Next steps planning']
    },
    {
      title: 'Strategy Session',
      description: 'Comprehensive consultation with detailed recommendations',
      duration: '90 minutes',
      price: '$500',
      features: ['Detailed analysis', 'Custom recommendations', 'Implementation roadmap', 'Follow-up support']
    },
    {
      title: 'Executive Briefing',
      description: 'High-level strategic consultation for leadership teams',
      duration: '2 hours',
      price: '$1,000',
      features: ['Executive summary', 'Strategic recommendations', 'Risk assessment', 'ROI analysis']
    }
  ];

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
  };
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b

const PagePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
=======
  return (<div>
        <title>Consultation - Zion Tech Group | Expert IT Consulting<
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." 
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" 
      <
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Page
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Page Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Solutions</h3>
                <p className="text-gray-300">Professional Page services with proven results</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock assistance for your business needs</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-300">Tailored Page solutions for your specific requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your Page needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
=======
=======
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Consultation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  type.popular ? 'border-purple-400' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 relative`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration
                    </span>
                    <span>{type.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Price
                    </span>
                    <span className="text-2xl font-bold text-white">{type.price}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-8">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleBooking(type.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    type.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Book Consultation
                </button>
=======
                <h></h>{service}</h3>
                <p className="text-gray-300">Expert guidance and strategic planning for your technology initiatives.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
              </div>
            ));
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Expert Team */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{expert.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
                <p className="text-purple-400 mb-2">{expert.role}</p>
                <p className="text-gray-400 text-sm mb-4">{expert.experience}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {expert.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
=======
      {/* Process Section */}
      <section></section>
        <div></div>
          <div></div>
            <h></h>Our Process</h2>
            <p className="text-xl text-gray-300">How we deliver exceptional consultation services</p>
          </div>
          
          <div></div>
            <div></div>
              <div></div>
                <spa></spa>1</span>
              </div>
              <h></h>Discovery</h3>
              <p className="text-gray-300">We analyze your current technology landscape and business objectives.</p>
            </div>
            
            <div></div>
              <div></div>
                <spa></spa>2</span>
              </div>
              <h></h>Strategy</h3>
              <p className="text-gray-300">We develop a customized roadmap aligned with your goals.</p>
            </div>
            
            <div></div>
              <div></div>
                <spa></spa>3</span>
              </div>
              <h></h>Implementation</h3>
              <p className="text-gray-300">We guide you through execution and provide ongoing support.</p>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a consultation with our experts and take the first step towards transforming your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Now
            </button>
            <button></button>
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
=======
                <
              <
            <
          <
        <
      <
    <)
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
>>>>>>> main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
  );
};

export default PagePage;
