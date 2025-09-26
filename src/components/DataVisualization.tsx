'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';

interface DataVisualizationProps {
  data: {
    labels: string[];
    datasets: Array<{
      data: number[];
      label?: string;
    }>;
  };
  type: 'pie' | 'doughnut' | 'bar' | 'line' | 'area';
  width?: number;
  height?: number;
  showTooltips?: boolean;
  className?: string;
}

const DataVisualization: React.FC<DataVisualizationProps> = ({
  data,
  type,
  width = 400,
  height = 300,
  showTooltips = true,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      drawChart();
    }, 100);

    return () => clearTimeout(timer);
  }, [data, type, drawChart]);

  const drawChart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width: canvasWidth, height: canvasHeight } = canvas;
    const padding = 40;
    const chartWidth = canvasWidth - padding * 2;
    const chartHeight = canvasHeight - padding * 2;

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Set up colors
    const colors = [
      '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
      '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6B7280'
    ];

    // Draw pie chart
    const drawPieChart = (ctx: CanvasRenderingContext2D, width: number, height: number, colors: string[]) => {
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
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();

        // Draw inner circle for doughnut
        if (type === 'doughnut') {
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.arc(centerX, centerY, innerRadius, currentAngle, currentAngle + sliceAngle);
          ctx.closePath();
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }

        currentAngle += sliceAngle;
      });
    };

    // Draw bar chart
    const drawBarChart = (ctx: CanvasRenderingContext2D, width: number, height: number, padding: number, colors: string[]) => {
      const barWidth = width / data.labels.length * 0.8;
      const barSpacing = width / data.labels.length * 0.2;
      const maxValue = Math.max(...data.datasets[0].data);

      data.datasets[0].data.forEach((value, index) => {
        const barHeight = (value / maxValue) * height;
        const x = padding + index * (barWidth + barSpacing) + barSpacing / 2;
        const y = height + padding - barHeight;

        ctx.fillStyle = colors[index % colors.length];
        ctx.fillRect(x, y, barWidth, barHeight);
      });
    };

    // Draw line chart
    const drawLineChart = (ctx: CanvasRenderingContext2D, width: number, height: number, padding: number, colors: string[]) => {
      const maxValue = Math.max(...data.datasets[0].data);
      const minValue = Math.min(...data.datasets[0].data);
      const valueRange = maxValue - minValue;

      ctx.beginPath();
      ctx.strokeStyle = colors[0];
      ctx.lineWidth = 2;

      data.datasets[0].data.forEach((value, index) => {
        const x = padding + (index / (data.labels.length - 1)) * width;
        const y = height + padding - ((value - minValue) / valueRange) * height;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // Draw area fill
      if (type === 'area') {
        ctx.lineTo(padding + width, height + padding);
        ctx.lineTo(padding, height + padding);
        ctx.closePath();
        ctx.fillStyle = colors[0] + '20';
        ctx.fill();
      }
    };

    if (type === 'pie' || type === 'doughnut') {
      drawPieChart(ctx, canvasWidth, canvasHeight, colors);
    } else if (type === 'bar') {
      drawBarChart(ctx, chartWidth, chartHeight, padding, colors);
    } else if (type === 'line' || type === 'area') {
      drawLineChart(ctx, chartWidth, chartHeight, padding, colors);
    }
  }, [type, data]);

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!showTooltips) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Simple hover detection for bar charts
    if (type === 'bar') {
      const padding = 40;
      const chartWidth = canvas.width - padding * 2;
      const barWidth = chartWidth / data.labels.length * 0.8;
      const barSpacing = chartWidth / data.labels.length * 0.2;

      const index = Math.floor((x - padding) / (barWidth + barSpacing));
      if (index >= 0 && index < data.labels.length) {
        setHoveredIndex(index);
      } else {
        setHoveredIndex(null);
      }
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer"
      />
      {showTooltips && hoveredIndex !== null && (
        <div
          className="absolute bg-gray-900 text-white px-2 py-1 rounded text-sm pointer-events-none z-10"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
        >
          <div className="font-semibold">{data.labels[hoveredIndex]}</div>
          <div>{data.datasets[0].data[hoveredIndex]}</div>
        </div>
      )}
    </div>
  );
};

export default DataVisualization;