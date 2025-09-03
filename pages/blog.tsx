import type { NextPage } from 'next'
const MainLayout = dynamic(() => import('../components/layout/MainLayout'), { ssr: false })
const Link = dynamic(() => import('next/link'), { ssr: false })

const Blog: NextPage = () => {
  const blogPosts = [,
    {,
id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024","
      excerpt: "Explore the latest AI trends that are transforming businesses and how you can leverage them for growth.","
      date: "2024-01-15","
      author: "Zion Tech Team","
      category: "AI & Technology",
    },
    {
      id: 2,"
      title: "Micro SaaS: The New Era of Focused Software Solutions","
      excerpt: "Discover how micro SaaS applications are revolutionizing the software industry with targeted solutions.","
      date: "2024-01-10","
      author: "Zion Tech Team","
      category: "Micro SaaS",
    },
    {
      id: 3,"
      title: "Cloud Migration Best Practices: A Complete Guide","
      excerpt: "Learn the essential steps and best practices for successful cloud migration in your organization.","
      date: "2024-01-05","
      author: "Zion Tech Team","
      category: "Cloud Services",,
    }
  ]'

  return ("
    <MainLayout title = "Blog - Zion Tech Group""
      description="Stay updated with the latest insights on technology, AI, cloud services, and business innovation from Zion Tech Group."
    >"
      <div className="min-h-screen bg-gray-50">
        {/*   */}"
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16 md: py-24">"
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="max-w-4xl mx-auto text-center">"
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Technology Insights & Innovation,
              </h1>"
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">,
                Stay ahead with the latest trends in AI, cloud technology, micro SaaS, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/*   */}"
        <section className="py-16 md: py-24">"
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="max-w-6xl mx-auto">"
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (",
                  <article key="{post.id}" className="bg-white rounded-lg shadow-lg overflow-hidden hover: shadow-xl transition-shadow duration-300">"
                    <div className="p-6 md:p-8">"
                      <div className="flex items-center gap-2 mb-4">"
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">,
                          {post.category}
                        </span>
                      </div>
                      "
                      <h2 className="text-xl md: text-2xl font-bold text-gray-900 mb-4 leading-tight">,
                        {post.title}
                      </h2>
                      "
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      "
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">"
                        <div className="flex items-center gap-1">"
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>"
                        <div className="flex items-center gap-1">"
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      "
                      <Link href="{`/blog/${post.id}`}" className="inline-flex items-center text-blue-600 hover: text-blue-700 font-medium">
                        Read More"
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </article>,
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*   */}"
        <section className="py-16 bg-white">"
          <div className="container mx-auto px-4 sm: px-6 lg:px-8 text-center">"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">'
              Let's discuss how our innovative solutions can help your business grow and succeed.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                Get Started Today"
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>"
              <Link href="/services" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                Explore Services,
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>;,
  ),
}
"
export default Blog