import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight } from "lucide-react";

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description:
        "Advanced artificial intelligence and machine learning solutions to automate processes, enhance decision-making, and drive innovation across your organization",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cybersecurity & IT Services",
      description: "Comprehensive cybersecurity solutions and IT services to protect your business and ensure seamless technology operations",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Micro SAAS Solutions",
      description: "Ready-to-deploy software solutions that provide immediate value and can be customized to meet your specific business needs",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "5G & Edge Computing",
      description: "Next-generation 5G implementation and edge computing solutions to enable ultra-fast connectivity and real-time processing",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta
          name="description"
          content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses."
        />
        <meta
          name="keywords"
          content="AI solutions, IT services, digital transformation, business automation, technology consulting"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading provider of AI-powered solutions, cybersecurity, and digital
            transformation for modern businesses. Transform your operations with
            cutting-edge technology and innovative solutions that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyan-400">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-400">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-pink-400">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses already using our solutions to drive
            growth and innovation. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
