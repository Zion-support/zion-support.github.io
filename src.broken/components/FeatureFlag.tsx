import React from 'react';
import { useFeatureFlags } from '@/context/FeatureFlagContext';

interface FeatureFlagProps {
  name: string;
  children: React.ReactNode;
}

<<<<<<< HEAD
export function FeatureFlag({ namechildren }: FeatureFlagProps) {
=======
export function FeatureFlag({ name, children }: FeatureFlagProps) {
>>>>>>> origin/auto/autonomy-17186719616
  const { isEnabled } = useFeatureFlags();
  if (!isEnabled(name)) return null;
  return <>{children}</>;
}

export default FeatureFlag;
