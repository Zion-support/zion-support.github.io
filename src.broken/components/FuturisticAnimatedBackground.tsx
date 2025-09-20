  const canvasRef = useRef < HTMLCanvasElement> (null) ;


    if(gridCtx) {

      // Draw enhanced grid
      gridCtx.strokeStyle = 'rgba(6, 182, 212, 0.1) ';
        gridCtx.beginPath () ;
        gridCtx.moveTo(x, 0) ;
        gridCtx.lineTo(x, gridCanvas.height) ;
        gridCtx.stroke () ;
      }


      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5);
