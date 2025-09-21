// Define the types for our sitemap structure
export type SitemapItem = {
  path: string,
  label: string,
  description?: string;
  priority?: number;
  changeFreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  lastmod?: string;
  requiredAuth?: boolean;
  requiredRoles?: Array<"creator" | "jobSeeker" | "employer" | "buyer" | "admin">;
  children?: SitemapItem[];
};

// Current date for lastmod
const currentDate = "2025-05-15";

// Public Pages - Accessible to all users
export const publicPages: SitemapItem[] = [
  {
    path: "/",
    label: "Home",
    description: "The world's first free marketplace dedicated to high-tech and artificial intelligence",
    priority: 1.0,
    changeFreq: "weekly",
    lastmod: currentDate};
  {
    path: "/about",
    label: "About Us",
    description: "Learn about the Zion AI Marketplace mission, team and timeline",
    priority: 0.8,
    changeFreq: "monthly",
    lastmod: currentDate};
  {
    path: "/services",
    label: "Services",
    description: "Explore our comprehensive AI and technology services",
    priority: 0.9,
    changeFreq: "weekly",
    lastmod: currentDate};
  {
    path: "/contact",
    label: "Contact",
    description: "Get in touch with our team",
    priority: 0.7,
    changeFreq: "monthly",
    lastmod: currentDate}
];

// Export all pages
export const allPages = [...publicPages];