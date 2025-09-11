export const metadata = {
  title: "EdTech Solutions | Zion Tech Group",
  description:
    "Complete educational technology solutions including LMS systems, virtual classrooms, AI-powered learning, and personalized education platforms.",
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              EdTech Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform education with innovative EdTech solutions.
              From virtual classrooms to AI-powered learning, we build engaging, accessible technology that enhances learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>

      {/* Our EdTech Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our EdTech Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational technology solutions that enhance learning, improve engagement, and streamline educational administration.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Expert consultation</li>
              <li>• Training and documentation</li>
              <li>• Ongoing maintenance</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EdTechServiceCard
              title="Learning Management System (LMS)"
              description="Comprehensive LMS with course creation, student management, assessments, and progress tracking."
              features={[
                'Course creation & management',
                'Student enrollment & tracking',
                'Assignment & assessment tools',
                'Gradebook & reporting',
                'Discussion forums & collaboration',
                'Mobile app & offline access',
              ]}
              pricing="$40,000-200,000"
              marketSize="$18.6B LMS market"
              icon="📚"
            />
            <EdTechServiceCard
              title="Virtual Classroom Platform"
              description="Interactive virtual classroom with video conferencing, whiteboard, and real-time collaboration tools."
              features={[
                'HD video conferencing',
                'Interactive whiteboard',
                'Screen sharing & recording',
                'Breakout rooms',
                'Polling & Q&A tools',
                'Attendance tracking',
              ]}
              pricing="$35,000-175,000"
              marketSize="$13.2B virtual classroom market"
              icon="🎥"
            />
            <EdTechServiceCard
              title="AI-Powered Personalized Learning"
              description="Adaptive learning platform with AI-driven personalization, content recommendations, and learning analytics."
              features={[
                'Adaptive learning algorithms',
                'Personalized content delivery',
                'Learning path optimization',
                'Performance analytics',
                'Intelligent tutoring system',
                'Competency-based progression',
              ]}
              pricing="$60,000-300,000"
              marketSize="$4.2B personalized learning market"
              icon="🤖"
            />
            <EdTechServiceCard
              title="Student Information System (SIS)"
              description="Complete student information management with enrollment, academic records, and administrative tools."
              features={[
                'Student enrollment & records',
                'Academic progress tracking',
                'Parent/guardian portal',
                'Transcript generation',
                'Attendance management',
                'Financial aid tracking',
              ]}
              pricing="$50,000-250,000"
              marketSize="$7.8B SIS market"
              icon="👥"
            />
            <EdTechServiceCard
              title="Assessment & Testing Platform"
              description="Advanced assessment platform with automated grading, plagiarism detection, and detailed analytics."
              features={[
                'Online exam creation',
                'Automated grading & feedback',
                'Plagiarism detection',
                'Proctoring & security',
                'Performance analytics',
                'Question bank management',
              ]}
              pricing="$30,000-150,000"
              marketSize="$3.4B assessment platform market"
              icon="📝"
            />
            <EdTechServiceCard
              title="Educational Content Management"
              description="Content management system for educational materials with version control, collaboration, and distribution."
              features={[
                'Content creation & editing',
                'Version control & collaboration',
                'Multi-format support',
                'Content distribution',
                'Accessibility compliance',
                'Analytics & usage tracking',
              ]}
              pricing="$25,000-125,000"
              marketSize="$2.1B educational content market"
              icon="📖"
            />
            <EdTechServiceCard
              title="Gamification & Engagement Platform"
              description="Gamified learning platform with badges, leaderboards, and interactive elements to boost engagement."
              features={[
                'Badge & achievement system',
                'Leaderboards & competitions',
                'Progress visualization',
                'Social learning features',
                'Reward mechanisms',
                'Engagement analytics',
              ]}
              pricing="$35,000-175,000"
              marketSize="$1.8B gamification market"
              icon="🎮"
            />
            <EdTechServiceCard
              title="Language Learning Platform"
              description="Comprehensive language learning solution with speech recognition, pronunciation feedback, and cultural content."
              features={[
                'Speech recognition & feedback',
                'Interactive lessons',
                'Cultural content integration',
                'Progress tracking',
                'Conversation practice',
                'Multi-language support',
              ]}
              pricing="$45,000-225,000"
              marketSize="$5.2B language learning market"
              icon="🗣️"
            />
            <EdTechServiceCard
              title="STEM Education Platform"
              description="Specialized platform for STEM education with virtual labs, simulations, and hands-on learning tools."
              features={[
                'Virtual laboratory simulations',
                '3D modeling & visualization',
                'Coding & programming tools',
                'Mathematical modeling',
                'Scientific data analysis',
                'Collaborative projects',
              ]}
              pricing="$55,000-275,000"
              marketSize="$3.7B STEM education market"
              icon="🔬"
            />
            <EdTechServiceCard
              title="Special Education Support"
              description="Accessibility-focused platform with assistive technologies and personalized learning for special needs students."
              features={[
                'Assistive technology integration',
                'Personalized learning plans',
                'Accessibility compliance (ADA)',
                'Multi-sensory learning',
                'Progress monitoring',
                'Parent/teacher communication',
              ]}
              pricing="$40,000-200,000"
              marketSize="$1.9B special education market"
              icon="♿"
            />
            <EdTechServiceCard
              title="Professional Development Platform"
              description="Corporate training and professional development platform with certification tracking and skill assessment."
              features={[
                'Course catalog management',
                'Certification tracking',
                'Skill assessment tools',
                'Learning path creation',
                'Compliance training',
                'Progress reporting',
              ]}
              pricing="$30,000-150,000"
              marketSize="$4.8B corporate training market"
              icon="💼"
            />
            <EdTechServiceCard
              title="Educational Analytics & BI"
              description="Advanced analytics platform for educational data with predictive modeling and performance insights."
              features={[
                'Learning analytics dashboard',
                'Predictive modeling',
                'Performance insights',
                'Early warning systems',
                'Custom reporting',
                'Data visualization',
              ]}
              pricing="$35,000-175,000"
              marketSize="$2.3B educational analytics market"
              icon="📊"
            />
            <EdTechServiceCard
              title="Parent & Community Portal"
              description="Communication platform connecting schools, parents, and community with updates, events, and progress tracking."
              features={[
                'Parent communication tools',
                'Event & calendar management',
                'Progress notifications',
                'Volunteer coordination',
                'Community forums',
                'Mobile app access',
              ]}
              pricing="$25,000-125,000"
              marketSize="$1.5B parent engagement market"
              icon="👨‍👩‍👧‍👦"
            />
            <EdTechServiceCard
              title="Library Management System"
              description="Digital library platform with catalog management, digital resources, and research tools."
              features={[
                'Digital catalog management',
                'E-book & resource access',
                'Research tools & databases',
                'Citation management',
                'Interlibrary loan system',
                'Usage analytics',
              ]}
              pricing="$20,000-100,000"
              marketSize="$1.2B library management market"
              icon="📚"
            />
            <EdTechServiceCard
              title="Campus Management System"
              description="Comprehensive campus management with facilities, events, security, and administrative tools."
              features={[
                'Facility management',
                'Event scheduling',
                'Security & access control',
                'Maintenance tracking',
                'Resource booking',
                'Campus analytics',
              ]}
              pricing="$60,000-300,000"
              marketSize="$2.7B campus management market"
              icon="🏫"
            />
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function EdTechServiceCard({
  title,
  description,
  features,
  pricing,
  marketSize,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  marketSize: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-purple-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
  title,
  icon,
  description,
  services,
  pricing,
  marketSize,
}: {}
  title: string;
  icon: string;
  description: string;
  services: string[];
  pricing: string;
  marketSize: string;
}) {}
  return ("
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="text-gray-600 space-y-2 mb-4">
        {services.map((service) => ("
          <li key={service} className="flex items-center">"
            <span className="text-blue-500 mr-2">•</span> {service}
          </li>
        ))}

      </ul>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function EdTechPricingCard({
  name,
  price,
  duration,
  features,
  bestFor,
  popular = false,
}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  bestFor: string;
  popular?: boolean;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {services.map((service) => (
          <li key={service} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {service}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
          <span className="text-sm text-gray-500">Market: {marketSize}</span>
        </div>
      </div>
    </div>
  );
}

function EdTechService({}
  title,
  description,
  features,
  pricing,
  icon,
}: {}
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {}
  return ("
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">"
      <div className="text-3xl mb-3">{icon}</div>"
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>"
      <p className="text-gray-600 mb-3">{description}</p>"
      <ul className="text-gray-600 space-y-1 mb-3">
        {features.map((feature) => ("
          <li key={feature} className="flex items-center text-sm">"
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>"
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}
"

