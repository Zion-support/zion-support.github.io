'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      id: 1,
      name: "AI Content Generator Pro",
      description: "Generate high-quality blog posts, social media content, and marketing copy using advanced AI. Includes SEO optimization and brand voice customization.",
      price: "$29/month",
      features: ["Unlimited content generation", "SEO optimization", "Brand voice training", "Multi-language support", "Content calendar integration"],
      icon: "✍️",
      category: "Content Creation",
      link: "https://ziontechgroup.com/ai-content-generator"
    },
    {
      id: 2,
      name: "Smart Analytics Dashboard",
      description: "Real-time business analytics with AI-powered insights, predictive modeling, and automated reporting. Connect to 50+ data sources.",
      price: "$49/month",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization", "API integrations"],
      icon: "📊",
      category: "Analytics",
      link: "https://ziontechgroup.com/smart-analytics"
    },
    {
      id: 3,
      name: "AI Email Marketing Suite",
      description: "Automated email campaigns with AI-powered personalization, A/B testing, and advanced segmentation. Increase open rates by 300%.",
      price: "$39/month",
      features: ["AI personalization", "Automated sequences", "A/B testing", "Advanced segmentation", "Performance analytics"],
      icon: "📧",
      category: "Marketing",
      link: "https://ziontechgroup.com/ai-email-marketing"
    },
    {
      id: 4,
      name: "Social Media Scheduler",
      description: "AI-powered social media management with optimal posting times, content suggestions, and engagement tracking across all platforms.",
      price: "$25/month",
      features: ["Multi-platform posting", "Optimal timing", "Content suggestions", "Engagement tracking", "Hashtag optimization"],
      icon: "📱",
      category: "Social Media",
      link: "https://ziontechgroup.com/social-scheduler"
    },
    {
      id: 5,
      name: "AI Customer Support Bot",
      description: "Intelligent chatbot with natural language processing, ticket routing, and 24/7 customer support automation.",
      price: "$79/month",
      features: ["Natural language processing", "Ticket routing", "Knowledge base", "Multi-language support", "Analytics dashboard"],
      icon: "🤖",
      category: "Customer Support",
      link: "https://ziontechgroup.com/ai-support-bot"
    },
    {
      id: 6,
      name: "Invoice & Payment Manager",
      description: "Automated invoicing with AI-powered payment predictions, late payment reminders, and financial reporting.",
      price: "$19/month",
      features: ["Automated invoicing", "Payment tracking", "Late payment reminders", "Financial reports", "Multi-currency support"],
      icon: "💰",
      category: "Finance",
      link: "https://ziontechgroup.com/invoice-manager"
    },
    {
      id: 7,
      name: "AI Project Manager",
      description: "Intelligent project management with resource allocation, deadline predictions, and automated task assignment.",
      price: "$59/month",
      features: ["Resource allocation", "Deadline predictions", "Task automation", "Team collaboration", "Progress tracking"],
      icon: "📋",
      category: "Project Management",
      link: "https://ziontechgroup.com/ai-project-manager"
    },
    {
      id: 8,
      name: "Smart Inventory Tracker",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and waste reduction optimization.",
      price: "$45/month",
      features: ["Demand forecasting", "Automated reordering", "Waste reduction", "Multi-location support", "Supplier integration"],
      icon: "📦",
      category: "Inventory",
      link: "https://ziontechgroup.com/smart-inventory"
    },
    {
      id: 9,
      name: "AI Lead Scoring Engine",
      description: "Automatically score and prioritize leads using machine learning algorithms. Increase conversion rates by 250%.",
      price: "$35/month",
      features: ["Lead scoring", "Behavioral tracking", "Conversion prediction", "CRM integration", "Custom scoring models"],
      icon: "🎯",
      category: "Sales",
      link: "https://ziontechgroup.com/ai-lead-scoring"
    },
    {
      id: 10,
      name: "Website Performance Optimizer",
      description: "AI-powered website optimization with automatic speed improvements, SEO enhancements, and user experience analysis.",
      price: "$39/month",
      features: ["Speed optimization", "SEO improvements", "UX analysis", "Mobile optimization", "Performance monitoring"],
      icon: "⚡",
      category: "Web Development",
      link: "https://ziontechgroup.com/website-optimizer"
    },
    {
      id: 11,
      name: "AI HR Assistant",
      description: "Streamline HR processes with AI-powered resume screening, interview scheduling, and employee onboarding automation.",
      price: "$69/month",
      features: ["Resume screening", "Interview scheduling", "Onboarding automation", "Performance tracking", "Compliance monitoring"],
      icon: "👥",
      category: "Human Resources",
      link: "https://ziontechgroup.com/ai-hr-assistant"
    },
    {
      id: 12,
      name: "Smart Document Processor",
      description: "Extract data from documents using OCR and AI. Automate data entry and document classification with 99% accuracy.",
      price: "$29/month",
      features: ["OCR processing", "Data extraction", "Document classification", "Batch processing", "API integration"],
      icon: "📄",
      category: "Document Management",
      link: "https://ziontechgroup.com/document-processor"
    }
  ];

  const categories = ["All", "Content Creation", "Analytics", "Marketing", "Social Media", "Customer Support", "Finance", "Project Management", "Inventory", "Sales", "Web Development", "Human Resources", "Document Management"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredServices, setFilteredServices] = useState(microSAASServices);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredServices(microSAASServices);
    } else {
      setFilteredServices(microSAASServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Powerful AI-Driven Tools for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose from 50+ ready-to-use AI-powered applications designed to streamline your business operations. 
            No coding required - start using immediately with our intuitive interfaces.
          </p>
          
          {/* Contact Info */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Email Us
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Address: 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${service.id * 100}ms` }}
              >
                <div className="text-4xl mb-4 text-center cyber-scan-line">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-center leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2 text-center neon-text">{service.price}</div>
                  <div className="text-xs text-gray-400 text-center mb-4">{service.category}</div>
                </div>

                <ul className="text-xs text-gray-300 mb-6 space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a
                    href={service.link}
                    className="cyber-button w-full text-center block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>✓ 3 Micro SAAS tools</li>
                <li>✓ Basic AI features</li>
                <li>✓ Email support</li>
                <li>✓ 1 user account</li>
                <li>✓ Basic analytics</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="quantum-card energy-pulse p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>✓ 10 Micro SAAS tools</li>
                <li>✓ Advanced AI features</li>
                <li>✓ Priority support</li>
                <li>✓ 5 user accounts</li>
                <li>✓ Advanced analytics</li>
                <li>✓ API access</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$399/month</div>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>✓ All Micro SAAS tools</li>
                <li>✓ Premium AI features</li>
                <li>✓ 24/7 phone support</li>
                <li>✓ Unlimited users</li>
                <li>✓ Custom analytics</li>
                <li>✓ White-label options</li>
                <li>✓ Custom integrations</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300 text-sm">Get started in minutes with our intuitive interfaces and pre-configured templates.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">Bank-level security with SOC 2 compliance and end-to-end encryption.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300 text-sm">Average 300% ROI within 6 months of implementation for our clients.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-3">No Code Required</h3>
              <p className="text-gray-300 text-sm">Powerful AI tools that work out of the box - no technical expertise needed.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;