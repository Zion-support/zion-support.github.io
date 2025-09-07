<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
import { ArrowLeft } from 'lucide-react''
=======
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



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
export default function CaseStudy() {;
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find(s => s.slug ===,  slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb,`
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb','
import { ArrowLeft } from 'lucide-react'

import {  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { getBreadcrumbsForPath } from '@/utils/routeUtils'
export default function CaseStudy() {;
  const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find((s,) => s.slug === slug)
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)`
import { ArrowLeft } from 'lucide-react';
import {  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator,;
} from '@/components/ui/breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
=======


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
import Link from 'next/link',
import { useRouter } from 'next/router',
import { CASE_STUDIES } from '@/data/case-studies',
import { SEO } from '@/components/SEO',
import { Button } from '@/components/ui/button',
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
import {
=======
import { ArrowLeft } from 'lucide-react'
import {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
  BreadcrumbSeparator} from '@/components/ui/breadcrumb','
=======
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
export default function CaseStudy() {;
  const router = useRouter(),;
  const slug = router && router.query.slug as string,;
  const study = CASE_STUDIES && CASE_STUDIES.find((s,) => s && s.slug === slug),;
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),;`
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find((s) => s.slug === slug),
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),`
  if (!study) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">"
=======
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),;


  const router = useRouter();
<<<<<<< HEAD
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd',
import { getBreadcrumbsForPath } from '@/utils/routeUtils',
export default function CaseStudy() {
  const router = useRouter(),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find((s) => s.slug === slug),
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),

  if (!study) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
<<<<<<< HEAD
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
  if (!study) {
    return (
        Case study not found.
    )
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>        Case study not found && found.import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
export default function CaseStudy() {;
  const slug = router && router.query.slug as string;
  const study = CASE_STUDIES && CASE_STUDIES.find((s) => s && s.slug === slug);
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);`
  if (!study) {;
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">;
        Case study not found.;
      </div>;
    );
  }
  return (
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">"
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" />Home</Link>"
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd',
import { getBreadcrumbsForPath } from '@/utils/routeUtils',
export default function CaseStudy() {
  const router = useRouter(),
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),

  if (!study) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)

import Link from 'next/link';

import { useRouter  } from 'next/router';
import { CASE_STUDIES  } from '@/data/case-studies';
import { SEO  } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Breadcrumb;
  BreadcrumbList;
  BreadcrumbItem;
  BreadcrumbLink;
  BreadcrumbSeparator } from '@/components/ui/breadcrumb';
export default function CaseStudy() {

  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {
    return (
<div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
origin/cursor/automate-test-improve-and-merge-code-2533
  if (!study) {
    return (


        Case study not found.
      </div>
    )
  }

  return (
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
  return (
    <>
      <SEO title={study.title} description={study.excerpt} />
=======
<<<<<<< HEAD
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD
                  <Link href='/'>Home</Link>                </BreadcrumbLink>          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>



=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Link href="/">Home</Link>
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
<div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className='mb-4 text-sm text-muted-foreground'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='/'>Home</Link>
                </BreadcrumbLink>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
                  <Link href="/case-studies" />Case Studies</Link>"
=======
<<<<<<< HEAD
                  <Link href='/case-studies'>Case Studies</Link>                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild aria-current='page'>                  <span>{study.title}</span>                  <Link href="/case-studies">Case Studies</Link>
                  <Link href="/case-studies">Case Studies</Link>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
                  <Link href="/case-studies">Case Studies</Link>


<Link href='/case-studies'>Case Studies</Link>
origin/cursor/automate-test-improve-and-merge-code-2533
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
                <BreadcrumbLink asChild aria-current="page">"
                <BreadcrumbLink asChild aria-current="page">
                  <span>{study.title}</span>
                </BreadcrumbLink>


<BreadcrumbLink asChild aria-current='page'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  <span>{study.title}</span>
=======

<<<<<<< HEAD
                <BreadcrumbLink asChild aria-current="page">


                <BreadcrumbLink asChild aria-current='page'>                <BreadcrumbLink asChild aria-current="page">
                <BreadcrumbLink asChild aria-current="page">
=======

                <BreadcrumbLink asChild aria-current="page">


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <span>{study.title}</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button
            variant="outline""
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"",
            asChild
          >
            <Link href="/case-studies" />"
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies"
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
=======
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
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            </Link>
          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}`
            className="h-12 mb-4""
            loading="lazy""
          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>"
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>"
          {study.pdf && (
            <Button variant="secondary" className="mb-6" asChild>"
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">"
            alt={`${study.company} logo`}
            className="h-12 mb-4"
            loading="lazy"


<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
variant='outline'
            className='mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
            asChild
          >
            <Link href='/case-studies'>
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies
            </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}
<<<<<<< HEAD
            className='h-12 mb-4'
            loading='lazy'
            className="h-12 mb-4"
            loading="lazy"
=======


            className="h-12 mb-4"
            loading="lazy"


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
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
            <Button variant='secondary' className='mb-6' asChild>
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}


          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </Link>
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
            </Button>
          )}
          <div
            className="prose prose-invert""
className='h-12 mb-4'
            loading='lazy'
          />
          <h1 className='text-3xl font-bold text-white mb-4'>{study.title}</h1>
          <p className='text-zion-slate-light mb-8'>{study.excerpt}</p>
          {study.pdf && (
            <Button variant='secondary' className='mb-6' asChild>
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Download PDF
              </Link>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </Button>
          <div
className='prose prose-invert'
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
=======
<<<<<<< HEAD
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
}
}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;
          <p className='mt-8 text-white font-semibold'>            — {study && study.author}, {study && study.role}            className="prose prose-invert";
            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;
          <p className="mt-8 text-white font-semibold">;
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
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
}
}
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
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
  const study = CASE_STUDIES.find (string => s.slug ===,  slug);  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`);  Breadcrumb,`
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components / ui / breadcrumb','
export default /**
 * CaseStudy - Function description
 */
function CaseStudy() {
  const router = use_router (),
  const study = CASE_STUDIES.find ((s, ) => s.slug === slug),
  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`),`
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
  const study = CASE_STUDIES.find ((s) => s.slug === slug);
  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`);`
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
                  <Link href='/' />Home</Link>                </BreadcrumbLink>          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />;
          <Breadcrumb className="mb - 4 text - sm text - muted - foreground">;
            <BreadcrumbList>;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child>;
                  <Link href="/" />Home</Link>;
                </BreadcrumbLink>;
              </BreadcrumbItem>;
              <BreadcrumbSeparator />;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child>;
                  <Link href='/case - studies' />Case Studies</Link>                </BreadcrumbLink>;
              </BreadcrumbItem>;
              <BreadcrumbSeparator />;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child aria - current='page'>                  <span>{study.title}</span>                  <Link href="/case - studies" />Case Studies</Link>;
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
            className='mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';',
            as_child;
          >;
            <Link href='/case - studies' />;
              <ArrowLeft className='mr - 2 h - 4 w - 4' /> Back to Case Studies            </Link>            variant="outline";
            className="mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white";",
            as_child;
          >;
            <Link href="/case - studies" />;
              <ArrowLeft className="mr - 2 h - 4 w - 4" /> Back to Case Studies;
          </Button>;
          <img;
            src = {study.company_logo, }
            alt={`${study.company} logo`}`
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
<<<<<<< HEAD:src-disabled/pages.disabled/CaseStudy.tsx
;
}}}))
;
          <p className='mt-8 text-white font-semibold'>
            — {study.author}, {study.role}
          </p>
        </div>
      </div>
    </>
origin/cursor/automate-test-improve-and-merge-code-2533
  );
}
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/CaseStudy.tsx
