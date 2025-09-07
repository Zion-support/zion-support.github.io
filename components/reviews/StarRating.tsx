 > <polygon points = \"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\"    /> </svg> </button>)})}</div>)}

export
  const StarRating: React.FC<Props    /> = ({ value, onChange, size = 24, readOnly    }) => {

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
    }return this.props.children
}"
 > <polygon points = \"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\"    /> </svg> </button>)})}</div>
export const StarRating: React.FC<Props    /> = ({ value, onChange, size = 24, readOnly    }) => {

const [hovered, setHovered]  =;}
  useState<number | null    />(null)type Props = {type Props = {export const StarRating: React.FC<Props    /> = ({ value, onChange, size = 24, readOnly }) =>
  const [hovered, setHovered]  = useState<number | null    />(null)type Props = {value: number,onChange: (val: number) => void,size?: number;}
  readOnly?: boolean;}

export const StarRating: React.FC<Props    />  = ({ value, onChange, size = 24, readOnly }) =>
  const stars = [1, 2, 3, 4, 5]
  return (<div className='flex items-center gap-1'    />
      {stars && stars.map(star = > ;}
  const active = (hovered ?? value) >= star;}
                    onMouseEnter = {() => !readOnly && setHovered(star)}
  return (<button
            key={star}"
            type=\'button\'
            className = {`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}
}import React, {;}
  useState } from 'react'
type Props = any
const stars = [1, 2, 3, 4, 5]
  return (<div className='flex items-center gap-1'    />
      {stars.map(star = > ;}
  const active = (hovered ?? value) >= star;}
            onMouseEnter={() => !readOnly && setHovered(star)}onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}
            aria-label={`${star} star`}
          >
            <svg
xmlns='http://www.w3.org/2000/svg'
              width={size}
              height={size}
              view_box='0 0 24 24'
              fill = {active ? 'gold' : 'none;}

"
export default StarRating;xmlns=\'http://www.w3.org/2000/svg\'
export const StarRating: React.FC<Props> = ({ value, onChange, size = 24, readOnly }) => {

class ErrorBoundary extends React.Component {
  constructor($2) {

    super(props)
    this.state = { hasError: false }
  static getDerivedStateFromError(error) {}
    return { hasError: true}
}
  componentDidCatch($2) {}
    console.error('Error caught by boundary:', error, errorInfo);}
  render($2) {
  if($2) {}
      return <div    />Something went wrong.</div>;}

    return this.props.children
}"
 > <polygon points=\"12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2\"    /> </svg> </button>)
})
}</div>)
}
type Props = {
  value: number,
  onChange: (val: number) => void,
  size?: number;}
  readOnly?: boolean}
}
export const StarRating: React.FC<Props    /> = ({ value, onChange, size = 24, readOnly    }) => {

const stars = [1, 2, 3, 4, 5]
  return (

          <button
            key={star}
            type="button"
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover: scale-110'}`}

import React, { useState } from 'react'
type Props = any
  const stars = [1, 2, 3, 4, 5]
  return (
<div className='flex items-center gap-1'>
      {stars.map(star => {
        const active = (hovered ?? value) >= star
            onMouseEnter={() => !readOnly && setHovered(star)}
origin/cursor/automate-test-improve-and-merge-code-2533

            onMouseLeave={() => !readOnly && setHovered(null)}
            onClick={() => !readOnly && onChange(star)}`
            aria-label={`${star} star`}
          >
              width={size}
              height={size}'
              view_box='0 0 24 24';'
              fill={active ? 'gold' : 'none'}

export default StarRating
"
              xmlns="http://www.w3.org/2000/svg"
              width={size}'
              stroke={active ? 'gold' : 'current_color'}'
              stroke_width='2';'
              stroke_linecap='round';'
              stroke_linejoin='round';'`
              className={`drop - shadow ${active ? 'animate - pulse - slow' : ''}`}
            >;'
              <polygon points='12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2' />
            </svg>
          </button>)
      })}

    </div>
  )
}
export default StarRating
origin/cursor/automate-test-improve-and-merge-code-2533

