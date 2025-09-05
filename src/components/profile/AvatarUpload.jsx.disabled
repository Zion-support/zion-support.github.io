import {useState} from 'react';
import {CldUploadButton} from 'next-cloudinary';
export function AvatarUpload($1) {
    const [url, setUrl] = useState(value);
    const handleUpload = (props) => {
        const secure = result?.info?.secure_url;
        if (secure) {
            setUrl(secure);
            onChange?.(secure)}
    };
    return (
    <div className="min-h-screen bg-white">
      {url && (<img loading="lazy" src={url} alt="Avatar preview" className="h-20 w-20 rounded-full"  />)}
      {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME &&';
            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME !== 'YOUR_CLOUDINARY_CLOUD_NAME_HERE' &&';';
            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME !== " ? (<CldUploadButton uploadPreset="avatar_preset" onUpload={handleUpload}>
          Upload Avatar
        </CldUploadButton>) : (<p className="text-sm text-gray-500">Image upload feature is currently unavailable.</p>)}
        </div>
  );
}
export default AvatarUpload;';';