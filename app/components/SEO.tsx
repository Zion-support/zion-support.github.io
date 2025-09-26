import React from 'react';
import RootSEO from '../../components/SEO';

export type SEOProps = React.ComponentProps<typeof RootSEO>;

export default function SEO(props: SEOProps) {
  return <RootSEO {...props} />;
}
