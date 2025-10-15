import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DevOpsAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DevOps Automation & CI/CD - Zion Tech Group</title>
        <meta name="description" content="Complete DevOps solutions with automated deployment, continuous integration, and infrastructure as code for modern software development." />
        <meta name="keywords" content="DevOps automation, CI/CD, continuous integration, deployment automation, infrastructure as code, container orchestration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">⚙️</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              DevOps Automation & <span className="text-orange-600">CI/CD</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Streamline your software development lifecycle with our comprehensive DevOps automation solutions. 
              From CI/CD pipelines to infrastructure as code, we help you deploy faster and more reliably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Get Started
              </Link>
              <Link to="/pricing" className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CI/CD Pipeline Setup</h3>
              <p className="text-gray-600">Automated build, test, and deployment pipelines for faster and more reliable software delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure as Code</h3>
              <p className="text-gray-600">Manage and provision infrastructure using code with Terraform, CloudFormation, and other IaC tools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Testing</h3>
              <p className="text-gray-600">Comprehensive testing automation including unit, integration, and end-to-end tests.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🐳</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Container Orchestration</h3>
              <p className="text-gray-600">Kubernetes and Docker orchestration for scalable and resilient containerized applications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring & Logging</h3>
              <p className="text-gray-600">Comprehensive monitoring, logging, and alerting solutions for production environments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Scanning</h3>
              <p className="text-gray-600">Automated security scanning and vulnerability assessment in your CI/CD pipeline.</p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
                <div className="text-3xl font-bold text-orange-600 mb-4">$2,000<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Basic CI/CD setup</li>
                  <li>✓ Single environment</li>
                  <li>✓ Standard monitoring</li>
                  <li>✓ Email support</li>
                </ul>
                <Link to="/contact" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center block">
                  Get Started
                </Link>
              </div>
              <div className="border-2 border-orange-500 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro</h3>
                <div className="text-3xl font-bold text-orange-600 mb-4">$8,000<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Advanced CI/CD pipelines</li>
                  <li>✓ Multi-environment setup</li>
                  <li>✓ Container orchestration</li>
                  <li>✓ Advanced monitoring</li>
                  <li>✓ Priority support</li>
                </ul>
                <Link to="/contact" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center block">
                  Get Started
                </Link>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-orange-600 mb-4">$25,000<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Custom DevOps solutions</li>
                  <li>✓ Multi-cloud deployment</li>
                  <li>✓ Advanced security</li>
                  <li>✓ Dedicated team</li>
                  <li>✓ 24/7 support</li>
                </ul>
                <Link to="/contact" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center block">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Development</h3>
                <p className="text-gray-600">Accelerate software delivery with automated testing, building, and deployment pipelines.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Deployment</h3>
                <p className="text-gray-600">Deploy applications reliably across multiple environments with zero-downtime deployments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure Management</h3>
                <p className="text-gray-600">Manage cloud infrastructure as code for consistent and repeatable deployments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">Ensure code quality with automated testing, security scanning, and performance monitoring.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-orange-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your DevOps?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transform your software development process with our comprehensive DevOps automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>✉️ kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsAutomationPage;