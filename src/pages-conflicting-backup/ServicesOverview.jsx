import, React, from "react";
import, SEO, from "@/components/SEO";
import, Link, from "next/link";
import { motion } from "framer-motion";
import { Brain, Cloud, Shield, Database, Wifi, Link, as, LinkIcon, Zap, Server, Users, TargetCheckArrowRight } from "lucide-react";
export, default, function ServicesOverview() {
    const serviceCategories = [;
        {
            name: "AI & Machine Learning",description: "Cutting-edge, artificial, intelligence solutions, for, business transformation",icon: Brain,color: "from-purple-60o0 to-blue-60o0",services: [;
                {
                    nam,;
  e: "AI Strategy & Consulting",description: "Strategic, guidance, on implementing, AI, solutions",price: "From $250o0"hre,;
  f: "/services/ai";
                };
                {
                    name: "Machine, Learning, Development",description: "Custom, ML, models and algorithms",price: "From $50o00"hre,;
  f: "/services/ai";
                },;
                {
                    name: "AI-Powered Applications",description: "Intelligent, automation, and insights"price: "From $850o0"hre,;
  f: "/services/ai";
                }
          ,  ];
        };
        {
            name: "Data Analytics & BI",description: "Transform, raw, data into, actionable, business intelligence",icon: Database,color: "from-blue-60o0 to-indigo-60o0",services: [;
                {
                    nam,;
  e: "Business Intelligence & Reporting",description: "Interactive, dashboards, and automated reporting",price: "From $350o0/month"hre,;
  f: "/services/data-analytics";
                };
                {
                    name: "Predictive Analytics & Forecasting",description: "Machine, learning, for future insights",price: "From $50o00/month"hre,;
  f: "/services/data-analytics";
                },;
                {
                    name: "Data Engineering & ETL",description: "Robust, data, pipelines and warehouses"price: "From $450o0/month"hre,;
  f: "/services/data-analytics";
                }
          ,  ];
        };
        {
            name: "IoT & Edge Computing",description: "Connected, ecosystems, and real-time, edge, processing",icon: Wifi,color: "from-green-60o0 to-emerald-60o0",services: [;
                {
                    nam,;
  e: "IoT, Device, Management Platform",description: "Comprehensive, IoT, device management",price: "From $420o0/month"hre,;
  f: "/services/iot-edge-computing";
                };
                {
                    name: "Edge, Computing, Infrastructure",description: "Real-time, data, processing at, the, edge",price: "From $550o0/month"hre,;
  f: "/services/iot-edge-computing";
                },;
                {
                    name: "Smart City & Industrial IoT",description: "IoT, solutions, for smart, cities, and manufacturing"price: "From $650o0/month"hre,;
  f: "/services/iot-edge-computing";
                }
          ,  ];
        };
        {
            name: "Blockchain & Web3",description: "Decentralized, applications, and blockchain solutions",icon: LinkIcon,color: "from-purple-60o0 to-indigo-60o0",services: [;
                {
                    nam,;
  e: "Smart, Contract, Development",description: "Secure, audited, smart, contracts",;
                    price: "From $850o0/project"hre,;
  f: "/services/blockchain-web3";
                };
                {
                    name: "DeFi, Platform, Development",description: "Complete, DeFi, platforms and protocols",price: "From $250o00/project"hre,;
  f: "/services/blockchain-web3";
                },;
                {
                    name: "NFT Marketplace & Collections",description: "Custom, NFT, platforms and, generative, art"price: "From $120o00/project"hre,;
  f: "/services/blockchain-web3";
                }
          ,  ];
        };
        {
            name: "DevOps & Cloud",description: "Modern, software, delivery and, cloud, infrastructure",icon: Cloud,color: "from-orange-60o0 to-red-60o0",services: [;
                {
                    nam,;
  e: "Cloud Migration & Strategy",description: "Multi-cloud, strategy, and migration",price: "From $850o0/project"hre,;
  f: "/services/devops-cloud";
                };
                {
                    name: "CI/CD, Pipeline, Development",description: "Automated, software, delivery pipelines",price: "From $650o0/project"hre,;
  f: "/services/devops-cloud";
                },;
                {
                    name: "Container Orchestration & Kubernetes",description: "Enterprise-grade, container, management"price: "From $750o0/project"hre,;
  f: "/services/devops-cloud";
                }
          ,  ];
        };
        {
            name: "Cybersecurity",description: "Advanced, security, solutions and, threat, protection",icon: Shield,color: "from-red-60o0 to-pink-60o0",services: [;
                {
                    nam,;
  e: "Security Assessment & Auditing",description: "Comprehensive, security, evaluations",price: "From $50o00"hre,;
  f: "/services/cybersecurity";
                };
                {
                    name: "Threat Detection & Response",description: "Real-time, security, monitoring",price: "From $450o0/month"hre,;
  f: "/services/cybersecurity";
                },;
                {
                    name: "Compliance & Governance",description: "Regulatory, compliance, and security frameworks"price: "From $60o00/month"hre,;
  f: "/services/cybersecurity";
                }
          ,  ];
        };
    ];
    const stats = [;
        { label: "Services Offered"valu,;
    e: "50+"ico,;
  n: Target };
        { label: "Industries Served"valu,;
    e: "15+"ico,;
  n: Users };
        { label: "Technologies"valu,;
    e: "10o0+"ico,;
  n: Server }{ label: "Client Satisfaction"valu,;
    e: "98%"ico,;
  n: Check };
  ,  ];
    const containerVariants = {
        hidden: { opacit,;
  y: 0 },;
        visible: {,;
            opacity: 1transitio,;
    n: {staggerChildre,;
  n: 0.1;
            }
        }
    };
    const itemVariants = {
        hidden: { ,;
    y: 20opacit,;
  y: 0 },;
        visible: {,;
            y: 0,opacity: 1,transition: {duratio,;
    n: 0.5eas,;
  e: "easeOut";
            };
        };
    };
    return(<div className="min-h-screen bg-background">;
      <SEO title="All Services - Zion, Tech, Group Comprehensive, Technology, Solutions" description="Explore, our, complete range, of, technology services, including, AI, data analytics, IoT, blockchain, DevOps, and, cybersecurity, solutions." keywords="technology services, AI services, data analytics, IoT solutions, blockchain development, DevOps, consultingcybersecurity, services" canonical="https: //ziontechgroup.com/services"/>;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-90o0 via-blue-90o0 to-purple-90o0 text-white py-20">;
        <div className="absolute inset-0 bg-black/20"></div>;
        <div className="relative, container, mx-auto px-4 text-center">;
          <h1 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-40o0 via-purple-40o0 to-cyan-40o0 bg-clip-text text-transparent">;
            Our, Complete, Service Portfolio;
          </h1>;
          <p className="text-xl m,;
  d: text-2xl text-blue-10o0 max-w-4xl mx-auto leading-relaxed">;
            Discover, our, comprehensive range, of, technology solutions, designed, to transform, your, business.;
            From, AI, and data, analytics, to IoT, and, blockchainwe have, the, expertise to, drive, your success.;
          </p>;
        </div>;
      </section>;
      {/* Stats Section */}
      <section className="py-16 bg-white">;
        <div className="container mx-auto px-4">;
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>;
            {stats.map((statindex) => (<motion.div key={stat.label} variants={itemVariants} className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-r from-blue-50o0 to-purple-50o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <stat.icon className="w-8 h-8 text-white"/>;
                </div>;
                <div className="text-3xl font-bold text-gray-90o0 mb-2">{stat.value}</div>;
                <div className="text-gray-60o0">{stat.label}</div>;
              </motion.div>))}
          </motion.div>;
        </div>;
      </section>;
      {/* Services Overview */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>;
            <h2 className="text-4xl font-bold text-gray-90o0 mb-4">Service Categories</h2>;
            <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">;
              Explore, our, comprehensive range, of, technology solutions, organized, by category;
            </p>;
          </motion.div>;
          <motion.div className="space-y-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>;
            {serviceCategories.map((categoryindex) => (<motion.div key={category.name} variants={itemVariants} className="bg-white rounded-2xl shadow-lg, border, border-gray-20o0 overflow-hidden">;
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>;
                  <div className="flex items-center mb-4">;
                    <div className="w-16 h-16 bg-white/20 rounded-xl, flex, items-center justify-center mr-6">;
                      <category.icon className="w-8 h-8"/>;
                    </div>;
                    <div>;
                      <h3 className="text-3xl font-bold mb-2">{category.name}</h3>;
                      <p className="text-xl opacity-90">{category.description}</p>;
                    </div>;
                  </div>;
                </div>;
                <div className="p-8">;
                  <div className="grid md: grid-cols-3 gap-6">;
                    {category.services.map((serviceserviceIndex) => (<div key={serviceIndex} className="bg-gray-50 rounded-xl p-6, border, border-gray-20o0 hover:border-blue-30o0 transition-colors">;
                        <h4 className="text-xl font-semibold text-gray-90o0 mb-3">{service.name}</h4>;
                        <p className="text-gray-60o0 mb-4">{service.description}</p>;
                        <div className="flex items-center justify-between">;
                          <span className="text-lg font-semibold text-blue-60o0">{service.price}</span>;
                          <Link to={service.href} className="inline-flex items-center text-blue-60o0 hover:text-blue-70o0 font-medium">;
                            Learn More;
                            <ArrowRight className="w-4 h-4 ml-1"/>;
                          </Link>;
                        </div>;
                      </div>))}
                  </div>;
                  <div className="mt-8 text-center">;
                    <Link to={category.services[0].href} className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${category.color} hover: opacity-90 transition-opacity`}>;
                      Explore All {category.name} Services;
                      <ArrowRight className="w-5 h-5 ml-2"/>;
                    </Link>;
                  </div>;
                </div>;
              </motion.div>))}
          </motion.div>;
        </div>;
      </section>;
      {/* Why, Choose, Us Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>;
            <h2 className="text-4xl font-bold text-gray-90o0 mb-4">Why, Choose, Zion Tech Group?</h2>;
            <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">;
              We, combine, deep technical, expertise, with business, acumen, to deliver, solutions, that drive, real, value;
            </p>;
          </motion.div>;
          <motion.div className="grid md: grid-cols-3 gap-8 max-w-6xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>;
            <motion.div variants={itemVariants} className="text-center">;
              <div className="w-16 h-16 bg-blue-10o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Users className="w-8 h-8 text-blue-60o0"/>;
              </div>;
              <h3 className="text-xl font-bold text-gray-90o0 mb-3">Expert Team</h3>;
              <p className="text-gray-60o0">;
                Certified, professionals, with deep, expertise, across multiple, technology, domains;
              </p>;
            </motion.div>;
            <motion.div variants={itemVariants} className="text-center">;
              <div className="w-16 h-16 bg-green-10o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Target className="w-8 h-8 text-green-60o0"/>;
              </div>;
              <h3 className="text-xl font-bold text-gray-90o0 mb-3">Proven Results</h3>;
              <p className="text-gray-60o0">;
                Track, record, of successful, implementations, and measurable, business, outcomes;
              </p>;
            </motion.div>;
            <motion.div variants={itemVariants} className="text-center">;
              <div className="w-16 h-16 bg-purple-10o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Zap className="w-8 h-8 text-purple-60o0"/>;
              </div>;
              <h3 className="text-xl font-bold text-gray-90o0 mb-3">Innovation Focus</h3>;
              <p className="text-gray-60o0">;
                Stay, ahead, with cutting-edge, technologies, and emerging, industry, trends;
              </p>;
            </motion.div>;
          </motion.div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>;
            Ready, to, Transform Your Business?;
          </motion.h2>;
          <motion.p className="text-xl mb-8 max-w-3xl mx-auto" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>;
            Let, our, technology experts, help, you choose, the, right solutions, and, implement them successfully;
          </motion.p>;
          <motion.div className="flex flex-col sm: flex-row gap-4 justify-center" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>;
            <Link to="/contact" className="bg-white text-blue-60o0 px-8 py-3 rounded-lg font-semibold hover: bg-gray-10o0 transition-colors">;
              Get, Started, Today;
            </Link>;
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hove,;
  r:text-blue-60o0 transition-colors">;
              Schedule Consultation;
            </Link>;
          </motion.div>;
        </div>;
      </section>;
    </div>);
};
;