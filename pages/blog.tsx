import type { NextPage } from &apos;next&apos;;
import Layout from &apos;../components/Layout&apos;;
import Link from &apos;next/link&apos;;
import { Calendar, User, ArrowRight, Tag, Clock } from &apos;lucide-react&apos;;

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: &quot;The Future of AI in Business: Trends and Predictions for 2024&quot;,
      excerpt: &quot;Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.&quot;,
      author: &quot;Kleber Santos&quot;,
      date: &quot;2024-01-15&quot;,
      readTime: &quot;5 min read&quot;,
      category: &quot;AI & Machine Learning&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      slug: &quot;future-of-ai-in-business-2024&quot;
    },
    {
      id: 2,
      title: &quot;Cloud Migration Best Practices: A Complete Guide&quot;,
      excerpt: &quot;Learn the essential steps and strategies for successfully migrating your business to the cloud.&quot;,
      author: &quot;Zion Tech Team&quot;,
      date: &quot;2024-01-10&quot;,
      readTime: &quot;8 min read&quot;,
      category: &quot;Cloud Services&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      slug: &quot;cloud-migration-best-practices&quot;
    },
    {
      id: 3,
      title: &quot;Building Scalable Web Applications with Modern Technologies&quot;,
      excerpt: &quot;Discover the latest technologies and frameworks for creating robust, scalable web applications.&quot;,
      author: &quot;Development Team&quot;,
      date: &quot;2024-01-05&quot;,
      readTime: &quot;6 min read&quot;,
      category: &quot;Web Development&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      slug: &quot;scalable-web-applications-modern-tech&quot;
    },
    {
      id: 4,
      title: &quot;Cybersecurity in 2024: Protecting Your Digital Assets&quot;,
      excerpt: &quot;Essential cybersecurity strategies and tools to protect your business from evolving threats.&quot;,
      author: &quot;Security Team&quot;,
      date: &quot;2024-01-01&quot;,
      readTime: &quot;7 min read&quot;,
      category: &quot;Cybersecurity&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      slug: &quot;cybersecurity-2024-protecting-digital-assets&quot;
    },
    {
      id: 5,
      title: &quot;Mobile App Development: Native vs Cross-Platform&quot;,
      excerpt: &quot;Compare native and cross-platform development approaches to choose the best solution for your mobile app.&quot;,
      author: &quot;Mobile Team&quot;,
      date: &quot;2023-12-28&quot;,
      readTime: &quot;9 min read&quot;,
      category: &quot;Mobile Development&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      slug: &quot;mobile-app-development-native-vs-cross-platform&quot;
    },
    {
      id: 6,
      title: &quot;Blockchain Technology: Beyond Cryptocurrency&quot;,
      excerpt: &quot;Explore real-world applications of blockchain technology in various industries beyond digital currencies.&quot;,
      author: &quot;Blockchain Team&quot;,
      date: &quot;2023-12-25&quot;,
      readTime: &quot;6 min read&quot;,
      category: &quot;Blockchain&quot;,
      image: &quot;/api/placeholder/600/400&quot;,
      slug: &quot;blockchain-technology-beyond-cryptocurrency&quot;
    }
  ];

  const categories = [
    &quot;All Posts&quot;,
    &quot;AI & Machine Learning&quot;,
    &quot;Cloud Services&quot;,
    &quot;Web Development&quot;,
    &quot;Mobile Development&quot;,
    &quot;Blockchain&quot;,
    &quot;Cybersecurity&quot;,
    &quot;IoT&quot;,
    &quot;Industry Insights&quot;
  ];

  return (
    <Layout
      title=&quot;Blog - Zion Tech Group&quot;
      description=&quot;Stay updated with the latest technology trends, insights, and best practices from Zion Tech Group&apos;s expert team.&quot;
    >
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            Tech
            <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;> Blog</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200&quot;>
            Stay ahead of the curve with insights, trends, and best practices from our technology experts.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-8&quot;>
            {/* Sidebar */}
            <div className=&quot;lg:col-span-1&quot;>
              <div className=&quot;sticky top-8&quot;>
                {/* Categories */}
                <div className=&quot;bg-gray-50 rounded-lg p-6 mb-8&quot;>
                  <h3 className=&quot;text-lg font-semibold text-gray-900 mb-4&quot;>Categories</h3>
                  <ul className=&quot;space-y-2&quot;>
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href=&quot;#&quot;
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                            index === 0
                              ? &apos;bg-blue-100 text-blue-700 font-medium&apos;
                              : &apos;text-gray-600 hover:bg-gray-100 hover:text-gray-900&apos;
                          }`}
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className=&quot;bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white&quot;>
                  <h3 className=&quot;text-lg font-semibold mb-4&quot;>Stay Updated</h3>
                  <p className=&quot;text-sm text-blue-100 mb-4&quot;>
                    Subscribe to our newsletter for the latest tech insights and updates.
                  </p>
                  <form className=&quot;space-y-3&quot;>
                    <input
                      type=&quot;email&quot;
                      placeholder=&quot;Enter your email&quot;
                      className=&quot;w-full px-3 py-2 rounded-md text-gray-900 text-sm&quot;
                    />
                    <button
                      type=&quot;submit&quot;
                      className=&quot;w-full bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md font-semibold text-sm transition-colors&quot;
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className=&quot;lg:col-span-3&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
                {blogPosts.map((post) => (
                  <article key={post.id} className=&quot;bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow&quot;>
                    <div className=&quot;h-48 bg-gradient-to-br from-blue-400 to-purple-500&quot;></div>
                    <div className=&quot;p-6&quot;>
                      <div className=&quot;flex items-center space-x-4 text-sm text-gray-500 mb-3&quot;>
                        <span className=&quot;flex items-center&quot;>
                          <Tag className=&quot;w-4 h-4 mr-1&quot; />
                          {post.category}
                        </span>
                        <span className=&quot;flex items-center&quot;>
                          <Clock className=&quot;w-4 h-4 mr-1&quot; />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h2 className=&quot;text-xl font-semibold text-gray-900 mb-3 line-clamp-2&quot;>
                        {post.title}
                      </h2>
                      
                      <p className=&quot;text-gray-600 mb-4 line-clamp-3&quot;>
                        {post.excerpt}
                      </p>
                      
                      <div className=&quot;flex items-center justify-between&quot;>
                        <div className=&quot;flex items-center space-x-3 text-sm text-gray-500&quot;>
                          <span className=&quot;flex items-center&quot;>
                            <User className=&quot;w-4 h-4 mr-1&quot; />
                            {post.author}
                          </span>
                          <span className=&quot;flex items-center&quot;>
                            <Calendar className=&quot;w-4 h-4 mr-1&quot; />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <Link
                          href={`/blog/${post.slug}`}
                          className=&quot;text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm&quot;
                        >
                          Read More
                          <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className=&quot;text-center mt-12&quot;>
                <button className=&quot;bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors&quot;>
                  Load More Posts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>Ready to Transform Your Business?</h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto&quot;>
            Let&apos;s discuss how our technology solutions can help you achieve your goals and stay ahead of the competition.
          </p>
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Get Started Today
            </Link>
            <Link href=&quot;/services&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;