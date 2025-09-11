export const metadata = {
  title: 'Mobile App Development | Zion Tech Group',
  description:
    'Professional mobile app development services for iOS, Android, and cross-platform applications with modern technologies.',
};

export default function MobileDevelopmentPage() {
  return (
    <div className='animate-fade-in'>
      <section className='py-12'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Mobile App Development
          </h1>
          <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
            Professional mobile app development for iOS, Android, and
            cross-platform applications. We create engaging, high-performance
            mobile experiences that drive user engagement and business growth.
          </p>
        </div>

        {/* Core Mobile Services */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Core Mobile Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <MobileServiceCard
              title='Native iOS Development'
              description='High-performance iOS apps using Swift and SwiftUI'
              features={[
                'Swift/SwiftUI',
                'Core Data',
                'Push notifications',
                'App Store optimization',
              ]}
              price='Starting at $15k'
              icon='📱'
            />
            <MobileServiceCard
              title='Native Android Development'
              description='Robust Android apps using Kotlin and Jetpack Compose'
              features={[
                'Kotlin/Java',
                'Room database',
                'Material Design',
                'Play Store optimization',
              ]}
              price='Starting at $15k'
              icon='🤖'
            />
            <MobileServiceCard
              title='Cross-Platform Development'
              description='Single codebase for iOS and Android using React Native or Flutter'
              features={[
                'React Native',
                'Flutter',
                'Code sharing',
                'Faster development',
              ]}
              price='Starting at $20k'
              icon='🔄'
            />
            <MobileServiceCard
              title='Progressive Web Apps'
              description='Web apps that work like native mobile applications'
              features={[
                'PWA features',
                'Offline support',
                'Push notifications',
                'App-like experience',
              ]}
              price='Starting at $12k'
              icon='🌐'
            />
            <MobileServiceCard
              title='Mobile Backend Development'
              description='Scalable backend services and APIs for mobile applications'
              features={[
                'RESTful APIs',
                'Real-time features',
                'Database design',
                'Cloud integration',
              ]}
              price='Starting at $18k'
              icon='⚙️'
            />
            <MobileServiceCard
              title='App Maintenance & Support'
              description='Ongoing maintenance, updates, and technical support'
              features={[
                'Bug fixes',
                'Feature updates',
                'Performance optimization',
                '24/7 support',
              ]}
              price='Starting at $2k/mo'
              icon='🔧'
            />
          </div>
        </div>

        {/* Specialized Mobile Solutions */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Specialized Solutions
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <SpecializedMobileCard
              title='E-commerce Mobile Apps'
              description='Complete mobile shopping experiences with payment integration'
              features={[
                'Product catalogs',
                'Shopping cart',
                'Payment processing',
                'Order tracking',
              ]}
              price='$25k - $80k'
              icon='🛒'
            />
            <SpecializedMobileCard
              title='Healthcare Mobile Apps'
              description='HIPAA-compliant mobile solutions for healthcare providers'
              features={[
                'Patient portals',
                'Telemedicine',
                'Health records',
                'Appointment booking',
              ]}
              price='$30k - $100k'
              icon='🏥'
            />
            <SpecializedMobileCard
              title='FinTech Mobile Apps'
              description='Secure financial applications with advanced security features'
              features={[
                'Banking features',
                'Payment processing',
                'Biometric auth',
                'Fraud detection',
              ]}
              price='$35k - $120k'
              icon='💰'
            />
            <SpecializedMobileCard
              title='Social & Communication Apps'
              description='Engaging social platforms and messaging applications'
              features={[
                'Real-time chat',
                'Media sharing',
                'User profiles',
                'Push notifications',
              ]}
              price='$28k - $90k'
              icon='💬'
            />
          </div>
        </div>

        {/* Technical Stack */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Technical Expertise
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <TechStackCard
              title='Mobile Technologies'
              details={[
                'iOS (Swift, SwiftUI)',
                'Android (Kotlin, Jetpack)',
                'React Native',
                'Flutter',
                'Xamarin',
                'Ionic',
              ]}
            />
            <TechStackCard
              title='Backend & APIs'
              details={[
                'Node.js',
                'Python',
                'Java',
                'REST APIs',
                'GraphQL',
                'WebSocket',
              ]}
            />
            <TechStackCard
              title='Cloud & Services'
              details={[
                'AWS',
                'Firebase',
                'MongoDB',
                'PostgreSQL',
                'Redis',
                'CDN',
              ]}
            />
          </div>
        </div>

        {/* App Categories */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            App Categories
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <AppCategoryCard
              title='Business Apps'
              description='Productivity and business management solutions'
              price='$15k - $50k'
              icon='💼'
            />
            <AppCategoryCard
              title='Gaming Apps'
              description='Interactive games and entertainment applications'
              price='$20k - $80k'
              icon='🎮'
            />
            <AppCategoryCard
              title='Educational Apps'
              description='Learning platforms and educational tools'
              price='$18k - $60k'
              icon='🎓'
            />
            <AppCategoryCard
              title='Lifestyle Apps'
              description='Health, fitness, and lifestyle applications'
              price='$12k - $40k'
              icon='🏃'
            />
          </div>
        </div>

        <Pricing />
        <ContactSection />
      </section>
    </div>
  );
}

function MobileServiceCard({
  title,
  description,
  features,
  price,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}) {
  return (
    <div className='border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-xl font-bold text-gray-900 mb-3'>{title}</h3>
      <p className='text-gray-600 mb-4 leading-relaxed'>{description}</p>
      <ul className='text-gray-600 space-y-2 mb-4'>
        {features.map(feature => (
          <li key={feature} className='flex items-center'>
            <span className='text-blue-500 mr-2'>•</span> {feature}
          </li>
        ))}
      </ul>
      <div className='text-lg font-semibold text-blue-600'>{price}</div>
    </div>
  );
}

function SpecializedMobileCard({
  title,
  description,
  features,
  price,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}) {
  return (
    <div className='border border-gray-200 rounded-xl p-8 hover:border-green-300 hover:shadow-lg transition-all duration-200 bg-white'>
      <div className='text-5xl mb-4'>{icon}</div>
      <h3 className='text-2xl font-bold text-gray-900 mb-3'>{title}</h3>
      <p className='text-gray-600 mb-4 leading-relaxed'>{description}</p>
      <ul className='text-gray-600 space-y-2 mb-6'>
        {features.map(feature => (
          <li key={feature} className='flex items-center'>
            <span className='text-green-500 mr-2'>•</span> {feature}
          </li>
        ))}
      </ul>
      <div className='text-xl font-semibold text-green-600'>{price}</div>
    </div>
  );
}

function TechStackCard({
  title,
  details,
}: {
  title: string;
  details: string[];
}) {
  return (
    <div className='border border-gray-200 rounded-xl p-6 bg-gray-50'>
      <h3 className='text-xl font-bold text-gray-900 mb-4'>{title}</h3>
      <ul className='text-gray-600 space-y-2'>
        {details.map(detail => (
          <li key={detail} className='flex items-center'>
            <span className='text-blue-500 mr-2'>•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AppCategoryCard({
  title,
  description,
  price,
  icon,
}: {
  title: string;
  description: string;
  price: string;
  icon: string;
}) {
  return (
    <div className='border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-200 bg-white text-center'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-lg font-bold text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-600 mb-4 text-sm'>{description}</p>
      <div className='text-lg font-semibold text-purple-600'>{price}</div>
    </div>
  );
}

function Pricing() {
  return (
    <div className='mb-16'>
      <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
        Mobile Development Packages
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <Plan
          name='MVP Development'
          price='$15k–$35k'
          duration='8–12 weeks'
          features={[
            'Core features',
            'Basic UI/UX',
            'Single platform',
            'Testing',
          ]}
        />
        <Plan
          name='Full App Development'
          price='$35k–$80k'
          duration='12–20 weeks'
          features={[
            'Complete features',
            'Custom UI/UX',
            'Both platforms',
            'Backend integration',
          ]}
        />
        <Plan
          name='Enterprise Solution'
          price='$80k+'
          duration='Custom timeline'
          features={[
            'Advanced features',
            'Custom design',
            'Scalable backend',
            'Ongoing support',
          ]}
        />
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  duration,
  features,
}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
}) {
  return (
    <div className='border border-gray-200 rounded-xl p-8 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200'>
      <h4 className='text-2xl font-bold text-gray-900 mb-2'>{name}</h4>
      <div className='text-3xl font-bold text-blue-600 mb-2'>{price}</div>
      <div className='text-gray-600 mb-6'>{duration}</div>
      <ul className='text-gray-600 space-y-3'>
        {features.map(feature => (
          <li key={feature} className='flex items-center'>
            <span className='text-blue-500 mr-2'>✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href='tel:+13024640950'
        className='mt-6 block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className='bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 text-center'>
      <h3 className='text-3xl font-bold text-gray-900 mb-4'>
        Ready to Build Your Mobile App?
      </h3>
      <p className='text-lg text-gray-600 mb-8 max-w-3xl mx-auto'>
        Let's discuss your mobile app idea and create a solution that engages
        users and drives business growth. Our team has developed 100+ successful
        mobile applications.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <a
          href='tel:+13024640950'
          className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
        >
          Call +1 302 464 0950
        </a>
        <a
          href='mailto:kleber@ziontechgroup.com'
          className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg'
        >
          Email Us
        </a>
      </div>
      <div className='mt-6 text-sm text-gray-500'>
        <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}
