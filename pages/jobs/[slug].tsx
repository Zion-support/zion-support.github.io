



  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
  const router = useRouter();
  const { slug } = router.query as { slug?: string }
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);
=======import {useRouter} from 'next/router';
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

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
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
==============
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (


  useEffect(() => { const t = setTimeout(() => setLoading(false), 600), return () => clearTimeout(t) }, []);

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
    notify('Application submitted! We’ll notify you when it’s viewed.success')
  },  return (
    <div className="relative">
      {loading ? (
        <EnhancedLoading lines={5} />
      ) : (
        <div className="space-y-4">
          <EnhancedCard>
            <div className="flex items-start justify-between gap-3">
              <div>
          <EnhancedCard>
            <h2 className=&quot;font-semibold mb-2&quot;>Requirements</h2>
            <ul className=&quot;list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300&quot;>

              <li>3+ years with Python or TypeScript</li>
=======

            </div>
          </EnhancedCard>

          <EnhancedCard>

            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>

=======              <li>3+ years with Python or TypeScript</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className="font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>3+ years with Python or TypeScript</li>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <li>Experience with ML/AI production systems</li>
              <li>Familiarity with cloud infra and CI/CD</li>
            </ul>
          </EnhancedCard>
        </div>
    <div className='relative'>;
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {isMobile && (
        <div className="fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3">
          <div className="container mx-auto px-2">
            <EnhancedButton onClick={onApply} variant="primary" fullWidth>Apply Now</EnhancedButton>
          </div>
        </div>

}

      )}
    </div>
);

}
=======
=======          <EnhancedCard>;
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


}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
