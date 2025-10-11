import {Search, Filter, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server} ArrowRight; Rocket } from 'lucide-react'
import {Search, Filter, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, TrendingUp, PieChart, Activity} Package; Wifi } from 'lucide-react'
  // Micro SAAS Services data
  const microSaasServices = [
    {id: 1,
      name: "TaskFlow Pro",
      category: "Productivity",
      pricing: "Freemium",
      description: "Simple yet powerful task management and project collaboration tool for small teams",
      price: 15,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Task management", "Team collaboration", "Time tracking", "Progress reports"],
      benefits: ["Increased productivity", "Better team coordination", "Project visibility", "Easy to use"],
      targetAudience: ["Small teams", "Startups", "Freelancers", "Small businesses"],
      tags: ["Task Management", "Productivity", "Collaboration", "Project Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 16,
      name: "AI CodeGen Pro",
      category: "Development",
      pricing: "Freemium",
      description: "AI-powered code generation and development assistance for developers and teams",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 8 developers",
      features: ["AI code generation", "Code review", "Bug detection", "Documentation auto-generation"],
      benefits: ["Faster development", "Code quality improvement", "Reduced bugs", "Time savings"],
      targetAudience: ["Software developers", "Dev teams", "Startups", "Tech companies"],
      tags: ["AI Development", "Code Generation", "Code Review", "Automation", "Productivity"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 17,
      name: "Quantum Analytics",
      category: "Analytics",
      pricing: "Freemium",
      description: "Advanced predictive analytics and business intelligence using quantum computing principles",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Predictive modeling", "Real-time analytics", "AI insights", "Custom dashboards"],
      benefits: ["Future-proof decisions", "Competitive advantage", "Data-driven insights", "Scalable analytics"],
      targetAudience: ["Data scientists", "Business analysts", "Executives", "Consulting firms"],
      tags: ["Quantum Analytics", "Predictive Modeling", "Business Intelligence", "AI", "Real-time"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 18,
      name: "Blockchain Business Suite",
      category: "Blockchain",
      pricing: "Freemium",
      description: "Complete blockchain solution for business operations and smart contract management",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Smart contracts", "Token management", "DeFi integration", "Blockchain analytics"],
      benefits: ["Transparency", "Security", "Cost reduction", "Innovation leadership"],
      targetAudience: ["Fintech companies", "Supply chain", "Real estate", "Healthcare"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "Cryptocurrency", "Business Solutions"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 19,
      name: "IoT Enterprise Hub",
      category: "IoT",
      pricing: "Freemium",
      description: "Comprehensive IoT platform for enterprise device management and data collection",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 1000 devices",
      features: ["Device management", "Real-time monitoring", "Data analytics", "Automation rules"],
      benefits: ["Operational efficiency", "Cost reduction", "Predictive maintenance", "Data insights"],
      targetAudience: ["Manufacturing", "Healthcare", "Smart cities", "Agriculture"],
      tags: ["IoT", "Device Management", "Real-time Monitoring", "Automation", "Enterprise"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 20,
      name: "AR/VR Studio Pro",
      category: "Immersive Tech",
      pricing: "Freemium",
      description: "Professional AR/VR development platform for immersive experiences and training",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 15 developers",
      features: ["3D modeling", "VR development", "AR integration", "Analytics dashboard"],
      benefits: ["Immersive experiences", "Training efficiency", "Customer engagement", "Innovation"],
      targetAudience: ["Game developers", "Training companies", "Real estate", "Education"],
      tags: ["AR/VR", "3D Modeling", "Immersive Tech", "Training", "Development"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 2,
      name: "InvoiceGenius",
      category: "Finance",
      pricing: "Freemium",
      description: "AI-powered invoice generation and financial management for small businesses",
      price: 25,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["AI invoice generation", "Expense tracking", "Financial reports", "Tax preparation"],
      benefits: ["Time savings", "Accuracy improvement", "Tax compliance", "Financial insights"],
      targetAudience: ["Small businesses", "Freelancers", "Consultants", "Service providers"],
      tags: ["Invoicing", "Finance", "AI", "Tax Preparation", "Expense Tracking"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 3,
      name: "SocialSync Pro",
      category: "Marketing",
      pricing: "Freemium",
      description: "Comprehensive social media management and analytics platform for businesses",
      price: 30,
      pricingModel: "monthly",
      userLimit: "Up to 5 users",
      features: ["Multi-platform posting", "Content scheduling", "Analytics dashboard", "Engagement tracking"],
      benefits: ["Time efficiency", "Better engagement", "Data insights", "Brand consistency"],
      targetAudience: ["Marketing teams", "Small businesses", "Agencies", "Content creators"],
      tags: ["Social Media", "Marketing", "Analytics", "Content Management", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 4,
      name: "CustomerFlow CRM",
      category: "CRM",
      pricing: "Freemium",
      description: "Lightweight customer relationship management system for growing businesses",
      price: 20,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Contact management", "Sales pipeline", "Email integration", "Reporting tools"],
      benefits: ["Better customer relationships", "Sales improvement", "Data organization", "Team collaboration"],
      targetAudience: ["Sales teams", "Small businesses", "Startups", "Consultants"],
      tags: ["CRM", "Sales", "Customer Management", "Pipeline", "Reporting"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 5,
      name: "DataViz Studio",
      category: "Analytics",
      pricing: "Freemium",
      description: "Easy-to-use data visualization and analytics platform for business insights",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["Interactive dashboards", "Data connectors", "Custom charts", "Real-time updates"],
      benefits: ["Data insights", "Better decisions", "Visual communication", "Time savings"],
      targetAudience: ["Business analysts", "Marketing teams", "Executives", "Data teams"],
      tags: ["Analytics", "Data Visualization", "Dashboards", "Business Intelligence", "Reporting"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 6,
      name: "ScheduleMaster",
      category: "Scheduling",
      pricing: "Freemium",
      description: "Intelligent scheduling and appointment booking system for service businesses",
      price: 18,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Online booking", "Calendar integration", "Automated reminders", "Payment processing"],
      benefits: ["Reduced no-shows", "24/7 booking", "Payment collection", "Time savings"],
      targetAudience: ["Service businesses", "Consultants", "Healthcare", "Beauty salons"],
      tags: ["Scheduling", "Appointments", "Booking", "Calendar", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 7,
      name: "ContentCraft AI",
      category: "Content",
      pricing: "Freemium",
      description: "AI-powered content creation and optimization tool for marketers and creators",
      price: 40,
      pricingModel: "monthly",
      userLimit: "Up to 6 users",
      features: ["AI content generation", "SEO optimization", "Content planning", "Performance analytics"],
      benefits: ["Content creation speed", "SEO improvement", "Engagement increase", "Time efficiency"],
      targetAudience: ["Content marketers", "Bloggers", "Agencies", "Small businesses"],
      tags: ["Content Creation", "AI", "SEO", "Marketing", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 8,
      name: "SecureVault",
      category: "Security",
      pricing: "Freemium",
      description: "Enterprise-grade security and compliance management for small businesses",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Password management", "Access control", "Compliance monitoring", "Security audits"],
      benefits: ["Enhanced security", "Compliance", "Risk reduction", "Peace of mind"],
      targetAudience: ["Small businesses", "Healthcare", "Finance", "Legal services"],
      tags: ["Security", "Compliance", "Password Management", "Access Control", "Risk Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 9,
      name: "MediaHub Pro",
      category: "Media",
      pricing: "Freemium",
      description: "Digital asset management and media organization platform for creative teams",
      price: 28,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Asset organization", "Version control", "Collaboration tools", "Search & filtering"],
      benefits: ["Better organization", "Team collaboration", "Time savings", "Asset protection"],
      targetAudience: ["Design teams", "Marketing agencies", "Photographers", "Content creators"],
      tags: ["Media Management", "Digital Assets", "Collaboration", "Organization", "Creative Tools"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 10,
      name: "LearnFlow LMS",
      category: "Education",
      pricing: "Freemium",
      description: "Learning management system for corporate training and online education",
      price: 32,
      pricingModel: "monthly",
      userLimit: "Up to 100 learners",
      features: ["Course creation", "Progress tracking", "Assessment tools", "Mobile learning"],
      benefits: ["Training efficiency", "Progress monitoring", "Cost reduction", "Scalability"],
      targetAudience: ["Corporate training", "Educational institutions", "Online courses", "Skill development"],
      tags: ["LMS", "Education", "Training", "Online Learning", "Assessment"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 11,
      name: "EcoTrack Pro",
      category: "Sustainability",
      pricing: "Freemium",
      description: "Sustainability tracking and environmental impact management for businesses",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Carbon footprint tracking", "Sustainability reporting", "Goal setting", "Progress monitoring"],
      benefits: ["Environmental impact", "Regulatory compliance", "Brand reputation", "Cost savings"],
      targetAudience: ["Manufacturing", "Retail", "Service businesses", "Sustainability-focused companies"],
      tags: ["Sustainability", "Environmental Impact", "Carbon Tracking", "Reporting", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 12,
      name: "LegalAssist AI",
      category: "Legal",
      pricing: "Freemium",
      description: "AI-powered legal document generation and contract management for small businesses",
      price: 50,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["Document templates", "AI generation", "Contract management", "Legal compliance"],
      benefits: ["Cost reduction", "Legal protection", "Time savings", "Compliance"],
      targetAudience: ["Small businesses", "Startups", "Freelancers", "Legal professionals"],
      tags: ["Legal Tech", "AI", "Document Generation", "Contract Management", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 13,
      name: "HealthTrack Plus",
      category: "Healthcare",
      pricing: "Freemium",
      description: "Health monitoring and wellness tracking platform for individuals and small clinics",
      price: 22,
      pricingModel: "monthly",
      userLimit: "Up to 50 patients",
      features: ["Health monitoring", "Wellness tracking", "Patient portal", "Health reports"],
      benefits: ["Better health outcomes", "Patient engagement", "Data insights", "Preventive care"],
      targetAudience: ["Small clinics", "Wellness centers", "Personal trainers", "Individuals"],
      tags: ["Healthcare", "Wellness", "Health Monitoring", "Patient Portal", "Preventive Care"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 14,
      name: "EventMaster Pro",
      category: "Events",
      pricing: "Freemium",
      description: "Comprehensive event management and ticketing platform for event organizers",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 1000 attendees",
      features: ["Event planning", "Ticket sales", "Attendee management", "Analytics dashboard"],
      benefits: ["Event success", "Revenue increase", "Attendee satisfaction", "Data insights"],
      targetAudience: ["Event organizers", "Conferences", "Workshops", "Entertainment"],
      tags: ["Event Management", "Ticketing", "Planning", "Attendee Management", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 15,
      name: "InventorySmart",
      category: "Inventory",
      pricing: "Freemium",
      description: "Intelligent inventory management and supply chain optimization for small businesses",
      price: 25,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Inventory tracking", "Demand forecasting", "Reorder alerts", "Analytics reports"],
      benefits: ["Stock optimization", "Cost reduction", "Better planning", "Customer satisfaction"],
      targetAudience: ["Retail stores", "E-commerce", "Manufacturing", "Distribution"],
      tags: ["Inventory Management", "Supply Chain", "Forecasting", "Analytics", "Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 21,
      name: "Cybersecurity Shield",
      category: "Security",
      pricing: "Freemium",
      description: "Advanced cybersecurity platform with AI-powered threat detection and response",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Threat detection", "AI monitoring", "Incident response", "Compliance reporting"],
      benefits: ["Enhanced security", "Real-time protection", "Compliance", "Peace of mind"],
      targetAudience: ["Financial services", "Healthcare", "Government", "Enterprise"],
      tags: ["Cybersecurity", "AI Security", "Threat Detection", "Compliance", "Enterprise"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 22,
      name: "GreenTech Monitor",
      category: "Sustainability",
      pricing: "Freemium",
      description: "Environmental impact tracking and sustainability reporting for eco-conscious businesses",
      price: 42,
      pricingModel: "monthly",
      userLimit: "Up to 30 users",
      features: ["Carbon tracking", "ESG reporting", "Sustainability goals", "Green certifications"],
      benefits: ["Environmental impact", "Regulatory compliance", "Brand reputation", "Cost savings"],
      targetAudience: ["Manufacturing", "Retail", "Service businesses", "ESG-focused companies"],
      tags: ["Sustainability", "ESG", "Carbon Tracking", "Green Tech", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 23,
      name: "VoiceAI Assistant",
      category: "AI",
      pricing: "Freemium",
      description: "Voice-powered AI assistant for business automation and customer interaction",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Voice commands", "AI automation", "Multi-language", "Integration APIs"],
      benefits: ["Hands-free operation", "Increased efficiency", "Better accessibility", "Modern interface"],
      targetAudience: ["Customer service", "Sales teams", "Administrative staff", "Accessibility needs"],
      tags: ["Voice AI", "Automation", "Accessibility", "Customer Service", "AI Assistant"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 24,
      name: "Quantum Finance Pro",
      category: "Finance",
      pricing: "Freemium",
      description: "Quantum computing-powered financial modeling and risk assessment platform",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Quantum modeling", "Risk assessment", "Portfolio optimization", "Real-time analysis"],
      benefits: ["Superior accuracy", "Competitive advantage", "Risk reduction", "Future-proof technology"],
      targetAudience: ["Investment firms", "Banks", "Hedge funds", "Financial advisors"],
      tags: ["Quantum Finance", "Risk Assessment", "Portfolio Management", "Financial Modeling", "AI"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    },
    {id: 25,
      name: "Edge Computing Hub",
      category: "Infrastructure",
      pricing: "Freemium",
      description: "Edge computing platform for distributed applications and real-time processing",
      price: 68,
      pricingModel: "monthly",
      userLimit: "Up to 100 nodes",
      features: ["Edge deployment", "Real-time processing", "Load balancing", "Monitoring tools"],
      benefits: ["Reduced latency", "Better performance", "Cost efficiency", "Scalability"],
      targetAudience: ["IoT applications", "Gaming", "Real-time systems", "Distributed computing"],
      tags: ["Edge Computing", "Real-time Processing", "IoT", "Performance", "Infrastructure"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com"}
        website: "https://ziontechgroup.com"
      }
    }
  ];
  const _categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'Development', 'Blockchain', 'IoT', 'Immersive Tech', 'AI', 'Infrastructure'];
  const _pricingModels = ['all', 'Freemium', 'Subscription', 'One-time'];
    <div className="text-left">
      {/* Animated Background */}
      <div className="text-left">
        <div className="text-left">
        <div className="text-left"></div>
        <div className="text-left"></div>
      </div>
      <div className="text-left">
        {/* Header */}
        <div className="text-left">
          <div className="text-left">
            <div className="text-left">
              <Zap className="text-left" />
              Innovation at Scale
            </div>
          </div>
          <h1 className="text-left">
            Micro SAAS Services
          </h1>
          <p className="text-left">
            Revolutionary software solutions designed specifically for small businesses, startups, and entrepreneurs.
            <span className="text-left"> Affordable, powerful, and future-ready.<
          </p>
          <div className="text-left">
            <div className="text-left">
              <div className="text-left"></div>
              <span>25+ Services Available<
            </div>
            <div className="text-left">
              <div className="text-left"></div>
              <span>Starting from $15/month<
            </div>
            <div className="text-left">
              <div className="text-left"></div>
              <span>24/7 Support<
        {/* Search and Filters */}
        <div className="text-left">
          <div className="text-left">
            <Search className="text-left" />
            <input
              type="text"
              placeholder="Search for innovative micro SAAS solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-left"
            />
            <div className="text-left">
              <div className="text-left">
                {filteredServices.length} services found
              </div>
            </div>
          </div>
          <div className="text-left">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-left"
            >
              {categories.map(category => (
                <option key={category} value={category} className="text-left">
                  {category === 'all' ? '🌐 All Categories' : `📁 ${category}`}
              className="text-left"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="text-left">
                  {pricing === 'all' ? '💰 All Pricing Models' : `💳 ${pricing}`}
        {/* Services Grid */}
        <div className="text-left">
          {filteredServices.map((service) => (
            <div key={service.id} className="text-left">
              {/* Service Header */}
              <div className="text-left">
                <div className="text-left">
                  <div className="text-left">
                    <div className="text-left">
                      {getCategoryIcon(service.category)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-left">
                      {service.name}
                    </h3>
                    <div className="text-left">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 border border-current`}>
                        {service.pricing}
                      <
                      <span className="text-left">
                        {service.category}
                      <
                    </div>
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className="text-left">
                {service.description}
              </p>
              {/* Pricing */}
              <div className="text-left">
                <div className="text-left">
                  {formatPrice(service.price} service.pricingModel)}
                </div>
                <div className="text-left">{service.userLimit}</div>
              </div>
              {/* Features */}
              <div className="text-left">
                <h4 className="text-left">
                  <Zap className="text-left" />
                  Key Features
                </h4>
                <div className="text-left">
                  {service.features.slice(0) 3).map((feature} index) => (
                    <span key={index} className="text-left">
                      {feature}
                    <
                  ))}
                </div>
              </div>
              {/* Target Audience */}
              <div className="text-left">
                <h4 className="text-left">
                  <Users className="text-left" />
                  Perfect For
                </h4>
                <div className="text-left">
                  {service.targetAudience.slice(0) 2).map((audience} index) => (
                    <span key={index} className="text-left">
                      {audience}
                    <
                  ))}
                </div>
              </div>
              {/* CTA */}
              <div className="text-left">
                <div className="text-left">
                  <span className="text-left">Ready to transform your business?<
                  <a
                    href={service.contactInfo.website}
                    className="text-left"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <Link className="text-left" />
                  </a>
        {/* Contact Information */}
        <div className="text-left">
          <div className="text-left">
            {/* Background Elements */}
            <div className="text-left"></div>
            <div className="text-left">
              <div className="text-left">
                <div className="text-left">
                  <Rocket className="text-left" />
                  Ready to Transform Your Business?
                </div>
              </div>
              <h2 className="text-left">
                Let's Build the Future Together
              </h2>
              <p className="text-left">
                Our cutting-edge micro SAAS solutions are designed to scale with your business needs.
                <span className="text-left"> Start your digital transformation journey today.<
              </p>
              <div className="text-left">
                <div className="text-left">
                  <div className="text-left">
                    <Phone className="text-left" />
                  </div>
                  <p className="text-left">Phone</p>
                  <p className="text-left">{microSaasServices[0].contactInfo.phone}</p>
                </div>
                <div className="text-left">
                  <div className="text-left">
                    <Mail className="text-left" />
                  </div>
                  <p className="text-left">Email</p>
                  <p className="text-left">{microSaasServices[0].contactInfo.email}</p>
                </div>
                <div className="text-left">
                  <div className="text-left">
                    <MapPin className="text-left" />
                  </div>
                  <p className="text-left">Address</p>
                  <p className="text-left">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              <div className="text-left">
                <a
                  href="mailto: kleber@ziontechgroup.<com" className="text-left"
                >
                  <Mail className="text-left" />
                  Get Started Today
                </a>
                <a
                  href="tel:+<13024640950" className="text-left"
                >
                  <Phone className="text-left" />
                  Call Now
