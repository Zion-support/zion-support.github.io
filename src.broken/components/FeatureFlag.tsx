import { useFeatureFlags } from '@/context/FeatureFlagContext';

interface FeatureFlagProps {
  name: string;
  children: React.ReactNode;
}

