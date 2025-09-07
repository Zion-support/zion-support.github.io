<<<<<<< HEAD
<<<<<<< HEAD
=======
import Link from "next/link";

<<<<<<< HEAD
export const metadata = {
  title: 'Lead Generation Tool | Zion Tech Group',
  description: 'AI-powered lead generation platform. Find, qualify, and nurture leads automatically with advanced targeting and CRM integration.',
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export const metadata = {
  title: "Lead Generation Tool | Zion Tech Group",
  description:
    "AI-powered lead generation platform. Find, qualify, and nurture leads automatically with advanced targeting and CRM integration.",
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
};

export default function LeadGenerationToolPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lead Generation Tool
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional lead generation tool services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Feature 1</h3>
            <p className="text-gray-300 mb-6">Description of the first key feature.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Benefit 1</li>
              <li>• Benefit 2</li>
              <li>• Benefit 3</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Feature 2</h3>
            <p className="text-gray-300 mb-6">Description of the second key feature.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Benefit 1</li>
              <li>• Benefit 2</li>
              <li>• Benefit 3</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Feature 3</h3>
            <p className="text-gray-300 mb-6">Description of the third key feature.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Benefit 1</li>
              <li>• Benefit 2</li>
              <li>• Benefit 3</li>
            </ul>
          </div>
=======
import Link from "next/link";

export const metadata = {"
  title: "Lead Generation Tool | Zion Tech Group",
  description:"
    "AI-powered lead generation platform. Find, qualify, and nurture leads automatically with advanced targeting and CRM integration.",;
};

export default function LeadGenerationToolPage() {}
  return ("
    <div className="max-w-6xl mx-auto px-4 py-8">"
      <div className="text-center mb-12">"
        <h1 className="text-5xl font-bold text-gray-900 mb-6">;
          Lead Generation Tool;
        </h1>"
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered lead generation platform that finds, qualifies, and;
          nurtures leads automatically. Boost your sales pipeline with;
          intelligent targeting and CRM integration.
        </p>
      </div>
"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard"
          title="Lead Discovery"
          details={["
            "AI-powered prospect research","
            "Contact information enrichment","
            "Company data verification","
            "Social media intelligence","
            "Email finder & verification",
          ]}
        />
        <FeatureCard"
          title="Qualification & Scoring"
          details={["
            "Lead scoring algorithms","
            "Intent detection","
            "BANT qualification","
            "Behavioral analysis","
            "Custom qualification rules",
          ]}
        />
        <FeatureCard"
          title="Outreach & Nurturing"
          details={["
            "Automated email sequences","
            "LinkedIn outreach automation","
            "Personalized messaging","
            "Follow-up scheduling","
=======
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Lead Generation Tool
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
          AI-powered lead generation platform that finds, qualifies, and nurtures leads automatically.
          Boost your sales pipeline with intelligent targeting and CRM integration.
=======
          AI-powered lead generation platform that finds, qualifies, and
          nurtures leads automatically. Boost your sales pipeline with
          intelligent targeting and CRM integration.
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Lead Discovery"
          details={[
<<<<<<< HEAD
            'AI-powered prospect research',
            'Contact information enrichment',
            'Company data verification',
            'Social media intelligence',
            'Email finder & verification',
=======
            "AI-powered prospect research",
            "Contact information enrichment",
            "Company data verification",
            "Social media intelligence",
            "Email finder & verification",
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
          ]}
        />
        <FeatureCard
          title="Qualification & Scoring"
          details={[
<<<<<<< HEAD
            'Lead scoring algorithms',
            'Intent detection',
            'BANT qualification',
            'Behavioral analysis',
            'Custom qualification rules',
=======
            "Lead scoring algorithms",
            "Intent detection",
            "BANT qualification",
            "Behavioral analysis",
            "Custom qualification rules",
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
          ]}
        />
        <FeatureCard
          title="Outreach & Nurturing"
          details={[
<<<<<<< HEAD
            'Automated email sequences',
            'LinkedIn outreach automation',
            'Personalized messaging',
            'Follow-up scheduling',
            'CRM integration (Salesforce, HubSpot)',
=======
            "Automated email sequences",
            "LinkedIn outreach automation",
            "Personalized messaging",
            "Follow-up scheduling",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            "CRM integration (Salesforce, HubSpot)",
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
          ]}
        />
      </div>

      <PricingSection />
<<<<<<< HEAD

      <div className="mt-16 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Generate More Leads?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Start generating qualified leads automatically with our AI-powered platform.
          Perfect for sales teams, agencies, and B2B businesses.
=======
<<<<<<< HEAD
"
      <div className="mt-16 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 text-center">"
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Generate More Leads?
        </h3>"
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Start generating qualified leads automatically with our AI-powered;
          platform. Perfect for sales teams, agencies, and B2B businesses.
        </p>"
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a"
            href="tel:+13024640950""
            className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Call +1 302 464 0950;
          </a>
          <a"
            href="mailto:kleber@ziontechgroup.com""
            className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
          >
            Email Us;
          </a>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      <div className="mt-16 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Generate More Leads?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Start generating qualified leads automatically with our AI-powered
          platform. Perfect for sales teams, agencies, and B2B businesses.
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}

function FeatureCard({ title, details }: { title: string; details: string[] }) {}
  return ("
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">"
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>"
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => ("
          <li key={index} className="flex items-center">"
=======
}

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <span className="text-teal-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

<<<<<<< HEAD
function PricingSection() {}
  return ("
    <div className="mb-12">"
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Pricing Plans;
      </h2>"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingPlan"
          name="Starter""
          price="$49/mo"
          features={["
            "500 leads/month","
            "Basic contact data","
            "Email verification","
            "Standard CRM integration","
            "Email support",
          ]}
        />
        <PricingPlan"
          name="Professional""
          price="$149/mo"
          features={["
            "2,000 leads/month","
            "Advanced contact enrichment","
            "Lead scoring & qualification","
            "Automated outreach sequences","
=======
function PricingSection() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingPlan
          name="Starter"
          price="$49/mo"
          features={[
<<<<<<< HEAD
            '500 leads/month',
            'Basic contact data',
            'Email verification',
            'Standard CRM integration',
            'Email support',
=======
            "500 leads/month",
            "Basic contact data",
            "Email verification",
            "Standard CRM integration",
            "Email support",
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
          ]}
        />
        <PricingPlan
          name="Professional"
          price="$149/mo"
          features={[
<<<<<<< HEAD
            '2,000 leads/month',
            'Advanced contact enrichment',
            'Lead scoring & qualification',
            'Automated outreach sequences',
            'Priority support',
          ]}
          featured={true}
        />
=======
            "2,000 leads/month",
            "Advanced contact enrichment",
            "Lead scoring & qualification",
            "Automated outreach sequences",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            "Priority support",
          ]}
          featured={true}
        />
<<<<<<< HEAD
        <PricingPlan"
          name="Enterprise""
          price="$399/mo"
          features={["
            "10,000 leads/month","
            "Custom data sources","
            "Advanced AI targeting","
            "White-label solution","
=======
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
        <PricingPlan
          name="Enterprise"
          price="$399/mo"
          features={[
<<<<<<< HEAD
            '10,000 leads/month',
            'Custom data sources',
            'Advanced AI targeting',
            'White-label solution',
            'Dedicated account manager',
=======
            "10,000 leads/month",
            "Custom data sources",
            "Advanced AI targeting",
            "White-label solution",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            "Dedicated account manager",
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
          ]}
        />
      </div>
    </div>
  );
}

<<<<<<< HEAD
function PricingPlan({
=======
<<<<<<< HEAD
function PricingPlan({}
=======
function PricingPlan({
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
  name,
  price,
  features,
  featured = false,
<<<<<<< HEAD
}: {
=======
<<<<<<< HEAD
}: {}
=======
}: {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
<<<<<<< HEAD
}) {}
  return (
    <div;
      className={`border rounded-xl p-6 ${}
        featured"
          ? "border-teal-500 bg-teal-50 shadow-lg""
          : "border-gray-200 bg-white shadow-sm"`
      }`}
    >"
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>"
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>"
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => ("
          <li key={index} className="flex items-center">"
=======
}) {
  return (
<<<<<<< HEAD
    <div className={`border rounded-xl p-6 ${
      featured
        ? 'border-teal-500 bg-teal-50 shadow-lg'
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
=======
    <div
      className={`border rounded-xl p-6 ${
        featured
          ? "border-teal-500 bg-teal-50 shadow-lg"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <span className="text-teal-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <a"
        href="tel:+13024640950"`
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${}
          featured"
            ? "bg-teal-600 text-white hover:bg-teal-700""
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"`
        }`}
      >
        Get Started;
=======
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? "bg-teal-600 text-white hover:bg-teal-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </a>
    </div>
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
