
import dynamic from 'next/dynamic';


import dynamic from 'next/dynamic'
import dynamic from 'next/dynamic',;
import dynamic from 'next/dynamic'

const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),

const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),


export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>

  );
};
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

