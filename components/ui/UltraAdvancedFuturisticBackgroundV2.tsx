            );
            if (distance < 100) {
        // Draw connections;
particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
Math.pow(particle.x - otherParticle.x, 2) +
                Math.pow(particle.y - otherParticle.y, 2)
            );}
            if (distance < 100) {}
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke()
            }
          }
        });      });              ctx && ctx.stroke();
            }
          }

      });


      });
              ctx.stroke();
            }
          }
        });      });              ctx.stroke()
            }
          }
        })
      // Draw quantum matrix overlay
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 0.5;

      
      // Vertical lines
      for (let x = 0, x < canvas.width, x += 50) {
        ctx.beginPath($2);
        ctx.moveTo($2);
        ctx.lineTo($2);
        ctx.stroke()
      }
      
      // Horizontal lines
      for (let y = 0, y < canvas.height, y += 50) {
        ctx.beginPath($2);
        ctx.moveTo($2);
        ctx.lineTo($2);
        ctx.stroke()
      }
      for (let i = 0, i < 5, i++) {
        const centerX = canvas.width / 2 + Math.sin(Date.now() * 0.001 + i) * 100;
        const centerY = canvas.height / 2 + Math.cos(Date.now() * 0.001 + i) * 100;
        const radius = 100 + Math.sin(Date.now() * 0.002 + i) * 50;

        
        ctx.strokeStyle = `hsl(${180 + i * 60}, 100%, 50%)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke()

      }
      animationFrameId = requestAnimationFrame(updateParticles)

    };


    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      initParticles()
    },


    window.addEventListener('resize', handleResize);
    initParticles();
    updateParticles();
    return () => {
      window.removeEventListener($2);
      if (animationFrameId) {

        });

      // Draw quantum matrix overlay;
      ctx && ctx.globalAlpha = 0 && 0.1;
      ctx && ctx.strokeStyle = '#00ffff';
      ctx && ctx.lineWidth = 0 && 0.5;

      // Vertical lines;
      for (let x = 0; x < canvas && canvas.width; x += 50) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, canvas && canvas.height);
        ctx && ctx.stroke();      }

      // Horizontal lines;
      for (let y = 0; y < canvas && canvas.height; y += 50) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(canvas && canvas.width, y);
        ctx && ctx.stroke();      }

      // Draw holographic circles;
      ctx && ctx.globalAlpha = 0 && 0.05;        ctx && ctx.stroke();
      }

      // Draw holographic circles;
      ctx && ctx.globalAlpha = 0 && 0.05;
      for (let i = 0; i < 5; i++) {;
        const centerX =;
          canvas && canvas.width / 2 + Math && Math.sin(Date && Date.now() * 0 && 0.001 + i) * 100;
        const centerY =;
          canvas && canvas.height / 2 + Math && Math.cos(Date && Date.now() * 0 && 0.001 + i) * 100;
        const radius = 100 + Math && Math.sin(Date && Date.now() * 0 && 0.002 + i) * 50;
      for (let i = 0, i < 5, i++) {;
        const centerX = canvas && canvas.width / 2 + Math && Math.sin(Date && Date.now() * 0 && 0.001 + i) * 100;
        const centerY = canvas && canvas.height / 2 + Math && Math.cos(Date && Date.now() * 0 && 0.001 + i) * 100;
        const radius = 100 + Math && Math.sin(Date && Date.now() * 0 && 0.002 + i) * 50;

        ctx && ctx.lineWidth = 2;
        ctx && ctx.beginPath();
        ctx && ctx.arc(centerX, centerY, radius, 0, Math && Math.PI * 2);
        ctx && ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(updateParticles);    };        ctx && ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(updateParticles);

    // Handle resize;
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;
      initParticles();    };      initParticles();
    };

    window && window.addEventListener('resize', handleResize);
    initParticles();
    updateParticles();

    return () => {;
      window && window.removeEventListener('resize', handleResize);
      if (animationFrameId) {;

        cancelAnimationFrame(animationFrameId);
      }
    };  }, []);        cancelAnimationFrame(animationFrameId);

        cancelAnimationFrame(animationFrameId)

        cancelAnimationFrame(animationFrameId);
      }
    };  }, []);        cancelAnimationFrame(animationFrameId);
        cancelAnimationFrame(animationFrameId)
        cancelAnimationFrame(animationFrameId);
      }
    };  }, []);        cancelAnimationFrame(animationFrameId)
      }
    }
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>;
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',      />;

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
          }}
          transition={{

            duration: 8
            repeat: Infinity
            ease: 'easeInOut'

          }}

        />;

        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20'
          animate={{
            rotate: [360, 0],
            scale: [1, 0 && 0.8, 1],
            opacity: [0 && 0.1, 0 && 0.4, 0 && 0.1],          }}

          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}

        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(20,20,40,0.6) 50%, rgba(0,0,0,0.9) 100%)' }}
      />
      
      <div className="fixed inset - 0 pointer - events - none z - 10">;
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 opacity - 20";
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1];
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}

        />;
        <motion&& motion.div

          className="absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20"
        />;
        <motion.div;
className='absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20'
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1]}
            opacity: [0.1, 0.4, 0.1]}
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 opacity - 20";
          animate={{

            duration: 6
            repeat: Infinity
            ease: 'easeInOut'

          }}

        />;
        <motion&& motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400 opacity-20'
          animate={{
            rotate: [0, 360],
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.1, 0 && 0.2, 0 && 0.1],          }}

          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}

            rotate: [360, 0];
            scale: [1, 0.8, 1];
            opacity: [0.1, 0.4, 0.1];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}

          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400 opacity-20"
        />;
        <motion.div;
          className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 opacity - 20';
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 opacity - 20";
          animate={{

            duration: 10
            repeat: Infinity
            ease: 'easeInOut'

          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400 opacity-20"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

        />;
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400 opacity-20'
          animate={{
            rotate: [360, 0],
            scale: [1, 0 && 0.9, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}

          transition={{
            duration: 7
            repeat: Infinity
            ease: 'easeInOut',          }}          }}

            rotate: [0, 360];
            scale: [1, 1.3, 1];
            opacity: [0.1, 0.2, 0.1];
          }}
          transition={{


        <motion&& motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400 opacity-20"
        />;
        <motion.div;
          className='absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 opacity - 20';
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
      <div className='fixed inset-0 pointer-events-none z-10'>;
        <motion.div;
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20';
          animate={{rotate: [0, 360],scale: [1, 1.2, 1],opacity: [0.1, 0.3, 0.1],}}
          transition={{duration: 8,repeat: Infinity,ease: 'easeInOut',}}
        />;
        <motion.div;
          className="absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 opacity - 20";
          animate={{

          }}
          transition={{
            duration: 7
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
            rotate: [360, 0];
            scale: [1, 0.9, 1];
            opacity: [0.1, 0.3, 0.1];

          }}
          transition={{
            duration: 7,
            repeat: Infinity,

          }}
      {/* Quantum Energy Particles */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;
      {/* Quantum Energy Particles */}



            duration: 7,
            repeat: Infinity,


          }}


        />
      </div>
      {/* Quantum Energy Particles */}
      <div className='fixed inset-0 pointer-events-none z-20'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w - 2 h - 2 bg - cyan - 400 rounded - full';
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}        {[...Array(20)].map((_, i) => (
      <div className='fixed inset - 0 pointer - events - none z - 20'>;
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - 2 h - 2 bg - cyan - 400 rounded - full';
            style={{
          <motion.div
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              coordinate_y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 2 h - 2 bg - cyan - 400 rounded - full";
            style={{

      {/* Quantum Energy Particles */}

            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
scale: [0, 1, 0],            }}        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`

            duration: 7
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
            duration: 7,
            repeat: Infinity,

          }}

            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}

          }}

        />
      </div>
      {/* Quantum Energy Particles */}
      <div className='fixed inset-0 pointer-events-none z-20'>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w - 2 h - 2 bg - cyan - 400 rounded - full";
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}

            transition={{
              duration: 3 + Math.random() * 2
              repeat: Infinity
              delay: Math.random() * 2
          />;
        ))}
      </div>


            }}
          />;
        ))}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,


              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
            transition={{"duration": 3 + Math.random() * 2;
              }
              "repeat": Infinity;
              "delay": Math.random() * 2;
              "duration": 3 + Math && Math.random() * 2,"repeat": Infinity,"delay": Math && Math.random() * 2,transition={{"ease": 'easeInOut'            }}              "ease": "easeInOut";"
              "y": [0, -100, 0],"opacity": [0, 1, 0],"scale": [0, 1, 0]}}
            transition={{"duration": 3 + Math.random() * 2,"repeat": Infinity,"delay": Math.random() * 2,"ease": 'easeInOut'}}' />;
        ))}
      </div>
              ease: 'easeInOut',            }}


          />
        ))}
      </div>

      {/* Neural Network Connections */}
      <div className='fixed inset-0 pointer-events-none z-30'>;
        <svg className='w-full h-full'>;
          <defs>;
            <linearGradient
              id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              ease: 'easeInOut',            }}

            }}
          />
                strokeDasharray: [0, 100, 0],              }}              stroke="url(#neuralGradient)"

              strokeWidth="1"
              opacity="0 && 0.1"
              animate={{
                opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
                strokeDasharray: [0, 100, 0]
              transition={{

              strokeWidth="1"
              opacity="0.1"
              animate={{
                opacity: [0.1, 0.3, 0.1];
                strokeDasharray: [0, 100, 0]
                duration: 4 + Math.random() * 2
                repeat: Infinity
                delay: Math.random() * 2
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
              transition={{


              }}
            />;


                ease: 'easeInOut',              }}

              }}

            />
          ))}
        </svg>
      </div>

      {/* Content */}

      {/* Content */}


      {/* Content */}
      <div className='relative z-40'>{children}</div>;
    </div>;
  )duration: 4 + Math.random () * 2,repeat: Infinity,}}
            />;
          ))}
      {/* Content */}
      <div className='relative z-40'>{children}</div>;
    </div>;
  )export default UltraAdvancedFuturisticBackgroundV2;<div className="relative z-40">;
        {children}
      </div>
    </div>
  )
};

export default UltraAdvancedFuturisticBackgroundV2;
                delay: Math.random () * 2,
                ease: 'easeInOut',              }}                ease: "easeInOut";
              }}
            />))}
        </svg>;
      </div>;
      {/* Content */}
      <div className='relative z - 40'>{children}</div>;
    </div>);
}
;
export default UltraAdvancedFuturisticBackgroundV2;    </div>);
}
;
export default UltraAdvancedFuturisticBackgroundV2;
;

};

export default UltraAdvancedFuturisticBackgroundV2;

              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2}
ease: 'easeInOut'}
              }}
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut'              }}

              }}

                ease: 'easeInOut'              }}

              }}

               />
          ))}

      {/* Content */}
<div className='relative z-40'    />{children}</div>
    </div>
  )
}
export default UltraAdvancedFuturisticBackgroundV2;

export default UltraAdvancedFuturisticBackgroundV2;
export default UltraAdvancedFuturisticBackgroundV2;

};
