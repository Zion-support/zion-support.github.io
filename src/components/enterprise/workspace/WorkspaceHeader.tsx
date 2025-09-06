interface WorkspaceHeaderProps {
  company: Company;

export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border'>
            <img

            />
          </div>
          <div>
            <h1 className='text-3xl font-bold tracking-tight'>
              {company.name} Workspace
            </h1>
            <p className='text-muted-foreground'>              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>

              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );