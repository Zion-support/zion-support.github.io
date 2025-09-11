export const metadata = {
  title: 'Industry-Specific Solutions | Zion Tech Group',
  description:
    'Specialized micro SAAS solutions tailored for specific industries including healthcare, finance, real estate, e-commerce, and more. Industry-focused tools that understand your unique challenges.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional page solutions for your business needs.
          </p>
        </div>

        {/* Industry Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <IndustryCategory
            title="Healthcare & Medical"
            icon="🏥"
            description="HIPAA-compliant solutions for healthcare providers"
            solutions={[
              'Patient Management System',
              'Telemedicine Platform',
              'Medical Billing Automation',
              'Appointment Scheduling AI',
              'Prescription Management',
              'Health Records Analytics',
            ]}
          />
          <IndustryCategory
            title="Financial Services"
            icon="🏦"
            description="Secure financial tools with compliance focus"
            solutions={[
              'Loan Processing Automation',
              'Risk Assessment Engine',
              'Compliance Monitoring',
              'Fraud Detection System',
              'Investment Analytics',
              'Regulatory Reporting',
            ]}
          />
          <IndustryCategory
            title="Real Estate"
            icon="🏠"
            description="Property management and transaction tools"
            solutions={[
              'Property Management Suite',
              'Lead Generation System',
              'Virtual Tour Platform',
              'Transaction Management',
              'Market Analysis Tool',
              'Commission Tracker',
            ]}
          />
        </div>

        {/* Featured Industry Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Industry Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustrySolution
              title="MediCare Pro"
              description="Complete healthcare practice management with HIPAA compliance"
              industry="Healthcare"
              features={[
                'Patient portal & scheduling',
                'Electronic health records',
                'Insurance verification',
                'Billing & claims processing',
                'Telemedicine integration',
                'Compliance reporting',
              ]}
              price="$199-599/month"
              compliance="HIPAA, HITECH, SOC 2"
              useCase="Medical practices, clinics, hospitals"
              demoUrl="https://demo.ziontechgroup.com/medicare-pro"
            />
            <IndustrySolution
              title="FinanceFlow Suite"
              description="Comprehensive financial services automation platform"
              industry="Financial Services"
              features={[
                'Loan origination system',
                'Credit risk assessment',
                'Anti-money laundering',
                'Regulatory compliance',
                'Customer onboarding',
                'Fraud detection',
              ]}
              price="$299-999/month"
              compliance="PCI DSS, SOX, GDPR, CCPA"
              useCase="Banks, credit unions, fintech, lenders"
              demoUrl="https://demo.ziontechgroup.com/financeflow"
            />
            <IndustrySolution
              title="PropertyMax Pro"
              description="Advanced real estate management and marketing platform"
              industry="Real Estate"
              features={[
                'Property listing management',
                'Lead capture & nurturing',
                'Virtual tour creation',
                'Transaction tracking',
                'Market analysis tools',
                'Commission management',
              ]}
              price="$149-449/month"
              compliance="GDPR, CCPA, Fair Housing"
              useCase="Real estate agencies, brokers, property managers"
              demoUrl="https://demo.ziontechgroup.com/propertymax"
            />
            <IndustrySolution
              title="EduTech Learning"
              description="Comprehensive educational management and learning platform"
              industry="Education"
              features={[
                'Student information system',
                'Learning management system',
                'Grade management',
                'Parent communication',
                'Curriculum planning',
                'Assessment tools',
              ]}
              price="$99-299/month"
              compliance="FERPA, COPPA, GDPR"
              useCase="Schools, universities, training centers, online education"
              demoUrl="https://demo.ziontechgroup.com/edutech"
            />
            <IndustrySolution
              title="RetailOps Pro"
              description="Complete retail management and analytics platform"
              industry="Retail & E-commerce"
              features={[
                'Inventory management',
                'Point of sale system',
                'Customer analytics',
                'Marketing automation',
                'Supply chain tracking',
                'Performance analytics',
              ]}
              price="$179-579/month"
              compliance="PCI DSS, GDPR, CCPA"
              useCase="Retail stores, e-commerce, franchises, chains"
              demoUrl="https://demo.ziontechgroup.com/retailops"
            />
            <IndustrySolution
              title="LegalCase Manager"
              description="Comprehensive legal practice management system"
              industry="Legal Services"
              features={[
                'Case management',
                'Client intake automation',
                'Document management',
                'Time tracking & billing',
                'Court calendar integration',
                'Compliance tracking',
              ]}
              price="$249-749/month"
              compliance="Attorney-Client Privilege, GDPR, SOX"
              useCase="Law firms, legal departments, solo practitioners"
              demoUrl="https://demo.ziontechgroup.com/legalcase"
            />
          </div>
        </div>

        {/* Industry Compliance & Security */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Compliance & Security Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ComplianceStandard
              title="Healthcare"
              standards={['HIPAA', 'HITECH', 'SOC 2', 'HITRUST']}
              icon="🏥"
            />
            <ComplianceStandard
              title="Financial"
              standards={['PCI DSS', 'SOX', 'GDPR', 'CCPA']}
              icon="🏦"
            />
            <ComplianceStandard
              title="Education"
              standards={['FERPA', 'COPPA', 'GDPR', 'CIPA']}
              icon="🎓"
            />
            <ComplianceStandard
              title="General"
              standards={['SOC 2', 'ISO 27001', 'GDPR', 'CCPA']}
              icon="🔒"
            />
          </div>

        {/* Industry-Specific Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry-Specific Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCategory
              title="Healthcare Features"
              icon="🏥"
              features={[
                'HIPAA-compliant data storage',
                'Patient consent management',
                'Medical coding automation',
                'Insurance eligibility verification',
                'Prescription drug monitoring',
                'Telehealth integration',
              ]}
            />
            <FeatureCategory
              title="Financial Features"
              icon="💰"
              features={[
                'Real-time fraud detection',
                'Credit scoring algorithms',
                'Regulatory reporting automation',
                'Anti-money laundering checks',
                'Customer due diligence',
                'Risk assessment models',
              ]}
            />
            <FeatureCategory
              title="Real Estate Features"
              icon="🏠"
              features={[
                'MLS integration',
                'Property valuation models',
                'Lead scoring algorithms',
                'Market trend analysis',
                'Virtual tour creation',
                'Commission calculations',
              ]}
            />
          </div>
        </div>

        {/* Integration Ecosystem */}"
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry Integrations;
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IntegrationCategory"
              title="Healthcare Integrations"
              platforms={[
                'Epic',
                'Cerner',
                'Allscripts',
                'NextGen',
                'athenahealth',
              ]}
              icon="🏥"
            />
            <IntegrationCategory
              title="Financial Integrations"
              platforms={['Fiserv', 'FIS', 'Jack Henry', 'Temenos', 'Mambu']}
              icon="🏦"
            />
            <IntegrationCategory"
              title="Real Estate Integrations"
              platforms={[
                'MLS',
                'Zillow',
                'Realtor.com',
                'ShowingTime',
                'DocuSign',
              ]}
              icon="🏠"
            />
          </div>
        </div>

        {/* Pricing by Industry */}"
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry-Specific Pricing;
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryPricingPlan"
              industry="Healthcare""
              starterPrice="$199/month""
              professionalPrice="$499/month""
              enterprisePrice="$999/month"
              features={[
                'HIPAA compliance included',
                'Medical coding automation',
                'Insurance verification',
                'Telemedicine integration',
                '24/7 support',
              ]}
              icon="🏥"
            />
            <IndustryPricingPlan"
              industry="Financial Services""
              starterPrice="$299/month""
              professionalPrice="$699/month""
              enterprisePrice="$1,499/month"
              features={[
                'PCI DSS compliance',
                'Fraud detection',
                'Risk assessment',
                'Regulatory reporting',
                'Dedicated support',
              ]}
              icon="🏦"
            />
            <IndustryPricingPlan"
              industry="Real Estate""
              starterPrice="$149/month""
              professionalPrice="$399/month""
              enterprisePrice="$799/month"
              features={[
                'MLS integration',
                'Lead management',
                'Virtual tours',
                'Market analytics',
                'Commission tracking',
              ]}
              icon="🏠"
            />
          </div>
        </div>

        {/* Success Stories by Industry */}"
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry Success Stories;
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SuccessStory"
              company="Metro Medical Group""
              industry="Healthcare""
              solution="MediCare Pro""
              result="50% reduction in administrative time""
              description="Streamlined patient management and automated billing processes saved 20 hours per week."
            />
            <SuccessStory"
              company="First National Credit Union""
              industry="Financial Services""
              solution="FinanceFlow Suite""
              result="90% faster loan processing""
              description="Automated loan origination reduced processing time from 5 days to 4 hours."
            />
            <SuccessStory"
              company="Premier Realty Group""
              industry="Real Estate""
              solution="PropertyMax Pro""
              result="300% increase in lead conversion""
              description="Advanced lead scoring and nurturing increased conversion rates from 2% to 8%."
            />
          </div>
        </div>

        {/* Contact CTA */}"
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">"
          <h2 className="text-3xl font-bold mb-4">
            Ready for Industry-Specific Solutions?
          </h2>"
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get specialized micro SAAS tools designed for your industry. Our;
            solutions understand your unique challenges and compliance;
            requirements.
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a"
              href="tel:+13024640950""
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950;
            </a>
            <a"
              href="mailto:kleber@ziontechgroup.com""
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us;
            </a>
          </div>"
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>

          </div>
        </div>
      </div>
    </div>
  );

}
  title,
  icon,
  description,
  solutions,
}: {}
  title: string;
  icon: string;
  description: string;
  solutions: string[];
}) {}
  return ("
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">"
      <div className="text-3xl mb-4">{icon}</div>"
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">
        {solutions.map((solution, index) => ("
          <li key={index} className="flex items-center text-gray-600">"
            <span className="text-blue-500 mr-2">•</span>
            {solution}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndustrySolution({}
  title,
  description,
  industry,
  features,
  price,
  compliance,
  useCase,
  demoUrl,
}: {}
  title: string;
  description: string;
  industry: string;
  features: string[];
  price: string;
  compliance: string;
  useCase: string;
  demoUrl: string;
}) {}
  return ("
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">"
      <div className="flex justify-between items-start mb-4">"
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>"
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {industry}
        </span>
      </div>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <div className="mb-4">"
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
      </div>"
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => ("
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>"
      <div className="mb-4">"
        <p className="text-sm text-gray-500 mb-1">Compliance:</p>"
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
          {compliance}
        </span>
      </div>"
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>"
          <div className="font-bold text-blue-600">{price}</div>"
          <a href={demoUrl} className="text-sm text-blue-600 hover:underline">
            View Demo;
          </a>
        </div>
        <a"
          href="tel:+13024640950""
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started;
        </a>
      </div>
    </div>
  );
}

function ComplianceStandard({}
  title,
  standards,
  icon,
}: {}
  title: string;
  standards: string[];
  icon: string;
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <div className="text-2xl mb-3">{icon}</div>"
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>"
      <div className="flex flex-wrap gap-2">
        {standards.map((standard, index) => (
          <span;
            key={index}"
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {standard}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureCategory({}
  title,
  icon,
  features,
}: {}
  title: string;
  icon: string;
  features: string[];
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <div className="text-2xl mb-3">{icon}</div>"
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>"
      <ul className="space-y-2">
        {features.map((feature, index) => ("
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IntegrationCategory({}
  title,
  platforms,
  icon,
}: {}
  title: string;
  platforms: string[];
  icon: string;
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <div className="text-2xl mb-3">{icon}</div>"
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>"
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform, index) => (
          <span;
            key={index}"
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {platform}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustryPricingPlan({}
  industry,
  starterPrice,
  professionalPrice,
  enterprisePrice,
  features,
  icon,
}: {}
  industry: string;
  starterPrice: string;
  professionalPrice: string;
  enterprisePrice: string;
  features: string[];
  icon: string;
}) {}
  return ("
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">"
      <div className="text-3xl mb-4">{icon}</div>"
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{industry}</h3>"
      <div className="space-y-4 mb-6">"
        <div className="flex justify-between">"
          <span className="text-gray-600">Starter:</span>"
          <span className="font-bold text-blue-600">{starterPrice}</span>
        </div>"
        <div className="flex justify-between">"
          <span className="text-gray-600">Professional:</span>"
          <span className="font-bold text-blue-600">{professionalPrice}</span>
        </div>"
        <div className="flex justify-between">"
          <span className="text-gray-600">Enterprise:</span>"
          <span className="font-bold text-blue-600">{enterprisePrice}</span>
        </div>
      </div>"
      <ul className="space-y-2">
        {features.map((feature, index) => ("
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a"
        href="tel:+13024640950""
        className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
      >
        Get Quote;
      </a>
    </div>
  );
}

function SuccessStory({}
  company,
  industry,
  solution,
  result,
  description,
}: {}
  company: string;
  industry: string;
  solution: string;
  result: string;
  description: string;
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <div className="flex items-center mb-4">"
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">"
          <span className="text-blue-600 font-bold text-lg">
            {company.charAt(0)}
          </span>
        </div>
        <div>"
          <h4 className="font-bold text-gray-900">{company}</h4>"
          <p className="text-sm text-gray-500">{industry}</p>
        </div>
      </div>"
      <h5 className="font-semibold text-gray-900 mb-2">{solution}</h5>"
      <div className="text-2xl font-bold text-blue-600 mb-2">{result}</div>"
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

"

