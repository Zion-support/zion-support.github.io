import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

interface TalentProfile {
  id: string;
  full_name: string;
  skills?: string[];
  availability_type?: string;
}

const TalentProfilePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  const [profile, setProfile] = useState<TalentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/talent/${id}`);
        if (res.status === 404) {
          setError('Talent not found');
          setProfile(null);
          return;
        }
        if (!res.ok) throw new Error('Failed to load profile');
        const data = await res.json();
        setProfile(data.profile);
      } catch (err) {
        setError('Talent not found');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProfile();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6" data-testid="profile-name">
            {profile.full_name}
          </h1>
          
          {profile.skills && profile.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {profile.availability_type && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Availability</h2>
              <p className="text-gray-600">{profile.availability_type}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default TalentProfilePage;