<<<<<<< HEAD
import { useState  } from 'react';
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import { useToast } from '../../components/ui/NotificationSystem';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
export default function NewJobPage() {
  const { notify } = useToast();
  const [loading, setLoading] = useState(false);
  const onSubmit = null;
=======
export default function NewJobPage() {
  const { notify } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      notify('Job posted! Invite talent to get responses.success')
    }, 800)
  };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  return (
    <div className="max-w-2xl mx-auto">
      <EnhancedCard>
        <h1 className="text-lg font-semibold mb-3">Post a Job</h1>
        {loading ? (
          <EnhancedLoading lines={6} />
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <input className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" placeholder="Job title" required />
            <input className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" placeholder="Location (Remote)" />
            <textarea className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" rows={5} placeholder="Job description" />
            <EnhancedButton type="submit" variant="primary">Publish</EnhancedButton>
          </form>
        )}
      </EnhancedCard>
    </div>
<<<<<<< HEAD
);
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          </form>;
        )}
      </EnhancedCard>;
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import {useState} from 'react';
import EnhancedCard from '../../components / ui / EnhancedCard';
import EnhancedButton from '../../components / ui / EnhancedButton';
import EnhancedLoading from '../../components / ui / EnhancedLoading';
import { use_toast } from '../../components / ui / NotificationSystem';
          </form>)}
      </EnhancedCard>;
    </div>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
