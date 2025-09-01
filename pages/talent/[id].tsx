import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { TALENT_PROFILES } from '@/data/talentData';
import type { TalentProfile } from '@/types/talent';
import TalentDetails from '@/components/talent/TalentDetails';
import NotFound from '@/components/NotFound';

interface TalentPageProps {
  talent: TalentProfile | null;
}

const TalentProfilePage: React.FC = () => {
  const { id } = useParams() as { id?: string };
  const [profile, setProfile] = useState<TalentProfileWithSocial | null>(null);
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

  if (loading) return <ProfileLoadingState />;
  if (error || !profile) return <ProfileErrorState error={error} />;

  return <TalentDetails talent={talent} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = TALENT_PROFILES.map((t) => ({ params: { id: t.id } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<TalentPageProps> = async ({ params }) => {
  const id = params?.id as string;
  const talent = TALENT_PROFILES.find((t) => t.id === id) || null;

  if (!talent) {
    return { notFound: true };
  }

  return { props: { talent } };
};

export default TalentPage;
