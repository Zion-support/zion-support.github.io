import { Helmet } from &apos;react-helmet-async';&apos;&apos;

export function SEO({
  title = &apos;Zion Tech Group&apos;,
  description = &apos;Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.&apos;,
  canonical = &apos;https://ziontechgroup.com/&apos;,
  keywords = &apos;AI, cybersecurity, cloud, devops, consulting, Zion Tech Group&apos;}) {
  return (&apos;}
    <Helmet>
      <title>{title}</title>
      <meta name=&apos;description&apos; content={description} />&apos;
      <meta name=&apos;keywords&apos; content={keywords} />&apos;
      <link rel=&apos;canonical&apos; href={canonical} />&apos;
    </Helmet>
  )}
export default SEO