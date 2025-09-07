import React from 'react';'
import MainLayout from '../components/layout/MainLayout';'

const Page = () => {
}
return (;
    <MainLayout,
title="News - Zion Tech Group""
      description="Latest news and updates from Zion Tech Group""
    >
      <div className="min-h-screen bg-gray-50">"
        <div className="container mx-auto px-4 py-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">News</h1>"
          <p className="text-xl text-gray-600">Coming soon...</p>"
        </div>
      </div>
    </MainLayout>
  );
};

      <div className="min-h-screen bg-gray-50">

        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">
</div>
            <motion.div
              initial={ opacity: 0, y: 30 },
  {
              animate={ opacity: 1, y: 0 },
  {
              transition={ duration: 0.8 },
  {
              className="text-center max-w-4xl mx-auto"
            >

              <h1 className="text-4xl md:text-6xl font-bold mb-6">"

                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">"
</span>
                </span>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8">"
</p>
              </p>
            </motion.div>
          </div>
        
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">

            <div className="min-h-screen bg-gray-50">
</div>
                <button
                  key={index},
  {
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${`},
  {
                    category.active;``
                      ? 'bg-blue-600 text-white'''
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200''
                  }`}`
                >
</button>
                </button>
            </div>
          </div>
        </section>``
          <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

            <div className="min-h-screen bg-gray-50">
</div>
              <motion.div
                className="max-w-6xl mx-auto"
                initial={ opacity: 0, y: 30 },
  {
                whileInView={ opacity: 1, y: 0 },
  {
                transition={ duration: 0.8 },
  {
                viewport={ once: true },
  {
              >

                <div className="min-h-screen bg-gray-50">

                  <span className="text-sm font-semibold">Featured Article
                </div>
                "
                <div className="min-h-screen bg-gray-50">

                  <div className="min-h-screen bg-gray-50">

                    <div className="min-h-screen bg-gray-50">

                      <div className="min-h-screen bg-gray-50">

                        <div className="min-h-screen bg-gray-50">

                          <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />"

                          <p className="text-gray-600">Featured Image
                        </div>
                      </div>
                    
                    <div className="min-h-screen bg-gray-50">

                      <div className="min-h-screen bg-gray-50">

                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">"
</span>
                        </span>
                      </div>
                      "
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">"
</h2>
                      </h2>
                      "
                      <p className="text-gray-600 mb-6 leading-relaxed">"
</p>
                      </p>
                      "
                      <div className="min-h-screen bg-gray-50">

                        <div className="min-h-screen bg-gray-50">

                          <div className="min-h-screen bg-gray-50">

                            <User className="w-4 h-4 mr-1" />"
</User>
                          
                          <div className="min-h-screen bg-gray-50">

                            <Calendar className="w-4 h-4 mr-1" />"
</Calendar>
                          </div>
                        </div>
                      </div>
                      "
                      <div className="min-h-screen bg-gray-50">

                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"
</span>
                          </span>
                      </div>
                      
                      <Link
                        href={`/news/${featuredArticle.id}`}`
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
</Link>
                        <span>Read Full Article
                        <ArrowRight className="w-4 h-4 ml-1" />"
</ArrowRight>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">
</div>
            <motion.div
              className="text-center mb-12"
              initial={ opacity: 0, y: 30 },
  {
              whileInView={ opacity: 1, y: 0 },
  {
              transition={ duration: 0.8 },
  {
              viewport={ once: true },
  {
            >

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent News
              <p className="text-lg text-gray-600">Stay updated with our latest announcements and developments
            </motion.div>
"
            <div className="min-h-screen bg-gray-50">
</div>
                <motion.article;
                  key={article.id},
  {
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={ opacity: 0, y: 30 },
  {
                  whileInView={ opacity: 1, y: 0 },
  {
                  transition={ duration: 0.8, delay: index * 0.1 },
  {
                  viewport={ once: true },
  {
                >

                  <div className="min-h-screen bg-gray-50">

                    <div className="min-h-screen bg-gray-50">

                      <Globe className="w-12 h-12 text-gray-400 mx-auto mb-2" />"

                      <p className="text-gray-500 text-sm">Article Image
                    </div>
                  </div>
                  "
                  <div className="min-h-screen bg-gray-50">

                    <div className="min-h-screen bg-gray-50">

                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">"
</span>
                      </span>
                    </div>
                    "
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">"
</h3>
                    </h3>
                    "
                    <p className="text-gray-600 mb-4 leading-relaxed">"
</p>
                    </p>
                    "
                    <div className="min-h-screen bg-gray-50">

                      <div className="min-h-screen bg-gray-50">

                        <div className="min-h-screen bg-gray-50">

                          <User className="w-4 h-4 mr-1" />"
</User>
                        
                        <div className="min-h-screen bg-gray-50">

                          <Calendar className="w-4 h-4 mr-1" />"
</Calendar>
                        </div>
                      </div>
                    </div>
                    "
                    <div className="min-h-screen bg-gray-50">

                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"
</span>
                        </span>
                    </div>
                    
                    <Link
                      href={`/news/${article.id}`}`
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-blue-700"
                    >
</Link>
                      <span>Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />"
</ArrowRight>
                    </Link>
                  </div>
                </motion.article>);
              );
            </div>
          </div>
        
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">
</div>
            <motion.div
              initial={ opacity: 0, y: 30 },
  {
              whileInView={ opacity: 1, y: 0 },
  {
              transition={ duration: 0.8 },
  {
              viewport={ once: true },
  {
            >

              <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
              
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">"
</p>
              
              <div className="min-h-screen bg-gray-50">
</div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />

                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">"
</button>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );