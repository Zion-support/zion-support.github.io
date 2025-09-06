
<<<<<<< HEAD
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {ClientDashboard} from "../components/dashboard/ClientDashboard";
import {TalentDashboard} from "../components/dashboard/TalentDashboard";
import {useAuth} from "@/hooks/useAuth";
export function MobileHome() {;
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { ClientDashboard } from "../components/dashboard/ClientDashboard",
<<<<<<< HEAD
import { TalentDashboard } from "../components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";
export function MobileHome() {
  const { user } = useAuth();

  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';

  return (
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';

  return (
    <div className="min-h-screen">
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"}
        showNotifications
        showSettings
      />
      <main className="py-4">
<<<<<<< HEAD
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
      <MobileHeader
        title={isClient ? "Client Dashboard" : "Talent Dashboard"} 
        showNotifications 
        showSettings
      />;

      <main className="py-4">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
      </main>
      <BottomNavigation />
    </div>
  )
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
