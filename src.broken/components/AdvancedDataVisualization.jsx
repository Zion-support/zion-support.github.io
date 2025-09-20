
    { id: '1', name: 'Q1 Revenue', value: 1250000, category: 'Revenue', timestamp: new Date('2024 - 01 - 01') },
    { id: '2', name: 'Q2 Revenue', value: 1580000, category: 'Revenue', timestamp: new Date('2024 - 04 - 01') },
    { id: '3', name: 'Q3 Revenue', value: 1420000, category: 'Revenue', timestamp: new Date('2024 - 07 - 01') },
    { id: '4', name: 'Q4 Revenue', value: 1890000, category: 'Revenue', timestamp: new Date('2024 - 10 - 01') },
    { id: '5', name: 'Q1 Users', value: 45000, category: 'Users', timestamp: new Date('2024 - 01 - 01') },
    { id: '6', name: 'Q2 Users', value: 62000, category: 'Users', timestamp: new Date('2024 - 04 - 01') },
    { id: '7', name: 'Q3 Users', value: 58000, category: 'Users', timestamp: new Date('2024 - 07 - 01') },
    { id: '8', name: 'Q4 Users', value: 75000, category: 'Users', timestamp: new Date('2024 - 10 - 01') },
    { id: '9', name: 'Q1 Conversion', value: 3.2, category: 'Conversion', timestamp: new Date('2024 - 01 - 01') },
    { id: '10', name: 'Q2 Conversion', value: 3.8, category: 'Conversion', timestamp: new Date('2024 - 04 - 01') },
    { id: '11', name: 'Q3 Conversion', value: 3.5, category: 'Conversion', timestamp: new Date('2024 - 07 - 01') },
    { id: '12', name: 'Q4 Conversion', value: 4.1, category: 'Conversion', timestamp: new Date('2024 - 10 - 01') }
            <div>
              <h3 className="text-sm font - medium text-zion - slate mb-3">Chart Settings</h3>
              <div className="space - y-3">
                <label className="flex items - center gap-2">
                  <input type="checkbox" checked={chartConfig.showLegend} onChange = { (e) => setChartConfig(prev => ({ ...prev,
  showLegend: e.target.checked

}) ) } className="rounded border-zion - slate - light text-zion - cyan focus:ring - zion -cyan"/>
                  <span className="text-sm text-zion -slate">Show Legend</span>
                </label>
                <label className="flex items - center gap-2">
                  <input type="checkbox" checked={chartConfig.showGrid} onChange = { (e) => setChartConfig(prev => ({ ...prev,
  showGrid: e.target.checked

}) ) } className="rounded border-zion - slate - light text-zion - cyan focus:ring - zion -cyan"/>
                  <span className="text-sm text-zion -slate">Show Grid</span>
                </label>
                <label className="flex items - center gap-2">
                  <input type="checkbox" checked={chartConfig.animate} onChange = { (e) => setChartConfig(prev => ({ ...prev,
  animate: e.target.checked
