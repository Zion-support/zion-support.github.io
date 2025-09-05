<<<<<<< HEAD
import { useState } from 'react',;
import EnhancedCard from '../../components/ui/EnhancedCard',;
import EnhancedButton from '../../components/ui/EnhancedButton',;
import EnhancedLoading from '../../components/ui/EnhancedLoading',;
import { useToast } from '../../components/ui/NotificationSystem',;
;
export default function NewJobPage() {;
  const { notify } = useToast(),;
  const [loading, setLoading] = useState(false),;
;
  const onSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
    setLoading(true),;
    setTimeout(() => {;
      setLoading(false),;
      notify('Job posted! Invite talent to get responses.success'),;
    }, 800),;
  },;
;
  return (;
    <div className="max-w-2xl mx-auto">;
      <EnhancedCard>;
        <h1 className="text-lg font-semibold mb-3">Post a Job</h1>;
        {loading ? (;
          <EnhancedLoading lines={6} />;
        ) :(;
          <form onSubmit={onSubmit} className="space-y-3">;
            <input className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" placeholder="Job title" required />;
            <input className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" placeholder="Location (Remote)" />;
            <textarea className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" rows={5} placeholder="Job description" />;
            <EnhancedButton type="submit" variant="primary">Publish</EnhancedButton>;
          </form>;
        )}
      </EnhancedCard>;
    </div>;
  ),;
=======
import { useState } from 'react',
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import EnhancedLoading from '../../components/ui/EnhancedLoading',
import { useToast } from '../../components/ui/NotificationSystem',
export default function NewJobPage() {
  const { notify } = useToast(),
  const [loading, setLoading] = useState(false),

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    setLoading(true),
    setTimeout(() => {
      setLoading(false),
      notify('Job posted! Invite talent to get responses.success')
    }, 800)
  },
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
            <EnhancedButton type=&quot;submit&quot; variant=&quot;primary&quot;>Publish</EnhancedButton>          </form>
        )}
      </EnhancedCard>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}