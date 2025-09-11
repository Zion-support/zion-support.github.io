import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Clock, 
  MessageSquare,
  Send,
  ArrowRight,
  CheckCircle,
  Shield,
  Users,
  Zap
} from 'lucide-react';

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      value: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com",
      color: "from-zion-cyan to-zion-blue",
      responseTime: "Within 2 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      value: "+1 302 464 0950",
      href: "tel:+13024640950",
      color: "from-zion-purple to-zion-cyan",
      responseTime: "Immediate"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant support via live chat",
      value: "Start Chat",
      href: "#",
      color: "from-zion-blue to-zion-purple",
      responseTime: "Instant"
    },
    {
      icon: Globe,
      title: "Website",
      description: "Visit our main website for more information",
      value: "ziontechgroup.com",
      href: "https://ziontechgroup.com",
      color: "from-zion-cyan to-zion-purple",
      responseTime: "24/7"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      color: "text-zion-cyan"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      color: "text-zion-purple"
    },
    {
      icon: Users,
      title: "Support Hours",
      value: "24/7 Technical Support Available",
      color: "text-zion-blue"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Secure Communication",
      description: "All communications are encrypted and secure"
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Average response time under 2 hours"
    },
    {
      icon: CheckCircle,
      title: "Expert Team",
      description: "Direct access to certified professionals"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 cyber-grid"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
            <span className="block text-gradient"> With Our Team</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Our team of experts is here to help. 
            Reach out through any of our contact methods and let's start building the future together.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zion-blue-dark/20 to-zion-slate-dark/20 border border-zion-blue-light/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                {method.title}
              </h3>
              <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                {method.description}
              </p>

              {/* Contact Value */}
              <a
                href={method.href}
                className="block text-zion-cyan font-medium mb-3 hover:text-zion-cyan-light transition-colors"
              >
                {method.value}
              </a>

              {/* Response Time */}
              <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                <Clock className="w-4 h-4" />
                <span>Response: {method.responseTime}</span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Office Information */}
        <div className="bg-gradient-to-r from-zion-blue-dark/30 to-zion-purple-dark/30 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Office Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {whyChooseUs.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-zion-cyan" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                {feature.title}
              </h4>
              <p className="text-zion-slate-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue-dark/30 to-zion-purple-dark/30 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-zion-slate-light mb-8 text-lg max-w-2xl mx-auto">
              Fill out our contact form and one of our experts will get back to you 
              within 2 hours to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                Contact Us Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-zion-cyan/10 text-zion-cyan px-6 py-3 rounded-full text-sm font-medium border border-zion-cyan/20">
            <Shield className="w-4 h-4" />
            <span>24/7 Emergency Support Available</span>
            <Phone className="w-4 h-4" />
            <span>+1 302 464 0950</span>
          </div>
        </div>
      </div>
    </section>
  );
}