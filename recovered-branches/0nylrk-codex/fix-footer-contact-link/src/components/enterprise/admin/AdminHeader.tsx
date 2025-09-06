
export function AdminHeader() {;
  const { user } = useAuth();
  const { company } = useCompanyWorkspace();
import React from "react",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Download, Settings } from "lucide-react",
import { useCompanyWorkspace } from "@/hooks/useCompanyWorkspace",
export function AdminHeader() {
  const { user } = useAuth(),
  const { company } = useCompanyWorkspace(),

  return (
            Export Data;
          </Button>;
        </div>;
      </div>;
}
