<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';

=======

=======

import { useRouter } from 'next/router';

import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';

export type LandingPayload = {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import {use_router} from 'next / router';
import TalentGrid from '../../components / seo / TalentGrid';
import FAQ from '../../components / seo / FAQ';
export type LandingPayload = {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  title: string;
  h1: string;
  body_html: string;
  region?: string;
<<<<<<< HEAD

<<<<<<< HEAD
  service?: string,;
  faq: Array<{ q: string, a: string }>;
},;
export default function SEOLandingPage(req, res) {
  try {

=======
  service?: string;
export type LandingPayload = {
  title: string,
  h1: string,
  bodyHtml: string,
region?: string;
  service?: string;
  faq: Array<{ q: string, a: string }>
};
=======
import React from 'react';
<<<<<<< HEAD
import { useRouter  } from 'next/router';
=======
import { useRouter } from 'next/router';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';
<<<<<<< HEAD
export type LandingPayload = {;
=======
export type LandingPayload = {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  title: string;
  h1: string;
  bodyHtml: string;
  region?: string;
<<<<<<< HEAD
  service?: string;
<<<<<<< HEAD
  faq: Array<{ q: string; a: string }>;}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default function SEOLandingPage() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const [payload, setPayload] = React.useState<LandingPayload | null>(null);
<<<<<<< HEAD
  React.useEffect(() => {;
    if (!router.isReady || !slug) return,;
    const dataParam = (router.query?.data as string) || '';
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  React.useEffect(() => {
    if (!router.isReady |!slug) return;
    const dataParam = (router.query?.data as string) |'';
    if (dataParam) {
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam)));
  faq: Array<{ q: string; a: string }>;};
export default function SEOLandingPage() {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const router = useRouter();
  const { slug } = router && router.query as { slug?: string };
  const [payload, setPayload] = React && React.useState<LandingPayload | null>(null);
  React && React.useEffect(() => {;
    if (!router && router.isReady || !slug) return;
    const dataParam = (router && router.query?.data as string) || '';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (dataParam) {;
      try {;
        setPayload(JSON && JSON.parse(decodeURIComponent(dataParam)));
        return;
<<<<<<< HEAD

<<<<<<< HEAD
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

=======
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

<<<<<<< HEAD
  const [payload, setPayload] = React.useState<LandingPayload | null>(null),

  React.useEffect(() => {
    if (!router.isReady || !slug) return,
    const dataParam = (router.query?.data as string) || ''
    if (dataParam) {
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam))),

        return
      } catch {}
    }
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({ title: String(slug).replace(/-/g, ' '), h1: String(slug).replace(/-/g, ' '), bodyHtml: '<p>Localized marketplace landing page.</p>', region: undefined, service: undefined, faq: [] })
}, [router.isReady, slug]);
  if (!payload) return null;
=======
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
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam)));
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
  }, [router.isReady, slug]),
  if (!payload) return null,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="max-w-4xl mx-auto">
      <head>
        <title>{payload.title}</title>
        <meta name="description" content={`${payload.title} • Zion Marketplace`} />
      </head>
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <h1 className="text-2xl font-semibold mb-4">{payload.h1}</h1>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: payload.bodyHtml }} />
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Featured Talent</h2>
        <TalentGrid region={payload.region} service={payload.service} />
      </div>
      <FAQ items={payload.faq} />
    </div>
<<<<<<< HEAD
=======
=======
        return
      } catch {}
    }
=======



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


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  )
}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      <h1 className="text-2xl font-semibold mb-4">{payload.h1}</h1>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: payload.bodyHtml }} />
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Featured Talent</h2>
        <TalentGrid region={payload.region} service={payload.service} />
      </div>
      <FAQ items={payload.faq} />
    </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
