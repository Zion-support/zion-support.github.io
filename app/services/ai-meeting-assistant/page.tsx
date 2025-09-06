import React from 'react';

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
          Transform every meeting into actionable insights with our AI-powered
          assistant. Get real-time transcription, intelligent summaries, and
          automatic action item extraction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="#demo"
            className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Watch Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI assistant handles every aspect of your meetings, from
            real-time transcription to intelligent follow-ups.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🎤</div>
            <h3 className="text-xl font-semibold mb-3">Real-time Transcription</h3>
            <p className="text-gray-600">
              Get instant, accurate transcription of all your meetings with 95% accuracy in multiple languages.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-3">Smart Summaries</h3>
            <p className="text-gray-600">
              Automatically generate concise meeting summaries highlighting key decisions and outcomes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-3">Action Items</h3>
            <p className="text-gray-600">
              Extract and track action items automatically, ensuring nothing falls through the cracks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of teams already using our AI Meeting Assistant to make their meetings more productive and actionable.
          </p>
          <Link
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your team size and meeting volume. All
            plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Starter"
            price="$49"
            period="per month"
            description="Perfect for small teams and individual users"
            features={[
              "Up to 10 hours/month",
              "Basic transcription",
              "Meeting summaries",
              "Action item extraction",
              "Email support",
              "Basic analytics"
            ]}
            cta="Start Free Trial"
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$149"
            period="per month"
            description="Most popular for growing teams and businesses"
            features={[
              "Up to 50 hours/month",
              "Advanced AI features",
              "Team collaboration",
              "Custom integrations",
              "Priority support",
              "Advanced analytics",
              "API access"
            ]}
            cta="Start Free Trial"
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$399"
            period="per month"
            description="For large organizations with high meeting volumes"
            features={[
              "Unlimited hours",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Custom integrations",
              "Advanced security",
              "SLA guarantee"
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our clients consistently see dramatic improvements in meeting
            productivity and follow-through.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Perfect for Every Meeting Type
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From client calls to team standups, our AI assistant enhances every
            type of meeting.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powered by Advanced AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform uses cutting-edge AI and machine learning technologies
            for superior performance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            {
              name: "OpenAI Whisper",
              icon: "🎤",
              description: "Speech recognition"
            },
            {
              name: "GPT-4",
              icon: "🧠",
              description: "Natural language processing"
            },
            { name: "TensorFlow", icon: "⚡", description: "Machine learning" },
            {
              name: "WebRTC",
              icon: "📡",
              description: "Real-time communication"
            },
            { name: "AWS", icon: "☁️", description: "Cloud infrastructure" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "Redis", icon: "🔴", description: "Caching" },
            { name: "PostgreSQL", icon: "🐘", description: "Database" },
            { name: "Elasticsearch", icon: "🔍", description: "Search engine" },
            { name: "React", icon: "⚛️", description: "Frontend" },
            { name: "Node.js", icon: "🟢", description: "Backend" }
          ].map((tech, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience.
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience.
ursor/fix-lint-push-and-merge-to-main-745c
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience.
ursor/fix-lint-push-and-merge-to-main-32fb
          </p>
          >
            Get Started
          </Link>
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
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Meetings?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of professionals using our AI Meeting Assistant to make
          every meeting more productive and actionable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Meeting Assistant Demo Request"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}
