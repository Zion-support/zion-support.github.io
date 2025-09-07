<<<<<<< HEAD
export const metadata = {
  title: "EdTech Solutions | Zion Tech Group",
  description:
    "Complete educational technology solutions including LMS systems, virtual classrooms, AI-powered learning, and personalized education platforms.",
};

export default function EdTechPage() {
  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            EdTech Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete educational technology solutions including LMS systems,
            virtual classrooms, AI-powered learning, and personalized education
            platforms.
          </p>
        </div>

        {/* EdTech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <EdTechCategory
            title="Learning Management System (LMS)"
            icon="📚"
            description="Comprehensive LMS platforms for educational institutions"
            services={[
              "Course management",
              "Student enrollment",
              "Grade tracking",
              "Content delivery",
              "Assessment tools",
              "Progress analytics",
            ]}
            pricing="$40,000 - $200,000"
            marketSize="$18B"
          />
          <EdTechCategory
            title="Virtual Classroom Platform"
            icon="🎓"
            description="Complete virtual classroom and online learning solutions"
            services={[
              "Live video sessions",
              "Interactive whiteboards",
              "Screen sharing",
              "Breakout rooms",
              "Recording capabilities",
              "Mobile access",
            ]}
            pricing="$35,000 - $175,000"
            marketSize="$12B"
          />
          <EdTechCategory
            title="AI-Powered Personalized Learning"
            icon="🤖"
            description="AI-driven personalized learning and adaptive education"
            services={[
              "Adaptive learning paths",
              "Personalized content",
              "Learning analytics",
              "Intelligent tutoring",
              "Performance prediction",
              "Custom recommendations",
            ]}
            pricing="$60,000 - $300,000"
            marketSize="$8B"
          />
          <EdTechCategory
            title="Student Information System (SIS)"
            icon="👥"
            description="Complete student information and administration systems"
            services={[
              "Student records",
              "Enrollment management",
              "Academic planning",
              "Financial aid",
              "Parent portals",
              "Reporting tools",
            ]}
            pricing="$50,000 - $250,000"
            marketSize="$6B"
          />
          <EdTechCategory
            title="Assessment & Testing Platform"
            icon="📝"
            description="Digital assessment and testing solutions"
            services={[
              "Online assessments",
              "Automated grading",
              "Plagiarism detection",
              "Performance analytics",
              "Certification management",
              "Proctoring tools",
            ]}
            pricing="$30,000 - $150,000"
            marketSize="$4B"
          />
          <EdTechCategory
            title="Educational Content Management"
            icon="📖"
            description="Content creation and management for educational materials"
            services={[
              "Content authoring",
              "Multimedia support",
              "Version control",
              "Collaboration tools",
              "Publishing workflows",
              "Accessibility features",
            ]}
            pricing="$25,000 - $125,000"
            marketSize="$3B"
          />
        </div>

        {/* Additional EdTech Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <EdTechService
            title="Gamification & Engagement Platform"
            description="Gamified learning experiences and student engagement tools"
            features={[
              "Achievement systems",
              "Leaderboards",
              "Badges & rewards",
              "Progress tracking",
              "Social learning",
              "Competition features",
            ]}
            pricing="$35,000 - $175,000"
            icon="🎮"
          />
          <EdTechService
            title="Language Learning Platform"
            description="AI-powered language learning and practice solutions"
            features={[
              "Interactive lessons",
              "Speech recognition",
              "Conversation practice",
              "Progress tracking",
              "Cultural content",
              "Mobile apps",
            ]}
            pricing="$45,000 - $225,000"
            icon="🌍"
          />
          <EdTechService
            title="STEM Education Platform"
            description="Specialized STEM learning and coding education"
            features={[
              "Coding environments",
              "Virtual labs",
              "Math tools",
              "Science simulations",
              "Project portfolios",
              "Mentor matching",
            ]}
            pricing="$55,000 - $275,000"
            icon="🔬"
          />
          <EdTechService
            title="Special Education Support"
            description="Accessibility and special needs education tools"
            features={[
              "Accessibility features",
              "Assistive technology",
              "Custom learning paths",
              "Progress monitoring",
              "Parent communication",
              "IEP management",
            ]}
            pricing="$40,000 - $200,000"
            icon="♿"
          />
          <EdTechService
            title="Professional Development Platform"
            description="Corporate training and professional development solutions"
            features={[
              "Skill assessments",
              "Learning paths",
              "Certification programs",
              "Progress tracking",
              "Compliance training",
              "Analytics dashboard",
            ]}
            pricing="$30,000 - $150,000"
            icon="💼"
          />
          <EdTechService
            title="Educational Analytics & BI"
            description="Learning analytics and educational business intelligence"
            features={[
              "Student performance analytics",
              "Learning outcome tracking",
              "Predictive modeling",
              "Custom dashboards",
              "Reporting tools",
              "Data visualization",
            ]}
            pricing="$35,000 - $175,000"
            icon="📊"
          />
        </div>

        {/* Learning Technologies */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Advanced Learning Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                AI & Machine Learning
              </h4>
              <p className="text-gray-600 text-sm">
                Personalized learning experiences powered by AI
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🥽</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                VR & AR Learning
              </h4>
              <p className="text-gray-600 text-sm">
                Immersive virtual and augmented reality education
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Mobile Learning
              </h4>
              <p className="text-gray-600 text-sm">
                Cross-platform mobile learning applications
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔗</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Integration APIs
              </h4>
              <p className="text-gray-600 text-sm">
                Seamless integration with existing systems
              </p>
            </div>
          </div>
<<<<<<< HEAD
          
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
=======
export const metadata = {}
  title: "EdTech Solutions | Zion Tech Group",
  description:"
    "Complete educational technology solutions including LMS systems, virtual classrooms, AI-powered learning, and personalized education platforms.",;
};

export default function EdTechPage() {}
  return ("
    <div className="min-h-screen bg-gray-50 py-12">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">;
            EdTech Solutions;
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete educational technology solutions including LMS systems,
            virtual classrooms, AI-powered learning, and personalized education;
            platforms.
          </p>
        </div>

        {/* EdTech Categories */}"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <EdTechCategory"
            title="Learning Management System (LMS)""
            icon="📚""
            description="Comprehensive LMS platforms for educational institutions"
            services={["
              "Course management","
              "Student enrollment","
              "Grade tracking","
              "Content delivery","
              "Assessment tools","
              "Progress analytics",
            ]}"
            pricing="$40,000 - $200,000""
            marketSize="$18B"
          />
          <EdTechCategory"
            title="Virtual Classroom Platform""
            icon="🎓""
            description="Complete virtual classroom and online learning solutions"
            services={["
              "Live video sessions","
              "Interactive whiteboards","
              "Screen sharing","
              "Breakout rooms","
              "Recording capabilities","
              "Mobile access",
            ]}"
            pricing="$35,000 - $175,000""
            marketSize="$12B"
          />
          <EdTechCategory"
            title="AI-Powered Personalized Learning""
            icon="🤖""
            description="AI-driven personalized learning and adaptive education"
            services={["
              "Adaptive learning paths","
              "Personalized content","
              "Learning analytics","
              "Intelligent tutoring","
              "Performance prediction","
              "Custom recommendations",
            ]}"
            pricing="$60,000 - $300,000""
            marketSize="$8B"
          />
          <EdTechCategory"
            title="Student Information System (SIS)""
            icon="👥""
            description="Complete student information and administration systems"
            services={["
              "Student records","
              "Enrollment management","
              "Academic planning","
              "Financial aid","
              "Parent portals","
              "Reporting tools",
            ]}"
            pricing="$50,000 - $250,000""
            marketSize="$6B"
          />
          <EdTechCategory"
            title="Assessment & Testing Platform""
            icon="📝""
            description="Digital assessment and testing solutions"
            services={["
              "Online assessments","
              "Automated grading","
              "Plagiarism detection","
              "Performance analytics","
              "Certification management","
              "Proctoring tools",
            ]}"
            pricing="$30,000 - $150,000""
            marketSize="$4B"
          />
          <EdTechCategory"
            title="Educational Content Management""
            icon="📖""
            description="Content creation and management for educational materials"
            services={["
              "Content authoring","
              "Multimedia support","
              "Version control","
              "Collaboration tools","
              "Publishing workflows","
              "Accessibility features",
            ]}"
            pricing="$25,000 - $125,000""
            marketSize="$3B"
          />
        </div>

        {/* Additional EdTech Services */}"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <EdTechService"
            title="Gamification & Engagement Platform""
            description="Gamified learning experiences and student engagement tools"
            features={["
              "Achievement systems","
              "Leaderboards","
              "Badges & rewards","
              "Progress tracking","
              "Social learning","
              "Competition features",
            ]}"
            pricing="$35,000 - $175,000""
            icon="🎮"
          />
          <EdTechService"
            title="Language Learning Platform""
            description="AI-powered language learning and practice solutions"
            features={["
              "Interactive lessons","
              "Speech recognition","
              "Conversation practice","
              "Progress tracking","
              "Cultural content","
              "Mobile apps",
            ]}"
            pricing="$45,000 - $225,000""
            icon="🌍"
          />
          <EdTechService"
            title="STEM Education Platform""
            description="Specialized STEM learning and coding education"
            features={["
              "Coding environments","
              "Virtual labs","
              "Math tools","
              "Science simulations","
              "Project portfolios","
              "Mentor matching",
            ]}"
            pricing="$55,000 - $275,000""
            icon="🔬"
          />
          <EdTechService"
            title="Special Education Support""
            description="Accessibility and special needs education tools"
            features={["
              "Accessibility features","
              "Assistive technology","
              "Custom learning paths","
              "Progress monitoring","
              "Parent communication","
              "IEP management",
            ]}"
            pricing="$40,000 - $200,000""
            icon="♿"
          />
          <EdTechService"
            title="Professional Development Platform""
            description="Corporate training and professional development solutions"
            features={["
              "Skill assessments","
              "Learning paths","
              "Certification programs","
              "Progress tracking","
              "Compliance training","
              "Analytics dashboard",
            ]}"
            pricing="$30,000 - $150,000""
            icon="💼"
          />
          <EdTechService"
            title="Educational Analytics & BI""
            description="Learning analytics and educational business intelligence"
            features={["
              "Student performance analytics","
              "Learning outcome tracking","
              "Predictive modeling","
              "Custom dashboards","
              "Reporting tools","
              "Data visualization",
            ]}"
            pricing="$35,000 - $175,000""
            icon="📊"
          />
        </div>

        {/* Learning Technologies */}"
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">"
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Advanced Learning Technologies;
          </h3>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
            <div className="text-center">"
              <div className="text-3xl mb-2">🧠</div>"
              <h4 className="font-semibold text-gray-900 mb-2">
                AI & Machine Learning;
              </h4>"
              <p className="text-gray-600 text-sm">
                Personalized learning experiences powered by AI;
              </p>
            </div>"
            <div className="text-center">"
              <div className="text-3xl mb-2">🥽</div>"
              <h4 className="font-semibold text-gray-900 mb-2">
                VR & AR Learning;
              </h4>"
              <p className="text-gray-600 text-sm">
                Immersive virtual and augmented reality education;
              </p>
            </div>"
            <div className="text-center">"
              <div className="text-3xl mb-2">📱</div>"
              <h4 className="font-semibold text-gray-900 mb-2">
                Mobile Learning;
              </h4>"
              <p className="text-gray-600 text-sm">
                Cross-platform mobile learning applications;
              </p>
            </div>"
            <div className="text-center">"
              <div className="text-3xl mb-2">🔗</div>"
              <h4 className="font-semibold text-gray-900 mb-2">
                Integration APIs;
              </h4>"
              <p className="text-gray-600 text-sm">
                Seamless integration with existing systems;
              </p>
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
            </div>
          </div>
        </div>

<<<<<<< HEAD
      {/* Our EdTech Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our EdTech Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational technology solutions that enhance learning, improve engagement, and streamline educational administration.
            </p>
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
=======
        {/* CTA Section */}"
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">"
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Education?
          </h3>"
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our EdTech experts will help you build innovative educational;
            solutions that enhance learning outcomes and engage students like;
            never before.
          </p>"
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
        </div>

<<<<<<< HEAD
      {/* Why Choose Our EdTech Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our EdTech Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine educational expertise with cutting-edge technology to deliver engaging, accessible, and effective learning solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Accessibility First"
              description="WCAG 2.1 AA compliant solutions with assistive technologies and inclusive design principles."
            />
            <FeatureCard
              title="Pedagogical Expertise"
              description="Deep understanding of learning theories, instructional design, and educational best practices."
            />
            <FeatureCard
              title="Scalable Architecture"
              description="Cloud-native solutions that scale from individual classrooms to entire school districts."
            />
            <FeatureCard
              title="Data Privacy & Security"
              description="FERPA compliant with robust security measures to protect student and institutional data."
            />
          </div>
        </div>
      </section>

      {/* EdTech Service Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">EdTech Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect EdTech package for your educational institution's needs and learning objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EdTechPricingCard
              name="EdTech Starter"
              price="$30,000 - $100,000"
              duration="8-16 weeks"
              features={[
                'Basic LMS functionality',
                'Course creation tools',
                'Student management',
                'Assessment platform',
                'Mobile responsiveness',
                'Basic analytics',
              ]}
              bestFor="Small schools and training organizations"
            />
            <EdTechPricingCard
              name="EdTech Professional"
              price="$100,000 - $300,000"
              duration="16-32 weeks"
              features={[
                'Full-featured learning platform',
                'AI-powered personalization',
                'Advanced analytics & reporting',
                'Third-party integrations',
                'Accessibility compliance',
                '24/7 support & maintenance',
              ]}
              bestFor="Universities and large school districts"
              popular={true}
            />
            <EdTechPricingCard
              name="EdTech Enterprise"
              price="$300,000+"
              duration="Custom timeline"
              features={[
                'Custom EdTech solution',
                'Advanced AI & ML integration',
                'Multi-tenant architecture',
                'White-label customization',
                'Custom compliance requirements',
                'Dedicated support team',
              ]}
              bestFor="Large educational enterprises"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Education?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our EdTech solutions can enhance learning, improve engagement, and streamline educational administration.
            Our team has delivered 200+ successful EdTech projects serving 5M+ students worldwide.
=======
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Education?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our EdTech experts will help you build innovative educational
            solutions that enhance learning outcomes and engage students like
            never before.
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </div>
        </div>
<<<<<<< HEAD
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
=======
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}

function EdTechCategory({}
=======
}

function EdTechCategory({
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title,
  icon,
  description,
  services,
  pricing,
  marketSize,
<<<<<<< HEAD
}: {}
=======
}: {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title: string;
  icon: string;
  description: string;
  services: string[];
  pricing: string;
  marketSize: string;
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
      </ul>"
      <div className="border-t pt-4">"
        <div className="flex justify-between items-center">"
          <span className="text-lg font-semibold text-blue-600">{pricing}</span>"
=======
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
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
<<<<<<< HEAD
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
=======
      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-blue-600">{pricing}</span>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <span className="text-sm text-gray-500">Market: {marketSize}</span>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
function EdTechService({}
=======
function EdTechService({
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title,
  description,
  features,
  pricing,
  icon,
<<<<<<< HEAD
}: {}
=======
}: {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
<<<<<<< HEAD
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
=======
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="text-gray-600 space-y-1 mb-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}
<<<<<<< HEAD
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
