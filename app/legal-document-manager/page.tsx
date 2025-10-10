'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Search, Shield, Zap, BarChart, CheckCircle } from 'lucide-react'
const LegalDocumentManagerPage: React.FC = () => {
  const features = [
    { icon: FileText, title: 'Document Management', description: 'Organized storage and management of legal documents with smart categorization.' },
    { icon: Search, title: 'AI Document Search', description: 'Powerful AI-powered search across all legal documents and contracts.' },
    { icon: Shield, title: 'Compliance Tracking', description: 'Automated compliance monitoring and regulatory requirement tracking.' },
    { icon: Zap, title: 'Contract Analysis', description: 'AI-powered contract analysis and risk assessment.' },
    { icon: BarChart, title: 'Legal Analytics', description: 'Comprehensive analytics on legal matters and case outcomes.' },
    { icon: CheckCircle, title: 'Version Control', description: 'Complete version control and audit trail for all legal documents.' }
  ]
  return (
    <React> </React><Helmet> </Helmet><title>Legal Document Manager | Zion Tech Group - Intelligent Legal Document Management</title>
        <meta> </meta><meta> </meta></Helmet>
      <div> </div><section> </section><div> </div><div> </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Legal Document Manager</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Streamline legal document management with AI-powered tools.</p>
            </div>
            <div>{features.map((feature, index) => (
                </div><div> </div><div> </div><feature> </feature></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}
export default LegalDocumentManagerPage