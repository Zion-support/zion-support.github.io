import React from 'react';
import Link from 'next/link';
=======
=======
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  Globe,
  Shield,
  Users
} from 'lucide-react';

export function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email for general inquiries",
      contact: "hello@ziontechgroup.com",
      link: "mailto:hello@ziontechgroup.com",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (302) 464-0950",
      link: "tel:+13024640950",
      color: "from-zion-purple to-zion-cyan"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available 24/7",
      link: "/chat",
      color: "from-zion-blue to-zion-purple"
    }
  ];

  const officeLocations = [
    {
      city: "Wilmington, DE",
      country: "United States",
      address: "1000 N Market St, Wilmington, DE 19801",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      city: "New York, NY",
      country: "United States", 
      address: "350 5th Ave, New York, NY 10118",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      city: "London, UK",
      country: "United Kingdom",
      address: "1 Canary Wharf, London E14 5AB",
      icon: <MapPin className="w-5 h-5" />
    }
  ];

  const supportFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security for all communications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Certified professionals ready to help"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Support available in multiple time zones"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-zion-blue-dark to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-futuristic">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Touch</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how Zion Tech Group can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 font-tech">Contact Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{method.title}</h4>
                  <p className="text-zion-slate-light text-sm mb-3">{method.description}</p>
                  <a
                    href={method.link}
                    className="text-zion-cyan hover:text-white transition-colors duration-300 font-medium"
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Office Hours */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6 font-tech">Office Hours</h3>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">Monday - Friday</span>
                  <span className="text-white font-medium">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">Saturday</span>
                  <span className="text-white font-medium">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">Sunday</span>
                  <span className="text-white font-medium">Closed</span>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-zion-cyan font-semibold">24/7 Emergency Support</div>
                    <div className="text-zion-slate-light text-sm">Available for critical issues</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-tech">Our Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-3">
                    <div className="text-white">
                      {office.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{office.city}</h4>
                    <p className="text-zion-slate-light text-sm">{office.country}</p>
                  </div>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-tech">Why Choose Our Support?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-zion-slate-light text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your technology needs and discover how 
            Zion Tech Group can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-neon-lg hover:scale-105 transition-all duration-300 transform"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}