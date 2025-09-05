
import React from &quot;react&quot;;
import { MobileHeader } from &quot;../components/common/MobileHeader&quot;;
import { BottomNavigation } from &quot;../components/common/BottomNavigation&quot;;
import { ClientDashboard } from &quot;../components/dashboard/ClientDashboard&quot;;
import { TalentDashboard } from &quot;../components/dashboard/TalentDashboard&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;

export function MobileHome() {
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';
  
  return (
    <div className=&quot;min-h-screen&quot;>
      <MobileHeader 
        title={isClient ? &quot;Client Dashboard&quot; : &quot;Talent Dashboard&quot;} 
        showNotifications 
        showSettings
      />
      
      <main className=&quot;py-4&quot;>
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
      </main>
      
      <BottomNavigation />
    </div>
  );
}
