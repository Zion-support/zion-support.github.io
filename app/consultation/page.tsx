import { ArrowRight, CheckCircle, Clock, Users, Award, Zap, Globe, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Consultation() {
  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Develop a comprehensive AI strategy tailored to your business needs and goals.",
      duration: "2-4 weeks",
      price: "Starting at $5,000",
      features: [
        "AI readiness assessment",
        "Technology roadmap development",
        "ROI analysis and projections",
        "Implementation timeline"
      ],
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Cloud Migration Planning",
      description: "Plan and execute a seamless migration to the cloud with minimal disruption.",
      duration: "4-8 weeks",
      price: "Starting at $8,000",
      features: [
        "Current infrastructure audit",
        "Cloud architecture design",
        "Migration strategy development",
        "Risk assessment and mitigation"
      ],
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security evaluation and recommendations for your organization.",
      duration: "2-3 weeks",
      price: "Starting at $3,000",
      features: [
        "Security vulnerability assessment",
        "Compliance review",
        "Security policy development",
        "Incident response planning"
      ],
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Discovery",
      description: "We start with a comprehensive discovery session to understand your business, challenges, and goals.",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "2",
      title: "Analysis & Planning",
      description: "Our experts analyze your current state and develop a detailed plan with recommendations.",
      icon: <Award className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Strategy Development",
      description: "We create a comprehensive strategy document with actionable steps and timelines.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Implementation Support",
      description: "We provide ongoing support to help you implement the recommended solutions.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Professional IT Consulting</title>
        <meta
          name="description"
          content="Get expert consultation services from Zion Tech Group. AI strategy, cloud migration, cybersecurity assessment, and more. Transform your business with our professional guidance."
        />
        <meta
          name="keywords"
          content="IT consultation, AI strategy, cloud migration, cybersecurity assessment, technology consulting, business transformation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert guidance to transform your business with cutting-edge technology solutions. 
              Our experienced consultants help you make informed decisions and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation Types Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of consultation services designed to address your specific business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {type.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-cyan-400 font-medium">{type.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-green-400 font-medium">{type.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consultation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to ensure you get the most value from our consultation services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-cyan-400">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Consultation Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We bring decades of combined experience and a proven track record of success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 text-white">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Our consultants are industry experts with years of experience in AI, cloud computing, and cybersecurity.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 text-white">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Process</h3>
                <p className="text-gray-300">
                  Our structured approach ensures consistent, high-quality results for every client engagement.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 text-white">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Client-Focused</h3>
                <p className="text-gray-300">
                  We tailor our recommendations to your specific business needs, goals, and constraints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a consultation with our experts and discover how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  Schedule Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}