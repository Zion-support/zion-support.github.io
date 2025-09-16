import React from 'react';
import { useFeatureFlags } from '@/context/FeatureFlagContext';

interface FeatureFlagProps {
  name: string;
  children: React.ReactNode;
}

  const { isEnabled } = useFeatureFlags();
  if (!isEnabled(name)) return null;
  return <>{children}</>;
}

export default FeatureFlag;
