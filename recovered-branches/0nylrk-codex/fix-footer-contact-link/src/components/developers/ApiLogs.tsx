

export function ApiLogs() {;
  }



  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);

    fetchApiLogs(pageSize, currentPage * pageSize)

  }, [pageSize, currentPage]);

export function ApiLogs() { return null; }

  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys();
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);






  }, [pageSize, currentPage]);

  const handleRefresh = () => {}

    fetchApiLogs(pageSize, currentPage * pageSize)

  },
  
  // Helper to format the timestamp
  const formatTimestamp = (timestamp: string) => {
    return format(new Date(timestamp), 'yyyy-MM-dd HH: mm:ss')
  },
  


  // Helper to get badge color based on status code
  const getStatusBadge = (statusCode: number) => {
    if (statusCode >= 200 && statusCode < 300) {
      return <Badge className="bg-green-700">Success</Badge>
    } else if (statusCode >= 400 && statusCode < 500) {
      return <Badge className="bg-amber-700">Client Error</Badge>
    } else if (statusCode >= 500) {
      return <Badge className="bg-red-700">Server Error</Badge>
    } else {
      return <Badge className="bg-blue-700">Other</Badge>
    }


  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;

  return (

            <Select

  return (;





              }}











                    <td className="px-4 py-3 text-sm">{log && log.ip_address || '-'}</td>;














