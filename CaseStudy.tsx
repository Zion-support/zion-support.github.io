import Link from 'next/link';
import { useRouter } from 'next/router';
import { CASE_STUDIES } from '../data/case-studies';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudy() {
  const router = useRouter();
  const { slug } = router.query;
  
  const study = CASE_STUDIES.find(s => s.slug === slug);

  if (!study) {
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Case study not found</h1>
          <Link href="/">
            <Button className='bg-white text-zion-blue hover:bg-gray-100'>
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${study.title} - Case Study`}
        description={study.description}
        canonicalUrl={`/case-studies/${study.slug}`}
      />
      <div className='min-h-screen bg-zion-blue'>
        <div className='container mx-auto px-4 py-12'>
          <div className='mb-8'>
            <Link href="/">
              <Button variant="outline" className='mb-6'>
                <ArrowLeft className='mr-2 h-4 w-4' />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className='bg-white rounded-lg p-8'>
            <h1 className='text-4xl font-bold text-zion-blue mb-4'>{study.title}</h1>
            <p className='text-lg text-gray-600 mb-8'>{study.description}</p>
            
            <div className='prose max-w-none'>
              <p>Case study content will be displayed here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}