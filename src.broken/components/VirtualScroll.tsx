import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
export default function ServiceVirtualScroll() {

export function VirtualScroll < T> ({
import { motion, AnimatePresence  } from 'framer-motion';

  const visibleRange = useMemo(() => {;
    const start = Math.floor(scrollTop / itemHeight) ;
    const visibleCount = Math.ceil(height / itemHeight) ;
    const end = start + visibleCount + overscan;

