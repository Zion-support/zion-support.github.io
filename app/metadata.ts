import { useState, useEffect } from 'react';

interface MetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
}

interface MetadataState {
  title: string;
  description: string;
  keywords: string[];
}

export const useMetadata = (options: MetadataOptions = {}) => {
  const [metadata, setMetadata] = useState<MetadataState>({
    title: options.title || 'Zion Tech Group',
    description: options.description || 'Advanced AI and IT Solutions',
    keywords: options.keywords || ['AI', 'IT', 'Technology', 'Solutions'],
  });

  useEffect(() => {
    // Use setTimeout to avoid calling setState synchronously within effect
    setTimeout(() => {
      setMetadata({
        title: options.title || 'Zion Tech Group',
        description: options.description || 'Advanced AI and IT Solutions',
        keywords: options.keywords || ['AI', 'IT', 'Technology', 'Solutions'],
      });
    }, 0);
  }, [options.title, options.description, options.keywords]);

  return metadata;
};