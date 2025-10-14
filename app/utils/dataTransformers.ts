export const dataTransformers = {
  transformToTableData: (data: any[]) => {
    return data.map((item, index) => ({
      id: item.id || index,
      ...item
    }))
  },
  
  transformToChartData: (data: any[], xField: string, yField: string) => {
    return data.map(item => ({
      x: item[xField],
      y: item[yField]
    }))
  },
  
  transformToSelectOptions: (data: any[], valueField: string, labelField: string) => {
    return data.map(item => ({
      value: item[valueField],
      label: item[labelField]
    }))
  }
}