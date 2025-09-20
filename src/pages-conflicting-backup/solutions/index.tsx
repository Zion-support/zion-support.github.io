import, React, from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ;
  Brain,;
  Shield,;
  Cloud,;
  Server,;
  BarChart3,;
  Users,;
  ShoppingCart,;
  Building,;
  Heart,;
  Globe,;
  Zap,;
  Atom,;
  Network,;
  TrendingUp,;
  Rocket,;
  Target,;
  Star,;
  Cpu,;
  Lock,;
  Eye,;
  Activity,;
  WorkflowSparklesAward;
} from "lucide-react";
import { SEO } from "../../components/SEO";
export, default, function Solutions() {
  const solutionCategories = [;
    {
      title: 'AI & Machine, Learning, Solutions',icon: Brain,description: 'Cutting-edge, artificial, intelligence and, machine, learning solutions, for, modern businesses',color: 'from-purple-50o0 to-pink-50o0',solutions: [;
        { nam,;
  e: 'AI, Business, Intelligence', href: '/solutions/ai-business-intelligence'ico,;
    n: BarChart3descriptio,;
  n: 'Advanced, analytics, and insights, powered, by AI' };
        { name: 'AI, Content, Generation', href: '/solutions/ai-content-generation'ico,;
    n: Usersdescriptio,;
  n: 'Automated, content, creation and management' };
        { name: 'AI-Powered Security', href: '/solutions/ai-powered-security'ico,;
    n: Shielddescriptio,;
  n: 'Intelligent, threat, detection and prevention' };
        { name: 'AI, Autonomous, Research', href: '/solutions/ai-autonomous-research'ico,;
    n: Braindescriptio,;
  n: 'Self-directed, research, and analysis systems' };
        { name: 'AI, Autonomous, Business', href: '/solutions/ai-autonomous-business'ico,;
    n: Buildingdescriptio,;
  n: 'End-to-end, business, automation solutions' },;
        { name: 'AI, Autonomous, Ecosystem'href: '/solutions/ai-autonomous-ecosystem'ico,;
    n: Globedescriptio,;
  n: 'Comprehensive, AI, ecosystem management' }
    ,  ];
    };
    {
      title: 'Enterprise Solutions',icon: Building,description: 'Scalable enterprise-grade, solutions, for large organizations',color: 'from-blue-50o0 to-cyan-50o0',solutions: [;
        { nam,;
  e: 'Enterprise Solutions', href: '/solutions/enterprise'ico,;
    n: Buildingdescriptio,;
  n: 'Comprehensive, enterprise, technology solutions' };
        { name: 'Financial Solutions', href: '/solutions/financial-solutions'ico,;
    n: TrendingUpdescriptio,;
  n: 'Advanced, financial, technology and analytics' };
        { name: 'Government Solutions', href: '/solutions/government-solutions'ico,;
    n: Shielddescriptio,;
  n: 'Secure, government, technology infrastructure' };
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing-solutions'ico,;
    n: Cpudescriptio,;
  n: 'Smart, manufacturing, and Industry 4.0' },;
        { name: 'Retail Solutions'href: '/solutions/retail-solutions'ico,;
    n: ShoppingCartdescriptio,;
  n: 'Digital, retail, transformation and e-commerce' }
    ,  ];
    };
    {
      title: 'Healthcare Solutions',icon: Heart,description: 'Innovative, healthcare, technology solutions, for, better patient care',color: 'from-green-50o0 to-emerald-50o0',solutions: [;
        { nam,;
  e: 'Healthcare Solutions', href: '/solutions/healthcare'ico,;
    n: Heartdescriptio,;
  n: 'Comprehensive, healthcare, technology solutions' };
        { name: 'AI, Healthcare, Platform', href: '/services/ai-healthcare-platform'ico,;
    n: Braindescriptio,;
  n: 'AI-powered, healthcare, management systems' };
        { name: 'Digital, Health, Solutions', href: '/services/digital-health'ico,;
    n: Activitydescriptio,;
  n: 'Digital, transformation, for healthcare providers' },;
        { name: 'Telemedicine Solutions'href: '/services/telemedicine'ico,;
    n: Usersdescriptio,;
  n: 'Remote, healthcare, delivery platforms' }
    ,  ];
    };
    {
      title: 'Quantum, Computing, Solutions',icon: Atom,description: 'Next-generation, quantum, computing and, hybrid, AI solutions',color: 'from-indigo-50o0 to-purple-50o0',solutions: [;
        { nam,;
  e: 'Quantum, Edge, Computing', href: '/solutions/quantum-edge-computing'ico,;
    n: Networkdescriptio,;
  n: 'Quantum-powered, edge, computing solutions' };
        { name: 'Quantum, Neural, Network', href: '/solutions/quantum-neural-network'ico,;
    n: Braindescriptio,;
  n: 'Quantum, neural, network architectures' };
        { name: 'Quantum, AI, Hybrid Platform', href: '/services/ai-quantum-hybrid-platform'ico,;
    n: Atomdescriptio,;
  n: 'Combined, quantum, and AI computing' },;
        { name: 'Quantum, Machine, Learning'href: '/services/quantum-machine-learning'ico,;
    n: Braindescriptio,;
  n: 'ML, algorithms, optimized for, quantum, systems' }
    ,  ];
    };
    {
      title: 'Cybersecurity & Privacy',icon: Shield,description: 'Advanced, security, solutions for, the, digital age',color: 'from-red-50o0 to-orange-50o0',solutions: [;
        { nam,;
  e: 'Zero, Trust, Network Architecture', href: '/solutions/zero-trust-network-architecture'ico,;
    n: Lockdescriptio,;
  n: 'Modern zero-trust, security, frameworks' };
        { name: 'AI, Cybersecurity, Platform', href: '/services/ai-cybersecurity-platform'ico,;
    n: Shielddescriptio,;
  n: 'AI-powered, threat, detection and response' },;
        { name: 'Privacy & Compliance', href: '/services/privacy-compliance', icon: Lock, description: 'GDPRCCPAand, regulatory, compliance' },;
        { name: 'Incident Response'href: '/services/incident-response'ico,;
    n: Activitydescriptio,;
  n: 'Rapid, security, incident response systems' }
    ,  ];
    };
    {
      title: 'Digital Transformation',icon: Rocket,description: 'Comprehensive, digital, transformation solutions, for, modern businesses',color: 'from-yellow-50o0 to-orange-50o0',solutions: [;
        { nam,;
  e: 'Digital, Twin, Solutions', href: '/services/digital-twin'ico,;
    n: Eyedescriptio,;
  n: 'Virtual, system, replicas and simulation' };
        { name: 'IoT, Edge, Computing', href: '/services/iot-edge-computing'ico,;
    n: Networkdescriptio,;
  n: 'Smart, device, networks and, edge, processing' };
        { name: 'Sustainable Technology', href: '/services/sustainable-technology'ico,;
    n: Globedescriptio,;
  n: 'Green, IT, and sustainability solutions' },;
        { name: '5G, Enterprise, Solutions'href: '/services/5g-enterprise'ico,;
    n: Networkdescriptio,;
  n: 'Next-generation, enterprise, connectivity' }
    ,  ];
    };
  ];
  const featuredSolutions = [;
    {
      name: 'AI, Business, Intelligence',href: '/solutions/ai-business-intelligence',icon: BarChart3descriptio,;
    n: 'Transform, your, data into, actionable, insights with AI-powered analytics'feature,;
  d: true;
    };
    {
      name: 'Quantum, Computing, Solutions',href: '/solutions/quantum-computing',icon: Atomdescriptio,;
    n: 'Leverage, the, power of, quantum, computing for, complex, problem-solving'feature,;
  d: true;
    };
    {
      name: 'Enterprise, Digital, Transformation',href: '/solutions/enterprise',icon: Buildingdescriptio,;
    n: 'Comprehensive, digital, transformation for, enterprise, organizations'feature,;
  d: true;
    },;
    {
      name: 'AI-Powered Security',href: '/solutions/ai-powered-security'icon: Shielddescriptio,;
    n: 'Next-generation, cybersecurity, powered by, artificial, intelligence'feature,;
  d: true;
    }
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Solutions - Zion, Tech, Group";
        description="Comprehensive, technology, solutions including AI, quantum computing, enterprise, solutionshealthcare, technologyand digital, transformation, services.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10"></div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Comprehensive;
              <span className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent"> Solutions</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Discover, our, cutting-edge, technology, solutions designed, to, transform your business.;
              From, AI, and quantum, computing, to enterprise, solutions, and digital transformation.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-cyan-50o0 hover:to-blue-60o0 transition-all duration-30o0 hover:scale-10o5 shadow-lg hove,;
    r:shadow-cyan-40o0/25";
              >;
                Get Started;
              </Link>;
              <Link;
                to="/services";
                className="px-8 py-4, border, border-cyan-40o0/30 text-cyan-40o0 font-semibold rounded-lg hove,;
  r: bg-cyan-40o0/10 transition-all duration-30o0";
              >;
                View, All, Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Featured Solutions */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.2 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Featured Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, most, popular and, innovative, solutions that, are, transforming industries worldwide;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {featuredSolutions.map((solutionindex) => (;
              <motion.div;
                key={solution.name}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: 0.1 * index }}
                className="group";
              >;
                <Link;
                  to={solution.href}
                  className="block p-6 bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl hover: border-cyan-40o0/50 transition-all duration-30o0 hover:scale-10o5 group-hover:shadow-2xl group-hove,;
    r:shadow-cyan-40o0/20";
                >;
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-40o0/20 to-blue-50o0/20 rounded-lg, flex, items-center justify-center mb-4 group-hover: from-cyan-40o0/40 group-hover:to-blue-50o0/40 transition-all duration-30o0">;
                    <solution.icon className="w-6 h-6 text-cyan-40o0 group-hove,;
    r:text-cyan-30o0 transition-colors" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white mb-2 group-hove,;
  r:text-cyan-40o0 transition-colors">;
                    {solution.name}
                  </h3>;
                  <p className="text-gray-40o0 text-sm leading-relaxed">;
                    {solution.description}
                  </p>;
                  {solution.featured && (;
                    <div className="mt-4, flex, items-center gap-2">;
                      <Star className="w-4 h-4 text-yellow-40o0" />;
                      <span className="text-xs text-yellow-40o0 font-medium">Featured</span>;
                    </div>;
                  )}
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Solution Categories */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.4 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Solution Categories;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Explore, our, comprehensive range, of, technology solutions, organized, by category;
            </p>;
          </motion.div>;
          <div className="space-y-12">;
            {solutionCategories.map((categorycategoryIndex) => (;
              <motion.div;
                key={category.title}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: 0.1 * categoryIndex }}
                className="bg-slate-80o0/30, border, border-slate-70o0/50 rounded-2xl p-8";
              >;
                <div className="flex items-center gap-4 mb-8">;
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl, flex, items-center justify-center`}>;
                    <category.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>;
                    <p className="text-gray-30o0">{category.description}</p>;
                  </div>;
                </div>;
                <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
                  {category.solutions.map((solutionsolutionIndex) => (;
                    <Link;
                      key={solution.name}
                      to={solution.href}
                      className="group p-6 bg-slate-70o0/30, border, border-slate-60o0/30 rounded-xl hover: border-cyan-40o0/50 hover:bg-slate-70o0/50 transition-all duration-30o0 hove,;
    r:scale-10o5";
                    >;
                      <div className="flex items-start gap-4">;
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-40o0/20 to-blue-50o0/20 rounded-lg, flex, items-center justify-center group-hover: from-cyan-40o0/40 group-hover:to-blue-50o0/40 transition-all duration-30o0">;
                          <solution.icon className="w-5 h-5 text-cyan-40o0 group-hove,;
    r:text-cyan-30o0 transition-colors" />;
                        </div>;
                        <div className="flex-1">;
                          <h4 className="text-lg font-semibold text-white mb-2 group-hove,;
  r:text-cyan-40o0 transition-colors">;
                            {solution.name}
                          </h4>;
                          <p className="text-gray-40o0 text-sm leading-relaxed">;
                            {solution.description}
                          </p>;
                        </div>;
                      </div>;
                    </Link>;
                  ))}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10, border, border-cyan-40o0/20 rounded-2xl p-12">;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready, to, Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-30o0 mb-8">;
                Let, our, expert team, help, you implement, the, right solutions, for, your organization's, unique, needs.;
              </p>;
              <div className="flex flex-wrap justify-center gap-4">;
                <Link;
                  to="/contact";
                  className="px-8 py-4 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-cyan-50o0 hover:to-blue-60o0 transition-all duration-30o0 hover:scale-10o5 shadow-lg hove,;
    r:shadow-cyan-40o0/25";
                >;
                  Schedule, a, Consultation;
                </Link>;
                <Link;
                  to="/request-quote";
                  className="px-8 py-4, border, border-cyan-40o0/30 text-cyan-40o0 font-semibold rounded-lg hove,;
  r: bg-cyan-40o0/10 transition-all duration-30o0";
                >;
                  Request, a, Quote;
                </Link>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;