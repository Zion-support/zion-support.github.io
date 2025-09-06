<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const TranslationPreview = null;
=======
=======
import dynamic from 'next/dynamic';

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false })

=======
import dynamic from 'next/dynamic'
=======
import dynamic from 'next/dynamic',;
=======
import dynamic from 'next/dynamic'
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false }),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
=======
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
