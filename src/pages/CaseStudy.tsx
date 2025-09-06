>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { ArrowLeft } from 'lucide-react'

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import {  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { getBreadcrumbsForPath } from '@/utils/routeUtils'
<<<<<<< HEAD
export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator} from '@/components/ui/breadcrumb'
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default function CaseStudy() {;
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find((s,) => s.slug === slug)
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)

  if (!study) {
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>        Case study not found.import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find((s) => s.slug === slug)
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)
  if (!study) {
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
=======
=======
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  if (!study) {
    return (


=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        Case study not found.
      </div>
    )
  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
    <>
      <SEO title={study.title} description={study.excerpt} />
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD
                  <Link href='/case-studies'>Case Studies</Link>                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild aria-current='page'>                  <span>{study.title}</span>                  <Link href="/case-studies">Case Studies</Link>
                  <Link href="/case-studies">Case Studies</Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
<<<<<<< HEAD
                <BreadcrumbLink asChild aria-current='page'>                <BreadcrumbLink asChild aria-current="page">
                <BreadcrumbLink asChild aria-current="page">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
            <Link href='/case-studies'>
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies            </Link>            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}
<<<<<<< HEAD
            className='h-12 mb-4'
            loading='lazy'
            className="h-12 mb-4"
            loading="lazy"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
<<<<<<< HEAD
            <Button variant='secondary' className='mb-6' asChild>
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            </Button>
          )}
          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
<<<<<<< HEAD
<<<<<<< HEAD
          <p className='mt-8 text-white font-semibold'>            — {study.author}, {study.role}            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className="mt-8 text-white font-semibold">
          </p>
        </div>
      </div>
    </>;
  );
};
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
}


            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;
          <p className='mt-8 text-white font-semibold'>            — {study && study.author}, {study && study.role}            className="prose prose-invert";
            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;
          <p className="mt-8 text-white font-semibold">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <p className='mt-8 text-white font-semibold'>            — {study.author}, {study.role}            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className="mt-8 text-white font-semibold">
          </p>
        </div>
      </div>
    </>;
  );
};
}
<<<<<<< HEAD
=======
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          </p>;
        </div>;
      </div>;
    </>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD

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
;
=======
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
