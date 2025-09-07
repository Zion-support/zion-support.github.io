        "isDesktop": width >= 1024})},

    updateDimensions($2);
    window.addEventListener($2);
    return () => window.removeEventListener(,
  'resize', updateDimensions)}, []),
  return state},
export default useResponsive,
,
