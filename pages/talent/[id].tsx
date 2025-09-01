import React, { useEffect, useState } from 'react';'
import Head from 'next/head';'
import { useRouter } from 'next/router';
l3xoyh-codex/load-talent-profile-data'
import { Skeleton } from '@/components/ui/skeleton';'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';'
import type { NextRouter } from 'next/router';'
import { Loader2 } from 'lucide-react';'
import { TALENT_PROFILES } from '@/data/talentData';
main'
import type { TalentProfile } from '@/types/talent';'
import TalentDetails from '@/components/talent/TalentDetails';'
import { Skeleton } from '@/components/ui/skeleton';'
import NotFound from '@/components/NotFound';'
import { ErrorBoundary } from '@/components/ErrorBoundary';

l3xoyh-codex/load-talent-profile-data
const TalentPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState<(TalentProfile & { social?: Record<string, string> }) | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/talent/${id}`);'
        if (!res.ok) throw new Error('Failed to load profile');
        const data = await res.json();
        setProfile(data.profile);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      } finally {

        setLoading(false);
      }
    };
    fetchProfile();
  }, [id]);

  if (loading) {

    return()
      <div className="p-4 space-y-2" data-testid="talent-loading">"
        <Skeleton className="h-8 w-1/3" />"
        <Skeleton className="h-4 w-full" />"
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }

  if (error) {

interface TalentPageProps {
  talent: (TalentProfile & { social?: Record<string, string> }) | null;
}

  useEffect(() => {
    if (!router.isReady) {

      return;
    }
'
  if ('isFallback' in router && router.isFallback) {

main
    return ("
      <div className="p-4">"
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!profile) {

    return <NotFound />;
  }

  // This part should only be reached if talentData is successfully fetched.
  if (!talentData) {

     // This case should ideally be covered by loading, error, or the NotFound above.
     // If we reach here, it means loading is false, no error, but no talentData.'
     // This could happen if id was invalid, fetchTalent ran, set loading false, but didn't set error (e.g. 404 redirect logic)
     // and then the component re-renders before redirect completes.
     // The skeleton loader for !id also helps prevent premature NotFound.
    return <NotFound />; // Fallback, though the above conditions should catch most scenarios
  }

  return()
    <>
      <Head>
        <title>{profile.full_name}</title>"
        <meta property="og:title" content={profile.full_name} />
        {profile.profile_picture_url && ("
          <meta property="og:image" content={profile.profile_picture_url} />
        )}
      </Head>
      <TalentDetails talent={profile} />
    </>
  );
};

export default TalentPage;
'"`