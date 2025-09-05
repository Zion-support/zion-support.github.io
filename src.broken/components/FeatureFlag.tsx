<<<<<<< HEAD
import React from 'react',
import { useFeatureFlags } from '@/context/FeatureFlagContext',
interface FeatureFlagProps {
  name: string,
  children: React.ReactNode
}

export function FeatureFlag({ name, children }: FeatureFlagProps) {
  const { isEnabled } = useFeatureFlags(),
  if (!isEnabled(name)) return null,
  return <>{children}</>
=======
import React from 'react';

interface FeatureFlagProps {_name: string;
  children: React.ReactNode;}

export function FeatureFlag(_{_name, _children}: FeatureFlagProps) {_const { isEnabled} = useFeatureFlags();
  if (!isEnabled(name)) return null;
  return <>{_children}</>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export default FeatureFlag,
