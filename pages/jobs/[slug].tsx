<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


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



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
<<<<<<< HEAD

import { useRouter } from 'next/router',
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import EnhancedLoading from '../../components/ui/EnhancedLoading',
import useResponsive from '../../hooks/useResponsive',
import { useToast } from '../../components/ui/NotificationSystem',
import { useEffect, useState } from 'react',
export default function JobDetailsPage() {
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
import {useRouter} from 'next/router';
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import useResponsive from '../../hooks/useResponsive';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import {useToast} from '../../components/ui/NotificationSystem';
import {useEffect, useState} from 'react';
export default function JobDetailsPage() {;
  const router = useRouter();
<<<<<<< HEAD
  const { slug } = router && router.query as { slug?: string };
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);
  useEffect(() => {;
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
  const onApply = () => {;
    notify(;
      'Application submitted! We’ll notify you when it’s viewed.',;
      'success';
    );
  }
  return (
  useEffect(() => { const t = setTimeout(() => setLoading(false), 600), return () => clearTimeout(t) }, []);
  const onApply = () => {
    notify('Application submitted! We’ll notify you when it’s viewed.success')
  };
=======
  const { slug } = router.query as { slug?: string };
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const router = useRouter(),
  const { slug } = router.query as { slug?: string },
  const { isMobile } = useResponsive(),
  const { notify } = useToast(),
  const [loading, setLoading] = useState(true),
  useEffect(() => { const t = setTimeout(() => setLoading(false), 600), return () => clearTimeout(t) }, []),
  const onApply = () => {
    notify('Application submitted! We’ll notify you when it’s viewed.success')
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======

import {useToast} from '../../components/ui/NotificationSystem';
import {useEffect, useState} from 'react';

export default function JobDetailsPage() {;
  const router = useRouter();
  const { slug } = router && router.query as { slug?: string };
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {;
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const onApply = () => {;
    notify(;
      'Application submitted! We’ll notify you when it’s viewed.',;
      'success';

    );
  }
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (


  useEffect(() => { const t = setTimeout(() => setLoading(false), 600), return () => clearTimeout(t) }, []);

  const onApply = () => {
    notify('Application submitted! We’ll notify you when it’s viewed.success')
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="relative">
      {loading ? (
        <EnhancedLoading lines={5} />
      ) : (
        <div className="space-y-4">
          <EnhancedCard>
            <div className="flex items-start justify-between gap-3">
              <div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
                <h1 className="text-xl font-semibold">{slug?.replace(/-/g, ' ') || 'Job Title'}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Remote • Contract • Posted today</p>
              </div>
              {!isMobile && (
                <EnhancedButton onClick={onApply} variant="primary">Apply Now</EnhancedButton>
              )}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <h1 className='text-xl font-semibold'>
                  {slug?.replace(/-/g, ' ') |'Job Title'}
                </h1>
                <p className='text-sm text-gray-600 dark:text-gray-300'>
                  Remote • Contract • Posted today
                </p>
                <h1 className="text-xl font-semibold">{slug?.replace(/-/g, ' ') || 'Job Title'}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Remote • Contract • Posted today</p>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              </div>
              {!isMobile && (
                <EnhancedButton onClick={onApply} variant="primary">Apply Now</EnhancedButton>
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>
          </EnhancedCard>
          <EnhancedCard>
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>
          <EnhancedCard>
            <h2 className="font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
<<<<<<< HEAD
        <EnhancedLoading lines={5} />
      ) : (
        <div className=&quot;space-y-4&quot;>
          <EnhancedCard>
            <div className=&quot;flex items-start justify-between gap-3&quot;>
              <div>
                <h1 className=&quot;text-xl font-semibold&quot;>{slug?.replace(/-/g, ' ') || 'Job Title'}</h1>
                <p className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>Remote • Contract • Posted today</p>
              </div>
              {!isMobile && (
                <EnhancedButton onClick={onApply} variant=&quot;primary&quot;>Apply Now</EnhancedButton>
              )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
          </EnhancedCard>

          <EnhancedCard>
<<<<<<< HEAD

            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>
=======
            <h2 className=&quot;font-semibold mb-2&quot;>Description</h2>
            <p className=&quot;text-sm text-gray-700 dark:text-gray-300&quot;>You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className=&quot;font-semibold mb-2&quot;>Requirements</h2>
            <ul className=&quot;list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300&quot;>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <li>3+ years with Python or TypeScript</li>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <li>Experience with ML/AI production systems</li>
              <li>Familiarity with cloud infra and CI/CD</li>
            </ul>
          </EnhancedCard>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
    <div className='relative'>;
=======
<<<<<<< HEAD
<div className='relative'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {loading ? (;
        <EnhancedLoading lines={5} />;
      ) : (;
        <div className='space-y-4'>;
          <EnhancedCard>;
            <div className='flex items-start justify-between gap-3'>;
              <div>;
                <h1 className='text-xl font-semibold'>;
                  {slug?.replace(/-/g, ' ') || 'Job Title'}
                </h1>;
                <p className='text-sm text-gray-600 dark:text-gray-300'>;
                  Remote • Contract • Posted today;
                </p>;
              </div>;
              {!isMobile && (;
                <EnhancedButton onClick={onApply} variant='primary'>;
                  Apply Now;
                </EnhancedButton>              )}
            </div>;
          </EnhancedCard>;
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
                  Apply Now;
                </EnhancedButton>              )}
            </div>;
          </EnhancedCard>;
          <EnhancedCard>;
            <h2 className='font - semibold mb - 2'>Description</h2>;
            <p className='text - sm text - gray - 700 dark:text - gray - 300'>;
              You will design, build, and scale AI features using LLMs and;
              modern tooling.;
            </p>;
          </EnhancedCard>;
    </div>;
  );
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {isMobile && (
        <div className="fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3">
          <div className="container mx-auto px-2">
            <EnhancedButton onClick={onApply} variant="primary" fullWidth>Apply Now</EnhancedButton>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
      )}
    </div>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <EnhancedCard>;
            <h2 className='font - semibold mb - 2'>Requirements</h2>;
            <ul className='list - disc pl - 5 space - y-1 text - sm text - gray - 700 dark:text - gray - 300'>              <li > 3+ years with Python or TypeScript</li>;
              <li > Experience with ML / AI production systems</li>;
              <li > Familiarity with cloud infra and CI / CD</li>;
            </ul>;
          </EnhancedCard>;
        </div>)}
      {/* Sticky mobile apply CTA */}
      {is_mobile && (
        <div className='fixed inset - x-0 bottom - 0 z - 30 bg - white / 90 dark:bg - black / 80 backdrop - blur border - t border - gray - 200 dark:border - gray - 800 p - 3'>;
          <div className='container mx - auto px - 2'>;
            <EnhancedButton on_click={on_apply} variant='primary' full_width>;
              Apply Now;
            </EnhancedButton>          </div>;
        </div>)}
    </div>);
;
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      )}
    </div>
);

}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
