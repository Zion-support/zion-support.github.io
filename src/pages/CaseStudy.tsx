
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CASE_STUDIES } from '@/data/case-studies'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
=======
import Link from 'next/link',
import { useRouter } from 'next/router',
import { CASE_STUDIES } from '@/data/case-studies',
import { SEO } from '@/components/SEO',
import { Button } from '@/components/ui/button',

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>

                  <Link href="/case-studies">Case Studies</Link>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>

                <BreadcrumbLink asChild aria-current="page">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            </Link>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}

            className="h-12 mb-4"
            loading="lazy"

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (

            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </Link>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </Button>
          )}
          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />

}
}

=======
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
          </p>;
        </div>;
      </div>;
    </>;
  );
}
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
