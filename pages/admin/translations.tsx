import dynamic from 'next/dynamic';
<<<<<<< HEAD

const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false })

=======
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
