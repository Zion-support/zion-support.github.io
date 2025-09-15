<<<<<<< HEAD
import React from 'react',
import AdminLayout from '@/components/admin/AdminLayout',

export default function FeatureFlagsAdminPage() {
  const url = process.env.UNLEASH_URL || '',
=======
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

export default function FeatureFlagsAdminPage() {
  const url = process.env.UNLEASH_URL || '';
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Feature Flags</h1>
        <p>
          Manage flags in the{' '}
          <a href={url} className="text-blue-600 underline">
            Unleash admin UI
          </a>
          .
        </p>
      </div>
    </AdminLayout>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
