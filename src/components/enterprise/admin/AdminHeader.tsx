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
          </Button>
        </div>
      </div>        <div className="flex items-center gap-2">

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Subscription Plan</div>
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>

        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Team Members</div>
          <div className="text-xl font-medium">{company?.teamSize |"Loading..."} / {company?.teamLimit |"∞"}</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Billing Cycle</div>
          <div className="text-xl font-medium">{company?.billingCycle |"Annual"}</div>
        </div>
      </div>


              src={company?.logoUrl || "/placeholder.svg"}
              alt={company?.name || "Company"}

              className="max-h-10 max-w-10"




            <h2 className="font-medium">{company?.name || "Company Name"}</h2>
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl || "loading..."}
            </p>

    <div className='space-y-4'>;
      <div className='flex items-center justify-between'>;

;

;
