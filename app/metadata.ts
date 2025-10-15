import { useRef } from 'react';

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
  const stateRef = useRef<MetadataState>({
    title: options.title || 'Zion Tech Group',
    description: options.description || 'Advanced AI and IT Solutions',
    keywords: options.keywords || ['AI', 'IT', 'Technology', 'Solutions'],
  });

  return {
    title: stateRef.current.title,
    description: stateRef.current.description,
    keywords: stateRef.current.keywords,
  };
};