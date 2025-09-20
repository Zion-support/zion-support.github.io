import React from 'react',
import { Button } from '@/components/ui/button',

export default function Page() {
 / {company?.teamLimit || '∞'}
          </div>
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Billing Cycle</div>"
          <div className="text-xl font-medium">
            {company?.billingCycle || 'Annual'}
          </div>
        </div>
      </div>
"
      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">"
        <div className="flex items-center gap-4">"
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center">
            <img"
              loading="lazy"'
              src={company?.logoUrl || '/placeholder.svg'}
              alt={company?.name || 'Comp'}"
              className="max-h-10 max-w-10"
            />
          </div>
          <div>'"
            <h2 className="font-medium">{company?.name || 'Comp Name'}</h2>"
            <p className="text-sm text-muted-foreground">
              Workspace URL: {company?.workspaceUrl || 'loading...'}
            </p>
          </div>
        </div>
        <Button>Customize Workspace</Button>
      </div>
    </div>
  ),
}
'"