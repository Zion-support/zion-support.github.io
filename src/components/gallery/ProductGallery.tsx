<<<<<<< HEAD
import React, { useState, Suspense } from 'react',
import {
  Dialog,
  DialogContent,
  DialogTrigger} from '@/components/ui/dialog',
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs',
import { AspectRatio } from '@/components/ui/aspect-ratio',
const ReactPlayer = React.lazy(() => import('react-player')),
const ModelViewer = React.lazy(async () => {
  await import('@google/model-viewer'),
  return {
    default: (props: any) => (
      React.createElement('model-viewer', props)
    )}
}),

interface ProductGalleryProps {
  images: string[],
  videoUrl?: string,
  modelUrl?: string
}

export function ProductGallery({ images, videoUrl, modelUrl }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0),
  const [zoomOpen, setZoomOpen] = useState(false),
  const [zoomed, setZoomed] = useState(false),
  const poster = images[0],

  return (
<<<<<<< HEAD
    <Dialog open={zoomOpen} onOpenChange={(o) => { setZoomOpen(o), if (!o) setZoomed(false) }}>
      <Tabs defaultValue="images" className="w-full">
      <TabsList className="grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light">
        <TabsTrigger value="images">Images</TabsTrigger>
        {videoUrl && <TabsTrigger value="video">Video</TabsTrigger>}
        {modelUrl && <TabsTrigger value="model">3D</TabsTrigger>}
=======
    <Dialog open={zoomOpen} onOpenChange={(o) => { setZoomOpen(o); if (!o) setZoomed(false); }}>
      <Tabs defaultValue=&quot;images&quot; className=&quot;w-full&quot;>
      <TabsList className=&quot;grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light&quot;>
        <TabsTrigger value=&quot;images&quot;>Images</TabsTrigger>
        {videoUrl && <TabsTrigger value=&quot;video&quot;>Video</TabsTrigger>}
        {modelUrl && <TabsTrigger value=&quot;model&quot;>3D</TabsTrigger>}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </TabsList>

      <TabsContent value=&quot;images&quot; className=&quot;pt-4&quot;>
        <div className=&quot;aspect-video w-full relative&quot;>
          <DialogTrigger asChild>
            <img
<<<<<<< HEAD
              src={images[selected] || images[0] || ''}
              alt={`Product image ${selected + 1}`}
              className=&quot;w-full h-full object-contain bg-zion-blue-light/10 p-4 cursor-zoom-in&quot;
            />
          </DialogTrigger>
        </div>
        {images.length > 1 && (
          <div className=&quot;flex p-4 gap-2 overflow-x-auto&quot;>
            {images.map((img, idx) => (
              <div
=======
              src={_images[selected] || images[0] || ''}
              alt={_`Product image ${selected + 1}`}
              className="w-full h-full object-contain bg-zion-blue-light/10 p-4 cursor-zoom-in"
            />
          </DialogTrigger>
        </div>
        {_images.length > 1 && (_<div className="flex p-4 gap-2 overflow-x-auto">
            {images.map((img, _idx) => (_<div
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                key={idx}
                onClick={_() => setSelected(idx)}
                className={_`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${idx === selected ? 'border-zion-purple' : 'border-transparent'}`}
              >
                <img
<<<<<<< HEAD
                  src={img}
                  alt={`Thumbnail image ${idx + 1}`}
                  className=&quot;w-full h-full object-cover&quot;
=======
                  src={_img}
                  alt={_`Thumbnail image ${idx + 1}`}
                  className="w-full h-full object-cover"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>
            ))}
          </div>
        )}
      </TabsContent>

<<<<<<< HEAD
      {videoUrl && (
        <TabsContent value=&quot;video&quot; className=&quot;pt-4&quot;>
          <AspectRatio ratio={16 / 9}>
            <Suspense fallback={
              <img
                src=&quot;/images/video-placeholder.svg&quot;
                alt=&quot;Video preview&quot;
                className=&quot;w-full h-full object-cover&quot;
                loading=&quot;lazy&quot;
              />
            }>
              <ReactPlayer url={videoUrl} width=&quot;100%&quot; height=&quot;100%&quot; controls />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Suspense>
          </AspectRatio>
        </TabsContent>
      )}

<<<<<<< HEAD
      {modelUrl && (
        <TabsContent value=&quot;model&quot; className=&quot;pt-4&quot;>
          <AspectRatio ratio={16 / 9}>
            <Suspense fallback={
              <img
                src=&quot;/images/model-placeholder.svg&quot;
                alt=&quot;3D model preview&quot;
                className=&quot;w-full h-full object-cover&quot;
                loading=&quot;lazy&quot;
              />
            }>
              <ModelViewer src={modelUrl} alt=&quot;3d model&quot; camera-controls style={{ width: '100%', height: '100%' }} />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Suspense>
          </AspectRatio>
        </TabsContent>
      )}
    </Tabs>
<<<<<<< HEAD
    {images.length > 0 && (
      <DialogContent className=&quot;max-w-3xl p-0&quot;>
=======
    {_images.length > 0 && (_<DialogContent className="max-w-3xl p-0">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <div
          className={`w-full h-full overflow-auto ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
          onClick={_() => setZoomed(!zoomed)}
        >
          <img
<<<<<<< HEAD
            src={images[selected] || images[0] || "&quot;}
            alt=&quot;Zoomed view"
            className={`w-full h-full object-contain transition-transform ${zoomed ? 'scale-150' : ''}`}
=======
            src={_images[selected] || images[0] || ""}
            alt="Zoomed view"
            className={_`w-full h-full object-contain transition-transform ${zoomed ? 'scale-150' : ''}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>
      </DialogContent>
    )}
    </Dialog>
  )
}
