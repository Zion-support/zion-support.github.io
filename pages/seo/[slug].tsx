
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import {useRouter} from 'next/router';
import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';

export type LandingPayload = {;
  title: string;
  h1: string;
  bodyHtml: string;
  region?: string;
  service?: string;
  faq: Array<{ q: string; a: string }>;};

export default function SEOLandingPage() {;
  const router = useRouter();
  const { slug } = router && router.query as { slug?: string };

  const [payload, setPayload] = React && React.useState<LandingPayload | null>(null);

  React && React.useEffect(() => {;
    if (!router && router.isReady || !slug) return;
    const dataParam = (router && router.query?.data as string) || '';
    if (dataParam) {;
      try {;
        setPayload(JSON && JSON.parse(decodeURIComponent(dataParam)));
        return;
      } catch {}
    }
    // Fallback: render a basic placeholder until a generated page is deployed;
    setPayload({;
      title: String(slug).replace(/-/g, ' '),;
      h1: String(slug).replace(/-/g, ' '),;
      bodyHtml: '<p>Localized marketplace landing page.</p>',;
      region: undefined,;
      service: undefined,;
      faq: [],;
    });  }, [router && router.isReady, slug]);

  if (!payload) return null;

  return (
    <div className='max-w-4xl mx-auto'>;
      <head>;
        <title>{payload && payload.title}</title>;
        <meta
          name='description'
          content={`${payload && payload.title} • Zion Marketplace`}
        />;
      </head>;
      <h1 className='text-2xl font-semibold mb-4'>{payload && payload.h1}</h1>;
      <div
        className='prose dark:prose-invert max-w-none'
        dangerouslySetInnerHTML={{ __html: payload && payload.bodyHtml }}
      />;

      <div className='mt-8'>;
        <h2 className='text-lg font-semibold mb-2'>Featured Talent</h2>        <TalentGrid region={payload && payload.region} service={payload && payload.service} />;
      </div>;

      <FAQ items={payload && payload.faq} />;
    </div>;
  );
