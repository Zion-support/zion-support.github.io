      setLoading(false)};

  }, [apiFunction, options]),
  useEffect(() => {,
    if (options.immediate) {,
      execute()};
  }, [execute, options.immediate]),
  return { data, loading, error, execute }};
};
};
};
};