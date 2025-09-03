
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,

        })}
    }}
        }
      });

      observer.observe({ entryTypes: ['navigation']   })}

  }, []);

  return null};






