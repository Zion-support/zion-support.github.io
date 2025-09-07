import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Project Management Suite - Intelligent Project Management | Zion Tech Group',
  description: 'Intelligent project management with AI-powered task automation, resource optimization, risk prediction, and smart scheduling for enhanced team productivity.',
  keywords: 'AI project management, task automation, resource optimization, risk prediction, team productivity, project planning AI',
};

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta,
}: PricingTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-600" : "border-white/20 bg-white/10 backdrop-blur-sm"} shadow-lg`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-400 mb-2">{price}</div>
        <div className="text-gray-300 mb-4">{period}</div>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="space-y-3 mb-8 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
        <button
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
            popular
              ? "bg-white text-blue-600 hover:bg-gray-100"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}

export default function AIProjectManagementSuitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Project Management Suite
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent project management with AI-powered task automation, resource optimization, 
            risk prediction, and smart scheduling for enhanced team productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Feature
            title="AI Task Automation"
            description="Automatically assign tasks, set priorities, and optimize workflows based on team capacity and project requirements."
            icon="🤖"
          />
          <Feature
            title="Resource Optimization"
            description="Intelligent resource allocation and capacity planning to maximize team efficiency and project success."
            icon="⚡"
          />
          <Feature
            title="Risk Prediction"
            description="AI-powered risk assessment and early warning system to prevent project delays and budget overruns."
            icon="⚠️"
          />
          <Feature
            title="Smart Scheduling"
            description="Automated scheduling with dependency management, deadline optimization, and conflict resolution."
            icon="📅"
          />
          <Feature
            title="Progress Tracking"
            description="Real-time project monitoring with predictive analytics and automated status reporting."
            icon="📊"
          />
          <Feature
            title="Team Collaboration"
            description="Enhanced collaboration tools with AI-powered communication and knowledge sharing capabilities."
            icon="👥"
          />
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
              <p className="text-gray-300">Faster Project Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
              <p className="text-gray-300">Reduced Project Risks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
              <p className="text-gray-300">Resource Utilization</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <p className="text-gray-300">On-Time Delivery</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingTier
              name="Starter"
              price="$99"
              period="per user/month"
              description="Perfect for small teams and simple projects"
              features={[
                'Up to 10 projects',
                'Basic AI automation',
                'Standard reporting',
                'Email support',
                'Mobile app access'
              ]}
              cta="Get Started"
            />
            <PricingTier
              name="Professional"
              price="$199"
              period="per user/month"
              description="Advanced features for growing teams"
              features={[
                'Up to 50 projects',
                'Advanced AI features',
                'Resource optimization',
                'Risk prediction',
                'Priority support',
                'Custom integrations'
              ]}
              popular={true}
              cta="Most Popular"
            />
            <PricingTier
              name="Enterprise"
              price="$399"
              period="per user/month"
              description="Complete solution for large organizations"
              features={[
                'Unlimited projects',
                'Custom AI models',
                'Advanced analytics',
                'White-label solution',
                '24/7 dedicated support',
                'Custom development'
              ]}
              cta="Contact Sales"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Project Management?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading companies who trust our AI Project Management Suite to deliver projects faster and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}