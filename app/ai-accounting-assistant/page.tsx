'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, BarChart, FileText, Shield, Zap, CheckCircle } from 'lucide-react';
const AIAccountingAssistantPage: React.FC = () => {
  const features = const features = const features = [
    { icon: Calculator, title: 'Automated Bookkeeping', description: 'AI-powered automated bookkeeping and transaction categorization.' },
    { icon: BarChart, title: 'Financial Analytics', description: 'Advanced financial reporting and analytics with AI insights.' },
    { icon: FileText, title: 'Tax Preparation', description: 'Automated tax preparation and compliance management.' },
    { icon: Shield, title: 'Audit Trail', description: 'Complete audit trail and compliance tracking for financial records.' },
    { icon: Zap, title: 'Invoice Processing', description: 'Automated invoice processing and payment tracking.' },;
    { icon: CheckCircle, title: 'Compliance', description: 'Ensure compliance with accounting standards and regulations.' };
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

export default AIAccountingAssistantPage;
