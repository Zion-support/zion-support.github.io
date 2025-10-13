import React from 'react'}
import { Helmet } from 'react-helmet-async'}
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Consulting & Strategy', price: '$2,500/month', description: 'Comprehensive AI strategy development and implementation planning', features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'] },
        { name: 'Machine Learning Solutions', price: '$1,500/month', description: 'Custom ML models for predictive analytics and decision-making', features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'] },
        { name: 'Natural Language Processing', price: '$1,200/month', description: 'Advanced NLP solutions for text analysis and language understanding', features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'] },
        { name: 'Computer Vision', price: '$1,800/month', description: 'Image and video analysis solutions for object detection and recognition', features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'] },
        { name: 'AI Automation', price: '$1,400/month', description: 'Intelligent process automation with decision-making capabilities', features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'] },
        { name: 'AI Chatbots', price: '$800/month', description: 'Intelligent conversational AI for customer service and support', features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'] ;
      ]
},
    {
      title: 'IT Infrastructure',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with minimal downtime', features: ['AWS/Azure/GCP Migration', 'Data Transfer', 'Security Setup', 'Performance Optimization'] },
        { name: 'Network Security', price: '$2,200/month', description: 'Comprehensive network security solutions and monitoring', features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Security Audits'] },
        { name: 'Database Management', price: '$1,800/month', description: 'Database design, optimization, and maintenance services', features: ['Database Design', 'Performance Tuning', 'Backup Solutions', 'Data Recovery'] },
        { name: 'DevOps & CI/CD', price: '$2,000/month', description: 'Automated deployment and continuous integration solutions', features: ['Pipeline Setup', 'Automated Testing', 'Deployment Automation', 'Monitoring'] ;
      ]
},
    {
      title: 'Digital Transformation',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Digital Strategy', price: '$2,800/month', description: 'Comprehensive digital transformation strategy and implementation', features: ['Digital Assessment', 'Technology Roadmap', 'Change Management', 'Training Programs'] },
        { name: 'Process Automation', price: '$1,600/month', description: 'Business process automation and optimization solutions', features: ['Process Analysis', 'Workflow Design', 'Automation Implementation', 'Performance Monitoring'] },
        { name: 'Data Analytics', price: '$1,900/month', description: 'Advanced data analytics and business intelligence solutions', features: ['Data Visualization', 'Predictive Analytics', 'Dashboard Creation', 'Insights Generation'] ;
      ]
;
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      role: "CEO",
      content: "Their cloud migration service was flawless. Zero downtime and improved performance across all systems.",
      rating: 5;
},
    {
      name: "Emily Rodriguez",
      company: "InnovateLabs",
      role: "Head of Operations",
      content: "The AI automation tools have revolutionized our workflows. Highly recommend their services.",
      rating: 5;
;
  ]

  return (
    <>
      <Helmet>
        <title>Services - AI & IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cloud migration, digital transformation, and more. Transform your business with our expert solutions." />
        <meta name="keywords" content="AI services, IT services, machine learning, cloud migration, digital transformation, automation, consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions to transform your business. 
              From machine learning to cloud migration, we&apos}ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Service Categories */;
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Service Categories
            </h2>
            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">
                    {category.title}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                        <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                        <p className="text-cyan-400 font-bold text-lg mb-3">{service.price}</p>
                        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>}
))}
                        </ul>
                      </div>}
))}
                  </div>
                </div>}
))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />}
))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo}{testimonial.content}&rdquo}</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>}
))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos}s discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>;
)
;
export default ServicesPage;