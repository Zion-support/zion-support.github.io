import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Mic, Rocket, Atom, Cpu } from "lucide-react";
import EnhancedSEO from "./components/EnhancedSEO";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
      },
      {
        "@type": "Offer", 
        "name": "Cybersecurity",
        "description": "Advanced cybersecurity solutions and protection"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure",
        "description": "Scalable cloud computing and infrastructure services"
      }
    ]
  };

  const services = [
    {
      title: "AI Quantum Financial Oracle",
      description: "Revolutionary quantum-powered financial prediction platform with 99.97% accuracy and 10,000x faster processing.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/ai-quantum-financial-oracle",
      color: "from-purple-500 to-cyan-500",
      price: "Starting at $2,999/month",
      features: ["Quantum Neural Networks", "Real-time Market Analysis", "Risk Assessment Matrix", "Portfolio Optimization"]
    },
    {
      title: "AI Space Mission Optimizer",
      description: "AI-powered space mission optimization with 99.8% success rates and 40% fuel savings through intelligent trajectory planning.",
      icon: <Rocket className="w-8 h-8" />,
      path: "/ai-space-mission-optimizer",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $4,999/month",
      features: ["Mission Trajectory Optimization", "Satellite Constellation Management", "Precision Landing Systems", "Real-time Mission Control"]
    },
    {
      title: "AI Voice Cloning Studio",
      description: "Professional AI voice cloning platform with 99.2% accuracy, supporting 50+ languages and real-time voice conversion.",
      icon: <Mic className="w-8 h-8" />,
      path: "/ai-voice-cloning-studio",
      color: "from-pink-500 to-purple-500",
      price: "Starting at $199/month",
      features: ["Neural Voice Synthesis", "Multi-Language Support", "Emotion & Tone Control", "High-Quality Audio Output"]
    },
    {
      title: "Zion AI Neural Interface",
      description: "Breakthrough brain-computer interface technology enabling direct neural communication with 99.9% signal accuracy.",
      icon: <Brain className="w-8 h-8" />,
      path: "/zion-ai-neural-interface",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,999/month",
      features: ["Neural Signal Processing", "Visual Cortex Interface", "Motor Control Integration", "Emotional State Recognition"]
    },
    {
      title: "Quantum Computing Solutions",
      description: "Advanced quantum computing infrastructure with 1000+ qubits, delivering 10,000x faster processing for complex tasks.",
      icon: <Atom className="w-8 h-8" />,
      path: "/quantum-computing-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $5,999/month",
      features: ["Quantum Processing Units", "Quantum Algorithm Optimization", "Quantum Cryptography", "Quantum Machine Learning"]
    },
    {
      title: "AI Analytics Pro",
      description: "Advanced AI-powered business intelligence with predictive analytics, real-time insights, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-analytics",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"]
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50+", label: "Countries Served" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company"
        description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
        keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              <span className="text-purple-300 font-medium">Next-Generation AI Technology</span>
            </div>
            
            <ResponsiveText
              as="h1"
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              mobile="text-4xl"
              tablet="text-6xl"
              desktop="text-7xl"
            >
              Transform Your Business with
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Advanced AI Solutions
              </span>
            </ResponsiveText>
            
            <ResponsiveText
              as="p"
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              mobile="text-lg"
              tablet="text-xl"
              desktop="text-2xl"
            >
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation. 
              Empowering businesses with cutting-edge technology and innovative solutions.
            </ResponsiveText>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <FuturisticButton
                as={Link}
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              
              <FuturisticButton
                as={Link}
                to="/demo"
                variant="outline"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Watch Demo
              </FuturisticButton>
            </div>

            {/* Stats */}
            <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </ResponsiveGrid>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary AI & Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge AI services, micro SAAS solutions, and advanced technology offerings 
              designed to transform your business operations.
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="text-purple-400 font-semibold mb-4">
                  {service.price}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  as={Link}
                  to={service.path}
                  variant="outline"
                  className="w-full justify-center group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <ResponsiveContainer>
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI-powered solutions to drive growth, 
              increase efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                as={Link}
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              
              <FuturisticButton
                as={Link}
                to="/pricing"
                variant="outline"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Pricing Plans
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default HomePage;
