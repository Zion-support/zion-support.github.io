
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",
import { TalentDashboard } from "../components/dashboard/TalentDashboard",
import { useAuth } from "@/hooks/useAuth",
=======
import React from &quot;react&quot;;
import { MobileHeader } from &quot;../components/common/MobileHeader&quot;;
import { BottomNavigation } from &quot;../components/common/BottomNavigation&quot;;
import { ClientDashboard } from &quot;../components/dashboard/ClientDashboard&quot;;
import { TalentDashboard } from &quot;../components/dashboard/TalentDashboard&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function MobileHome() {
  const { user } = useAuth(),
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',
  
  return (
    <div className=&quot;min-h-screen&quot;>
      <MobileHeader 
        title={isClient ? &quot;Client Dashboard&quot; : &quot;Talent Dashboard&quot;} 
        showNotifications 
        showSettings
      />
      
      <main className=&quot;py-4&quot;>
=======
import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { ClientDashboard } from "../components/dashboard/ClientDashboard",;
import { TalentDashboard } from "../components/dashboard/TalentDashboard",;
import { useAuth } from "@/hooks/useAuth",;
export function MobileHome() {;
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';
  return (;
    <div className="min-h-screen">;
      <MobileHeader;
        title={isClient ? "Client Dashboard" : "Talent Dashboard"} ;
        showNotifications;
        showSettings;
      />;
      <main className="py-4">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
      </main>;
      <BottomNavigation />;
    </div>;
  );
}
;