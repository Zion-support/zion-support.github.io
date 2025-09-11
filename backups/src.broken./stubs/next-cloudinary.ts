// Next.js Cloudinary stub for Vite compatibility
import React from 'react';

// Define components first
const CldImage = ({ src, alt, width, height, ...props }: unknown) => {
  return React.createElement('img', {
    src,
    alt,
    width,
    height,
    ...props,
  });
};

const CldVideo = ({ src, ...props }: unknown) => {
  return React.createElement('video', {
    src,
    ...props,
  });
};

const CldUploadWidget = ({ children, ...props }: unknown) => {
  return children({ cloudinary: { open: () => {} } });
};

const CldUploadButton = ({ children, onUpload, uploadPreset, ...props }: unknown) => {
  const handleClick = () => {
    // Mock upload functionality
    const mockResult = {
      info: {
        secure_url: 'https://via.placeholder.com/150'
      }
    };
    onUpload?.(mockResult);
  };

  return React.createElement('button', {
    onClick: handleClick,
    ...props,
  }, children);
};

// Export individually for named imports
export { CldImage, CldVideo, CldUploadWidget, CldUploadButton };

// Also export as default for compatibility
export default {
  CldImage,
  CldVideo,
  CldUploadWidget,
  CldUploadButton,
};