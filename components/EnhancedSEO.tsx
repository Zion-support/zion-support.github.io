ursor/automate-test-fix-improve-and-merge-code-48f3
  description?: string;  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

const defaultSEO = {;
ursor/automate-test-fix-improve-and-merge-code-48f3
export const EnhancedSEO: React.FC<SEOProps> = ({  title = defaultSEO.title, description = defaultSEO.description,
  image = defaultSEO.image, url,
  type = defaultSEO.type, keywords = defaultSEO.keywords,
  author = defaultSEO.author, publishedTime,
  modifiedTime, section,
  tags, noindex = false,
  nofollow = false, }) => {
  const router = useRouter();
  const canonicalUrl = url || `https: //ziontechgroup.com${router.asPath}`;`  const fullTitle = title === defaultSEO.title ? title : `${title} | Zion Tech Group`;`
  const robotsContent = [;
ursor/automate-test-fix-improve-and-merge-code-48f3
      <meta property="og: type" content={type} />"      <meta property="og:url" content={canonicalUrl} />"      <meta property="og:title" content={fullTitle} />"      <meta property="og:description" content={description} />"      <meta property="og:image" content={image} />"      <meta property="og:site_name" content="Zion Tech Group" />"      <meta property="og:locale" content="en_US" />""      {/* Twitter */}      <meta property="twitter:card" content="summary_large_image" />"      <meta property="twitter:url" content={canonicalUrl} />"      <meta property="twitter:title" content={fullTitle} />"      <meta property="twitter:description" content={description} />"      <meta property="twitter:image" content={image} />"      <meta property="twitter:site" content="@ziontechgroup" />"      <meta property="twitter:creator" content="@ziontechgroup" />""      {/* Article specific meta tags */}
      {type === 'article'
  ' && ('        <>
  '          {publishedTime && <meta property="article:published_time" content={publishedTime} />}"          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}"          {section && <meta property="article:section" content={section} />}"          {tags && tags.map((tag, index) => ("            <meta key={index} property="article: tag" content={tag} />"          ))}"</>'
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />"      <meta name="msapplication-TileColor" content="#0ea5e9" />"      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />"      "      {/* Structured Data */}
      <script
ursor/automate-test-fix-improve-and-merge-code-48f3
  );};

export default EnhancedSEO;