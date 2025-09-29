import React, { useState } from "react";
import ResponsiveImage from "./ResponsiveImage";
import { ImageOptimizationOptions } from "../utils/imageOptimization";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  optimizationOptions?: ImageOptimizationOptions;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  showTitles?: boolean;
  showDescriptions?: boolean;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  gap = "md",
  showTitles = true,
  showDescriptions = false,
  className = "",
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div
        className={`grid ${gridCols[columns]} ${gapClasses[gap]} ${className}`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => openModal(image)}
          >
            <ResponsiveImage
              src={image.src}
              alt={image.alt}
              optimizationOptions={{
                width: 400,
                height: 300,
                quality: 85,
                format: "webp",
                ...image.optimizationOptions,
              }}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {(showTitles || showDescriptions) && (
              <div className="p-4">
                {showTitles && image.title && (
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                )}
                {showDescriptions && image.description && (
                  <p className="text-sm text-gray-600">{image.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ResponsiveImage
              src={selectedImage.src}
              alt={selectedImage.alt}
              optimizationOptions={{
                width: 1200,
                height: 800,
                quality: 90,
                format: "webp",
                ...selectedImage.optimizationOptions,
              }}
              className="max-w-full max-h-full object-contain"
            />

            {(selectedImage.title || selectedImage.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                {selectedImage.title && (
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedImage.title}
                  </h3>
                )}
                {selectedImage.description && (
                  <p className="text-sm">{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
