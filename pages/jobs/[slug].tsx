import { useRouter  } from 'next/router';
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import EnhancedLoading from '../../components/ui/EnhancedLoading',
import useResponsive from '../../hooks/useResponsive';
import { useToast  } from '../../components/ui/NotificationSystem';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function JobDetailsPage() {
<<<<<<< HEAD
  const router = null;
=======
  const router = useRouter();
  const { slug } = router.query as { slug?: string }
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
  const onApply = () => {
    notify(
      'Application submitted! We’ll notify you when it’s viewed.'
      'success'
    );
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className='relative'>
      {loading ? (
        <EnhancedLoading lines={5} />
      ) : (
        <div className='space-y-4'>
          <EnhancedCard>
            <div className='flex items-start justify-between gap-3'>
              <div>
                <h1 className='text-xl font-semibold'>
                  {slug?.replace(/-/g, ' ') |'Job Title'}
                </h1>
                <p className='text-sm text-gray-600 dark:text-gray-300'>
                  Remote • Contract • Posted today
                </p>
              </div>
              {!isMobile && (
                <EnhancedButton onClick={onApply} variant='primary'>
                  Apply Now
<<<<<<< HEAD
                </EnhancedButton>              )}
=======
                </EnhancedButton>
              )}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </div>
          </EnhancedCard>
          <EnhancedCard>
            <h2 className='font-semibold mb-2'>Description</h2>
            <p className='text-sm text-gray-700 dark:text-gray-300'>
              You will design, build, and scale AI features using LLMs and
              modern tooling.
            </p>
          </EnhancedCard>
          <EnhancedCard>
            <h2 className='font-semibold mb-2'>Requirements</h2>
<<<<<<< HEAD
            <ul className='list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300'>              <li>3+ years with Python or TypeScript</li>
=======
            <ul className='list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300'>
              <li>3+ years with Python or TypeScript</li>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              <li>Experience with ML/AI production systems</li>
              <li>Familiarity with cloud infra and CI/CD</li>
            </ul>
          </EnhancedCard>
        </div>
      )}
      {/* Sticky mobile apply CTA */}
      {isMobile && (
        <div className='fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3'>
          <div className='container mx-auto px-2'>
            <EnhancedButton onClick={onApply} variant='primary' fullWidth>
              Apply Now
<<<<<<< HEAD
            </EnhancedButton>          </div>
        </div>
      )}
    </div>
);
=======
            </EnhancedButton>
          </div>
        </div>
      )}
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
