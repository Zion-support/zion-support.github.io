import Link from 'next/link';
import { useRouter } from 'next/router';
import { CASE_STUDIES } from '@/data/case-studies';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { ArrowLeft } from 'lucide-react';
import {  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,;
} from '@/components/ui/breadcrumb';
<<<<<<< HEAD
=======
=======
import { ArrowLeft } from 'lucide-react'
import {
  Breadcrumb;
  BreadcrumbList;
  BreadcrumbItem;
  BreadcrumbLink;
  BreadcrumbSeparator} from '@/components/ui/breadcrumb';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';

export default function CaseStudy() {
  const router = useRouter();
  const slug = router.query.slug as string;
<<<<<<< HEAD
  const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>        Case study not found.
=======
<<<<<<< HEAD
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
=======
  const study = CASE_STUDIES.find((s) => s.slug === slug);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
=======
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
=======
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className='mb-4 text-sm text-muted-foreground'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD
                  <Link href='/'>Home</Link>                </BreadcrumbLink>
=======
<<<<<<< HEAD
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
=======
                  <Link href="/">Home</Link>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </BreadcrumbLink>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD
                  <Link href='/case-studies'>Case Studies</Link>                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild aria-current='page'>                  <span>{study.title}</span>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <Link href='/case-studies'>Case Studies</Link>
=======
                  <Link href="/case-studies">Case Studies</Link>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <Link href="/case-studies">Case Studies</Link>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
<<<<<<< HEAD
<<<<<<< HEAD
                <BreadcrumbLink asChild aria-current='page'>
=======
                <BreadcrumbLink asChild aria-current="page">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            variant='outline'
            className='mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
            asChild
          >
            <Link href='/case-studies'>
<<<<<<< HEAD
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies            </Link>
=======
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies
=======
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
            src={study.companyLogo}
            alt={`${study.company} logo`}
<<<<<<< HEAD
            className='h-12 mb-4'
            loading='lazy'
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='h-12 mb-4'
            loading='lazy'
=======
            className="h-12 mb-4"
            loading="lazy"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
          <h1 className='text-3xl font-bold text-white mb-4'>{study.title}</h1>
          <p className='text-zion-slate-light mb-8'>{study.excerpt}</p>
          {study.pdf && (
<<<<<<< HEAD
            <Button variant='secondary' className='mb-6' asChild>
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
            className='prose prose-invert'
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className='mt-8 text-white font-semibold'>            — {study.author}, {study.role}
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
