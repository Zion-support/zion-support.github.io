'use client'
import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Shield, Zap, Users, ArrowRight } from 'lucide-react'
const HomePage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions'
      description: 'Cutting-edge artificial intelligence to transform your business operations and drive innovation.'
        }
    {
      icon: Shield,
      title: 'Enterprise Security'
      description: 'Robust security measures to protect your data and ensure compliance with industry standards.'
        }
    {
      icon: Users,
      title: 'Expert Team'
      description: 'Experienced professionals dedicated to delivering exceptional results for your projects.'
    }
    ];
  const services = [
    {
      title: 'AI Analytics & BI'
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.'
      href: '/ai-analytics'
        }
    {
      title: 'Cloud Architecture'
      description: 'Scalable and secure cloud solutions designed to grow with your business needs.'
      href: '/cloud-architecture'
        }
    {
      title: 'Web Development'
      description: 'Modern, responsive websites and web applications built with the latest technologies.'
      href: '/web-development'
        }
    {
      title: 'Mobile Development'
      description: 'Native and cross-platform mobile applications for iOS and Android devices.'
      href: '/mobile-development'
        }
    {
      title: 'Data Analytics'
      description: 'Comprehensive data analysis and visualization services to drive informed decisions.'
      href: '/data-analytics'
        }
    {
      title: 'Cybersecurity'
      description: 'Protect your business with our comprehensive cybersecurity solutions and monitoring.'
      href: '/cybersecurity'
    }
    ];
    return (
    <>
      <Navigation />
      
      <main className="...">
        {/* Hero Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h1 className="...">
                Transform Your Business with
                <span className="block text-yellow-400">AI & Technology</span>
              </h1>
              <p className="...">
                Leading technology solutions provider helping businesses transform their digital
                presence with AI, cloud architecture, and innovative development services.
              </p>
              <div className="...">
                <button className="...">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="...">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="...">
                Why Choose Zion Tech Group?
              </h2>
              <div className="...">
                {features.map((feature, index) => (
                  <div key={index} className="...">
                    <div className="...">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="...">
                Our Services
              </h2>
              <div className="...">
                {services.map((service, index) => (
                  <div key={index} className="...">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <a
                      href={service.href}
                      className="...">
                      Learn More →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="...">
                Ready to Get Started?
              </h2>
              <p className="...">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="...">
                <a
                  href="/contact"
                  className="...">
                  Contact Us Today
                </a>
                <a
                  href="/about"
                  className="...">
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      )
}
export default HomePage