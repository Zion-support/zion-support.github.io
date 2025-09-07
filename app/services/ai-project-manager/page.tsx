export const metadata = {
  title: 'Ai Project Manager | Zion Tech Group',
  description: 'Professional ai project manager services for your business needs.',
  keywords: 'ai-project-manager, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ai Project Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional ai project manager services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ai project manager solutions designed for your specific business requirements.
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
              Round-the-clock support to ensure your ai project manager solutions run smoothly.
            </p>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Flexible Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Team"
            price="$199"
            period="month"
            description="Perfect for small teams and startups"
            features={[
              "Up to 10 team members",
              "5 active projects",
              "Basic AI features",
              "Standard analytics",
              "Email support"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$499"
            period="month"
            description="Ideal for growing businesses"
            features={[
              "Up to 50 team members",
              "Unlimited projects",
              "Advanced AI features",
              "Detailed analytics & reporting",
              "Priority support",
              "Custom integrations"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$1,299"
            period="month"
            description="For large organizations"
            features={[
              "Unlimited team members",
              "Unlimited projects",
              "Custom AI training",
              "White-label solution",
              "24/7 dedicated support",
              "API access & custom development"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            number="40%"
            label="Faster Project Completion"
            description="Average time reduction across all projects"
          />
          <MetricCard
            number="99%"
            label="Accuracy Rate"
            description="AI prediction accuracy for project outcomes"
          />
          <MetricCard
            number="60%"
            label="Resource Optimization"
            description="Improvement in resource utilization efficiency"
          />
          <MetricCard
            number="85%"
            label="Team Satisfaction"
            description="Increase in team productivity and satisfaction"
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perfect For Every Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UseCaseCard
            icon="💻"
            title="Software Development"
            description="Agile project management with AI-powered sprint planning and code review automation."
            benefits={["Sprint optimization", "Bug prediction", "Code quality analysis", "Release planning"]}
          />
          <UseCaseCard
            icon="🏗️"
            title="Construction"
            description="Complex construction project management with resource optimization and safety monitoring."
            benefits={["Resource scheduling", "Safety compliance", "Timeline tracking", "Cost optimization"]}
          />
          <UseCaseCard
            icon="🎨"
            title="Creative Agencies"
            description="Creative project management with client collaboration and creative workflow optimization."
            benefits={["Client management", "Creative briefs", "Asset tracking", "Approval workflows"]}
          />
          <UseCaseCard
            icon="🏥"
            title="Healthcare"
            description="Healthcare project management with compliance tracking and patient care optimization."
            benefits={["Compliance monitoring", "Patient tracking", "Resource allocation", "Quality assurance"]}
          />
          <UseCaseCard
            icon="🎓"
            title="Education"
            description="Educational project management with curriculum planning and student progress tracking."
            benefits={["Curriculum planning", "Student tracking", "Resource management", "Assessment planning"]}
          />
          <UseCaseCard
            icon="🏪"
            title="Retail"
            description="Retail project management with inventory optimization and customer experience enhancement."
            benefits={["Inventory management", "Customer analytics", "Store operations", "Marketing campaigns"]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Project Management?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 5,000+ teams that have revolutionized their project management with our AI-powered platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-sm text-green-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, features }: { icon: string; title: string; description: string; features: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, popular }: { 
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md border-2 ${popular ? 'border-green-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      </div>
    </div>
  );
}