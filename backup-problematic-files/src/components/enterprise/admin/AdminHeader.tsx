
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Download, Settings } from 'lucide-react';
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace";"
;
export function AdminHeader() {;
  // const { user } = useAuth(), // Unused but available;
  const { company } = useCompanyWorkspace(),;
  return (;"
    <div className="space-y-4">;"
</div>"
      <div className="flex items-center justify-between">;"
</div>
        <div>;
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Admin Dashboard</h1>;""
          <p className="text-muted-foreground mt-1">;"
</p>
          </p>;
        </div>;"
        <div className="flex items-center gap-2">;"
          <Button variant="outline" size="sm" className="gap-2">;"
"
            <Settings className="h-4 w-4" />;"

          ;"
            <Download className="h-4 w-4" />;"

        </div>;
<div className="flex items-center gap-2">;
          <Button variant="outline" size="sm" className="gap-2">;
            <Settings className="h-4 w-4" />;
            Settings;
          </Button>;
          <Button variant="outline" size="sm" className="gap-2">;
            <Download className="h-4 w-4" />;
              loading="lazy";
            />;
          </div>;
          <div>;
