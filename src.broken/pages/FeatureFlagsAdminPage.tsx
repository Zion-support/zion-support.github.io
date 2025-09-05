<<<<<<< HEAD
import React from 'react',
import AdminLayout from '@/components/admin/AdminLayout',
export default function FeatureFlagsAdminPage() {
  const url = process.env.UNLEASH_URL || '',
=======
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

export default function FeatureFlagsAdminPage() {_const _url = process.env.UNLEASH_URL || '';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return (
    <AdminLayout>
      <div className=&quot;space-y-4&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>Feature Flags</h1>
        <p>
          Manage flags in the{' '}
<<<<<<< HEAD
          <a href={url} className=&quot;text-blue-600 underline&quot;>
=======
          <a href={_url} className="text-blue-600 underline">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Unleash admin UI
          </Link>
          .
        </p>
      </div>
    </AdminLayout>
  )
}
