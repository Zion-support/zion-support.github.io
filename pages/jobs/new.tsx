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
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======


          </form>;
        )}
      </EnhancedCard>;
    </div>;
  );


=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
