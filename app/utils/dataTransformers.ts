export const dataTransformers = {
  transformToTableData: (data: unknown[]) => {
    return data.map((item, index) => {
      const itemObj = item as Record<string, unknown>;
      return {
        id: itemObj.id || index,
        ...itemObj
      };
    });
  },
  
  transformToChartData: (data: Record<string, unknown>[], xField: string, yField: string) => {
    return data.map(item => ({
      x: item[xField],
      y: item[yField]
    }));
  },
  
  transformToSelectOptions: (data: Record<string, unknown>[], valueField: string, labelField: string) => {
    return data.map((item, index) => ({
      value: item[valueField],
      label: item[labelField],
      id: item.id || index
    }));
  },
  
  transformToKeyValuePairs: (data: Record<string, unknown>[]) => {
    return data.map(item => 
      Object.entries(item).map(([key, value]) => ({
        key,
        value
      }))
    );
  },
  
  transformToNestedStructure: (data: Record<string, unknown>[], groupBy: string) => {
    const grouped = data.reduce((acc, item) => {
      const key = item[groupBy] as string;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {} as Record<string, Record<string, unknown>[]>);
    
    return Object.entries(grouped).map(([key, value]) => ({
      group: key,
      items: value
    }));
  }
};