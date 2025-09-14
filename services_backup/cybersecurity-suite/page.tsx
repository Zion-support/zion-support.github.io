
import Link from "next/link";

export const metadata = {
  title: "Cybersecurity Suite | Zion Tech Group",
  description: "Comprehensive cybersecurity solutions with threat detection, vulnerability assessment, and 24/7 monitoring.",

};

export default function CybersecuritySuitePage() {
  return (

    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Cybersecurity Suite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Protect your business with enterprise-grade cybersecurity solutions including 
          threat detection, vulnerability assessment, and 24/7 security monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Solutions</h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🛡️"
              title="Threat Detection"
              description="AI-powered threat detection and response with real-time monitoring and automated incident response"
            />
            <FeatureItem
              icon="🔍"
              title="Vulnerability Assessment"
              description="Comprehensive security audits, penetration testing, and vulnerability scanning"
            />
            <FeatureItem
              icon="🔐"
              title="Identity Management"
              description="Multi-factor authentication, single sign-on, and identity governance solutions"
            />
            <FeatureItem
              icon="📊"
              title="Security Analytics"
              description="Advanced security analytics with threat intelligence and behavioral analysis"
            />
            <FeatureItem
              icon="🌐"
              title="Network Security"
              description="Firewall management, network segmentation, and secure remote access solutions"
            />
            <FeatureItem
              icon="📋"
              title="Compliance Management"
              description="GDPR, HIPAA, SOX, and other regulatory compliance monitoring and reporting"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Tiers</h2>
          <div className="space-y-6">
            <PricingCard
              name="Essential"
              price="$299"
              period="month"
              description="Perfect for small businesses"
              features={[
                "Basic threat monitoring",
                "Monthly security reports",
                "Email support",
                "Standard compliance",
                "Basic incident response"
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="$799"
              period="month"
              description="Most popular for growing companies"
              features={[
                "Advanced threat detection",
                "Weekly security reports",
                "24/7 monitoring",
                "Priority support",
                "Penetration testing",
                "Compliance management"
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="$1,999"
              period="month"
              description="For large organizations"
              features={[
                "Full security suite",
                "Real-time monitoring",
                "Dedicated security team",
                "Custom compliance",
                "White-label solutions",
                "SLA guarantee"
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Security Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">43%</div>
            <p className="text-gray-600">of cyber attacks target small businesses</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">$4.45M</div>
            <p className="text-gray-600">Average cost of a data breach</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">287</div>
            <p className="text-gray-600">Days to identify a breach</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
            <p className="text-gray-600">of SMBs close within 6 months of breach</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Secure Your Business Today</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Don't wait for a breach. Join 500+ businesses protected by our Cybersecurity Suite.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
          >
            Get Security Audit
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>

      </div>
    </div>
  );
}


function FeatureItem({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
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
    <div className={`border rounded-xl p-6 ${popular ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>

          </li>
        ))}
      </ul>
    </div>
  );

}

function SecurityServicesSection() {
  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture",
      duration: "2-4 weeks",
      price: "Starting at $15,000"
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to identify vulnerabilities",
      duration: "1-2 weeks",
      price: "Starting at $8,000"
    },
    {
      title: "Compliance Audit",
      description: "Ensure compliance with industry regulations and standards",
      duration: "3-6 weeks",
      price: "Starting at $25,000"
    },
    {
      title: "Security Training",
      description: "Employee cybersecurity awareness and training programs",
      duration: "Ongoing",
      price: "Starting at $5,000/month"
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery from security incidents",
      duration: "24/7",
      price: "Starting at $10,000/month"
    },
    {
      title: "Managed Security",
      description: "Complete outsourced security operations and monitoring",
      duration: "Ongoing",
      price: "Starting at $15,000/month"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Security Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>Duration: {service.duration}</span>
            </div>
            <div className="text-lg font-semibold text-red-600">{service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Security Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Essential"
          price="$2,500"
          period="month"
          description="Basic security monitoring for small businesses"
          features={["24/7 monitoring", "Basic threat detection", "Monthly reports", "Email support", "Up to 50 users"]}
          popular={false}
        />
        <PricingCard
          name="Professional"
          price="$7,500"
          period="month"
          description="Advanced security for growing businesses"
          features={["Advanced threat detection", "Vulnerability scanning", "Compliance monitoring", "Priority support", "Up to 200 users", "Incident response"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise"
          price="Custom"
          period=""
          description="Complete security solution for large organizations"
          features={["Full SOC services", "Custom security policies", "Dedicated team", "24/7 phone support", "Unlimited users", "Custom integrations"]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, popular }: { 
  name: string; price: string; period: string; description: string; features: string[]; popular: boolean 
}) {
  return (
    <div className={`relative border-2 rounded-xl p-8 ${popular ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {period && <span className="text-gray-600">/{period}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-red-600 text-white hover:bg-red-700' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-pink-600 p-8 rounded-2xl text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
      <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
        Contact our cybersecurity experts to discuss your security needs and get a custom solution.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-white text-red-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-red-100">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );

}