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
export default function SEOLandingPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string }
  const [payload, setPayload] = React.useState<LandingPayload | null>(null);
  React.useEffect(() => {
    if (!router.isReady |!slug) return;
    const dataParam = (router.query?.data as string) |'';
    if (dataParam) {
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam)));
        return;
      } catch {}
    }
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({
      title: String(slug).replace(/-/g, ' ')
      h1: String(slug).replace(/-/g, ' ')
      bodyHtml: '<p>Localized marketplace landing page.</p>'
      region: undefined
      service: undefined
      faq: []
    });  }, [router.isReady, slug]);
  if (!payload) return null;

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
  return (
    <div className="max-w-4xl mx-auto">
      <head>
        <title>{payload.title}</title>
        <meta name="description" content={`${payload.title} • Zion Marketplace`} />
      </head>
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
