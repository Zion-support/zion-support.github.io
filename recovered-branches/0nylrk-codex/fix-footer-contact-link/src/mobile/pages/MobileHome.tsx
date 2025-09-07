
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();

  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { ClientDashboard } from "../components/dashboard/ClientDashboard",;
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();

  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';


  return (

import { TalentDashboard } from "../components/dashboard/TalentDashboard",
import { useAuth } from "@/hooks/useAuth",
import { TalentDashboard } from "../components/dashboard/TalentDashboard",;
import { useAuth } from "@/hooks/useAuth",;
export function MobileHome() {
  const { user } = useAuth(),
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',
  return (
    <div className="min-h-screen">
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"}
        showNotifications
        showSettings
      />
import React from "react";""
import { MobileHeader } from "../components/common/MobileHeader";""
import { BottomNavigation } from "../components/common/BottomNavigation";""
import { ClientDashboard } from "../components/dashboard/ClientDashboard";""
import { TalentDashboard } from "../components/dashboard/TalentDashboard";""
import { useAuth } from "@/hooks/useAuth";"
export function MobileHome() {
  const { user } = useAuth();"
  const isClient = user?.userType === "employer" || user?.userType === "buyer";""
import React from "react",""
import { MobileHeader } from "../components/common/MobileHeader",""
import { BottomNavigation } from "../components/common/BottomNavigation",""
import { ClientDashboard } from "../components/dashboard/ClientDashboard",""
  const { user } = useAuth();
"
  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';
  return (


import { TalentDashboard } from "../components/dashboard/TalentDashboard",""
import { useAuth } from "@/hooks/useAuth",")
  const { user } = useAuth(),"
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',
    <div className="min-h-screen">"
</div>
      <MobileHeader;"
        title={isClient ? "Client Dashboard" : "Talent Dashboard"}"
        showNotifications;
        showSettings;
      />

      <main className="py-4">"
</main>
        {isClient ? <ClientDashboard /> : <TalentDashboard />}


      <BottomNavigation />

    </div>"
    <div className="min - h-screen">;"
        title={is_client ? "Client Dashboard" : "Talent Dashboard"}"
        show_notifications;
        show_settings;
      />;
      <main className="py - 4">;"
        {is_client ? <ClientDashboard /> : <TalentDashboard />}

      </main>;
      <BottomNavigation />;
    </div>);
}
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
)
    </div>);"
    <div className="min-h-screen">;"
      <MobileHeader ;"
        title={isClient ? "Client Dashboard" :"Talent Dashboard"} ;"
        showNotifications ;
      <main className="py-4">;"
        {isClient ? <ClientDashboard /> :<TalentDashboard />}
      </main>;
      ;
      <BottomNavigation />;
    </div>;
  ),;}
 export function MobileHome () {
  const {
  user 
}= useAuth ();
const isClient = user?.userType === 'employer' || user?.userType === 'buyer';
min-h-screen" > <MobileHeader showNotifications showSettings /> </main> <BottomNavigation /> </div>) 
}
    <div className="min-h-screen">;
      <MobileHeader;
        title={isClient ? "Client Dashboard" : "Talent Dashboard"} ;
        showNotifications;
        showSettings;
      />;
      <main className="py-4">;
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
      </main>
      <BottomNavigation />
    </div>
  )
}


    </div>;"
min-h-screen" > <MobileHeader showNotifications showSettings /> </main> <BottomNavigation /> </div>)"
        title={isClient ? "Client Dashboard" : "Talent Dashboard"} ;"

pr-12325
