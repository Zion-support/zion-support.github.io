import React from "react",""
import { Button } from "@/components/ui/button";""
import { Download, Settings } from 'lucide-react'''
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";"
export function AdminHeader() {
  // const { user } = useAuth(), // Unused but available;
  const { company } = useCompanyWorkspace();
  return (

"
import React from "react";""
import { Button } from "@/components/ui/button";""
import { Download, Settings } from 'lucide-react'''
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";")
export function AdminHeader() { // const { user  } = useAuth(), // Unused but available;
  const { company  } = useCompanyWorkspace(),





  return ("
    <div className="space-y-4">"
</div>"
      <div className="flex items-center justify-between">"
</div>
        <div>
</div>"
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>""
          <p className="text-muted-foreground mt-1">"
</p>
          </p>

        </div>"
        <div className="flex items-center gap-2">"
</div>"
          <Button variant="outline" size="sm" className="gap-2">"
</Button>"
            <Settings className="h-4 w-4" />"
</Settings>
          </Button>



"
          <Button variant="outline" size="sm" className="gap-2">"
</Button>"
            <Download className="h-4 w-4" />"
</Download>
          </Button>
        </div>
      </div>

      "
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
</div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
</div>"
          <div className="text-sm text-muted-foreground">Subscription Plan</div>""
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>"
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
</div>"
          <div className="text-sm text-muted-foreground">Team Members</div>""
          <div className="text-xl font-medium">{company?.teamSize |"Loading..."} / {company?.teamLimit |"∞"}</div>"
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
</div>"
          <div className="text-sm text-muted-foreground">Billing Cycle</div>""
          <div className="text-xl font-medium">{company?.billingCycle |"Annual"}</div>"
        </div>
      </div>
"
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">"
</div>"
        <div className="flex items-center gap-4">"
</div>"
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">"
</div>
            <img;"
              src={company?.logoUrl || "/placeholder.svg"}""
              alt={company?.name || "Company"}""
              className="max-h-10 max-w-10"""
              loading="lazy""
            />
</img>
          </div>
          <div>
</div>

      "
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
</div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
</div>"
          <div className="text-sm text-muted-foreground">Subscription Plan</div>""
          <div className="text-xl font-medium">{company?.plan || "Enterprise"}</div>"
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
</div>"
          <div className="text-sm text-muted-foreground">Team Members</div>""
          <div className="text-xl font-medium">{company?.teamSize || "Loading..."} / {company?.teamLimit || "∞"}</div>"
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
</div>"
          <div className="text-sm text-muted-foreground">Billing Cycle</div>""
          <div className="text-xl font-medium">{company?.billingCycle || "Annual"}</div>"
        </div>
      </div>
      
"
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">"
</div>"
        <div className="flex items-center gap-4">"
</div>"
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">"
</div>
            <img;"
              src={company?.logoUrl || "/placeholder.svg"}""
              alt={company?.name || "Company"}""
              className="max-h-10 max-w-10"""
              loading="lazy""
            />
</img>
          </div>
          <div>
</div>



"
            <h2 className="font-medium">{company?.name || "Company Name"}</h2>""
            <p className="text-sm text-muted-foreground">"
</p>
            </p>
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
    </div>
"
    <div className='space-y-4'>;'
</div>'
      <div className='flex items-center justify-between'>;'
</div>'
    <div className="space-y-4">;"
</div>"
      <div className="flex items-center justify-between">;"
</div>
        <div>;
</div>"
          <h1 className='text-3xl font-bold tracking-tight'>;'
</h1>
          </h1>;'
          <p className='text-muted-foreground mt-1'>;'
</p>
          </p>;
        </div>;'
        <div className='flex items-center gap-2'>;'
</div>'
          <Button variant='outline' size='sm' className='gap-2'>;'
</Button>'
            <Settings className='h-4 w-4' />;'
</Settings>
          </Button>;'
          <Button variant='outline' size='sm' className='gap-2'>;'
</Button>'
            <Download className='h-4 w-4' />            Export Data;'
</Download>
          </Button>;
        </div>;'
      </div>        <div className="flex items-center gap-2">;"
</div>"
          <Button variant="outline" size="sm" className="gap-2">;"
</Button>"
            <Settings className="h-4 w-4" />;"
</Settings>
          </Button>;"
          <Button variant="outline" size="sm" className="gap-2">;"
</Button>"
            <Download className="h-4 w-4" />;"
</Download>"
    <div className='space - y-4'>;'
</div>'
      <div className='flex items - center justify - between'>;'
</div>
        <div>;
</div>'
          <h1 className='text - 3xl font - bold tracking - tight'>;'
</h1>
          </h1>;'
          <p className='text - muted - foreground mt - 1'>;'
</p>
          </p>;
        </div>;'
        <div className='flex items - center gap - 2'>;'
</div>'
          <Button variant='outline' size='sm' className='gap - 2'>;'
</Button>'
            <Settings className='h - 4 w - 4' />;'
</Settings>
          </Button>;'
          <Button variant='outline' size='sm' className='gap - 2'>;'
</Button>'
            <Download className='h - 4 w - 4' />            Export Data;'
</Download>
          </Button>;
        </div>;'
      </div>        <div className="flex items - center gap - 2">;"
</div>"
          <Button variant="outline" size="sm" className="gap - 2">;"
</Button>"
            <Settings className="h - 4 w - 4" />;"
</Settings>
          </Button>;"
          <Button variant="outline" size="sm" className="gap - 2">;"
</Button>"
            <Download className="h - 4 w - 4" />;"
</Download>
          </Button>;
        </div>;
      </div>;"
      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;'
</div>'
        <div className='bg - card rounded - lg p - 4 border border - border'>;'
</div>'
          <div className='text - sm text - muted - foreground'>Subscription Plan</div>;''
          <div className='text - xl font - medium'>;'
</div>
          </div>;
        </div>;'
        <div className='bg - card rounded - lg p - 4 border border - border'>;'
</div>'
          <div className='text - sm text - muted - foreground'>Team Members</div>;''
          <div className='text - xl font - medium'>;'
</div>
          </div>;
        </div>;'
        <div className='bg - card rounded - lg p - 4 border border - border'>;'
</div>'
          <div className='text - sm text - muted - foreground'>Billing Cycle</div>;''
          <div className='text - xl font - medium'>;'
</div>
          </div>;
        </div>;
      </div>;'
      <div className='bg - muted / 50 rounded - lg p - 4 flex items - center justify - between'>;'
</div>'
        <div className='flex items - center gap - 4'>;'
</div>'
          <div className='h - 12 w - 12 rounded - lg bg - card flex items - center justify - center'>;'
</div>
            <img;'
              src={company?.logo_url || '/placeholder.svg'}''
              alt={company?.name || 'Company'}''
              className='max - h-10 max - w-10';''
              loading='lazy'            />;'
</img>
          </div>;
          <div>;
</div>'
            <h2 className='font - medium'>{company?.name || 'Company Name'}</h2>;''
            <p className='text - sm text - muted - foreground'>;'
</p>'
              Workspace URL: {company?.workspace_url || 'loading...'}            </p>;''
            <h2 className="font - medium">{company?.name || "Company Name"}</h2>;""
            <p className="text - sm text - muted - foreground">;"
</p>
        </div>;"
        <div className="bg - card rounded - lg p - 4 border border - border">;"
</div>"
          <div className="text - sm text - muted - foreground">Team Members</div>;""
          <div className="text - xl font - medium">{company?.team_size || "Loading..."} / {company?.team_limit || "∞"}</div>;"
        </div>;"
        <div className="bg - card rounded - lg p - 4 border border - border">;"
</div>"
          <div className="text - sm text - muted - foreground">Billing Cycle</div>;""
          <div className="text - xl font - medium">{company?.billing_cycle || "Annual"}</div>;"
        </div>;
      </div>;"
      <div className="bg - muted / 50 rounded - lg p - 4 flex items - center justify - between">;"
</div>"
        <div className="flex items - center gap - 4">;"
</div>"
          <div className="h - 12 w - 12 rounded - lg bg - card flex items - center justify - center">;"
</div>
            <img;"
              src={company?.logo_url || "/placeholder.svg"}""
              alt={company?.name || "Company"}""
              className="max - h-10 max - w-10";""
              loading="lazy";"
            />;
</img>
          </div>;
          <div>;
</div>"
            <h2 className="font - medium">{company?.name || "Company Name"}</h2>;""
            <p className="text - sm text - muted - foreground">;"
</p>
            </p>;
          </div>;
        </div>;
        <Button > Customize Workspace</Button>;
      </div>;)
    </div>);"