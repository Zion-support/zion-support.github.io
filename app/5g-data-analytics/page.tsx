import React from 'react'
import { ArrowRight } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import { Users } from 'lucide-react'
import { Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'
const FiveGDataAnalyticsPage = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8h-8" />,
      title: 'Advanced Analytics',
      description: 'Cutting-edge 5G data analytics for maximum efficiency',
    },
    {
      icon: <Shield className="w-8h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime',
    },
    {
      icon: <Users className="w-8h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our team of specialists',
    }
  ]
  return (
    <>
      <EnhancedSEO 
        title="5G Data Analytics - Zion Tech Group"
        description="Professional 5G data analytics services by Zion Tech Group. Expert solutions for your business needs."
        keywords="5G, data analytics, business solutions, technology services, professional services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relativepy-20px-4sm:px-6lg:px-8">
          <div className="max-w-7xlmx-autotext-center">
            <h1 className="text-4xlmd:text-6xlfont-boldtext-whitemb-6">
              5G Data Analytics
              <span className="blockbg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
              Professional 5G data analytics services designed to help your business succeed and grow.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center">
              <Link
                to="/contact"
                className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-cyan-500to-purple-600text-whitefont-semiboldrounded-lghover:from-cyan-600hover:to-purple-700transition-allduration-300group"
              >
                Get Started
                <ArrowRight className="ml-2w-5h-5group-hover:translate-x-1transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flexitems-centerpx-8py-4borderborder-cyan-400text-cyan-400font-semiboldrounded-lghover:bg-cyan-400/10transition-allduration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20px-4sm:px-6lg:px-8">
          <div className="max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-3xlmd:text-4xlfont-boldtext-whitemb-4">
                Why Choose Our 5G Data Analytics Services?
              </h2>
              <p className="text-xltext-gray-300max-w-2xlmx-auto">
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="gridgrid-cols-1md:grid-cols-3gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16h-16bg-gradient-to-rfrom-cyan-500to-purple-600rounded-fullflexitems-centerjustify-centermx-automb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20px-4sm:px-6lg:px-8bg-slate-800/30">
          <div className="max-w-4xlmx-autotext-center">
            <h2 className="text-3xlmd:text-4xlfont-boldtext-whitemb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our 5G data analytics services can help your business succeed.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center">
              <Link
                to="/contact"
                className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-cyan-500to-purple-600text-whitefont-semiboldrounded-lghover:from-cyan-600hover:to-purple-700transition-allduration-300group"
              >
                Contact Us
                <ArrowRight className="ml-2w-5h-5group-hover:translate-x-1transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flexitems-centerpx-8py-4borderborder-cyan-400text-cyan-400font-semiboldrounded-lghover:bg-cyan-400/10transition-allduration-300"
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
export default FiveGDataAnalyticsPage