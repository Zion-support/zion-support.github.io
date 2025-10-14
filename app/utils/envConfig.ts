export const envConfig = {apiUrl: process.env.NEXT_PUBLIC_API_URL || &apos;https://api.ziontechgroup.com&apos;,
  environment: process.env.NODE_ENV || &apos;development&apos;,
  features: {
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === &apos;true&apos;,
    seo: process.env.NEXT_PUBLIC_SEO_ENABLED === &apos;true&apos;,;
    performance: process.env.NEXT_PUBLIC_PERFORMANCE_ENABLED === &apos;true&apos;},
  debug: process.env.NODE_ENV === &apos;development&apos;;
}