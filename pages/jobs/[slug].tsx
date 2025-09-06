
=======

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

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const onApply = () => {
    notify('Application submitted! We’ll notify you when it’s viewed.success')
  },

  return (


  useEffect(() => { const t = setTimeout(() => setLoading(false), 600), return () => clearTimeout(t) }, []);

  const onApply = () => {
    notify('Application submitted! We’ll notify you when it’s viewed.success')
  };
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  return (
    <div className="relative">
      {loading ? (
        <EnhancedLoading lines={5} />
      ) : (
        <div className="space-y-4">
          <EnhancedCard>
            <div className="flex items-start justify-between gap-3">
              <div>

              </div>
              {!isMobile && (
                <EnhancedButton onClick={onApply} variant="primary">Apply Now</EnhancedButton>
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              <li>3+ years with Python or TypeScript</li>

              <li>Experience with ML/AI production systems</li>
              <li>Familiarity with cloud infra and CI/CD</li>
            </ul>
          </EnhancedCard>
        </div>

      {/* Sticky mobile apply CTA */}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {isMobile && (
        <div className="fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3">
          <div className="container mx-auto px-2">
            <EnhancedButton onClick={onApply} variant="primary" fullWidth>Apply Now</EnhancedButton>
          </div>
        </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
