import { ArrowRight, Brain, Zap, Eye, Headphones, Shield, CheckCircle, Star, Cpu, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AINeuralInterface() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Direct Brain-Computer Interface",
      description: "Revolutionary neural interface technology that enables direct communication between the human brain and AI systems"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Neural Visual Processing",
      description: "AI-powered visual cortex simulation for enhanced image recognition and processing capabilities"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Thought-to-Text Conversion",
      description: "Convert neural signals directly into text, enabling seamless communication for individuals with disabilities"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Neural Audio Enhancement",
      description: "Advanced auditory processing that can restore and enhance hearing capabilities using AI neural networks"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Neural Security Protocols",
      description: "Biometric neural authentication and advanced security measures to protect neural interface data"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Cognitive Enhancement",
      description: "AI-assisted memory enhancement, learning acceleration, and cognitive performance optimization"
    }
  ];

  const pricingPlans = [
    {
      name: "Neural Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for research and development",
      features: [
        "Basic neural signal processing",
        "Thought-to-text (up to 100 words/min)",
        "Neural authentication",
        "Email support",
        "Basic cognitive enhancement",
        "API access for development"
      ],
      popular: false
    },
    {
      name: "Neural Professional",
      price: "$4,999",
      period: "/month",
      description: "Most popular for medical applications",
      features: [
        "Advanced neural signal processing",
        "High-speed thought-to-text (500 words/min)",
        "Visual and auditory enhancement",
        "Priority support",
        "Advanced cognitive enhancement",
        "Medical-grade neural monitoring",
        "Custom neural training",
        "24/7 neural support"
      ],
      popular: true
    },
    {
      name: "Neural Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For advanced research and medical institutions",
      features: [
        "Unlimited neural processing",
        "Ultra-high-speed thought-to-text (1000+ words/min)",
        "Full sensory enhancement suite",
        "Dedicated neural research team",
        "Custom neural interface development",
        "On-premise neural processing",
        "White-label neural solutions",
        "Direct neural data access"
      ],
      popular: false
    }
  ];

  const applications = [
    {
      title: "Medical Rehabilitation",
      description: "Restore motor function and communication for patients with spinal cord injuries and neurological disorders",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Assistive Technology",
      description: "Enable individuals with disabilities to control devices and communicate through neural signals",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Cognitive Enhancement",
      description: "Improve memory, learning speed, and cognitive performance for students and professionals",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Gaming & Entertainment",
      description: "Revolutionary gaming experiences with direct neural control and immersive virtual reality",
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Neural Research Institute",
      role: "Chief Neural Scientist",
      content: "Zion's neural interface technology has revolutionized our research. We've achieved breakthrough results in brain-computer communication.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Advanced Medical Center",
      role: "Neurologist",
      content: "The neural interface has given our patients new hope. We've seen remarkable improvements in motor function and communication.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      company: "Cognitive Enhancement Labs",
      role: "Research Director",
      content: "This technology is changing lives. The cognitive enhancement capabilities are beyond anything we've seen before.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Neural Interface Technology - Brain-Computer Interface | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI neural interface technology for brain-computer communication, cognitive enhancement, and medical rehabilitation. The future of human-AI interaction."
        />
        <meta
          name="keywords"
          content="neural interface, brain-computer interface, BCI, neural AI, cognitive enhancement, medical rehabilitation, thought-to-text"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Brain className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">The Future of Human-AI Interaction</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AI Neural Interface
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Breakthrough neural interface technology that enables direct communication between the human brain 
              and artificial intelligence. Experience the future of human-AI interaction and cognitive enhancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
              >
                Explore Neural Interface
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Neural Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
                <div className="text-gray-300">Neural Channels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Signal Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Words Per Minute</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Neural Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Neural Interface Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technology that bridges the gap between human consciousness and artificial intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Applications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Neural Interface Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how neural interface technology is transforming healthcare, education, and human capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {application.title}
                  </h3>
                  <p className="text-gray-300">
                    {application.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Neural Interface Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the neural interface solution that matches your research or medical needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-purple-400 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                      : 'border-white/20 hover:border-purple-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Start Neural Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Neural Research Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what leading researchers and medical professionals say about our neural interface technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Connect Your Mind to AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of human-AI interaction with our revolutionary neural interface technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Neural Interface
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Neural Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}