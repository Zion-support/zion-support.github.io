import Link from 'next/link';
import { useRouter  } from 'next/router';
import { CASE_STUDIES  } from '@/data/case-studies';
import { SEO  } from '@/components/SEO';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
import { ArrowLeft } from 'lucide-react'
<<<<<<< HEAD
import { Breadcrumb;
  BreadcrumbList;
  BreadcrumbItem;
  BreadcrumbLink;
  BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
export default function CaseStudy() {
  const router = null;
=======
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
export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find((s,) => s.slug === slug)
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
import { ArrowLeft } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,;
} from '@/components/ui/breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
}

export default function CaseStudy() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find(s => s.slug === slug);
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        Case study not found.
      </div>
    )
  }
  return (
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className='mb-4 text-sm text-muted-foreground'>
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
=======
                  <Link href='/'>Home</Link>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
=======
                  <Link href='/case-studies'>Case Studies</Link>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
<<<<<<< HEAD
                <BreadcrumbLink asChild aria-current='page'>                <BreadcrumbLink asChild aria-current="page">
=======
                <BreadcrumbLink asChild aria-current='page'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  <span>{study.title}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button
            variant='outline'
            className='mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
            asChild
          >
            <Link href='/case-studies'>
<<<<<<< HEAD
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies            </Link>            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
=======
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies
            </Link>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          </Button>
          <img
            src = {study.companyLogo,}
            alt={`${study.company} logo`}
            className='h-12 mb-4'
            loading='lazy'
          />
          <h1 className='text-3xl font-bold text-white mb-4'>{study.title}</h1>
          <p className='text-zion-slate-light mb-8'>{study.excerpt}</p>
          {study.pdf && (
            <Button variant='secondary' className='mb-6' asChild>
<<<<<<< HEAD
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
=======
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                Download PDF
              </a>
            </Button>
          )}
          <div
            className='prose prose-invert'
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
<<<<<<< HEAD
          <p className='mt-8 text-white font-semibold'>            — {study.author}, {study.role}            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className="mt-8 text-white font-semibold">
=======
          <p className='mt-8 text-white font-semibold'>
            — {study.author}, {study.role}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          </p>
        </div>
      </div>
    </>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
