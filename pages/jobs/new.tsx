<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import { useToast } from '../../components/ui/NotificationSystem';
export default function NewJobPage() {
  const { notify } = useToast();
  const [loading, setLoading] = useState(false);
  const onSubmit = null;
import {useState} from 'react';
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import { useToast } from '../../components/ui/NotificationSystem';
          </form>
        )}
      </EnhancedCard>
    </div>
);
import { useState } from 'react'
import EnhancedCard from '../../components/ui/EnhancedCard'
import EnhancedButton from '../../components/ui/EnhancedButton'
import EnhancedLoading from '../../components/ui/EnhancedLoading'
import { useToast } from '../../components/ui/NotificationSystem'
export default function NewJobPage() {
  const { notify } = useToast()
  const [loading, setLoading] = useState(false),
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    setLoading(true),
    setTimeout(() => {
      setLoading(false),
      notify('Job posted! Invite talent to get responses.success')
    }, 800)
  },
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
          </form>;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

          </form>;
        )}
      </EnhancedCard>;
    </div>;
  );


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
}
import {useState} from 'react';
import EnhancedCard from '../../components / ui / EnhancedCard';
import EnhancedButton from '../../components / ui / EnhancedButton';
import EnhancedLoading from '../../components / ui / EnhancedLoading';
import { use_toast } from '../../components / ui / NotificationSystem';
          </form>)}
      </EnhancedCard>;
    </div>);
;
<<<<<<< HEAD

);
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </EnhancedCard>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
