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
  const study = CASE_STUDIES.find((s,) => s.slug === slug)
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)

  if (!study) {
    return (


        Case study not found.
      </div>
    )
  }
  return (
    <>
      <SEO title={study.title} description={study.excerpt} />
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>




                  <Link href="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>


                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>


                  <span>{study.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >


          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}


          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </Link>


            </Button>
          <div
            className='prose prose-invert'
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
}
}


            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;
          <p className='mt-8 text-white font-semibold'>            — {study && study.author}, {study && study.role}            className="prose prose-invert";
            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;
          <p className="mt-8 text-white font-semibold">;
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
          </p>;
        </div>;
      </div>;
    </>;
  );
}
