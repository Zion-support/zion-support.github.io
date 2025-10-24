export const generateSitemap = useCallback((...args) =>{
return `User-agent: "*",Allow: "/",Sitemap: "https://ziontechgroup.com/sitemap.xml",# Crawl-delay for better server performance"
Crawl-delay: "1",# Disallow admin and private areas"
Disallo,"
w: "/admin/",Disallow: "/api/"
Disallo",w: "/_next/",