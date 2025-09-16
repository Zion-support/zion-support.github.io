import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export function HomepagePromotion() {
    const featuredServices = [
        {
            id: "ai-content-generation",
            title: "AI Content Generation Suite",
            description: "Generate high-quality, SEO-optimized content in minutes, not hours",
            price: "$399/month",
            category: "AI & Content Marketing",
            features: ["Multi-format content", "SEO optimization", "Brand voice customization", "Plagiarism detection"],
            benefits: ["80% faster content creation", "45% better SEO rankings", "60% higher engagement"],
            link: "/comprehensive-services-showcase"
        },
        {
            id: "edge-computing-iot",
            title: "Edge Computing & IoT Platform",
            description: "Process data closer to devices for ultra-low latency and real-time insights",
            price: "$799/month",
            category: "IT Infrastructure",
            features: ["Distributed edge nodes", "Real-time processing", "IoT device management", "Edge AI capabilities"],
            benefits: ["80% lower latency", "60% bandwidth cost reduction", "Enhanced security"],
            link: "/comprehensive-services-showcase"
        },
        {
            id: "quantum-computing",
            title: "Quantum Computing Applications",
            description: "Solve previously intractable problems with quantum advantage",
            price: "$3,999/month",
            category: "Emerging Technology",
            features: ["Quantum algorithms", "Optimization solvers", "Cryptography tools", "Scientific simulation"],
            benefits: ["Exponential speedup", "Future-proof technology", "Competitive advantage"],
            link: "/comprehensive-services-showcase"
        },
        {
            id: "zero-trust-security",
            title: "Zero-Trust Security Architecture",
            description: "Continuous verification and least-privilege access across all resources",
            price: "$1,499/month",
            category: "IT Infrastructure",
            features: ["Identity verification", "Device trust scoring", "Network segmentation", "Continuous monitoring"],
            benefits: ["90% fewer security breaches", "Enhanced compliance", "Simplified security management"],
            link: "/comprehensive-services-showcase"
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="block bg-holographic-gradient bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of AI-powered solutions, innovative IT infrastructure, 
            and emerging technology services designed to give you a competitive advantage
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8 inline-block">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-zion-slate-light text-sm mb-2">Ready to Get Started?</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light text-sm mb-2">Email Us</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light text-sm mb-2">Visit Our Website</p>
                <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Services Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredServices.map((service) => (<motion.div key={service.id} variants={itemVariants} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:bg-white/20 transition-all duration-300 group">
              <div className="mb-4">
                <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mt-2">
                  {service.description}
                </p>
                <div className="text-zion-cyan font-bold text-lg mt-3">
                  {service.price}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-zion-cyan font-semibold text-sm mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (<li key={index} className="text-zion-slate-light text-xs flex items-start">
                      <span className="text-zion-cyan mr-2">•</span>
                      {feature}
                    </li>))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-zion-cyan font-semibold text-sm mb-2">Benefits</h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, index) => (<li key={index} className="text-green-400 text-xs flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {benefit}
                    </li>))}
                </ul>
              </div>

              <Link to={service.link} className="block w-full bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-semibold py-2 px-4 rounded-lg text-center transition-colors">
                Learn More
              </Link>
            </motion.div>))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Digital Transformation?
            </h3>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Our team of technology experts is ready to help you implement the perfect solution. 
              Get a personalized consultation and quote today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="mailto:kleber@ziontechgroup.com?subject=Digital Transformation Consultation" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Get Free Consultation
              </a>
              <a href="tel:+13024640950" className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors border border-white/30">
                Call +1 302 464 0950
              </a>
            </div>
            
            <div className="text-zion-slate-light text-sm">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
