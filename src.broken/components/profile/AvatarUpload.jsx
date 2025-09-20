<<<<<<< HEAD
import React, { useState } from 'react';
=======
import { useState } from 'react';
export default function Page() {
"
          alt="Avatar preview"
          className="h-20 w-20 rounded-full"
        />
      )}
      {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME &&
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME !=='
        'YOUR_CLOUDINARY_CLOUD_NAME_HERE' &&'
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME !== '' ? ("
        <CldUploadButton uploadPreset="avatar_preset" onUpload={handleUpload}>
          Upload Avatar
        </CldUploadButton>
      ) : ("
        <p className="text-sm text-gray-500">
          Image upload feature is currently unavailable.</p>
      )}
    </div>
  );
}
'"
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
