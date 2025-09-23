import React from 'react';
// Next.js routing - no need for react-router-dom
import TalentDirectory from '@/pages/TalentDirectory';
import TalentsPage from '@/pages/TalentsPage';
export default function TalentRoutes(props: any) {
    return (<>
      <Route path="directory" element={<TalentDirectory  />}/>
      <Route path="list" element={<TalentsPage  />}/>
    </>);
}
