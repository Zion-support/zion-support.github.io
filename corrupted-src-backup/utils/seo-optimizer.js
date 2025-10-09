/**
 * SEO Optimizer
 * Comprehensive SEO optimization and monitoring utilities
 */

class SEOOptimizer {
  constructor() {
    this.seoConfig = {
      siteName: "Zion Tech Group",
      siteDescription:
        "Advanced AI and IT Solutions - Leading technology company providing cutting-edge AI, machine learning, and IT consulting services.",
      siteUrl: "https://ziontechgroup.com",
      defaultImage: "/images/og-image.jpg",
      twitterHandle: "@ZionTechGroup",
      structuredData: {
        organization: {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zion Tech Group",
          url: "https://ziontechgroup.com",
          logo: "https://ziontechgroup.com/images/logo.png",
          description: "Advanced AI and IT Solutions",
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
          },
          sameAs: [
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
          ],
        },
      },
    };
    this.init();
  }

  init() {
    this.setupMetaTags();
    this.setupStructuredData();
    this.setupSitemap();
    this.setupRobotsTxt();
    this.setupCanonicalUrls();
    this.setupOpenGraph();
    this.setupTwitterCards();
    this.setupSchemaMarkup();
    this.setupPerformanceSEO();
  }

  setupMetaTags() {
    // Basic meta tags
    this.addMetaTag("description", this.seoConfig.siteDescription);
    this.addMetaTag(
      "keywords",
      "AI, artificial intelligence, machine learning, IT solutions, technology consulting, software development",
    );
    this.addMetaTag("author", "Zion Tech Group");
    this.addMetaTag("viewport", "width=device-width, initial-scale=1.0");
    this.addMetaTag("robots", "index, follow");
    this.addMetaTag("language", "en");
    this.addMetaTag("revisit-after", "7 days");
  }

  addMetaTag(name, content) {
    if (!document.querySelector(`meta[name="${name}"]`)) {
      const _meta = document.createElement("meta");
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    }
  }

  setupStructuredData() {
    // Add organization structured data
    this.addStructuredData(this.seoConfig.structuredData.organization);
  }

  addStructuredData(data) {
    const _script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  setupSitemap() {
    // Generate dynamic sitemap
    this.generateSitemap();
  }

  generateSitemap() {
    const pages = [
      { url: "/", priority: "1.0", changefreq: "daily" },
      { url: "/about", priority: "0.8", changefreq: "weekly" },
      { url: "/services", priority: "0.9", changefreq: "weekly" },
      { url: "/blog", priority: "0.7", changefreq: "daily" },
      { url: "/contact", priority: "0.6", changefreq: "monthly" },
      { url: "/team", priority: "0.5", changefreq: "monthly" },
      { url: "/privacy", priority: "0.3", changefreq: "yearly" },
      { url: "/terms", priority: "0.3", changefreq: "yearly" },
    ];

    const _sitemap = this.buildSitemapXML(pages);
    this.createSitemapFile(sitemap);
  }

  buildSitemapXML(pages) {
    //     const baseUrl = this.seoConfig.siteUrl;
    //     const lastmod = new Date().toISOString().split('T')[0];

    let _xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach((page) => {
      xml += "  <url>\n";
      xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += "  </url>\n";
    });

    xml += "</urlset>";
    return xml;
  }

  createSitemapFile(sitemap) {
    // In a real implementation, this would be saved to a file
    // For now, we'll store it in a data attribute for reference
    document.documentElement.setAttribute("data-sitemap", sitemap);
  }

  setupRobotsTxt() {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${this.seoConfig.siteUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_app_disabled/
Disallow: /_conflicted_disabled/
Disallow: /_pages_api_disabled/
Disallow: /_pages_disabled/
Disallow: /admin-api-disabled/
Disallow: /api-disabled/
Disallow: /api.disabled/
Disallow: /api.disabled.temp/
Disallow: /api-backup/
Disallow: /apps.backup/
Disallow: /automation_backup/
Disallow: /ai-optimization-backups/
Disallow: /automation_logs/
Disallow: /all-automations-reports/
Disallow: /accessibility-reports/
Disallow: /app/blog/
Disallow: /corrupted-files-backup/
Disallow: /corrupted_backup/
Disallow: /corrupted_files_backup_2/
Disallow: /content/
Disallow: /contracts/
Disallow: /components_backup/
Disallow: /app/services/
Disallow: /app/guides/
Disallow: /data/
Disallow: /data_backup/
Disallow: /dao/
Disallow: /deployments/
Disallow: /disabled-api/
Disallow: /e2e/
Disallow: /factories/
Disallow: /src/pages/blog-disabled/
Disallow: /hooks/
Disallow: /lib_backup/
Disallow: /services/
Disallow: /middleware/`;

    document.documentElement.setAttribute("data-robots-txt", robotsTxt);
  }

  setupCanonicalUrls() {
    // Add canonical URL
    const _canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = this.seoConfig.siteUrl + window.location.pathname;
    document.head.appendChild(canonical);
  }

  setupOpenGraph() {
    // Open Graph meta tags
    this.addOGTag("og:type", "website");
    this.addOGTag("og:site_name", this.seoConfig.siteName);
    this.addOGTag("og:title", this.getPageTitle());
    this.addOGTag("og:description", this.getPageDescription());
    this.addOGTag("og:url", this.seoConfig.siteUrl + window.location.pathname);
    this.addOGTag("og:image", this.getPageImage());
    this.addOGTag("og:locale", "en_US");
  }

  addOGTag(property, content) {
    if (!document.querySelector(`meta[property="${property}"]`)) {
      const _meta = document.createElement("meta");
      meta.setAttribute("property", property);
      meta.content = content;
      document.head.appendChild(meta);
    }
  }

  setupTwitterCards() {
    // Twitter Card meta tags
    this.addTwitterTag("twitter:card", "summary_large_image");
    this.addTwitterTag("twitter:site", this.seoConfig.twitterHandle);
    this.addTwitterTag("twitter:creator", this.seoConfig.twitterHandle);
    this.addTwitterTag("twitter:title", this.getPageTitle());
    this.addTwitterTag("twitter:description", this.getPageDescription());
    this.addTwitterTag("twitter:image", this.getPageImage());
  }

  addTwitterTag(name, content) {
    if (!document.querySelector(`meta[name="${name}"]`)) {
      const _meta = document.createElement("meta");
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    }
  }

  setupSchemaMarkup() {
    // Add page-specific schema markup
    this.addPageSchema();
  }

  addPageSchema() {
    //     const currentPath = window.location.pathname;
    let _schema = null;

    switch (currentPath) {
      case "/":
        schema = this.getHomePageSchema();
        break;
      case "/about":
        schema = this.getAboutPageSchema();
        break;
      case "/services":
        schema = this.getServicesPageSchema();
        break;
      case "/contact":
        schema = this.getContactPageSchema();
        break;
      case "/blog":
        schema = this.getBlogPageSchema();
        break;
    }

    if (schema) {
      this.addStructuredData(schema);
    }
  }

  getHomePageSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Zion Tech Group",
      url: this.seoConfig.siteUrl,
      description: this.seoConfig.siteDescription,
      potentialAction: {
        "@type": "SearchAction",
        target: `${this.seoConfig.siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };
  }

  getAboutPageSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Zion Tech Group",
      description:
        "Learn about Zion Tech Group, a leading AI and IT solutions company.",
      url: `${this.seoConfig.siteUrl}/about`,
      mainEntity: this.seoConfig.structuredData.organization,
    };
  }

  getServicesPageSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI and IT Solutions",
      description: "Comprehensive AI and IT consulting services",
      provider: this.seoConfig.structuredData.organization,
      serviceType: "Technology Consulting",
      areaServed: "Worldwide",
    };
  }

  getContactPageSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Zion Tech Group",
      description: "Get in touch with our team for AI and IT solutions",
      url: `${this.seoConfig.siteUrl}/contact`,
      mainEntity: this.seoConfig.structuredData.organization,
    };
  }

  getBlogPageSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Zion Tech Group Blog",
      description: "Latest insights on AI, technology, and IT solutions",
      url: `${this.seoConfig.siteUrl}/blog`,
      publisher: this.seoConfig.structuredData.organization,
    };
  }

  setupPerformanceSEO() {
    // Optimize for Core Web Vitals
    this.optimizeImages();
    this.optimizeFonts();
    this.optimizeCriticalCSS();
  }

  optimizeImages() {
    const _images = document.querySelectorAll("img");
    images.forEach((img) => {
      // Add loading="lazy" for non-critical images
      if (!img.hasAttribute("loading")) {
        img.loading = "lazy";
      }

      // Add alt text if missing
      if (!img.alt) {
        img.alt = this.generateAltText(img.src);
      }

      // Add width and height attributes
      if (!img.width && !img.height) {
        img.addEventListener("load", () => {
          img.width = img.naturalWidth;
          img.height = img.naturalHeight;
        });
      }
    });
  }

  generateAltText(src) {
    //     const filename = src.split('/').pop().split('.')[0];
    return filename
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  }

  optimizeFonts() {
    // Preload critical fonts
    const criticalFonts = [
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    ];

    criticalFonts.forEach((font) => {
      const _link = document.createElement("link");
      link.rel = "preload";
      link.href = font;
      link.as = "style";
      link.onload = () => {
        link.rel = "stylesheet";
      };
      document.head.appendChild(link);
    });
  }

  optimizeCriticalCSS() {
    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      body { font-family: Inter, sans-serif; margin: 0; padding: 0; }
      .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
      .header { background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 100; }
      .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 80px 0; text-align: center; }
      .btn { background: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 4px; cursor: pointer; text-decoration: none; display: inline-block; }
    `;

    const _style = document.createElement("style");
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }

  getPageTitle() {
    //     const currentPath = window.location.pathname;
    const titles = {
      "/": "Zion Tech Group - Advanced AI and IT Solutions",
      "/about": "About Us - Zion Tech Group",
      "/services": "Our Services - AI and IT Solutions",
      "/blog": "Blog - Latest Technology Insights",
      "/contact": "Contact Us - Zion Tech Group",
      "/team": "Our Team - Zion Tech Group",
      "/privacy": "Privacy Policy - Zion Tech Group",
      "/terms": "Terms of Service - Zion Tech Group",
    };
    return titles[currentPath] || this.seoConfig.siteName;
  }

  getPageDescription() {
    //     const currentPath = window.location.pathname;
    const descriptions = {
      "/": "Leading AI and IT solutions company providing cutting-edge technology consulting, machine learning, and software development services.",
      "/about":
        "Learn about Zion Tech Group's mission to revolutionize technology through innovative AI and IT solutions.",
      "/services":
        "Comprehensive AI and IT consulting services including machine learning, software development, and technology strategy.",
      "/blog":
        "Stay updated with the latest insights on AI, technology trends, and IT solutions from our expert team.",
      "/contact":
        "Get in touch with Zion Tech Group for your AI and IT consulting needs.",
      "/team":
        "Meet the talented team behind Zion Tech Group's innovative AI and IT solutions.",
      "/privacy": "Privacy Policy for Zion Tech Group website and services.",
      "/terms": "Terms of Service for Zion Tech Group website and services.",
    };
    return descriptions[currentPath] || this.seoConfig.siteDescription;
  }

  getPageImage() {
    //     const currentPath = window.location.pathname;
    const images = {
      "/": "/images/og-home.jpg",
      "/about": "/images/og-about.jpg",
      "/services": "/images/og-services.jpg",
      "/blog": "/images/og-blog.jpg",
      "/contact": "/images/og-contact.jpg",
      "/team": "/images/og-team.jpg",
    };
    return (
      this.seoConfig.siteUrl +
      (images[currentPath] || this.seoConfig.defaultImage)
    );
  }

  // Public methods
  updatePageSEO(title, description, image) {
    // Update page title
    document.title = title;

    // Update meta description
    this.updateMetaTag("description", description);

    // Update Open Graph tags
    this.updateOGTag("og:title", title);
    this.updateOGTag("og:description", description);
    if (image) {
      this.updateOGTag("og:image", image);
    }

    // Update Twitter Card tags
    this.updateTwitterTag("twitter:title", title);
    this.updateTwitterTag("twitter:description", description);
    if (image) {
      this.updateTwitterTag("twitter:image", image);
    }
  }

  updateMetaTag(name, content) {
    const _meta = document.querySelector(`meta[name="${name}"]`);
    if (meta) {
      meta.content = content;
    } else {
      this.addMetaTag(name, content);
    }
  }

  updateOGTag(property, content) {
    const _meta = document.querySelector(`meta[property="${property}"]`);
    if (meta) {
      meta.content = content;
    } else {
      this.addOGTag(property, content);
    }
  }

  updateTwitterTag(name, content) {
    const _meta = document.querySelector(`meta[name="${name}"]`);
    if (meta) {
      meta.content = content;
    } else {
      this.addTwitterTag(name, content);
    }
  }

  generateBreadcrumbs(items) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };

    this.addStructuredData(breadcrumbSchema);
  }

  trackPageView() {
    // Track page view for analytics
    if (window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_title: this.getPageTitle(),
        page_location: window.location.href,
      });
    }
  }
}

// Initialize SEO optimizer
// const seoOptimizer = new SEOOptimizer();

// Export for use in other modules
export default seoOptimizer;

// Global SEO instance
window.seoOptimizer = seoOptimizer;
