import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import EnhancedSEO from "./components/EnhancedSEO";

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description:
        "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-services-comprehensive",
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/it-services-comprehensive",
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/micro-saas-services",
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/5g-solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
        keywords="AI solutions, IT services, digital transformation, business automation, technology consulting, machine learning, 5G solutions, micro SaaS"
        canonical="https://ziontechgroup.com"
      />

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
            Leading provider of AI-powered solutions, IT services, and digital
            transformation for modern businesses. Transform your operations with
            cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center futuristic-button"
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
            <a
              href="tel:+13024640950"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              Call Us: +1 302 464 0950
            </a>
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
                className="futuristic-card p-6 hover:neon-glow"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className={`w-full bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center futuristic-button`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your project and discover how our solutions can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <div className="futuristic-card p-6 text-center hover:neon-glow-cyan">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts</p>
              <a
                href="tel:+13024640950"
                className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                +1 302 464 0950
              </a>
            </div>

            {/* Email Contact */}
            <div className="futuristic-card p-6 text-center hover:neon-glow-purple">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your project details</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-lg font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-300 break-all"
              >
                kleber@ziontechgroup.com
              </a>
            </div>

            {/* Address */}
            <div className="futuristic-card p-6 text-center hover:neon-glow-pink">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <address className="text-cyan-400 not-italic">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </address>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 futuristic-button inline-flex items-center"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
