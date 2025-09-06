<<<<<<< HEAD


import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {ClientDashboard} from "../components/dashboard/ClientDashboard";
import {TalentDashboard} from "../components/dashboard/TalentDashboard";
import {useAuth} from "@/hooks/useAuth";
export function MobileHome() {;
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
  return (
=======


=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();

  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  return (

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { TalentDashboard } from "../components/dashboard/TalentDashboard",
import { useAuth } from "@/hooks/useAuth",
export function MobileHome() {
  const { user } = useAuth(),
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',
  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="min-h-screen">
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"}
        showNotifications
        showSettings
      />
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <main className="py-4">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
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

<<<<<<< HEAD
    <div className="min-h-screen">;
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"} 
        showNotifications 
        showSettings
      />;

      <main className="py-4">;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
      </main>;

      <BottomNavigation />;
    </div>;
  );
}
<<<<<<< HEAD
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
        show_notifications;
        show_settings;
      />;
      <main className="py - 4">;
        {is_client ? <ClientDashboard /> : <TalentDashboard />}
      </main>;
      <BottomNavigation />;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
