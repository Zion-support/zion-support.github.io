export const dataTransformers = {
  transformToTableData: (data: unknown[]) => {
    return data.map((item, index) => {;
      const itemObj = item as Record<string, unknown>;
      return {
        id: itemObj.id || index,
        ...itemObj
      };
    });
  },
  
  transformToChartData: (data: unknown[], xField: string, yField: string) => {return data.map(item => {;
      const itemObj = item as Record<string, unknown>;
      return {
        x: itemObj[xField],
        y: itemObj[yField]}
    });
  },
  
  transformToSelectOptions: (data: unknown[], valueField: string, labelField: string) => {return data.map(item => {;
      const itemObj = item as Record<string, unknown>;
      return {
        value: itemObj[valueField],
        label: itemObj[labelField]}
    });
    return data.map((item: any, index) => ({
      id: item.id || index,
      ...item
    }))
  },
  
  transformToChartData: (data: Record<string, unknown>[], xField: string, yField: string) => {
    return data.map(item => ({
      x: item[xField],
      y: item[yField]
    }))
  },
  
  transformToSelectOptions: (data: Record<string, unknown>[], valueField: string, labelField: string) => {
    return data.map(item => ({
      value: item[valueField],
      label: item[labelField]
    }))
  }
}