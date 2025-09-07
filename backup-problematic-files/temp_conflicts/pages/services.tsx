import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ;
  Brain, Shield, Rocket, Cpu, Database, Atom, ;
  Users, Target, Star, Zap, Globe, TrendingUp,;
  CheckCircle, ArrowRight, ExternalLink, Sparkles;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
;
export default function ServicesPage() {;
  const mainServices = [;
    {;
      icon: Brain;,;
      title: "AI Business Intelligence";,,
  description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.";,;
      features:[;
        "Real-time data processing",;
        "Predictive analytics",;
        "Custom AI models",;
        "Interactive dashboards",;
        "Automated reporting";
      ],;
      price: "$499/month";,;
      color: "from-purple-500 to-pink-500";,;
      href:"/ai-business-intelligence";
    },;
    {;
      icon: Shield;,;
      title: "Quantum Cybersecurity";,,
  description: "Future-proof your security with quantum-resistant encryption and AI-powered threat detection.";,;
      features:[;
        "Quantum-resistant encryption",;
        "AI threat detection",;
        "Zero-trust architecture",;
        "24/7 monitoring",;
        "Compliance ready";
      ],;
      price: "$799/month";,;
      color: "from-red-500 to-orange-500";,;
      href:"/quantum-cybersecurity";
    },;
    {;
      icon: Users;,;
      title: "AI Customer Experience";,,
  description: "Deliver personalized customer experiences at scale with intelligent automation and insights.";,;
      features:[;
        "Customer journey mapping",;
        "AI personalization",;
        "Sentiment analysis",;
        "Automated support",;
        "Behavioral insights";
      ],;
      price: "$399/month";,;
      color: "from-green-500 to-teal-500";,;
      href:"/ai-customer-experience";
    },;
    {;
      icon: Database;,;
      title: "Edge Computing Orchestration";,,
  description: "Deploy and manage applications at the edge with intelligent orchestration and optimization.";,;
      features:[;
        "Edge node management",;
        "IoT device management",;
        "Real-time monitoring",;
        "Load balancing",;
        "Auto-scaling";
      ],;
      price: "$349/month";,;
      color: "from-yellow-500 to-orange-500";,;
      href:"/edge-computing-orchestration";
    },;
    {;
      icon: Rocket;,;
      title: "Space Technology Innovation";,,
  description: "Accelerate space exploration with cutting-edge AI and quantum technology solutions.";,;
      features:[;
        "Satellite management",;
        "AI mission planning",;
        "Quantum communication",;
        "Resource optimization",;
        "Risk assessment";
      ],;
      price: "$2;,499/month",;
      color: "from-violet-500 to-purple-500";,;
      href:"/space-technology";
    },;
    {;
      icon: Atom;,;
      title: "Neural Interface Development";,,
  description: "Build the future of human-computer interaction with advanced neural interfaces.";,;
      features:[;
        "BCI development tools",;
        "Neural signal processing",;
        "AI pattern recognition",;
        "Real-time analysis",;
        "Custom algorithms";
      ],;
      price: "$899/month";,;
      color: "from-pink-500 to-rose-500";,;
      href:"/neural-interface";
      title: "AI Business Intelligence";,;""
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.";,;"
      features:[;"
        "Real-time data processing",;""
        "Predictive analytics",;""
        "Custom AI models",;""
        "Interactive dashboards",;""
        "Automated reporting";"]
      ],;"
      price: "$499/month";,;""
      color: "from-purple-500 to-pink-500";,;""
      href:"/ai-business-intelligence";"
    },;
      icon: Shield;,;"
      title: "Quantum Cybersecurity";,;""
      description: "Future-proof your security with quantum-resistant encryption and AI-powered threat detection.";,;"
        "Quantum-resistant encryption",;""
        "AI threat detection",;""
        "Zero-trust architecture",;""
        "24/7 monitoring",;""
        "Compliance ready";"]
      price: "$799/month";,;""
      color: "from-red-500 to-orange-500";,;""
      href:"/quantum-cybersecurity";"
      icon: Users;,;"
      title: "AI Customer Experience";,;""
      description: "Deliver personalized customer experiences at scale with intelligent automation and insights.";,;"
        "Customer journey mapping",;""
        "AI personalization",;""
        "Sentiment analysis",;""
        "Automated support",;""
        "Behavioral insights";"]
      price: "$399/month";,;""
      color: "from-green-500 to-teal-500";,;""
      href:"/ai-customer-experience";"
      icon: Database;,;"
      title: "Edge Computing Orchestration";,;""
      description: "Deploy and manage applications at the edge with intelligent orchestration and optimization.";,;"
        "Edge node management",;""
        "IoT device management",;""
        "Real-time monitoring",;""
        "Load balancing",;""
        "Auto-scaling";"]
      price: "$349/month";,;""
      color: "from-yellow-500 to-orange-500";,;""
      href:"/edge-computing-orchestration";"
      icon: Rocket;,;"
      title: "Space Technology Innovation";,;""
      description: "Accelerate space exploration with cutting-edge AI and quantum technology solutions.";,;"
        "Satellite management",;""
        "AI mission planning",;""
        "Quantum communication",;""
        "Resource optimization",;""
        "Risk assessment";"]
      price: "$2;,499/month",;""
      color: "from-violet-500 to-purple-500";,;""
      href:"/space-technology";"
      icon: Atom;,;"
      title: "Neural Interface Development";,;""
      description: "Build the future of human-computer interaction with advanced neural interfaces.";,;"
        "BCI development tools",;""
        "Neural signal processing",;""
        "AI pattern recognition",;""
        "Real-time analysis",;""
        "Custom algorithms";"]
      price: "$899/month";,;""
      color: "from-pink-500 to-rose-500";,;""
      href:"/neural-interface";"
pr-12325
    }
  ],;
  const specializedServices = [;
    {;
      title: "AI Autonomous Systems";,,
  description: "Build self-managing;, self-optimizing systems that adapt and evolve",;
      icon: Brain;,;
      color:"from-blue-500 to-cyan-500";
    },;
    {;
      title: "Quantum Machine Learning";,,
  description: "Leverage quantum computing for unprecedented ML performance";,;
      icon: Atom;,;
      color:"from-purple-500 to-pink-500";
    },;
    {;
      title: "AI-Powered DevOps";,,
  description: "Automate and optimize your development and deployment processes";,;
      icon: Cpu;,;
      color:"from-green-500 to-emerald-500";
    },;
    {;
      title: "Blockchain AI Integration";,,
  description: "Combine blockchain security with AI intelligence for next-gen applications";,;
      icon: Shield;,;
      color:"from-orange-500 to-red-500";
    }
  ],;
;
  const industries = [;
    "Finance & Banking",;
    "Healthcare & Life Sciences",;
    "Manufacturing & Industry 4.0",;
    "Retail & E-commerce",;
    "Energy & Utilities",;
    "Transportation & Logistics",;
    "Education & Research",;
    "Government & Defense";
  ],;
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
    {;"
      title: "AI Autonomous Systems";,;""
      description: "Build self-managing;, self-optimizing systems that adapt and evolve",;"
      icon: Brain;,;"
      color:"from-blue-500 to-cyan-500";"
      title: "Quantum Machine Learning";,;""
      description: "Leverage quantum computing for unprecedented ML performance";,;"
      color:"from-purple-500 to-pink-500";"
      title: "AI-Powered DevOps";,;""
      description: "Automate and optimize your development and deployment processes";,;"
      icon: Cpu;,;"
      color:"from-green-500 to-emerald-500";"
      title: "Blockchain AI Integration";,;""
      description: "Combine blockchain security with AI intelligence for next-gen applications";,;"
      color:"from-orange-500 to-red-500";"
    }]
  const industries = [;"
    "Finance & Banking",;""
    "Healthcare & Life Sciences",;""
    "Manufacturing & Industry 4.0",;""
    "Retail & E-commerce",;""
    "Energy & Utilities",;""
    "Transportation & Logistics",;""
    "Education & Research",;""
    "Government & Defense";"]
  return (;"
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;"
</div>
pr-12325
      <Head>;
"
        <meta name="description" content="Discover Zion Tech Group's comprehensive AI, quantum computing, and technology services. Transform your business with cutting-edge solutions." />;"
</meta>"
        <meta property="og:title" content="Zion Tech Group Services" />;"
        <meta property="og: description" content="AI;, quantum computing, and technology solutions for modern businesses." />;"
        <meta name="keywords" content="AI services, quantum computing, technology solutions, business intelligence, cybersecurity" />;"
        <link rel="canonical" href="https://ziontechgroup.com/services" />;"
</link>
      <EnhancedNavigation />;
      <section className="relative pt-32 pb-20 px-6">;"
</section>"
        <div className="max-w-6xl mx-auto text-center">;"
          <motion.div;
            initial={{ opacity: 0;, y: 30 ;}}
            animate={{ opacity: 1;, y: 0 ;}}
            transition={{ duration: 0.8 ;}}
          >;
</motion>"
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">;"
</h1>
            </h1>;"
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">;"
</p>
            </p>;
          </motion.div>;
        </div>;
      </section>;"
      <section className="py-20 px-6">;"
        <div className="max-w-6xl mx-auto">;"
            whileInView={{ opacity: 1;, y: 0 ;}}
            viewport={{ once: true ;}}"
            className="text-center mb-16";"
            <h2 className="text-4xl font-bold text-white mb-6">Core Technology Services</h2>;""
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;"
;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
                key={service.title}
                transition={{ duration: 0.8;, delay: index * 0.1 ;}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300 group";"
</motion>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`;}>;
</div>"
                  <service.icon className="w-8 h-8 text-white" />;"
</service>
                </div>;"
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>;""
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>;""
                <div className="mb-6">;"
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>;""
                  <ul className="space-y-2">;"
</ul>"
                      <li key={featureIndex} className="flex items-center space-x-2 text-slate-300 text-sm">;"
</li>"
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />;"

                        <span>{feature}</span>;
                      </li>;
                  </ul>;
                <div className="flex items-center justify-between mb-6">;"
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>;"
                  <a;
                    href={service.href}"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200";"
</a>
                    <span>Learn More</span>;"
                    <ArrowRight className="w-4 h-4" />;"

                  </a>;
                <Link;"
                  href="/contact";""
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg text-white font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2";"

                  <span>Get Started</span>;"
                  <ExternalLink className="w-4 h-4" />;"

              </motion.div>;)
            ))}
      <section className="py-20 px-6 bg-slate-900/50">;"
            <h2 className="text-4xl font-bold text-white mb-6">Specialized Solutions</h2>;""
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
                initial={{ opacity: 0;, x: index % 2 === 0 ? -30 :30 ;}}
                whileInView={{ opacity: 1;, x: 0 ;}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300";"
</motion>`;
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>;
                <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>;"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200";"

                  <span>Discuss Requirements</span>;"

            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>;""
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">;"
                key={industry}
                initial={{ opacity: 0;, y: 20 ;}}
                transition={{ duration: 0.8;, delay: index * 0.05 ;}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-slate-600/50 transition-all duration-300 group";"
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">;"
                  <Star className="w-6 h-6 text-white" />;"

                <h3 className="text-white font-semibold">{industry}</h3>;"
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>;""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;"
              transition={{ duration: 0.8;, delay: 0.1 ;}}
              className="text-center";"
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">;"
                <Sparkles className="w-10 h-10 text-white" />;"

              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>;""
              <p className="text-slate-300 leading-relaxed">;"
              transition={{ duration: 0.8;, delay: 0.2 ;}}
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">;"
                <Users className="w-10 h-10 text-white" />;"

              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>;""
              transition={{ duration: 0.8;, delay: 0.3 ;}}
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">;"
                <TrendingUp className="w-10 h-10 text-white" />;"

              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>;""
        <div className="max-w-4xl mx-auto text-center">;"
            viewport={{ once: true ;}}
            <h2 className="text-4xl font-bold text-white mb-6">;"
</h2>
            </h2>;"
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">;"
            </p>;"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105";"

                href="/case-studies";""
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10";"

      </section>;
      <EnhancedFooter />;

    </div>;"`;