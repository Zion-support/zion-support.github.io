interface LoadingSpinnerProps {},
      size?: 'sm' | 'md' | 'lg' | 'xl'""
  color?: 'primary' | 'secondary' | 'white'""
  text?: string;
fullScreen?: boolean
      const ModernLoadingSpinner: React.FC<LoadingSpinnerProps> = ({},)
      size = 'md', color = 'primary', text, fullScreen = false, _}) => {},"
      const  sizeClasses = {},
      sm: 'w-4 h-4',"
      md= 'w-8 h-8',"
      lg: 'w-12 h-12',"
      xl: 'w-16 h-16'},"
      const  colorClasses = {},
      primary: 'text-cyan-500',"
      secondary: 'text-purple-500',"
      white: 'text-white'},"
      const  spinner = ()
    <div  className ="flex flex-col items-center justify-center space-y-4"></div>"
      <div  className ="relative"></div>"
        {/* Outer ring */}
        <divclassName={`${sizeClasses[size]} ${colorClasses[color]} animate-spin rounded-full border-2 border-transparent border-t-current`},>
      style={{},
      animation: 'spin 1s linear infinite'}} />""
        {/* Inner ring */}
        <divclassName={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm']} ${colorClasses[color]} animate-spin rounded-full border-2 border-transparent border-b-current`},>""
      style={{},
      animation: 'spin 1.5s linear infinite reverse'}} />""
      </div>
      {text && ()}

            {text};

          </p>
        </div>
      )}
    </div>
  )


          </div>
        </div>
      </div>
    </>

        </div>;
      </div>;
    </>;,";
  ),";";
;"

export default ComponentsPage;'";'";"