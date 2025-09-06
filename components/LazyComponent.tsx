  
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {_...props} />
    </Suspense>
  )
},

export default LazyComponent