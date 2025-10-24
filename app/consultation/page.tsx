'use client';

export default function ConsultationPage() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap development',
        'ROI analysis and recommendations',
        'Implementation timeline',
        'Follow-up support included'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Expert guidance on integrating AI solutions into your business processes and workflows.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology stack recommendations',
        'Implementation strategy',
        'Training and support planning'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning and execution guidance for migrating your infrastructure to the cloud.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Implementation roadmap'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '6-8 hours',
      price: '$1,500',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing',
        'Security policy development',
        'Incident response planning'
      ],
      popular: false
const Component: React.FC = () => {
'use client';
import React from 'react';
'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';

    }
  ];
  const features = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Comprehensive AI strategy development and implementation planning",
      duration: "2-3 hours",
      price: "Free",
      icon: <Brain className="w-6 h-6" />,
      features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Implementation Plan"]
    },
    {
      title: "IT Infrastructure Review",
      description: "Complete IT infrastructure assessment and optimization recommendations",
      duration: "1-2 hours",
      price: "Free",
      icon: <Shield className="w-6 h-6" />,
      features: ["Security Audit", "Performance Analysis", "Cost Optimization", "Scalability Planning"]
    },
    {
      title: "Digital Transformation Planning",
      description: "End-to-end digital transformation strategy and execution plan",
      duration: "3-4 hours",
      price: "Free",
      icon: <Zap className="w-6 h-6" />,
      features: ["Current State Analysis", "Future State Vision", "Gap Analysis", "Change Management"]
    },
    {
      title: "5G Implementation Strategy",
      description: "5G network planning and implementation strategy consultation",
      duration: "2-3 hours",
      price: "Free",
      icon: <Globe className="w-6 h-6" />,
      features: ["Network Planning", "Use Case Analysis", "Technology Selection", "Implementation Timeline"]
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | AI & IT Strategy Planning</title>
        <meta
          name="description"
          content="Schedule a free consultation with Zion Tech Group experts. Get personalized AI and IT strategy recommendations for your business. No obligation, expert guidance."
        />
        <meta
          name="keywords"
          content="free consultation, AI strategy, IT consulting, digital transformation, business technology planning, expert guidance"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Free Expert Consultation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Free Consultation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get expert guidance on your AI and IT strategy. Our experienced consultants will help you 
              identify opportunities, assess your current technology stack, and create a roadmap for digital transformation.
import React  from 'react';
const ConsultationPage: React.FC = () => {
  return (
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Consultation services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="consultation, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional consultation services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive consultation solutions. 
              Contact us to learn more about our services.
            </p>
          </div>

            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consultation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to delivering the best consultation experience.
              </p>
            </div></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div></div></div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Need Immediate Assistance?
                </span>
              </h2>
              <p className="text-gray-300 mb-8">
                Can't wait for a consultation? Contact us directly for immediate assistance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      <Head>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Consultation
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            consultation services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
      </main>
      
      <Footer />
    </React.Fragment>
import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const ConsultationPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Consultation - Zion Tech Group"
        description="Schedule a consultation with Zion Tech Group"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Schedule a Consultation</h1>
          <p className="text-gray-300">Contact us to schedule a consultation at kleber@ziontechgroup.com</p>
        </div>

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Consultation() {return (
    <title>Consultation - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Consultation</h1>
            <p className="text-lg text-gray-300 mb-8">Professional consultation services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Consultation services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="consultation, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Consultation;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional consultation services by Zion Tech Group.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive consultation solutions.
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
            </button>
          </div>
      </div>
    <  />
  );
};

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Professional consultation services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Consultation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional consultation services coming soon.</p>
          
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
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default ConsultationPage;
