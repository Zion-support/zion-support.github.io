import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchSuggestion {
  id: string;
  title: string;
  type: 'service' | 'talent' | 'equipment';
  description?: string;
}
