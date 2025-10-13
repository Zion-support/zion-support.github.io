import { useEffect } from 'react';
export default function SEOAudit() {
  useEffect(() => {
    const runSEOAudit = () => {
      const issues = [];
      const recommendations = [];
      // Check for title tag;
      const title = document.querySelector('title');
      if (!title || !title.textContent) {
        issues.push('Missing or empty title tag');
      } else if (title.textContent.length < 30) {
        recommendations.push('Title should be at least 30 characters');
      } else if (title.textContent.length > 60) {
        recommendations.push('Title should be under 60 characters');
      }
      // Check for meta description;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription || !metaDescription.getAttribute('content')) {
        issues.push('Missing meta description');
      } else {
        const desc = metaDescription.getAttribute('content') || '';
        if (desc.length < 120) {
          recommendations.push('Meta description should be at least 120 characters');
        } else if (desc.length > 160) {
          recommendations.push('Meta description should be under 160 characters');
        }
      }
      // Check for h1 tag;
      const h1 = document.querySelector('h1');
      if (!h1) {
        issues.push('Missing h1 tag');
      } else if (document.querySelectorAll('h1').length > 1) {
        recommendations.push('Should have only one h1 tag per page');
      }
      // Check for images with alt text;
      const images = document.querySelectorAll('img');
      let imagesWithoutAlt = 0;
      images.forEach(img => {
        if (!img.alt) {
          imagesWithoutAlt++;
        }
      });
      if (imagesWithoutAlt > 0) {
        issues.push(`${imagesWithoutAlt} images missing alt text`);
      }
      // Check for internal links;
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="ziontechgroup.com"]');
      if (internalLinks.length < 3) {
        recommendations.push('Add more internal links for better SEO');
      }
      // Check for external links;
      const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="ziontechgroup.com"])');
      if (externalLinks.length > 0) {
        externalLinks.forEach(link => {
          if (!link.getAttribute('rel')?.includes('nofollow')) {
            recommendations.push('Consider adding rel="nofollow" to external links');
          }
        });
      }
      // Check for structured data;
      const structuredData = document.querySelector('script[type="application/ld+json"]');
      if (!structuredData) {
        recommendations.push('Add structured data for better search visibility');
      }
      // Log results;
      if (issues.length > 0) {
        console.warn('SEO Issues found:', issues);
      }
      if (recommendations.length > 0) {
        console.log('SEO Recommendations:', recommendations);
      }
      if (issues.length === 0 && recommendations.length === 0) {
        console.log('✅ SEO audit passed');
      }
      return { issues, recommendations };
    };
    // Run audit after page load;
    setTimeout(runSEOAudit, 1000);
    // Re-run on route changes;
    const observer = new MutationObserver(() => {
      setTimeout(runSEOAudit, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
    };
  }, []);
  return null;
}