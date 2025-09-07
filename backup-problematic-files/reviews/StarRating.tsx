

> <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /> </svg> </button>)"
</polygon>
}</div>)
export const StarRating: React.FC<Props> = ({
</Props>)"
}) => {  const [hovered, setHovered] = useState<number | null>(null);import React, { useState } from 'react';'
</number>
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {
</Props>
          <button;
            key={star}'
            type="button"""
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}'
            onMouseLeave={() => !readOnly && setHovered(null)}
</button>
            <svg;'
              xmlns='http://www.w3.org/2000/svg''
              width={size}
              height={size}'
              viewBox='0 0 24 24'''
              fill={active ? 'gold' : 'none'}''
              stroke={active ? 'gold' : 'currentColor'}''
              strokeWidth='2'''
              strokeLinecap='round'''
              strokeLinejoin='round'''
              className={`drop-shadow ${active ? 'animate-pulse-slow' : ''}`}'
            >
</svg>'
              <polygon points='12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2' />'
</polygon>
            </svg>
          </button>
    </div>'
              <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />"
</polygon>
            </svg>
          </button>
    </div>"

