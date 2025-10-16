import React from "react";
import SEOHead from "../components/SEOHead";

const DevOpsAutomationProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion DevOps Automation Pro - Complete DevOps & Deployment Solutions"
        description="Automate your DevOps processes with our comprehensive platform. CI/CD pipelines, infrastructure as code, and automated deployment capabilities."
        keywords="DevOps automation, CI/CD pipelines, infrastructure as code, deployment automation, container orchestration, DevOps platform"
        canonicalUrl="https://ziontechgroup.com/devops-automation-pro"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Zion DevOps Automation Pro
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive DevOps automation platform with CI/CD pipelines,
                infrastructure as code, and automated deployment capabilities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#features"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a
                  href="/contact?service=devops-automation-pro"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          id="features"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete DevOps Automation Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our DevOps platform provides everything you need to automate,
              deploy, and manage your applications and infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                CI/CD Pipelines
              </h3>
              <p className="text-gray-600">
                Automated build, test, and deployment pipelines for faster, more
                reliable releases
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Infrastructure as Code
              </h3>
              <p className="text-gray-600">
                Define and manage your infrastructure using code for consistency
                and version control
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Automated Testing
              </h3>
              <p className="text-gray-600">
                Comprehensive testing automation including unit, integration,
                and end-to-end tests
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🐳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Container Orchestration
              </h3>
              <p className="text-gray-600">
                Manage and orchestrate containers with Kubernetes and Docker for
                scalable deployments
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Monitoring & Alerting
              </h3>
              <p className="text-gray-600">
                Comprehensive monitoring, logging, and alerting for applications
                and infrastructure
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Security Scanning
              </h3>
              <p className="text-gray-600">
                Automated security scanning and vulnerability assessment for
                your applications and infrastructure
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-600">
                Choose the plan that fits your DevOps needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  $1,999<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Up to 5
                    applications
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Basic CI/CD
                    pipelines
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>{" "}
                    Infrastructure as code
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Email support
                  </li>
                </ul>
                <a
                  href="/contact?service=devops-automation-pro&plan=basic"
                  className="w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-green-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-green-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-4">
                  $5,999<span className="text-lg opacity-75">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Up to 25
                    applications
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Advanced
                    CI/CD pipelines
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Container
                    orchestration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Automated
                    testing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Monitoring &
                    alerting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Priority
                    support
                  </li>
                </ul>
                <a
                  href="/contact?service=devops-automation-pro&plan=pro"
                  className="w-full bg-white text-green-600 text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  $19,999<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Unlimited
                    applications
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> All features
                    included
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Custom
                    development
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Advanced
                    security
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Disaster
                    recovery
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 24/7
                    dedicated support
                  </li>
                </ul>
                <a
                  href="/contact?service=devops-automation-pro&plan=enterprise"
                  className="w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
              <p className="text-lg text-gray-600">
                See how our DevOps automation can transform your development
                process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Application Deployment
                </h3>
                <p className="text-gray-600">
                  Automate the deployment of web applications, APIs, and
                  microservices across environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Infrastructure Management
                </h3>
                <p className="text-gray-600">
                  Manage cloud infrastructure, servers, and networking using
                  infrastructure as code.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Automate testing processes to ensure code quality and reduce
                  manual testing effort.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Security Compliance
                </h3>
                <p className="text-gray-600">
                  Implement security scanning and compliance checks in your
                  CI/CD pipeline.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Performance Monitoring
                </h3>
                <p className="text-gray-600">
                  Monitor application performance and infrastructure health with
                  automated alerting.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Disaster Recovery
                </h3>
                <p className="text-gray-600">
                  Implement automated backup and disaster recovery procedures
                  for business continuity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of teams already using our DevOps automation to
              deploy faster and more reliably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?service=devops-automation-pro"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsAutomationProPage;
