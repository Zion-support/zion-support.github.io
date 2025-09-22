
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",
import React from "react";
import { MobileHeader } from "../components/common/MobileHeader";
import { BottomNavigation } from "../components/common/BottomNavigation";
import { ClientDashboard } from "../components/dashboard/ClientDashboard";

import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';
  const isClient = user?.userType === "employer" || user?.userType === "buyer";

import React from "react",
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';import React from "react",
  const isClient = user?.userType === "employer" || user?.userType === "buyer";

import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",

  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { ClientDashboard } from "../components/dashboard/ClientDashboard",;
import { TalentDashboard } from "../components/dashboard/TalentDashboard";

"
import React from "react","
import { MobileHeader } from "../components/common/MobileHeader","
import { BottomNavigation } from "../components/common/BottomNavigation","
import { ClientDashboard } from "../components/dashboard/ClientDashboard",";
import { TalentDashboard } from "../components/dashboard/TalentDashboard";"
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {};
  const { user } = useAuth();

  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';
  return (


import { TalentDashboard } from "../components/dashboard/TalentDashboard",
"
import { TalentDashboard } from "../components/dashboard/TalentDashboard","
import { useAuth } from "@/hooks/useAuth",
export function MobileHome() {}
  const { user } = useAuth(),'
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',

  return (
    <div className="min-h-screen">
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"}
        showNotifications
        showSettings
      />

      <main className="py-4">
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
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"} 
        showNotifications 
        showSettings
      />;

      <main className="py-4">;

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

<main className="py-4">
        {isClient ? <ClientDashboard /> : <TalentDashboard />}

      <BottomNavigation />
</div>
  );
}
import React from './react';
import { MobileHeader } from '../components / common / MobileHeader';
import { BottomNavigation } from '../components / common / BottomNavigation';
import { ClientDashboard } from '../components / dashboard / ClientDashboard';
import { TalentDashboard } from '../components / dashboard / TalentDashboard';
import { use_auth } from '@/hooks / use_auth';
export /**
 * MobileHome - Function description
 */
function MobileHome() {
  const { user } = use_auth ();
  const is_client = user?.user_type === 'employer' || user?.user_type === 'buyer';
;
  return (
    <div className="min - h-screen">;
      <MobileHeader;
        title={is_client ? "Client Dashboard" : "Talent Dashboard"}
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
      />

  return ("
    <div className="min-h-screen">
      <MobileHeader";
        title={isClient ? "Client Dashboard" : "Talent Dashboard"};
        showNotifications;
        showSettings;
      />

'"

    </div>;"
min-h-screen" > <MobileHeader showNotifications showSettings /> </main> <BottomNavigation /> </div>)"
        title={isClient ? "Client Dashboard" : "Talent Dashboard"} ;"

pr-12325
