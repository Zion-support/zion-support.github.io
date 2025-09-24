import PerformanceMetrics from './components/PerformanceMetrics'
import ROICalculator from './components/ROICalculator'
import Header from './components/Header'
import Footer from './components/Footer'
import ServiceCard from './components/ServiceCard'
import TestimonialsSection from './components/TestimonialsSection'
import { CpuChipIcon, CloudIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: ['AITechnology', 'CloudCybersecurity', 'Micro SaaSConsulting'],
  openGraph: {
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI & Technology Solutions'
      }
    ]
  }
}

const services = [
  {
    title: 'AI Solutions',
    description: 'Custom AI implementations, machine learning models, and intelligent automation systems.',
    icon: <CpuChipIcon className="h-6 w-6" />,
    color: 'bg-blue-100 text-blue-600',
    features: ['Machine LearningNatural Language Processing', 'Computer VisionPredictive Analytics']
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions, DevOps automation, and infrastructure optimization.',
    icon: <CloudIcon className="h-6 w-6" />,
    color: 'bg-green-100 text-green-600',
    features: ['AWS/Azure/GCPKubernetes', 'MicroservicesAuto-scaling']
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security frameworks, threat detection, and compliance solutions.',
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    color: 'bg-purple-100 text-purple-600',
    features: ['Threat DetectionCompliance', 'Security AuditsIncident Response']
  }
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 py-12" role="main">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto" aria-labelledby="hero-heading">
          <div className="text-center mb-16">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced AI and{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge AI, cloud infrastructure, cybersecurity solutions, and autonomous systems that
              drive unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Get Started
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Learn More
              </button>
            </div>
          </div>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">
            Interactive Features
          </h2>
          <article className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Performance Metrics</h3>
            <PerformanceMetrics />
          </article>
          <article className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">ROI Calculator</h3>
            <ROICalculator />
          </article>
        </section>

        {/* Services Section */}
        <section className="text-center mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                features={service.features}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 py-16 rounded-2xl mb-16" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Expert Team</div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />
      </section>
    </main>
    <Footer />
    </>
  )
}