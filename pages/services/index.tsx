import Head from 'next/head'
import Link from 'next/link'
import { services } from '../../data/services'

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, automation, and technology services for your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI, automation, and technology services designed to transform your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="text-gray-300 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-green-400">{service.price}</span>
                  <Link 
                    href={service.link}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}