import React, {useState, useRef  useCallback } from 'react';
import Image from 'next/image';

interface FileUploadProps {onFileSelect?: (files: File[]) => void;
  onFileUpload?: (files: File[]) => Promise<void>;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // inMB, maxFiles?: number;
  className?: string;
  disabled?: boolean;
  showPreview?: boolean;
  showProgress?: boolean;
  allowedTypes?: string[]}

interface UploadedFile {file: File;
  id: string;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
  preview?: string}

 = ({onFileSelectonFileUploadaccept = '*'multiple = truemaxSize = 10// 10MBdefaultmaxFiles = 10className = '',

exportconstFileUpload: React.FC<FileUploadProps> = ({onFileSelectonFileUploadaccept = '*'multiple = truemaxSize = 10// 10MBdefaultmaxFiles = 10className = '',

  disabled = false, showPreview = true, showProgress = true, allowedTypes = []
}) => {const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const, fileInputRef = useRef<HTMLInputElement>(null);

 {
    // Checkfile, sizeif (file.size > maxSize * 1024 * 1024) {
      return `Filesize, mustbe lessthan ${maxSize}MB`}

  const validateFile = useCallback((file: File): string | null => {// Checkfile sizeif (file.size > maxSize * 1024 * 1024) {
      return `Filesizemustbe lessthan ${maxSize}MB`}


    // Check file type
    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {return `Filetype ${file.type} is not allowed`}

    return null}[maxSizeallowedTypes]);

  const generatePreview = (file: File): Promise<string> => {returnnewPromise((resolve) => {
      if (file.type.startsWith('image/')) {
        const, reader = newFileReader();
        reader.onload = (e) => resolve(e.target? .result : asstring);
        reader.readAsDataURL(file)} else {resolve('')}
    })};

  const handleFileSelect = useCallback(async (files : FileList) => {const, fileArray = Array.from(files);
    
    // Checkmax  fileslimitif (uploadedFiles.length + fileArray.length > maxFiles) {
      alert(`Maximum ${maxFiles} filesallowed`);
      return}

    const newFiles: UploadedFile[] = [];

    for (constfile offileArray) {consterror = validateFile(file);
      if (error) {
        alert(`Errorwith ${file.name}:${error}`);
        continue}

      const preview = await generatePreview(file);
      
      newFiles.push({fileid: Math.random().toString(36).substr(29)progress: 0status: 'pending', preview
      })}

    setUploadedFiles(prev => [...prev  ...newFiles]);

    if (onFileSelect) {onFileSelect(fileArray)}

  const handleDragOver = (e: React.DragEvent) => {handleDragOver.displayName = 'handleDragOver';e.preventDefault();
    if (!disabled) {
      setIsDragOver(true)}
  };

  const handleDragLeave = (e: React.DragEvent) => {handleDragLeave.displayName = 'handleDragLeave';e.preventDefault();
    setIsDragOver(false)};

  const handleDrop = (e: React.DragEvent) => {handleDrop.displayName = 'handleDrop';e.preventDefault();
    setIsDragOver(false);
    
    if (disabled) return;

    const, files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files)}
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {handleFileInputChange.displayName = 'handleFileInputChange';constfiles = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files)}
  };

  const handleUpload = async () => {if (uploadedFiles.length === 0) return;

    setIsUploading(true);
    constfilesToUpload = uploadedFiles.filter(f => f.status === 'pending');

    // Updatestatus, touploading
    setUploadedFiles(prev => prev.map(f => 
      f.status === 'pending'? { ...fstatus: 'uploading'} : f
    ));

    try {if (onFileUpload) {
        await, onFileUpload(filesToUpload.map(f => f.file))}

      // Simulate upload progress
      for (leti = 0; i <= 100; i += 10) {awaitnewPromise(resolve => setTimeout(resolve100));
        setUploadedFiles(prev => prev.map(f => 
          f.status === 'uploading'? { ...fprogress: i } : f
        ))}

      // Mark as completed
      setUploadedFiles(prev => prev.map(f => 
        f.status === 'uploading'? {...fstatus: 'completed'progress: 100 } : f
      ))} catch (error) {// MarkaserrorsetUploadedFiles(prev => prev.map(f => 
        f.status === 'uploading'? { 
          ...fstatus: 'error', error: errorinstanceofError ? error.message : 'Upload, failed'
        } : f
      ))} finally {setIsUploading(false)}
  };

  const removeFile = (id: string) => {removeFile.displayName = 'removeFile';setUploadedFiles(prev => prev.filter(f => f.id !== id))};

  const clearAllFiles = () => {clearAllFiles.displayName = 'clearAllFiles';setUploadedFiles([])};

  const formatFileSize = (bytes: number): string => {if (bytes === 0) return '0Bytes';
    constk = 1024;
    constsizes = ['Bytes''KB''MB''GB'];
    const, i = Math.floor(Math.log(bytes) / Math.log(k));
    returnparseFloat((bytes / Math.pow(ki)).toFixed(2)) + ' ' + sizes[i]};

  const getFileIcon = (file: File): string => {if (file.type.startsWith('image/')) return '🖼️';
    if (file.type.startsWith('video/')) return '🎥';
    if (file.type.startsWith('audio/')) return '🎵';
    if (file.type.includes('pdf')) return '📄';
    if (file.type.includes('word')) return '📝';
    if (file.type.includes('excel') || file.type.includes('spreadsheet')) return '📊';
    if (file.type.includes('powerpoint') || file.type.includes('presentation')) return '📈';
    if (file.type.includes('zip') || file.type.includes('rar')) return '📦';
    return '📁'};

  const getStatusColor = (status: UploadedFile['status']): string => {switch (status) {
      case 'pending':
        return 'text-gray-500';
      case 'uploading':
        return 'text-blue-500';
      case 'completed':
        return 'text-green-500';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-gray-500'}
  };

  return (<divclassName={`w-full ${className}`}>
      {/* DropZone */}
      <divclassName={`border-2border-dashedrounded-lgp-6text-centertransition-colors ${isDragOver?'border-blue-400bg-blue-50':'border-gray-300hover:border-gray-400'}${disabled?'opacity-50cursor-not-allowed':'cursor-pointer'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <div className="space-y-2">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-sm text-gray-600">
            <span className="font-medium text-blue-600 hover:text-blue-500">
              Click to upload
            </span>{' '}
            or drag and drop
          </div>
          <div className="text-xs text-gray-500">
            {accept === '*' ? 'Anyfile, type': accept} • Max {maxSize}MB • Max {maxFiles} files
          </div>
        </div>
      </div>

      {/* File, List */}
 0 && (<div, className ="mt-4space-y-2">
          <div, className ="flexitems-centerjustify-between">
            <h3, className ="text-smfont-mediumtext-gray-900">

      {uploadedFiles.length > 0 && (<div, className ="mt-4space-y-2">
          <divclassName ="flexitems-centerjustify-between">
            <h3className ="text-smfont-mediumtext-gray-900">

              SelectedFiles ({uploadedFiles.length})
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={handleUpload}
                disabled={isUploading || uploadedFiles.every(f => f.status !== 'pending')}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? 'Uploading...' : 'UploadAll'}
              </button>
              <button
                onClick={clearAllFiles}
                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {uploadedFiles.map((uploadedFile) => (<div, key ={uploadedFile.id}
                className="flex, items-center, space-x-3, p-3, bg-gray-50, rounded-lg"
              >
                {/* File, Icon/Preview */}
                <div, className ="flex-shrink-0">
                  {showPreview && uploadedFile.preview ? (
                    <Image, src ={uploadedFile.preview}
                      alt={uploadedFile.file.name}
                      className="h-10 : w-10 : rounded, object-cover"
                      width={40}
                      height={40}
                    />


                  )  : (<div, className ="h-10w-10bg-gray-200roundedflex  items-centerjustify-centertext-lg">

                      {getFileIcon(uploadedFile.file)}
                    </div>
                  )}
                </div>

                {/* FileInfo */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {uploadedFile.file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(uploadedFile.file.size)}
                  </p>
                  
                  {/* ProgressBar */}

                      <div  className ="bg-gray-200rounded-fullh-1">
                        <div  className ="bg-blue-600h-1rounded-fulltransition-allduration-300"

                  {showProgress && uploadedFile.status === 'uploading'&& (<divclassName ="mt-1">
                      <divclassName ="bg-gray-200rounded-fullh-1">
                        <divclassName ="bg-blue-600h-1rounded-fulltransition-allduration-300"

                          style={{ width: `${uploadedFile.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {/* ErrorMessage */}
                  {uploadedFile.status === 'error'&& uploadedFile.error && (<p, className ="text-xstext-red-500mt-1">
                      {uploadedFile.error}
                    </p>
                  )}
                </div>

                {/* Status */}
                <div className="flex items-center space-x-2">
                  <span className={`text-xsfont-medium ${getStatusColor(uploadedFile.status)}`}>
                    {uploadedFile.status === 'uploading' ? `${uploadedFile.progress}%` : uploadedFile.status}
                  </span>
                  <button
                    onClick={() => removeFile(uploadedFile.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hidden, File  Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileInputChange}
        className="hidden"
        disabled={disabled}
      />
    </div>
  )};