import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle, Star, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 302 464 0950",
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      description: "Send us your inquiries and requests"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "364 E Main St STE 1008",
      description: "Middletown DE 19709, United States"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Saturday: 10:00 AM - 4:00 PM (EST)"
    }
  ];

  const services = [
    "AI-Powered Solutions",
    "IT Services & Consulting",
    "Micro SAAS Development",
    "5G Technology Implementation",
    "Cybersecurity Solutions",
    "Cloud Infrastructure",
    "Digital Transformation",
    "Custom Software Development"
  ];

  const whyChooseUs = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Team",
      description: "Certified professionals with years of experience"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proven Results",
      description: "99.9% client satisfaction rate"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all clients"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Zion Tech Group - Get in Touch | AI & IT Solutions</title>
        <meta
          name="description"
          content="Contact Zion Tech Group for AI solutions, IT services, micro SAAS, and digital transformation. Call +1 302 464 0950 or email kleber@ziontechgroup.com"
        />
        <meta
          name="keywords"
          content="contact Zion Tech Group, AI solutions contact, IT services contact, micro SAAS contact, digital transformation consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Contact our expert team for personalized solutions and consultation.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to reach our team of experts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto text-white group-hover:scale-110 transition-transform">
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

        {/* Services We Offer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Services We Offer
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions for your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results with cutting-edge technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto text-white">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300">
                    {reason.description}
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
              Contact us today for a free consultation and discover how we can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25"
              >
                Call Now: +1 302 464 0950
                <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Email Us
                <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Visit Our Office</h3>
              <p className="text-gray-300 mb-2">
                <MapPin className="w-5 h-5 inline mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-gray-300">
                <Clock className="w-5 h-5 inline mr-2" />
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
