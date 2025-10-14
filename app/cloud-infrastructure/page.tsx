import React from 'react''
import { Helmet } from 'react-helmet-async'
export default function Infrastructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Infrastructure | Zion Tech Group</title>"
        <meta name="description" content="Professional Infrastructure services by Zion Tech Group. Advanced AI and IT solutions for your business." />"
        <meta name="keywords" content="cloud infrastructure, cloud services, IT services, Zion Tech Group, cloud computing" />
      </Helmet>"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-white mb-6">"
            Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>"
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud infrastructure solutions designed for scalability, security, and performance.
          </p>
        </div>"
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">"
            <h3 className="text-xl font-semibold text-white mb-4">Migration</h3>"
            <p className="text-gray-300 mb-4">
              Seamlessly migrate your applications and data to the cloud with minimal downtime.
            </p>"
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• AWS, Azure, GCP expertise</li>
              <li>• Zero-downtime migration</li>
              <li>• Cost optimization</li>
            </ul>
          </div>"
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">"
            <h3 className="text-xl font-semibold text-white mb-4"></h3>"
            <p className="text-gray-300 mb-4">
              Comprehensive security solutions to protect your cloud infrastructure.
            </p>"
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Identity and access management</li>
              <li>• Data encryption</li>
              <li>• Compliance monitoring</li>
            </ul>
          </div>"
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">"
            <h3 className="text-xl font-semibold text-white mb-4">Auto Scaling</h3>"
            <p className="text-gray-300 mb-4">
              Automatically scale your infrastructure based on demand and usage patterns.
            </p>"
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Load balancing</li>
              <li>• Resource optimization</li>
              <li>• Cost efficiency</li>
            </ul>
          </div>
        </div>"
        <div className="text-center">"
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">"
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Infrastructure?</h2>"
            <p className="text-gray-300 mb-6">
              Our cloud infrastructure experts are ready to help you build a scalable, secure, and efficient cloud environment.
            </p>"
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );}
}
const Page = () => {
  const features = [
    {"
      icon: <CheckCircle className="w-8 h-8" />'
      title: 'Advanced Features''
      description: 'Cutting-edge technology for maximum efficiency'
    }
    {"
      icon: <Shield className="w-8 h-8" />'
      title: 'Secure & Reliable''
      description: 'Enterprise-grade security and 99.9% uptime'
    }
    {"
      icon: <Users className="w-8 h-8" />'
      title: 'Expert Support''
      description: '24/7 support from our team of specialists'
    }
  ]
  return (
    <>
      <EnhancedSEO "
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services"
      />
      "
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}"
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto text-center">"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page"
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional page services designed to help your business succeed and grow.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link"
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started"
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link"
                to="/demo""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}"
        <section className="py-20 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Page Services?
              </h2>"
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => ("
                <div key={index} className="text-center">"
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}"
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">"
          <div className="max-w-4xl mx-auto text-center">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>"
            <p className="text-xl text-gray-300 mb-8">'
              Let's discuss how our page services can help your business succeed.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link"
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us"
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link"
                to="/services""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}'
const page = React.lazy(() => import('./page'))
export default page'"