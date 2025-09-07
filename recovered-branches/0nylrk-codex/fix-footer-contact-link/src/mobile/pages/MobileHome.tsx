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
import { TalentDashboard } from "../components/dashboard/TalentDashboard";""
import { useAuth } from "@/hooks/useAuth";"
export function MobileHome() {
  const { user } = useAuth();
"
  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';'
  return (

'
import { TalentDashboard } from "../components/dashboard/TalentDashboard",""
import { useAuth } from "@/hooks/useAuth",")
export function MobileHome() {
  const { user } = useAuth(),"
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer','
  return ('
    <div className="min-h-screen">"
</div>
      <MobileHeader;"
        title={isClient ? "Client Dashboard" : "Talent Dashboard"}"
        showNotifications;
        showSettings;
      />
</MobileHeader>
"
      <main className="py-4">"
</main>
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
</ClientDashboard>
      </main>

      <BottomNavigation />
</BottomNavigation>
    </div>"
    <div className="min - h-screen">;"
</div>
      <MobileHeader;"
        title={is_client ? "Client Dashboard" : "Talent Dashboard"}"
        show_notifications;
        show_settings;
      />;
</MobileHeader>"
      <main className="py - 4">;"
</main>
        {is_client ? <ClientDashboard /> : <TalentDashboard />}
</ClientDashboard>
      </main>;
      <BottomNavigation />;
</BottomNavigation>)
    </div>);"
    <div className="min-h-screen">;"
</div>
      <MobileHeader ;"
        title={isClient ? "Client Dashboard" :"Talent Dashboard"} ;"
        showNotifications ;
        showSettings;
      />;
</MobileHeader>"
      <main className="py-4">;"
</main>
        {isClient ? <ClientDashboard /> :<TalentDashboard />}
</ClientDashboard>
      </main>;
      <BottomNavigation />;
</BottomNavigation>
    </div>;"
min-h-screen" > <MobileHeader showNotifications showSettings /> </main> <BottomNavigation /> </div>)"
</MobileHeader>"
    <div className="min-h-screen">;"
</div>
      <MobileHeader;"
        title={isClient ? "Client Dashboard" : "Talent Dashboard"} ;"
        showNotifications;
        showSettings;
      />;
</MobileHeader>"
      <main className="py-4">;"
</main>
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
</ClientDashboard>
      </main>
      <BottomNavigation />
</BottomNavigation>
    </div>"