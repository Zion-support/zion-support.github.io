import type { NextPage } from &apos;next&apos;;
import Layout from &apos;../../components/Layout&apos;;
import Link from &apos;next/link&apos;;
import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight, Users, Award } from &apos;lucide-react&apos;;

const CloudServices: NextPage = () => {
  return (
    <Layout
      title=&quot;Cloud Services - Zion Tech Group&quot;
      description=&quot;Scalable cloud solutions and infrastructure design for modern applications. Transform your business with our comprehensive cloud services.&quot;
    >
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <div className=&quot;w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
            <Cloud className=&quot;w-10 h-10 text-white&quot; />
          </div>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            Cloud Services
            <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400&quot;> Solutions</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200&quot;>
            Scalable cloud solutions and infrastructure design for modern applications that grow with your business.
          </p>
          
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4 mb-12&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Get Started Today
            </Link>
            <Link href=&quot;/services&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>Our Cloud Services</h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              Comprehensive cloud solutions designed to optimize performance, security, and scalability.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Cloud className=&quot;w-8 h-8 text-purple-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Cloud Migration</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Seamless migration of your applications and data to the cloud with minimal downtime.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Application Migration</li>
                <li>• Data Migration</li>
                <li>• Infrastructure Migration</li>
                <li>• Zero-Downtime Migration</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Server className=&quot;w-8 h-8 text-blue-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Cloud Infrastructure</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Robust and scalable cloud infrastructure designed for high availability and performance.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Auto-scaling</li>
                <li>• Load Balancing</li>
                <li>• High Availability</li>
                <li>• Disaster Recovery</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Shield className=&quot;w-8 h-8 text-green-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Cloud Security</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Comprehensive security solutions to protect your cloud infrastructure and data.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Identity & Access Management</li>
                <li>• Data Encryption</li>
                <li>• Security Monitoring</li>
                <li>• Compliance Management</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Zap className=&quot;w-8 h-8 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>DevOps & Automation</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Streamlined development and deployment processes with automated CI/CD pipelines.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• CI/CD Pipelines</li>
                <li>• Infrastructure as Code</li>
                <li>• Automated Testing</li>
                <li>• Monitoring & Alerting</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Users className=&quot;w-8 h-8 text-red-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Cloud Consulting</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Expert guidance on cloud strategy, architecture, and best practices.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Cloud Strategy</li>
                <li>• Architecture Design</li>
                <li>• Cost Optimization</li>
                <li>• Performance Tuning</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Award className=&quot;w-8 h-8 text-indigo-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Managed Services</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Complete management of your cloud infrastructure with 24/7 monitoring and support.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• 24/7 Monitoring</li>
                <li>• Proactive Maintenance</li>
                <li>• Performance Optimization</li>
                <li>• Technical Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>Our Cloud Implementation Process</h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              We follow a structured approach to ensure successful cloud adoption and optimization.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>1</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Assessment</h3>
              <p className=&quot;text-gray-600&quot;>We assess your current infrastructure and identify cloud opportunities.</p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>2</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Planning</h3>
              <p className=&quot;text-gray-600&quot;>We develop a comprehensive cloud strategy and migration plan.</p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>3</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Implementation</h3>
              <p className=&quot;text-gray-600&quot;>We implement your cloud solution with minimal disruption.</p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>4</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Optimization</h3>
              <p className=&quot;text-gray-600&quot;>We continuously optimize your cloud infrastructure for peak performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>Ready to Move to the Cloud?</h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto&quot;>
            Let&apos;s discuss how our cloud services can transform your infrastructure and drive business growth.
          </p>
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Schedule a Consultation
            </Link>
            <Link href=&quot;/services&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudServices;