

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const \"About\": NextPage = () => {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
const \"About\": NextPage = () => {;
import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';






ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let’s discuss how we can help transform your business.
          </p>
          <div className="flex flex-col "sm": flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
            <Link href="/careers" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>

=======          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
origin/cursor/integrate-build-improve-and-re-verify-c7b5
            {values.map((value) => (
              <div key={value.title} className=\"text-center\">
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">
                  <value.icon className=\"h-8 w-8\" />
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                  {value.title}
                </h3>
                <p className=\"text-gray-600\">
                  {value.description}
                </p>
              </div>
      <section className=\"py-20 bg-gray-50\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"grid grid-cols-2 md:grid-cols-4 gap-8\">;
            {stats && stats.map((stat) => (;
              <div key={stat && stat.label} className=\"text-center\">;
                <div className=\"text-4xl font-bold text-blue-600 mb-2\">{stat && stat.number}</div>;
                <div className=\"text-gray-600\">{stat && stat.label}</div>;
              <div key={stat && stat.label} className="text-center">;
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat && stat.number}</div>;
                <div className="text-gray-600">{stat && stat.label}</div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>;
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
            Let’s discuss how we can help transform your business.;
          </p>;
          <div className="flex flex-col "sm": flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">;
              Get in Touch;
            </Link>;
            <Link href="/careers" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">;
              Join Our Team;
            </Link>;
          </div>;
        </div>;
      </section>;
    </main>;
      {/* Values Section */}
      <section className=\"py-20\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"text-center mb-16\">;
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Our Values</h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
              The principles that guide everything we do and shape our company culture;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {values && values.map((value) => (;
              <div key={value && value.title} className=\"text-center\">;
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">;
                  <value && value.icon className=\"h-8 w-8\" />;
                </div>;
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">;
                  {value && value.title}
                </h3>;
                <p className=\"text-gray-600\">;
                  {value && value.description}
                </p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Team Section */}

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">            {team.map((member) => (
              <div key={member.name} className=\"bg-white rounded-lg shadow-lg overflow-hidden\">
                <div className=\"h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center\">
                  <Users className=\"h-16 w-16 text-blue-600\" />
                </div>
                <div className=\"p-6\">
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-1\">
                    {member.name}
                  </h3>
                  <p className=\"text-blue-600 font-medium mb-3\">{member.role}</p>
                  <p className=\"text-gray-600 text-sm\">
                    {member.bio}
                  </p>
                </div>
              </div>
      <section className=\"py-20 bg-gray-50\" id=\"team\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"text-center mb-16\">;
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Our Team</h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
              Meet the passionate professionals who make Zion Tech Group a leader in ;
              technology solutions;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {team && team.map((member) => (;
              <div key={member && member.name} className=\"bg-white rounded-lg shadow-lg overflow-hidden\">;
                <div className=\"h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center\">;
                  <Users className=\"h-16 w-16 text-blue-600\" />;
                </div>;
                <div className=\"p-6\">;
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-1\">;
                    {member && member.name}
                  </h3>;
                  <p className=\"text-blue-600 font-medium mb-3\">{member && member.role}</p>;
                  <p className=\"text-gray-600 text-sm\">;
                    {member && member.bio}
                  </p>;
                </div>;
              </div>;
            ))}
          </div>
        </div>
      </section>
      {/* Story Section */}
      <section className=\"py-20\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center\">;
            <div>;
              <h2 className=\"text-4xl font-bold text-gray-900 mb-6\">Our Story</h2>;
              <p className=\"text-lg text-gray-600 mb-6\">;
                Founded in 2019, Zion Tech Group began with a simple \"mission\": to make ;
                advanced technology accessible to businesses of all sizes. What started ;
                as a small team of passionate developers has grown into a comprehensive ;
                technology solutions provider.;
              </p>;
              <p className=\"text-lg text-gray-600 mb-6\">;
                Over the years, we\'ve helped hundreds of companies transform their ;
                digital presence, streamline operations, and achieve their business goals ;
                through innovative technology solutions.;
              </p>;
              <p className=\"text-lg text-gray-600\">;
                Today, we continue to push the boundaries of what\'s possible with ;
                technology, always keeping our clients\' success at the heart of ;
                everything we do.;
              </p>;
            </div>;
            <div className=\"bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8\">;
              <h3 className=\"text-2xl font-bold text-gray-900 mb-4\">Why Choose Us?</h3>;
              <ul className=\"space-y-3\">;
                <li className=\"flex items-start\">;
                  <div className=\"bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0 && 0.5\">;
                    <span className=\"text-sm\">✓</span>;
                  </div>;
                  <span className=\"text-gray-700\">Proven track record of successful projects</span>;
                </li>;
                <li className=\"flex items-start\">;
                  <div className=\"bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0 && 0.5\">;
                    <span className=\"text-sm\">✓</span>;
                  </div>;
                  <span className=\"text-gray-700\">Expert team with deep technical knowledge</span>;
                </li>;
                <li className=\"flex items-start\">;
                  <div className=\"bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0 && 0.5\">;
                    <span className=\"text-sm\">✓</span>;
                  </div>;
                  <span className=\"text-gray-700\">Personalized approach to every project</span>;
                </li>;
                <li className=\"flex items-start\">;
                  <div className=\"bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0 && 0.5\">;
                    <span className=\"text-sm\">✓</span>;
                  </div>;
                  <span className=\"text-gray-700\">Ongoing support and maintenance</span>;
                </li>;
              </ul>;
            </div>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  );
}
}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de



}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
