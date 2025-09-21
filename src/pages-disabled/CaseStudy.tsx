import Link from 'next/link',
import { useRouter } from 'next/router',
import { CASE_STUDIES } from '@/data/case-studies',
import { SEO } from '@/components/SEO',
export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO title="Case Studies" description="Our success stories" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Case Studies
        </h1>
        <p className="text-zion-cyan text-center">
          Coming soon...
        </p>
      </div>
    </div>
  );
}