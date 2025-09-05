import React from 'react',
import AdminLayout from '@/components/admin/AdminLayout',
export default function FeatureFlagsAdminPage() {
  const url = process.env.UNLEASH_URL || '',  return (
    <AdminLayout>
      <div className=&quot;space-y-4&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>Feature Flags</h1>
        <p>
          Manage flags in the{' '}
          <a href={url} className=&quot;text-blue-600 underline&quot;>            Unleash admin UI
          </Link>
          .
        </p>
      </div>
    </AdminLayout>
  )
}
