
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


=======

import { useRouter } from 'next/router';

import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';

export type LandingPayload = {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string;
  h1: string;
  body_html: string;
  region?: string;
<<<<<<< HEAD
  service?: string;
<<<<<<< HEAD
  faq: Array<{ q: string; a: string }>;}
export default function SEOLandingPage() {
  const router = useRouter();
  const { slug } = router && router.query as { slug?: string };

=======
  faq: Array<{ q: string; a: string }>;};

export default function SEOLandingPage() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  service?: string,;
  faq: Array<{ q: string, a: string }>;
},;
export default function SEOLandingPage(req, res) {
  try {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const [payload, setPayload] = React.useState<LandingPayload | null>(null);
  React.useEffect(() => {;
    if (!router.isReady || !slug) return,;
    const dataParam = (router.query?.data as string) || '';
    if (dataParam) {;
      try {;
        setPayload(JSON && JSON.parse(decodeURIComponent(dataParam)));
        return;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      } catch {}
    }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({ title: String(slug).replace(/-/g, ' '), h1: String(slug).replace(/-/g, ' '), bodyHtml: '<p>Localized marketplace landing page.</p>', region: undefined, service: undefined, faq: [] })
  }, [router.isReady, slug]);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (!payload) return null;

  return (


      </div>
      <FAQ items={payload.faq} />
    </div>
);
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
