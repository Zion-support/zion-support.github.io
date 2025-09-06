
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
import { useRouter  } from 'next/router';
import { useRouter } from 'next/router';
import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';
export type LandingPayload = {;
export type LandingPayload = {
  title: string;
  h1: string;
  body_html: string;
  region?: string;

  service?: string;



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const [payload, setPayload] = React.useState<LandingPayload | null>(null);
  React.useEffect(() => {;
    if (!router.isReady || !slug) return,;
    const dataParam = (router.query?.data as string) || '';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    if (dataParam) {;
      try {;
        setPayload(JSON && JSON.parse(decodeURIComponent(dataParam)));
        return;


      } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({ title: String(slug).replace(/-/g, ' '), h1: String(slug).replace(/-/g, ' '), bodyHtml: '<p>Localized marketplace landing page.</p>', region: undefined, service: undefined, faq: [] })
  }, [router.isReady, slug]),
  if (!payload) return null,
  return (
    <div className="max-w-4xl mx-auto">
      <head>
        <title>{payload.title}</title>
        <meta name="description" content={`${payload.title} • Zion Marketplace`} />
      </head>
      <h1 className='text-2xl font-semibold mb-4'>{payload.h1}</h1>
      <div
        className='prose dark:prose-invert max-w-none'
        dangerouslySetInnerHTML={{ __html: payload.bodyHtml }}
      />
      <div className='mt-8'>
        <h2 className='text-lg font-semibold mb-2'>Featured Talent</h2>        <TalentGrid region={payload.region} service={payload.service} />
      </div>
      <FAQ items={payload.faq} />
    </div>
);


      <h1 className="text-2xl font-semibold mb-4">{payload.h1}</h1>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: payload.bodyHtml }} />
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Featured Talent</h2>
        <TalentGrid region={payload.region} service={payload.service} />

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (!payload) return null;

  return (


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      </div>
      <FAQ items={payload.faq} />
    </div>



        dangerouslySetInnerHTML={{ __html: payload && payload.bodyHtml }}
      />;

      <div className='mt-8'>;
        <h2 className='text-lg font-semibold mb-2'>Featured Talent</h2>        <TalentGrid region={payload && payload.region} service={payload && payload.service} />;
      </div>;

      <FAQ items={payload && payload.faq} />;
    </div>;
  );




>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

