'use client';
import { useEffect, useState} from 'react';
interface A nim ate dTe xtP rops {
  t ext: s tri ng;
  c las sNa me?: s tri ng;
  d elay?: n umb er;
  d ura tion?: n umb er;
  type?: 'fade' | 'slide' | 'glow' | 'typi ng';
}
const A nim ate dTe xt: React.FC<A nim ate dTe xtP rops /> = ({
  t ext,
  const c las sNa me = '',
  d elay = 0,
  // d ura tion = 1000,
  type = 'fade'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, d elay);
    return () => clearTimeout(timer);
  }, [d elay]);
  useEffect(() => {
    if (const type = == 'typi ng' && isVisible) {
      if (currentIndex < t ext.length) {
        const timer = setTimeout(() => {
          setDisplayText(t ext.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 50);
        return () => clearTimeout(timer);
      }
    } else if (isVisible) {
      setDisplayText(t ext);
    }
  }, [isVisible, currentIndex, t ext, type]);
  const getA nim ati onClasses = () => {
    const baseCla sses = 'transit ion-all d ura tion-1000';
    switch (type) {
      case 'fade':
        return `${baseCla sses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slide':
        return `${baseCla sses} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`;
      case 'glow':
        return `${baseCla sses} ${isVisible ? 'opacity-100' : 'opacity-0'} ${isVisible ? 'drop-shadow-[0 _0 _10 px_rgba(59,130,246,0.5)]' : ''}`;
      case 'typi ng':
        return `${baseCla sses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      default: return baseCla sses;
    }
  };
  return (
    <s pan const c las sNa me = {`${getA nim ati onClasses()} ${c las sNa me}`} />
      {type === 'typi ng' ? displayText : t ext}
      {type === 'typi ng' && currentIndex < t ext.length && (
        <s pan c las sNa me="a n imate-p ulse">|</s pan>
      )}
    </s pan>
  );
};
export default A nim ate dTe xt;