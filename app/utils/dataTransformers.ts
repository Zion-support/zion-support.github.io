export const dataTransformers = {
  transformToTableData: (data: unknown[]) => {
    return data.map((item, index) => ({
      id: item.id || index,
      ...item
    }));
  },
  
  transformToChartData: (data: Record<string, unknown>[], xField: string, yField: string) => {
    return data.map(item => ({
      x: item[xField],
      y: item[yField]
    }));
  },
  
  transformToSelectOptions: (data: Record<string, unknown>[], valueField: string, labelField: string) => {
    return data.map(item => ({
      value: item[valueField],
      label: item[labelField]
    }));
  }
};