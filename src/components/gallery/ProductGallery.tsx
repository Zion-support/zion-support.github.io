
import React, { useState, Suspense } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
const ReactPlayer = React.lazy(() => import('react-player'))
const ModelViewer = React.lazy(async () => {
  await import('@google/model-viewer')
  return {
    default: (props: any) => React.createElement('model-viewer', props)
  }

    </Dialog>;
  );

    </Dialog>;
  );
};
};

;
