import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Meeting Assistant | Zion Tech Group',
  description: 'Revolutionary AI meeting platform with real-time transcription, intelligent summaries, and action item extraction. Transform your meetings with 95% accuracy and 50% time savings.',
  keywords: 'AI meeting assistant, meeting transcription, meeting summaries, action items, meeting analytics, virtual meetings'
};

export default function AIMeetingAssistantPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Meeting Assistant
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform every meeting into actionable insights with our AI-powered assistant. Get real-time transcription, 
          intelligent summaries, and automatic action item extraction with 95% accuracy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Meeting Assistant Demo"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Try Free Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary Meeting Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI assistant handles every aspect of your meetings, from real-time transcription to intelligent follow-ups.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎤"
            title="Real-Time Transcription"
            description="Live transcription with 95% accuracy in 50+ languages, speaker identification, and noise filtering"
            benefits={[
              "95% accuracy rate",
              "50+ languages supported",
              "Speaker identification",
              "Noise cancellation"
            ]}
          />
          <FeatureCard
            icon="📝"
            title="Intelligent Summaries"
            description="AI-generated meeting summaries with key points, decisions, and insights automatically extracted"
            benefits={[
              "Key points extraction",
              "Decision tracking",
              "Insight generation",
              "Custom summary formats"
            ]}
          />
          <FeatureCard
            icon="✅"
            title="Action Item Extraction"
            description="Automatically identify and extract action items, assignees, and deadlines from meeting conversations"
            benefits={[
              "Auto action detection",
              "Assignee assignment",
              "Deadline tracking",
              "Follow-up reminders"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Meeting Analytics"
            description="Comprehensive analytics on meeting effectiveness, participation, and productivity insights"
            benefits={[
              "Participation metrics",
              "Talk time analysis",
              "Meeting effectiveness",
              "Productivity insights"
            ]}
          />
          <FeatureCard
            icon="🔗"
            title="Seamless Integrations"
            description="Connect with Zoom, Teams, Google Meet, and 20+ other platforms for universal meeting support"
            benefits={[
              "Zoom integration",
              "Microsoft Teams",
              "Google Meet",
              "Calendar sync"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="AI-Powered Insights"
            description="Get intelligent recommendations for meeting improvements, agenda optimization, and follow-up strategies"
            benefits={[
              "Meeting optimization",
              "Agenda suggestions",
              "Follow-up strategies",
              "Best practices"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your team size and meeting volume. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Starter"
            price="$49"
            period="per month"
            description="Perfect for small teams and individual users"
            features={[}
              "Up to 10 hours/month",
              "Basic transcription",
              "Meeting summaries",
              "Action item extraction",
              "Email support",
              "Basic analytics"}
            ]}
            cta="Start Free Trial"
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$149"
            period="per month"
            description="Most popular for growing teams and businesses"
            features={[}
              "Up to 50 hours/month",
              "Advanced AI features",
              "Team collaboration",
              "Custom integrations",
              "Priority support",
              "Advanced analytics",
              "API access"}
            ]}
            cta="Start Free Trial"
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$399"
            period="per month"
            description="For large organizations with high meeting volumes"
            features={[}
              "Unlimited hours",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Custom integrations",
              "Advanced security",
              "SLA guarantee"}
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our clients consistently see dramatic improvements in meeting productivity and follow-through.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            number="50%"
            label="Time Saved"
            description="Average reduction in meeting prep and follow-up time"
          />
          <MetricCard
            number="95%"
            label="Accuracy Rate"
            description="Transcription accuracy across all languages"
          />
          <MetricCard
            number="80%"
            label="Action Completion"
            description="Improvement in action item follow-through"
          />
          <MetricCard
            number="60%"
            label="Meeting Efficiency"
            description="Increase in meeting productivity and focus"
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Every Meeting Type</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From client calls to team standups, our AI assistant enhances every type of meeting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UseCaseCard
            icon="💼"
            title="Client Meetings"
            description="Capture every detail from client calls with professional transcription and follow-up"
            benefits={[
              "Professional transcripts",
              "Client action tracking",
              "Follow-up automation",
              "Meeting recordings"
            ]}
          />
          <UseCaseCard
            icon="👥"
            title="Team Meetings"
            description="Keep your team aligned with clear summaries and action item tracking"
            benefits={[
              "Team collaboration",
              "Action item assignment",
              "Progress tracking",
              "Meeting effectiveness"
            ]}
          />
          <UseCaseCard
            icon="🎓"
            title="Training Sessions"
            description="Transform training sessions into searchable knowledge with AI-powered insights"
            benefits={[
              "Knowledge capture",
              "Searchable content",
              "Learning analytics",
              "Progress tracking"
            ]}
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powered by Advanced AI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform uses cutting-edge AI and machine learning technologies for superior performance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "OpenAI Whisper", icon: "🎤", description: "Speech recognition" },
            { name: "GPT-4", icon: "🧠", description: "Natural language processing" },
            { name: "TensorFlow", icon: "⚡", description: "Machine learning" },
            { name: "WebRTC", icon: "📡", description: "Real-time communication" },
            { name: "AWS", icon: "☁️", description: "Cloud infrastructure" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "Redis", icon: "🔴", description: "Caching" },
            { name: "PostgreSQL", icon: "🐘", description: "Database" },
            { name: "Elasticsearch", icon: "🔍", description: "Search engine" },
            { name: "React", icon: "⚛️", description: "Frontend" },
            { name: "Node.js", icon: "🟢", description: "Backend" }
          ].map((tech, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The AI Meeting Assistant has transformed our client meetings. We never miss important details and our follow-up is 100% accurate."
            author="Jennifer Martinez"
            role="Account Director"
            company="Marketing Agency Pro"
          />
          <TestimonialCard
            quote="Our team meetings are now 50% more productive. The action item extraction is incredibly accurate and saves us hours of manual work."
            author="David Kim"
            role="Engineering Manager"
            company="TechCorp Solutions"
          />
          <TestimonialCard
            quote="As a consultant, this tool is invaluable. I can focus on the conversation knowing that every detail is being captured perfectly."
            author="Lisa Thompson"
            role="Management Consultant"
            company="Strategic Insights LLC"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-purple-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Meetings?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of professionals using our AI Meeting Assistant to make every meeting more productive and actionable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Meeting Assistant Demo Request"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, benefits }: {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, cta, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-purple-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Meeting Assistant - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-purple-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function UseCaseCard({ icon, title, description, benefits }: {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TestimonialCard({ quote, author, role, company }: {
  quote: string;
  author: string;
  role: string;
  company: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <p className="text-gray-600 mb-4 italic">"{quote}"</p>
      <div className="border-t pt-4">
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-sm text-gray-600">{role}</div>
        <div className="text-sm text-gray-500">{company}</div>
      </div>
    </div>
  );
}