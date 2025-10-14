<<<<<<< HEAD
export default function Page() {;
import React from "react
import { Helmet }    from "react-helmet-async
      <Helmet></Helmet>"
        <meta name="description" content="Professional services by Zion Tech Group."
              </p>
              <div className="flex items-center text-purple-400"><CheckCircle className="w-6 h-6 mr-2" />
                <span className="font-semibold"
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8"><div className="grid grid-cols-2 gap-6"><div className="text-center"><div className="text-3xl font-bold text-white mb-2"></div>500+</div>
                  <div className="text-gray-400"></div>Projects Delivered</div>
                </div>
                <div className="text-center"><div className="text-3xl font-bold text-white mb-2"></div>100+</div>
                  <div className="text-gray-400"></div>Happy Clients</div>
                </div>
                <div className="text-center"><div className="text-3xl font-bold text-white mb-2"></div>50+</div>
                  <div className="text-gray-400"></div>Expert Team</div>
                </div>
                <div className="text-center"><div className="text-3xl font-bold text-white mb-2"></div>24/7</div>
                  <div className="text-gray-400"
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto"><div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto"
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"></div>
                <value.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300"
              </div>)
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto"><div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto"
              The experts behind our innovative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300"></div>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center"><Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm"
              </div>)
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center"><div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              Let'
            </p>
            <a
              href="/contact""
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5"
            </a>
          </div>
        </div>
      </section>
    </div>
}
=======
import React from "react";
import { Helmet } from "react-helmet-async";

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
        <meta name="keywords" content="page, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional page services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
