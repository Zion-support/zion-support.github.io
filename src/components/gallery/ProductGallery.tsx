import React, {_useState, _Suspense} from 'react';
import {_Dialog, _DialogContent, _DialogTrigger} from '@/components/ui/dialog';

const _ReactPlayer = React.lazy__(() => import('react-player'));
const _ModelViewer = React.lazy(_async () => {_await import('@google/model-viewer');
  return {
    default: (_props: unknown) => (
      React.createElement('model-viewer', _props)
    )};
});

interface ProductGalleryProps {_images: string[];
  videoUrl?: string;
  modelUrl?: string;}

export function ProductGallery(_{_images, _videoUrl, _modelUrl}: ProductGalleryProps) {_const [selected, _setSelected] = useState(0);
  const [zoomOpen, _setZoomOpen] = useState(false);
  const [zoomed, _setZoomed] = useState(false);
  const _poster = images[0];

  return (_<Dialog open={zoomOpen} onOpenChange={_(o) => { setZoomOpen(o); if (!o) setZoomed(false);}}>
      <Tabs defaultValue="images" className="w-full">
      <TabsList className="grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light">
        <TabsTrigger value="images">Images</TabsTrigger>
        {_videoUrl && <TabsTrigger value="video">Video</TabsTrigger>}
        {_modelUrl && <TabsTrigger value="model">3D</TabsTrigger>}
      </TabsList>

      <TabsContent value="images" className="pt-4">
        <div className="aspect-video w-full relative">
          <DialogTrigger asChild>
            <img
              src={_images[selected] || images[0] || ''}
              alt={_`Product image ${selected + 1}`}
              className="w-full h-full object-contain bg-zion-blue-light/10 p-4 cursor-zoom-in"
            />
          </DialogTrigger>
        </div>
        {_images.length > 1 && (_<div className="flex p-4 gap-2 overflow-x-auto">
            {images.map((img, _idx) => (_<div
                key={idx}
                onClick={_() => setSelected(idx)}
                className={_`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${idx === selected ? 'border-zion-purple' : 'border-transparent'}`}
              >
                <img
                  src={_img}
                  alt={_`Thumbnail image ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </TabsContent>

      {_videoUrl && (
        <TabsContent value="video" className="pt-4">
          <AspectRatio ratio={16 / 9}>
            <Suspense fallback={_<img
                src="/images/video-placeholder.svg"
                alt="Video preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />}>
              <ReactPlayer url={_videoUrl} width="100%" height="100%" controls />
            </Suspense>
          </AspectRatio>
        </TabsContent>
      )}

      {_modelUrl && (
        <TabsContent value="model" className="pt-4">
          <AspectRatio ratio={16 / 9}>
            <Suspense fallback={_<img
                src="/images/model-placeholder.svg"
                alt="3D model preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />}>
              <ModelViewer src={_modelUrl} alt="3d model" camera-controls style={_{ width: '100%', _height: '100%'}} />
            </Suspense>
          </AspectRatio>
        </TabsContent>
      )}
    </Tabs>
    {_images.length > 0 && (_<DialogContent className="max-w-3xl p-0">
        <div
          className={`w-full h-full overflow-auto ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
          onClick={_() => setZoomed(!zoomed)}
        >
          <img
            src={_images[selected] || images[0] || ""}
            alt="Zoomed view"
            className={_`w-full h-full object-contain transition-transform ${zoomed ? 'scale-150' : ''}`}
          />
        </div>
      </DialogContent>
    )}
    </Dialog>
  );
}
