import Link from 'next/link';
import { useRouter } from 'next/router';
import { CASE_STUDIES } from '@/data/case-studies';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
<<<<<<< HEAD
import {  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,;
} from '@/components/ui/breadcrumb';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';

export default function CaseStudy() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);
=======
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
export default function CaseStudy() {
  const router = useRouter(),
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find((s,) => s.slug === slug),
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

  if (!study) {
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>        Case study not found.
=======
  const study = CASE_STUDIES.find((s) => s.slug === slug);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {
    return (
<<<<<<< HEAD
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
=======
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        Case study not found.
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </div>
    );
  }

  return (
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className='mb-4 text-sm text-muted-foreground'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='/'>Home</Link>                </BreadcrumbLink>
=======
                  <Link href="/">Home</Link>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </BreadcrumbLink>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='/case-studies'>Case Studies</Link>                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild aria-current='page'>                  <span>{study.title}</span>
=======
                  <Link href="/case-studies">Case Studies</Link>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
<<<<<<< HEAD
                <BreadcrumbLink asChild aria-current='page'>
=======
                <BreadcrumbLink asChild aria-current="page">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <span>{study.title}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies            </Link>
=======
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </Link>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </Button>
          <img
            src = {study.companyLogo,}
            alt={`${study.company} logo`}
            className='h-12 mb-4'
            loading='lazy'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
          <h1 className='text-3xl font-bold text-white mb-4'>{study.title}</h1>
          <p className='text-zion-slate-light mb-8'>{study.excerpt}</p>
          {study.pdf && (
            <Button variant='secondary' className='mb-6' asChild>
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF
=======
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Download PDF
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </a>
            </Button>
          )}
          <div
            className='prose prose-invert'
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className='mt-8 text-white font-semibold'>            — {study.author}, {study.role}
=======
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className="mt-8 text-white font-semibold">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            — {study.author}, {study.role}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </p>
        </div>
      </div>
    </>
  );
}
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
