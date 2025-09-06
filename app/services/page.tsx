import Link from "next/link";

};

export default function ServicesOverviewPage() {}
  return ("
    <div className="animate-fade-in">"
      <div className="text-center mb-16">"
        <h1 className="text-4xl font-bold text-gray-900 mb-6">;
          Our Services;
        </h1>"
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.
        </p>
      </div>

      {/* Statistics Section */}"
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">"
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard "
            number="500+" "
            label="Successful Projects" "
            description="Delivered worldwide" 
          />
          <StatCard "
            number="$2B+" "
            label="Combined Market Value" "
            description="Generated for clients" 
          />
          <StatCard "
            number="99.9%" "
            label="Uptime Guarantee" "
            description="Enterprise reliability" 
          />
          <StatCard "
            number="300%" "
            label="Average ROI" "
            description="Client return on investment" 
          />
        </div>
      </div>

"
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard"
          href="/services/micro-saas""
          title="Micro SaaS Solutions""
          description="Complete micro SaaS development from MVP to scale with billing, analytics, and growth optimization"
          bullets={[]
          ]}"
          icon="🚀""
          pricing="From $2,999/month"
        />
        <ServiceCard"
          href="/services/ai-services""
          title="AI Services"
"
          icon="🤖""
          pricing="From $5,000/project"
        />
        <ServiceCard"
          href="/services/it-services""
          title="IT Services"

        />
        <ServiceCard"
          href="/services/blockchain-solutions""
          title="Blockchain Solutions""
          description="DeFi, NFTs, smart contracts, and Web3 applications with enterprise-grade security""
          bullets={["Smart contracts", "DeFi protocols", "Web3 apps"]}"
          icon="⛓️""
          pricing="From $15,000/project"
        />
        <ServiceCard"
          href="/services/automation-solutions""
          title="Automation Solutions""
          description="RPA, workflow automation, and AI-powered automation for maximum efficiency""
          bullets={["Process automation", "Workflow optimization", "AI automation"]}"
          icon="⚡"

        />
        <ServiceCard"
          href="/services/data-analytics""
          title="Data Analytics"

    </div>
  );
}

function ServiceCard({}
  href,
  title,
  description,
  bullets,

}: {}
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  pricing: string;
}) {}
  return (
    <Link;
      href={href}"
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >


function StatCard({}
  number, 
  label, 
  description;
}: {}
  number: string; 
  label: string; 
  description: string; 
}) {}
  return ("
    <div className="text-center">"
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>"
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>"
      <div className="text-sm text-gray-600">{description}</div>
    </div>

  );
}

function CTA() {}
  return ("
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>"
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
"
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a"
          href="tel:+13024640950""
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950;
        </a>
        <a"
          href="mailto:kleber@ziontechgroup.com""
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us;
        </a>
      </div>
    </div>
  );
}"