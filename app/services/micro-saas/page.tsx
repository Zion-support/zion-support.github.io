};

export default function MicroSaaSPage() {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            title="Rapid Time-to-Market"
            description="Launch your MVP in 4-8 weeks with our proven development framework"
            icon="⚡"
          />
          <BenefitCard
            title="Scalable Architecture"
            description="Built for growth with cloud-native, microservices architecture"
            icon="🏗️"
          />
          <BenefitCard
            title="Revenue-Focused"
            description="Every feature designed to drive user engagement and revenue growth"
            icon="💰"
          />
          <BenefitCard
            title="24/7 Support"
            description="Round-the-clock monitoring and support for your critical systems"
            icon="🛡️"
          />
          <BenefitCard
            title="AI Integration"
            description="Leverage cutting-edge AI to differentiate your product in the market"
            icon="🧠"
          />
          <BenefitCard
            title="Growth Analytics"
            description="Built-in analytics and growth tools to optimize user acquisition and retention"
            icon="📊"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

