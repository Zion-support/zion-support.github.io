import { forwardRef } from 'react'

const Input = forwardRef(({ 
  label, 
  error, 
  className = '', 
  ...props 
}, ref) => {
  const inputClasses = `w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
    error ? 'border-red-500' : 'border-white/20'
  } ${className}`
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-white font-semibold">
          {label} {props.required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        ref={ref}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input