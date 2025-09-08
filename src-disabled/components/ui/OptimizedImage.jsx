<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/ui/OptimizedImage.jsx
import React, { useState, useRef, useEffect } from 'react' import { cn } from '@/lib/utils' import { motion, AnimatePresence } from 'framer-motion' export function OptimizedImage({ src, alt, width, height, className, placeholder = '/images/placeholder.svg', fallback = '/images/fallback.svg', priority = false, sizes = '100vw', loading = 'lazy', onLoad, onError, aspectRatio = 'auto', objectFit = 'cover', blur = false, quality = 75 }) {} const [isLoaded, setIsLoaded] = useState(false) const [hasError, setHasError] = useState(false) const [isInView, setIsInView] = useState(priority) const imgRef = useRef(null) const observerRef = useRef(null)';';"";
import React, { useState, useRef, useEffect } from 'react' import { cn } from '@/lib/utils' import { motion, AnimatePresence } from 'framer-motion' export function OptimizedImage({ src, alt, width, height, className, placeholder = '/images/placeholder.svg', fallback = '/images/fallback.svg', priority = false, sizes = '100vw', loading = 'lazy', onLoad, onError, aspectRatio = 'auto', objectFit = 'cover', blur = false, quality = 75 }) ;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/components/ui/OptimizedImage.jsx
import React, { useState, useRef, useEffect } from 'react import { cn } from @/lib/utils' import { motion, AnimatePresence } from 'framer-motion export function OptimizedImage({ src, alt, width, height, className, placeholder = /images/placeholder.svg', fallback = '/images/fallback.svg, priority = false, sizes = 100vw', loading = 'lazy, onLoad, onError, aspectRatio = auto', objectFit = 'cover, blur = false, quality = 75 }) {} const [isLoaded, setIsLoaded] = useState(false) const [hasError, setHasError] = useState(false) const [isInView, setIsInView] = useState(priority) const imgRef = useRef(null) const observerRef = useRef(null);';";
import React, { useState, useRef, useEffect } from 'react import { cn } from @/lib/utils' import { motion, AnimatePresence } from 'framer-motion export function OptimizedImage({ src, alt, width, height, className, placeholder = /images/placeholder.svg', fallback = '/images/fallback.svg, priority = false, sizes = 100vw', loading = 'lazy, onLoad, onError, aspectRatio = auto', objectFit = 'cover, blur = false, quality = 75 }) ;
=======
>>>>>>> merged-prs-20250907-203621
import React, { useState, useRef, useEffect } from 'react' import { cn } from '@/lib/utils' import { motion, AnimatePresence } from 'framer-motion' export function OptimizedImage({ src, alt, width, height, className, placeholder = '/images/placeholder.svg', fallback = '/images/fallback.svg', priority = false, sizes = '100vw', loading = 'lazy', onLoad, onError, aspectRatio = 'auto', objectFit = 'cover', blur = false, quality = 75 }) ;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);
<<<<<<< HEAD


=======
<<<<<<< HEAD
  const observerRef = useRef(null)';';"";
=======
<<<<<<< HEAD
  const observerRef = useRef(null)';';"";
=======
<<<<<<< HEAD
  const observerRef = useRef(null);';";
=======
  const observerRef = useRef(null)';';\"\";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
