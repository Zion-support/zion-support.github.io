
  return (<div className=&quot;fixed inset - 0 -z - 10 overflow - hidden & quot    />

      <canvas;
        ref={canvas_ref}
        className=&quot;w - full h - full & quot;
        style={{ display: 'block' ,}
}
         />;
      {/* Additional overlay effects */}
<div className=&quot;absolute inset - 0 pointer - events - none & quot    />

        {/* Grid overlay for cyber variant */}
        {variant === 'cyber' && ({/* Quantum field lines */}
{variant === 'quantum' && (<div className=&quot;absolute inset - 0&quot    />
}
            {[...Array (8)].map ((_, i) => (<motion.div;}
                key={i}
                className=&quot;absolute w - px h - full bg - gradient - to - b from - transparent via - cyan - 400 / 30 to - transparent & quot;
                style={{{/* AI neural network overlay */}
{variant === 'ai' && (<div className=&quot;absolute inset - 0&quot    />
}
            {[...Array (6)].map ((_, i) => (<motion.div;}
                key={i}
                className=&quot;absolute w - full h - px bg - gradient - to - r from - transparent via - green - 400 / 20 to - transparent & quot;
                style={{top: `${(i + 1) * 16.67}%`}}
                  delay: i * 0.8}}
                 />))}
          </div>,
}
      </div>;