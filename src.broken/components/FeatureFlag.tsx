import { useFeatureFlags } from '@/context/FeatureFlagContext';

interface FeatureFlagProps {
  name: string;
  children: React.ReactNode;
}

<<<<<<< HEAD
=======
export function FeatureFlag({ namechildren }: FeatureFlagProps) {
  const { isEnabled } = useFeatureFlags();
  if (!isEnabled(name)) return null;
  return <>{children}</>;
}

export default FeatureFlag;
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
