import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { 
  DevicePhoneMobileIcon, 
  CloudIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function MobileApplicationsPage() {
  const features = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Ultra-Fast Mobile Apps',
      description: 'Build high-performance mobile applications that leverage 5G speeds.',
      benefits: ['Instant loading', 'Real-time sync', 'Smooth performance']
    },
    {
      icon: CloudIcon,
      title: 'Cloud-Native Architecture',
      description: 'Design mobile apps with cloud-first architecture for scalability.',
      benefits: ['Auto-scaling', 'Global deployment', 'Easy maintenance']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enhanced Security',
      description: 'Implement enterprise-grade security for mobile applications.',
      benefits: ['Data encryption', 'Secure authentication', 'Privacy protection']
    },
    {
      icon: ChartBarIcon,
      title: 'Real-time Analytics',
      description: 'Track user behavior and app performance in real-time.',
      benefits: ['Live metrics', 'User insights', 'Performance monitoring']
    }
  ];

  const appTypes = [
    {
      title: 'AR/VR Applications',
      description: 'Create immersive experiences with ultra-low latency.',
      icon: GlobeAltIcon
    },
    {
      title: 'Live Streaming Apps',
      description: 'Enable high-quality live streaming and video calls.',
      icon: BoltIcon
    },
    {
      title: 'Gaming Applications',
      description: 'Build cloud gaming and multiplayer experiences.',
      icon: DevicePhoneMobileIcon
    },
    {
      title: 'Enterprise Apps',
      description: 'Develop secure business applications for mobile workforce.',
      icon: ShieldCheckIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Mobile Applications - Zion Tech Group</title>
        <meta name="description" content="Build high-performance mobile applications with 5G technology. AR/VR, live streaming, gaming, and enterprise solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                5G Mobile Applications
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Build next-generation mobile applications that leverage 5G technology for enhanced performance and user experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Mobile App Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 5G mobile applications deliver exceptional performance and user experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Application Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build various types of mobile applications powered by 5G technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {appTypes.map((app, index) => (
                <div key={app.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <app.icon className="h-12 w-12 text-pink-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {app.title}
                  </h3>
                  <p className="text-gray-600">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G mobile applications can transform your business.
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
            >
              Schedule Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}