import type { NextPage } from &apos;next&apos;;
import Layout from &apos;../../components/Layout&apos;;
import Link from &apos;next/link&apos;;
import { Code, Globe, Smartphone, Zap, CheckCircle, ArrowRight, Users, Award } from &apos;lucide-react&apos;;

const WebDevelopment: NextPage = () => {
  return (
    <Layout
      title=&quot;Web Development Services - Zion Tech Group&quot;
      description=&quot;Modern, responsive web applications built with cutting-edge technologies. Transform your digital presence with our expert web development services.&quot;
    >
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <div className=&quot;w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
            <Code className=&quot;w-10 h-10 text-white&quot; />
          </div>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            Web Development
            <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400&quot;> Services</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200&quot;>
            Modern, responsive web applications built with cutting-edge technologies that deliver exceptional user experiences.
          </p>
          
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4 mb-12&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Get Started Today
            </Link>
            <Link href=&quot;/services&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>Our Web Development Services</h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              We build modern, scalable web applications that drive business growth and user engagement.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Globe className=&quot;w-8 h-8 text-green-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Custom Web Applications</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Tailored web applications built to meet your specific business requirements and objectives.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Business Applications</li>
                <li>• E-commerce Platforms</li>
                <li>• Content Management Systems</li>
                <li>• Customer Portals</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Smartphone className=&quot;w-8 h-8 text-blue-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Responsive Design</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Mobile-first, responsive designs that work perfectly across all devices and screen sizes.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Mobile-First Design</li>
                <li>• Cross-Browser Compatibility</li>
                <li>• Touch-Friendly Interfaces</li>
                <li>• Adaptive Layouts</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Zap className=&quot;w-8 h-8 text-purple-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Performance Optimization</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Lightning-fast web applications optimized for speed, SEO, and user experience.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Speed Optimization</li>
                <li>• SEO Best Practices</li>
                <li>• Core Web Vitals</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Code className=&quot;w-8 h-8 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Modern Technologies</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Built with the latest technologies and frameworks for scalability and maintainability.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• React & Next.js</li>
                <li>• Node.js & Express</li>
                <li>• TypeScript</li>
                <li>• Modern CSS Frameworks</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Users className=&quot;w-8 h-8 text-red-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>User Experience Design</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Intuitive and engaging user interfaces designed to maximize user satisfaction and conversion.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• UX/UI Design</li>
                <li>• User Research</li>
                <li>• Prototyping</li>
                <li>• Usability Testing</li>
              </ul>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6&quot;>
                <Award className=&quot;w-8 h-8 text-indigo-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Maintenance & Support</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Ongoing maintenance, updates, and support to keep your web application running smoothly.
              </p>
              <ul className=&quot;text-sm text-gray-500 space-y-2&quot;>
                <li>• Regular Updates</li>
                <li>• Security Patches</li>
                <li>• Performance Monitoring</li>
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
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>Our Development Process</h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              We follow an agile development methodology to deliver high-quality web applications on time and within budget.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>1</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Discovery & Planning</h3>
              <p className=&quot;text-gray-600&quot;>We analyze your requirements and create a detailed project plan.</p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>2</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Design & Prototyping</h3>
              <p className=&quot;text-gray-600&quot;>We create wireframes, mockups, and interactive prototypes.</p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>3</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Development & Testing</h3>
              <p className=&quot;text-gray-600&quot;>We build and thoroughly test your web application.</p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-white font-bold text-xl&quot;>4</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Deployment & Launch</h3>
              <p className=&quot;text-gray-600&quot;>We deploy your application and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>Ready to Build Your Web Application?</h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto&quot;>
            Let&apos;s discuss your web development needs and create a solution that drives your business forward.
          </p>
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Start Your Project
            </Link>
            <Link href=&quot;/services&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebDevelopment;