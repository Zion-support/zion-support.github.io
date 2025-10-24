import React from "react"
import { CheckCircle, ArrowRight } from "lucide-react"
"use client"
const AIServicesPage: React.FC = () => {
  const services = [
  {
      icon: 'Brain'
    title: "Machine Learning Solutions"
      description: "Custom ML models tailored to your business needs"
    features: [
        "Predictive Analytics"
        "Pattern Recognition"
        "Automated Decision Making"
    "Real-time Processing"
        ];
      price: "Starting at ,000"
    }
  {
    icon: 'Zap'
    title: "AI Automation"
      description: "Streamline operations with intelligent automation"
    features: [
        "Process Automation"
        "Workflow Optimization"
        "Intelligent Routing"
    "Error Reduction"
        ];
      price: "Starting at ,000"
    }
  {
    icon: 'Target'
    title: "Natural Language Processing"
      description: "Understand and process human language at scale"
    features: [
        "Text Analysis"
        "Sentiment Analysis"
        "Language Translation"
    "Chatbot Development"
        ];
      price: "Starting at ,000"
    }
  {
    icon: 'BarChart'
    title: "Computer Vision"
      description: "Extract insights from images and videos"
    features: [
        "Image Recognition"
        "Object Detection"
        "Video Analysis"
    "Quality Control"
        ];
      price: "Starting at ,000"
    }
    ];
  const process = [
    {
      step: "1"
      title: "Discovery & Analysis"
      description: "We analyze your business needs and data to understand the best AI approach."
        }
    {
      step: "2"
      title: "Solution Design"
      description: "Our team designs a custom AI solution tailored to your specific requirements."
        }
    {
      step: "3"
      title: "Development & Training"
      description: "We develop and train your AI models using the latest technologies and best practices."
        }
    {
      step: "4"
      title: "Integration & Deployment"
      description: "We integrate the solution into your existing systems and deploy it securely."
        }
    {
      step: "5"
    title: "Monitoring & Optimization"
    description: "We continuously monitor performance and optimize the solution for better results."}
    ];
  return (
    <div className="...">
      {/* Hero Section */}
      <section className="...">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="...">
          <h1 className="...">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Services</span>
          </h1>
          <p className="...">
            Transform your business with cutting-edge artificial intelligence solutions designed to drive growth and efficiency.
          </p>
          <div className="...">
            <button className="...">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="...">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Our AI Solutions
            </h2>
            <p className="...">
              Comprehensive AI services to solve your most complex business challenges.
            </p>
          </div>
          <div className="...">
            {services.map((service, index) => (
              <div key={index} className="...">
                <div className="...">
                  <div className="h-6 w-6 text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="...">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="...">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-emerald-600 font-semibold mb-4">{service.price}</div>
                <button className="...">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Our Process
            </h2>
            <p className="...">
              A proven methodology for delivering successful AI solutions.
            </p>
          </div>
          <div className="...">
            {process.map((step, index) => (
              <div key={index} className="...">
                <div className="...">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="...">
        <div className="...">
          <h2 className="...">
            Ready to Harness the Power of AI?
          </h2>
          <p className="...">
            Let&apos;s discuss how our AI solutions can transform your business operations.
          </p>
          <div className="...">
            <a
              href="/contact"
              className="...">
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/about"
              className="...">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIServicesPage