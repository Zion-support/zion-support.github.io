
import dynamic from 'next/dynamic'
=======
import dynamic from 'next/dynamic',;
=======
import dynamic from 'next/dynamic'

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
