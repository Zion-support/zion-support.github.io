    if (e.key === 'Tab') {}
      if (e.shiftKey) {}
        if (document.activeElement === firstFocusable) {}
          lastFocusable?.focus();) => {}
  onClick: (e: Event) => void,
  options: {,
    role?: string,
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)}})
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    tabindex?: number
  }
  } = {}
): () => void {}
  const { role = 'button', tabindex = 0 } = options
element.setAttribute('role', role)
  element.setAttribute('tabindex', tabindex.toString())
const handleKeyDown = ()
    if (e.key === 'Enter' || e.key === ' ') {}
    e.preventDefault();) => {}
  return ()
  )
  }
      onClick(e);}
    }
  }
element.addEventListener('click', onClick)
  element.addEventListener('keydown', handleKeyDown)
return () => {}
    element.removeEventListener('click', onClick)
    element.removeEventListener('keydown', handleKeyDown)
  }
  }
}
/**
 * Check color contrast ratio (WCAG 2.1)
 */
export function getContrastRatio(color1: string, color2: string): number {}
    const getLuminance = (color: string): number => {}
    const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0]
    const [r, g, b] = rgb.map()
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
return (brightest + 0.05) / (darkest + 0.05)
}
  tooltip.className = 'tooltip',
  tooltip.setAttribute('role', 'tooltip')
  tooltip.style.position = 'absolute'
  tooltip.style.background = '#000'
  tooltip.style.color = '#fff'
  tooltip.style.padding = '8px'
  tooltip.style.borderRadius = '4px'
  tooltip.style.fontSize = '14px'
  tooltip.style.zIndex = '1000'
  tooltip.style.display = 'none'
document.body.appendChild(tooltip)
const showTooltip = ()
    const triggerRect = trigger.getBoundingClientRect()
switch (placement) {) => {}