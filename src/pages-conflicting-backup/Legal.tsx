import React from "react"
import { Link   } from "react-router-dom";
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import {
  FileText;
  Shield,
  Lock,
  Eye,
  Scale,
  CheckCircle;
  ArrowRight;
  BookOpen;
  UserCheck;
  Globe;
  Database;
  Server;
  Mail;
  Phone;
}
}
 } from "lucide-react";
const,
  Lega: l: React.FC = () () => {
  const legalDocuments = [
  {
  titl,
  e: 'Terms of Service',descripti,
  o: n: 'Our terms and conditions for using Zion Tech Group services',hr,
  e: f: '/terms',ic,
  o: n: FileText,catego,
  r: y: 'Service Terms'
},
  {
  tit,
  l: e: 'Privacy Policy',descripti,
  o: n: 'How we collect, use, and protect your personal information'
      hr,
  e: f: '/privacy',ic,
  o: n: Shield,catego,
  r: y: 'Data Protection'
},
  {
  tit,
  l: e: 'Cookie Policy',descripti,
  o: n: 'Information about cookies and how we use them',hr,
  e: f: '/cookies',ic,
  o: n: Lock,catego,
  r: y: 'Data Protection'
},
  {
  tit,
  l: e: 'Data Processing Agreement',descripti,
  o: n: 'Terms for processing personal data on behalf of customers',hr,
  e: f: '/data-processing-agreement',ic,
  o: n: Database,catego,
  r: y: 'Data Protection'
},
  {
  tit,
  l: e: 'Service Level Agreement',descripti,
  o: n: 'Our commitment to service quality and availability',hr,
  e: f: '/sla',ic,
  o: n: CheckCircle,catego,
  r: y: 'Service Terms'
},
  {
  tit,
  l: e: 'Acceptable Use Policy',descripti,
  o: n: 'Guidelines for acceptable use of our services',hr,
  e: f: '/acceptable-use',ic,
  o: n: UserCheck,catego,
  r: y: 'Service Terms'
},
  ]
  const legalCategories = [
  {
  na,
  m: e: 'Service Terms',descripti,
  o: n: 'Terms and conditions for using our services',ic,
  o: n: FileText,col,
  o: r: 'from-blue-500 to-cyan-500'
},
  {
  na,
  m: e: 'Data Protection',descripti,
  o: n: 'Privacy and data handling policies',ic,
  o: n: Shield,col,
  o: r: 'from-green-500 to-emerald-500'
},
  {
  na,
  m: e: 'Compliance',descripti,
  o: n: 'Regulatory and industry compliance documents',ic,
  o: n: Scale,col,
  o: r: 'from-purple-500 to-pink-500'
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Legal & Privacy - Zion Tech Group"
        description="Access all legal documents, privacy policies, and terms of service for Zion Tech Group. Stay informed about your rights and our commitments."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive py-20 relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Legal & Privacy;
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access all legal documents, privacy policies, and terms of service. 
              We believe in transparency and protecting your rights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <Shield className="w-5 h-5" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>Regular Updates</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Eye className="w-5 h-5" />
                <span>Transparent</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Categories */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Legal Document Categories;
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our legal documents are organized into clear categories to help you find what you need quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 mb-16">
            {legalCategories.map((category, index) => (
  <motion.div;
                key={category.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600/50,
  hove: r: border-slate-500/50 transition-all duration-300 hove,
  r:scale-105";"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                <p className="text-gray-300">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Documents */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              All Legal Documents;
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Browse and download all our legal documents, policies, and agreements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {legalDocuments.map((document, index) => (
  <motion.div;
                key={document.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600/50,
  hove: r: border-cyan-500/50 transition-all duration-300 hove,
  r:scale-105 group";"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <document.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                    {document.category},
  }
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hov,
  e: r:text-cyan-400 transition-colors">
                  {document.title},
  }
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {document.description},
  }
                </p>
                
                <Link;
                  to={document.href},
  }
                  className="className="inline-flex items-center gap-2 text-cyan-400,
  hove: r: text-cyan-300 transition-colors group/link";"
                >
                  <span className="text-sm font-medium">View Document</span>
                  <ArrowRight className="w-4 h-4 group-hover/lin,
  k:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */},
  }
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <div className="grid grid-cols-1,
  l: g: grid-cols-2 gap-12 items-center">
            <motion.div;
              initial={ opacit,
  y: 0, x: -20 },
  }
              whileInView={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
              viewport={ on,
  c: e: true },
  }
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Your Rights & Our Commitments;
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Right to Access</h4>
                    <p className="text-gray-300 text-sm">Request access to your personal data at any time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Right to Rectification</h4>
                    <p className="text-gray-300 text-sm">Correct inaccurate or incomplete personal data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Right to Erasure</h4>
                    <p className="text-gray-300 text-sm">Request deletion of your personal data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Data Portability</h4>
                    <p className="text-gray-300 text-sm">Receive your data in a structured format</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div;
              initial={ opaci,
  t: y: 0, x: 20 },
  }
              whileInView={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500/50";"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Need Legal Assistance?</h3>
              <p className="text-gray-300 mb-6">
                If you have questions about our legal documents or need clarification on any terms;
                our legal team is here to help.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>legal@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
              </div>
              <Link;
                to="/contact"
                className="className="inline-flex items-center gap-2 mt-6 text-cyan-400,
  hove: r:text-cyan-300 transition-colors";"
              >
                <span>Contact Legal Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-16">
        <div className="container-responsive text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="max-w-3xl mx-auto";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Informed About Legal Updates;
            </h2>
            <p className="text-gray-300 mb-8">
              We regularly update our legal documents to ensure compliance and transparency. 
              Subscribe to receive notifications about important changes.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500,
  hove: r:from-cyan-600,
  hove: r:to-blue-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300,
  hove: r:scale-105";"
              >
                <span>Contact Legal Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link;
                to="/privacy"
                className="className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-400,
  hove: r:bg-cyan-500 hove,
  r:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300";"
              >
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Legal;