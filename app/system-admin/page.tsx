'use client';
import React from 'react';
import { Server, Shield, Monitor, Settings, Users, Database, Cloud, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const SystemAdminPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Complete server administration including setup, monitoring, and maintenance'
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Database optimization, backup, recovery, and performance tuning'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Cloud migration, management, and optimization across all major platforms'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security implementation and monitoring'
    },
    {
      icon: Monitor,
      title: 'System Monitoring',
      description: '24/7 monitoring with proactive issue detection and resolution'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'User account management, permissions, and access control'
    }
  ];

  const features = [
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock system monitoring with instant alerts',
      benefits: ['99.9% uptime guarantee', 'Proactive issue detection', 'Instant notifications']
    },
    {
      title: 'Automated Backups',
      description: 'Comprehensive backup solutions with automated scheduling',
      benefits: ['Daily automated backups', 'Multiple backup locations', 'Quick recovery options']
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous system optimization for maximum performance',
      benefits: ['Regular performance audits', 'Resource optimization', 'Speed improvements']
    },
    {
      title: 'Security Hardening',
      description: 'Advanced security measures to protect your infrastructure',
      benefits: ['Firewall configuration', 'Intrusion detection', 'Vulnerability scanning']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Reduced Downtime',
      description: 'Minimize system downtime with proactive monitoring and maintenance'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your systems with enterprise-grade security measures'
    },
    {
      icon: Settings,
      title: 'Optimized Performance',
      description: 'Keep your systems running at peak efficiency'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to certified system administrators and IT experts'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">*</div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/</div>}</div>
     <//div> <//div><div className="container mx-auto px-4 py-16">
       </div className="container mx-auto px-4 py-16"> </div className="container mx-auto px-4 py-16"><div className="text-center mb-16">
        </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h1 className="text-5xl font-bold text-white mb-6">
            Syste</h1 className="text-5xl font-bold text-white mb-6">m</h1 className="text-5xl font-bold text-white mb-6"> </h1><span className="text-cyan-400">Administrati</span className="text-cyan-400">o</span className="text-cyan-400">n</span><p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Professional system administration services to keep your infrastructure running smoothl</p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">y</p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">.</p>
            Our certified administrators provide 24/7 monitoring, maintenance, and optimization for your critical system<//p>s<//p>.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Get Start</Phone className="w-5 h-5 mr-2" >e</Phone className="w-5 h-5 mr-2" >d</Phone>
          <//Phone> <//Phone> </Phone>
           <//Phone> <//Phone><Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ><Settings className="w-5 h-5 mr-2" >Free Assessme</Settings className="w-5 h-5 mr-2" >n</Settings className="w-5 h-5 mr-2" >t</Settings>
          <//Settings> <//Settings> </Settings>
        <//Settings> <//Settings> </div>
      <//div> <//div> </div>

        {/* Services Section */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Our</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Servic</span className="text-cyan-400">e</span className="text-cyan-400">s</span><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service, index) =</div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">></div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
               </div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              > </div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ><div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                </div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"> </div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"> </div><service.icon className="w-6 h-6 text-white" />
               </service.icon className="w-6 h-6 text-white" /> </service.icon className="w-6 h-6 text-white" /><h3 className="text-xl font-semibold text-white mb-3">{service.title</h3 className="text-xl font-semibold text-white mb-3">}</h3 className="text-xl font-semibold text-white mb-3"><p className="text-gray-300">{service.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Features Section */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Key</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Featur</span className="text-cyan-400">e</span className="text-cyan-400">s</span><div className="grid md:grid-cols-2 gap-8">{features.map((feature, index) =</div className="grid md:grid-cols-2 gap-8">></div className="grid md:grid-cols-2 gap-8"> </div>(</div>
             <//div> <//div><div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
              </div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              > </div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              > </div><h3 className="text-2xl font-semibold text-white mb-4">{feature.title</h3 className="text-2xl font-semibold text-white mb-4">}</h3 className="text-2xl font-semibold text-white mb-4"><p className="text-gray-300 mb-6">{feature.description</p className="text-gray-300 mb-6">}</p className="text-gray-300 mb-6"><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                   <//ul> <//ul><li key={benefitIndex} className="flex items-center text-cyan-400">
                     </li key={benefitIndex} className="flex items-center text-cyan-400"> </li key={benefitIndex} className="flex items-center text-cyan-400"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >{benefi</CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >t</CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >}</CheckCircle>
                  <//CheckCircle> <//CheckCircle> </CheckCircle>
                  ))}
              <//CheckCircle> <//CheckCircle> </ul>
            <//ul> <//ul> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Benefits Section */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">System Administrat</span className="text-cyan-400">i</span className="text-cyan-400">o</span>n</span>?
         <//span> <//span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) =</div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">></div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                </div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"> </div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"> </div><benefit.icon className="w-8 h-8 text-white" />
               </benefit.icon className="w-8 h-8 text-white" /> </benefit.icon className="w-8 h-8 text-white" /><h3 className="text-xl font-semibold text-white mb-3">{benefit.title</h3 className="text-xl font-semibold text-white mb-3">}</h3 className="text-xl font-semibold text-white mb-3"><p className="text-gray-300">{benefit.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Process Section */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Our</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Proc</span className="text-cyan-400">e</span className="text-cyan-400">s</span>s</span>
        <//span> <//span> </h2>
         <//h2> <//h2><div className="grid md:grid-cols-4 gap-8">
           </div className="grid md:grid-cols-4 gap-8"> </div className="grid md:grid-cols-4 gap-8"><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
              </div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"> </div><span className="text-2xl font-bold text-white">1</span><h3 className="text-xl font-semibold text-white mb-3">Assessmen</h3 className="text-xl font-semibold text-white mb-3">t</h3 className="text-xl font-semibold text-white mb-3"><p className="text-gray-300">Comprehensive analysis of your current infrastructure and nee</p className="text-gray-300">d</p className="text-gray-300">s</p>
          <//p> <//p> </div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
              </div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"> </div><span className="text-2xl font-bold text-white">2</span><h3 className="text-xl font-semibold text-white mb-3">Plannin</h3 className="text-xl font-semibold text-white mb-3">g</h3 className="text-xl font-semibold text-white mb-3"><p className="text-gray-300">Develop a customized administration strategy and timeli</p className="text-gray-300">n</p className="text-gray-300">e</p>
          <//p> <//p> </div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
              </div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"> </div><span className="text-2xl font-bold text-white">3</span><h3 className="text-xl font-semibold text-white mb-3">Implementatio</h3 className="text-xl font-semibold text-white mb-3">n</h3 className="text-xl font-semibold text-white mb-3"><p className="text-gray-300">Deploy monitoring tools and establish administration protoco</p className="text-gray-300">l</p className="text-gray-300">s</p>
          <//p> <//p> </div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
              </div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"> </div><span className="text-2xl font-bold text-white">4</span><h3 className="text-xl font-semibold text-white mb-3">Ongoing Suppor</h3 className="text-xl font-semibold text-white mb-3">t</h3 className="text-xl font-semibold text-white mb-3"><p className="text-gray-300">Continuous monitoring, maintenance, and optimizati</p className="text-gray-300">o</p className="text-gray-300">n</p>
          <//p> <//p> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Emergency Support */}
       <//div> <//div><div className="mb-16">
         </div className="mb-16"> </div className="mb-16"><div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/30">
           </div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/30"> </div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/30"><div className="flex items-center mb-4">
            </div className="flex items-center mb-4"> </div className="flex items-center mb-4"> </div><AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
             </AlertTriangle className="w-8 h-8 text-red-400 mr-3" /> </AlertTriangle className="w-8 h-8 text-red-400 mr-3" /><h2 className="text-2xl font-bold text-white">24/7 Emergency Suppo</h2 className="text-2xl font-bold text-white">r</h2 className="text-2xl font-bold text-white">t</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">Critical system issues can't wait. Our emergency support team is available around the clock to resolve urgent problems and minimize downtim</p className="text-gray-300 mb-6">e</p className="text-gray-300 mb-6">.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4">
            </div className="flex flex-col sm:flex-row gap-4"> </div className="flex flex-col sm:flex-row gap-4"> </div><a
                href="tel:+13024640950"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
              >
               </a
                href="tel:+13024640950"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
              > </a
                href="tel:+13024640950"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
              ><Phone className="w-5 h-5 mr-2" >Emergency Hotli</Phone className="w-5 h-5 mr-2" >n</Phone className="w-5 h-5 mr-2" >e</Phone>
            <//Phone> <//Phone> </Phone>
             <//Phone> <//Phone><a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-gray-600 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
              >
               </a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-gray-600 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
              > </a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-gray-600 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
              ><Mail className="w-5 h-5 mr-2" >Emergency Ema</Mail className="w-5 h-5 mr-2" >i</Mail className="w-5 h-5 mr-2" >l</Mail>
            <//Mail> <//Mail> </Mail>
          <//Mail> <//Mail> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* CTA Section */}
       <//div> <//div><div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
        </div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"> </div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"> </div><h2 className="text-3xl font-bold text-white mb-4">Secure Your Infrastructure Tod</h2 className="text-3xl font-bold text-white mb-4">a</h2 className="text-3xl font-bold text-white mb-4">y</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Don't wait for system failures. Let our expert administrators keep your infrastructure running smoothly and securel</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">y</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><ArrowRight className="w-5 h-5 mr-2" >Get Started N</ArrowRight className="w-5 h-5 mr-2" >o</ArrowRight className="w-5 h-5 mr-2" >w</ArrowRight>
          <//ArrowRight> <//ArrowRight> </ArrowRight>
           <//ArrowRight> <//ArrowRight><Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ><Settings className="w-5 h-5 mr-2" >View Prici</Settings className="w-5 h-5 mr-2" >n</Settings className="w-5 h-5 mr-2" >g</Settings>
          <//Settings> <//Settings> </Settings>
        <//Settings> <//Settings> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>
  <//div> <//div> </div>
  );
};

export default SystemAdminPage<//div>;<//div>