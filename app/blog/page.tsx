<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';;"
import SEOHead from '../components/SEOHead'
=======
<<<<<<< HEAD
import React from 'react";";";";
import SEOHead from '../components/SEOHead";";";
const BlogPage: React.FC  =  () => {}";";";
import React from 'react",";";";
      import { Helmet } from 'react-helmet-async",";";";
      import SEOHead from '../components/SEOHead",
      const BlogPage: React.FC = () => {};
  return ()
    <>{}</>";
      <Helmet>";";
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>";";";
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />";";";
      </Helmet>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>;

  );
const BlogPage: React.FC = () => {";
  ";";
  return (";";";
    <>",";
      <SEOHead title ="Blog - Zion Tech Group | AI & IT Solutions"",";";";";
        description="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends."";"
        keywords="tech blog, AI insights, cybersecurity news, cloud computing, technology trends, tech articles"";";";";
      />"
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";"
        <div className ="min-h-screen flex items-center justify-center">";"
          <div className ="text-center max-w-4xl mx-auto px-4">";"
            <h1 className ="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";";";
              Blog";";";
            </h1>"
            <p className ="text-xl text-gray-300 mb-8">",";";
              Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends.";";";
            </p>"
            <div className ="flex flex-col sm: flex-row gap-4 justify-center">";"
              <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";";
                Coming Soon";";";
              </button>"
              <button className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";
=======
<<<<<<< HEAD
import React from 'react;'";
import { Helmet , Right,  User,  Calendar  } from 'lucide-react;'";
const: Page = () => {
  const: features = [
    {;
      icon: <CheckCircle: className ="w-8 h-8" />,""";
      title: 'Advanced Features',''";
      description: 'Cutting-edge technology for maximum efficiency''";
=======
import React from 'react'
import { Helmet , Right,  User,  Calendar   } from 'lucide-react'
const Page  = () => {const features  = [{icon: <CheckCircle className="w-8 h-8" />,";
      title: 'Advanced Features','"'"
      description: 'Cutting-edge technology for maximum efficiency'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    },
    {
      icon: <Shield className="w-8 h-8" />,";
      title: 'Secure & Reliable','"'"
      description: 'Enterprise-grade security and 99.9% uptime'";
    },
    {
      icon: <Users className="w-8 h-8" />,";
      title: 'Expert Support','"'"
      description: '24/7 support from our team of specialists'";
    }
  ];
  return (
    <></>
      <EnhancedSEO: title ="Page - Zion Tech Group";
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.";
        keywords="page, business solutions, technology services, professional services";
      />
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";
        {/* Hero Section */}
        <section: className ="relative py-20 px-4 sm:px-6 lg:px-8">";
          <div: className ="max-w-7xl mx-auto text-center">";
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">";
              Page
              <span: className ="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">";
                Solutions
              </span>
            </h1>
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
              Professional page services designed to help your business succeed and grow.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link: to ="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group";
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />";
              </Link>
              <Link: to ="/demo";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300";
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8">";
          <div: className ="max-w-7xl mx-auto">";
            <div: className ="text-center mb-16">";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">";
                Why Choose Our Page Services?
              </h2>
              <p: className ="text-xl text-gray-300 max-w-2xl mx-auto">";
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">";
              {features.map((feature, index) => (
                <div: key ={index} className="text-center">";
                  <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>";
                  <p: className ="text-gray-300">{feature.description}</p>";
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Blog Posts */}
        <section: className ="py-20 px-4">";
          <div: className ="max-w-7xl mx-auto">";
            <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {blogPosts.map((post) => (}
                <article: key ={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">";
                  <div: className ="text-4xl mb-4">{post.image}</div>";
                  <div: className ="flex items-center space-x-4 text-sm text-gray-400 mb-3">";
                    <span: className ="flex items-center">";
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span: className ="flex items-center">";
                      <User className="w-4 h-4 mr-1" />";
                      {post.author}
                    </span>
                  </div>
                  <h2: className ="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">";
                    {post.title}
                  </h2>
                  <p: className ="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>";
                  <div: className ="flex items-center justify-between">";
                    <span: className ="text-cyan-400 text-sm font-medium">{post.readTime}</span>";
                    <button: className ="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">";
                      Read More
                      <Right className="w-4 h-4 ml-1" />";
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
        <section: className ="py-20 px-4 bg-slate-800/30">";
          <div: className ="max-w-4xl mx-auto text-center">";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">";
              Ready to Get Started?
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">";
              Let's discuss how our page services can help your business succeed.'";
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link: to ="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group";
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />";
              </Link>
              <Link: to ="/services";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300";
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
        <div: className ="text-center"></div>";
          <h1>Page</h1>
          <p: className ="text-gray-300 text-lg"></p>";
            This page is under construction. Please check back later.
=======


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest insights on AI and IT technologies.
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
          </p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )};
const page  = React.lazy(() => import('./page'))'"'"
export default page;
<<<<<<< HEAD
=======
import React from 'react';;";
import SEOHead from '../components/SEOHead';";

>>>>>>> main
const BlogPage: React.FC = () => {}
import React from 'react',"
      import { Helmet } from 'react-helmet-async',"
      import SEOHead from '../components/SEOHead',"
      const BlogPage: React.FC = () => {}
  return ()
    <>{}</>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta: name ="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />"
      </Helmet>

<<<<<<< HEAD
      <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
  )
}
export default BlogPage
=======
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>";

  );

const BlogPage: React.FC = () => {
  return (
    <>
      <SEOHead: title ="Blog - Zion Tech Group | AI & IT Solutions"",";
        description="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends."";";
        keywords="tech blog, AI insights, cybersecurity news, cloud computing, technology trends, tech articles"";";
      />
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";";
        <div: className ="min-h-screen flex items-center justify-center">";";
          <div: className ="text-center max-w-4xl mx-auto px-4">";";
            <h1: className ="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";";
              Blog
            </h1>
            <p: className ="text-xl text-gray-300 mb-8">",";
              Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends.
            </p>
            <div: className ="flex flex-col sm: flex-row gap-4 justify-center">";";
              <button: className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";
                Coming Soon
              </button>
              <button: className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";";
>>>>>>> main
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ),

};";
";";
export default BlogPage;";";";
"
>>>>>>> main
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
=======
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
