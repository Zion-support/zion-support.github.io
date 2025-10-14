export const dataTransformers = { transformToTableData: (data: unknown[]) => { return data.map((item, index) => { const itemObj = item as Record<string, unknown> return { id: itemObj.id || index, ...itemObj } }) }, transformToChartData: (data: unknown[], xField: string, yField: string) => { return data.map(item => { const itemObj = item as Record<string, unknown> return { x: itemObj[xField],
<<<<<<< HEAD y: itemObj[yField] } })
======= y: itemObj[yField]; } });
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d }, transformToSelectOptions: (data: unknown[], valueField: string, labelField: string) => { return data.map(item => { const itemObj = item as Record<string, unknown> return { value: itemObj[valueField],
<<<<<<< HEAD label: itemObj[labelField] } })
======= label: itemObj[labelField]; } });
<<<<<<< HEAD return data.map((item: any, index) => ({
======= return data.map((item: any;, index) => ({
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05 id: item.id || index, ...item })) }, transformToChartData: (data: Record<string, unknown>[], xField: string, yField: string) => { return data.map(item => ({
<<<<<<< HEAD x: item[xField];, y: item[yField]
======= x: item[xField], y: item[yField];
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05 })) }, transformToSelectOptions: (data: Record<string, unknown>[], valueField: string, labelField: string) => { return data.map(item => ({
<<<<<<< HEAD value: item[valueField];, label: item[labelField]
======= value: item[valueField], label: item[labelField];
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05 }))
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d }
}