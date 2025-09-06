
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication } from '../../types/grants';

  const router = useRouter();
  const { id } = router.query as { id: string };  const [item, setItem] = useState<GrantApplication | null>(null);export default function GrantDetailPage() {;
  const router = useRouter();
  const { id } = router.query as { id: string }
  const [item, setItem] = useState<GrantApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [updateContent, setUpdateContent] = useState('');
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/grants/${id}`)
      .then(r => r.json())
      .then(d => setItem(d.record))
      .finally(() => setLoading(false));  }, [id]);
  const addUpdate = async () => {

    if (!id || !updateContent.trim()) return;    fetch(`/api/grants/${id}`).then((r) => r.json()).then((d) => setItem(d.record)).finally(() => setLoading(false))

    if (!id || !updateContent.trim()) return;

  }, [id]);
  const addUpdate = async () => {
    if (!id |!updateContent.trim()) return;
    const resp = await fetch(`/api/grants/${id}/updates`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ content: updateContent })
    });
      const u = await resp.json();
      setItem(prev =>
        prev ? { ...prev, updates: [...(prev.updates |[]), u.update] } : prev
      );
      setUpdateContent('');
    }
  }
  if (loading)
    return (
      <EnhancedLayout>
        <div>Loading...</div>
      </EnhancedLayout>
    );
  if (!item)
    return (
      <EnhancedLayout>
        <div>Not found</div>
      </EnhancedLayout>
    );

  return (
    <EnhancedLayout>
      <div className='flex items-center justify-between mb-4'>
        <div>
          <h1 className='text-2xl font-semibold'>{item.projectName}</h1>
          <div className='text-sm text-gray-600 dark:text-gray-400'>
            {item.sector |'General'} • {item.region |'Global'} •{' '}
            {item.program === 'incubator' ? 'Incubator' : 'Grant'}
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          {item.program === 'incubator' && (
            <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
              Incubated by Zion
            </span>
          )}
          {item.status === 'Approved' && (
            <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>
              Grant Winner
            </span>
          )}
          <span className='px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800'>
            {item.status}
          </span>
        </div>
      </div>

}

}

    </EnhancedLayout>
  );
}

