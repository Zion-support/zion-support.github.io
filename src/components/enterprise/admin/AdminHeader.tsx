

import React from "react",
import { Button } from "@/components/ui/button";
import { Download, Settings } from 'lucide-react'

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your company's account, team members, and subscription
          </p>

        </div>
        <div className="flex items-center gap-2">

          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>

          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
=======
import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from '@/hooks/useCompanyWorkspace';
export function AdminHeader() {;
  // const { user } = useAuth(); // Unused but available
  const { company } = useCompanyWorkspace()



import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Settings } from 'lucide-react'
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";

export function AdminHeader() { // const { user  } = useAuth(), // Unused but available
  const { company  } = useCompanyWorkspace(),





  return (
    <div className="space-y-4">
          <Button variant='outline' size='sm' className='gap-2'>
            <Download className='h-4 w-4' />            Export Data
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
          </Button>
        </div>
      </div>        <div className="flex items-center gap-2">

      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img

              className="max-h-10 max-w-10"

            <h2 className="font-medium">{company?.name || "Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl || "loading..."}

            </p>
<<<<<<< HEAD
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
    </div>
  )
