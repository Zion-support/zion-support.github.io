    return () => window.removeEventListener('resize', checkIsMobile);

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

export default useIsMobile;

