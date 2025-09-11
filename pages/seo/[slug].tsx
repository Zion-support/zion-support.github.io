
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { useRouter } from 'next/router';

import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';

export type LandingPayload = {

<<<<<<< HEAD
import {use_router} from 'next / router';
import TalentGrid from '../../components / seo / TalentGrid';
import FAQ from '../../components / seo / FAQ';
export type LandingPayload = {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  title: string;
  h1: string;
  body_html: string;
  region?: string;
<<<<<<< HEAD
  service?: string;
export type LandingPayload = {
  title: string,
  h1: string,
  bodyHtml: string,
region?: string;
  service?: string;
  faq: Array<{ q: string, a: string }>
};
import React from 'react';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useRouter  } from 'next/router';
import { useRouter } from 'next/router';
import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';
export type LandingPayload = {;
export type LandingPayload = {
  title: string;
  h1: string;
<<<<<<< HEAD
  bodyHtml: string;
  region?: string;
  service?: string;
  faq: Array<{ q: string; a: string }>;}
export default function SEOLandingPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const [payload, setPayload] = React.useState<LandingPayload | null>(null);

  React.useEffect(() => {
    if (!router.isReady |!slug) return;
    const dataParam = (router.query?.data as string) |'';
    if (dataParam) {
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam)));
  faq: Array<{ q: string; a: string }>;};
export default function SEOLandingPage() {;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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


  faq: Array<{ q: string; a: string }>;};

export default function SEOLandingPage() {;
=======
  body_html: string;
  region?: string;
=======
  faq: Array<{ q: string; a: string }>;};

export default function SEOLandingPage() {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  service?: string,;
  faq: Array<{ q: string, a: string }>;
},;
export default function SEOLandingPage(req, res) {
  try {
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const [payload, setPayload] = React.useState<LandingPayload | null>(null);
  React.useEffect(() => {;
    if (!router.isReady || !slug) return,;
    const dataParam = (router.query?.data as string) || '';
<<<<<<< HEAD
    if (dataParam) {;
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam)));
        return;
      } catch {}
    }
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
        return
      } catch {}
    }
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    if (dataParam) {;
      try {;
        setPayload(JSON && JSON.parse(decodeURIComponent(dataParam)));
        return;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
        return
      } catch {}
    }
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({ title: String(slug).replace(/-/g, ' '), h1: String(slug).replace(/-/g, ' '), bodyHtml: '<p>Localized marketplace landing page.</p>', region: undefined, service: undefined, faq: [] })
  }, [router.isReady, slug]);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!payload) return null;

  return (


      </div>
      <FAQ items={payload.faq} />
    </div>
<<<<<<< HEAD


        dangerouslySetInnerHTML={{ __html: payload && payload.bodyHtml }}
      />;
      <div className='mt-8'>;
        <h2 className='text-lg font-semibold mb-2'>Featured Talent</h2>        <TalentGrid region={payload && payload.region} service={payload && payload.service} />;
      </div>;
      <FAQ items={payload && payload.faq} />;
    </div>;
  );
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
}
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  faq: Array<{ q: string; array: string }>;}
;
export default /**
 * SEOLandingPage - Function description
 */
function SEOLandingPage() {
  const router = use_router ();
  const { slug } = router.query as { slug?: string }
;
  const [payload, set_payload] = React.useState < LandingPayload | null>(null);
;
  React.useEffect (() => {
    // Check condition
if (return) {
  $2
}
    const data_param = (router.query?.data as string) || '';
    // Check condition
if ( {) {
  $2
}
      try {
        set_payload (JSON.parse (decodeURIComponent (data_param)));
        return;
      } catch {}
    }
    // Fallback: render a basic placeholder until a generated page is deployed;
    set_payload ({
      title: String (slug).replace (/-/g, ' '),
      h1: String (slug).replace (/-/g, ' '),
      body_html: '<p > Localized marketplace landing page.</p>',
      region: undefined,
      service: undefined,
      faq: [],
    });  }, [router.is_ready, slug]);
;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='max - w-4xl mx - auto'>;
      <head>;
        <title>{payload.title}</title>;
        <meta;
          name='description';
          content={`${payload.title} • Zion Marketplace`}
        />;
      </head>;
      <h1 className='text - 2xl font - semibold mb - 4'>{payload.h1}</h1>;
      <div;
        className='prose dark:prose - invert max - w-none';
        dangerouslySetInnerHTML={{ __html: payload.body_html }}
      />;
      <div className='mt - 8'>;
        <h2 className='text - lg font - semibold mb - 2'>Featured Talent</h2>        <TalentGrid region={payload.region} service={payload.service} />;
      </div>;
      <FAQ items={payload.faq} />;
    </div>);
;
<<<<<<< HEAD
<<<<<<< HEAD
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

}
      <h1 className="text-2xl font-semibold mb-4">{payload.h1}</h1>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: payload.bodyHtml }} />
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Featured Talent</h2>
        <TalentGrid region={payload.region} service={payload.service} />
      </div>
      <FAQ items={payload.faq} />
    </div>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
);

}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
