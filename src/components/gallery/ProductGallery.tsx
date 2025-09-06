import React, { useState, Suspense } from 'react';

interface ProductGalleryProps {
  images: string[];
  videoUrl?: string;
  modelUrl?: string;

export function ProductGallery({
  images,
  videoUrl,
  modelUrl,
}: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const poster = images[0];

        <TabsContent value='images' className='pt-4'>
          <div className='aspect-video w-full relative'>
            <DialogTrigger asChild>
              <img
                src={images[selected] || images[0] || ''}
                alt={`Product image ${selected + 1}`}
                className='w-full h-full object-contain bg-zion-blue-light/10 p-4 cursor-zoom-in'
              />
            </DialogTrigger>
          </div>
          {images.length > 1 && (
            <div className='flex p-4 gap-2 overflow-x-auto'>
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelected(idx)}
                  className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${idx === selected ? 'border-zion-purple' : 'border-transparent'}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail image ${idx + 1}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              ))}
            </div>
          )}
        </TabsContent>

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

          </div>
        </DialogContent>
      )}

    </Dialog>
  );