<<<<<<< HEAD
import React, { useState } from 'react';'
import { cn } from '@/lib/utils';
/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.'
 */''
export function ImageWithRetry({ src, fallbackSrc = '/images/image-placeholder.svg', className, retryClassName, ...props }) {}
    const [currentSrc, setCurrentSrc] = useState(src);
    const [failed, setFailed] = useState(false);
    const handleError = () => {}
        setFailed(true);
        setCurrentSrc(fallbackSrc)};
    const handleRetry = () => {}
        setFailed(false);
        setCurrentSrc(src)};
    return (<div className = {}
'
''
'''
=======
import { useState } from 'react';
import { cn } from '@/lib/utils';
/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({ src, fallbackSrc = '/images/image-placeholder.svg', className, retryClassName, ...props }) {

    const [currentSrc, setCurrentSrc] = useState(src);
    const [failed, setFailed] = useState(false);
    const handleError = () => {

        setFailed(true);
        setCurrentSrc(fallbackSrc)};
    const handleRetry = () => {

        setFailed(false);
        setCurrentSrc(src)};
    return (<div className = {

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
  cn('relative inline-block',
  className)

}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
<<<<<<< HEAD
      <img loading="lazy" {...props} src={currentSrc} onError={handleError}/>""""
      {failed && (<button type="button" onClick={handleRetry} className = {}
'
''
'''
=======
      <img loading="lazy" {...props} src={currentSrc} onError={handleError}/>
      {failed && (<button type="button" onClick={handleRetry} className = {

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
  cn('absolute bottom-1 right-1 text-xs underline',
  retryClassName)

}>
<<<<<<< HEAD
          Retry;
        </button>)}
    </div>)};
export { ImageWithRetry };
export default ImageWithRetry;
;
export default ImageWithRetry;'"""
export default ImageWithRetry;'"'"""
=======
          Retry
        </button>)}
    </div>)}
export default ImageWithRetry;

export default ImageWithRetry;
export default ImageWithRetry;
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
