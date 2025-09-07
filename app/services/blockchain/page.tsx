export const metadata = { 
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including smart contracts, DeFi protocols, NFT platforms, and Web3 applications. Enterprise-grade blockchain solutions.'
};

export default function BlockchainPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Blockchain Solutions
        </h1>
        <p className=\"text-xl text-gray-600 mb-8 max-w-3xl mx-auto\" />
          Build the future of decentralized applications with our comprehensive blockchain development services. 
          From smart contracts to DeFi protocols, we help you create secure, scalable Web3 solutions.
        </p>
        <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
          <a href=\"mailto:kleber@ziontechgroup.com?subject=Blockchain Services Inquiry\"
            className=\"bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors\"
           />
            Start Your Blockchain Project;
          </a>
          <a href=\"tel:+13024640950\"
            className=\"border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors\"
           />
            Call +1 302 464 0950;
          </a>
        </div>
      </section>
    </div>
  );
}

function BlockchainUseCase({ title, description, examples,
  icon }: {
  title: string,
  description: string,
  examples: string[];}
  icon: string;},,
  }) {
  return (}
    <div className=\"bg-white border border-gray-200 rounded-xl p-6\" />}
      <div className=\"text-3xl mb-4\" />{icon}</div>
      <h3 className=\"text-lg font-semibold text-gray-900 mb-2\" />{title}</h3>
      <p className=\"text-gray-600 mb-4\" />{description}</p>
      <ul className=\"space-y-1\" />
        {examples.map((example,,,
  index) => (}
          <li key={index}
            className=\"text-sm text-gray-500\" />• {example</li>
        ))
      </ul>
    </div>
  );
}

function BlockchainBenefitCard({ title, description,
  icon }: {
  title: string,
  description: string;}
  icon: string;},,
  }) {
  return (}
    <div className=\"text-center\" />}
      <div className=\"text-4xl mb-4\" />{icon}</div>
      <h3 className=\"text-lg font-semibold text-gray-900 mb-2\" />{title}</h3>
      <p className=\"text-gray-600\" />{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <div className=\"bg-white rounded-2xl p-8 mb-16\" />
      <h2 className=\"text-3xl font-bold text-gray-900 text-center mb-8\" />Blockchain Development Pricing</h2>
      <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\" />
        <PricingCard name=\"Smart Contract\"
          price=\"$8,000\"
          period=\"project\"}
          description=\"Basic smart contract development and deployment\"}
          features={[\"Single contract\", \"Basic testing\", \"Deployment\"}
            \"Documentation\"
            \"1 month support\"]
          popular={false}
        />
        <PricingCard name=\"dApp Development\"
          price=\"$25,000\"
          period=\"project\"
          description=\"Complete decentralized application with frontend\"
          features={[\"Smart contracts\", \"Frontend development\", \"Web3 integration\"}
            \"Testing & auditing\"
            \"3 months support\"]
          popular={true}
        />
        <PricingCard name=\"Enterprise Solution\"
          price=\"Custom\"
          period=\"\"
          description=\"Custom blockchain solutions for enterprise needs\"
          features={[\"Custom development\", \"Multi-chain support\", \"Enterprise integration\"}
            \"Dedicated team\"
            \"Ongoing support\"]
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({ name, price, period, description, features,
  popular }: {
  name: string;
  price: string;
  period: string,
  description: string,
  features: string[];}
  popular: boolean;},,
  }) {}
  return (}
    <div className={`relative border-2 rounded-xl p-8 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`} />
      {popular && (
        <div className=\"absolute -top-4 left-1/2 transform -translate-x-1/2\" />
          <span className=\"bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold\" />Most Popular</span>}
        </div>}
      )}
      <h3 className=\"text-2xl font-bold text-gray-900 mb-2\" />{name}</h3>
      <p className=\"text-gray-600 mb-4\" />{description}</p>
      <div className=\"mb-6\" />
        <span className=\"text-4xl font-bold text-gray-900\" />{price}</span>
        {period && <span className=\"text-gray-600\" />/{period}</span>}
      </div>
      <ul className=\"space-y-3 mb-8\" />
        {features.map((feature, index) => (}
          <li key={index className=\"flex items-center\" />
            <svg className=\"w-5 h-5 text-green-500 mr-3 flex-shrink-0\" fill=\"currentColor\" viewBox=\"0 0 20 20\" />
              <path fillRule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clipRule=\"evenodd\" / />
            </svg>
            <span className=\"text-gray-700\" />{feature}</span>
          </li>
        ))}
      </ul>
      <a href=\"tel:+13024640950\"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700' }
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
        }`}
       />
        Get Started;
      </a>
    </div>
  );
}

function CTASection() {
  return (
    <div className=\"bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-center\" />
      <h2 className=\"text-3xl font-bold text-white mb-4\" />Ready to Build on Blockchain?</h2>
      <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\" />
        Let&apos;s discuss your blockchain project and create a custom solution that drives innovation and value.
      </p>
      <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
        <a href=\"tel:+13024640950\"
          className=\"bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg\"
         />
          Call +1 302 464 0950;
        </a>
        <a href=\"mailto:kleber@ziontechgroup.com\"
          className=\"border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg\"
         />
          Email Us;
        </a>
      </div>
      <div className=\"mt-6 text-sm text-blue-100\" />
        <p />📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p />📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
    <div className=\"space-y-16\" />
      <section className=\"text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg\" />
        <h1 className=\"text-4xl md:text-6xl font-bold text-gray-900 mb-6\" />
          Blockchain Services;
        </h1>
        <p className=\"text-xl text-gray-600 mb-8 max-w-3xl mx-auto\" />
          Build the future of decentralized applications with our comprehensive blockchain development services. 
          From smart contracts to DeFi protocols, we help you create secure, scalable Web3 solutions.
        </p>
        <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
          <a href=\"mailto:kleber@ziontechgroup.com?subject=Blockchain Services Inquiry\"
            className=\"bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors\"
           />
            Start Your Blockchain Project;
          </a>
          <a href=\"tel:+13024640950\"
            className=\"border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors\"
           />
            Call +1 302 464 0950;
          </a>
        </div>
      </section>
    </div>}
  );}
}
      </div>
    </div>
  );
}