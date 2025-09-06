import { useRouter  } from 'next/router';
import useSWR from 'swr';
import { TALENT_PROFILES  } from '../../../../data/talent';
import Link from 'next/link';
const fetcher = null;
          return (
            <div key={a.id} className="border rounded p-4 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{talent?.name || a.talentSlug}</p>
                  <p className="text-xs text-gray-500">Status: {a.status} • Applied: {new Date(a.createdAtIso).toLocaleString()}</p>
                </div>
                <button className="px-2 py-1 text-sm border rounded">Message</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}