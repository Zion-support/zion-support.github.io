import React from 'react',;
import Head from 'next/head',;
import { motion } from 'framer-motion',;
import { Scale, CheckCircle, Globe, Shield, FileText, Users, Mail, Phone, MapPin } from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;
;
export default function Compliance() {;
  const complianceFrameworks = [;
    {;
      id:'soc2',;
      title:'SOC 2 Type II',;
      icon:Shield,,
  description:'Annual audits of security, availability, and confidentiality controls',;
      details:[;
        'Independent third-party auditingSecurity controls assessment',;
        'Availability and processing integrityConfidentiality safeguards',;
        'Annual compliance reporting';']
      ];
    },;
      id:'iso27001',;
      title:'ISO 27001',;
      icon:Scale,,
  description:'International standard for information security management',;
      details:[;
      icon:Scale,;
      description:'International standard for information security management',;
pr-12325
        'Information security management system (ISMS)Risk assessment and management',;
        'Security policy implementationContinuous improvement processes',;
        'Regular certification audits';']
      id:'gdpr',;
      title:'GDPR Compliance',;
      icon:Globe,,
  description:'European Union data protection regulation compliance',;
      details:[;
      icon:Globe,;
      description:'European Union data protection regulation compliance',;
pr-12325
        'Data protection by design and defaultIndividual rights management',;
        'Data processing agreementsPrivacy impact assessments',;
        'Breach notification procedures';']
      id:'hipaa',;
      title:'HIPAA Compliance',;
      icon:Users,,
  description:'Healthcare information privacy and security standards',;
      details:[;
      icon:Users,;
      description:'Healthcare information privacy and security standards',;
pr-12325
        'Protected health information (PHI) safeguardsBusiness associate agreements',;
        'Access controls and audit logsWorkforce training programs',;
        'Incident response procedures';']
    }
  ],;
  const additionalCompliance = [;
    { name:'PCI DSS', description:'Payment card industry data security standard' },;
    { name:'CCPA', description:'California Consumer Privacy Act compliance' },;
    { name:'FERPA', description:'Family Educational Rights and Privacy Act' },;
    { name:'FISMA', description:'Federal Information Security Management Act' },;
    { name:'FedRAMP', description:'Federal Risk and Authorization Management Program' }']
  return (;
    <>;
      <Head>;

        <title>Compliance | Zion Tech Group</title>;
        <meta name="description" content="Learn about Zion Tech Group's regulatory compliance, certifications, and commitment to meeting industry standards and data protection requirements." />;"
</meta>"
        <meta name="viewport" content="width=device-width, initial-scale=1" />;"
        <link rel="icon" href="/favicon.ico" />;"
</link>
      ;"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"
</div>
        <EnhancedNavigation />;
"
        <section className="pt-32 pb-20 px-6">;"
</section>"
          <div className="max-w-4xl mx-auto text-center">;"
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}"
              className="flex items-center justify-center mb-6";"
            >;
</motion>"
              <Scale className="w-16 h-16 text-cyan-400" />;"

            </motion.div>;
            <motion.h1;
              transition={{ duration:0.8, delay:0.1 }}"
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6";"
</motion>
            </motion.h1>;
            <motion.p;
              transition={{ duration:0.8, delay:0.2 }}"
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed";"
            </motion.p>;
          </div>;
        </section>;"
        <section className="py-20 px-6">;"
          <div className="max-w-6xl mx-auto">;"
              className="text-center mb-16";"
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Compliance Program</h2>;""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;"
</p>
              </p>;
            {/* Main Compliance Frameworks */}"
            <div className="grid md:grid-cols-2 gap-8 mb-16">;"
                  key={framework.id}
                  transition={{ duration:0.8, delay:index * 0.1 }}"
                  className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300";"
                  <div className="flex items-center mb-6">;"
</div>"
                    <framework.icon className="w-8 h-8 text-cyan-400 mr-4" />;"
</framework>
                    <div>;
                      <h3 className="text-2xl font-bold text-white">{framework.title}</h3>;""
                      <p className="text-gray-400 mt-1">{framework.description}</p>;"
                  </div>;"
                  <ul className="space-y-3">;"
</ul>"
                      <li key={detailIndex} className="flex items-start">;"
</li>"
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />;"
                        <span className="text-gray-300 leading-relaxed">{detail}</span>;"
                      </li>;
                  </ul>;
                </motion.div>;)
              ))}
              transition={{ duration:0.8, delay:0.5 }}"
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16";"
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Additional Compliance Standards</h3>;""
              <div className="grid md:grid-cols-3 gap-6">;"
                    key={standard.name}
                    initial={{ opacity:0, scale:0.9 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{ duration:0.5, delay:index * 0.1 }}"
                    className="text-center p-4 bg-slate-800/50 rounded-xl border border-white/10";"
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />;"
                    <h4 className="text-white font-semibold mb-2">{standard.name}</h4>;""
                    <p className="text-gray-300 text-sm">{standard.description}</p>;"
            {/* Compliance Process */}
              transition={{ duration:0.8, delay:0.6 }}"
              className="mb-16";"
              <h3 className="text-3xl font-bold text-white mb-6">Our Compliance Process</h3>;""
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">;"
                <div className="grid md:grid-cols-4 gap-6">;"
                  <div className="text-center">;"
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">;"
                      <FileText className="w-8 h-8 text-cyan-400" />;"

                    <h4 className="text-white font-semibold mb-2">Assessment</h4>;""
                    <p className="text-gray-300 text-sm">Regular compliance assessments and gap analysis</p>;"
                      <Shield className="w-8 h-8 text-cyan-400" />;"

                    <h4 className="text-white font-semibold mb-2">Implementation</h4>;""
                    <p className="text-gray-300 text-sm">Control implementation and policy enforcement</p>;"
                      <Scale className="w-8 h-8 text-cyan-400" />;"

                    <h4 className="text-white font-semibold mb-2">Audit</h4>;""
                    <p className="text-gray-300 text-sm">Independent third-party audits and validation</p>;"
                      <CheckCircle className="w-8 h-8 text-cyan-400" />;"

                    <h4 className="text-white font-semibold mb-2">Monitoring</h4>;""
                    <p className="text-gray-300 text-sm">Continuous monitoring and improvement</p>;"
            {/* Data Protection Rights */}
              transition={{ duration:0.8, delay:0.7 }}"
              <h3 className="text-3xl font-bold text-white mb-6">Your Data Protection Rights</h3>;""
                <p className="text-gray-300 leading-relaxed mb-6">;"
                </p>;"
                <div className="grid md:grid-cols-2 gap-8">;"
                    <h4 className="text-white font-semibold mb-4 flex items-center">;"
</h4>"
                      <Users className="w-5 h-5 text-cyan-400 mr-2" />;"

                    </h4>;"
                    <ul className="space-y-2 text-gray-300">;"
</ul>
                      <Shield className="w-5 h-5 text-cyan-400 mr-2" />;"

            {/* International Compliance */}
              transition={{ duration:0.8, delay:0.8 }}"
              <h3 className="text-3xl font-bold text-white mb-6">Global Compliance Coverage</h3>;""
                <div className="grid md:grid-cols-3 gap-8">;"
                    <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />;"
                    <h4 className="text-white font-semibold mb-2">European Union</h4>;""
                    <p className="text-gray-300 text-sm">GDPR, Data Protection Act, Digital Services Act</p>;"
                    <h4 className="text-white font-semibold mb-2">United States</h4>;""
                    <p className="text-gray-300 text-sm">CCPA, HIPAA, SOX, FISMA, FedRAMP</p>;"
                    <h4 className="text-white font-semibold mb-2">Asia-Pacific</h4>;""
                    <p className="text-gray-300 text-sm">PIPEDA, Privacy Act, PDPA</p>;"
            {/* Contact Compliance Team */}
              transition={{ duration:0.8, delay:0.9 }}"
              className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20";"
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">;"
</h3>"
                <Scale className="w-8 h-8 text-purple-400 mr-4" />;"

              </h3>;"
              <p className="text-gray-300 mb-6 leading-relaxed">;"
                For questions about our compliance programs or to exercise your data protection rights:</p>;"
                <div className="flex items-center">;"
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />;"

                    <p className="text-white font-semibold">Compliance Email</p>;""
                    <p className="text-gray-300">compliance@ziontechgroup.com</p>;"
                  <Users className="w-5 h-5 text-purple-400 mr-3" />;"

                    <p className="text-white font-semibold">Data Protection Officer</p>;""
                    <p className="text-gray-300">dpo@ziontechgroup.com</p>;"
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />;"

                    <p className="text-white font-semibold">Compliance Hotline</p>;""
                    <p className="text-gray-300">+1 (555) 123-4567</p>;"
        </section>;
        <EnhancedFooter />;

    </>;
  );
}"