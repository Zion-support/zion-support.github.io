import {Helmet} from 'react-helmet-async';

export function SEO(props: any) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}   />
      <meta name='keywords' content={keywords}   />
      <link rel='canonical' href={canonical}   />
    </Helmet>
  )}
export default SEO