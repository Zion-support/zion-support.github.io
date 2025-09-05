
<<<<<<< HEAD
import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { ClientDashboard } from "../components/dashboard/ClientDashboard",;
import { TalentDashboard } from "../components/dashboard/TalentDashboard",;
import { useAuth } from "@/hooks/useAuth",;
;
export function MobileHome() {;
  const { user } = useAuth(),;
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',;
  ;
  return (;
    <div className="min-h-screen">;
      <MobileHeader ;
        title={isClient ? "Client Dashboard" :"Talent Dashboard"} ;
        showNotifications ;
        showSettings;
      />;
      ;
      <main className="py-4">;
        {isClient ? <ClientDashboard /> :<TalentDashboard />}
      </main>;
      ;
      <BottomNavigation />;
    </div>;
  ),;
=======
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",
import { TalentDashboard } from "../components/dashboard/TalentDashboard",
import { useAuth } from "@/hooks/useAuth",export function MobileHome() {
  const { user } = useAuth(),
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',
import React from "react";

export function MobileHome() {_const { user} = useAuth();
  const _isClient = user?.userType === 'employer' || user?.userType === 'buyer';
  
  return (
    <div className=&quot;min-h-screen&quot;>
      <MobileHeader 
        title={isClient ? &quot;Client Dashboard&quot; : &quot;Talent Dashboard&quot;}         showNotifications 
        showSettings
      />
      
      <main className=&quot;py-4&quot;>
        {isClient ? <ClientDashboard /> : <TalentDashboard />}      </main>
      
      <BottomNavigation />
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
