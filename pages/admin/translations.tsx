import dynamic from 'next/dynamic';

const TranslationPreview = dynamic(
  () => import('../../components/admin/TranslationPreview'),
  { ssr: false }
);

<<<<<<< HEAD
=======
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function TranslationsAdminPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <TranslationPreview />
    </div>
<<<<<<< HEAD
  );
=======
  );
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),
export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
