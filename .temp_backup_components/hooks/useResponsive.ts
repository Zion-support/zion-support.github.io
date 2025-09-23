        "isDesktop": width >= 1024})};

    updateDimensions(),
    window.addEventListener(,
  'resize', updateDimensions),
    return () => window.removeEventListener(,
  'resize', updateDimensions)}, []),
  return state};
export default useResponsive,
,
