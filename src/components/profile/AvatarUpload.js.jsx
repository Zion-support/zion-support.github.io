import { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
export function AvatarUpload({ value, onChange }) {
    const [url, setUrl] = useState(value);
    const handleUpload = (result) => {
        const secure = result?.info?.secure_url;
        if (secure) {
            setUrl(secure);
            onChange?.(secure);
        }
    };
    return (<div className="space-y-2">
      {url && (<img loading="lazy" src={url} alt="Avatar preview" className="h-20 w-20 rounded-full"/>)}
      {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME &&
            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME !== 'YOUR_CLOUDINARY_CLOUD_NAME_HERE' &&
            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME !== '' ? (<CldUploadButton uploadPreset="avatar_preset" onUpload={handleUpload}>
          Upload Avatar
        </CldUploadButton>) : (<p className="text-sm text-gray-500">Image upload feature is currently unavailable.</p>)}
    </div>);
}
