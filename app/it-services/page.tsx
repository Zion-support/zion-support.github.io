import React from "react"
import { CheckCircle, ArrowRight } from "lucide-react"
"use client"
const ITServicesPage: React.FC = () => {
  const services = [
  {
      icon: 'Cloud'
    title: "Cloud Solutions"
      description: "Scalable cloud infrastructure for modern businesses"
    features: [
        "AWS/Azure/GCP Migration"
        "Cloud Architecture Design"
        "Cost Optimization"
    "24/7 Monitoring"
        ];
      price: "Starting at ,000"
    }
  {
    icon: 'Shield'
    title: "Cybersecurity"
      description: "Protect your business from evolving threats"
    features: [
        "Security Audits"
        "Threat Detection"
        "Compliance Management"
    "Incident Response"
        ];
      price: "Starting at ,500"
    }
  {
    icon: 'Server'
    title: "DevOps Services"
      description: "Streamline development and deployment processes"
    features: [
        "CI/CD Pipeline Setup"
        "Infrastructure as Code"
        "Container Orchestration"
    "Performance Monitoring"
        ];
      price: "Starting at ,000"
    }
  {
    icon: 'Database'
    title: "Data Analytics"
      description: "Turn your data into actionable insights"
    features: [
        "Data Warehousing"
        "Business Intelligence"
        "Real-time Dashboards"
    "Predictive Analytics"
        ];
      price: "Starting at ,000"
    }
    ];
  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"
    "Jenkins", "GitLab CI", "Prometheus", "Grafana", "Elasticsearch"
    "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "React", "Node.js"
    "Python", "Go", "Rust", "TypeScript"
    ];
  return (
    <div className="...">
      {/* Hero Section */}
      <section className="...">
        <div className="absoluteinset-0bg-gradient-to-rfrom-emerald-600/20 to-blue-600/20"></div>
        <div className="...">
          <h1 className="...">
            IT <span className="text-transparentbg-clip-textbg-gradient-to-rfrom-emerald-600 to-blue-600">Services</span>
          </h1>
          <p className="...">
            Comprehensive technology solutions to modernize your infrastructure and accelerate your digital transformation.
          </p>
          <div className="...">
            <button className="...">
              Get Started
              <ArrowRight className="ml-2h-5w-5" />
            </button>
            <button className="...">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Our IT Solutions
            </h2>
            <p className="...">
              End-to-end technology services to power your business growth.
            </p>
          </div>
          <div className="...">
            {services.map((service, index) => (
              <div key={index} className="...">
                <div className="...">
                  <div className="h-6w-6text-white">{service.icon}</div>
                </div>
                <h3 className="text-xlfont-semiboldtext-gray-900mb-2">{service.title}</h3>
                <p className="text-gray-600mb-4">{service.description}</p>
                <ul className="...">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="...">
                      <CheckCircle className="h-4w-4text-emerald-500mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-emerald-600font-semiboldmb-4">{service.price}</div>
                <button className="...">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Technologies We Work With
            </h2>
            <p className="...">
              We use the latest and most reliable technologies to build robust solutions.
            </p>
          </div>
          <div className="...">
            {technologies.map((tech, index) => (
              <div key={index} className="...">
                <span className="text-gray-700font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <div>
              <h2 className="...">
                Why Choose Our IT Services?
              </h2>
              <div className="...">
                <div className="...">
                  <div className="...">
                    <CheckCircle className="h-5w-5text-white" />
                  </div>
                  <div>
                    <h3 className="text-lgfont-semiboldtext-gray-900mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our certified professionals have years of experience with cutting-edge technologies.</p>
                  </div>
                </div>
                <div className="...">
                  <div className="...">
                    <CheckCircle className="h-5w-5text-white" />
                  </div>
                  <div>
                    <h3 className="text-lgfont-semiboldtext-gray-900mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock monitoring and support to ensure your systems run smoothly.</p>
                  </div>
                </div>
                <div className="...">
                  <div className="...">
                    <CheckCircle className="h-5w-5text-white" />
                  </div>
                  <div>
                    <h3 className="text-lgfont-semiboldtext-gray-900mb-2">Scalable Solutions</h3>
                    <p className="text-gray-600">Our solutions grow with your business, adapting to your changing needs.</p>
                  </div>
                </div>
                <div className="...">
                  <div className="...">
                    <CheckCircle className="h-5w-5text-white" />
                  </div>
                  <div>
                    <h3 className="text-lgfont-semiboldtext-gray-900mb-2">Cost-Effective</h3>
                    <p className="text-gray-600">Optimize your IT spending with our efficient and cost-effective solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="...">
              <h3 className="text-2xlfont-boldmb-4">Ready to Get Started?</h3>
              <p className="...">
                Let&apos;s discuss your IT needs and create a customized solution that drives your business forward.
              </p>
              <a
                href="/contact"
                className="...">
                Contact Us Today
                <ArrowRight className="ml-2h-4w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="...">
        <div className="...">
          <h2 className="...">
            Transform Your IT Infrastructure Today
          </h2>
          <p className="...">
            Partner with us to build a robust, scalable, and secure technology foundation for your business.
          </p>
          <div className="...">
            <a
              href="/contact"
              className="...">
              Get Free Consultation
              <ArrowRight className="ml-2h-5w-5" />
            </a>
            <a
              href="/ai-services"
              className="...">
              Explore AI Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ITServicesPage