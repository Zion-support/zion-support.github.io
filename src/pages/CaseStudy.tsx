import Link from 'next/link';
import { useRouter } from 'next/router';
import { CASE_STUDIES } from '@/data/case-studies';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
import { ArrowLeft } from 'lucide-react';
import {
=======
import { ArrowLeft } from 'lucide-react'
import {

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
<<<<<<< HEAD
  BreadcrumbSeparator,;
} from '@/components/ui/breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';

export default function CaseStudy() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find(s => s.slug === slug);
=======
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
export default function CaseStudy() {

  const router = useRouter();
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find((s) => s.slug === slug);

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {
    return (
<<<<<<< HEAD
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
=======
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        Case study not found.
      </div>
    );
  }

  return (
    <>
      <SEO title={study.title} description={study.excerpt} />
<<<<<<< HEAD
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className='mb-4 text-sm text-muted-foreground'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='/'>Home</Link>
=======
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD
                  <Link href='/case-studies'>Case Studies</Link>
=======
                  <Link href="/case-studies">Case Studies</Link>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
<<<<<<< HEAD
                <BreadcrumbLink asChild aria-current='page'>
=======
                <BreadcrumbLink asChild aria-current="page">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                  <span>{study.title}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button
<<<<<<< HEAD
            variant='outline'
            className='mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
            asChild
          >
            <Link href='/case-studies'>
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies
=======
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            </Link>
          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}
<<<<<<< HEAD
            className='h-12 mb-4'
            loading='lazy'
          />
          <h1 className='text-3xl font-bold text-white mb-4'>{study.title}</h1>
          <p className='text-zion-slate-light mb-8'>{study.excerpt}</p>
          {study.pdf && (
            <Button variant='secondary' className='mb-6' asChild>
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>
=======
            className="h-12 mb-4"
            loading="lazy"
          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                Download PDF
              </a>
            </Button>
          )}
          <div
<<<<<<< HEAD
            className='prose prose-invert'
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className='mt-8 text-white font-semibold'>
=======
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className="mt-8 text-white font-semibold">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            — {study.author}, {study.role}
          </p>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
