export const metadata = {
  title: 'Digital Transformation | Zion Tech Group',
  description: 'Comprehensive digital transformation solutions for businesses.',
  keywords: 'digital-transformation, services, business, technology'
}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Digital Transformation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive digital transformation solutions for businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored digital-transformation solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your digital-transformation solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

          <DTServiceCard
            title="Legacy System Modernization"
            description="Transform outdated systems into modern, scalable, and efficient platforms"
            features={[
              'System assessment',
              'Migration planning',
              'Data transformation',
              'API integration',
              'User training',
              'Performance optimization',
            ]}
            price="$25k–$100k"
            icon="🔄"
          />
          <DTServiceCard
            title="Process Automation & Workflow"
            description="Automate business processes with intelligent workflow management"
            features={[
              'Process mapping',
              'Automation design',
              'RPA implementation',
              'Workflow optimization',
              'Integration',
              'Monitoring',
            ]}
            price="$15k–$60k"
            icon="⚡"
          />
          <DTServiceCard
            title="Digital Strategy Consulting"
            description="Comprehensive digital strategy development and implementation roadmap"
            features={[
              'Digital assessment',
              'Strategy development',
              'Technology roadmap',
              'Change management',
              'ROI analysis',
              'Implementation planning',
            ]}
            price="$20k–$80k"
            icon="📋"
          />
          <DTServiceCard
            title="Customer Experience Transformation"
            description="Enhance customer experience through digital channels and touchpoints"
            features={[
              'CX mapping',
              'Digital channels',
              'Personalization',
              'Omnichannel integration',
              'Analytics',
              'Feedback systems',
            ]}
            price="$18k–$70k"
            icon="👥"
          />
          <DTServiceCard
            title="Data-Driven Decision Making"
            description="Implement data analytics and business intelligence for informed decisions"
            features={[
              'Data strategy',
              'Analytics platform',
              'Dashboard development',
              'KPI tracking',
              'Predictive analytics',
              'Data governance',
            ]}
            price="$22k–$85k"
            icon="📊"
          />
          <DTServiceCard
            title="Cloud-First Architecture"
            description="Design and implement cloud-native solutions for scalability and efficiency"
            features={[
              'Cloud strategy',
              'Architecture design',
              'Migration planning',
              'Security implementation',
              'Cost optimization',
              'Monitoring',
            ]}
            price="$30k–$120k"
            icon="☁️"
          />
          <DTServiceCard
            title="Mobile-First Solutions"
            description="Develop mobile applications and responsive web solutions"
            features={[
              'Mobile strategy',
              'App development',
              'Responsive design',
              'Cross-platform',
              'Performance optimization',
              'App store deployment',
            ]}
            price="$20k–$75k"
            icon="📱"
          />
          <DTServiceCard
            title="Digital Security & Compliance"
            description="Implement comprehensive security and compliance frameworks"
            features={[
              'Security assessment',
              'Compliance framework',
              'Risk management',
              'Security monitoring',
              'Training',
              'Audit support',
            ]}
            price="$25k–$90k"
            icon="🔒"
          />
          <DTServiceCard
            title="Change Management & Training"
            description="Support organizational change and digital adoption"
            features={[
              'Change strategy',
              'Training programs',
              'User adoption',
              'Communication',
              'Support systems',
              'Success metrics',
            ]}
            price="$15k–$50k"
            icon="🎓"
          />

        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Digital Transformation Framework
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item
            title="Assessment & Strategy"
            details={[
              'Current state analysis and digital maturity assessment',
              'Competitive landscape analysis and market positioning',
              'Technology stack evaluation and gap analysis',
              'Digital strategy development and roadmap creation',
              'Stakeholder alignment and change management planning',
              'ROI modeling and business case development',
            ]}
          />
          <Item
            title="Implementation & Execution"
            details={[
              'Phased implementation approach with agile methodology',
              'Technology selection and vendor management',
              'Custom development and system integration',
              'Data migration and system modernization',
              'Testing, quality assurance, and performance optimization',
              'Deployment and go-live support',
            ]}
          />
          <Item
            title="Optimization & Growth"
            details={[
              'Performance monitoring and continuous improvement',
              'User adoption tracking and training optimization',
              'Business process refinement and automation',
              'Advanced analytics and AI implementation',
              'Scalability planning and future roadmap',
              'Ongoing support and maintenance',
            ]}
          />
        </div>
      </section>

      <Pricing />
      <ContactSection />
    </div>
  );
}

