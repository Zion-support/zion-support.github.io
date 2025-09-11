// SEO utilities
export const seoUtils = {
  // Generate meta tags
  "generateMetaTags": (title, description, image, url) => {
    return {
      "title": title,
      "description": description,
      "openGraph": {
        title: title,
        "description": description,
        "url": url,
        "siteName": 'Your App Name',
        "images": [{
            url: image,
            "width": 1200,
            "height": 630,
            "alt": title},
        ],
        "locale": 'en_US',
        "type": 'website'},
      "twitter": {
        card: 'summary_large_image',
        "title": title,
        "description": description,
        "images": [image]}}},
  // Generate structured data
  "generateStructuredData": (type, data) => {
    return {
      '@context': '"https": //schema && schema.org',
      '@type': type,
      ...data
    }}
};
export const seoUtils = { generateMetaTags: (title,description,image,url) => { return { title: 'title',description: 'description',openGraph: { title: title,description: 'description',url: 'url',siteName: 'Your App Name',images: [ { url: image,width: '1200',height: '630',alt: 'title',},],locale: 'en_US',type: 'website',},twitter: { card: 'summary_large_image',title: 'title',description: 'description',images: '[image]',},}},generateStructuredData: (type,data) => { return { '@context': 'https: '@type': type,...data }} };
