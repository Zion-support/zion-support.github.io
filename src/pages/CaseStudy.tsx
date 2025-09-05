import Link from 'next/link';
import {_Breadcrumb, _BreadcrumbList, _BreadcrumbItem, _BreadcrumbLink, _BreadcrumbSeparator} from '@/components/ui/breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export default function CaseStudy() {_const _router = useRouter();
  const _slug = router.query.slug as string;
  const _study = CASE_STUDIES.find(_(s) => s.slug === slug);
  const _breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {_return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Case study not found.
      </div>
    );}

  return (
    <>
      <SEO title={_study.title} description={_study.excerpt} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <BreadcrumbJsonLd breadcrumbs={_breadcrumbs} />
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
                  <span>{_study.title}</span>
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
            src={_study.companyLogo}
            alt={_`${study.company} logo`}
            className="h-12 mb-4"
            loading="lazy"
          />
          <h1 className="text-3xl font-bold text-white mb-4">{_study.title}</h1>
          <p className="text-zion-slate-light mb-8">{_study.excerpt}</p>
          {_study.pdf && (
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
            </Button>
          )}
          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={_{ __html: study.content}}
          />
          <p className="mt-8 text-white font-semibold">
            — {_study.author}, {_study.role}
          </p>
        </div>
      </div>
    </>
  );
}
