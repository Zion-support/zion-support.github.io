'; import { cn }  from '@/lib/utils';export function GradientHeading({} children, ' variant = 'primary, size = '2xl, className = '', customGradient}) {} const gradients = {}; primary: '''';bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent,'' secondary: '''';bg-gradient-to-r from-zion-blue via-zion-cyan to-zion-purple bg-clip-text text-transparent,'' accent: '''';bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue bg-clip-text text-transparent,' custom: ''' customGradient ||'''';bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent'}  const getGradientClasses = () => {} return gradients[variant] }  const getSizeClasses = () => {} const sizes = {}; xs: 'text-xs,'' sm: 'text-sm,'' md: 'text-base,'' lg: 'text-lg,'' xl: 'text-xl', 2xl': 'text-2xl',3xl': 'text-3xl', 4xl': 'text-4xl',5xl': 'text-5xl', 6xl': 'text-6xl'} return sizes[size] }' return()'' <h1 ''' className={cn('''';font-bold leading-tight', getSizeClasses(), getGradientClasses(), className )}" > {children} </h1> ) };'
'; import { cn }  from '@/lib/utils';export function GradientHeading({} children, ' variant = 'primary, size = '2xl, className = '', customGradient}) {} const gradients = {}';;'; primary: '''';bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent,'' secondary: '''';bg-gradient-to-r from-zion-blue via-zion-cyan to-zion-purple bg-clip-text text-transparent,'' accent: '''';bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue bg-clip-text text-transparent,' custom: ''' customGradient ||'''';bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent'}  const getGradientClasses = () => {} return gradients[variant] }  const getSizeClasses = () => {} const sizes = {}';;'; xs: 'text-xs,'' sm: 'text-sm,'' md: 'text-base,'' lg: 'text-lg,'' xl: 'text-xl', 2xl': 'text-2xl',3xl': 'text-3xl', 4xl': 'text-4xl',5xl': 'text-5xl', 6xl': 'text-6xl'} return sizes[size] }'; return()'' <h1 ''' className={cn('''';font-bold leading-tight', getSizeClasses(), getGradientClasses(), className )}" > {children} </h1> ) }';;'

const GradientHeading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="GradientHeading - Zion Tech Group"
        description="Professional GradientHeading services by Zion Tech Group"
        keywords="gradientheading, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">GradientHeading</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional GradientHeading services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientHeading;