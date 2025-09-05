<<<<<<< HEAD
import React from 'react',;
import Head from 'next/head',;
import { motion } from 'framer-motion',;
import { ;
  Shield, Lock, Eye, AlertTriangle, Zap, Cpu, ;
  Database, Globe, ArrowRight, CheckCircle, Star, Users;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;
;
export default function QuantumCybersecurityPage() {;
  const features = [;
    {;
      icon:Shield,;
      title:"Quantum-Resistant Encryption",;
      description:"Advanced cryptographic algorithms that remain secure even against quantum computers.",;
      color:"from-blue-500 to-cyan-500";
    },;
    {;
      icon:Lock,;
      title:"Zero-Trust Architecture",;
      description:"Verify every user and device before granting access to any resource.",;
      color:"from-purple-500 to-pink-500";
    },;
    {;
      icon:Eye,;
      title:"AI-Powered Threat Detection",;
      description:"Machine learning algorithms that identify and respond to threats in real-time.",;
      color:"from-green-500 to-emerald-500";
    },;
    {;
      icon:AlertTriangle,;
      title:"Advanced Threat Intelligence",;
      description:"Real-time monitoring and analysis of global cyber threats and vulnerabilities.",;
      color:"from-red-500 to-orange-500";
    },;
    {;
      icon:Zap,;
      title:"Automated Incident Response",;
      description:"Instant response and mitigation of security incidents with minimal human intervention.",;
      color:"from-yellow-500 to-orange-500";
    },;
    {;
      icon:Cpu,;
      title:"Secure Cloud Infrastructure",;
      description:"Enterprise-grade security for cloud deployments with end-to-end encryption.",;
      color:"from-indigo-500 to-purple-500";
    }
  ],;
;
  const benefits = [;
    "Protect against quantum computing attacks with future-proof encryption",;
    "Reduce security incidents by 90% with AI-powered threat detection",;
    "Achieve compliance with SOC 2, GDPR, and industry standards",;
    "24/7 monitoring and automated incident response",;
    "Scalable security that grows with your business",;
    "Expert security team available around the clock";
  ],;
;
  const threats = [;
    {;
      type:"Quantum Attacks",;
      description:"Future quantum computers could break current encryption standards",;
      solution:"Quantum-resistant algorithms and post-quantum cryptography";
    },;
    {;
      type:"AI-Powered Threats",;
      description:"Sophisticated attacks using artificial intelligence and machine learning",;
      solution:"Advanced AI defense systems and behavioral analysis";
    },;
    {;
      type:"Supply Chain Attacks",;
      description:"Compromised software or hardware in the supply chain",;
      solution:"Comprehensive supply chain verification and integrity checks";
    },;
    {;
      type:"Ransomware",;
      description:"Malicious software that encrypts data and demands payment",;
      solution:"Real-time detection, automated backup, and rapid recovery";
    }
  ],;
;
  const pricing = [;
    {;
      plan:"Essential",;
      price:"$799",;
      period:"/month",;
      description:"Basic quantum cybersecurity for small businesses",;
      features:[;
        "Quantum-resistant encryption",;
        "Basic threat detection",;
        "24/7 monitoring",;
        "Email support",;
        "Up to 100 users",;
        "Standard compliance reports";
      ],;
      popular:false;
    },;
    {;
      plan:"Professional",;
      price:"$1,999",;
      period:"/month",;
      description:"Advanced security features for growing organizations",;
      features:[;
        "Everything in Essential",;
        "AI-powered threat detection",;
        "Zero-trust architecture",;
        "Priority support",;
        "Up to 1000 users",;
        "Custom security policies",;
        "Advanced compliance reporting",;
        "Incident response team";
      ],;
      popular:true;
    },;
    {;
      plan:"Enterprise",;
      price:"Custom",;
      period:"",;
      description:"Full-scale security solution for large organizations",;
      features:[;
        "Everything in Professional",;
        "Custom security architecture",;
        "Dedicated security team",;
        "Unlimited users",;
        "On-premise deployment",;
        "Custom training programs",;
        "SLA guarantees",;
        "Executive reporting";
      ],;
      popular:false;
    }
  ],;
;
  return (;
    <>;
      <Head>;
        <title>Quantum Cybersecurity - Zion Tech Group</title>;
        <meta name="description" content="Future-proof your security with quantum-resistant encryption and AI-powered threat detection. Protect your business against tomorrow's cyber threats today." />;
        <meta name="keywords" content="quantum cybersecurity, quantum-resistant encryption, AI threat detection, zero-trust security, cybersecurity platform, threat intelligence" />;
        <meta property="og:title" content="Quantum Cybersecurity - Zion Tech Group" />;
        <meta property="og:description" content="Future-proof your security with quantum-resistant encryption and AI-powered threat detection." />;
        <meta property="og:type" content="website" />;
        <meta property="og:url" content="https://ziontechgroup.com/quantum-cybersecurity" />;
      </Head>;
;
      <EnhancedNavigation />;
;
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion.div;
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="text-center";
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Quantum;
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">;
                {" "}Cybersecurity;
              </span>;
            </h1>;
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">;
              Future-proof your security infrastructure with quantum-resistant encryption and AI-powered threat detection. ;
              Stay ahead of emerging cyber threats with the most advanced security technology available.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105";
              >;
                Secure Your Business;
              </a>;
              <a;
                href="#demo";
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200";
              >;
                Security Assessment;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
;
      {/* Features */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Advanced Security Features</h2>;
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">;
              Comprehensive protection against current and future cyber threats.;
            </p>;
          </motion.div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2";
              >;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>;
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
;
      {/* Benefits */}
      <section className="py-20 bg-slate-50">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
            <motion.div;
              initial={{ opacity:0, x:-20 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.6 }}
            >;
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Quantum Cybersecurity?</h2>;
              <p className="text-lg text-slate-600 leading-relaxed mb-8">;
                Our advanced security platform provides comprehensive protection against both current and future threats. ;
                Stay ahead of the curve with quantum-resistant technology.;
              </p>;
              <div className="space-y-4">;
                {benefits.map((benefit, index) => (;
                  <motion.div;
                    key={benefit}
                    initial={{ opacity:0, x:-20 }}
                    whileInView={{ opacity:1, x:0 }}
                    transition={{ duration:0.6, delay:index * 0.1 }}
                    className="flex items-center space-x-3";
                  >;
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />;
                    <span className="text-slate-700">{benefit}</span>;
                  </motion.div>;
                ))}
              </div>;
            </motion.div>;
;
            <motion.div;
              initial={{ opacity:0, x:20 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.6, delay:0.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8";
            >;
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Security Metrics</h3>;
              <div className="space-y-6">;
                <div className="text-center">;
                  <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>;
                  <div className="text-slate-600">Reduction in Security Incidents</div>;
                </div>;
                <div className="text-center">;
                  <div className="text-4xl font-bold text-green-600 mb-2">99.99%</div>;
                  <div className="text-slate-600">Uptime Guarantee</div>;
                </div>;
                <div className="text-center">;
                  <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>;
                  <div className="text-slate-600">Monitoring & Support</div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
;
      {/* Threat Landscape */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Emerging Threat Landscape</h2>;
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">;
              Understanding the threats is the first step in defending against them.;
            </p>;
          </motion.div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {threats.map((threat, index) => (;
              <motion.div;
                key={threat.type}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300";
              >;
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{threat.type}</h3>;
                <p className="text-slate-600 mb-4 leading-relaxed">{threat.description}</p>;
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">;
                  <p className="text-blue-800 font-medium">Our Solution:{threat.solution}</p>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
;
      {/* Compliance */}
      <section className="py-20 bg-slate-900">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">Industry Compliance & Standards</h2>;
            <p className="text-xl text-white/70 max-w-3xl mx-auto">;
              Meet and exceed industry security standards with our comprehensive compliance framework.;
            </p>;
          </motion.div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.6 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center";
            >;
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">;
                <Shield className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">SOC 2 Type II</h3>;
              <p className="text-white/70 text-sm">Service Organization Control compliance for security, availability, and confidentiality</p>;
            </motion.div>;
;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center";
            >;
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">;
                <Globe className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">GDPR</h3>;
              <p className="text-white/70 text-sm">General Data Protection Regulation compliance for EU data privacy</p>;
            </motion.div>;
;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center";
            >;
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">;
                <Database className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">ISO 27001</h3>;
              <p className="text-white/70 text-sm">Information security management system certification</p>;
            </motion.div>;
;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.3 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center";
            >;
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">;
                <Users className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">HIPAA</h3>;
              <p className="text-white/70 text-sm">Health Insurance Portability and Accountability Act compliance</p>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
;
      {/* Pricing */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Security Plans</h2>;
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">;
              Choose the security level that matches your organization's needs and risk profile.;
            </p>;
          </motion.div>;
;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricing.map((plan, index) => (;
              <motion.div;
                key={plan.plan}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:index * 0.1 }}
                className={`relative bg-slate-50 rounded-2xl p-8 ${;
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' :'';
                }`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">;
                    Most Popular;
                  </div>;
=======
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Shield, Lock, Eye, AlertTriangle, Zap, Cpu,
  Database, Globe, ArrowRight, CheckCircle, Star, Users
} from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',
export default function QuantumCybersecurityPage() {
  const features = [
    {
      icon: Shield,
      title: &quot;Quantum-Resistant Encryption&quot;,
      description: &quot;Advanced cryptographic algorithms that remain secure even against quantum computers.&quot;,
      color: &quot;from-blue-500 to-cyan-500&quot
    },
    {
      icon: Lock,
      title: &quot;Zero-Trust Architecture&quot;,
      description: &quot;Verify every user and device before granting access to any resource.&quot;,
      color: &quot;from-purple-500 to-pink-500&quot
    },
    {
      icon: Eye,
      title: &quot;AI-Powered Threat Detection&quot;,
      description: &quot;Machine learning algorithms that identify and respond to threats in real-time.&quot;,
      color: &quot;from-green-500 to-emerald-500&quot
    },
    {
      icon: AlertTriangle,
      title: &quot;Advanced Threat Intelligence&quot;,
      description: &quot;Real-time monitoring and analysis of global cyber threats and vulnerabilities.&quot;,
      color: &quot;from-red-500 to-orange-500&quot
    },
    {
      icon: Zap,
      title: &quot;Automated Incident Response&quot;,
      description: &quot;Instant response and mitigation of security incidents with minimal human intervention.&quot;,
      color: &quot;from-yellow-500 to-orange-500&quot
    },
    {
      icon: Cpu,
      title: &quot;Secure Cloud Infrastructure&quot;,
      description: &quot;Enterprise-grade security for cloud deployments with end-to-end encryption.&quot;,
      color: &quot;from-indigo-500 to-purple-500&quot
    }
  ],

  const benefits = [
    "Protect against quantum computing attacks with future-proof encryption",
    "Reduce security incidents by 90% with AI-powered threat detection",
    "Achieve compliance with SOC 2, GDPR, and industry standards",
    "24/7 monitoring and automated incident response",
    "Scalable security that grows with your business",
    "Expert security team available around the clock"
  ],
    &quot;Protect against quantum computing attacks with future-proof encryption&quot;,
    &quot;Reduce security incidents by 90% with AI-powered threat detection&quot;,
    &quot;Achieve compliance with SOC 2, GDPR, and industry standards&quot;,
    &quot;24/7 monitoring and automated incident response&quot;,
    &quot;Scalable security that grows with your business&quot;,
    &quot;Expert security team available around the clock&quot
  ];

  const threats = [
    {
      type: &quot;Quantum Attacks&quot;,
      description: &quot;Future quantum computers could break current encryption standards&quot;,
      solution: &quot;Quantum-resistant algorithms and post-quantum cryptography&quot
    },
    {
      type: &quot;AI-Powered Threats&quot;,
      description: &quot;Sophisticated attacks using artificial intelligence and machine learning&quot;,
      solution: &quot;Advanced AI defense systems and behavioral analysis&quot
    },
    {
      type: &quot;Supply Chain Attacks&quot;,
      description: &quot;Compromised software or hardware in the supply chain&quot;,
      solution: &quot;Comprehensive supply chain verification and integrity checks&quot
    },
    {
      type: &quot;Ransomware&quot;,
      description: &quot;Malicious software that encrypts data and demands payment&quot;,
      solution: &quot;Real-time detection, automated backup, and rapid recovery&quot
    }
  ],

  const pricing = [
    {
      plan: &quot;Essential&quot;,
      price: &quot;$799&quot;,
      period: &quot;/month&quot;,
      description: &quot;Basic quantum cybersecurity for small businesses&quot;,
      features: [
        &quot;Quantum-resistant encryption&quot;,
        &quot;Basic threat detection&quot;,
        &quot;24/7 monitoring&quot;,
        &quot;Email support&quot;,
        &quot;Up to 100 users&quot;,
        &quot;Standard compliance reports&quot
      ],
      popular: false
    },
    {
      plan: &quot;Professional&quot;,
      price: &quot;$1,999&quot;,
      period: &quot;/month&quot;,
      description: &quot;Advanced security features for growing organizations&quot;,
      features: [
        &quot;Everything in Essential&quot;,
        &quot;AI-powered threat detection&quot;,
        &quot;Zero-trust architecture&quot;,
        &quot;Priority support&quot;,
        &quot;Up to 1000 users&quot;,
        &quot;Custom security policies&quot;,
        &quot;Advanced compliance reporting&quot;,
        &quot;Incident response team&quot
      ],
      popular: true
    },
    {
      plan: &quot;Enterprise&quot;,
      price: &quot;Custom&quot;,
      period: "&quot;,
      description: &quot;Full-scale security solution for large organizations&quot;,
      features: [
        &quot;Everything in Professional&quot;,
        &quot;Custom security architecture&quot;,
        &quot;Dedicated security team&quot;,
        &quot;Unlimited users&quot;,
        &quot;On-premise deployment&quot;,
        &quot;Custom training programs&quot;,
        &quot;SLA guarantees&quot;,
        &quot;Executive reporting&quot
      ],
      popular: false
    }
  ],
  return (_<>
      <Head>
        <title>Quantum Cybersecurity - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Future-proof your security with quantum-resistant encryption and AI-powered threat detection. Protect your business against tomorrow's cyber threats today.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;quantum cybersecurity, quantum-resistant encryption, AI threat detection, zero-trust security, cybersecurity platform, threat intelligence&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Quantum Cybersecurity - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Future-proof your security with quantum-resistant encryption and AI-powered threat detection.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/quantum-cybersecurity" />      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div,
initial={_{ opacity: 0, y: 20}}
            animate={_{ opacity: 1, y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                {&quot; "}Cybersecurity              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Future-proof your security infrastructure with quantum-resistant encryption and AI-powered threat detection. 
              Stay ahead of emerging cyber threats with the most advanced security technology available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a,
href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Secure Your Business
              </Link>
              <a,
href="#demo"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Security Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div,
initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Advanced Security Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive protection against current and future cyber threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div,
key={feature.title}
                initial={_{ opacity: 0, y: 20}}
                whileInView={_{ opacity: 1, y: 0}}
                transition={_{ duration: 0.6, delay: index * 0.1}}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={_`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div,
initial={_{ opacity: 0, x: -20}}
              whileInView={_{ opacity: 1, x: 0}}
              transition={_{ duration: 0.6}}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Quantum Cybersecurity?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our advanced security platform provides comprehensive protection against both current and future threats. 
                Stay ahead of the curve with quantum-resistant technology.
              </p>
              <div className="space-y-4">
                {benefits.map(_(benefit, index) => (
                  <motion.div,
key={benefit}
                    initial={_{ opacity: 0, x: -20}}
                    whileInView={_{ opacity: 1, x: 0}}
                    transition={_{ duration: 0.6, delay: index * 0.1}}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div,
initial={_{ opacity: 0, x: 20}}
              whileInView={_{ opacity: 1, x: 0}}
              transition={_{ duration: 0.6, delay: 0.2}}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Security Metrics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
                  <div className="text-slate-600">Reduction in Security Incidents</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">99.99%</div>
                  <div className="text-slate-600">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-slate-600">Monitoring & Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {_/* Threat Landscape */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div,
initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Emerging Threat Landscape</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding the threats is the first step in defending against them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threats.map(_(threat, index) => (
              <motion.div,
key={threat.type}
                initial={_{ opacity: 0, y: 20}}
                whileInView={_{ opacity: 1, y: 0}}
                transition={_{ duration: 0.6, delay: index * 0.1}}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{threat.type}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{threat.description}</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-medium">Our Solution: {threat.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Compliance */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div,
initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industry Compliance & Standards</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Meet and exceed industry security standards with our comprehensive compliance framework.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div,
initial={_{ opacity: 0, y: 20}}
              whileInView={_{ opacity: 1, y: 0}}
              transition={_{ duration: 0.6}}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SOC 2 Type II</h3>
              <p className="text-white/70 text-sm">Service Organization Control compliance for security, availability, and confidentiality</p>
            </motion.div>

            <motion.div,
initial={_{ opacity: 0, y: 20}}
              whileInView={_{ opacity: 1, y: 0}}
              transition={_{ duration: 0.6, delay: 0.1}}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GDPR</h3>
              <p className="text-white/70 text-sm">General Data Protection Regulation compliance for EU data privacy</p>
            </motion.div>

            <motion.div,
initial={_{ opacity: 0, y: 20}}
              whileInView={_{ opacity: 1, y: 0}}
              transition={_{ duration: 0.6, delay: 0.2}}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ISO 27001</h3>
              <p className="text-white/70 text-sm">Information security management system certification</p>
            </motion.div>

            <motion.div,
initial={_{ opacity: 0, y: 20}}
              whileInView={_{ opacity: 1, y: 0}}
              transition={_{ duration: 0.6, delay: 0.3}}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">HIPAA</h3>
              <p className="text-white/70 text-sm">Health Insurance Portability and Accountability Act compliance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {_/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div,
initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Security Plans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the security level that matches your organization's needs and risk profile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map(_(plan, index) => (
              <motion.div,
key={plan.plan}
                initial={_{ opacity: 0, y: 20}}
                whileInView={_{ opacity: 1, y: 0}}
                transition={_{ duration: 0.6, delay: index * 0.1}}
                className={_`relative bg-slate-50 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                )}
                ;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.plan}</h3>;
                  <div className="text-4xl font-bold text-slate-900 mb-2">;
                    {plan.price}
<<<<<<< HEAD
                    <span className="text-lg text-slate-600">{plan.period}</span>;
                  </div>;
                  <p className="text-slate-600">{plan.description}</p>;
                </div>;
;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature) => (;
                    <li key={feature} className="flex items-center space-x-3">;
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />;
                      <span className="text-slate-700">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
;
                <a;
                  href="/contact";
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105";
                >;
                  Get Started;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
;
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Future?</h2>;
            <p className="text-xl text-blue-100 mb-8">;
              Don't wait until it's too late. Protect your business with quantum-resistant cybersecurity today.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105";
              >;
                Security Assessment;
              </a>;
              <a;
                href="/contact";
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200";
              >;
                Schedule Consultation;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
;
      <EnhancedFooter />;
    </>;
  );
=======
                    <span className="text-lg text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map(_(feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a,
href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div,
initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            transition={_{ duration: 0.6}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Future?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait until it's too late. Protect your business with quantum-resistant cybersecurity today.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a,
href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Security Assessment
              </Link>
              <a,
href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}