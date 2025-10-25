&apos;use client&apos;;
import React, { useState, useCallback } from &apos;react&apos;;
import { ImageIcon } from &apos;lucide-react&apos;;
import { Upload } from &apos;lucide-react&apos;;
import { Zap } from &apos;lucide-react&apos;;
import { Download } from &apos;lucide-react&apos;;


interface ImageOptimizerProps {
  onImageOptimized?: (optimizedImage: File) => void;
  className?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  onImageOptimized,
  className = &apos;&apos;
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [optimizedFile, setOptimizedFile] = useState<File | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStats, setOptimizationStats] = useState<{
    originalSize: number;
    optimizedSize: number;
    compressionRatio: number;
  } | null>(null);

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith(&apos;image/&apos;)) {
      setSelectedFile(file);
      setOptimizedFile(null);
      setOptimizationStats(null);
    }
  }, []);

  const optimizeImage = useCallback(async () => {
    if (!selectedFile) return;

    setIsOptimizing(true);
    
    try {
      // Simulate image optimization
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a mock optimized file (in real implementation, you&apos;d use a library like sharp))
      const canvas = document.createElement(&apos;canvas&apos;);
      const ctx = canvas.getContext(&apos;2d&apos;);
      const img = new window.Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const optimizedFile = new File([blob], `optimized_${selectedFile.name}`, {
              type: &apos;image/jpeg&apos;,
              lastModified: Date.now())
            });
            
            setOptimizedFile(optimizedFile);
            
            const originalSize = selectedFile.size;
            const optimizedSize = optimizedFile.size;
            const compressionRatio = ((originalSize - optimizedSize) / originalSize) * 100;
            
            setOptimizationStats({
              originalSize,
              optimizedSize,
const compressionRatio = null;
            });
            
            onImageOptimized?.(optimizedFile);
          }
        }, &apos;image/jpeg&apos;, 0.8);
      };
      
      img.src = URL.createObjectURL(selectedFile);
    } catch (error) {
      console.error(&apos;Error optimizing image:&apos;, error);
    } finally {
      setIsOptimizing(false);
    }
  }, [selectedFile, onImageOptimized]);

  const downloadOptimizedImage = useCallback(() => {
    if (optimizedFile) {
      const url = URL.createObjectURL(optimizedFile);
      const a = document.createElement(&apos;a&apos;);
      a.href = url;
      a.download = optimizedFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }, [optimizedFile]);

  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 ${className}`}></div>
      <div className=&quot;text-center mb-6&quot;></div>
        <ImageIcon className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
        <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Image Optimizer</h3>
        <p className=&quot;text-gray-300&quot;>Optimize your images for better performance</p>
      </div>

      <div className=&quot;space-y-4&quot;></div>
        {/* File Upload */}
        <div className=&quot;border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-cyan-400 transition-colors&quot;></div>
          <input
            type=&quot;file&quot;
            accept=&quot;image/*&quot;
            onChange={handleFileSelect}
            className=&quot;hidden&quot;
            id=&quot;image-upload&quot;
          />
          <label
            htmlFor=&quot;image-upload&quot;
            className=&quot;cursor-pointer flex flex-col items-center space-y-2&quot;
          >
            <Upload className=&quot;w-8 h-8 text-gray-400&quot; />
            <span className=&quot;text-gray-300&quot;>
              {selectedFile ? selectedFile.name : &apos;Click to select an image&apos;}
            </span>
          </label>
        </div>

        {/* Optimization Button */}
        {selectedFile && !optimizedFile && (
          <button
            onClick={optimizeImage}
            disabled={isOptimizing}
            className=&quot;w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50&quot;
          >
            {isOptimizing ? (
              <div>
                <Zap className=&quot;w-5 h-5 mr-2 animate-spin&quot; />
                Optimizing...
              </div>
            ) : (
              <div>
                <Zap className=&quot;w-5 h-5 mr-2&quot; />
                Optimize Image
              </div>
            )}
          </button>
        )}

        {/* Optimization Stats */}
        {optimizationStats && (
          <div className=&quot;bg-slate-700/50 rounded-lg p-4 space-y-2&quot;></div>
            <h4 className=&quot;text-lg font-semibold text-white mb-3&quot;>Optimization Results</h4>
            <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;></div>
              <div></div>
                <span className=&quot;text-gray-400&quot;>Original Size:</span>
                <span className=&quot;text-white ml-2&quot;>
                  {(optimizationStats.originalSize / 1024).toFixed(2)} KB
                </span>
              </div>
              <div></div>
                <span className=&quot;text-gray-400&quot;>Optimized Size:</span>
                <span className=&quot;text-white ml-2&quot;>
                  {(optimizationStats.optimizedSize / 1024).toFixed(2)} KB
                </span>
              </div>
              <div className=&quot;col-span-2&quot;></div>
                <span className=&quot;text-gray-400&quot;>Compression Ratio:</span>
                <span className=&quot;text-cyan-400 ml-2 font-semibold&quot;>
                  {optimizationStats.compressionRatio.toFixed(1)}% smaller
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Download Button */}
        {optimizedFile && (
          <button
            onClick={downloadOptimizedImage}
            className=&quot;w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center&quot;
          >
            <Download className=&quot;w-5 h-5 mr-2&quot; />
            Download Optimized Image
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageOptimizer;