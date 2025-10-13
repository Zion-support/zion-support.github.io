import React from "react";

interface EnhancedHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  benefits?: string[];
  backgroundImage?: string;
  className?: string;
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({
  title = "Transform Your Business with AI",
  subtitle = "Leading Provider of AI Solutions",
  description = "Revolutionize your operations with cutting-edge artificial intelligence technology. Our advanced solutions deliver measurable results and drive unprecedented growth.",
  primaryCta = {
    text: "Get Started",
    href: "/contact",
  },
  secondaryCta = {
    text: "Learn More",
    href: "/about",
  },
  benefits = [
    "Advanced AI technology integration",
    "Real-time processing and analytics",
    "Enterprise-grade security and compliance",
    "Scalable and flexible solutions",
    "24/7 technical support",
    "Custom implementation and training",
  ],
  backgroundImage = "/api/placeholder/1920/1080",
  className = "",
}) => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9 AM-6 PM PST",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@ziontechgroup.com",
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, San Francisco, CA",
      description: "Schedule a meeting",
    },
  ];

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {title}
              </h1>
              <p className="text-xl text-cyan-400 mb-4 font-semibold">
                {subtitle}
              </p>
              <p className="text-lg text-gray-300 mb-8">{description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={primaryCta.href}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                {primaryCta.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to={secondaryCta.href}
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                {secondaryCta.text}
              </Link>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <info.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-gray-300">{info.details}</p>
                      <p className="text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;
