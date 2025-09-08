import React from 'react';
import { useRouter  } from 'next/router';
import TalentGrid from '../../components/seo/TalentGrid';
import FAQ from '../../components/seo/FAQ';
export type LandingPayload = any;
export type LandingPayload = {
  title: string;
  h1: string;
  bodyHtml: string;
  region?: string;
  service?: string;
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

  const { slug } = router.query as { slug?: string };
  React.useEffect(() => {;
    if (!router.isReady || !slug) return,;
    const dataParam = (router.query?.data as string) || '';
    if (dataParam) {;
      try {
        setPayload(JSON.parse(decodeURIComponent(dataParam)));
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
    // Fallback: render a basic placeholder until a generated page is deployed
    setPayload({ title: String(slug).replace(/-/g, ' '), h1: String(slug).replace(/-/g, ' '), bodyHtml: '<p>Localized marketplace landing page.</p>', region: undefined, service: undefined, faq: [] })
  }, [router.isReady, slug]),
  if (!payload) return null,
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
      </div>
      <FAQ items={payload.faq} />
    </div>
);
