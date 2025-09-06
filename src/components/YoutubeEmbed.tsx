import Image from 'next/image';

import { Loader2 } from 'lucide-react';




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="relative aspect-video max-w-3xl mx-auto">
      {!loaded && (
        <>

          <Image src={poster} alt={`${title} poster`} fill className="object-cover rounded" />

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        </>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${loaded ? 'visible' : 'invisible'}`}


        allowFullScreen
      />
    </div>
  )

;

=======
        loading="lazy";
        onLoad={() => setLoaded(true)}
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture";
        allowFullScreen;
      />;
    </div>;
  );
}
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
