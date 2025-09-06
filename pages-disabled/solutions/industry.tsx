import * as React from 'react';
import MainLayout from '../../components/layout/MainLayout';''
import Link from 'next/link';
import {
  // TODO: Implement
}
  BarChart3, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Building,
  Heart,
  ShoppingCart,
  Factory,
  GraduationCap,
  Home,
  Award,
  Target,
  Globe;'
} from 'lucide-react';
const industries = [
  {'
    name: "Healthcare",
    icon: Heart,"
    description: "HIPAA-compliant solutions for healthcare providers, hospitals, and medical practices.",]"
    solutions: ["Telemedicine Platforms", "Electronic Health Records", "Patient Management", "Medical Billing"],""
    compliance: ["HIPAA", "FDA", "HITECH"],""
    clients: "30+ Healthcare Organizations""
  },
  {"
    name: "Financial Services",
    icon: BarChart3,"
    description: "Secure financial technology solutions for banks, insurance, and fintech companies."
    solutions: ["Banking Platforms", "Payment Processing", "Risk Management", "Compliance Tools"],""
    compliance: ["PCI DSS", "SOX", "Basel III"],""
    clients: "25+ Financial Institutions""
  },
  {"
    name: "E-commerce",
    icon: ShoppingCart,"
    description: "Scalable online retail platforms and marketplace solutions for businesses of all sizes."
    solutions: ["E-commerce Platforms", "Marketplace Solutions", "Inventory Management", "Order Processing"],""
    compliance: ["PCI DSS", "GDPR", "CCPA"],""
    clients: "50+ E-commerce Businesses""
  },
  {"
    name: "Manufacturing",
    icon: Factory,"
    description: "IoT and automation solutions for industrial and manufacturing companies."
    solutions: ["IoT Monitoring", "Supply Chain Management", "Quality Control", "Predictive Maintenance"],""
    compliance: ["ISO 9001", "ISO 14001", "OSHA"],""
    clients: "20+ Manufacturing Companies""
  },
  {"
    name: "Education",
    icon: GraduationCap,"
    description: "Learning management systems and educational technology solutions for institutions."
    solutions: ["LMS Platforms", "Student Information Systems", "Online Learning", "Assessment Tools"],""
    compliance: ["FERPA", "COPPA", "ADA"],""
    clients: "40+ Educational Institutions""
  },
  {"
    name: "Real Estate",
    icon: Home,"
    description: "Property management and listing platforms for real estate professionals and companies."
    solutions: ["Property Management", "Listing Platforms", "CRM Systems", "Analytics Tools"],""
    compliance: ["Fair Housing Act", "RESPA", "State Regulations"],""
    clients: "35+ Real Estate Companies""
  }
];

const complianceStandards = []
  { name: "HIPAA", description: "Healthcare data protection and privacy" },
  { name: "PCI DSS", description: "Payment card industry security standards" },
  { name: "SOX", description: "Sarbanes-Oxley financial reporting compliance" },
  { name: "GDPR", description: "General Data Protection Regulation" },
  { name: "FERPA", description: "Family Educational Rights and Privacy Act" },
  { name: "ISO 27001", description: "Information security management" }];
];

const process = [
  {"
    step: "01"
    title: "Industry Analysis"
    description: "Deep dive into your industry requirements, regulations, and best practices.""
  },
  {"
    step: "02"
    title: "Compliance Assessment"
    description: "Evaluate current compliance status and identify requirements for your industry.""
  },
  {"
    step: "03"
    title: "Solution Design"
    description: "Design industry-specific solutions that meet regulatory and business requirements.""
  },
  {"
    step: "04"
    title: "Implementation & Testing"
    description: "Build, test, and deploy solutions with industry-specific validation and compliance checks.""
  }]
];

const caseStudies = [
  {"
    industry: "Healthcare"
    company: "Regional Medical Center"
    challenge: "Needed HIPAA-compliant telemedicine platform for remote patient consultations"
    solution: "Built secure video consultation platform with integrated EHR and billing"
    results: "50% increase in patient reach, 100% HIPAA compliance, $2M cost savings""
  },
  {"
    industry: "Financial Services"
    company: "Community Credit Union"
    challenge: "Required secure online banking platform with fraud detection capabilities"
    solution: "Developed comprehensive banking platform with AI-powered fraud detection"
    results: "40% reduction in fraud, 60% increase in online transactions, PCI DSS certified""
  },
  {"
    industry: "E-commerce"
    company: "Global Retail Chain"
    challenge: "Needed scalable marketplace platform for multiple vendors and international sales"
    solution: "Built multi-vendor marketplace with international payment processing and tax compliance"
    results: "300% increase in vendor participation, 200% revenue growth, 99.9% uptime""
  }]
];

export default function IndustrySolutionsPage() {
  return (
    <MainLayout"
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for specific industries with deep domain expertise and compliance requirements."
    >
</$1>
      <div className="min-h-screen bg-gray-50">"
</div>
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">"
</section>
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center max-w-4xl mx-auto"
            >
</motion>"
              <h1 className="text-4xl md: text-6xl font-bold mb-6">"
</h1>
                <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">"
</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">"
</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">"
</Link>
                </$1>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20">"
</section>
          <div className="container mx-auto px-4">"
</div>
            <motion.div,"
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>
                  <motion.div,
                    key={index}"
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
</motion>"
                    <div className="flex items-center mb-4">"
</div>
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">"
</div>
                        <IconComponent className="w-8 h-8 text-white" />"
</IconComponent>
                      </div>
                      <div>
</div>
                        <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                        <p className="text-sm text-gray-600">{industry.clients}</p>
                      </div>
                    </div>
                    "
                    <p className="text-gray-600 mb-6 leading-relaxed">"
</p>
                    </p>
"
                    <div className="mb-6">"
</div>
                      <h4 className="font-semibold text-gray-900 mb-3">Solutions:</h4>""
                      <ul className="space-y-1">"
</ul>"
                          <li key={idx} className="flex items-center text-sm text-gray-600">"
</li>"
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
</CheckCircle>
                          </li>
                      </ul>
                    </div>
"
                    <div className="mb-6">"
</div>
                      <h4 className="font-semibold text-gray-900 mb-3">Compliance:</h4>""
                      <div className="flex flex-wrap gap-2">"
</div>
                          <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">"
</span>
                          </span>
                      </div>
                    </div>

                    <Link"
                      href="/contact"
                      className="inline-flex items-center text-indigo-600 hover: text-indigo-700 font-semibold group-hover:text-pink-600 transition-colors"
                    >
</Link>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />"
</ArrowRight>
                    </Link>
                  </motion.div>)
                ),
              })}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">"
</section>
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
</div>
                <motion.div,
                  key={index}"
                  className="bg-gray-50 p-6 rounded-lg hover:bg-indigo-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
</motion>"
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.name}</h3>
                  <p className="text-gray-600 text-sm">{standard.description}</p>
                </motion.div>
              ))};
            </div>
          </div>
        </section>
        <section className="py-20">"
</section>
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                <motion.div,
                  key={index}"
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
</motion>"
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">"
</h3>
                  </h3>
                  <p className="text-gray-600">"
</p>
                  </p>
                </motion.div>
              ))};
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">"
</section>
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>
                <motion.div,
                  key={index}"
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
</motion>"
                  <div className="mb-4">"
</div>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">"
</span>
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-3">{study.company}</h3>
                  </div>
                  "
                  <div className="mb-4">"
</div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>""
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  "
                  <div className="mb-4">"
</div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>""
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
</div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>""
                    <p className="text-green-600 text-sm font-semibold">{study.results}</p>
                  </div>
                </motion.div>
              ))};
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-pink-600 text-white">"
</section>
          <div className="container mx-auto px-4 text-center">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">"
</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">"
</Link>
                </$1>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </$1>
}