import Link from 'next/link';
import { useRouter } from 'next/router';
import { CASE_STUDIES } from '@/data/case-studies';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';

export default function CaseStudy() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue flex items-center justify-center text-white&quot;>
        Case study not found.
      </div>
    );
  }

  return (
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className=&quot;min-h-screen bg-zion-blue pt-12 pb-20 px-4&quot;>
        <div className=&quot;container mx-auto max-w-3xl&quot;>
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className=&quot;mb-4 text-sm text-muted-foreground&quot;>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href=&quot;/&quot;>Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href=&quot;/case-studies&quot;>Case Studies</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild aria-current=&quot;page&quot;>
                  <span>{study.title}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button
            variant=&quot;outline&quot;
            className=&quot;mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
            asChild
          >
            <Link href=&quot;/case-studies&quot;>
              <ArrowLeft className=&quot;mr-2 h-4 w-4&quot; /> Back to Case Studies
            </Link>
          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}
            className=&quot;h-12 mb-4&quot;
            loading=&quot;lazy&quot;
          />
          <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>{study.title}</h1>
          <p className=&quot;text-zion-slate-light mb-8&quot;>{study.excerpt}</p>
          {study.pdf && (
            <Button variant=&quot;secondary&quot; className=&quot;mb-6&quot; asChild>
              <a href={study.pdf} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
                Download PDF
              </Link>
            </Button>
          )}
          <div
            className=&quot;prose prose-invert&quot;
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className=&quot;mt-8 text-white font-semibold&quot;>
            — {study.author}, {study.role}
          </p>
        </div>
      </div>
    </>
  );
}
