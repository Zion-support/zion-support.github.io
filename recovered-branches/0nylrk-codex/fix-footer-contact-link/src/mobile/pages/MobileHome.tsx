
import React from "react";
import { MobileHeader } from "../components/common/MobileHeader";
import { BottomNavigation } from "../components/common/BottomNavigation";
import { ClientDashboard } from "../components/dashboard/ClientDashboard";

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




        show_notifications;
        show_settings;
      />;
      <main className="py - 4">;"
        {is_client ? <ClientDashboard /> : <TalentDashboard />}

      </main>;
      <BottomNavigation />;
    </div>);
}





