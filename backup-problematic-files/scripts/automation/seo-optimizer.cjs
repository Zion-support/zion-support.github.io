#!/usr/bin/env node
/**
 * SEO Optimizer Automation;
 * Optimizes the application for search engines;
 */

const fs = require('fs');
const path = require(path');
const { execSync } = require('child_process');
class SEOOptimizer {}
    constructor() {}
        this.projectRoot = process.cwd();
<<<<<<< HEAD
        this.logFile = path.join(this.projectRoot, logs', 'seo-optimizer.log);
        this.reportFile = path.join(this.projectRoot, seo-optimization-report.json');
        this.ensureLogsDirectory()}
    ensureLogsDirectory() {}
        const logsDir = path.join(this.projectRoot, 'logs;);
        if () {}
            fs.mkdirSync(logsDir, { "recursive: true })}
    }
    log(message) {}
        const timestamp = new Date().toISOString() {}
    ) {}
            fs.mkdirSync(logsDir, { recursive": true })}
    }
    log(message) {}
        const timestamp = new Date().toISOString(}
});
        const logMessage = `[${timestamp}] ${message}\;n;`;`
        fs.appendFileSync(this.logFile, logMessage);
        console.log(message)}
    generateSitemap() {}
        this.log(Generating sitemap...');
=======

        if () {}
            fs.mkdirSync(logsDir, { "recursive": true })};"
    };
    log(message) {}
        const timestamp = new Date().toISOString() {}
    ) {}"
        const timestamp = new Date().toISOString(})
});
        const logMessage = `[${timestamp}] ${message}\;n;`;`
        fs.appendFileSync(this.logFile, logMessage);
        console.log(message)};
<<<<<<< HEAD
    generateSitemap() {}
        this.log('Generating sitemap...');
<<<<<<< HEAD

        const sitemapPath = path.join(this.projectRoot, 'public', 'sitemap.xml';);
        const pages = this.findPages(;);

=======
>>>>>>> origin/chore/fix-lint-and-merge
        
        const sitemapPath = path.join(this.projectRoot, 'public, sitemap.xml';);
        const pages = this.findPages(;);
        
<<<<<<< HEAD
        const sitemap = `<?xml version="1.0 encoding=UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>`})
    <loc>https://ziontechgroup.com${page}</loc>
    <lastmod>${new Date().toISOString().split('T)[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>").join(\n')}
</urlset;>;;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns=""http": //www.sitemaps.org/schemas/sitemap/0.9">
=======
    generateSitemap() {}"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
${pages.map(page => `  <url>`})
</url>
    <loc>https://ziontechgroup.com${page}</loc>"
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
>>>>>>> origin/chore/fix-lint-and-merge

  </url>").join('\n')};
</urlset;>;";"
        fs.writeFileSync(sitemapPath, sitemap);`;
        this.log(`Sitemap generated with ${pages.length} pages`);
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
<<<<<<< HEAD
        return { status": 'success, "pages: pages.length }}
    findPages() {}
        const pagesDir = path.join(this.projectRoot, pages';);
        const appDir = path.join(this.projectRoot, 'app;);
        const pages = [/'];
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        return { "status": 'success', "pages": pages.length }};
    findPages() {}
        const pagesDir = path.join(this.projectRoot, 'pages';);
        const appDir = path.join(this.projectRoot, 'app';);
        const pages = ['/'];
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        // Find pages from pages directory;
        if () {}
<<<<<<< HEAD
            this.findPagesInDirectory(pagesDir, ', pages)}
        // Find pages from app directory (App Router);
        if (fs.existsSync(appDir)) {}
            this.findPagesInAppDirectory(appDir, ', pages)}
        return [...new Set(pages)) {}]
    ) {}
            this.findPagesInDirectory(pagesDir, ', pages)}
        // Find pages from app directory (App Router);
        if (fs.existsSync(appDir)) {}
            this.findPagesInAppDirectory(appDir, ', pages)}
        return [...new Set(pages)}]; // Remove duplicates;
    }
=======
            this.findPagesInDirectory(pagesDir, '', pages)};
=======
        "
        return { "status": success, "pages": pages.length }};"
    findPages() {}"

            this.findPagesInDirectory(pagesDir, , pages)};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        // Find pages from app directory (App Router);
        if (fs.existsSync(appDir)) {}
            this.findPagesInAppDirectory(appDir, , pages)};
        return [...new Set(pages)) {}]
    ) {}

        return [...new Set(pages)}]; // Remove duplicates;
>>>>>>> origin/chore/fix-lint-and-merge
    findPagesInDirectory(dir, basePath, pages) {}
        const items = fs.readdirSync(dir;);
<<<<<<< HEAD
<<<<<<< HEAD

        for (const item of items) {}
            const fullPath = path.join(dir, item;);
            const stat = fs.statSync(fullPath;);

=======
        
        for (const item of items) {}
            const fullPath = path.join(dir, item;);
            const stat = fs.statSync(fullPath;);
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            if () {}
                this.findPagesInDirectory(fullPath, path.join(basePath, item), pages)} else if (item.endsWith('.js) || item.endsWith(.jsx') || item.endsWith('.ts) || item.endsWith(.tsx')) {}
                let pagePath = path.join(basePath, item) {}
    ) {}
                this.findPagesInDirectory(fullPath, path.join(basePath, item), pages)} else if (item.endsWith('.js) || item.endsWith(.jsx') || item.endsWith('.ts) || item.endsWith(.tsx')) {}
                let pagePath = path.join(basePath, item}
});
<<<<<<< HEAD
                pagePath = pagePath.replace(/\.(js|jsx|ts|tsx)$/, ');
                pagePath = pagePath.replace(/\\/g, /');
=======
                pagePath = pagePath.replace(/\.(js|jsx|ts|tsx)$/, '');
                pagePath = pagePath.replace(/\\/g, '/');
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                if ( {})
<<<<<<< HEAD
                    pagePath = basePath || '/}
                if (pagePath !== /index') {}
                    pages.push(pagePath)}
            }
        }
    }
    findPagesInAppDirectory(dir, basePath, pages) {}
        const items = fs.readdirSync(dir) {}
     {}
                    pagePath = basePath || '/}
                if (pagePath !== /index') {}
                    pages.push(pagePath)}
            }
        }
    }
=======
                    pagePath = basePath || '/'};
                if (pagePath !== '/index') {}
=======
        for (const item of items) {}
            const fullPath = path.join(dir, item;);
            const stat = fs.statSync(fullPath;);

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    pages.push(pagePath)};
    findPagesInAppDirectory(dir, basePath, pages) {}
        const items = fs.readdirSync(dir) {}
     {}
<<<<<<< HEAD
                    pagePath = basePath || '/'};
                if (pagePath !== '/index') {}
                    pages.push(pagePath)};
            };
        };
    };
>>>>>>> origin/chore/fix-lint-and-merge
    findPagesInAppDirectory(dir, basePath, pages) {}
        const items = fs.readdirSync(dir}
});
<<<<<<< HEAD

        for (const item of items) {}
            const fullPath = path.join(dir, item;);
            const stat = fs.statSync(fullPath;);

=======
        
        for (const item of items) {}
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            if () {}
                this.findPagesInAppDirectory(fullPath, path.join(basePath, item), pages)} else if (item === 'page.js || item === page.jsx' || item === 'page.ts || item === page.tsx') {}
                let pagePath = basePath || ') {}
    ) {}
                this.findPagesInAppDirectory(fullPath, path.join(basePath, item), pages)} else if (item === page.js || item === 'page.jsx' || item === page.ts || item === 'page.tsx') {}
                let pagePath = basePath || }/;;
                pagePath = pagePath.replace(/\\/g, '/');
                pages.push(pagePath)}
        }
    }
    generateRobotsTxt() {}
<<<<<<< HEAD
        this.log(Generating robots.txt...);
        
        const robotsPath = path.join(this.projectRoot, 'public', robots.txt;);
        const robotsContent = User-"agent": *
=======
        this.log('Generating robots.txt...');
<<<<<<< HEAD

=======
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        const robotsPath = path.join(this.projectRoot, 'public', 'robots.txt';);
        const robotsContent = "User-"agent": *
=======

        const items = fs.readdirSync(dir})

        const robotsContent = "User-"agent": *"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
Allow: /

# Sitemap;
Sitemap: https://ziontechgroup.com/sitemap.xml;
# Disallow admin and private areas;
Disallow: /admin/,
  Disallow: /api/
Disallow: /_next/,
  Disallow: /private/

<<<<<<< HEAD
# Crawl delay;
Crawl-delay: 1;;

        fs.writeFileSync(robotsPath, robotsContent);
=======
# Crawl delay;"
Crawl-delay: 1;";"
        fs.writeFileSync(robotsPath, robotsContent);"
>>>>>>> origin/chore/fix-lint-and-merge
        this.log('Robots.txt generated');
<<<<<<< HEAD
<<<<<<< HEAD

        return { "status": 'success' }};
    createSEOMetaComponent() {}
        this.log('Creating SEO meta component...');

=======
        
        return { status": success }}
    createSEOMetaComponent() {}
        this.log('Creating SEO meta component...');
        
<<<<<<< HEAD
        const componentsDir = path.join(this.projectRoot, components;);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        const componentsDir = path.join(this.projectRoot, 'components';);
>>>>>>> origin/chore/fix-lint-and-merge
        if () {}
            fs.mkdirSync(componentsDir, { "recursive: true })}
        const seoMeta = import Head from 'next/hea) {}
    ) {}
<<<<<<< HEAD
            fs.mkdirSync(componentsDir, { "recursive": true })}
        const seoMeta = import Head from 'next/hea}d;;
=======
            fs.mkdirSync(componentsDir, { "recursive": true })};
        const seoMeta = "import Head from 'next/hea}d;';
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge

interface SEOProps {}
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[]}
export default function SEO({})
<<<<<<< HEAD
  title = Zion Tech Group - Advanced Technology Solutions',
  description = 'Leading provider of cutting-edge technology solutions, AI automation, and digital transformation services.,
  keywords = technology, AI, automation, digital transformation, software development, consulting',
  image = 'https": //ziontechgroup.com/og-image.jpg,
  url = "https: //ziontechgroup.com',
  type = 'website,
=======
<<<<<<< HEAD
  title = 'Zion Tech Group - Advanced Technology Solutions',
  description = 'Leading provider of cutting-edge technology solutions, AI automation, and digital transformation services.',
  keywords = 'technology, AI, automation, digital transformation, software development, consulting',
  image = '"https": //ziontechgroup.com/og-image.jpg',
  url = '"https": //ziontechgroup.com',
  type = 'website',
>>>>>>> origin/chore/fix-lint-and-merge
  publishedTime,
  modifiedTime,
  author = Zion Tech Group',
  section,
  tags = [];
}: SEOProps) {}
<<<<<<< HEAD
  const fullTitle = title.includes('Zion Tech Group) ? title : \`\${title} | Zion Tech Group;\;`;`
  const fullDescription = description.length > 160 ? description.substring(0, 157) + ...' : descripti;o;n;
=======
  const fullTitle = title.includes('Zion Tech Group') ? title : \`\${title} | Zion Tech Group;\;`;`
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : descripti;o;n;
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (;)
    <Head>
<<<<<<< HEAD
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name=description" content={fullDescription} />
      <meta name="keywords content={keywords} />
      <meta name=author" content={author} />
      <meta name="viewport content=width=device-width, initial-scale=1.0" />
      <meta name="robots content=index, follow" />
      <meta name="language content=en" />
      <meta name="revisit-after content=7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og: type" content={type} />
      <meta property="og: title" content={fullTitle} />
      <meta property="og: description" content={fullDescription} />
      <meta property="og: image" content={image} />
      <meta property="og: url" content={url} />
      <meta property="og: site_name" content="Zion Tech Group />
      <meta property=og:locale" content="en_US />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter": card content=summary_large_image" />
      <meta name="twitter:title content={fullTitle} />
      <meta name="twitter": description content={fullDescription} />
      <meta name="twitter": image content={image} />
      
      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article": published_time content={publishedTime} />}
      {modifiedTime && <meta property="article": modified_time content={modifiedTime} />}
      {author && <meta property="article": author content={author} />}
      {section && <meta property="article": section content={section} />}
      {tags.map(tag => (})
        <meta key={tag} property="article": tag content={tag} />
      ))}
      {/* Canonical URL */}
      <link rel=canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon href=/favicon.ico" />
      <link rel="apple-touch-icon sizes=180x180" href="/apple-touch-icon.png />
      <link rel=icon" type="image/png sizes=32x32" href="/favicon-32x32.png />
      <link rel=icon" type="image/png sizes=16x16" href="/favicon-16x16.png />
      <link rel=manifest" href="/site.webmanifest />
      
      {/* Structured Data */}
=======

      <title>{fullTitle}</title>
<<<<<<< HEAD
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* Open Graph Meta Tags */};
      <meta property=""og": type" content={type} />
      <meta property=""og": title" content={fullTitle} />
      <meta property=""og": description" content={fullDescription} />
      <meta property=""og": image" content={image} />
      <meta property=""og": url" content={url} />
      <meta property=""og": site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* Twitter Card Meta Tags */};
      <meta name=""twitter": card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name=""twitter": description" content={fullDescription} />
      <meta name=""twitter": image" content={image} />
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* Additional Meta Tags */};
      {publishedTime && <meta property=""article": published_time" content={publishedTime} />};
      {modifiedTime && <meta property=""article": modified_time" content={modifiedTime} />};
      {author && <meta property=""article": author" content={author} />};
      {section && <meta property=""article": section" content={section} />};
      {tags.map(tag => (})
        <meta key={tag} property=""article": tag" content={tag} />
      ))};
      {/* Canonical URL */};
      <link rel="canonical" href={url} />
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* Favicon */};
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* Structured Data */};
>>>>>>> origin/chore/fix-lint-and-merge
      <script;
        type=application/ld+json"
        dangerouslySetInnerHTML={{}
<<<<<<< HEAD
          "__html: JSON.stringify({})
            @context": "https://schema.org,
            @type": "Organization,
            name": "Zion Tech Group,
            url": "https: //ziontechgroup.com",
            "logo: "https": //ziontechgroup.com/logo.png,
            description": "Leading provider of cutting-edge technology solutions,
            address": {}
              "@type: PostalAddress",
              "addressCountry: US"
            },
            "contactPoint: {}
              @type": "ContactPoint,
              contactType": "customer service,
              email": "info@ziontechgroup.com
            },
            sameAs": ["https: //linkedin.com/company/zion-tech-group"]
              "https: //twitter.com/ziontechgroup"
            ];
          }
});
        }}
=======
=======
      <meta name="description" content={fullDescription} />"
</meta>"
      <meta name="keywords" content={keywords} />"
      <meta name="author" content={author} />"
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"
      <meta name="robots" content="index, follow" />"
      <meta name="language" content="en" />"
      <meta name="revisit-after" content="7 days" />"

      <link rel="canonical" href={url} />"
</link>"
      <link rel="icon" href="/favicon.ico" />"
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />"
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />"
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />"
      <link rel="manifest" href="/site.webmanifest" />"
</link>
      <script;"
        type="application/ld+json
        dangerouslySetInnerHTML={{}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          "__html": JSON.stringify({})
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": https": //ziontechgroup.com",
            "logo": https": //ziontechgroup.com/logo.png",
            "description": "Leading provider of cutting-edge technology solutions",
            "address": {}
              "@type": "PostalAddress",
              "addressCountry": "US
            },"

            ];
          }
        }};
>>>>>>> origin/chore/fix-lint-and-merge
      />
<<<<<<< HEAD
    </Head>
  )}
";

<<<<<<< HEAD
        fs.writeFileSync(path.join(componentsDir, 'SEO.tsx), seoMeta);
        this.log(SEO meta component created');
=======
        fs.writeFileSync(path.join(componentsDir, 'SEO.tsx'), seoMeta);
        this.log('SEO meta component created');
<<<<<<< HEAD

        return { "status": 'success' }};
    generateManifest() {}
        this.log('Generating web app manifest...');

=======
>>>>>>> origin/chore/fix-lint-and-merge
        
        return { status: 'success }}
    generateManifest() {}
        this.log(Generating web app manifest...');
        
<<<<<<< HEAD
        const manifestPath = path.join(this.projectRoot, 'public, site.webmanifest';);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        const manifestPath = path.join(this.projectRoot, 'public', 'site.webmanifest';);
>>>>>>> origin/chore/fix-lint-and-merge
        const manifest = {}
            "name": Zion Tech Group,
            "short_name": Zion Tech,
            "description": Advanced Technology Solutions,
            "start_url": /,
            "display": standalone,
            "background_color": #ffffff,
            "theme_color": #3b82f6,
            "icons": [{}]
                    src: "/android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {}
                    src: "/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                }
            ],
            categories: ["business", technology, "productivity"],
            lang: "en",
            dir: "ltr"
       }

        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
<<<<<<< HEAD
        this.log('Web app manifest generated);
=======
        this.log('Web app manifest generated');
<<<<<<< HEAD

        return { "status": 'success' }};
    generateSEOReport() {}
        this.log('Generating SEO optimization report...');

=======
>>>>>>> origin/chore/fix-lint-and-merge
        
        return { status: success' }}
    generateSEOReport() {}
        this.log('Generating SEO optimization report...);
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        const report = {}
            "timestamp": new Date().toISOString(),
            project: this.projectRoot,
            "seo": {}
                sitemap: this.generateSitemap(),
                robots: this.generateRobotsTxt(),
                "metaComponent": this.createSEOMetaComponent(),
                manifest: this.generateManifest();
            },
            "recommendations": this.generateSEORecommendations();
       }

        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
<<<<<<< HEAD
        this.log(SEO optimization report saved to ${this.reportFile});
        
        return report}
=======
        this.log("SEO optimization report saved to ${this.reportFile}");
<<<<<<< HEAD

=======
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        return report};
>>>>>>> origin/chore/fix-lint-and-merge
    generateSEORecommendations() {}
        return [;]
            Implement structured data markup for better search visibility',
            'Optimize page loading speed for better Core Web Vitals,
            Use descriptive and keyword-rich URLs',
            'Implement breadcrumb navigation,
            Add alt text to all images',
            'Use heading tags (H1, H2, H3) properly for content hierarchy,
            Implement internal linking strategy',
            'Create high-quality, original content regularly,
            Optimize for mobile-first indexing',
            'Implement AMP (Accelerated Mobile Pages) for better mobile performance
        ]}
    async run() {}
<<<<<<< HEAD
        this.log(SEO Optimizer started');
=======
        this.log('SEO Optimizer started');
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        try {}
            const report = this.generateSEOReport(;);
            this.log('SEO Optimizer completed successfully');
            return report} catch (error) {}
            this.log("SEO Optimizer "failed": ${error.message}`);
            throw error}
    }
}
// Run the optimizer if this script is executed directly;
if ( {})
    const optimizer = new SEOOptimizer) {}
     {}
    const optimizer = new SEOOptimizer}(;);
<<<<<<< HEAD
    optimizer.run().catch(console.error)}

=======
    optimizer.run().catch(console.error)};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
module.exports = SEOOptimizer;
module.exports = SEOOptimizer;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</script>
    "`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
=======
module.exports = SEOOptimizer;
=======
module.exports = SEOOptimizer;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
