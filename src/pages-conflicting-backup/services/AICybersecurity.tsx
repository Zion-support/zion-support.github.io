import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Shield,;
  Brain,;
  Eye,;
  Lock,;
  AlertTriangle,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Zap,;
  Users,;
  Database,;
  Network,;
  Cpu,;
  Server,;
  Globe,;
  Target,;
  TrendingUp,;
  Activity,;
  FingerprintKeySearch;
} from "lucide-react";
import { SEO } from "@/components/SEO";
export, default, function AICybersecurity() {
  const features = [;
    {
      icon: Braintitl,;
    e: "AI-Powered, Threat, Detection"descriptio,;
  n: "Advanced, machine, learning algorithms, that, identify and, respond, to threats, in, real-time";
    };
    {
      icon: Shieldtitl,;
    e: "Intelligent Security"descriptio,;
  n: "Automated, security, responses and, proactive, threat prevention";
    };
    {
      icon: Eyetitl,;
    e: "Continuous Monitoring"descriptio,;
  n: "24/7, surveillance, of your, digital, infrastructure with AI-driven insights";
    }{
      icon: Locktitl,;
    e: "Zero-Trust Security"descriptio,;
  n: "Comprehensive, security, framework with AI-enhanced, authentication, and access control";
    };
,  ];
  const services = [;
    {
      title: "Threat Intelligence",description: "AI-powered, analysis, of global, threat, landscapes and, predictive, security insights",icon: Targetfeature,;
  s: ["Real-time, threat, feeds""Predictive analytics""Global, threat,, monitoring"];
    },;
    {
      title: "Incident Response",description: "Automated, incident, detection and, response, with AI-driven, decision, making",icon: AlertTriangle,features: ["Instant, threat, detection""Automated response""Incident, analysis"];
    },;
    {
      title: "Vulnerability Assessment",description: "Continuous, scanning, and AI-powered, vulnerability, identification and remediation",icon: Search,features: ["Automated scanning""Risk prioritization""Remediation, guidance"];
    },;
    {
      title: "Security Analytics",description: "Advanced, analytics, and reporting, for, comprehensive security insights",icon: TrendingUp,features: ["Security dashboards""Compliance reporting""Performance, metrics"];
    }
  ],;
  const technologies = [;
    "Machine, Learning, Algorithms",;
    "Behavioral Analysis",;
    "Threat, Intelligence, Platforms",;
    "Security, Information, and Event Management (SIEM)",;
    "Endpoint, Detection, and Response (EDR)",;
    "Network, Traffic, Analysis",;
    "Cloud, Security, Posture Management""Identity, and, Access Management (IAM)";
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-90o0 to-slate-950">;
      <SEO;
        title="AI, Cybersecurity, Services - Zion, Tech, Group";
        description="Advanced AI-powered, cybersecurity, solutions for, comprehensive, threat detection, preventionand response. Protect, your, business with, intelligent, security.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0">;
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-50o0/10 rounded-full blur-3xl"></div>;
        </div>;
        <div className="relative z-10, container, mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-50o0/20 to-orange-50o0/20, border, border-red-40o0/30 rounded-full text-red-30o0 text-sm font-medium mb-6">;
              <Shield className="w-4 h-4 mr-2" />;
              AI-Powered Security;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              AI Cybersecurity;
              <span className="block bg-gradient-to-r from-red-40o0 via-orange-50o0 to-yellow-60o0 bg-clip-text text-transparent">;
                Solutions;
              </span>;
            </h1>;
            <p className="text-xl text-slate-30o0 mb-8 max-w-3xl mx-auto">;
              Protect, your, business with cutting-edge AI-powered, cybersecurity, that adapts, learnsand evolves;
              to, counter, the latest threats. Our, intelligent, security systems, provide, comprehensive protection.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-50o0 to-orange-60o0 text-white font-semibold rounded-lg hover: from-red-40o0 hover:to-orange-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-red-50o0/20";
              >;
                Secure, Your, Business;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4, border, border-red-40o0/30 text-red-40o0 font-semibold rounded-lg hove,;
  r: bg-red-40o0/10 transition-all duration-20o0";
              >;
                View, All, Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              AI, Cybersecurity, Features;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-2xl mx-auto">;
              Our AI-powered, cybersecurity, platform combines, machine, learning with, advanced, security protocols;
              to, provide, comprehensive protection, for, your digital assets.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-red-40o0/30 transition-all duration-20o0 group";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-red-40o0/20 to-orange-50o0/20 rounded-lg, flex, items-center justify-center mb-4 group-hover:from-red-40o0/40 group-hove,;
  r:to-orange-50o0/40 transition-all duration-20o0">;
                  <feature.icon className="w-6 h-6 text-red-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                <p className="text-slate-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className="py-20 bg-slate-90o0/50">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Comprehensive, Security, Services;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-2xl mx-auto">;
              From, threat, detection to, incident, response, our, AI, cybersecurity services, cover, every aspect;
              of, your, security needs.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 gap-8">;
            {services.map((serviceindex) => (;
              <motion.div;
                key={service.title}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-8 hover:border-red-40o0/30 transition-all duration-20o0";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-red-40o0/20 to-orange-50o0/20 rounded-xl, flex, items-center justify-center mb-6">;
                  <service.icon className="w-8 h-8 text-red-40o0" />;
                </div>;
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>;
                <p className="text-slate-30o0 text-lg mb-6">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.features.map((featurefeatureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-slate-30o0">;
                      <CheckCircle className="w-4 h-4 text-red-40o0 mr-2 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Technologies Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Advanced, Security, Technologies;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-2xl mx-auto">;
              Our, platform, leverages cutting-edge, technologies, to provide, the, most advanced, cybersecurity, protection available.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {technologies.map((techindex) => (;
              <motion.div;
                key={tech}
                initial={{ opacity: 0scal,;
  e: 0.9 }};
                whileInView={{ opacity: 1scal,;
  e: 1 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="flex items-center p-4 bg-slate-80o0/50, border, border-slate-70o0/50 rounded-lg hover:border-red-40o0/30 transition-all duration-20o0";
              >;
                <Shield className="w-5 h-5 text-red-40o0 mr-3 flex-shrink-0" />;
                <span className="text-white text-sm">{tech}</span>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-50o0/10 to-orange-50o0/10">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Ready, to, Secure Your Business?;
            </h2>;
            <p className="text-xl text-slate-30o0 mb-8 max-w-2xl mx-auto">;
              Don't, wait, for a, security, breach. Protect, your, business with AI-powered, cybersecurity, today.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-50o0 to-orange-60o0 text-white font-semibold rounded-lg hover: from-red-40o0 hover:to-orange-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-red-50o0/20";
              >;
                Get, Security, Assessment;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4, border, border-red-40o0/30 text-red-40o0 font-semibold rounded-lg hove,;
  r: bg-red-40o0/10 transition-all duration-20o0";
              >;
                Explore, All, Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;