// Default SEO component for the Zion Tech Group website

import { SEOProps } from '../../utils/seoUtils';
import { MetaTags } from './MetaTags';

// Default SEO component
export const DefaultSEO: React.FC<SEOProps> = (props) => {
  return <MetaTags {...props} />;
};