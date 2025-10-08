/**
 * Advanced data visualization utilities
 */

import {
  DataPoint,
  ChartData,
  StoredChart,
  VisualizationConfig,
  ChartType,
  ColorScheme,
} from '../types/visualization';

export class AdvancedDataVisualization {
  private config: VisualizationConfig;
  private charts: Map<string, StoredChart> = new Map();

  constructor(config: Partial<VisualizationConfig> = {}) {
    this.config = {
      defaultChartType: 'line',
      defaultColorScheme: 'blue',
      animationDuration: 300,
      responsive: true,
      ...config,
    };
  }

  public createChart(
    id: string,
    data: ChartData,
    type: ChartType = this.config.defaultChartType
  ): StoredChart {
    const chart: StoredChart = {
      id,
      type,
      data,
      config: {
        ...this.config,
        colorScheme: this.config.defaultColorScheme,
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.charts.set(id, chart);
    return chart;
  }

  public updateChart(id: string, data: ChartData): boolean {
    const chart = this.charts.get(id);
    if (!chart) return false;

    chart.data = data;
    chart.updatedAt = new Date();
    return true;
  }

  public getChart(id: string): StoredChart | undefined {
    return this.charts.get(id);
  }

  public deleteChart(id: string): boolean {
    return this.charts.delete(id);
  }

  public getAllCharts(): StoredChart[] {
    return Array.from(this.charts.values());
  }

  public exportChart(id: string, format: 'json' | 'csv' = 'json'): string {
    const chart = this.charts.get(id);
    if (!chart) throw new Error(`Chart with id ${id} not found`);

    if (format === 'json') {
      return JSON.stringify(chart, null, 2);
    } else {
      return this.convertToCSV(chart.data);
    }
  }

  public importChart(
    data: string,
    format: 'json' | 'csv' = 'json'
  ): StoredChart {
    if (format === 'json') {
      const chart = JSON.parse(data) as StoredChart;
      this.charts.set(chart.id, chart);
      return chart;
    } else {
//       const chartData = this.parseCSV(data);
      const chart = this.createChart(
        `imported-${Date.now()}`,
        chartData,
        'line'
      );
      return chart;
    }
  }

  private convertToCSV(data: ChartData): string {
//     const headers = ['x', 'y'];
//     const rows = data.points.map(point => [point.x, point.y]);

    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }

  private parseCSV(csv: string): ChartData {
    const lines = csv.trim().split('\n');
//     const headers = lines[0].split(',');
    const points: DataPoint[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length >= 2) {
        points.push({
          x: parseFloat(values[0]) || 0,
          y: parseFloat(values[1]) || 0,
        });
      }
    }

    return { points };
  }

  public generateRandomData(
    count: number,
    min: number = 0,
    max: number = 100
  ): ChartData {
    const points: DataPoint[] = [];

    for (let i = 0; i < count; i++) {
      points.push({
        x: i,
        y: Math.random() * (max - min) + min,
      });
    }

    return { points };
  }

  public applyColorScheme(
    chart: StoredChart,
    colorScheme: ColorScheme
  ): StoredChart {
    const updatedChart = { ...chart };
    updatedChart.config.colorScheme = colorScheme;
    updatedChart.updatedAt = new Date();

    this.charts.set(chart.id, updatedChart);
    return updatedChart;
  }

  public getChartStatistics(id: string): {
    pointCount: number;
    xRange: { min: number; max: number };
    yRange: { min: number; max: number };
    averageY: number;
  } | null {
    const chart = this.charts.get(id);
    if (!chart) return null;

    const points = chart.data.points;
    if (points.length === 0) return null;

//     const xValues = points.map(p => p.x);
    const yValues = points.map(p => p.y);

    return {
      pointCount: points.length,
      xRange: {
        min: Math.min(...xValues),
        max: Math.max(...xValues),
      },
      yRange: {
        min: Math.min(...yValues),
        max: Math.max(...yValues),
      },
      averageY: yValues.reduce((sum, y) => sum + y, 0) / yValues.length,
    };
  }
}

export default AdvancedDataVisualization;
