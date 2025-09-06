export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Explore our comprehensive range of AI, micro SaaS, and IT services designed to transform your business.',
};

export default function ServicesPage() {
  const microSaasServices = [
    {
      title: "InvoiceFlow Pro",
      description: "AI-powered invoice processing and accounts payable automation. Reduces processing time by 80% and eliminates manual data entry errors.",
      features: ["OCR Invoice Reading", "Automated Approval Workflows", "Multi-Currency Support", "Real-time Analytics", "Integration with 50+ Accounting Systems"],
      pricing: "Starting at $99/month",
      category: "Finance & Accounting"
    },
    {
      title: "SocialScheduler AI",
      description: "Intelligent social media content scheduling and optimization platform. Uses AI to determine optimal posting times and content performance.",
      features: ["AI Content Suggestions", "Multi-Platform Publishing", "Performance Analytics", "Hashtag Optimization", "Team Collaboration"],
      pricing: "Starting at $49/month",
      category: "Marketing & Social Media"
    },
    {
      title: "CodeReview Assistant",
      description: "Automated code review and quality assurance tool for development teams. Identifies bugs, security vulnerabilities, and code quality issues.",
      features: ["Automated Code Analysis", "Security Vulnerability Detection", "Performance Optimization Suggestions", "Team Collaboration Tools", "Integration with Git"],
      pricing: "Starting at $79/month",
      category: "Development Tools"
    },
    {
      title: "CustomerInsight Hub",
      description: "Customer behavior analytics and sentiment analysis platform. Helps businesses understand customer needs and improve satisfaction.",
      features: ["Sentiment Analysis", "Customer Journey Mapping", "Predictive Analytics", "Real-time Dashboards", "API Integration"],
      pricing: "Starting at $149/month",
      category: "Analytics & Insights"
    },
    {
      title: "EmailSignature Manager",
      description: "Professional email signature management and branding tool for organizations. Ensures consistent branding across all communications.",
      features: ["Template Library", "Bulk Signature Updates", "Mobile Optimization", "Analytics & Tracking", "Compliance Management"],
      pricing: "Starting at $29/month",
      category: "Communication Tools"
    },
    {
      title: "ProjectTime Tracker",
      description: "Advanced time tracking and project management solution with AI-powered productivity insights and automated reporting.",
      features: ["AI Productivity Insights", "Automatic Time Tracking", "Project Budget Management", "Team Performance Analytics", "Client Reporting"],
      pricing: "Starting at $39/month",
      category: "Project Management"
    }
  ];

  const itServices = [
    {
      title: "Cloud Migration & Architecture",
      description: "Complete cloud migration services with zero downtime. We migrate your infrastructure to AWS, Azure, or GCP with optimized architecture.",
      features: ["Zero-Downtime Migration", "Cost Optimization", "Security Hardening", "Disaster Recovery", "24/7 Monitoring"],
      pricing: "Starting at $5,000/month",
      category: "Cloud Services"
    },
    {
      title: "DevOps & SRE Implementation",
      description: "Implement DevOps best practices and Site Reliability Engineering to improve deployment frequency and system reliability.",
      features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Monitoring & Alerting", "Incident Response", "Performance Optimization"],
      pricing: "Starting at $3,500/month",
      category: "DevOps & SRE"
    },
    {
      title: "Cybersecurity Assessment & Implementation",
      description: "Comprehensive security assessment and implementation of enterprise-grade security measures to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Security Training", "Incident Response"],
      pricing: "Starting at $2,500/month",
      category: "Cybersecurity"
    },
    {
      title: "Database Optimization & Management",
      description: "Database performance optimization, scaling, and management services for high-traffic applications and enterprise systems.",
      features: ["Performance Tuning", "Scalability Planning", "Backup & Recovery", "Security Hardening", "Query Optimization"],
      pricing: "Starting at $1,800/month",
      category: "Database Services"
    },
    {
      title: "API Development & Integration",
      description: "Custom API development and third-party integrations to connect your systems and enable seamless data flow.",
      features: ["RESTful API Development", "GraphQL Implementation", "Third-party Integrations", "API Documentation", "Rate Limiting & Security"],
      pricing: "Starting at $2,200/month",
      category: "Integration Services"
    },
    {
      title: "Infrastructure Monitoring & Maintenance",
      description: "24/7 infrastructure monitoring, maintenance, and optimization to ensure maximum uptime and performance.",
      features: ["24/7 Monitoring", "Proactive Maintenance", "Performance Optimization", "Capacity Planning", "Incident Management"],
      pricing: "Starting at $1,200/month",
      category: "Infrastructure Management"
    }
  ];

  const aiServices = [
    {
      title: "Custom AI Model Development",
      description: "Bespoke AI models tailored to your specific business needs. From computer vision to natural language processing.",
      features: ["Custom Model Training", "Data Preprocessing", "Model Optimization", "API Integration", "Continuous Learning"],
      pricing: "Starting at $8,000/project",
      category: "AI Development"
    },
    {
      title: "AI-Powered Business Process Automation",
      description: "Intelligent automation solutions that streamline business processes and reduce manual work by up to 90%.",
      features: ["Process Analysis", "Workflow Automation", "RPA Implementation", "AI Decision Making", "Performance Monitoring"],
      pricing: "Starting at $4,500/month",
      category: "Process Automation"
    },
    {
      title: "Predictive Analytics & Forecasting",
      description: "Advanced predictive analytics solutions that help businesses make data-driven decisions and forecast future trends.",
      features: ["Predictive Modeling", "Trend Analysis", "Risk Assessment", "Custom Dashboards", "Real-time Insights"],
      pricing: "Starting at $3,200/month",
      category: "Analytics & Forecasting"
    },
    {
      title: "AI Chatbot & Virtual Assistant Development",
      description: "Intelligent chatbots and virtual assistants that provide 24/7 customer support and automate customer interactions.",
      features: ["Natural Language Processing", "Multi-language Support", "Integration with CRM", "Learning Capabilities", "Analytics Dashboard"],
      pricing: "Starting at $2,800/month",
      category: "Customer Experience"
    },
    {
      title: "Computer Vision & Image Recognition",
      description: "Advanced computer vision solutions for object detection, image classification, and visual content analysis.",
      features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control", "Real-time Processing"],
      pricing: "Starting at $5,500/project",
      category: "Computer Vision"
    },
    {
      title: "AI Data Analysis & Insights",
      description: "Transform your raw data into actionable insights using advanced AI algorithms and machine learning techniques.",
      features: ["Data Mining", "Pattern Recognition", "Anomaly Detection", "Predictive Insights", "Automated Reporting"],
      pricing: "Starting at $2,100/month",
      category: "Data Intelligence"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">Our Comprehensive Services</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          From innovative micro SaaS solutions to enterprise-grade AI and IT services, 
          we provide everything you need to transform your business with cutting-edge technology.
        </p>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <span className="font-semibold">📞 Phone:</span>
            <a href="tel:+13024640950" className="hover:text-blue-200">+1 302 464 0950</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">✉️ Email:</span>
            <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-200">kleber@ziontechgroup.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">📍 Address:</span>
            <span>364 E Main St STE 1008, Middletown DE 19709</span>
          </div>
        </div>
      </div>

      {/* Micro SaaS Services */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Micro SaaS Solutions</h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Innovative, focused software solutions that solve specific business problems with minimal complexity and maximum impact.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaasServices.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">{service.category}</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <div className="border-t border-white/20 pt-4">
                <p className="text-green-400 font-semibold text-sm">{service.pricing}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IT Services */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">IT Services & Infrastructure</h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Enterprise-grade IT services and infrastructure solutions to keep your business running smoothly and securely.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">{service.category}</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <div className="border-t border-white/20 pt-4">
                <p className="text-green-400 font-semibold text-sm">{service.pricing}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Services */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">AI & Machine Learning Services</h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Cutting-edge artificial intelligence solutions that transform your business operations and unlock new possibilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">{service.category}</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <div className="border-t border-white/20 pt-4">
                <p className="text-green-400 font-semibold text-sm">{service.pricing}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">Consulting & Strategy</h3>
            <p className="text-gray-300 mb-4">
              Strategic technology consulting to help you make informed decisions about your digital transformation journey.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Technology Roadmap Planning</li>
              <li>• Digital Transformation Strategy</li>
              <li>• Technology Stack Evaluation</li>
              <li>• ROI Analysis & Planning</li>
            </ul>
            <p className="text-green-400 font-semibold text-sm">Starting at $200/hour</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">Training & Support</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive training programs and ongoing support to ensure your team can effectively use and maintain your technology solutions.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Custom Training Programs</li>
              <li>• Documentation & Knowledge Base</li>
              <li>• 24/7 Technical Support</li>
              <li>• Regular Health Checks</li>
            </ul>
            <p className="text-green-400 font-semibold text-sm">Starting at $150/hour</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
          Let's discuss how our services can help you achieve your business goals. 
          Contact us today for a free consultation and custom quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+13024640950" 
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call Now: +1 302 464 0950
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}