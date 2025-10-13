<<<<<<< HEAD
import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star } from 'lucide-react;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

interface ConsultationType {}
  id: number;

  name: string;

  description: string;

  duration: string;

  price: string;

  features: string[];

  popular?: boolean;

}

const ConsultationPage: React.FC = () => {}
  const [selectedType, setSelectedType] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: ',
    email: ',
    phone: ',
    company: ',
    message: ',
    consultationType: 
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
    company: '',
    service: '',
    message: '',
    preferredTime: '',
    budget: ''
  });

  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Implementation',
      description: 'Develop and implement AI solutions tailored to your business needs',
      duration: '2-4 hours'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Architecture',
      description: 'Plan and execute cloud migration strategies for optimal performance',
      duration: '2-3 hours'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and risk mitigation strategies',
      duration: '3-4 hours'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Complete digital transformation roadmap and implementation plan',
      duration: '4-6 hours'
    }
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
  const handleBooking = (typeId: string) => {;
    industry: '',
    companySize: '',
    currentChallenges: '',
    goals: '',
    timeline: '',
    budget: '',
    timeline: '',
    message: ''
  });

    }

  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {    const { name, value } = e.target;;

    setFormData(prev => ({
  const handleSubmit = (e: React.FormEvent) => {;;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c

  return (

    <>
      <Helmet>
<<<<<<< HEAD
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {consultationTypes.map((type) => (

                <div
                  key={type.id}

                  className={bg-white/10 backdrop-blur-lg rounded-2xl border p-8 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer ${
                    selectedType === type.id ? 'border-cyan-400' : 'border-white/20
                  } ${type.popular ? 'ring-2 ring-cyan-400/50' : ''}}

                  {type.popular && (

                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2>
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold>
                    <ul className="space-y-3 mb-8>
                      {type.features.map((feature, index) => (

                        <li key={index} className="flex items-center text-gray-300>
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 />
                          <span className="text-sm>{feature}</span>
        {/* Why Choose Us */}

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
        {/* Contact Info */}

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
            ));

          </div>
        </div>
      </section>

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
=======
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Free Consultation services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Free Consultation solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsultationPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
