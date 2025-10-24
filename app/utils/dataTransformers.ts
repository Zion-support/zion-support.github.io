// Data transformation utility
export interface TransformConfig {
  fields?: string[]
  mappings?: Record<string, string>
  filters?: Record<string, any>
}

  private config: TransformConfig

  constructor(config: TransformConfig = {}) {
    this.config = config
  }

  transform<T>(data: T[], config: TransformConfig = {}): T[] {
    const mergedConfig = { ...this.config, ...config }
    let result = [...data]

    // Apply field filtering
    if (mergedConfig.fields) {
      result = result.map(item => {
        const filtered: any = {}
        mergedConfig.fields!.forEach(field => {
          if (field in item) {
            filtered[field] = (item as any)[field]
          }
        })
        return filtered as T
      })
    }

    // Apply field mappings
    if (mergedConfig.mappings) {
      result = result.map(item => {
        const mapped: any = { ...item }
        Object.entries(mergedConfig.mappings!).forEach(([from, to]) => {
          if (from in mapped) {
            mapped[to] = mapped[from]
            delete mapped[from]
          }
        })
        return mapped as T
      })
    }

    // Apply filters
    if (mergedConfig.filters) {
      result = result.filter(item => {
        return Object.entries(mergedConfig.filters!).every(([key, value]) => {
          return (item as any)[key] === value
        })
      })
    }

    return result
  }

  groupBy<T>(data: T[], key: keyof T): Record<string, T[]> {
    return data.reduce((groups, item) => {
      const groupKey = String(item[key])
      if (!groups[groupKey]) {
        groups[groupKey] = []
      }
      groups[groupKey].push(item)
      return groups
    }, {} as Record<string, T[]>)
  }

  sortBy<T>(data: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] {
    return [...data].sort((a, b) => {
      const aVal = a[key]
      const bVal = b[key]
      
      if (aVal < bVal) return direction === 'asc' ? -1 : 1
      if (aVal > bVal) return direction === 'asc' ? 1 : -1
      return 0
    })
  }
}

