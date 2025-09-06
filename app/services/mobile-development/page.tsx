export const metadata = { 
  title: 'Mobile Development Services | Zion Tech Group',
  description: 'Comprehensive mobile app development services including iOS, Android, cross-platform solutions, and mobile strategy consulting.'
};

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Mobile Development Services</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Create powerful, user-friendly mobile applications that engage your customers and drive business growth. 
            We develop native and cross-platform solutions for iOS, Android, and beyond.
          </p>
        </div>

        {/* Native Mobile Development */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Native Mobile Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="iOS App Development"
              description="Native iOS applications built with Swift and SwiftUI for optimal performance"
              features={["Swift/SwiftUI", "Core Data", "Push notifications", "App Store optimization"]}
              price="$25k - $80k"
              icon="🍎"
            />
            <ServiceCard
              title="Android App Development"
              description="Native Android applications using Kotlin and Jetpack Compose"
              features={["Kotlin/Java", "Room database", "Material Design", "Google Play optimization"]}
              price="$25k - $80k"
              icon="🤖"
            />
            <ServiceCard
              title="iOS & Android Apps"
              description="Complete mobile solution with native apps for both platforms"
              features={["Cross-platform design", "Shared backend", "Consistent UX", "Unified maintenance"]}
              price="$40k - $120k"
              icon="📱"
            />
            <ServiceCard
              title="Apple Watch Apps"
              description="Native watchOS applications for Apple Watch with health and fitness features"
              features={["watchOS development", "HealthKit integration", "Complications", "Workout tracking"]}
              price="$15k - $40k"
              icon="⌚"
            />
            <ServiceCard
              title="Android Wear Apps"
              description="Wear OS applications for Android smartwatches and wearables"
              features={["Wear OS development", "Tiles", "Complications", "Health services"]}
              price="$15k - $40k"
              icon="⌚"
            />
            <ServiceCard
              title="TV Apps (Apple TV/Android TV)"
              description="Native applications for smart TV platforms and streaming devices"
              features={["tvOS/Android TV", "Remote control optimization", "Video streaming", "Content discovery"]}
              price="$20k - $60k"
              icon="📺"
            />
          </div>
        </div>

        {/* Cross-Platform Development */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cross-Platform Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="React Native Apps"
              description="Cross-platform mobile apps using React Native for iOS and Android"
              features={["Single codebase", "Native performance", "Third-party libraries", "Hot reloading"]}
              price="$20k - $70k"
              icon="⚛️"
            />
            <ServiceCard
              title="Flutter Apps"
              description="Beautiful, fast mobile apps using Google's Flutter framework"
              features={["Dart language", "Material Design", "Cupertino widgets", "Hot reload"]}
              price="$20k - $70k"
              icon="🐦"
            />
            <ServiceCard
              title="Xamarin Apps"
              description="Cross-platform development using Microsoft's Xamarin framework"
              features={["C# development", "Native UI", "Shared business logic", "Azure integration"]}
              price="$25k - $75k"
              icon="🔷"
            />
            <ServiceCard
              title="Ionic Apps"
              description="Hybrid mobile apps using web technologies and Ionic framework"
              features={["Web technologies", "Cordova plugins", "Progressive Web App", "Easy deployment"]}
              price="$15k - $50k"
              icon="⚡"
            />
            <ServiceCard
              title="Unity Mobile Games"
              description="Cross-platform mobile games using Unity game engine"
              features={["3D/2D games", "Physics engine", "Asset optimization", "Monetization"]}
              price="$30k - $100k"
              icon="🎮"
            />
            <ServiceCard
              title="Progressive Web Apps (PWA)"
              description="Web applications that work like native mobile apps"
              features={["Offline functionality", "Push notifications", "App-like experience", "Easy updates"]}
              price="$10k - $35k"
              icon="🌐"
            />
          </div>
        </div>

        {/* Mobile App Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized Mobile Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="E-commerce Mobile Apps"
              description="Complete mobile shopping solutions with payment integration and inventory management"
              features={["Product catalog", "Shopping cart", "Payment processing", "Order tracking"]}
              price="$30k - $90k"
              icon="🛒"
            />
            <ServiceCard
              title="Social Media Apps"
              description="Social networking and community platforms with real-time features"
              features={["User profiles", "Feed system", "Messaging", "Content sharing"]}
              price="$40k - $120k"
              icon="👥"
            />
            <ServiceCard
              title="Health & Fitness Apps"
              description="Mobile health solutions with tracking, monitoring, and wellness features"
              features={["Health tracking", "Data visualization", "Goal setting", "Progress monitoring"]}
              price="$25k - $80k"
              icon="💪"
            />
            <ServiceCard
              title="Fintech Mobile Apps"
              description="Financial technology applications with secure payment and banking features"
              features={["Secure authentication", "Payment processing", "Account management", "Compliance"]}
              price="$50k - $150k"
              icon="💰"
            />
            <ServiceCard
              title="On-Demand Service Apps"
              description="Uber-like applications for various on-demand services"
              features={["Real-time tracking", "Booking system", "Payment integration", "Driver/customer apps"]}
              price="$60k - $180k"
              icon="🚗"
            />
            <ServiceCard
              title="Enterprise Mobile Apps"
              description="Business applications for internal use with security and productivity features"
              features={["Employee portal", "Document management", "Communication tools", "Security"]}
              price="$35k - $100k"
              icon="🏢"
            />
          </div>
        </div>

        {/* Mobile App Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Mobile Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Push Notifications"
              description="Real-time push notification systems for user engagement"
              features={["Targeted messaging", "Scheduled notifications", "Rich media", "Analytics"]}
              price="$3k - $10k"
              icon="🔔"
            />
            <ServiceCard
              title="Offline Functionality"
              description="Apps that work seamlessly without internet connection"
              features={["Data synchronization", "Offline storage", "Conflict resolution", "Background sync"]}
              price="$5k - $15k"
              icon="📶"
            />
            <ServiceCard
              title="Location Services"
              description="GPS and location-based features for enhanced user experience"
              features={["GPS tracking", "Geofencing", "Maps integration", "Location analytics"]}
              price="$4k - $12k"
              icon="📍"
            />
            <ServiceCard
              title="Biometric Authentication"
              description="Secure authentication using fingerprint, face ID, and other biometrics"
              features={["Fingerprint scanning", "Face recognition", "Voice authentication", "Security"]}
              price="$6k - $18k"
              icon="🔐"
            />
            <ServiceCard
              title="AR/VR Integration"
              description="Augmented and virtual reality features for immersive experiences"
              features={["AR overlays", "3D models", "Camera integration", "Interactive elements"]}
              price="$15k - $50k"
              icon="🥽"
            />
            <ServiceCard
              title="AI & Machine Learning"
              description="Intelligent features powered by AI and machine learning"
              features={["Image recognition", "Natural language processing", "Recommendations", "Predictive analytics"]}
              price="$20k - $60k"
              icon="🤖"
            />
          </div>
        </div>

        {/* Mobile App Maintenance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mobile App Maintenance & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="App Store Optimization"
              description="Optimize your app for better visibility and downloads in app stores"
              features={["Keyword optimization", "Screenshots design", "Description writing", "ASO strategy"]}
              price="$2k - $8k"
              icon="📈"
            />
            <ServiceCard
              title="App Performance Optimization"
              description="Improve app speed, responsiveness, and overall user experience"
              features={["Performance profiling", "Memory optimization", "Battery optimization", "Load time reduction"]}
              price="$5k - $20k"
              icon="⚡"
            />
            <ServiceCard
              title="App Updates & Maintenance"
              description="Regular updates, bug fixes, and feature enhancements"
              features={["Bug fixes", "Feature updates", "OS compatibility", "Security patches"]}
              price="$1k - $5k/month"
              icon="🔧"
            />
            <ServiceCard
              title="App Analytics & Monitoring"
              description="Comprehensive analytics and monitoring for app performance and user behavior"
              features={["User analytics", "Crash reporting", "Performance monitoring", "A/B testing"]}
              price="$3k - $10k"
              icon="📊"
            />
            <ServiceCard
              title="App Security Audit"
              description="Comprehensive security assessment and hardening for mobile applications"
              features={["Security testing", "Vulnerability assessment", "Code review", "Compliance check"]}
              price="$8k - $25k"
              icon="🛡️"
            />
            <ServiceCard
              title="App Migration Services"
              description="Migrate existing apps to new platforms or update legacy applications"
              features={["Platform migration", "Code modernization", "Data migration", "Testing"]}
              price="$15k - $50k"
              icon="🔄"
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mobile Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="MVP Mobile App"
              price="$15k - $40k"
              duration="6-12 weeks"
              features={[
                "Basic functionality",
                "Simple UI/UX",
                "Core features only",
                "Single platform",
                "Basic testing",
                "2 weeks support"
              ]}
              popular={false}
            />
            <PricingCard
              name="Full-Featured App"
              price="$40k - $120k"
              duration="12-24 weeks"
              features={[
                "Complete feature set",
                "Professional UI/UX",
                "Cross-platform",
                "Advanced features",
                "Comprehensive testing",
                "App store deployment",
                "3 months support"
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise Mobile Solution"
              price="$100k+"
              duration="Custom timeline"
              features={[
                "Custom enterprise features",
                "Advanced security",
                "Backend integration",
                "Multiple platforms",
                "Scalable architecture",
                "Ongoing maintenance",
                "6 months support"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  );
}

function ServiceCard({ 
  title, 
  description, 
  features, 
  price, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lg font-bold text-blue-600 mb-4">{price}</div>
      <a 
        href="tel:+13024640950" 
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Quote
      </a>
    </div>
  );
}

function PricingCard({ 
  name, 
  price, 
  duration, 
  features, 
  popular 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${popular ? 'border-blue-500' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white">
      <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">
        Let's discuss your mobile app vision and create a solution that engages your users and drives business growth. 
        Our mobile development experts are ready to bring your ideas to life.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
          href="tel:+13024640950"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          📞 Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
        >
          ✉️ Email Us
        </a>
        <div className="text-center">
          <div className="text-sm opacity-90">Visit us at:</div>
          <div className="font-semibold">364 E Main St STE 1008</div>
          <div className="font-semibold">Middletown, DE 19709</div>
        </div>
      </div>
    </div>
  );
}