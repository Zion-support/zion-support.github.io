

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),
export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>

=======
}
import dynamic from 'next/dynamic';
const _TranslationPreview = dynamic__(() => import('../../components/admin/TranslationPreview'), {_ssr: false});
export default function TranslationsAdminPage() {_return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
