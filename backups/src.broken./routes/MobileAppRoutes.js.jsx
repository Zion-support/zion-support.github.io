import React from 'react';
// Next.js routing - no need for react-router-dom
import MobileLaunchPage from '@/pages/MobileLaunchPage';
export default function MobileAppRoutes() {
    return (<>
      <Route path="launch" element={<MobileLaunchPage />}/>
    </>);
}
