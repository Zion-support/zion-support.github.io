

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),

export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>

  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import dynamic from 'next/dynamic';
const _TranslationPreview = dynamic__(() => import('../../components/admin/TranslationPreview'), {_ssr: false});
export default function TranslationsAdminPage() {_return (

    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
  )
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
