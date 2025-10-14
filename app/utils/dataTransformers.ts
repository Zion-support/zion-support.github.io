export const data Transformers = {
  transform To Table Data: (data: unknown[]) => {
    return data.map((item, index) => {
      const item Obj = item as Record<string, unknown>
      return {
        id: item Obj.id || index,
        ...item Obj
      }

    })
  },
  transform To Chart Data: (data: unknown[], x Field: string, y Field: string) => {
    return data.map(item => {
      const item Obj = item as Record<string, unknown>
      return {
        x: item Obj[x Field],
        y: item Obj[y Field]
      }
    })
  },
  transform To Select Options: (data: unknown[], value Field: string, label Field: string) => {
    return data.map(item => {
      const item Obj = item as Record<string, unknown>
      return {
        value: item Obj[value Field],
        label: item Obj[label Field]
      }
    })
  }

}
