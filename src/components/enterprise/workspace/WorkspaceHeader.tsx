=======
import React from 'react';
import { Button } from '@/components/ui/button';
import { type Company } from './CompanyDashboard';
import { Bell, Users, Settings } from 'lucide-react';
interface WorkspaceHeaderProps {;
import { Bell, Users, Settings } from 'lucide-react'
interface WorkspaceHeaderProps {
  company: Company
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  company: Company;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import { Bell, Users, Settings } from 'lucide-react'
interface WorkspaceHeaderProps {
  company: Company
=======
}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
    <div className='space-y-6'>;
      <div className='flex items-center justify-between'>;
        <div className='flex items-center gap-4'>;
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border'>;
            <img
              src={company.logoUrl |'/placeholder.svg'}
              src={company.logoUrl || '/placeholder.svg'}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              alt={company.name}
              className='max-h-10 max-w-10'
              loading='lazy'            />
          </div>
          <div>
            <h1 className='text-3xl font-bold tracking-tight'>
              {company.name} Workspace
            </h1>
            <p className='text-muted-foreground'>              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
            <p className="text-muted-foreground">

import React from "react";
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
import { Bell, Users, Settings } from 'lucide-react'
interface WorkspaceHeaderProps {
  company: Company
interface WorkspaceHeaderProps {
xport function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
ursor/fix-website-loading-errors-and-merge-6662
              src={company.logoUrl |"/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>

              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>


        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Active Job Listings
          </div>
          <div className='text-2xl font-medium'>8</div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Candidate Applications
          </div>
          <div className='text-2xl font-medium'>47</div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Interviews Scheduled
          </div>
          <div className='text-2xl font-medium'>12</div>        </div>
      </div>
    </div>
  )
}          </Button>
import React from "react",;
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard";
import { Bell, Users, Settings } from 'lucide-react';
interface WorkspaceHeaderProps {;
  company: Company;
}
;
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {;
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
            <img
              src={company.logoUrl |"/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
              loading="lazy"
            />
          </div>
          <div>


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
            <p className="text-muted-foreground">
              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>
<<<<<<< HEAD
          <Button variant="outline" size="icon" aria-label="Team members">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Workspace settings">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Active Job Listings</div>
          <div className="text-2xl font-medium">8</div>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Candidate Applications
          </div>
          <div className='text-2xl font-medium'>47</div>
        </div>
        <div className='bg-card rounded-lg p-4 border border-border'>
          <div className='text-sm text-muted-foreground'>
            Interviews Scheduled
          </div>
          <div className='text-2xl font-medium'>12</div>        </div>
      </div>
    </div>
  )
}          </Button>
          <Button variant="outline" size="icon" aria-label="Team members">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Workspace settings">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Active Job Listings</div>
          <div className="text-2xl font-medium">8</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Candidate Applications</div>
          <div className="text-2xl font-medium">47</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>
          <div className="text-2xl font-medium">12</div>
        </div>
      </div>
    </div>;
  );
};

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

<<<<<<< HEAD
