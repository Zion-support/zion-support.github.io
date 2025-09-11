import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface SearchResult {

  id: string;
  title: string;
  description: string;
  type: 'service' | 'technology' | 'page' | 'content';
  url: string;
  tags: string[];
  relevance: number;
}

interface SearchFilter {

  type: string[];
  tags: string[];
  dateRange: {;

    start: Date | null;
    end: Date | null;
};