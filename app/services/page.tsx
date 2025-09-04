import Link from 'next/link';

export const metadata = { 
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.',
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Product engineering and AI-first consulting to deliver measurable outcomes for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <ServiceCard 
          href="/services/micro-saas" 
          title="Micro SaaS Development" 
          description="12+ ready-to-deploy micro SaaS solutions with billing, analytics, and growth features"
          bullets={["AI Analytics Dashboard", "Customer Feedback Management", "Social Media Scheduler", "Invoice Processing", "Project Management", "Email Marketing", "Inventory Management", "Lead Generation", "Document Management", "Appointment Scheduling", "Support Ticketing", "Expense Tracking"]}
          icon="🚀"
        />
        <ServiceCard 
          href="/services/ai-services" 
          title="AI Services & Solutions" 
          description="12+ comprehensive AI services including LLM applications, RAG systems, and MLOps"
          bullets={["Custom LLM Applications", "RAG Systems", "AI Chatbots", "Computer Vision", "NLP Solutions", "Predictive Analytics", "AI Automation", "Voice & Speech AI", "Recommendation Systems", "AI Data Pipelines", "AI Security", "AI Consulting"]}
          icon="🤖"
        />
        <ServiceCard 
          href="/services/it-services" 
          title="IT Services & Infrastructure" 
          description="9+ comprehensive IT services including cloud migration, DevOps, and security"
          bullets={["Cloud Migration & Strategy", "DevOps & CI/CD", "Site Reliability Engineering", "Cybersecurity & Compliance", "Infrastructure Management", "Database Administration", "Network Security", "Disaster Recovery", "IT Consulting"]}
          icon="⚙️"
        />
      </div>

      <CTA />
    </div>
  );
}

function ServiceCard({ href, title, description, bullets, icon }: { 
  href: string; 
  title: string; 
  description: string;
  bullets: string[]; 
  icon: string;
}) {
  return (
    <Link 
      href={href} 
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span>
            {bullet}
          </li>
        ))}
      </ul>
    </Link>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Talk to our experts about your project. We'll help you choose the right service 
        and create a custom solution for your business needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="tel:+13024640950" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a 
          href="mailto:kleber@ziontechgroup.com" 
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}

