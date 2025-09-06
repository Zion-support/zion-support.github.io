import dynamic from 'next/dynamic';
<<<<<<< HEAD
<<<<<<< HEAD
const TranslationPreview = null;
=======
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false })
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
  )
}
=======

const TranslationPreview = dynamic(
  () => import('../../components/admin/TranslationPreview'),
  { ssr: false }
);
}

export default function TranslationsAdminPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <TranslationPreview />
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
