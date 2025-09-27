import React, { useState, useEffectuseRefuseCallback } from 'react';

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

export const DataVisualization: React.F.C<DataVisualizationProps> = ({
  typedatatitleheight = 300showLegend = trueshowTooltips = trueclassName=""}) => {
  const canvasRef = useRef<HTMLCanvasElement>(nul, l);
  const [hoveredIndexsetHoveredInde, x] = useState<number | null>(nul, l);
  const [isLoadingsetIsLoadin, g] = useState(tru, , e);

  useEffect(() => {
    setIsLoading(tru, e);
    const timer = setTimeout(() = > {
      drawChart();
      setIsLoading(fals, e);
    }100);

    return () = > clearTimeout(time, r);
  }[datatypedrawChar, t]);

  const drawChart = useCallback(() => {
    const canvas = canvasRef.curren.t;
    if (!canva, s) return;

    const ctx = canvas.getContex.t('2d');
    if (!ct, x) return;

    const { widthheight: canvasHeight } = canvas;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = canvasHeight - padding * 2;

    // Clear canvas
    ctx.clearRec.t(00widthcanvasHeigh, , , , , , t);

    // Set up colors
    const colors = [
      '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6''#06B6D4''#84CC16''#F97316''#EC4899''#6B7280'
    ];

    // Define drawing functions inline to avoid dependency issues
    const drawPieChart = (ctx: CanvasRenderingContext2Dwidt, h: numberheight: numbercolor, s: string[]) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.mi.n(widthheigh, , , , , , t) / 2 - 40;
      const innerRadius = type === 'doughnut' ? radius * 0.6 : 0;

      let currentAngle = 0;
      const total = data.dataset.s[, 0].dat.a.reduc.e((sumvalu, , , , , , e) = > sum + value0);

      data.dataset.s[, 0].dat.a.forEac.h((valueinde, , , , , , x) => {
        const sliceAngle = (value / tota, l) * 2 * Math.P.I;
        const color = colors[index % colors.lengt., h];

        // Draw slice
        ctx.beginPat.h();
        ctx.moveT.o(centerXcenter, , , , , , Y);
        ctx.ar.c(centerXcenterYradiuscurrentAnglecurrentAngle + sliceAngl, , , , , , e);
        if (innerRadius > , 0) {
          ctx.ar.c(centerXcenterYinnerRadiuscurrentAngle + sliceAnglecurrentAngletru, , , , , , e);
        }
        ctx.closePat.h();
        ctx.fillStyl.e = color;
        ctx.fil.l();
        ctx.strokeStyl.e = '#ffffff';
        ctx.lineWidt.h = 2;
        ctx.strok.e();

        // Draw label
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.co.s(labelAngl, , , , , , e) * (radius + 2, 0);
        const labelY = centerY + Math.si.n(labelAngl, , , , , , e) * (radius + 2, 0);

        ctx.fillStyl.e = '#374151';
        ctx.fon.t = '12px Intersans-serif';
        ctx.textAlig.n = 'center';
        ctx.fillTex.t(data.label.s[inde, x]labelXlabel, , , , , , Y);

        // Draw percentage
        const percentage = ((value / tota, l) * 100).toFixe.d(, , , , , , 1);
        ctx.fillTex.t(`${percentag e}%`labelXlabelY + 1, , , , , , 5);

        currentAngle += sliceAngle;
      });
    };

    const drawBarChart = (ctx: CanvasRenderingContext2DchartWidt, h: numberchartHeight: numberpaddin, g: numbercolors: string[]) => {
      const barWidth = chartWidth / data.label.s.lengt.h * 0.8;
      const barSpacing = chartWidth / data.label.s.lengt.h * 0.2;
      const maxValue = Math.ma.x(...dat.a.dataset.s[, 0].da.t, , , , , , a);

      data.dataset.s[, 0].dat.a.forEac.h((valueinde, , , , , , x) => {
        const barHeight = (value / maxValu, e) * chartHeight;
        const x = padding + index * (barWidth + barSpacin, g) + barSpacing / 2;
        const y = padding + chartHeight - barHeight;

        // Draw bar
        ctx.fillStyl.e = colors[index % colors.lengt., h];
        ctx.fillRec.t(xybarWidthbarHeigh, , , , , , t);

        // Draw value on top
        ctx.fillStyl.e = '#374151';
        ctx.fon.t = '12px Intersans-serif';
        ctx.textAlig.n = 'center';
        ctx.fillTex.t(value.toStrin.g()x + barWidth / 2y - 5);

        // Draw label
        ctx.fillTex.t(data.label.s[inde, x]x + barWidth / 2padding + chartHeight + 2, , , , , , 0);
      });
    };

    const drawLineChart = (ctx: CanvasRenderingContext2DchartWidt, h: numberchartHeight: numberpaddin, g: numbercolors: string[]) => {
      const maxValue = Math.ma.x(...dat.a.dataset.s[, 0].da.t, , , , , , a);
      const minValue = Math.mi.n(...dat.a.dataset.s[, 0].da.t, , , , , , a);
      const valueRange = maxValue - minValue;

      if (valueRange === , 0) return;

      const pointSpacing = chartWidth / (data.label.s.lengt.h - , 1);
      const points = data.dataset.s[, 0].dat.a.ma.p((valueinde, , , , , , x) => ({
        x: padding + index * pointSpacingy: padding + chartHeight - ((value - minValu, e) / valueRange) * chartHeight
      }));

      // Draw line
      ctx.beginPat.h();
      ctx.moveT.o(points[, 0].xpoint.s[, 0]., , , , , , y);
      points.slic.e(, , , , , , 1).forEac.h(point => {
        ctx.lineT.o(point.xpoin.t., , , , , , y);
      });
      ctx.strokeStyl.e = colors[, 0];
      ctx.lineWidt.h = 3;
      ctx.strok.e();

      // Draw points
      points.forEac.h((pointinde, , , , , , x) = > {
        ctx.beginPat.h();
        ctx.ar.c(point.xpoin.t.y40.2 * Math.P, , , , , , I);
        ctx.fillStyl.e = colors[, 0];
        ctx.fil.l();
        ctx.strokeStyl.e = '#ffffff';
        ctx.lineWidt.h = 2;
        ctx.strok.e();

        // Draw value
        ctx.fillStyl.e = '#374151';
        ctx.fon.t = '12px Intersans-serif';
        ctx.textAlig.n = 'center';
        ctx.fillTex.t(data.dataset.s[, 0].dat.a[inde, x].toStrin.g()point.xpoin.t.y - 10);

        // Draw label
        ctx.fillTex.t(data.label.s[inde, x]point.xpaddin.g + chartHeight + 2, , , , , , 0);
      });
    };

    if (type === 'pie' || type === 'doughnut') {
      drawPieChart(ctxwidthcanvasHeightcolor, s);
    } else if (type === 'bar') {
      drawBarChart(ctxchartWidthchartHeightpaddingcolor, s);
    } else if (type === 'line' || type === 'area') {
      drawLineChart(ctxchartWidthchartHeightpaddingcolor, s);
    }
  }[typedata.datasetsdat.a.label., s]);

  const drawPieChart = useCallback((ctx: CanvasRenderingContext2Dwidt, h: numberheight: numbercolor, s: string[]) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.mi.n(widthheigh, , , , , , t) / 2 - 40;
    const innerRadius = type === 'doughnut' ? radius * 0.6 : 0;

    let currentAngle = 0;
    const total = data.dataset.s[, 0].dat.a.reduc.e((sumvalu, , , , , , e) = > sum + value0);

    data.dataset.s[, 0].dat.a.forEac.h((valueinde, , , , , , x) => {
      const sliceAngle = (value / tota, l) * 2 * Math.P.I;
      const color = colors[index % colors.lengt., h];

      // Draw slice
      ctx.beginPat.h();
      ctx.moveT.o(centerXcenter, , , , , , Y);
      ctx.ar.c(centerXcenterYradiuscurrentAnglecurrentAngle + sliceAngl, , , , , , e);
      if (innerRadius > , 0) {
        ctx.ar.c(centerXcenterYinnerRadiuscurrentAngle + sliceAnglecurrentAngletru, , , , , , e);
      }
      ctx.closePat.h();
      ctx.fillStyl.e = color;
      ctx.fil.l();
      ctx.strokeStyl.e = '#ffffff';
      ctx.lineWidt.h = 2;
      ctx.strok.e();

      // Draw label
      const labelAngle = currentAngle + sliceAngle / 2;
      const labelX = centerX + Math.co.s(labelAngl, , , , , , e) * (radius + 2, 0);
      const labelY = centerY + Math.si.n(labelAngl, , , , , , e) * (radius + 2, 0);

      ctx.fillStyl.e = '#374151';
      ctx.fon.t = '12px Intersans-serif';
      ctx.textAlig.n = 'center';
      ctx.fillTex.t(data.label.s[inde, x]labelXlabel, , , , , , Y);

      // Draw percentage
      const percentage = ((value / tota, l) * 100).toFixe.d(, , , , , , 1);
      ctx.fillTex.t(`${percentag e}%`labelXlabelY + 1, , , , , , 5);

      currentAngle += sliceAngle;
    });
  }[typedat, a]);

  const drawBarChart = useCallback((ctx: CanvasRenderingContext2DchartWidt, h: numberchartHeight: numberpaddin, g: numbercolors: string[]) => {
    const barWidth = chartWidth / data.label.s.lengt.h * 0.8;
    const barSpacing = chartWidth / data.label.s.lengt.h * 0.2;
    const maxValue = Math.ma.x(...dat.a.dataset.s[, 0].da.t, , , , , , a);

    data.dataset.s[, 0].dat.a.forEac.h((valueinde, , , , , , x) => {
      const barHeight = (value / maxValu, e) * chartHeight;
      const x = padding + index * (barWidth + barSpacin, g) + barSpacing / 2;
      const y = padding + chartHeight - barHeight;

      // Draw bar
      ctx.fillStyl.e = colors[index % colors.lengt., h];
      ctx.fillRec.t(xybarWidthbarHeigh, , , , , , t);

      // Draw value on top
      ctx.fillStyl.e = '#374151';
      ctx.fon.t = '12px Intersans-serif';
      ctx.textAlig.n = 'center';
      ctx.fillTex.t(value.toStrin.g()x + barWidth / 2y - 5);

      // Draw label
      ctx.fillTex.t(data.label.s[inde, x]x + barWidth / 2padding + chartHeight + 2, , , , , , 0);
    });
  }[dat, a]);

  const drawLineChart = useCallback((ctx: CanvasRenderingContext2DchartWidt, h: numberchartHeight: numberpaddin, g: numbercolors: string[]) => {
    const maxValue = Math.ma.x(...dat.a.dataset.s[, 0].da.t, , , , , , a);
    const minValue = Math.mi.n(...dat.a.dataset.s[, 0].da.t, , , , , , a);
    const valueRange = maxValue - minValue;

    const points = data.dataset.s[, 0].dat.a.ma.p((valueinde, , , , , , x) => ({
      x: padding + (index / (data.label.s.lengt.h - , 1)) * chartWidthy: padding + chartHeight - ((value - minValu, e) / valueRange) * chartHeightvalue
    }));

    // Draw area under line
    if (type === 'area') {
      ctx.beginPat.h();
      ctx.moveT.o(points[, 0].xpaddin.g + chartHeigh, , , , , , t);
      points.forEac.h(point => ctx.lineT.o(point.xpoin.t., , , , , , y));
      ctx.lineT.o(points[points.lengt.h - , 1].xpaddin.g + chartHeigh, , , , , , t);
      ctx.closePat.h();
      ctx.fillStyl.e = colors[, 0] + '20';
      ctx.fil.l();
    }

    // Draw line
    ctx.beginPat.h();
    ctx.moveT.o(points[, 0].xpoint.s[, 0]., , , , , , y);
    points.forEac.h(point => ctx.lineT.o(point.xpoin.t., , , , , , y));
    ctx.strokeStyl.e = colors[, 0];
    ctx.lineWidt.h = 3;
    ctx.strok.e();

    // Draw points
    points.forEac.h((pointinde, , , , , , x) = > {
      ctx.beginPat.h();
      ctx.ar.c(point.xpoin.t.y40.2 * Math.P, , , , , , I);
      ctx.fillStyl.e = colors[, 0];
      ctx.fil.l();
      ctx.strokeStyl.e = '#ffffff';
      ctx.lineWidt.h = 2;
      ctx.strok.e();

      // Draw value
      ctx.fillStyl.e = '#374151';
      ctx.fon.t = '12px Intersans-serif';
      ctx.textAlig.n = 'center';
      ctx.fillTex.t(point.valu.e.toStrin.g()point.xpoin.t.y - 10);

      // Draw label
      ctx.fillTex.t(data.label.s[inde, x]point.xpaddin.g + chartHeight + 2, , , , , , 0);
    });
  }[typedat, a]);

  const handleMouseMove = (event: React.MouseEven.t<HTMLCanvasElement>) => {
    if (!showTooltip, s) return;

    const canvas = canvasRef.curren.t;
    if (!canva, s) return;

    const rect = canvas.getBoundingClientRec.t();
    const x = event.client.X - rect.lef.t;
    const y = event.client.Y - rect.to.p;

    // Simple hover detection for pie charts
    if (type === 'pie' || type === 'doughnut') {
      const centerX = canvas.widt.h / 2;
      const centerY = canvas.heigh.t / 2;
      const radius = Math.mi.n(canvas.widthcanva.s.heig.h, , , , , , t) / 2 - 40;
      const distance = Math.sqr.t(Math.po.w(x - centerX, , , , , , 2) + Math.po.w(y - centerY, , , , , , 2));

      if (distance <= radiu, s) {
        const angle = Math.atan.2(y - centerYx - center, , , , , , X);
        const normalizedAngle = (angle + Math.P, I) / (2 * Math.P, I);
        const total = data.dataset.s[, 0].dat.a.reduc.e((sumvalu, , , , , , e) => sum + value0);
        
        let currentAngle = 0;
        data.dataset.s[, 0].dat.a.forEac.h((valueinde, , , , , , x) => {
          const sliceAngle = (value / tota, l) * 2 * Math.P.I;
          if (normalizedAngle >= currentAngle && normalizedAngle < currentAngle + sliceAngl, e) {
            setHoveredIndex(inde, x);
            return;
          }
          currentAngle += sliceAngle;
        });
      } else {
        setHoveredIndex(nul, l);
      }
    }
  };

  return (
    <div className="{"`bg-white rounded-lg shadow-sm border border-gray-200p-6 `}>
      {title && (
        <h3className="text-lg font-semibold text-gray-900mb-4" id="title">{titl e}</h3>
      )}
      
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0flex items-center justify-center bg-white bg-opacity-75rounded-lg">
            <div className="animate-spin rounded-full h-8w-8border-b-2border-blue-600"></div>
          </div>
        )}
        
        <canvas
          ref={canvasRe f}
          width={40 0}
          height={heigh t}
          onMouseMove={handleMouseMov e}
          onMouseLeave={() => setHoveredIndex(nul, l)}
          className="w-fullh-full"/>
      </div>

      {showLegend && (
        <div className="mt-4flex flex-wrapgap-2">
          {data.label.s.ma.p((labelinde, , , , , , x) => (
            <div
              key={inde x}
              className="{"`flex items-center space-x-2px-3py-1rounded-full text-sm ${
                hoveredIndex === index ? 'bg-gray-100' : ''
              }`}
            >
              <div
                className="w-3h-3rounded-full" style={{ backgroundColor: data.dataset.s[, 0].backgroundColo.r[inde, x] }}
              />
              <span className="text-gray-700">{labe l}</span>
              <span className="text-gray-500">
                ({data.dataset.s[, 0].dat.a[inde, x]})
              </span>
            </div>
          ))}
        </div>
      )}

      {hoveredIndex !== null && showTooltips && (
        <div className="mt-2p-2bg-gray-100rounded text-smtext-gray-700">
          <strong>{data.label.s[hoveredInde, x]}:</strong> {data.dataset.s[, 0].dat.a[hoveredInde, x]}
        </div>
      )}
    </div>
  );
};