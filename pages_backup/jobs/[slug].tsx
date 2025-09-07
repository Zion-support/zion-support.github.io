<<<<<<< HEAD:pages_backup/jobs/[slug].tsx
import {useRouter} from 'next/router';'
import EnhancedCard from '../../components/ui/EnhancedCard';'
import EnhancedButton from '../../components/ui/EnhancedButton';'
import EnhancedLoading from '../../components/ui/EnhancedLoading';'
import useResponsive from '../../hooks/useResponsive';'
import {useToast} from '../../components/ui/NotificationSystem';'
=======


<<<<<<< HEAD
import {useRouter} from 'next/router';
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import useResponsive from '../../hooks/useResponsive';
import {useToast} from '../../components/ui/NotificationSystem';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/jobs/[slug].tsx
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
import { useRouter  } from 'next/router';
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import EnhancedLoading from '../../components/ui/EnhancedLoading',
import useResponsive from '../../hooks/useResponsive';
import { useToast  } from '../../components/ui/NotificationSystem';
import { useEffect, useState } from 'react';
export default function JobDetailsPage() {

  const router = useRouter();
  const { slug } = router.query as { slug?: string }
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useRouter} from 'next/router';
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import useResponsive from '../../hooks/useResponsive';
import {useToast} from '../../components/ui/NotificationSystem';
import {useEffect, useState} from 'react';
export default function JobDetailsPage() {;
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
<<<<<<< HEAD
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
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { useRouter  } from 'next/router';
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import EnhancedLoading from '../../components/ui/EnhancedLoading',
import useResponsive from '../../hooks/useResponsive';
import { useToast  } from '../../components/ui/NotificationSystem';
import { useEffect, useState } from 'react';
export default function JobDetailsPage() {

  const router = useRouter();
  const { slug } = router.query as { slug?: string }
<<<<<<< HEAD
:pages/jobs/[slug].tsx
=======
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);
>>>>>>> origin/chore/fix-lint-and-merge

import {useRouter} from 'next/router';
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedLoading from '../../components/ui/EnhancedLoading';

import {useToast} from '../../components/ui/NotificationSystem';
export default function JobDetailsPage() {;

  useEffect(() => {
    return () => clearTimeout(t);
  }, []);

  const onApply = () => {
    notify(
      'Application submitted! We’ll notify you when it’s viewed.'
      'success'
    );
  }

<<<<<<< HEAD
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
    notify('Application submitted! We’ll notify you when it’s viewed.success')

useEffect(() => {
origin/cursor/automate-test-improve-and-merge-code-2533
    return () => clearTimeout(t);
  }, []);

    return () => clearTimeout(t);
  }, []);

'

export default function JobDetailsPage() { return null; }
  const { slug } = router && router.query as { slug?: string };

  useEffect(() => {;
    return () => clearTimeout(t);
  }, []);

  const onApply = () => {;
    notify(;'
      'Application submitted! We’ll notify you when it’s viewed.',;'
      'success';

    );
  }
<<<<<<< HEAD:pages_backup/jobs/[slug].tsx
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/jobs/[slug].tsx

  return (

  return (

  return (
    <div className="relative">
      {loading ? (
        <EnhancedLoading lines={5} />
      ) : ("
        <div className="space-y-4">
          <EnhancedCard>"
            <div className="flex items-start justify-between gap-3">
              <div>
<<<<<<< HEAD
                <h1 className='text-xl font-semibold'>
                  {slug?.replace(/-/g, ' ') |'Job Title'}
                </h1>
                <p className='text-sm text-gray-600 dark:text-gray-300'>
                  Remote • Contract • Posted today
                </p>
                <h1 className="text-xl font-semibold">{slug?.replace(/-/g, ' ') || 'Job Title'}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Remote • Contract • Posted today</p>
              </div>
              {!isMobile && (
                <EnhancedButton onClick={onApply} variant="primary">Apply Now</EnhancedButton>
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </EnhancedCard>
          <EnhancedCard>
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>
          <EnhancedCard>
            <h2 className="font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <h2 className=&quot;font-semibold mb-2&quot;>Description</h2>
            <p className=&quot;text-sm text-gray-700 dark:text-gray-300&quot;>You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className=&quot;font-semibold mb-2&quot;>Requirements</h2>
            <ul className=&quot;list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300&quot;>

              <li>3+ years with Python or TypeScript</li>
=======

            </div>
          </EnhancedCard>
<<<<<<< HEAD:pages_backup/jobs/[slug].tsx
=======

          <EnhancedCard>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/jobs/[slug].tsx

          <EnhancedCard>
"
            <h2 className="font-semibold mb-2">Description</h2>"
            <p className="text-sm text-gray-700 dark:text-gray-300">You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>

<<<<<<< HEAD:pages_backup/jobs/[slug].tsx
              <li>3+ years with Python or TypeScript</li>

                <h1 className='text-xl font-semibold'>

                  {slug?.replace(/-/g, ' ') |'Job Title'}
                </h1>'
                <p className='text-sm text-gray-600 dark:text-gray-300'>

                <p className="text-sm text-gray-600 dark:text-gray-300">Remote • Contract • Posted today</p>

              </div>
              {!isMobile && ("
                <EnhancedButton onClick={onApply} variant="primary">Apply Now</EnhancedButton>
              )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/jobs/[slug].tsx
              <li>3+ years with Python or TypeScript</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <li>Experience with ML/AI production systems</li>
              <li>Familiarity with cloud infra and CI/CD</li>
            </ul>
          </EnhancedCard>
        </div>
<<<<<<< HEAD
    <div className='relative'>;
import {use_router} from 'next / router';
import EnhancedCard from '../../components / ui / EnhancedCard';
import EnhancedButton from '../../components / ui / EnhancedButton';
import EnhancedLoading from '../../components / ui / EnhancedLoading';
import use_responsive from '../../hooks / use_responsive';
import {use_toast} from '../../components / ui / NotificationSystem';
import {useEffect, useState} from 'react';
export default /**
 * JobDetailsPage - Function description
 */
function JobDetailsPage() {
  const router = use_router ();
  const { slug } = router.query as { slug?: string }
  const { is_mobile } = use_responsive ();
  const { notify } = use_toast ();
  const [loading, set_loading] = useState (true);
;
  useEffect (() => {
    const t = set_timeout (() => set_loading (false), 600);
    return () => clear_timeout (t);
  }, []);
;
  const on_apply = () =>: any {
    notify (
      'Application submitted! We’ll notify you when it’s viewed.',
      'success');
  }
;
  return (
    <div className='relative'>;
      {loading ? (
        <EnhancedLoading lines={5} />) : (
        <div className='space - y-4'>;
          <EnhancedCard>;
            <div className='flex items - start justify - between gap - 3'>;
              <div>;
                <h1 className='text - xl font - semibold'>;
                  {slug?.replace (/-/g, ' ') || 'Job Title'}
                </h1>;
                <p className='text - sm text - gray - 600 dark:text - gray - 300'>;
                  Remote • Contract • Posted today;
                </p>;
              </div>;
              {!is_mobile && (
                <EnhancedButton on_click={on_apply} variant='primary'>;
=======

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
<<<<<<< HEAD:pages_backup/jobs/[slug].tsx

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/jobs/[slug].tsx
                  Apply Now;
                </EnhancedButton>              )}
            </div>;
          </EnhancedCard>;
<<<<<<< HEAD
          <EnhancedCard>;
            <h2 className='font - semibold mb - 2'>Description</h2>;
            <p className='text - sm text - gray - 700 dark:text - gray - 300'>;
              You will design, build, and scale AI features using LLMs and;
              modern tooling.;
            </p>;
          </EnhancedCard>;
    </div>;
  );
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
=======

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

<<<<<<< HEAD:pages_backup/jobs/[slug].tsx
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/jobs/[slug].tsx
      {isMobile && (

<<<<<<< HEAD

}

      )}
    </div>
);

}
=======
          <EnhancedCard>;
            <h2 className='font - semibold mb - 2'>Requirements</h2>;

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

}

<<<<<<< HEAD:pages_backup/jobs/[slug].tsx
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/jobs/[slug].tsx
      )  } catch (error) {
    console.error("Error:", error);

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

<<<<<<< HEAD:pages_backup/jobs/[slug].tsx
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/jobs/[slug].tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
