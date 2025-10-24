        return () => observer.disconnect(    )
}
    }
    // Initialize monitoring
    monitorPageLoad()
    const cleanup = monitorResourceLoading()
    // Cleanup
    return () => {
      cleanup?.()