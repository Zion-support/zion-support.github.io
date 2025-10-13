import { ArrowRight, Mail, Smartphone, Globe, Clock, CheckCircle, Users, Award, Star, Zap, Shield, Brain } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Consultation() {
  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Comprehensive AI strategy assessment and roadmap development for your business transformation.",
      icon: <Brain className="w-8 h-8" />,
      duration: "60-90 minutes",
      price: "Free",
      features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Implementation Plan"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Micro SAAS Consultation",
      description: "Expert guidance on selecting and implementing the right micro SAAS solutions for your business needs.",
      icon: <Zap className="w-8 h-8" />,
      duration: "45-60 minutes",
      price: "Free",
      features: ["Solution Assessment", "Integration Planning", "Cost Optimization", "Training Plan"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "5G Technology Consultation",
      description: "Strategic consultation on 5G implementation and optimization for your business infrastructure.",
      icon: <Shield className="w-8 h-8" />,
      duration: "60-75 minutes",
      price: "Free",
      features: ["5G Readiness Check", "Infrastructure Planning", "Performance Optimization", "Security Assessment"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Digital Transformation Consultation",
      description: "End-to-end digital transformation strategy covering AI, cloud, security, and process optimization.",
      icon: <Users className="w-8 h-8" />,
      duration: "90-120 minutes",
      price: "Free",
      features: ["Complete Assessment", "Transformation Roadmap", "Technology Stack", "Change Management"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "Expert Analysis",
      description: "Get insights from our certified technology experts with years of industry experience.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Customized Solutions",
      description: "Receive personalized recommendations tailored to your specific business requirements.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "No Obligation",
      description: "Free consultation with no strings attached. No pressure to purchase our services.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Actionable Insights",
      description: "Walk away with a clear roadmap and next steps for your technology transformation.",
      icon: <ArrowRight className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "The free consultation helped us identify the right AI solutions for our business. The team provided excellent insights and a clear implementation roadmap.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "Outstanding consultation service. They understood our needs and provided practical solutions that we could implement immediately.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The consultation was incredibly valuable. We got expert advice on our digital transformation strategy without any pressure to buy.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Guidance</title>
        <meta
          name="description"
          content="Get a free consultation with our technology experts. AI strategy, micro SAAS guidance, 5G implementation, and digital transformation consulting. No obligation, expert insights."
        />
        <meta
          name="keywords"
          content="free consultation, technology consulting, AI strategy, micro SAAS guidance, 5G implementation, digital transformation, expert advice, technology roadmap"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Clock className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Free Expert Consultation Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Free
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Consultation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get expert guidance on your technology transformation journey. Our certified experts provide free consultations 
              to help you choose the right AI, micro SAAS, and 5G solutions for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Call Now
                <Smartphone className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Consultation Types
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation that best fits your business needs. All consultations are completely free with no obligation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${consultation.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {consultation.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {consultation.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {consultation.description}
                    </p>
                    
                    {/* Duration and Price */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center text-cyan-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{consultation.duration}</span>
                      </div>
                      <div className="text-center">
                        <span className="text-2xl font-bold text-green-400">{consultation.price}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {consultation.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center">
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Schedule Now
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our free consultations provide exceptional value with expert insights and actionable recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our free consultation services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule your free consultation today and get expert guidance on your technology transformation journey. 
                No obligation, just valuable insights.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}