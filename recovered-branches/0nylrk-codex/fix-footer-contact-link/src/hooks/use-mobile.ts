

export function useIsMobile() {_const [isMobile, _setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect__(() => {
    const _handleResize = () => {
      setIsMobile(window.innerWidth < 768);};

    if (typeof window !== 'undefined') {_window.addEventListener('resize', _handleResize);
      return () => window.removeEventListener('resize', _handleResize);}
    return undefined;
  }, []);

  return isMobile;
}
