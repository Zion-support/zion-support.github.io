import type { NextPage } from &apos;next&apos;;
import Layout from &apos;../components/Layout&apos;;
import Link from &apos;next/link&apos;;
import { Users, Award, Target, CheckCircle, ArrowRight, Globe, Heart, Zap } from &apos;lucide-react&apos;;

const About: NextPage = () => {
  return (
    <Layout
      title=&quot;About Us - Zion Tech Group&quot;
      description=&quot;Learn about Zion Tech Group, a leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.&quot;
    >
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            About
            <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;> Zion Tech Group</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200&quot;>
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-8&quot;>Our Mission</h2>
            <p className=&quot;text-xl text-gray-600 mb-8&quot;>
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
            </p>
            <p className=&quot;text-lg text-gray-600&quot;>
              We believe that technology should be an enabler, not a barrier. Our team of expert developers, designers, and strategists work together to create solutions that are not only technically sound but also aligned with your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>Our Values</h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            <div className=&quot;bg-white rounded-lg p-8 shadow-lg text-center&quot;>
              <div className=&quot;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <Target className=&quot;w-8 h-8 text-blue-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Excellence</h3>
              <p className=&quot;text-gray-600&quot;>
                We strive for excellence in everything we do, delivering solutions that exceed expectations.
              </p>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg text-center&quot;>
              <div className=&quot;w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <Heart className=&quot;w-8 h-8 text-green-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Integrity</h3>
              <p className=&quot;text-gray-600&quot;>
                We conduct business with honesty, transparency, and ethical practices in all our interactions.
              </p>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg text-center&quot;>
              <div className=&quot;w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <Zap className=&quot;w-8 h-8 text-purple-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Innovation</h3>
              <p className=&quot;text-gray-600&quot;>
                We embrace new technologies and innovative approaches to solve complex business challenges.
              </p>
            </div>

            <div className=&quot;bg-white rounded-lg p-8 shadow-lg text-center&quot;>
              <div className=&quot;w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <Users className=&quot;w-8 h-8 text-orange-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Collaboration</h3>
              <p className=&quot;text-gray-600&quot;>
                We work closely with our clients as partners, fostering long-term relationships built on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>Our Team</h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              A diverse team of talented professionals passionate about technology and committed to delivering exceptional results.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;bg-gray-50 rounded-lg p-8 text-center&quot;>
              <div className=&quot;w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <Users className=&quot;w-12 h-12 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>50+ Team Members</h3>
              <p className=&quot;text-gray-600&quot;>
                Experienced developers, designers, and strategists working together to deliver exceptional solutions.
              </p>
            </div>

            <div className=&quot;bg-gray-50 rounded-lg p-8 text-center&quot;>
              <div className=&quot;w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <Award className=&quot;w-12 h-12 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>500+ Projects</h3>
              <p className=&quot;text-gray-600&quot;>
                Successfully completed projects across various industries and technology stacks.
              </p>
            </div>

            <div className=&quot;bg-gray-50 rounded-lg p-8 text-center&quot;>
              <div className=&quot;w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <Globe className=&quot;w-12 h-12 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Global Reach</h3>
              <p className=&quot;text-gray-600&quot;>
                Serving clients worldwide with our expertise in cutting-edge technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold mb-4&quot;>Our Impact</h2>
            <p className=&quot;text-xl max-w-3xl mx-auto&quot;>
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 text-center&quot;>
            <div>
              <div className=&quot;text-4xl font-bold mb-2&quot;>500+</div>
              <div className=&quot;text-blue-200&quot;>Projects Completed</div>
            </div>
            <div>
              <div className=&quot;text-4xl font-bold mb-2&quot;>50+</div>
              <div className=&quot;text-blue-200&quot;>Team Members</div>
            </div>
            <div>
              <div className=&quot;text-4xl font-bold mb-2&quot;>98%</div>
              <div className=&quot;text-blue-200&quot;>Client Satisfaction</div>
            </div>
            <div>
              <div className=&quot;text-4xl font-bold mb-2&quot;>24/7</div>
              <div className=&quot;text-blue-200&quot;>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold text-gray-900 mb-6&quot;>Ready to Work With Us?</h2>
          <p className=&quot;text-xl text-gray-600 mb-8 max-w-3xl mx-auto&quot;>
            Let&apos;s discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Get in Touch
            </Link>
            <Link href=&quot;/careers&quot; className=&quot;bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;