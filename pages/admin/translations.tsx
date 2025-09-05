<<<<<<< HEAD
import dynamic from 'next/dynamic',;
;
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr:false }),;
;
export default function TranslationsAdminPage() {;
  return (;
    <div className="container mx-auto px-4 py-8">;
      <TranslationPreview />;
    </div>;
  ),;
=======
import dynamic from 'next/dynamic',
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),

export default function TranslationsAdminPage() {
  return (
    <div className=&quot;container mx-auto px-4 py-8&quot;>
      <TranslationPreview />
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}