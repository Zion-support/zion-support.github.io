import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Circle, Star, Right, Brain, Zap, Shield, Cloud, Smartphone, Database, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: &apos;AI & Machine Learning&apos;,
      color: &apos;text-purple-600&apos;,
      bgColor: &apos;bg-purple-50&apos;,
      services: [
        { name: &apos;AI Consulting & Strategy&apos;, price: &apos;$2,500/month&apos;, description: 'Comprehensive AI strategy development and implementation planning', features: [&apos;AI Roadmap Development&apos;, &apos;Technology Assessment&apos;, &apos;ROI Analysis&apos;, &apos;Implementation Planning&apos;] },
        { name: 'Machine Learning Solutions', price: &apos;$1,500/month&apos;, description: 'Custom ML models for predictive analytics and decision-making', features: [&apos;Predictive Analytics&apos;, &apos;Custom Model Development&apos;, &apos;Data Pipeline Setup&apos;, &apos;Model Monitoring&apos;] },
        { name: 'Natural Language Processing', price: &apos;$1,200/month&apos;, description: 'Advanced NLP solutions for text analysis and language understanding', features: [&apos;Text Analysis&apos;, &apos;Sentiment Analysis&apos;, &apos;Language Translation&apos;, &apos;Chatbot Development&apos;] },
        { name: 'Computer Vision', price: &apos;$1,800/month&apos;, description: 'Image and video analysis solutions for object detection and recognition', features: [&apos;Object Detection&apos;, &apos;Image Classification&apos;, &apos;Analysis&apos;, &apos;Facial Recognition&apos;] },
        { name: 'AI Automation', price: &apos;$1,400/month&apos;, description: 'Intelligent process automation with decision-making capabilities', features: [&apos;Process Automation&apos;, &apos;Workflow Optimization&apos;, &apos;Decision Trees&apos;, &apos;Exception Handling&apos;] },
        { name: 'AI Chatbots', price: &apos;$800/month&apos;, description: 'Intelligent conversational AI for customer service and support', features: [&apos;24/7 Support&apos;, &apos;Multi-language Support&apos;, &apos;Integration APIs&apos;, &apos;Analytics Dashboard&apos;] }
      ]
    },
    {
      title: 'IT Infrastructure',
      color: &apos;text-blue-600&apos;,
      bgColor: &apos;bg-blue-50&apos;,
      services: [
        { name: 'Migration', price: &apos;$3,000/month&apos;, description: 'Seamless migration to cloud platforms with minimal downtime', features: [&apos;AWS/Azure/GCP Migration&apos;, &apos;Data Transfer&apos;, &apos;Setup&apos;, &apos;Performance Optimization&apos;] },
        { name: 'Network ', price: &apos;$2,200/month&apos;, description: 'Comprehensive network security solutions and monitoring', features: [&apos;Firewall Configuration&apos;, &apos;Intrusion Detection&apos;, &apos;VPN Setup&apos;, &apos;Audits&apos;] },
        { name: 'Management', price: &apos;$1,800/month&apos;, description: 'design, optimization, and maintenance services', features: [&apos;Design&apos;, &apos;Performance Tuning&apos;, &apos;Backup Solutions&apos;, &apos;Data Recovery&apos;] },
        { name: &apos;DevOps & CI/CD&apos;, price: &apos;$2,000/month&apos;, description: 'Automated deployment and continuous integration solutions', features: [&apos;Pipeline Setup&apos;, &apos;Automated Testing&apos;, &apos;Deployment Automation&apos;, &apos;Monitoring&apos;] }
      ]
    },
    {
      title: 'Digital Transformation',
      color: &apos;text-green-600&apos;,
      bgColor: &apos;bg-green-50&apos;,
      services: [
        { name: 'Digital Strategy', price: &apos;$2,800/month&apos;, description: 'Comprehensive digital transformation strategy and implementation', features: [&apos;Digital Assessment&apos;, &apos;Technology Roadmap&apos;, &apos;Change Management&apos;, &apos;ing Programs&apos;] },
        { name: 'Process Automation', price: &apos;$1,600/month&apos;, description: 'Business process automation and optimization solutions', features: [&apos;Process Analysis&apos;, &apos;Workflow Design&apos;, &apos;Automation Implementation&apos;, &apos;Performance Monitoring&apos;] },
        { name: 'Data Analytics', price: &apos;$1,900/month&apos;, description: 'Advanced data analytics and business intelligence solutions', features: [&apos;Data Visualization&apos;, &apos;Predictive Analytics&apos;, &apos;Dashboard Creation&apos;, &apos;Insights Generation&apos;] }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group transformed our infrastructure with their AI solutions. We&apos;ve seen a 40% increase in efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      role: "CEO",
      content: "Their cloud migration service was flawless. Zero downtime and improved performance across all systems.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateLabs",
      role: "Head of Operations",
      content: "The AI automation tools have revolutionized our workflows. Highly recommend their services.",
      rating: 5
    }
  ];

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
              From machine learning to cloud migration, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
                <Right className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Service Categories */}
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
                              <Circle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
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
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
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
              Let&apos;s discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your Project
                <Right className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;