:pages_backup/jobs/[slug].tsx
<<<<<<< HEAD

import {useRouter} from 'next/router';'
import EnhancedCard from '../../components/ui/EnhancedCard';'
import EnhancedButton from '../../components/ui/EnhancedButton';'
import EnhancedLoading from '../../components/ui/EnhancedLoading';'
import useResponsive from '../../hooks/useResponsive';'
import {useToast} from '../../components/ui/NotificationSystem';'
import {useEffect, useState} from 'react';
export default function JobDetailsPage() { return null; }
  const { slug } = router.query as { slug?: string };
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {}
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
:pages_backup/jobs/[slug].tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useRouter  } from 'next/router';
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import EnhancedLoading from '../../components/ui/EnhancedLoading',
import useResponsive from '../../hooks/useResponsive';
import { useToast  } from '../../components/ui/NotificationSystem';
import { useEffect, useState } from 'react';
export default function JobDetailsPage() {

<<<<<<< HEAD
  const router = useRouter();
  const { slug } = router.query as { slug?: string }
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);
:pages_backup/jobs/[slug].tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {useRouter} from 'next/router';
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import useResponsive from '../../hooks/useResponsive';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import {useToast} from '../../components/ui/NotificationSystem';
import {useEffect, useState} from 'react';
export default function JobDetailsPage() {;
  const router = useRouter();
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

import { useRouter } from 'next/router',
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import EnhancedLoading from '../../components/ui/EnhancedLoading',
import useResponsive from '../../hooks/useResponsive',
import { useToast } from '../../components/ui/NotificationSystem',
import { useEffect, useState } from 'react',
export default function JobDetailsPage() {
  const router = useRouter(),
  const { slug } = router.query as { slug?: string },
  const { isMobile } = useResponsive(),
  const { notify } = useToast(),
  const [loading, setLoading] = useState(true),
  useEffect(() => { const t = setTimeout(() => setLoading(false), 600), return () => clearTimeout(t) }, []),
  const onApply = () => {
    notify('Application submitted! We’ll notify you when it’s viewed.success')
};
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  useEffect(() => {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/jobs/[slug].tsx
useEffect(() => {
origin/cursor/automate-test-improve-and-merge-code-2533
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  useEffect(() => {}
=======
useEffect(() => {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/[slug].tsx

'
import {useToast} from '../../components/ui/NotificationSystem';'
import {useEffect, useState} from 'react';

export default function JobDetailsPage() { return null; }
  const { slug } = router && router.query as { slug?: string };
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {;
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const onApply = () => {;
    notify(;'
      'Application submitted! We’ll notify you when it’s viewed.',;'
      'success';

    );
  }
<<<<<<< HEAD:pages/jobs/[slug].tsx
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/jobs/[slug].tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  return (
    <div className="relative">
      {loading ? (
        <EnhancedLoading lines={5} />
      ) : ("
        <div className="space-y-4">
          <EnhancedCard>"
            <div className="flex items-start justify-between gap-3">
              <div>
<<<<<<< HEAD:pages/jobs/[slug].tsx
<<<<<<< HEAD
<<<<<<< HEAD

            </div>
          </EnhancedCard>

          <EnhancedCard>
"
            <h2 className="font-semibold mb-2">Description</h2>"
            <p className="text-sm text-gray-700 dark:text-gray-300">You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>

:pages_backup/jobs/[slug].tsx

              <li>3+ years with Python or TypeScript</li>

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/jobs/[slug].tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <h1 className='text-xl font-semibold'>
=======

              <li>3+ years with Python or TypeScript</li>

'
                <h1 className='text-xl font-semibold'>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/[slug].tsx
                  {slug?.replace(/-/g, ' ') |'Job Title'}
                </h1>'
                <p className='text-sm text-gray-600 dark:text-gray-300'>
:pages_backup/jobs/[slug].tsx
                  Remote • Contract • Posted today
                </p>
<h1 className="text-xl font-semibold">{slug?.replace(/-/g, ' ') || 'Job Title'}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Remote • Contract • Posted today</p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </div>
              {!isMobile && ("
                <EnhancedButton onClick={onApply} variant="primary">Apply Now</EnhancedButton>
              )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <li>3+ years with Python or TypeScript</li>

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
              </div>
              {!isMobile && (
                <EnhancedButton onClick={onApply} variant='primary'>
                  Apply Now
                </EnhancedButton>
              )}
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
            <ul className='list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300'>
              <li>3+ years with Python or TypeScript</li>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <li>Experience with ML/AI production systems</li>
              <li>Familiarity with cloud infra and CI/CD</li>
            </ul>
          </EnhancedCard>
        </div>
:pages_backup/jobs/[slug].tsx
<<<<<<< HEAD

'
    <div className='relative'>;
      {loading ? (;
        <EnhancedLoading lines={5} />;
      ) : (;'
        <div className='space-y-4'>;
          <EnhancedCard>;'
            <div className='flex items-start justify-between gap-3'>;
              <div>;'
                <h1 className='text-xl font-semibold'>;'
                  {slug?.replace(/-/g, ' ') || 'Job Title'}
                </h1>;'
                <p className='text-sm text-gray-600 dark:text-gray-300'>;
                  Remote • Contract • Posted today;
                </p>;
              </div>;
              {!isMobile && (;'
                <EnhancedButton onClick={onApply} variant='primary'>;
:pages_backup/jobs/[slug].tsx

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/[slug].tsx
                  Apply Now;
                </EnhancedButton>              )}
            </div>;
          </EnhancedCard>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      )}
      {/* Sticky mobile apply CTA */}
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Sticky mobile apply CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {isMobile && (
=======
      {isMobile && (
:pages/jobs/[slug].tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3">
          <div className="container mx-auto px-2">
            <EnhancedButton onClick={onApply} variant="primary" fullWidth>Apply Now</EnhancedButton>
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <EnhancedCard>;
            <h2 className='font - semibold mb - 2'>Requirements</h2>;
=======

          <EnhancedCard>;'
            <h2 className='font - semibold mb - 2'>Requirements</h2>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/[slug].tsx
            <ul className='list - disc pl - 5 space - y-1 text - sm text - gray - 700 dark:text - gray - 300'>              <li > 3+ years with Python or TypeScript</li>;
              <li > Experience with ML / AI production systems</li>;
              <li > Familiarity with cloud infra and CI / CD</li>;
            </ul>;
          </EnhancedCard>;
        </div>)}
      {/* Sticky mobile apply CTA */}
      {is_mobile && ('
        <div className='fixed inset - x-0 bottom - 0 z - 30 bg - white / 90 dark:bg - black / 80 backdrop - blur border - t border - gray - 200 dark:border - gray - 800 p - 3'>;'
          <div className='container mx - auto px - 2'>;'
            <EnhancedButton on_click={on_apply} variant='primary' full_width>;
              Apply Now;
            </EnhancedButton>          </div>;
        </div>)}
    </div>);
;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}

:pages_backup/jobs/[slug].tsx
<<<<<<< HEAD

:pages_backup/jobs/[slug].tsx
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      )  } catch (error) {
    console.error("Error:", error);
=======

      )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/[slug].tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/jobs/[slug].tsx
<<<<<<< HEAD

:pages_backup/jobs/[slug].tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/jobs/[slug].tsx
=======
      {isMobile && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<div className='fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3'>
          <div className='container mx-auto px-2'>
            <EnhancedButton onClick={onApply} variant='primary' fullWidth>
              Apply Now
            </EnhancedButton>
          </div>
        </div>
      )}
    </div>
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
