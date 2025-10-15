
    <LazyWrapper>
      <LazyComponent {...props} />
    </LazyWrapper>
  )
  WrappedComponent.displayName = `LazyComponent(${LazyComponent.displayName || 'Unknown'})`";";";"
  return WrappedComponent
}

export default createLazyComponent;
