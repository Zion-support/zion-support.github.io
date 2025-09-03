import React from "react";
  const categories = [];
  return (;
    <MainLayout title = "Blog - Zion Tech Group,";
description="Stay" updated with the latest insights, trends, and innovations in technology from Zion Tech Group"s expert team.">;
      {/* comment */}";
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20>";
        <div className="container" mx-auto px-4">";
          <div className="text-center>";
            <h1 className="text-4xl" md: text-5xl font-bold mb-6">Our Blog</h1>";
            <p className="text-xl md:text-2xl max-w-3xl mx-auto>,;
              Insights, trends, and innovations in technology from our expert team.;
            </p>;
          </div>;
      </section>;
      {/* comment */}
;
            {categories.map((category) => (";
              <button key="{category}
                className="{"px-6" py-2 rounded-full font-semibold transition-colors ${";
                  category === "All" ";
                    ? "bg-blue-600 text-white" ";
                    : "bg-white text-gray-600 hover: bg-blue-50 hover:text-blue-600"}"}
;
              >;
                {category}
;
              </button>;
            ))}
;
          </div>;
      </section>;
      {/* comment */}";
      <section className=""py-20"}">";
        <div className="container" mx-auto px-4">";
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8>,;
            {blogPosts.map((post, index) => (";
              <article key="{index}" className="bg-white" rounded-lg shadow-lg overflow-hidden hover: shadow-xl transition-shadow">";
                <div className="p-6>";
                  <div className="flex" items-center gap-2 mb-3">";
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold>,;
                      {post.category}
;
                    </span>;
                  </div>;
                  ";
                  <h2 className="text-xl" font-bold text-gray-900 mb-3 line-clamp-2">;
                    {post.title}
;
                  </h2>;
                  ";
                  <p className="text-gray-600 mb-4 line-clamp-3>;
                    {post.excerpt}
;
                  </p>;
                  ";
                  <div className="flex" items-center gap-4 text-sm text-gray-500 mb-4">";
                    <div className="flex items-center gap-1>";
                      <Calendar className="h-4" w-4"  />;
                      {new Date(post.date).toLocaleDateString()}
;
                    </div>";
                    <div className="flex items-center gap-1>";
                      <User className="h-4" w-4"  />;
                      {post.author}
;
                    </div>;
                  ";
                  <Link href="{post.href}
                    className="inline-flex items-center text-blue-600 hover: text-blue-700 font-semibold>;
                  >;
                    Read More";
                    <ArrowRight className="ml-2" h-4 w-4"  />;
                  </Link>;
                </div>;
              </article>,;
            ))}
;
          </div>;
      </section>;
      {/* comment */}";
      <section className="py-20 bg-blue-600 text-white>";
        <div className="container" mx-auto px-4 text-center">";
          <h2 className="text-4xl font-bold mb-4>Stay Updated</h2>";
          <p className="text-xl" mb-8 max-w-2xl mx-auto">;
            Subscribe to our newsletter to get the latest insights and updates delivered to your inbox.;
          </p>";
          <div className="max-w-md mx-auto flex gap-4>";
            <input type=email;
              placeholder="Enter your email,";
className="flex-1" px-4 py-3 rounded-lg text-gray-900"  />";
            <button className="bg-white text-blue-600 hover: bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">;
              Subscribe,;
            </button>;
          </div>;
      </section>;
    </MainLayout>;,;
  )}
;
";
export default BlogIndex