import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
const MicroSaasSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Tools',
      description: 'Intelligent automation tools that streamline your business processes.',
      features: ['Machine Learning', 'Process Automation', 'Data Analytics', 'Predictive Insights']
    },
    {
      icon: CloudIcon,
      title: 'Cloud-Based Platforms',
      description: 'Scalable cloud solutions for modern business needs.',
      features: ['Auto-scaling', 'High Availability', 'Cost Optimization', 'Global CDN']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security for your micro SaaS applications.',
      features: ['Data Encryption', 'Access Control', 'Audit Logging', 'Compliance']
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to drive business decisions.',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Performance Metrics']
    }
  ]
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, automation platforms, and specialized software services with competitive pricing." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, software solutions, SaaS pricing, business software" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, automation platforms, and specialized software services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </h1>
              <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build, deploy, and scale specialized software solutions that solve real business problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Get Started
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized software solutions designed to address specific business challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-6">{solution.description}</p>

                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements and create a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
</div>
</>
  )
}
export default MicroSaasSolutionsPage