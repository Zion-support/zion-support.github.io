import dynamic from 'next/dynamic';
<<<<<<< HEAD
<<<<<<< HEAD

const TranslationPreview = dynamic(
  () => import('../../components/admin/TranslationPreview'),
  { ssr: false }
);

=======
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
<<<<<<< HEAD
  );
=======
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),
export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
