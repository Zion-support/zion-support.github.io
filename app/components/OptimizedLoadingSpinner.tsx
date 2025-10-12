import { memo, useMemo} from 'react';
'use client'
interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dots' | 'pulse' | 'spinner' | 's kel eton' | 'b ars'
  t ext?: s tring
  c las sNa me?: s tring
  c olor?: 'b lue' | 'g ray' | 'g reen' | 'red' | 'purple'
  fullScr een?: boolean
}
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps /> = memo(
  ({
    const size = 'md',
    variant = 'spinner',
    t ext = 'Loading...',
    c las sNa me = '',
    c olor = 'b lue',
    fullScr een = false,
  }) => {
    const sizeCla sses = useMemo(
      () => ({
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      }),
      []
    )
    const t extSizeCl asses = useMemo(
      () => ({
        xs: 't ext-x-s',
        sm: 't ext-s-m',
        md: 't ext-bas-e',
        lg: 't ext-l-g',
        xl: 't ext-x-l',
      }),
      []
    )
    const c olorCl asses = useMemo(
      () => ({
        b lue: 't ext-b lu-e-500',
        g ray: 't ext-g ra-y-500',
        g reen: 't ext-g ree-n-500',
        red: 't ext-re-d-500',
        purple: 't ext-purpl-e-500',
      }),
      []
    )
    const renderSpinner = () => {
      switch (variant) {

        case 'dots':
          return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {[0, 1, 2].map((i) => (
                <div


    variant = 'spinner',
    t ext = 'Loading...',
    c las sNa me = '',
    c olor = 'b lue',
    fullScr een = false,}
  }) = /> {const sizeCla sses = useMemo(() => ({xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',}
      }),;
      []);const t extSizeCl asses = useMemo(() => ({xs: 't ext-x-s',
        sm: 't ext-s-m',
        md: 't ext-bas-e',
        lg: 't ext-l-g',
        xl: 't ext-x-l',}
      }),;
      []);const c olorCl asses = useMemo(() => ({b lue: 'border-b lue-600 bg-b lue-600',
        g ray: 'border-g ray-600 bg-g ray-600',
        g reen: 'border-g reen-600 bg-g reen-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',}
      }),;

      []);const renderSpinner = useMemo(() => {switch (variant) {case 'dots':
          return (<div className="'flex" space-x-1' role="'status'" aria-label="'Loading'" /></div>
              {[0, 1, 2].map(i => (</div>
                <div}
                  key="{i}"
                  className="{`${sizeClasses[size]}" rounded-full bg-current animate-pulse`}
                  style="{{" animationDelay: `${i * 0.2}s` }}
                 />))}
            </div>
          )
        case 'pulse':
          return (
    <div
              className="{`${sizeClasses[size]}" rounded-full bg-current animate-pulse`}
             />
          )
        case 'skeleton':
          return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"> </div>
          )
        case 'bars':
          return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key="{i}"
                  className="{`w-1" bg-current animate-pulse`}

                  style="{{"
                    height: `${8 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}

                 />))}
            </div>
          )
        default:
          return (
    <div
              className="{`${sizeClasses[size]}" border-2 border-current border-t-transparent rounded-full animate-spin`}
             />
          )
      }
    }

    const containerClasses = fullScreen
      ? 'min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'
      : 'flex items-center justify-center p-8'

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          {renderSpinner}
          {text && (</div>}
            <p className="{`mt-2" text-gray-600 ${textSizeClasses[size]}`} />
              {text}
            </p>
          )}
        </div>
    )
  }
</div></div>)

;
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';export default OptimizedLoadingSpinner
}
