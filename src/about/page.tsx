

import { Users, Target, Brain, Shield } from 'lucide-react';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
        return (
    <div>
      <div>
        <div>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>About Zion Tech Group</h1>
          <p className='text-xl text-gray-600'>Leading the future of AI and IT solutions</p>
        </div>
        <div>
          <div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>Our Mission</h2>
            <p className='text-gray-600 mb-4'>At Zion Tech Group, we are dedicated to transforming;
              businesses through cutting-edge AI and IT solutions. Our;
              mission is to empower organizations with the technology they
              need to thrive in the digital age.
            </p>
            <p className='text-gray-600'>We combine deep technical expertise with innovative thinking
              to deliver solutions that drive real business value.
            </p>
          </div>
        </div>
      {/* Stats Section */}
        <section className="py-16 bg-white">
          <div>
            <div>
              {stats.map((stat, index) => (
                <div>
                  <div>
                    {stat.number}
                  </div>
                  <div>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div>
            <div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">To democratize access to advanced AI technology and empower businesses of all sizes
                  to achieve their full potential through innovative digital solutions.
                </p>
                <p className="text-lg text-gray-600 mb-8">We believe that every business deserves access to cutting-edge technology that can
                  transform their operations, improve efficiency, and drive growth.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >Get in Touch</Link>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">To be the world's leading provider of AI-powered business solutions, 
                  helping organizations across all industries achieve digital transformation
                  and sustainable growth in the age of artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            <div>
              {values.map((value, index) => (
                <div>
                  <div>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">The experts behind our innovative solutions</p>
            </div>
            <div>
              {team.map((member, index) => (
                <div>
                  <div>
                    <div>
                      <Users className="w-16 h-16 text-gray-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our AI-powered solutions.
            </p>
            <div>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >Start a Project</Link>
              <Link
                to="/careers"
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >Join Our Team</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>);
}
export default AboutPage