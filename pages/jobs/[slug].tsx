<<<<<<< HEAD
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

  return (
    <div className=&quot;relative&quot;>
      {loading ? (
=======
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import useResponsive from '../../hooks/useResponsive';

export default function JobDetailsPage() {_const _router = useRouter();
  const { slug} = router.query as {_slug?: string};
  const {_isMobile} = useResponsive();
  const {_notify} = useToast();
  const [loading, setLoading] = useState(true);

  useEffect__(() => {_const _t = setTimeout__(() => setLoading(false), _600); return () => clearTimeout(t);}, []);

  const _onApply = () => {_notify('Application submitted! We’ll notify you when it’s viewed.', _'success');};

  return (
    <div className="relative">
      {_loading ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <EnhancedLoading lines={5} />
      ) : (
        <div className=&quot;space-y-4&quot;>
          <EnhancedCard>
            <div className=&quot;flex items-start justify-between gap-3&quot;>
              <div>
<<<<<<< HEAD
                <h1 className=&quot;text-xl font-semibold&quot;>{slug?.replace(/-/g, ' ') || 'Job Title'}</h1>
                <p className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>Remote • Contract • Posted today</p>
              </div>
              {!isMobile && (
                <EnhancedButton onClick={onApply} variant=&quot;primary&quot;>Apply Now</EnhancedButton>
=======
                <h1 className="text-xl font-semibold">{_slug?.replace(/-/g, _' ') || 'Job Title'}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Remote • Contract • Posted today</p>
              </div>
              {_!isMobile && (
                <EnhancedButton onClick={onApply} variant="primary">Apply Now</EnhancedButton>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
            </div>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className=&quot;font-semibold mb-2&quot;>Description</h2>
            <p className=&quot;text-sm text-gray-700 dark:text-gray-300&quot;>You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className=&quot;font-semibold mb-2&quot;>Requirements</h2>
            <ul className=&quot;list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300&quot;>
              <li>3+ years with Python or TypeScript</li>
              <li>Experience with ML/AI production systems</li>
              <li>Familiarity with cloud infra and CI/CD</li>
            </ul>
          </EnhancedCard>
        </div>
      )}

<<<<<<< HEAD
      {/* Sticky mobile apply CTA */}
      {isMobile && (
        <div className=&quot;fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3&quot;>
          <div className=&quot;container mx-auto px-2&quot;>
            <EnhancedButton onClick={onApply} variant=&quot;primary&quot; fullWidth>Apply Now</EnhancedButton>
=======
      {_/* Sticky mobile apply CTA */}
      {_isMobile && (
        <div className="fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3">
          <div className="container mx-auto px-2">
            <EnhancedButton onClick={onApply} variant="primary" fullWidth>Apply Now</EnhancedButton>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </div>
      )}
    </div>
  )
}