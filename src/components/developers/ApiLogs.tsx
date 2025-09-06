
import { useState, useEffect } from "react"
import { format } from "date-fns"
import { List, RefreshCw } from 'lucide-react'import { useApiKeys } from "@/hooks/useApiKeys"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ApiLogsChart } from "./ApiLogsChart"
export function ApiLogs() {
  const { logs, totalLogs, loading, fetchApiLogs } = useApiKeys()
  const [pageSize, setPageSize] = useState(25)
  const [currentPage, setCurrentPage] = useState(0)
  const hasNextPage = currentPage < totalPages - 1
  const hasPrevPage = currentPage > 0
  )
}
  )
}
;