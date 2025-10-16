import React from "react";
import SEOHead from "../components/SEOHead";

const CloudSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud",
      features: [
        "Zero-downtime Migration",
        "Data Security",
        "Cost Optimization",
      ],
      price: "Starting at $5,999",
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive management of your cloud resources",
      features: ["24/7 Monitoring", "Auto-scaling", "Performance Optimization"],
      price: "Starting at $2,999/month",
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Optimize across multiple cloud providers",
      features: ["Vendor Management", "Cost Analysis", "Risk Mitigation"],
      price: "Starting at $4,999",
    },
    {
      title: "Cloud Security",
      description: "Advanced security for your cloud environment",
      features: ["Identity Management", "Data Encryption", "Compliance"],
      price: "Starting at $3,999/month",
    },
  ];

  const benefits = [
    "Scalability",
    "Cost Efficiency",
    "Reliability",
    "Security",
    "Flexibility",
    "Performance",
    "Disaster Recovery",
    "Global Reach",
  ];

  return (
    <>
      <SEOHead
        title="Cloud Solutions - Zion Tech Group"
        description="Comprehensive cloud solutions including migration, infrastructure management, and multi-cloud strategies. Scale your business with the cloud."
        keywords="cloud solutions, cloud migration, cloud infrastructure, multi-cloud, cloud security, AWS, Azure, GCP"
        canonicalUrl="https://ziontechgroup.com/cloud-solutions"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cloud Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your business with scalable, secure, and
                cost-effective cloud solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#solutions"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Solutions
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Cloud Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Benefits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Cloud?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock the power of cloud computing with our comprehensive
              solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-2">☁️</div>
                <h3 className="font-semibold text-gray-900">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div id="solutions" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Cloud Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                End-to-end cloud services designed to accelerate your digital
                transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Pricing:
                    </h4>
                    <div className="text-2xl font-bold text-blue-600">
                      {solution.price}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 border border-blue-600 text-blue-600 text-center py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cloud Providers */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cloud Provider Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work with all major cloud providers to give you the best
                solution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🔵</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Amazon Web Services
                </h3>
                <p className="text-gray-600">
                  Comprehensive AWS solutions and optimization
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🔷</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Microsoft Azure
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade Azure cloud services
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🔶</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Google Cloud Platform
                </h3>
                <p className="text-gray-600">
                  Advanced GCP solutions and AI integration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experts help you design and implement the perfect cloud
              solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Cloud Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudSolutionsPage;
