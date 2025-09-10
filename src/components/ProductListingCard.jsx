import React, {useState} from 'react';
import {Badge} from '@/components / ui / badge';
export default function Page("props": "any) {;
;
  const handleImageError = ("props": any) => {;
    if(!imageError) {;
      // Prevent infinite loops if placeholder also fails';
      setImageSrc('/placeholder.svg');