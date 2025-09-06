<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
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
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======

          </form>;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD

  return (
    <div className=&quot;max-w-2xl mx-auto&quot;>
      <EnhancedCard>
        <h1 className=&quot;text-lg font-semibold mb-3&quot;>Post a Job</h1>
        {loading ? (
          <EnhancedLoading lines={6} />
        ) : (
          <form onSubmit={onSubmit} className=&quot;space-y-3&quot;>
            <input className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm&quot; placeholder=&quot;Job title&quot; required />
            <input className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm&quot; placeholder=&quot;Location (Remote)&quot; />
            <textarea className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm&quot; rows={5} placeholder=&quot;Job description&quot; />
            <EnhancedButton type=&quot;submit&quot; variant=&quot;primary&quot;>Publish</EnhancedButton>

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </form>
<<<<<<< HEAD
        )}
      </EnhancedCard>
    </div>
<<<<<<< HEAD
</form>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        )}
      </EnhancedCard>;
    </div>;
  );
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
=======
);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
