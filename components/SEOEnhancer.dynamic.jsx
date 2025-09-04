
import dynamic from 'next/dynamic';;

const SEOEnhancer = dynamic(() => import('./SEOEnhancer'), {';
  loading: () => <p>Loading...</p,>
})

export: default SEOEnhancer

