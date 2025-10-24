"use client";


import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
const ITServicesPage: React.FC = () => {
  const services = [
  {
      icon: 'Cloud',
    title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for modern businesses",
    features: [
        "AWS/Azure/GCP Migration",
        "Cloud Architecture Design",
        "Cost Optimization",
    "24/7 Monitoring"
      ],
      price: "Starting at $2,000"
},
  {
    icon: 'Shield',
    title: "Cybersecurity",
      description: "Protect your business from evolving threats",
    features: [
        "Security Audits",
        "Threat Detection",
        "Compliance Management",
    "Incident Response"
      ],
      price: "Starting at $3,500"
},
  {
    icon: 'Server',
    title: "DevOps Services",
      description: "Streamline development and deployment processes",
    features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
    "Performance Monitoring"
      ],
      price: "Starting at $4,000"
},
  {
    icon: 'Database',
    title: "Data Analytics",
      description: "Turn your data into actionable insights",
    features: [
        "Data Warehousing",
        "Business Intelligence",
        "Real-time Dashboards",
    "Predictive Analytics"
      ],
      price: "Starting at $5,000"
    }
  ]
  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform",
    "Jenkins", "GitLab CI", "Prometheus", "Grafana", "Elasticsearch",
    "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "React", "Node.js",
    "Python", "Go", "Rust", "TypeScript"
  ]
  return (
    <div className="min-h-screenbg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relativepy-20 px-4 overflow-hidden">
        <div className="absoluteinset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relativemax-w-7xl mx-auto text-center">
          <h1 className="text-4xlmd: text-6xl font-bold text-gray-900 mb-6">
            IT <span className="text-transparentbg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Services</span>
          </h1>
          <p className="text-xltext-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions to modernize your infrastructure and accelerate your digital transformation.
          </p>
          <div className="flexflex-col sm: flex-row gap-4 justify-center">
            <button className="bg-emerald-600hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2h-5 w-5" />
            </button>
            <button className="borderborder-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20px-4">
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xlmd: text-4xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-xltext-gray-600 max-w-2xl mx-auto">
              End-to-end technology services to power your business growth.
            </p>
          </div>
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-whitep-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300">
                <div className="flexitems-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
                  <div className="h-6w-6 text-white">{service.icon}</div>
                </div>
                <h3 className="text-xlfont-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600mb-4">{service.description}</p>
                <ul className="space-y-2mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flexitems-center text-sm text-gray-600">
                      <CheckCircle className="h-4w-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-emerald-600font-semibold mb-4">{service.price}</div>
                <button className="w-fullbg-emerald-600 hover: bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="py-20px-4 bg-white/5">
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xlmd: text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xltext-gray-600 max-w-2xl mx-auto">
              We use the latest and most reliable technologies to build robust solutions.
            </p>
          </div>
          <div className="gridgrid-cols-2 md: grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-whitep-4 rounded-lg shadow-md text-center hover: shadow-lg transition-shadow duration-300">
                <span className="text-gray-700font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20px-4">
        <div className="max-w-7xlmx-auto">
          <div className="gridgrid-cols-1 lg: grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xlmd: text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our IT Services?
              </h2>
              <div className="space-y-6">
                <div className="flexitems-start space-x-4">
                  <div className="flex-shrink-0w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lgfont-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our certified professionals have years of experience with cutting-edge technologies.</p>
                  </div>
                </div>
                <div className="flexitems-start space-x-4">
                  <div className="flex-shrink-0w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lgfont-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock monitoring and support to ensure your systems run smoothly.</p>
                  </div>
                </div>
                <div className="flexitems-start space-x-4">
                  <div className="flex-shrink-0w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lgfont-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                    <p className="text-gray-600">Our solutions grow with your business, adapting to your changing needs.</p>
                  </div>
                </div>
                <div className="flexitems-start space-x-4">
                  <div className="flex-shrink-0w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lgfont-semibold text-gray-900 mb-2">Cost-Effective</h3>
                    <p className="text-gray-600">Optimize your IT spending with our efficient and cost-effective solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-rfrom-emerald-500 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xlfont-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lgmb-6">
                Let&apos;s discuss your IT needs and create a customized solution that drives your business forward.
              </p>
              <a
                href="/contact"
                className="bg-whitetext-emerald-600 px-6 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors duration-200 inline-flex items-center"
              >
                Contact Us Today
                <ArrowRight className="ml-2h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20px-4 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xlmx-auto text-center">
          <h2 className="text-3xlmd: text-4xl font-bold text-white mb-4">
            Transform Your IT Infrastructure Today
          </h2>
          <p className="text-xltext-emerald-100 mb-8">
            Partner with us to build a robust, scalable, and secure technology foundation for your business.
          </p>
          <div className="flexflex-col sm: flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-whitetext-emerald-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-colors duration-200 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2h-5 w-5" />
            </a>
            <a
              href="/ai-services"
              className="borderborder-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white/10 transition-colors duration-200"
            >
              Explore AI Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ITServicesPage