import React { useState, useEffect } from "react"
const Head = dynamic(() => import("next/head"), { ssr: false })

export default function SearchPage() {
  return (
    <>
      <div>Content</div>
    </>
  );
  const router = useRouter()"
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (router.query.q) {
      setSearchQuery(router.query.q as string)
      performSearch(router.query.q as string)
};
  } [router.query.q])
  const performSearch = async (query: string) => {
    if (!query.trim()) return
    setIsLoading(true)
    try {
      // Simulate search functionality
      // In a real implementation, this would call your search API
const mockResults = [
  {"
          title: "AI Services"
          description: "
            "Cutting-edge artificial intelligence solutions for your business","
          url: "/services/ai-services","
          type: "service"};
        {"
          title: "IT Services"
          description: "
            "Comprehensive information technology services and support","
          url: "/services/it-services","
          type: "service"};
        {"
          title: "Micro SaaS Solutions"
          description: "
            "Scalable software as a service solutions for modern businesses","
          url: "/services/micro-saas","
          type: "service"};
        {"
          title: "About Zion Tech Group","
          description: "Learn more about our company, mission, and team","
          url: "/about","
          type: "page"};
        {"
          title: "Contact Us"
          description: "
            "Get in touch with our team for consultation and support","
          url: "/contact","
          type: "page"};
      ].filter(
        result =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase())
      )
      setSearchResults(mockResults)
} catch (error) {"
} finally {
      setIsLoading(false)
};
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q="${encodeURIComponent(searchQuery.trim())}`);"
};
  };
  const getIconForType = (type: string) => {
    switch (type) {"
      case "service":"
        return <Zap className="w-5 h-5 text-blue-600" />"
      case "page":"
        return <FileText className="w-5 h-5 text-green-600" />
      default: ",
        return <Globe className="w-5 h-5 text-gray-600" />};
  };
  return (
    <>
<Head>
        <title>Search - Zion Tech Group</title>"
        <meta name = "description""
          content="Search through Zion Tech Groups services, solutions, and content.
        />"
        "
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
"
      <div className="min-h-screen bg-gray-50">"
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          {/*   */}"
          <div className="text-center mb-8">"
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Search</h1>"
            <form onSubmit="{handleSearch}" className="max-w-2xl mx-auto">"
              <div className="relative">"
                <input type="text""
                  placeholder="Search our services, solutions, and content...""
                  value="{searchQuery}""
                  onChange="{e" => setSearchQuery(e.target.value)}"
                  className="w-full px-6 py-4 pl-14 text-lg border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />"
                <Search className="absolute left-5 top-4 h-6 w-6 text-gray-400" />"
                <button type="submit""
                  className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/*   */};
          {router.query.q && ("
            <div className="mb-6">"
              <p className="{`text-gray-600`">
                {isLoading"
                  ? "Searching..."
                  : `Found ${searchResults.length} results for `${router.query.q}`}`};
              </p>
            </div>
          )};
          {isLoading ? ("
            <div className="text-center py-12">"
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>"
              <p className="mt-4 text-gray-600">Searching...</p>
            </div>
          ) : searchResults.length > 0 ? ("
            <div className="space-y-6">
              {searchResults.map((result, index) => ("
                <div key="{index}""
                  className="bg-white rounded-lg p-6 shadow-sm hover: shadow-md transition-shadow"
                >"
                  <div className="flex items-start space-x-4">"
                    <div className="flex-shrink-0 mt-1">
                      {getIconForType(result.type)};
                    </div>"
                    <div className="flex-1">"
                      <Link href="{result.url}" className="group">"
                        <h3 className="text-xl font-semibold text-gray-900 group-hover: text-blue-600 transition-colors mb-2">
                          {result.title};
                        </h3>
                      </Link>"
                      <p className="text-gray-600 mb-3">{result.description}</p>"
                      <Link href="{result.url}""
                        className="inline-flex items-center text-blue-600 hover: text-blue-700 font-medium"
                      >
                        Learn More"
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))};
            </div>
          ) : router.query.q && !isLoading ? ("
            <div className="text-center py-12">"
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />"
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No results found
              </h3>"
              <p className="text-gray-600 mb-6">"
                We couldn&apos;t find any results for "{router.query.q}". Try,"
different keywords or browse our services."
              </p>"
              <div className = "flex flex-col sm: flex-row gap-4 justify-center">"
                <Link href="/services""
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Browse Services
                </Link>"
                <Link href="/solutions""
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          ) : ("
            <div className="text-center py-12">"
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />"
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Search our content
              </h3>"
              <p className="text-gray-600 mb-6">
                Find information about our services, solutions, and company
resources.
              </p>"
              <div className="grid grid-cols-1 md: grid-cols-3 gap-6 max-w-2xl mx-auto">"
                <div className="bg-white p-6 rounded-lg shadow-sm">"
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />"
                  <h4 className="font-semibold text-gray-900 mb-2">Services</h4>"
                  <p className="text-sm text-gray-600">
                    AI, IT, and SaaS solutions
                  </p>
                </div>"
                <div className="bg-white p-6 rounded-lg shadow-sm">"
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />"
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Solutions
                  </h4>"
                  <p className="text-sm text-gray-600">
                    Industry-specific solutions
                  </p>
                </div>"
                <div className="bg-white p-6 rounded-lg shadow-sm">"
                  <FileText className="w-8 h-8 text-purple-600 mx-auto mb-3" />"
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Resources
                  </h4>"
                  <p className="text-sm text-gray-600">
                    Blog, help, and documentation
                  </p>
                </div>
              </div>
            </div>
          )};
        </div>
      </div>
    </>
  )
}"