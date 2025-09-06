
import Link from 'next/link';
import { useRole } from '../context/RoleContext';


  const { role, setRole } = useRole();
  const [open, setOpen] = useState(false);


  useEffect(() => {;
    try {;
      const has =;
        typeof window !== 'undefined';
          ? window && window.localStorage.getItem('zion_has_onboarded');

          : 'true';
      if (!has) {;
        setOpen(true);      const has = typeof window !== 'undefined' ? window && window.localStorage.getItem('zion_has_onboarded') : 'true';
      if (!has) {;
        setOpen(true);
      }
    } catch {}
  }, []);
  function completeOnboarding() {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('zion_has_onboarded', '1');
        window.localStorage.setItem('zion_has_onboarded1')
      }
    } catch {}

  if (!open) return null;

  return (


  );
}        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end">
          <button onClick={completeOnboarding} className="px-3 py-1.5 rounded-md border">Done</button>
        </div>
      </div>
    </div>

