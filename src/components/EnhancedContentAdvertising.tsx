import React from 'react';
import { 
  ArrowRight, 
  Star, 
  Sparkles, 
  Rocket, 
  Brain, 
  Atom, 
  Zap,
  Globe,
  Shield,
  Target,
  Users,
  CheckCircle,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';

const EnhancedContentAdvertising: React.FC = () => {
  const featuredContent = [
    {
      title: "Ultimate Tech Showcase 2026",
      description: "Discover the most revolutionary technologies including quantum consciousness AI and interdimensional computing",
      icon: Sparkles,
      href: "/pages/UltimateTechShowcase2026",
      color: "from-purple-500 to-pink-500",
      badge: "NEW",
      features: ["50+ Technologies", "Quantum AI", "Interdimensional Computing"]
    },
    {
      title: "Advanced Biotech AI 2026",
      description: "Revolutionary biotechnology solutions for gene therapy, neural regeneration, and longevity enhancement",
      icon: Brain,
      href: "/pages/AdvancedBiotechAI2026",
      color: "from-green-500 to-emerald-500",
      badge: "BREAKTHROUGH",
      features: ["Gene Therapy", "Neural Regeneration", "Longevity Medicine"]
    },
    {
      title: "Next-Gen Space Technology 2026",
      description: "Cutting-edge space technology for interplanetary travel, space colonies, and asteroid mining",
      icon: Rocket,
      href: "/pages/NextGenSpaceTech2026",
      color: "from-blue-500 to-cyan-500",
      badge: "REVOLUTIONARY",
      features: ["Quantum Propulsion", "Space Colonies", "Asteroid Mining"]
    }
  ];

  const stats = [
    { label: "Revolutionary Technologies", value: "100+", icon: Sparkles },
    { label: "Active Research Projects", value: "500+", icon: Target },
    { label: "Global Partnerships", value: "1000+", icon: Globe },
    { label: "Breakthrough Patents", value: "2000+", icon: Award }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group's revolutionary technologies have transformed our business beyond imagination.",
      author: "Dr. Sarah Chen",
      role: "CEO, Future Dynamics",
      rating: 5
    },
    {
      quote: "The biotech AI solutions cured diseases we thought were incurable. Absolutely groundbreaking.",
      author: "Prof. Michael Rodriguez",
      role: "Director, Medical Research Institute",
      rating: 5
    },
    {
      quote: "Their space technology made interplanetary travel a reality. We're literally reaching for the stars.",
      author: "Commander Alex Thompson",
      role: "Space Mission Director",
      rating: 5
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Star className="w-4 h-4 mr-2" />
            REVOLUTIONARY CONTENT SHOWCASE
            <Star className="w-4 h-4 ml-2" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Discover the Future Today
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore our comprehensive collection of cutting-edge technologies, revolutionary solutions, 
            and breakthrough innovations that will define the next decade of human progress.
          </p>
        </divdiv>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <divdiv
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-200 text-sm">{stat.label}</div>
              </div>
            </divdiv>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {featuredContent.map((content, index) => (
            <divdiv
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${content.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <content.icon className="w-8 h-8 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${content.color} text-white`}>
                  {content.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{content.title}</h3>
              <p className="text-gray-300 mb-6">{content.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {content.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={content.href}
                className={`w-full bg-gradient-to-r ${content.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center group`}
              >
                Explore Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </divdiv>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">What Our Partners Say</h3>
            <p className="text-xl opacity-90">Real testimonials from industry leaders and innovators</p>
          </divdiv>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <divdiv
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-purple-300 text-sm">{testimonial.role}</div>
                </div>
              </divdiv>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-12 text-center border border-purple-400/30"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators, researchers, and visionaries who are already using our 
            revolutionary technologies to create the future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center">
              Explore All Technologies <Rocket className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </divdiv>
      </div>
    </div>
  );
};

export default EnhancedContentAdvertising;