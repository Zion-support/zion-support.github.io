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


        {videoUrl && (
          <TabsContent value='video' className='pt-4'>
            <AspectRatio ratio={16 / 9}>
              <Suspense
                fallback={
                  <img
                    src='/images/video-placeholder.svg'
                    alt='Video preview'
                    className='w-full h-full object-cover'
                    loading='lazy'
                  />
                }
              >
                <ReactPlayer
                  url={videoUrl}
                  width='100%'
                  height='100%'
                  controls
                />
              </Suspense>
            </AspectRatio>
          </TabsContent>
        )}

        {modelUrl && (
          <TabsContent value='model' className='pt-4'>
            <AspectRatio ratio={16 / 9}>
              <Suspense
                fallback={
                  <img
                    src='/images/model-placeholder.svg'
                    alt='3D model preview'
                    className='w-full h-full object-cover'
                    loading='lazy'
                  />
                }
              >
                <ModelViewer
                  src={modelUrl}
                  alt='3d model'
                  camera-controls
                  style={{ width: '100%', height: '100%' }}
                />
              </Suspense>
            </AspectRatio>
          </TabsContent>
        )}
      </Tabs>
      {images.length > 0 && (
        <DialogContent className='max-w-3xl p-0'>
          <div
            className={`w-full h-full overflow-auto ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setZoomed(!zoomed)}
          >
            <img
              src={images[selected] || images[0] || ''}
              alt='Zoomed view'
              className={`w-full h-full object-contain transition-transform ${zoomed ? 'scale-150' : ''}`}
            />          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
}
;