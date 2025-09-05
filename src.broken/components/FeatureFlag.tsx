<<<<<<< HEAD
import React from 'react',;
import { useFeatureFlags } from '@/context/FeatureFlagContext',;
;
interface FeatureFlagProps {;
  name:string,;
  children:React.ReactNode;
}
;
export function FeatureFlag({ name, children } FeatureFlagProps) {;
  const { isEnabled } = useFeatureFlags(),;
  if (!isEnabled(name)) return null,;
  return <>{children}</>,;
}
;
export default FeatureFlag,;
=======
import React from 'react',
import { useFeatureFlags } from '@/context/FeatureFlagContext',
interface FeatureFlagProps {
  name: string,
  children: React.ReactNode
}

export function FeatureFlag({ name, children }: FeatureFlagProps) {
  const { isEnabled } = useFeatureFlags(),
  if (!isEnabled(name)) return null,
  return <>{children}</>}

export default FeatureFlag,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
