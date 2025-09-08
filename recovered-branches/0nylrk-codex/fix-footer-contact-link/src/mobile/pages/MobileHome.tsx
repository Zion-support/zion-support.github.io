<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react";
import { MobileHeader } from "../components/common/MobileHeader";
import { BottomNavigation } from "../components/common/BottomNavigation";
import { ClientDashboard } from "../components/dashboard/ClientDashboard";

import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();
  const isClient = user?.userType === "employer" || user?.userType === "buyer";

=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth($2);
  const isClient = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user } = useAuth();

  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';

import { TalentDashboard } from "../components/dashboard/TalentDashboard",

import { useAuth } from "@/hooks/useAuth",

<<<<<<< HEAD
=======
  return (

  return (

>>>>>>> origin/cursor/delete-old-data-records-6bba

    <div className="min-h-screen">
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"}
        showNotifications
        showSettings

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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




=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
