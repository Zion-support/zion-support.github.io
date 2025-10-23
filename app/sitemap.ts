<<<<<<< HEAD
import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ziontechgroup.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ziontechgroup.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ziontechgroup.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ziontechgroup.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ziontechgroup.com/ai-services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ziontechgroup.com/it-services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ziontechgroup.com/micro-saas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ziontechgroup.com/emerging-tech",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ziontechgroup.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://ziontechgroup.com/case-studies",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
=======
export const generateSitemap = () => {
  const baseUrl = "https://ziontechgroup.com";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/contact",
    "/pricing",
    "/blog",
    "/careers",
    "/partnerships",
    "/api-docs",
    "/help",
    "/privacy",
    "/terms",
    "/cookies",
    "/accessibility",
    "/team",
    "/case-studies",
    // AI & ML Services
    "/ai-services",
    "/ai-solutions",
    "/ai-content-generator",
    "/data-analytics",
    // IT Services
    "/it-services",
    "/web-development",
    "/mobile-development",
    "/database-management",
    "/network-infrastructure",
    // Infrastructure
    "/cloud-infrastructure",
    "/5g-solutions",
    // Business Solutions
    "/digital-transformation",
    "/micro-saas-solutions",
    // AI Tools
    "/zion-ai-content-moderator",
    "/zion-ai-customer-churn-predictor",
    "/zion-ai-customer-churn-predictor-pro",
    "/zion-ai-customer-sentiment-tracker",
    "/zion-ai-customer-support-pro",
    "/zion-ai-document-analyzer",
    "/zion-ai-email-marketing-pro",
    "/zion-ai-financial-forecaster",
    "/zion-ai-inventory-optimizer-pro",
    "/zion-ai-meeting-transcriber",
    "/zion-ai-sales-predictor",
    "/zion-ai-social-scheduler-pro",
    "/zion-ai-task-scheduler",
    "/zion-ai-workflow-automator",
    "/zion-ai-workflow-automator-pro",
    "/zion-customer-satisfaction-monitor",
    "/zion-smart-expense-tracker",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return sitemap;
};
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
