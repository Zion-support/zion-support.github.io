import { Zap, Shield, Users, Settings, CheckCircle, Star, ArrowRight, Globe, Database, Brain, User, Helmet } from 'lucide-react';
import React from "react";
import { Helmet } from "react-helmet-async";
// Service categories
const serviceCategories = [
  { "
    icon: <Brain className="w-8 h-8" />, "
    title: "AI & Machine Learning", "
    description: "Advanced artificial intelligence solutions including deep learning, natural language processing, computer vision, and predictive analytics for enterprise applications.", 
    services: [ "
      "Machine Learning Model Development", "
      "Natural Language Processing", "
      "Computer Vision Solutions", "
      "Predictive Analytics", "
      "AI Chatbots & Virtual Assistants", "
      "Recommendation Systems","
      "Deep Learning Implementation","
      "AI Strategy Consulting"
    ], "
    color: "from-blue-600 to-cyan-600","
    price: "Starting at $299/month","
    marketPrice: "$799/month","
    savings: "63%","
    users: "8,500+",
    rating: 4.9,"
    link: "https://ziontechgroup.com/ai-services"
  },
  { "
    icon: <Globe className="w-8 h-8" />,"
    title: "5G Technology Solutions","
    description: "Next-generation 5G implementation, optimization, and IoT solutions for ultra-fast connectivity, smart infrastructure, and edge computing applications.",
    services: ["
      "5G Network Implementation","
      "IoT Solutions & Integration","
      "Edge Computing Infrastructure","
      "Smart City Solutions","
      "5G Performance Optimization","
      "Private 5G Networks","
      "5G Security Implementation","
      "Network Slicing & Management"
    ],"
    color: "from-purple-600 to-pink-600","
    price: "Starting at $499/month","
    marketPrice: "$1,299/month","
    savings: "62%","
    users: "3,200+",
    rating: 4.8,"
    link: "https://ziontechgroup.com/5g-solutions"
  },
  { "
    icon: <Shield className="w-8 h-8" />,"
    title: "Cybersecurity & Compliance","
    description: "Comprehensive security solutions to protect your business from cyber threats, ensure data integrity, and maintain regulatory compliance across all industries.",
    services: ["
      "Security Assessment & Auditing","
      "Threat Detection & Response","
      "Data Encryption & Protection","
      "Compliance Management (GDPR, HIPAA, SOX)","
      "Security Training & Awareness","
      "Incident Response Planning","
      "Penetration Testing","
      "Security Architecture Design"
    ],"
    color: "from-green-600 to-emerald-600","
    price: "Starting at $399/month","
    marketPrice: "$999/month","
    savings: "60%","
    users: "6,800+",
    rating: 4.9,"
    link: "https://ziontechgroup.com/network-security"
  },
  { "
    icon: <Cloud className="w-8 h-8" />,"
    title: "Cloud Infrastructure & Migration","
    description: "Scalable cloud infrastructure and migration services to optimize your business operations, reduce costs, and ensure high availability and performance.",
    services: ["
      "Cloud Migration & Strategy","
      "Multi-Cloud Management","
      "Serverless Architecture","
      "Cloud Security & Compliance","
      "Cost Optimization","
      "Disaster Recovery Solutions","
      "Container Orchestration","
      "Cloud-Native Development"
    ],"
    color: "from-orange-600 to-red-600","
    price: "Starting at $349/month","
    marketPrice: "$899/month","
    savings: "61%","
    users: "7,100+",
    rating: 4.8,"
    link: "https://ziontechgroup.com/cloud-migration"
  },
  { "
    icon: <Database className="w-8 h-8" />,"
    title: "Data Analytics & Business Intelligence","
    description: "Transform your data into actionable insights with advanced analytics, business intelligence, and data visualization solutions for informed decision making.",
    services: ["
      "Business Intelligence Dashboards","
      "Data Warehousing & Lakes","
      "Real-time Analytics","
      "Data Visualization","
      "Statistical Analysis","
      "Data Quality Management","
      "ETL/ELT Pipeline Development","
      "Data Governance & Privacy"
    ],"
    color: "from-indigo-600 to-purple-600","
    price: "Starting at $249/month","
    marketPrice: "$699/month","
    savings: "64%","
    users: "9,300+",
    rating: 4.7,"
    link: "https://ziontechgroup.com/data-analytics"
  },
  { "
    icon: <Smartphone className="w-8 h-8" />,"
    title: "Mobile & Web Development","
    description: "Native and cross-platform mobile applications, progressive web apps, and responsive web solutions that deliver exceptional user experiences across all devices.",
    services: ["
      "iOS & Android App Development","
      "Cross-Platform Solutions (React Native, Flutter)","
      "Mobile UI/UX Design","
      "App Store Optimization","
      "Mobile Security","
      "Progressive Web Apps","
      "API Development & Integration","
      "Performance Optimization"
    ],"
    color: "from-teal-600 to-cyan-600","
    price: "Starting at $199/month","
    marketPrice: "$599/month","
    savings: "67%","
    users: "5,600+",
    rating: 4.8,"
    link: "https://ziontechgroup.com/web-development"
  },
  { "
    icon: <Settings className="w-8 h-8" />,"
    title: "DevOps & Automation","
    description: "Streamline your development and deployment processes with comprehensive DevOps solutions, CI/CD pipelines, and infrastructure automation.",
    services: ["
      "CI/CD Pipeline Setup","
      "Infrastructure as Code","
      "Container Orchestration","
      "Monitoring & Logging","
      "Automated Testing","
      "Release Management","
      "Performance Optimization","
      "Disaster Recovery"
    ],"
    color: "from-yellow-600 to-orange-600","
    price: "Starting at $179/month","
    marketPrice: "$499/month","
    savings: "64%","
    users: "4,200+",
    rating: 4.9,"
    link: "https://ziontechgroup.com/devops-services"
  },
  { "
    icon: <Users className="w-8 h-8" />,"
    title: "IT Consulting & Strategy","
    description: "Strategic IT consulting services to help you align technology with business goals, optimize processes, and drive digital transformation initiatives.",
    services: ["
      "IT Strategy & Planning","
      "Digital Transformation","
      "Technology Assessment","
      "Process Optimization","
      "Change Management","
      "Vendor Management","
      "IT Governance","
      "Technology Roadmapping"
    ],"
    color: "from-pink-600 to-rose-600","
    price: "Starting at $149/month","
    marketPrice: "$399/month","
    savings: "63%","
    users: "3,900+",
    rating: 4.8,"
    link: "https://ziontechgroup.com/it-consulting"
  }
];
// Process steps
const processSteps = ["
  { step: "01","
    title: "Discovery & Analysis","
    description: "We begin by understanding your business goals, challenges,   and requirements through comprehensive analysis and stakeholder interviews." },"
  { step: "02","
    title: "Strategy & Planning","
    description: "Our team develops a customized strategy and detailed implementation plan tailored to your specific needs and objectives." },"
  { step: "03","
    title: "Development & Implementation","
    description: "We execute the solution using cutting-edge technologies and best practices,   ensuring quality and performance at every step." },"
  { step: "04","
    title: "Testing & Optimization","
    description: "Rigorous testing and optimization ensure your solution meets all requirements and performs at peak efficiency." },"
  { step: "05","
    title: "Deployment & Support","
    description: "We handle the deployment process and provide ongoing support to ensure your solution continues to deliver value." }
];

const ServicesPage: React.FC = () => { return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive" AI and IT services including machine learning, 5G technology, cybersecurity, cloud solutions, data analytics, and mobile development. />
        <meta name="keywords" content="AI" services, 5G technology, cybersecurity, cloud solutions, data analytics, mobile development, IT consulting, machine learning />
        <meta property=og:title content="Our" Services - Zion Tech Group />
        <meta property=og:description content="Comprehensive" AI and IT services for modern businesses. />
        <meta property=og:type content="website" />
      </Helmet>
      <div className="min-h-screen" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */ }
        <section className="py-20">
          
        <div className="container" mx-auto px-4>
            
        <div className="text-center" max-w-4xl mx-auto>
              
          <h1 className="text-5xl" md:text-6xl font-bold text-white mb-6>"
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              
          <p className="text-xl" md:text-2xl text-gray-300 mb-8 leading-relaxed>
                Comprehensive AI and IT solutions designed to accelerate your business growth, 
                enhance efficiency, and drive innovation across all industries.
              </p>
            </div>
          </div>
        </section>
        { /* Service Categories */ }
        <section className="py-20">
          
        <div className="container" mx-auto px-4>
            
        <div className="text-center" mb-16>
              <h2 className="text-4xl" font-bold text-white mb-6>Service Categories</h2>
              
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                We offer a wide range of cutting-edge technology services to meet your business needs
              </p>
            </div>
            
        <div className="grid" md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8>
              { serviceCategories.map((category, index) => (
                <div key={index } className="bg-gradient-to-br" from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10>
                  
        <div className="flex" items-center justify-between mb-4>
                    <div className="{" `w-16 h-16 bg-gradient-to-r ${category.color } rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      
        <div className="text-white">
                        { category.icon }
                      </div>
                    </div>
                    
        <div className="flex" items-center space-x-1>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="{`w-4" h-4 ${i < Math.floor(category.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl" font-bold text-white mb-4>{ category.title }</h3>
                  
          <p className="text-gray-300" mb-6 leading-relaxed>{ category.description }</p>
                  {/* Rating and Users */}
                  
        <div className="flex" items-center justify-between mb-4>
                    <span className="text-sm" text-gray-400>{category.users} users</span>
                    <span className="bg-green-500/20" text-green-400 px-2 py-1 rounded-full text-xs font-semibold>
                      Save {category.savings}
                    </span>
                  </div>
                  
        <div className="space-y-2" mb-6>
                    <h4 className="text-sm" font-semibold text-cyan-400 mb-3>Key Services:</h4>
                    { category.services.slice(0, 4).map((service, serviceIndex) => (
                      <div key={serviceIndex } className="flex" items-center space-x-2>
                        <CheckCircle className="w-4" h-4 text-cyan-400 flex-shrink-0 />
                        <span className="text-sm" text-gray-300>{ service }</span>
                      </div>
                    ))}
                    {category.services.length > 4 && (
                      
        <div className="text-sm" text-cyan-400>
                        +{category.services.length - 4} more services
                      </div>
                    )}
                  </div>
                  
        <div className="mb-6">
                    
        <div className="flex" items-center justify-between mb-2>
                      <span className="text-xl" font-bold text-cyan-400>{category.price}</span>
                      <span className="text-sm" text-gray-400 line-through>{category.marketPrice}</span>
                    </div>
                  </div>
                  
        <div className="space-y-2">
                    <a
                      href={category.link}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4" h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Process Section */ }
        <section className="py-20" bg-white/5 backdrop-blur-sm>
          
        <div className="container" mx-auto px-4>
            
        <div className="text-center" mb-16>
              <h2 className="text-4xl" font-bold text-white mb-6>Our Process</h2>
              
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                We follow a proven methodology to ensure successful project delivery and maximum value
              </p>
            </div>
            
        <div className="max-w-4xl" mx-auto>
              
        <div className="space-y-8">
                { processSteps.map((step, index) => (
                  <div key={index } className="flex" items-start space-x-6 group>
                    
        <div className="flex-shrink-0">
                      
        <div className="w-16" h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300>
                        { step.step }
                      </div>
                    </div>
                    
        <div className="flex-1">
                      <h3 className="text-2xl" font-bold text-white mb-3>{ step.title }</h3>
                      
          <p className="text-gray-300" leading-relaxed>{ step.description }</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        { /* Why Choose Our Services */ }
        <section className="py-20">
          
        <div className="container" mx-auto px-4>
            
        <div className="text-center" mb-16>
              <h2 className="text-4xl" font-bold text-white mb-6>Why Choose Our Services?</h2>
              
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </div>
            
        <div className="grid" md:grid-cols-2 lg:grid-cols-3 gap-8>
              
        <div className="text-center" group>
                
        <div className="w-20" h-20 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300>
                  <Lock className="w-10" h-10 text-white />
                </div>
                <h3 className="text-xl" font-bold text-white mb-4>Enterprise Security</h3>
                
          <p className="text-gray-300">Bank-level security measures to protect your data and systems from threats.</p>
              </div>
              
        <div className="text-center" group>
                
        <div className="w-20" h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300>
                  <Zap className="w-10" h-10 text-white />
                </div>
                <h3 className="text-xl" font-bold text-white mb-4>Rapid Deployment</h3>
                
          <p className="text-gray-300">Fast implementation with minimal disruption to your business operations.</p>
              </div>
              
        <div className="text-center" group>
                
        <div className="w-20" h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300>
                  <Shield className="w-10" h-10 text-white />
                </div>
                <h3 className="text-xl" font-bold text-white mb-4>24/7 Support</h3>
                
          <p className="text-gray-300">Round-the-clock support to ensure your systems run smoothly at all times.</p>
              </div>
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20" bg-gradient-to-r from-cyan-600/20 to-purple-600/20>
          
        <div className="container" mx-auto px-4>
            
        <div className="text-center" max-w-4xl mx-auto>
              <h2 className="text-4xl" font-bold text-white mb-6>Ready to Transform Your Business?</h2>
              
          <p className="text-xl" text-gray-300 mb-8>
                Let's discuss how our AI and IT solutions can accelerate your success and drive innovation.
              </p>
              
        <div className="flex" flex-col sm:flex-row gap-4 justify-center>
                <button className="bg-gradient-to-r" from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105>
                  Get Started Today
                </button>
                <button className="border-2" border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ServicesPage;"