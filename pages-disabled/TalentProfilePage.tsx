import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TalentProfile } from "../components/profile/TalentProfile";
import { ProfileLoadingState } from "../components/profile/ProfileLoadingState";

export default function TalentProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Talent Profile</h1>
        
        <div className="bg-white rounded-lg p-8">
          <p>Talent profile content will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}