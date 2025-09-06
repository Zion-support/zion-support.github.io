import React, { useState, Suspense } from 'react';
import { Dialog;
  DialogContent;
  DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const ReactPlayer = null;
  return (
    <Dialog open={zoomOpen} onOpenChange={(o) => { setZoomOpen(o), if (!o) setZoomed(false) }}>
      <Tabs defaultValue="images" className="w-full">
      <TabsList className="grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light">
        <TabsTrigger value="images">Images</TabsTrigger>
        {videoUrl && <TabsTrigger value="video">Video</TabsTrigger>}
        {modelUrl && <TabsTrigger value="model">3D</TabsTrigger>}
      </TabsList>

      <TabsContent value="images" className="pt-4">
        <div className="aspect-video w-full relative">
          <DialogTrigger asChild>
            <img
              src={images[selected] || images[0] || ''}
              alt='Zoomed view'
              className={`w-full h-full object-contain transition-transform ${zoomed ? 'scale-150' : ''}`}
            />          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
}
;