<<<<<<< HEAD
import React from 'react';
import { MobileHeader } from '../components/common/MobileHeader';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { ClientDashboard } from '../components/dashboard/ClientDashboard';
import { TalentDashboard } from '../components/dashboard/TalentDashboard';
import { useAuth } from '@/hooks/useAuth';

export function MobileHome() {
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';

  return (
    <div className='min-h-screen'>
      <MobileHeader
        title={isClient ? 'Client Dashboard' : 'Talent Dashboard'}
        showNotifications
        showSettings
      />

      <main className='py-4'>
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
      </main>

      <BottomNavigation />
    </div>
  );
}
=======
 export function MobileHome () {
  const {
  user 
}= useAuth ();
const isClient = user?.userType === 'employer' || user?.userType === 'buyer';
min-h-screen" > <MobileHeader showNotifications showSettings /> </main> <BottomNavigation /> </div>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
