export const metadata = { 
};

export default function DataAnalyticsPage() {
  return (
    </div>
  );
}

  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
        {features.map((feature, index) => (
            {feature}
          </li>
        ))}
      </ul>
      >
        Get Started
      </a>
    </div>
  );
}

  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function DataAnalyticsTechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </ul>
    </div>
  );
}

function IndustryAnalytics({ title, description, solutions, icon }: { 
  title: string; 
  description: string; 
  solutions: string[]; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {solutions.map((solution) => (
          <li key={solution} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {solution}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DataAnalyticsBenefitCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Analytics Service Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Analytics Assessment" 
          price="$5k–$15k" 
          features={["2–3 weeks", "Data audit", "Requirements analysis", "Strategy roadmap", "Tool recommendations"]} 
          popular={false}
        />
        <Plan 
          name="Dashboard Development" 
          price="$10k–$35k" 
          features={["4–8 weeks", "Custom dashboards", "Data integration", "User training", "Documentation"]} 
          popular={true}
        />
        <Plan 
          name="Advanced Analytics" 
          price="$20k–$75k" 
          features={["8–16 weeks", "ML models", "Predictive analytics", "Real-time processing", "Ongoing support"]} 
          popular={false}
        />
      </div>
    </section>
    </div>
  );
}