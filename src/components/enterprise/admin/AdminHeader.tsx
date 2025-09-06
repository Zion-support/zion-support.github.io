import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from '@/hooks/useCompanyWorkspace';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function AdminHeader() {
  // const { user } = useAuth(); // Unused but available
  const { company } = useCompanyWorkspace();

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>
            Enterprise Admin Dashboard
          </h1>
          <p className='text-muted-foreground mt-1'>
            Manage your company's account, team members, and subscription
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm' className='gap-2'>
            <Settings className='h-4 w-4' />
            Settings
          </Button>
          <Button variant='outline' size='sm' className='gap-2'>
            <Download className='h-4 w-4' />            Export Data
          </Button>
        </div>
      </div>
=======
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Export Data
          </Button>
        </div>
      </div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>Subscription Plan</div>
          <div className='text-xl font-medium'>
            {company?.plan || 'Enterprise'}
          </div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>Team Members</div>
          <div className='text-xl font-medium'>
            {company?.teamSize || 'Loading...'} / {company?.teamLimit || '∞'}
          </div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>Billing Cycle</div>
          <div className='text-xl font-medium'>
            {company?.billingCycle || 'Annual'}
          </div>
        </div>
      </div>

      <div className='bg-muted/50 rounded-lg p-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center'>
            <img
              src={company?.logoUrl || '/placeholder.svg'}
              alt={company?.name || 'Company'}
              className='max-h-10 max-w-10'
              loading='lazy'
            />
          </div>
          <div>
            <h2 className='font-medium'>{company?.name || 'Company Name'}</h2>
            <p className='text-sm text-muted-foreground'>
              Workspace URL: {company?.workspaceUrl || 'loading...'}            </p>
=======
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl || "loading..."}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
