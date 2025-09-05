
import React from "react";

export function MobileHome() {_const { user} = useAuth();
  const _isClient = user?.userType === 'employer' || user?.userType === 'buyer';
  
  return (
    <div className="min-h-screen">
      <MobileHeader 
        title={_isClient ? "Client Dashboard" : "Talent Dashboard"} 
        showNotifications 
        showSettings
      />
      
      <main className="py-4">
        {_isClient ? <ClientDashboard /> : <TalentDashboard />}
      </main>
      
      <BottomNavigation />
    </div>
  );
}
