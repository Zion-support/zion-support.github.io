import React from 'react';
import { useRouter } from 'next/router';
import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';

<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export type LandingPayload = {
  title: string;
  h1: string;
  bodyHtml: string;
  region?: string;
  service?: string;
<<<<<<< HEAD
  faq: Array<{ q: string; a: string }>;};
=======
  faq: Array<{ q: string; a: string }>;
export type LandingPayload = {
  title: string,
  h1: string,
  bodyHtml: string,
  region?: string;
  service?: string;
  faq: Array<{ q: string, a: string }>
  faq: Array<{ q: string, a: string }>
ursor/integrate-build-improve-and-re-verify-b76c
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function SEOLandingPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };

  const [payload, setPayload] = React.useState<LandingPayload | null>(null);

  React.useEffect(() => {
    if (!router.isReady || !slug) return;
    const dataParam = (router.query?.data as string) || '';
    if (dataParam) {
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam)));
        return;
      } catch {}
    }
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({
      title: String(slug).replace(/-/g, ' '),
      h1: String(slug).replace(/-/g, ' '),
      bodyHtml: '<p>Localized marketplace landing page.</p>',
      region: undefined,
      service: undefined,
      faq: [],
<<<<<<< HEAD
    });  }, [router.isReady, slug]);
=======
    });
        return
      } catch {}
    }
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({ title: String(slug).replace(/-/g, ' '), h1: String(slug).replace(/-/g, ' '), bodyHtml: '<p>Localized marketplace landing page.</p>', region: undefined, service: undefined, faq: [] })
        return
      } catch {}
    }
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({ title: String(slug).replace(/-/g, ' '), h1: String(slug).replace(/-/g, ' '), bodyHtml: '<p>Localized marketplace landing page.</p>', region: undefined, service: undefined, faq: [] })
ursor/integrate-build-improve-and-re-verify-b76c
  }, [router.isReady, slug]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  if (!payload) return null;

  return (
    <div className='max-w-4xl mx-auto'>
<<<<<<< HEAD
=======
    <div className="max-w-4xl mx-auto">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <head>
        <title>{payload.title}</title>
        <meta
          name='description'
          content={`${payload.title} • Zion Marketplace`}
        />
      </head>
      <h1 className='text-2xl font-semibold mb-4'>{payload.h1}</h1>
      <div
        className='prose dark:prose-invert max-w-none'
        dangerouslySetInnerHTML={{ __html: payload.bodyHtml }}
      />

      <div className='mt-8'>
<<<<<<< HEAD
        <h2 className='text-lg font-semibold mb-2'>Featured Talent</h2>        <TalentGrid region={payload.region} service={payload.service} />
=======
        <h2 className='text-lg font-semibold mb-2'>Featured Talent</h2>
    <div className="max-w-4xl mx-auto">
      <head>
        <title>{payload.title}</title>
        <meta name="description" content={`${payload.title} • Zion Marketplace`} />
      </head>
      <h1 className="text-2xl font-semibold mb-4">{payload.h1}</h1>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: payload.bodyHtml }} />

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Featured Talent</h2>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Featured Talent</h2>
ursor/integrate-build-improve-and-re-verify-b76c
        <TalentGrid region={payload.region} service={payload.service} />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </div>

      <FAQ items={payload.faq} />
    </div>
<<<<<<< HEAD
  );
=======
  );
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
