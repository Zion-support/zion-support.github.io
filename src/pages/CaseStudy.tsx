<<<<<<< HEAD

import Link from "next/link";
import { useRouter } from "next/router";
import { CASE_STUDIES } from "@/data/case-studies";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CaseStudy() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the case study by slug
  const study = CASE_STUDIES.find(s => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-6">The case study you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/case-studies">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${study.title} - Case Study`}
        description={study.description}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="outline">
                <Link href="/case-studies">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Case Studies
                </Link>
              </Button>
            </div>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {study.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  {study.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Client</h3>
                    <p className="text-gray-600">{study.client}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry</h3>
                    <p className="text-gray-600">{study.industry}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Duration</h3>
                    <p className="text-gray-600">{study.duration}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies</h3>
                    <p className="text-gray-600">{study.technologies.join(', ')}</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2>Challenge</h2>
                  <p>{study.challenge}</p>
                  
                  <h2>Solution</h2>
                  <p>{study.solution}</p>
                  
                  <h2>Results</h2>
                  <p>{study.results}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {study.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

=======
import React from 'react';
import { SEO } from "@/components/SEO";

export default function CaseStudy() {
  return (
    <>
      <SEO 
        title="CaseStudy - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">CaseStudy</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb
