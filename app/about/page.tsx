import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, a leading provider of AI solutions, micro SaaS development, and enterprise IT services.'}
};

export default function AboutPage() {
  return (
    <div className=\"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50\" />
      <div className=\"container mx-auto px-4 py-20\" />
        <div className=\"text-center mb-16\" />
          <h1 className=\"text-5xl font-bold text-gray-900 mb-6\" />
            About Zion Tech Group;
          </h1>
          <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\" />
            We are a leading technology company specializing in AI solutions, micro SaaS development, 
            and enterprise IT services that drive real business results.
          </p>
        </div>

        <div className=\"max-w-6xl mx-auto\" />
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16\" />
            <div />
              <h2 className=\"text-3xl font-bold text-gray-900 mb-6\" />Our Mission</h2>
              <p className=\"text-lg text-gray-600 mb-6\" />
                To deliver enterprise-grade AI, micro SaaS, and IT solutions that transform businesses,
and accelerate growth through innovative technology.
              </p>
              <p className=\"text-lg text-gray-600\" />
                We believe in the power of technology to solve complex business challenges and create,
opportunities for sustainable growth.
              </p>
            </div>
            <div />
              <h2 className=\"text-3xl font-bold text-gray-900 mb-6\" />Our Vision</h2>
              <p className=\"text-lg text-gray-600 mb-6\" />
                To be the premier technology partner for businesses seeking to leverage AI and modern,
software solutions for competitive advantage.
              </p>
              <p className=\"text-lg text-gray-600\" />
                We envision a future where every business has access to cutting-edge technology that,
drives innovation and success.
              </p>
            </div>
          </div>

          <div className=\"bg-white rounded-2xl shadow-xl p-8 mb-16\" />
            <h2 className=\"text-3xl font-bold text-gray-900 mb-8 text-center\" />Our Values</h2>
            <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\" />
              <div className=\"text-center\" />
                <div className=\"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4\" />
                  <span className=\"text-2xl\" />🚀</span>
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\" />Innovation</h3>
                <p className=\"text-gray-600\" />
                  We constantly push the boundaries of what's possible with technology.
                </p>
              </div>
              <div className=\"text-center\" />
                <div className=\"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4\" />
                  <span className=\"text-2xl\" />🤝</span>
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\" />Partnership</h3>
                <p className=\"text-gray-600\" />
                  We work closely with our clients to understand their unique needs.
                </p>
              </div>
              <div className=\"text-center\" />
                <div className=\"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4\" />
                  <span className=\"text-2xl\" />⭐</span>
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\" />Excellence</h3>
                <p className=\"text-gray-600\" />
                  We deliver high-quality solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>

          <div className=\"text-center\" />
            <h2 className=\"text-3xl font-bold text-gray-900 mb-6\" />Ready to Work With Us?</h2>
            <p className=\"text-xl text-gray-600 mb-8 max-w-3xl mx-auto\" />
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <Link,
href=\"/contact\"
              className=\"bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center\"
             />
              Get In Touch;
              <ArrowRightIcon className=\"h-5 w-5 ml-2\" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );}
}