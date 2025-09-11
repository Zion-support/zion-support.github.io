<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import { useRouter  } from 'next/router';
import { CASE_STUDIES  } from '@/data/case-studies';
import { SEO  } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CASE_STUDIES } from '@/data/case-studies'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import Link from 'next/link',
import { useRouter } from 'next/router',
import { CASE_STUDIES } from '@/data/case-studies',
import { SEO } from '@/components/SEO',
import { Button } from '@/components/ui/button',
import { ArrowLeft } from 'lucide-react'

import {  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { getBreadcrumbsForPath } from '@/utils/routeUtils'
export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator} from '@/components/ui/breadcrumb'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { ArrowLeft } from 'lucide-react'



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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
=======
import { ArrowLeft } from 'lucide-react'



export default function CaseStudy() {;
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',


export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const study = CASE_STUDIES.find((s,) => s.slug === slug)
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)
import { ArrowLeft } from 'lucide-react';
import {  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator,;
} from '@/components/ui/breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';


<<<<<<< HEAD
<<<<<<< HEAD

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
import Link from 'next/link',
import { useRouter } from 'next/router',
import { CASE_STUDIES } from '@/data/case-studies',
import { SEO } from '@/components/SEO',
import { Button } from '@/components/ui/button',
import { ArrowLeft } from 'lucide-react'
import {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
export default function CaseStudy() {;
  const router = useRouter(),;
  const slug = router && router.query.slug as string,;
  const study = CASE_STUDIES && CASE_STUDIES.find((s,) => s && s.slug === slug),;
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),;


  const router = useRouter();
<<<<<<< HEAD
<<<<<<< HEAD
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd',
import { getBreadcrumbsForPath } from '@/utils/routeUtils',
export default function CaseStudy() {
  const router = useRouter(),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find((s) => s.slug === slug),
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),

  if (!study) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (!study) {
    return (


        Case study not found.
<<<<<<< HEAD
=======
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD
                  <Link href='/'>Home</Link>                </BreadcrumbLink>          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
=======


          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>



<<<<<<< HEAD
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Link href="/">Home</Link>
=======

                  <Link href="/">Home</Link>
                </BreadcrumbLink>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Link href='/case-studies'>Case Studies</Link>                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild aria-current='page'>                  <span>{study.title}</span>                  <Link href="/case-studies">Case Studies</Link>
                  <Link href="/case-studies">Case Studies</Link>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Link href="/case-studies">Case Studies</Link>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
<<<<<<< HEAD

<<<<<<< HEAD
                <BreadcrumbLink asChild aria-current="page">


                <BreadcrumbLink asChild aria-current='page'>                <BreadcrumbLink asChild aria-current="page">
                <BreadcrumbLink asChild aria-current="page">
=======

                <BreadcrumbLink asChild aria-current="page">


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <span>{study.title}</span>
=======
                <BreadcrumbLink asChild aria-current='page'>                <BreadcrumbLink asChild aria-current="page">
                <BreadcrumbLink asChild aria-current="page">


                  <span>{study.title}</span>
                </BreadcrumbLink>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======


            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            </Link>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='h-12 mb-4'
            loading='lazy'
            className="h-12 mb-4"
            loading="lazy"
<<<<<<< HEAD
=======


            className="h-12 mb-4"
            loading="lazy"


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
<<<<<<< HEAD
<<<<<<< HEAD
            <Link href='/case-studies'>
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies            </Link>            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}
            className='h-12 mb-4'
            loading='lazy'
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button variant='secondary' className='mb-6' asChild>
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </Button>
=======


            </Button>
          )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
<<<<<<< HEAD
<<<<<<< HEAD
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


}
}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;
          <p className='mt-8 text-white font-semibold'>            — {study && study.author}, {study && study.role}            className="prose prose-invert";
            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;
          <p className="mt-8 text-white font-semibold">;
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
}
}
}
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
=======
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </p>;
        </div>;
      </div>;
    </>;
  );
}
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
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
