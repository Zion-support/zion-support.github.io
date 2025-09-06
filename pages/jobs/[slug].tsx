import { useRouter } from 'next/router';
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import useResponsive from '../../hooks/useResponsive';
import { useToast } from '../../components/ui/NotificationSystem';
import { useEffect, useState } from 'react';

export default function JobDetailsPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
=======
  useEffect(() => { const t = setTimeout(() => setLoading(false), 600), return () => clearTimeout(t) }, []);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const onApply = () => {
    notify('Application submitted! We’ll notify you when it’s viewed.success')
  };

  return (
    <div className="relative">
      {loading ? (
        <EnhancedLoading lines={5} />
      ) : (
        <div className="space-y-4">
          <EnhancedCard>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-xl font-semibold">{slug?.replace(/-/g, ' ') || 'Job Title'}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Remote • Contract • Posted today</p>
              </div>
              {!isMobile && (
<<<<<<< HEAD
                <EnhancedButton onClick={onApply} variant='primary'>
                  Apply Now
                </EnhancedButton>
=======
  useEffect(() => { const t = setTimeout(() => setLoading(false), 600), return () => clearTimeout(t) }, []);

  const onApply = () => {
    notify('Application submitted! We’ll notify you when it’s viewed.success')
  };

  return (
    <div className="relative">
      {loading ? (
        <EnhancedLoading lines={5} />
      ) : (
        <div className="space-y-4">
          <EnhancedCard>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-xl font-semibold">{slug?.replace(/-/g, ' ') || 'Job Title'}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Remote • Contract • Posted today</p>
              </div>
              {!isMobile && (
                <EnhancedButton onClick={onApply} variant="primary">Apply Now</EnhancedButton>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <EnhancedButton onClick={onApply} variant="primary">Apply Now</EnhancedButton>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              )}
            </div>
          </EnhancedCard>

          <EnhancedCard>
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className='font-semibold mb-2'>Description</h2>
            <p className='text-sm text-gray-700 dark:text-gray-300'>
              You will design, build, and scale AI features using LLMs and
              modern tooling.
            </p>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className='font-semibold mb-2'>Requirements</h2>
            <ul className='list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300'>
=======
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className="font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className="font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <li>3+ years with Python or TypeScript</li>
              <li>Experience with ML/AI production systems</li>
              <li>Familiarity with cloud infra and CI/CD</li>
            </ul>
          </EnhancedCard>
        </div>
      )}

      {/* Sticky mobile apply CTA */}
      {isMobile && (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3'>
          <div className='container mx-auto px-2'>
            <EnhancedButton onClick={onApply} variant='primary' fullWidth>
              Apply Now
            </EnhancedButton>
=======
        <div className="fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3">
          <div className="container mx-auto px-2">
            <EnhancedButton onClick={onApply} variant="primary" fullWidth>Apply Now</EnhancedButton>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3">
          <div className="container mx-auto px-2">
            <EnhancedButton onClick={onApply} variant="primary" fullWidth>Apply Now</EnhancedButton>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </div>
        </div>
      )}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
