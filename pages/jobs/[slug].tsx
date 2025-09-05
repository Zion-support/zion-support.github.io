import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import useResponsive from '../../hooks/useResponsive';

export default function JobDetailsPage() {_const _router = useRouter();
  const { slug} = router.query as {_slug?: string};
  const {_isMobile} = useResponsive();
  const {_notify} = useToast();
  const [loading, setLoading] = useState(true);

  useEffect__(() => {_const _t = setTimeout__(() => setLoading(false), _600); return () => clearTimeout(t);}, []);

  const _onApply = () => {_notify('Application submitted! We’ll notify you when it’s viewed.', _'success');};

  return (
    <div className="relative">
      {_loading ? (
        <EnhancedLoading lines={5} />
      ) : (
        <div className="space-y-4">
          <EnhancedCard>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-xl font-semibold">{_slug?.replace(/-/g, _' ') || 'Job Title'}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Remote • Contract • Posted today</p>
              </div>
              {_!isMobile && (
                <EnhancedButton onClick={onApply} variant="primary">Apply Now</EnhancedButton>
              )}
            </div>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">You will design, build, and scale AI features using LLMs and modern tooling.</p>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className="font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>3+ years with Python or TypeScript</li>
              <li>Experience with ML/AI production systems</li>
              <li>Familiarity with cloud infra and CI/CD</li>
            </ul>
          </EnhancedCard>
        </div>
      )}

      {_/* Sticky mobile apply CTA */}
      {_isMobile && (
        <div className="fixed inset-x-0 bottom-0 z-30 bg-white/90 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-3">
          <div className="container mx-auto px-2">
            <EnhancedButton onClick={onApply} variant="primary" fullWidth>Apply Now</EnhancedButton>
          </div>
        </div>
      )}
    </div>
  );
}