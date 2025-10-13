import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight } from "lucide-react";

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description:
        "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 quantum-field"></div>
      <div className="absolute inset-0 holographic-grid"></div>
      <div className="absolute inset-0 plasma-effect"></div>
      
      <div className="relative z-10">
        <Helmet>
          <title>Zion Tech Group - Advanced AI and IT Solutions</title>
          <meta
            name="description"
            content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
          />
          <meta
            name="keywords"
            content="AI solutions, IT services, digital transformation, business automation, technology consulting, micro SAAS, 5G solutions"
          />
        </Helmet>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6 border border-cyan-500/30">
                🚀 Next-Generation Technology Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Welcome to
              <span className="block text-cyberpunk neon-advanced mt-2">
                ZION TECH GROUP
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Leading provider of <span className="text-cyan-400 font-semibold">AI-powered solutions</span>, 
              <span className="text-purple-400 font-semibold"> IT services</span>, and 
              <span className="text-green-400 font-semibold"> digital transformation</span> for modern businesses. 
              Transform your operations with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="btn-quantum text-lg px-12 py-4"
              >
                Get Started
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link
                to="/about"
                className="holographic-card text-cyan-400 px-12 py-4 text-lg font-semibold hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="holographic-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="holographic-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="holographic-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-cyberpunk neon-advanced">Core Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your
                business growth and digital transformation with cutting-edge innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="holographic-card hover-quantum p-8 text-center group"
                >
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto neon-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={feature.title === "AI-Powered Solutions" ? "/ai-services" : 
                          feature.title === "IT Services" ? "/it-services" :
                          feature.title === "Micro SAAS" ? "/micro-saas" : "/5g-solutions"}
                      className="text-cyan-400 hover:text-white transition-colors font-semibold flex items-center justify-center space-x-2 group"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="holographic-card p-12 relative overflow-hidden">
              <div className="absolute inset-0 data-stream"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to <span className="text-cyberpunk neon-advanced">Transform</span> Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses already using our solutions to drive
                  growth and innovation. Experience the future of technology today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="btn-quantum text-lg px-12 py-4"
                  >
                    Start Your Journey
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                  <Link
                    to="/services"
                    className="holographic-card text-cyan-400 px-12 py-4 text-lg font-semibold hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    View Services
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
