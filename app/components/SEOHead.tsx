import Head from 'next/head'
interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  structuredData?: any}
const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - AI Solutions","
  description = "Advanced AI solutions for modern businesses","
  keywords = "AI, artificial, intelligence, technology, solutions, business automation",
  structuredData)
}) => {
  return (<Head>"
      <title>{title}</title>"
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description}  />
      {structuredData && ("
        <script "
          type="application/ld+json")
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
         />
      )}
    </Head>
  )}"
export default SEOHead";'"