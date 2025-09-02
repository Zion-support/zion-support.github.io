import React, { useState, useEffect } from 'react';'
import { useParams } from 'react-router-dom';'
import SEO from '@/components/SEO';'
import { ProfileLoadingState } from '@/components/profile/ProfileLoadingState';'
import { ProfileErrorState } from '@/components/profile/ProfileErrorState';
export { function };
export default function TalentProfilePage() {}
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
<<<<<<< HEAD:pages.disabled/pages/talent/[id].jsx
    useEffect(() => {
        const fetchProfile = async () => {
            if (!id) {
'
=======
    useEffect(() => {}
        const fetchProfile = async () => {}
            if (!id) {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/talent/[id].jsx
                setError('Profile not found');
                setLoading(false);
                return;

            try {}
                const res = await fetch(`/api/talent/${id}`);
                if (!res.ok)'
                    throw new Error('Failed to load profile');
                const data = await res.json();
                setProfile(data.profile);

<<<<<<< HEAD:pages.disabled/pages/talent/[id].jsx
            catch (err) {
'
=======
            catch (err) {}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/talent/[id].jsx
                setError('Profile not found');

            finally {}
                setLoading(false);

        };
        fetchProfile();
    }, [id]);
    if (loading)
        return <ProfileLoadingState />;
    if (error || !profile)'
        return <ProfileErrorState error={error || 'Profile not found'}/>;
    return (<>'
      <SEO title={profile.full_name} description={profile.bio || ''}/>
      <main className="min-h-screen bg-zion-blue py-8 text-white">""
        <div className="container mx-auto px-4 space-y-4">""
          <h1 className="text-3xl font-bold" data-testid="profile-name">
            {profile.full_name}
          </h1>
          {profile.bio && <p>{profile.bio}</p>}
<<<<<<< HEAD:pages.disabled/pages/talent/[id].jsx
          {profile.hourly_rate && <p>Hourly Rate: ${profile.hourly_rate}/hr</p>}"
=======
          {profile.hourly_rate && <p>Hourly Rate: ${profile.hourly_rate}/hr</p>}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/talent/[id].jsx
          {profile.skills && (<div>""
              <h2 className="font-semibold">Skills</h2>""
              <ul className="list-disc ml-5">
                {profile.skills.map(skill => (<li key={skill}>{skill}</li>))}
              </ul>
<<<<<<< HEAD:pages.disabled/pages/talent/[id].jsx
            </div>)}"
          {profile.social && (<div>""
              <h2 className="font-semibold">Social Links</h2>""
              <ul className="list-disc ml-5">"
=======
            </div>)}
          {profile.social && (<div>""
              <h2 className="font-semibold">Social Links</h2>""
              <ul className="list-disc ml-5">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a:src/pages/talent/[id].jsx
                {Object.entries(profile.social).map(([platform, url]) => (<li key={platform}>""
                    <a href={url} className="text-zion-cyan" target="_blank" rel="noopener noreferrer">
                      {platform}
                    </a>
                  </li>))}
              </ul>
            </div>)}
        </div>
      </main>
    </>);'"`
}}}}}'"`'"`