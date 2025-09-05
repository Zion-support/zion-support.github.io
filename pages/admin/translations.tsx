import dynamic from 'next/dynamic';

const _TranslationPreview = dynamic__(() => import('../../components/admin/TranslationPreview'), {_ssr: false});

export default function TranslationsAdminPage() {_return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
  );}