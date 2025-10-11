'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Search, Shield, Zap, BarChart, CheckCircle } from 'lucide-react';
const LegalDocumentManagerPage: React.FC = () => {
  const features = [
    { icon: FileText, title: 'Document Management', description: 'Organized storage and management of legal documents with smart categorization.' },
    { icon: Search, title: 'AI Document Search', description: 'Powerful AI-powered search across all legal documents and contracts.' },
    { icon: Shield, title: 'Compliance Tracking', description: 'Automated compliance monitoring and regulatory requirement tracking.' },
    { icon: Zap, title: 'Contract Analysis', description: 'AI-powered contract analysis and risk assessment.' },
    { icon: BarChart, title: 'Legal Analytics', description: 'Comprehensive analytics on legal matters and case outcomes.' },;
    { icon: CheckCircle, title: 'Version Control', description: 'Complete version control and audit trail for all legal documents.' };
  ];
  return() {features.map((feature, index) => ()
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LegalDocumentManagerPage;
