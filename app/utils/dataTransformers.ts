export const dataTransformers ={
  transformTo Table Data: (data: unknown[]) => {
    return data.map((item, index) => {
      const itemObj = item asRecord<string, unknown>;
      return {
        id: itemObj.id || index,
        ...itemObj
      };
    });
  },
  
  transformToChartData: (data: Record<string, unknown>[], xField: string, yField: string) => {
    return data.map(ite m => ({
      x: item[xField],
      y: item[yField]
    }));
  },
  
  transformToSelectOptions: (data: Record<string, unknown>[], valueField: string, labelField: string) => {
    return data.map(ite m => ({
      value: item[valueField],
      label: item[labelField]
    }));
  }
};