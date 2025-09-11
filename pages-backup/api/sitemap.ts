import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {",
  const baseUrl = "https:// comment;
  const staticPages = [];
  const allPages = [];
  const sitemap = "<?xml version="1.0" encoding="UTF-8"?>";
<urlset xmlns="http: // comment;
${allPages.map((page) => {,
  const url = "${baseUrl}${page}";
  const priority = page === "" ? "1.0" : page.startsWith("/blog") ? "0.8" : "0.9";
  const changefreq = page === "" ? "daily" : page.startsWith("/blog") ? "weekly" : "monthly;
  return "  <url>    <loc>${url}</loc>;
    <lastmod>${new Date().toISOString()}</lastmod>;
    <changefreq>${changefreq}</changefreq>;
    <priority>${priority}</priority>;
  </url>";
}).join(";
")}</urlset>";
";
  res.setHeader("Content-Type", "text/xml");