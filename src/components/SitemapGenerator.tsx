import {  FileText, Download, Globe, Zap, Brain, Shield, Cloud, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, Star, Atom, Network, Eye, PenTool, TrendingUp, Rocket, Heart, Crown, Sparkles, Flame, DollarSign, Workflow, Settings, Lock, BarChart3, Cpu, Building, Server, Activity, GraduationCap, Newspaper, Target, Briefcase, Phone, MapPin, Mail,  } from 'lucide-react';

export default function Page() {
, []);

    setSitemapData(sitemap) };

    .map(section => ({

      ...section,
      routes: anysection.routes.filter(route => {

        return matchesSearch && matchesCategory})}))
    .filter(section => section.routes.length > 0);

    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a) ;
    a.click () ;
    document.body.removeChild(a) ;
    URL.revokeObjectURL(url) };

    a.href = url;
    a.download = 'sitemap.csv';
    document.body.appendChild(a) ;
    a.click () ;
    document.body.removeChild(a) ;
    URL.revokeObjectURL(url) };
  return ("
    <div className="max-w-7xl mx-auto p-6 space-y-6">"
      <div className="bg-white rounded-lg shadow-lg p-6">"
        <div className="flex items-center justify-between mb-6">
          <div>"
            <h1 className="text-3xl font-bold text-gray-900">
              Website Sitemap
            </h1>"
            <p className="text-gray-600 mt-2">
              Complete navigation structure and route documentation for Zion
              Tech Group
            </p>
          </div>"
          <div className="flex space-x-3">
            <button
              onClick={exportSitemap}"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >"
              <Download className="w-4 h-4 mr-2"  />              Export XML
            </button>
            <button
              onClick={exportCSV}"
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >"
              <Download className="w-4 h-4 mr-2"  />              Export CSV
            </button>
          </div>
        </div>

        {/* Search and Filter */}"
        <div className="mb-6 space-y-4">"
          <div className="flex flex-col md:flex-row gap-4">"
            <div className="flex-1">
              <input"
                type="text"
                placeholder="Search routes, names, or descriptions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>"
            <div className="w-full md:w-48">
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus: anyring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {allCategories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>) ) }
              </select>
            </div>
          </div>
        </div>

        {/* Sitemap Sections */}"
        <div className="space-y-8">
          {filteredSitemap.map((section, sectionIndex) => (
            <div
              key={sectionIndex}"
              className="border border-gray-200 rounded-lg p-6"
            >"
              <div className="flex items-center mb-4">"
                <section.icon className="w-6 h-6 text-blue-600 mr-3" />
                <h2'`
                  className={`text-xl font-semibold ${section.featured ? 'text-blue-600' : 'text-gray-900'}`}
                >
                  {section.title}
                  {section.featured && ("
                    <Star className="w-5 h-5 text-yellow-500 ml-2 inline"  />
                  )}                </h2>
              </div>"
              <p className="text-gray-600 mb-4">{section.description}</p>
"
              <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-4">
                {section.routes.map((route, routeIndex) => (
                  <div
                    key={routeIndex}`
                    className={`p-4 border rounded-lg transition-all duration-200 hover:shadow-md ${route.featured'
                        ? 'border-blue-300 bg-blue-50''
                        : 'border-gray-200 bg-white'`
                    }`}
                  >"
                    <div className="flex items-start space-x-3">
                      <div`
                        className={`p-2 rounded-lg ${route.featured'
                            ? 'bg-blue-100 text-blue-600''
                            : 'bg-gray-100 text-gray-600'`
                        }`}
                      >"
                        <route.icon className="w-4 h-4" />
                      </div>"
                      <div className="flex-1 min-w-0">"
                        <div className="flex items-center space-x-2 mb-1">"
                          <h3 className="font-medium text-gray-900 truncate">
                            {route.name}
                          </h3>
                          {route.featured && ("
                            <Star className="w-4 h-4 text-yellow-500 flex-shrink-0"  />
                          )}
                        </div>"
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {route.description}
                        </p>"
                        <div className="flex items-center justify-between">"                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {route.category}
                          </span>
                          <Link
                            to={route.path}"
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                          >
                            View →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>) ) }
              </div>
            </div>) ) }
        </div>

        {/* Summary Stats */}"
        <div className="mt-8 pt-6 border-t border-gray-200">"
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">"
            <div className="text-center">"
              <div className="text-2xl font-bold text-blue-600">
                {sitemapData.reduce()
                  (total, section) => total + section.routes.length,
                  0
                )}
              </div>"
              <div className="text-sm text-gray-600">Total Routes</div>
            </div>"
            <div className="text-center">"
              <div className="text-2xl font-bold text-green-600">
                {sitemapData.length}
              </div>"
              <div className="text-sm text-gray-600">Categories</div>
            </div>"
            <div className="text-center">"
              <div className="text-2xl font-bold text-yellow-600">
                {

                  sitemapData
                    .flatMap(section => section.routes)
                    .filter(route => route.featured).length
                }
              </div>"
              <div className="text-sm text-gray-600">Featured Routes</div>
            </div>"
            <div className="text-center">"
              <div className="text-2xl font-bold text-purple-600">
                {

                  Array.from()
                    new Set()
                      sitemapData.flatMap(section =>
                        section.routes.map(route => route.category)
                      )
                    )
                  ).length
                }
              </div>"
              <div className="text-sm text-gray-600">Unique Categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>) };

// Missing icon components"
const Home = () => <Globe className="w-4 h-4"  />;"
const Calendar = () => <BookOpen className="w-4 h-4"  />;"
const Video = () => <MessageCircle className="w-4 h-4"  />;"

export default SitemapGenerator;
'"`