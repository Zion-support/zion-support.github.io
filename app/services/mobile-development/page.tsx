import Link from 'next/link';

export const metadata = { 
  title: 'Mobile Development Services | Zion Tech Group',
  description: 'Native and cross-platform mobile app development services for iOS and Android, including React Native, Flutter, and native development.'
};

export default function MobileDevelopmentPage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Mobile Development Services</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Build powerful mobile applications that engage users and drive business growth. 
          From native iOS/Android apps to cross-platform solutions, we deliver exceptional mobile experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <MobileServiceCard
            title="Native iOS Development"
            description="High-performance iOS apps built with Swift and SwiftUI for optimal user experience"
            features={["Swift/SwiftUI", "Core Data", "Push notifications", "App Store optimization"]}
            price="$20k-$60k"
            timeline="4-12 weeks"
            icon="📱"
          />
          <MobileServiceCard
            title="Native Android Development"
            description="Robust Android applications using Kotlin and Jetpack Compose for modern UI"
            features={["Kotlin/Java", "Jetpack Compose", "Material Design", "Google Play optimization"]}
            price="$18k-$55k"
            timeline="4-12 weeks"
            icon="🤖"
          />
          <MobileServiceCard
            title="React Native Development"
            description="Cross-platform mobile apps that work seamlessly on both iOS and Android"
            features={["React Native", "Native modules", "Code sharing", "Hot reloading"]}
            price="$15k-$45k"
            timeline="3-10 weeks"
            icon="⚛️"
          />
          <MobileServiceCard
            title="Flutter Development"
            description="Beautiful, fast mobile apps built with Google's Flutter framework"
            features={["Dart language", "Widget-based UI", "Hot reload", "Material Design"]}
            price="$16k-$48k"
            timeline="3-10 weeks"
            icon="🦋"
          />
          <MobileServiceCard
            title="Progressive Web Apps (PWA)"
            description="Web applications that provide native app-like experiences on mobile devices"
            features={["Service workers", "Offline functionality", "Push notifications", "App-like UI"]}
            price="$12k-$35k"
            timeline="2-8 weeks"
            icon="🌐"
          />
          <MobileServiceCard
            title="Mobile App Maintenance"
            description="Ongoing support, updates, and optimization for existing mobile applications"
            features={["Bug fixes", "Feature updates", "Performance optimization", "OS compatibility"]}
            price="$2k-$8k/month"
            timeline="Ongoing"
            icon="🔧"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Mobile Development Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MobileTechCard
            title="iOS Development"
            technologies={["Swift", "SwiftUI", "UIKit", "Core Data", "Xcode"]}
            description="Native iOS app development"
          />
          <MobileTechCard
            title="Android Development"
            technologies={["Kotlin", "Java", "Jetpack Compose", "Room", "Android Studio"]}
            description="Native Android app development"
          />
          <MobileTechCard
            title="Cross-Platform"
            technologies={["React Native", "Flutter", "Xamarin", "Ionic", "Cordova"]}
            description="Multi-platform development"
          />
          <MobileTechCard
            title="Backend & APIs"
            technologies={["Node.js", "Python", "Firebase", "AWS", "GraphQL"]}
            description="Mobile backend services"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Mobile App Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AppTypeCard
            type="E-commerce Apps"
            description="Online shopping and marketplace applications with payment integration"
            features={["Product catalog", "Shopping cart", "Payment processing", "Order tracking"]}
            icon="🛒"
          />
          <AppTypeCard
            type="Social Media Apps"
            description="Social networking and community platforms with real-time features"
            features={["User profiles", "News feeds", "Messaging", "Media sharing"]}
            icon="👥"
          />
          <AppTypeCard
            type="Business Apps"
            description="Enterprise and productivity applications for business operations"
            features={["CRM integration", "Document management", "Team collaboration", "Analytics"]}
            icon="💼"
          />
          <AppTypeCard
            type="Health & Fitness Apps"
            description="Wellness and fitness tracking applications with health data integration"
            features={["Activity tracking", "Health metrics", "Goal setting", "Progress monitoring"]}
            icon="💪"
          />
          <AppTypeCard
            type="Food & Delivery Apps"
            description="Restaurant and food delivery applications with location services"
            features={["Restaurant listings", "Menu browsing", "Order placement", "Delivery tracking"]}
            icon="🍕"
          />
          <AppTypeCard
            type="Gaming Apps"
            description="Interactive gaming applications with engaging user experiences"
            features={["Game mechanics", "Multiplayer support", "In-app purchases", "Leaderboards"]}
            icon="🎮"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MobileProcessStep
            step="1"
            title="Discovery & Planning"
            description="Define app requirements, user stories, and technical architecture"
            duration="1-2 weeks"
          />
          <MobileProcessStep
            step="2"
            title="Design & Prototyping"
            description="Create wireframes, mockups, and interactive prototypes"
            duration="2-4 weeks"
          />
          <MobileProcessStep
            step="3"
            title="Development & Testing"
            description="Build the app, implement features, and conduct thorough testing"
            duration="4-12 weeks"
          />
          <MobileProcessStep
            step="4"
            title="Launch & Optimization"
            description="Deploy to app stores, monitor performance, and iterate based on feedback"
            duration="1-2 weeks"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing & Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MobilePricingCard
            name="MVP App"
            price="$15k–$35k"
            duration="4–8 weeks"
            features={[
              "Core functionality",
              "Basic UI/UX",
              "One platform",
              "Basic backend",
              "App store submission"
            ]}
            recommended={false}
          />
          <MobilePricingCard
            name="Full-Featured App"
            price="$35k–$75k"
            duration="8–16 weeks"
            features={[
              "Advanced features",
              "Custom UI/UX",
              "Cross-platform",
              "Advanced backend",
              "Analytics & monitoring"
            ]}
            recommended={true}
          />
          <MobilePricingCard
            name="Enterprise App"
            price="$75k+"
            duration="12+ weeks"
            features={[
              "Complex functionality",
              "Enterprise integration",
              "Security features",
              "Scalable architecture",
              "Ongoing support"
            ]}
            recommended={false}
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ready to Build Your Mobile App?</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Let's discuss your mobile app vision and create a solution that engages users 
          and drives business growth across all mobile platforms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors text-center"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors text-center"
          >
            Email Us
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function MobileServiceCard({ title, description, features, price, timeline, icon }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-pink-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-pink-600">{price}</span>
        <span className="text-sm text-gray-500">{timeline}</span>
      </div>
    </div>
  );
}

function MobileTechCard({ title, technologies, description }: {
  title: string;
  technologies: string[];
  description: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function AppTypeCard({ type, description, features, icon }: {
  type: string;
  description: string;
  features: string[];
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{type}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-pink-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileProcessStep({ step, title, description, duration }: {
  step: string;
  title: string;
  description: string;
  duration: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2 text-sm">{description}</p>
      <span className="text-pink-600 text-sm font-semibold">{duration}</span>
    </div>
  );
}

function MobilePricingCard({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${recommended ? 'border-pink-500 bg-pink-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-pink-600 mb-2">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-pink-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
        recommended 
          ? 'bg-pink-600 text-white hover:bg-pink-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}