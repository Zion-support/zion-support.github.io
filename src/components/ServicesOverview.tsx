<<<<<<< HEAD
import {  import { motion  } from 'framer-motion';
 from 'lucide-react';
<<<<<<< HEAD:src_backup_temp/components/ServicesOverview.tsx
;
export function ServicesOverview(...args[]): "{;
      "icon": Hear t",;
      "color": 'from-zion-pink to-zion-purple',;
      "description": 'Healthcare artificial intelligence solutions',;
      "services": "INNOVATIVE_MICRO_SAAS_SERVICES_202 5.filter(s => s.category.includes('Healthcare'))"};
=======
export function ServicesOverview(...args[]):  {;

      icon: Heart,
      color: 'from-zion-pink to-zion-purple',
      description: 'Healthcare artificial intelligence solutions',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Healthcare'))};
>>>>>>> origin/automation-fixes:src/components/ServicesOverview.tsx
  ];
  return ();
    <div className="py-20 bg-futuristic relative overflow-hidden">;
      {/* Background effects */}";
      <div className="absolute inset-0 opacity-10">";
        <div className="cyber-grid w-full h-full"></div>;
      </div>;
";
      <div className="container-responsive relative z-10">;
=======
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Shield, Cloud, Database, Code, ShoppingCart, BarChart3, Link as LinkIcon, Network, Monitor, Smartphone, CheckCircle, Star, Clock, Users, Globe } from "lucide-react";
// Service categories with detailed information
const serviceCategories = [
    {
        title: "AI Services",
        description: "Cutting-edge artificial intelligence solutions that transform business operations",
        icon: <Zap className="w-8 h-8 text-zion-cyan"/>,
        services: [
            {
                name: "AI Chatbot Builder Pro",
                price: "$299",
                features: ["No-code platform", "Multi-language support", "Analytics dashboard", "Platform integration"],
                benefits: ["24/7 customer support", "Reduced response time", "Scalable automation", "Cost-effective solution"]
            },
            {
                name: "AI Content Generator Suite",
                price: "$199",
                features: ["SEO optimization", "Tone adjustment", "Plagiarism detection", "100+ content pieces/month"],
                benefits: ["Faster content creation", "Improved SEO rankings", "Consistent brand voice", "Time savings"]
            },
            {
                name: "AI Image Generator Pro",
                price: "$399",
                features: ["Custom style training", "4K resolution", "Commercial licensing", "Design tool integration"],
                benefits: ["Unique visual content", "Brand consistency", "Cost-effective design", "Rapid prototyping"]
            }
        ],
        marketPrice: "$150-500",
        deliveryTime: "Immediate",
        link: "/micro-saas-services"
    },
    {
        title: "Business Solutions",
        description: "Data-driven insights and analytics to drive business growth and decision-making",
        icon: <BarChart3 className="w-8 h-8 text-zion-purple"/>,
        services: [
            {
                name: "Business Intelligence Dashboard",
                price: "$599",
                features: ["Real-time analytics", "50+ data sources", "Custom dashboards", "Automated reporting"],
                benefits: ["Data-driven decisions", "Performance insights", "Operational efficiency", "Competitive advantage"]
            },
            {
                name: "Predictive Analytics Engine",
                price: "$799",
                features: ["Sales forecasting", "Customer behavior analysis", "Risk assessment", "ML models"],
                benefits: ["Future planning", "Customer insights", "Risk mitigation", "Revenue optimization"]
            }
        ],
        marketPrice: "$500-1500",
        deliveryTime: "1-3 weeks",
        link: "/micro-saas-services"
    },
    {
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
        icon: <Shield className="w-8 h-8 text-zion-red"/>,
        services: [
            {
                name: "24/7 Cybersecurity Monitoring",
                price: "$899",
                features: ["Threat detection", "SIEM integration", "Compliance reporting", "24/7 SOC support"],
                benefits: ["Continuous protection", "Compliance assurance", "Incident response", "Peace of mind"]
            },
            {
                name: "Penetration Testing Service",
                price: "$2,499",
                features: ["Web app testing", "Network security", "Mobile app testing", "Compliance documentation"],
                benefits: ["Vulnerability identification", "Security validation", "Compliance readiness", "Risk assessment"]
            }
        ],
        marketPrice: "$800-3000",
        deliveryTime: "Immediate - 2 weeks",
        link: "/micro-saas-services"
    },
    {
        title: "Cloud Services",
        description: "Scalable cloud solutions for modern business infrastructure and digital transformation",
        icon: <Cloud className="w-8 h-8 text-zion-blue"/>,
        services: [
            {
                name: "Cloud Migration Expert",
                price: "$3,999",
                features: ["AWS/Azure/GCP", "Architecture design", "Data migration", "99.9% uptime guarantee"],
                benefits: ["Reduced costs", "Improved scalability", "Enhanced security", "Better performance"]
            },
            {
                name: "DevOps Automation Platform",
                price: "$699",
                features: ["CI/CD pipelines", "Kubernetes support", "Infrastructure as code", "Monitoring & alerting"],
                benefits: ["Faster deployments", "Reduced errors", "Team productivity", "Cost optimization"]
            }
        ],
        marketPrice: "$700-5000",
        deliveryTime: "1-4 weeks",
        link: "/micro-saas-services"
    },
    {
        title: "Data Services",
        description: "Enterprise-grade data solutions for analytics, warehousing, and business intelligence",
        icon: <Database className="w-8 h-8 text-zion-green"/>,
        services: [
            {
                name: "Data Warehouse Solution",
                price: "$1,299",
                features: ["ETL pipelines", "Data modeling", "BI integration", "Data governance"],
                benefits: ["Centralized data", "Better insights", "Improved reporting", "Data quality"]
            },
            {
                name: "Database Performance Optimization",
                price: "$899",
                features: ["Query optimization", "Indexing strategies", "Performance monitoring", "Capacity planning"],
                benefits: ["Faster queries", "Better performance", "Reduced costs", "Improved user experience"]
            }
        ],
        marketPrice: "$900-2000",
        deliveryTime: "1-3 weeks",
        link: "/micro-saas-services"
    },
    {
        title: "Development",
        description: "Custom software development solutions for web, mobile, and enterprise applications",
        icon: <Code className="w-8 h-8 text-zion-orange"/>,
        services: [
            {
                name: "Progressive Web App Development",
                price: "$2,999",
                features: ["Offline functionality", "Push notifications", "App-like experience", "SEO optimization"],
                benefits: ["Better user engagement", "Improved performance", "Cross-platform compatibility", "Enhanced SEO"]
            },
            {
                name: "Cross-Platform Mobile App",
                price: "$4,999",
                features: ["React Native/Flutter", "UI/UX design", "Backend integration", "App store deployment"],
                benefits: ["Cost-effective development", "Faster time to market", "Native performance", "Easy maintenance"]
            },
            {
                name: "Custom API Development",
                price: "$1,999",
                features: ["REST/GraphQL APIs", "Documentation", "Testing", "Developer portal"],
                benefits: ["System integration", "Scalable architecture", "Developer experience", "API monetization"]
            }
        ],
        marketPrice: "$2000-8000",
        deliveryTime: "3-8 weeks",
        link: "/micro-saas-services"
    },
    {
        title: "E-commerce",
        description: "Complete e-commerce solutions for online businesses and digital marketplaces",
        icon: <ShoppingCart className="w-8 h-8 text-zion-pink"/>,
        services: [
            {
                name: "E-commerce Platform Development",
                price: "$5,999",
                features: ["Payment processing", "Inventory management", "Order fulfillment", "CRM integration"],
                benefits: ["Increased sales", "Better customer experience", "Operational efficiency", "Scalable growth"]
            }
        ],
        marketPrice: "$5000-15000",
        deliveryTime: "8-10 weeks",
        link: "/micro-saas-services"
    },
    {
        title: "Marketing",
        description: "AI-powered marketing automation and analytics solutions for business growth",
        icon: <BarChart3 className="w-8 h-8 text-zion-yellow"/>,
        services: [
            {
                name: "Marketing Automation Platform",
                price: "$799",
                features: ["Email marketing", "Lead scoring", "Campaign management", "AI personalization"],
                benefits: ["Increased conversions", "Better lead quality", "Time savings", "ROI improvement"]
            }
        ],
        marketPrice: "$500-1500",
        deliveryTime: "2-3 weeks",
        link: "/micro-saas-services"
    },
    {
        title: "Integration",
        description: "Seamless third-party integrations and API synchronization services",
        icon: <LinkIcon className="w-8 h-8 text-zion-indigo"/>,
        services: [
            {
                name: "Third-Party Integration Service",
                price: "$1,499",
                features: ["Payment gateways", "CRM systems", "Marketing tools", "Custom webhooks"],
                benefits: ["System connectivity", "Data consistency", "Workflow automation", "Reduced manual work"]
            }
        ],
        marketPrice: "$1000-3000",
        deliveryTime: "2-3 weeks",
        link: "/micro-saas-services"
    },
    {
        title: "Blockchain",
        description: "Next-generation blockchain and Web3 development solutions",
        icon: <Network className="w-8 h-8 text-zion-teal"/>,
        services: [
            {
                name: "Smart Contract Development",
                price: "$3,999",
                features: ["Ethereum/Polygon/Solana", "Security auditing", "DeFi protocols", "NFT contracts"],
                benefits: ["Decentralized solutions", "Transparent transactions", "Automated execution", "Innovation leadership"]
            },
            {
                name: "Web3 DApp Development",
                price: "$5,999",
                features: ["Wallet integration", "Blockchain interaction", "Cross-chain compatibility", "User-friendly interfaces"],
                benefits: ["Future-proof technology", "User ownership", "Global accessibility", "Reduced intermediaries"]
            }
        ],
        marketPrice: "$4000-10000",
        deliveryTime: "4-8 weeks",
        link: "/micro-saas-services"
    },
    {
        title: "IoT",
        description: "Internet of Things platform development and hardware prototyping services",
        icon: <Monitor className="w-8 h-8 text-zion-lime"/>,
        services: [
            {
                name: "IoT Platform Development",
                price: "$4,999",
                features: ["Device management", "Real-time monitoring", "Edge computing", "Cloud integration"],
                benefits: ["Connected devices", "Data insights", "Operational efficiency", "Innovation opportunities"]
            }
        ],
        marketPrice: "$4000-12000",
        deliveryTime: "8-10 weeks",
        link: "/micro-saas-services"
    },
    {
        title: "Hardware",
        description: "Rapid prototyping and hardware development services for IoT and embedded systems",
        icon: <Smartphone className="w-8 h-8 text-zion-gray"/>,
        services: [
            {
                name: "Hardware Prototyping Service",
                price: "$2,999",
                features: ["3D printing", "PCB design", "Component sourcing", "Design validation"],
                benefits: ["Faster development", "Cost reduction", "Design validation", "Market testing"]
            }
        ],
        marketPrice: "$2000-8000",
        deliveryTime: "4-6 weeks",
        link: "/micro-saas-services"
    }
];
// Why choose Zion Tech Group
const whyChooseUs = [
    {
        title: "Expert Team",
        description: "Certified professionals with 10+ years of experience",
        icon: <Users className="w-6 h-6 text-zion-cyan"/>
    },
    {
        title: "Global Reach",
        description: "Serving clients worldwide with 24/7 support",
        icon: <Globe className="w-6 h-6 text-zion-purple"/>
    },
    {
        title: "Fast Delivery",
        description: "Quick turnaround times without compromising quality",
        icon: <Clock className="w-6 h-6 text-zion-green"/>
    },
    {
        title: "Proven Results",
        description: "Track record of successful project deliveries",
        icon: <Star className="w-6 h-6 text-zion-yellow"/>
    }
];
export function ServicesOverview() {
    return (<div className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
>>>>>>> origin/backup-improvements-20250827-015311
        {/* Header */}
        <motion.div";
          className="text-center mb-16";
          initial = {;
<<<<<<< HEAD:src_backup_temp/components/ServicesOverview.tsx
  { "opacity": "0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          transition={{ "duration": "0.6 "}}
=======

<<<<<<< HEAD
  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          transition={{ duration: 0.6 }}
>>>>>>> origin/automation-fixes:src/components/ServicesOverview.tsx
";
          <h1 className="heading-responsive font-bold mb-6">";
            <span className="text-gradient neon-text-cyan">Comprehensive Technology</span>;
            <br  />";
            <span className="text-white">Services Portfolio</span>;
          </h1>";
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">;
            Discover our complete range of innovative micro SAAS services, IT solutions, and AI platforms.From cutting - edge quantum computing to practical business applications, we provide the technology;
            solutions your business needs to thrive in the digital age.</p>;
        </motion.div>;
        {/* Service Categories Grid */}";
        <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3 "xl": gri d-cols-4 gap-6 mb-16">;
          {serviceCategories.map((category", index)  => (;
            <motion.div;
              key={category.id}";
              className="group";
              initial = {;
<<<<<<< HEAD:src_backup_temp/components/ServicesOverview.tsx
  { "opacity": "0",;
  "y": "3 0;
"}}
              whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
              transition = {;
  { "duration": "0.6",;
  "delay": "inde x * 0.1;
"}}
              whileHover={{ "y": "-10 "}}
=======

  { opacity: 0,
  y: 30;
}}
              whileInView = {;

  { opacity: 1,
  y: 0;
}}
              transition = {;

  { duration: 0.6,
  delay: index * 0.1;
}}
              whileHover={{ y: -10 }}
>>>>>>> origin/automation-fixes:src/components/ServicesOverview.tsx
";
              <Link to={`/services/${category.id}`} className="block">";
                <div className="card-futuristic h-full "hover": "borde r-zion-cyan/50 transition-all duration-300">;
                  {/* Category Icon */"}`;
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-"hover": "scal e-110 transition-transform duration-300`"}>";
                    <category.icon className="w-8 h-8 text-white" />;
                  </div>;
                  {/* Category Info */}";
                  <h3 className="text-lg font-bold text-white mb-2 group-"hover": "tex t-zion-cyan transition-colors duration-300 text-center">;
                    {category.name"}
                  </h3>;
";
                  <p className="text-zion-slate-light text-sm text-center mb-4 leading-relaxed">;                  {/* Category Info */}"
                  <h3 className="text-lg font-bold text-white mb-2 group-hover: tex t-zion-cyan transition-colors duration-300 text-center">
                    {category.name}
"
                  <p className="text-zion-slate-light text-sm text-center mb-4 leading-relaxed">
                    {category.description}
                  </p>;
                  {/* Service Count */}";
                  <div className="text-center">";
                    <div className="text-2xl font-bold text-zion-cyan mb-1">;
                      {category.services.length}
                    </div>";
                    <div className="text-xs text-zion-slate-light">;
                      Services Available;
                    </div>;
                  </div>;
                  {/* Hover Arrow */}";
                  <div className="absolute bottom-4 right-4 opacity-0 group-"hover": "opacit y-100 transition-opacity duration-300">";
                    <ArrowRight className="w-5 h-5 text-zion-cyan"   />                  </div>;
                </div>;
              </Link>;
            </motion.div>;) ) "}
        </div>;
        {/* Featured Services */}
        <motion.div";
          className="mb-16";
          initial = {;
<<<<<<< HEAD:src_backup_temp/components/ServicesOverview.tsx
  { "opacity": "0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          transition={{ "duration": "0.6 "}}
=======

  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          transition={{ duration: 0.6 }}
>>>>>>> origin/automation-fixes:src/components/ServicesOverview.tsx
";
          <h2 className="heading-responsive font-bold mb-8 text-center">";
            <span className="text-gradient neon-text-purple">Featured Services</span>;
          </h2>;
";
          <div className="grid grid-cols-1 "lg": "gri d-cols-2 gap-8">;
            {INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(0", 6).map((service, index) => (;
              <motion.div;
                key={service.id}";
                className="card-futuristic group";
                initial = {;
<<<<<<< HEAD:src_backup_temp/components/ServicesOverview.tsx
  { "opacity": "0",;
  "x": "inde x % 2 === 0 ? -30 : 30;
"}}
                whileInView = {;
  { "opacity": "1",;
  "x": "0;
"}}
                transition = {;
  { "duration": "0.6",;
  "delay": "inde x * 0.1;
"}}
                whileHover={{ "y": "-5 "}}
=======

  { opacity: 0,
  x: index % 2 === 0 ? -30 : 30;
}}
                whileInView = {;

  { opacity: 1,
  x: 0;
}}
                transition = {;

  { duration: 0.6,
  delay: index * 0.1;
}}
                whileHover={{ y: -5 }}
>>>>>>> origin/automation-fixes:src/components/ServicesOverview.tsx
";
                <div className="flex items-start justify-between mb-4">";
                  <div className="flex-1">";
                    <h3 className="text-xl font-bold text-white mb-2 group-"hover": "tex t-zion-cyan transition-colors duration-300">;
                      {service.title"}
                    </h3>";
                    <p className="text-zion-slate-light leading-relaxed mb-3">;}}
                whileHover={{ y: -5 }}
"
                <div className="flex items-start justify-between mb-4">"
                  <div className="flex-1">"
                    <h3 className="text-xl font-bold text-white mb-2 group-hover: tex t-zion-cyan transition-colors duration-300">
                      {service.title}
                    "
                    <p className="text-zion-slate-light leading-relaxed mb-3">
                      {service.description}
                    </p>;
                  </div>";
                  <div className="text-right ml-4">";
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>";
                    <div className="text-sm text-zion-slate-light">per month</div>;
                  </div>;
                </div>;
";
                <div className="space-y-3 mb-4">";
                  <div className="flex items-center justify-between text-sm">";
                    <span className="text-zion-cyan font-medium">{service.category}</span>`;
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${service.innovationLevel === 'Cutting-edge'';
                        ? 'bg-zion-cyan/20 text-zion-cyan'';
                        : 'bg-zion-purple/20 text-zion-purple'`;
<<<<<<< HEAD:src_backup_temp/components/ServicesOverview.tsx
                    }`}>;
=======
}`}>;
>>>>>>> origin/automation-fixes:src/components/ServicesOverview.tsx
                      {service.innovationLevel}
                    </span>;
                  </div>;
";
                  <div className="flex items-center justify-between text-sm">";
                    <div className="flex items-center gap-1 text-zion-green">";
                      <TrendingUp className="w-4 h-4"   />                      <span>"ROI": "{service.roi"}</span>;
                    </div>";
                    <div className="text-zion-slate-light">;
                      "Market": "{service.marketPrice"}
                    </div>;
                  </div>;
                </div>;
";
                <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">";
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light">";
                    <div className="flex items-center gap-1">";
                      <Clock className="w-4 h-4"   />;
                      <span>{service.estimatedDelivery}</span>;
                    </div>";
                    <div className="flex items-center gap-1">";
                      <Star className="w-4 h-4 text-zion-cyan"   />                      <span>{service.supportLevel}</span>;
                    </div>;
                  </div>;
                  <Link `;
                    to={`/services/${service.id}`}";
                    className="btn-futuristic px-4 py-2 text-sm";
                    Learn More";
                    <ArrowRight className="w-4 h-4 ml-2"    />                  </Link>;
                </div>;
              </motion.div>) ) }
          </div>;
        </motion.div>;
        {/* CTA Section */}
        <motion.div";
          className="text-center";
          initial = {;
<<<<<<< HEAD:src_backup_temp/components/ServicesOverview.tsx
  { "opacity": "0",;
  "y": "3 0 "}}          whileInView = {;
  { "opacity": "1",;
  "y": "0 "}}          transition={{ "duration": "0.8 "}}
=======

  { opacity: 0,
  y: 30 }}          whileInView = {;

  { opacity: 1,
  y: 0 }}          transition={{ duration: 0.8 }}
>>>>>>> origin/automation-fixes:src/components/ServicesOverview.tsx
";
          <div className="bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 rounded-2xl p-12 border border-zion-cyan/20">";
            <h2 className="heading-responsive font-bold mb-6">;
              Ready to Transform Your Business?;
            </h2>";
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Get in touch with our technology experts to discuss your specific needs and discover;
              how our innovative solutions can drive your business forward.</p>;
";
            <div className="flex flex-col "sm": "fle x-row gap-4 justify-center mb-8">;
              <Link ";
                to="/contact";
                className="btn-futuristic px-8 py-4 text-lg";
";
                <MessageCircle className="w-5 h-5 mr-2"    />                Get Free Consultation;
              </Link>;
              <a";
                href=""tel":+13024640950";
                className="btn-neon px-8 py-4 text-lg";
";
                <Phone className="w-5 h-5 mr-2"   />                Call "Now": +1 302 464 0950;
              </a>;
            </div>;
            {/* Contact Info Grid */"}";
            <div className="grid grid-cols-1 "md": "gri d-cols-3 gap-6 max-w-4xl mx-auto">;";
              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-cyan/20">";
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2"   />";
                <p className="font-medium text-white mb-1">Address</p>";
                <p className="text-sm text-zion-slate-light">364 E Main St STE 1008</p>";
                <p className="text-sm text-zion-slate-light">Middletown DE 19709</p>;
              </div>;
";
              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-purple/20">";
                <Mail className="w-8 h-8 text-zion-purple mx-auto mb-2"   />";
                <p className="font-medium text-white mb-1">Email</p>"                <a href=""mailto": klebe r@ziontechgroup.com" className="text-zion-cyan "hover": tex t-zion-purple transition-colors duration-300 text-sm">;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
";
              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-blue/20">";
                <Globe className="w-8 h-8 text-zion-blue mx-auto mb-2"   />";
                <p className="font-medium text-white mb-1">Website</p>"                <a href=""https"://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan "hover": tex t-zion-blue transition-colors duration-300 text-sm">;
                  ziontechgroup.com;
                </a>;
              </div>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;) "}
'"`;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>
=======
        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (<div key={index} className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light hover:border-zion-cyan/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">{category.title}</h3>
                  <p className="text-zion-slate-light text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                {category.services.map((service, serviceIndex) => (<div key={serviceIndex} className="bg-zion-blue-dark rounded p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-semibold">{service.name}</h4>
                      <span className="text-zion-cyan font-bold">{service.price}</span>
                    </div>
                    
                    <div className="mb-3">
                      <h5 className="text-zion-slate-light text-sm font-medium mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0"/>
                            {feature}
                          </li>))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-zion-slate-light text-sm font-medium mb-2">Benefits:</h5>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (<li key={benefitIndex} className="flex items-center text-zion-slate-light text-sm">
                            <Star className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0"/>
                            {benefit}
                          </li>))}
                      </ul>
                    </div>
                  </div>))}
              </div>
              
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="text-zion-slate-light">
                  <span className="font-medium">Market Price:</span> {category.marketPrice}
                </div>
                <div className="text-zion-slate-light">
                  <span className="font-medium">Delivery:</span> {category.deliveryTime}
                </div>
              </div>
              
              <Link to={category.link}>
                <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                  View {category.title}
                </Button>
              </Link>
            </div>))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-zion-blue rounded-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h3>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (<div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-zion-slate-light">{item.description}</p>
              </div>))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our services can transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
                <Zap className="w-5 h-5 mr-2"/>
                Explore All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>);
}
>>>>>>> origin/backup-improvements-20250827-015311
