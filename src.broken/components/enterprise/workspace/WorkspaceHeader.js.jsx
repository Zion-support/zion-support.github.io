import React from 'react';
import { Button } from '@/components/ui/button';
export default function Page() {
 Workspace
            </h1>"
            <p className="text-muted-foreground">
              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>
"
        <div className="flex items-center gap-2">"
          <Button variant="outline" size="icon" >"
            <Bell className="h-4 w-4" />
          </Button>"
          <Button variant="outline" size="icon" >"
            <Users className="h-4 w-4" />
          </Button>"
          <Button variant="outline" size="icon" >"
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
"
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">
            Active Job Listings
          </div>"
          <div className="text-2xl font-medium">8</div>
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">
            Candidate Applications
          </div>"
          <div className="text-2xl font-medium">47</div>
        </div>"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">
            Interviews Scheduled
          </div>"
          <div className="text-2xl font-medium">12</div>
        </div>
      </div>
    </div>
  );
}
'"