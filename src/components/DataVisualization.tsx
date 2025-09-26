import React, { useState, useEffect, useRef, useCallback } from 'react';

interface DataPoint {
  x: number;
  y: number;
  label: string;
  value: number;
  color?: string;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface DataVisualizationProps {
  type: 'line' | 'bar' | 'pie' | 'doughnut' | 'area';
  data: ChartData;
  title?: string;
  height?: number;
  showLegend?: boolean;
  showTooltips?: boolean;
  className?: string;
}

export const DataVisualization: React.FC<DataVisualizationProps> = ({
  type,
  data,
  title,
  height = 300,
  showLegend = true,
  showTooltips = true,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      drawChart();
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [data, type, drawChart]);

  const drawPieChart = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, colors: string[]) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 40;
    const innerRadius = type === 'doughnut' ? radius * 0.6 : 0;

    let currentAngle = 0;
    const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);

    data.datasets[0].data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      const color = colors[index % colors.length];

      // Draw slice
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      if (innerRadius > 0) {
        ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw label
      const labelAngle = currentAngle + sliceAngle / 2;
      const labelX = centerX + Math.cos(labelAngle) * (radius + 20);
      const labelY = centerY + Math.sin(labelAngle) * (radius + 20);

      ctx.fillStyle = '#374151';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(data.labels[index], labelX, labelY);

      // Draw percentage
      const percentage = ((value / total) * 100).toFixed(1);
      ctx.fillText(`${percentage}%`, labelX, labelY + 15);

      currentAngle += sliceAngle;
    });
  }, [data, type]);

  const drawBarChart = useCallback((ctx: CanvasRenderingContext2D, chartWidth: number, chartHeight: number, padding: number, colors: string[]) => {
    const barWidth = chartWidth / data.labels.length * 0.8;
    const barSpacing = chartWidth / data.labels.length * 0.2;
    const maxValue = Math.max(...data.datasets[0].data);

    data.datasets[0].data.forEach((value, index) => {
      const barHeight = (value / maxValue) * chartHeight;
      const x = padding + index * (barWidth + barSpacing) + barSpacing / 2;
      const y = padding + chartHeight - barHeight;

      // Draw bar
      ctx.fillStyle = colors[index % colors.length];
      ctx.fillRect(x, y, barWidth, barHeight);

      // Draw value on top
      ctx.fillStyle = '#374151';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(value.toString(), x + barWidth / 2, y - 5);

      // Draw label
      ctx.fillText(data.labels[index], x + barWidth / 2, padding + chartHeight + 20);
    });
  }, [data]);

  const drawLineChart = useCallback((ctx: CanvasRenderingContext2D, chartWidth: number, chartHeight: number, padding: number, colors: string[]) => {
    const maxValue = Math.max(...data.datasets[0].data);
    const minValue = Math.min(...data.datasets[0].data);
    const valueRange = maxValue - minValue;

    const points = data.datasets[0].data.map((value, index) => ({
      x: padding + (index / (data.labels.length - 1)) * chartWidth,
      y: padding + chartHeight - ((value - minValue) / valueRange) * chartHeight,
      value
    }));

    // Draw area under line
    if (type === 'area') {
      ctx.beginPath();
      ctx.moveTo(points[0].x, padding + chartHeight);
      points.forEach(point => ctx.lineTo(point.x, point.y));
      ctx.lineTo(points[points.length - 1].x, padding + chartHeight);
      ctx.closePath();
      ctx.fillStyle = colors[0] + '20';
      ctx.fill();
    }

    // Draw line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.strokeStyle = colors[0];
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw points
    points.forEach((point, index) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = colors[0];
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw value
      ctx.fillStyle = '#374151';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(point.value.toString(), point.x, point.y - 10);

      // Draw label
      ctx.fillText(data.labels[index], point.x, padding + chartHeight + 20);
    });
  }, [data, type]);

  const drawChart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height: canvasHeight } = canvas;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = canvasHeight - padding * 2;

    // Clear canvas
    ctx.clearRect(0, 0, width, canvasHeight);

    // Set up colors
    const colors = [
      '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
      '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6B7280'
    ];

    if (type === 'pie' || type === 'doughnut') {
      drawPieChart(ctx, width, canvasHeight, colors);
    } else if (type === 'bar') {
      drawBarChart(ctx, chartWidth, chartHeight, padding, colors);
    } else if (type === 'line' || type === 'area') {
      drawLineChart(ctx, chartWidth, chartHeight, padding, colors);
    }
  }, [type, drawPieChart, drawBarChart, drawLineChart]);

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!showTooltips) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Simple hover detection for pie charts
    if (type === 'pie' || type === 'doughnut') {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) / 2 - 40;
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

      if (distance <= radius) {
        const angle = Math.atan2(y - centerY, x - centerX);
        const normalizedAngle = (angle + Math.PI) / (2 * Math.PI);
        const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
        
        let currentAngle = 0;
        data.datasets[0].data.forEach((value, index) => {
          const sliceAngle = (value / total) * 2 * Math.PI;
          if (normalizedAngle >= currentAngle && normalizedAngle < currentAngle + sliceAngle) {
            setHoveredIndex(index);
            return;
          }
          currentAngle += sliceAngle;
        });
      } else {
        setHoveredIndex(null);
      }
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={400}
          height={height}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredIndex(null)}
          className="w-full h-full"
        />
      </div>

      {showLegend && (
        <div className="mt-4 flex flex-wrap gap-2">
          {data.labels.map((label, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
                hoveredIndex === index ? 'bg-gray-100' : ''
              }`}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              />
              <span className="text-gray-700">{label}</span>
              <span className="text-gray-500">
                ({data.datasets[0].data[index]})
              </span>
            </div>
          ))}
        </div>
      )}

      {hoveredIndex !== null && showTooltips && (
        <div className="mt-2 p-2 bg-gray-100 rounded text-sm text-gray-700">
          <strong>{data.labels[hoveredIndex]}:</strong> {data.datasets[0].data[hoveredIndex]}
        </div>
      )}
    </div>
  );
};