import React from "react";
import { MobileHeader } from "../components/common/MobileHeader";
import { BottomNavigation } from "../components/common/BottomNavigation";
import { ClientDashboard } from "../components/dashboard/ClientDashboard";
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();
<<<<<<< HEAD
  const isClient = user?.userType === "employer" || user?.userType === "buyer";


import React from "react",
=======
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';import React from "react",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();

  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';

  return (

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { TalentDashboard } from "../components/dashboard/TalentDashboard",
import { useAuth } from "@/hooks/useAuth",
export function MobileHome() {
  const { user } = useAuth(),
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',
  
<<<<<<< HEAD
  return (
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <div className="min-h-screen">
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"}
        showNotifications
        showSettings
<<<<<<< HEAD
      />

      <main className="py-4">
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
      </main>

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
      <main className="py - 4">;
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
=======
      />
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
