import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description:
        "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "95% Accuracy",
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses including cloud infrastructure, cybersecurity, and digital transformation",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "24/7 Support",
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment with scalable architecture and enterprise-grade security",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "50+ Solutions",
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services enabling ultra-fast, low-latency communication networks",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      stats: "10x Speed",
    },
  ];

  const stats = [
    { label: "Happy Clients", value: "500+", icon: <Users className="w-6 h-6" /> },
    { label: "Projects Completed", value: "1000+", icon: <Award className="w-6 h-6" /> },
    { label: "Success Rate", value: "99.9%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "5.0", icon: <Star className="w-6 h-6" /> },
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
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.1)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading provider of AI-powered solutions, IT services, and digital
              transformation for modern businesses. Transform your operations with
              cutting-edge technology and innovative solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation with cutting-edge innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold text-lg">
                    {feature.stats}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechCorp",
                content: "Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs significantly.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CTO, InnovateLabs",
                content: "The 5G implementation was flawless. We now have the fastest network in our industry and our customers love the improved connectivity.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Director, DataFlow Inc",
                content: "Their micro SAAS solutions saved us months of development time. The quality and support exceeded our expectations completely.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of businesses already using our solutions to drive
              growth and innovation. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
