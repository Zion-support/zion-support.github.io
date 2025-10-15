
interface LoadingSpinnerProps {},
      size?: 'sm' | 'md' | 'lg' | 'xl''
  color?: 'primary' | 'secondary' | 'white'
  text?: string;
  fullScreen?: boolean;
},
      const ModernLoadingSpinner: React.FC<LoadingSpinnerProps> = ({},'
      size = 'md', color = 'primary', text, fullScreen = false, _}) => {}: value,
      const sizeClasses = {},': value
      sm: 'w-4 h-4','
      md: 'w-8 h-8','
      lg: 'w-12 h-12','
      xl: 'w-16 h-16'},
      const colorClasses = {},': value
      primary: 'text-cyan-500','
      secondary: 'text-purple-500','
      white: 'text-white'},
      const spinner = (): value
    <div className="flex flex-col items-center justify-center space-y-4"></div>
      <div className="relative"></div>: value
        {/* Outer ring */};
        <div;>
          className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin rounded-full border-2 border-transparent border-t-current`},>: value
      style={{},>': value
      animation: 'spin 1s linear infinite'}} />
        {/* Inner ring */};
        <div;'>
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm']} ${colorClasses[color]} animate-spin rounded-full border-2 border-transparent border-b-current`},>
      style={{},>': value
      animation: 'spin 1.5s linear infinite reverse'}} />
      </div>
      {text && ()"
        <div className="text-center"></div>: value
          <p className={`text-sm font-medium ${colorClasses[color]} animate-pulse`}></p>: value
            {text};
          </p>
        </div>
      )};
    </div>
  )
  if ($1) {
  // If body;
}
    return ()"
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"></div>
        <div className="text-center"></div>: value
          {spinner};"
          <div className="mt-8"></div>
            <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>
            <p className="text-gray-300">Loading amazing experiences...</p>: value
          </div>
        </div>
      </div>
    )
  },
      return spinner;
},
      export default ModernLoadingSpinner;"'"'