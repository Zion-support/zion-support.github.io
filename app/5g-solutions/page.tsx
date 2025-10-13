import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Wifi, Globe, Zap, Shield, Smartphone, Building, Car, Factory, Cloud, Database } from "lucide-react";

export default function FiveGSolutionsPage() {
  const features = [
    {
      title: "Ultra-Fast Connectivity",
      description: "Experience blazing-fast speeds up to 10 Gbps with ultra-low latency",
      icon: <Wifi className="w-6 h-6" />
    },
    {
      title: "Massive IoT Support",
      description: "Connect millions of devices with our advanced 5G infrastructure",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Edge Computing",
      description: "Process data at the edge for real-time applications and reduced latency",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Enhanced Security",
      description: "Advanced encryption and security protocols for enterprise-grade protection",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Mobile Applications",
      description: "Revolutionary mobile apps powered by 5G's high-speed capabilities",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Smart Infrastructure",
      description: "Transform cities and buildings with intelligent 5G-enabled systems",
      icon: <Building className="w-6 h-6" />
    }
  ];

  const solutions = [
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network design, deployment, and optimization services",
      icon: <Wifi className="w-8 h-8" />,
      features: ["Network planning & design", "Tower installation", "Fiber optic deployment", "Performance optimization"],
      pricing: "Starting at $50,000"
    },
    {
      title: "5G IoT Solutions",
      description: "Connect and manage millions of IoT devices with 5G technology",
      icon: <Globe className="w-8 h-8" />,
      features: ["Device connectivity", "Data management", "Real-time monitoring", "Predictive maintenance"],
      pricing: "Starting at $5,000/month"
    },
    {
      title: "5G Edge Computing",
      description: "Deploy edge computing solutions for ultra-low latency applications",
      icon: <Zap className="w-8 h-8" />,
      features: ["Edge servers", "Data processing", "Real-time analytics", "Cloud integration"],
      pricing: "Starting at $10,000/month"
    },
    {
      title: "5G Smart Cities",
      description: "Transform urban areas with intelligent 5G-powered city solutions",
      icon: <Building className="w-8 h-8" />,
      features: ["Traffic management", "Public safety", "Environmental monitoring", "Smart utilities"],
      pricing: "Starting at $100,000"
    },
    {
      title: "5G Automotive",
      description: "Enable connected and autonomous vehicles with 5G technology",
      icon: <Car className="w-8 h-8" />,
      features: ["V2X communication", "Autonomous driving", "Fleet management", "Safety systems"],
      pricing: "Starting at $25,000"
    },
    {
      title: "5G Industrial IoT",
      description: "Revolutionize manufacturing with 5G-powered industrial solutions",
      icon: <Factory className="w-8 h-8" />,
      features: ["Smart manufacturing", "Predictive maintenance", "Quality control", "Supply chain optimization"],
      pricing: "Starting at $15,000/month"
    }
  ];

  const benefits = [
    "10x faster data speeds compared to 4G",
    "Ultra-low latency (1ms) for real-time applications",
    "Support for 1 million devices per square kilometer",
    "99.9% network reliability and uptime",
    "Reduced energy consumption by 90%",
    "Future-proof technology for next decade"
  ];

  const useCases = [
    {
      industry: "Healthcare",
      description: "Remote surgery, telemedicine, and real-time patient monitoring",
      benefits: ["Save lives with instant medical data", "Enable remote consultations", "Improve patient outcomes"]
    },
    {
      industry: "Manufacturing",
      description: "Smart factories with real-time monitoring and predictive maintenance",
      benefits: ["Increase productivity by 30%", "Reduce downtime by 50%", "Improve quality control"]
    },
    {
      industry: "Transportation",
      description: "Connected vehicles, smart traffic management, and autonomous driving",
      benefits: ["Reduce accidents by 40%", "Optimize traffic flow", "Enable autonomous vehicles"]
    },
    {
      industry: "Entertainment",
      description: "Immersive AR/VR experiences, live streaming, and cloud gaming",
      benefits: ["Ultra-high quality streaming", "Immersive experiences", "Global content delivery"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Next-Generation Connectivity | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with cutting-edge 5G solutions. Ultra-fast connectivity, IoT integration, edge computing, and smart infrastructure for the digital future."
        />
        <meta
          name="keywords"
          content="5G solutions, 5G network, IoT connectivity, edge computing, smart cities, 5G infrastructure, next-generation connectivity"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G technology. Ultra-fast connectivity, 
              IoT integration, edge computing, and smart infrastructure for the digital future.
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
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary 5G Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of next-generation connectivity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive 5G Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end 5G solutions for every industry and use case
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 mb-6">
                    <p className="text-green-400 font-semibold text-center">{solution.pricing}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how 5G is transforming industries across the globe
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our 5G Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the advantages of next-generation connectivity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Embrace 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with the power of 5G technology. Contact us for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
