import { ArrowRight, Calendar, Users, CheckCircle, Brain, Shield, Zap, Mail, Smartphone, Globe, Target, Award, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Consultation() {
  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Develop a comprehensive AI roadmap tailored to your business needs and industry requirements.",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "AI readiness assessment",
        "Technology stack recommendations",
        "Implementation roadmap",
        "ROI projections"
      ],
      duration: "2-4 hours",
      price: "Free"
    },
    {
      title: "Cybersecurity Audit",
      description: "Comprehensive security assessment to identify vulnerabilities and strengthen your digital defenses.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Security vulnerability scan",
        "Compliance assessment",
        "Risk mitigation strategies",
        "Security best practices"
      ],
      duration: "3-5 hours",
      price: "Free"
    },
    {
      title: "Cloud Migration Planning",
      description: "Strategic planning for seamless cloud migration with minimal disruption to your operations.",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Current infrastructure analysis",
        "Cloud platform selection",
        "Migration timeline",
        "Cost optimization strategies"
      ],
      duration: "4-6 hours",
      price: "Free"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategy to modernize your business processes and operations.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Process automation analysis",
        "Technology integration plan",
        "Change management strategy",
        "Performance metrics"
      ],
      duration: "6-8 hours",
      price: "Free"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Planning",
      description: "Get expert guidance on technology decisions that align with your business goals"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Expertise",
      description: "Leverage our deep knowledge across various industries and technology domains"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven Results",
      description: "Benefit from our track record of successful implementations and transformations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "Work with experienced consultants who understand your unique challenges"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta
          name="description"
          content="Get expert technology consultation from Zion Tech Group. Free AI strategy, cybersecurity audit, cloud migration planning, and digital transformation guidance."
        />
        <meta
          name="keywords"
          content="free consultation, technology advisory, AI strategy, digital transformation, cybersecurity audit, cloud migration, technology planning"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Consultation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get expert guidance on your technology challenges. Our free consultations help you make informed decisions 
              about AI, cybersecurity, cloud migration, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
              >
                Explore Our Services
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Consultation Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the consultation that best matches your current technology needs and challenges.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {type.duration}
                    </span>
                    <span className="text-cyan-400 font-semibold">{type.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert consultants bring years of experience and proven methodologies to help you succeed.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
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
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Schedule your free consultation today and take the first step towards a more efficient, 
              secure, and innovative technology infrastructure.
            </p>
            
            {/* Contact Information */}
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
              >
                View All Services
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}