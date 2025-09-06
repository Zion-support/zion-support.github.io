export const metadata = { 
  title: 'Mobile App Development | Zion Tech Group',
  description: 'Professional mobile app development services including iOS, Android, React Native, Flutter, and cross-platform solutions.'
};

export default function MobileDevelopmentPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Mobile App Development
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Create powerful mobile applications that engage users and drive business growth. 
          From native iOS and Android to cross-platform solutions.
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
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mobile Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive mobile app development services for all platforms and business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MobileServiceCard
            title="Native iOS Apps"
            description="High-performance iOS applications built with Swift and SwiftUI for optimal user experience"
            features={["Swift/SwiftUI", "Core Data", "Push notifications", "App Store optimization", "iOS 17+ support"]}
            pricing="$8,000–$25,000"
            icon="📱"
          />
          <MobileServiceCard
            title="Native Android Apps"
            description="Robust Android applications using Kotlin and Jetpack Compose for modern Android development"
            features={["Kotlin/Java", "Jetpack Compose", "Material Design", "Play Store optimization", "Android 14+ support"]}
            pricing="$7,000–$22,000"
            icon="🤖"
          />
          <MobileServiceCard
            title="React Native Apps"
            description="Cross-platform mobile apps that share code between iOS and Android for faster development"
            features={["React Native", "Expo", "Native modules", "Code sharing", "Hot reload"]}
            pricing="$6,000–$18,000"
            icon="⚛️"
          />
          <MobileServiceCard
            title="Flutter Apps"
            description="Beautiful, fast mobile apps built with Google's Flutter framework for consistent UI across platforms"
            features={["Dart/Flutter", "Material Design", "Cupertino widgets", "Hot reload", "Custom animations"]}
            pricing="$5,500–$16,000"
            icon="🎯"
          />
          <MobileServiceCard
            title="Progressive Web Apps"
            description="Web applications that work like native apps with offline capabilities and push notifications"
            features={["PWA", "Service workers", "Offline support", "Push notifications", "App-like experience"]}
            pricing="$4,000–$12,000"
            icon="🌐"
          />
          <MobileServiceCard
            title="Hybrid Apps"
            description="Mobile apps built with web technologies wrapped in a native container for rapid deployment"
            features={["Ionic", "Cordova", "PhoneGap", "WebView", "Plugin ecosystem"]}
            pricing="$3,500–$10,000"
            icon="🔗"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use the latest mobile development technologies and frameworks to build exceptional apps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MobileTech
            title="iOS Development"
            technologies={["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit"]}
          />
          <MobileTech
            title="Android Development"
            technologies={["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Hilt"]}
          />
          <MobileTech
            title="Cross-Platform"
            technologies={["React Native", "Flutter", "Xamarin", "Ionic", "Cordova"]}
          />
          <MobileTech
            title="Backend & APIs"
            technologies={["Node.js", "Firebase", "AWS", "GraphQL", "REST APIs"]}
          />
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven mobile development process ensures successful app launches and user satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MobileProcessStep
            step="1"
            title="Discovery & Design"
            description="User research, wireframing, UI/UX design, and technical architecture planning."
          />
          <MobileProcessStep
            step="2"
            title="Development"
            description="Agile development with regular testing, code reviews, and client feedback integration."
          />
          <MobileProcessStep
            step="3"
            title="Testing & QA"
            description="Comprehensive testing including unit tests, integration tests, and user acceptance testing."
          />
          <MobileProcessStep
            step="4"
            title="Launch & Support"
            description="App store deployment, launch support, and ongoing maintenance and updates."
          />
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function MobileServiceCard({ title, description, features, pricing, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lg font-bold text-blue-600 mb-4">{pricing}</div>
      <a
        href="tel:+13024640950"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function MobileTech({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function MobileProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12 bg-gray-50 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile Development Pricing</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transparent pricing for mobile app development. Choose the plan that fits your project needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <MobilePlan 
          name="MVP Development" 
          price="$8k–$20k" 
          duration="6–12 weeks"
          features={[
            "Core features only",
            "Basic UI/UX design",
            "Single platform",
            "Basic testing",
            "App store submission",
            "3 months support"
          ]}
          popular={false}
        />
        <MobilePlan 
          name="Full-Featured App" 
          price="$20k–$60k" 
          duration="12–24 weeks"
          features={[
            "Complete feature set",
            "Custom UI/UX design",
            "Cross-platform support",
            "Comprehensive testing",
            "Backend integration",
            "6 months support"
          ]}
          popular={true}
        />
        <MobilePlan 
          name="Enterprise App" 
          price="$60k+" 
          duration="20+ weeks"
          features={[
            "Complex functionality",
            "Advanced security",
            "Multi-platform deployment",
            "Enterprise integration",
            "Scalable architecture",
            "12 months support"
          ]}
          popular={false}
        />
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          All plans include: Source code ownership, app store optimization, launch support
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
            Get Mobile Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function MobilePlan({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white relative ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}