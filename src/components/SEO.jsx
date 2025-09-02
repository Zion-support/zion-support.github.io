import { Helmet, } from 'react-helmet-async';
export function SEO({"
  title = 'Zion Tech Group', description = 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.', canonical = 'https: //ziontechgroup.com/',"
  keywords = 'AI, cybersecurity, cloud, devops, consulting, Zion Tech Group'}) {
  return (
    <Helmet>"
      <title></titl>{title}</title>"
      <meta name='description" content={description} /" ></meta>"
      <meta name='keywords" content={keywords} /" ></meta>"
      <link rel='canonical" href={canonical} /" ></link>
    </Helmet>
  )}"
export default SEO"