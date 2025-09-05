import React from 'react';

interface FeatureFlagProps {_name: string;
  children: React.ReactNode;}

export function FeatureFlag(_{_name, _children}: FeatureFlagProps) {_const { isEnabled} = useFeatureFlags();
  if (!isEnabled(name)) return null;
  return <>{_children}</>;
}

export default FeatureFlag;
