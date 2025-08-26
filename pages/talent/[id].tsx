import React, { useEffect } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
// Loader2 removed as TalentProfileSkeleton will be used
import TalentProfileSkeleton from '@/components/talent/TalentProfileSkeleton';
import NotFound from '@/components/NotFound';
import { ErrorBoundary } from '@/components/ErrorBoundary';

interface TalentProfileBasic {
  id: string;
  name: string;
  bio?: string;
  skills?: string[];
  portfolio?: string[];
}

const TalentPage: React.FC<TalentPageProps> = ({ talent }) => {
  const router = useRouter();
  useEffect(() => {
    if (!talent) {
      console.log('TalentPage: talent prop is undefined');
    }
  }, [talent]);

const TalentPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id?: string };

  const { data, error, isLoading } = useSWR<TalentProfileBasic>(
    id ? `/api/talent/${id}` : null,
    (url: string) => fetch(url).then(handleApiResponse)
  );

  if (isLoading || !router.isReady || !id) {
    return <TalentProfileSkeleton />;
  }

  // Specific 404 error from API
  if (error && (error as any).status === 404) {
    return (
      <>
        <NextSeo title="Talent Not Found" description="Talent profile unavailable" />
        <NotFound />
      </>
    );
  }

  // Other errors (non-404)
  if (error) {
    const err: any = error;
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Error</h2>
        <p>Failed to load talent profile.</p>
        {err.status && <p>Status: {err.status}</p>}
        <p>Message: {err.info?.error || err.info?.message || err.message}</p>
      </div>
    );
  }

  if (!talent) {
    return <div className="p-4 text-center">Talent not found or unavailable</div>;
  }

  // If we reach here, talent data is available
  return (
    <>
      <Head>
        <title>{talent.full_name}</title>
      </Head>
      <ErrorBoundary>
        <TalentDetails talent={talent} />
      </ErrorBoundary>
    </>
  );
};

export default TalentPage;
