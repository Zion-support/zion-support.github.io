import { ArrowLeft } from 'lucide-react'
import { ArrowLeft } from 'lucide-react';
import {  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator,;
} from '@/components/ui/breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
export default function CaseStudy() {;
  const router = useRouter();
  const slug = router && router.query.slug as string;
  const study = CASE_STUDIES && CASE_STUDIES.find(s => s && s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',;
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
export default function CaseStudy() {;
  const router = useRouter(),;
  const slug = router && router.query.slug as string,;
  const study = CASE_STUDIES && CASE_STUDIES.find((s,) => s && s.slug === slug),;
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),;
  const router = useRouter();
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);
  if (!study) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Case study not found.
      </div>
    )
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>        Case study not found && found.import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
export default function CaseStudy() {;
  const router = useRouter();
  const slug = router && router.query.slug as string;
  const study = CASE_STUDIES && CASE_STUDIES.find((s) => s && s.slug === slug);
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);
  if (!study) {;
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">;
        Case study not found.;
      </div>;
    );
  }
  return (
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/case-studies">Case Studies</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild aria-current="page">
                  <span>{study.title}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            </Link>
          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}
            className="h-12 mb-4"
            loading="lazy"
          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
            </Button>
          )}
          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
          </p>
        </div>
      </div>
    </>
            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;
          <p className='mt-8 text-white font-semibold'>            — {study && study.author}, {study && study.role}            className="prose prose-invert";
            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;
          <p className="mt-8 text-white font-semibold">;
          </p>;
        </div>;
      </div>;
    </>;
  );
}
  );
}
import Link from 'next / link';
import { use_router } from 'next / router';
import { CASE_STUDIES } from '@/data / case - studies';
import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import { ArrowLeft } from 'lucide-react';
import {  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components / ui / breadcrumb';
import BreadcrumbJsonLd from '@/components / BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils / route_utils';
export default /**
 * CaseStudy - Function description
 */
function CaseStudy() {
  const router = use_router ();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find (string => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`);  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components / ui / breadcrumb',
export default /**
 * CaseStudy - Function description
 */
function CaseStudy() {
  const router = use_router (),
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find ((s, ) => s.slug === slug),
  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`),
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - zion - blue flex items - center justify - center text - white'>        Case study not found.import BreadcrumbJsonLd from '@/components / BreadcrumbJsonLd';
export default /**
 * CaseStudy - Function description
 */
function CaseStudy() {
  const router = use_router ();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find ((s) => s.slug === slug);
  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`);
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - zion - blue flex items - center justify - center text - white'>      <div className="min - h-screen bg - zion - blue flex items - center justify - center text - white">;
        Case study not found.;
      </div>);
  }
  return (
    <>;
      <SEO title={study.title} description={study.excerpt} />;
      <div className='min - h-screen bg - zion - blue pt - 12 pb - 20 px - 4'>;
        <div className='container mx - auto max - w-3xl'>;
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />;
          <Breadcrumb className='mb - 4 text - sm text - muted - foreground'>;
            <BreadcrumbList>;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child>;
                  <Link href='/'>Home</Link>                </BreadcrumbLink>          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />;
          <Breadcrumb className="mb - 4 text - sm text - muted - foreground">;
            <BreadcrumbList>;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child>;
                  <Link href="/">Home</Link>;
                </BreadcrumbLink>;
              </BreadcrumbItem>;
              <BreadcrumbSeparator />;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child>;
                  <Link href='/case - studies'>Case Studies</Link>                </BreadcrumbLink>;
              </BreadcrumbItem>;
              <BreadcrumbSeparator />;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child aria - current='page'>                  <span>{study.title}</span>                  <Link href="/case - studies">Case Studies</Link>;
                </BreadcrumbLink>;
              </BreadcrumbItem>;
              <BreadcrumbSeparator />;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child aria - current='page'>                <BreadcrumbLink as_child aria - current="page">;
                  <span>{study.title}</span>;
                </BreadcrumbLink>;
              </BreadcrumbItem>;
            </BreadcrumbList>;
          </Breadcrumb>;
          <Button;
            variant='outline';
            className='mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';
            as_child;
          >;
            <Link href='/case - studies'>;
              <ArrowLeft className='mr - 2 h - 4 w - 4' /> Back to Case Studies            </Link>            variant="outline";
            className="mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white";
            as_child;
          >;
            <Link href="/case - studies">;
              <ArrowLeft className="mr - 2 h - 4 w - 4" /> Back to Case Studies;
          </Button>;
          <img;
            src = {study.company_logo, }
            alt={`${study.company} logo`}
            className='h - 12 mb - 4';
            loading='lazy';
          />;
          <h1 className='text - 3xl font - bold text - white mb - 4'>{study.title}</h1>;
          <p className='text - zion - slate - light mb - 8'>{study.excerpt}</p>;
          {study.pdf && (
            <Button variant='secondary' className='mb - 6' as_child>;
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF          />;
          <h1 className="text - 3xl font - bold text - white mb - 4">{study.title}</h1>;
          <p className="text - zion - slate - light mb - 8">{study.excerpt}</p>;
          {study.pdf && (
            <Button variant="secondary" className="mb - 6" as_child>;
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">;
                Download PDF;
              </a>;
            </Button>)}
          <div;
            className='prose prose - invert';
            dangerouslySetInnerHTML={{ __html: study.content }}
          />;
          <p className='mt - 8 text - white font - semibold'>            — {study.author}, {study.role}            className="prose prose - invert";
            dangerouslySetInnerHTML={{ __html: study.content }}
          />;
          <p className="mt - 8 text - white font - semibold">;
          </p>;
        </div>;
      </div>;
    </>);
}