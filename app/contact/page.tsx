import { ArrowRight, Mail, Smartphone, Globe, Clock, MapPin, Send, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedContactForm from "../components/EnhancedContactForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (302) 464-0950",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "364 E Main St STE 1008",
      description: "Middletown, DE 19709"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Eastern Time Zone"
    }
  ];

  const services = [
    "AI Solutions & Machine Learning",
    "Cybersecurity & Data Protection",
    "Cloud Infrastructure & Migration",
    "5G Network Implementation",
    "Micro SAAS Development",
    "Web & Mobile Development",
    "Data Analytics & Business Intelligence",
    "Digital Transformation Consulting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get In Touch Today</title>
        <meta
          name="description"
          content="Contact Zion Tech Group for AI solutions, IT services, and digital transformation. Get a free consultation and transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="contact Zion Tech Group, AI consulting, IT services contact, technology consultation, business transformation, digital solutions"
        />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Amazing Together
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Get in touch with our experts for a free consultation and discover how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <EnhancedContactForm />
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {info.title}
                </h3>
                <p className="text-cyan-400 font-medium mb-2">{info.details}</p>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex AI solutions can take 3-6 months. We provide detailed timelines during consultation."
              },
              {
                question: "Do you offer ongoing support and maintenance?",
                answer: "Yes! We provide comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. Our support includes monitoring, updates, and technical assistance."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in AI/ML, cloud computing, cybersecurity, 5G solutions, web and mobile development, data analytics, and digital transformation technologies across various industries."
              },
              {
                question: "Do you work with startups or only enterprise clients?",
                answer: "We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and tailored to meet the specific needs and budget of each client."
              },
              {
                question: "How do you ensure data security and privacy?",
                answer: "We implement industry-standard security measures, comply with GDPR and other regulations, use encrypted communications, and follow strict data protection protocols throughout all projects."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait to transform your business. Contact us today for a free consultation 
            and discover how our technology solutions can drive your success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Our Services
              <Globe className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}