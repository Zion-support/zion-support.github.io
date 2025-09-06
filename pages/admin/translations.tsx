<<<<<<< HEAD
import dynamic from 'next/dynamic',;
=======
import dynamic from 'next/dynamic'
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),
export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
<<<<<<< HEAD
  );
};
=======
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
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
