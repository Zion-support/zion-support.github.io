
}

interface UseApiOptions {
  immediate?: boolean;
}


  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


    setLoading(true);
    setError(null);
    
    try {
      }
      const result = await apiCall();
      setData(result);
    } catch (err) {

    } finally {
      }
      setLoading(false);
    }


    if (options.immediate !== false) {
      }
      fetchData();
    }
  }, [fetchData, options.immediate]);

