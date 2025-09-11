import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
;
const Newsroom: React.FC = () => {};
    { id: 'all', name: 'All News', count: 156 },;
    { id: 'press-releases', name: 'Press Releases', count: 23 },;
    { id: 'company-news', name: 'Company News', count: 45 },;
    { id: 'product-updates', name: 'Product Updates', count: 34 },;
    { id: 'partnerships', name: 'Partnerships', count: 18 },;
    { id: 'awards', name: 'Awards & Recognition', count: 12 },;
    { id: 'thought-leadership', name: 'Thought Leadership', count: 24 },;
  ];

  const featuredNews = [;
    {};
},;
    {};
},;
    {};
},;
  ];

  const recentNews = [;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
  ];

  const pressReleases = [;
    {};
},;
    {};
},;
    {};
},;
  ];
;
  const getCategoryColor = (category: string) => {};
    const colors: { [key: string]: string } = {};
};
    return colors[category] || 'bg-gray-100 text-gray-800';,
};
;
  const getCategoryName = (category: string) => {};
    const names: { [key: string]: string } = {};
};
    return names[category] || category;,
};
;
  const filteredNews = recentNews.filter(item => {};
});
;
  return (;
    <div className="min-h-screen bg-gray-50">;
      <Head>;
        <title>Newsroom - Zion App</title>;
        <meta name="description" content="Latest news, press releases, and company updates from Zion App" />;
        <meta name="keywords" content="news, press releases, company news, Zion App" />;
      </Head>;

      <div className="container mx-auto px-4 py-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-12">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              Newsroom;
            </h1>;
            <p className="text-xl text-gray-600">;
              Stay updated with the latest news, announcements, and insights from Zion App;
            </p>;
          </div>;

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">;
            <div className="flex flex-col md:flex-row gap-4 mb-6">;
              <div className="flex-1">;
                <div>Broken JSX</div>
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
                />;
              </div>;
              <div className="flex gap-2">;
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">;
                  Search;
                </button>;
                <div>Broken JSX</div>
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">;
                  Clear;
                </button>;
              </div>;
            </div>;

            <div className="flex flex-wrap gap-2">;
              {};
                  onClick={() => setActiveCategory(category.id)}
                  className={};
}`}
                >;
                  {category.name} ({category.count});
                </button>;
              ))}
            </div>;
          </div>;

          {/* Featured News */}
          <div className="mb-12">;
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured News</h2>;
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
              {};
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">;
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">;
                    <span className="text-white text-lg font-medium">Featured</span>;
                  </div>;
                  <div className="p-6">;
                    <div className="flex items-center gap-2 mb-3">;
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                        {getCategoryName(item.category)}
                      </span>;
                      <span className="text-gray-500 text-sm">{item.readTime}</span>;
                    </div>;
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>;
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>;
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">;
                      <span>By {item.author}</span>;
                      <span>{new Date(item.date).toLocaleDateString()}</span>;
                    </div>;
                    <div className="flex flex-wrap gap-2 mb-4">;
                      {};
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">;
                      Read More;
                    </button>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Recent News */}
            <div className="lg:col-span-2">;
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent News</h2>;
              <div className="space-y-6">;
                {};
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6">;
                    <div className="flex items-start gap-4">;
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">;
                        <span className="text-gray-600 text-xs">{getCategoryName(item.category)}</span>;
                      </div>;
                      <div className="flex-1">;
                        <div className="flex items-center gap-2 mb-2">;
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                            {getCategoryName(item.category)}
                          </span>;
                          <span className="text-gray-500 text-sm">{item.readTime}</span>;
                        </div>;
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>;
                        <p className="text-gray-600 mb-3">{item.excerpt}</p>;
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">;
                          <span>By {item.author}</span>;
                          <span>{new Date(item.date).toLocaleDateString()}</span>;
                        </div>;
                        <div className="flex flex-wrap gap-2">;
                          {};
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">;
                              {tag}
                            </span>;
                          ))}
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                ))}
              </div>;
            </div>;

            {/* Press Releases */}
            <div>;
              <div className="bg-white rounded-lg shadow-lg p-6">;
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Press Releases</h2>;
                <div className="space-y-4">;
                  {};
                    <div key={item.id} className="border-l-4 border-blue-500 pl-4">;
                      <h3 className="font-medium text-gray-800 mb-2">{item.title}</h3>;
                      <p className="text-gray-600 text-sm mb-2">{item.excerpt}</p>;
                      <div className="text-gray-500 text-xs">{new Date(item.date).toLocaleDateString()}</div>;
                    </div>;
                  ))}
                </div>;
                <div className="mt-6 text-center">;
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">;
                    View All Press Releases;
                  </button>;
                </div>;
              </div>;

              {/* Media Kit */}
              <div className="bg-white rounded-lg shadow-lg p-6 mt-6">;
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Media Kit</h2>;
                <div className="space-y-3">;
                  <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">;
                    <div className="font-medium text-gray-800">Company Logo</div>;
                    <div className="text-sm text-gray-600">High-resolution logos and brand assets</div>;
                  </button>;
                  <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">;
                    <div className="font-medium text-gray-800">Executive Bios</div>;
                    <div className="text-sm text-gray-600">Leadership team information and photos</div>;
                  </button>;
                  <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">;
                    <div className="font-medium text-gray-800">Fact Sheet</div>;
                    <div className="text-sm text-gray-600">Key company statistics and information</div>;
                  </button>;
                </div>;
              </div>;
            </div>;
          </div>;

          {/* Newsletter Signup */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">;
            <h2 className="text-2xl font-semibold mb-4">Stay in the Loop</h2>;
            <p className="text-blue-100 mb-6">;
              Get the latest news and updates delivered directly to your inbox.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;
              <div>Broken JSX</div>
              />;
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">;
                Subscribe;
              </button>;
            </div>;
          </div>;

          {/* Contact Information */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">;
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Media Inquiries?</h2>;
            <p className="text-gray-600 mb-6">;
              Our PR team is here to help with media requests, interviews, and press opportunities.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                Contact PR Team;
              </Link>;
              <a href="mailto:press@zion.app" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">;
                press@zion.app;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  )}
export default Newsroom;