
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
=======
import React from "react";

export function MobileHome() {_const { user} = useAuth();
  const _isClient = user?.userType === 'employer' || user?.userType === 'buyer';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <div className=&quot;min-h-screen&quot;>
      <MobileHeader 
<<<<<<< HEAD
        title={isClient ? &quot;Client Dashboard&quot; : &quot;Talent Dashboard&quot;} 
=======
        title={_isClient ? "Client Dashboard" : "Talent Dashboard"} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        showNotifications 
        showSettings
      />
      
<<<<<<< HEAD
      <main className=&quot;py-4&quot;>
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
=======
      <main className="py-4">
        {_isClient ? <ClientDashboard /> : <TalentDashboard />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </main>
      
      <BottomNavigation />
    </div>
  )
}
