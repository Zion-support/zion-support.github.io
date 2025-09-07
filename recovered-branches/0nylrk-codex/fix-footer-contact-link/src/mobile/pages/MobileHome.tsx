<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import { MobileHeader } from "../components/common/MobileHeader";
import { BottomNavigation } from "../components/common/BottomNavigation";
import { ClientDashboard } from "../components/dashboard/ClientDashboard";

<<<<<<< HEAD
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();

  const isClient = user?.userType === "employer" || user?.userType === "buyer";

import React from "react",

import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",

import { TalentDashboard } from "../components/dashboard/TalentDashboard";

import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {};
=======
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();

  const isClient = user?.userType === "employer" || user?.userType === "buyer";

import React from "react",

import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",

import { TalentDashboard } from "../components/dashboard/TalentDashboard";

import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {};
  const { user } = useAuth();

  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';

import { TalentDashboard } from "../components/dashboard/TalentDashboard",

import { useAuth } from "@/hooks/useAuth",

<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
<<<<<<< HEAD
  const { user } = useAuth($2);
  const isClient = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { user } = useAuth();

  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';

import { TalentDashboard } from "../components/dashboard/TalentDashboard",

import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD

  return (

=======
export function MobileHome() {
  const { user } = useAuth(),
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',
  
=======
>>>>>>> merged-prs-20250907-203621
  return (

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="min-h-screen">
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"}
        showNotifications
        showSettings
<<<<<<< HEAD

      <main className="py-4">
=======
<<<<<<< HEAD

=======
      />
<<<<<<< HEAD
      <main className="py-4">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <main className="py-4">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
        show_notifications;
        show_settings;
      />;
      <main className="py - 4">;"
        {is_client ? <ClientDashboard /> : <TalentDashboard />}

      </main>;
      <BottomNavigation />;
    </div>);
}

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
)
    </div>);"
    <div className="min-h-screen">;"
      <MobileHeader ;"
        title={isClient ? "Client Dashboard" :"Talent Dashboard"} ;"
        showNotifications ;
      <main className="py-4">;"
=======
        showNotifications ;
        showSettings;
      />;
      ;
      <main className="py-4">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
=======
=======
    <div className="min-h-screen">;
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"} 
        showNotifications 
        showSettings
      />;

      <main className="py-4">;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
      </main>;

      <BottomNavigation />;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        show_notifications;
        show_settings;
      />;
      <main className="py - 4">;"
        {is_client ? <ClientDashboard /> : <TalentDashboard />}

      </main>;
      <BottomNavigation />;
    </div>);
}
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
