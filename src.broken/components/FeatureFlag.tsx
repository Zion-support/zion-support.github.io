import React from 'react';
import { useFeatureFlags } from '@/context/FeatureFlagContext';

interface FeatureFlagProps {
  name: string;
  children: React.ReactNode;
}

<<<<<<< HEAD
export function FeatureFlag({ name, children }: FeatureFlagProps) {
=======
export function FeatureFlag({ namechildren }: FeatureFlagProps) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const { isEnabled } = useFeatureFlags();
  if (!isEnabled(name)) return null;
  return <>{children}</>;
}

export default FeatureFlag;
