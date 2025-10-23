

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      excerpt:
        "Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations for competitive advantage.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure: Best Practices",
      excerpt:
        "Learn how to design and implement cloud infrastructure that can scale with your business growth and changing needs.",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Cloud Computing",
      featured: false,
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: Protecting Your Digital Assets",
      excerpt:
        "Discover how AI is both enhancing cybersecurity capabilities and creating new challenges that organizations must address.",
      author: "Alex Thompson",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Cybersecurity",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cloud Computing",
    "Cybersecurity",
    "Development",
    "Business",
  ];
  return (
    <>
      <Helmet>

            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-6xl text-purple-400">📝</div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {" "}
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      {" "}
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">

              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>{" "}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
