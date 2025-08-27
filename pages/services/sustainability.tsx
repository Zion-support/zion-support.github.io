import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Leaf, 
  Zap, 
  Shield, 
  Users, 
  Database, 
  Globe,
  CheckCircle,
  BarChart3,
  Network,
  Server,
  Cpu,
  Cloud,
  ArrowRight
} from 'lucide-react';

const Sustainability = () => {
  const greenITSolutions = [
    {
      icon: Leaf,
      title: "Green Data Centers",
      description: "Energy-efficient data centers with renewable energy and cooling optimization"
    },
    {
      icon: Zap,
      title: "Energy Management",
      description: "Smart energy monitoring and optimization systems for IT infrastructure"
    },
    {
      icon: Shield,
      title: "Sustainable Security",
      description: "Eco-friendly cybersecurity solutions with minimal environmental impact"
    },
    {
      icon: Users,
      title: "Remote Work Solutions",
      description: "Cloud-based collaboration tools reducing carbon footprint from commuting"
    },
    {
      icon: Database,
      title: "Green Software",
      description: "Energy-efficient software development and optimization practices"
    },
    {
      icon: Globe,
      title: "Carbon Footprint Tracking",
      description: "Monitor and reduce your organization's digital carbon emissions"
    }
  ];

  const benefits = [
    "Reduce energy consumption by 30-50% with green IT solutions",
    "Lower operational costs through energy efficiency",
    "Meet sustainability goals and compliance requirements",
    "Enhance brand reputation with environmental responsibility",
    "Future-proof your IT infrastructure for sustainability regulations",
    "Contribute to global climate change mitigation efforts"
  ];

  const industrySolutions = [
    {
      industry: "Manufacturing",
      description: "Smart factories with energy-efficient automation and monitoring",
      features: ["Energy monitoring", "Smart automation", "Waste reduction"]
    },
    {
      industry: "Healthcare",
      description: "Green healthcare IT with energy-efficient medical systems",
      features: ["Medical device efficiency", "Data center optimization", "Remote monitoring"]
    },
    {
      industry: "Finance",
      description: "Sustainable fintech with green cloud infrastructure",
      features: ["Green cloud services", "Energy-efficient trading", "Sustainable banking"]
    },
    {
      industry: "Education",
      description: "Eco-friendly educational technology and virtual learning",
      features: ["Virtual classrooms", "Energy-efficient devices", "Digital learning"]
    },
    {
      industry: "Retail",
      description: "Sustainable retail technology with smart energy management",
      features: ["Smart lighting", "Energy monitoring", "Eco-friendly POS"]
    },
    {
      industry: "Government",
      description: "Green government IT with sustainable digital services",
      features: ["Digital services", "Energy efficiency", "Sustainable procurement"]
    }
  ];

  const environmentalImpact = [
    {
      metric: "30-50%",
      label: "Energy Reduction",
      description: "Significant decrease in IT infrastructure energy consumption"
    },
    {
      metric: "40-60%",
      label: "Carbon Footprint",
      description: "Reduction in greenhouse gas emissions from IT operations"
    },
    {
      metric: "25-35%",
      label: "Cost Savings",
      description: "Lower operational costs through energy efficiency"
    },
    {
      metric: "100%",
      label: "Renewable Energy",
      description: "Transition to clean, renewable energy sources"
    }
  ];

  const sustainableTechnologyStack = [
    {
      category: "Energy Management",
      technologies: ["Smart meters", "IoT sensors", "AI optimization", "Predictive analytics"]
    },
    {
      category: "Green Cloud",
      technologies: ["AWS Green", "Azure Sustainability", "Google Cloud Green", "Carbon-aware computing"]
    },
    {
      category: "Sustainable Software",
      technologies: ["Energy-efficient algorithms", "Green coding practices", "Sustainable DevOps", "Carbon-aware development"]
    },
    {
      category: "Hardware Optimization",
      technologies: ["Energy-efficient processors", "Low-power servers", "Sustainable materials", "Recycling programs"]
    },
    {
      category: "Monitoring & Analytics",
      technologies: ["Carbon tracking", "Energy analytics", "Sustainability dashboards", "Environmental reporting"]
    },
    {
      category: "Compliance & Standards",
      technologies: ["ISO 14001", "Green IT standards", "Carbon reporting", "Sustainability frameworks"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Green",
      role: "Sustainability Director, EcoTech Corp",
      content: "Zion Tech Group's green IT solutions helped us reduce our carbon footprint by 45% while improving efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, Sustainable Manufacturing",
      content: "Their energy management systems transformed our factory operations, reducing costs and environmental impact.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "IT Director, Green Healthcare",
      content: "The sustainable healthcare IT solutions improved our efficiency while meeting our environmental goals.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Sustainability & Green IT Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's Sustainability & Green IT services. Energy efficiency, carbon reduction, and eco-friendly technology solutions." />
        <meta name="keywords" content="sustainability, green IT, energy efficiency, carbon reduction, environmental technology, sustainable IT" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
          <div className="relative container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Sustainability &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Green IT
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with sustainable technology solutions. Reduce your carbon footprint, 
                lower costs, and contribute to a greener future with our Green IT services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Go Green Today
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 Call +1 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Green IT Solutions Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Green IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive sustainability and green IT platform provides eco-friendly technology solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {greenITSolutions.map((solution, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Sustainable Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements in sustainability and operational efficiency
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored sustainability solutions for your industry's unique environmental challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{solution.industry}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environmental Impact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Environmental Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable results from our sustainability and green IT solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {environmentalImpact.map((impact, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                    {impact.metric}
                  </div>
                  <p className="text-xl text-white font-semibold mb-2">{impact.label}</p>
                  <p className="text-gray-300">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainable Technology Stack Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Sustainable Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with eco-friendly technologies for maximum sustainability and performance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sustainableTechnologyStack.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.technologies.map((technology, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">{technology}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Sustainability Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from businesses using our sustainability and green IT solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Go Green?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with sustainable technology solutions. Our sustainability experts are ready 
                to help you reduce your environmental impact while improving efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Sustainability Journey
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 +1 (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>🌐 https://ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sustainability;