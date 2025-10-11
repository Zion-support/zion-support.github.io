import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  const features = [
=======
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Target, Award } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');
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

  const consultationTypes: ConsultationType[] = [
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
    {
<<<<<<< HEAD
      title: 'Page',
      description: 'Professional page services for modern businesses.',
      benefits: ['Expert Solutions', 'Advanced Technology', 'Proven Results', '24/7 Support']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];

=======
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap development',
        'Budget planning and optimization',
        'Risk analysis and mitigation',
        'Implementation timeline'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Expert guidance on migrating your infrastructure to the cloud with minimal disruption.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Post-migration support plan'
      ],
      popular: false
<<<<<<< HEAD
    },
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '4-6 hours',
      price: '$1000',
      features: [
        'Security vulnerability assessment',
        'Compliance audit (HIPAA, GDPR, etc.)',
        'Penetration testing',
        'Security policy review',
        'Incident response planning'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Strategy',
      description: 'Strategic planning for AI adoption and integration into your business processes.',
      duration: '3-4 hours',
      price: '$800',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology stack selection',
        'ROI analysis and projections',
        'Implementation roadmap'
      ],
      popular: true
    }
  ];

  const benefits = [
    'Expert guidance from certified professionals',
    'Tailored solutions for your specific needs',
    'Comprehensive analysis and recommendations',
    'Follow-up support and implementation guidance',
    'Cost-effective technology investments',
    'Reduced implementation risks'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We analyze your current technology stack and business requirements.',
      icon: CheckCircle
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'We create a customized technology strategy based on your goals.',
      icon: Users
    },
    {
      step: 3,
      title: 'Implementation Plan',
      description: 'We provide a detailed roadmap with timelines and milestones.',
      icon: Calendar
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description: 'We offer continued guidance throughout the implementation process.',
      icon: ArrowRight
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-ace5
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services and solutions." />
        <meta name="keywords" content="page, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our page services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
=======
        <title>IT Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Expert IT consultation services to help your business make informed technology decisions. Strategic planning, cloud migration, cybersecurity, and AI implementation guidance." />
        <meta name="keywords" content="IT consultation, technology consulting, cloud migration, cybersecurity audit, AI strategy, digital transformation" />
=======
    }
  ];

  const services = [
    {
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Implement AI solutions to automate processes and gain insights'
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge technology'
    },
    {
      icon: Users,
      title: 'Team Training',
      description: 'Empower your team with the skills they need to succeed'
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Learn industry best practices and proven methodologies'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form data
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const handleBookConsultation = (typeId: string) => {
    setSelectedType(typeId);
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log(`Booking consultation: ${typeId}`);
  };

  return (
    <>
      <Helmet>
        <title>Consultation - Expert IT & AI Consulting | Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI implementation, cloud migration, and digital transformation. Book a consultation with our specialists." />
        <meta name="keywords" content="consultation, IT consulting, AI consulting, cloud migration, digital transformation, expert advice" />
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IT Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
<<<<<<< HEAD
              Get expert guidance on your technology decisions. Our certified consultants help you navigate complex IT challenges and make informed choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </div>
=======
              Get personalized guidance from our experts on AI implementation, cloud migration, and digital transformation. 
              Book a consultation to accelerate your business growth.
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Consultation Services</h2>
              <p className="text-xl text-gray-300">Choose the consultation type that best fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border ${
                    type.popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 cursor-pointer`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-purple-400 text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{type.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Duration</span>
                      <span className="text-white font-semibold">{type.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Price</span>
                      <span className="text-2xl font-bold text-purple-400">{type.price}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Choose Your Consultation Type
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                    type.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  }`}
                >
                  {type.popular && (
                    <div className="flex items-center mb-4">
                      <Award className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{type.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
<<<<<<< HEAD
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                    Select This Service
=======
                  <button
                    onClick={() => handleBookConsultation(type.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                        : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                    }`}
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Process Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Consultation Process</h2>
              <p className="text-xl text-gray-300">A structured approach to delivering expert guidance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
=======
        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              What We Can Help You With
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <service.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Consultation Services?</h2>
              <p className="text-xl text-gray-300">Get the expertise you need to make informed technology decisions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white font-semibold">{benefit}</span>
                  </div>
                </div>
              ))}
=======
        {/* Contact Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Get in Touch
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a service</option>
                    <option value="ai">AI Implementation</option>
                    <option value="cloud">Cloud Migration</option>
                    <option value="strategy">IT Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </form>
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Expert Guidance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a consultation with our experts and take the first step towards optimizing your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
>>>>>>> cursor/fix-errors-and-merge-to-main-ace5
                </button>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </main>
      
      <Footer />
    </div>
=======
        </section>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-ace5
=======
        {/* Contact Info */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Other Ways to Reach Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">consultation@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Office</h3>
                <p className="text-gray-300">123 Tech Street, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
  );
};

export default PagePage;