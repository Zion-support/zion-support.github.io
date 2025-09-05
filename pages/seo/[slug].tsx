<<<<<<< HEAD
import React from 'react',
import { useRouter } from 'next/router',
import TalentGrid from '../../components/seo/TalentGrid',
import FAQ from '../../components/seo/FAQ',
export type LandingPayload = {
  title: string,
  h1: string,
  bodyHtml: string,
  region?: string,
  service?: string,
  faq: Array<{ q: string, a: string }>
},

export default function SEOLandingPage() {
  const router = useRouter(),
  const { slug } = router.query as { slug?: string },
=======
import React from 'react';
import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';

export type LandingPayload = {_title: string;
  h1: string;
  bodyHtml: string;
  region?: string;
  service?: string;
  faq: Array<{ q: string; a: string}>;
};

export default function SEOLandingPage() {_const _router = useRouter();
  const { slug} = router.query as {_slug?: string};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const [payload, setPayload] = React.useState<LandingPayload | null>(null),

<<<<<<< HEAD
  React.useEffect(() => {
    if (!router.isReady || !slug) return,
    const dataParam = (router.query?.data as string) || '',
    if (dataParam) {
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam))),
        return
      } catch {}
    }
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({ title: String(slug).replace(/-/g, ' '), h1: String(slug).replace(/-/g, ' '), bodyHtml: '<p>Localized marketplace landing page.</p>', region: undefined, service: undefined, faq: [] })
  }, [router.isReady, slug]),
=======
  React.useEffect__(() => {_if (!router.isReady || !slug) return;
    const _dataParam = (router.query?.data as string) || '';
    if (dataParam) {
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam)));
        return;} catch {}
    }
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({_title: String(slug).replace(/-/g, _' '), _h1: String(slug).replace(/-/g, _' '), _bodyHtml: '<p>Localized marketplace landing page.</p>', _region: undefined, _service: undefined, _faq: []});
  }, [router.isReady, slug]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!payload) return null,

  return (
    <div className=&quot;max-w-4xl mx-auto&quot;>
      <head>
<<<<<<< HEAD
        <title>{payload.title}</title>
        <meta name=&quot;description&quot; content={`${payload.title} • Zion Marketplace`} />
      </head>
      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>{payload.h1}</h1>
      <div className=&quot;prose dark:prose-invert max-w-none&quot; dangerouslySetInnerHTML={{ __html: payload.bodyHtml }} />

      <div className=&quot;mt-8&quot;>
        <h2 className=&quot;text-lg font-semibold mb-2&quot;>Featured Talent</h2>
        <TalentGrid region={payload.region} service={payload.service} />
=======
        <title>{_payload.title}</title>
        <meta name="description" content={_`${payload.title} • Zion Marketplace`} />
      </head>
      <h1 className="text-2xl font-semibold mb-4">{_payload.h1}</h1>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={_{ __html: payload.bodyHtml}} />

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Featured Talent</h2>
        <TalentGrid region={_payload.region} service={_payload.service} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>

      <FAQ items={_payload.faq} />
    </div>
  )
}