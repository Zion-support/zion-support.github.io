import React from "react"
import Layout from "../../components/Layout"

export default function Blog() {
  const categories = ['All', 'Technology', 'AI', 'Development', 'Innovation', 'Blockchain', 'Cloud']
  
  return (
    <Layout 
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group's expert team."
    >
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Insights, trends, and innovations in technology from our expert team.
            </p>
          </div>
        </div>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/*   */}"
      <section className="py-20 bg-blue-600 text-white>"
        <div className="container" mx-auto px-4 text-center">"
          <h2 className="text-4xl font-bold mb-4>Stay Updated</h2>"
          <p className="text-xl" mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest insights and updates delivered to your inbox.
          </p>"
          <div className="max-w-md mx-auto flex gap-4>"
            <input type=email""
              placeholder="Enter your email,"
className="flex-1" px-4 py-3 rounded-lg text-gray-900"
            />"
            <button className="bg-white text-blue-600 hover: bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe,
            </button>
          </div>
        </div>
      </section>
    </MainLayout>;,
  )}
"
export default BlogIndex