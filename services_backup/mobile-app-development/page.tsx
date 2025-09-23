export const metadata = {
  title: "Mobile App Development | Zion Tech Group",
  description:
    "Create stunning mobile apps for iOS and Android with our expert development team. Native, cross-platform, and hybrid solutions."};

export default function MobileAppDevelopmentPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Mobile App Development
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Create stunning mobile apps for iOS and Android with our expert
        development team. Native, cross-platform, and hybrid solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Native Development"
          features={[
            "iOS Swift/Objective-C",
            "Android Kotlin/Java",
            "Platform-specific features",
            "Optimal performance"]}
        />
        <FeatureCard
          title="Cross-Platform"
          features={[
            "React Native",
            "Flutter development",
            "Xamarin solutions",
            "Code sharing"]}
        />
        <FeatureCard
          title="App Services"
          features={[
            "UI/UX design",
            "Backend integration",
            "App store deployment",
            "Maintenance & updates"]}
        />
      </div>

      <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Our Mobile App Development?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <span className="text-rose-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Expert Team</h3>
              <p className="text-gray-600">
                Experienced developers with 100+ successful app launches
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-rose-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Modern Technologies
              </h3>
              <p className="text-gray-600">
                Latest frameworks and tools for cutting-edge mobile experiences
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-rose-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Full-Service Support
              </h3>
              <p className="text-gray-600">
                From concept to app store, including design, development, and
                marketing
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-rose-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Scalable Solutions
              </h3>
              <p className="text-gray-600">
                Build apps that grow with your business and user base
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Build Your Mobile App?
        </h2>
        <p className="text-gray-600 mb-6">
          Start with a free consultation to discuss your app idea and
          requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  features}: {
  title: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="text-rose-500 mr-2">•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="MVP App"
          price="$19,999"
          features={[
            "Basic functionality",
            "Simple UI/UX",
            "1 platform (iOS or Android)",
            "2 months development"]}
        />
        <Plan
          name="Professional App"
          price="$49,999"
          features={[
            "Advanced features",
            "Custom UI/UX design",
            "Both platforms",
            "Backend integration",
            "4 months development"]}
          popular={true}
        />
        <Plan
          name="Enterprise App"
          price="$99,999+"
          features={[
            "Complex functionality",
            "Custom backend",
            "Advanced integrations",
            "Dedicated team",
            "6+ months development"]}
        />
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  features,
  popular = false}: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-rose-500 ring-2 ring-rose-200" : "border-gray-200"}`}
    >
      {popular && (
        <div className="bg-rose-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-rose-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular
            ? "bg-rose-600 text-white hover:bg-rose-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
