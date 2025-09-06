<<<<<<< HEAD
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

export default function FeatureFlagsAdminPage() {
  const url = process.env.UNLEASH_URL || '';
  return (
    <AdminLayout>
      <div className='space-y-4'>
        <h1 className='text-2xl font-bold'>Feature Flags</h1>
        <p>
          Manage flags in the{' '}
          <a href={url} className='text-blue-600 underline'>
            Unleash admin UI
          </a>
          .
        </p>
      </div>
    </AdminLayout>
  );
}
=======
 return (<AdminLayout> <div className="space-y-4" > <h1 className="text-2xl font-bold" >Feature Flags</h1> <p> Manage flags in the {
  ' ' 
}Unleash admin UI </Link> . </p> </div> </AdminLayout>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
