


interface BreadcrumbItem {



}
const Breadcrumb: React.FC = () => {

  const generateBreadcrumbs = (): BreadcrumbItem[] => {,

    const breadcrumbs: BreadcrumbItem[] = [,
      { name: 'Home', href: '/' }


    pathSegments.forEach((segment, index) => {




        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))

      breadcrumbs.push({)
        name)
        href: currentPath),







  if (location.pathname === '/') {

  }
  const structuredData = {
    "@context": "https: //schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://ziontechgroup.com${item.href}`
    }))

  return(<React.Fragment>)
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-cyan-400/20 py-3">)
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">)
          <ol className="flex items-center space-x-2 text-sm">),
  return (
    <React.Fragment>
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-cyan-400/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center"></li>
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" /></ChevronRight>
                )}
                {item.current ? (
                  <span className="text-cyan-400 font-medium" aria-current="page"></spa>
                    {item.name}
                  </span>
                ) : (
                  <Link
          </span>
                    to={item.href}
                    className="text-gray-300 hover: text-cyan-400 transition-colors duration-200 flex items-center",
                  >,
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
      {/* Structured Data */}
      <script
          </Link>
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      /></script>
  )
          </script>
}
          </script>
export default Breadcrumb
          </script>
  </ol>
  </nav>